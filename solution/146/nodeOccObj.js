/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addCylinder();
myNode0.point1.set(1.088,-3.394,-0.4359);
myNode0.point2.set(1.088,-3.394,-0.027100000000000013);
myNode0.radius.set(0.259);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(3.819,3.392,-0.4359);
myNode1.point2.set(3.819,3.392,-0.027100000000000013);
myNode1.radius.set(0.261);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-4.4549,-2.4359,-0.4359);
myNode2.point2.set(-4.072100000000001,1.2998999999999996,-0.027100000000000013);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.innerTranslation.vector.set(-4.2635000000000005,-0.5680000000000003,-0.2315);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(-4.341,-2.514,-18.0999);
myNode3.point2.set(-4.341,-2.514,18.099999999999998);
myNode3.radius.set(0.257);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addCutOperation();
myNode4.leftArg.set(myNode2);
myNode4.rightArg.set(myNode3);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addBox();
myNode5.point1.set(-4.4549,1.3001,-0.4359);
myNode5.point2.set(-4.072100000000001,2.4359,0.02789999999999998);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.innerTranslation.vector.set(-4.2635000000000005,1.8679999999999999,-0.20400000000000001);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addCylinder();
myNode6.point1.set(-4.341,2.514,-18.0999);
myNode6.point2.set(-4.341,2.514,18.099999999999998);
myNode6.radius.set(0.257);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addCutOperation();
myNode7.leftArg.set(myNode5);
myNode7.rightArg.set(myNode6);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addBox();
myNode8.point1.set(-3.6859,-3.6549,-0.4359);
myNode8.point2.set(-3.5361000000000002,-3.3971,-0.027100000000000013);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.innerTranslation.vector.set(-3.611,-3.5260000000000002,-0.2315);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addCylinder();
myNode9.point1.set(0.001,2.525,-0.4359);
myNode9.point2.set(0.001,2.525,0.4369);
myNode9.radius.set(0.275);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addCylinder();
myNode10.point1.set(0,2.527,-18.0999);
myNode10.point2.set(0,2.527,18.099999999999998);
myNode10.radius.set(0.136);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addCutOperation();
myNode11.leftArg.set(myNode9);
myNode11.rightArg.set(myNode10);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addBox();
myNode12.point1.set(3.3231,-2.4359,-0.4359);
myNode12.point2.set(4.0719,2.0279,-0.2091);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);
myNode12.innerTranslation.vector.set(3.6975000000000002,-0.20400000000000018,-0.3225);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addCylinder();
myNode13.point1.set(-3.818,-3.393,-0.4359);
myNode13.point2.set(-3.818,-3.393,-0.027100000000000013);
myNode13.radius.set(0.261);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(-4.726,-1.982,-0.4359);
myNode14.point2.set(-4.726,-1.982,0.4369);
myNode14.radius.set(0.273);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addBox();
myNode15.point1.set(-4.0709,-3.3969,-0.4359);
myNode15.point2.set(-0.5670999999999999,-2.0281000000000002,-0.027100000000000013);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);
myNode15.innerTranslation.vector.set(-2.319,-2.7125,-0.2315);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16_1 = myNode13.clone();
myNode16_1.isVisible = false;
const myNode16_2 = object.addFuseOperation();
myNode16_2.leftArg.set(myNode16_1);
myNode16_2.rightArg.set(myNode14);
myNode16_2.isVisible = false;
myNode16 = object.addFuseOperation();
myNode16.leftArg.set(myNode16_2);
myNode16.rightArg.set(myNode15);
myNode16.isVisible = false;
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(-3.53595,-3.39695,-0.43595);
myNode17.point2.set(-0.56705,-2.43705,18.099950000000003);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.innerTranslation.vector.set(-2.0515,-2.917,8.832);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(-0.564,-2.519,-0.43595);
myNode18.point2.set(-0.564,-2.519,18.099950000000003);
myNode18.radius.set(0.263);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addCylinder();
myNode19.point1.set(-3.719,-3.046,-0.43595);
myNode19.point2.set(-3.719,-3.046,18.099950000000003);
myNode19.radius.set(0.073);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(0.0,0.0,0.0);
myNode19.innerRotation.angle.set(0.0);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addCylinder();
myNode20.point1.set(-4.726,-1.981,-0.43595);
myNode20.point2.set(-4.726,-1.981,18.099950000000003);
myNode20.radius.set(0.135);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21_1 = myNode17.clone();
myNode21_1.isVisible = false;
const myNode21_2 = object.addFuseOperation();
myNode21_2.leftArg.set(myNode21_1);
myNode21_2.rightArg.set(myNode18);
myNode21_2.isVisible = false;
const myNode21_3 = object.addFuseOperation();
myNode21_3.leftArg.set(myNode21_2);
myNode21_3.rightArg.set(myNode19);
myNode21_3.isVisible = false;
myNode21 = object.addFuseOperation();
myNode21.leftArg.set(myNode21_3);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = false;
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addCutOperation();
myNode22.leftArg.set(myNode16);
myNode22.rightArg.set(myNode21);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addBox();
myNode23.point1.set(-4.4549,2.0271,-0.0269);
myNode23.point2.set(-3.6871,2.2539,0.4369);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);
myNode23.innerTranslation.vector.set(-4.071000000000001,2.1405,0.205);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addBox();
myNode24.point1.set(-4.4549,1.3001,-0.4359);
myNode24.point2.set(3.3218999999999994,2.0269,-0.2091);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);
myNode24.innerTranslation.vector.set(-0.5665000000000004,1.6635,-0.3225);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addBox();
myNode25.point1.set(1.3731,2.0271,-0.4359);
myNode25.point2.set(4.4549,2.4358999999999997,-0.027100000000000013);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(0.0,0.0,0.0);
myNode25.innerRotation.angle.set(0.0);
myNode25.innerTranslation.vector.set(2.9139999999999997,2.2315,-0.2315);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addCylinder();
myNode26.point1.set(4.727,1.98,-0.4359);
myNode26.point2.set(4.727,1.98,0.4369);
myNode26.radius.set(0.271);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addFuseOperation();
myNode27.leftArg.set(myNode25);
myNode27.rightArg.set(myNode26);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addCylinder();
myNode28.point1.set(4.727,1.982,-18.0999);
myNode28.point2.set(4.727,1.982,18.099999999999998);
myNode28.radius.set(0.136);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(0.0,0.0,0.0);
myNode28.innerRotation.angle.set(0.0);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addCylinder();
myNode29.point1.set(4.345,2.52,-18.0999);
myNode29.point2.set(4.345,2.52,18.099999999999998);
myNode29.radius.set(0.263);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addFuseOperation();
myNode30.leftArg.set(myNode28);
myNode30.rightArg.set(myNode29);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addCutOperation();
myNode31.leftArg.set(myNode27);
myNode31.rightArg.set(myNode30);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addBox();
myNode32.point1.set(3.5361,-3.6549,-0.4359);
myNode32.point2.set(3.8238999999999996,3.6538999999999997,-0.027100000000000013);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);
myNode32.innerTranslation.vector.set(3.6799999999999997,-0.000500000000000167,-0.2315);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addBox();
myNode33.point1.set(3.53605,-2.02695,-18.0999);
myNode33.point2.set(3.82395,3.39395,18.099999999999998);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);
myNode33.innerTranslation.vector.set(3.6799999999999997,0.6835,4.9999999998107114e-05);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addCylinder();
myNode34.point1.set(3.718,-3.046,-0.43595);
myNode34.point2.set(3.718,-3.046,18.099950000000003);
myNode34.radius.set(0.072);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(0.0,0.0,0.0);
myNode34.innerRotation.angle.set(0.0);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addFuseOperation();
myNode35.leftArg.set(myNode33);
myNode35.rightArg.set(myNode34);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addCutOperation();
myNode36.leftArg.set(myNode32);
myNode36.rightArg.set(myNode35);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addCylinder();
myNode37.point1.set(1.087,3.394,-0.4359);
myNode37.point2.set(1.087,3.394,-0.027100000000000013);
myNode37.radius.set(0.258);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0,0.0,0.0);
myNode37.innerRotation.angle.set(0.0);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addBox();
myNode38.point1.set(1.0871,-3.6549,-0.4359);
myNode38.point2.set(1.3729,-3.3971,-0.027100000000000013);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(0.0,0.0,0.0);
myNode38.innerRotation.angle.set(0.0);
myNode38.innerTranslation.vector.set(1.23,-3.5260000000000002,-0.2315);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addCylinder();
myNode39.point1.set(-1.093,-3.389,-0.4359);
myNode39.point2.set(-1.093,-3.389,-0.027100000000000013);
myNode39.radius.set(0.265);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(0.0,0.0,0.0);
myNode39.innerRotation.angle.set(0.0);
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addBox();
myNode40.point1.set(-4.7259,-2.2549,-0.4359);
myNode40.point2.set(-3.9821,1.2999,0.4369);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(0.0,0.0,0.0);
myNode40.innerRotation.angle.set(0.0);
myNode40.innerTranslation.vector.set(-4.354,-0.47750000000000004,0.0005000000000000004);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41 = object.addBox();
myNode41.point1.set(-4.4549,-2.2549,-0.4359);
myNode41.point2.set(3.822899999999999,1.2999,-0.2091);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,0.0,0.0);
myNode41.innerRotation.angle.set(0.0);
myNode41.innerTranslation.vector.set(-0.3160000000000007,-0.47750000000000004,-0.3225);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addBox();
myNode42.point1.set(-1.3729,-3.3969,-0.4359);
myNode42.point2.set(1.3719000000000001,-2.4371,-0.027100000000000013);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0,0.0,0.0);
myNode42.innerRotation.angle.set(0.0);
myNode42.innerTranslation.vector.set(-0.0004999999999999449,-2.917,-0.2315);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addBox();
myNode43.point1.set(-0.82695,-3.39695,-18.0999);
myNode43.point2.set(0.82695,-2.43705,18.099999999999998);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(0.0,0.0,0.0);
myNode43.innerRotation.angle.set(0.0);
myNode43.innerTranslation.vector.set(0.0,-2.917,4.9999999998107114e-05);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44 = object.addCutOperation();
myNode44.leftArg.set(myNode42);
myNode44.rightArg.set(myNode43);
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45 = object.addCylinder();
myNode45.point1.set(0,-2.526,-0.4359);
myNode45.point2.set(0,-2.526,0.4369);
myNode45.radius.set(0.271);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(0.0,0.0,0.0);
myNode45.innerRotation.angle.set(0.0);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addBox();
myNode46.point1.set(-0.2729,-2.4359,-0.4359);
myNode46.point2.set(0.2719,-2.2541,0.4369);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(0.0,0.0,0.0);
myNode46.innerRotation.angle.set(0.0);
myNode46.innerTranslation.vector.set(-0.0005000000000000004,-2.345,0.0005000000000000004);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47_1 = myNode38.clone();
myNode47_1.isVisible = false;
const myNode47_2 = object.addFuseOperation();
myNode47_2.leftArg.set(myNode47_1);
myNode47_2.rightArg.set(myNode39);
myNode47_2.isVisible = false;
const myNode47_3 = object.addFuseOperation();
myNode47_3.leftArg.set(myNode47_2);
myNode47_3.rightArg.set(myNode40);
myNode47_3.isVisible = false;
const myNode47_4 = object.addFuseOperation();
myNode47_4.leftArg.set(myNode47_3);
myNode47_4.rightArg.set(myNode41);
myNode47_4.isVisible = false;
const myNode47_5 = object.addFuseOperation();
myNode47_5.leftArg.set(myNode47_4);
myNode47_5.rightArg.set(myNode44);
myNode47_5.isVisible = false;
const myNode47_6 = object.addFuseOperation();
myNode47_6.leftArg.set(myNode47_5);
myNode47_6.rightArg.set(myNode45);
myNode47_6.isVisible = false;
myNode47 = object.addFuseOperation();
myNode47.leftArg.set(myNode47_6);
myNode47.rightArg.set(myNode46);
myNode47.isVisible = false;
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addBox();
myNode48.point1.set(-4.72595,-1.70895,-0.43595);
myNode48.point2.set(-4.45505,1.2999500000000002,0.43695);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);
myNode48.innerTranslation.vector.set(-4.5905000000000005,-0.2044999999999999,0.0005000000000000004);
myNode48.isVisible = false;

/* définition du node n°49*/
const myNode49 = object.addCylinder();
myNode49.point1.set(1.191,-3.045,-18.0999);
myNode49.point2.set(1.191,-3.045,18.099999999999998);
myNode49.radius.set(0.072);
myNode49.innerRotation.center.set(0,0,0);
myNode49.innerRotation.axis.set(0.0,0.0,0.0);
myNode49.innerRotation.angle.set(0.0);
myNode49.isVisible = false;

/* définition du node n°50*/
const myNode50 = object.addCylinder();
myNode50.point1.set(0,-2.527,-0.43595);
myNode50.point2.set(0,-2.527,18.099950000000003);
myNode50.radius.set(0.136);
myNode50.innerRotation.center.set(0,0,0);
myNode50.innerRotation.axis.set(0.0,0.0,0.0);
myNode50.innerRotation.angle.set(0.0);
myNode50.isVisible = false;

/* définition du node n°51*/
const myNode51 = object.addBox();
myNode51.point1.set(-4.07095,-2.02695,-0.20895);
myNode51.point2.set(-3.9820499999999996,1.2999500000000004,18.09995);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(0.0,0.0,0.0);
myNode51.innerRotation.angle.set(0.0);
myNode51.innerTranslation.vector.set(-4.0264999999999995,-0.3634999999999997,8.945500000000001);
myNode51.isVisible = false;

/* définition du node n°52*/
const myNode52 = object.addCylinder();
myNode52.point1.set(-1.191,-3.045,-18.0999);
myNode52.point2.set(-1.191,-3.045,18.099999999999998);
myNode52.radius.set(0.073);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,0.0,0.0);
myNode52.innerRotation.angle.set(0.0);
myNode52.isVisible = false;

/* définition du node n°53*/
const myNode53 = object.addCylinder();
myNode53.point1.set(-4.726,-1.982,-18.0999);
myNode53.point2.set(-4.726,-1.982,0.43599999999999994);
myNode53.radius.set(0.273);
myNode53.innerRotation.center.set(0,0,0);
myNode53.innerRotation.axis.set(0.0,0.0,0.0);
myNode53.innerRotation.angle.set(0.0);
myNode53.isVisible = false;

/* définition du node n°54*/
const myNode54 = object.addBox();
myNode54.point1.set(-3.32295,-1.29995,-0.43595);
myNode54.point2.set(3.8239499999999995,1.29995,-0.02705000000000002);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(0.0,0.0,0.0);
myNode54.innerRotation.angle.set(0.0);
myNode54.innerTranslation.vector.set(0.2504999999999997,0.0,-0.2315);
myNode54.isVisible = false;

/* définition du node n°55*/
const myNode55_1 = myNode48.clone();
myNode55_1.isVisible = false;
const myNode55_2 = object.addFuseOperation();
myNode55_2.leftArg.set(myNode55_1);
myNode55_2.rightArg.set(myNode49);
myNode55_2.isVisible = false;
const myNode55_3 = object.addFuseOperation();
myNode55_3.leftArg.set(myNode55_2);
myNode55_3.rightArg.set(myNode50);
myNode55_3.isVisible = false;
const myNode55_4 = object.addFuseOperation();
myNode55_4.leftArg.set(myNode55_3);
myNode55_4.rightArg.set(myNode51);
myNode55_4.isVisible = false;
const myNode55_5 = object.addFuseOperation();
myNode55_5.leftArg.set(myNode55_4);
myNode55_5.rightArg.set(myNode52);
myNode55_5.isVisible = false;
const myNode55_6 = object.addFuseOperation();
myNode55_6.leftArg.set(myNode55_5);
myNode55_6.rightArg.set(myNode53);
myNode55_6.isVisible = false;
myNode55 = object.addFuseOperation();
myNode55.leftArg.set(myNode55_6);
myNode55.rightArg.set(myNode54);
myNode55.isVisible = false;
myNode55.isVisible = false;

/* définition du node n°56*/
const myNode56 = object.addCutOperation();
myNode56.leftArg.set(myNode47);
myNode56.rightArg.set(myNode55);
myNode56.isVisible = false;

/* définition du node n°57*/
const myNode57 = object.addBox();
myNode57.point1.set(0.5691,-2.4359,-0.4359);
myNode57.point2.set(1.3719000000000001,-2.0271000000000003,-0.027100000000000013);
myNode57.innerRotation.center.set(0,0,0);
myNode57.innerRotation.axis.set(0.0,0.0,0.0);
myNode57.innerRotation.angle.set(0.0);
myNode57.innerTranslation.vector.set(0.9705,-2.2315,-0.2315);
myNode57.isVisible = false;

/* définition du node n°58*/
const myNode58 = object.addCylinder();
myNode58.point1.set(0.573,-2.509,-18.0999);
myNode58.point2.set(0.573,-2.509,-0.027000000000001023);
myNode58.radius.set(0.25);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(0.0,0.0,0.0);
myNode58.innerRotation.angle.set(0.0);
myNode58.isVisible = false;

/* définition du node n°59*/
const myNode59 = object.addCutOperation();
myNode59.leftArg.set(myNode57);
myNode59.rightArg.set(myNode58);
myNode59.isVisible = false;

/* définition du node n°60*/
const myNode60 = object.addBox();
myNode60.point1.set(1.3731,1.7081,-0.4359);
myNode60.point2.set(4.7279,2.2539,0.4369);
myNode60.innerRotation.center.set(0,0,0);
myNode60.innerRotation.axis.set(0.0,0.0,0.0);
myNode60.innerRotation.angle.set(0.0);
myNode60.innerTranslation.vector.set(3.0505,1.9809999999999999,0.0005000000000000004);
myNode60.isVisible = false;

/* définition du node n°61*/
const myNode61 = object.addCylinder();
myNode61.point1.set(4.727,-1.982,-0.4359);
myNode61.point2.set(4.727,-1.982,0.4369);
myNode61.radius.set(0.272);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(0.0,0.0,0.0);
myNode61.innerRotation.angle.set(0.0);
myNode61.isVisible = false;

/* définition du node n°62*/
const myNode62 = object.addFuseOperation();
myNode62.leftArg.set(myNode60);
myNode62.rightArg.set(myNode61);
myNode62.isVisible = false;

/* définition du node n°63*/
const myNode63 = object.addCylinder();
myNode63.point1.set(4.727,-1.982,-0.43595);
myNode63.point2.set(4.727,-1.982,18.099950000000003);
myNode63.radius.set(0.136);
myNode63.innerRotation.center.set(0,0,0);
myNode63.innerRotation.axis.set(0.0,0.0,0.0);
myNode63.innerRotation.angle.set(0.0);
myNode63.isVisible = false;

/* définition du node n°64*/
const myNode64 = object.addBox();
myNode64.point1.set(-18.0999,-3.39695,-0.20895);
myNode64.point2.set(4.071999999999999,2.02695,0.43595000000000006);
myNode64.innerRotation.center.set(0,0,0);
myNode64.innerRotation.axis.set(0.0,0.0,0.0);
myNode64.innerRotation.angle.set(0.0);
myNode64.innerTranslation.vector.set(-7.013950000000001,-0.685,0.11350000000000002);
myNode64.isVisible = false;

/* définition du node n°65*/
const myNode65_1 = myNode63.clone();
myNode65_1.isVisible = false;
const myNode65_2 = object.addFuseOperation();
myNode65_2.leftArg.set(myNode65_1);
myNode65_2.rightArg.set(myNode64);
myNode65_2.isVisible = false;
myNode65 = object.addFuseOperation();
myNode65.leftArg.set(myNode65_2);
myNode65.rightArg.set(myNode28);
myNode65.isVisible = false;
myNode65.isVisible = false;

/* définition du node n°66*/
const myNode66 = object.addCutOperation();
myNode66.leftArg.set(myNode62);
myNode66.rightArg.set(myNode65);
myNode66.isVisible = false;

/* définition du node n°67*/
const myNode67 = object.addBox();
myNode67.point1.set(-3.1179,-2.2549,-0.2089);
myNode67.point2.set(1.3729,-2.0281000000000002,0.43590000000000007);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(0.0,0.0,0.0);
myNode67.innerRotation.angle.set(0.0);
myNode67.innerTranslation.vector.set(-0.8725,-2.1415,0.11350000000000002);
myNode67.isVisible = false;

/* définition du node n°68*/
const myNode68 = object.addBox();
myNode68.point1.set(-4.0709,2.0271,-0.4359);
myNode68.point2.set(-3.5361,3.3939,-0.027100000000000013);
myNode68.innerRotation.center.set(0,0,0);
myNode68.innerRotation.axis.set(0.0,0.0,0.0);
myNode68.innerRotation.angle.set(0.0);
myNode68.innerTranslation.vector.set(-3.8035,2.7104999999999997,-0.2315);
myNode68.isVisible = false;

/* définition du node n°69*/
const myNode69 = object.addCylinder();
myNode69.point1.set(-3.718,3.046,-18.0999);
myNode69.point2.set(-3.718,3.046,-0.027000000000001023);
myNode69.radius.set(0.072);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(0.0,0.0,0.0);
myNode69.innerRotation.angle.set(0.0);
myNode69.isVisible = false;

/* définition du node n°70*/
const myNode70 = object.addCutOperation();
myNode70.leftArg.set(myNode68);
myNode70.rightArg.set(myNode69);
myNode70.isVisible = false;

/* définition du node n°71*/
const myNode71 = object.addBox();
myNode71.point1.set(-2.8229,2.0271,-0.4359);
myNode71.point2.set(3.3219,2.2539,0.4369);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(0.0,0.0,0.0);
myNode71.innerRotation.angle.set(0.0);
myNode71.innerTranslation.vector.set(0.24949999999999983,2.1405,0.0005000000000000004);
myNode71.isVisible = false;

/* définition du node n°72*/
const myNode72 = object.addBox();
myNode72.point1.set(1.0871,2.0271,-0.4359);
myNode72.point2.set(1.3729,3.6539,-0.027100000000000013);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(0.0,0.0,0.0);
myNode72.innerRotation.angle.set(0.0);
myNode72.innerTranslation.vector.set(1.23,2.8405,-0.2315);
myNode72.isVisible = false;

/* définition du node n°73*/
const myNode73 = object.addCylinder();
myNode73.point1.set(1.191,3.046,-0.43595);
myNode73.point2.set(1.191,3.046,18.099950000000003);
myNode73.radius.set(0.072);
myNode73.innerRotation.center.set(0,0,0);
myNode73.innerRotation.axis.set(0.0,0.0,0.0);
myNode73.innerRotation.angle.set(0.0);
myNode73.isVisible = false;

/* définition du node n°74*/
const myNode74 = object.addCutOperation();
myNode74.leftArg.set(myNode72);
myNode74.rightArg.set(myNode73);
myNode74.isVisible = false;

/* définition du node n°75*/
const myNode75 = object.addBox();
myNode75.point1.set(-3.6859,3.3841,-0.4359);
myNode75.point2.set(-0.8271000000000002,3.6449000000000003,-0.027100000000000013);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(0.0,0.0,0.0);
myNode75.innerRotation.angle.set(0.0);
myNode75.innerTranslation.vector.set(-2.2565,3.5145,-0.2315);
myNode75.isVisible = false;

/* définition du node n°76*/
const myNode76 = object.addBox();
myNode76.point1.set(0.5691,2.0271,-0.4359);
myNode76.point2.set(1.0859,3.3939,-0.027100000000000013);
myNode76.innerRotation.center.set(0,0,0);
myNode76.innerRotation.axis.set(0.0,0.0,0.0);
myNode76.innerRotation.angle.set(0.0);
myNode76.innerTranslation.vector.set(0.8275000000000001,2.7104999999999997,-0.2315);
myNode76.isVisible = false;

/* définition du node n°77*/
const myNode77 = object.addFuseOperation();
myNode77.leftArg.set(myNode75);
myNode77.rightArg.set(myNode76);
myNode77.isVisible = false;

/* définition du node n°78*/
const myNode78 = object.addCylinder();
myNode78.point1.set(0.569,2.513,-18.0999);
myNode78.point2.set(0.569,2.513,0.43599999999999994);
myNode78.radius.set(0.255);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(0.0,0.0,0.0);
myNode78.innerRotation.angle.set(0.0);
myNode78.isVisible = false;

/* définition du node n°79*/
const myNode79 = object.addCutOperation();
myNode79.leftArg.set(myNode77);
myNode79.rightArg.set(myNode78);
myNode79.isVisible = false;

/* définition du node n°80*/
const myNode80 = object.addBox();
myNode80.point1.set(-3.53595,2.25505,-0.43595);
myNode80.point2.set(-1.3720500000000002,3.6549500000000004,0.43695);
myNode80.innerRotation.center.set(0,0,0);
myNode80.innerRotation.axis.set(0.0,0.0,0.0);
myNode80.innerRotation.angle.set(0.0);
myNode80.innerTranslation.vector.set(-2.454,2.955,0.0005000000000000004);
myNode80.isVisible = false;

/* définition du node n°81*/
const myNode81 = object.addBox();
myNode81.point1.set(-1.09295,2.43605,-0.43595);
myNode81.point2.set(0.82595,3.65395,0.43695);
myNode81.innerRotation.center.set(0,0,0);
myNode81.innerRotation.axis.set(0.0,0.0,0.0);
myNode81.innerRotation.angle.set(0.0);
myNode81.innerTranslation.vector.set(-0.13350000000000006,3.045,0.0005000000000000004);
myNode81.isVisible = false;

/* définition du node n°82*/
const myNode82 = object.addFuseOperation();
myNode82.leftArg.set(myNode80);
myNode82.rightArg.set(myNode81);
myNode82.isVisible = false;

/* définition du node n°83*/
const myNode83 = object.addCylinder();
myNode83.point1.set(-1.092,3.391,-0.436);
myNode83.point2.set(-1.092,3.391,18.1);
myNode83.radius.set(0.263);
myNode83.innerRotation.center.set(0,0,0);
myNode83.innerRotation.axis.set(0.0,0.0,0.0);
myNode83.innerRotation.angle.set(0.0);
myNode83.isVisible = false;

/* définition du node n°84*/
const myNode84 = object.addCutOperation();
myNode84.leftArg.set(myNode82);
myNode84.rightArg.set(myNode83);
myNode84.isVisible = false;

/* définition du node n°85*/
const myNode85 = object.addCutOperation();
myNode85.leftArg.set(myNode79);
myNode85.rightArg.set(myNode84);
myNode85.isVisible = false;

/* définition du node n°86*/
const myNode86 = object.addBox();
myNode86.point1.set(4.0721,-2.2549,-0.4359);
myNode86.point2.set(4.7279,-1.7101000000000002,0.4369);
myNode86.innerRotation.center.set(0,0,0);
myNode86.innerRotation.axis.set(0.0,0.0,0.0);
myNode86.innerRotation.angle.set(0.0);
myNode86.innerTranslation.vector.set(4.3999999999999995,-1.9825000000000002,0.0005000000000000004);
myNode86.isVisible = false;

/* définition du node n°87*/
const myNode87 = object.addBox();
myNode87.point1.set(1.3731,-2.4359,-0.4359);
myNode87.point2.set(4.071899999999999,-2.0271000000000003,0.4369);
myNode87.innerRotation.center.set(0,0,0);
myNode87.innerRotation.axis.set(0.0,0.0,0.0);
myNode87.innerRotation.angle.set(0.0);
myNode87.innerTranslation.vector.set(2.7225,-2.2315,0.0005000000000000004);
myNode87.isVisible = false;

/* définition du node n°88*/
const myNode88 = object.addFuseOperation();
myNode88.leftArg.set(myNode86);
myNode88.rightArg.set(myNode87);
myNode88.isVisible = false;

/* définition du node n°89*/
const myNode89 = object.addBox();
myNode89.point1.set(-18.0999,-2.43595,-0.02695);
myNode89.point2.set(4.726999999999997,-2.25405,0.43694999999999995);
myNode89.innerRotation.center.set(0,0,0);
myNode89.innerRotation.axis.set(0.0,0.0,0.0);
myNode89.innerRotation.angle.set(0.0);
myNode89.innerTranslation.vector.set(-6.6864500000000024,-2.345,0.205);
myNode89.isVisible = false;

/* définition du node n°90*/
const myNode90 = object.addCylinder();
myNode90.point1.set(4.727,-1.982,-18.0999);
myNode90.point2.set(4.727,-1.982,0.43599999999999994);
myNode90.radius.set(0.272);
myNode90.innerRotation.center.set(0,0,0);
myNode90.innerRotation.axis.set(0.0,0.0,0.0);
myNode90.innerRotation.angle.set(0.0);
myNode90.isVisible = false;

/* définition du node n°91*/
const myNode91 = object.addFuseOperation();
myNode91.leftArg.set(myNode89);
myNode91.rightArg.set(myNode90);
myNode91.isVisible = false;

/* définition du node n°92*/
const myNode92 = object.addCutOperation();
myNode92.leftArg.set(myNode88);
myNode92.rightArg.set(myNode91);
myNode92.isVisible = false;

/* définition du node n°93*/
const myNode93 = object.addBox();
myNode93.point1.set(-1.3729,-3.6549,-0.4359);
myNode93.point2.set(-1.0931,-3.3971,-0.027100000000000013);
myNode93.innerRotation.center.set(0,0,0);
myNode93.innerRotation.axis.set(0.0,0.0,0.0);
myNode93.innerRotation.angle.set(0.0);
myNode93.innerTranslation.vector.set(-1.233,-3.5260000000000002,-0.2315);
myNode93.isVisible = false;

/* définition du node n°94*/
const myNode94 = object.addBox();
myNode94.point1.set(-18.0999,1.3001,-18.0999);
myNode94.point2.set(1.3728999999999978,18.0999,0.4358999999999966);
myNode94.innerRotation.center.set(0,0,0);
myNode94.innerRotation.axis.set(0.0,0.0,0.0);
myNode94.innerRotation.angle.set(0.0);
myNode94.innerTranslation.vector.set(-8.363500000000002,9.700000000000001,-8.832000000000003);
myNode94.isVisible = false;

/* définition du node n°95*/
const myNode95 = object.addBox();
myNode95.point1.set(-18.0999,1.30005,-0.43595);
myNode95.point2.set(-4.454000000000002,1.7079499999999999,18.099950000000003);
myNode95.innerRotation.center.set(0,0,0);
myNode95.innerRotation.axis.set(0.0,0.0,0.0);
myNode95.innerRotation.angle.set(0.0);
myNode95.innerTranslation.vector.set(-11.276950000000003,1.504,8.832);
myNode95.isVisible = false;

/* définition du node n°96*/
const myNode96 = object.addCutOperation();
myNode96.leftArg.set(myNode94);
myNode96.rightArg.set(myNode95);
myNode96.isVisible = false;

/* définition du node n°97*/
const myNode97 = object.addCylinder();
myNode97.point1.set(-4.727,1.982,-18.0999);
myNode97.point2.set(-4.727,1.982,18.099999999999998);
myNode97.radius.set(0.136);
myNode97.innerRotation.center.set(0,0,0);
myNode97.innerRotation.axis.set(0.0,0.0,0.0);
myNode97.innerRotation.angle.set(0.0);
myNode97.isVisible = false;

/* définition du node n°98*/
const myNode98 = object.addCylinder();
myNode98.point1.set(-0.568,2.513,-18.0999);
myNode98.point2.set(-0.568,2.513,18.099999999999998);
myNode98.radius.set(0.256);
myNode98.innerRotation.center.set(0,0,0);
myNode98.innerRotation.axis.set(0.0,0.0,0.0);
myNode98.innerRotation.angle.set(0.0);
myNode98.isVisible = false;

/* définition du node n°99*/
const myNode99 = object.addFuseOperation();
myNode99.leftArg.set(myNode97);
myNode99.rightArg.set(myNode98);
myNode99.isVisible = false;

/* définition du node n°100*/
const myNode100 = object.addCutOperation();
myNode100.leftArg.set(myNode96);
myNode100.rightArg.set(myNode99);
myNode100.isVisible = false;

/* définition du node n°101*/
const myNode101 = object.addBox();
myNode101.point1.set(-3.6859,2.0271,-0.4359);
myNode101.point2.set(-0.5671000000000004,2.4358999999999997,0.02789999999999998);
myNode101.innerRotation.center.set(0,0,0);
myNode101.innerRotation.axis.set(0.0,0.0,0.0);
myNode101.innerRotation.angle.set(0.0);
myNode101.innerTranslation.vector.set(-2.1265,2.2315,-0.20400000000000001);
myNode101.isVisible = false;

/* définition du node n°102*/
const myNode102 = object.addBox();
myNode102.point1.set(-4.7259,-18.0999,-0.4359);
myNode102.point2.set(-4.0721,2.253899999999998,0.4369);
myNode102.innerRotation.center.set(0,0,0);
myNode102.innerRotation.axis.set(0.0,0.0,0.0);
myNode102.innerRotation.angle.set(0.0);
myNode102.innerTranslation.vector.set(-4.399,-7.923000000000002,0.0005000000000000004);
myNode102.isVisible = false;

/* définition du node n°103*/
const myNode103 = object.addCylinder();
myNode103.point1.set(-3.819,3.39,-0.4359);
myNode103.point2.set(-3.819,3.39,-0.027100000000000013);
myNode103.radius.set(0.262);
myNode103.innerRotation.center.set(0,0,0);
myNode103.innerRotation.axis.set(0.0,0.0,0.0);
myNode103.innerRotation.angle.set(0.0);
myNode103.isVisible = false;

/* définition du node n°104*/
const myNode104 = object.addCylinder();
myNode104.point1.set(-4.727,1.981,-0.4359);
myNode104.point2.set(-4.727,1.981,18.099899999999998);
myNode104.radius.set(0.272);
myNode104.innerRotation.center.set(0,0,0);
myNode104.innerRotation.axis.set(0.0,0.0,0.0);
myNode104.innerRotation.angle.set(0.0);
myNode104.isVisible = false;

/* définition du node n°105*/
const myNode105_1 = myNode101.clone();
myNode105_1.isVisible = false;
const myNode105_2 = object.addFuseOperation();
myNode105_2.leftArg.set(myNode105_1);
myNode105_2.rightArg.set(myNode102);
myNode105_2.isVisible = false;
const myNode105_3 = object.addFuseOperation();
myNode105_3.leftArg.set(myNode105_2);
myNode105_3.rightArg.set(myNode103);
myNode105_3.isVisible = false;
myNode105 = object.addFuseOperation();
myNode105.leftArg.set(myNode105_3);
myNode105.rightArg.set(myNode104);
myNode105.isVisible = false;
myNode105.isVisible = false;

/* définition du node n°106*/
const myNode106 = object.addCommonOperation();
myNode106.leftArg.set(myNode100);
myNode106.rightArg.set(myNode105);
myNode106.isVisible = false;

/* définition du node n°107*/
const myNode107 = object.addCylinder();
myNode107.point1.set(3.824,-3.397,-0.4359);
myNode107.point2.set(3.824,-3.397,-0.027100000000000013);
myNode107.radius.set(0.255);
myNode107.innerRotation.center.set(0,0,0);
myNode107.innerRotation.axis.set(0.0,0.0,0.0);
myNode107.innerRotation.angle.set(0.0);
myNode107.isVisible = false;

/* définition du node n°108*/
const myNode108 = object.addBox();
myNode108.point1.set(4.0721,-2.4359,-0.4359);
myNode108.point2.set(4.454899999999999,1.7088999999999999,0.4369);
myNode108.innerRotation.center.set(0,0,0);
myNode108.innerRotation.axis.set(0.0,0.0,0.0);
myNode108.innerRotation.angle.set(0.0);
myNode108.innerTranslation.vector.set(4.2635,-0.36350000000000016,0.0005000000000000004);
myNode108.isVisible = false;

/* définition du node n°109*/
const myNode109 = object.addBox();
myNode109.point1.set(3.5361,2.0271,-0.4359);
myNode109.point2.set(4.0709,3.3939,-0.027100000000000013);
myNode109.innerRotation.center.set(0,0,0);
myNode109.innerRotation.axis.set(0.0,0.0,0.0);
myNode109.innerRotation.angle.set(0.0);
myNode109.innerTranslation.vector.set(3.8034999999999997,2.7104999999999997,-0.2315);
myNode109.isVisible = false;

/* définition du node n°110*/
const myNode110 = object.addBox();
myNode110.point1.set(3.8241,-3.3969,-0.4359);
myNode110.point2.set(4.0719,-2.0281000000000002,-0.027100000000000013);
myNode110.innerRotation.center.set(0,0,0);
myNode110.innerRotation.axis.set(0.0,0.0,0.0);
myNode110.innerRotation.angle.set(0.0);
myNode110.innerTranslation.vector.set(3.948,-2.7125,-0.2315);
myNode110.isVisible = false;

/* définition du node n°111*/
const myNode111_1 = myNode107.clone();
myNode111_1.isVisible = false;
const myNode111_2 = object.addFuseOperation();
myNode111_2.leftArg.set(myNode111_1);
myNode111_2.rightArg.set(myNode108);
myNode111_2.isVisible = false;
const myNode111_3 = object.addFuseOperation();
myNode111_3.leftArg.set(myNode111_2);
myNode111_3.rightArg.set(myNode109);
myNode111_3.isVisible = false;
myNode111 = object.addFuseOperation();
myNode111.leftArg.set(myNode111_3);
myNode111.rightArg.set(myNode110);
myNode111.isVisible = false;
myNode111.isVisible = false;

/* définition du node n°112*/
const myNode112 = object.addBox();
myNode112.point1.set(3.53605,-2.43595,-0.02695);
myNode112.point2.set(18.09995,-1.70905,18.09995);
myNode112.innerRotation.center.set(0,0,0);
myNode112.innerRotation.axis.set(0.0,0.0,0.0);
myNode112.innerRotation.angle.set(0.0);
myNode112.innerTranslation.vector.set(10.818,-2.0725000000000002,9.0365);
myNode112.isVisible = false;

/* définition du node n°113*/
const myNode113 = object.addCylinder();
myNode113.point1.set(4.342,-2.514,-18.0999);
myNode113.point2.set(4.342,-2.514,0.43599999999999994);
myNode113.radius.set(0.257);
myNode113.innerRotation.center.set(0,0,0);
myNode113.innerRotation.axis.set(0.0,0.0,0.0);
myNode113.innerRotation.angle.set(0.0);
myNode113.isVisible = false;

/* définition du node n°114*/
const myNode114 = object.addCylinder();
myNode114.point1.set(3.719,3.046,-18.0999);
myNode114.point2.set(3.719,3.046,18.099999999999998);
myNode114.radius.set(0.072);
myNode114.innerRotation.center.set(0,0,0);
myNode114.innerRotation.axis.set(0.0,0.0,0.0);
myNode114.innerRotation.angle.set(0.0);
myNode114.isVisible = false;

/* définition du node n°115*/
const myNode115_1 = myNode112.clone();
myNode115_1.isVisible = false;
const myNode115_2 = object.addFuseOperation();
myNode115_2.leftArg.set(myNode115_1);
myNode115_2.rightArg.set(myNode113);
myNode115_2.isVisible = false;
myNode115 = object.addFuseOperation();
myNode115.leftArg.set(myNode115_2);
myNode115.rightArg.set(myNode114);
myNode115.isVisible = false;
myNode115.isVisible = false;

/* définition du node n°116*/
const myNode116 = object.addCutOperation();
myNode116.leftArg.set(myNode111);
myNode116.rightArg.set(myNode115);
myNode116.isVisible = false;

/* définition du node n°117*/
const myNode117 = object.addBox();
myNode117.point1.set(-1.3729,2.0271,-0.4359);
myNode117.point2.set(-0.8281000000000001,3.3939,-0.027100000000000013);
myNode117.innerRotation.center.set(0,0,0);
myNode117.innerRotation.axis.set(0.0,0.0,0.0);
myNode117.innerRotation.angle.set(0.0);
myNode117.innerTranslation.vector.set(-1.1005,2.7104999999999997,-0.2315);
myNode117.isVisible = false;

/* définition du node n°118*/
const myNode118 = object.addCylinder();
myNode118.point1.set(-1.191,3.045,-18.0999);
myNode118.point2.set(-1.191,3.045,0.43599999999999994);
myNode118.radius.set(0.072);
myNode118.innerRotation.center.set(0,0,0);
myNode118.innerRotation.axis.set(0.0,0.0,0.0);
myNode118.innerRotation.angle.set(0.0);
myNode118.isVisible = false;

/* définition du node n°119*/
const myNode119 = object.addCutOperation();
myNode119.leftArg.set(myNode117);
myNode119.rightArg.set(myNode118);
myNode119.isVisible = false;

/* définition du node n°120*/
const myNode120 = object.addBox();
myNode120.point1.set(-0.2729,2.0271,-0.4359);
myNode120.point2.set(0.2719,2.4358999999999997,0.4369);
myNode120.innerRotation.center.set(0,0,0);
myNode120.innerRotation.axis.set(0.0,0.0,0.0);
myNode120.innerRotation.angle.set(0.0);
myNode120.innerTranslation.vector.set(-0.0005000000000000004,2.2315,0.0005000000000000004);
myNode120.isVisible = false;

/* définition du node n°121*/
const myNode121 = object.addCylinder();
myNode121.point1.set(0,2.527,-0.20895);
myNode121.point2.set(0,2.527,18.09995);
myNode121.radius.set(0.136);
myNode121.innerRotation.center.set(0,0,0);
myNode121.innerRotation.axis.set(0.0,0.0,0.0);
myNode121.innerRotation.angle.set(0.0);
myNode121.isVisible = false;

/* définition du node n°122*/
const myNode122 = object.addCutOperation();
myNode122.leftArg.set(myNode120);
myNode122.rightArg.set(myNode121);
myNode122.isVisible = false;

/* définition du node n°123*/
const myNode123_1 = myNode0.clone();
myNode123_1.isVisible = false;
const myNode123_2 = object.addFuseOperation();
myNode123_2.leftArg.set(myNode123_1);
myNode123_2.rightArg.set(myNode1);
myNode123_2.isVisible = false;
const myNode123_3 = object.addFuseOperation();
myNode123_3.leftArg.set(myNode123_2);
myNode123_3.rightArg.set(myNode4);
myNode123_3.isVisible = false;
const myNode123_4 = object.addFuseOperation();
myNode123_4.leftArg.set(myNode123_3);
myNode123_4.rightArg.set(myNode7);
myNode123_4.isVisible = false;
const myNode123_5 = object.addFuseOperation();
myNode123_5.leftArg.set(myNode123_4);
myNode123_5.rightArg.set(myNode8);
myNode123_5.isVisible = false;
const myNode123_6 = object.addFuseOperation();
myNode123_6.leftArg.set(myNode123_5);
myNode123_6.rightArg.set(myNode11);
myNode123_6.isVisible = false;
const myNode123_7 = object.addFuseOperation();
myNode123_7.leftArg.set(myNode123_6);
myNode123_7.rightArg.set(myNode12);
myNode123_7.isVisible = false;
const myNode123_8 = object.addFuseOperation();
myNode123_8.leftArg.set(myNode123_7);
myNode123_8.rightArg.set(myNode22);
myNode123_8.isVisible = false;
const myNode123_9 = object.addFuseOperation();
myNode123_9.leftArg.set(myNode123_8);
myNode123_9.rightArg.set(myNode23);
myNode123_9.isVisible = false;
const myNode123_10 = object.addFuseOperation();
myNode123_10.leftArg.set(myNode123_9);
myNode123_10.rightArg.set(myNode24);
myNode123_10.isVisible = false;
const myNode123_11 = object.addFuseOperation();
myNode123_11.leftArg.set(myNode123_10);
myNode123_11.rightArg.set(myNode31);
myNode123_11.isVisible = false;
const myNode123_12 = object.addFuseOperation();
myNode123_12.leftArg.set(myNode123_11);
myNode123_12.rightArg.set(myNode36);
myNode123_12.isVisible = false;
const myNode123_13 = object.addFuseOperation();
myNode123_13.leftArg.set(myNode123_12);
myNode123_13.rightArg.set(myNode37);
myNode123_13.isVisible = false;
const myNode123_14 = object.addFuseOperation();
myNode123_14.leftArg.set(myNode123_13);
myNode123_14.rightArg.set(myNode56);
myNode123_14.isVisible = false;
const myNode123_15 = object.addFuseOperation();
myNode123_15.leftArg.set(myNode123_14);
myNode123_15.rightArg.set(myNode59);
myNode123_15.isVisible = false;
const myNode123_16 = object.addFuseOperation();
myNode123_16.leftArg.set(myNode123_15);
myNode123_16.rightArg.set(myNode66);
myNode123_16.isVisible = false;
const myNode123_17 = object.addFuseOperation();
myNode123_17.leftArg.set(myNode123_16);
myNode123_17.rightArg.set(myNode67);
myNode123_17.isVisible = false;
const myNode123_18 = object.addFuseOperation();
myNode123_18.leftArg.set(myNode123_17);
myNode123_18.rightArg.set(myNode70);
myNode123_18.isVisible = false;
const myNode123_19 = object.addFuseOperation();
myNode123_19.leftArg.set(myNode123_18);
myNode123_19.rightArg.set(myNode71);
myNode123_19.isVisible = false;
const myNode123_20 = object.addFuseOperation();
myNode123_20.leftArg.set(myNode123_19);
myNode123_20.rightArg.set(myNode74);
myNode123_20.isVisible = false;
const myNode123_21 = object.addFuseOperation();
myNode123_21.leftArg.set(myNode123_20);
myNode123_21.rightArg.set(myNode85);
myNode123_21.isVisible = false;
const myNode123_22 = object.addFuseOperation();
myNode123_22.leftArg.set(myNode123_21);
myNode123_22.rightArg.set(myNode92);
myNode123_22.isVisible = false;
const myNode123_23 = object.addFuseOperation();
myNode123_23.leftArg.set(myNode123_22);
myNode123_23.rightArg.set(myNode93);
myNode123_23.isVisible = false;
const myNode123_24 = object.addFuseOperation();
myNode123_24.leftArg.set(myNode123_23);
myNode123_24.rightArg.set(myNode106);
myNode123_24.isVisible = false;
const myNode123_25 = object.addFuseOperation();
myNode123_25.leftArg.set(myNode123_24);
myNode123_25.rightArg.set(myNode116);
myNode123_25.isVisible = false;
const myNode123_26 = object.addFuseOperation();
myNode123_26.leftArg.set(myNode123_25);
myNode123_26.rightArg.set(myNode119);
myNode123_26.isVisible = false;
myNode123 = object.addFuseOperation();
myNode123.leftArg.set(myNode123_26);
myNode123.rightArg.set(myNode122);
myNode123.isVisible = false;
myNode123.isVisible = false;

/* définition du node n°124*/
const myNode124 = object.addBox();
myNode124.point1.set(-5.9999,-4.3849,-0.5239);
myNode124.point2.set(5.9999,4.3858999999999995,0.5228999999999999);
myNode124.innerRotation.center.set(0,0,0);
myNode124.innerRotation.axis.set(0.0,0.0,0.0);
myNode124.innerRotation.angle.set(0.0);
myNode124.innerTranslation.vector.set(0.0,0.0004999999999997229,-0.000500000000000056);
myNode124.isVisible = false;

/* définition du node n°125*/
const myNode125 = object.addCommonOperation();
myNode125.leftArg.set(myNode123);
myNode125.rightArg.set(myNode124);
myNode125.isVisible = true;


/*END Geometry Object Definition*/