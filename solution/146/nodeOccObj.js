/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-3.6859,3.3841,-0.4359);
myNode0.point2.set(-0.8271000000000002,3.6449000000000003,-0.027100000000000013);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(-2.2565,3.5145,-0.2315);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(0.5691,2.0271,-0.4359);
myNode1.point2.set(1.0859,3.3939,-0.027100000000000013);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.innerTranslation.vector.set(0.8275000000000001,2.7104999999999997,-0.2315);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addFuseOperation();
myNode2.leftArg.set(myNode0);
myNode2.rightArg.set(myNode1);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(0.569,2.513,-18.0999);
myNode3.point2.set(0.569,2.513,0.43599999999999994);
myNode3.radius.set(0.255);
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
myNode5.point1.set(-3.53595,2.25505,-0.43595);
myNode5.point2.set(-1.3720500000000002,3.6549500000000004,0.43695);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.innerTranslation.vector.set(-2.454,2.955,0.0005000000000000004);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addBox();
myNode6.point1.set(-1.09295,2.43605,-0.43595);
myNode6.point2.set(0.82595,3.65395,0.43695);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.innerTranslation.vector.set(-0.13350000000000006,3.045,0.0005000000000000004);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addFuseOperation();
myNode7.leftArg.set(myNode5);
myNode7.rightArg.set(myNode6);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addCylinder();
myNode8.point1.set(-1.092,3.391,-0.436);
myNode8.point2.set(-1.092,3.391,18.1);
myNode8.radius.set(0.263);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addCutOperation();
myNode9.leftArg.set(myNode7);
myNode9.rightArg.set(myNode8);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addCutOperation();
myNode10.leftArg.set(myNode4);
myNode10.rightArg.set(myNode9);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addBox();
myNode11.point1.set(0.5691,-2.4359,-0.4359);
myNode11.point2.set(1.3719000000000001,-2.0271000000000003,-0.027100000000000013);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);
myNode11.innerTranslation.vector.set(0.9705,-2.2315,-0.2315);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(0.573,-2.509,-18.0999);
myNode12.point2.set(0.573,-2.509,-0.027000000000001023);
myNode12.radius.set(0.25);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addCutOperation();
myNode13.leftArg.set(myNode11);
myNode13.rightArg.set(myNode12);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addBox();
myNode14.point1.set(3.5361,-3.6549,-0.4359);
myNode14.point2.set(3.8238999999999996,3.6538999999999997,-0.027100000000000013);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);
myNode14.innerTranslation.vector.set(3.6799999999999997,-0.000500000000000167,-0.2315);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addBox();
myNode15.point1.set(3.53605,-2.02695,-18.0999);
myNode15.point2.set(3.82395,3.39395,18.099999999999998);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);
myNode15.innerTranslation.vector.set(3.6799999999999997,0.6835,4.9999999998107114e-05);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(3.718,-3.046,-0.43595);
myNode16.point2.set(3.718,-3.046,18.099950000000003);
myNode16.radius.set(0.072);
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
const myNode19 = object.addCylinder();
myNode19.point1.set(-4.727,1.981,-0.4359);
myNode19.point2.set(-4.727,1.981,18.099899999999998);
myNode19.radius.set(0.272);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(0.0,0.0,0.0);
myNode19.innerRotation.angle.set(0.0);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addBox();
myNode20.point1.set(-4.7259,-18.0999,-0.4359);
myNode20.point2.set(-4.0721,2.253899999999998,0.4369);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);
myNode20.innerTranslation.vector.set(-4.399,-7.923000000000002,0.0005000000000000004);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addBox();
myNode21.point1.set(-3.6859,2.0271,-0.4359);
myNode21.point2.set(-0.5671000000000004,2.4358999999999997,0.02789999999999998);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);
myNode21.innerTranslation.vector.set(-2.1265,2.2315,-0.20400000000000001);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addCylinder();
myNode22.point1.set(-3.819,3.39,-0.4359);
myNode22.point2.set(-3.819,3.39,-0.027100000000000013);
myNode22.radius.set(0.262);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(0.0,0.0,0.0);
myNode22.innerRotation.angle.set(0.0);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23_1 = myNode19.clone();
myNode23_1.isVisible = false;
const myNode23_2 = object.addFuseOperation();
myNode23_2.leftArg.set(myNode23_1);
myNode23_2.rightArg.set(myNode20);
myNode23_2.isVisible = false;
const myNode23_3 = object.addFuseOperation();
myNode23_3.leftArg.set(myNode23_2);
myNode23_3.rightArg.set(myNode21);
myNode23_3.isVisible = false;
myNode23 = object.addFuseOperation();
myNode23.leftArg.set(myNode23_3);
myNode23.rightArg.set(myNode22);
myNode23.isVisible = false;
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addBox();
myNode24.point1.set(-18.0999,1.3001,-18.0999);
myNode24.point2.set(1.3728999999999978,18.0999,0.4358999999999966);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);
myNode24.innerTranslation.vector.set(-8.363500000000002,9.700000000000001,-8.832000000000003);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addBox();
myNode25.point1.set(-18.0999,1.30005,-0.43595);
myNode25.point2.set(-4.454000000000002,1.7079499999999999,18.099950000000003);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(0.0,0.0,0.0);
myNode25.innerRotation.angle.set(0.0);
myNode25.innerTranslation.vector.set(-11.276950000000003,1.504,8.832);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addCutOperation();
myNode26.leftArg.set(myNode24);
myNode26.rightArg.set(myNode25);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addCylinder();
myNode27.point1.set(-4.727,1.982,-18.0999);
myNode27.point2.set(-4.727,1.982,18.099999999999998);
myNode27.radius.set(0.136);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addCylinder();
myNode28.point1.set(-0.568,2.513,-18.0999);
myNode28.point2.set(-0.568,2.513,18.099999999999998);
myNode28.radius.set(0.256);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(0.0,0.0,0.0);
myNode28.innerRotation.angle.set(0.0);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addFuseOperation();
myNode29.leftArg.set(myNode27);
myNode29.rightArg.set(myNode28);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addCutOperation();
myNode30.leftArg.set(myNode26);
myNode30.rightArg.set(myNode29);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addCommonOperation();
myNode31.leftArg.set(myNode23);
myNode31.rightArg.set(myNode30);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addBox();
myNode32.point1.set(-0.2729,2.0271,-0.4359);
myNode32.point2.set(0.2719,2.4358999999999997,0.4369);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);
myNode32.innerTranslation.vector.set(-0.0005000000000000004,2.2315,0.0005000000000000004);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addCylinder();
myNode33.point1.set(0,2.527,-0.20895);
myNode33.point2.set(0,2.527,18.09995);
myNode33.radius.set(0.136);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addCutOperation();
myNode34.leftArg.set(myNode32);
myNode34.rightArg.set(myNode33);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addCylinder();
myNode35.point1.set(1.088,-3.394,-0.4359);
myNode35.point2.set(1.088,-3.394,-0.027100000000000013);
myNode35.radius.set(0.259);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,0.0);
myNode35.innerRotation.angle.set(0.0);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addCylinder();
myNode36.point1.set(-3.818,-3.393,-0.4359);
myNode36.point2.set(-3.818,-3.393,-0.027100000000000013);
myNode36.radius.set(0.261);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(0.0,0.0,0.0);
myNode36.innerRotation.angle.set(0.0);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addCylinder();
myNode37.point1.set(-4.726,-1.982,-0.4359);
myNode37.point2.set(-4.726,-1.982,0.4369);
myNode37.radius.set(0.273);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0,0.0,0.0);
myNode37.innerRotation.angle.set(0.0);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addBox();
myNode38.point1.set(-4.0709,-3.3969,-0.4359);
myNode38.point2.set(-0.5670999999999999,-2.0281000000000002,-0.027100000000000013);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(0.0,0.0,0.0);
myNode38.innerRotation.angle.set(0.0);
myNode38.innerTranslation.vector.set(-2.319,-2.7125,-0.2315);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39_1 = myNode36.clone();
myNode39_1.isVisible = false;
const myNode39_2 = object.addFuseOperation();
myNode39_2.leftArg.set(myNode39_1);
myNode39_2.rightArg.set(myNode37);
myNode39_2.isVisible = false;
myNode39 = object.addFuseOperation();
myNode39.leftArg.set(myNode39_2);
myNode39.rightArg.set(myNode38);
myNode39.isVisible = false;
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addBox();
myNode40.point1.set(-3.53595,-3.39695,-0.43595);
myNode40.point2.set(-0.56705,-2.43705,18.099950000000003);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(0.0,0.0,0.0);
myNode40.innerRotation.angle.set(0.0);
myNode40.innerTranslation.vector.set(-2.0515,-2.917,8.832);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41 = object.addCylinder();
myNode41.point1.set(-0.564,-2.519,-0.43595);
myNode41.point2.set(-0.564,-2.519,18.099950000000003);
myNode41.radius.set(0.263);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,0.0,0.0);
myNode41.innerRotation.angle.set(0.0);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addCylinder();
myNode42.point1.set(-4.726,-1.981,-0.43595);
myNode42.point2.set(-4.726,-1.981,18.099950000000003);
myNode42.radius.set(0.135);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0,0.0,0.0);
myNode42.innerRotation.angle.set(0.0);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addCylinder();
myNode43.point1.set(-3.719,-3.046,-0.43595);
myNode43.point2.set(-3.719,-3.046,18.099950000000003);
myNode43.radius.set(0.073);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(0.0,0.0,0.0);
myNode43.innerRotation.angle.set(0.0);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44_1 = myNode40.clone();
myNode44_1.isVisible = false;
const myNode44_2 = object.addFuseOperation();
myNode44_2.leftArg.set(myNode44_1);
myNode44_2.rightArg.set(myNode41);
myNode44_2.isVisible = false;
const myNode44_3 = object.addFuseOperation();
myNode44_3.leftArg.set(myNode44_2);
myNode44_3.rightArg.set(myNode42);
myNode44_3.isVisible = false;
myNode44 = object.addFuseOperation();
myNode44.leftArg.set(myNode44_3);
myNode44.rightArg.set(myNode43);
myNode44.isVisible = false;
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45 = object.addCutOperation();
myNode45.leftArg.set(myNode39);
myNode45.rightArg.set(myNode44);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addBox();
myNode46.point1.set(-3.6859,-3.6549,-0.4359);
myNode46.point2.set(-3.5361000000000002,-3.3971,-0.027100000000000013);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(0.0,0.0,0.0);
myNode46.innerRotation.angle.set(0.0);
myNode46.innerTranslation.vector.set(-3.611,-3.5260000000000002,-0.2315);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addCylinder();
myNode47.point1.set(3.819,3.392,-0.4359);
myNode47.point2.set(3.819,3.392,-0.027100000000000013);
myNode47.radius.set(0.261);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(0.0,0.0,0.0);
myNode47.innerRotation.angle.set(0.0);
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addBox();
myNode48.point1.set(1.0871,2.0271,-0.4359);
myNode48.point2.set(1.3729,3.6539,-0.027100000000000013);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);
myNode48.innerTranslation.vector.set(1.23,2.8405,-0.2315);
myNode48.isVisible = false;

/* définition du node n°49*/
const myNode49 = object.addCylinder();
myNode49.point1.set(1.191,3.046,-0.43595);
myNode49.point2.set(1.191,3.046,18.099950000000003);
myNode49.radius.set(0.072);
myNode49.innerRotation.center.set(0,0,0);
myNode49.innerRotation.axis.set(0.0,0.0,0.0);
myNode49.innerRotation.angle.set(0.0);
myNode49.isVisible = false;

/* définition du node n°50*/
const myNode50 = object.addCutOperation();
myNode50.leftArg.set(myNode48);
myNode50.rightArg.set(myNode49);
myNode50.isVisible = false;

/* définition du node n°51*/
const myNode51 = object.addBox();
myNode51.point1.set(3.3231,-2.4359,-0.4359);
myNode51.point2.set(4.0719,2.0279,-0.2091);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(0.0,0.0,0.0);
myNode51.innerRotation.angle.set(0.0);
myNode51.innerTranslation.vector.set(3.6975000000000002,-0.20400000000000018,-0.3225);
myNode51.isVisible = false;

/* définition du node n°52*/
const myNode52 = object.addBox();
myNode52.point1.set(4.0721,-2.4359,-0.4359);
myNode52.point2.set(4.454899999999999,1.7088999999999999,0.4369);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,0.0,0.0);
myNode52.innerRotation.angle.set(0.0);
myNode52.innerTranslation.vector.set(4.2635,-0.36350000000000016,0.0005000000000000004);
myNode52.isVisible = false;

/* définition du node n°53*/
const myNode53 = object.addBox();
myNode53.point1.set(3.5361,2.0271,-0.4359);
myNode53.point2.set(4.0709,3.3939,-0.027100000000000013);
myNode53.innerRotation.center.set(0,0,0);
myNode53.innerRotation.axis.set(0.0,0.0,0.0);
myNode53.innerRotation.angle.set(0.0);
myNode53.innerTranslation.vector.set(3.8034999999999997,2.7104999999999997,-0.2315);
myNode53.isVisible = false;

/* définition du node n°54*/
const myNode54 = object.addBox();
myNode54.point1.set(3.8241,-3.3969,-0.4359);
myNode54.point2.set(4.0719,-2.0281000000000002,-0.027100000000000013);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(0.0,0.0,0.0);
myNode54.innerRotation.angle.set(0.0);
myNode54.innerTranslation.vector.set(3.948,-2.7125,-0.2315);
myNode54.isVisible = false;

/* définition du node n°55*/
const myNode55 = object.addCylinder();
myNode55.point1.set(3.824,-3.397,-0.4359);
myNode55.point2.set(3.824,-3.397,-0.027100000000000013);
myNode55.radius.set(0.255);
myNode55.innerRotation.center.set(0,0,0);
myNode55.innerRotation.axis.set(0.0,0.0,0.0);
myNode55.innerRotation.angle.set(0.0);
myNode55.isVisible = false;

/* définition du node n°56*/
const myNode56_1 = myNode52.clone();
myNode56_1.isVisible = false;
const myNode56_2 = object.addFuseOperation();
myNode56_2.leftArg.set(myNode56_1);
myNode56_2.rightArg.set(myNode53);
myNode56_2.isVisible = false;
const myNode56_3 = object.addFuseOperation();
myNode56_3.leftArg.set(myNode56_2);
myNode56_3.rightArg.set(myNode54);
myNode56_3.isVisible = false;
myNode56 = object.addFuseOperation();
myNode56.leftArg.set(myNode56_3);
myNode56.rightArg.set(myNode55);
myNode56.isVisible = false;
myNode56.isVisible = false;

/* définition du node n°57*/
const myNode57 = object.addBox();
myNode57.point1.set(3.53605,-2.43595,-0.02695);
myNode57.point2.set(18.09995,-1.70905,18.09995);
myNode57.innerRotation.center.set(0,0,0);
myNode57.innerRotation.axis.set(0.0,0.0,0.0);
myNode57.innerRotation.angle.set(0.0);
myNode57.innerTranslation.vector.set(10.818,-2.0725000000000002,9.0365);
myNode57.isVisible = false;

/* définition du node n°58*/
const myNode58 = object.addCylinder();
myNode58.point1.set(4.342,-2.514,-18.0999);
myNode58.point2.set(4.342,-2.514,0.43599999999999994);
myNode58.radius.set(0.257);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(0.0,0.0,0.0);
myNode58.innerRotation.angle.set(0.0);
myNode58.isVisible = false;

/* définition du node n°59*/
const myNode59 = object.addCylinder();
myNode59.point1.set(3.719,3.046,-18.0999);
myNode59.point2.set(3.719,3.046,18.099999999999998);
myNode59.radius.set(0.072);
myNode59.innerRotation.center.set(0,0,0);
myNode59.innerRotation.axis.set(0.0,0.0,0.0);
myNode59.innerRotation.angle.set(0.0);
myNode59.isVisible = false;

/* définition du node n°60*/
const myNode60_1 = myNode57.clone();
myNode60_1.isVisible = false;
const myNode60_2 = object.addFuseOperation();
myNode60_2.leftArg.set(myNode60_1);
myNode60_2.rightArg.set(myNode58);
myNode60_2.isVisible = false;
myNode60 = object.addFuseOperation();
myNode60.leftArg.set(myNode60_2);
myNode60.rightArg.set(myNode59);
myNode60.isVisible = false;
myNode60.isVisible = false;

/* définition du node n°61*/
const myNode61 = object.addCutOperation();
myNode61.leftArg.set(myNode56);
myNode61.rightArg.set(myNode60);
myNode61.isVisible = false;

/* définition du node n°62*/
const myNode62 = object.addBox();
myNode62.point1.set(-4.4549,2.0271,-0.0269);
myNode62.point2.set(-3.6871,2.2539,0.4369);
myNode62.innerRotation.center.set(0,0,0);
myNode62.innerRotation.axis.set(0.0,0.0,0.0);
myNode62.innerRotation.angle.set(0.0);
myNode62.innerTranslation.vector.set(-4.071000000000001,2.1405,0.205);
myNode62.isVisible = false;

/* définition du node n°63*/
const myNode63 = object.addBox();
myNode63.point1.set(-4.4549,1.3001,-0.4359);
myNode63.point2.set(3.3218999999999994,2.0269,-0.2091);
myNode63.innerRotation.center.set(0,0,0);
myNode63.innerRotation.axis.set(0.0,0.0,0.0);
myNode63.innerRotation.angle.set(0.0);
myNode63.innerTranslation.vector.set(-0.5665000000000004,1.6635,-0.3225);
myNode63.isVisible = false;

/* définition du node n°64*/
const myNode64 = object.addBox();
myNode64.point1.set(1.3731,1.7081,-0.4359);
myNode64.point2.set(4.7279,2.2539,0.4369);
myNode64.innerRotation.center.set(0,0,0);
myNode64.innerRotation.axis.set(0.0,0.0,0.0);
myNode64.innerRotation.angle.set(0.0);
myNode64.innerTranslation.vector.set(3.0505,1.9809999999999999,0.0005000000000000004);
myNode64.isVisible = false;

/* définition du node n°65*/
const myNode65 = object.addCylinder();
myNode65.point1.set(4.727,-1.982,-0.4359);
myNode65.point2.set(4.727,-1.982,0.4369);
myNode65.radius.set(0.272);
myNode65.innerRotation.center.set(0,0,0);
myNode65.innerRotation.axis.set(0.0,0.0,0.0);
myNode65.innerRotation.angle.set(0.0);
myNode65.isVisible = false;

/* définition du node n°66*/
const myNode66 = object.addFuseOperation();
myNode66.leftArg.set(myNode64);
myNode66.rightArg.set(myNode65);
myNode66.isVisible = false;

/* définition du node n°67*/
const myNode67 = object.addCylinder();
myNode67.point1.set(4.727,-1.982,-0.43595);
myNode67.point2.set(4.727,-1.982,18.099950000000003);
myNode67.radius.set(0.136);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(0.0,0.0,0.0);
myNode67.innerRotation.angle.set(0.0);
myNode67.isVisible = false;

/* définition du node n°68*/
const myNode68 = object.addBox();
myNode68.point1.set(-18.0999,-3.39695,-0.20895);
myNode68.point2.set(4.071999999999999,2.02695,0.43595000000000006);
myNode68.innerRotation.center.set(0,0,0);
myNode68.innerRotation.axis.set(0.0,0.0,0.0);
myNode68.innerRotation.angle.set(0.0);
myNode68.innerTranslation.vector.set(-7.013950000000001,-0.685,0.11350000000000002);
myNode68.isVisible = false;

/* définition du node n°69*/
const myNode69 = object.addCylinder();
myNode69.point1.set(4.727,1.982,-18.0999);
myNode69.point2.set(4.727,1.982,18.099999999999998);
myNode69.radius.set(0.136);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(0.0,0.0,0.0);
myNode69.innerRotation.angle.set(0.0);
myNode69.isVisible = false;

/* définition du node n°70*/
const myNode70_1 = myNode67.clone();
myNode70_1.isVisible = false;
const myNode70_2 = object.addFuseOperation();
myNode70_2.leftArg.set(myNode70_1);
myNode70_2.rightArg.set(myNode68);
myNode70_2.isVisible = false;
myNode70 = object.addFuseOperation();
myNode70.leftArg.set(myNode70_2);
myNode70.rightArg.set(myNode69);
myNode70.isVisible = false;
myNode70.isVisible = false;

/* définition du node n°71*/
const myNode71 = object.addCutOperation();
myNode71.leftArg.set(myNode66);
myNode71.rightArg.set(myNode70);
myNode71.isVisible = false;

/* définition du node n°72*/
const myNode72 = object.addBox();
myNode72.point1.set(-1.3729,2.0271,-0.4359);
myNode72.point2.set(-0.8281000000000001,3.3939,-0.027100000000000013);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(0.0,0.0,0.0);
myNode72.innerRotation.angle.set(0.0);
myNode72.innerTranslation.vector.set(-1.1005,2.7104999999999997,-0.2315);
myNode72.isVisible = false;

/* définition du node n°73*/
const myNode73 = object.addCylinder();
myNode73.point1.set(-1.191,3.045,-18.0999);
myNode73.point2.set(-1.191,3.045,0.43599999999999994);
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
myNode75.point1.set(-4.4549,1.3001,-0.4359);
myNode75.point2.set(-4.072100000000001,2.4359,0.02789999999999998);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(0.0,0.0,0.0);
myNode75.innerRotation.angle.set(0.0);
myNode75.innerTranslation.vector.set(-4.2635000000000005,1.8679999999999999,-0.20400000000000001);
myNode75.isVisible = false;

/* définition du node n°76*/
const myNode76 = object.addCylinder();
myNode76.point1.set(-4.341,2.514,-18.0999);
myNode76.point2.set(-4.341,2.514,18.099999999999998);
myNode76.radius.set(0.257);
myNode76.innerRotation.center.set(0,0,0);
myNode76.innerRotation.axis.set(0.0,0.0,0.0);
myNode76.innerRotation.angle.set(0.0);
myNode76.isVisible = false;

/* définition du node n°77*/
const myNode77 = object.addCutOperation();
myNode77.leftArg.set(myNode75);
myNode77.rightArg.set(myNode76);
myNode77.isVisible = false;

/* définition du node n°78*/
const myNode78 = object.addBox();
myNode78.point1.set(-4.4549,-2.4359,-0.4359);
myNode78.point2.set(-4.072100000000001,1.2998999999999996,-0.027100000000000013);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(0.0,0.0,0.0);
myNode78.innerRotation.angle.set(0.0);
myNode78.innerTranslation.vector.set(-4.2635000000000005,-0.5680000000000003,-0.2315);
myNode78.isVisible = false;

/* définition du node n°79*/
const myNode79 = object.addCylinder();
myNode79.point1.set(-4.341,-2.514,-18.0999);
myNode79.point2.set(-4.341,-2.514,18.099999999999998);
myNode79.radius.set(0.257);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(0.0,0.0,0.0);
myNode79.innerRotation.angle.set(0.0);
myNode79.isVisible = false;

/* définition du node n°80*/
const myNode80 = object.addCutOperation();
myNode80.leftArg.set(myNode78);
myNode80.rightArg.set(myNode79);
myNode80.isVisible = false;

/* définition du node n°81*/
const myNode81 = object.addCylinder();
myNode81.point1.set(1.087,3.394,-0.4359);
myNode81.point2.set(1.087,3.394,-0.027100000000000013);
myNode81.radius.set(0.258);
myNode81.innerRotation.center.set(0,0,0);
myNode81.innerRotation.axis.set(0.0,0.0,0.0);
myNode81.innerRotation.angle.set(0.0);
myNode81.isVisible = false;

/* définition du node n°82*/
const myNode82 = object.addCylinder();
myNode82.point1.set(0.001,2.525,-0.4359);
myNode82.point2.set(0.001,2.525,0.4369);
myNode82.radius.set(0.275);
myNode82.innerRotation.center.set(0,0,0);
myNode82.innerRotation.axis.set(0.0,0.0,0.0);
myNode82.innerRotation.angle.set(0.0);
myNode82.isVisible = false;

/* définition du node n°83*/
const myNode83 = object.addCylinder();
myNode83.point1.set(0,2.527,-18.0999);
myNode83.point2.set(0,2.527,18.099999999999998);
myNode83.radius.set(0.136);
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
const myNode85 = object.addBox();
myNode85.point1.set(1.3731,2.0271,-0.4359);
myNode85.point2.set(4.4549,2.4358999999999997,-0.027100000000000013);
myNode85.innerRotation.center.set(0,0,0);
myNode85.innerRotation.axis.set(0.0,0.0,0.0);
myNode85.innerRotation.angle.set(0.0);
myNode85.innerTranslation.vector.set(2.9139999999999997,2.2315,-0.2315);
myNode85.isVisible = false;

/* définition du node n°86*/
const myNode86 = object.addCylinder();
myNode86.point1.set(4.727,1.98,-0.4359);
myNode86.point2.set(4.727,1.98,0.4369);
myNode86.radius.set(0.271);
myNode86.innerRotation.center.set(0,0,0);
myNode86.innerRotation.axis.set(0.0,0.0,0.0);
myNode86.innerRotation.angle.set(0.0);
myNode86.isVisible = false;

/* définition du node n°87*/
const myNode87 = object.addFuseOperation();
myNode87.leftArg.set(myNode85);
myNode87.rightArg.set(myNode86);
myNode87.isVisible = false;

/* définition du node n°88*/
const myNode88 = object.addCylinder();
myNode88.point1.set(4.345,2.52,-18.0999);
myNode88.point2.set(4.345,2.52,18.099999999999998);
myNode88.radius.set(0.263);
myNode88.innerRotation.center.set(0,0,0);
myNode88.innerRotation.axis.set(0.0,0.0,0.0);
myNode88.innerRotation.angle.set(0.0);
myNode88.isVisible = false;

/* définition du node n°89*/
const myNode89 = object.addFuseOperation();
myNode89.leftArg.set(myNode69);
myNode89.rightArg.set(myNode88);
myNode89.isVisible = false;

/* définition du node n°90*/
const myNode90 = object.addCutOperation();
myNode90.leftArg.set(myNode87);
myNode90.rightArg.set(myNode89);
myNode90.isVisible = false;

/* définition du node n°91*/
const myNode91 = object.addBox();
myNode91.point1.set(-3.1179,-2.2549,-0.2089);
myNode91.point2.set(1.3729,-2.0281000000000002,0.43590000000000007);
myNode91.innerRotation.center.set(0,0,0);
myNode91.innerRotation.axis.set(0.0,0.0,0.0);
myNode91.innerRotation.angle.set(0.0);
myNode91.innerTranslation.vector.set(-0.8725,-2.1415,0.11350000000000002);
myNode91.isVisible = false;

/* définition du node n°92*/
const myNode92 = object.addBox();
myNode92.point1.set(-2.8229,2.0271,-0.4359);
myNode92.point2.set(3.3219,2.2539,0.4369);
myNode92.innerRotation.center.set(0,0,0);
myNode92.innerRotation.axis.set(0.0,0.0,0.0);
myNode92.innerRotation.angle.set(0.0);
myNode92.innerTranslation.vector.set(0.24949999999999983,2.1405,0.0005000000000000004);
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
myNode94.point1.set(4.0721,-2.2549,-0.4359);
myNode94.point2.set(4.7279,-1.7101000000000002,0.4369);
myNode94.innerRotation.center.set(0,0,0);
myNode94.innerRotation.axis.set(0.0,0.0,0.0);
myNode94.innerRotation.angle.set(0.0);
myNode94.innerTranslation.vector.set(4.3999999999999995,-1.9825000000000002,0.0005000000000000004);
myNode94.isVisible = false;

/* définition du node n°95*/
const myNode95 = object.addBox();
myNode95.point1.set(1.3731,-2.4359,-0.4359);
myNode95.point2.set(4.071899999999999,-2.0271000000000003,0.4369);
myNode95.innerRotation.center.set(0,0,0);
myNode95.innerRotation.axis.set(0.0,0.0,0.0);
myNode95.innerRotation.angle.set(0.0);
myNode95.innerTranslation.vector.set(2.7225,-2.2315,0.0005000000000000004);
myNode95.isVisible = false;

/* définition du node n°96*/
const myNode96 = object.addFuseOperation();
myNode96.leftArg.set(myNode94);
myNode96.rightArg.set(myNode95);
myNode96.isVisible = false;

/* définition du node n°97*/
const myNode97 = object.addBox();
myNode97.point1.set(-18.0999,-2.43595,-0.02695);
myNode97.point2.set(4.726999999999997,-2.25405,0.43694999999999995);
myNode97.innerRotation.center.set(0,0,0);
myNode97.innerRotation.axis.set(0.0,0.0,0.0);
myNode97.innerRotation.angle.set(0.0);
myNode97.innerTranslation.vector.set(-6.6864500000000024,-2.345,0.205);
myNode97.isVisible = false;

/* définition du node n°98*/
const myNode98 = object.addCylinder();
myNode98.point1.set(4.727,-1.982,-18.0999);
myNode98.point2.set(4.727,-1.982,0.43599999999999994);
myNode98.radius.set(0.272);
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
myNode101.point1.set(-4.0709,2.0271,-0.4359);
myNode101.point2.set(-3.5361,3.3939,-0.027100000000000013);
myNode101.innerRotation.center.set(0,0,0);
myNode101.innerRotation.axis.set(0.0,0.0,0.0);
myNode101.innerRotation.angle.set(0.0);
myNode101.innerTranslation.vector.set(-3.8035,2.7104999999999997,-0.2315);
myNode101.isVisible = false;

/* définition du node n°102*/
const myNode102 = object.addCylinder();
myNode102.point1.set(-3.718,3.046,-18.0999);
myNode102.point2.set(-3.718,3.046,-0.027000000000001023);
myNode102.radius.set(0.072);
myNode102.innerRotation.center.set(0,0,0);
myNode102.innerRotation.axis.set(0.0,0.0,0.0);
myNode102.innerRotation.angle.set(0.0);
myNode102.isVisible = false;

/* définition du node n°103*/
const myNode103 = object.addCutOperation();
myNode103.leftArg.set(myNode101);
myNode103.rightArg.set(myNode102);
myNode103.isVisible = false;

/* définition du node n°104*/
const myNode104 = object.addBox();
myNode104.point1.set(-4.7259,-2.2549,-0.4359);
myNode104.point2.set(-3.9821,1.2999,0.4369);
myNode104.innerRotation.center.set(0,0,0);
myNode104.innerRotation.axis.set(0.0,0.0,0.0);
myNode104.innerRotation.angle.set(0.0);
myNode104.innerTranslation.vector.set(-4.354,-0.47750000000000004,0.0005000000000000004);
myNode104.isVisible = false;

/* définition du node n°105*/
const myNode105 = object.addBox();
myNode105.point1.set(-0.2729,-2.4359,-0.4359);
myNode105.point2.set(0.2719,-2.2541,0.4369);
myNode105.innerRotation.center.set(0,0,0);
myNode105.innerRotation.axis.set(0.0,0.0,0.0);
myNode105.innerRotation.angle.set(0.0);
myNode105.innerTranslation.vector.set(-0.0005000000000000004,-2.345,0.0005000000000000004);
myNode105.isVisible = false;

/* définition du node n°106*/
const myNode106 = object.addBox();
myNode106.point1.set(1.0871,-3.6549,-0.4359);
myNode106.point2.set(1.3729,-3.3971,-0.027100000000000013);
myNode106.innerRotation.center.set(0,0,0);
myNode106.innerRotation.axis.set(0.0,0.0,0.0);
myNode106.innerRotation.angle.set(0.0);
myNode106.innerTranslation.vector.set(1.23,-3.5260000000000002,-0.2315);
myNode106.isVisible = false;

/* définition du node n°107*/
const myNode107 = object.addCylinder();
myNode107.point1.set(0,-2.526,-0.4359);
myNode107.point2.set(0,-2.526,0.4369);
myNode107.radius.set(0.271);
myNode107.innerRotation.center.set(0,0,0);
myNode107.innerRotation.axis.set(0.0,0.0,0.0);
myNode107.innerRotation.angle.set(0.0);
myNode107.isVisible = false;

/* définition du node n°108*/
const myNode108 = object.addBox();
myNode108.point1.set(-1.3729,-3.3969,-0.4359);
myNode108.point2.set(1.3719000000000001,-2.4371,-0.027100000000000013);
myNode108.innerRotation.center.set(0,0,0);
myNode108.innerRotation.axis.set(0.0,0.0,0.0);
myNode108.innerRotation.angle.set(0.0);
myNode108.innerTranslation.vector.set(-0.0004999999999999449,-2.917,-0.2315);
myNode108.isVisible = false;

/* définition du node n°109*/
const myNode109 = object.addBox();
myNode109.point1.set(-0.82695,-3.39695,-18.0999);
myNode109.point2.set(0.82695,-2.43705,18.099999999999998);
myNode109.innerRotation.center.set(0,0,0);
myNode109.innerRotation.axis.set(0.0,0.0,0.0);
myNode109.innerRotation.angle.set(0.0);
myNode109.innerTranslation.vector.set(0.0,-2.917,4.9999999998107114e-05);
myNode109.isVisible = false;

/* définition du node n°110*/
const myNode110 = object.addCutOperation();
myNode110.leftArg.set(myNode108);
myNode110.rightArg.set(myNode109);
myNode110.isVisible = false;

/* définition du node n°111*/
const myNode111 = object.addBox();
myNode111.point1.set(-4.4549,-2.2549,-0.4359);
myNode111.point2.set(3.822899999999999,1.2999,-0.2091);
myNode111.innerRotation.center.set(0,0,0);
myNode111.innerRotation.axis.set(0.0,0.0,0.0);
myNode111.innerRotation.angle.set(0.0);
myNode111.innerTranslation.vector.set(-0.3160000000000007,-0.47750000000000004,-0.3225);
myNode111.isVisible = false;

/* définition du node n°112*/
const myNode112 = object.addCylinder();
myNode112.point1.set(-1.093,-3.389,-0.4359);
myNode112.point2.set(-1.093,-3.389,-0.027100000000000013);
myNode112.radius.set(0.265);
myNode112.innerRotation.center.set(0,0,0);
myNode112.innerRotation.axis.set(0.0,0.0,0.0);
myNode112.innerRotation.angle.set(0.0);
myNode112.isVisible = false;

/* définition du node n°113*/
const myNode113_1 = myNode104.clone();
myNode113_1.isVisible = false;
const myNode113_2 = object.addFuseOperation();
myNode113_2.leftArg.set(myNode113_1);
myNode113_2.rightArg.set(myNode105);
myNode113_2.isVisible = false;
const myNode113_3 = object.addFuseOperation();
myNode113_3.leftArg.set(myNode113_2);
myNode113_3.rightArg.set(myNode106);
myNode113_3.isVisible = false;
const myNode113_4 = object.addFuseOperation();
myNode113_4.leftArg.set(myNode113_3);
myNode113_4.rightArg.set(myNode107);
myNode113_4.isVisible = false;
const myNode113_5 = object.addFuseOperation();
myNode113_5.leftArg.set(myNode113_4);
myNode113_5.rightArg.set(myNode110);
myNode113_5.isVisible = false;
const myNode113_6 = object.addFuseOperation();
myNode113_6.leftArg.set(myNode113_5);
myNode113_6.rightArg.set(myNode111);
myNode113_6.isVisible = false;
myNode113 = object.addFuseOperation();
myNode113.leftArg.set(myNode113_6);
myNode113.rightArg.set(myNode112);
myNode113.isVisible = false;
myNode113.isVisible = false;

/* définition du node n°114*/
const myNode114 = object.addCylinder();
myNode114.point1.set(-4.726,-1.982,-18.0999);
myNode114.point2.set(-4.726,-1.982,0.43599999999999994);
myNode114.radius.set(0.273);
myNode114.innerRotation.center.set(0,0,0);
myNode114.innerRotation.axis.set(0.0,0.0,0.0);
myNode114.innerRotation.angle.set(0.0);
myNode114.isVisible = false;

/* définition du node n°115*/
const myNode115 = object.addBox();
myNode115.point1.set(-3.32295,-1.29995,-0.43595);
myNode115.point2.set(3.8239499999999995,1.29995,-0.02705000000000002);
myNode115.innerRotation.center.set(0,0,0);
myNode115.innerRotation.axis.set(0.0,0.0,0.0);
myNode115.innerRotation.angle.set(0.0);
myNode115.innerTranslation.vector.set(0.2504999999999997,0.0,-0.2315);
myNode115.isVisible = false;

/* définition du node n°116*/
const myNode116 = object.addCylinder();
myNode116.point1.set(-1.191,-3.045,-18.0999);
myNode116.point2.set(-1.191,-3.045,18.099999999999998);
myNode116.radius.set(0.073);
myNode116.innerRotation.center.set(0,0,0);
myNode116.innerRotation.axis.set(0.0,0.0,0.0);
myNode116.innerRotation.angle.set(0.0);
myNode116.isVisible = false;

/* définition du node n°117*/
const myNode117 = object.addBox();
myNode117.point1.set(-4.07095,-2.02695,-0.20895);
myNode117.point2.set(-3.9820499999999996,1.2999500000000004,18.09995);
myNode117.innerRotation.center.set(0,0,0);
myNode117.innerRotation.axis.set(0.0,0.0,0.0);
myNode117.innerRotation.angle.set(0.0);
myNode117.innerTranslation.vector.set(-4.0264999999999995,-0.3634999999999997,8.945500000000001);
myNode117.isVisible = false;

/* définition du node n°118*/
const myNode118 = object.addBox();
myNode118.point1.set(-4.72595,-1.70895,-0.43595);
myNode118.point2.set(-4.45505,1.2999500000000002,0.43695);
myNode118.innerRotation.center.set(0,0,0);
myNode118.innerRotation.axis.set(0.0,0.0,0.0);
myNode118.innerRotation.angle.set(0.0);
myNode118.innerTranslation.vector.set(-4.5905000000000005,-0.2044999999999999,0.0005000000000000004);
myNode118.isVisible = false;

/* définition du node n°119*/
const myNode119 = object.addCylinder();
myNode119.point1.set(1.191,-3.045,-18.0999);
myNode119.point2.set(1.191,-3.045,18.099999999999998);
myNode119.radius.set(0.072);
myNode119.innerRotation.center.set(0,0,0);
myNode119.innerRotation.axis.set(0.0,0.0,0.0);
myNode119.innerRotation.angle.set(0.0);
myNode119.isVisible = false;

/* définition du node n°120*/
const myNode120 = object.addCylinder();
myNode120.point1.set(0,-2.527,-0.43595);
myNode120.point2.set(0,-2.527,18.099950000000003);
myNode120.radius.set(0.136);
myNode120.innerRotation.center.set(0,0,0);
myNode120.innerRotation.axis.set(0.0,0.0,0.0);
myNode120.innerRotation.angle.set(0.0);
myNode120.isVisible = false;

/* définition du node n°121*/
const myNode121_1 = myNode114.clone();
myNode121_1.isVisible = false;
const myNode121_2 = object.addFuseOperation();
myNode121_2.leftArg.set(myNode121_1);
myNode121_2.rightArg.set(myNode115);
myNode121_2.isVisible = false;
const myNode121_3 = object.addFuseOperation();
myNode121_3.leftArg.set(myNode121_2);
myNode121_3.rightArg.set(myNode116);
myNode121_3.isVisible = false;
const myNode121_4 = object.addFuseOperation();
myNode121_4.leftArg.set(myNode121_3);
myNode121_4.rightArg.set(myNode117);
myNode121_4.isVisible = false;
const myNode121_5 = object.addFuseOperation();
myNode121_5.leftArg.set(myNode121_4);
myNode121_5.rightArg.set(myNode118);
myNode121_5.isVisible = false;
const myNode121_6 = object.addFuseOperation();
myNode121_6.leftArg.set(myNode121_5);
myNode121_6.rightArg.set(myNode119);
myNode121_6.isVisible = false;
myNode121 = object.addFuseOperation();
myNode121.leftArg.set(myNode121_6);
myNode121.rightArg.set(myNode120);
myNode121.isVisible = false;
myNode121.isVisible = false;

/* définition du node n°122*/
const myNode122 = object.addCutOperation();
myNode122.leftArg.set(myNode113);
myNode122.rightArg.set(myNode121);
myNode122.isVisible = false;

/* définition du node n°123*/
const myNode123_1 = myNode10.clone();
myNode123_1.isVisible = false;
const myNode123_2 = object.addFuseOperation();
myNode123_2.leftArg.set(myNode123_1);
myNode123_2.rightArg.set(myNode13);
myNode123_2.isVisible = false;
const myNode123_3 = object.addFuseOperation();
myNode123_3.leftArg.set(myNode123_2);
myNode123_3.rightArg.set(myNode18);
myNode123_3.isVisible = false;
const myNode123_4 = object.addFuseOperation();
myNode123_4.leftArg.set(myNode123_3);
myNode123_4.rightArg.set(myNode31);
myNode123_4.isVisible = false;
const myNode123_5 = object.addFuseOperation();
myNode123_5.leftArg.set(myNode123_4);
myNode123_5.rightArg.set(myNode34);
myNode123_5.isVisible = false;
const myNode123_6 = object.addFuseOperation();
myNode123_6.leftArg.set(myNode123_5);
myNode123_6.rightArg.set(myNode35);
myNode123_6.isVisible = false;
const myNode123_7 = object.addFuseOperation();
myNode123_7.leftArg.set(myNode123_6);
myNode123_7.rightArg.set(myNode45);
myNode123_7.isVisible = false;
const myNode123_8 = object.addFuseOperation();
myNode123_8.leftArg.set(myNode123_7);
myNode123_8.rightArg.set(myNode46);
myNode123_8.isVisible = false;
const myNode123_9 = object.addFuseOperation();
myNode123_9.leftArg.set(myNode123_8);
myNode123_9.rightArg.set(myNode47);
myNode123_9.isVisible = false;
const myNode123_10 = object.addFuseOperation();
myNode123_10.leftArg.set(myNode123_9);
myNode123_10.rightArg.set(myNode50);
myNode123_10.isVisible = false;
const myNode123_11 = object.addFuseOperation();
myNode123_11.leftArg.set(myNode123_10);
myNode123_11.rightArg.set(myNode51);
myNode123_11.isVisible = false;
const myNode123_12 = object.addFuseOperation();
myNode123_12.leftArg.set(myNode123_11);
myNode123_12.rightArg.set(myNode61);
myNode123_12.isVisible = false;
const myNode123_13 = object.addFuseOperation();
myNode123_13.leftArg.set(myNode123_12);
myNode123_13.rightArg.set(myNode62);
myNode123_13.isVisible = false;
const myNode123_14 = object.addFuseOperation();
myNode123_14.leftArg.set(myNode123_13);
myNode123_14.rightArg.set(myNode63);
myNode123_14.isVisible = false;
const myNode123_15 = object.addFuseOperation();
myNode123_15.leftArg.set(myNode123_14);
myNode123_15.rightArg.set(myNode71);
myNode123_15.isVisible = false;
const myNode123_16 = object.addFuseOperation();
myNode123_16.leftArg.set(myNode123_15);
myNode123_16.rightArg.set(myNode74);
myNode123_16.isVisible = false;
const myNode123_17 = object.addFuseOperation();
myNode123_17.leftArg.set(myNode123_16);
myNode123_17.rightArg.set(myNode77);
myNode123_17.isVisible = false;
const myNode123_18 = object.addFuseOperation();
myNode123_18.leftArg.set(myNode123_17);
myNode123_18.rightArg.set(myNode80);
myNode123_18.isVisible = false;
const myNode123_19 = object.addFuseOperation();
myNode123_19.leftArg.set(myNode123_18);
myNode123_19.rightArg.set(myNode81);
myNode123_19.isVisible = false;
const myNode123_20 = object.addFuseOperation();
myNode123_20.leftArg.set(myNode123_19);
myNode123_20.rightArg.set(myNode84);
myNode123_20.isVisible = false;
const myNode123_21 = object.addFuseOperation();
myNode123_21.leftArg.set(myNode123_20);
myNode123_21.rightArg.set(myNode90);
myNode123_21.isVisible = false;
const myNode123_22 = object.addFuseOperation();
myNode123_22.leftArg.set(myNode123_21);
myNode123_22.rightArg.set(myNode91);
myNode123_22.isVisible = false;
const myNode123_23 = object.addFuseOperation();
myNode123_23.leftArg.set(myNode123_22);
myNode123_23.rightArg.set(myNode92);
myNode123_23.isVisible = false;
const myNode123_24 = object.addFuseOperation();
myNode123_24.leftArg.set(myNode123_23);
myNode123_24.rightArg.set(myNode93);
myNode123_24.isVisible = false;
const myNode123_25 = object.addFuseOperation();
myNode123_25.leftArg.set(myNode123_24);
myNode123_25.rightArg.set(myNode100);
myNode123_25.isVisible = false;
const myNode123_26 = object.addFuseOperation();
myNode123_26.leftArg.set(myNode123_25);
myNode123_26.rightArg.set(myNode103);
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