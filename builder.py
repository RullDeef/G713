import os
from glob import glob

os.makedirs("build", exist_ok=True)
output = open("./build/app.js", "wt")

for filename in glob("src/*", recursive=True):
    with open(filename, "rt") as file:
        output.write("".join(file))

output.close()
