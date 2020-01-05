/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addCylinder();
myNode0.point1.set(-1.425,3.95,-18.0999);
myNode0.point2.set(0,0,36.1998);
myNode0.radius.set(1.253);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(1.2399092101153921,2.8516043047009862,-0.02163892270382866);
myNode0.innerRotation.angle.set(3.1095803901642345);

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(3.8611,-2.6669,-2.7329);
myNode1.point2.set(1.1408,3.6948,0.6508);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(4.358,-2.021,-18.0999);
myNode2.point2.set(0,0,36.1999);
myNode2.radius.set(0.226);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);

/* définition du node n°3*/
const myNode3 = object.addCutOperation();
myNode3.leftArg.set(myNode1);
myNode3.rightArg.set(myNode2);

/* définition du node n°4*/
const myNode4 = object.addFuseOperation();
myNode4.leftArg.set(myNode0);
myNode4.rightArg.set(myNode3);

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(-1.454,-4.03499,-18.0999);
myNode5.point2.set(0,0,36.1998);
myNode5.radius.set(1.153);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(-1.214936286172274,2.86220594294161,0.021203004446183695);
myNode5.innerRotation.angle.set(3.1094601793021717);

/* définition du node n°6*/
const myNode6 = object.addBox();
myNode6.point1.set(3.8611,-1.0279,-2.7329);
myNode6.point2.set(1.1408,3.6958,0.6508);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);

/* définition du node n°7*/
const myNode7 = object.addCylinder();
myNode7.point1.set(-4.348,2.024,-18.0999);
myNode7.point2.set(0,0,20.8329);
myNode7.radius.set(0.225);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode7.innerRotation.angle.set(3.141592653586273);

/* définition du node n°8*/
const myNode8 = object.addCutOperation();
myNode8.leftArg.set(myNode6);
myNode8.rightArg.set(myNode7);

/* définition du node n°9*/
const myNode9 = object.addFuseOperation();
myNode9.leftArg.set(myNode5);
myNode9.rightArg.set(myNode8);

/* définition du node n°10*/
const myNode10 = object.addCommonOperation();
myNode10.leftArg.set(myNode4);
myNode10.rightArg.set(myNode9);

/* définition du node n°11*/
const myNode11 = object.addBox();
myNode11.point1.set(-18.0999,-2.6669,-2.7329);
myNode11.point2.set(17.6348,5.3348,5.4648);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(-0.682,2.949,-2.66695);
myNode12.point2.set(0,0,20.7669);
myNode12.radius.set(1.639);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode12.innerRotation.angle.set(2.094392392986396);

/* définition du node n°13*/
const myNode13 = object.addCutOperation();
myNode13.leftArg.set(myNode11);
myNode13.rightArg.set(myNode12);

/* définition du node n°14*/
const myNode14 = object.addBox();
myNode14.point1.set(-18.0999,-1.02795,-2.73295);
myNode14.point2.set(17.0419,2.0559,5.4649);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);

/* définition du node n°15*/
const myNode15 = object.addCylinder();
myNode15.point1.set(3.236,2.872,-2.66695);
myNode15.point2.set(0,0,5.3349);
myNode15.radius.set(1.877);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode15.innerRotation.angle.set(2.094392392986396);

/* définition du node n°16*/
const myNode16 = object.addFuseOperation();
myNode16.leftArg.set(myNode14);
myNode16.rightArg.set(myNode15);

/* définition du node n°17*/
const myNode17 = object.addCutOperation();
myNode17.leftArg.set(myNode13);
myNode17.rightArg.set(myNode16);

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(-0.665,-1.837,-18.0999);
myNode18.point2.set(0,0,15.2279);
myNode18.radius.set(0.213);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(7.65541309174553e-12,1.5707926535897931,7.65541309174553e-12);
myNode18.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°19*/
const myNode19 = object.addCutOperation();
myNode19.leftArg.set(myNode17);
myNode19.rightArg.set(myNode18);

/* définition du node n°20*/
const myNode20 = object.addCylinder();
myNode20.point1.set(-0.677,1.868,-18.0999);
myNode20.point2.set(0,0,15.2279);
myNode20.radius.set(0.214);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode20.innerRotation.angle.set(1.5707926535968346);

/* définition du node n°21*/
const myNode21 = object.addBox();
myNode21.point1.set(-18.0999,-18.0999,-2.73295);
myNode21.point2.set(15.2279,36.1999,5.4649);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);

/* définition du node n°22*/
const myNode22 = object.addCylinder();
myNode22.point1.set(-0.685,2.962,-18.1);
myNode22.point2.set(0,0,36.2);
myNode22.radius.set(2.037);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode22.innerRotation.angle.set(2.094392392986396);

/* définition du node n°23*/
const myNode23 = object.addCutOperation();
myNode23.leftArg.set(myNode21);
myNode23.rightArg.set(myNode22);

/* définition du node n°24*/
const myNode24 = object.addFuseOperation();
myNode24.leftArg.set(myNode20);
myNode24.rightArg.set(myNode23);

/* définition du node n°25*/
const myNode25 = object.addCutOperation();
myNode25.leftArg.set(myNode19);
myNode25.rightArg.set(myNode24);

/* définition du node n°26*/
const myNode26 = object.addBox();
myNode26.point1.set(-1.0579,-2.6669,-2.7329);
myNode26.point2.set(4.9188,5.3348,0.6508);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);

/* définition du node n°27*/
const myNode27 = object.addCylinder();
myNode27.point1.set(-2.293,0.001,-18.0999);
myNode27.point2.set(0,0,36.1999);
myNode27.radius.set(1.559);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode27.innerRotation.angle.set(3.141592653586273);

/* définition du node n°28*/
const myNode28 = object.addCylinder();
myNode28.point1.set(-1.741,-1.011,-18.0999);
myNode28.point2.set(0,0,36.1999);
myNode28.radius.set(0.225);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(1.3457063423807893,2.821314744292338,-0.011747549389447462);
myNode28.innerRotation.angle.set(3.1258407590921644);

/* définition du node n°29*/
const myNode29 = object.addFuseOperation();
myNode29.leftArg.set(myNode27);
myNode29.rightArg.set(myNode28);

/* définition du node n°30*/
const myNode30 = object.addCutOperation();
myNode30.leftArg.set(myNode26);
myNode30.rightArg.set(myNode29);

/* définition du node n°31*/
const myNode31_1 = object.addFuseOperation();
myNode31_1.leftArg.set(myNode10);
myNode31_1.rightArg.set(myNode10);
const myNode31_2 = object.addFuseOperation();
myNode31_2.leftArg.set(myNode31_1);
myNode31_2.rightArg.set(myNode25);
myNode31 = object.addFuseOperation();
myNode31.leftArg.set(myNode31_2);
myNode31.rightArg.set(myNode30);

/* définition du node n°32*/
const myNode32 = object.addBox();
myNode32.point1.set(-5.9999,-3.2009,-3.2789);
myNode32.point2.set(11.9998,6.4018,6.5578);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);

/* définition du node n°33*/
const myNode33 = object.addCommonOperation();
myNode33.leftArg.set(myNode31);
myNode33.rightArg.set(myNode32);
/*END Geometry Object Definition*/