/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-0.61091,-3.11254,-4.99995);
myNode0.point2.set(1.34877,0.8069299999999999,0.8792999999999997);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(0.3689300000000001,-1.152805,-2.060325);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-1.35479,-1.496,-2.94318);
myNode1.point2.set(0.6049100000000001,4.38317,0.97635);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(1.6694568005173018,0.47606844624381356,-0.11213259496499425);
myNode1.innerRotation.angle.set(1.73962665338171);
myNode1.innerTranslation.vector.set(-0.37493999999999994,1.4435850000000001,-0.9834149999999999);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addFuseOperation();
myNode2.leftArg.set(myNode0);
myNode2.rightArg.set(myNode1);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addBox();
myNode3.point1.set(-2.83801,-3.73506,-5.99995);
myNode3.point2.set(2.8380199999999998,3.7350400000000006,5.99995);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);
myNode3.innerTranslation.vector.set(4.999999999810711e-06,-9.999999999621423e-06,0.0);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addCommonOperation();
myNode4.leftArg.set(myNode2);
myNode4.rightArg.set(myNode3);
myNode4.isVisible = true;


/*END Geometry Object Definition*/