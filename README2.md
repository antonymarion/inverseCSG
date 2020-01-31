# Préparation des donnés

Utiliser meshFix ou meshLab ou des librairies python/c++ pour enlever les singularités. 

- Merge close vertices
- Remove duplicated faces
- Remove duplicated vertices
- Remove faces from non manifold edges
- Select self intersecting faces -> remove
- Remove zero Area faces
- Remove vertices wrt quality


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

# Conversion d'un jeu de données solution au format node-occ
```python sketch2CSGInputFolder.py rootFolderOfCsgCppCommandBinary pathOfSolutionFolder```

# Conversion d'un nuage de point en CSG
```
micmac tequila . . inputPointCloud.ply
manifold_master -i input.ply -o manifold.ply
convert manifold.ply into off 
eventually filter isolated faces or vertices and remove duplicated faces/vertices with MeshLab
python run.py build manifold
```
