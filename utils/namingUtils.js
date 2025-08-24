const fs = require('fs');
const path = require('path');

// Load the integration definitions from the JSON file
const definitionsPath = path.join(__dirname, '..', 'not-workflow', 'context', 'def_categories.json');
const integrationDefinitions = JSON.parse(fs.readFileSync(definitionsPath, 'utf8'));

// Create a Set for fast lookups of known integration names (case-insensitive)
const knownIntegrations = new Set(integrationDefinitions.map(def => def.integration.toLowerCase()));

// Special cases that should be fully capitalized
const acronyms = new Set(['ai', 'aws', 'crm', 'devops', 'api', 'ftp', 'html', 'http', 'json', 'llm', 'mqtt', 'ocr', 'pov', 'rag', 'rss', 's3', 'ses', 'sns', 'sqs', 'xml', 'yt']);

const generateHumanReadableName = (filename) => {
    // 1. Remove ID and file extension
    let name = filename.replace(/^\d+[-_]/, '').replace(/\.json$/, '');

    // 2. Replace separators with spaces
    name = name.replace(/[-_]/g, ' ');

    // 3. Apply intelligent capitalization
    return name.split(' ').map(word => {
        const lowerWord = word.toLowerCase();
        // If it's a known integration, use the exact casing from our definitions
        for (const def of integrationDefinitions) {
            if (def.integration.toLowerCase() === lowerWord) {
                return def.integration;
            }
        }
        // If it's a known acronym, uppercase it
        if (acronyms.has(lowerWord)) {
            return lowerWord.toUpperCase();
        }
        // Otherwise, just capitalize the first letter
        return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
    }).join(' ');
};

module.exports = { generateHumanReadableName };
