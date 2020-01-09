/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addSphere();
myNode0.center.set(0,3.33638,0);
myNode0.radius.set(3.336285359497895);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addSphere();
myNode1.center.set(0,0,0);
myNode1.radius.set(3.336285359497895);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addFuseOperation();
myNode2.leftArg.set(myNode0);
myNode2.rightArg.set(myNode1);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addBox();
myNode3.point1.set(0,-3.33638,-5e-06);
myNode3.point2.set(3.00274,0.6672799999999999,2.669105);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);
myNode3.innerTranslation.vector.set(1.50137,-1.3345500000000001,1.33455);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addCutOperation();
myNode4.leftArg.set(myNode2);
myNode4.rightArg.set(myNode3);
myNode4.isVisible = true;


/*END Geometry Object Definition*/