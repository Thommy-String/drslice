const fs = require('fs');

const methodology = fs.readFileSync('src/components/Methodology.jsx', 'utf-8');
let metodo = fs.readFileSync('src/components/MetodoSlicePage.jsx', 'utf-8');

const regexMethodology = /\{\[\s*\{\s*step: '01',[\s\S]*?(?=\s*\}\)\}\s*<\/div>\s*<\/div>\s*<\/section>)/;
const matchMethodology = methodology.match(regexMethodology);

const regexMetodo = /\{\[\s*\{\s*step: '01',[\s\S]*?(?=\s*\}\)\}\s*<\/div>\s*<\/div>\s*<\/section>\s*\{\/\* ═══════════════ PERCHÉ LE DIETE FALLISCONO ═══════════════ \*\/\})/;


if (matchMethodology) {
    metodo = metodo.replace(regexMetodo, matchMethodology[0]);
    fs.writeFileSync('src/components/MetodoSlicePage.jsx', metodo);
    console.log('Successfully replaced whole map block');
} else {
    console.log('Failed to find match');
}
