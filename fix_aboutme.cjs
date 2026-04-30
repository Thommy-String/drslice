const fs = require('fs')
const file = 'src/components/AboutMe.jsx'
let content = fs.readFileSync(file, 'utf8')

content = content.replace(
  '<div className="max-w-6xl mx-auto px-6 relative z-10">',
  '<div className="max-w-6xl mx-auto md:px-6 relative z-10">'
)

content = content.replace(
  '<div className="lg:w-4/5">',
  '<div className="lg:w-4/5 px-6 md:px-0">'
)

fs.writeFileSync(file, content)
