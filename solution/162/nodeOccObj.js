/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addCylinder();
myNode0.point1.set(0.002,1.102,-4.99995);
myNode0.point2.set(0,0,7.1689);
myNode0.radius.set(0.222);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(1.104,0,-4.99995);
myNode1.point2.set(0,0,7.5369);
myNode1.radius.set(0.222);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);

/* définition du node n°2*/
const myNode2 = object.addSphere();
myNode2.center.set(-0.002,0.001,2.348);
myNode2.radius.set(1.1789020315530887);

/* définition du node n°3*/
const myNode3 = object.addSphere();
myNode3.center.set(-0.007,0.001,-4.947);
myNode3.radius.set(3.6349002737351683);

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(0,0,-1.32395);
myNode4.point2.set(0,0,19.5239);
myNode4.radius.set(0.22);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);

/* définition du node n°5*/
const myNode5 = object.addSphere();
myNode5.center.set(0,0,0);
myNode5.radius.set(54.59990842483163);

/* définition du node n°6*/
const myNode6 = object.addCommonOperation();
myNode6.leftArg.set(myNode4);
myNode6.rightArg.set(myNode5);

/* définition du node n°7*/
const myNode7 = object.addCylinder();
myNode7.point1.set(0.002,0.002,-2.53695);
myNode7.point2.set(0,0,20.7369);
myNode7.radius.set(1.469);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode7.innerRotation.angle.set(3.141592653586273);

/* définition du node n°8*/
const myNode8_1 = object.addFuseOperation();
myNode8_1.leftArg.set(myNode2);
myNode8_1.rightArg.set(myNode2);
const myNode8_2 = object.addFuseOperation();
myNode8_2.leftArg.set(myNode8_1);
myNode8_2.rightArg.set(myNode3);
const myNode8_3 = object.addFuseOperation();
myNode8_3.leftArg.set(myNode8_2);
myNode8_3.rightArg.set(myNode6);
myNode8 = object.addFuseOperation();
myNode8.leftArg.set(myNode8_3);
myNode8.rightArg.set(myNode7);

/* définition du node n°9*/
const myNode9 = object.addCylinder();
myNode9.point1.set(-1.103,-0.001,-4.99995);
myNode9.point2.set(0,0,7.1689);
myNode9.radius.set(0.218);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);

/* définition du node n°10*/
const myNode10 = object.addCylinder();
myNode10.point1.set(0.002,0.002,-18.2);
myNode10.point2.set(0,0,16.0309);
myNode10.radius.set(1.469);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode10.innerRotation.angle.set(3.141592653586273);

/* définition du node n°11*/
const myNode11 = object.addBox();
myNode11.point1.set(-18.2,-18.2,-4.99995);
myNode11.point2.set(36.3999,36.3999,3.6759);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);

/* définition du node n°12*/
const myNode12 = object.addFuseOperation();
myNode12.leftArg.set(myNode10);
myNode12.rightArg.set(myNode11);

/* définition du node n°13*/
const myNode13 = object.addCylinder();
myNode13.point1.set(0.002,0.002,5);
myNode13.point2.set(0,0,13.2);
myNode13.radius.set(1.469);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode13.innerRotation.angle.set(3.141592653586273);

/* définition du node n°14*/
const myNode14 = object.addCutOperation();
myNode14.leftArg.set(myNode12);
myNode14.rightArg.set(myNode13);

/* définition du node n°15*/
const myNode15 = object.addCylinder();
myNode15.point1.set(0.002,-1.104,-4.99995);
myNode15.point2.set(0,0,7.1689);
myNode15.radius.set(0.22);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);

/* définition du node n°16*/
const myNode16 = object.addCommonOperation();
myNode16.leftArg.set(myNode15);
myNode16.rightArg.set(myNode5);

/* définition du node n°17*/
const myNode17_1 = object.addFuseOperation();
myNode17_1.leftArg.set(myNode9);
myNode17_1.rightArg.set(myNode9);
const myNode17_2 = object.addFuseOperation();
myNode17_2.leftArg.set(myNode17_1);
myNode17_2.rightArg.set(myNode14);
myNode17 = object.addFuseOperation();
myNode17.leftArg.set(myNode17_2);
myNode17.rightArg.set(myNode16);

/* définition du node n°18*/
const myNode18 = object.addCommonOperation();
myNode18.leftArg.set(myNode8);
myNode18.rightArg.set(myNode17);

/* définition du node n°19*/
const myNode19_1 = object.addFuseOperation();
myNode19_1.leftArg.set(myNode0);
myNode19_1.rightArg.set(myNode0);
const myNode19_2 = object.addFuseOperation();
myNode19_2.leftArg.set(myNode19_1);
myNode19_2.rightArg.set(myNode1);
myNode19 = object.addFuseOperation();
myNode19.leftArg.set(myNode19_2);
myNode19.rightArg.set(myNode18);

/* définition du node n°20*/
const myNode20 = object.addBox();
myNode20.point1.set(-4.40595,-4.40595,-5.99995);
myNode20.point2.set(8.8109,8.8109,11.9999);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);

/* définition du node n°21*/
const myNode21 = object.addCommonOperation();
myNode21.leftArg.set(myNode19);
myNode21.rightArg.set(myNode20);
/*END Geometry Object Definition*/