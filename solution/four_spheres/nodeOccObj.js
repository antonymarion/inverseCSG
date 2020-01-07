/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addSphere();
myNode0.center.set(0,1.49358,0);
myNode0.radius.set(1.6428390061110676);
myNode0.isVisible = False

/* définition du node n°1*/
const myNode1 = object.addSphere();
myNode1.center.set(0,0,0);
myNode1.radius.set(1.7921886061461276);
myNode1.isVisible = False

/* définition du node n°2*/
const myNode2 = object.addFuseOperation();
myNode2.leftArg.set(myNode0);
myNode2.rightArg.set(myNode1);
myNode2.isVisible = False

/* définition du node n°3*/
const myNode3 = object.addSphere();
myNode3.center.set(1.49358,0,1.49358);
myNode3.radius.set(1.045499880439974);
myNode3.isVisible = False

/* définition du node n°4*/
const myNode4 = object.addCutOperation();
myNode4.leftArg.set(myNode2);
myNode4.rightArg.set(myNode3);
myNode4.isVisible = False

/* définition du node n°5*/
const myNode5 = object.addSphere();
myNode5.center.set(2.09101,4.92881,1.19486);
myNode5.radius.set(3.2857723597352266);
myNode5.isVisible = False

/* définition du node n°6*/
const myNode6 = object.addFuseOperation();
myNode6.leftArg.set(myNode4);
myNode6.rightArg.set(myNode5);
myNode6.isVisible = True


/*END Geometry Object Definition*/