const fs = require('fs');
const path = require('path');

console.log("Starting validation...");

const locales = ['en', 'pt'];

locales.forEach(locale => {
    const filePath = path.join(process.cwd(), 'lib/i18n/locales', `${locale}.json`);
    try {
        if (!fs.existsSync(filePath)) {
            console.error(`❌ ${locale}.json does not exist at ${filePath}`);
            return;
        }
        const content = fs.readFileSync(filePath, 'utf8');
        JSON.parse(content);
        console.log(`✅ ${locale}.json is valid`);
    } catch (error) {
        console.error(`❌ ${locale}.json is INVALID:`, error.message);
    }
});

console.log("Validation finished.");
