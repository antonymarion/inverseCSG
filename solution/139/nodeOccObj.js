/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.9989,-4.5309,-0.9249);
myNode0.point2.set(5.9989,4.5309,0.9238999999999999);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(0,0,0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(4.2561,-0.3179,-0.7699);
myNode1.point2.set(4.6799,3.4569,0.7708999999999999);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.innerTranslation.vector.set(0,0,0);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-0.8499,-2.1219,-0.0299);
myNode2.point2.set(1.5419,-0.32110000000000016,0.7698999999999999);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.innerTranslation.vector.set(0,0,0);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addBox();
myNode3.point1.set(-0.8499,-0.3179,-0.7699);
myNode3.point2.set(1.5419,3.0309000000000004,0.7708999999999999);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);
myNode3.innerTranslation.vector.set(0,0,0);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addBox();
myNode4.point1.set(1.7031,-2.1219,-0.0299);
myNode4.point2.set(2.1269,0.9819,0.7698999999999999);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.innerTranslation.vector.set(0,0,0);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addBox();
myNode5.point1.set(1.5441,0.5211,-0.7699);
myNode5.point2.set(4.6799,3.4559,-0.031100000000000017);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.innerTranslation.vector.set(0,0,0);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6_1 = myNode1.clone();
myNode6_1.isVisible = false;
const myNode6_2 = object.addFuseOperation();
myNode6_2.leftArg.set(myNode6_1);
myNode6_2.rightArg.set(myNode2);
myNode6_2.isVisible = false;
const myNode6_3 = object.addFuseOperation();
myNode6_3.leftArg.set(myNode6_2);
myNode6_3.rightArg.set(myNode3);
myNode6_3.isVisible = false;
const myNode6_4 = object.addFuseOperation();
myNode6_4.leftArg.set(myNode6_3);
myNode6_4.rightArg.set(myNode4);
myNode6_4.isVisible = false;
myNode6 = object.addFuseOperation();
myNode6.leftArg.set(myNode6_4);
myNode6.rightArg.set(myNode5);
myNode6.isVisible = false;
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addBox();
myNode7.point1.set(-1.01045,1.59655,-0.77045);
myNode7.point2.set(4.679449999999999,2.23345,-0.030549999999999966);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);
myNode7.innerTranslation.vector.set(0,0,0);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addCylinder();
myNode8.point1.set(-0.356,-1.223,-1.01045);
myNode8.point2.set(-0.356,-1.223,3.40345);
myNode8.radius.set(0.158);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode8.innerRotation.angle.set(89.99978954125373);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(-0.43045,-18.0994,-0.77045);
myNode9.point2.set(1.54645,1.7545000000000002,18.09945);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.innerTranslation.vector.set(0,0,0);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(3.56455,-0.31845,-18.0994);
myNode10.point2.set(4.0954500000000005,3.45745,-0.45250000000000057);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.innerTranslation.vector.set(0,0,0);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addCylinder();
myNode11.point1.set(0,2.607,-0.77045);
myNode11.point2.set(0,2.607,18.09945);
myNode11.radius.set(0.148);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(-4.681,3.456,-18.0995);
myNode12.point2.set(-4.681,3.456,18.099400000000003);
myNode12.radius.set(0.148);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode12.innerRotation.angle.set(179.9999999997983);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addBox();
myNode13.point1.set(0.85155,0.98455,-0.77045);
myNode13.point2.set(4.25445,3.03145,0.7714500000000001);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);
myNode13.innerTranslation.vector.set(0,0,0);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14_1 = myNode7.clone();
myNode14_1.isVisible = false;
const myNode14_2 = object.addFuseOperation();
myNode14_2.leftArg.set(myNode14_1);
myNode14_2.rightArg.set(myNode8);
myNode14_2.isVisible = false;
const myNode14_3 = object.addFuseOperation();
myNode14_3.leftArg.set(myNode14_2);
myNode14_3.rightArg.set(myNode9);
myNode14_3.isVisible = false;
const myNode14_4 = object.addFuseOperation();
myNode14_4.leftArg.set(myNode14_3);
myNode14_4.rightArg.set(myNode10);
myNode14_4.isVisible = false;
const myNode14_5 = object.addFuseOperation();
myNode14_5.leftArg.set(myNode14_4);
myNode14_5.rightArg.set(myNode11);
myNode14_5.isVisible = false;
const myNode14_6 = object.addFuseOperation();
myNode14_6.leftArg.set(myNode14_5);
myNode14_6.rightArg.set(myNode12);
myNode14_6.isVisible = false;
myNode14 = object.addFuseOperation();
myNode14.leftArg.set(myNode14_6);
myNode14.rightArg.set(myNode13);
myNode14.isVisible = false;
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addCutOperation();
myNode15.leftArg.set(myNode6);
myNode15.rightArg.set(myNode14);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(4.679,3.46,-0.7699);
myNode16.point2.set(4.679,3.46,0.7708999999999999);
myNode16.radius.set(0.319);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addCutOperation();
myNode17.leftArg.set(myNode16);
myNode17.rightArg.set(myNode12);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addBox();
myNode18.point1.set(-1.0099,3.0331,-0.7699);
myNode18.point2.set(1.0089000000000001,3.4569,0.7708999999999999);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);
myNode18.innerTranslation.vector.set(0,0,0);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addBox();
myNode19.point1.set(-1.7009,1.7561,-0.0299);
myNode19.point2.set(4.2539,3.4558999999999997,0.7698999999999999);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(0.0,0.0,0.0);
myNode19.innerRotation.angle.set(0.0);
myNode19.innerTranslation.vector.set(0,0,0);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addBox();
myNode20.point1.set(1.7031,-0.3179,-0.7699);
myNode20.point2.set(3.4029,1.5949,-0.031100000000000017);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);
myNode20.innerTranslation.vector.set(0,0,0);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addBox();
myNode21.point1.set(1.0121,0.5211,-0.4509);
myNode21.point2.set(4.6799,0.9819,0.7699);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);
myNode21.innerTranslation.vector.set(0,0,0);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22_1 = myNode18.clone();
myNode22_1.isVisible = false;
const myNode22_2 = object.addFuseOperation();
myNode22_2.leftArg.set(myNode22_1);
myNode22_2.rightArg.set(myNode19);
myNode22_2.isVisible = false;
const myNode22_3 = object.addFuseOperation();
myNode22_3.leftArg.set(myNode22_2);
myNode22_3.rightArg.set(myNode20);
myNode22_3.isVisible = false;
myNode22 = object.addFuseOperation();
myNode22.leftArg.set(myNode22_3);
myNode22.rightArg.set(myNode21);
myNode22.isVisible = false;
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addCylinder();
myNode23.point1.set(-0.356,-2.553,1.75555);
myNode23.point2.set(-0.356,-2.553,3.4564500000000002);
myNode23.radius.set(0.153);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode23.innerRotation.angle.set(119.9998447624254);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addBox();
myNode24.point1.set(-1.01045,-0.31845,-0.77045);
myNode24.point2.set(3.40345,2.23345,-0.030549999999999966);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);
myNode24.innerTranslation.vector.set(0,0,0);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addBox();
myNode25.point1.set(2.12855,-0.31845,-0.77045);
myNode25.point2.set(2.97845,1.59545,0.7714500000000001);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(0.0,0.0,0.0);
myNode25.innerRotation.angle.set(0.0);
myNode25.innerTranslation.vector.set(0,0,0);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addCommonOperation();
myNode26.leftArg.set(myNode24);
myNode26.rightArg.set(myNode25);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addBox();
myNode27.point1.set(-18.0995,2.18155,-0.77045);
myNode27.point2.set(4.2544,3.03145,0.7714500000000001);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);
myNode27.innerTranslation.vector.set(0,0,0);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28_1 = myNode23.clone();
myNode28_1.isVisible = false;
const myNode28_2 = object.addFuseOperation();
myNode28_2.leftArg.set(myNode28_1);
myNode28_2.rightArg.set(myNode26);
myNode28_2.isVisible = false;
myNode28 = object.addFuseOperation();
myNode28.leftArg.set(myNode28_2);
myNode28.rightArg.set(myNode27);
myNode28.isVisible = false;
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addCutOperation();
myNode29.leftArg.set(myNode22);
myNode29.rightArg.set(myNode28);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addBox();
myNode30.point1.set(-1.0099,0.5211,-0.7699);
myNode30.point2.set(1.0089000000000001,0.9819,0.7708999999999999);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);
myNode30.innerTranslation.vector.set(0,0,0);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addBox();
myNode31.point1.set(-1.7009,3.0331,-0.4509);
myNode31.point2.set(1.5418999999999998,3.4569,0.7699);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(0.0,0.0,0.0);
myNode31.innerRotation.angle.set(0.0);
myNode31.innerTranslation.vector.set(0,0,0);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addBox();
myNode32.point1.set(2.9801,-0.3179,-0.0299);
myNode32.point2.set(3.4039,1.7539,0.7698999999999999);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);
myNode32.innerTranslation.vector.set(0,0,0);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addBox();
myNode33.point1.set(1.7031,0.9851,-0.0299);
myNode33.point2.set(2.1269,1.7549000000000001,0.7698999999999999);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);
myNode33.innerTranslation.vector.set(0,0,0);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addBox();
myNode34.point1.set(-4.6799,3.0331,-0.7699);
myNode34.point2.set(-1.5440999999999998,3.4569,0.7708999999999999);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(0.0,0.0,0.0);
myNode34.innerRotation.angle.set(0.0);
myNode34.innerTranslation.vector.set(0,0,0);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addCylinder();
myNode35.point1.set(-4.682,3.457,-0.7699);
myNode35.point2.set(-4.682,3.457,0.7708999999999999);
myNode35.radius.set(0.318);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,0.0);
myNode35.innerRotation.angle.set(0.0);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addFuseOperation();
myNode36.leftArg.set(myNode34);
myNode36.rightArg.set(myNode35);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addBox();
myNode37.point1.set(-4.09545,-3.45645,-18.0994);
myNode37.point2.set(-3.5645499999999997,3.45745,-0.45250000000000057);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0,0.0,0.0);
myNode37.innerRotation.angle.set(0.0);
myNode37.innerTranslation.vector.set(0,0,0);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addCylinder();
myNode38.point1.set(4.682,3.457,-18.0995);
myNode38.point2.set(4.682,3.457,0.7704000000000022);
myNode38.radius.set(0.148);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode38.innerRotation.angle.set(179.9999999997983);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addCylinder();
myNode39.point1.set(-0.356,2.554,0.98455);
myNode39.point2.set(-0.356,2.554,18.099449999999997);
myNode39.radius.set(0.158);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode39.innerRotation.angle.set(119.9998447624254);
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40_1 = myNode37.clone();
myNode40_1.isVisible = false;
const myNode40_2 = object.addFuseOperation();
myNode40_2.leftArg.set(myNode40_1);
myNode40_2.rightArg.set(myNode38);
myNode40_2.isVisible = false;
myNode40 = object.addFuseOperation();
myNode40.leftArg.set(myNode40_2);
myNode40.rightArg.set(myNode39);
myNode40.isVisible = false;
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41 = object.addCutOperation();
myNode41.leftArg.set(myNode36);
myNode41.rightArg.set(myNode40);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addBox();
myNode42.point1.set(-3.5629,0.5211,-0.7699);
myNode42.point2.set(-1.5440999999999998,0.9819,0.7708999999999999);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0,0.0,0.0);
myNode42.innerRotation.angle.set(0.0);
myNode42.innerTranslation.vector.set(0,0,0);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addBox();
myNode43.point1.set(-4.6799,-2.9249,-0.0299);
myNode43.point2.set(-4.2561,2.2329,0.7698999999999999);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(0.0,0.0,0.0);
myNode43.innerRotation.angle.set(0.0);
myNode43.innerTranslation.vector.set(0,0,0);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44 = object.addCylinder();
myNode44.point1.set(-4.679,-3.458,-0.7699);
myNode44.point2.set(-4.679,-3.458,0.7708999999999999);
myNode44.radius.set(0.319);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(0.0,0.0,0.0);
myNode44.innerRotation.angle.set(0.0);
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45 = object.addCylinder();
myNode45.point1.set(-4.681,-3.457,-18.0995);
myNode45.point2.set(-4.681,-3.457,18.099400000000003);
myNode45.radius.set(0.148);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(0.0,0.0,0.0);
myNode45.innerRotation.angle.set(0.0);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addCutOperation();
myNode46.leftArg.set(myNode44);
myNode46.rightArg.set(myNode45);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addBox();
myNode47.point1.set(-4.6799,2.2351,-0.7699);
myNode47.point2.set(-4.2561,3.0309,0.7708999999999999);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(0.0,0.0,0.0);
myNode47.innerRotation.angle.set(0.0);
myNode47.innerTranslation.vector.set(0,0,0);
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addBox();
myNode48.point1.set(-4.6799,1.7561,-0.0299);
myNode48.point2.set(-1.7031,2.1799,0.7698999999999999);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);
myNode48.innerTranslation.vector.set(0,0,0);
myNode48.isVisible = false;

/* définition du node n°49*/
const myNode49 = object.addBox();
myNode49.point1.set(-4.0949,-3.4559,-0.4509);
myNode49.point2.set(-0.4270999999999998,0.9828999999999994,0.7699);
myNode49.innerRotation.center.set(0,0,0);
myNode49.innerRotation.axis.set(0.0,0.0,0.0);
myNode49.innerRotation.angle.set(0.0);
myNode49.innerTranslation.vector.set(0,0,0);
myNode49.isVisible = false;

/* définition du node n°50*/
const myNode50 = object.addBox();
myNode50.point1.set(-4.6799,-2.8709,-0.7699);
myNode50.point2.set(-4.0971,0.9829000000000003,0.7708999999999999);
myNode50.innerRotation.center.set(0,0,0);
myNode50.innerRotation.axis.set(0.0,0.0,0.0);
myNode50.innerRotation.angle.set(0.0);
myNode50.innerTranslation.vector.set(0,0,0);
myNode50.isVisible = false;

/* définition du node n°51*/
const myNode51_1 = myNode42.clone();
myNode51_1.isVisible = false;
const myNode51_2 = object.addFuseOperation();
myNode51_2.leftArg.set(myNode51_1);
myNode51_2.rightArg.set(myNode43);
myNode51_2.isVisible = false;
const myNode51_3 = object.addFuseOperation();
myNode51_3.leftArg.set(myNode51_2);
myNode51_3.rightArg.set(myNode46);
myNode51_3.isVisible = false;
const myNode51_4 = object.addFuseOperation();
myNode51_4.leftArg.set(myNode51_3);
myNode51_4.rightArg.set(myNode47);
myNode51_4.isVisible = false;
const myNode51_5 = object.addFuseOperation();
myNode51_5.leftArg.set(myNode51_4);
myNode51_5.rightArg.set(myNode48);
myNode51_5.isVisible = false;
const myNode51_6 = object.addFuseOperation();
myNode51_6.leftArg.set(myNode51_5);
myNode51_6.rightArg.set(myNode49);
myNode51_6.isVisible = false;
myNode51 = object.addFuseOperation();
myNode51.leftArg.set(myNode51_6);
myNode51.rightArg.set(myNode50);
myNode51.isVisible = false;
myNode51.isVisible = false;

/* définition du node n°52*/
const myNode52 = object.addBox();
myNode52.point1.set(-4.68045,-2.92545,-0.77045);
myNode52.point2.set(18.09945,0.51945,18.09945);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,0.0,0.0);
myNode52.innerRotation.angle.set(0.0);
myNode52.innerTranslation.vector.set(0,0,0);
myNode52.isVisible = false;

/* définition du node n°53*/
const myNode53 = object.addBox();
myNode53.point1.set(-18.0995,-3.45645,-0.77045);
myNode53.point2.set(18.099400000000003,0.5204500000000003,-0.030549999999999966);
myNode53.innerRotation.center.set(0,0,0);
myNode53.innerRotation.axis.set(0.0,0.0,0.0);
myNode53.innerRotation.angle.set(0.0);
myNode53.innerTranslation.vector.set(0,0,0);
myNode53.isVisible = false;

/* définition du node n°54*/
const myNode54 = object.addCylinder();
myNode54.point1.set(-0.356,2.554,1.59655);
myNode54.point2.set(-0.356,2.554,2.18045);
myNode54.radius.set(0.158);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode54.innerRotation.angle.set(119.9998447624254);
myNode54.isVisible = false;

/* définition du node n°55*/
const myNode55_1 = myNode52.clone();
myNode55_1.isVisible = false;
const myNode55_2 = object.addFuseOperation();
myNode55_2.leftArg.set(myNode55_1);
myNode55_2.rightArg.set(myNode53);
myNode55_2.isVisible = false;
myNode55 = object.addFuseOperation();
myNode55.leftArg.set(myNode55_2);
myNode55.rightArg.set(myNode54);
myNode55.isVisible = false;
myNode55.isVisible = false;

/* définition du node n°56*/
const myNode56 = object.addCutOperation();
myNode56.leftArg.set(myNode51);
myNode56.rightArg.set(myNode55);
myNode56.isVisible = false;

/* définition du node n°57*/
const myNode57 = object.addBox();
myNode57.point1.set(0.4271,0.5211,-0.0299);
myNode57.point2.set(0.8509,1.7538999999999998,0.7698999999999999);
myNode57.innerRotation.center.set(0,0,0);
myNode57.innerRotation.axis.set(0.0,0.0,0.0);
myNode57.innerRotation.angle.set(0.0);
myNode57.innerTranslation.vector.set(0,0,0);
myNode57.isVisible = false;

/* définition du node n°58*/
const myNode58 = object.addBox();
myNode58.point1.set(0.4271,-0.3179,-0.7699);
myNode58.point2.set(0.8509,1.5949,0.7708999999999999);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(0.0,0.0,0.0);
myNode58.innerRotation.angle.set(0.0);
myNode58.innerTranslation.vector.set(0,0,0);
myNode58.isVisible = false;

/* définition du node n°59*/
const myNode59 = object.addBox();
myNode59.point1.set(-0.8499,-2.8709,-0.7699);
myNode59.point2.set(3.4029,-0.9580999999999997,-0.031100000000000017);
myNode59.innerRotation.center.set(0,0,0);
myNode59.innerRotation.axis.set(0.0,0.0,0.0);
myNode59.innerRotation.angle.set(0.0);
myNode59.innerTranslation.vector.set(0,0,0);
myNode59.isVisible = false;

/* définition du node n°60*/
const myNode60 = object.addBox();
myNode60.point1.set(-0.8499,-2.9249,-0.0299);
myNode60.point2.set(3.4029,-0.32109999999999994,0.7698999999999999);
myNode60.innerRotation.center.set(0,0,0);
myNode60.innerRotation.axis.set(0.0,0.0,0.0);
myNode60.innerRotation.angle.set(0.0);
myNode60.innerTranslation.vector.set(0,0,0);
myNode60.isVisible = false;

/* définition du node n°61*/
const myNode61 = object.addFuseOperation();
myNode61.leftArg.set(myNode59);
myNode61.rightArg.set(myNode60);
myNode61.isVisible = false;

/* définition du node n°62*/
const myNode62 = object.addCylinder();
myNode62.point1.set(-0.002,-2.5,-0.77045);
myNode62.point2.set(-0.002,-2.5,0.7714500000000001);
myNode62.radius.set(0.149);
myNode62.innerRotation.center.set(0,0,0);
myNode62.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode62.innerRotation.angle.set(179.9999999997983);
myNode62.isVisible = false;

/* définition du node n°63*/
const myNode63 = object.addCutOperation();
myNode63.leftArg.set(myNode61);
myNode63.rightArg.set(myNode62);
myNode63.isVisible = false;

/* définition du node n°64*/
const myNode64 = object.addBox();
myNode64.point1.set(2.12855,-3.45645,-18.0995);
myNode64.point2.set(2.97845,18.09945,18.099400000000003);
myNode64.innerRotation.center.set(0,0,0);
myNode64.innerRotation.axis.set(0.0,0.0,0.0);
myNode64.innerRotation.angle.set(0.0);
myNode64.innerTranslation.vector.set(0,0,0);
myNode64.isVisible = false;

/* définition du node n°65*/
const myNode65 = object.addCylinder();
myNode65.point1.set(-0.356,-1.223,-18.0995);
myNode65.point2.set(-0.356,-1.223,4.2544);
myNode65.radius.set(0.158);
myNode65.innerRotation.center.set(0,0,0);
myNode65.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode65.innerRotation.angle.set(89.99978954125373);
myNode65.isVisible = false;

/* définition du node n°66*/
const myNode66 = object.addBox();
myNode66.point1.set(0.85155,-2.92545,-0.77045);
myNode66.point2.set(1.70145,18.09845,18.09945);
myNode66.innerRotation.center.set(0,0,0);
myNode66.innerRotation.axis.set(0.0,0.0,0.0);
myNode66.innerRotation.angle.set(0.0);
myNode66.innerTranslation.vector.set(0,0,0);
myNode66.isVisible = false;

/* définition du node n°67*/
const myNode67 = object.addBox();
myNode67.point1.set(-0.42545,-2.12245,-0.77045);
myNode67.point2.set(0.42445,18.09845,0.7714500000000001);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(0.0,0.0,0.0);
myNode67.innerRotation.angle.set(0.0);
myNode67.innerTranslation.vector.set(0,0,0);
myNode67.isVisible = false;

/* définition du node n°68*/
const myNode68_1 = myNode64.clone();
myNode68_1.isVisible = false;
const myNode68_2 = object.addFuseOperation();
myNode68_2.leftArg.set(myNode68_1);
myNode68_2.rightArg.set(myNode65);
myNode68_2.isVisible = false;
const myNode68_3 = object.addFuseOperation();
myNode68_3.leftArg.set(myNode68_2);
myNode68_3.rightArg.set(myNode66);
myNode68_3.isVisible = false;
myNode68 = object.addFuseOperation();
myNode68.leftArg.set(myNode68_3);
myNode68.rightArg.set(myNode67);
myNode68.isVisible = false;
myNode68.isVisible = false;

/* définition du node n°69*/
const myNode69 = object.addCutOperation();
myNode69.leftArg.set(myNode63);
myNode69.rightArg.set(myNode68);
myNode69.isVisible = false;

/* définition du node n°70*/
const myNode70 = object.addBox();
myNode70.point1.set(-0.8499,-3.4559,-0.7699);
myNode70.point2.set(4.6799,-0.32010000000000005,0.7708999999999999);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(0.0,0.0,0.0);
myNode70.innerRotation.angle.set(0.0);
myNode70.innerTranslation.vector.set(0,0,0);
myNode70.isVisible = false;

/* définition du node n°71*/
const myNode71 = object.addCylinder();
myNode71.point1.set(-4.681,-3.458,-0.7699);
myNode71.point2.set(-4.681,-3.458,0.7708999999999999);
myNode71.radius.set(0.319);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode71.innerRotation.angle.set(179.9999999997983);
myNode71.isVisible = false;

/* définition du node n°72*/
const myNode72 = object.addFuseOperation();
myNode72.leftArg.set(myNode70);
myNode72.rightArg.set(myNode71);
myNode72.isVisible = false;

/* définition du node n°73*/
const myNode73 = object.addBox();
myNode73.point1.set(-0.42545,-2.93045,-0.77045);
myNode73.point2.set(4.25445,-0.31555,0.7714500000000001);
myNode73.innerRotation.center.set(0,0,0);
myNode73.innerRotation.axis.set(0.0,0.0,0.0);
myNode73.innerRotation.angle.set(0.0);
myNode73.innerTranslation.vector.set(0,0,0);
myNode73.isVisible = false;

/* définition du node n°74*/
const myNode74 = object.addCylinder();
myNode74.point1.set(-0.356,-1.223,-18.0995);
myNode74.point2.set(-0.356,-1.223,18.099400000000003);
myNode74.radius.set(0.158);
myNode74.innerRotation.center.set(0,0,0);
myNode74.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode74.innerRotation.angle.set(89.99978954125373);
myNode74.isVisible = false;

/* définition du node n°75*/
const myNode75 = object.addFuseOperation();
myNode75.leftArg.set(myNode73);
myNode75.rightArg.set(myNode74);
myNode75.isVisible = false;

/* définition du node n°76*/
const myNode76 = object.addCutOperation();
myNode76.leftArg.set(myNode72);
myNode76.rightArg.set(myNode75);
myNode76.isVisible = false;

/* définition du node n°77*/
const myNode77 = object.addCylinder();
myNode77.point1.set(4.681,-3.459,-0.77045);
myNode77.point2.set(4.681,-3.459,0.7714500000000001);
myNode77.radius.set(0.149);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(0.0,0.0,0.0);
myNode77.innerRotation.angle.set(0.0);
myNode77.isVisible = false;

/* définition du node n°78*/
const myNode78 = object.addBox();
myNode78.point1.set(-0.85045,-0.95645,-0.77045);
myNode78.point2.set(4.6804499999999996,-0.31955,-0.030549999999999966);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(0.0,0.0,0.0);
myNode78.innerRotation.angle.set(0.0);
myNode78.innerTranslation.vector.set(0,0,0);
myNode78.isVisible = false;

/* définition du node n°79*/
const myNode79 = object.addBox();
myNode79.point1.set(-0.85045,-3.45645,-0.77045);
myNode79.point2.set(4.6804499999999996,-2.87255,-0.030549999999999966);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(0.0,0.0,0.0);
myNode79.innerRotation.angle.set(0.0);
myNode79.innerTranslation.vector.set(0,0,0);
myNode79.isVisible = false;

/* définition du node n°80*/
const myNode80_1 = myNode77.clone();
myNode80_1.isVisible = false;
const myNode80_2 = object.addFuseOperation();
myNode80_2.leftArg.set(myNode80_1);
myNode80_2.rightArg.set(myNode78);
myNode80_2.isVisible = false;
myNode80 = object.addFuseOperation();
myNode80.leftArg.set(myNode80_2);
myNode80.rightArg.set(myNode79);
myNode80.isVisible = false;
myNode80.isVisible = false;

/* définition du node n°81*/
const myNode81 = object.addCutOperation();
myNode81.leftArg.set(myNode76);
myNode81.rightArg.set(myNode80);
myNode81.isVisible = false;

/* définition du node n°82*/
const myNode82 = object.addBox();
myNode82.point1.set(-4.6799,-3.4559,-0.0299);
myNode82.point2.set(-1.7031,1.7548999999999997,0.7698999999999999);
myNode82.innerRotation.center.set(0,0,0);
myNode82.innerRotation.axis.set(0.0,0.0,0.0);
myNode82.innerRotation.angle.set(0.0);
myNode82.innerTranslation.vector.set(0,0,0);
myNode82.isVisible = false;

/* définition du node n°83*/
const myNode83 = object.addCylinder();
myNode83.point1.set(-0.356,-1.223,-4.68045);
myNode83.point2.set(-0.356,-1.223,18.09945);
myNode83.radius.set(0.158);
myNode83.innerRotation.center.set(0,0,0);
myNode83.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode83.innerRotation.angle.set(89.99978954125373);
myNode83.isVisible = false;

/* définition du node n°84*/
const myNode84 = object.addCutOperation();
myNode84.leftArg.set(myNode82);
myNode84.rightArg.set(myNode83);
myNode84.isVisible = false;

/* définition du node n°85*/
const myNode85 = object.addBox();
myNode85.point1.set(-4.6799,-2.8709,-0.7699);
myNode85.point2.set(-1.7031,1.5949,-0.031100000000000017);
myNode85.innerRotation.center.set(0,0,0);
myNode85.innerRotation.axis.set(0.0,0.0,0.0);
myNode85.innerRotation.angle.set(0.0);
myNode85.innerTranslation.vector.set(0,0,0);
myNode85.isVisible = false;

/* définition du node n°86*/
const myNode86 = object.addFuseOperation();
myNode86.leftArg.set(myNode84);
myNode86.rightArg.set(myNode85);
myNode86.isVisible = false;

/* définition du node n°87*/
const myNode87 = object.addBox();
myNode87.point1.set(-4.25445,-2.92545,-0.77045);
myNode87.point2.set(-3.4045500000000004,1.7544499999999998,18.09945);
myNode87.innerRotation.center.set(0,0,0);
myNode87.innerRotation.axis.set(0.0,0.0,0.0);
myNode87.innerRotation.angle.set(0.0);
myNode87.innerTranslation.vector.set(0,0,0);
myNode87.isVisible = false;

/* définition du node n°88*/
const myNode88 = object.addCylinder();
myNode88.point1.set(-4.681,-3.457,-0.03045);
myNode88.point2.set(-4.681,-3.457,18.09945);
myNode88.radius.set(0.148);
myNode88.innerRotation.center.set(0,0,0);
myNode88.innerRotation.axis.set(0.0,0.0,0.0);
myNode88.innerRotation.angle.set(0.0);
myNode88.isVisible = false;

/* définition du node n°89*/
const myNode89 = object.addBox();
myNode89.point1.set(-18.0994,-0.95645,-18.0995);
myNode89.point2.set(-1.5425000000000004,-0.31955,-0.03159999999999741);
myNode89.innerRotation.center.set(0,0,0);
myNode89.innerRotation.axis.set(0.0,0.0,0.0);
myNode89.innerRotation.angle.set(0.0);
myNode89.innerTranslation.vector.set(0,0,0);
myNode89.isVisible = false;

/* définition du node n°90*/
const myNode90 = object.addBox();
myNode90.point1.set(-2.97845,-2.92545,-18.0995);
myNode90.point2.set(-2.12855,1.7544499999999998,0.7704000000000022);
myNode90.innerRotation.center.set(0,0,0);
myNode90.innerRotation.axis.set(0.0,0.0,0.0);
myNode90.innerRotation.angle.set(0.0);
myNode90.innerTranslation.vector.set(0,0,0);
myNode90.isVisible = false;

/* définition du node n°91*/
const myNode91_1 = myNode87.clone();
myNode91_1.isVisible = false;
const myNode91_2 = object.addFuseOperation();
myNode91_2.leftArg.set(myNode91_1);
myNode91_2.rightArg.set(myNode88);
myNode91_2.isVisible = false;
const myNode91_3 = object.addFuseOperation();
myNode91_3.leftArg.set(myNode91_2);
myNode91_3.rightArg.set(myNode89);
myNode91_3.isVisible = false;
myNode91 = object.addFuseOperation();
myNode91.leftArg.set(myNode91_3);
myNode91.rightArg.set(myNode90);
myNode91.isVisible = false;
myNode91.isVisible = false;

/* définition du node n°92*/
const myNode92 = object.addCutOperation();
myNode92.leftArg.set(myNode86);
myNode92.rightArg.set(myNode91);
myNode92.isVisible = false;

/* définition du node n°93*/
const myNode93_1 = myNode15.clone();
myNode93_1.isVisible = false;
const myNode93_2 = object.addFuseOperation();
myNode93_2.leftArg.set(myNode93_1);
myNode93_2.rightArg.set(myNode17);
myNode93_2.isVisible = false;
const myNode93_3 = object.addFuseOperation();
myNode93_3.leftArg.set(myNode93_2);
myNode93_3.rightArg.set(myNode29);
myNode93_3.isVisible = false;
const myNode93_4 = object.addFuseOperation();
myNode93_4.leftArg.set(myNode93_3);
myNode93_4.rightArg.set(myNode30);
myNode93_4.isVisible = false;
const myNode93_5 = object.addFuseOperation();
myNode93_5.leftArg.set(myNode93_4);
myNode93_5.rightArg.set(myNode31);
myNode93_5.isVisible = false;
const myNode93_6 = object.addFuseOperation();
myNode93_6.leftArg.set(myNode93_5);
myNode93_6.rightArg.set(myNode32);
myNode93_6.isVisible = false;
const myNode93_7 = object.addFuseOperation();
myNode93_7.leftArg.set(myNode93_6);
myNode93_7.rightArg.set(myNode33);
myNode93_7.isVisible = false;
const myNode93_8 = object.addFuseOperation();
myNode93_8.leftArg.set(myNode93_7);
myNode93_8.rightArg.set(myNode41);
myNode93_8.isVisible = false;
const myNode93_9 = object.addFuseOperation();
myNode93_9.leftArg.set(myNode93_8);
myNode93_9.rightArg.set(myNode56);
myNode93_9.isVisible = false;
const myNode93_10 = object.addFuseOperation();
myNode93_10.leftArg.set(myNode93_9);
myNode93_10.rightArg.set(myNode57);
myNode93_10.isVisible = false;
const myNode93_11 = object.addFuseOperation();
myNode93_11.leftArg.set(myNode93_10);
myNode93_11.rightArg.set(myNode58);
myNode93_11.isVisible = false;
const myNode93_12 = object.addFuseOperation();
myNode93_12.leftArg.set(myNode93_11);
myNode93_12.rightArg.set(myNode69);
myNode93_12.isVisible = false;
const myNode93_13 = object.addFuseOperation();
myNode93_13.leftArg.set(myNode93_12);
myNode93_13.rightArg.set(myNode81);
myNode93_13.isVisible = false;
myNode93 = object.addFuseOperation();
myNode93.leftArg.set(myNode93_13);
myNode93.rightArg.set(myNode92);
myNode93.isVisible = false;
myNode93.isVisible = false;

/* définition du node n°94*/
const myNode94 = object.addCommonOperation();
myNode94.leftArg.set(myNode0);
myNode94.rightArg.set(myNode93);
myNode94.isVisible = true;


/*END Geometry Object Definition*/