/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addSphere();
myNode0.center.set(2.09101,4.92881,1.19486);
myNode0.radius.set(3.2857723597352266);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addSphere();
myNode1.center.set(0,0,0);
myNode1.radius.set(1.7921886061461276);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addSphere();
myNode2.center.set(0,1.49358,0);
myNode2.radius.set(1.6428390061110676);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addFuseOperation();
myNode3.leftArg.set(myNode1);
myNode3.rightArg.set(myNode2);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addSphere();
myNode4.center.set(1.49358,0,1.49358);
myNode4.radius.set(1.045499880439974);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addCutOperation();
myNode5.leftArg.set(myNode3);
myNode5.rightArg.set(myNode4);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addFuseOperation();
myNode6.leftArg.set(myNode0);
myNode6.rightArg.set(myNode5);
myNode6.isVisible = true;


/*END Geometry Object Definition*/