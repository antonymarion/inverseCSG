/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.9989,-4.5309,-0.9249);
myNode0.point2.set(5.9989,4.5309,0.9238999999999999);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.isVisible = False

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(0.4271,0.5211,-0.0299);
myNode1.point2.set(0.8509,1.7538999999999998,0.7698999999999999);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.isVisible = False

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(2.9801,-0.3179,-0.0299);
myNode2.point2.set(3.4039,1.7539,0.7698999999999999);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.isVisible = False

/* définition du node n°3*/
const myNode3 = object.addBox();
myNode3.point1.set(-1.7009,1.7561,-0.0299);
myNode3.point2.set(4.2539,3.4558999999999997,0.7698999999999999);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);
myNode3.isVisible = False

/* définition du node n°4*/
const myNode4 = object.addBox();
myNode4.point1.set(1.0121,0.5211,-0.4509);
myNode4.point2.set(4.6799,0.9819,0.7699);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.isVisible = False

/* définition du node n°5*/
const myNode5 = object.addBox();
myNode5.point1.set(-1.0099,3.0331,-0.7699);
myNode5.point2.set(1.0089000000000001,3.4569,0.7708999999999999);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.isVisible = False

/* définition du node n°6*/
const myNode6 = object.addBox();
myNode6.point1.set(1.7031,-0.3179,-0.7699);
myNode6.point2.set(3.4029,1.5949,-0.031100000000000017);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.isVisible = False

/* définition du node n°7*/
const myNode7_1 = object.addFuseOperation();
myNode7_1.leftArg.set(myNode3);
myNode7_1.rightArg.set(myNode3);
const myNode7_2 = object.addFuseOperation();
myNode7_2.leftArg.set(myNode7_1);
myNode7_2.rightArg.set(myNode4);
const myNode7_3 = object.addFuseOperation();
myNode7_3.leftArg.set(myNode7_2);
myNode7_3.rightArg.set(myNode5);
myNode7 = object.addFuseOperation();
myNode7.leftArg.set(myNode7_3);
myNode7.rightArg.set(myNode6);
myNode7.isVisible = False

/* définition du node n°8*/
const myNode8 = object.addBox();
myNode8.point1.set(2.12855,-0.31845,-0.77045);
myNode8.point2.set(2.97845,1.59545,0.7714500000000001);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.isVisible = False

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(-1.01045,-0.31845,-0.77045);
myNode9.point2.set(3.40345,2.23345,-0.030549999999999966);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.isVisible = False

/* définition du node n°10*/
const myNode10 = object.addCommonOperation();
myNode10.leftArg.set(myNode8);
myNode10.rightArg.set(myNode9);
myNode10.isVisible = False

/* définition du node n°11*/
const myNode11 = object.addCylinder();
myNode11.point1.set(-0.356,-2.553,1.75555);
myNode11.point2.set(-0.356,-2.553,3.4564500000000002);
myNode11.radius.set(0.153);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode11.innerRotation.angle.set(2.094392392986396);
myNode11.isVisible = False

/* définition du node n°12*/
const myNode12 = object.addBox();
myNode12.point1.set(-18.0995,2.18155,-0.77045);
myNode12.point2.set(4.2544,3.03145,0.7714500000000001);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);
myNode12.isVisible = False

/* définition du node n°13*/
const myNode13_1 = object.addFuseOperation();
myNode13_1.leftArg.set(myNode10);
myNode13_1.rightArg.set(myNode10);
const myNode13_2 = object.addFuseOperation();
myNode13_2.leftArg.set(myNode13_1);
myNode13_2.rightArg.set(myNode11);
myNode13 = object.addFuseOperation();
myNode13.leftArg.set(myNode13_2);
myNode13.rightArg.set(myNode12);
myNode13.isVisible = False

/* définition du node n°14*/
const myNode14 = object.addCutOperation();
myNode14.leftArg.set(myNode7);
myNode14.rightArg.set(myNode13);
myNode14.isVisible = False

/* définition du node n°15*/
const myNode15 = object.addCylinder();
myNode15.point1.set(4.679,3.46,-0.7699);
myNode15.point2.set(4.679,3.46,0.7708999999999999);
myNode15.radius.set(0.319);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);
myNode15.isVisible = False

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(-4.681,3.456,-18.0995);
myNode16.point2.set(-4.681,3.456,18.099400000000003);
myNode16.radius.set(0.148);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode16.innerRotation.angle.set(3.141592653586273);
myNode16.isVisible = False

/* définition du node n°17*/
const myNode17 = object.addCutOperation();
myNode17.leftArg.set(myNode15);
myNode17.rightArg.set(myNode16);
myNode17.isVisible = False

/* définition du node n°18*/
const myNode18 = object.addBox();
myNode18.point1.set(-4.6799,2.2351,-0.7699);
myNode18.point2.set(-4.2561,3.0309,0.7708999999999999);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);
myNode18.isVisible = False

/* définition du node n°19*/
const myNode19 = object.addBox();
myNode19.point1.set(-4.6799,-2.9249,-0.0299);
myNode19.point2.set(-4.2561,2.2329,0.7698999999999999);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(0.0,0.0,0.0);
myNode19.innerRotation.angle.set(0.0);
myNode19.isVisible = False

/* définition du node n°20*/
const myNode20 = object.addBox();
myNode20.point1.set(-4.6799,1.7561,-0.0299);
myNode20.point2.set(-1.7031,2.1799,0.7698999999999999);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);
myNode20.isVisible = False

/* définition du node n°21*/
const myNode21 = object.addBox();
myNode21.point1.set(-4.6799,-2.8709,-0.7699);
myNode21.point2.set(-4.0971,0.9829000000000003,0.7708999999999999);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);
myNode21.isVisible = False

/* définition du node n°22*/
const myNode22 = object.addBox();
myNode22.point1.set(-4.0949,-3.4559,-0.4509);
myNode22.point2.set(-0.4270999999999998,0.9828999999999994,0.7699);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(0.0,0.0,0.0);
myNode22.innerRotation.angle.set(0.0);
myNode22.isVisible = False

/* définition du node n°23*/
const myNode23 = object.addCylinder();
myNode23.point1.set(-4.679,-3.458,-0.7699);
myNode23.point2.set(-4.679,-3.458,0.7708999999999999);
myNode23.radius.set(0.319);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);
myNode23.isVisible = False

/* définition du node n°24*/
const myNode24 = object.addCylinder();
myNode24.point1.set(-4.681,-3.457,-18.0995);
myNode24.point2.set(-4.681,-3.457,18.099400000000003);
myNode24.radius.set(0.148);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);
myNode24.isVisible = False

/* définition du node n°25*/
const myNode25 = object.addCutOperation();
myNode25.leftArg.set(myNode23);
myNode25.rightArg.set(myNode24);
myNode25.isVisible = False

/* définition du node n°26*/
const myNode26 = object.addBox();
myNode26.point1.set(-3.5629,0.5211,-0.7699);
myNode26.point2.set(-1.5440999999999998,0.9819,0.7708999999999999);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);
myNode26.isVisible = False

/* définition du node n°27*/
const myNode27_1 = object.addFuseOperation();
myNode27_1.leftArg.set(myNode18);
myNode27_1.rightArg.set(myNode18);
const myNode27_2 = object.addFuseOperation();
myNode27_2.leftArg.set(myNode27_1);
myNode27_2.rightArg.set(myNode19);
const myNode27_3 = object.addFuseOperation();
myNode27_3.leftArg.set(myNode27_2);
myNode27_3.rightArg.set(myNode20);
const myNode27_4 = object.addFuseOperation();
myNode27_4.leftArg.set(myNode27_3);
myNode27_4.rightArg.set(myNode21);
const myNode27_5 = object.addFuseOperation();
myNode27_5.leftArg.set(myNode27_4);
myNode27_5.rightArg.set(myNode22);
const myNode27_6 = object.addFuseOperation();
myNode27_6.leftArg.set(myNode27_5);
myNode27_6.rightArg.set(myNode25);
myNode27 = object.addFuseOperation();
myNode27.leftArg.set(myNode27_6);
myNode27.rightArg.set(myNode26);
myNode27.isVisible = False

/* définition du node n°28*/
const myNode28 = object.addBox();
myNode28.point1.set(-18.0995,-3.45645,-0.77045);
myNode28.point2.set(18.099400000000003,0.5204500000000003,-0.030549999999999966);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(0.0,0.0,0.0);
myNode28.innerRotation.angle.set(0.0);
myNode28.isVisible = False

/* définition du node n°29*/
const myNode29 = object.addBox();
myNode29.point1.set(-4.68045,-2.92545,-0.77045);
myNode29.point2.set(18.09945,0.51945,18.09945);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);
myNode29.isVisible = False

/* définition du node n°30*/
const myNode30 = object.addCylinder();
myNode30.point1.set(-0.356,2.554,1.59655);
myNode30.point2.set(-0.356,2.554,2.18045);
myNode30.radius.set(0.158);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode30.innerRotation.angle.set(2.094392392986396);
myNode30.isVisible = False

/* définition du node n°31*/
const myNode31_1 = object.addFuseOperation();
myNode31_1.leftArg.set(myNode28);
myNode31_1.rightArg.set(myNode28);
const myNode31_2 = object.addFuseOperation();
myNode31_2.leftArg.set(myNode31_1);
myNode31_2.rightArg.set(myNode29);
myNode31 = object.addFuseOperation();
myNode31.leftArg.set(myNode31_2);
myNode31.rightArg.set(myNode30);
myNode31.isVisible = False

/* définition du node n°32*/
const myNode32 = object.addCutOperation();
myNode32.leftArg.set(myNode27);
myNode32.rightArg.set(myNode31);
myNode32.isVisible = False

/* définition du node n°33*/
const myNode33 = object.addCylinder();
myNode33.point1.set(-4.682,3.457,-0.7699);
myNode33.point2.set(-4.682,3.457,0.7708999999999999);
myNode33.radius.set(0.318);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);
myNode33.isVisible = False

/* définition du node n°34*/
const myNode34 = object.addBox();
myNode34.point1.set(-4.6799,3.0331,-0.7699);
myNode34.point2.set(-1.5440999999999998,3.4569,0.7708999999999999);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(0.0,0.0,0.0);
myNode34.innerRotation.angle.set(0.0);
myNode34.isVisible = False

/* définition du node n°35*/
const myNode35 = object.addFuseOperation();
myNode35.leftArg.set(myNode33);
myNode35.rightArg.set(myNode34);
myNode35.isVisible = False

/* définition du node n°36*/
const myNode36 = object.addBox();
myNode36.point1.set(-4.09545,-3.45645,-18.0994);
myNode36.point2.set(-3.5645499999999997,3.45745,-0.45250000000000057);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(0.0,0.0,0.0);
myNode36.innerRotation.angle.set(0.0);
myNode36.isVisible = False

/* définition du node n°37*/
const myNode37 = object.addCylinder();
myNode37.point1.set(4.682,3.457,-18.0995);
myNode37.point2.set(4.682,3.457,0.7704000000000022);
myNode37.radius.set(0.148);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode37.innerRotation.angle.set(3.141592653586273);
myNode37.isVisible = False

/* définition du node n°38*/
const myNode38 = object.addCylinder();
myNode38.point1.set(-0.356,2.554,0.98455);
myNode38.point2.set(-0.356,2.554,18.099449999999997);
myNode38.radius.set(0.158);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode38.innerRotation.angle.set(2.094392392986396);
myNode38.isVisible = False

/* définition du node n°39*/
const myNode39_1 = object.addFuseOperation();
myNode39_1.leftArg.set(myNode36);
myNode39_1.rightArg.set(myNode36);
const myNode39_2 = object.addFuseOperation();
myNode39_2.leftArg.set(myNode39_1);
myNode39_2.rightArg.set(myNode37);
myNode39 = object.addFuseOperation();
myNode39.leftArg.set(myNode39_2);
myNode39.rightArg.set(myNode38);
myNode39.isVisible = False

/* définition du node n°40*/
const myNode40 = object.addCutOperation();
myNode40.leftArg.set(myNode35);
myNode40.rightArg.set(myNode39);
myNode40.isVisible = False

/* définition du node n°41*/
const myNode41 = object.addBox();
myNode41.point1.set(1.5441,0.5211,-0.7699);
myNode41.point2.set(4.6799,3.4559,-0.031100000000000017);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,0.0,0.0);
myNode41.innerRotation.angle.set(0.0);
myNode41.isVisible = False

/* définition du node n°42*/
const myNode42 = object.addBox();
myNode42.point1.set(-0.8499,-2.1219,-0.0299);
myNode42.point2.set(1.5419,-0.32110000000000016,0.7698999999999999);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0,0.0,0.0);
myNode42.innerRotation.angle.set(0.0);
myNode42.isVisible = False

/* définition du node n°43*/
const myNode43 = object.addBox();
myNode43.point1.set(1.7031,-2.1219,-0.0299);
myNode43.point2.set(2.1269,0.9819,0.7698999999999999);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(0.0,0.0,0.0);
myNode43.innerRotation.angle.set(0.0);
myNode43.isVisible = False

/* définition du node n°44*/
const myNode44 = object.addBox();
myNode44.point1.set(4.2561,-0.3179,-0.7699);
myNode44.point2.set(4.6799,3.4569,0.7708999999999999);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(0.0,0.0,0.0);
myNode44.innerRotation.angle.set(0.0);
myNode44.isVisible = False

/* définition du node n°45*/
const myNode45 = object.addBox();
myNode45.point1.set(-0.8499,-0.3179,-0.7699);
myNode45.point2.set(1.5419,3.0309000000000004,0.7708999999999999);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(0.0,0.0,0.0);
myNode45.innerRotation.angle.set(0.0);
myNode45.isVisible = False

/* définition du node n°46*/
const myNode46_1 = object.addFuseOperation();
myNode46_1.leftArg.set(myNode41);
myNode46_1.rightArg.set(myNode41);
const myNode46_2 = object.addFuseOperation();
myNode46_2.leftArg.set(myNode46_1);
myNode46_2.rightArg.set(myNode42);
const myNode46_3 = object.addFuseOperation();
myNode46_3.leftArg.set(myNode46_2);
myNode46_3.rightArg.set(myNode43);
const myNode46_4 = object.addFuseOperation();
myNode46_4.leftArg.set(myNode46_3);
myNode46_4.rightArg.set(myNode44);
myNode46 = object.addFuseOperation();
myNode46.leftArg.set(myNode46_4);
myNode46.rightArg.set(myNode45);
myNode46.isVisible = False

/* définition du node n°47*/
const myNode47 = object.addBox();
myNode47.point1.set(3.56455,-0.31845,-18.0994);
myNode47.point2.set(4.0954500000000005,3.45745,-0.45250000000000057);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(0.0,0.0,0.0);
myNode47.innerRotation.angle.set(0.0);
myNode47.isVisible = False

/* définition du node n°48*/
const myNode48 = object.addBox();
myNode48.point1.set(-0.43045,-18.0994,-0.77045);
myNode48.point2.set(1.54645,1.7545000000000002,18.09945);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);
myNode48.isVisible = False

/* définition du node n°49*/
const myNode49 = object.addCylinder();
myNode49.point1.set(-0.356,-1.223,-1.01045);
myNode49.point2.set(-0.356,-1.223,3.40345);
myNode49.radius.set(0.158);
myNode49.innerRotation.center.set(0,0,0);
myNode49.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode49.innerRotation.angle.set(1.5707926535968346);
myNode49.isVisible = False

/* définition du node n°50*/
const myNode50 = object.addCylinder();
myNode50.point1.set(0,2.607,-0.77045);
myNode50.point2.set(0,2.607,18.09945);
myNode50.radius.set(0.148);
myNode50.innerRotation.center.set(0,0,0);
myNode50.innerRotation.axis.set(0.0,0.0,0.0);
myNode50.innerRotation.angle.set(0.0);
myNode50.isVisible = False

/* définition du node n°51*/
const myNode51 = object.addBox();
myNode51.point1.set(-1.01045,1.59655,-0.77045);
myNode51.point2.set(4.679449999999999,2.23345,-0.030549999999999966);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(0.0,0.0,0.0);
myNode51.innerRotation.angle.set(0.0);
myNode51.isVisible = False

/* définition du node n°52*/
const myNode52 = object.addBox();
myNode52.point1.set(0.85155,0.98455,-0.77045);
myNode52.point2.set(4.25445,3.03145,0.7714500000000001);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,0.0,0.0);
myNode52.innerRotation.angle.set(0.0);
myNode52.isVisible = False

/* définition du node n°53*/
const myNode53_1 = object.addFuseOperation();
myNode53_1.leftArg.set(myNode47);
myNode53_1.rightArg.set(myNode47);
const myNode53_2 = object.addFuseOperation();
myNode53_2.leftArg.set(myNode53_1);
myNode53_2.rightArg.set(myNode48);
const myNode53_3 = object.addFuseOperation();
myNode53_3.leftArg.set(myNode53_2);
myNode53_3.rightArg.set(myNode49);
const myNode53_4 = object.addFuseOperation();
myNode53_4.leftArg.set(myNode53_3);
myNode53_4.rightArg.set(myNode16);
const myNode53_5 = object.addFuseOperation();
myNode53_5.leftArg.set(myNode53_4);
myNode53_5.rightArg.set(myNode50);
const myNode53_6 = object.addFuseOperation();
myNode53_6.leftArg.set(myNode53_5);
myNode53_6.rightArg.set(myNode51);
myNode53 = object.addFuseOperation();
myNode53.leftArg.set(myNode53_6);
myNode53.rightArg.set(myNode52);
myNode53.isVisible = False

/* définition du node n°54*/
const myNode54 = object.addCutOperation();
myNode54.leftArg.set(myNode46);
myNode54.rightArg.set(myNode53);
myNode54.isVisible = False

/* définition du node n°55*/
const myNode55 = object.addBox();
myNode55.point1.set(-1.7009,3.0331,-0.4509);
myNode55.point2.set(1.5418999999999998,3.4569,0.7699);
myNode55.innerRotation.center.set(0,0,0);
myNode55.innerRotation.axis.set(0.0,0.0,0.0);
myNode55.innerRotation.angle.set(0.0);
myNode55.isVisible = False

/* définition du node n°56*/
const myNode56 = object.addBox();
myNode56.point1.set(-1.0099,0.5211,-0.7699);
myNode56.point2.set(1.0089000000000001,0.9819,0.7708999999999999);
myNode56.innerRotation.center.set(0,0,0);
myNode56.innerRotation.axis.set(0.0,0.0,0.0);
myNode56.innerRotation.angle.set(0.0);
myNode56.isVisible = False

/* définition du node n°57*/
const myNode57 = object.addCylinder();
myNode57.point1.set(-4.681,-3.458,-0.7699);
myNode57.point2.set(-4.681,-3.458,0.7708999999999999);
myNode57.radius.set(0.319);
myNode57.innerRotation.center.set(0,0,0);
myNode57.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode57.innerRotation.angle.set(3.141592653586273);
myNode57.isVisible = False

/* définition du node n°58*/
const myNode58 = object.addBox();
myNode58.point1.set(-0.8499,-3.4559,-0.7699);
myNode58.point2.set(4.6799,-0.32010000000000005,0.7708999999999999);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(0.0,0.0,0.0);
myNode58.innerRotation.angle.set(0.0);
myNode58.isVisible = False

/* définition du node n°59*/
const myNode59 = object.addFuseOperation();
myNode59.leftArg.set(myNode57);
myNode59.rightArg.set(myNode58);
myNode59.isVisible = False

/* définition du node n°60*/
const myNode60 = object.addCylinder();
myNode60.point1.set(-0.356,-1.223,-18.0995);
myNode60.point2.set(-0.356,-1.223,18.099400000000003);
myNode60.radius.set(0.158);
myNode60.innerRotation.center.set(0,0,0);
myNode60.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode60.innerRotation.angle.set(1.5707926535968346);
myNode60.isVisible = False

/* définition du node n°61*/
const myNode61 = object.addBox();
myNode61.point1.set(-0.42545,-2.93045,-0.77045);
myNode61.point2.set(4.25445,-0.31555,0.7714500000000001);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(0.0,0.0,0.0);
myNode61.innerRotation.angle.set(0.0);
myNode61.isVisible = False

/* définition du node n°62*/
const myNode62 = object.addFuseOperation();
myNode62.leftArg.set(myNode60);
myNode62.rightArg.set(myNode61);
myNode62.isVisible = False

/* définition du node n°63*/
const myNode63 = object.addCutOperation();
myNode63.leftArg.set(myNode59);
myNode63.rightArg.set(myNode62);
myNode63.isVisible = False

/* définition du node n°64*/
const myNode64 = object.addBox();
myNode64.point1.set(-0.85045,-0.95645,-0.77045);
myNode64.point2.set(4.6804499999999996,-0.31955,-0.030549999999999966);
myNode64.innerRotation.center.set(0,0,0);
myNode64.innerRotation.axis.set(0.0,0.0,0.0);
myNode64.innerRotation.angle.set(0.0);
myNode64.isVisible = False

/* définition du node n°65*/
const myNode65 = object.addBox();
myNode65.point1.set(-0.85045,-3.45645,-0.77045);
myNode65.point2.set(4.6804499999999996,-2.87255,-0.030549999999999966);
myNode65.innerRotation.center.set(0,0,0);
myNode65.innerRotation.axis.set(0.0,0.0,0.0);
myNode65.innerRotation.angle.set(0.0);
myNode65.isVisible = False

/* définition du node n°66*/
const myNode66 = object.addCylinder();
myNode66.point1.set(4.681,-3.459,-0.77045);
myNode66.point2.set(4.681,-3.459,0.7714500000000001);
myNode66.radius.set(0.149);
myNode66.innerRotation.center.set(0,0,0);
myNode66.innerRotation.axis.set(0.0,0.0,0.0);
myNode66.innerRotation.angle.set(0.0);
myNode66.isVisible = False

/* définition du node n°67*/
const myNode67_1 = object.addFuseOperation();
myNode67_1.leftArg.set(myNode64);
myNode67_1.rightArg.set(myNode64);
const myNode67_2 = object.addFuseOperation();
myNode67_2.leftArg.set(myNode67_1);
myNode67_2.rightArg.set(myNode65);
myNode67 = object.addFuseOperation();
myNode67.leftArg.set(myNode67_2);
myNode67.rightArg.set(myNode66);
myNode67.isVisible = False

/* définition du node n°68*/
const myNode68 = object.addCutOperation();
myNode68.leftArg.set(myNode63);
myNode68.rightArg.set(myNode67);
myNode68.isVisible = False

/* définition du node n°69*/
const myNode69 = object.addBox();
myNode69.point1.set(1.7031,0.9851,-0.0299);
myNode69.point2.set(2.1269,1.7549000000000001,0.7698999999999999);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(0.0,0.0,0.0);
myNode69.innerRotation.angle.set(0.0);
myNode69.isVisible = False

/* définition du node n°70*/
const myNode70 = object.addBox();
myNode70.point1.set(-4.6799,-2.8709,-0.7699);
myNode70.point2.set(-1.7031,1.5949,-0.031100000000000017);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(0.0,0.0,0.0);
myNode70.innerRotation.angle.set(0.0);
myNode70.isVisible = False

/* définition du node n°71*/
const myNode71 = object.addBox();
myNode71.point1.set(-4.6799,-3.4559,-0.0299);
myNode71.point2.set(-1.7031,1.7548999999999997,0.7698999999999999);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(0.0,0.0,0.0);
myNode71.innerRotation.angle.set(0.0);
myNode71.isVisible = False

/* définition du node n°72*/
const myNode72 = object.addCylinder();
myNode72.point1.set(-0.356,-1.223,-4.68045);
myNode72.point2.set(-0.356,-1.223,18.09945);
myNode72.radius.set(0.158);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode72.innerRotation.angle.set(1.5707926535968346);
myNode72.isVisible = False

/* définition du node n°73*/
const myNode73 = object.addCutOperation();
myNode73.leftArg.set(myNode71);
myNode73.rightArg.set(myNode72);
myNode73.isVisible = False

/* définition du node n°74*/
const myNode74 = object.addFuseOperation();
myNode74.leftArg.set(myNode70);
myNode74.rightArg.set(myNode73);
myNode74.isVisible = False

/* définition du node n°75*/
const myNode75 = object.addBox();
myNode75.point1.set(-4.25445,-2.92545,-0.77045);
myNode75.point2.set(-3.4045500000000004,1.7544499999999998,18.09945);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(0.0,0.0,0.0);
myNode75.innerRotation.angle.set(0.0);
myNode75.isVisible = False

/* définition du node n°76*/
const myNode76 = object.addBox();
myNode76.point1.set(-18.0994,-0.95645,-18.0995);
myNode76.point2.set(-1.5425000000000004,-0.31955,-0.03159999999999741);
myNode76.innerRotation.center.set(0,0,0);
myNode76.innerRotation.axis.set(0.0,0.0,0.0);
myNode76.innerRotation.angle.set(0.0);
myNode76.isVisible = False

/* définition du node n°77*/
const myNode77 = object.addCylinder();
myNode77.point1.set(-4.681,-3.457,-0.03045);
myNode77.point2.set(-4.681,-3.457,18.09945);
myNode77.radius.set(0.148);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(0.0,0.0,0.0);
myNode77.innerRotation.angle.set(0.0);
myNode77.isVisible = False

/* définition du node n°78*/
const myNode78 = object.addBox();
myNode78.point1.set(-2.97845,-2.92545,-18.0995);
myNode78.point2.set(-2.12855,1.7544499999999998,0.7704000000000022);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(0.0,0.0,0.0);
myNode78.innerRotation.angle.set(0.0);
myNode78.isVisible = False

/* définition du node n°79*/
const myNode79_1 = object.addFuseOperation();
myNode79_1.leftArg.set(myNode75);
myNode79_1.rightArg.set(myNode75);
const myNode79_2 = object.addFuseOperation();
myNode79_2.leftArg.set(myNode79_1);
myNode79_2.rightArg.set(myNode76);
const myNode79_3 = object.addFuseOperation();
myNode79_3.leftArg.set(myNode79_2);
myNode79_3.rightArg.set(myNode77);
myNode79 = object.addFuseOperation();
myNode79.leftArg.set(myNode79_3);
myNode79.rightArg.set(myNode78);
myNode79.isVisible = False

/* définition du node n°80*/
const myNode80 = object.addCutOperation();
myNode80.leftArg.set(myNode74);
myNode80.rightArg.set(myNode79);
myNode80.isVisible = False

/* définition du node n°81*/
const myNode81 = object.addBox();
myNode81.point1.set(0.4271,-0.3179,-0.7699);
myNode81.point2.set(0.8509,1.5949,0.7708999999999999);
myNode81.innerRotation.center.set(0,0,0);
myNode81.innerRotation.axis.set(0.0,0.0,0.0);
myNode81.innerRotation.angle.set(0.0);
myNode81.isVisible = False

/* définition du node n°82*/
const myNode82 = object.addBox();
myNode82.point1.set(-0.8499,-2.8709,-0.7699);
myNode82.point2.set(3.4029,-0.9580999999999997,-0.031100000000000017);
myNode82.innerRotation.center.set(0,0,0);
myNode82.innerRotation.axis.set(0.0,0.0,0.0);
myNode82.innerRotation.angle.set(0.0);
myNode82.isVisible = False

/* définition du node n°83*/
const myNode83 = object.addBox();
myNode83.point1.set(-0.8499,-2.9249,-0.0299);
myNode83.point2.set(3.4029,-0.32109999999999994,0.7698999999999999);
myNode83.innerRotation.center.set(0,0,0);
myNode83.innerRotation.axis.set(0.0,0.0,0.0);
myNode83.innerRotation.angle.set(0.0);
myNode83.isVisible = False

/* définition du node n°84*/
const myNode84 = object.addFuseOperation();
myNode84.leftArg.set(myNode82);
myNode84.rightArg.set(myNode83);
myNode84.isVisible = False

/* définition du node n°85*/
const myNode85 = object.addCylinder();
myNode85.point1.set(-0.002,-2.5,-0.77045);
myNode85.point2.set(-0.002,-2.5,0.7714500000000001);
myNode85.radius.set(0.149);
myNode85.innerRotation.center.set(0,0,0);
myNode85.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode85.innerRotation.angle.set(3.141592653586273);
myNode85.isVisible = False

/* définition du node n°86*/
const myNode86 = object.addCutOperation();
myNode86.leftArg.set(myNode84);
myNode86.rightArg.set(myNode85);
myNode86.isVisible = False

/* définition du node n°87*/
const myNode87 = object.addCylinder();
myNode87.point1.set(-0.356,-1.223,-18.0995);
myNode87.point2.set(-0.356,-1.223,4.2544);
myNode87.radius.set(0.158);
myNode87.innerRotation.center.set(0,0,0);
myNode87.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode87.innerRotation.angle.set(1.5707926535968346);
myNode87.isVisible = False

/* définition du node n°88*/
const myNode88 = object.addBox();
myNode88.point1.set(2.12855,-3.45645,-18.0995);
myNode88.point2.set(2.97845,18.09945,18.099400000000003);
myNode88.innerRotation.center.set(0,0,0);
myNode88.innerRotation.axis.set(0.0,0.0,0.0);
myNode88.innerRotation.angle.set(0.0);
myNode88.isVisible = False

/* définition du node n°89*/
const myNode89 = object.addBox();
myNode89.point1.set(-0.42545,-2.12245,-0.77045);
myNode89.point2.set(0.42445,18.09845,0.7714500000000001);
myNode89.innerRotation.center.set(0,0,0);
myNode89.innerRotation.axis.set(0.0,0.0,0.0);
myNode89.innerRotation.angle.set(0.0);
myNode89.isVisible = False

/* définition du node n°90*/
const myNode90 = object.addBox();
myNode90.point1.set(0.85155,-2.92545,-0.77045);
myNode90.point2.set(1.70145,18.09845,18.09945);
myNode90.innerRotation.center.set(0,0,0);
myNode90.innerRotation.axis.set(0.0,0.0,0.0);
myNode90.innerRotation.angle.set(0.0);
myNode90.isVisible = False

/* définition du node n°91*/
const myNode91_1 = object.addFuseOperation();
myNode91_1.leftArg.set(myNode87);
myNode91_1.rightArg.set(myNode87);
const myNode91_2 = object.addFuseOperation();
myNode91_2.leftArg.set(myNode91_1);
myNode91_2.rightArg.set(myNode88);
const myNode91_3 = object.addFuseOperation();
myNode91_3.leftArg.set(myNode91_2);
myNode91_3.rightArg.set(myNode89);
myNode91 = object.addFuseOperation();
myNode91.leftArg.set(myNode91_3);
myNode91.rightArg.set(myNode90);
myNode91.isVisible = False

/* définition du node n°92*/
const myNode92 = object.addCutOperation();
myNode92.leftArg.set(myNode86);
myNode92.rightArg.set(myNode91);
myNode92.isVisible = False

/* définition du node n°93*/
const myNode93_1 = object.addFuseOperation();
myNode93_1.leftArg.set(myNode1);
myNode93_1.rightArg.set(myNode1);
const myNode93_2 = object.addFuseOperation();
myNode93_2.leftArg.set(myNode93_1);
myNode93_2.rightArg.set(myNode2);
const myNode93_3 = object.addFuseOperation();
myNode93_3.leftArg.set(myNode93_2);
myNode93_3.rightArg.set(myNode14);
const myNode93_4 = object.addFuseOperation();
myNode93_4.leftArg.set(myNode93_3);
myNode93_4.rightArg.set(myNode17);
const myNode93_5 = object.addFuseOperation();
myNode93_5.leftArg.set(myNode93_4);
myNode93_5.rightArg.set(myNode32);
const myNode93_6 = object.addFuseOperation();
myNode93_6.leftArg.set(myNode93_5);
myNode93_6.rightArg.set(myNode40);
const myNode93_7 = object.addFuseOperation();
myNode93_7.leftArg.set(myNode93_6);
myNode93_7.rightArg.set(myNode54);
const myNode93_8 = object.addFuseOperation();
myNode93_8.leftArg.set(myNode93_7);
myNode93_8.rightArg.set(myNode55);
const myNode93_9 = object.addFuseOperation();
myNode93_9.leftArg.set(myNode93_8);
myNode93_9.rightArg.set(myNode56);
const myNode93_10 = object.addFuseOperation();
myNode93_10.leftArg.set(myNode93_9);
myNode93_10.rightArg.set(myNode68);
const myNode93_11 = object.addFuseOperation();
myNode93_11.leftArg.set(myNode93_10);
myNode93_11.rightArg.set(myNode69);
const myNode93_12 = object.addFuseOperation();
myNode93_12.leftArg.set(myNode93_11);
myNode93_12.rightArg.set(myNode80);
const myNode93_13 = object.addFuseOperation();
myNode93_13.leftArg.set(myNode93_12);
myNode93_13.rightArg.set(myNode81);
myNode93 = object.addFuseOperation();
myNode93.leftArg.set(myNode93_13);
myNode93.rightArg.set(myNode92);
myNode93.isVisible = False

/* définition du node n°94*/
const myNode94 = object.addCommonOperation();
myNode94.leftArg.set(myNode0);
myNode94.rightArg.set(myNode93);
myNode94.isVisible = True


/*END Geometry Object Definition*/