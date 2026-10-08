with open('src/app-bundle.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Locate the Category & Frequency section in the modal
start_str = "/* Settings: Category & Frequency */"
pos_start = content.find(start_str)
assert pos_start != -1, "start_str not found"

end_str = "/* Parsed Real-time Preview */"
pos_end = content.find(end_str, pos_start)
assert pos_end != -1, "end_str not found"

# Delete the section
content = content[:pos_start] + content[pos_end:]
print("Deleted Settings: Category & Frequency block successfully!")

with open('src/app-bundle.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Saved changes to src/app-bundle.js")
