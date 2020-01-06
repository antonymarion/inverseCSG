/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-1.0579,-2.6669,-2.7329);
myNode0.point2.set(3.8609,2.6679000000000004,-2.0820999999999996);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.isVisible = False

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(-2.293,0.001,-18.0999);
myNode1.point2.set(-2.293,0.001,18.099999999999998);
myNode1.radius.set(1.559);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode1.innerRotation.angle.set(3.141592653586273);
myNode1.isVisible = False

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(-1.741,-1.011,-18.0999);
myNode2.point2.set(-1.741,-1.011,18.099999999999998);
myNode2.radius.set(0.225);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(1.3457063423807893,2.821314744292338,-0.011747549389447462);
myNode2.innerRotation.angle.set(3.1258407590921644);
myNode2.isVisible = False

/* définition du node n°3*/
const myNode3 = object.addFuseOperation();
myNode3.leftArg.set(myNode1);
myNode3.rightArg.set(myNode2);
myNode3.isVisible = False

/* définition du node n°4*/
const myNode4 = object.addCutOperation();
myNode4.leftArg.set(myNode0);
myNode4.rightArg.set(myNode3);
myNode4.isVisible = False

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(-1.454,-4.03499,-18.0999);
myNode5.point2.set(-1.454,-4.03499,18.0999);
myNode5.radius.set(1.153);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(-1.214936286172274,2.86220594294161,0.021203004446183695);
myNode5.innerRotation.angle.set(3.1094601793021717);
myNode5.isVisible = False

/* définition du node n°6*/
const myNode6 = object.addBox();
myNode6.point1.set(3.8611,-1.0279,-2.7329);
myNode6.point2.set(5.0019,2.6679000000000004,-2.0820999999999996);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.isVisible = False

/* définition du node n°7*/
const myNode7 = object.addCylinder();
myNode7.point1.set(-4.348,2.024,-18.0999);
myNode7.point2.set(-4.348,2.024,2.732999999999997);
myNode7.radius.set(0.225);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode7.innerRotation.angle.set(3.141592653586273);
myNode7.isVisible = False

/* définition du node n°8*/
const myNode8 = object.addCutOperation();
myNode8.leftArg.set(myNode6);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = False

/* définition du node n°9*/
const myNode9 = object.addFuseOperation();
myNode9.leftArg.set(myNode5);
myNode9.rightArg.set(myNode8);
myNode9.isVisible = False

/* définition du node n°10*/
const myNode10 = object.addCylinder();
myNode10.point1.set(-1.425,3.95,-18.0999);
myNode10.point2.set(-1.425,3.95,18.0999);
myNode10.radius.set(1.253);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(1.2399092101153921,2.8516043047009862,-0.02163892270382866);
myNode10.innerRotation.angle.set(3.1095803901642345);
myNode10.isVisible = False

/* définition du node n°11*/
const myNode11 = object.addBox();
myNode11.point1.set(3.8611,-2.6669,-2.7329);
myNode11.point2.set(5.0019,1.0278999999999998,-2.0820999999999996);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);
myNode11.isVisible = False

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(4.358,-2.021,-18.0999);
myNode12.point2.set(4.358,-2.021,18.099999999999998);
myNode12.radius.set(0.226);
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
myNode14.leftArg.set(myNode10);
myNode14.rightArg.set(myNode13);
myNode14.isVisible = False

/* définition du node n°15*/
const myNode15 = object.addCommonOperation();
myNode15.leftArg.set(myNode9);
myNode15.rightArg.set(myNode14);
myNode15.isVisible = False

/* définition du node n°16*/
const myNode16 = object.addBox();
myNode16.point1.set(-18.0999,-2.6669,-2.7329);
myNode16.point2.set(-0.4651000000000032,2.6679000000000004,2.7319000000000004);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);
myNode16.isVisible = False

/* définition du node n°17*/
const myNode17 = object.addCylinder();
myNode17.point1.set(-0.682,2.949,-2.66695);
myNode17.point2.set(-0.682,2.949,18.09995);
myNode17.radius.set(1.639);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode17.innerRotation.angle.set(2.094392392986396);
myNode17.isVisible = False

/* définition du node n°18*/
const myNode18 = object.addCutOperation();
myNode18.leftArg.set(myNode16);
myNode18.rightArg.set(myNode17);
myNode18.isVisible = False

/* définition du node n°19*/
const myNode19 = object.addBox();
myNode19.point1.set(-18.0999,-1.02795,-2.73295);
myNode19.point2.set(-1.0580000000000034,1.02795,2.73195);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(0.0,0.0,0.0);
myNode19.innerRotation.angle.set(0.0);
myNode19.isVisible = False

/* définition du node n°20*/
const myNode20 = object.addCylinder();
myNode20.point1.set(3.236,2.872,-2.66695);
myNode20.point2.set(3.236,2.872,2.6679500000000003);
myNode20.radius.set(1.877);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode20.innerRotation.angle.set(2.094392392986396);
myNode20.isVisible = False

/* définition du node n°21*/
const myNode21 = object.addFuseOperation();
myNode21.leftArg.set(myNode19);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = False

/* définition du node n°22*/
const myNode22 = object.addCutOperation();
myNode22.leftArg.set(myNode18);
myNode22.rightArg.set(myNode21);
myNode22.isVisible = False

/* définition du node n°23*/
const myNode23 = object.addCylinder();
myNode23.point1.set(-0.665,-1.837,-18.0999);
myNode23.point2.set(-0.665,-1.837,-2.8720000000000017);
myNode23.radius.set(0.213);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(7.65541309174553e-12,1.5707926535897931,7.65541309174553e-12);
myNode23.innerRotation.angle.set(1.5707926535897931);
myNode23.isVisible = False

/* définition du node n°24*/
const myNode24 = object.addCutOperation();
myNode24.leftArg.set(myNode22);
myNode24.rightArg.set(myNode23);
myNode24.isVisible = False

/* définition du node n°25*/
const myNode25 = object.addCylinder();
myNode25.point1.set(-0.677,1.868,-18.0999);
myNode25.point2.set(-0.677,1.868,-2.8720000000000017);
myNode25.radius.set(0.214);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode25.innerRotation.angle.set(1.5707926535968346);
myNode25.isVisible = False

/* définition du node n°26*/
const myNode26 = object.addBox();
myNode26.point1.set(-18.0999,-18.0999,-2.73295);
myNode26.point2.set(-2.8720000000000017,18.099999999999998,2.73195);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);
myNode26.isVisible = False

/* définition du node n°27*/
const myNode27 = object.addCylinder();
myNode27.point1.set(-0.685,2.962,-18.1);
myNode27.point2.set(-0.685,2.962,18.1);
myNode27.radius.set(2.037);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode27.innerRotation.angle.set(2.094392392986396);
myNode27.isVisible = False

/* définition du node n°28*/
const myNode28 = object.addCutOperation();
myNode28.leftArg.set(myNode26);
myNode28.rightArg.set(myNode27);
myNode28.isVisible = False

/* définition du node n°29*/
const myNode29 = object.addFuseOperation();
myNode29.leftArg.set(myNode25);
myNode29.rightArg.set(myNode28);
myNode29.isVisible = False

/* définition du node n°30*/
const myNode30 = object.addCutOperation();
myNode30.leftArg.set(myNode24);
myNode30.rightArg.set(myNode29);
myNode30.isVisible = False

/* définition du node n°31*/
const myNode31_1 = object.addFuseOperation();
myNode31_1.leftArg.set(myNode4);
myNode31_1.rightArg.set(myNode4);
const myNode31_2 = object.addFuseOperation();
myNode31_2.leftArg.set(myNode31_1);
myNode31_2.rightArg.set(myNode15);
myNode31 = object.addFuseOperation();
myNode31.leftArg.set(myNode31_2);
myNode31.rightArg.set(myNode30);
myNode31.isVisible = False

/* définition du node n°32*/
const myNode32 = object.addBox();
myNode32.point1.set(-5.9999,-3.2009,-3.2789);
myNode32.point2.set(5.9999,3.2009,3.2789);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);
myNode32.isVisible = False

/* définition du node n°33*/
const myNode33 = object.addCommonOperation();
myNode33.leftArg.set(myNode31);
myNode33.rightArg.set(myNode32);
myNode33.isVisible = True


/*END Geometry Object Definition*/