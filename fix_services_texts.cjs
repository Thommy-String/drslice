const fs = require('fs')

const servicesFile = '/Users/thomasdascalu/Desktop/slice nutrizione/src/components/Services.jsx'
let content = fs.readFileSync(servicesFile, 'utf8')

// Update labels from text-[10px] to text-xs
content = content.replace(/text-\[10px\] font-bold uppercase tracking-wider/g, 'text-xs font-black uppercase tracking-wider')

// Update paragraphs inside the detail cards from text-xs to text-sm
content = content.replace(/<p className="text-xs text-slate-600 leading-relaxed mt-1">\{service.details.cosè\}<\/p>/g, '<p className="text-sm text-slate-600 leading-relaxed mt-2">{service.details.cosè}</p>')
content = content.replace(/<p className="text-xs text-slate-600 leading-relaxed mt-1">\{service.details.comeFunziona\}<\/p>/g, '<p className="text-sm text-slate-600 leading-relaxed mt-2">{service.details.comeFunziona}</p>')

// Update list items inside the detail cards from text-xs to text-sm
content = content.replace(/<li key=\{i\} className="flex items-start gap-2 text-xs text-slate-600">/g, '<li key={i} className="flex items-start gap-2 text-sm text-slate-600">')

// Update note box text size
content = content.replace(/text-xs text-amber-800 font-medium leading-relaxed/g, 'text-sm text-amber-800 font-medium leading-relaxed')

// Update target ('A chi si rivolge') box
content = content.replace(/text-\[10px\] \$\{colorSet.accent\}/g, 'text-xs ${colorSet.accent}')
content = content.replace(/<p className="mt-1 text-slate-600">\{service.target\}<\/p>/g, '<p className="mt-2 text-sm text-slate-600">{service.target}</p>')

// Update main descriptions
content = content.replace(/text-sm text-slate-500 leading-relaxed mb-5/g, 'text-base text-slate-600 leading-relaxed mb-5')
content = content.replace(/text-sm text-slate-500 leading-relaxed mb-4/g, 'text-base text-slate-600 leading-relaxed mb-4')

// Update the details content inside the generic components
content = content.replace(/p-3\.5 rounded-xl bg-slate-50/g, 'p-5 rounded-xl bg-slate-50') // Give it more padding for bigger text

fs.writeFileSync(servicesFile, content, 'utf8')
