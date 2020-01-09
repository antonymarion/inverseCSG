/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(3.57105,-2.14295,3.57105);
myNode0.point2.set(4.99995,2.14295,4.99995);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(4.2855,0.0,4.2855);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-4.99995,-2.14295,-2.14295);
myNode1.point2.set(4.99995,-0.7140499999999999,-0.7140499999999999);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.innerTranslation.vector.set(0.0,-1.4284999999999999,-1.4284999999999999);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(3.57105,-2.14295,-0.71395);
myNode2.point2.set(4.99995,-0.7140499999999999,3.5719499999999997);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.innerTranslation.vector.set(4.2855,-1.4284999999999999,1.4289999999999998);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addBox();
myNode3.point1.set(-4.99995,-2.14295,-2.14295);
myNode3.point2.set(-3.57105,4.99995,0.7139500000000001);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);
myNode3.innerTranslation.vector.set(-4.2855,1.4285,-0.7144999999999999);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addBox();
myNode4.point1.set(-4.99995,-3.57095,0.71405);
myNode4.point2.set(2.14295,4.99995,2.14295);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.innerTranslation.vector.set(-1.4285,0.7145000000000001,1.4285);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addFuseOperation();
myNode5.leftArg.set(myNode3);
myNode5.rightArg.set(myNode4);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addBox();
myNode6.point1.set(-18.1,-3.571,-0.714);
myNode6.point2.set(0.7139999999999986,3.5719999999999996,2.1430000000000002);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.innerTranslation.vector.set(-8.693000000000001,0.0004999999999997229,0.7145000000000001);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addCutOperation();
myNode7.leftArg.set(myNode5);
myNode7.rightArg.set(myNode6);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addBox();
myNode8.point1.set(-2.14295,-4.99995,-4.99995);
myNode8.point2.set(2.14295,-3.57105,2.14295);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.innerTranslation.vector.set(0.0,-4.2855,-1.4285);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(-2.14295,-4.99995,-4.99995);
myNode9.point2.set(-0.7140499999999999,2.14295,4.99995);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.innerTranslation.vector.set(-1.4284999999999999,-1.4285,0.0);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addFuseOperation();
myNode10.leftArg.set(myNode8);
myNode10.rightArg.set(myNode9);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addBox();
myNode11.point1.set(-2.143,-5,-3.571);
myNode11.point2.set(0.7140000000000004,0.7140000000000004,5.0);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);
myNode11.innerTranslation.vector.set(-0.7144999999999997,-2.143,0.7144999999999997);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCutOperation();
myNode12.leftArg.set(myNode10);
myNode12.rightArg.set(myNode11);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addBox();
myNode13.point1.set(-2.14295,0.71405,3.57105);
myNode13.point2.set(3.57095,2.14295,4.99995);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);
myNode13.innerTranslation.vector.set(0.714,1.4285,4.2855);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14_1 = myNode0.clone();
myNode14_1.isVisible = false;
const myNode14_2 = object.addFuseOperation();
myNode14_2.leftArg.set(myNode14_1);
myNode14_2.rightArg.set(myNode1);
myNode14_2.isVisible = false;
const myNode14_3 = object.addFuseOperation();
myNode14_3.leftArg.set(myNode14_2);
myNode14_3.rightArg.set(myNode2);
myNode14_3.isVisible = false;
const myNode14_4 = object.addFuseOperation();
myNode14_4.leftArg.set(myNode14_3);
myNode14_4.rightArg.set(myNode7);
myNode14_4.isVisible = false;
const myNode14_5 = object.addFuseOperation();
myNode14_5.leftArg.set(myNode14_4);
myNode14_5.rightArg.set(myNode12);
myNode14_5.isVisible = false;
myNode14 = object.addFuseOperation();
myNode14.leftArg.set(myNode14_5);
myNode14.rightArg.set(myNode13);
myNode14.isVisible = false;
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addBox();
myNode15.point1.set(-5.99995,-5.99995,-5.99995);
myNode15.point2.set(5.99995,5.99995,5.99995);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);
myNode15.innerTranslation.vector.set(0.0,0.0,0.0);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addCommonOperation();
myNode16.leftArg.set(myNode14);
myNode16.rightArg.set(myNode15);
myNode16.isVisible = true;


/*END Geometry Object Definition*/