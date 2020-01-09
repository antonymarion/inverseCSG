/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.9989,-4.5309,-0.9249);
myNode0.point2.set(5.9989,4.5309,0.9238999999999999);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(0.0,0.0,-0.000500000000000056);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-1.7009,3.0331,-0.4509);
myNode1.point2.set(1.5418999999999998,3.4569,0.7699);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.innerTranslation.vector.set(-0.07950000000000013,3.245,0.15950000000000003);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-0.8499,-2.8709,-0.7699);
myNode2.point2.set(3.4029,-0.9580999999999997,-0.031100000000000017);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.innerTranslation.vector.set(1.2765,-1.9144999999999999,-0.4005);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addBox();
myNode3.point1.set(-0.8499,-2.9249,-0.0299);
myNode3.point2.set(3.4029,-0.32109999999999994,0.7698999999999999);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);
myNode3.innerTranslation.vector.set(1.2765,-1.623,0.37);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addFuseOperation();
myNode4.leftArg.set(myNode2);
myNode4.rightArg.set(myNode3);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(-0.002,-2.5,-0.77045);
myNode5.point2.set(-0.002,-2.5,0.7714500000000001);
myNode5.radius.set(0.149);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode5.innerRotation.angle.set(179.9999999997983);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addCutOperation();
myNode6.leftArg.set(myNode4);
myNode6.rightArg.set(myNode5);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addBox();
myNode7.point1.set(0.85155,-2.92545,-0.77045);
myNode7.point2.set(1.70145,18.09845,18.09945);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);
myNode7.innerTranslation.vector.set(1.2765,7.586500000000001,8.6645);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addBox();
myNode8.point1.set(-0.42545,-2.12245,-0.77045);
myNode8.point2.set(0.42445,18.09845,0.7714500000000001);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.innerTranslation.vector.set(-0.0005000000000000004,7.9879999999999995,0.000500000000000056);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(2.12855,-3.45645,-18.0995);
myNode9.point2.set(2.97845,18.09945,18.099400000000003);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.innerTranslation.vector.set(2.5535,7.3215,-4.9999999998107114e-05);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addCylinder();
myNode10.point1.set(-0.356,-1.223,-18.0995);
myNode10.point2.set(-0.356,-1.223,4.2544);
myNode10.radius.set(0.158);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode10.innerRotation.angle.set(89.99978954125373);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11_1 = myNode7.clone();
myNode11_1.isVisible = false;
const myNode11_2 = object.addFuseOperation();
myNode11_2.leftArg.set(myNode11_1);
myNode11_2.rightArg.set(myNode8);
myNode11_2.isVisible = false;
const myNode11_3 = object.addFuseOperation();
myNode11_3.leftArg.set(myNode11_2);
myNode11_3.rightArg.set(myNode9);
myNode11_3.isVisible = false;
myNode11 = object.addFuseOperation();
myNode11.leftArg.set(myNode11_3);
myNode11.rightArg.set(myNode10);
myNode11.isVisible = false;
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCutOperation();
myNode12.leftArg.set(myNode6);
myNode12.rightArg.set(myNode11);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addBox();
myNode13.point1.set(-1.0099,0.5211,-0.7699);
myNode13.point2.set(1.0089000000000001,0.9819,0.7708999999999999);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);
myNode13.innerTranslation.vector.set(-0.0004999999999999449,0.7515000000000001,0.0004999999999999449);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addBox();
myNode14.point1.set(1.7031,0.9851,-0.0299);
myNode14.point2.set(2.1269,1.7549000000000001,0.7698999999999999);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);
myNode14.innerTranslation.vector.set(1.915,1.37,0.37);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addCylinder();
myNode15.point1.set(-4.681,-3.458,-0.7699);
myNode15.point2.set(-4.681,-3.458,0.7708999999999999);
myNode15.radius.set(0.319);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode15.innerRotation.angle.set(179.9999999997983);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addBox();
myNode16.point1.set(-0.8499,-3.4559,-0.7699);
myNode16.point2.set(4.6799,-0.32010000000000005,0.7708999999999999);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);
myNode16.innerTranslation.vector.set(1.915,-1.8880000000000001,0.0004999999999999449);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addFuseOperation();
myNode17.leftArg.set(myNode15);
myNode17.rightArg.set(myNode16);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addBox();
myNode18.point1.set(-0.42545,-2.93045,-0.77045);
myNode18.point2.set(4.25445,-0.31555,0.7714500000000001);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);
myNode18.innerTranslation.vector.set(1.9144999999999999,-1.623,0.000500000000000056);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addCylinder();
myNode19.point1.set(-0.356,-1.223,-18.0995);
myNode19.point2.set(-0.356,-1.223,18.099400000000003);
myNode19.radius.set(0.158);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode19.innerRotation.angle.set(89.99978954125373);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addFuseOperation();
myNode20.leftArg.set(myNode18);
myNode20.rightArg.set(myNode19);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addCutOperation();
myNode21.leftArg.set(myNode17);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addBox();
myNode22.point1.set(-0.85045,-3.45645,-0.77045);
myNode22.point2.set(4.6804499999999996,-2.87255,-0.030549999999999966);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(0.0,0.0,0.0);
myNode22.innerRotation.angle.set(0.0);
myNode22.innerTranslation.vector.set(1.915,-3.1645,-0.40049999999999997);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addBox();
myNode23.point1.set(-0.85045,-0.95645,-0.77045);
myNode23.point2.set(4.6804499999999996,-0.31955,-0.030549999999999966);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);
myNode23.innerTranslation.vector.set(1.915,-0.638,-0.40049999999999997);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addCylinder();
myNode24.point1.set(4.681,-3.459,-0.77045);
myNode24.point2.set(4.681,-3.459,0.7714500000000001);
myNode24.radius.set(0.149);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25_1 = myNode22.clone();
myNode25_1.isVisible = false;
const myNode25_2 = object.addFuseOperation();
myNode25_2.leftArg.set(myNode25_1);
myNode25_2.rightArg.set(myNode23);
myNode25_2.isVisible = false;
myNode25 = object.addFuseOperation();
myNode25.leftArg.set(myNode25_2);
myNode25.rightArg.set(myNode24);
myNode25.isVisible = false;
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addCutOperation();
myNode26.leftArg.set(myNode21);
myNode26.rightArg.set(myNode25);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addCylinder();
myNode27.point1.set(4.679,3.46,-0.7699);
myNode27.point2.set(4.679,3.46,0.7708999999999999);
myNode27.radius.set(0.319);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addCylinder();
myNode28.point1.set(-4.681,3.456,-18.0995);
myNode28.point2.set(-4.681,3.456,18.099400000000003);
myNode28.radius.set(0.148);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode28.innerRotation.angle.set(179.9999999997983);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addCutOperation();
myNode29.leftArg.set(myNode27);
myNode29.rightArg.set(myNode28);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addBox();
myNode30.point1.set(0.4271,0.5211,-0.0299);
myNode30.point2.set(0.8509,1.7538999999999998,0.7698999999999999);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);
myNode30.innerTranslation.vector.set(0.639,1.1375,0.37);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addBox();
myNode31.point1.set(0.4271,-0.3179,-0.7699);
myNode31.point2.set(0.8509,1.5949,0.7708999999999999);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(0.0,0.0,0.0);
myNode31.innerRotation.angle.set(0.0);
myNode31.innerTranslation.vector.set(0.639,0.6385000000000001,0.0004999999999999449);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addBox();
myNode32.point1.set(-1.7009,1.7561,-0.0299);
myNode32.point2.set(4.2539,3.4558999999999997,0.7698999999999999);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);
myNode32.innerTranslation.vector.set(1.2764999999999997,2.606,0.37);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addBox();
myNode33.point1.set(1.0121,0.5211,-0.4509);
myNode33.point2.set(4.6799,0.9819,0.7699);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);
myNode33.innerTranslation.vector.set(2.846,0.7515000000000001,0.15950000000000003);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addBox();
myNode34.point1.set(-1.0099,3.0331,-0.7699);
myNode34.point2.set(1.0089000000000001,3.4569,0.7708999999999999);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(0.0,0.0,0.0);
myNode34.innerRotation.angle.set(0.0);
myNode34.innerTranslation.vector.set(-0.0004999999999999449,3.245,0.0004999999999999449);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addBox();
myNode35.point1.set(1.7031,-0.3179,-0.7699);
myNode35.point2.set(3.4029,1.5949,-0.031100000000000017);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,0.0);
myNode35.innerRotation.angle.set(0.0);
myNode35.innerTranslation.vector.set(2.553,0.6385000000000001,-0.4005);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36_1 = myNode32.clone();
myNode36_1.isVisible = false;
const myNode36_2 = object.addFuseOperation();
myNode36_2.leftArg.set(myNode36_1);
myNode36_2.rightArg.set(myNode33);
myNode36_2.isVisible = false;
const myNode36_3 = object.addFuseOperation();
myNode36_3.leftArg.set(myNode36_2);
myNode36_3.rightArg.set(myNode34);
myNode36_3.isVisible = false;
myNode36 = object.addFuseOperation();
myNode36.leftArg.set(myNode36_3);
myNode36.rightArg.set(myNode35);
myNode36.isVisible = false;
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addBox();
myNode37.point1.set(-18.0995,2.18155,-0.77045);
myNode37.point2.set(4.2544,3.03145,0.7714500000000001);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0,0.0,0.0);
myNode37.innerRotation.angle.set(0.0);
myNode37.innerTranslation.vector.set(-6.922549999999999,2.6065,0.000500000000000056);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addCylinder();
myNode38.point1.set(-0.356,-2.553,1.75555);
myNode38.point2.set(-0.356,-2.553,3.4564500000000002);
myNode38.radius.set(0.153);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode38.innerRotation.angle.set(119.9998447624254);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addBox();
myNode39.point1.set(-1.01045,-0.31845,-0.77045);
myNode39.point2.set(3.40345,2.23345,-0.030549999999999966);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(0.0,0.0,0.0);
myNode39.innerRotation.angle.set(0.0);
myNode39.innerTranslation.vector.set(1.1965,0.9574999999999999,-0.40049999999999997);
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addBox();
myNode40.point1.set(2.12855,-0.31845,-0.77045);
myNode40.point2.set(2.97845,1.59545,0.7714500000000001);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(0.0,0.0,0.0);
myNode40.innerRotation.angle.set(0.0);
myNode40.innerTranslation.vector.set(2.5535,0.6385,0.000500000000000056);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41 = object.addCommonOperation();
myNode41.leftArg.set(myNode39);
myNode41.rightArg.set(myNode40);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42_1 = myNode37.clone();
myNode42_1.isVisible = false;
const myNode42_2 = object.addFuseOperation();
myNode42_2.leftArg.set(myNode42_1);
myNode42_2.rightArg.set(myNode38);
myNode42_2.isVisible = false;
myNode42 = object.addFuseOperation();
myNode42.leftArg.set(myNode42_2);
myNode42.rightArg.set(myNode41);
myNode42.isVisible = false;
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addCutOperation();
myNode43.leftArg.set(myNode36);
myNode43.rightArg.set(myNode42);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44 = object.addBox();
myNode44.point1.set(-0.8499,-0.3179,-0.7699);
myNode44.point2.set(1.5419,3.0309000000000004,0.7708999999999999);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(0.0,0.0,0.0);
myNode44.innerRotation.angle.set(0.0);
myNode44.innerTranslation.vector.set(0.346,1.3565,0.0004999999999999449);
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45 = object.addBox();
myNode45.point1.set(1.7031,-2.1219,-0.0299);
myNode45.point2.set(2.1269,0.9819,0.7698999999999999);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(0.0,0.0,0.0);
myNode45.innerRotation.angle.set(0.0);
myNode45.innerTranslation.vector.set(1.915,-0.5700000000000001,0.37);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addBox();
myNode46.point1.set(-0.8499,-2.1219,-0.0299);
myNode46.point2.set(1.5419,-0.32110000000000016,0.7698999999999999);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(0.0,0.0,0.0);
myNode46.innerRotation.angle.set(0.0);
myNode46.innerTranslation.vector.set(0.346,-1.2215000000000003,0.37);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addBox();
myNode47.point1.set(1.5441,0.5211,-0.7699);
myNode47.point2.set(4.6799,3.4559,-0.031100000000000017);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(0.0,0.0,0.0);
myNode47.innerRotation.angle.set(0.0);
myNode47.innerTranslation.vector.set(3.112,1.9885000000000002,-0.4005);
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addBox();
myNode48.point1.set(4.2561,-0.3179,-0.7699);
myNode48.point2.set(4.6799,3.4569,0.7708999999999999);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);
myNode48.innerTranslation.vector.set(4.468,1.5695,0.0004999999999999449);
myNode48.isVisible = false;

/* définition du node n°49*/
const myNode49_1 = myNode44.clone();
myNode49_1.isVisible = false;
const myNode49_2 = object.addFuseOperation();
myNode49_2.leftArg.set(myNode49_1);
myNode49_2.rightArg.set(myNode45);
myNode49_2.isVisible = false;
const myNode49_3 = object.addFuseOperation();
myNode49_3.leftArg.set(myNode49_2);
myNode49_3.rightArg.set(myNode46);
myNode49_3.isVisible = false;
const myNode49_4 = object.addFuseOperation();
myNode49_4.leftArg.set(myNode49_3);
myNode49_4.rightArg.set(myNode47);
myNode49_4.isVisible = false;
myNode49 = object.addFuseOperation();
myNode49.leftArg.set(myNode49_4);
myNode49.rightArg.set(myNode48);
myNode49.isVisible = false;
myNode49.isVisible = false;

/* définition du node n°50*/
const myNode50 = object.addCylinder();
myNode50.point1.set(-0.356,-1.223,-1.01045);
myNode50.point2.set(-0.356,-1.223,3.40345);
myNode50.radius.set(0.158);
myNode50.innerRotation.center.set(0,0,0);
myNode50.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode50.innerRotation.angle.set(89.99978954125373);
myNode50.isVisible = false;

/* définition du node n°51*/
const myNode51 = object.addBox();
myNode51.point1.set(3.56455,-0.31845,-18.0994);
myNode51.point2.set(4.0954500000000005,3.45745,-0.45250000000000057);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(0.0,0.0,0.0);
myNode51.innerRotation.angle.set(0.0);
myNode51.innerTranslation.vector.set(3.83,1.5695000000000001,-9.27595);
myNode51.isVisible = false;

/* définition du node n°52*/
const myNode52 = object.addBox();
myNode52.point1.set(-0.43045,-18.0994,-0.77045);
myNode52.point2.set(1.54645,1.7545000000000002,18.09945);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,0.0,0.0);
myNode52.innerRotation.angle.set(0.0);
myNode52.innerTranslation.vector.set(0.558,-8.17245,8.6645);
myNode52.isVisible = false;

/* définition du node n°53*/
const myNode53 = object.addBox();
myNode53.point1.set(0.85155,0.98455,-0.77045);
myNode53.point2.set(4.25445,3.03145,0.7714500000000001);
myNode53.innerRotation.center.set(0,0,0);
myNode53.innerRotation.axis.set(0.0,0.0,0.0);
myNode53.innerRotation.angle.set(0.0);
myNode53.innerTranslation.vector.set(2.553,2.008,0.000500000000000056);
myNode53.isVisible = false;

/* définition du node n°54*/
const myNode54 = object.addBox();
myNode54.point1.set(-1.01045,1.59655,-0.77045);
myNode54.point2.set(4.679449999999999,2.23345,-0.030549999999999966);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(0.0,0.0,0.0);
myNode54.innerRotation.angle.set(0.0);
myNode54.innerTranslation.vector.set(1.8344999999999998,1.915,-0.40049999999999997);
myNode54.isVisible = false;

/* définition du node n°55*/
const myNode55 = object.addCylinder();
myNode55.point1.set(0,2.607,-0.77045);
myNode55.point2.set(0,2.607,18.09945);
myNode55.radius.set(0.148);
myNode55.innerRotation.center.set(0,0,0);
myNode55.innerRotation.axis.set(0.0,0.0,0.0);
myNode55.innerRotation.angle.set(0.0);
myNode55.isVisible = false;

/* définition du node n°56*/
const myNode56_1 = myNode50.clone();
myNode56_1.isVisible = false;
const myNode56_2 = object.addFuseOperation();
myNode56_2.leftArg.set(myNode56_1);
myNode56_2.rightArg.set(myNode51);
myNode56_2.isVisible = false;
const myNode56_3 = object.addFuseOperation();
myNode56_3.leftArg.set(myNode56_2);
myNode56_3.rightArg.set(myNode52);
myNode56_3.isVisible = false;
const myNode56_4 = object.addFuseOperation();
myNode56_4.leftArg.set(myNode56_3);
myNode56_4.rightArg.set(myNode53);
myNode56_4.isVisible = false;
const myNode56_5 = object.addFuseOperation();
myNode56_5.leftArg.set(myNode56_4);
myNode56_5.rightArg.set(myNode28);
myNode56_5.isVisible = false;
const myNode56_6 = object.addFuseOperation();
myNode56_6.leftArg.set(myNode56_5);
myNode56_6.rightArg.set(myNode54);
myNode56_6.isVisible = false;
myNode56 = object.addFuseOperation();
myNode56.leftArg.set(myNode56_6);
myNode56.rightArg.set(myNode55);
myNode56.isVisible = false;
myNode56.isVisible = false;

/* définition du node n°57*/
const myNode57 = object.addCutOperation();
myNode57.leftArg.set(myNode49);
myNode57.rightArg.set(myNode56);
myNode57.isVisible = false;

/* définition du node n°58*/
const myNode58 = object.addBox();
myNode58.point1.set(2.9801,-0.3179,-0.0299);
myNode58.point2.set(3.4039,1.7539,0.7698999999999999);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(0.0,0.0,0.0);
myNode58.innerRotation.angle.set(0.0);
myNode58.innerTranslation.vector.set(3.192,0.718,0.37);
myNode58.isVisible = false;

/* définition du node n°59*/
const myNode59 = object.addBox();
myNode59.point1.set(-4.6799,-2.8709,-0.7699);
myNode59.point2.set(-1.7031,1.5949,-0.031100000000000017);
myNode59.innerRotation.center.set(0,0,0);
myNode59.innerRotation.axis.set(0.0,0.0,0.0);
myNode59.innerRotation.angle.set(0.0);
myNode59.innerTranslation.vector.set(-3.1915,-0.6379999999999999,-0.4005);
myNode59.isVisible = false;

/* définition du node n°60*/
const myNode60 = object.addBox();
myNode60.point1.set(-4.6799,-3.4559,-0.0299);
myNode60.point2.set(-1.7031,1.7548999999999997,0.7698999999999999);
myNode60.innerRotation.center.set(0,0,0);
myNode60.innerRotation.axis.set(0.0,0.0,0.0);
myNode60.innerRotation.angle.set(0.0);
myNode60.innerTranslation.vector.set(-3.1915,-0.8505000000000003,0.37);
myNode60.isVisible = false;

/* définition du node n°61*/
const myNode61 = object.addCylinder();
myNode61.point1.set(-0.356,-1.223,-4.68045);
myNode61.point2.set(-0.356,-1.223,18.09945);
myNode61.radius.set(0.158);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode61.innerRotation.angle.set(89.99978954125373);
myNode61.isVisible = false;

/* définition du node n°62*/
const myNode62 = object.addCutOperation();
myNode62.leftArg.set(myNode60);
myNode62.rightArg.set(myNode61);
myNode62.isVisible = false;

/* définition du node n°63*/
const myNode63 = object.addFuseOperation();
myNode63.leftArg.set(myNode59);
myNode63.rightArg.set(myNode62);
myNode63.isVisible = false;

/* définition du node n°64*/
const myNode64 = object.addBox();
myNode64.point1.set(-18.0994,-0.95645,-18.0995);
myNode64.point2.set(-1.5425000000000004,-0.31955,-0.03159999999999741);
myNode64.innerRotation.center.set(0,0,0);
myNode64.innerRotation.axis.set(0.0,0.0,0.0);
myNode64.innerRotation.angle.set(0.0);
myNode64.innerTranslation.vector.set(-9.82095,-0.638,-9.065549999999998);
myNode64.isVisible = false;

/* définition du node n°65*/
const myNode65 = object.addBox();
myNode65.point1.set(-2.97845,-2.92545,-18.0995);
myNode65.point2.set(-2.12855,1.7544499999999998,0.7704000000000022);
myNode65.innerRotation.center.set(0,0,0);
myNode65.innerRotation.axis.set(0.0,0.0,0.0);
myNode65.innerRotation.angle.set(0.0);
myNode65.innerTranslation.vector.set(-2.5535,-0.5855000000000001,-8.664549999999998);
myNode65.isVisible = false;

/* définition du node n°66*/
const myNode66 = object.addBox();
myNode66.point1.set(-4.25445,-2.92545,-0.77045);
myNode66.point2.set(-3.4045500000000004,1.7544499999999998,18.09945);
myNode66.innerRotation.center.set(0,0,0);
myNode66.innerRotation.axis.set(0.0,0.0,0.0);
myNode66.innerRotation.angle.set(0.0);
myNode66.innerTranslation.vector.set(-3.8295000000000003,-0.5855000000000001,8.6645);
myNode66.isVisible = false;

/* définition du node n°67*/
const myNode67 = object.addCylinder();
myNode67.point1.set(-4.681,-3.457,-0.03045);
myNode67.point2.set(-4.681,-3.457,18.09945);
myNode67.radius.set(0.148);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(0.0,0.0,0.0);
myNode67.innerRotation.angle.set(0.0);
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
myNode70.point1.set(-4.6799,-2.9249,-0.0299);
myNode70.point2.set(-4.2561,2.2329,0.7698999999999999);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(0.0,0.0,0.0);
myNode70.innerRotation.angle.set(0.0);
myNode70.innerTranslation.vector.set(-4.468,-0.3460000000000001,0.37);
myNode70.isVisible = false;

/* définition du node n°71*/
const myNode71 = object.addBox();
myNode71.point1.set(-3.5629,0.5211,-0.7699);
myNode71.point2.set(-1.5440999999999998,0.9819,0.7708999999999999);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(0.0,0.0,0.0);
myNode71.innerRotation.angle.set(0.0);
myNode71.innerTranslation.vector.set(-2.5534999999999997,0.7515000000000001,0.0004999999999999449);
myNode71.isVisible = false;

/* définition du node n°72*/
const myNode72 = object.addBox();
myNode72.point1.set(-4.6799,2.2351,-0.7699);
myNode72.point2.set(-4.2561,3.0309,0.7708999999999999);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(0.0,0.0,0.0);
myNode72.innerRotation.angle.set(0.0);
myNode72.innerTranslation.vector.set(-4.468,2.633,0.0004999999999999449);
myNode72.isVisible = false;

/* définition du node n°73*/
const myNode73 = object.addBox();
myNode73.point1.set(-4.6799,1.7561,-0.0299);
myNode73.point2.set(-1.7031,2.1799,0.7698999999999999);
myNode73.innerRotation.center.set(0,0,0);
myNode73.innerRotation.axis.set(0.0,0.0,0.0);
myNode73.innerRotation.angle.set(0.0);
myNode73.innerTranslation.vector.set(-3.1915,1.968,0.37);
myNode73.isVisible = false;

/* définition du node n°74*/
const myNode74 = object.addBox();
myNode74.point1.set(-4.0949,-3.4559,-0.4509);
myNode74.point2.set(-0.4270999999999998,0.9828999999999994,0.7699);
myNode74.innerRotation.center.set(0,0,0);
myNode74.innerRotation.axis.set(0.0,0.0,0.0);
myNode74.innerRotation.angle.set(0.0);
myNode74.innerTranslation.vector.set(-2.261,-1.2365000000000004,0.15950000000000003);
myNode74.isVisible = false;

/* définition du node n°75*/
const myNode75 = object.addBox();
myNode75.point1.set(-4.6799,-2.8709,-0.7699);
myNode75.point2.set(-4.0971,0.9829000000000003,0.7708999999999999);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(0.0,0.0,0.0);
myNode75.innerRotation.angle.set(0.0);
myNode75.innerTranslation.vector.set(-4.3885,-0.9439999999999997,0.0004999999999999449);
myNode75.isVisible = false;

/* définition du node n°76*/
const myNode76 = object.addCylinder();
myNode76.point1.set(-4.679,-3.458,-0.7699);
myNode76.point2.set(-4.679,-3.458,0.7708999999999999);
myNode76.radius.set(0.319);
myNode76.innerRotation.center.set(0,0,0);
myNode76.innerRotation.axis.set(0.0,0.0,0.0);
myNode76.innerRotation.angle.set(0.0);
myNode76.isVisible = false;

/* définition du node n°77*/
const myNode77 = object.addCylinder();
myNode77.point1.set(-4.681,-3.457,-18.0995);
myNode77.point2.set(-4.681,-3.457,18.099400000000003);
myNode77.radius.set(0.148);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(0.0,0.0,0.0);
myNode77.innerRotation.angle.set(0.0);
myNode77.isVisible = false;

/* définition du node n°78*/
const myNode78 = object.addCutOperation();
myNode78.leftArg.set(myNode76);
myNode78.rightArg.set(myNode77);
myNode78.isVisible = false;

/* définition du node n°79*/
const myNode79_1 = myNode70.clone();
myNode79_1.isVisible = false;
const myNode79_2 = object.addFuseOperation();
myNode79_2.leftArg.set(myNode79_1);
myNode79_2.rightArg.set(myNode71);
myNode79_2.isVisible = false;
const myNode79_3 = object.addFuseOperation();
myNode79_3.leftArg.set(myNode79_2);
myNode79_3.rightArg.set(myNode72);
myNode79_3.isVisible = false;
const myNode79_4 = object.addFuseOperation();
myNode79_4.leftArg.set(myNode79_3);
myNode79_4.rightArg.set(myNode73);
myNode79_4.isVisible = false;
const myNode79_5 = object.addFuseOperation();
myNode79_5.leftArg.set(myNode79_4);
myNode79_5.rightArg.set(myNode74);
myNode79_5.isVisible = false;
const myNode79_6 = object.addFuseOperation();
myNode79_6.leftArg.set(myNode79_5);
myNode79_6.rightArg.set(myNode75);
myNode79_6.isVisible = false;
myNode79 = object.addFuseOperation();
myNode79.leftArg.set(myNode79_6);
myNode79.rightArg.set(myNode78);
myNode79.isVisible = false;
myNode79.isVisible = false;

/* définition du node n°80*/
const myNode80 = object.addBox();
myNode80.point1.set(-4.68045,-2.92545,-0.77045);
myNode80.point2.set(18.09945,0.51945,18.09945);
myNode80.innerRotation.center.set(0,0,0);
myNode80.innerRotation.axis.set(0.0,0.0,0.0);
myNode80.innerRotation.angle.set(0.0);
myNode80.innerTranslation.vector.set(6.7095,-1.203,8.6645);
myNode80.isVisible = false;

/* définition du node n°81*/
const myNode81 = object.addBox();
myNode81.point1.set(-18.0995,-3.45645,-0.77045);
myNode81.point2.set(18.099400000000003,0.5204500000000003,-0.030549999999999966);
myNode81.innerRotation.center.set(0,0,0);
myNode81.innerRotation.axis.set(0.0,0.0,0.0);
myNode81.innerRotation.angle.set(0.0);
myNode81.innerTranslation.vector.set(-4.9999999998107114e-05,-1.4679999999999997,-0.40049999999999997);
myNode81.isVisible = false;

/* définition du node n°82*/
const myNode82 = object.addCylinder();
myNode82.point1.set(-0.356,2.554,1.59655);
myNode82.point2.set(-0.356,2.554,2.18045);
myNode82.radius.set(0.158);
myNode82.innerRotation.center.set(0,0,0);
myNode82.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode82.innerRotation.angle.set(119.9998447624254);
myNode82.isVisible = false;

/* définition du node n°83*/
const myNode83_1 = myNode80.clone();
myNode83_1.isVisible = false;
const myNode83_2 = object.addFuseOperation();
myNode83_2.leftArg.set(myNode83_1);
myNode83_2.rightArg.set(myNode81);
myNode83_2.isVisible = false;
myNode83 = object.addFuseOperation();
myNode83.leftArg.set(myNode83_2);
myNode83.rightArg.set(myNode82);
myNode83.isVisible = false;
myNode83.isVisible = false;

/* définition du node n°84*/
const myNode84 = object.addCutOperation();
myNode84.leftArg.set(myNode79);
myNode84.rightArg.set(myNode83);
myNode84.isVisible = false;

/* définition du node n°85*/
const myNode85 = object.addCylinder();
myNode85.point1.set(-4.682,3.457,-0.7699);
myNode85.point2.set(-4.682,3.457,0.7708999999999999);
myNode85.radius.set(0.318);
myNode85.innerRotation.center.set(0,0,0);
myNode85.innerRotation.axis.set(0.0,0.0,0.0);
myNode85.innerRotation.angle.set(0.0);
myNode85.isVisible = false;

/* définition du node n°86*/
const myNode86 = object.addBox();
myNode86.point1.set(-4.6799,3.0331,-0.7699);
myNode86.point2.set(-1.5440999999999998,3.4569,0.7708999999999999);
myNode86.innerRotation.center.set(0,0,0);
myNode86.innerRotation.axis.set(0.0,0.0,0.0);
myNode86.innerRotation.angle.set(0.0);
myNode86.innerTranslation.vector.set(-3.112,3.245,0.0004999999999999449);
myNode86.isVisible = false;

/* définition du node n°87*/
const myNode87 = object.addFuseOperation();
myNode87.leftArg.set(myNode85);
myNode87.rightArg.set(myNode86);
myNode87.isVisible = false;

/* définition du node n°88*/
const myNode88 = object.addCylinder();
myNode88.point1.set(-0.356,2.554,0.98455);
myNode88.point2.set(-0.356,2.554,18.099449999999997);
myNode88.radius.set(0.158);
myNode88.innerRotation.center.set(0,0,0);
myNode88.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode88.innerRotation.angle.set(119.9998447624254);
myNode88.isVisible = false;

/* définition du node n°89*/
const myNode89 = object.addCylinder();
myNode89.point1.set(4.682,3.457,-18.0995);
myNode89.point2.set(4.682,3.457,0.7704000000000022);
myNode89.radius.set(0.148);
myNode89.innerRotation.center.set(0,0,0);
myNode89.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode89.innerRotation.angle.set(179.9999999997983);
myNode89.isVisible = false;

/* définition du node n°90*/
const myNode90 = object.addBox();
myNode90.point1.set(-4.09545,-3.45645,-18.0994);
myNode90.point2.set(-3.5645499999999997,3.45745,-0.45250000000000057);
myNode90.innerRotation.center.set(0,0,0);
myNode90.innerRotation.axis.set(0.0,0.0,0.0);
myNode90.innerRotation.angle.set(0.0);
myNode90.innerTranslation.vector.set(-3.8299999999999996,0.000500000000000167,-9.27595);
myNode90.isVisible = false;

/* définition du node n°91*/
const myNode91_1 = myNode88.clone();
myNode91_1.isVisible = false;
const myNode91_2 = object.addFuseOperation();
myNode91_2.leftArg.set(myNode91_1);
myNode91_2.rightArg.set(myNode89);
myNode91_2.isVisible = false;
myNode91 = object.addFuseOperation();
myNode91.leftArg.set(myNode91_2);
myNode91.rightArg.set(myNode90);
myNode91.isVisible = false;
myNode91.isVisible = false;

/* définition du node n°92*/
const myNode92 = object.addCutOperation();
myNode92.leftArg.set(myNode87);
myNode92.rightArg.set(myNode91);
myNode92.isVisible = false;

/* définition du node n°93*/
const myNode93_1 = myNode1.clone();
myNode93_1.isVisible = false;
const myNode93_2 = object.addFuseOperation();
myNode93_2.leftArg.set(myNode93_1);
myNode93_2.rightArg.set(myNode12);
myNode93_2.isVisible = false;
const myNode93_3 = object.addFuseOperation();
myNode93_3.leftArg.set(myNode93_2);
myNode93_3.rightArg.set(myNode13);
myNode93_3.isVisible = false;
const myNode93_4 = object.addFuseOperation();
myNode93_4.leftArg.set(myNode93_3);
myNode93_4.rightArg.set(myNode14);
myNode93_4.isVisible = false;
const myNode93_5 = object.addFuseOperation();
myNode93_5.leftArg.set(myNode93_4);
myNode93_5.rightArg.set(myNode26);
myNode93_5.isVisible = false;
const myNode93_6 = object.addFuseOperation();
myNode93_6.leftArg.set(myNode93_5);
myNode93_6.rightArg.set(myNode29);
myNode93_6.isVisible = false;
const myNode93_7 = object.addFuseOperation();
myNode93_7.leftArg.set(myNode93_6);
myNode93_7.rightArg.set(myNode30);
myNode93_7.isVisible = false;
const myNode93_8 = object.addFuseOperation();
myNode93_8.leftArg.set(myNode93_7);
myNode93_8.rightArg.set(myNode31);
myNode93_8.isVisible = false;
const myNode93_9 = object.addFuseOperation();
myNode93_9.leftArg.set(myNode93_8);
myNode93_9.rightArg.set(myNode43);
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
myNode93_13.rightArg.set(myNode84);
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