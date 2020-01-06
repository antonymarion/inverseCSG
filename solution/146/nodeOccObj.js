/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.9999,-4.3849,-0.5239);
myNode0.point2.set(5.9999,4.3858999999999995,0.5228999999999999);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.isVisible = False

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(4.727,-1.982,-0.4359);
myNode1.point2.set(4.727,-1.982,0.4369);
myNode1.radius.set(0.272);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.isVisible = False

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(1.3731,1.7081,-0.4359);
myNode2.point2.set(4.7279,2.2539,0.4369);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.isVisible = False

/* définition du node n°3*/
const myNode3 = object.addFuseOperation();
myNode3.leftArg.set(myNode1);
myNode3.rightArg.set(myNode2);
myNode3.isVisible = False

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(4.727,-1.982,-0.43595);
myNode4.point2.set(4.727,-1.982,18.099950000000003);
myNode4.radius.set(0.136);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.isVisible = False

/* définition du node n°5*/
const myNode5 = object.addBox();
myNode5.point1.set(-18.0999,-3.39695,-0.20895);
myNode5.point2.set(4.071999999999999,2.02695,0.43595000000000006);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.isVisible = False

/* définition du node n°6*/
const myNode6 = object.addCylinder();
myNode6.point1.set(4.727,1.982,-18.0999);
myNode6.point2.set(4.727,1.982,18.099999999999998);
myNode6.radius.set(0.136);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.isVisible = False

/* définition du node n°7*/
const myNode7_1 = object.addFuseOperation();
myNode7_1.leftArg.set(myNode4);
myNode7_1.rightArg.set(myNode4);
const myNode7_2 = object.addFuseOperation();
myNode7_2.leftArg.set(myNode7_1);
myNode7_2.rightArg.set(myNode5);
myNode7 = object.addFuseOperation();
myNode7.leftArg.set(myNode7_2);
myNode7.rightArg.set(myNode6);
myNode7.isVisible = False

/* définition du node n°8*/
const myNode8 = object.addCutOperation();
myNode8.leftArg.set(myNode3);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = False

/* définition du node n°9*/
const myNode9 = object.addCylinder();
myNode9.point1.set(3.824,-3.397,-0.4359);
myNode9.point2.set(3.824,-3.397,-0.027100000000000013);
myNode9.radius.set(0.255);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.isVisible = False

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(3.5361,2.0271,-0.4359);
myNode10.point2.set(4.0709,3.3939,-0.027100000000000013);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.isVisible = False

/* définition du node n°11*/
const myNode11 = object.addBox();
myNode11.point1.set(4.0721,-2.4359,-0.4359);
myNode11.point2.set(4.454899999999999,1.7088999999999999,0.4369);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);
myNode11.isVisible = False

/* définition du node n°12*/
const myNode12 = object.addBox();
myNode12.point1.set(3.8241,-3.3969,-0.4359);
myNode12.point2.set(4.0719,-2.0281000000000002,-0.027100000000000013);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);
myNode12.isVisible = False

/* définition du node n°13*/
const myNode13_1 = object.addFuseOperation();
myNode13_1.leftArg.set(myNode9);
myNode13_1.rightArg.set(myNode9);
const myNode13_2 = object.addFuseOperation();
myNode13_2.leftArg.set(myNode13_1);
myNode13_2.rightArg.set(myNode10);
const myNode13_3 = object.addFuseOperation();
myNode13_3.leftArg.set(myNode13_2);
myNode13_3.rightArg.set(myNode11);
myNode13 = object.addFuseOperation();
myNode13.leftArg.set(myNode13_3);
myNode13.rightArg.set(myNode12);
myNode13.isVisible = False

/* définition du node n°14*/
const myNode14 = object.addBox();
myNode14.point1.set(3.53605,-2.43595,-0.02695);
myNode14.point2.set(18.09995,-1.70905,18.09995);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);
myNode14.isVisible = False

/* définition du node n°15*/
const myNode15 = object.addCylinder();
myNode15.point1.set(4.342,-2.514,-18.0999);
myNode15.point2.set(4.342,-2.514,0.43599999999999994);
myNode15.radius.set(0.257);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);
myNode15.isVisible = False

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(3.719,3.046,-18.0999);
myNode16.point2.set(3.719,3.046,18.099999999999998);
myNode16.radius.set(0.072);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);
myNode16.isVisible = False

/* définition du node n°17*/
const myNode17_1 = object.addFuseOperation();
myNode17_1.leftArg.set(myNode14);
myNode17_1.rightArg.set(myNode14);
const myNode17_2 = object.addFuseOperation();
myNode17_2.leftArg.set(myNode17_1);
myNode17_2.rightArg.set(myNode15);
myNode17 = object.addFuseOperation();
myNode17.leftArg.set(myNode17_2);
myNode17.rightArg.set(myNode16);
myNode17.isVisible = False

/* définition du node n°18*/
const myNode18 = object.addCutOperation();
myNode18.leftArg.set(myNode13);
myNode18.rightArg.set(myNode17);
myNode18.isVisible = False

/* définition du node n°19*/
const myNode19 = object.addBox();
myNode19.point1.set(-0.2729,2.0271,-0.4359);
myNode19.point2.set(0.2719,2.4358999999999997,0.4369);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(0.0,0.0,0.0);
myNode19.innerRotation.angle.set(0.0);
myNode19.isVisible = False

/* définition du node n°20*/
const myNode20 = object.addCylinder();
myNode20.point1.set(0,2.527,-0.20895);
myNode20.point2.set(0,2.527,18.09995);
myNode20.radius.set(0.136);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);
myNode20.isVisible = False

/* définition du node n°21*/
const myNode21 = object.addCutOperation();
myNode21.leftArg.set(myNode19);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = False

/* définition du node n°22*/
const myNode22 = object.addCylinder();
myNode22.point1.set(1.088,-3.394,-0.4359);
myNode22.point2.set(1.088,-3.394,-0.027100000000000013);
myNode22.radius.set(0.259);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(0.0,0.0,0.0);
myNode22.innerRotation.angle.set(0.0);
myNode22.isVisible = False

/* définition du node n°23*/
const myNode23 = object.addCylinder();
myNode23.point1.set(3.819,3.392,-0.4359);
myNode23.point2.set(3.819,3.392,-0.027100000000000013);
myNode23.radius.set(0.261);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);
myNode23.isVisible = False

/* définition du node n°24*/
const myNode24 = object.addBox();
myNode24.point1.set(-3.6859,-3.6549,-0.4359);
myNode24.point2.set(-3.5361000000000002,-3.3971,-0.027100000000000013);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);
myNode24.isVisible = False

/* définition du node n°25*/
const myNode25 = object.addBox();
myNode25.point1.set(-4.7259,-18.0999,-0.4359);
myNode25.point2.set(-4.0721,2.253899999999998,0.4369);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(0.0,0.0,0.0);
myNode25.innerRotation.angle.set(0.0);
myNode25.isVisible = False

/* définition du node n°26*/
const myNode26 = object.addBox();
myNode26.point1.set(-3.6859,2.0271,-0.4359);
myNode26.point2.set(-0.5671000000000004,2.4358999999999997,0.02789999999999998);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);
myNode26.isVisible = False

/* définition du node n°27*/
const myNode27 = object.addCylinder();
myNode27.point1.set(-3.819,3.39,-0.4359);
myNode27.point2.set(-3.819,3.39,-0.027100000000000013);
myNode27.radius.set(0.262);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);
myNode27.isVisible = False

/* définition du node n°28*/
const myNode28 = object.addCylinder();
myNode28.point1.set(-4.727,1.981,-0.4359);
myNode28.point2.set(-4.727,1.981,18.099899999999998);
myNode28.radius.set(0.272);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(0.0,0.0,0.0);
myNode28.innerRotation.angle.set(0.0);
myNode28.isVisible = False

/* définition du node n°29*/
const myNode29_1 = object.addFuseOperation();
myNode29_1.leftArg.set(myNode25);
myNode29_1.rightArg.set(myNode25);
const myNode29_2 = object.addFuseOperation();
myNode29_2.leftArg.set(myNode29_1);
myNode29_2.rightArg.set(myNode26);
const myNode29_3 = object.addFuseOperation();
myNode29_3.leftArg.set(myNode29_2);
myNode29_3.rightArg.set(myNode27);
myNode29 = object.addFuseOperation();
myNode29.leftArg.set(myNode29_3);
myNode29.rightArg.set(myNode28);
myNode29.isVisible = False

/* définition du node n°30*/
const myNode30 = object.addBox();
myNode30.point1.set(-18.0999,1.3001,-18.0999);
myNode30.point2.set(1.3728999999999978,18.0999,0.4358999999999966);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);
myNode30.isVisible = False

/* définition du node n°31*/
const myNode31 = object.addBox();
myNode31.point1.set(-18.0999,1.30005,-0.43595);
myNode31.point2.set(-4.454000000000002,1.7079499999999999,18.099950000000003);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(0.0,0.0,0.0);
myNode31.innerRotation.angle.set(0.0);
myNode31.isVisible = False

/* définition du node n°32*/
const myNode32 = object.addCutOperation();
myNode32.leftArg.set(myNode30);
myNode32.rightArg.set(myNode31);
myNode32.isVisible = False

/* définition du node n°33*/
const myNode33 = object.addCylinder();
myNode33.point1.set(-0.568,2.513,-18.0999);
myNode33.point2.set(-0.568,2.513,18.099999999999998);
myNode33.radius.set(0.256);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);
myNode33.isVisible = False

/* définition du node n°34*/
const myNode34 = object.addCylinder();
myNode34.point1.set(-4.727,1.982,-18.0999);
myNode34.point2.set(-4.727,1.982,18.099999999999998);
myNode34.radius.set(0.136);
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
const myNode36 = object.addCutOperation();
myNode36.leftArg.set(myNode32);
myNode36.rightArg.set(myNode35);
myNode36.isVisible = False

/* définition du node n°37*/
const myNode37 = object.addCommonOperation();
myNode37.leftArg.set(myNode29);
myNode37.rightArg.set(myNode36);
myNode37.isVisible = False

/* définition du node n°38*/
const myNode38 = object.addBox();
myNode38.point1.set(0.5691,-2.4359,-0.4359);
myNode38.point2.set(1.3719000000000001,-2.0271000000000003,-0.027100000000000013);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(0.0,0.0,0.0);
myNode38.innerRotation.angle.set(0.0);
myNode38.isVisible = False

/* définition du node n°39*/
const myNode39 = object.addCylinder();
myNode39.point1.set(0.573,-2.509,-18.0999);
myNode39.point2.set(0.573,-2.509,-0.027000000000001023);
myNode39.radius.set(0.25);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(0.0,0.0,0.0);
myNode39.innerRotation.angle.set(0.0);
myNode39.isVisible = False

/* définition du node n°40*/
const myNode40 = object.addCutOperation();
myNode40.leftArg.set(myNode38);
myNode40.rightArg.set(myNode39);
myNode40.isVisible = False

/* définition du node n°41*/
const myNode41 = object.addBox();
myNode41.point1.set(3.3231,-2.4359,-0.4359);
myNode41.point2.set(4.0719,2.0279,-0.2091);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,0.0,0.0);
myNode41.innerRotation.angle.set(0.0);
myNode41.isVisible = False

/* définition du node n°42*/
const myNode42 = object.addCylinder();
myNode42.point1.set(-4.726,-1.982,-0.4359);
myNode42.point2.set(-4.726,-1.982,0.4369);
myNode42.radius.set(0.273);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0,0.0,0.0);
myNode42.innerRotation.angle.set(0.0);
myNode42.isVisible = False

/* définition du node n°43*/
const myNode43 = object.addCylinder();
myNode43.point1.set(-3.818,-3.393,-0.4359);
myNode43.point2.set(-3.818,-3.393,-0.027100000000000013);
myNode43.radius.set(0.261);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(0.0,0.0,0.0);
myNode43.innerRotation.angle.set(0.0);
myNode43.isVisible = False

/* définition du node n°44*/
const myNode44 = object.addBox();
myNode44.point1.set(-4.0709,-3.3969,-0.4359);
myNode44.point2.set(-0.5670999999999999,-2.0281000000000002,-0.027100000000000013);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(0.0,0.0,0.0);
myNode44.innerRotation.angle.set(0.0);
myNode44.isVisible = False

/* définition du node n°45*/
const myNode45_1 = object.addFuseOperation();
myNode45_1.leftArg.set(myNode42);
myNode45_1.rightArg.set(myNode42);
const myNode45_2 = object.addFuseOperation();
myNode45_2.leftArg.set(myNode45_1);
myNode45_2.rightArg.set(myNode43);
myNode45 = object.addFuseOperation();
myNode45.leftArg.set(myNode45_2);
myNode45.rightArg.set(myNode44);
myNode45.isVisible = False

/* définition du node n°46*/
const myNode46 = object.addCylinder();
myNode46.point1.set(-0.564,-2.519,-0.43595);
myNode46.point2.set(-0.564,-2.519,18.099950000000003);
myNode46.radius.set(0.263);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(0.0,0.0,0.0);
myNode46.innerRotation.angle.set(0.0);
myNode46.isVisible = False

/* définition du node n°47*/
const myNode47 = object.addBox();
myNode47.point1.set(-3.53595,-3.39695,-0.43595);
myNode47.point2.set(-0.56705,-2.43705,18.099950000000003);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(0.0,0.0,0.0);
myNode47.innerRotation.angle.set(0.0);
myNode47.isVisible = False

/* définition du node n°48*/
const myNode48 = object.addCylinder();
myNode48.point1.set(-4.726,-1.981,-0.43595);
myNode48.point2.set(-4.726,-1.981,18.099950000000003);
myNode48.radius.set(0.135);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);
myNode48.isVisible = False

/* définition du node n°49*/
const myNode49 = object.addCylinder();
myNode49.point1.set(-3.719,-3.046,-0.43595);
myNode49.point2.set(-3.719,-3.046,18.099950000000003);
myNode49.radius.set(0.073);
myNode49.innerRotation.center.set(0,0,0);
myNode49.innerRotation.axis.set(0.0,0.0,0.0);
myNode49.innerRotation.angle.set(0.0);
myNode49.isVisible = False

/* définition du node n°50*/
const myNode50_1 = object.addFuseOperation();
myNode50_1.leftArg.set(myNode46);
myNode50_1.rightArg.set(myNode46);
const myNode50_2 = object.addFuseOperation();
myNode50_2.leftArg.set(myNode50_1);
myNode50_2.rightArg.set(myNode47);
const myNode50_3 = object.addFuseOperation();
myNode50_3.leftArg.set(myNode50_2);
myNode50_3.rightArg.set(myNode48);
myNode50 = object.addFuseOperation();
myNode50.leftArg.set(myNode50_3);
myNode50.rightArg.set(myNode49);
myNode50.isVisible = False

/* définition du node n°51*/
const myNode51 = object.addCutOperation();
myNode51.leftArg.set(myNode45);
myNode51.rightArg.set(myNode50);
myNode51.isVisible = False

/* définition du node n°52*/
const myNode52 = object.addBox();
myNode52.point1.set(-1.3729,-3.6549,-0.4359);
myNode52.point2.set(-1.0931,-3.3971,-0.027100000000000013);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,0.0,0.0);
myNode52.innerRotation.angle.set(0.0);
myNode52.isVisible = False

/* définition du node n°53*/
const myNode53 = object.addBox();
myNode53.point1.set(-4.4549,2.0271,-0.0269);
myNode53.point2.set(-3.6871,2.2539,0.4369);
myNode53.innerRotation.center.set(0,0,0);
myNode53.innerRotation.axis.set(0.0,0.0,0.0);
myNode53.innerRotation.angle.set(0.0);
myNode53.isVisible = False

/* définition du node n°54*/
const myNode54 = object.addBox();
myNode54.point1.set(-4.4549,1.3001,-0.4359);
myNode54.point2.set(3.3218999999999994,2.0269,-0.2091);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(0.0,0.0,0.0);
myNode54.innerRotation.angle.set(0.0);
myNode54.isVisible = False

/* définition du node n°55*/
const myNode55 = object.addBox();
myNode55.point1.set(3.5361,-3.6549,-0.4359);
myNode55.point2.set(3.8238999999999996,3.6538999999999997,-0.027100000000000013);
myNode55.innerRotation.center.set(0,0,0);
myNode55.innerRotation.axis.set(0.0,0.0,0.0);
myNode55.innerRotation.angle.set(0.0);
myNode55.isVisible = False

/* définition du node n°56*/
const myNode56 = object.addBox();
myNode56.point1.set(3.53605,-2.02695,-18.0999);
myNode56.point2.set(3.82395,3.39395,18.099999999999998);
myNode56.innerRotation.center.set(0,0,0);
myNode56.innerRotation.axis.set(0.0,0.0,0.0);
myNode56.innerRotation.angle.set(0.0);
myNode56.isVisible = False

/* définition du node n°57*/
const myNode57 = object.addCylinder();
myNode57.point1.set(3.718,-3.046,-0.43595);
myNode57.point2.set(3.718,-3.046,18.099950000000003);
myNode57.radius.set(0.072);
myNode57.innerRotation.center.set(0,0,0);
myNode57.innerRotation.axis.set(0.0,0.0,0.0);
myNode57.innerRotation.angle.set(0.0);
myNode57.isVisible = False

/* définition du node n°58*/
const myNode58 = object.addFuseOperation();
myNode58.leftArg.set(myNode56);
myNode58.rightArg.set(myNode57);
myNode58.isVisible = False

/* définition du node n°59*/
const myNode59 = object.addCutOperation();
myNode59.leftArg.set(myNode55);
myNode59.rightArg.set(myNode58);
myNode59.isVisible = False

/* définition du node n°60*/
const myNode60 = object.addBox();
myNode60.point1.set(-4.4549,-2.2549,-0.4359);
myNode60.point2.set(3.822899999999999,1.2999,-0.2091);
myNode60.innerRotation.center.set(0,0,0);
myNode60.innerRotation.axis.set(0.0,0.0,0.0);
myNode60.innerRotation.angle.set(0.0);
myNode60.isVisible = False

/* définition du node n°61*/
const myNode61 = object.addBox();
myNode61.point1.set(-4.7259,-2.2549,-0.4359);
myNode61.point2.set(-3.9821,1.2999,0.4369);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(0.0,0.0,0.0);
myNode61.innerRotation.angle.set(0.0);
myNode61.isVisible = False

/* définition du node n°62*/
const myNode62 = object.addCylinder();
myNode62.point1.set(-1.093,-3.389,-0.4359);
myNode62.point2.set(-1.093,-3.389,-0.027100000000000013);
myNode62.radius.set(0.265);
myNode62.innerRotation.center.set(0,0,0);
myNode62.innerRotation.axis.set(0.0,0.0,0.0);
myNode62.innerRotation.angle.set(0.0);
myNode62.isVisible = False

/* définition du node n°63*/
const myNode63 = object.addBox();
myNode63.point1.set(1.0871,-3.6549,-0.4359);
myNode63.point2.set(1.3729,-3.3971,-0.027100000000000013);
myNode63.innerRotation.center.set(0,0,0);
myNode63.innerRotation.axis.set(0.0,0.0,0.0);
myNode63.innerRotation.angle.set(0.0);
myNode63.isVisible = False

/* définition du node n°64*/
const myNode64 = object.addBox();
myNode64.point1.set(-1.3729,-3.3969,-0.4359);
myNode64.point2.set(1.3719000000000001,-2.4371,-0.027100000000000013);
myNode64.innerRotation.center.set(0,0,0);
myNode64.innerRotation.axis.set(0.0,0.0,0.0);
myNode64.innerRotation.angle.set(0.0);
myNode64.isVisible = False

/* définition du node n°65*/
const myNode65 = object.addBox();
myNode65.point1.set(-0.82695,-3.39695,-18.0999);
myNode65.point2.set(0.82695,-2.43705,18.099999999999998);
myNode65.innerRotation.center.set(0,0,0);
myNode65.innerRotation.axis.set(0.0,0.0,0.0);
myNode65.innerRotation.angle.set(0.0);
myNode65.isVisible = False

/* définition du node n°66*/
const myNode66 = object.addCutOperation();
myNode66.leftArg.set(myNode64);
myNode66.rightArg.set(myNode65);
myNode66.isVisible = False

/* définition du node n°67*/
const myNode67 = object.addBox();
myNode67.point1.set(-0.2729,-2.4359,-0.4359);
myNode67.point2.set(0.2719,-2.2541,0.4369);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(0.0,0.0,0.0);
myNode67.innerRotation.angle.set(0.0);
myNode67.isVisible = False

/* définition du node n°68*/
const myNode68 = object.addCylinder();
myNode68.point1.set(0,-2.526,-0.4359);
myNode68.point2.set(0,-2.526,0.4369);
myNode68.radius.set(0.271);
myNode68.innerRotation.center.set(0,0,0);
myNode68.innerRotation.axis.set(0.0,0.0,0.0);
myNode68.innerRotation.angle.set(0.0);
myNode68.isVisible = False

/* définition du node n°69*/
const myNode69_1 = object.addFuseOperation();
myNode69_1.leftArg.set(myNode60);
myNode69_1.rightArg.set(myNode60);
const myNode69_2 = object.addFuseOperation();
myNode69_2.leftArg.set(myNode69_1);
myNode69_2.rightArg.set(myNode61);
const myNode69_3 = object.addFuseOperation();
myNode69_3.leftArg.set(myNode69_2);
myNode69_3.rightArg.set(myNode62);
const myNode69_4 = object.addFuseOperation();
myNode69_4.leftArg.set(myNode69_3);
myNode69_4.rightArg.set(myNode63);
const myNode69_5 = object.addFuseOperation();
myNode69_5.leftArg.set(myNode69_4);
myNode69_5.rightArg.set(myNode66);
const myNode69_6 = object.addFuseOperation();
myNode69_6.leftArg.set(myNode69_5);
myNode69_6.rightArg.set(myNode67);
myNode69 = object.addFuseOperation();
myNode69.leftArg.set(myNode69_6);
myNode69.rightArg.set(myNode68);
myNode69.isVisible = False

/* définition du node n°70*/
const myNode70 = object.addCylinder();
myNode70.point1.set(-1.191,-3.045,-18.0999);
myNode70.point2.set(-1.191,-3.045,18.099999999999998);
myNode70.radius.set(0.073);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(0.0,0.0,0.0);
myNode70.innerRotation.angle.set(0.0);
myNode70.isVisible = False

/* définition du node n°71*/
const myNode71 = object.addCylinder();
myNode71.point1.set(0,-2.527,-0.43595);
myNode71.point2.set(0,-2.527,18.099950000000003);
myNode71.radius.set(0.136);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(0.0,0.0,0.0);
myNode71.innerRotation.angle.set(0.0);
myNode71.isVisible = False

/* définition du node n°72*/
const myNode72 = object.addCylinder();
myNode72.point1.set(-4.726,-1.982,-18.0999);
myNode72.point2.set(-4.726,-1.982,0.43599999999999994);
myNode72.radius.set(0.273);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(0.0,0.0,0.0);
myNode72.innerRotation.angle.set(0.0);
myNode72.isVisible = False

/* définition du node n°73*/
const myNode73 = object.addCylinder();
myNode73.point1.set(1.191,-3.045,-18.0999);
myNode73.point2.set(1.191,-3.045,18.099999999999998);
myNode73.radius.set(0.072);
myNode73.innerRotation.center.set(0,0,0);
myNode73.innerRotation.axis.set(0.0,0.0,0.0);
myNode73.innerRotation.angle.set(0.0);
myNode73.isVisible = False

/* définition du node n°74*/
const myNode74 = object.addBox();
myNode74.point1.set(-3.32295,-1.29995,-0.43595);
myNode74.point2.set(3.8239499999999995,1.29995,-0.02705000000000002);
myNode74.innerRotation.center.set(0,0,0);
myNode74.innerRotation.axis.set(0.0,0.0,0.0);
myNode74.innerRotation.angle.set(0.0);
myNode74.isVisible = False

/* définition du node n°75*/
const myNode75 = object.addBox();
myNode75.point1.set(-4.07095,-2.02695,-0.20895);
myNode75.point2.set(-3.9820499999999996,1.2999500000000004,18.09995);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(0.0,0.0,0.0);
myNode75.innerRotation.angle.set(0.0);
myNode75.isVisible = False

/* définition du node n°76*/
const myNode76 = object.addBox();
myNode76.point1.set(-4.72595,-1.70895,-0.43595);
myNode76.point2.set(-4.45505,1.2999500000000002,0.43695);
myNode76.innerRotation.center.set(0,0,0);
myNode76.innerRotation.axis.set(0.0,0.0,0.0);
myNode76.innerRotation.angle.set(0.0);
myNode76.isVisible = False

/* définition du node n°77*/
const myNode77_1 = object.addFuseOperation();
myNode77_1.leftArg.set(myNode70);
myNode77_1.rightArg.set(myNode70);
const myNode77_2 = object.addFuseOperation();
myNode77_2.leftArg.set(myNode77_1);
myNode77_2.rightArg.set(myNode71);
const myNode77_3 = object.addFuseOperation();
myNode77_3.leftArg.set(myNode77_2);
myNode77_3.rightArg.set(myNode72);
const myNode77_4 = object.addFuseOperation();
myNode77_4.leftArg.set(myNode77_3);
myNode77_4.rightArg.set(myNode73);
const myNode77_5 = object.addFuseOperation();
myNode77_5.leftArg.set(myNode77_4);
myNode77_5.rightArg.set(myNode74);
const myNode77_6 = object.addFuseOperation();
myNode77_6.leftArg.set(myNode77_5);
myNode77_6.rightArg.set(myNode75);
myNode77 = object.addFuseOperation();
myNode77.leftArg.set(myNode77_6);
myNode77.rightArg.set(myNode76);
myNode77.isVisible = False

/* définition du node n°78*/
const myNode78 = object.addCutOperation();
myNode78.leftArg.set(myNode69);
myNode78.rightArg.set(myNode77);
myNode78.isVisible = False

/* définition du node n°79*/
const myNode79 = object.addBox();
myNode79.point1.set(-1.3729,2.0271,-0.4359);
myNode79.point2.set(-0.8281000000000001,3.3939,-0.027100000000000013);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(0.0,0.0,0.0);
myNode79.innerRotation.angle.set(0.0);
myNode79.isVisible = False

/* définition du node n°80*/
const myNode80 = object.addCylinder();
myNode80.point1.set(-1.191,3.045,-18.0999);
myNode80.point2.set(-1.191,3.045,0.43599999999999994);
myNode80.radius.set(0.072);
myNode80.innerRotation.center.set(0,0,0);
myNode80.innerRotation.axis.set(0.0,0.0,0.0);
myNode80.innerRotation.angle.set(0.0);
myNode80.isVisible = False

/* définition du node n°81*/
const myNode81 = object.addCutOperation();
myNode81.leftArg.set(myNode79);
myNode81.rightArg.set(myNode80);
myNode81.isVisible = False

/* définition du node n°82*/
const myNode82 = object.addBox();
myNode82.point1.set(-4.0709,2.0271,-0.4359);
myNode82.point2.set(-3.5361,3.3939,-0.027100000000000013);
myNode82.innerRotation.center.set(0,0,0);
myNode82.innerRotation.axis.set(0.0,0.0,0.0);
myNode82.innerRotation.angle.set(0.0);
myNode82.isVisible = False

/* définition du node n°83*/
const myNode83 = object.addCylinder();
myNode83.point1.set(-3.718,3.046,-18.0999);
myNode83.point2.set(-3.718,3.046,-0.027000000000001023);
myNode83.radius.set(0.072);
myNode83.innerRotation.center.set(0,0,0);
myNode83.innerRotation.axis.set(0.0,0.0,0.0);
myNode83.innerRotation.angle.set(0.0);
myNode83.isVisible = False

/* définition du node n°84*/
const myNode84 = object.addCutOperation();
myNode84.leftArg.set(myNode82);
myNode84.rightArg.set(myNode83);
myNode84.isVisible = False

/* définition du node n°85*/
const myNode85 = object.addBox();
myNode85.point1.set(-4.4549,-2.4359,-0.4359);
myNode85.point2.set(-4.072100000000001,1.2998999999999996,-0.027100000000000013);
myNode85.innerRotation.center.set(0,0,0);
myNode85.innerRotation.axis.set(0.0,0.0,0.0);
myNode85.innerRotation.angle.set(0.0);
myNode85.isVisible = False

/* définition du node n°86*/
const myNode86 = object.addCylinder();
myNode86.point1.set(-4.341,-2.514,-18.0999);
myNode86.point2.set(-4.341,-2.514,18.099999999999998);
myNode86.radius.set(0.257);
myNode86.innerRotation.center.set(0,0,0);
myNode86.innerRotation.axis.set(0.0,0.0,0.0);
myNode86.innerRotation.angle.set(0.0);
myNode86.isVisible = False

/* définition du node n°87*/
const myNode87 = object.addCutOperation();
myNode87.leftArg.set(myNode85);
myNode87.rightArg.set(myNode86);
myNode87.isVisible = False

/* définition du node n°88*/
const myNode88 = object.addBox();
myNode88.point1.set(1.0871,2.0271,-0.4359);
myNode88.point2.set(1.3729,3.6539,-0.027100000000000013);
myNode88.innerRotation.center.set(0,0,0);
myNode88.innerRotation.axis.set(0.0,0.0,0.0);
myNode88.innerRotation.angle.set(0.0);
myNode88.isVisible = False

/* définition du node n°89*/
const myNode89 = object.addCylinder();
myNode89.point1.set(1.191,3.046,-0.43595);
myNode89.point2.set(1.191,3.046,18.099950000000003);
myNode89.radius.set(0.072);
myNode89.innerRotation.center.set(0,0,0);
myNode89.innerRotation.axis.set(0.0,0.0,0.0);
myNode89.innerRotation.angle.set(0.0);
myNode89.isVisible = False

/* définition du node n°90*/
const myNode90 = object.addCutOperation();
myNode90.leftArg.set(myNode88);
myNode90.rightArg.set(myNode89);
myNode90.isVisible = False

/* définition du node n°91*/
const myNode91 = object.addCylinder();
myNode91.point1.set(1.087,3.394,-0.4359);
myNode91.point2.set(1.087,3.394,-0.027100000000000013);
myNode91.radius.set(0.258);
myNode91.innerRotation.center.set(0,0,0);
myNode91.innerRotation.axis.set(0.0,0.0,0.0);
myNode91.innerRotation.angle.set(0.0);
myNode91.isVisible = False

/* définition du node n°92*/
const myNode92 = object.addCylinder();
myNode92.point1.set(0.001,2.525,-0.4359);
myNode92.point2.set(0.001,2.525,0.4369);
myNode92.radius.set(0.275);
myNode92.innerRotation.center.set(0,0,0);
myNode92.innerRotation.axis.set(0.0,0.0,0.0);
myNode92.innerRotation.angle.set(0.0);
myNode92.isVisible = False

/* définition du node n°93*/
const myNode93 = object.addCylinder();
myNode93.point1.set(0,2.527,-18.0999);
myNode93.point2.set(0,2.527,18.099999999999998);
myNode93.radius.set(0.136);
myNode93.innerRotation.center.set(0,0,0);
myNode93.innerRotation.axis.set(0.0,0.0,0.0);
myNode93.innerRotation.angle.set(0.0);
myNode93.isVisible = False

/* définition du node n°94*/
const myNode94 = object.addCutOperation();
myNode94.leftArg.set(myNode92);
myNode94.rightArg.set(myNode93);
myNode94.isVisible = False

/* définition du node n°95*/
const myNode95 = object.addBox();
myNode95.point1.set(4.0721,-2.2549,-0.4359);
myNode95.point2.set(4.7279,-1.7101000000000002,0.4369);
myNode95.innerRotation.center.set(0,0,0);
myNode95.innerRotation.axis.set(0.0,0.0,0.0);
myNode95.innerRotation.angle.set(0.0);
myNode95.isVisible = False

/* définition du node n°96*/
const myNode96 = object.addBox();
myNode96.point1.set(1.3731,-2.4359,-0.4359);
myNode96.point2.set(4.071899999999999,-2.0271000000000003,0.4369);
myNode96.innerRotation.center.set(0,0,0);
myNode96.innerRotation.axis.set(0.0,0.0,0.0);
myNode96.innerRotation.angle.set(0.0);
myNode96.isVisible = False

/* définition du node n°97*/
const myNode97 = object.addFuseOperation();
myNode97.leftArg.set(myNode95);
myNode97.rightArg.set(myNode96);
myNode97.isVisible = False

/* définition du node n°98*/
const myNode98 = object.addBox();
myNode98.point1.set(-18.0999,-2.43595,-0.02695);
myNode98.point2.set(4.726999999999997,-2.25405,0.43694999999999995);
myNode98.innerRotation.center.set(0,0,0);
myNode98.innerRotation.axis.set(0.0,0.0,0.0);
myNode98.innerRotation.angle.set(0.0);
myNode98.isVisible = False

/* définition du node n°99*/
const myNode99 = object.addCylinder();
myNode99.point1.set(4.727,-1.982,-18.0999);
myNode99.point2.set(4.727,-1.982,0.43599999999999994);
myNode99.radius.set(0.272);
myNode99.innerRotation.center.set(0,0,0);
myNode99.innerRotation.axis.set(0.0,0.0,0.0);
myNode99.innerRotation.angle.set(0.0);
myNode99.isVisible = False

/* définition du node n°100*/
const myNode100 = object.addFuseOperation();
myNode100.leftArg.set(myNode98);
myNode100.rightArg.set(myNode99);
myNode100.isVisible = False

/* définition du node n°101*/
const myNode101 = object.addCutOperation();
myNode101.leftArg.set(myNode97);
myNode101.rightArg.set(myNode100);
myNode101.isVisible = False

/* définition du node n°102*/
const myNode102 = object.addCylinder();
myNode102.point1.set(4.727,1.98,-0.4359);
myNode102.point2.set(4.727,1.98,0.4369);
myNode102.radius.set(0.271);
myNode102.innerRotation.center.set(0,0,0);
myNode102.innerRotation.axis.set(0.0,0.0,0.0);
myNode102.innerRotation.angle.set(0.0);
myNode102.isVisible = False

/* définition du node n°103*/
const myNode103 = object.addBox();
myNode103.point1.set(1.3731,2.0271,-0.4359);
myNode103.point2.set(4.4549,2.4358999999999997,-0.027100000000000013);
myNode103.innerRotation.center.set(0,0,0);
myNode103.innerRotation.axis.set(0.0,0.0,0.0);
myNode103.innerRotation.angle.set(0.0);
myNode103.isVisible = False

/* définition du node n°104*/
const myNode104 = object.addFuseOperation();
myNode104.leftArg.set(myNode102);
myNode104.rightArg.set(myNode103);
myNode104.isVisible = False

/* définition du node n°105*/
const myNode105 = object.addCylinder();
myNode105.point1.set(4.345,2.52,-18.0999);
myNode105.point2.set(4.345,2.52,18.099999999999998);
myNode105.radius.set(0.263);
myNode105.innerRotation.center.set(0,0,0);
myNode105.innerRotation.axis.set(0.0,0.0,0.0);
myNode105.innerRotation.angle.set(0.0);
myNode105.isVisible = False

/* définition du node n°106*/
const myNode106 = object.addFuseOperation();
myNode106.leftArg.set(myNode105);
myNode106.rightArg.set(myNode6);
myNode106.isVisible = False

/* définition du node n°107*/
const myNode107 = object.addCutOperation();
myNode107.leftArg.set(myNode104);
myNode107.rightArg.set(myNode106);
myNode107.isVisible = False

/* définition du node n°108*/
const myNode108 = object.addBox();
myNode108.point1.set(-2.8229,2.0271,-0.4359);
myNode108.point2.set(3.3219,2.2539,0.4369);
myNode108.innerRotation.center.set(0,0,0);
myNode108.innerRotation.axis.set(0.0,0.0,0.0);
myNode108.innerRotation.angle.set(0.0);
myNode108.isVisible = False

/* définition du node n°109*/
const myNode109 = object.addBox();
myNode109.point1.set(0.5691,2.0271,-0.4359);
myNode109.point2.set(1.0859,3.3939,-0.027100000000000013);
myNode109.innerRotation.center.set(0,0,0);
myNode109.innerRotation.axis.set(0.0,0.0,0.0);
myNode109.innerRotation.angle.set(0.0);
myNode109.isVisible = False

/* définition du node n°110*/
const myNode110 = object.addBox();
myNode110.point1.set(-3.6859,3.3841,-0.4359);
myNode110.point2.set(-0.8271000000000002,3.6449000000000003,-0.027100000000000013);
myNode110.innerRotation.center.set(0,0,0);
myNode110.innerRotation.axis.set(0.0,0.0,0.0);
myNode110.innerRotation.angle.set(0.0);
myNode110.isVisible = False

/* définition du node n°111*/
const myNode111 = object.addFuseOperation();
myNode111.leftArg.set(myNode109);
myNode111.rightArg.set(myNode110);
myNode111.isVisible = False

/* définition du node n°112*/
const myNode112 = object.addCylinder();
myNode112.point1.set(0.569,2.513,-18.0999);
myNode112.point2.set(0.569,2.513,0.43599999999999994);
myNode112.radius.set(0.255);
myNode112.innerRotation.center.set(0,0,0);
myNode112.innerRotation.axis.set(0.0,0.0,0.0);
myNode112.innerRotation.angle.set(0.0);
myNode112.isVisible = False

/* définition du node n°113*/
const myNode113 = object.addCutOperation();
myNode113.leftArg.set(myNode111);
myNode113.rightArg.set(myNode112);
myNode113.isVisible = False

/* définition du node n°114*/
const myNode114 = object.addBox();
myNode114.point1.set(-3.53595,2.25505,-0.43595);
myNode114.point2.set(-1.3720500000000002,3.6549500000000004,0.43695);
myNode114.innerRotation.center.set(0,0,0);
myNode114.innerRotation.axis.set(0.0,0.0,0.0);
myNode114.innerRotation.angle.set(0.0);
myNode114.isVisible = False

/* définition du node n°115*/
const myNode115 = object.addBox();
myNode115.point1.set(-1.09295,2.43605,-0.43595);
myNode115.point2.set(0.82595,3.65395,0.43695);
myNode115.innerRotation.center.set(0,0,0);
myNode115.innerRotation.axis.set(0.0,0.0,0.0);
myNode115.innerRotation.angle.set(0.0);
myNode115.isVisible = False

/* définition du node n°116*/
const myNode116 = object.addFuseOperation();
myNode116.leftArg.set(myNode114);
myNode116.rightArg.set(myNode115);
myNode116.isVisible = False

/* définition du node n°117*/
const myNode117 = object.addCylinder();
myNode117.point1.set(-1.092,3.391,-0.436);
myNode117.point2.set(-1.092,3.391,18.1);
myNode117.radius.set(0.263);
myNode117.innerRotation.center.set(0,0,0);
myNode117.innerRotation.axis.set(0.0,0.0,0.0);
myNode117.innerRotation.angle.set(0.0);
myNode117.isVisible = False

/* définition du node n°118*/
const myNode118 = object.addCutOperation();
myNode118.leftArg.set(myNode116);
myNode118.rightArg.set(myNode117);
myNode118.isVisible = False

/* définition du node n°119*/
const myNode119 = object.addCutOperation();
myNode119.leftArg.set(myNode113);
myNode119.rightArg.set(myNode118);
myNode119.isVisible = False

/* définition du node n°120*/
const myNode120 = object.addBox();
myNode120.point1.set(-3.1179,-2.2549,-0.2089);
myNode120.point2.set(1.3729,-2.0281000000000002,0.43590000000000007);
myNode120.innerRotation.center.set(0,0,0);
myNode120.innerRotation.axis.set(0.0,0.0,0.0);
myNode120.innerRotation.angle.set(0.0);
myNode120.isVisible = False

/* définition du node n°121*/
const myNode121 = object.addBox();
myNode121.point1.set(-4.4549,1.3001,-0.4359);
myNode121.point2.set(-4.072100000000001,2.4359,0.02789999999999998);
myNode121.innerRotation.center.set(0,0,0);
myNode121.innerRotation.axis.set(0.0,0.0,0.0);
myNode121.innerRotation.angle.set(0.0);
myNode121.isVisible = False

/* définition du node n°122*/
const myNode122 = object.addCylinder();
myNode122.point1.set(-4.341,2.514,-18.0999);
myNode122.point2.set(-4.341,2.514,18.099999999999998);
myNode122.radius.set(0.257);
myNode122.innerRotation.center.set(0,0,0);
myNode122.innerRotation.axis.set(0.0,0.0,0.0);
myNode122.innerRotation.angle.set(0.0);
myNode122.isVisible = False

/* définition du node n°123*/
const myNode123 = object.addCutOperation();
myNode123.leftArg.set(myNode121);
myNode123.rightArg.set(myNode122);
myNode123.isVisible = False

/* définition du node n°124*/
const myNode124_1 = object.addFuseOperation();
myNode124_1.leftArg.set(myNode8);
myNode124_1.rightArg.set(myNode8);
const myNode124_2 = object.addFuseOperation();
myNode124_2.leftArg.set(myNode124_1);
myNode124_2.rightArg.set(myNode18);
const myNode124_3 = object.addFuseOperation();
myNode124_3.leftArg.set(myNode124_2);
myNode124_3.rightArg.set(myNode21);
const myNode124_4 = object.addFuseOperation();
myNode124_4.leftArg.set(myNode124_3);
myNode124_4.rightArg.set(myNode22);
const myNode124_5 = object.addFuseOperation();
myNode124_5.leftArg.set(myNode124_4);
myNode124_5.rightArg.set(myNode23);
const myNode124_6 = object.addFuseOperation();
myNode124_6.leftArg.set(myNode124_5);
myNode124_6.rightArg.set(myNode24);
const myNode124_7 = object.addFuseOperation();
myNode124_7.leftArg.set(myNode124_6);
myNode124_7.rightArg.set(myNode37);
const myNode124_8 = object.addFuseOperation();
myNode124_8.leftArg.set(myNode124_7);
myNode124_8.rightArg.set(myNode40);
const myNode124_9 = object.addFuseOperation();
myNode124_9.leftArg.set(myNode124_8);
myNode124_9.rightArg.set(myNode41);
const myNode124_10 = object.addFuseOperation();
myNode124_10.leftArg.set(myNode124_9);
myNode124_10.rightArg.set(myNode51);
const myNode124_11 = object.addFuseOperation();
myNode124_11.leftArg.set(myNode124_10);
myNode124_11.rightArg.set(myNode52);
const myNode124_12 = object.addFuseOperation();
myNode124_12.leftArg.set(myNode124_11);
myNode124_12.rightArg.set(myNode53);
const myNode124_13 = object.addFuseOperation();
myNode124_13.leftArg.set(myNode124_12);
myNode124_13.rightArg.set(myNode54);
const myNode124_14 = object.addFuseOperation();
myNode124_14.leftArg.set(myNode124_13);
myNode124_14.rightArg.set(myNode59);
const myNode124_15 = object.addFuseOperation();
myNode124_15.leftArg.set(myNode124_14);
myNode124_15.rightArg.set(myNode78);
const myNode124_16 = object.addFuseOperation();
myNode124_16.leftArg.set(myNode124_15);
myNode124_16.rightArg.set(myNode81);
const myNode124_17 = object.addFuseOperation();
myNode124_17.leftArg.set(myNode124_16);
myNode124_17.rightArg.set(myNode84);
const myNode124_18 = object.addFuseOperation();
myNode124_18.leftArg.set(myNode124_17);
myNode124_18.rightArg.set(myNode87);
const myNode124_19 = object.addFuseOperation();
myNode124_19.leftArg.set(myNode124_18);
myNode124_19.rightArg.set(myNode90);
const myNode124_20 = object.addFuseOperation();
myNode124_20.leftArg.set(myNode124_19);
myNode124_20.rightArg.set(myNode91);
const myNode124_21 = object.addFuseOperation();
myNode124_21.leftArg.set(myNode124_20);
myNode124_21.rightArg.set(myNode94);
const myNode124_22 = object.addFuseOperation();
myNode124_22.leftArg.set(myNode124_21);
myNode124_22.rightArg.set(myNode101);
const myNode124_23 = object.addFuseOperation();
myNode124_23.leftArg.set(myNode124_22);
myNode124_23.rightArg.set(myNode107);
const myNode124_24 = object.addFuseOperation();
myNode124_24.leftArg.set(myNode124_23);
myNode124_24.rightArg.set(myNode108);
const myNode124_25 = object.addFuseOperation();
myNode124_25.leftArg.set(myNode124_24);
myNode124_25.rightArg.set(myNode119);
const myNode124_26 = object.addFuseOperation();
myNode124_26.leftArg.set(myNode124_25);
myNode124_26.rightArg.set(myNode120);
myNode124 = object.addFuseOperation();
myNode124.leftArg.set(myNode124_26);
myNode124.rightArg.set(myNode123);
myNode124.isVisible = False

/* définition du node n°125*/
const myNode125 = object.addCommonOperation();
myNode125.leftArg.set(myNode0);
myNode125.rightArg.set(myNode124);
myNode125.isVisible = True


/*END Geometry Object Definition*/