const fs = require('fs');
const path = require('path');

const workflowsDir = path.join(__dirname, '..', 'workflows');
const rootDir = path.join(__dirname, '..');

const restoreStructure = () => {
    if (!fs.existsSync(workflowsDir)) {
        console.error('Workflows directory not found, no action needed.');
        return;
    }

    const originalCategories = [
        'analytics', 'api-webhooks', 'automation', 'communication', 
        'data-integration', 'data-transformation', 'document-processing'
    ];

    let movedCount = 0;
    originalCategories.forEach(category => {
        const sourcePath = path.join(workflowsDir, category);
        const destPath = path.join(rootDir, category);

        if (fs.existsSync(sourcePath)) {
            try {
                fs.renameSync(sourcePath, destPath);
                console.log(`Moved '${category}' back to project root.`);
                movedCount++;
            } catch (error) {
                console.error(`Error moving '${category}': ${error.message}`);
            }
        }
    });

    console.log(`\n--- Directory Restoration Complete ---`);
    console.log(`Moved ${movedCount} directories back to the project root.`);
};

restoreStructure();
