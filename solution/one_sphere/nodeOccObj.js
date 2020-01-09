/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addSphere();
myNode0.center.set(0.01544,0.0499,-0.00119);
myNode0.radius.set(5.0448191246069465);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-5.99995,-5.99995,-5.99995);
myNode1.point2.set(5.99995,5.99995,5.99995);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.innerTranslation.vector.set(0.0,0.0,0.0);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addCommonOperation();
myNode2.leftArg.set(myNode0);
myNode2.rightArg.set(myNode1);
myNode2.isVisible = true;


/*END Geometry Object Definition*/