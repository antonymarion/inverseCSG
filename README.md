# inverseCSG
[![Build Status](https://travis-ci.com/antonymarion/inverseCSG.svg?branch=master)](https://travis-ci.com/antonymarion/inverseCSG)

The goal of this repo is to adapt the inverseCSG method to JS CAD Libs like node-occ

InverseCSG takes a tesselated mesh and computes a best CSG candidate.

For more details please refer to https://dl.acm.org/citation.cfm?id=3275006


Screenshots of example 39 - Solution available in solution folder


<p align="center">
   <b>3200 vertices, 6600 faces</b>
</p>
<p align="center">
   <img width="400" src="https://github.com/antonymarion/inverseCSG/raw/master/meshlab_box.png">
 </p>
  
<p align="center">
    <img width="400" src="https://github.com/antonymarion/inverseCSG/raw/master/meshlab_box_rear.png">
</p>


<p align="center">
 <b>150 items among following items (box, cylinder, sphere, fuse, common)</b>
</p>
<p align="center">
   <img width="400" src="https://github.com/antonymarion/inverseCSG/raw/master/nodeOCC_box.png">
</p>
<p align="center">
   <img width="400" src="https://github.com/antonymarion/inverseCSG/raw/master/nodeOCC_box_rear.png">
</p>


<p align="center">
 <b>4 pure-csg objects from the inverseCSG results</b>
</p>
<p align="center">
   <img width="400" src="https://github.com/antonymarion/inverseCSG/raw/master/4_0.jpeg">
</p>
<p align="center">
   <img width="400" src="https://github.com/antonymarion/inverseCSG/raw/master/0.jpeg">
</p>
<p align="center">
   <img width="400" src="https://github.com/antonymarion/inverseCSG/raw/master/1.jpeg">
</p>
<p align="center">
   <img width="400" src="https://github.com/antonymarion/inverseCSG/raw/master/2.jpeg">
</p>
<p align="center">
   <img width="400" src="https://github.com/antonymarion/inverseCSG/raw/master/6.jpeg">
</p>
<p align="center">
   <img width="400" src="https://github.com/antonymarion/inverseCSG/raw/master/3.jpeg">
</p>
<p align="center">
   <img width="400" src="https://github.com/antonymarion/inverseCSG/raw/master/4.jpeg">
</p>
<p align="center">
   <img width="400" src="https://github.com/antonymarion/inverseCSG/raw/master/5.jpeg">
</p>
<p align="center">
   <b> First List of tested models</b>
</p>
<p align="center">
   <img width="400" src="https://github.com/antonymarion/inverseCSG/raw/master/benchmark.jpg">
</p>

inversecsg code from paper https://dl.acm.org/citation.cfm?id=3275006 adapted to generate node-occ-csg-editor object script

Please read the READMEs.

original README gives the installation instructions.

others give a sample pipeline from a 3D Mesh (off format) into a pure js node-occ script

Others papers+code freely available online:

* https://www.sciencedirect.com/science/article/pii/S0010448516000038
https://github.com/mafried/csg_playground/tree/wscg18

* http://wscg.zcu.cz/WSCG2018/2018-papers/!!_CSRN-2802-5.pdf
https://github.com/mafried/csg_playground/tree/wscg18


* https://dl.acm.org/citation.cfm?id=3321771
https://github.com/mafried/csg_playground/tree/pointselection


* https://kevinkaixu.net/papers/wu_sgp18_csg.pdf

* https://dl.acm.org/citation.cfm?id=3236794
https://github.com/uwplse/reincarnate-aec

