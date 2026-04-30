import re

with open('src/components/Methodology.jsx', 'r') as f:
    methodology = f.read()

with open('src/components/MetodoSlicePage.jsx', 'r') as f:
    metodo = f.read()

# We want to replace the `.map((item, index) => (` block in MetodoSlicePage with the one from Methodology
pattern = re.compile(r'\.map\(\(item, index\) => \([\s\S]*?(?=\s*\}\)\}\s*<\/div>\s*<\/div>\s*<\/section>)', re.MULTILINE)
match_meth = pattern.search(methodology)

if match_meth:
    print("Found match in Methodology")
    
    # In MetodoSlicePage, the section ends differently (it has a PERCHÉ LE DIETE FALLISCONO section right after)
    pattern_metodo = re.compile(r'\.map\(\(item, index\) => \([\s\S]*?(?=\s*\}\)\}\s*<\/div>\s*<\/div>\s*<\/section>\s*\{\/\* ═══════════════ PERCHÉ LE DIETE FALLISCONO)', re.MULTILINE)
    
    if pattern_metodo.search(metodo):
        new_metodo = pattern_metodo.sub(match_meth.group(0), metodo)
        with open('src/components/MetodoSlicePage.jsx', 'w') as f:
            f.write(new_metodo)
        print("Replaced!")
    else:
        print("Didn't match the target in MetodoSlicePage!")
else:
    print("Didn't match anything in Methodology")
