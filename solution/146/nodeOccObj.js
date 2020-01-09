/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-18.0999,1.3001,-18.0999);
myNode0.point2.set(1.3728999999999978,18.0999,0.4358999999999966);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(0,0,0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-18.0999,1.30005,-0.43595);
myNode1.point2.set(-4.454000000000002,1.7079499999999999,18.099950000000003);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.innerTranslation.vector.set(0,0,0);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addCutOperation();
myNode2.leftArg.set(myNode0);
myNode2.rightArg.set(myNode1);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(-4.727,1.982,-18.0999);
myNode3.point2.set(-4.727,1.982,18.099999999999998);
myNode3.radius.set(0.136);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(-0.568,2.513,-18.0999);
myNode4.point2.set(-0.568,2.513,18.099999999999998);
myNode4.radius.set(0.256);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addFuseOperation();
myNode5.leftArg.set(myNode3);
myNode5.rightArg.set(myNode4);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addCutOperation();
myNode6.leftArg.set(myNode2);
myNode6.rightArg.set(myNode5);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addBox();
myNode7.point1.set(-3.6859,2.0271,-0.4359);
myNode7.point2.set(-0.5671000000000004,2.4358999999999997,0.02789999999999998);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);
myNode7.innerTranslation.vector.set(0,0,0);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addBox();
myNode8.point1.set(-4.7259,-18.0999,-0.4359);
myNode8.point2.set(-4.0721,2.253899999999998,0.4369);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.innerTranslation.vector.set(0,0,0);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addCylinder();
myNode9.point1.set(-3.819,3.39,-0.4359);
myNode9.point2.set(-3.819,3.39,-0.027100000000000013);
myNode9.radius.set(0.262);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addCylinder();
myNode10.point1.set(-4.727,1.981,-0.4359);
myNode10.point2.set(-4.727,1.981,18.099899999999998);
myNode10.radius.set(0.272);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
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
const myNode12 = object.addCommonOperation();
myNode12.leftArg.set(myNode6);
myNode12.rightArg.set(myNode11);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addCylinder();
myNode13.point1.set(1.088,-3.394,-0.4359);
myNode13.point2.set(1.088,-3.394,-0.027100000000000013);
myNode13.radius.set(0.259);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addBox();
myNode14.point1.set(-3.6859,-3.6549,-0.4359);
myNode14.point2.set(-3.5361000000000002,-3.3971,-0.027100000000000013);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);
myNode14.innerTranslation.vector.set(0,0,0);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addBox();
myNode15.point1.set(-4.4549,-2.4359,-0.4359);
myNode15.point2.set(-4.072100000000001,1.2998999999999996,-0.027100000000000013);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);
myNode15.innerTranslation.vector.set(0,0,0);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(-4.341,-2.514,-18.0999);
myNode16.point2.set(-4.341,-2.514,18.099999999999998);
myNode16.radius.set(0.257);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addCutOperation();
myNode17.leftArg.set(myNode15);
myNode17.rightArg.set(myNode16);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addBox();
myNode18.point1.set(-4.4549,1.3001,-0.4359);
myNode18.point2.set(-4.072100000000001,2.4359,0.02789999999999998);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);
myNode18.innerTranslation.vector.set(0,0,0);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addCylinder();
myNode19.point1.set(-4.341,2.514,-18.0999);
myNode19.point2.set(-4.341,2.514,18.099999999999998);
myNode19.radius.set(0.257);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(0.0,0.0,0.0);
myNode19.innerRotation.angle.set(0.0);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addCutOperation();
myNode20.leftArg.set(myNode18);
myNode20.rightArg.set(myNode19);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addCylinder();
myNode21.point1.set(3.819,3.392,-0.4359);
myNode21.point2.set(3.819,3.392,-0.027100000000000013);
myNode21.radius.set(0.261);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addBox();
myNode22.point1.set(3.5361,-3.6549,-0.4359);
myNode22.point2.set(3.8238999999999996,3.6538999999999997,-0.027100000000000013);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(0.0,0.0,0.0);
myNode22.innerRotation.angle.set(0.0);
myNode22.innerTranslation.vector.set(0,0,0);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addBox();
myNode23.point1.set(3.53605,-2.02695,-18.0999);
myNode23.point2.set(3.82395,3.39395,18.099999999999998);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);
myNode23.innerTranslation.vector.set(0,0,0);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addCylinder();
myNode24.point1.set(3.718,-3.046,-0.43595);
myNode24.point2.set(3.718,-3.046,18.099950000000003);
myNode24.radius.set(0.072);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addFuseOperation();
myNode25.leftArg.set(myNode23);
myNode25.rightArg.set(myNode24);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addCutOperation();
myNode26.leftArg.set(myNode22);
myNode26.rightArg.set(myNode25);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addBox();
myNode27.point1.set(1.3731,1.7081,-0.4359);
myNode27.point2.set(4.7279,2.2539,0.4369);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);
myNode27.innerTranslation.vector.set(0,0,0);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addCylinder();
myNode28.point1.set(4.727,-1.982,-0.4359);
myNode28.point2.set(4.727,-1.982,0.4369);
myNode28.radius.set(0.272);
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
const myNode30 = object.addCylinder();
myNode30.point1.set(4.727,-1.982,-0.43595);
myNode30.point2.set(4.727,-1.982,18.099950000000003);
myNode30.radius.set(0.136);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addBox();
myNode31.point1.set(-18.0999,-3.39695,-0.20895);
myNode31.point2.set(4.071999999999999,2.02695,0.43595000000000006);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(0.0,0.0,0.0);
myNode31.innerRotation.angle.set(0.0);
myNode31.innerTranslation.vector.set(0,0,0);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addCylinder();
myNode32.point1.set(4.727,1.982,-18.0999);
myNode32.point2.set(4.727,1.982,18.099999999999998);
myNode32.radius.set(0.136);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33_1 = myNode30.clone();
myNode33_1.isVisible = false;
const myNode33_2 = object.addFuseOperation();
myNode33_2.leftArg.set(myNode33_1);
myNode33_2.rightArg.set(myNode31);
myNode33_2.isVisible = false;
myNode33 = object.addFuseOperation();
myNode33.leftArg.set(myNode33_2);
myNode33.rightArg.set(myNode32);
myNode33.isVisible = false;
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addCutOperation();
myNode34.leftArg.set(myNode29);
myNode34.rightArg.set(myNode33);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addBox();
myNode35.point1.set(3.3231,-2.4359,-0.4359);
myNode35.point2.set(4.0719,2.0279,-0.2091);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,0.0);
myNode35.innerRotation.angle.set(0.0);
myNode35.innerTranslation.vector.set(0,0,0);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addBox();
myNode36.point1.set(-4.4549,2.0271,-0.0269);
myNode36.point2.set(-3.6871,2.2539,0.4369);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(0.0,0.0,0.0);
myNode36.innerRotation.angle.set(0.0);
myNode36.innerTranslation.vector.set(0,0,0);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addBox();
myNode37.point1.set(4.0721,-2.4359,-0.4359);
myNode37.point2.set(4.454899999999999,1.7088999999999999,0.4369);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0,0.0,0.0);
myNode37.innerRotation.angle.set(0.0);
myNode37.innerTranslation.vector.set(0,0,0);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addBox();
myNode38.point1.set(3.5361,2.0271,-0.4359);
myNode38.point2.set(4.0709,3.3939,-0.027100000000000013);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(0.0,0.0,0.0);
myNode38.innerRotation.angle.set(0.0);
myNode38.innerTranslation.vector.set(0,0,0);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addBox();
myNode39.point1.set(3.8241,-3.3969,-0.4359);
myNode39.point2.set(4.0719,-2.0281000000000002,-0.027100000000000013);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(0.0,0.0,0.0);
myNode39.innerRotation.angle.set(0.0);
myNode39.innerTranslation.vector.set(0,0,0);
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addCylinder();
myNode40.point1.set(3.824,-3.397,-0.4359);
myNode40.point2.set(3.824,-3.397,-0.027100000000000013);
myNode40.radius.set(0.255);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(0.0,0.0,0.0);
myNode40.innerRotation.angle.set(0.0);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41_1 = myNode37.clone();
myNode41_1.isVisible = false;
const myNode41_2 = object.addFuseOperation();
myNode41_2.leftArg.set(myNode41_1);
myNode41_2.rightArg.set(myNode38);
myNode41_2.isVisible = false;
const myNode41_3 = object.addFuseOperation();
myNode41_3.leftArg.set(myNode41_2);
myNode41_3.rightArg.set(myNode39);
myNode41_3.isVisible = false;
myNode41 = object.addFuseOperation();
myNode41.leftArg.set(myNode41_3);
myNode41.rightArg.set(myNode40);
myNode41.isVisible = false;
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addBox();
myNode42.point1.set(3.53605,-2.43595,-0.02695);
myNode42.point2.set(18.09995,-1.70905,18.09995);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0,0.0,0.0);
myNode42.innerRotation.angle.set(0.0);
myNode42.innerTranslation.vector.set(0,0,0);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addCylinder();
myNode43.point1.set(4.342,-2.514,-18.0999);
myNode43.point2.set(4.342,-2.514,0.43599999999999994);
myNode43.radius.set(0.257);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(0.0,0.0,0.0);
myNode43.innerRotation.angle.set(0.0);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44 = object.addCylinder();
myNode44.point1.set(3.719,3.046,-18.0999);
myNode44.point2.set(3.719,3.046,18.099999999999998);
myNode44.radius.set(0.072);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(0.0,0.0,0.0);
myNode44.innerRotation.angle.set(0.0);
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45_1 = myNode42.clone();
myNode45_1.isVisible = false;
const myNode45_2 = object.addFuseOperation();
myNode45_2.leftArg.set(myNode45_1);
myNode45_2.rightArg.set(myNode43);
myNode45_2.isVisible = false;
myNode45 = object.addFuseOperation();
myNode45.leftArg.set(myNode45_2);
myNode45.rightArg.set(myNode44);
myNode45.isVisible = false;
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addCutOperation();
myNode46.leftArg.set(myNode41);
myNode46.rightArg.set(myNode45);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addBox();
myNode47.point1.set(-4.4549,1.3001,-0.4359);
myNode47.point2.set(3.3218999999999994,2.0269,-0.2091);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(0.0,0.0,0.0);
myNode47.innerRotation.angle.set(0.0);
myNode47.innerTranslation.vector.set(0,0,0);
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addBox();
myNode48.point1.set(-0.2729,-2.4359,-0.4359);
myNode48.point2.set(0.2719,-2.2541,0.4369);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);
myNode48.innerTranslation.vector.set(0,0,0);
myNode48.isVisible = false;

/* définition du node n°49*/
const myNode49 = object.addCylinder();
myNode49.point1.set(-1.093,-3.389,-0.4359);
myNode49.point2.set(-1.093,-3.389,-0.027100000000000013);
myNode49.radius.set(0.265);
myNode49.innerRotation.center.set(0,0,0);
myNode49.innerRotation.axis.set(0.0,0.0,0.0);
myNode49.innerRotation.angle.set(0.0);
myNode49.isVisible = false;

/* définition du node n°50*/
const myNode50 = object.addBox();
myNode50.point1.set(-4.7259,-2.2549,-0.4359);
myNode50.point2.set(-3.9821,1.2999,0.4369);
myNode50.innerRotation.center.set(0,0,0);
myNode50.innerRotation.axis.set(0.0,0.0,0.0);
myNode50.innerRotation.angle.set(0.0);
myNode50.innerTranslation.vector.set(0,0,0);
myNode50.isVisible = false;

/* définition du node n°51*/
const myNode51 = object.addBox();
myNode51.point1.set(-4.4549,-2.2549,-0.4359);
myNode51.point2.set(3.822899999999999,1.2999,-0.2091);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(0.0,0.0,0.0);
myNode51.innerRotation.angle.set(0.0);
myNode51.innerTranslation.vector.set(0,0,0);
myNode51.isVisible = false;

/* définition du node n°52*/
const myNode52 = object.addBox();
myNode52.point1.set(-1.3729,-3.3969,-0.4359);
myNode52.point2.set(1.3719000000000001,-2.4371,-0.027100000000000013);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,0.0,0.0);
myNode52.innerRotation.angle.set(0.0);
myNode52.innerTranslation.vector.set(0,0,0);
myNode52.isVisible = false;

/* définition du node n°53*/
const myNode53 = object.addBox();
myNode53.point1.set(-0.82695,-3.39695,-18.0999);
myNode53.point2.set(0.82695,-2.43705,18.099999999999998);
myNode53.innerRotation.center.set(0,0,0);
myNode53.innerRotation.axis.set(0.0,0.0,0.0);
myNode53.innerRotation.angle.set(0.0);
myNode53.innerTranslation.vector.set(0,0,0);
myNode53.isVisible = false;

/* définition du node n°54*/
const myNode54 = object.addCutOperation();
myNode54.leftArg.set(myNode52);
myNode54.rightArg.set(myNode53);
myNode54.isVisible = false;

/* définition du node n°55*/
const myNode55 = object.addCylinder();
myNode55.point1.set(0,-2.526,-0.4359);
myNode55.point2.set(0,-2.526,0.4369);
myNode55.radius.set(0.271);
myNode55.innerRotation.center.set(0,0,0);
myNode55.innerRotation.axis.set(0.0,0.0,0.0);
myNode55.innerRotation.angle.set(0.0);
myNode55.isVisible = false;

/* définition du node n°56*/
const myNode56 = object.addBox();
myNode56.point1.set(1.0871,-3.6549,-0.4359);
myNode56.point2.set(1.3729,-3.3971,-0.027100000000000013);
myNode56.innerRotation.center.set(0,0,0);
myNode56.innerRotation.axis.set(0.0,0.0,0.0);
myNode56.innerRotation.angle.set(0.0);
myNode56.innerTranslation.vector.set(0,0,0);
myNode56.isVisible = false;

/* définition du node n°57*/
const myNode57_1 = myNode48.clone();
myNode57_1.isVisible = false;
const myNode57_2 = object.addFuseOperation();
myNode57_2.leftArg.set(myNode57_1);
myNode57_2.rightArg.set(myNode49);
myNode57_2.isVisible = false;
const myNode57_3 = object.addFuseOperation();
myNode57_3.leftArg.set(myNode57_2);
myNode57_3.rightArg.set(myNode50);
myNode57_3.isVisible = false;
const myNode57_4 = object.addFuseOperation();
myNode57_4.leftArg.set(myNode57_3);
myNode57_4.rightArg.set(myNode51);
myNode57_4.isVisible = false;
const myNode57_5 = object.addFuseOperation();
myNode57_5.leftArg.set(myNode57_4);
myNode57_5.rightArg.set(myNode54);
myNode57_5.isVisible = false;
const myNode57_6 = object.addFuseOperation();
myNode57_6.leftArg.set(myNode57_5);
myNode57_6.rightArg.set(myNode55);
myNode57_6.isVisible = false;
myNode57 = object.addFuseOperation();
myNode57.leftArg.set(myNode57_6);
myNode57.rightArg.set(myNode56);
myNode57.isVisible = false;
myNode57.isVisible = false;

/* définition du node n°58*/
const myNode58 = object.addBox();
myNode58.point1.set(-4.72595,-1.70895,-0.43595);
myNode58.point2.set(-4.45505,1.2999500000000002,0.43695);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(0.0,0.0,0.0);
myNode58.innerRotation.angle.set(0.0);
myNode58.innerTranslation.vector.set(0,0,0);
myNode58.isVisible = false;

/* définition du node n°59*/
const myNode59 = object.addCylinder();
myNode59.point1.set(1.191,-3.045,-18.0999);
myNode59.point2.set(1.191,-3.045,18.099999999999998);
myNode59.radius.set(0.072);
myNode59.innerRotation.center.set(0,0,0);
myNode59.innerRotation.axis.set(0.0,0.0,0.0);
myNode59.innerRotation.angle.set(0.0);
myNode59.isVisible = false;

/* définition du node n°60*/
const myNode60 = object.addCylinder();
myNode60.point1.set(0,-2.527,-0.43595);
myNode60.point2.set(0,-2.527,18.099950000000003);
myNode60.radius.set(0.136);
myNode60.innerRotation.center.set(0,0,0);
myNode60.innerRotation.axis.set(0.0,0.0,0.0);
myNode60.innerRotation.angle.set(0.0);
myNode60.isVisible = false;

/* définition du node n°61*/
const myNode61 = object.addBox();
myNode61.point1.set(-4.07095,-2.02695,-0.20895);
myNode61.point2.set(-3.9820499999999996,1.2999500000000004,18.09995);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(0.0,0.0,0.0);
myNode61.innerRotation.angle.set(0.0);
myNode61.innerTranslation.vector.set(0,0,0);
myNode61.isVisible = false;

/* définition du node n°62*/
const myNode62 = object.addCylinder();
myNode62.point1.set(-1.191,-3.045,-18.0999);
myNode62.point2.set(-1.191,-3.045,18.099999999999998);
myNode62.radius.set(0.073);
myNode62.innerRotation.center.set(0,0,0);
myNode62.innerRotation.axis.set(0.0,0.0,0.0);
myNode62.innerRotation.angle.set(0.0);
myNode62.isVisible = false;

/* définition du node n°63*/
const myNode63 = object.addCylinder();
myNode63.point1.set(-4.726,-1.982,-18.0999);
myNode63.point2.set(-4.726,-1.982,0.43599999999999994);
myNode63.radius.set(0.273);
myNode63.innerRotation.center.set(0,0,0);
myNode63.innerRotation.axis.set(0.0,0.0,0.0);
myNode63.innerRotation.angle.set(0.0);
myNode63.isVisible = false;

/* définition du node n°64*/
const myNode64 = object.addBox();
myNode64.point1.set(-3.32295,-1.29995,-0.43595);
myNode64.point2.set(3.8239499999999995,1.29995,-0.02705000000000002);
myNode64.innerRotation.center.set(0,0,0);
myNode64.innerRotation.axis.set(0.0,0.0,0.0);
myNode64.innerRotation.angle.set(0.0);
myNode64.innerTranslation.vector.set(0,0,0);
myNode64.isVisible = false;

/* définition du node n°65*/
const myNode65_1 = myNode58.clone();
myNode65_1.isVisible = false;
const myNode65_2 = object.addFuseOperation();
myNode65_2.leftArg.set(myNode65_1);
myNode65_2.rightArg.set(myNode59);
myNode65_2.isVisible = false;
const myNode65_3 = object.addFuseOperation();
myNode65_3.leftArg.set(myNode65_2);
myNode65_3.rightArg.set(myNode60);
myNode65_3.isVisible = false;
const myNode65_4 = object.addFuseOperation();
myNode65_4.leftArg.set(myNode65_3);
myNode65_4.rightArg.set(myNode61);
myNode65_4.isVisible = false;
const myNode65_5 = object.addFuseOperation();
myNode65_5.leftArg.set(myNode65_4);
myNode65_5.rightArg.set(myNode62);
myNode65_5.isVisible = false;
const myNode65_6 = object.addFuseOperation();
myNode65_6.leftArg.set(myNode65_5);
myNode65_6.rightArg.set(myNode63);
myNode65_6.isVisible = false;
myNode65 = object.addFuseOperation();
myNode65.leftArg.set(myNode65_6);
myNode65.rightArg.set(myNode64);
myNode65.isVisible = false;
myNode65.isVisible = false;

/* définition du node n°66*/
const myNode66 = object.addCutOperation();
myNode66.leftArg.set(myNode57);
myNode66.rightArg.set(myNode65);
myNode66.isVisible = false;

/* définition du node n°67*/
const myNode67 = object.addCylinder();
myNode67.point1.set(1.087,3.394,-0.4359);
myNode67.point2.set(1.087,3.394,-0.027100000000000013);
myNode67.radius.set(0.258);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(0.0,0.0,0.0);
myNode67.innerRotation.angle.set(0.0);
myNode67.isVisible = false;

/* définition du node n°68*/
const myNode68 = object.addCylinder();
myNode68.point1.set(4.727,1.98,-0.4359);
myNode68.point2.set(4.727,1.98,0.4369);
myNode68.radius.set(0.271);
myNode68.innerRotation.center.set(0,0,0);
myNode68.innerRotation.axis.set(0.0,0.0,0.0);
myNode68.innerRotation.angle.set(0.0);
myNode68.isVisible = false;

/* définition du node n°69*/
const myNode69 = object.addBox();
myNode69.point1.set(1.3731,2.0271,-0.4359);
myNode69.point2.set(4.4549,2.4358999999999997,-0.027100000000000013);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(0.0,0.0,0.0);
myNode69.innerRotation.angle.set(0.0);
myNode69.innerTranslation.vector.set(0,0,0);
myNode69.isVisible = false;

/* définition du node n°70*/
const myNode70 = object.addFuseOperation();
myNode70.leftArg.set(myNode68);
myNode70.rightArg.set(myNode69);
myNode70.isVisible = false;

/* définition du node n°71*/
const myNode71 = object.addCylinder();
myNode71.point1.set(4.345,2.52,-18.0999);
myNode71.point2.set(4.345,2.52,18.099999999999998);
myNode71.radius.set(0.263);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(0.0,0.0,0.0);
myNode71.innerRotation.angle.set(0.0);
myNode71.isVisible = false;

/* définition du node n°72*/
const myNode72 = object.addFuseOperation();
myNode72.leftArg.set(myNode32);
myNode72.rightArg.set(myNode71);
myNode72.isVisible = false;

/* définition du node n°73*/
const myNode73 = object.addCutOperation();
myNode73.leftArg.set(myNode70);
myNode73.rightArg.set(myNode72);
myNode73.isVisible = false;

/* définition du node n°74*/
const myNode74 = object.addBox();
myNode74.point1.set(4.0721,-2.2549,-0.4359);
myNode74.point2.set(4.7279,-1.7101000000000002,0.4369);
myNode74.innerRotation.center.set(0,0,0);
myNode74.innerRotation.axis.set(0.0,0.0,0.0);
myNode74.innerRotation.angle.set(0.0);
myNode74.innerTranslation.vector.set(0,0,0);
myNode74.isVisible = false;

/* définition du node n°75*/
const myNode75 = object.addBox();
myNode75.point1.set(1.3731,-2.4359,-0.4359);
myNode75.point2.set(4.071899999999999,-2.0271000000000003,0.4369);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(0.0,0.0,0.0);
myNode75.innerRotation.angle.set(0.0);
myNode75.innerTranslation.vector.set(0,0,0);
myNode75.isVisible = false;

/* définition du node n°76*/
const myNode76 = object.addFuseOperation();
myNode76.leftArg.set(myNode74);
myNode76.rightArg.set(myNode75);
myNode76.isVisible = false;

/* définition du node n°77*/
const myNode77 = object.addBox();
myNode77.point1.set(-18.0999,-2.43595,-0.02695);
myNode77.point2.set(4.726999999999997,-2.25405,0.43694999999999995);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(0.0,0.0,0.0);
myNode77.innerRotation.angle.set(0.0);
myNode77.innerTranslation.vector.set(0,0,0);
myNode77.isVisible = false;

/* définition du node n°78*/
const myNode78 = object.addCylinder();
myNode78.point1.set(4.727,-1.982,-18.0999);
myNode78.point2.set(4.727,-1.982,0.43599999999999994);
myNode78.radius.set(0.272);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(0.0,0.0,0.0);
myNode78.innerRotation.angle.set(0.0);
myNode78.isVisible = false;

/* définition du node n°79*/
const myNode79 = object.addFuseOperation();
myNode79.leftArg.set(myNode77);
myNode79.rightArg.set(myNode78);
myNode79.isVisible = false;

/* définition du node n°80*/
const myNode80 = object.addCutOperation();
myNode80.leftArg.set(myNode76);
myNode80.rightArg.set(myNode79);
myNode80.isVisible = false;

/* définition du node n°81*/
const myNode81 = object.addCylinder();
myNode81.point1.set(0.001,2.525,-0.4359);
myNode81.point2.set(0.001,2.525,0.4369);
myNode81.radius.set(0.275);
myNode81.innerRotation.center.set(0,0,0);
myNode81.innerRotation.axis.set(0.0,0.0,0.0);
myNode81.innerRotation.angle.set(0.0);
myNode81.isVisible = false;

/* définition du node n°82*/
const myNode82 = object.addCylinder();
myNode82.point1.set(0,2.527,-18.0999);
myNode82.point2.set(0,2.527,18.099999999999998);
myNode82.radius.set(0.136);
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
myNode84.point1.set(-3.1179,-2.2549,-0.2089);
myNode84.point2.set(1.3729,-2.0281000000000002,0.43590000000000007);
myNode84.innerRotation.center.set(0,0,0);
myNode84.innerRotation.axis.set(0.0,0.0,0.0);
myNode84.innerRotation.angle.set(0.0);
myNode84.innerTranslation.vector.set(0,0,0);
myNode84.isVisible = false;

/* définition du node n°85*/
const myNode85 = object.addBox();
myNode85.point1.set(-4.0709,2.0271,-0.4359);
myNode85.point2.set(-3.5361,3.3939,-0.027100000000000013);
myNode85.innerRotation.center.set(0,0,0);
myNode85.innerRotation.axis.set(0.0,0.0,0.0);
myNode85.innerRotation.angle.set(0.0);
myNode85.innerTranslation.vector.set(0,0,0);
myNode85.isVisible = false;

/* définition du node n°86*/
const myNode86 = object.addCylinder();
myNode86.point1.set(-3.718,3.046,-18.0999);
myNode86.point2.set(-3.718,3.046,-0.027000000000001023);
myNode86.radius.set(0.072);
myNode86.innerRotation.center.set(0,0,0);
myNode86.innerRotation.axis.set(0.0,0.0,0.0);
myNode86.innerRotation.angle.set(0.0);
myNode86.isVisible = false;

/* définition du node n°87*/
const myNode87 = object.addCutOperation();
myNode87.leftArg.set(myNode85);
myNode87.rightArg.set(myNode86);
myNode87.isVisible = false;

/* définition du node n°88*/
const myNode88 = object.addBox();
myNode88.point1.set(-2.8229,2.0271,-0.4359);
myNode88.point2.set(3.3219,2.2539,0.4369);
myNode88.innerRotation.center.set(0,0,0);
myNode88.innerRotation.axis.set(0.0,0.0,0.0);
myNode88.innerRotation.angle.set(0.0);
myNode88.innerTranslation.vector.set(0,0,0);
myNode88.isVisible = false;

/* définition du node n°89*/
const myNode89 = object.addBox();
myNode89.point1.set(1.0871,2.0271,-0.4359);
myNode89.point2.set(1.3729,3.6539,-0.027100000000000013);
myNode89.innerRotation.center.set(0,0,0);
myNode89.innerRotation.axis.set(0.0,0.0,0.0);
myNode89.innerRotation.angle.set(0.0);
myNode89.innerTranslation.vector.set(0,0,0);
myNode89.isVisible = false;

/* définition du node n°90*/
const myNode90 = object.addCylinder();
myNode90.point1.set(1.191,3.046,-0.43595);
myNode90.point2.set(1.191,3.046,18.099950000000003);
myNode90.radius.set(0.072);
myNode90.innerRotation.center.set(0,0,0);
myNode90.innerRotation.axis.set(0.0,0.0,0.0);
myNode90.innerRotation.angle.set(0.0);
myNode90.isVisible = false;

/* définition du node n°91*/
const myNode91 = object.addCutOperation();
myNode91.leftArg.set(myNode89);
myNode91.rightArg.set(myNode90);
myNode91.isVisible = false;

/* définition du node n°92*/
const myNode92 = object.addBox();
myNode92.point1.set(0.5691,-2.4359,-0.4359);
myNode92.point2.set(1.3719000000000001,-2.0271000000000003,-0.027100000000000013);
myNode92.innerRotation.center.set(0,0,0);
myNode92.innerRotation.axis.set(0.0,0.0,0.0);
myNode92.innerRotation.angle.set(0.0);
myNode92.innerTranslation.vector.set(0,0,0);
myNode92.isVisible = false;

/* définition du node n°93*/
const myNode93 = object.addCylinder();
myNode93.point1.set(0.573,-2.509,-18.0999);
myNode93.point2.set(0.573,-2.509,-0.027000000000001023);
myNode93.radius.set(0.25);
myNode93.innerRotation.center.set(0,0,0);
myNode93.innerRotation.axis.set(0.0,0.0,0.0);
myNode93.innerRotation.angle.set(0.0);
myNode93.isVisible = false;

/* définition du node n°94*/
const myNode94 = object.addCutOperation();
myNode94.leftArg.set(myNode92);
myNode94.rightArg.set(myNode93);
myNode94.isVisible = false;

/* définition du node n°95*/
const myNode95 = object.addBox();
myNode95.point1.set(-1.3729,-3.6549,-0.4359);
myNode95.point2.set(-1.0931,-3.3971,-0.027100000000000013);
myNode95.innerRotation.center.set(0,0,0);
myNode95.innerRotation.axis.set(0.0,0.0,0.0);
myNode95.innerRotation.angle.set(0.0);
myNode95.innerTranslation.vector.set(0,0,0);
myNode95.isVisible = false;

/* définition du node n°96*/
const myNode96 = object.addBox();
myNode96.point1.set(-3.6859,3.3841,-0.4359);
myNode96.point2.set(-0.8271000000000002,3.6449000000000003,-0.027100000000000013);
myNode96.innerRotation.center.set(0,0,0);
myNode96.innerRotation.axis.set(0.0,0.0,0.0);
myNode96.innerRotation.angle.set(0.0);
myNode96.innerTranslation.vector.set(0,0,0);
myNode96.isVisible = false;

/* définition du node n°97*/
const myNode97 = object.addBox();
myNode97.point1.set(0.5691,2.0271,-0.4359);
myNode97.point2.set(1.0859,3.3939,-0.027100000000000013);
myNode97.innerRotation.center.set(0,0,0);
myNode97.innerRotation.axis.set(0.0,0.0,0.0);
myNode97.innerRotation.angle.set(0.0);
myNode97.innerTranslation.vector.set(0,0,0);
myNode97.isVisible = false;

/* définition du node n°98*/
const myNode98 = object.addFuseOperation();
myNode98.leftArg.set(myNode96);
myNode98.rightArg.set(myNode97);
myNode98.isVisible = false;

/* définition du node n°99*/
const myNode99 = object.addCylinder();
myNode99.point1.set(0.569,2.513,-18.0999);
myNode99.point2.set(0.569,2.513,0.43599999999999994);
myNode99.radius.set(0.255);
myNode99.innerRotation.center.set(0,0,0);
myNode99.innerRotation.axis.set(0.0,0.0,0.0);
myNode99.innerRotation.angle.set(0.0);
myNode99.isVisible = false;

/* définition du node n°100*/
const myNode100 = object.addCutOperation();
myNode100.leftArg.set(myNode98);
myNode100.rightArg.set(myNode99);
myNode100.isVisible = false;

/* définition du node n°101*/
const myNode101 = object.addBox();
myNode101.point1.set(-3.53595,2.25505,-0.43595);
myNode101.point2.set(-1.3720500000000002,3.6549500000000004,0.43695);
myNode101.innerRotation.center.set(0,0,0);
myNode101.innerRotation.axis.set(0.0,0.0,0.0);
myNode101.innerRotation.angle.set(0.0);
myNode101.innerTranslation.vector.set(0,0,0);
myNode101.isVisible = false;

/* définition du node n°102*/
const myNode102 = object.addBox();
myNode102.point1.set(-1.09295,2.43605,-0.43595);
myNode102.point2.set(0.82595,3.65395,0.43695);
myNode102.innerRotation.center.set(0,0,0);
myNode102.innerRotation.axis.set(0.0,0.0,0.0);
myNode102.innerRotation.angle.set(0.0);
myNode102.innerTranslation.vector.set(0,0,0);
myNode102.isVisible = false;

/* définition du node n°103*/
const myNode103 = object.addFuseOperation();
myNode103.leftArg.set(myNode101);
myNode103.rightArg.set(myNode102);
myNode103.isVisible = false;

/* définition du node n°104*/
const myNode104 = object.addCylinder();
myNode104.point1.set(-1.092,3.391,-0.436);
myNode104.point2.set(-1.092,3.391,18.1);
myNode104.radius.set(0.263);
myNode104.innerRotation.center.set(0,0,0);
myNode104.innerRotation.axis.set(0.0,0.0,0.0);
myNode104.innerRotation.angle.set(0.0);
myNode104.isVisible = false;

/* définition du node n°105*/
const myNode105 = object.addCutOperation();
myNode105.leftArg.set(myNode103);
myNode105.rightArg.set(myNode104);
myNode105.isVisible = false;

/* définition du node n°106*/
const myNode106 = object.addCutOperation();
myNode106.leftArg.set(myNode100);
myNode106.rightArg.set(myNode105);
myNode106.isVisible = false;

/* définition du node n°107*/
const myNode107 = object.addBox();
myNode107.point1.set(-1.3729,2.0271,-0.4359);
myNode107.point2.set(-0.8281000000000001,3.3939,-0.027100000000000013);
myNode107.innerRotation.center.set(0,0,0);
myNode107.innerRotation.axis.set(0.0,0.0,0.0);
myNode107.innerRotation.angle.set(0.0);
myNode107.innerTranslation.vector.set(0,0,0);
myNode107.isVisible = false;

/* définition du node n°108*/
const myNode108 = object.addCylinder();
myNode108.point1.set(-1.191,3.045,-18.0999);
myNode108.point2.set(-1.191,3.045,0.43599999999999994);
myNode108.radius.set(0.072);
myNode108.innerRotation.center.set(0,0,0);
myNode108.innerRotation.axis.set(0.0,0.0,0.0);
myNode108.innerRotation.angle.set(0.0);
myNode108.isVisible = false;

/* définition du node n°109*/
const myNode109 = object.addCutOperation();
myNode109.leftArg.set(myNode107);
myNode109.rightArg.set(myNode108);
myNode109.isVisible = false;

/* définition du node n°110*/
const myNode110 = object.addCylinder();
myNode110.point1.set(-3.818,-3.393,-0.4359);
myNode110.point2.set(-3.818,-3.393,-0.027100000000000013);
myNode110.radius.set(0.261);
myNode110.innerRotation.center.set(0,0,0);
myNode110.innerRotation.axis.set(0.0,0.0,0.0);
myNode110.innerRotation.angle.set(0.0);
myNode110.isVisible = false;

/* définition du node n°111*/
const myNode111 = object.addCylinder();
myNode111.point1.set(-4.726,-1.982,-0.4359);
myNode111.point2.set(-4.726,-1.982,0.4369);
myNode111.radius.set(0.273);
myNode111.innerRotation.center.set(0,0,0);
myNode111.innerRotation.axis.set(0.0,0.0,0.0);
myNode111.innerRotation.angle.set(0.0);
myNode111.isVisible = false;

/* définition du node n°112*/
const myNode112 = object.addBox();
myNode112.point1.set(-4.0709,-3.3969,-0.4359);
myNode112.point2.set(-0.5670999999999999,-2.0281000000000002,-0.027100000000000013);
myNode112.innerRotation.center.set(0,0,0);
myNode112.innerRotation.axis.set(0.0,0.0,0.0);
myNode112.innerRotation.angle.set(0.0);
myNode112.innerTranslation.vector.set(0,0,0);
myNode112.isVisible = false;

/* définition du node n°113*/
const myNode113_1 = myNode110.clone();
myNode113_1.isVisible = false;
const myNode113_2 = object.addFuseOperation();
myNode113_2.leftArg.set(myNode113_1);
myNode113_2.rightArg.set(myNode111);
myNode113_2.isVisible = false;
myNode113 = object.addFuseOperation();
myNode113.leftArg.set(myNode113_2);
myNode113.rightArg.set(myNode112);
myNode113.isVisible = false;
myNode113.isVisible = false;

/* définition du node n°114*/
const myNode114 = object.addBox();
myNode114.point1.set(-3.53595,-3.39695,-0.43595);
myNode114.point2.set(-0.56705,-2.43705,18.099950000000003);
myNode114.innerRotation.center.set(0,0,0);
myNode114.innerRotation.axis.set(0.0,0.0,0.0);
myNode114.innerRotation.angle.set(0.0);
myNode114.innerTranslation.vector.set(0,0,0);
myNode114.isVisible = false;

/* définition du node n°115*/
const myNode115 = object.addCylinder();
myNode115.point1.set(-0.564,-2.519,-0.43595);
myNode115.point2.set(-0.564,-2.519,18.099950000000003);
myNode115.radius.set(0.263);
myNode115.innerRotation.center.set(0,0,0);
myNode115.innerRotation.axis.set(0.0,0.0,0.0);
myNode115.innerRotation.angle.set(0.0);
myNode115.isVisible = false;

/* définition du node n°116*/
const myNode116 = object.addCylinder();
myNode116.point1.set(-4.726,-1.981,-0.43595);
myNode116.point2.set(-4.726,-1.981,18.099950000000003);
myNode116.radius.set(0.135);
myNode116.innerRotation.center.set(0,0,0);
myNode116.innerRotation.axis.set(0.0,0.0,0.0);
myNode116.innerRotation.angle.set(0.0);
myNode116.isVisible = false;

/* définition du node n°117*/
const myNode117 = object.addCylinder();
myNode117.point1.set(-3.719,-3.046,-0.43595);
myNode117.point2.set(-3.719,-3.046,18.099950000000003);
myNode117.radius.set(0.073);
myNode117.innerRotation.center.set(0,0,0);
myNode117.innerRotation.axis.set(0.0,0.0,0.0);
myNode117.innerRotation.angle.set(0.0);
myNode117.isVisible = false;

/* définition du node n°118*/
const myNode118_1 = myNode114.clone();
myNode118_1.isVisible = false;
const myNode118_2 = object.addFuseOperation();
myNode118_2.leftArg.set(myNode118_1);
myNode118_2.rightArg.set(myNode115);
myNode118_2.isVisible = false;
const myNode118_3 = object.addFuseOperation();
myNode118_3.leftArg.set(myNode118_2);
myNode118_3.rightArg.set(myNode116);
myNode118_3.isVisible = false;
myNode118 = object.addFuseOperation();
myNode118.leftArg.set(myNode118_3);
myNode118.rightArg.set(myNode117);
myNode118.isVisible = false;
myNode118.isVisible = false;

/* définition du node n°119*/
const myNode119 = object.addCutOperation();
myNode119.leftArg.set(myNode113);
myNode119.rightArg.set(myNode118);
myNode119.isVisible = false;

/* définition du node n°120*/
const myNode120 = object.addBox();
myNode120.point1.set(-0.2729,2.0271,-0.4359);
myNode120.point2.set(0.2719,2.4358999999999997,0.4369);
myNode120.innerRotation.center.set(0,0,0);
myNode120.innerRotation.axis.set(0.0,0.0,0.0);
myNode120.innerRotation.angle.set(0.0);
myNode120.innerTranslation.vector.set(0,0,0);
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
const myNode123_1 = myNode12.clone();
myNode123_1.isVisible = false;
const myNode123_2 = object.addFuseOperation();
myNode123_2.leftArg.set(myNode123_1);
myNode123_2.rightArg.set(myNode13);
myNode123_2.isVisible = false;
const myNode123_3 = object.addFuseOperation();
myNode123_3.leftArg.set(myNode123_2);
myNode123_3.rightArg.set(myNode14);
myNode123_3.isVisible = false;
const myNode123_4 = object.addFuseOperation();
myNode123_4.leftArg.set(myNode123_3);
myNode123_4.rightArg.set(myNode17);
myNode123_4.isVisible = false;
const myNode123_5 = object.addFuseOperation();
myNode123_5.leftArg.set(myNode123_4);
myNode123_5.rightArg.set(myNode20);
myNode123_5.isVisible = false;
const myNode123_6 = object.addFuseOperation();
myNode123_6.leftArg.set(myNode123_5);
myNode123_6.rightArg.set(myNode21);
myNode123_6.isVisible = false;
const myNode123_7 = object.addFuseOperation();
myNode123_7.leftArg.set(myNode123_6);
myNode123_7.rightArg.set(myNode26);
myNode123_7.isVisible = false;
const myNode123_8 = object.addFuseOperation();
myNode123_8.leftArg.set(myNode123_7);
myNode123_8.rightArg.set(myNode34);
myNode123_8.isVisible = false;
const myNode123_9 = object.addFuseOperation();
myNode123_9.leftArg.set(myNode123_8);
myNode123_9.rightArg.set(myNode35);
myNode123_9.isVisible = false;
const myNode123_10 = object.addFuseOperation();
myNode123_10.leftArg.set(myNode123_9);
myNode123_10.rightArg.set(myNode36);
myNode123_10.isVisible = false;
const myNode123_11 = object.addFuseOperation();
myNode123_11.leftArg.set(myNode123_10);
myNode123_11.rightArg.set(myNode46);
myNode123_11.isVisible = false;
const myNode123_12 = object.addFuseOperation();
myNode123_12.leftArg.set(myNode123_11);
myNode123_12.rightArg.set(myNode47);
myNode123_12.isVisible = false;
const myNode123_13 = object.addFuseOperation();
myNode123_13.leftArg.set(myNode123_12);
myNode123_13.rightArg.set(myNode66);
myNode123_13.isVisible = false;
const myNode123_14 = object.addFuseOperation();
myNode123_14.leftArg.set(myNode123_13);
myNode123_14.rightArg.set(myNode67);
myNode123_14.isVisible = false;
const myNode123_15 = object.addFuseOperation();
myNode123_15.leftArg.set(myNode123_14);
myNode123_15.rightArg.set(myNode73);
myNode123_15.isVisible = false;
const myNode123_16 = object.addFuseOperation();
myNode123_16.leftArg.set(myNode123_15);
myNode123_16.rightArg.set(myNode80);
myNode123_16.isVisible = false;
const myNode123_17 = object.addFuseOperation();
myNode123_17.leftArg.set(myNode123_16);
myNode123_17.rightArg.set(myNode83);
myNode123_17.isVisible = false;
const myNode123_18 = object.addFuseOperation();
myNode123_18.leftArg.set(myNode123_17);
myNode123_18.rightArg.set(myNode84);
myNode123_18.isVisible = false;
const myNode123_19 = object.addFuseOperation();
myNode123_19.leftArg.set(myNode123_18);
myNode123_19.rightArg.set(myNode87);
myNode123_19.isVisible = false;
const myNode123_20 = object.addFuseOperation();
myNode123_20.leftArg.set(myNode123_19);
myNode123_20.rightArg.set(myNode88);
myNode123_20.isVisible = false;
const myNode123_21 = object.addFuseOperation();
myNode123_21.leftArg.set(myNode123_20);
myNode123_21.rightArg.set(myNode91);
myNode123_21.isVisible = false;
const myNode123_22 = object.addFuseOperation();
myNode123_22.leftArg.set(myNode123_21);
myNode123_22.rightArg.set(myNode94);
myNode123_22.isVisible = false;
const myNode123_23 = object.addFuseOperation();
myNode123_23.leftArg.set(myNode123_22);
myNode123_23.rightArg.set(myNode95);
myNode123_23.isVisible = false;
const myNode123_24 = object.addFuseOperation();
myNode123_24.leftArg.set(myNode123_23);
myNode123_24.rightArg.set(myNode106);
myNode123_24.isVisible = false;
const myNode123_25 = object.addFuseOperation();
myNode123_25.leftArg.set(myNode123_24);
myNode123_25.rightArg.set(myNode109);
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
myNode124.innerTranslation.vector.set(0,0,0);
myNode124.isVisible = false;

/* définition du node n°125*/
const myNode125 = object.addCommonOperation();
myNode125.leftArg.set(myNode123);
myNode125.rightArg.set(myNode124);
myNode125.isVisible = true;


/*END Geometry Object Definition*/