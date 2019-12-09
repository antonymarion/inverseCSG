# Processus de conversion complète en csg
```bash
python run_test.py nameOfTest
```

ou


```bash
./csg_cpp_command test -n nameOfTest
```

ensuite conversion en format Sketch tu fichier SCAD


```bash
./csg_cpp_command legacy-sketch-tree -i filePathOfSCAD -o outputPath.txt
```


ensuite simplification de l'arbre de CSGs
=> Attention au choix de Epsilon
```bash
./csg_cpp_command clean-csg  -e espilonValue -i filePathOfSCAD  -o newFilePathOfSCAD
```
```bash
./csg_cpp_command legacy-sketch-tree -i newFilePathOfSCAD -o outputPath.txt
```
```bash
python sketch2CSGExperimental.py  inputFileInCSGSketchFormat csgInTreeFormatPath simplifiedSsgInTreeFormatPath geometry.js
```
