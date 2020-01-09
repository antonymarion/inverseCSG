/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addCylinder();
myNode0.point1.set(4.544,4.449,-0.9369);
myNode0.point2.set(4.544,4.449,2.9919);
myNode0.radius.set(0.462);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(4.544,4.449,-2.9909);
myNode1.point2.set(4.544,4.449,2.9909);
myNode1.radius.set(0.462);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(1.364,3.837,-18.0999);
myNode2.point2.set(1.364,3.837,2.9909);
myNode2.radius.set(3.842);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addBox();
myNode3.point1.set(-18.1,-1.85095,-18.0999);
myNode3.point2.set(18.099899999999998,18.09995,0.9379999999999988);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(-3.072938784397386,-0.6531732693475747,8.666269604173044e-07);
myNode3.innerRotation.angle.set(3.141590057987298);
myNode3.innerTranslation.vector.set(-5.000000000165983e-05,8.124500000000001,-8.580950000000001);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addCutOperation();
myNode4.leftArg.set(myNode2);
myNode4.rightArg.set(myNode3);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(-0.993,6.091,-18.0999);
myNode5.point2.set(-0.993,6.091,-0.9370000000000012);
myNode5.radius.set(4.363);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addBox();
myNode6.point1.set(2.29801,5.53103,-2.99095);
myNode6.point2.set(18.09991,18.09993,-0.9370500000000002);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode6.innerRotation.angle.set(0.41887900000000006);
myNode6.innerTranslation.vector.set(10.19896,11.81548,-1.9640000000000002);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addFuseOperation();
myNode7.leftArg.set(myNode5);
myNode7.rightArg.set(myNode6);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addCutOperation();
myNode8.leftArg.set(myNode4);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(3.7511,-18.0999,-2.9909);
myNode9.point2.set(4.1429,4.911899999999999,2.9909);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.innerTranslation.vector.set(3.947,-6.594000000000001,0.0);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(2.3731,-18.0999,-2.9909);
myNode10.point2.set(4.9999,4.911899999999999,-0.9371);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.innerTranslation.vector.set(3.6864999999999997,-6.594000000000001,-1.964);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addBox();
myNode11.point1.set(-0.425955,5.53105,-18.0999);
myNode11.point2.set(18.099945,5.92995,-0.9370000000000012);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode11.innerRotation.angle.set(0.41887900000000006);
myNode11.innerTranslation.vector.set(8.836995,5.730499999999999,-9.518450000000001);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCutOperation();
myNode12.leftArg.set(myNode10);
myNode12.rightArg.set(myNode11);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addFuseOperation();
myNode13.leftArg.set(myNode9);
myNode13.rightArg.set(myNode12);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addCommonOperation();
myNode14.leftArg.set(myNode8);
myNode14.rightArg.set(myNode13);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addBox();
myNode15.point1.set(-18.0999,-18.0999,-2.9909);
myNode15.point2.set(18.0999,5.007899999999999,2.9909);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(-3.072938784397386,-0.6531732693475747,8.666269604173044e-07);
myNode15.innerRotation.angle.set(3.141590057987298);
myNode15.innerTranslation.vector.set(0.0,-6.546000000000001,0.0);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addBox();
myNode16.point1.set(4.1431,-18.0999,-2.9909);
myNode16.point2.set(18.099899999999998,18.0999,2.9909);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);
myNode16.innerTranslation.vector.set(11.1215,0.0,0.0);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addFuseOperation();
myNode17.leftArg.set(myNode15);
myNode17.rightArg.set(myNode16);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addBox();
myNode18.point1.set(-4.9999,-4.6249,-18.0999);
myNode18.point2.set(4.9999,18.099899999999998,2.9909);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);
myNode18.innerTranslation.vector.set(0.0,6.737499999999999,-7.554500000000001);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addCommonOperation();
myNode19.leftArg.set(myNode17);
myNode19.rightArg.set(myNode18);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addCylinder();
myNode20.point1.set(-4.56,-4.473,-2.9909);
myNode20.point2.set(-4.56,-4.473,2.9909);
myNode20.radius.set(0.437);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode20.innerRotation.angle.set(3.141592653586273);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addBox();
myNode21.point1.set(-2.0449,-18.0999,-2.9909);
myNode21.point2.set(6.001899999999999,-2.4251000000000023,2.9909);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode21.innerRotation.angle.set(0.41887900000000006);
myNode21.innerTranslation.vector.set(1.9784999999999995,-10.262500000000003,0.0);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addFuseOperation();
myNode22.leftArg.set(myNode20);
myNode22.rightArg.set(myNode21);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addBox();
myNode23.point1.set(-18.0999,-18.0999,-18.0999);
myNode23.point2.set(6.000899999999998,-2.4251000000000023,-2.991100000000001);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode23.innerRotation.angle.set(0.41887900000000006);
myNode23.innerTranslation.vector.set(-6.049500000000002,-10.262500000000003,-10.5455);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addBox();
myNode24.point1.set(-18.0999,-4.9109,-2.9909);
myNode24.point2.set(4.999899999999997,-3.6611,2.9909);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);
myNode24.innerTranslation.vector.set(-6.5500000000000025,-4.286,0.0);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addFuseOperation();
myNode25.leftArg.set(myNode23);
myNode25.rightArg.set(myNode24);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addCommonOperation();
myNode26.leftArg.set(myNode22);
myNode26.rightArg.set(myNode25);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addFuseOperation();
myNode27.leftArg.set(myNode19);
myNode27.rightArg.set(myNode26);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addBox();
myNode28.point1.set(-4.99995,-4.62495,-2.27695);
myNode28.point2.set(0.7159500000000003,18.09995,-0.9380499999999998);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(0.0,0.0,0.0);
myNode28.innerRotation.angle.set(0.0);
myNode28.innerTranslation.vector.set(-2.142,6.737500000000001,-1.6075);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addBox();
myNode29.point1.set(-2.04495,-18.1,-0.93695);
myNode29.point2.set(3.5669500000000003,18.099899999999998,2.99195);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode29.innerRotation.angle.set(0.41887900000000006);
myNode29.innerTranslation.vector.set(0.7610000000000001,-5.000000000165983e-05,1.0275);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addBox();
myNode30.point1.set(-18.0999,-4.91095,-0.93695);
myNode30.point2.set(3.7509999999999977,18.09995,2.99195);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);
myNode30.innerTranslation.vector.set(-7.174450000000002,6.5945,1.0275);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addBox();
myNode31.point1.set(-18.0999,-3.66095,-18.0999);
myNode31.point2.set(0.7159999999999975,18.09995,2.9909999999999997);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(0.0,0.0,0.0);
myNode31.innerRotation.angle.set(0.0);
myNode31.innerTranslation.vector.set(-8.691950000000002,7.2195,-7.554450000000001);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addCylinder();
myNode32.point1.set(-4.461,-4.074,-2.99095);
myNode32.point2.set(-4.461,-4.074,-2.27705);
myNode32.radius.set(0.222);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addCylinder();
myNode33.point1.set(-0.177,-4.072,-18.0999);
myNode33.point2.set(-0.177,-4.072,18.099999999999998);
myNode33.radius.set(0.223);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode33.innerRotation.angle.set(3.141592653586273);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addBox();
myNode34.point1.set(2.37305,-3.66095,-2.99095);
myNode34.point2.set(4.99995,18.09995,2.99095);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(0.0,0.0,0.0);
myNode34.innerRotation.angle.set(0.0);
myNode34.innerTranslation.vector.set(3.6865,7.2195,0.0);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addCylinder();
myNode35.point1.set(-0.993,6.091,-18.0999);
myNode35.point2.set(-0.993,6.091,2.9909999999999997);
myNode35.radius.set(4.363);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,0.0);
myNode35.innerRotation.angle.set(0.0);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36_1 = myNode28.clone();
myNode36_1.isVisible = false;
const myNode36_2 = object.addFuseOperation();
myNode36_2.leftArg.set(myNode36_1);
myNode36_2.rightArg.set(myNode29);
myNode36_2.isVisible = false;
const myNode36_3 = object.addFuseOperation();
myNode36_3.leftArg.set(myNode36_2);
myNode36_3.rightArg.set(myNode30);
myNode36_3.isVisible = false;
const myNode36_4 = object.addFuseOperation();
myNode36_4.leftArg.set(myNode36_3);
myNode36_4.rightArg.set(myNode31);
myNode36_4.isVisible = false;
const myNode36_5 = object.addFuseOperation();
myNode36_5.leftArg.set(myNode36_4);
myNode36_5.rightArg.set(myNode32);
myNode36_5.isVisible = false;
const myNode36_6 = object.addFuseOperation();
myNode36_6.leftArg.set(myNode36_5);
myNode36_6.rightArg.set(myNode33);
myNode36_6.isVisible = false;
const myNode36_7 = object.addFuseOperation();
myNode36_7.leftArg.set(myNode36_6);
myNode36_7.rightArg.set(myNode34);
myNode36_7.isVisible = false;
myNode36 = object.addFuseOperation();
myNode36.leftArg.set(myNode36_7);
myNode36.rightArg.set(myNode35);
myNode36.isVisible = false;
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addCutOperation();
myNode37.leftArg.set(myNode27);
myNode37.rightArg.set(myNode36);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addCylinder();
myNode38.point1.set(1.364,3.837,-2.9909);
myNode38.point2.set(1.364,3.837,18.0999);
myNode38.radius.set(3.842);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(0.0,0.0,0.0);
myNode38.innerRotation.angle.set(0.0);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addBox();
myNode39.point1.set(3.7511,-18.0999,-0.9369);
myNode39.point2.set(4.9999,4.911899999999999,18.1009);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(0.0,0.0,0.0);
myNode39.innerRotation.angle.set(0.0);
myNode39.innerTranslation.vector.set(4.3755,-6.594000000000001,8.582);
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addBox();
myNode40.point1.set(-2.0449,-18.0999,-2.9909);
myNode40.point2.set(-0.42610000000000015,0.9388999999999967,-2.2771);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode40.innerRotation.angle.set(0.41887900000000006);
myNode40.innerTranslation.vector.set(-1.2355,-8.580500000000002,-2.634);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41 = object.addFuseOperation();
myNode41.leftArg.set(myNode39);
myNode41.rightArg.set(myNode40);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addBox();
myNode42.point1.set(2.29806,1.58709,-0.9369);
myNode42.point2.set(18.09986,4.4358900000000006,2.9919);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode42.innerRotation.angle.set(0.41887900000000006);
myNode42.innerTranslation.vector.set(10.19896,3.0114900000000002,1.0274999999999999);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addCommonOperation();
myNode43.leftArg.set(myNode38);
myNode43.rightArg.set(myNode41);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44 = object.addBox();
myNode44.point1.set(-2.0449,0.939098,-2.9909);
myNode44.point2.set(18.099899999999998,4.436897999999999,-2.2771);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode44.innerRotation.angle.set(0.41887900000000006);
myNode44.innerTranslation.vector.set(8.0275,2.687998,-2.634);
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45 = object.addCylinder();
myNode45.point1.set(-1.348,1.979,-18.0999);
myNode45.point2.set(-1.348,1.979,-2.277100000000001);
myNode45.radius.set(0.094);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(0.0,0.0,0.0);
myNode45.innerRotation.angle.set(0.0);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addBox();
myNode46.point1.set(-0.425905,-18.0999,-2.9909);
myNode46.point2.set(2.298895,4.436899999999998,2.9909);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode46.innerRotation.angle.set(0.41887900000000006);
myNode46.innerTranslation.vector.set(0.9364950000000001,-6.831500000000002,0.0);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47_1 = myNode44.clone();
myNode47_1.isVisible = false;
const myNode47_2 = object.addFuseOperation();
myNode47_2.leftArg.set(myNode47_1);
myNode47_2.rightArg.set(myNode45);
myNode47_2.isVisible = false;
myNode47 = object.addFuseOperation();
myNode47.leftArg.set(myNode47_2);
myNode47.rightArg.set(myNode46);
myNode47.isVisible = false;
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addBox();
myNode48.point1.set(-0.425908,-18.0999,-2.9909);
myNode48.point2.set(18.099892,1.5869,-0.9371);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode48.innerRotation.angle.set(0.41887900000000006);
myNode48.innerTranslation.vector.set(8.836992,-8.2565,-1.964);
myNode48.isVisible = false;

/* définition du node n°49*/
const myNode49 = object.addCylinder();
myNode49.point1.set(1.165,-6.961,-18.0999);
myNode49.point2.set(1.165,-6.961,18.099999999999998);
myNode49.radius.set(5.279);
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
myNode51.point1.set(-18.0999,0.9391,-2.9909);
myNode51.point2.set(2.2978999999999985,5.9299,18.0999);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode51.innerRotation.angle.set(0.41887900000000006);
myNode51.innerTranslation.vector.set(-7.901000000000002,3.4345,7.554500000000001);
myNode51.isVisible = false;

/* définition du node n°52*/
const myNode52 = object.addCylinder();
myNode52.point1.set(0.268,1.622,-2.27695);
myNode52.point2.set(0.268,1.622,18.09995);
myNode52.radius.set(0.448);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,0.0,0.0);
myNode52.innerRotation.angle.set(0.0);
myNode52.isVisible = false;

/* définition du node n°53*/
const myNode53 = object.addCutOperation();
myNode53.leftArg.set(myNode51);
myNode53.rightArg.set(myNode52);
myNode53.isVisible = false;

/* définition du node n°54*/
const myNode54 = object.addFuseOperation();
myNode54.leftArg.set(myNode50);
myNode54.rightArg.set(myNode53);
myNode54.isVisible = false;

/* définition du node n°55*/
const myNode55 = object.addCommonOperation();
myNode55.leftArg.set(myNode47);
myNode55.rightArg.set(myNode54);
myNode55.isVisible = false;

/* définition du node n°56*/
const myNode56 = object.addBox();
myNode56.point1.set(-18.0999,2.07105,-2.99095);
myNode56.point2.set(2.3729999999999976,4.91195,-2.27705);
myNode56.innerRotation.center.set(0,0,0);
myNode56.innerRotation.axis.set(0.0,0.0,0.0);
myNode56.innerRotation.angle.set(0.0);
myNode56.innerTranslation.vector.set(-7.863450000000002,3.4915000000000003,-2.6340000000000003);
myNode56.isVisible = false;

/* définition du node n°57*/
const myNode57 = object.addCylinder();
myNode57.point1.set(3.117,-0.384,-2.99095);
myNode57.point2.set(3.117,-0.384,-0.9370500000000002);
myNode57.radius.set(0.739);
myNode57.innerRotation.center.set(0,0,0);
myNode57.innerRotation.axis.set(0.0,0.0,0.0);
myNode57.innerRotation.angle.set(0.0);
myNode57.isVisible = false;

/* définition du node n°58*/
const myNode58 = object.addCylinder();
myNode58.point1.set(-2.146,-0.806,-2.99095);
myNode58.point2.set(-2.146,-0.806,-2.27705);
myNode58.radius.set(2.862);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(0.0,0.0,0.0);
myNode58.innerRotation.angle.set(0.0);
myNode58.isVisible = false;

/* définition du node n°59*/
const myNode59 = object.addCylinder();
myNode59.point1.set(0.178,1.518,-2.99095);
myNode59.point2.set(0.178,1.518,18.09995);
myNode59.radius.set(0.222);
myNode59.innerRotation.center.set(0,0,0);
myNode59.innerRotation.axis.set(0.0,0.0,0.0);
myNode59.innerRotation.angle.set(0.0);
myNode59.isVisible = false;

/* définition du node n°60*/
const myNode60 = object.addBox();
myNode60.point1.set(-2.04495,0.939048,-2.99095);
myNode60.point2.set(18.09995,4.436948,2.99095);
myNode60.innerRotation.center.set(0,0,0);
myNode60.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode60.innerRotation.angle.set(0.41887900000000006);
myNode60.innerTranslation.vector.set(8.0275,2.687998,0.0);
myNode60.isVisible = false;

/* définition du node n°61*/
const myNode61 = object.addBox();
myNode61.point1.set(-18.1,-18.1,-2.991);
myNode61.point2.set(3.7509999999999977,2.070999999999998,-0.9370000000000003);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(0.0,0.0,0.0);
myNode61.innerRotation.angle.set(0.0);
myNode61.innerTranslation.vector.set(-7.174500000000002,-8.014500000000002,-1.9640000000000002);
myNode61.isVisible = false;

/* définition du node n°62*/
const myNode62 = object.addCutOperation();
myNode62.leftArg.set(myNode60);
myNode62.rightArg.set(myNode61);
myNode62.isVisible = false;

/* définition du node n°63*/
const myNode63 = object.addBox();
myNode63.point1.set(-18.0999,-18.0999,-2.27695);
myNode63.point2.set(2.3729999999999976,1.6219999999999999,2.99095);
myNode63.innerRotation.center.set(0,0,0);
myNode63.innerRotation.axis.set(0.0,0.0,0.0);
myNode63.innerRotation.angle.set(0.0);
myNode63.innerTranslation.vector.set(-7.863450000000002,-8.23895,0.3570000000000002);
myNode63.isVisible = false;

/* définition du node n°64*/
const myNode64_1 = myNode56.clone();
myNode64_1.isVisible = false;
const myNode64_2 = object.addFuseOperation();
myNode64_2.leftArg.set(myNode64_1);
myNode64_2.rightArg.set(myNode57);
myNode64_2.isVisible = false;
const myNode64_3 = object.addFuseOperation();
myNode64_3.leftArg.set(myNode64_2);
myNode64_3.rightArg.set(myNode58);
myNode64_3.isVisible = false;
const myNode64_4 = object.addFuseOperation();
myNode64_4.leftArg.set(myNode64_3);
myNode64_4.rightArg.set(myNode59);
myNode64_4.isVisible = false;
const myNode64_5 = object.addFuseOperation();
myNode64_5.leftArg.set(myNode64_4);
myNode64_5.rightArg.set(myNode62);
myNode64_5.isVisible = false;
myNode64 = object.addFuseOperation();
myNode64.leftArg.set(myNode64_5);
myNode64.rightArg.set(myNode63);
myNode64.isVisible = false;
myNode64.isVisible = false;

/* définition du node n°65*/
const myNode65 = object.addCutOperation();
myNode65.leftArg.set(myNode55);
myNode65.rightArg.set(myNode64);
myNode65.isVisible = false;

/* définition du node n°66*/
const myNode66 = object.addCylinder();
myNode66.point1.set(-4.525,-4.44,-2.9909);
myNode66.point2.set(-4.525,-4.44,-0.9371);
myNode66.radius.set(0.481);
myNode66.innerRotation.center.set(0,0,0);
myNode66.innerRotation.axis.set(0.0,0.0,0.0);
myNode66.innerRotation.angle.set(0.0);
myNode66.isVisible = false;

/* définition du node n°67*/
const myNode67 = object.addCylinder();
myNode67.point1.set(4.545,-4.166,-2.99095);
myNode67.point2.set(4.545,-4.166,18.09995);
myNode67.radius.set(0.461);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode67.innerRotation.angle.set(3.141592653586273);
myNode67.isVisible = false;

/* définition du node n°68*/
const myNode68 = object.addBox();
myNode68.point1.set(-2.04495,-18.1,-2.27695);
myNode68.point2.set(3.5669500000000003,-2.4251000000000023,2.99095);
myNode68.innerRotation.center.set(0,0,0);
myNode68.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode68.innerRotation.angle.set(0.41887900000000006);
myNode68.innerTranslation.vector.set(0.7610000000000001,-10.262550000000001,0.3570000000000002);
myNode68.isVisible = false;

/* définition du node n°69*/
const myNode69 = object.addFuseOperation();
myNode69.leftArg.set(myNode67);
myNode69.rightArg.set(myNode68);
myNode69.isVisible = false;

/* définition du node n°70*/
const myNode70 = object.addCutOperation();
myNode70.leftArg.set(myNode66);
myNode70.rightArg.set(myNode69);
myNode70.isVisible = false;

/* définition du node n°71*/
const myNode71 = object.addBox();
myNode71.point1.set(-2.0449,4.4361,-2.9909);
myNode71.point2.set(18.099899999999998,5.9289,2.9909);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode71.innerRotation.angle.set(0.41887900000000006);
myNode71.innerTranslation.vector.set(8.0275,5.182499999999999,0.0);
myNode71.isVisible = false;

/* définition du node n°72*/
const myNode72 = object.addBox();
myNode72.point1.set(4.1431,2.0711,-2.9909);
myNode72.point2.set(4.999899999999999,18.0999,2.9909);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(0.0,0.0,0.0);
myNode72.innerRotation.angle.set(0.0);
myNode72.innerTranslation.vector.set(4.5714999999999995,10.0855,0.0);
myNode72.isVisible = false;

/* définition du node n°73*/
const myNode73 = object.addCommonOperation();
myNode73.leftArg.set(myNode71);
myNode73.rightArg.set(myNode72);
myNode73.isVisible = false;

/* définition du node n°74*/
const myNode74 = object.addBox();
myNode74.point1.set(-18.0999,-18.0999,-0.9369);
myNode74.point2.set(2.2978999999999985,4.436899999999998,2.9919);
myNode74.innerRotation.center.set(0,0,0);
myNode74.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode74.innerRotation.angle.set(0.41887900000000006);
myNode74.innerTranslation.vector.set(-7.901000000000002,-6.831500000000002,1.0274999999999999);
myNode74.isVisible = false;

/* définition du node n°75*/
const myNode75 = object.addBox();
myNode75.point1.set(-18.0999,5.93012,-0.9369);
myNode75.point2.set(2.2978999999999985,18.09992,2.9919);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode75.innerRotation.angle.set(0.41887900000000006);
myNode75.innerTranslation.vector.set(-7.901000000000002,12.01502,1.0274999999999999);
myNode75.isVisible = false;

/* définition du node n°76*/
const myNode76 = object.addFuseOperation();
myNode76.leftArg.set(myNode74);
myNode76.rightArg.set(myNode75);
myNode76.isVisible = false;

/* définition du node n°77*/
const myNode77 = object.addBox();
myNode77.point1.set(-18.0999,4.91205,-18.0999);
myNode77.point2.set(18.099999999999998,18.09995,18.099999999999998);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(0.0,0.0,0.0);
myNode77.innerRotation.angle.set(0.0);
myNode77.innerTranslation.vector.set(4.9999999998107114e-05,11.506,4.9999999998107114e-05);
myNode77.isVisible = false;

/* définition du node n°78*/
const myNode78 = object.addCutOperation();
myNode78.leftArg.set(myNode76);
myNode78.rightArg.set(myNode77);
myNode78.isVisible = false;

/* définition du node n°79*/
const myNode79 = object.addBox();
myNode79.point1.set(-18.0999,-18.0999,-0.93695);
myNode79.point2.set(3.7509999999999977,18.099999999999998,18.10095);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(0.0,0.0,0.0);
myNode79.innerRotation.angle.set(0.0);
myNode79.innerTranslation.vector.set(-7.174450000000002,4.9999999998107114e-05,8.582);
myNode79.isVisible = false;

/* définition du node n°80*/
const myNode80 = object.addCutOperation();
myNode80.leftArg.set(myNode78);
myNode80.rightArg.set(myNode79);
myNode80.isVisible = false;

/* définition du node n°81*/
const myNode81 = object.addCylinder();
myNode81.point1.set(1.165,-6.961,-2.9909);
myNode81.point2.set(1.165,-6.961,-0.9371);
myNode81.radius.set(5.279);
myNode81.innerRotation.center.set(0,0,0);
myNode81.innerRotation.axis.set(0.0,0.0,0.0);
myNode81.innerRotation.angle.set(0.0);
myNode81.isVisible = false;

/* définition du node n°82*/
const myNode82 = object.addCylinder();
myNode82.point1.set(0.264,-4.171,-2.27695);
myNode82.point2.set(0.264,-4.171,18.09995);
myNode82.radius.set(0.453);
myNode82.innerRotation.center.set(0,0,0);
myNode82.innerRotation.axis.set(0.0,0.0,0.0);
myNode82.innerRotation.angle.set(0.0);
myNode82.isVisible = false;

/* définition du node n°83*/
const myNode83 = object.addCutOperation();
myNode83.leftArg.set(myNode81);
myNode83.rightArg.set(myNode82);
myNode83.isVisible = false;

/* définition du node n°84*/
const myNode84 = object.addBox();
myNode84.point1.set(2.2981,-18.0999,-2.9909);
myNode84.point2.set(6.0009,18.0999,-0.9371);
myNode84.innerRotation.center.set(0,0,0);
myNode84.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode84.innerRotation.angle.set(0.41887900000000006);
myNode84.innerTranslation.vector.set(4.1495,0.0,-1.964);
myNode84.isVisible = false;

/* définition du node n°85*/
const myNode85 = object.addBox();
myNode85.point1.set(-18.0999,-4.9109,-18.0999);
myNode85.point2.set(4.142899999999997,18.099899999999998,-0.9371000000000009);
myNode85.innerRotation.center.set(0,0,0);
myNode85.innerRotation.axis.set(0.0,0.0,0.0);
myNode85.innerRotation.angle.set(0.0);
myNode85.innerTranslation.vector.set(-6.978500000000002,6.5945,-9.518500000000001);
myNode85.isVisible = false;

/* définition du node n°86*/
const myNode86 = object.addCommonOperation();
myNode86.leftArg.set(myNode83);
myNode86.rightArg.set(myNode84);
myNode86.isVisible = false;

/* définition du node n°87*/
const myNode87 = object.addCylinder();
myNode87.point1.set(-3.528,4.472,0.9381);
myNode87.point2.set(-3.528,4.472,2.9919);
myNode87.radius.set(0.436);
myNode87.innerRotation.center.set(0,0,0);
myNode87.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode87.innerRotation.angle.set(3.141592653586273);
myNode87.isVisible = false;

/* définition du node n°88*/
const myNode88 = object.addCylinder();
myNode88.point1.set(1.675,-4.937,-18.0999);
myNode88.point2.set(1.675,-4.937,2.9909);
myNode88.radius.set(3.637);
myNode88.innerRotation.center.set(0,0,0);
myNode88.innerRotation.axis.set(0.0,0.0,0.0);
myNode88.innerRotation.angle.set(0.0);
myNode88.isVisible = false;

/* définition du node n°89*/
const myNode89 = object.addBox();
myNode89.point1.set(-4.9999,-3.6609,-2.9909);
myNode89.point2.set(4.9999,18.099899999999998,18.0999);
myNode89.innerRotation.center.set(0,0,0);
myNode89.innerRotation.axis.set(0.0,0.0,0.0);
myNode89.innerRotation.angle.set(0.0);
myNode89.innerTranslation.vector.set(0.0,7.2195,7.554500000000001);
myNode89.isVisible = false;

/* définition du node n°90*/
const myNode90 = object.addCommonOperation();
myNode90.leftArg.set(myNode88);
myNode90.rightArg.set(myNode89);
myNode90.isVisible = false;

/* définition du node n°91*/
const myNode91 = object.addCylinder();
myNode91.point1.set(-2.146,-0.806,-18.0999);
myNode91.point2.set(-2.146,-0.806,-2.277000000000001);
myNode91.radius.set(2.862);
myNode91.innerRotation.center.set(0,0,0);
myNode91.innerRotation.axis.set(0.0,0.0,0.0);
myNode91.innerRotation.angle.set(0.0);
myNode91.isVisible = false;

/* définition du node n°92*/
const myNode92 = object.addCylinder();
myNode92.point1.set(-3.097,-1.28,-2.99095);
myNode92.point2.set(-3.097,-1.28,18.09995);
myNode92.radius.set(0.723);
myNode92.innerRotation.center.set(0,0,0);
myNode92.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode92.innerRotation.angle.set(3.141592653586273);
myNode92.isVisible = false;

/* définition du node n°93*/
const myNode93 = object.addFuseOperation();
myNode93.leftArg.set(myNode91);
myNode93.rightArg.set(myNode92);
myNode93.isVisible = false;

/* définition du node n°94*/
const myNode94 = object.addCutOperation();
myNode94.leftArg.set(myNode90);
myNode94.rightArg.set(myNode93);
myNode94.isVisible = false;

/* définition du node n°95*/
const myNode95 = object.addBox();
myNode95.point1.set(2.2981,-18.0999,-2.2769);
myNode95.point2.set(3.5659,18.0999,-0.9380999999999999);
myNode95.innerRotation.center.set(0,0,0);
myNode95.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode95.innerRotation.angle.set(0.41887900000000006);
myNode95.innerTranslation.vector.set(2.932,0.0,-1.6075);
myNode95.isVisible = false;

/* définition du node n°96*/
const myNode96 = object.addBox();
myNode96.point1.set(-2.0449,-18.0999,-2.9909);
myNode96.point2.set(3.5668999999999995,18.0999,-2.2771);
myNode96.innerRotation.center.set(0,0,0);
myNode96.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode96.innerRotation.angle.set(0.41887900000000006);
myNode96.innerTranslation.vector.set(0.7609999999999997,0.0,-2.634);
myNode96.isVisible = false;

/* définition du node n°97*/
const myNode97 = object.addBox();
myNode97.point1.set(3.7511,-3.6609,-2.9909);
myNode97.point2.set(4.9999,18.099899999999998,2.9909);
myNode97.innerRotation.center.set(0,0,0);
myNode97.innerRotation.axis.set(0.0,0.0,0.0);
myNode97.innerRotation.angle.set(0.0);
myNode97.innerTranslation.vector.set(4.3755,7.2195,0.0);
myNode97.isVisible = false;

/* définition du node n°98*/
const myNode98 = object.addCylinder();
myNode98.point1.set(1.165,-6.961,-2.9909);
myNode98.point2.set(1.165,-6.961,18.0999);
myNode98.radius.set(5.279);
myNode98.innerRotation.center.set(0,0,0);
myNode98.innerRotation.axis.set(0.0,0.0,0.0);
myNode98.innerRotation.angle.set(0.0);
myNode98.isVisible = false;

/* définition du node n°99*/
const myNode99 = object.addCommonOperation();
myNode99.leftArg.set(myNode97);
myNode99.rightArg.set(myNode98);
myNode99.isVisible = false;

/* définition du node n°100*/
const myNode100_1 = myNode95.clone();
myNode100_1.isVisible = false;
const myNode100_2 = object.addFuseOperation();
myNode100_2.leftArg.set(myNode100_1);
myNode100_2.rightArg.set(myNode96);
myNode100_2.isVisible = false;
myNode100 = object.addFuseOperation();
myNode100.leftArg.set(myNode100_2);
myNode100.rightArg.set(myNode99);
myNode100.isVisible = false;
myNode100.isVisible = false;

/* définition du node n°101*/
const myNode101 = object.addCommonOperation();
myNode101.leftArg.set(myNode94);
myNode101.rightArg.set(myNode100);
myNode101.isVisible = false;

/* définition du node n°102*/
const myNode102_1 = myNode0.clone();
myNode102_1.isVisible = false;
const myNode102_2 = object.addFuseOperation();
myNode102_2.leftArg.set(myNode102_1);
myNode102_2.rightArg.set(myNode1);
myNode102_2.isVisible = false;
const myNode102_3 = object.addFuseOperation();
myNode102_3.leftArg.set(myNode102_2);
myNode102_3.rightArg.set(myNode14);
myNode102_3.isVisible = false;
const myNode102_4 = object.addFuseOperation();
myNode102_4.leftArg.set(myNode102_3);
myNode102_4.rightArg.set(myNode37);
myNode102_4.isVisible = false;
const myNode102_5 = object.addFuseOperation();
myNode102_5.leftArg.set(myNode102_4);
myNode102_5.rightArg.set(myNode43);
myNode102_5.isVisible = false;
const myNode102_6 = object.addFuseOperation();
myNode102_6.leftArg.set(myNode102_5);
myNode102_6.rightArg.set(myNode65);
myNode102_6.isVisible = false;
const myNode102_7 = object.addFuseOperation();
myNode102_7.leftArg.set(myNode102_6);
myNode102_7.rightArg.set(myNode70);
myNode102_7.isVisible = false;
const myNode102_8 = object.addFuseOperation();
myNode102_8.leftArg.set(myNode102_7);
myNode102_8.rightArg.set(myNode73);
myNode102_8.isVisible = false;
const myNode102_9 = object.addFuseOperation();
myNode102_9.leftArg.set(myNode102_8);
myNode102_9.rightArg.set(myNode80);
myNode102_9.isVisible = false;
const myNode102_10 = object.addFuseOperation();
myNode102_10.leftArg.set(myNode102_9);
myNode102_10.rightArg.set(myNode86);
myNode102_10.isVisible = false;
const myNode102_11 = object.addFuseOperation();
myNode102_11.leftArg.set(myNode102_10);
myNode102_11.rightArg.set(myNode87);
myNode102_11.isVisible = false;
myNode102 = object.addFuseOperation();
myNode102.leftArg.set(myNode102_11);
myNode102.rightArg.set(myNode101);
myNode102.isVisible = false;
myNode102.isVisible = false;

/* définition du node n°103*/
const myNode103 = object.addBox();
myNode103.point1.set(-5.9999,-5.8929,-3.5889);
myNode103.point2.set(5.9999,5.8929,3.5898999999999996);
myNode103.innerRotation.center.set(0,0,0);
myNode103.innerRotation.axis.set(0.0,0.0,0.0);
myNode103.innerRotation.angle.set(0.0);
myNode103.innerTranslation.vector.set(0.0,0.0,0.0004999999999997229);
myNode103.isVisible = false;

/* définition du node n°104*/
const myNode104 = object.addCommonOperation();
myNode104.leftArg.set(myNode102);
myNode104.rightArg.set(myNode103);
myNode104.isVisible = true;


/*END Geometry Object Definition*/