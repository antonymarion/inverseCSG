/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.9999,-3.2009,-3.2789);
myNode0.point2.set(5.9999,3.2009,3.2789);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(0.0,0.0,0.0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-1.0579,-2.6669,-2.7329);
myNode1.point2.set(3.8609,2.6679000000000004,-2.0820999999999996);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.innerTranslation.vector.set(1.4015,0.000500000000000167,-2.4074999999999998);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(-2.293,0.001,-18.0999);
myNode2.point2.set(-2.293,0.001,18.099999999999998);
myNode2.radius.set(1.559);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode2.innerRotation.angle.set(3.141592653586273);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(-1.741,-1.011,-18.0999);
myNode3.point2.set(-1.741,-1.011,18.099999999999998);
myNode3.radius.set(0.225);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(1.3457063423807893,2.821314744292338,-0.011747549389447462);
myNode3.innerRotation.angle.set(3.1258407590921644);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addFuseOperation();
myNode4.leftArg.set(myNode2);
myNode4.rightArg.set(myNode3);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addCutOperation();
myNode5.leftArg.set(myNode1);
myNode5.rightArg.set(myNode4);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addBox();
myNode6.point1.set(-18.0999,-2.6669,-2.7329);
myNode6.point2.set(-0.4651000000000032,2.6679000000000004,2.7319000000000004);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.innerTranslation.vector.set(-9.282500000000002,0.000500000000000167,-0.0004999999999997229);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addCylinder();
myNode7.point1.set(-0.682,2.949,-2.66695);
myNode7.point2.set(-0.682,2.949,18.09995);
myNode7.radius.set(1.639);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode7.innerRotation.angle.set(2.094392392986396);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addCutOperation();
myNode8.leftArg.set(myNode6);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addCylinder();
myNode9.point1.set(3.236,2.872,-2.66695);
myNode9.point2.set(3.236,2.872,2.6679500000000003);
myNode9.radius.set(1.877);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode9.innerRotation.angle.set(2.094392392986396);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(-18.0999,-1.02795,-2.73295);
myNode10.point2.set(-1.0580000000000034,1.02795,2.73195);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.innerTranslation.vector.set(-9.578950000000003,0.0,-0.000500000000000167);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addFuseOperation();
myNode11.leftArg.set(myNode9);
myNode11.rightArg.set(myNode10);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCutOperation();
myNode12.leftArg.set(myNode8);
myNode12.rightArg.set(myNode11);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addCylinder();
myNode13.point1.set(-0.665,-1.837,-18.0999);
myNode13.point2.set(-0.665,-1.837,-2.8720000000000017);
myNode13.radius.set(0.213);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(7.65541309174553e-12,1.5707926535897931,7.65541309174553e-12);
myNode13.innerRotation.angle.set(1.5707926535897931);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addCutOperation();
myNode14.leftArg.set(myNode12);
myNode14.rightArg.set(myNode13);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addBox();
myNode15.point1.set(-18.0999,-18.0999,-2.73295);
myNode15.point2.set(-2.8720000000000017,18.099999999999998,2.73195);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);
myNode15.innerTranslation.vector.set(-10.485950000000003,4.9999999998107114e-05,-0.000500000000000167);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(-0.685,2.962,-18.1);
myNode16.point2.set(-0.685,2.962,18.1);
myNode16.radius.set(2.037);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode16.innerRotation.angle.set(2.094392392986396);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addCutOperation();
myNode17.leftArg.set(myNode15);
myNode17.rightArg.set(myNode16);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(-0.677,1.868,-18.0999);
myNode18.point2.set(-0.677,1.868,-2.8720000000000017);
myNode18.radius.set(0.214);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode18.innerRotation.angle.set(1.5707926535968346);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addFuseOperation();
myNode19.leftArg.set(myNode17);
myNode19.rightArg.set(myNode18);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addCutOperation();
myNode20.leftArg.set(myNode14);
myNode20.rightArg.set(myNode19);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addBox();
myNode21.point1.set(3.8611,-2.6669,-2.7329);
myNode21.point2.set(5.0019,1.0278999999999998,-2.0820999999999996);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);
myNode21.innerTranslation.vector.set(4.4315,-0.8195000000000001,-2.4074999999999998);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addCylinder();
myNode22.point1.set(4.358,-2.021,-18.0999);
myNode22.point2.set(4.358,-2.021,18.099999999999998);
myNode22.radius.set(0.226);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(0.0,0.0,0.0);
myNode22.innerRotation.angle.set(0.0);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addCutOperation();
myNode23.leftArg.set(myNode21);
myNode23.rightArg.set(myNode22);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addCylinder();
myNode24.point1.set(-1.425,3.95,-18.0999);
myNode24.point2.set(-1.425,3.95,18.0999);
myNode24.radius.set(1.253);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(1.2399092101153921,2.8516043047009862,-0.02163892270382866);
myNode24.innerRotation.angle.set(3.1095803901642345);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addFuseOperation();
myNode25.leftArg.set(myNode23);
myNode25.rightArg.set(myNode24);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addCylinder();
myNode26.point1.set(-1.454,-4.03499,-18.0999);
myNode26.point2.set(-1.454,-4.03499,18.0999);
myNode26.radius.set(1.153);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(-1.214936286172274,2.86220594294161,0.021203004446183695);
myNode26.innerRotation.angle.set(3.1094601793021717);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addBox();
myNode27.point1.set(3.8611,-1.0279,-2.7329);
myNode27.point2.set(5.0019,2.6679000000000004,-2.0820999999999996);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);
myNode27.innerTranslation.vector.set(4.4315,0.8200000000000001,-2.4074999999999998);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addCylinder();
myNode28.point1.set(-4.348,2.024,-18.0999);
myNode28.point2.set(-4.348,2.024,2.732999999999997);
myNode28.radius.set(0.225);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode28.innerRotation.angle.set(3.141592653586273);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addCutOperation();
myNode29.leftArg.set(myNode27);
myNode29.rightArg.set(myNode28);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addFuseOperation();
myNode30.leftArg.set(myNode26);
myNode30.rightArg.set(myNode29);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addCommonOperation();
myNode31.leftArg.set(myNode25);
myNode31.rightArg.set(myNode30);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32_1 = myNode5.clone();
myNode32_1.isVisible = false;
const myNode32_2 = object.addFuseOperation();
myNode32_2.leftArg.set(myNode32_1);
myNode32_2.rightArg.set(myNode20);
myNode32_2.isVisible = false;
myNode32 = object.addFuseOperation();
myNode32.leftArg.set(myNode32_2);
myNode32.rightArg.set(myNode31);
myNode32.isVisible = false;
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addCommonOperation();
myNode33.leftArg.set(myNode0);
myNode33.rightArg.set(myNode32);
myNode33.isVisible = true;


/*END Geometry Object Definition*/