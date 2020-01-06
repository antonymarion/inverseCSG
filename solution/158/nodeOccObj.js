/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.99995,-5.99995,-3.29995);
myNode0.point2.set(5.99995,5.99995,3.29995);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.isVisible = False

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-4.99995,-4.99995,-2.74995);
myNode1.point2.set(4.99995,4.99995,0.24994999999999967);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.isVisible = False

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(2.253,-3.906,-2.75);
myNode2.point2.set(2.253,-3.906,19.0);
myNode2.radius.set(0.5);
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
myNode4.point1.set(-4.608,4.627,-2.75);
myNode4.point2.set(-4.608,4.627,0.25);
myNode4.radius.set(1.518);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.isVisible = False

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(4.603,-4.614,-2.75);
myNode5.point2.set(4.603,-4.614,19.0);
myNode5.radius.set(1.517);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.isVisible = False

/* définition du node n°6*/
const myNode6 = object.addFuseOperation();
myNode6.leftArg.set(myNode4);
myNode6.rightArg.set(myNode5);
myNode6.isVisible = False

/* définition du node n°7*/
const myNode7 = object.addCutOperation();
myNode7.leftArg.set(myNode3);
myNode7.rightArg.set(myNode6);
myNode7.isVisible = False

/* définition du node n°8*/
const myNode8 = object.addCylinder();
myNode8.point1.set(-3.893,-2.245,-2.75);
myNode8.point2.set(-3.893,-2.245,19.0);
myNode8.radius.set(0.503);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.isVisible = False

/* définition du node n°9*/
const myNode9 = object.addCutOperation();
myNode9.leftArg.set(myNode7);
myNode9.rightArg.set(myNode8);
myNode9.isVisible = False

/* définition du node n°10*/
const myNode10 = object.addCylinder();
myNode10.point1.set(4.59,4.608,-2.75);
myNode10.point2.set(4.59,4.608,19.0);
myNode10.radius.set(1.502);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.isVisible = False

/* définition du node n°11*/
const myNode11 = object.addCylinder();
myNode11.point1.set(-4.62,-4.603,-19);
myNode11.point2.set(-4.62,-4.603,0.25);
myNode11.radius.set(1.518);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);
myNode11.isVisible = False

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(3.898,2.249,-19);
myNode12.point2.set(3.898,2.249,0.25);
myNode12.radius.set(0.504);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);
myNode12.isVisible = False

/* définition du node n°13*/
const myNode13 = object.addCylinder();
myNode13.point1.set(-2.25,3.899,-19);
myNode13.point2.set(-2.25,3.899,0.25);
myNode13.radius.set(0.498);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);
myNode13.isVisible = False

/* définition du node n°14*/
const myNode14_1 = object.addFuseOperation();
myNode14_1.leftArg.set(myNode10);
myNode14_1.rightArg.set(myNode10);
const myNode14_2 = object.addFuseOperation();
myNode14_2.leftArg.set(myNode14_1);
myNode14_2.rightArg.set(myNode11);
const myNode14_3 = object.addFuseOperation();
myNode14_3.leftArg.set(myNode14_2);
myNode14_3.rightArg.set(myNode12);
myNode14 = object.addFuseOperation();
myNode14.leftArg.set(myNode14_3);
myNode14.rightArg.set(myNode13);
myNode14.isVisible = False

/* définition du node n°15*/
const myNode15 = object.addCutOperation();
myNode15.leftArg.set(myNode9);
myNode15.rightArg.set(myNode14);
myNode15.isVisible = False

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(0.009,0.019,2.25005);
myNode16.point2.set(0.009,0.019,2.74995);
myNode16.radius.set(2.994);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);
myNode16.isVisible = False

/* définition du node n°17*/
const myNode17 = object.addCylinder();
myNode17.point1.set(-0.009,0.002,1.75005);
myNode17.point2.set(-0.009,0.002,2.74995);
myNode17.radius.set(2.5);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.isVisible = False

/* définition du node n°18*/
const myNode18 = object.addFuseOperation();
myNode18.leftArg.set(myNode16);
myNode18.rightArg.set(myNode17);
myNode18.isVisible = False

/* définition du node n°19*/
const myNode19 = object.addCylinder();
myNode19.point1.set(0.038,0,1.75);
myNode19.point2.set(0.038,0,19.0);
myNode19.radius.set(1.502);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(0.0,0.0,0.0);
myNode19.innerRotation.angle.set(0.0);
myNode19.isVisible = False

/* définition du node n°20*/
const myNode20 = object.addCutOperation();
myNode20.leftArg.set(myNode18);
myNode20.rightArg.set(myNode19);
myNode20.isVisible = False

/* définition du node n°21*/
const myNode21 = object.addCylinder();
myNode21.point1.set(0.009,0.019,0.25005);
myNode21.point2.set(0.009,0.019,1.7499500000000001);
myNode21.radius.set(2.994);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);
myNode21.isVisible = False

/* définition du node n°22*/
const myNode22 = object.addCylinder();
myNode22.point1.set(0.014,0.036,1.25);
myNode22.point2.set(0.014,0.036,2.25);
myNode22.radius.set(1.003);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(0.0,0.0,0.0);
myNode22.innerRotation.angle.set(0.0);
myNode22.isVisible = False

/* définition du node n°23*/
const myNode23 = object.addCutOperation();
myNode23.leftArg.set(myNode21);
myNode23.rightArg.set(myNode22);
myNode23.isVisible = False

/* définition du node n°24*/
const myNode24_1 = object.addFuseOperation();
myNode24_1.leftArg.set(myNode15);
myNode24_1.rightArg.set(myNode15);
const myNode24_2 = object.addFuseOperation();
myNode24_2.leftArg.set(myNode24_1);
myNode24_2.rightArg.set(myNode20);
myNode24 = object.addFuseOperation();
myNode24.leftArg.set(myNode24_2);
myNode24.rightArg.set(myNode23);
myNode24.isVisible = False

/* définition du node n°25*/
const myNode25 = object.addCommonOperation();
myNode25.leftArg.set(myNode0);
myNode25.rightArg.set(myNode24);
myNode25.isVisible = True


/*END Geometry Object Definition*/