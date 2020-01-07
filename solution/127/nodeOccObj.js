/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.9999,-5.8929,-3.5889);
myNode0.point2.set(5.9999,5.8929,3.5898999999999996);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.isVisible = False

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(-4.525,-4.44,-2.9909);
myNode1.point2.set(-4.525,-4.44,-0.9371);
myNode1.radius.set(0.481);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.isVisible = False

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(4.545,-4.166,-2.99095);
myNode2.point2.set(4.545,-4.166,18.09995);
myNode2.radius.set(0.461);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode2.innerRotation.angle.set(3.141592653586273);
myNode2.isVisible = False

/* définition du node n°3*/
const myNode3 = object.addBox();
myNode3.point1.set(-2.04495,-18.1,-2.27695);
myNode3.point2.set(3.5669500000000003,-2.4251000000000023,2.99095);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode3.innerRotation.angle.set(0.41887900000000006);
myNode3.isVisible = False

/* définition du node n°4*/
const myNode4 = object.addFuseOperation();
myNode4.leftArg.set(myNode2);
myNode4.rightArg.set(myNode3);
myNode4.isVisible = False

/* définition du node n°5*/
const myNode5 = object.addCutOperation();
myNode5.leftArg.set(myNode1);
myNode5.rightArg.set(myNode4);
myNode5.isVisible = False

/* définition du node n°6*/
const myNode6 = object.addCylinder();
myNode6.point1.set(4.544,4.449,-2.9909);
myNode6.point2.set(4.544,4.449,2.9909);
myNode6.radius.set(0.462);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.isVisible = False

/* définition du node n°7*/
const myNode7 = object.addBox();
myNode7.point1.set(-2.0449,-18.0999,-2.9909);
myNode7.point2.set(3.5668999999999995,18.0999,-2.2771);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode7.innerRotation.angle.set(0.41887900000000006);
myNode7.isVisible = False

/* définition du node n°8*/
const myNode8 = object.addBox();
myNode8.point1.set(2.2981,-18.0999,-2.2769);
myNode8.point2.set(3.5659,18.0999,-0.9380999999999999);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode8.innerRotation.angle.set(0.41887900000000006);
myNode8.isVisible = False

/* définition du node n°9*/
const myNode9 = object.addCylinder();
myNode9.point1.set(1.165,-6.961,-2.9909);
myNode9.point2.set(1.165,-6.961,18.0999);
myNode9.radius.set(5.279);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.isVisible = False

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(3.7511,-3.6609,-2.9909);
myNode10.point2.set(4.9999,18.099899999999998,2.9909);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.isVisible = False

/* définition du node n°11*/
const myNode11 = object.addCommonOperation();
myNode11.leftArg.set(myNode9);
myNode11.rightArg.set(myNode10);
myNode11.isVisible = False

/* définition du node n°12*/
const myNode12_1 = object.addFuseOperation();
myNode12_1.leftArg.set(myNode7);
myNode12_1.rightArg.set(myNode7);
const myNode12_2 = object.addFuseOperation();
myNode12_2.leftArg.set(myNode12_1);
myNode12_2.rightArg.set(myNode8);
myNode12 = object.addFuseOperation();
myNode12.leftArg.set(myNode12_2);
myNode12.rightArg.set(myNode11);
myNode12.isVisible = False

/* définition du node n°13*/
const myNode13 = object.addBox();
myNode13.point1.set(-4.9999,-3.6609,-2.9909);
myNode13.point2.set(4.9999,18.099899999999998,18.0999);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);
myNode13.isVisible = False

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(1.675,-4.937,-18.0999);
myNode14.point2.set(1.675,-4.937,2.9909);
myNode14.radius.set(3.637);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);
myNode14.isVisible = False

/* définition du node n°15*/
const myNode15 = object.addCommonOperation();
myNode15.leftArg.set(myNode13);
myNode15.rightArg.set(myNode14);
myNode15.isVisible = False

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(-2.146,-0.806,-18.0999);
myNode16.point2.set(-2.146,-0.806,-2.277000000000001);
myNode16.radius.set(2.862);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);
myNode16.isVisible = False

/* définition du node n°17*/
const myNode17 = object.addCylinder();
myNode17.point1.set(-3.097,-1.28,-2.99095);
myNode17.point2.set(-3.097,-1.28,18.09995);
myNode17.radius.set(0.723);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode17.innerRotation.angle.set(3.141592653586273);
myNode17.isVisible = False

/* définition du node n°18*/
const myNode18 = object.addFuseOperation();
myNode18.leftArg.set(myNode16);
myNode18.rightArg.set(myNode17);
myNode18.isVisible = False

/* définition du node n°19*/
const myNode19 = object.addCutOperation();
myNode19.leftArg.set(myNode15);
myNode19.rightArg.set(myNode18);
myNode19.isVisible = False

/* définition du node n°20*/
const myNode20 = object.addCommonOperation();
myNode20.leftArg.set(myNode12);
myNode20.rightArg.set(myNode19);
myNode20.isVisible = False

/* définition du node n°21*/
const myNode21 = object.addBox();
myNode21.point1.set(2.29806,1.58709,-0.9369);
myNode21.point2.set(18.09986,4.4358900000000006,2.9919);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode21.innerRotation.angle.set(0.41887900000000006);
myNode21.isVisible = False

/* définition du node n°22*/
const myNode22 = object.addBox();
myNode22.point1.set(3.7511,-18.0999,-0.9369);
myNode22.point2.set(4.9999,4.911899999999999,18.1009);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(0.0,0.0,0.0);
myNode22.innerRotation.angle.set(0.0);
myNode22.isVisible = False

/* définition du node n°23*/
const myNode23 = object.addBox();
myNode23.point1.set(-2.0449,-18.0999,-2.9909);
myNode23.point2.set(-0.42610000000000015,0.9388999999999967,-2.2771);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode23.innerRotation.angle.set(0.41887900000000006);
myNode23.isVisible = False

/* définition du node n°24*/
const myNode24 = object.addFuseOperation();
myNode24.leftArg.set(myNode22);
myNode24.rightArg.set(myNode23);
myNode24.isVisible = False

/* définition du node n°25*/
const myNode25 = object.addCylinder();
myNode25.point1.set(1.364,3.837,-2.9909);
myNode25.point2.set(1.364,3.837,18.0999);
myNode25.radius.set(3.842);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(0.0,0.0,0.0);
myNode25.innerRotation.angle.set(0.0);
myNode25.isVisible = False

/* définition du node n°26*/
const myNode26 = object.addCommonOperation();
myNode26.leftArg.set(myNode21);
myNode26.rightArg.set(myNode24);
myNode26.isVisible = False

/* définition du node n°27*/
const myNode27 = object.addCylinder();
myNode27.point1.set(-3.528,4.472,0.9381);
myNode27.point2.set(-3.528,4.472,2.9919);
myNode27.radius.set(0.436);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode27.innerRotation.angle.set(3.141592653586273);
myNode27.isVisible = False

/* définition du node n°28*/
const myNode28 = object.addCylinder();
myNode28.point1.set(-1.348,1.979,-18.0999);
myNode28.point2.set(-1.348,1.979,-2.277100000000001);
myNode28.radius.set(0.094);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(0.0,0.0,0.0);
myNode28.innerRotation.angle.set(0.0);
myNode28.isVisible = False

/* définition du node n°29*/
const myNode29 = object.addBox();
myNode29.point1.set(-2.0449,0.939098,-2.9909);
myNode29.point2.set(18.099899999999998,4.436897999999999,-2.2771);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode29.innerRotation.angle.set(0.41887900000000006);
myNode29.isVisible = False

/* définition du node n°30*/
const myNode30 = object.addBox();
myNode30.point1.set(-0.425905,-18.0999,-2.9909);
myNode30.point2.set(2.298895,4.436899999999998,2.9909);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode30.innerRotation.angle.set(0.41887900000000006);
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
const myNode32 = object.addBox();
myNode32.point1.set(-0.425908,-18.0999,-2.9909);
myNode32.point2.set(18.099892,1.5869,-0.9371);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode32.innerRotation.angle.set(0.41887900000000006);
myNode32.isVisible = False

/* définition du node n°33*/
const myNode33 = object.addCylinder();
myNode33.point1.set(1.165,-6.961,-18.0999);
myNode33.point2.set(1.165,-6.961,18.099999999999998);
myNode33.radius.set(5.279);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);
myNode33.isVisible = False

/* définition du node n°34*/
const myNode34 = object.addCutOperation();
myNode34.leftArg.set(myNode32);
myNode34.rightArg.set(myNode33);
myNode34.isVisible = False

/* définition du node n°35*/
const myNode35 = object.addBox();
myNode35.point1.set(-18.0999,0.9391,-2.9909);
myNode35.point2.set(2.2978999999999985,5.9299,18.0999);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode35.innerRotation.angle.set(0.41887900000000006);
myNode35.isVisible = False

/* définition du node n°36*/
const myNode36 = object.addCylinder();
myNode36.point1.set(0.268,1.622,-2.27695);
myNode36.point2.set(0.268,1.622,18.09995);
myNode36.radius.set(0.448);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(0.0,0.0,0.0);
myNode36.innerRotation.angle.set(0.0);
myNode36.isVisible = False

/* définition du node n°37*/
const myNode37 = object.addCutOperation();
myNode37.leftArg.set(myNode35);
myNode37.rightArg.set(myNode36);
myNode37.isVisible = False

/* définition du node n°38*/
const myNode38 = object.addFuseOperation();
myNode38.leftArg.set(myNode34);
myNode38.rightArg.set(myNode37);
myNode38.isVisible = False

/* définition du node n°39*/
const myNode39 = object.addCommonOperation();
myNode39.leftArg.set(myNode31);
myNode39.rightArg.set(myNode38);
myNode39.isVisible = False

/* définition du node n°40*/
const myNode40 = object.addCylinder();
myNode40.point1.set(3.117,-0.384,-2.99095);
myNode40.point2.set(3.117,-0.384,-0.9370500000000002);
myNode40.radius.set(0.739);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(0.0,0.0,0.0);
myNode40.innerRotation.angle.set(0.0);
myNode40.isVisible = False

/* définition du node n°41*/
const myNode41 = object.addCylinder();
myNode41.point1.set(0.178,1.518,-2.99095);
myNode41.point2.set(0.178,1.518,18.09995);
myNode41.radius.set(0.222);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,0.0,0.0);
myNode41.innerRotation.angle.set(0.0);
myNode41.isVisible = False

/* définition du node n°42*/
const myNode42 = object.addBox();
myNode42.point1.set(-2.04495,0.939048,-2.99095);
myNode42.point2.set(18.09995,4.436948,2.99095);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode42.innerRotation.angle.set(0.41887900000000006);
myNode42.isVisible = False

/* définition du node n°43*/
const myNode43 = object.addBox();
myNode43.point1.set(-18.1,-18.1,-2.991);
myNode43.point2.set(3.7509999999999977,2.070999999999998,-0.9370000000000003);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(0.0,0.0,0.0);
myNode43.innerRotation.angle.set(0.0);
myNode43.isVisible = False

/* définition du node n°44*/
const myNode44 = object.addCutOperation();
myNode44.leftArg.set(myNode42);
myNode44.rightArg.set(myNode43);
myNode44.isVisible = False

/* définition du node n°45*/
const myNode45 = object.addBox();
myNode45.point1.set(-18.0999,-18.0999,-2.27695);
myNode45.point2.set(2.3729999999999976,1.6219999999999999,2.99095);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(0.0,0.0,0.0);
myNode45.innerRotation.angle.set(0.0);
myNode45.isVisible = False

/* définition du node n°46*/
const myNode46 = object.addCylinder();
myNode46.point1.set(-2.146,-0.806,-2.99095);
myNode46.point2.set(-2.146,-0.806,-2.27705);
myNode46.radius.set(2.862);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(0.0,0.0,0.0);
myNode46.innerRotation.angle.set(0.0);
myNode46.isVisible = False

/* définition du node n°47*/
const myNode47 = object.addBox();
myNode47.point1.set(-18.0999,2.07105,-2.99095);
myNode47.point2.set(2.3729999999999976,4.91195,-2.27705);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(0.0,0.0,0.0);
myNode47.innerRotation.angle.set(0.0);
myNode47.isVisible = False

/* définition du node n°48*/
const myNode48_1 = object.addFuseOperation();
myNode48_1.leftArg.set(myNode40);
myNode48_1.rightArg.set(myNode40);
const myNode48_2 = object.addFuseOperation();
myNode48_2.leftArg.set(myNode48_1);
myNode48_2.rightArg.set(myNode41);
const myNode48_3 = object.addFuseOperation();
myNode48_3.leftArg.set(myNode48_2);
myNode48_3.rightArg.set(myNode44);
const myNode48_4 = object.addFuseOperation();
myNode48_4.leftArg.set(myNode48_3);
myNode48_4.rightArg.set(myNode45);
const myNode48_5 = object.addFuseOperation();
myNode48_5.leftArg.set(myNode48_4);
myNode48_5.rightArg.set(myNode46);
myNode48 = object.addFuseOperation();
myNode48.leftArg.set(myNode48_5);
myNode48.rightArg.set(myNode47);
myNode48.isVisible = False

/* définition du node n°49*/
const myNode49 = object.addCutOperation();
myNode49.leftArg.set(myNode39);
myNode49.rightArg.set(myNode48);
myNode49.isVisible = False

/* définition du node n°50*/
const myNode50 = object.addBox();
myNode50.point1.set(-2.0449,4.4361,-2.9909);
myNode50.point2.set(18.099899999999998,5.9289,2.9909);
myNode50.innerRotation.center.set(0,0,0);
myNode50.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode50.innerRotation.angle.set(0.41887900000000006);
myNode50.isVisible = False

/* définition du node n°51*/
const myNode51 = object.addBox();
myNode51.point1.set(4.1431,2.0711,-2.9909);
myNode51.point2.set(4.999899999999999,18.0999,2.9909);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(0.0,0.0,0.0);
myNode51.innerRotation.angle.set(0.0);
myNode51.isVisible = False

/* définition du node n°52*/
const myNode52 = object.addCommonOperation();
myNode52.leftArg.set(myNode50);
myNode52.rightArg.set(myNode51);
myNode52.isVisible = False

/* définition du node n°53*/
const myNode53 = object.addCylinder();
myNode53.point1.set(4.544,4.449,-0.9369);
myNode53.point2.set(4.544,4.449,2.9919);
myNode53.radius.set(0.462);
myNode53.innerRotation.center.set(0,0,0);
myNode53.innerRotation.axis.set(0.0,0.0,0.0);
myNode53.innerRotation.angle.set(0.0);
myNode53.isVisible = False

/* définition du node n°54*/
const myNode54 = object.addBox();
myNode54.point1.set(-18.0999,-18.0999,-18.0999);
myNode54.point2.set(6.000899999999998,-2.4251000000000023,-2.991100000000001);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode54.innerRotation.angle.set(0.41887900000000006);
myNode54.isVisible = False

/* définition du node n°55*/
const myNode55 = object.addBox();
myNode55.point1.set(-18.0999,-4.9109,-2.9909);
myNode55.point2.set(4.999899999999997,-3.6611,2.9909);
myNode55.innerRotation.center.set(0,0,0);
myNode55.innerRotation.axis.set(0.0,0.0,0.0);
myNode55.innerRotation.angle.set(0.0);
myNode55.isVisible = False

/* définition du node n°56*/
const myNode56 = object.addFuseOperation();
myNode56.leftArg.set(myNode54);
myNode56.rightArg.set(myNode55);
myNode56.isVisible = False

/* définition du node n°57*/
const myNode57 = object.addCylinder();
myNode57.point1.set(-4.56,-4.473,-2.9909);
myNode57.point2.set(-4.56,-4.473,2.9909);
myNode57.radius.set(0.437);
myNode57.innerRotation.center.set(0,0,0);
myNode57.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode57.innerRotation.angle.set(3.141592653586273);
myNode57.isVisible = False

/* définition du node n°58*/
const myNode58 = object.addBox();
myNode58.point1.set(-2.0449,-18.0999,-2.9909);
myNode58.point2.set(6.001899999999999,-2.4251000000000023,2.9909);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode58.innerRotation.angle.set(0.41887900000000006);
myNode58.isVisible = False

/* définition du node n°59*/
const myNode59 = object.addFuseOperation();
myNode59.leftArg.set(myNode57);
myNode59.rightArg.set(myNode58);
myNode59.isVisible = False

/* définition du node n°60*/
const myNode60 = object.addCommonOperation();
myNode60.leftArg.set(myNode56);
myNode60.rightArg.set(myNode59);
myNode60.isVisible = False

/* définition du node n°61*/
const myNode61 = object.addBox();
myNode61.point1.set(4.1431,-18.0999,-2.9909);
myNode61.point2.set(18.099899999999998,18.0999,2.9909);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(0.0,0.0,0.0);
myNode61.innerRotation.angle.set(0.0);
myNode61.isVisible = False

/* définition du node n°62*/
const myNode62 = object.addBox();
myNode62.point1.set(-18.0999,-18.0999,-2.9909);
myNode62.point2.set(18.0999,5.007899999999999,2.9909);
myNode62.innerRotation.center.set(0,0,0);
myNode62.innerRotation.axis.set(-3.072938784397386,-0.6531732693475747,8.666269604173044e-07);
myNode62.innerRotation.angle.set(3.141590057987298);
myNode62.isVisible = False

/* définition du node n°63*/
const myNode63 = object.addFuseOperation();
myNode63.leftArg.set(myNode61);
myNode63.rightArg.set(myNode62);
myNode63.isVisible = False

/* définition du node n°64*/
const myNode64 = object.addBox();
myNode64.point1.set(-4.9999,-4.6249,-18.0999);
myNode64.point2.set(4.9999,18.099899999999998,2.9909);
myNode64.innerRotation.center.set(0,0,0);
myNode64.innerRotation.axis.set(0.0,0.0,0.0);
myNode64.innerRotation.angle.set(0.0);
myNode64.isVisible = False

/* définition du node n°65*/
const myNode65 = object.addCommonOperation();
myNode65.leftArg.set(myNode63);
myNode65.rightArg.set(myNode64);
myNode65.isVisible = False

/* définition du node n°66*/
const myNode66 = object.addFuseOperation();
myNode66.leftArg.set(myNode60);
myNode66.rightArg.set(myNode65);
myNode66.isVisible = False

/* définition du node n°67*/
const myNode67 = object.addCylinder();
myNode67.point1.set(-0.177,-4.072,-18.0999);
myNode67.point2.set(-0.177,-4.072,18.099999999999998);
myNode67.radius.set(0.223);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode67.innerRotation.angle.set(3.141592653586273);
myNode67.isVisible = False

/* définition du node n°68*/
const myNode68 = object.addBox();
myNode68.point1.set(2.37305,-3.66095,-2.99095);
myNode68.point2.set(4.99995,18.09995,2.99095);
myNode68.innerRotation.center.set(0,0,0);
myNode68.innerRotation.axis.set(0.0,0.0,0.0);
myNode68.innerRotation.angle.set(0.0);
myNode68.isVisible = False

/* définition du node n°69*/
const myNode69 = object.addCylinder();
myNode69.point1.set(-4.461,-4.074,-2.99095);
myNode69.point2.set(-4.461,-4.074,-2.27705);
myNode69.radius.set(0.222);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(0.0,0.0,0.0);
myNode69.innerRotation.angle.set(0.0);
myNode69.isVisible = False

/* définition du node n°70*/
const myNode70 = object.addCylinder();
myNode70.point1.set(-0.993,6.091,-18.0999);
myNode70.point2.set(-0.993,6.091,2.9909999999999997);
myNode70.radius.set(4.363);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(0.0,0.0,0.0);
myNode70.innerRotation.angle.set(0.0);
myNode70.isVisible = False

/* définition du node n°71*/
const myNode71 = object.addBox();
myNode71.point1.set(-2.04495,-18.1,-0.93695);
myNode71.point2.set(3.5669500000000003,18.099899999999998,2.99195);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode71.innerRotation.angle.set(0.41887900000000006);
myNode71.isVisible = False

/* définition du node n°72*/
const myNode72 = object.addBox();
myNode72.point1.set(-4.99995,-4.62495,-2.27695);
myNode72.point2.set(0.7159500000000003,18.09995,-0.9380499999999998);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(0.0,0.0,0.0);
myNode72.innerRotation.angle.set(0.0);
myNode72.isVisible = False

/* définition du node n°73*/
const myNode73 = object.addBox();
myNode73.point1.set(-18.0999,-4.91095,-0.93695);
myNode73.point2.set(3.7509999999999977,18.09995,2.99195);
myNode73.innerRotation.center.set(0,0,0);
myNode73.innerRotation.axis.set(0.0,0.0,0.0);
myNode73.innerRotation.angle.set(0.0);
myNode73.isVisible = False

/* définition du node n°74*/
const myNode74 = object.addBox();
myNode74.point1.set(-18.0999,-3.66095,-18.0999);
myNode74.point2.set(0.7159999999999975,18.09995,2.9909999999999997);
myNode74.innerRotation.center.set(0,0,0);
myNode74.innerRotation.axis.set(0.0,0.0,0.0);
myNode74.innerRotation.angle.set(0.0);
myNode74.isVisible = False

/* définition du node n°75*/
const myNode75_1 = object.addFuseOperation();
myNode75_1.leftArg.set(myNode67);
myNode75_1.rightArg.set(myNode67);
const myNode75_2 = object.addFuseOperation();
myNode75_2.leftArg.set(myNode75_1);
myNode75_2.rightArg.set(myNode68);
const myNode75_3 = object.addFuseOperation();
myNode75_3.leftArg.set(myNode75_2);
myNode75_3.rightArg.set(myNode69);
const myNode75_4 = object.addFuseOperation();
myNode75_4.leftArg.set(myNode75_3);
myNode75_4.rightArg.set(myNode70);
const myNode75_5 = object.addFuseOperation();
myNode75_5.leftArg.set(myNode75_4);
myNode75_5.rightArg.set(myNode71);
const myNode75_6 = object.addFuseOperation();
myNode75_6.leftArg.set(myNode75_5);
myNode75_6.rightArg.set(myNode72);
const myNode75_7 = object.addFuseOperation();
myNode75_7.leftArg.set(myNode75_6);
myNode75_7.rightArg.set(myNode73);
myNode75 = object.addFuseOperation();
myNode75.leftArg.set(myNode75_7);
myNode75.rightArg.set(myNode74);
myNode75.isVisible = False

/* définition du node n°76*/
const myNode76 = object.addCutOperation();
myNode76.leftArg.set(myNode66);
myNode76.rightArg.set(myNode75);
myNode76.isVisible = False

/* définition du node n°77*/
const myNode77 = object.addBox();
myNode77.point1.set(2.2981,-18.0999,-2.9909);
myNode77.point2.set(6.0009,18.0999,-0.9371);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode77.innerRotation.angle.set(0.41887900000000006);
myNode77.isVisible = False

/* définition du node n°78*/
const myNode78 = object.addCylinder();
myNode78.point1.set(1.165,-6.961,-2.9909);
myNode78.point2.set(1.165,-6.961,-0.9371);
myNode78.radius.set(5.279);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(0.0,0.0,0.0);
myNode78.innerRotation.angle.set(0.0);
myNode78.isVisible = False

/* définition du node n°79*/
const myNode79 = object.addCylinder();
myNode79.point1.set(0.264,-4.171,-2.27695);
myNode79.point2.set(0.264,-4.171,18.09995);
myNode79.radius.set(0.453);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(0.0,0.0,0.0);
myNode79.innerRotation.angle.set(0.0);
myNode79.isVisible = False

/* définition du node n°80*/
const myNode80 = object.addCutOperation();
myNode80.leftArg.set(myNode78);
myNode80.rightArg.set(myNode79);
myNode80.isVisible = False

/* définition du node n°81*/
const myNode81 = object.addBox();
myNode81.point1.set(-18.0999,-4.9109,-18.0999);
myNode81.point2.set(4.142899999999997,18.099899999999998,-0.9371000000000009);
myNode81.innerRotation.center.set(0,0,0);
myNode81.innerRotation.axis.set(0.0,0.0,0.0);
myNode81.innerRotation.angle.set(0.0);
myNode81.isVisible = False

/* définition du node n°82*/
const myNode82 = object.addCommonOperation();
myNode82.leftArg.set(myNode77);
myNode82.rightArg.set(myNode80);
myNode82.isVisible = False

/* définition du node n°83*/
const myNode83 = object.addBox();
myNode83.point1.set(-18.0999,-18.0999,-0.9369);
myNode83.point2.set(2.2978999999999985,4.436899999999998,2.9919);
myNode83.innerRotation.center.set(0,0,0);
myNode83.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode83.innerRotation.angle.set(0.41887900000000006);
myNode83.isVisible = False

/* définition du node n°84*/
const myNode84 = object.addBox();
myNode84.point1.set(-18.0999,5.93012,-0.9369);
myNode84.point2.set(2.2978999999999985,18.09992,2.9919);
myNode84.innerRotation.center.set(0,0,0);
myNode84.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode84.innerRotation.angle.set(0.41887900000000006);
myNode84.isVisible = False

/* définition du node n°85*/
const myNode85 = object.addFuseOperation();
myNode85.leftArg.set(myNode83);
myNode85.rightArg.set(myNode84);
myNode85.isVisible = False

/* définition du node n°86*/
const myNode86 = object.addBox();
myNode86.point1.set(-18.0999,4.91205,-18.0999);
myNode86.point2.set(18.099999999999998,18.09995,18.099999999999998);
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
myNode88.point1.set(-18.0999,-18.0999,-0.93695);
myNode88.point2.set(3.7509999999999977,18.099999999999998,18.10095);
myNode88.innerRotation.center.set(0,0,0);
myNode88.innerRotation.axis.set(0.0,0.0,0.0);
myNode88.innerRotation.angle.set(0.0);
myNode88.isVisible = False

/* définition du node n°89*/
const myNode89 = object.addCutOperation();
myNode89.leftArg.set(myNode87);
myNode89.rightArg.set(myNode88);
myNode89.isVisible = False

/* définition du node n°90*/
const myNode90 = object.addBox();
myNode90.point1.set(2.3731,-18.0999,-2.9909);
myNode90.point2.set(4.9999,4.911899999999999,-0.9371);
myNode90.innerRotation.center.set(0,0,0);
myNode90.innerRotation.axis.set(0.0,0.0,0.0);
myNode90.innerRotation.angle.set(0.0);
myNode90.isVisible = False

/* définition du node n°91*/
const myNode91 = object.addBox();
myNode91.point1.set(-0.425955,5.53105,-18.0999);
myNode91.point2.set(18.099945,5.92995,-0.9370000000000012);
myNode91.innerRotation.center.set(0,0,0);
myNode91.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode91.innerRotation.angle.set(0.41887900000000006);
myNode91.isVisible = False

/* définition du node n°92*/
const myNode92 = object.addCutOperation();
myNode92.leftArg.set(myNode90);
myNode92.rightArg.set(myNode91);
myNode92.isVisible = False

/* définition du node n°93*/
const myNode93 = object.addBox();
myNode93.point1.set(3.7511,-18.0999,-2.9909);
myNode93.point2.set(4.1429,4.911899999999999,2.9909);
myNode93.innerRotation.center.set(0,0,0);
myNode93.innerRotation.axis.set(0.0,0.0,0.0);
myNode93.innerRotation.angle.set(0.0);
myNode93.isVisible = False

/* définition du node n°94*/
const myNode94 = object.addFuseOperation();
myNode94.leftArg.set(myNode92);
myNode94.rightArg.set(myNode93);
myNode94.isVisible = False

/* définition du node n°95*/
const myNode95 = object.addCylinder();
myNode95.point1.set(1.364,3.837,-18.0999);
myNode95.point2.set(1.364,3.837,2.9909);
myNode95.radius.set(3.842);
myNode95.innerRotation.center.set(0,0,0);
myNode95.innerRotation.axis.set(0.0,0.0,0.0);
myNode95.innerRotation.angle.set(0.0);
myNode95.isVisible = False

/* définition du node n°96*/
const myNode96 = object.addBox();
myNode96.point1.set(-18.1,-1.85095,-18.0999);
myNode96.point2.set(18.099899999999998,18.09995,0.9379999999999988);
myNode96.innerRotation.center.set(0,0,0);
myNode96.innerRotation.axis.set(-3.072938784397386,-0.6531732693475747,8.666269604173044e-07);
myNode96.innerRotation.angle.set(3.141590057987298);
myNode96.isVisible = False

/* définition du node n°97*/
const myNode97 = object.addCutOperation();
myNode97.leftArg.set(myNode95);
myNode97.rightArg.set(myNode96);
myNode97.isVisible = False

/* définition du node n°98*/
const myNode98 = object.addBox();
myNode98.point1.set(2.29801,5.53103,-2.99095);
myNode98.point2.set(18.09991,18.09993,-0.9370500000000002);
myNode98.innerRotation.center.set(0,0,0);
myNode98.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode98.innerRotation.angle.set(0.41887900000000006);
myNode98.isVisible = False

/* définition du node n°99*/
const myNode99 = object.addCylinder();
myNode99.point1.set(-0.993,6.091,-18.0999);
myNode99.point2.set(-0.993,6.091,-0.9370000000000012);
myNode99.radius.set(4.363);
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
const myNode102 = object.addCommonOperation();
myNode102.leftArg.set(myNode94);
myNode102.rightArg.set(myNode101);
myNode102.isVisible = False

/* définition du node n°103*/
const myNode103_1 = object.addFuseOperation();
myNode103_1.leftArg.set(myNode5);
myNode103_1.rightArg.set(myNode5);
const myNode103_2 = object.addFuseOperation();
myNode103_2.leftArg.set(myNode103_1);
myNode103_2.rightArg.set(myNode6);
const myNode103_3 = object.addFuseOperation();
myNode103_3.leftArg.set(myNode103_2);
myNode103_3.rightArg.set(myNode20);
const myNode103_4 = object.addFuseOperation();
myNode103_4.leftArg.set(myNode103_3);
myNode103_4.rightArg.set(myNode26);
const myNode103_5 = object.addFuseOperation();
myNode103_5.leftArg.set(myNode103_4);
myNode103_5.rightArg.set(myNode27);
const myNode103_6 = object.addFuseOperation();
myNode103_6.leftArg.set(myNode103_5);
myNode103_6.rightArg.set(myNode49);
const myNode103_7 = object.addFuseOperation();
myNode103_7.leftArg.set(myNode103_6);
myNode103_7.rightArg.set(myNode52);
const myNode103_8 = object.addFuseOperation();
myNode103_8.leftArg.set(myNode103_7);
myNode103_8.rightArg.set(myNode53);
const myNode103_9 = object.addFuseOperation();
myNode103_9.leftArg.set(myNode103_8);
myNode103_9.rightArg.set(myNode76);
const myNode103_10 = object.addFuseOperation();
myNode103_10.leftArg.set(myNode103_9);
myNode103_10.rightArg.set(myNode82);
const myNode103_11 = object.addFuseOperation();
myNode103_11.leftArg.set(myNode103_10);
myNode103_11.rightArg.set(myNode89);
myNode103 = object.addFuseOperation();
myNode103.leftArg.set(myNode103_11);
myNode103.rightArg.set(myNode102);
myNode103.isVisible = False

/* définition du node n°104*/
const myNode104 = object.addCommonOperation();
myNode104.leftArg.set(myNode0);
myNode104.rightArg.set(myNode103);
myNode104.isVisible = True


/*END Geometry Object Definition*/