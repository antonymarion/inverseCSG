/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-1.45148,-4.3545,-2.90307);
myNode0.point2.set(1.4515099999999999,4.354509999999999,2.90309);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(1.6694568005173018,0.47606844624381356,-0.11213259496499425);
myNode0.innerRotation.angle.set(1.73962665338171);
myNode0.isVisible = False

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-4.20403,-4.21195,-5.99995);
myNode1.point2.set(4.20405,4.21194,5.99995);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.isVisible = False

/* définition du node n°2*/
const myNode2 = object.addCommonOperation();
myNode2.leftArg.set(myNode0);
myNode2.rightArg.set(myNode1);
myNode2.isVisible = True


/*END Geometry Object Definition*/