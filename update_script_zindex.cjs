const fs = require('fs');

const data = fs.readFileSync('/Users/thomasdascalu/Desktop/slice nutrizione/src/components/Services.jsx', 'utf8');

const regex = /className="fixed inset-0 z-\[200\] flex items-end justify-center"/g;
const replaceWith = `className="fixed inset-0 z-[1000] flex items-end justify-center"`;

const updatedData = data.replace(regex, replaceWith);

fs.writeFileSync('/Users/thomasdascalu/Desktop/slice nutrizione/src/components/Services.jsx', updatedData, 'utf8');

