/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-3.49985,-5.99985,-1.87485);
myNode0.point2.set(3.49985,5.99985,1.87485);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.isVisible = False

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(-0.002,4.161,-1.56185);
myNode1.point2.set(-0.002,4.161,1.5628499999999999);
myNode1.radius.set(0.836);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.isVisible = False

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(0,4.166,-1.5619);
myNode2.point2.set(0,4.166,1.5629);
myNode2.radius.set(0.521);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.isVisible = False

/* définition du node n°3*/
const myNode3 = object.addCutOperation();
myNode3.leftArg.set(myNode1);
myNode3.rightArg.set(myNode2);
myNode3.isVisible = False

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(0.001,-4.163,-1.56185);
myNode4.point2.set(0.001,-4.163,1.5628499999999999);
myNode4.radius.set(0.836);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.isVisible = False

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(0.001,-4.165,-18.0999);
myNode5.point2.set(0.001,-4.165,1.562899999999999);
myNode5.radius.set(0.519);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.isVisible = False

/* définition du node n°6*/
const myNode6 = object.addCutOperation();
myNode6.leftArg.set(myNode4);
myNode6.rightArg.set(myNode5);
myNode6.isVisible = False

/* définition du node n°7*/
const myNode7 = object.addCylinder();
myNode7.point1.set(-0.004,-0.002,-1.56185);
myNode7.point2.set(-0.004,-0.002,1.5628499999999999);
myNode7.radius.set(2.914);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode7.innerRotation.angle.set(3.141592653586273);
myNode7.isVisible = False

/* définition du node n°8*/
const myNode8 = object.addCylinder();
myNode8.point1.set(0,0.001,-1.5619);
myNode8.point2.set(0,0.001,18.1009);
myNode8.radius.set(1.25);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.isVisible = False

/* définition du node n°9*/
const myNode9 = object.addCutOperation();
myNode9.leftArg.set(myNode7);
myNode9.rightArg.set(myNode8);
myNode9.isVisible = False

/* définition du node n°10*/
const myNode10 = object.addFuseOperation();
myNode10.leftArg.set(myNode6);
myNode10.rightArg.set(myNode9);
myNode10.isVisible = False

/* définition du node n°11*/
const myNode11 = object.addCylinder();
myNode11.point1.set(-0.001,0,-0.9369);
myNode11.point2.set(-0.001,0,18.1009);
myNode11.radius.set(2.084);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);
myNode11.isVisible = False

/* définition du node n°12*/
const myNode12 = object.addBox();
myNode12.point1.set(-18.0999,-4.16495,-0.31295);
myNode12.point2.set(18.099999999999998,4.16595,1.56195);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);
myNode12.isVisible = False

/* définition du node n°13*/
const myNode13 = object.addCylinder();
myNode13.point1.set(-0.004,-0.002,-0.937);
myNode13.point2.set(-0.004,-0.002,-0.31200000000000006);
myNode13.radius.set(2.914);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode13.innerRotation.angle.set(3.141592653586273);
myNode13.isVisible = False

/* définition du node n°14*/
const myNode14 = object.addCutOperation();
myNode14.leftArg.set(myNode12);
myNode14.rightArg.set(myNode13);
myNode14.isVisible = False

/* définition du node n°15*/
const myNode15 = object.addCutOperation();
myNode15.leftArg.set(myNode11);
myNode15.rightArg.set(myNode14);
myNode15.isVisible = False

/* définition du node n°16*/
const myNode16 = object.addCutOperation();
myNode16.leftArg.set(myNode10);
myNode16.rightArg.set(myNode15);
myNode16.isVisible = False

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(-0.81085,-4.16485,-1.56185);
myNode17.point2.set(0.81285,4.16585,1.5628499999999999);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.isVisible = False

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(-0.001,0,-18.0999);
myNode18.point2.set(-0.001,0,1.562899999999999);
myNode18.radius.set(2.084);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);
myNode18.isVisible = False

/* définition du node n°19*/
const myNode19 = object.addCutOperation();
myNode19.leftArg.set(myNode17);
myNode19.rightArg.set(myNode18);
myNode19.isVisible = False

/* définition du node n°20*/
const myNode20 = object.addCylinder();
myNode20.point1.set(-0.002,4.161,-1.5619);
myNode20.point2.set(-0.002,4.161,18.1009);
myNode20.radius.set(0.836);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);
myNode20.isVisible = False

/* définition du node n°21*/
const myNode21 = object.addCylinder();
myNode21.point1.set(0.001,-4.163,-1.5619);
myNode21.point2.set(0.001,-4.163,18.1009);
myNode21.radius.set(0.836);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);
myNode21.isVisible = False

/* définition du node n°22*/
const myNode22 = object.addFuseOperation();
myNode22.leftArg.set(myNode20);
myNode22.rightArg.set(myNode21);
myNode22.isVisible = False

/* définition du node n°23*/
const myNode23 = object.addCutOperation();
myNode23.leftArg.set(myNode19);
myNode23.rightArg.set(myNode22);
myNode23.isVisible = False

/* définition du node n°24*/
const myNode24_1 = object.addFuseOperation();
myNode24_1.leftArg.set(myNode3);
myNode24_1.rightArg.set(myNode3);
const myNode24_2 = object.addFuseOperation();
myNode24_2.leftArg.set(myNode24_1);
myNode24_2.rightArg.set(myNode16);
myNode24 = object.addFuseOperation();
myNode24.leftArg.set(myNode24_2);
myNode24.rightArg.set(myNode23);
myNode24.isVisible = False

/* définition du node n°25*/
const myNode25 = object.addCommonOperation();
myNode25.leftArg.set(myNode0);
myNode25.rightArg.set(myNode24);
myNode25.isVisible = True


/*END Geometry Object Definition*/