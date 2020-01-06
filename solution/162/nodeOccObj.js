/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-4.40595,-4.40595,-5.99995);
myNode0.point2.set(4.40495,4.40495,5.99995);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.isVisible = False

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(1.104,0,-4.99995);
myNode1.point2.set(1.104,0,2.53695);
myNode1.radius.set(0.222);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.isVisible = False

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-18.2,-18.2,-4.99995);
myNode2.point2.set(18.199900000000003,18.199900000000003,-1.3240500000000002);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.isVisible = False

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(0.002,0.002,-18.2);
myNode3.point2.set(0.002,0.002,-2.1691000000000003);
myNode3.radius.set(1.469);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode3.innerRotation.angle.set(3.141592653586273);
myNode3.isVisible = False

/* définition du node n°4*/
const myNode4 = object.addFuseOperation();
myNode4.leftArg.set(myNode2);
myNode4.rightArg.set(myNode3);
myNode4.isVisible = False

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(0.002,0.002,5);
myNode5.point2.set(0.002,0.002,18.2);
myNode5.radius.set(1.469);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode5.innerRotation.angle.set(3.141592653586273);
myNode5.isVisible = False

/* définition du node n°6*/
const myNode6 = object.addCutOperation();
myNode6.leftArg.set(myNode4);
myNode6.rightArg.set(myNode5);
myNode6.isVisible = False

/* définition du node n°7*/
const myNode7 = object.addSphere();
myNode7.center.set(0,0,0);
myNode7.radius.set(54.59990842483163);
myNode7.isVisible = False

/* définition du node n°8*/
const myNode8 = object.addCylinder();
myNode8.point1.set(0.002,-1.104,-4.99995);
myNode8.point2.set(0.002,-1.104,2.1689499999999997);
myNode8.radius.set(0.22);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.isVisible = False

/* définition du node n°9*/
const myNode9 = object.addCommonOperation();
myNode9.leftArg.set(myNode7);
myNode9.rightArg.set(myNode8);
myNode9.isVisible = False

/* définition du node n°10*/
const myNode10 = object.addCylinder();
myNode10.point1.set(-1.103,-0.001,-4.99995);
myNode10.point2.set(-1.103,-0.001,2.1689499999999997);
myNode10.radius.set(0.218);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.isVisible = False

/* définition du node n°11*/
const myNode11_1 = object.addFuseOperation();
myNode11_1.leftArg.set(myNode6);
myNode11_1.rightArg.set(myNode6);
const myNode11_2 = object.addFuseOperation();
myNode11_2.leftArg.set(myNode11_1);
myNode11_2.rightArg.set(myNode9);
myNode11 = object.addFuseOperation();
myNode11.leftArg.set(myNode11_2);
myNode11.rightArg.set(myNode10);
myNode11.isVisible = False

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(0.002,0.002,-2.53695);
myNode12.point2.set(0.002,0.002,18.199949999999998);
myNode12.radius.set(1.469);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode12.innerRotation.angle.set(3.141592653586273);
myNode12.isVisible = False

/* définition du node n°13*/
const myNode13 = object.addSphere();
myNode13.center.set(-0.002,0.001,2.348);
myNode13.radius.set(1.1789020315530887);
myNode13.isVisible = False

/* définition du node n°14*/
const myNode14 = object.addSphere();
myNode14.center.set(-0.007,0.001,-4.947);
myNode14.radius.set(3.6349002737351683);
myNode14.isVisible = False

/* définition du node n°15*/
const myNode15 = object.addCylinder();
myNode15.point1.set(0,0,-1.32395);
myNode15.point2.set(0,0,18.19995);
myNode15.radius.set(0.22);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);
myNode15.isVisible = False

/* définition du node n°16*/
const myNode16 = object.addCommonOperation();
myNode16.leftArg.set(myNode7);
myNode16.rightArg.set(myNode15);
myNode16.isVisible = False

/* définition du node n°17*/
const myNode17_1 = object.addFuseOperation();
myNode17_1.leftArg.set(myNode12);
myNode17_1.rightArg.set(myNode12);
const myNode17_2 = object.addFuseOperation();
myNode17_2.leftArg.set(myNode17_1);
myNode17_2.rightArg.set(myNode13);
const myNode17_3 = object.addFuseOperation();
myNode17_3.leftArg.set(myNode17_2);
myNode17_3.rightArg.set(myNode14);
myNode17 = object.addFuseOperation();
myNode17.leftArg.set(myNode17_3);
myNode17.rightArg.set(myNode16);
myNode17.isVisible = False

/* définition du node n°18*/
const myNode18 = object.addCommonOperation();
myNode18.leftArg.set(myNode11);
myNode18.rightArg.set(myNode17);
myNode18.isVisible = False

/* définition du node n°19*/
const myNode19 = object.addCylinder();
myNode19.point1.set(0.002,1.102,-4.99995);
myNode19.point2.set(0.002,1.102,2.1689499999999997);
myNode19.radius.set(0.222);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(0.0,0.0,0.0);
myNode19.innerRotation.angle.set(0.0);
myNode19.isVisible = False

/* définition du node n°20*/
const myNode20_1 = object.addFuseOperation();
myNode20_1.leftArg.set(myNode1);
myNode20_1.rightArg.set(myNode1);
const myNode20_2 = object.addFuseOperation();
myNode20_2.leftArg.set(myNode20_1);
myNode20_2.rightArg.set(myNode18);
myNode20 = object.addFuseOperation();
myNode20.leftArg.set(myNode20_2);
myNode20.rightArg.set(myNode19);
myNode20.isVisible = False

/* définition du node n°21*/
const myNode21 = object.addCommonOperation();
myNode21.leftArg.set(myNode0);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = True


/*END Geometry Object Definition*/