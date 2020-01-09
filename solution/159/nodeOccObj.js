/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addCylinder();
myNode0.point1.set(2.484,2.472,-18.2499);
myNode0.point2.set(2.484,2.472,-5.0);
myNode0.radius.set(0.75);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-2.99995,-2.99995,-4.99995);
myNode1.point2.set(2.99995,18.24995,4.99995);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.innerTranslation.vector.set(0,0,0);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addCommonOperation();
myNode2.leftArg.set(myNode0);
myNode2.rightArg.set(myNode1);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addSphere();
myNode3.center.set(0,0,0);
myNode3.radius.set(54.74988584462985);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(-2.453,-1.251,-18.25);
myNode4.point2.set(-2.453,-1.251,5.0);
myNode4.radius.set(0.299);
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
const myNode6 = object.addCylinder();
myNode6.point1.set(2.484,2.472,-18.25);
myNode6.point2.set(2.484,2.472,5.0);
myNode6.radius.set(0.75);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addCylinder();
myNode7.point1.set(2.473,-2.475,-18.25);
myNode7.point2.set(2.473,-2.475,18.25);
myNode7.radius.set(0.751);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addFuseOperation();
myNode8.leftArg.set(myNode6);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addCutOperation();
myNode9.leftArg.set(myNode5);
myNode9.rightArg.set(myNode8);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addCylinder();
myNode10.point1.set(2.452,1.25,-18.25);
myNode10.point2.set(2.452,1.25,5.0);
myNode10.radius.set(0.303);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addCylinder();
myNode11.point1.set(-2.475,-2.466,-5);
myNode11.point2.set(-2.475,-2.466,18.25);
myNode11.radius.set(0.745);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(1.246,-2.448,-18.25);
myNode12.point2.set(1.246,-2.448,5.0);
myNode12.radius.set(0.302);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addCylinder();
myNode13.point1.set(-2.463,2.471,-5);
myNode13.point2.set(-2.463,2.471,5);
myNode13.radius.set(0.747);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14_1 = myNode10.clone();
myNode14_1.isVisible = false;
const myNode14_2 = object.addFuseOperation();
myNode14_2.leftArg.set(myNode14_1);
myNode14_2.rightArg.set(myNode11);
myNode14_2.isVisible = false;
const myNode14_3 = object.addFuseOperation();
myNode14_3.leftArg.set(myNode14_2);
myNode14_3.rightArg.set(myNode12);
myNode14_3.isVisible = false;
myNode14 = object.addFuseOperation();
myNode14.leftArg.set(myNode14_3);
myNode14.rightArg.set(myNode13);
myNode14.isVisible = false;
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addCutOperation();
myNode15.leftArg.set(myNode9);
myNode15.rightArg.set(myNode14);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addBox();
myNode16.point1.set(-2.99995,-2.99995,-4.99995);
myNode16.point2.set(2.99995,2.99995,4.99995);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);
myNode16.innerTranslation.vector.set(0,0,0);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addCylinder();
myNode17.point1.set(-1.251,2.451,-5);
myNode17.point2.set(-1.251,2.451,18.25);
myNode17.radius.set(0.293);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(0.01,-0.01,-18.25);
myNode18.point2.set(0.01,-0.01,18.25);
myNode18.radius.set(2.251);
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
const myNode21 = object.addCommonOperation();
myNode21.leftArg.set(myNode15);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addFuseOperation();
myNode22.leftArg.set(myNode2);
myNode22.rightArg.set(myNode21);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addBox();
myNode23.point1.set(-3.59995,-3.59995,-5.99995);
myNode23.point2.set(3.59995,3.59995,5.99995);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);
myNode23.innerTranslation.vector.set(0,0,0);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addCommonOperation();
myNode24.leftArg.set(myNode22);
myNode24.rightArg.set(myNode23);
myNode24.isVisible = true;


/*END Geometry Object Definition*/