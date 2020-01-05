/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addCylinder();
myNode0.point1.set(0.009,0.019,0.25005);
myNode0.point2.set(0,0,1.4999);
myNode0.radius.set(2.994);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(0.014,0.036,1.25);
myNode1.point2.set(0,0,1);
myNode1.radius.set(1.003);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);

/* définition du node n°2*/
const myNode2 = object.addCutOperation();
myNode2.leftArg.set(myNode0);
myNode2.rightArg.set(myNode1);

/* définition du node n°3*/
const myNode3 = object.addBox();
myNode3.point1.set(-4.99995,-4.99995,-2.74995);
myNode3.point2.set(9.9999,9.9999,2.9999);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(2.253,-3.906,-2.75);
myNode4.point2.set(0,0,21.75);
myNode4.radius.set(0.5);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);

/* définition du node n°5*/
const myNode5 = object.addCutOperation();
myNode5.leftArg.set(myNode3);
myNode5.rightArg.set(myNode4);

/* définition du node n°6*/
const myNode6 = object.addCylinder();
myNode6.point1.set(4.603,-4.614,-2.75);
myNode6.point2.set(0,0,21.75);
myNode6.radius.set(1.517);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);

/* définition du node n°7*/
const myNode7 = object.addCylinder();
myNode7.point1.set(-4.608,4.627,-2.75);
myNode7.point2.set(0,0,3);
myNode7.radius.set(1.518);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);

/* définition du node n°8*/
const myNode8 = object.addFuseOperation();
myNode8.leftArg.set(myNode6);
myNode8.rightArg.set(myNode7);

/* définition du node n°9*/
const myNode9 = object.addCutOperation();
myNode9.leftArg.set(myNode5);
myNode9.rightArg.set(myNode8);

/* définition du node n°10*/
const myNode10 = object.addCylinder();
myNode10.point1.set(-3.893,-2.245,-2.75);
myNode10.point2.set(0,0,21.75);
myNode10.radius.set(0.503);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);

/* définition du node n°11*/
const myNode11 = object.addCutOperation();
myNode11.leftArg.set(myNode9);
myNode11.rightArg.set(myNode10);

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(3.898,2.249,-19);
myNode12.point2.set(0,0,19.25);
myNode12.radius.set(0.504);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);

/* définition du node n°13*/
const myNode13 = object.addCylinder();
myNode13.point1.set(-4.62,-4.603,-19);
myNode13.point2.set(0,0,19.25);
myNode13.radius.set(1.518);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(-2.25,3.899,-19);
myNode14.point2.set(0,0,19.25);
myNode14.radius.set(0.498);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);

/* définition du node n°15*/
const myNode15 = object.addCylinder();
myNode15.point1.set(4.59,4.608,-2.75);
myNode15.point2.set(0,0,21.75);
myNode15.radius.set(1.502);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);

/* définition du node n°16*/
const myNode16_1 = object.addFuseOperation();
myNode16_1.leftArg.set(myNode12);
myNode16_1.rightArg.set(myNode12);
const myNode16_2 = object.addFuseOperation();
myNode16_2.leftArg.set(myNode16_1);
myNode16_2.rightArg.set(myNode13);
const myNode16_3 = object.addFuseOperation();
myNode16_3.leftArg.set(myNode16_2);
myNode16_3.rightArg.set(myNode14);
myNode16 = object.addFuseOperation();
myNode16.leftArg.set(myNode16_3);
myNode16.rightArg.set(myNode15);

/* définition du node n°17*/
const myNode17 = object.addCutOperation();
myNode17.leftArg.set(myNode11);
myNode17.rightArg.set(myNode16);

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(-0.009,0.002,1.75005);
myNode18.point2.set(0,0,0.9999);
myNode18.radius.set(2.5);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);

/* définition du node n°19*/
const myNode19 = object.addCylinder();
myNode19.point1.set(0.009,0.019,2.25005);
myNode19.point2.set(0,0,0.4999);
myNode19.radius.set(2.994);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(0.0,0.0,0.0);
myNode19.innerRotation.angle.set(0.0);

/* définition du node n°20*/
const myNode20 = object.addFuseOperation();
myNode20.leftArg.set(myNode18);
myNode20.rightArg.set(myNode19);

/* définition du node n°21*/
const myNode21 = object.addCylinder();
myNode21.point1.set(0.038,0,1.75);
myNode21.point2.set(0,0,17.25);
myNode21.radius.set(1.502);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);

/* définition du node n°22*/
const myNode22 = object.addCutOperation();
myNode22.leftArg.set(myNode20);
myNode22.rightArg.set(myNode21);

/* définition du node n°23*/
const myNode23_1 = object.addFuseOperation();
myNode23_1.leftArg.set(myNode2);
myNode23_1.rightArg.set(myNode2);
const myNode23_2 = object.addFuseOperation();
myNode23_2.leftArg.set(myNode23_1);
myNode23_2.rightArg.set(myNode17);
myNode23 = object.addFuseOperation();
myNode23.leftArg.set(myNode23_2);
myNode23.rightArg.set(myNode22);

/* définition du node n°24*/
const myNode24 = object.addBox();
myNode24.point1.set(-5.99995,-5.99995,-3.29995);
myNode24.point2.set(11.9999,11.9999,6.5999);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);

/* définition du node n°25*/
const myNode25 = object.addCommonOperation();
myNode25.leftArg.set(myNode23);
myNode25.rightArg.set(myNode24);
/*END Geometry Object Definition*/