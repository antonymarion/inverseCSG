/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addCylinder();
myNode0.point1.set(1.104,0,-4.99995);
myNode0.point2.set(1.104,0,2.53695);
myNode0.radius.set(0.222);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(0.002,1.102,-4.99995);
myNode1.point2.set(0.002,1.102,2.1689499999999997);
myNode1.radius.set(0.222);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addSphere();
myNode2.center.set(-0.007,0.001,-4.947);
myNode2.radius.set(3.6349002737351683);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(0.002,0.002,-2.53695);
myNode3.point2.set(0.002,0.002,18.199949999999998);
myNode3.radius.set(1.469);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode3.innerRotation.angle.set(3.141592653586273);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addSphere();
myNode4.center.set(-0.002,0.001,2.348);
myNode4.radius.set(1.1789020315530887);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addSphere();
myNode5.center.set(0,0,0);
myNode5.radius.set(54.59990842483163);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addCylinder();
myNode6.point1.set(0,0,-1.32395);
myNode6.point2.set(0,0,18.19995);
myNode6.radius.set(0.22);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addCommonOperation();
myNode7.leftArg.set(myNode5);
myNode7.rightArg.set(myNode6);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8_1 = myNode2.clone();
myNode8_1.isVisible = false;
const myNode8_2 = object.addFuseOperation();
myNode8_2.leftArg.set(myNode8_1);
myNode8_2.rightArg.set(myNode3);
myNode8_2.isVisible = false;
const myNode8_3 = object.addFuseOperation();
myNode8_3.leftArg.set(myNode8_2);
myNode8_3.rightArg.set(myNode4);
myNode8_3.isVisible = false;
myNode8 = object.addFuseOperation();
myNode8.leftArg.set(myNode8_3);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = false;
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(-18.2,-18.2,-4.99995);
myNode9.point2.set(18.199900000000003,18.199900000000003,-1.3240500000000002);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.innerTranslation.vector.set(-4.9999999998107114e-05,-4.9999999998107114e-05,-3.162);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addCylinder();
myNode10.point1.set(0.002,0.002,-18.2);
myNode10.point2.set(0.002,0.002,-2.1691000000000003);
myNode10.radius.set(1.469);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode10.innerRotation.angle.set(3.141592653586273);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addFuseOperation();
myNode11.leftArg.set(myNode9);
myNode11.rightArg.set(myNode10);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(0.002,0.002,5);
myNode12.point2.set(0.002,0.002,18.2);
myNode12.radius.set(1.469);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode12.innerRotation.angle.set(3.141592653586273);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addCutOperation();
myNode13.leftArg.set(myNode11);
myNode13.rightArg.set(myNode12);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(0.002,-1.104,-4.99995);
myNode14.point2.set(0.002,-1.104,2.1689499999999997);
myNode14.radius.set(0.22);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addCommonOperation();
myNode15.leftArg.set(myNode5);
myNode15.rightArg.set(myNode14);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(-1.103,-0.001,-4.99995);
myNode16.point2.set(-1.103,-0.001,2.1689499999999997);
myNode16.radius.set(0.218);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17_1 = myNode13.clone();
myNode17_1.isVisible = false;
const myNode17_2 = object.addFuseOperation();
myNode17_2.leftArg.set(myNode17_1);
myNode17_2.rightArg.set(myNode15);
myNode17_2.isVisible = false;
myNode17 = object.addFuseOperation();
myNode17.leftArg.set(myNode17_2);
myNode17.rightArg.set(myNode16);
myNode17.isVisible = false;
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addCommonOperation();
myNode18.leftArg.set(myNode8);
myNode18.rightArg.set(myNode17);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19_1 = myNode0.clone();
myNode19_1.isVisible = false;
const myNode19_2 = object.addFuseOperation();
myNode19_2.leftArg.set(myNode19_1);
myNode19_2.rightArg.set(myNode1);
myNode19_2.isVisible = false;
myNode19 = object.addFuseOperation();
myNode19.leftArg.set(myNode19_2);
myNode19.rightArg.set(myNode18);
myNode19.isVisible = false;
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addBox();
myNode20.point1.set(-4.40595,-4.40595,-5.99995);
myNode20.point2.set(4.40495,4.40495,5.99995);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);
myNode20.innerTranslation.vector.set(-0.0004999999999997229,-0.0004999999999997229,0.0);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addCommonOperation();
myNode21.leftArg.set(myNode19);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = true;


/*END Geometry Object Definition*/