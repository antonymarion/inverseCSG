/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addCylinder();
myNode0.point1.set(0.008,0.003,1.50015);
myNode0.point2.set(0.008,0.003,18.09985);
myNode0.radius.set(2.979);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.isVisible = False

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(0.002,-0.012,-2.99985);
myNode1.point2.set(0.002,-0.012,1.99985);
myNode1.radius.set(3.984);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.isVisible = False

/* définition du node n°2*/
const myNode2 = object.addFuseOperation();
myNode2.leftArg.set(myNode0);
myNode2.rightArg.set(myNode1);
myNode2.isVisible = False

/* définition du node n°3*/
const myNode3 = object.addBox();
myNode3.point1.set(-0.4999,-18.0999,-18.0999);
myNode3.point2.set(0.4999,18.0999,-1.5001000000000033);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(2.902450985379432,1.2022342844562988,1.5951183132287864e-06);
myNode3.innerRotation.angle.set(3.1415902019924125);
myNode3.isVisible = False

/* définition du node n°4*/
const myNode4 = object.addBox();
myNode4.point1.set(-0.4999,-4.9999,1.5001);
myNode4.point2.set(0.4999,4.9999,1.9999);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.isVisible = False

/* définition du node n°5*/
const myNode5 = object.addFuseOperation();
myNode5.leftArg.set(myNode3);
myNode5.rightArg.set(myNode4);
myNode5.isVisible = False

/* définition du node n°6*/
const myNode6 = object.addCylinder();
myNode6.point1.set(0.008,0.003,1.50005);
myNode6.point2.set(0.008,0.003,18.099950000000003);
myNode6.radius.set(2.979);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.isVisible = False

/* définition du node n°7*/
const myNode7 = object.addCutOperation();
myNode7.leftArg.set(myNode5);
myNode7.rightArg.set(myNode6);
myNode7.isVisible = False

/* définition du node n°8*/
const myNode8 = object.addCutOperation();
myNode8.leftArg.set(myNode2);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = False

/* définition du node n°9*/
const myNode9 = object.addCylinder();
myNode9.point1.set(0.008,0.003,3.0001);
myNode9.point2.set(0.008,0.003,18.0999);
myNode9.radius.set(2.979);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.isVisible = False

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(-18.0999,-0.4999,-2.9999);
myNode10.point2.set(18.0999,0.4999,-1.5000999999999998);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(2.902450985379432,1.2022342844562988,1.5951183132287864e-06);
myNode10.innerRotation.angle.set(3.1415902019924125);
myNode10.isVisible = False

/* définition du node n°11*/
const myNode11 = object.addCylinder();
myNode11.point1.set(0.008,0.003,0.0001);
myNode11.point2.set(0.008,0.003,2.9999000000000002);
myNode11.radius.set(2.979);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);
myNode11.isVisible = False

/* définition du node n°12*/
const myNode12 = object.addFuseOperation();
myNode12.leftArg.set(myNode10);
myNode12.rightArg.set(myNode11);
myNode12.isVisible = False

/* définition du node n°13*/
const myNode13 = object.addCylinder();
myNode13.point1.set(0.004,0.001,-18.0999);
myNode13.point2.set(0.004,0.001,3.0);
myNode13.radius.set(1.986);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);
myNode13.isVisible = False

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(-0.002,-0.003,0);
myNode14.point2.set(-0.002,-0.003,18.1);
myNode14.radius.set(1.001);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);
myNode14.isVisible = False

/* définition du node n°15*/
const myNode15 = object.addCutOperation();
myNode15.leftArg.set(myNode13);
myNode15.rightArg.set(myNode14);
myNode15.isVisible = False

/* définition du node n°16*/
const myNode16 = object.addCutOperation();
myNode16.leftArg.set(myNode12);
myNode16.rightArg.set(myNode15);
myNode16.isVisible = False

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(-4.9999,-0.4999,1.5001);
myNode17.point2.set(18.099899999999998,0.4999,1.9999);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.isVisible = False

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(0.004,0.001,1.50005);
myNode18.point2.set(0.004,0.001,1.9999500000000001);
myNode18.radius.set(1.986);
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
const myNode20_1 = object.addFuseOperation();
myNode20_1.leftArg.set(myNode9);
myNode20_1.rightArg.set(myNode9);
const myNode20_2 = object.addFuseOperation();
myNode20_2.leftArg.set(myNode20_1);
myNode20_2.rightArg.set(myNode16);
myNode20 = object.addFuseOperation();
myNode20.leftArg.set(myNode20_2);
myNode20.rightArg.set(myNode19);
myNode20.isVisible = False

/* définition du node n°21*/
const myNode21 = object.addCutOperation();
myNode21.leftArg.set(myNode8);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = False

/* définition du node n°22*/
const myNode22 = object.addBox();
myNode22.point1.set(-4.99985,-4.99985,-2.99985);
myNode22.point2.set(4.99985,4.99985,-0.0001500000000000945);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(0.0,0.0,0.0);
myNode22.innerRotation.angle.set(0.0);
myNode22.isVisible = False

/* définition du node n°23*/
const myNode23 = object.addFuseOperation();
myNode23.leftArg.set(myNode21);
myNode23.rightArg.set(myNode22);
myNode23.isVisible = False

/* définition du node n°24*/
const myNode24 = object.addBox();
myNode24.point1.set(-5.99985,-5.99985,-3.59985);
myNode24.point2.set(5.99985,5.99985,3.59985);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);
myNode24.isVisible = False

/* définition du node n°25*/
const myNode25 = object.addCommonOperation();
myNode25.leftArg.set(myNode23);
myNode25.rightArg.set(myNode24);
myNode25.isVisible = True


/*END Geometry Object Definition*/