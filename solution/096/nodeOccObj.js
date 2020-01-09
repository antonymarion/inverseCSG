/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.99995,-5.99995,-5.99995);
myNode0.point2.set(5.99995,5.99995,5.99995);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(0.0,0.0,0.0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-2.14295,-4.99995,-4.99995);
myNode1.point2.set(-0.7140499999999999,2.14295,4.99995);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.innerTranslation.vector.set(-1.4284999999999999,-1.4285,0.0);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-2.14295,-4.99995,-4.99995);
myNode2.point2.set(2.14295,-3.57105,2.14295);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.innerTranslation.vector.set(0.0,-4.2855,-1.4285);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addFuseOperation();
myNode3.leftArg.set(myNode1);
myNode3.rightArg.set(myNode2);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addBox();
myNode4.point1.set(-2.143,-5,-3.571);
myNode4.point2.set(0.7140000000000004,0.7140000000000004,5.0);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.innerTranslation.vector.set(-0.7144999999999997,-2.143,0.7144999999999997);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addCutOperation();
myNode5.leftArg.set(myNode3);
myNode5.rightArg.set(myNode4);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addBox();
myNode6.point1.set(3.57105,-2.14295,-0.71395);
myNode6.point2.set(4.99995,-0.7140499999999999,3.5719499999999997);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.innerTranslation.vector.set(4.2855,-1.4284999999999999,1.4289999999999998);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addBox();
myNode7.point1.set(3.57105,-2.14295,3.57105);
myNode7.point2.set(4.99995,2.14295,4.99995);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);
myNode7.innerTranslation.vector.set(4.2855,0.0,4.2855);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addBox();
myNode8.point1.set(-2.14295,0.71405,3.57105);
myNode8.point2.set(3.57095,2.14295,4.99995);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.innerTranslation.vector.set(0.714,1.4285,4.2855);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(-4.99995,-2.14295,-2.14295);
myNode9.point2.set(-3.57105,4.99995,0.7139500000000001);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.innerTranslation.vector.set(-4.2855,1.4285,-0.7144999999999999);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(-4.99995,-3.57095,0.71405);
myNode10.point2.set(2.14295,4.99995,2.14295);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.innerTranslation.vector.set(-1.4285,0.7145000000000001,1.4285);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addFuseOperation();
myNode11.leftArg.set(myNode9);
myNode11.rightArg.set(myNode10);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addBox();
myNode12.point1.set(-18.1,-3.571,-0.714);
myNode12.point2.set(0.7139999999999986,3.5719999999999996,2.1430000000000002);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);
myNode12.innerTranslation.vector.set(-8.693000000000001,0.0004999999999997229,0.7145000000000001);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addCutOperation();
myNode13.leftArg.set(myNode11);
myNode13.rightArg.set(myNode12);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addBox();
myNode14.point1.set(-4.99995,-2.14295,-2.14295);
myNode14.point2.set(4.99995,-0.7140499999999999,-0.7140499999999999);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);
myNode14.innerTranslation.vector.set(0.0,-1.4284999999999999,-1.4284999999999999);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15_1 = myNode5.clone();
myNode15_1.isVisible = false;
const myNode15_2 = object.addFuseOperation();
myNode15_2.leftArg.set(myNode15_1);
myNode15_2.rightArg.set(myNode6);
myNode15_2.isVisible = false;
const myNode15_3 = object.addFuseOperation();
myNode15_3.leftArg.set(myNode15_2);
myNode15_3.rightArg.set(myNode7);
myNode15_3.isVisible = false;
const myNode15_4 = object.addFuseOperation();
myNode15_4.leftArg.set(myNode15_3);
myNode15_4.rightArg.set(myNode8);
myNode15_4.isVisible = false;
const myNode15_5 = object.addFuseOperation();
myNode15_5.leftArg.set(myNode15_4);
myNode15_5.rightArg.set(myNode13);
myNode15_5.isVisible = false;
myNode15 = object.addFuseOperation();
myNode15.leftArg.set(myNode15_5);
myNode15.rightArg.set(myNode14);
myNode15.isVisible = false;
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addCommonOperation();
myNode16.leftArg.set(myNode0);
myNode16.rightArg.set(myNode15);
myNode16.isVisible = true;


/*END Geometry Object Definition*/