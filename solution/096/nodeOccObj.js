/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.99995,-5.99995,-5.99995);
myNode0.point2.set(11.9999,11.9999,11.9999);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-2.14295,-4.99995,-4.99995);
myNode1.point2.set(4.2859,1.4289,7.1429);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-2.14295,-4.99995,-4.99995);
myNode2.point2.set(1.4289,7.1429,9.9999);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);

/* définition du node n°3*/
const myNode3 = object.addFuseOperation();
myNode3.leftArg.set(myNode1);
myNode3.rightArg.set(myNode2);

/* définition du node n°4*/
const myNode4 = object.addBox();
myNode4.point1.set(-2.143,-5,-3.571);
myNode4.point2.set(2.857,5.714,8.571);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);

/* définition du node n°5*/
const myNode5 = object.addCutOperation();
myNode5.leftArg.set(myNode3);
myNode5.rightArg.set(myNode4);

/* définition du node n°6*/
const myNode6 = object.addBox();
myNode6.point1.set(3.57105,-2.14295,3.57105);
myNode6.point2.set(1.4289,4.2859,1.4289);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);

/* définition du node n°7*/
const myNode7 = object.addBox();
myNode7.point1.set(3.57105,-2.14295,-0.71395);
myNode7.point2.set(1.4289,1.4289,4.2859);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);

/* définition du node n°8*/
const myNode8 = object.addBox();
myNode8.point1.set(-2.14295,0.71405,3.57105);
myNode8.point2.set(5.7139,1.4289,1.4289);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(-4.99995,-2.14295,-2.14295);
myNode9.point2.set(1.4289,7.1429,2.8569);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(-4.99995,-3.57095,0.71405);
myNode10.point2.set(7.1429,8.5709,1.4289);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);

/* définition du node n°11*/
const myNode11 = object.addFuseOperation();
myNode11.leftArg.set(myNode9);
myNode11.rightArg.set(myNode10);

/* définition du node n°12*/
const myNode12 = object.addBox();
myNode12.point1.set(-18.1,-3.571,-0.714);
myNode12.point2.set(18.814,7.143,2.857);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);

/* définition du node n°13*/
const myNode13 = object.addCutOperation();
myNode13.leftArg.set(myNode11);
myNode13.rightArg.set(myNode12);

/* définition du node n°14*/
const myNode14 = object.addBox();
myNode14.point1.set(-4.99995,-2.14295,-2.14295);
myNode14.point2.set(9.9999,1.4289,1.4289);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);

/* définition du node n°15*/
const myNode15_1 = object.addFuseOperation();
myNode15_1.leftArg.set(myNode5);
myNode15_1.rightArg.set(myNode5);
const myNode15_2 = object.addFuseOperation();
myNode15_2.leftArg.set(myNode15_1);
myNode15_2.rightArg.set(myNode6);
const myNode15_3 = object.addFuseOperation();
myNode15_3.leftArg.set(myNode15_2);
myNode15_3.rightArg.set(myNode7);
const myNode15_4 = object.addFuseOperation();
myNode15_4.leftArg.set(myNode15_3);
myNode15_4.rightArg.set(myNode8);
const myNode15_5 = object.addFuseOperation();
myNode15_5.leftArg.set(myNode15_4);
myNode15_5.rightArg.set(myNode13);
myNode15 = object.addFuseOperation();
myNode15.leftArg.set(myNode15_5);
myNode15.rightArg.set(myNode14);

/* définition du node n°16*/
const myNode16 = object.addCommonOperation();
myNode16.leftArg.set(myNode0);
myNode16.rightArg.set(myNode15);
/*END Geometry Object Definition*/