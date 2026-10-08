with open('src/app-bundle.js', 'r', encoding='utf-8') as f:
    content = f.read()

pos_mn = content.find('Mn = [')
print('Mn pos:', pos_mn)
print(content[pos_mn:pos_mn+2000])

pos_nn = content.find('Nn = [')
print('Nn pos:', pos_nn)
print(content[pos_nn:pos_nn+2000])
