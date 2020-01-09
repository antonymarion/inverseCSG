/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-2.0449,-18.0999,-2.9909);
myNode0.point2.set(-0.42610000000000015,0.9388999999999967,-2.2771);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode0.innerRotation.angle.set(23.999998826660413);
myNode0.innerTranslation.vector.set(0,0,0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(3.7511,-18.0999,-0.9369);
myNode1.point2.set(4.9999,4.911899999999999,18.1009);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.innerTranslation.vector.set(0,0,0);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addFuseOperation();
myNode2.leftArg.set(myNode0);
myNode2.rightArg.set(myNode1);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(1.364,3.837,-2.9909);
myNode3.point2.set(1.364,3.837,18.0999);
myNode3.radius.set(3.842);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addBox();
myNode4.point1.set(2.29806,1.58709,-0.9369);
myNode4.point2.set(18.09986,4.4358900000000006,2.9919);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode4.innerRotation.angle.set(23.999998826660413);
myNode4.innerTranslation.vector.set(0,0,0);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addCommonOperation();
myNode5.leftArg.set(myNode2);
myNode5.rightArg.set(myNode3);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addBox();
myNode6.point1.set(-0.425908,-18.0999,-2.9909);
myNode6.point2.set(18.099892,1.5869,-0.9371);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode6.innerRotation.angle.set(23.999998826660413);
myNode6.innerTranslation.vector.set(0,0,0);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addCylinder();
myNode7.point1.set(1.165,-6.961,-18.0999);
myNode7.point2.set(1.165,-6.961,18.099999999999998);
myNode7.radius.set(5.279);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addCutOperation();
myNode8.leftArg.set(myNode6);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(-18.0999,0.9391,-2.9909);
myNode9.point2.set(2.2978999999999985,5.9299,18.0999);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode9.innerRotation.angle.set(23.999998826660413);
myNode9.innerTranslation.vector.set(0,0,0);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addCylinder();
myNode10.point1.set(0.268,1.622,-2.27695);
myNode10.point2.set(0.268,1.622,18.09995);
myNode10.radius.set(0.448);
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
const myNode12 = object.addFuseOperation();
myNode12.leftArg.set(myNode8);
myNode12.rightArg.set(myNode11);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addBox();
myNode13.point1.set(-0.425905,-18.0999,-2.9909);
myNode13.point2.set(2.298895,4.436899999999998,2.9909);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode13.innerRotation.angle.set(23.999998826660413);
myNode13.innerTranslation.vector.set(0,0,0);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(-1.348,1.979,-18.0999);
myNode14.point2.set(-1.348,1.979,-2.277100000000001);
myNode14.radius.set(0.094);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addBox();
myNode15.point1.set(-2.0449,0.939098,-2.9909);
myNode15.point2.set(18.099899999999998,4.436897999999999,-2.2771);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode15.innerRotation.angle.set(23.999998826660413);
myNode15.innerTranslation.vector.set(0,0,0);
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
const myNode17 = object.addCommonOperation();
myNode17.leftArg.set(myNode12);
myNode17.rightArg.set(myNode16);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(3.117,-0.384,-2.99095);
myNode18.point2.set(3.117,-0.384,-0.9370500000000002);
myNode18.radius.set(0.739);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addCylinder();
myNode19.point1.set(0.178,1.518,-2.99095);
myNode19.point2.set(0.178,1.518,18.09995);
myNode19.radius.set(0.222);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(0.0,0.0,0.0);
myNode19.innerRotation.angle.set(0.0);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addBox();
myNode20.point1.set(-2.04495,0.939048,-2.99095);
myNode20.point2.set(18.09995,4.436948,2.99095);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode20.innerRotation.angle.set(23.999998826660413);
myNode20.innerTranslation.vector.set(0,0,0);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addBox();
myNode21.point1.set(-18.1,-18.1,-2.991);
myNode21.point2.set(3.7509999999999977,2.070999999999998,-0.9370000000000003);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);
myNode21.innerTranslation.vector.set(0,0,0);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addCutOperation();
myNode22.leftArg.set(myNode20);
myNode22.rightArg.set(myNode21);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addBox();
myNode23.point1.set(-18.0999,-18.0999,-2.27695);
myNode23.point2.set(2.3729999999999976,1.6219999999999999,2.99095);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);
myNode23.innerTranslation.vector.set(0,0,0);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addCylinder();
myNode24.point1.set(-2.146,-0.806,-2.99095);
myNode24.point2.set(-2.146,-0.806,-2.27705);
myNode24.radius.set(2.862);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addBox();
myNode25.point1.set(-18.0999,2.07105,-2.99095);
myNode25.point2.set(2.3729999999999976,4.91195,-2.27705);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(0.0,0.0,0.0);
myNode25.innerRotation.angle.set(0.0);
myNode25.innerTranslation.vector.set(0,0,0);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26_1 = myNode18.clone();
myNode26_1.isVisible = false;
const myNode26_2 = object.addFuseOperation();
myNode26_2.leftArg.set(myNode26_1);
myNode26_2.rightArg.set(myNode19);
myNode26_2.isVisible = false;
const myNode26_3 = object.addFuseOperation();
myNode26_3.leftArg.set(myNode26_2);
myNode26_3.rightArg.set(myNode22);
myNode26_3.isVisible = false;
const myNode26_4 = object.addFuseOperation();
myNode26_4.leftArg.set(myNode26_3);
myNode26_4.rightArg.set(myNode23);
myNode26_4.isVisible = false;
const myNode26_5 = object.addFuseOperation();
myNode26_5.leftArg.set(myNode26_4);
myNode26_5.rightArg.set(myNode24);
myNode26_5.isVisible = false;
myNode26 = object.addFuseOperation();
myNode26.leftArg.set(myNode26_5);
myNode26.rightArg.set(myNode25);
myNode26.isVisible = false;
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addCutOperation();
myNode27.leftArg.set(myNode17);
myNode27.rightArg.set(myNode26);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addBox();
myNode28.point1.set(2.3731,-18.0999,-2.9909);
myNode28.point2.set(4.9999,4.911899999999999,-0.9371);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(0.0,0.0,0.0);
myNode28.innerRotation.angle.set(0.0);
myNode28.innerTranslation.vector.set(0,0,0);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addBox();
myNode29.point1.set(-0.425955,5.53105,-18.0999);
myNode29.point2.set(18.099945,5.92995,-0.9370000000000012);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode29.innerRotation.angle.set(23.999998826660413);
myNode29.innerTranslation.vector.set(0,0,0);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addCutOperation();
myNode30.leftArg.set(myNode28);
myNode30.rightArg.set(myNode29);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addBox();
myNode31.point1.set(3.7511,-18.0999,-2.9909);
myNode31.point2.set(4.1429,4.911899999999999,2.9909);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(0.0,0.0,0.0);
myNode31.innerRotation.angle.set(0.0);
myNode31.innerTranslation.vector.set(0,0,0);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addFuseOperation();
myNode32.leftArg.set(myNode30);
myNode32.rightArg.set(myNode31);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addCylinder();
myNode33.point1.set(1.364,3.837,-18.0999);
myNode33.point2.set(1.364,3.837,2.9909);
myNode33.radius.set(3.842);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addBox();
myNode34.point1.set(-18.1,-1.85095,-18.0999);
myNode34.point2.set(18.099899999999998,18.09995,0.9379999999999988);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(-3.072938784397386,-0.6531732693475747,8.666269604173044e-07);
myNode34.innerRotation.angle.set(179.99985128293173);
myNode34.innerTranslation.vector.set(0,0,0);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addCutOperation();
myNode35.leftArg.set(myNode33);
myNode35.rightArg.set(myNode34);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addBox();
myNode36.point1.set(2.29801,5.53103,-2.99095);
myNode36.point2.set(18.09991,18.09993,-0.9370500000000002);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode36.innerRotation.angle.set(23.999998826660413);
myNode36.innerTranslation.vector.set(0,0,0);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addCylinder();
myNode37.point1.set(-0.993,6.091,-18.0999);
myNode37.point2.set(-0.993,6.091,-0.9370000000000012);
myNode37.radius.set(4.363);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0,0.0,0.0);
myNode37.innerRotation.angle.set(0.0);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addFuseOperation();
myNode38.leftArg.set(myNode36);
myNode38.rightArg.set(myNode37);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addCutOperation();
myNode39.leftArg.set(myNode35);
myNode39.rightArg.set(myNode38);
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addCommonOperation();
myNode40.leftArg.set(myNode32);
myNode40.rightArg.set(myNode39);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41 = object.addCylinder();
myNode41.point1.set(-3.528,4.472,0.9381);
myNode41.point2.set(-3.528,4.472,2.9919);
myNode41.radius.set(0.436);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode41.innerRotation.angle.set(179.9999999997983);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addBox();
myNode42.point1.set(-2.0449,4.4361,-2.9909);
myNode42.point2.set(18.099899999999998,5.9289,2.9909);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode42.innerRotation.angle.set(23.999998826660413);
myNode42.innerTranslation.vector.set(0,0,0);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addBox();
myNode43.point1.set(4.1431,2.0711,-2.9909);
myNode43.point2.set(4.999899999999999,18.0999,2.9909);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(0.0,0.0,0.0);
myNode43.innerRotation.angle.set(0.0);
myNode43.innerTranslation.vector.set(0,0,0);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44 = object.addCommonOperation();
myNode44.leftArg.set(myNode42);
myNode44.rightArg.set(myNode43);
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45 = object.addCylinder();
myNode45.point1.set(4.544,4.449,-2.9909);
myNode45.point2.set(4.544,4.449,2.9909);
myNode45.radius.set(0.462);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(0.0,0.0,0.0);
myNode45.innerRotation.angle.set(0.0);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addBox();
myNode46.point1.set(-4.9999,-4.6249,-18.0999);
myNode46.point2.set(4.9999,18.099899999999998,2.9909);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(0.0,0.0,0.0);
myNode46.innerRotation.angle.set(0.0);
myNode46.innerTranslation.vector.set(0,0,0);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addBox();
myNode47.point1.set(-18.0999,-18.0999,-2.9909);
myNode47.point2.set(18.0999,5.007899999999999,2.9909);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(-3.072938784397386,-0.6531732693475747,8.666269604173044e-07);
myNode47.innerRotation.angle.set(179.99985128293173);
myNode47.innerTranslation.vector.set(0,0,0);
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addBox();
myNode48.point1.set(4.1431,-18.0999,-2.9909);
myNode48.point2.set(18.099899999999998,18.0999,2.9909);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);
myNode48.innerTranslation.vector.set(0,0,0);
myNode48.isVisible = false;

/* définition du node n°49*/
const myNode49 = object.addFuseOperation();
myNode49.leftArg.set(myNode47);
myNode49.rightArg.set(myNode48);
myNode49.isVisible = false;

/* définition du node n°50*/
const myNode50 = object.addCommonOperation();
myNode50.leftArg.set(myNode46);
myNode50.rightArg.set(myNode49);
myNode50.isVisible = false;

/* définition du node n°51*/
const myNode51 = object.addBox();
myNode51.point1.set(-2.0449,-18.0999,-2.9909);
myNode51.point2.set(6.001899999999999,-2.4251000000000023,2.9909);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode51.innerRotation.angle.set(23.999998826660413);
myNode51.innerTranslation.vector.set(0,0,0);
myNode51.isVisible = false;

/* définition du node n°52*/
const myNode52 = object.addCylinder();
myNode52.point1.set(-4.56,-4.473,-2.9909);
myNode52.point2.set(-4.56,-4.473,2.9909);
myNode52.radius.set(0.437);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode52.innerRotation.angle.set(179.9999999997983);
myNode52.isVisible = false;

/* définition du node n°53*/
const myNode53 = object.addFuseOperation();
myNode53.leftArg.set(myNode51);
myNode53.rightArg.set(myNode52);
myNode53.isVisible = false;

/* définition du node n°54*/
const myNode54 = object.addBox();
myNode54.point1.set(-18.0999,-4.9109,-2.9909);
myNode54.point2.set(4.999899999999997,-3.6611,2.9909);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(0.0,0.0,0.0);
myNode54.innerRotation.angle.set(0.0);
myNode54.innerTranslation.vector.set(0,0,0);
myNode54.isVisible = false;

/* définition du node n°55*/
const myNode55 = object.addBox();
myNode55.point1.set(-18.0999,-18.0999,-18.0999);
myNode55.point2.set(6.000899999999998,-2.4251000000000023,-2.991100000000001);
myNode55.innerRotation.center.set(0,0,0);
myNode55.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode55.innerRotation.angle.set(23.999998826660413);
myNode55.innerTranslation.vector.set(0,0,0);
myNode55.isVisible = false;

/* définition du node n°56*/
const myNode56 = object.addFuseOperation();
myNode56.leftArg.set(myNode54);
myNode56.rightArg.set(myNode55);
myNode56.isVisible = false;

/* définition du node n°57*/
const myNode57 = object.addCommonOperation();
myNode57.leftArg.set(myNode53);
myNode57.rightArg.set(myNode56);
myNode57.isVisible = false;

/* définition du node n°58*/
const myNode58 = object.addFuseOperation();
myNode58.leftArg.set(myNode50);
myNode58.rightArg.set(myNode57);
myNode58.isVisible = false;

/* définition du node n°59*/
const myNode59 = object.addBox();
myNode59.point1.set(-2.04495,-18.1,-0.93695);
myNode59.point2.set(3.5669500000000003,18.099899999999998,2.99195);
myNode59.innerRotation.center.set(0,0,0);
myNode59.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode59.innerRotation.angle.set(23.999998826660413);
myNode59.innerTranslation.vector.set(0,0,0);
myNode59.isVisible = false;

/* définition du node n°60*/
const myNode60 = object.addBox();
myNode60.point1.set(-4.99995,-4.62495,-2.27695);
myNode60.point2.set(0.7159500000000003,18.09995,-0.9380499999999998);
myNode60.innerRotation.center.set(0,0,0);
myNode60.innerRotation.axis.set(0.0,0.0,0.0);
myNode60.innerRotation.angle.set(0.0);
myNode60.innerTranslation.vector.set(0,0,0);
myNode60.isVisible = false;

/* définition du node n°61*/
const myNode61 = object.addBox();
myNode61.point1.set(-18.0999,-3.66095,-18.0999);
myNode61.point2.set(0.7159999999999975,18.09995,2.9909999999999997);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(0.0,0.0,0.0);
myNode61.innerRotation.angle.set(0.0);
myNode61.innerTranslation.vector.set(0,0,0);
myNode61.isVisible = false;

/* définition du node n°62*/
const myNode62 = object.addBox();
myNode62.point1.set(-18.0999,-4.91095,-0.93695);
myNode62.point2.set(3.7509999999999977,18.09995,2.99195);
myNode62.innerRotation.center.set(0,0,0);
myNode62.innerRotation.axis.set(0.0,0.0,0.0);
myNode62.innerRotation.angle.set(0.0);
myNode62.innerTranslation.vector.set(0,0,0);
myNode62.isVisible = false;

/* définition du node n°63*/
const myNode63 = object.addCylinder();
myNode63.point1.set(-0.177,-4.072,-18.0999);
myNode63.point2.set(-0.177,-4.072,18.099999999999998);
myNode63.radius.set(0.223);
myNode63.innerRotation.center.set(0,0,0);
myNode63.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode63.innerRotation.angle.set(179.9999999997983);
myNode63.isVisible = false;

/* définition du node n°64*/
const myNode64 = object.addBox();
myNode64.point1.set(2.37305,-3.66095,-2.99095);
myNode64.point2.set(4.99995,18.09995,2.99095);
myNode64.innerRotation.center.set(0,0,0);
myNode64.innerRotation.axis.set(0.0,0.0,0.0);
myNode64.innerRotation.angle.set(0.0);
myNode64.innerTranslation.vector.set(0,0,0);
myNode64.isVisible = false;

/* définition du node n°65*/
const myNode65 = object.addCylinder();
myNode65.point1.set(-0.993,6.091,-18.0999);
myNode65.point2.set(-0.993,6.091,2.9909999999999997);
myNode65.radius.set(4.363);
myNode65.innerRotation.center.set(0,0,0);
myNode65.innerRotation.axis.set(0.0,0.0,0.0);
myNode65.innerRotation.angle.set(0.0);
myNode65.isVisible = false;

/* définition du node n°66*/
const myNode66 = object.addCylinder();
myNode66.point1.set(-4.461,-4.074,-2.99095);
myNode66.point2.set(-4.461,-4.074,-2.27705);
myNode66.radius.set(0.222);
myNode66.innerRotation.center.set(0,0,0);
myNode66.innerRotation.axis.set(0.0,0.0,0.0);
myNode66.innerRotation.angle.set(0.0);
myNode66.isVisible = false;

/* définition du node n°67*/
const myNode67_1 = myNode59.clone();
myNode67_1.isVisible = false;
const myNode67_2 = object.addFuseOperation();
myNode67_2.leftArg.set(myNode67_1);
myNode67_2.rightArg.set(myNode60);
myNode67_2.isVisible = false;
const myNode67_3 = object.addFuseOperation();
myNode67_3.leftArg.set(myNode67_2);
myNode67_3.rightArg.set(myNode61);
myNode67_3.isVisible = false;
const myNode67_4 = object.addFuseOperation();
myNode67_4.leftArg.set(myNode67_3);
myNode67_4.rightArg.set(myNode62);
myNode67_4.isVisible = false;
const myNode67_5 = object.addFuseOperation();
myNode67_5.leftArg.set(myNode67_4);
myNode67_5.rightArg.set(myNode63);
myNode67_5.isVisible = false;
const myNode67_6 = object.addFuseOperation();
myNode67_6.leftArg.set(myNode67_5);
myNode67_6.rightArg.set(myNode64);
myNode67_6.isVisible = false;
const myNode67_7 = object.addFuseOperation();
myNode67_7.leftArg.set(myNode67_6);
myNode67_7.rightArg.set(myNode65);
myNode67_7.isVisible = false;
myNode67 = object.addFuseOperation();
myNode67.leftArg.set(myNode67_7);
myNode67.rightArg.set(myNode66);
myNode67.isVisible = false;
myNode67.isVisible = false;

/* définition du node n°68*/
const myNode68 = object.addCutOperation();
myNode68.leftArg.set(myNode58);
myNode68.rightArg.set(myNode67);
myNode68.isVisible = false;

/* définition du node n°69*/
const myNode69 = object.addBox();
myNode69.point1.set(-2.0449,-18.0999,-2.9909);
myNode69.point2.set(3.5668999999999995,18.0999,-2.2771);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode69.innerRotation.angle.set(23.999998826660413);
myNode69.innerTranslation.vector.set(0,0,0);
myNode69.isVisible = false;

/* définition du node n°70*/
const myNode70 = object.addBox();
myNode70.point1.set(2.2981,-18.0999,-2.2769);
myNode70.point2.set(3.5659,18.0999,-0.9380999999999999);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode70.innerRotation.angle.set(23.999998826660413);
myNode70.innerTranslation.vector.set(0,0,0);
myNode70.isVisible = false;

/* définition du node n°71*/
const myNode71 = object.addCylinder();
myNode71.point1.set(1.165,-6.961,-2.9909);
myNode71.point2.set(1.165,-6.961,18.0999);
myNode71.radius.set(5.279);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(0.0,0.0,0.0);
myNode71.innerRotation.angle.set(0.0);
myNode71.isVisible = false;

/* définition du node n°72*/
const myNode72 = object.addBox();
myNode72.point1.set(3.7511,-3.6609,-2.9909);
myNode72.point2.set(4.9999,18.099899999999998,2.9909);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(0.0,0.0,0.0);
myNode72.innerRotation.angle.set(0.0);
myNode72.innerTranslation.vector.set(0,0,0);
myNode72.isVisible = false;

/* définition du node n°73*/
const myNode73 = object.addCommonOperation();
myNode73.leftArg.set(myNode71);
myNode73.rightArg.set(myNode72);
myNode73.isVisible = false;

/* définition du node n°74*/
const myNode74_1 = myNode69.clone();
myNode74_1.isVisible = false;
const myNode74_2 = object.addFuseOperation();
myNode74_2.leftArg.set(myNode74_1);
myNode74_2.rightArg.set(myNode70);
myNode74_2.isVisible = false;
myNode74 = object.addFuseOperation();
myNode74.leftArg.set(myNode74_2);
myNode74.rightArg.set(myNode73);
myNode74.isVisible = false;
myNode74.isVisible = false;

/* définition du node n°75*/
const myNode75 = object.addBox();
myNode75.point1.set(-4.9999,-3.6609,-2.9909);
myNode75.point2.set(4.9999,18.099899999999998,18.0999);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(0.0,0.0,0.0);
myNode75.innerRotation.angle.set(0.0);
myNode75.innerTranslation.vector.set(0,0,0);
myNode75.isVisible = false;

/* définition du node n°76*/
const myNode76 = object.addCylinder();
myNode76.point1.set(1.675,-4.937,-18.0999);
myNode76.point2.set(1.675,-4.937,2.9909);
myNode76.radius.set(3.637);
myNode76.innerRotation.center.set(0,0,0);
myNode76.innerRotation.axis.set(0.0,0.0,0.0);
myNode76.innerRotation.angle.set(0.0);
myNode76.isVisible = false;

/* définition du node n°77*/
const myNode77 = object.addCommonOperation();
myNode77.leftArg.set(myNode75);
myNode77.rightArg.set(myNode76);
myNode77.isVisible = false;

/* définition du node n°78*/
const myNode78 = object.addCylinder();
myNode78.point1.set(-2.146,-0.806,-18.0999);
myNode78.point2.set(-2.146,-0.806,-2.277000000000001);
myNode78.radius.set(2.862);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(0.0,0.0,0.0);
myNode78.innerRotation.angle.set(0.0);
myNode78.isVisible = false;

/* définition du node n°79*/
const myNode79 = object.addCylinder();
myNode79.point1.set(-3.097,-1.28,-2.99095);
myNode79.point2.set(-3.097,-1.28,18.09995);
myNode79.radius.set(0.723);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode79.innerRotation.angle.set(179.9999999997983);
myNode79.isVisible = false;

/* définition du node n°80*/
const myNode80 = object.addFuseOperation();
myNode80.leftArg.set(myNode78);
myNode80.rightArg.set(myNode79);
myNode80.isVisible = false;

/* définition du node n°81*/
const myNode81 = object.addCutOperation();
myNode81.leftArg.set(myNode77);
myNode81.rightArg.set(myNode80);
myNode81.isVisible = false;

/* définition du node n°82*/
const myNode82 = object.addCommonOperation();
myNode82.leftArg.set(myNode74);
myNode82.rightArg.set(myNode81);
myNode82.isVisible = false;

/* définition du node n°83*/
const myNode83 = object.addBox();
myNode83.point1.set(2.2981,-18.0999,-2.9909);
myNode83.point2.set(6.0009,18.0999,-0.9371);
myNode83.innerRotation.center.set(0,0,0);
myNode83.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode83.innerRotation.angle.set(23.999998826660413);
myNode83.innerTranslation.vector.set(0,0,0);
myNode83.isVisible = false;

/* définition du node n°84*/
const myNode84 = object.addBox();
myNode84.point1.set(-18.0999,-4.9109,-18.0999);
myNode84.point2.set(4.142899999999997,18.099899999999998,-0.9371000000000009);
myNode84.innerRotation.center.set(0,0,0);
myNode84.innerRotation.axis.set(0.0,0.0,0.0);
myNode84.innerRotation.angle.set(0.0);
myNode84.innerTranslation.vector.set(0,0,0);
myNode84.isVisible = false;

/* définition du node n°85*/
const myNode85 = object.addCylinder();
myNode85.point1.set(1.165,-6.961,-2.9909);
myNode85.point2.set(1.165,-6.961,-0.9371);
myNode85.radius.set(5.279);
myNode85.innerRotation.center.set(0,0,0);
myNode85.innerRotation.axis.set(0.0,0.0,0.0);
myNode85.innerRotation.angle.set(0.0);
myNode85.isVisible = false;

/* définition du node n°86*/
const myNode86 = object.addCylinder();
myNode86.point1.set(0.264,-4.171,-2.27695);
myNode86.point2.set(0.264,-4.171,18.09995);
myNode86.radius.set(0.453);
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
const myNode88 = object.addCommonOperation();
myNode88.leftArg.set(myNode83);
myNode88.rightArg.set(myNode84);
myNode88.isVisible = false;

/* définition du node n°89*/
const myNode89 = object.addCylinder();
myNode89.point1.set(-4.525,-4.44,-2.9909);
myNode89.point2.set(-4.525,-4.44,-0.9371);
myNode89.radius.set(0.481);
myNode89.innerRotation.center.set(0,0,0);
myNode89.innerRotation.axis.set(0.0,0.0,0.0);
myNode89.innerRotation.angle.set(0.0);
myNode89.isVisible = false;

/* définition du node n°90*/
const myNode90 = object.addBox();
myNode90.point1.set(-2.04495,-18.1,-2.27695);
myNode90.point2.set(3.5669500000000003,-2.4251000000000023,2.99095);
myNode90.innerRotation.center.set(0,0,0);
myNode90.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode90.innerRotation.angle.set(23.999998826660413);
myNode90.innerTranslation.vector.set(0,0,0);
myNode90.isVisible = false;

/* définition du node n°91*/
const myNode91 = object.addCylinder();
myNode91.point1.set(4.545,-4.166,-2.99095);
myNode91.point2.set(4.545,-4.166,18.09995);
myNode91.radius.set(0.461);
myNode91.innerRotation.center.set(0,0,0);
myNode91.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode91.innerRotation.angle.set(179.9999999997983);
myNode91.isVisible = false;

/* définition du node n°92*/
const myNode92 = object.addFuseOperation();
myNode92.leftArg.set(myNode90);
myNode92.rightArg.set(myNode91);
myNode92.isVisible = false;

/* définition du node n°93*/
const myNode93 = object.addCutOperation();
myNode93.leftArg.set(myNode89);
myNode93.rightArg.set(myNode92);
myNode93.isVisible = false;

/* définition du node n°94*/
const myNode94 = object.addCylinder();
myNode94.point1.set(4.544,4.449,-0.9369);
myNode94.point2.set(4.544,4.449,2.9919);
myNode94.radius.set(0.462);
myNode94.innerRotation.center.set(0,0,0);
myNode94.innerRotation.axis.set(0.0,0.0,0.0);
myNode94.innerRotation.angle.set(0.0);
myNode94.isVisible = false;

/* définition du node n°95*/
const myNode95 = object.addBox();
myNode95.point1.set(-18.0999,-18.0999,-0.9369);
myNode95.point2.set(2.2978999999999985,4.436899999999998,2.9919);
myNode95.innerRotation.center.set(0,0,0);
myNode95.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode95.innerRotation.angle.set(23.999998826660413);
myNode95.innerTranslation.vector.set(0,0,0);
myNode95.isVisible = false;

/* définition du node n°96*/
const myNode96 = object.addBox();
myNode96.point1.set(-18.0999,5.93012,-0.9369);
myNode96.point2.set(2.2978999999999985,18.09992,2.9919);
myNode96.innerRotation.center.set(0,0,0);
myNode96.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode96.innerRotation.angle.set(23.999998826660413);
myNode96.innerTranslation.vector.set(0,0,0);
myNode96.isVisible = false;

/* définition du node n°97*/
const myNode97 = object.addFuseOperation();
myNode97.leftArg.set(myNode95);
myNode97.rightArg.set(myNode96);
myNode97.isVisible = false;

/* définition du node n°98*/
const myNode98 = object.addBox();
myNode98.point1.set(-18.0999,4.91205,-18.0999);
myNode98.point2.set(18.099999999999998,18.09995,18.099999999999998);
myNode98.innerRotation.center.set(0,0,0);
myNode98.innerRotation.axis.set(0.0,0.0,0.0);
myNode98.innerRotation.angle.set(0.0);
myNode98.innerTranslation.vector.set(0,0,0);
myNode98.isVisible = false;

/* définition du node n°99*/
const myNode99 = object.addCutOperation();
myNode99.leftArg.set(myNode97);
myNode99.rightArg.set(myNode98);
myNode99.isVisible = false;

/* définition du node n°100*/
const myNode100 = object.addBox();
myNode100.point1.set(-18.0999,-18.0999,-0.93695);
myNode100.point2.set(3.7509999999999977,18.099999999999998,18.10095);
myNode100.innerRotation.center.set(0,0,0);
myNode100.innerRotation.axis.set(0.0,0.0,0.0);
myNode100.innerRotation.angle.set(0.0);
myNode100.innerTranslation.vector.set(0,0,0);
myNode100.isVisible = false;

/* définition du node n°101*/
const myNode101 = object.addCutOperation();
myNode101.leftArg.set(myNode99);
myNode101.rightArg.set(myNode100);
myNode101.isVisible = false;

/* définition du node n°102*/
const myNode102_1 = myNode5.clone();
myNode102_1.isVisible = false;
const myNode102_2 = object.addFuseOperation();
myNode102_2.leftArg.set(myNode102_1);
myNode102_2.rightArg.set(myNode27);
myNode102_2.isVisible = false;
const myNode102_3 = object.addFuseOperation();
myNode102_3.leftArg.set(myNode102_2);
myNode102_3.rightArg.set(myNode40);
myNode102_3.isVisible = false;
const myNode102_4 = object.addFuseOperation();
myNode102_4.leftArg.set(myNode102_3);
myNode102_4.rightArg.set(myNode41);
myNode102_4.isVisible = false;
const myNode102_5 = object.addFuseOperation();
myNode102_5.leftArg.set(myNode102_4);
myNode102_5.rightArg.set(myNode44);
myNode102_5.isVisible = false;
const myNode102_6 = object.addFuseOperation();
myNode102_6.leftArg.set(myNode102_5);
myNode102_6.rightArg.set(myNode45);
myNode102_6.isVisible = false;
const myNode102_7 = object.addFuseOperation();
myNode102_7.leftArg.set(myNode102_6);
myNode102_7.rightArg.set(myNode68);
myNode102_7.isVisible = false;
const myNode102_8 = object.addFuseOperation();
myNode102_8.leftArg.set(myNode102_7);
myNode102_8.rightArg.set(myNode82);
myNode102_8.isVisible = false;
const myNode102_9 = object.addFuseOperation();
myNode102_9.leftArg.set(myNode102_8);
myNode102_9.rightArg.set(myNode88);
myNode102_9.isVisible = false;
const myNode102_10 = object.addFuseOperation();
myNode102_10.leftArg.set(myNode102_9);
myNode102_10.rightArg.set(myNode93);
myNode102_10.isVisible = false;
const myNode102_11 = object.addFuseOperation();
myNode102_11.leftArg.set(myNode102_10);
myNode102_11.rightArg.set(myNode94);
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
myNode103.innerTranslation.vector.set(0,0,0);
myNode103.isVisible = false;

/* définition du node n°104*/
const myNode104 = object.addCommonOperation();
myNode104.leftArg.set(myNode102);
myNode104.rightArg.set(myNode103);
myNode104.isVisible = true;


/*END Geometry Object Definition*/