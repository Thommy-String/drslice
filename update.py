import re

with open('src/App.jsx', 'r') as f:
    content = f.read()

new_homepage = """function HomePage() {
  return (
    <>
      <HeroSection />
      
      <main>
        <Methodology />
        <Services />
        <AboutMe />
        <Locations />
      </main>
    </>
  )
}"""

content = re.sub(r'function HomePage\(\) \{.*?\n\}', new_homepage, content, flags=re.DOTALL)

with open('src/App.jsx', 'w') as f:
    f.write(content)
