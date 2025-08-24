const fs = require('fs');
const path = require('path');

const premiumDir = path.join(__dirname, '..', 'workflows', 'Premium Automations');

const fixExtensions = () => {
    if (!fs.existsSync(premiumDir)) {
        console.error('Premium Automations directory not found!');
        return;
    }

    let filesRenamed = 0;
    const premiumCategories = fs.readdirSync(premiumDir).filter(file => 
        fs.statSync(path.join(premiumDir, file)).isDirectory()
    );

    premiumCategories.forEach(category => {
        const categoryPath = path.join(premiumDir, category);
        fs.readdirSync(categoryPath).forEach(file => {
            if (file.endsWith('.txt')) {
                const oldPath = path.join(categoryPath, file);
                const newPath = path.join(categoryPath, file.replace('.txt', '.json'));
                fs.renameSync(oldPath, newPath);
                filesRenamed++;
            }
        });
    });

    console.log(`\n--- File Extension Fix Complete ---`);
    console.log(`Renamed ${filesRenamed} files from .txt to .json.`);
};

fixExtensions();

