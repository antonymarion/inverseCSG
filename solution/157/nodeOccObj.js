/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addCylinder();
myNode0.point1.set(1.078,3.327,-2.99995);
myNode0.point2.set(1.078,3.327,2.99995);
myNode0.radius.set(0.502);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(1.081,-3.326,5e-05);
myNode1.point2.set(1.081,-3.326,2.9999499999999997);
myNode1.radius.set(0.498);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(0.002,-0.01,-2.99995);
myNode2.point2.set(0.002,-0.01,-5.000000000032756e-05);
myNode2.radius.set(4.991);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(3.497,-0.003,5e-05);
myNode3.point2.set(3.497,-0.003,2.9999499999999997);
myNode3.radius.set(0.496);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addFuseOperation();
myNode4.leftArg.set(myNode2);
myNode4.rightArg.set(myNode3);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(-1.075,-3.329,-19);
myNode5.point2.set(-1.075,-3.329,19);
myNode5.radius.set(0.996);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addCylinder();
myNode6.point1.set(-1.081,3.325,-19);
myNode6.point2.set(-1.081,3.325,19);
myNode6.radius.set(0.996);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addFuseOperation();
myNode7.leftArg.set(myNode5);
myNode7.rightArg.set(myNode6);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addCutOperation();
myNode8.leftArg.set(myNode4);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addCylinder();
myNode9.point1.set(0.032,0.015,5e-05);
myNode9.point2.set(0.032,0.015,2.4999499999999997);
myNode9.radius.set(1.992);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10_1 = myNode0.clone();
myNode10_1.isVisible = false;
const myNode10_2 = object.addFuseOperation();
myNode10_2.leftArg.set(myNode10_1);
myNode10_2.rightArg.set(myNode1);
myNode10_2.isVisible = false;
const myNode10_3 = object.addFuseOperation();
myNode10_3.leftArg.set(myNode10_2);
myNode10_3.rightArg.set(myNode8);
myNode10_3.isVisible = false;
myNode10 = object.addFuseOperation();
myNode10.leftArg.set(myNode10_3);
myNode10.rightArg.set(myNode9);
myNode10.isVisible = false;
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addCylinder();
myNode11.point1.set(2.83,2.059,-3);
myNode11.point2.set(2.83,2.059,0);
myNode11.radius.set(0.992);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(2.837,-2.072,-3);
myNode12.point2.set(2.837,-2.072,19);
myNode12.radius.set(0.997);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addCylinder();
myNode13.point1.set(-3.496,-0.013,-3);
myNode13.point2.set(-3.496,-0.013,19);
myNode13.radius.set(0.997);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(0.004,0.004,-3);
myNode14.point2.set(0.004,0.004,2.5);
myNode14.radius.set(1.495);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15_1 = myNode11.clone();
myNode15_1.isVisible = false;
const myNode15_2 = object.addFuseOperation();
myNode15_2.leftArg.set(myNode15_1);
myNode15_2.rightArg.set(myNode12);
myNode15_2.isVisible = false;
const myNode15_3 = object.addFuseOperation();
myNode15_3.leftArg.set(myNode15_2);
myNode15_3.rightArg.set(myNode13);
myNode15_3.isVisible = false;
myNode15 = object.addFuseOperation();
myNode15.leftArg.set(myNode15_3);
myNode15.rightArg.set(myNode14);
myNode15.isVisible = false;
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addCutOperation();
myNode16.leftArg.set(myNode10);
myNode16.rightArg.set(myNode15);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addCylinder();
myNode17.point1.set(-2.835,-2.058,5e-05);
myNode17.point2.set(-2.835,-2.058,2.9999499999999997);
myNode17.radius.set(0.503);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(-2.834,2.051,5e-05);
myNode18.point2.set(-2.834,2.051,2.9999499999999997);
myNode18.radius.set(0.497);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19_1 = myNode16.clone();
myNode19_1.isVisible = false;
const myNode19_2 = object.addFuseOperation();
myNode19_2.leftArg.set(myNode19_1);
myNode19_2.rightArg.set(myNode17);
myNode19_2.isVisible = false;
myNode19 = object.addFuseOperation();
myNode19.leftArg.set(myNode19_2);
myNode19.rightArg.set(myNode18);
myNode19.isVisible = false;
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addBox();
myNode20.point1.set(-5.99995,-5.99995,-3.59995);
myNode20.point2.set(5.99995,5.99995,3.59995);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);
myNode20.innerTranslation.vector.set(0.0,0.0,0.0);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addCommonOperation();
myNode21.leftArg.set(myNode19);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = true;


/*END Geometry Object Definition*/