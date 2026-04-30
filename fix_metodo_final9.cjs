const fs = require('fs');

const methodology = fs.readFileSync('src/components/Methodology.jsx', 'utf-8');
let metodo = fs.readFileSync('src/components/MetodoSlicePage.jsx', 'utf-8');

const regexMethodology = /\{\s*step: '01',[\s\S]*?(?=\s*\}\)\}\s*<\/div>)/;
const matchMethodology = methodology.match(regexMethodology);

const regexMetodo = /\{\s*step: '01',[\s\S]*?(?=\s*\}\)\}\s*<\/div>)/;


if (matchMethodology) {
    metodo = metodo.replace(regexMetodo, matchMethodology[0]);
    fs.writeFileSync('src/components/MetodoSlicePage.jsx', metodo);
    console.log('Successfully replaced whole map block');
} else {
    console.log('Failed to find match');
}
