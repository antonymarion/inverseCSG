#!/usr/bin/env sh
# TO be used with https://github.com/yorikvanhavre/openscad-thumbnailers and openSCAD for thumbnails generation of .scad result files

for filename in /$1/*.scad; do
        /usr/bin/openscad  --colorscheme="Cornfield" --imgsize="200,200" -o "tbnail"+$filename+".png" filename
done
