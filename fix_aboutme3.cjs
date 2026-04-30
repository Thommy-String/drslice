const fs = require('fs')
const file = 'src/components/AboutMe.jsx'
let content = fs.readFileSync(file, 'utf8')

content = content.replace(
  '<div className="max-w-6xl mx-auto md:px-6 relative z-10">',
  '<div className="max-w-6xl mx-auto relative z-10">'
)
content = content.replace(
  '<div className="flex flex-col gap-12 lg:gap-16 lg:flex-row lg:items-center">',
  '<div className="flex flex-col gap-12 lg:gap-16 lg:flex-row lg:items-center px-0 md:px-6">'
)

fs.writeFileSync(file, content)
