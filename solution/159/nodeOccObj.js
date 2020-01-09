/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-3.59995,-3.59995,-5.99995);
myNode0.point2.set(3.59995,3.59995,5.99995);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(0.0,0.0,0.0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addSphere();
myNode1.center.set(0,0,0);
myNode1.radius.set(54.74988584462985);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(-2.453,-1.251,-18.25);
myNode2.point2.set(-2.453,-1.251,5.0);
myNode2.radius.set(0.299);
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
myNode4.point1.set(2.484,2.472,-18.25);
myNode4.point2.set(2.484,2.472,5.0);
myNode4.radius.set(0.75);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(2.473,-2.475,-18.25);
myNode5.point2.set(2.473,-2.475,18.25);
myNode5.radius.set(0.751);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addFuseOperation();
myNode6.leftArg.set(myNode4);
myNode6.rightArg.set(myNode5);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addCutOperation();
myNode7.leftArg.set(myNode3);
myNode7.rightArg.set(myNode6);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addCylinder();
myNode8.point1.set(2.452,1.25,-18.25);
myNode8.point2.set(2.452,1.25,5.0);
myNode8.radius.set(0.303);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addCylinder();
myNode9.point1.set(1.246,-2.448,-18.25);
myNode9.point2.set(1.246,-2.448,5.0);
myNode9.radius.set(0.302);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addCylinder();
myNode10.point1.set(-2.463,2.471,-5);
myNode10.point2.set(-2.463,2.471,5);
myNode10.radius.set(0.747);
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
const myNode12_1 = myNode8.clone();
myNode12_1.isVisible = false;
const myNode12_2 = object.addFuseOperation();
myNode12_2.leftArg.set(myNode12_1);
myNode12_2.rightArg.set(myNode9);
myNode12_2.isVisible = false;
const myNode12_3 = object.addFuseOperation();
myNode12_3.leftArg.set(myNode12_2);
myNode12_3.rightArg.set(myNode10);
myNode12_3.isVisible = false;
myNode12 = object.addFuseOperation();
myNode12.leftArg.set(myNode12_3);
myNode12.rightArg.set(myNode11);
myNode12.isVisible = false;
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addCutOperation();
myNode13.leftArg.set(myNode7);
myNode13.rightArg.set(myNode12);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addBox();
myNode14.point1.set(-2.99995,-2.99995,-4.99995);
myNode14.point2.set(2.99995,2.99995,4.99995);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);
myNode14.innerTranslation.vector.set(0.0,0.0,0.0);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addCylinder();
myNode15.point1.set(-1.251,2.451,-5);
myNode15.point2.set(-1.251,2.451,18.25);
myNode15.radius.set(0.293);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(0.01,-0.01,-18.25);
myNode16.point2.set(0.01,-0.01,18.25);
myNode16.radius.set(2.251);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addFuseOperation();
myNode17.leftArg.set(myNode15);
myNode17.rightArg.set(myNode16);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addCutOperation();
myNode18.leftArg.set(myNode14);
myNode18.rightArg.set(myNode17);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addCommonOperation();
myNode19.leftArg.set(myNode13);
myNode19.rightArg.set(myNode18);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addBox();
myNode20.point1.set(-2.99995,-2.99995,-4.99995);
myNode20.point2.set(2.99995,18.24995,4.99995);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);
myNode20.innerTranslation.vector.set(0.0,7.625,0.0);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addCylinder();
myNode21.point1.set(2.484,2.472,-18.2499);
myNode21.point2.set(2.484,2.472,-5.0);
myNode21.radius.set(0.75);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addCommonOperation();
myNode22.leftArg.set(myNode20);
myNode22.rightArg.set(myNode21);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addFuseOperation();
myNode23.leftArg.set(myNode19);
myNode23.rightArg.set(myNode22);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addCommonOperation();
myNode24.leftArg.set(myNode0);
myNode24.rightArg.set(myNode23);
myNode24.isVisible = true;


/*END Geometry Object Definition*/