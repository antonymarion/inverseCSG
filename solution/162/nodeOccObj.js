/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-4.40595,-4.40595,-5.99995);
myNode0.point2.set(4.40495,4.40495,5.99995);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(-0.0004999999999997229,-0.0004999999999997229,0.0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(0.002,0.002,-18.2);
myNode1.point2.set(0.002,0.002,-2.1691000000000003);
myNode1.radius.set(1.469);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode1.innerRotation.angle.set(179.9999999997983);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-18.2,-18.2,-4.99995);
myNode2.point2.set(18.199900000000003,18.199900000000003,-1.3240500000000002);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.innerTranslation.vector.set(-4.9999999998107114e-05,-4.9999999998107114e-05,-3.162);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addFuseOperation();
myNode3.leftArg.set(myNode1);
myNode3.rightArg.set(myNode2);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(0.002,0.002,5);
myNode4.point2.set(0.002,0.002,18.2);
myNode4.radius.set(1.469);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode4.innerRotation.angle.set(179.9999999997983);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addCutOperation();
myNode5.leftArg.set(myNode3);
myNode5.rightArg.set(myNode4);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addCylinder();
myNode6.point1.set(-1.103,-0.001,-4.99995);
myNode6.point2.set(-1.103,-0.001,2.1689499999999997);
myNode6.radius.set(0.218);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addCylinder();
myNode7.point1.set(0.002,-1.104,-4.99995);
myNode7.point2.set(0.002,-1.104,2.1689499999999997);
myNode7.radius.set(0.22);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addSphere();
myNode8.center.set(0,0,0);
myNode8.radius.set(54.59990842483163);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addCommonOperation();
myNode9.leftArg.set(myNode7);
myNode9.rightArg.set(myNode8);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10_1 = myNode5.clone();
myNode10_1.isVisible = false;
const myNode10_2 = object.addFuseOperation();
myNode10_2.leftArg.set(myNode10_1);
myNode10_2.rightArg.set(myNode6);
myNode10_2.isVisible = false;
myNode10 = object.addFuseOperation();
myNode10.leftArg.set(myNode10_2);
myNode10.rightArg.set(myNode9);
myNode10.isVisible = false;
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addCylinder();
myNode11.point1.set(0.002,0.002,-2.53695);
myNode11.point2.set(0.002,0.002,18.199949999999998);
myNode11.radius.set(1.469);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode11.innerRotation.angle.set(179.9999999997983);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(0,0,-1.32395);
myNode12.point2.set(0,0,18.19995);
myNode12.radius.set(0.22);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addCommonOperation();
myNode13.leftArg.set(myNode12);
myNode13.rightArg.set(myNode8);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addSphere();
myNode14.center.set(-0.002,0.001,2.348);
myNode14.radius.set(1.1789020315530887);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addSphere();
myNode15.center.set(-0.007,0.001,-4.947);
myNode15.radius.set(3.6349002737351683);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16_1 = myNode11.clone();
myNode16_1.isVisible = false;
const myNode16_2 = object.addFuseOperation();
myNode16_2.leftArg.set(myNode16_1);
myNode16_2.rightArg.set(myNode13);
myNode16_2.isVisible = false;
const myNode16_3 = object.addFuseOperation();
myNode16_3.leftArg.set(myNode16_2);
myNode16_3.rightArg.set(myNode14);
myNode16_3.isVisible = false;
myNode16 = object.addFuseOperation();
myNode16.leftArg.set(myNode16_3);
myNode16.rightArg.set(myNode15);
myNode16.isVisible = false;
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addCommonOperation();
myNode17.leftArg.set(myNode10);
myNode17.rightArg.set(myNode16);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(0.002,1.102,-4.99995);
myNode18.point2.set(0.002,1.102,2.1689499999999997);
myNode18.radius.set(0.222);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addCylinder();
myNode19.point1.set(1.104,0,-4.99995);
myNode19.point2.set(1.104,0,2.53695);
myNode19.radius.set(0.222);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(0.0,0.0,0.0);
myNode19.innerRotation.angle.set(0.0);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20_1 = myNode17.clone();
myNode20_1.isVisible = false;
const myNode20_2 = object.addFuseOperation();
myNode20_2.leftArg.set(myNode20_1);
myNode20_2.rightArg.set(myNode18);
myNode20_2.isVisible = false;
myNode20 = object.addFuseOperation();
myNode20.leftArg.set(myNode20_2);
myNode20.rightArg.set(myNode19);
myNode20.isVisible = false;
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addCommonOperation();
myNode21.leftArg.set(myNode0);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = true;


/*END Geometry Object Definition*/