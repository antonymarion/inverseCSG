/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.99995,-5.99995,-5.69395);
myNode0.point2.set(5.99995,5.99995,5.6949499999999995);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.isVisible = False

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(0.002,0.004,-4.74495);
myNode1.point2.set(0.002,0.004,4.74595);
myNode1.radius.set(4.623);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.isVisible = False

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-18.2,1.852,-4.745);
myNode2.point2.set(18.2,18.2,4.283);
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
myNode4.point1.set(0.084,-0.005,0.921);
myNode4.point2.set(0.084,-0.005,18.2);
myNode4.radius.set(2.289);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode4.innerRotation.angle.set(2.094392392986396);
myNode4.isVisible = False

/* définition du node n°5*/
const myNode5 = object.addBox();
myNode5.point1.set(-2.315,-0.093,-4.745);
myNode5.point2.set(2.315,18.2,-0.08300000000000018);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.isVisible = False

/* définition du node n°6*/
const myNode6 = object.addCylinder();
myNode6.point1.set(0.129,-0.003,-0.093);
myNode6.point2.set(0.129,-0.003,1.851);
myNode6.radius.set(1.854);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode6.innerRotation.angle.set(2.094392392986396);
myNode6.isVisible = False

/* définition du node n°7*/
const myNode7_1 = object.addFuseOperation();
myNode7_1.leftArg.set(myNode4);
myNode7_1.rightArg.set(myNode4);
const myNode7_2 = object.addFuseOperation();
myNode7_2.leftArg.set(myNode7_1);
myNode7_2.rightArg.set(myNode5);
myNode7 = object.addFuseOperation();
myNode7.leftArg.set(myNode7_2);
myNode7.rightArg.set(myNode6);
myNode7.isVisible = False

/* définition du node n°8*/
const myNode8 = object.addCutOperation();
myNode8.leftArg.set(myNode3);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = False

/* définition du node n°9*/
const myNode9 = object.addCylinder();
myNode9.point1.set(0.011,0.001,4.28205);
myNode9.point2.set(0.011,0.001,4.74495);
myNode9.radius.set(4.987);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.isVisible = False

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(-2.31495,-0.09295,-4.74495);
myNode10.point2.set(2.31495,0.92095,-0.08305000000000007);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.isVisible = False

/* définition du node n°11*/
const myNode11 = object.addFuseOperation();
myNode11.leftArg.set(myNode9);
myNode11.rightArg.set(myNode10);
myNode11.isVisible = False

/* définition du node n°12*/
const myNode12 = object.addBox();
myNode12.point1.set(-1.852,-18.2,-4.745);
myNode12.point2.set(1.852,18.2,4.283);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);
myNode12.isVisible = False

/* définition du node n°13*/
const myNode13 = object.addCutOperation();
myNode13.leftArg.set(myNode11);
myNode13.rightArg.set(myNode12);
myNode13.isVisible = False

/* définition du node n°14*/
const myNode14 = object.addFuseOperation();
myNode14.leftArg.set(myNode8);
myNode14.rightArg.set(myNode13);
myNode14.isVisible = False

/* définition du node n°15*/
const myNode15 = object.addCommonOperation();
myNode15.leftArg.set(myNode0);
myNode15.rightArg.set(myNode14);
myNode15.isVisible = True


/*END Geometry Object Definition*/