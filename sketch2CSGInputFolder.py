import sys
import os
import subprocess


root_folder = sys.argv[1]
solution_folder = os.path.join(sys.argv[2])

finalSolutions = sorted(os.listdir(solution_folder))

for i in range(len(finalSolutions)):
    
    file = finalSolutions[i]
    csg_cpp_command = os.path.join(root_folder, "csg_cpp_command")
    simplifiedSCAD = os.path.join(solution_folder, file, "sketch_final_simplified.scad")
    sketchFile = os.path.join(solution_folder, file, "inputFileInCSGSketchFormat.txt")
    csgTree = os.path.join(solution_folder, file, "csgTree")
    csgTreeSimple = os.path.join(solution_folder, file, "csgTreeSimple")
    nodeOccObj = os.path.join(solution_folder, file, "nodeOccObj.js")
    
    #./csg_cpp_command clean-csg  -e espilonValue -i filePathOfSCAD  -o newFilePathOfSCAD
    command1 = [csg_cpp_command, "clean-csg", "-e", "0.0001", "-i", os.path.join(solution_folder, file, "sketch_final.scad"), "-o", simplifiedSCAD]
    print(command1)
    subprocess.run(command1)
    
    # ./csg_cpp_command legacy-sketch-tree -i filePathOfSCAD -o outputPath.txt
    command2 = [csg_cpp_command, "legacy-sketch-tree", "-i", simplifiedSCAD,"-o", sketchFile]
    print(command2)
    subprocess.run(command2)
    
    # python sketch2CSGExperimental.py  inputFileInCSGSketchFormat csgInTreeFormatPath simplifiedSsgInTreeFormatPath geometry.js
    subprocess.run(["python3",os.path.join(root_folder,"sketch2CSGExperimental.py"), sketchFile, csgTree, csgTreeSimple, nodeOccObj])

