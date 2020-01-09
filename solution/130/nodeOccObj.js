/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addCylinder();
myNode0.point1.set(-0.004,-0.002,-1.56185);
myNode0.point2.set(-0.004,-0.002,1.5628499999999999);
myNode0.radius.set(2.914);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode0.innerRotation.angle.set(179.9999999997983);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(0,0.001,-1.5619);
myNode1.point2.set(0,0.001,18.1009);
myNode1.radius.set(1.25);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addCutOperation();
myNode2.leftArg.set(myNode0);
myNode2.rightArg.set(myNode1);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(0.001,-4.163,-1.56185);
myNode3.point2.set(0.001,-4.163,1.5628499999999999);
myNode3.radius.set(0.836);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(0.001,-4.165,-18.0999);
myNode4.point2.set(0.001,-4.165,1.562899999999999);
myNode4.radius.set(0.519);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addCutOperation();
myNode5.leftArg.set(myNode3);
myNode5.rightArg.set(myNode4);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addFuseOperation();
myNode6.leftArg.set(myNode2);
myNode6.rightArg.set(myNode5);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addCylinder();
myNode7.point1.set(-0.001,0,-0.9369);
myNode7.point2.set(-0.001,0,18.1009);
myNode7.radius.set(2.084);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addBox();
myNode8.point1.set(-18.0999,-4.16495,-0.31295);
myNode8.point2.set(18.099999999999998,4.16595,1.56195);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.innerTranslation.vector.set(0,0,0);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addCylinder();
myNode9.point1.set(-0.004,-0.002,-0.937);
myNode9.point2.set(-0.004,-0.002,-0.31200000000000006);
myNode9.radius.set(2.914);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode9.innerRotation.angle.set(179.9999999997983);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addCutOperation();
myNode10.leftArg.set(myNode8);
myNode10.rightArg.set(myNode9);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addCutOperation();
myNode11.leftArg.set(myNode7);
myNode11.rightArg.set(myNode10);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCutOperation();
myNode12.leftArg.set(myNode6);
myNode12.rightArg.set(myNode11);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addBox();
myNode13.point1.set(-0.81085,-4.16485,-1.56185);
myNode13.point2.set(0.81285,4.16585,1.5628499999999999);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);
myNode13.innerTranslation.vector.set(0,0,0);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(-0.001,0,-18.0999);
myNode14.point2.set(-0.001,0,1.562899999999999);
myNode14.radius.set(2.084);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addCutOperation();
myNode15.leftArg.set(myNode13);
myNode15.rightArg.set(myNode14);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(-0.002,4.161,-1.5619);
myNode16.point2.set(-0.002,4.161,18.1009);
myNode16.radius.set(0.836);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addCylinder();
myNode17.point1.set(0.001,-4.163,-1.5619);
myNode17.point2.set(0.001,-4.163,18.1009);
myNode17.radius.set(0.836);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addFuseOperation();
myNode18.leftArg.set(myNode16);
myNode18.rightArg.set(myNode17);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addCutOperation();
myNode19.leftArg.set(myNode15);
myNode19.rightArg.set(myNode18);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addCylinder();
myNode20.point1.set(-0.002,4.161,-1.56185);
myNode20.point2.set(-0.002,4.161,1.5628499999999999);
myNode20.radius.set(0.836);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addCylinder();
myNode21.point1.set(0,4.166,-1.5619);
myNode21.point2.set(0,4.166,1.5629);
myNode21.radius.set(0.521);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addCutOperation();
myNode22.leftArg.set(myNode20);
myNode22.rightArg.set(myNode21);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23_1 = myNode12.clone();
myNode23_1.isVisible = false;
const myNode23_2 = object.addFuseOperation();
myNode23_2.leftArg.set(myNode23_1);
myNode23_2.rightArg.set(myNode19);
myNode23_2.isVisible = false;
myNode23 = object.addFuseOperation();
myNode23.leftArg.set(myNode23_2);
myNode23.rightArg.set(myNode22);
myNode23.isVisible = false;
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addBox();
myNode24.point1.set(-3.49985,-5.99985,-1.87485);
myNode24.point2.set(3.49985,5.99985,1.87485);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);
myNode24.innerTranslation.vector.set(0,0,0);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addCommonOperation();
myNode25.leftArg.set(myNode23);
myNode25.rightArg.set(myNode24);
myNode25.isVisible = true;


/*END Geometry Object Definition*/