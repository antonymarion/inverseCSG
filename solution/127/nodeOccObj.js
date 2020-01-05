/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.9999,-5.8929,-3.5889);
myNode0.point2.set(11.9998,11.7858,7.1788);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-18.0999,5.93012,-0.9369);
myNode1.point2.set(20.3978,12.1698,3.9288);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode1.innerRotation.angle.set(0.41887900000000006);

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-18.0999,-18.0999,-0.9369);
myNode2.point2.set(20.3978,22.5368,3.9288);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode2.innerRotation.angle.set(0.41887900000000006);

/* définition du node n°3*/
const myNode3 = object.addFuseOperation();
myNode3.leftArg.set(myNode1);
myNode3.rightArg.set(myNode2);

/* définition du node n°4*/
const myNode4 = object.addBox();
myNode4.point1.set(-18.0999,4.91205,-18.0999);
myNode4.point2.set(36.1999,13.1879,36.1999);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);

/* définition du node n°5*/
const myNode5 = object.addCutOperation();
myNode5.leftArg.set(myNode3);
myNode5.rightArg.set(myNode4);

/* définition du node n°6*/
const myNode6 = object.addBox();
myNode6.point1.set(-18.0999,-18.0999,-0.93695);
myNode6.point2.set(21.8509,36.1999,19.0379);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);

/* définition du node n°7*/
const myNode7 = object.addCutOperation();
myNode7.leftArg.set(myNode5);
myNode7.rightArg.set(myNode6);

/* définition du node n°8*/
const myNode8 = object.addCylinder();
myNode8.point1.set(-4.525,-4.44,-2.9909);
myNode8.point2.set(0,0,2.0538);
myNode8.radius.set(0.481);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);

/* définition du node n°9*/
const myNode9 = object.addCylinder();
myNode9.point1.set(4.545,-4.166,-2.99095);
myNode9.point2.set(0,0,21.0909);
myNode9.radius.set(0.461);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode9.innerRotation.angle.set(3.141592653586273);

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(-2.04495,-18.1,-2.27695);
myNode10.point2.set(5.6119,15.6749,5.2679);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode10.innerRotation.angle.set(0.41887900000000006);

/* définition du node n°11*/
const myNode11 = object.addFuseOperation();
myNode11.leftArg.set(myNode9);
myNode11.rightArg.set(myNode10);

/* définition du node n°12*/
const myNode12 = object.addCutOperation();
myNode12.leftArg.set(myNode8);
myNode12.rightArg.set(myNode11);

/* définition du node n°13*/
const myNode13 = object.addCylinder();
myNode13.point1.set(4.544,4.449,-2.9909);
myNode13.point2.set(0,0,5.9818);
myNode13.radius.set(0.462);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(-3.528,4.472,0.9381);
myNode14.point2.set(0,0,2.0538);
myNode14.radius.set(0.436);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode14.innerRotation.angle.set(3.141592653586273);

/* définition du node n°15*/
const myNode15 = object.addCylinder();
myNode15.point1.set(1.364,3.837,-2.9909);
myNode15.point2.set(0,0,21.0908);
myNode15.radius.set(3.842);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);

/* définition du node n°16*/
const myNode16 = object.addBox();
myNode16.point1.set(2.29806,1.58709,-0.9369);
myNode16.point2.set(15.8018,2.8488,3.9288);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode16.innerRotation.angle.set(0.41887900000000006);

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(-2.0449,-18.0999,-2.9909);
myNode17.point2.set(1.6188,19.0388,0.7138);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode17.innerRotation.angle.set(0.41887900000000006);

/* définition du node n°18*/
const myNode18 = object.addBox();
myNode18.point1.set(3.7511,-18.0999,-0.9369);
myNode18.point2.set(1.2488,23.0118,19.0378);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);

/* définition du node n°19*/
const myNode19 = object.addFuseOperation();
myNode19.leftArg.set(myNode17);
myNode19.rightArg.set(myNode18);

/* définition du node n°20*/
const myNode20 = object.addCommonOperation();
myNode20.leftArg.set(myNode15);
myNode20.rightArg.set(myNode16);

/* définition du node n°21*/
const myNode21 = object.addCylinder();
myNode21.point1.set(4.544,4.449,-0.9369);
myNode21.point2.set(0,0,3.9288);
myNode21.radius.set(0.462);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);

/* définition du node n°22*/
const myNode22 = object.addBox();
myNode22.point1.set(-2.0449,0.939098,-2.9909);
myNode22.point2.set(20.1448,3.4978,0.7138);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode22.innerRotation.angle.set(0.41887900000000006);

/* définition du node n°23*/
const myNode23 = object.addBox();
myNode23.point1.set(-0.425905,-18.0999,-2.9909);
myNode23.point2.set(2.7248,22.5368,5.9818);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode23.innerRotation.angle.set(0.41887900000000006);

/* définition du node n°24*/
const myNode24 = object.addCylinder();
myNode24.point1.set(-1.348,1.979,-18.0999);
myNode24.point2.set(0,0,15.8228);
myNode24.radius.set(0.094);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);

/* définition du node n°25*/
const myNode25_1 = object.addFuseOperation();
myNode25_1.leftArg.set(myNode22);
myNode25_1.rightArg.set(myNode22);
const myNode25_2 = object.addFuseOperation();
myNode25_2.leftArg.set(myNode25_1);
myNode25_2.rightArg.set(myNode23);
myNode25 = object.addFuseOperation();
myNode25.leftArg.set(myNode25_2);
myNode25.rightArg.set(myNode24);

/* définition du node n°26*/
const myNode26 = object.addBox();
myNode26.point1.set(-0.425908,-18.0999,-2.9909);
myNode26.point2.set(18.5258,19.6868,2.0538);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode26.innerRotation.angle.set(0.41887900000000006);

/* définition du node n°27*/
const myNode27 = object.addCylinder();
myNode27.point1.set(1.165,-6.961,-18.0999);
myNode27.point2.set(0,0,36.1999);
myNode27.radius.set(5.279);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);

/* définition du node n°28*/
const myNode28 = object.addCutOperation();
myNode28.leftArg.set(myNode26);
myNode28.rightArg.set(myNode27);

/* définition du node n°29*/
const myNode29 = object.addBox();
myNode29.point1.set(-18.0999,0.9391,-2.9909);
myNode29.point2.set(20.3978,4.9908,21.0908);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode29.innerRotation.angle.set(0.41887900000000006);

/* définition du node n°30*/
const myNode30 = object.addCylinder();
myNode30.point1.set(0.268,1.622,-2.27695);
myNode30.point2.set(0,0,20.3769);
myNode30.radius.set(0.448);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);

/* définition du node n°31*/
const myNode31 = object.addCutOperation();
myNode31.leftArg.set(myNode29);
myNode31.rightArg.set(myNode30);

/* définition du node n°32*/
const myNode32 = object.addFuseOperation();
myNode32.leftArg.set(myNode28);
myNode32.rightArg.set(myNode31);

/* définition du node n°33*/
const myNode33 = object.addCommonOperation();
myNode33.leftArg.set(myNode25);
myNode33.rightArg.set(myNode32);

/* définition du node n°34*/
const myNode34 = object.addCylinder();
myNode34.point1.set(-2.146,-0.806,-2.99095);
myNode34.point2.set(0,0,0.7139);
myNode34.radius.set(2.862);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(0.0,0.0,0.0);
myNode34.innerRotation.angle.set(0.0);

/* définition du node n°35*/
const myNode35 = object.addBox();
myNode35.point1.set(-18.0999,-18.0999,-2.27695);
myNode35.point2.set(20.4729,19.7219,5.2679);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,0.0);
myNode35.innerRotation.angle.set(0.0);

/* définition du node n°36*/
const myNode36 = object.addCylinder();
myNode36.point1.set(3.117,-0.384,-2.99095);
myNode36.point2.set(0,0,2.0539);
myNode36.radius.set(0.739);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(0.0,0.0,0.0);
myNode36.innerRotation.angle.set(0.0);

/* définition du node n°37*/
const myNode37 = object.addCylinder();
myNode37.point1.set(0.178,1.518,-2.99095);
myNode37.point2.set(0,0,21.0909);
myNode37.radius.set(0.222);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0,0.0,0.0);
myNode37.innerRotation.angle.set(0.0);

/* définition du node n°38*/
const myNode38 = object.addBox();
myNode38.point1.set(-18.0999,2.07105,-2.99095);
myNode38.point2.set(20.4729,2.8409,0.7139);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(0.0,0.0,0.0);
myNode38.innerRotation.angle.set(0.0);

/* définition du node n°39*/
const myNode39 = object.addBox();
myNode39.point1.set(-2.04495,0.939048,-2.99095);
myNode39.point2.set(20.1449,3.4979,5.9819);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode39.innerRotation.angle.set(0.41887900000000006);

/* définition du node n°40*/
const myNode40 = object.addBox();
myNode40.point1.set(-18.1,-18.1,-2.991);
myNode40.point2.set(21.851,20.171,2.054);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(0.0,0.0,0.0);
myNode40.innerRotation.angle.set(0.0);

/* définition du node n°41*/
const myNode41 = object.addCutOperation();
myNode41.leftArg.set(myNode39);
myNode41.rightArg.set(myNode40);

/* définition du node n°42*/
const myNode42_1 = object.addFuseOperation();
myNode42_1.leftArg.set(myNode34);
myNode42_1.rightArg.set(myNode34);
const myNode42_2 = object.addFuseOperation();
myNode42_2.leftArg.set(myNode42_1);
myNode42_2.rightArg.set(myNode35);
const myNode42_3 = object.addFuseOperation();
myNode42_3.leftArg.set(myNode42_2);
myNode42_3.rightArg.set(myNode36);
const myNode42_4 = object.addFuseOperation();
myNode42_4.leftArg.set(myNode42_3);
myNode42_4.rightArg.set(myNode37);
const myNode42_5 = object.addFuseOperation();
myNode42_5.leftArg.set(myNode42_4);
myNode42_5.rightArg.set(myNode38);
myNode42 = object.addFuseOperation();
myNode42.leftArg.set(myNode42_5);
myNode42.rightArg.set(myNode41);

/* définition du node n°43*/
const myNode43 = object.addCutOperation();
myNode43.leftArg.set(myNode33);
myNode43.rightArg.set(myNode42);

/* définition du node n°44*/
const myNode44 = object.addCylinder();
myNode44.point1.set(1.165,-6.961,-2.9909);
myNode44.point2.set(0,0,2.0538);
myNode44.radius.set(5.279);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(0.0,0.0,0.0);
myNode44.innerRotation.angle.set(0.0);

/* définition du node n°45*/
const myNode45 = object.addCylinder();
myNode45.point1.set(0.264,-4.171,-2.27695);
myNode45.point2.set(0,0,20.3769);
myNode45.radius.set(0.453);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(0.0,0.0,0.0);
myNode45.innerRotation.angle.set(0.0);

/* définition du node n°46*/
const myNode46 = object.addCutOperation();
myNode46.leftArg.set(myNode44);
myNode46.rightArg.set(myNode45);

/* définition du node n°47*/
const myNode47 = object.addBox();
myNode47.point1.set(2.2981,-18.0999,-2.9909);
myNode47.point2.set(3.7028,36.1998,2.0538);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode47.innerRotation.angle.set(0.41887900000000006);

/* définition du node n°48*/
const myNode48 = object.addBox();
myNode48.point1.set(-18.0999,-4.9109,-18.0999);
myNode48.point2.set(22.2428,23.0108,17.1628);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);

/* définition du node n°49*/
const myNode49 = object.addCommonOperation();
myNode49.leftArg.set(myNode46);
myNode49.rightArg.set(myNode47);

/* définition du node n°50*/
const myNode50 = object.addBox();
myNode50.point1.set(3.7511,-18.0999,-2.9909);
myNode50.point2.set(0.3918,23.0118,5.9818);
myNode50.innerRotation.center.set(0,0,0);
myNode50.innerRotation.axis.set(0.0,0.0,0.0);
myNode50.innerRotation.angle.set(0.0);

/* définition du node n°51*/
const myNode51 = object.addBox();
myNode51.point1.set(2.3731,-18.0999,-2.9909);
myNode51.point2.set(2.6268,23.0118,2.0538);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(0.0,0.0,0.0);
myNode51.innerRotation.angle.set(0.0);

/* définition du node n°52*/
const myNode52 = object.addBox();
myNode52.point1.set(-0.425955,5.53105,-18.0999);
myNode52.point2.set(18.5259,0.3989,17.1629);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode52.innerRotation.angle.set(0.41887900000000006);

/* définition du node n°53*/
const myNode53 = object.addCutOperation();
myNode53.leftArg.set(myNode51);
myNode53.rightArg.set(myNode52);

/* définition du node n°54*/
const myNode54 = object.addFuseOperation();
myNode54.leftArg.set(myNode50);
myNode54.rightArg.set(myNode53);

/* définition du node n°55*/
const myNode55 = object.addCylinder();
myNode55.point1.set(1.364,3.837,-18.0999);
myNode55.point2.set(0,0,21.0908);
myNode55.radius.set(3.842);
myNode55.innerRotation.center.set(0,0,0);
myNode55.innerRotation.axis.set(0.0,0.0,0.0);
myNode55.innerRotation.angle.set(0.0);

/* définition du node n°56*/
const myNode56 = object.addBox();
myNode56.point1.set(-18.1,-1.85095,-18.0999);
myNode56.point2.set(36.1999,19.9509,19.0379);
myNode56.innerRotation.center.set(0,0,0);
myNode56.innerRotation.axis.set(-3.072938784397386,-0.6531732693475747,8.666269604173044e-07);
myNode56.innerRotation.angle.set(3.141590057987298);

/* définition du node n°57*/
const myNode57 = object.addCutOperation();
myNode57.leftArg.set(myNode55);
myNode57.rightArg.set(myNode56);

/* définition du node n°58*/
const myNode58 = object.addCylinder();
myNode58.point1.set(-0.993,6.091,-18.0999);
myNode58.point2.set(0,0,17.1629);
myNode58.radius.set(4.363);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(0.0,0.0,0.0);
myNode58.innerRotation.angle.set(0.0);

/* définition du node n°59*/
const myNode59 = object.addBox();
myNode59.point1.set(2.29801,5.53103,-2.99095);
myNode59.point2.set(15.8019,12.5689,2.0539);
myNode59.innerRotation.center.set(0,0,0);
myNode59.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode59.innerRotation.angle.set(0.41887900000000006);

/* définition du node n°60*/
const myNode60 = object.addFuseOperation();
myNode60.leftArg.set(myNode58);
myNode60.rightArg.set(myNode59);

/* définition du node n°61*/
const myNode61 = object.addCutOperation();
myNode61.leftArg.set(myNode57);
myNode61.rightArg.set(myNode60);

/* définition du node n°62*/
const myNode62 = object.addCommonOperation();
myNode62.leftArg.set(myNode54);
myNode62.rightArg.set(myNode61);

/* définition du node n°63*/
const myNode63 = object.addBox();
myNode63.point1.set(-4.9999,-4.6249,-18.0999);
myNode63.point2.set(9.9998,22.7248,21.0908);
myNode63.innerRotation.center.set(0,0,0);
myNode63.innerRotation.axis.set(0.0,0.0,0.0);
myNode63.innerRotation.angle.set(0.0);

/* définition du node n°64*/
const myNode64 = object.addBox();
myNode64.point1.set(4.1431,-18.0999,-2.9909);
myNode64.point2.set(13.9568,36.1998,5.9818);
myNode64.innerRotation.center.set(0,0,0);
myNode64.innerRotation.axis.set(0.0,0.0,0.0);
myNode64.innerRotation.angle.set(0.0);

/* définition du node n°65*/
const myNode65 = object.addBox();
myNode65.point1.set(-18.0999,-18.0999,-2.9909);
myNode65.point2.set(36.1998,23.1078,5.9818);
myNode65.innerRotation.center.set(0,0,0);
myNode65.innerRotation.axis.set(-3.072938784397386,-0.6531732693475747,8.666269604173044e-07);
myNode65.innerRotation.angle.set(3.141590057987298);

/* définition du node n°66*/
const myNode66 = object.addFuseOperation();
myNode66.leftArg.set(myNode64);
myNode66.rightArg.set(myNode65);

/* définition du node n°67*/
const myNode67 = object.addCommonOperation();
myNode67.leftArg.set(myNode63);
myNode67.rightArg.set(myNode66);

/* définition du node n°68*/
const myNode68 = object.addCylinder();
myNode68.point1.set(-4.56,-4.473,-2.9909);
myNode68.point2.set(0,0,5.9818);
myNode68.radius.set(0.437);
myNode68.innerRotation.center.set(0,0,0);
myNode68.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode68.innerRotation.angle.set(3.141592653586273);

/* définition du node n°69*/
const myNode69 = object.addBox();
myNode69.point1.set(-2.0449,-18.0999,-2.9909);
myNode69.point2.set(8.0468,15.6748,5.9818);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode69.innerRotation.angle.set(0.41887900000000006);

/* définition du node n°70*/
const myNode70 = object.addFuseOperation();
myNode70.leftArg.set(myNode68);
myNode70.rightArg.set(myNode69);

/* définition du node n°71*/
const myNode71 = object.addBox();
myNode71.point1.set(-18.0999,-4.9109,-2.9909);
myNode71.point2.set(23.0998,1.2498,5.9818);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(0.0,0.0,0.0);
myNode71.innerRotation.angle.set(0.0);

/* définition du node n°72*/
const myNode72 = object.addBox();
myNode72.point1.set(-18.0999,-18.0999,-18.0999);
myNode72.point2.set(24.1008,15.6748,15.1088);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode72.innerRotation.angle.set(0.41887900000000006);

/* définition du node n°73*/
const myNode73 = object.addFuseOperation();
myNode73.leftArg.set(myNode71);
myNode73.rightArg.set(myNode72);

/* définition du node n°74*/
const myNode74 = object.addCommonOperation();
myNode74.leftArg.set(myNode70);
myNode74.rightArg.set(myNode73);

/* définition du node n°75*/
const myNode75 = object.addFuseOperation();
myNode75.leftArg.set(myNode67);
myNode75.rightArg.set(myNode74);

/* définition du node n°76*/
const myNode76 = object.addBox();
myNode76.point1.set(2.37305,-3.66095,-2.99095);
myNode76.point2.set(2.6269,21.7609,5.9819);
myNode76.innerRotation.center.set(0,0,0);
myNode76.innerRotation.axis.set(0.0,0.0,0.0);
myNode76.innerRotation.angle.set(0.0);

/* définition du node n°77*/
const myNode77 = object.addCylinder();
myNode77.point1.set(-0.177,-4.072,-18.0999);
myNode77.point2.set(0,0,36.1999);
myNode77.radius.set(0.223);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode77.innerRotation.angle.set(3.141592653586273);

/* définition du node n°78*/
const myNode78 = object.addBox();
myNode78.point1.set(-18.0999,-4.91095,-0.93695);
myNode78.point2.set(21.8509,23.0109,3.9289);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(0.0,0.0,0.0);
myNode78.innerRotation.angle.set(0.0);

/* définition du node n°79*/
const myNode79 = object.addCylinder();
myNode79.point1.set(-0.993,6.091,-18.0999);
myNode79.point2.set(0,0,21.0909);
myNode79.radius.set(4.363);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(0.0,0.0,0.0);
myNode79.innerRotation.angle.set(0.0);

/* définition du node n°80*/
const myNode80 = object.addCylinder();
myNode80.point1.set(-4.461,-4.074,-2.99095);
myNode80.point2.set(0,0,0.7139);
myNode80.radius.set(0.222);
myNode80.innerRotation.center.set(0,0,0);
myNode80.innerRotation.axis.set(0.0,0.0,0.0);
myNode80.innerRotation.angle.set(0.0);

/* définition du node n°81*/
const myNode81 = object.addBox();
myNode81.point1.set(-2.04495,-18.1,-0.93695);
myNode81.point2.set(5.6119,36.1999,3.9289);
myNode81.innerRotation.center.set(0,0,0);
myNode81.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode81.innerRotation.angle.set(0.41887900000000006);

/* définition du node n°82*/
const myNode82 = object.addBox();
myNode82.point1.set(-4.99995,-4.62495,-2.27695);
myNode82.point2.set(5.7159,22.7249,1.3389);
myNode82.innerRotation.center.set(0,0,0);
myNode82.innerRotation.axis.set(0.0,0.0,0.0);
myNode82.innerRotation.angle.set(0.0);

/* définition du node n°83*/
const myNode83 = object.addBox();
myNode83.point1.set(-18.0999,-3.66095,-18.0999);
myNode83.point2.set(18.8159,21.7609,21.0909);
myNode83.innerRotation.center.set(0,0,0);
myNode83.innerRotation.axis.set(0.0,0.0,0.0);
myNode83.innerRotation.angle.set(0.0);

/* définition du node n°84*/
const myNode84_1 = object.addFuseOperation();
myNode84_1.leftArg.set(myNode76);
myNode84_1.rightArg.set(myNode76);
const myNode84_2 = object.addFuseOperation();
myNode84_2.leftArg.set(myNode84_1);
myNode84_2.rightArg.set(myNode77);
const myNode84_3 = object.addFuseOperation();
myNode84_3.leftArg.set(myNode84_2);
myNode84_3.rightArg.set(myNode78);
const myNode84_4 = object.addFuseOperation();
myNode84_4.leftArg.set(myNode84_3);
myNode84_4.rightArg.set(myNode79);
const myNode84_5 = object.addFuseOperation();
myNode84_5.leftArg.set(myNode84_4);
myNode84_5.rightArg.set(myNode80);
const myNode84_6 = object.addFuseOperation();
myNode84_6.leftArg.set(myNode84_5);
myNode84_6.rightArg.set(myNode81);
const myNode84_7 = object.addFuseOperation();
myNode84_7.leftArg.set(myNode84_6);
myNode84_7.rightArg.set(myNode82);
myNode84 = object.addFuseOperation();
myNode84.leftArg.set(myNode84_7);
myNode84.rightArg.set(myNode83);

/* définition du node n°85*/
const myNode85 = object.addCutOperation();
myNode85.leftArg.set(myNode75);
myNode85.rightArg.set(myNode84);

/* définition du node n°86*/
const myNode86 = object.addBox();
myNode86.point1.set(-2.0449,4.4361,-2.9909);
myNode86.point2.set(20.1448,1.4928,5.9818);
myNode86.innerRotation.center.set(0,0,0);
myNode86.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode86.innerRotation.angle.set(0.41887900000000006);

/* définition du node n°87*/
const myNode87 = object.addBox();
myNode87.point1.set(4.1431,2.0711,-2.9909);
myNode87.point2.set(0.8568,16.0288,5.9818);
myNode87.innerRotation.center.set(0,0,0);
myNode87.innerRotation.axis.set(0.0,0.0,0.0);
myNode87.innerRotation.angle.set(0.0);

/* définition du node n°88*/
const myNode88 = object.addCommonOperation();
myNode88.leftArg.set(myNode86);
myNode88.rightArg.set(myNode87);

/* définition du node n°89*/
const myNode89 = object.addBox();
myNode89.point1.set(-2.0449,-18.0999,-2.9909);
myNode89.point2.set(5.6118,36.1998,0.7138);
myNode89.innerRotation.center.set(0,0,0);
myNode89.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode89.innerRotation.angle.set(0.41887900000000006);

/* définition du node n°90*/
const myNode90 = object.addBox();
myNode90.point1.set(2.2981,-18.0999,-2.2769);
myNode90.point2.set(1.2678,36.1998,1.3388);
myNode90.innerRotation.center.set(0,0,0);
myNode90.innerRotation.axis.set(0.0,0.0,-0.41887900000000006);
myNode90.innerRotation.angle.set(0.41887900000000006);

/* définition du node n°91*/
const myNode91 = object.addCylinder();
myNode91.point1.set(1.165,-6.961,-2.9909);
myNode91.point2.set(0,0,21.0908);
myNode91.radius.set(5.279);
myNode91.innerRotation.center.set(0,0,0);
myNode91.innerRotation.axis.set(0.0,0.0,0.0);
myNode91.innerRotation.angle.set(0.0);

/* définition du node n°92*/
const myNode92 = object.addBox();
myNode92.point1.set(3.7511,-3.6609,-2.9909);
myNode92.point2.set(1.2488,21.7608,5.9818);
myNode92.innerRotation.center.set(0,0,0);
myNode92.innerRotation.axis.set(0.0,0.0,0.0);
myNode92.innerRotation.angle.set(0.0);

/* définition du node n°93*/
const myNode93 = object.addCommonOperation();
myNode93.leftArg.set(myNode91);
myNode93.rightArg.set(myNode92);

/* définition du node n°94*/
const myNode94_1 = object.addFuseOperation();
myNode94_1.leftArg.set(myNode89);
myNode94_1.rightArg.set(myNode89);
const myNode94_2 = object.addFuseOperation();
myNode94_2.leftArg.set(myNode94_1);
myNode94_2.rightArg.set(myNode90);
myNode94 = object.addFuseOperation();
myNode94.leftArg.set(myNode94_2);
myNode94.rightArg.set(myNode93);

/* définition du node n°95*/
const myNode95 = object.addBox();
myNode95.point1.set(-4.9999,-3.6609,-2.9909);
myNode95.point2.set(9.9998,21.7608,21.0908);
myNode95.innerRotation.center.set(0,0,0);
myNode95.innerRotation.axis.set(0.0,0.0,0.0);
myNode95.innerRotation.angle.set(0.0);

/* définition du node n°96*/
const myNode96 = object.addCylinder();
myNode96.point1.set(1.675,-4.937,-18.0999);
myNode96.point2.set(0,0,21.0908);
myNode96.radius.set(3.637);
myNode96.innerRotation.center.set(0,0,0);
myNode96.innerRotation.axis.set(0.0,0.0,0.0);
myNode96.innerRotation.angle.set(0.0);

/* définition du node n°97*/
const myNode97 = object.addCommonOperation();
myNode97.leftArg.set(myNode95);
myNode97.rightArg.set(myNode96);

/* définition du node n°98*/
const myNode98 = object.addCylinder();
myNode98.point1.set(-3.097,-1.28,-2.99095);
myNode98.point2.set(0,0,21.0909);
myNode98.radius.set(0.723);
myNode98.innerRotation.center.set(0,0,0);
myNode98.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode98.innerRotation.angle.set(3.141592653586273);

/* définition du node n°99*/
const myNode99 = object.addCylinder();
myNode99.point1.set(-2.146,-0.806,-18.0999);
myNode99.point2.set(0,0,15.8229);
myNode99.radius.set(2.862);
myNode99.innerRotation.center.set(0,0,0);
myNode99.innerRotation.axis.set(0.0,0.0,0.0);
myNode99.innerRotation.angle.set(0.0);

/* définition du node n°100*/
const myNode100 = object.addFuseOperation();
myNode100.leftArg.set(myNode98);
myNode100.rightArg.set(myNode99);

/* définition du node n°101*/
const myNode101 = object.addCutOperation();
myNode101.leftArg.set(myNode97);
myNode101.rightArg.set(myNode100);

/* définition du node n°102*/
const myNode102 = object.addCommonOperation();
myNode102.leftArg.set(myNode94);
myNode102.rightArg.set(myNode101);

/* définition du node n°103*/
const myNode103_1 = object.addFuseOperation();
myNode103_1.leftArg.set(myNode7);
myNode103_1.rightArg.set(myNode7);
const myNode103_2 = object.addFuseOperation();
myNode103_2.leftArg.set(myNode103_1);
myNode103_2.rightArg.set(myNode12);
const myNode103_3 = object.addFuseOperation();
myNode103_3.leftArg.set(myNode103_2);
myNode103_3.rightArg.set(myNode13);
const myNode103_4 = object.addFuseOperation();
myNode103_4.leftArg.set(myNode103_3);
myNode103_4.rightArg.set(myNode14);
const myNode103_5 = object.addFuseOperation();
myNode103_5.leftArg.set(myNode103_4);
myNode103_5.rightArg.set(myNode20);
const myNode103_6 = object.addFuseOperation();
myNode103_6.leftArg.set(myNode103_5);
myNode103_6.rightArg.set(myNode21);
const myNode103_7 = object.addFuseOperation();
myNode103_7.leftArg.set(myNode103_6);
myNode103_7.rightArg.set(myNode43);
const myNode103_8 = object.addFuseOperation();
myNode103_8.leftArg.set(myNode103_7);
myNode103_8.rightArg.set(myNode49);
const myNode103_9 = object.addFuseOperation();
myNode103_9.leftArg.set(myNode103_8);
myNode103_9.rightArg.set(myNode62);
const myNode103_10 = object.addFuseOperation();
myNode103_10.leftArg.set(myNode103_9);
myNode103_10.rightArg.set(myNode85);
const myNode103_11 = object.addFuseOperation();
myNode103_11.leftArg.set(myNode103_10);
myNode103_11.rightArg.set(myNode88);
myNode103 = object.addFuseOperation();
myNode103.leftArg.set(myNode103_11);
myNode103.rightArg.set(myNode102);

/* définition du node n°104*/
const myNode104 = object.addCommonOperation();
myNode104.leftArg.set(myNode0);
myNode104.rightArg.set(myNode103);
/*END Geometry Object Definition*/