/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-3.49985,-5.99985,-1.87485);
myNode0.point2.set(3.49985,5.99985,1.87485);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(0.0,0.0,0.0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(-0.004,-0.002,-1.56185);
myNode1.point2.set(-0.004,-0.002,1.5628499999999999);
myNode1.radius.set(2.914);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode1.innerRotation.angle.set(3.141592653586273);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(0,0.001,-1.5619);
myNode2.point2.set(0,0.001,18.1009);
myNode2.radius.set(1.25);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addCutOperation();
myNode3.leftArg.set(myNode1);
myNode3.rightArg.set(myNode2);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(0.001,-4.163,-1.56185);
myNode4.point2.set(0.001,-4.163,1.5628499999999999);
myNode4.radius.set(0.836);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(0.001,-4.165,-18.0999);
myNode5.point2.set(0.001,-4.165,1.562899999999999);
myNode5.radius.set(0.519);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addCutOperation();
myNode6.leftArg.set(myNode4);
myNode6.rightArg.set(myNode5);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addFuseOperation();
myNode7.leftArg.set(myNode3);
myNode7.rightArg.set(myNode6);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addCylinder();
myNode8.point1.set(-0.001,0,-0.9369);
myNode8.point2.set(-0.001,0,18.1009);
myNode8.radius.set(2.084);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(-18.0999,-4.16495,-0.31295);
myNode9.point2.set(18.099999999999998,4.16595,1.56195);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.innerTranslation.vector.set(4.9999999998107114e-05,0.0004999999999997229,0.6245);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addCylinder();
myNode10.point1.set(-0.004,-0.002,-0.937);
myNode10.point2.set(-0.004,-0.002,-0.31200000000000006);
myNode10.radius.set(2.914);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode10.innerRotation.angle.set(3.141592653586273);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addCutOperation();
myNode11.leftArg.set(myNode9);
myNode11.rightArg.set(myNode10);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCutOperation();
myNode12.leftArg.set(myNode8);
myNode12.rightArg.set(myNode11);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addCutOperation();
myNode13.leftArg.set(myNode7);
myNode13.rightArg.set(myNode12);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addBox();
myNode14.point1.set(-0.81085,-4.16485,-1.56185);
myNode14.point2.set(0.81285,4.16585,1.5628499999999999);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);
myNode14.innerTranslation.vector.set(0.0010000000000000009,0.0004999999999997229,0.0004999999999999449);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addCylinder();
myNode15.point1.set(-0.001,0,-18.0999);
myNode15.point2.set(-0.001,0,1.562899999999999);
myNode15.radius.set(2.084);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addCutOperation();
myNode16.leftArg.set(myNode14);
myNode16.rightArg.set(myNode15);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addCylinder();
myNode17.point1.set(-0.002,4.161,-1.5619);
myNode17.point2.set(-0.002,4.161,18.1009);
myNode17.radius.set(0.836);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(0.001,-4.163,-1.5619);
myNode18.point2.set(0.001,-4.163,18.1009);
myNode18.radius.set(0.836);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addFuseOperation();
myNode19.leftArg.set(myNode17);
myNode19.rightArg.set(myNode18);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addCutOperation();
myNode20.leftArg.set(myNode16);
myNode20.rightArg.set(myNode19);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addCylinder();
myNode21.point1.set(-0.002,4.161,-1.56185);
myNode21.point2.set(-0.002,4.161,1.5628499999999999);
myNode21.radius.set(0.836);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addCylinder();
myNode22.point1.set(0,4.166,-1.5619);
myNode22.point2.set(0,4.166,1.5629);
myNode22.radius.set(0.521);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(0.0,0.0,0.0);
myNode22.innerRotation.angle.set(0.0);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addCutOperation();
myNode23.leftArg.set(myNode21);
myNode23.rightArg.set(myNode22);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24_1 = myNode13.clone();
myNode24_1.isVisible = false;
const myNode24_2 = object.addFuseOperation();
myNode24_2.leftArg.set(myNode24_1);
myNode24_2.rightArg.set(myNode20);
myNode24_2.isVisible = false;
myNode24 = object.addFuseOperation();
myNode24.leftArg.set(myNode24_2);
myNode24.rightArg.set(myNode23);
myNode24.isVisible = false;
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addCommonOperation();
myNode25.leftArg.set(myNode0);
myNode25.rightArg.set(myNode24);
myNode25.isVisible = true;


/*END Geometry Object Definition*/