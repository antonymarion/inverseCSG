/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-18.0999,-18.0999,-18.0999);
myNode0.point2.set(18.0999,-1.307100000000002,-1.8211000000000013);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(0,0,0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(3.893,0.005,-3.3519);
myNode1.point2.set(3.893,0.005,-2.2161);
myNode1.radius.set(0.456);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(-1.733,-2.853,-3.3519);
myNode2.point2.set(-1.733,-2.853,18.099899999999998);
myNode2.radius.set(0.34);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addFuseOperation();
myNode3.leftArg.set(myNode1);
myNode3.rightArg.set(myNode2);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addCommonOperation();
myNode4.leftArg.set(myNode0);
myNode4.rightArg.set(myNode3);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(-1.735,-2.854,-3.35195);
myNode5.point2.set(-1.735,-2.854,-1.82105);
myNode5.radius.set(0.113);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addCutOperation();
myNode6.leftArg.set(myNode4);
myNode6.rightArg.set(myNode5);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addCylinder();
myNode7.point1.set(-0.086,-0.007,-3.3519);
myNode7.point2.set(-0.086,-0.007,18.099899999999998);
myNode7.radius.set(4.998);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addCylinder();
myNode8.point1.set(-2.076,-3.445,-18.0999);
myNode8.point2.set(-2.076,-3.445,-3.352100000000002);
myNode8.radius.set(0.453);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(-18.0999,1.3641,-18.0999);
myNode9.point2.set(2.9808999999999983,1.7049,-2.216100000000001);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.innerTranslation.vector.set(0,0,0);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addFuseOperation();
myNode10.leftArg.set(myNode8);
myNode10.rightArg.set(myNode9);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addCommonOperation();
myNode11.leftArg.set(myNode7);
myNode11.rightArg.set(myNode10);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addBox();
myNode12.point1.set(0.2541,1.3641,-3.3519);
myNode12.point2.set(1.0499,1.7049,1.6339000000000001);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);
myNode12.innerTranslation.vector.set(0,0,0);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addCylinder();
myNode13.point1.set(-2.795,-1.329,-18.0999);
myNode13.point2.set(-2.795,-1.329,18.0999);
myNode13.radius.set(0.227);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(-1.2220390490453152,1.22204672454102,1.2008907288903108);
myNode13.innerRotation.angle.set(120.57891254200833);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(0.085,-0.007,-18.0999);
myNode14.point2.set(0.085,-0.007,3.351899999999997);
myNode14.radius.set(4.198);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode14.innerRotation.angle.set(179.9999999997983);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addCylinder();
myNode15.point1.set(-1.634,1.803,-18.0999);
myNode15.point2.set(-1.634,1.803,18.099999999999998);
myNode15.radius.set(0.581);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode15.innerRotation.angle.set(119.9998447624254);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addCutOperation();
myNode16.leftArg.set(myNode14);
myNode16.rightArg.set(myNode15);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(-18.0999,-18.0999,-18.0999);
myNode17.point2.set(18.099999999999998,1.3639999999999972,18.099999999999998);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.innerTranslation.vector.set(0,0,0);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addBox();
myNode18.point1.set(0.25405,1.36405,-3.35195);
myNode18.point2.set(18.09995,18.09995,1.63395);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);
myNode18.innerTranslation.vector.set(0,0,0);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addFuseOperation();
myNode19.leftArg.set(myNode17);
myNode19.rightArg.set(myNode18);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addCutOperation();
myNode20.leftArg.set(myNode16);
myNode20.rightArg.set(myNode19);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addCylinder();
myNode21.point1.set(-2.791,1.511,1.0231);
myNode21.point2.set(-2.791,1.511,18.099899999999998);
myNode21.radius.set(0.228);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode21.innerRotation.angle.set(119.9998447624254);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addSphere();
myNode22.center.set(1.334,1.446,2.786);
myNode22.radius.set(0.28079992877491977);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23_1 = myNode12.clone();
myNode23_1.isVisible = false;
const myNode23_2 = object.addFuseOperation();
myNode23_2.leftArg.set(myNode23_1);
myNode23_2.rightArg.set(myNode13);
myNode23_2.isVisible = false;
const myNode23_3 = object.addFuseOperation();
myNode23_3.leftArg.set(myNode23_2);
myNode23_3.rightArg.set(myNode20);
myNode23_3.isVisible = false;
const myNode23_4 = object.addFuseOperation();
myNode23_4.leftArg.set(myNode23_3);
myNode23_4.rightArg.set(myNode21);
myNode23_4.isVisible = false;
myNode23 = object.addFuseOperation();
myNode23.leftArg.set(myNode23_4);
myNode23.rightArg.set(myNode22);
myNode23.isVisible = false;
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addCylinder();
myNode24.point1.set(-1.639,-1.628,1.36405);
myNode24.point2.set(-1.639,-1.628,1.70495);
myNode24.radius.set(0.576);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode24.innerRotation.angle.set(119.9998447624254);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addCylinder();
myNode25.point1.set(0.517,0.105,-18.1);
myNode25.point2.set(0.517,0.105,18.099899999999998);
myNode25.radius.set(0.453);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(-1.1963418233785224,1.2174017425887051,1.1963373516041578);
myNode25.innerRotation.angle.set(119.42458031866664);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addBox();
myNode26.point1.set(-18.0999,1.36405,-3.35195);
myNode26.point2.set(-0.4280000000000008,18.09995,-1.87405);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);
myNode26.innerTranslation.vector.set(0,0,0);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addBox();
myNode27.point1.set(-18.0999,-18.0999,-1.87395);
myNode27.point2.set(18.099999999999998,18.099999999999998,18.09995);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);
myNode27.innerTranslation.vector.set(0,0,0);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addBox();
myNode28.point1.set(-1.905,1.023,-3.352);
myNode28.point2.set(1.732,1.705,3.353);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(0.0,0.0,0.0);
myNode28.innerRotation.angle.set(0.0);
myNode28.innerTranslation.vector.set(0,0,0);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addCutOperation();
myNode29.leftArg.set(myNode27);
myNode29.rightArg.set(myNode28);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addBox();
myNode30.point1.set(-1.90495,-18.0999,-1.87395);
myNode30.point2.set(-1.22305,1.7049999999999983,1.6339499999999998);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);
myNode30.innerTranslation.vector.set(0,0,0);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addCylinder();
myNode31.point1.set(-2.218,0.091,-18.0999);
myNode31.point2.set(-2.218,0.091,1.7049999999999983);
myNode31.radius.set(0.678);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode31.innerRotation.angle.set(119.9998447624254);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addCylinder();
myNode32.point1.set(-0.74,0.087,1.36405);
myNode32.point2.set(-0.74,0.087,1.70495);
myNode32.radius.set(0.567);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode32.innerRotation.angle.set(119.9998447624254);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33_1 = myNode24.clone();
myNode33_1.isVisible = false;
const myNode33_2 = object.addFuseOperation();
myNode33_2.leftArg.set(myNode33_1);
myNode33_2.rightArg.set(myNode25);
myNode33_2.isVisible = false;
const myNode33_3 = object.addFuseOperation();
myNode33_3.leftArg.set(myNode33_2);
myNode33_3.rightArg.set(myNode26);
myNode33_3.isVisible = false;
const myNode33_4 = object.addFuseOperation();
myNode33_4.leftArg.set(myNode33_3);
myNode33_4.rightArg.set(myNode29);
myNode33_4.isVisible = false;
const myNode33_5 = object.addFuseOperation();
myNode33_5.leftArg.set(myNode33_4);
myNode33_5.rightArg.set(myNode30);
myNode33_5.isVisible = false;
const myNode33_6 = object.addFuseOperation();
myNode33_6.leftArg.set(myNode33_5);
myNode33_6.rightArg.set(myNode31);
myNode33_6.isVisible = false;
myNode33 = object.addFuseOperation();
myNode33.leftArg.set(myNode33_6);
myNode33.rightArg.set(myNode32);
myNode33.isVisible = false;
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addCutOperation();
myNode34.leftArg.set(myNode23);
myNode34.rightArg.set(myNode33);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addCylinder();
myNode35.point1.set(-0.086,-0.007,-18.0999);
myNode35.point2.set(-0.086,-0.007,3.351899999999997);
myNode35.radius.set(4.998);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,0.0);
myNode35.innerRotation.angle.set(0.0);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addCylinder();
myNode36.point1.set(-1.736,2.854,-18.0999);
myNode36.point2.set(-1.736,2.854,18.099999999999998);
myNode36.radius.set(0.113);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(0.0,0.0,0.0);
myNode36.innerRotation.angle.set(0.0);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addFuseOperation();
myNode37.leftArg.set(myNode36);
myNode37.rightArg.set(myNode25);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addCutOperation();
myNode38.leftArg.set(myNode35);
myNode38.rightArg.set(myNode37);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addBox();
myNode39.point1.set(-1.90495,1.30705,1.63405);
myNode39.point2.set(18.09995,18.09995,3.35295);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(0.0,0.0,0.0);
myNode39.innerRotation.angle.set(0.0);
myNode39.innerTranslation.vector.set(0,0,0);
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addSphere();
myNode40.center.set(-1.507,2.063,2.785);
myNode40.radius.set(0.769);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41 = object.addCutOperation();
myNode41.leftArg.set(myNode39);
myNode41.rightArg.set(myNode40);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addCylinder();
myNode42.point1.set(0.276,3.303,-1.22295);
myNode42.point2.set(0.276,3.303,1.7319499999999999);
myNode42.radius.set(1.598);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode42.innerRotation.angle.set(89.99978954085029);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addBox();
myNode43.point1.set(-18.0999,1.36405,-1.82095);
myNode43.point2.set(-0.4280000000000008,18.09995,3.35295);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(0.0,0.0,0.0);
myNode43.innerRotation.angle.set(0.0);
myNode43.innerTranslation.vector.set(0,0,0);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44_1 = myNode41.clone();
myNode44_1.isVisible = false;
const myNode44_2 = object.addFuseOperation();
myNode44_2.leftArg.set(myNode44_1);
myNode44_2.rightArg.set(myNode42);
myNode44_2.isVisible = false;
myNode44 = object.addFuseOperation();
myNode44.leftArg.set(myNode44_2);
myNode44.rightArg.set(myNode43);
myNode44.isVisible = false;
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45 = object.addCutOperation();
myNode45.leftArg.set(myNode38);
myNode45.rightArg.set(myNode44);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addBox();
myNode46.point1.set(-0.4279,1.3641,-2.2159);
myNode46.point2.set(0.25389999999999996,3.3039,-0.5170999999999999);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(0.0,0.0,0.0);
myNode46.innerRotation.angle.set(0.0);
myNode46.innerTranslation.vector.set(0,0,0);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addBox();
myNode47.point1.set(-1.9049,1.3071,1.6341);
myNode47.point2.set(1.7319,18.099899999999998,3.3529);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(0.0,0.0,0.0);
myNode47.innerRotation.angle.set(0.0);
myNode47.innerTranslation.vector.set(0,0,0);
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addCylinder();
myNode48.point1.set(-2.075,3.446,-3.3519);
myNode48.point2.set(-2.075,3.446,-2.2161);
myNode48.radius.set(0.453);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);
myNode48.isVisible = false;

/* définition du node n°49*/
const myNode49 = object.addFuseOperation();
myNode49.leftArg.set(myNode47);
myNode49.rightArg.set(myNode48);
myNode49.isVisible = false;

/* définition du node n°50*/
const myNode50 = object.addCylinder();
myNode50.point1.set(-2.074,3.444,-18.0999);
myNode50.point2.set(-2.074,3.444,18.099999999999998);
myNode50.radius.set(0.113);
myNode50.innerRotation.center.set(0,0,0);
myNode50.innerRotation.axis.set(0.0,0.0,0.0);
myNode50.innerRotation.angle.set(0.0);
myNode50.isVisible = false;

/* définition du node n°51*/
const myNode51 = object.addCutOperation();
myNode51.leftArg.set(myNode49);
myNode51.rightArg.set(myNode50);
myNode51.isVisible = false;

/* définition du node n°52*/
const myNode52 = object.addCylinder();
myNode52.point1.set(-1.733,2.851,-3.3519);
myNode52.point2.set(-1.733,2.851,-0.5161000000000002);
myNode52.radius.set(0.339);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,0.0,0.0);
myNode52.innerRotation.angle.set(0.0);
myNode52.isVisible = false;

/* définition du node n°53*/
const myNode53 = object.addBox();
myNode53.point1.set(-18.0999,1.3071,-3.3519);
myNode53.point2.set(18.0999,18.099899999999998,-1.8211000000000002);
myNode53.innerRotation.center.set(0,0,0);
myNode53.innerRotation.axis.set(0.0,0.0,0.0);
myNode53.innerRotation.angle.set(0.0);
myNode53.innerTranslation.vector.set(0,0,0);
myNode53.isVisible = false;

/* définition du node n°54*/
const myNode54 = object.addCylinder();
myNode54.point1.set(0.085,-0.007,-18.0999);
myNode54.point2.set(0.085,-0.007,18.099999999999998);
myNode54.radius.set(4.198);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode54.innerRotation.angle.set(179.9999999997983);
myNode54.isVisible = false;

/* définition du node n°55*/
const myNode55 = object.addCutOperation();
myNode55.leftArg.set(myNode53);
myNode55.rightArg.set(myNode54);
myNode55.isVisible = false;

/* définition du node n°56*/
const myNode56_1 = myNode46.clone();
myNode56_1.isVisible = false;
const myNode56_2 = object.addFuseOperation();
myNode56_2.leftArg.set(myNode56_1);
myNode56_2.rightArg.set(myNode51);
myNode56_2.isVisible = false;
const myNode56_3 = object.addFuseOperation();
myNode56_3.leftArg.set(myNode56_2);
myNode56_3.rightArg.set(myNode52);
myNode56_3.isVisible = false;
myNode56 = object.addFuseOperation();
myNode56.leftArg.set(myNode56_3);
myNode56.rightArg.set(myNode55);
myNode56.isVisible = false;
myNode56.isVisible = false;

/* définition du node n°57*/
const myNode57 = object.addCommonOperation();
myNode57.leftArg.set(myNode45);
myNode57.rightArg.set(myNode56);
myNode57.isVisible = false;

/* définition du node n°58*/
const myNode58 = object.addCylinder();
myNode58.point1.set(-2.076,-3.445,-3.3519);
myNode58.point2.set(-2.076,-3.445,-2.2161);
myNode58.radius.set(0.453);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(0.0,0.0,0.0);
myNode58.innerRotation.angle.set(0.0);
myNode58.isVisible = false;

/* définition du node n°59*/
const myNode59 = object.addCylinder();
myNode59.point1.set(-2.075,-3.445,-18.0999);
myNode59.point2.set(-2.075,-3.445,18.099999999999998);
myNode59.radius.set(0.113);
myNode59.innerRotation.center.set(0,0,0);
myNode59.innerRotation.axis.set(0.0,0.0,0.0);
myNode59.innerRotation.angle.set(0.0);
myNode59.isVisible = false;

/* définition du node n°60*/
const myNode60 = object.addCutOperation();
myNode60.leftArg.set(myNode58);
myNode60.rightArg.set(myNode59);
myNode60.isVisible = false;

/* définition du node n°61*/
const myNode61 = object.addBox();
myNode61.point1.set(2.9811,-18.0999,-3.3519);
myNode61.point2.set(18.0989,18.0999,-1.8211000000000002);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(0.0,0.0,0.0);
myNode61.innerRotation.angle.set(0.0);
myNode61.innerTranslation.vector.set(0,0,0);
myNode61.isVisible = false;

/* définition du node n°62*/
const myNode62 = object.addCylinder();
myNode62.point1.set(3.211,0,-18.0999);
myNode62.point2.set(3.211,0,18.0999);
myNode62.radius.set(0.339);
myNode62.innerRotation.center.set(0,0,0);
myNode62.innerRotation.axis.set(0.0,0.0,0.0);
myNode62.innerRotation.angle.set(0.0);
myNode62.isVisible = false;

/* définition du node n°63*/
const myNode63 = object.addCommonOperation();
myNode63.leftArg.set(myNode61);
myNode63.rightArg.set(myNode62);
myNode63.isVisible = false;

/* définition du node n°64*/
const myNode64 = object.addCylinder();
myNode64.point1.set(3.893,0.005,-3.35195);
myNode64.point2.set(3.893,0.005,-2.21605);
myNode64.radius.set(0.456);
myNode64.innerRotation.center.set(0,0,0);
myNode64.innerRotation.axis.set(0.0,0.0,0.0);
myNode64.innerRotation.angle.set(0.0);
myNode64.isVisible = false;

/* définition du node n°65*/
const myNode65 = object.addCylinder();
myNode65.point1.set(3.209,0,-3.35195);
myNode65.point2.set(3.209,0,18.09995);
myNode65.radius.set(0.113);
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
const myNode67 = object.addCutOperation();
myNode67.leftArg.set(myNode63);
myNode67.rightArg.set(myNode66);
myNode67.isVisible = false;

/* définition du node n°68*/
const myNode68 = object.addBox();
myNode68.point1.set(-18.0999,1.7051,-2.2159);
myNode68.point2.set(2.9808999999999983,18.0999,-1.8211);
myNode68.innerRotation.center.set(0,0,0);
myNode68.innerRotation.axis.set(0.0,0.0,0.0);
myNode68.innerRotation.angle.set(0.0);
myNode68.innerTranslation.vector.set(0,0,0);
myNode68.isVisible = false;

/* définition du node n°69*/
const myNode69 = object.addCutOperation();
myNode69.leftArg.set(myNode68);
myNode69.rightArg.set(myNode65);
myNode69.isVisible = false;

/* définition du node n°70*/
const myNode70 = object.addCylinder();
myNode70.point1.set(-0.086,-0.007,-2.21595);
myNode70.point2.set(-0.086,-0.007,-1.87405);
myNode70.radius.set(4.998);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(0.0,0.0,0.0);
myNode70.innerRotation.angle.set(0.0);
myNode70.isVisible = false;

/* définition du node n°71*/
const myNode71 = object.addBox();
myNode71.point1.set(-18.0999,-1.30695,-3.35195);
myNode71.point2.set(2.980999999999998,18.09995,18.09995);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(0.0,0.0,0.0);
myNode71.innerRotation.angle.set(0.0);
myNode71.innerTranslation.vector.set(0,0,0);
myNode71.isVisible = false;

/* définition du node n°72*/
const myNode72 = object.addFuseOperation();
myNode72.leftArg.set(myNode70);
myNode72.rightArg.set(myNode71);
myNode72.isVisible = false;

/* définition du node n°73*/
const myNode73 = object.addCutOperation();
myNode73.leftArg.set(myNode69);
myNode73.rightArg.set(myNode72);
myNode73.isVisible = false;

/* définition du node n°74*/
const myNode74 = object.addBox();
myNode74.point1.set(-18.0999,1.3641,-3.3519);
myNode74.point2.set(18.0999,1.7049,-1.8741);
myNode74.innerRotation.center.set(0,0,0);
myNode74.innerRotation.axis.set(0.0,0.0,0.0);
myNode74.innerRotation.angle.set(0.0);
myNode74.innerTranslation.vector.set(0,0,0);
myNode74.isVisible = false;

/* définition du node n°75*/
const myNode75 = object.addCylinder();
myNode75.point1.set(0.085,-0.007,1.8211);
myNode75.point2.set(0.085,-0.007,18.0999);
myNode75.radius.set(4.198);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode75.innerRotation.angle.set(179.9999999997983);
myNode75.isVisible = false;

/* définition du node n°76*/
const myNode76 = object.addCommonOperation();
myNode76.leftArg.set(myNode74);
myNode76.rightArg.set(myNode75);
myNode76.isVisible = false;

/* définition du node n°77*/
const myNode77 = object.addCylinder();
myNode77.point1.set(3.891,-0.001,-18.0999);
myNode77.point2.set(3.891,-0.001,18.099999999999998);
myNode77.radius.set(0.113);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(0.0,0.0,0.0);
myNode77.innerRotation.angle.set(0.0);
myNode77.isVisible = false;

/* définition du node n°78*/
const myNode78 = object.addCutOperation();
myNode78.leftArg.set(myNode1);
myNode78.rightArg.set(myNode77);
myNode78.isVisible = false;

/* définition du node n°79*/
const myNode79 = object.addBox();
myNode79.point1.set(-18.0999,-18.0999,-3.3519);
myNode79.point2.set(18.0999,18.0999,18.099899999999998);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(0.0,0.0,0.0);
myNode79.innerRotation.angle.set(0.0);
myNode79.innerTranslation.vector.set(0,0,0);
myNode79.isVisible = false;

/* définition du node n°80*/
const myNode80 = object.addCylinder();
myNode80.point1.set(0.085,-0.007,1.82105);
myNode80.point2.set(0.085,-0.007,18.09995);
myNode80.radius.set(4.198);
myNode80.innerRotation.center.set(0,0,0);
myNode80.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode80.innerRotation.angle.set(179.9999999997983);
myNode80.isVisible = false;

/* définition du node n°81*/
const myNode81 = object.addCutOperation();
myNode81.leftArg.set(myNode79);
myNode81.rightArg.set(myNode80);
myNode81.isVisible = false;

/* définition du node n°82*/
const myNode82 = object.addFuseOperation();
myNode82.leftArg.set(myNode78);
myNode82.rightArg.set(myNode81);
myNode82.isVisible = false;

/* définition du node n°83*/
const myNode83 = object.addBox();
myNode83.point1.set(-18.0999,-18.0999,-3.35195);
myNode83.point2.set(18.099999999999998,18.099999999999998,18.09995);
myNode83.innerRotation.center.set(0,0,0);
myNode83.innerRotation.axis.set(0.0,0.0,0.0);
myNode83.innerRotation.angle.set(0.0);
myNode83.innerTranslation.vector.set(0,0,0);
myNode83.isVisible = false;

/* définition du node n°84*/
const myNode84 = object.addCylinder();
myNode84.point1.set(-0.086,-0.007,-18.1);
myNode84.point2.set(-0.086,-0.007,-1.8210000000000015);
myNode84.radius.set(4.998);
myNode84.innerRotation.center.set(0,0,0);
myNode84.innerRotation.axis.set(0.0,0.0,0.0);
myNode84.innerRotation.angle.set(0.0);
myNode84.isVisible = false;

/* définition du node n°85*/
const myNode85 = object.addCutOperation();
myNode85.leftArg.set(myNode83);
myNode85.rightArg.set(myNode84);
myNode85.isVisible = false;

/* définition du node n°86*/
const myNode86 = object.addBox();
myNode86.point1.set(-18.0999,-1.30695,-3.35195);
myNode86.point2.set(2.980999999999998,18.09995,-1.82105);
myNode86.innerRotation.center.set(0,0,0);
myNode86.innerRotation.axis.set(0.0,0.0,0.0);
myNode86.innerRotation.angle.set(0.0);
myNode86.innerTranslation.vector.set(0,0,0);
myNode86.isVisible = false;

/* définition du node n°87*/
const myNode87 = object.addFuseOperation();
myNode87.leftArg.set(myNode85);
myNode87.rightArg.set(myNode86);
myNode87.isVisible = false;

/* définition du node n°88*/
const myNode88 = object.addCutOperation();
myNode88.leftArg.set(myNode82);
myNode88.rightArg.set(myNode87);
myNode88.isVisible = false;

/* définition du node n°89*/
const myNode89_1 = myNode6.clone();
myNode89_1.isVisible = false;
const myNode89_2 = object.addFuseOperation();
myNode89_2.leftArg.set(myNode89_1);
myNode89_2.rightArg.set(myNode11);
myNode89_2.isVisible = false;
const myNode89_3 = object.addFuseOperation();
myNode89_3.leftArg.set(myNode89_2);
myNode89_3.rightArg.set(myNode34);
myNode89_3.isVisible = false;
const myNode89_4 = object.addFuseOperation();
myNode89_4.leftArg.set(myNode89_3);
myNode89_4.rightArg.set(myNode57);
myNode89_4.isVisible = false;
const myNode89_5 = object.addFuseOperation();
myNode89_5.leftArg.set(myNode89_4);
myNode89_5.rightArg.set(myNode60);
myNode89_5.isVisible = false;
const myNode89_6 = object.addFuseOperation();
myNode89_6.leftArg.set(myNode89_5);
myNode89_6.rightArg.set(myNode67);
myNode89_6.isVisible = false;
const myNode89_7 = object.addFuseOperation();
myNode89_7.leftArg.set(myNode89_6);
myNode89_7.rightArg.set(myNode73);
myNode89_7.isVisible = false;
const myNode89_8 = object.addFuseOperation();
myNode89_8.leftArg.set(myNode89_7);
myNode89_8.rightArg.set(myNode76);
myNode89_8.isVisible = false;
myNode89 = object.addFuseOperation();
myNode89.leftArg.set(myNode89_8);
myNode89.rightArg.set(myNode88);
myNode89.isVisible = false;
myNode89.isVisible = false;

/* définition du node n°90*/
const myNode90 = object.addBox();
myNode90.point1.set(-5.8959,-5.9999,-4.0229);
myNode90.point2.set(5.8959,5.9999,4.0229);
myNode90.innerRotation.center.set(0,0,0);
myNode90.innerRotation.axis.set(0.0,0.0,0.0);
myNode90.innerRotation.angle.set(0.0);
myNode90.innerTranslation.vector.set(0,0,0);
myNode90.isVisible = false;

/* définition du node n°91*/
const myNode91 = object.addCommonOperation();
myNode91.leftArg.set(myNode89);
myNode91.rightArg.set(myNode90);
myNode91.isVisible = true;


/*END Geometry Object Definition*/