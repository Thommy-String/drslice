const fs = require('fs');
const file = '/Users/thomasdascalu/Desktop/slice nutrizione/src/components/Locations.jsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace('className="py-20 bg-slate-50/50" id="sedi"', 'className="py-20 bg-slate-50/50 relative z-10" id="sedi"');
fs.writeFileSync(file, content);
