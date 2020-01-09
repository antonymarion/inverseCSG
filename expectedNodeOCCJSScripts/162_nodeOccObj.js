/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-4.40595,-4.40595,-5.99995);
myNode0.point2.set(4.40495,4.40495,5.99995);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(0,0,0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(0,0,-1.32395);
myNode1.point2.set(0,0,18.19995);
myNode1.radius.set(0.22);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addSphere();
myNode2.center.set(0,0,0);
myNode2.radius.set(54.59990842483163);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addCommonOperation();
myNode3.leftArg.set(myNode1);
myNode3.rightArg.set(myNode2);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(0.002,0.002,-2.53695);
myNode4.point2.set(0.002,0.002,18.199949999999998);
myNode4.radius.set(1.469);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode4.innerRotation.angle.set(179.9999999997983);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addSphere();
myNode5.center.set(-0.002,0.001,2.348);
myNode5.radius.set(1.1789020315530887);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addSphere();
myNode6.center.set(-0.007,0.001,-4.947);
myNode6.radius.set(3.6349002737351683);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7_1 = myNode3.clone();
myNode7_1.isVisible = false;
const myNode7_2 = object.addFuseOperation();
myNode7_2.leftArg.set(myNode7_1);
myNode7_2.rightArg.set(myNode4);
myNode7_2.isVisible = false;
const myNode7_3 = object.addFuseOperation();
myNode7_3.leftArg.set(myNode7_2);
myNode7_3.rightArg.set(myNode5);
myNode7_3.isVisible = false;
myNode7 = object.addFuseOperation();
myNode7.leftArg.set(myNode7_3);
myNode7.rightArg.set(myNode6);
myNode7.isVisible = false;
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addBox();
myNode8.point1.set(-18.2,-18.2,-4.99995);
myNode8.point2.set(18.199900000000003,18.199900000000003,-1.3240500000000002);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.innerTranslation.vector.set(0,0,0);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addCylinder();
myNode9.point1.set(0.002,0.002,-18.2);
myNode9.point2.set(0.002,0.002,-2.1691000000000003);
myNode9.radius.set(1.469);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode9.innerRotation.angle.set(179.9999999997983);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addFuseOperation();
myNode10.leftArg.set(myNode8);
myNode10.rightArg.set(myNode9);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addCylinder();
myNode11.point1.set(0.002,0.002,5);
myNode11.point2.set(0.002,0.002,18.2);
myNode11.radius.set(1.469);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode11.innerRotation.angle.set(179.9999999997983);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCutOperation();
myNode12.leftArg.set(myNode10);
myNode12.rightArg.set(myNode11);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addCylinder();
myNode13.point1.set(0.002,-1.104,-4.99995);
myNode13.point2.set(0.002,-1.104,2.1689499999999997);
myNode13.radius.set(0.22);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addCommonOperation();
myNode14.leftArg.set(myNode13);
myNode14.rightArg.set(myNode2);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addCylinder();
myNode15.point1.set(-1.103,-0.001,-4.99995);
myNode15.point2.set(-1.103,-0.001,2.1689499999999997);
myNode15.radius.set(0.218);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16_1 = myNode12.clone();
myNode16_1.isVisible = false;
const myNode16_2 = object.addFuseOperation();
myNode16_2.leftArg.set(myNode16_1);
myNode16_2.rightArg.set(myNode14);
myNode16_2.isVisible = false;
myNode16 = object.addFuseOperation();
myNode16.leftArg.set(myNode16_2);
myNode16.rightArg.set(myNode15);
myNode16.isVisible = false;
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addCommonOperation();
myNode17.leftArg.set(myNode7);
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