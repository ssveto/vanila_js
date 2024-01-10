
import shutil, os, re

##/[^y2mate.is\s\-\s](\w+\s)+\w+(?=\-)/gmi

songPattern = re.compile(r'[^y2mate.is\s\-\s](\w+\s)+\w+(?=\-)')

for songsName in os.listdir("."):
    mo = songPattern.search(songsName)

    if mo == None:
        continue

    
    onlyName = mo.group()

    finalP = onlyName + ".mp3"

    absWorkingDir = os.path.abspath(".")
    songsName = os.path.join(absWorkingDir, songsName)
    finalP = os.path.join(absWorkingDir, finalP)


    print(f'Renaming"{songsName}" to "{finalP}"...')
    shutil.move(songsName, finalP)