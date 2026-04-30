import re

with open('src/components/Methodology.jsx', 'r') as f:
    methodology = f.read()

with open('src/components/MetodoSlicePage.jsx', 'r') as f:
    metodo = f.read()

# Extract from Methodology
pattern_meth = re.compile(r"\{\[\s*\{\s*step: '01',[\s\S]*?(?=\s*\}\)\}\s*<\/div>\s*<div className='mt-16 text-center'>)", re.MULTILINE)
match_meth = pattern_meth.search(methodology)

if match_meth:
    print("Found match in Methodology")
    replacement = match_meth.group(0)
    
    # Target in MetodoSlicePage
    pattern_metodo = re.compile(r"\{\[\s*\{\s*step: '01',[\s\S]*?(?=\s*\}\)\}\s*<\/div>\s*<\/div>\s*<\/section>\s*\{\/\* ═══════════════ PERCHÉ LE DIETE FALLISCONO ═══════════════ \*\/\})", re.MULTILINE)
    match_metodo = pattern_metodo.search(metodo)
    
    if match_metodo:
        new_metodo = metodo[:match_metodo.start()] + replacement + metodo[match_metodo.end():]
        with open('src/components/MetodoSlicePage.jsx', 'w') as f:
            f.write(new_metodo)
        print("Replaced successfully!")
    else:
        print("Didn't match the target in MetodoSlicePage!")
else:
    print("Didn't match anything in Methodology")
