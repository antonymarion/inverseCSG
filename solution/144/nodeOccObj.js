/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.99985,-5.99985,-3.59985);
myNode0.point2.set(5.99985,5.99985,3.59985);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(0.0,0.0,0.0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-4.99985,-4.99985,-2.99985);
myNode1.point2.set(4.99985,4.99985,-0.0001500000000000945);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.innerTranslation.vector.set(0.0,0.0,-1.5);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(0.002,-0.012,-2.99985);
myNode2.point2.set(0.002,-0.012,1.99985);
myNode2.radius.set(3.984);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(0.008,0.003,1.50015);
myNode3.point2.set(0.008,0.003,18.09985);
myNode3.radius.set(2.979);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addFuseOperation();
myNode4.leftArg.set(myNode2);
myNode4.rightArg.set(myNode3);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addBox();
myNode5.point1.set(-0.4999,-18.0999,-18.0999);
myNode5.point2.set(0.4999,18.0999,-1.5001000000000033);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(2.902450985379432,1.2022342844562988,1.5951183132287864e-06);
myNode5.innerRotation.angle.set(3.1415902019924125);
myNode5.innerTranslation.vector.set(0.0,0.0,-9.800000000000002);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addBox();
myNode6.point1.set(-0.4999,-4.9999,1.5001);
myNode6.point2.set(0.4999,4.9999,1.9999);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.innerTranslation.vector.set(0.0,0.0,1.75);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addFuseOperation();
myNode7.leftArg.set(myNode5);
myNode7.rightArg.set(myNode6);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addCylinder();
myNode8.point1.set(0.008,0.003,1.50005);
myNode8.point2.set(0.008,0.003,18.099950000000003);
myNode8.radius.set(2.979);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addCutOperation();
myNode9.leftArg.set(myNode7);
myNode9.rightArg.set(myNode8);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addCutOperation();
myNode10.leftArg.set(myNode4);
myNode10.rightArg.set(myNode9);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addCylinder();
myNode11.point1.set(0.008,0.003,0.0001);
myNode11.point2.set(0.008,0.003,2.9999000000000002);
myNode11.radius.set(2.979);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addBox();
myNode12.point1.set(-18.0999,-0.4999,-2.9999);
myNode12.point2.set(18.0999,0.4999,-1.5000999999999998);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(2.902450985379432,1.2022342844562988,1.5951183132287864e-06);
myNode12.innerRotation.angle.set(3.1415902019924125);
myNode12.innerTranslation.vector.set(0.0,0.0,-2.25);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addFuseOperation();
myNode13.leftArg.set(myNode11);
myNode13.rightArg.set(myNode12);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(0.004,0.001,-18.0999);
myNode14.point2.set(0.004,0.001,3.0);
myNode14.radius.set(1.986);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addCylinder();
myNode15.point1.set(-0.002,-0.003,0);
myNode15.point2.set(-0.002,-0.003,18.1);
myNode15.radius.set(1.001);
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
const myNode17 = object.addCutOperation();
myNode17.leftArg.set(myNode13);
myNode17.rightArg.set(myNode16);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addBox();
myNode18.point1.set(-4.9999,-0.4999,1.5001);
myNode18.point2.set(18.099899999999998,0.4999,1.9999);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);
myNode18.innerTranslation.vector.set(6.549999999999999,0.0,1.75);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addCylinder();
myNode19.point1.set(0.004,0.001,1.50005);
myNode19.point2.set(0.004,0.001,1.9999500000000001);
myNode19.radius.set(1.986);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(0.0,0.0,0.0);
myNode19.innerRotation.angle.set(0.0);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addCutOperation();
myNode20.leftArg.set(myNode18);
myNode20.rightArg.set(myNode19);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addCylinder();
myNode21.point1.set(0.008,0.003,3.0001);
myNode21.point2.set(0.008,0.003,18.0999);
myNode21.radius.set(2.979);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22_1 = myNode17.clone();
myNode22_1.isVisible = false;
const myNode22_2 = object.addFuseOperation();
myNode22_2.leftArg.set(myNode22_1);
myNode22_2.rightArg.set(myNode20);
myNode22_2.isVisible = false;
myNode22 = object.addFuseOperation();
myNode22.leftArg.set(myNode22_2);
myNode22.rightArg.set(myNode21);
myNode22.isVisible = false;
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addCutOperation();
myNode23.leftArg.set(myNode10);
myNode23.rightArg.set(myNode22);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addFuseOperation();
myNode24.leftArg.set(myNode1);
myNode24.rightArg.set(myNode23);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addCommonOperation();
myNode25.leftArg.set(myNode0);
myNode25.rightArg.set(myNode24);
myNode25.isVisible = true;


/*END Geometry Object Definition*/