/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.99995,-5.99995,-3.59995);
myNode0.point2.set(11.9999,11.9999,7.1999);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(-2.834,2.051,5e-05);
myNode1.point2.set(0,0,2.9999);
myNode1.radius.set(0.497);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(-2.835,-2.058,5e-05);
myNode2.point2.set(0,0,2.9999);
myNode2.radius.set(0.503);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(1.078,3.327,-2.99995);
myNode3.point2.set(0,0,5.9999);
myNode3.radius.set(0.502);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(3.497,-0.003,5e-05);
myNode4.point2.set(0,0,2.9999);
myNode4.radius.set(0.496);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(0.002,-0.01,-2.99995);
myNode5.point2.set(0,0,2.9999);
myNode5.radius.set(4.991);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);

/* définition du node n°6*/
const myNode6 = object.addFuseOperation();
myNode6.leftArg.set(myNode4);
myNode6.rightArg.set(myNode5);

/* définition du node n°7*/
const myNode7 = object.addCylinder();
myNode7.point1.set(-1.081,3.325,-19);
myNode7.point2.set(0,0,38);
myNode7.radius.set(0.996);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);

/* définition du node n°8*/
const myNode8 = object.addCylinder();
myNode8.point1.set(-1.075,-3.329,-19);
myNode8.point2.set(0,0,38);
myNode8.radius.set(0.996);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);

/* définition du node n°9*/
const myNode9 = object.addFuseOperation();
myNode9.leftArg.set(myNode7);
myNode9.rightArg.set(myNode8);

/* définition du node n°10*/
const myNode10 = object.addCutOperation();
myNode10.leftArg.set(myNode6);
myNode10.rightArg.set(myNode9);

/* définition du node n°11*/
const myNode11 = object.addCylinder();
myNode11.point1.set(1.081,-3.326,5e-05);
myNode11.point2.set(0,0,2.9999);
myNode11.radius.set(0.498);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(0.032,0.015,5e-05);
myNode12.point2.set(0,0,2.4999);
myNode12.radius.set(1.992);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);

/* définition du node n°13*/
const myNode13_1 = object.addFuseOperation();
myNode13_1.leftArg.set(myNode3);
myNode13_1.rightArg.set(myNode3);
const myNode13_2 = object.addFuseOperation();
myNode13_2.leftArg.set(myNode13_1);
myNode13_2.rightArg.set(myNode10);
const myNode13_3 = object.addFuseOperation();
myNode13_3.leftArg.set(myNode13_2);
myNode13_3.rightArg.set(myNode11);
myNode13 = object.addFuseOperation();
myNode13.leftArg.set(myNode13_3);
myNode13.rightArg.set(myNode12);

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(-3.496,-0.013,-3);
myNode14.point2.set(0,0,22);
myNode14.radius.set(0.997);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);

/* définition du node n°15*/
const myNode15 = object.addCylinder();
myNode15.point1.set(2.837,-2.072,-3);
myNode15.point2.set(0,0,22);
myNode15.radius.set(0.997);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(0.004,0.004,-3);
myNode16.point2.set(0,0,5.5);
myNode16.radius.set(1.495);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);

/* définition du node n°17*/
const myNode17 = object.addCylinder();
myNode17.point1.set(2.83,2.059,-3);
myNode17.point2.set(0,0,3);
myNode17.radius.set(0.992);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);

/* définition du node n°18*/
const myNode18_1 = object.addFuseOperation();
myNode18_1.leftArg.set(myNode14);
myNode18_1.rightArg.set(myNode14);
const myNode18_2 = object.addFuseOperation();
myNode18_2.leftArg.set(myNode18_1);
myNode18_2.rightArg.set(myNode15);
const myNode18_3 = object.addFuseOperation();
myNode18_3.leftArg.set(myNode18_2);
myNode18_3.rightArg.set(myNode16);
myNode18 = object.addFuseOperation();
myNode18.leftArg.set(myNode18_3);
myNode18.rightArg.set(myNode17);

/* définition du node n°19*/
const myNode19 = object.addCutOperation();
myNode19.leftArg.set(myNode13);
myNode19.rightArg.set(myNode18);

/* définition du node n°20*/
const myNode20_1 = object.addFuseOperation();
myNode20_1.leftArg.set(myNode1);
myNode20_1.rightArg.set(myNode1);
const myNode20_2 = object.addFuseOperation();
myNode20_2.leftArg.set(myNode20_1);
myNode20_2.rightArg.set(myNode2);
myNode20 = object.addFuseOperation();
myNode20.leftArg.set(myNode20_2);
myNode20.rightArg.set(myNode19);

/* définition du node n°21*/
const myNode21 = object.addCommonOperation();
myNode21.leftArg.set(myNode0);
myNode21.rightArg.set(myNode20);
/*END Geometry Object Definition*/