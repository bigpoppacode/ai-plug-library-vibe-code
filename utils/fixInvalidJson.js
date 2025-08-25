const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

async function findJsonFiles(dir) {
  let files = await readdir(dir);
  files = await Promise.all(files.map(async file => {
    const filePath = path.join(dir, file);
    const stats = await stat(filePath);
    if (stats.isDirectory()) {
      return findJsonFiles(filePath);
    }
    if (path.extname(filePath).toLowerCase() === '.json') {
      return filePath;
    }
    return null;
  }));

  return files.reduce((all, folderContents) => all.concat(folderContents), []).filter(Boolean);
}

async function fixJsonFile(filePath) {
  try {
    const content = await readFile(filePath, 'utf8');
    try {
      JSON.parse(content);
      // It's already valid, do nothing.
      return { status: 'valid', path: filePath };
    } catch (e) {
      // It's not valid, let's try to fix it.
      const lastBraceIndex = content.lastIndexOf('}');
      if (lastBraceIndex === -1) {
        return { status: 'failed', path: filePath, error: 'No closing brace found' };
      }
      
      const potentialJson = content.substring(0, lastBraceIndex + 1);
      try {
        JSON.parse(potentialJson);
        await writeFile(filePath, potentialJson, 'utf8');
        return { status: 'fixed', path: filePath };
      } catch (fixError) {
        // Also check for binary-like files that might have been mislabeled .json
        if (content.includes('\u0000')) {
             return { status: 'failed', path: filePath, error: 'File appears to be binary.' };
        }
        return { status: 'failed', path: filePath, error: `Failed to fix: ${fixError.message}` };
      }
    }
  } catch (readError) {
    if (readError.code === 'ENOENT') {
       return { status: 'failed', path: filePath, error: 'File not found.' };
    }
    // Attempt to read as binary if utf8 fails
    try {
        await readFile(filePath); // Read as buffer
        return { status: 'failed', path: filePath, error: 'File appears to be binary and cannot be read as text.' };
    } catch (binaryReadError) {
        return { status: 'failed', path: filePath, error: `Could not read file: ${readError.message}` };
    }
  }
}

async function main() {
  const workflowsDir = path.join(__dirname, '..', 'workflows');
  console.log('Starting JSON file cleanup in', workflowsDir);

  const jsonFiles = await findJsonFiles(workflowsDir);
  console.log(`Found ${jsonFiles.length} JSON files to check.`);

  const results = await Promise.all(jsonFiles.map(fixJsonFile));

  const fixedFiles = results.filter(r => r.status === 'fixed');
  const failedFiles = results.filter(r => r.status === 'failed');
  const validFiles = results.filter(r => r.status === 'valid');

  console.log(`\nCleanup complete.`);
  console.log(`Fixed ${fixedFiles.length} files.`);
  console.log(`Found ${validFiles.length} already valid files.`);
  if (failedFiles.length > 0) {
    console.log(`Failed to fix ${failedFiles.length} files:`);
    failedFiles.forEach(file => {
      console.log(`- ${file.path}: ${file.error}`);
    });
  }
}

main().catch(console.error);
