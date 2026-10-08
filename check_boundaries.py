# Python script to update Pn and An in src/app-bundle.js
import re

with open('src/app-bundle.js', 'r', encoding='utf-8') as f:
    bundle = f.read()

# Let's inspect the exact boundaries of Pn and An
pos_pn_start = bundle.find('Pn = ({')
pos_pn_end = bundle.find('Fn = ({', pos_pn_start)
if pos_pn_end == -1: pos_pn_end = bundle.find('Fn =', pos_pn_start)

pos_an_start = bundle.find('An = ({')
pos_an_end = bundle.find('jn = ({', pos_an_start)

print(f"Pn: {pos_pn_start} -> {pos_pn_end} (length: {pos_pn_end - pos_pn_start})")
print(f"An: {pos_an_start} -> {pos_an_end} (length: {pos_an_end - pos_an_start})")
