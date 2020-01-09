/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.0679,-5.9999,-2.8339);
myNode0.point2.set(5.0679,5.9999,2.8339);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(0,0,0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-4.2229,-4.9999,2.2101);
myNode1.point2.set(4.0719,3.1829,2.3619000000000003);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.innerTranslation.vector.set(0,0,0);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(-2.358,-2.644,-2.2479);
myNode2.point2.set(-2.358,-2.644,-1.4830999999999999);
myNode2.radius.set(0.246);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addBox();
myNode3.point1.set(-2.5189,3.1831,2.2101);
myNode3.point2.set(1.0419,4.9999,2.3619000000000003);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);
myNode3.innerTranslation.vector.set(0,0,0);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(-2.359,3.16,-2.3619);
myNode4.point2.set(-2.359,3.16,-2.0061);
myNode4.radius.set(0.393);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addBox();
myNode5.point1.set(-18.0999,-18.0999,-2.24795);
myNode5.point2.set(4.071999999999999,18.099999999999998,-2.12005);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.innerTranslation.vector.set(0,0,0);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addCutOperation();
myNode6.leftArg.set(myNode4);
myNode6.rightArg.set(myNode5);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addBox();
myNode7.point1.set(-4.0719,-3.1089,-1.4829);
myNode7.point2.set(4.0719,4.9999,-1.3311000000000002);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);
myNode7.innerTranslation.vector.set(0,0,0);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addBox();
myNode8.point1.set(4.0721,3.1831,-1.4829);
myNode8.point2.set(4.2238999999999995,4.9999,1.1689);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.innerTranslation.vector.set(0,0,0);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addCylinder();
myNode9.point1.set(-0.885,3.139,-18.0999);
myNode9.point2.set(-0.885,3.139,18.099999999999998);
myNode9.radius.set(0.282);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode9.innerRotation.angle.set(89.99978954085029);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addCutOperation();
myNode10.leftArg.set(myNode8);
myNode10.rightArg.set(myNode9);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addCylinder();
myNode11.point1.set(-0.03,4.317,-18.0999);
myNode11.point2.set(-0.03,4.317,18.099999999999998);
myNode11.radius.set(0.262);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode11.innerRotation.angle.set(89.99978954085029);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCutOperation();
myNode12.leftArg.set(myNode10);
myNode12.rightArg.set(myNode11);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addBox();
myNode13.point1.set(-18.0999,-18.0999,-2.24795);
myNode13.point2.set(4.071999999999999,18.099999999999998,18.098950000000002);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);
myNode13.innerTranslation.vector.set(0,0,0);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(0.725,3.714,4.07205);
myNode14.point2.set(0.725,3.714,18.09995);
myNode14.radius.set(0.262);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode14.innerRotation.angle.set(89.99978954085029);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addCylinder();
myNode15.point1.set(-0.039,3.183,-18.0999);
myNode15.point2.set(-0.039,3.183,18.099999999999998);
myNode15.radius.set(0.262);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode15.innerRotation.angle.set(89.99978954085029);
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
const myNode17 = object.addCutOperation();
myNode17.leftArg.set(myNode12);
myNode17.rightArg.set(myNode16);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addBox();
myNode18.point1.set(4.0721,-4.9999,-1.4829);
myNode18.point2.set(4.2238999999999995,-3.9411000000000005,0.5999000000000001);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);
myNode18.innerTranslation.vector.set(0,0,0);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addCylinder();
myNode19.point1.set(2.305,-2.643,-2.3619);
myNode19.point2.set(2.305,-2.643,-2.0061);
myNode19.radius.set(0.394);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(0.0,0.0,0.0);
myNode19.innerRotation.angle.set(0.0);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addFuseOperation();
myNode20.leftArg.set(myNode18);
myNode20.rightArg.set(myNode19);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addCylinder();
myNode21.point1.set(2.305,-2.643,-2.24795);
myNode21.point2.set(2.305,-2.643,-2.12005);
myNode21.radius.set(0.394);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addCylinder();
myNode22.point1.set(0.724,-4.242,1.04205);
myNode22.point2.set(0.724,-4.242,18.09995);
myNode22.radius.set(0.263);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode22.innerRotation.angle.set(89.99978954125373);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addFuseOperation();
myNode23.leftArg.set(myNode21);
myNode23.rightArg.set(myNode22);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addCutOperation();
myNode24.leftArg.set(myNode20);
myNode24.rightArg.set(myNode23);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addBox();
myNode25.point1.set(-4.2229,-4.9999,-1.4829);
myNode25.point2.set(1.0419,3.1829,-1.3311000000000002);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(0.0,0.0,0.0);
myNode25.innerRotation.angle.set(0.0);
myNode25.innerTranslation.vector.set(0,0,0);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addBox();
myNode26.point1.set(4.0721,-4.9999,1.1691);
myNode26.point2.set(4.2238999999999995,-3.1091,2.2109);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);
myNode26.innerTranslation.vector.set(0,0,0);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addBox();
myNode27.point1.set(1.0421,-4.9999,-1.4829);
myNode27.point2.set(4.2239,-3.1091,-1.3311000000000002);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);
myNode27.innerTranslation.vector.set(0,0,0);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addFuseOperation();
myNode28.leftArg.set(myNode26);
myNode28.rightArg.set(myNode27);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addCylinder();
myNode29.point1.set(-1.737,-3.941,1.04205);
myNode29.point2.set(-1.737,-3.941,4.22395);
myNode29.radius.set(0.263);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode29.innerRotation.angle.set(89.99978954085029);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addCutOperation();
myNode30.leftArg.set(myNode28);
myNode30.rightArg.set(myNode29);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addBox();
myNode31.point1.set(4.0721,-3.1089,-18.0999);
myNode31.point2.set(4.2238999999999995,3.1829,0.5998999999999981);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(0.0,0.0,0.0);
myNode31.innerRotation.angle.set(0.0);
myNode31.innerTranslation.vector.set(0,0,0);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addCylinder();
myNode32.point1.set(0.728,-1.971,-18.0999);
myNode32.point2.set(0.728,-1.971,18.099999999999998);
myNode32.radius.set(0.263);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode32.innerRotation.angle.set(89.99978954085029);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addCutOperation();
myNode33.leftArg.set(myNode31);
myNode33.rightArg.set(myNode32);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addCylinder();
myNode34.point1.set(-0.035,-1.363,-18.0999);
myNode34.point2.set(-0.035,-1.363,4.222999999999999);
myNode34.radius.set(0.266);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode34.innerRotation.angle.set(89.99978954085029);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addCylinder();
myNode35.point1.set(0.727,1.438,4.07205);
myNode35.point2.set(0.727,1.438,4.22395);
myNode35.radius.set(0.262);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode35.innerRotation.angle.set(89.99978954085029);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addFuseOperation();
myNode36.leftArg.set(myNode34);
myNode36.rightArg.set(myNode35);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addCutOperation();
myNode37.leftArg.set(myNode33);
myNode37.rightArg.set(myNode36);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addSphere();
myNode38.center.set(0,0,0);
myNode38.radius.set(54.29981583762508);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addCylinder();
myNode39.point1.set(-0.039,3.183,-18.0999);
myNode39.point2.set(-0.039,3.183,4.222999999999999);
myNode39.radius.set(0.262);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode39.innerRotation.angle.set(89.99978954085029);
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addCutOperation();
myNode40.leftArg.set(myNode38);
myNode40.rightArg.set(myNode39);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41 = object.addCylinder();
myNode41.point1.set(0.726,-0.834,-18.0999);
myNode41.point2.set(0.726,-0.834,4.222999999999999);
myNode41.radius.set(0.263);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode41.innerRotation.angle.set(90.0002104591497);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addBox();
myNode42.point1.set(-18.0999,-3.10895,-18.0999);
myNode42.point2.set(18.099999999999998,3.18295,-1.4830000000000005);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0,0.0,0.0);
myNode42.innerRotation.angle.set(0.0);
myNode42.innerTranslation.vector.set(0,0,0);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addFuseOperation();
myNode43.leftArg.set(myNode41);
myNode43.rightArg.set(myNode42);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44 = object.addCutOperation();
myNode44.leftArg.set(myNode40);
myNode44.rightArg.set(myNode43);
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45 = object.addCylinder();
myNode45.point1.set(-0.033,-0.227,-18.0999);
myNode45.point2.set(-0.033,-0.227,18.099999999999998);
myNode45.radius.set(0.263);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode45.innerRotation.angle.set(89.99978954085029);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addCutOperation();
myNode46.leftArg.set(myNode38);
myNode46.rightArg.set(myNode45);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addCylinder();
myNode47.point1.set(0.725,2.578,-18.0999);
myNode47.point2.set(0.725,2.578,18.099999999999998);
myNode47.radius.set(0.263);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode47.innerRotation.angle.set(89.99978954085029);
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addCylinder();
myNode48.point1.set(0.727,-3.109,-18.0999);
myNode48.point2.set(0.727,-3.109,18.099999999999998);
myNode48.radius.set(0.263);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode48.innerRotation.angle.set(90.0002104591497);
myNode48.isVisible = false;

/* définition du node n°49*/
const myNode49 = object.addFuseOperation();
myNode49.leftArg.set(myNode47);
myNode49.rightArg.set(myNode48);
myNode49.isVisible = false;

/* définition du node n°50*/
const myNode50 = object.addCutOperation();
myNode50.leftArg.set(myNode46);
myNode50.rightArg.set(myNode49);
myNode50.isVisible = false;

/* définition du node n°51*/
const myNode51 = object.addCylinder();
myNode51.point1.set(-0.032,-2.501,4.07205);
myNode51.point2.set(-0.032,-2.501,18.09995);
myNode51.radius.set(0.262);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode51.innerRotation.angle.set(89.99978954085029);
myNode51.isVisible = false;

/* définition du node n°52*/
const myNode52 = object.addCylinder();
myNode52.point1.set(-0.033,2.044,-18.0999);
myNode52.point2.set(-0.033,2.044,18.099999999999998);
myNode52.radius.set(0.264);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode52.innerRotation.angle.set(89.99978954085029);
myNode52.isVisible = false;

/* définition du node n°53*/
const myNode53 = object.addCylinder();
myNode53.point1.set(0.724,0.302,-18.0999);
myNode53.point2.set(0.724,0.302,18.099999999999998);
myNode53.radius.set(0.265);
myNode53.innerRotation.center.set(0,0,0);
myNode53.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode53.innerRotation.angle.set(89.99978954085029);
myNode53.isVisible = false;

/* définition du node n°54*/
const myNode54 = object.addCylinder();
myNode54.point1.set(-0.028,0.91,-18.0999);
myNode54.point2.set(-0.028,0.91,18.099999999999998);
myNode54.radius.set(0.264);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode54.innerRotation.angle.set(89.99978954085029);
myNode54.isVisible = false;

/* définition du node n°55*/
const myNode55_1 = myNode51.clone();
myNode55_1.isVisible = false;
const myNode55_2 = object.addFuseOperation();
myNode55_2.leftArg.set(myNode55_1);
myNode55_2.rightArg.set(myNode52);
myNode55_2.isVisible = false;
const myNode55_3 = object.addFuseOperation();
myNode55_3.leftArg.set(myNode55_2);
myNode55_3.rightArg.set(myNode53);
myNode55_3.isVisible = false;
myNode55 = object.addFuseOperation();
myNode55.leftArg.set(myNode55_3);
myNode55.rightArg.set(myNode54);
myNode55.isVisible = false;
myNode55.isVisible = false;

/* définition du node n°56*/
const myNode56 = object.addCutOperation();
myNode56.leftArg.set(myNode50);
myNode56.rightArg.set(myNode55);
myNode56.isVisible = false;

/* définition du node n°57*/
const myNode57 = object.addCommonOperation();
myNode57.leftArg.set(myNode37);
myNode57.rightArg.set(myNode44);
myNode57.isVisible = false;

/* définition du node n°58*/
const myNode58 = object.addBox();
myNode58.point1.set(-4.2229,-18.0999,-1.3309);
myNode58.point2.set(-4.0711,18.0999,-9.999999999998899e-05);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(0.0,0.0,0.0);
myNode58.innerRotation.angle.set(0.0);
myNode58.innerTranslation.vector.set(0,0,0);
myNode58.isVisible = false;

/* définition du node n°59*/
const myNode59 = object.addCylinder();
myNode59.point1.set(0.727,1.438,-18.0999);
myNode59.point2.set(0.727,1.438,1.041999999999998);
myNode59.radius.set(0.262);
myNode59.innerRotation.center.set(0,0,0);
myNode59.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode59.innerRotation.angle.set(89.99978954085029);
myNode59.isVisible = false;

/* définition du node n°60*/
const myNode60 = object.addCutOperation();
myNode60.leftArg.set(myNode58);
myNode60.rightArg.set(myNode59);
myNode60.isVisible = false;

/* définition du node n°61*/
const myNode61 = object.addCylinder();
myNode61.point1.set(0.728,-1.971,-18.0999);
myNode61.point2.set(0.728,-1.971,-4.072000000000001);
myNode61.radius.set(0.263);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode61.innerRotation.angle.set(89.99978954085029);
myNode61.isVisible = false;

/* définition du node n°62*/
const myNode62 = object.addCylinder();
myNode62.point1.set(0.724,-4.242,-18.0999);
myNode62.point2.set(0.724,-4.242,18.099999999999998);
myNode62.radius.set(0.263);
myNode62.innerRotation.center.set(0,0,0);
myNode62.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode62.innerRotation.angle.set(89.99978954125373);
myNode62.isVisible = false;

/* définition du node n°63*/
const myNode63 = object.addFuseOperation();
myNode63.leftArg.set(myNode61);
myNode63.rightArg.set(myNode62);
myNode63.isVisible = false;

/* définition du node n°64*/
const myNode64 = object.addCutOperation();
myNode64.leftArg.set(myNode60);
myNode64.rightArg.set(myNode63);
myNode64.isVisible = false;

/* définition du node n°65*/
const myNode65 = object.addBox();
myNode65.point1.set(-4.2229,-4.9999,-1.4829);
myNode65.point2.set(-4.0711,3.1829,0.03289999999999993);
myNode65.innerRotation.center.set(0,0,0);
myNode65.innerRotation.axis.set(0.0,0.0,0.0);
myNode65.innerRotation.angle.set(0.0);
myNode65.innerTranslation.vector.set(0,0,0);
myNode65.isVisible = false;

/* définition du node n°66*/
const myNode66 = object.addCylinder();
myNode66.point1.set(-0.035,-1.363,-18.0999);
myNode66.point2.set(-0.035,-1.363,18.099999999999998);
myNode66.radius.set(0.266);
myNode66.innerRotation.center.set(0,0,0);
myNode66.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode66.innerRotation.angle.set(89.99978954085029);
myNode66.isVisible = false;

/* définition du node n°67*/
const myNode67 = object.addCutOperation();
myNode67.leftArg.set(myNode65);
myNode67.rightArg.set(myNode66);
myNode67.isVisible = false;

/* définition du node n°68*/
const myNode68 = object.addCylinder();
myNode68.point1.set(-0.033,2.044,-4.22295);
myNode68.point2.set(-0.033,2.044,18.09995);
myNode68.radius.set(0.264);
myNode68.innerRotation.center.set(0,0,0);
myNode68.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode68.innerRotation.angle.set(89.99978954085029);
myNode68.isVisible = false;

/* définition du node n°69*/
const myNode69 = object.addCylinder();
myNode69.point1.set(-0.033,-0.227,-4.22295);
myNode69.point2.set(-0.033,-0.227,18.09995);
myNode69.radius.set(0.263);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode69.innerRotation.angle.set(89.99978954085029);
myNode69.isVisible = false;

/* définition du node n°70*/
const myNode70 = object.addFuseOperation();
myNode70.leftArg.set(myNode68);
myNode70.rightArg.set(myNode69);
myNode70.isVisible = false;

/* définition du node n°71*/
const myNode71 = object.addCutOperation();
myNode71.leftArg.set(myNode67);
myNode71.rightArg.set(myNode70);
myNode71.isVisible = false;

/* définition du node n°72*/
const myNode72 = object.addBox();
myNode72.point1.set(-4.2229,-4.9999,-2.3619);
myNode72.point2.set(-4.0711,3.1829,-9.999999999976694e-05);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(0.0,0.0,0.0);
myNode72.innerRotation.angle.set(0.0);
myNode72.innerTranslation.vector.set(0,0,0);
myNode72.isVisible = false;

/* définition du node n°73*/
const myNode73 = object.addCylinder();
myNode73.point1.set(0.724,0.302,-18.0999);
myNode73.point2.set(0.724,0.302,-4.072000000000001);
myNode73.radius.set(0.265);
myNode73.innerRotation.center.set(0,0,0);
myNode73.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode73.innerRotation.angle.set(89.99978954085029);
myNode73.isVisible = false;

/* définition du node n°74*/
const myNode74 = object.addCutOperation();
myNode74.leftArg.set(myNode72);
myNode74.rightArg.set(myNode73);
myNode74.isVisible = false;

/* définition du node n°75*/
const myNode75 = object.addCylinder();
myNode75.point1.set(0.726,-0.834,-4.22295);
myNode75.point2.set(0.726,-0.834,-2.5180499999999997);
myNode75.radius.set(0.263);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode75.innerRotation.angle.set(90.0002104591497);
myNode75.isVisible = false;

/* définition du node n°76*/
const myNode76 = object.addCylinder();
myNode76.point1.set(-0.028,0.91,-18.0999);
myNode76.point2.set(-0.028,0.91,-4.072000000000001);
myNode76.radius.set(0.264);
myNode76.innerRotation.center.set(0,0,0);
myNode76.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode76.innerRotation.angle.set(89.99978954085029);
myNode76.isVisible = false;

/* définition du node n°77*/
const myNode77 = object.addFuseOperation();
myNode77.leftArg.set(myNode75);
myNode77.rightArg.set(myNode76);
myNode77.isVisible = false;

/* définition du node n°78*/
const myNode78 = object.addCutOperation();
myNode78.leftArg.set(myNode74);
myNode78.rightArg.set(myNode77);
myNode78.isVisible = false;

/* définition du node n°79*/
const myNode79 = object.addCylinder();
myNode79.point1.set(0.727,-3.109,-18.0999);
myNode79.point2.set(0.727,-3.109,-4.072000000000001);
myNode79.radius.set(0.263);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode79.innerRotation.angle.set(90.0002104591497);
myNode79.isVisible = false;

/* définition du node n°80*/
const myNode80 = object.addCylinder();
myNode80.point1.set(-0.032,-2.501,-4.22295);
myNode80.point2.set(-0.032,-2.501,18.09995);
myNode80.radius.set(0.262);
myNode80.innerRotation.center.set(0,0,0);
myNode80.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode80.innerRotation.angle.set(89.99978954085029);
myNode80.isVisible = false;

/* définition du node n°81*/
const myNode81 = object.addCylinder();
myNode81.point1.set(0.725,2.578,-18.0999);
myNode81.point2.set(0.725,2.578,-4.072000000000001);
myNode81.radius.set(0.263);
myNode81.innerRotation.center.set(0,0,0);
myNode81.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode81.innerRotation.angle.set(89.99978954085029);
myNode81.isVisible = false;

/* définition du node n°82*/
const myNode82 = object.addCylinder();
myNode82.point1.set(-0.039,3.183,-18.0999);
myNode82.point2.set(-0.039,3.183,-4.072000000000001);
myNode82.radius.set(0.262);
myNode82.innerRotation.center.set(0,0,0);
myNode82.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode82.innerRotation.angle.set(89.99978954085029);
myNode82.isVisible = false;

/* définition du node n°83*/
const myNode83_1 = myNode79.clone();
myNode83_1.isVisible = false;
const myNode83_2 = object.addFuseOperation();
myNode83_2.leftArg.set(myNode83_1);
myNode83_2.rightArg.set(myNode80);
myNode83_2.isVisible = false;
const myNode83_3 = object.addFuseOperation();
myNode83_3.leftArg.set(myNode83_2);
myNode83_3.rightArg.set(myNode81);
myNode83_3.isVisible = false;
myNode83 = object.addFuseOperation();
myNode83.leftArg.set(myNode83_3);
myNode83.rightArg.set(myNode82);
myNode83.isVisible = false;
myNode83.isVisible = false;

/* définition du node n°84*/
const myNode84 = object.addCutOperation();
myNode84.leftArg.set(myNode78);
myNode84.rightArg.set(myNode83);
myNode84.isVisible = false;

/* définition du node n°85*/
const myNode85 = object.addCommonOperation();
myNode85.leftArg.set(myNode64);
myNode85.rightArg.set(myNode71);
myNode85.isVisible = false;

/* définition du node n°86*/
const myNode86 = object.addBox();
myNode86.point1.set(4.0721,-3.1089,1.1691);
myNode86.point2.set(4.2238999999999995,4.9999,2.3619000000000003);
myNode86.innerRotation.center.set(0,0,0);
myNode86.innerRotation.axis.set(0.0,0.0,0.0);
myNode86.innerRotation.angle.set(0.0);
myNode86.innerTranslation.vector.set(0,0,0);
myNode86.isVisible = false;

/* définition du node n°87*/
const myNode87 = object.addCylinder();
myNode87.point1.set(-1.74,-0.526,1.04205);
myNode87.point2.set(-1.74,-0.526,18.09995);
myNode87.radius.set(0.265);
myNode87.innerRotation.center.set(0,0,0);
myNode87.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode87.innerRotation.angle.set(89.99978954085029);
myNode87.isVisible = false;

/* définition du node n°88*/
const myNode88 = object.addCylinder();
myNode88.point1.set(-1.736,1.743,1.04205);
myNode88.point2.set(-1.736,1.743,18.09995);
myNode88.radius.set(0.263);
myNode88.innerRotation.center.set(0,0,0);
myNode88.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode88.innerRotation.angle.set(89.99978954085029);
myNode88.isVisible = false;

/* définition du node n°89*/
const myNode89 = object.addCylinder();
myNode89.point1.set(-1.736,-1.668,-18.0999);
myNode89.point2.set(-1.736,-1.668,18.099999999999998);
myNode89.radius.set(0.263);
myNode89.innerRotation.center.set(0,0,0);
myNode89.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode89.innerRotation.angle.set(89.99978954085029);
myNode89.isVisible = false;

/* définition du node n°90*/
const myNode90_1 = myNode87.clone();
myNode90_1.isVisible = false;
const myNode90_2 = object.addFuseOperation();
myNode90_2.leftArg.set(myNode90_1);
myNode90_2.rightArg.set(myNode88);
myNode90_2.isVisible = false;
myNode90 = object.addFuseOperation();
myNode90.leftArg.set(myNode90_2);
myNode90.rightArg.set(myNode89);
myNode90.isVisible = false;
myNode90.isVisible = false;

/* définition du node n°91*/
const myNode91 = object.addCutOperation();
myNode91.leftArg.set(myNode86);
myNode91.rightArg.set(myNode90);
myNode91.isVisible = false;

/* définition du node n°92*/
const myNode92 = object.addCylinder();
myNode92.point1.set(-1.736,2.879,-18.0999);
myNode92.point2.set(-1.736,2.879,18.099999999999998);
myNode92.radius.set(0.263);
myNode92.innerRotation.center.set(0,0,0);
myNode92.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode92.innerRotation.angle.set(89.99978954085029);
myNode92.isVisible = false;

/* définition du node n°93*/
const myNode93 = object.addCylinder();
myNode93.point1.set(-1.735,0.606,-18.0999);
myNode93.point2.set(-1.735,0.606,18.099999999999998);
myNode93.radius.set(0.262);
myNode93.innerRotation.center.set(0,0,0);
myNode93.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode93.innerRotation.angle.set(89.99978954085029);
myNode93.isVisible = false;

/* définition du node n°94*/
const myNode94 = object.addCylinder();
myNode94.point1.set(-1.735,4.013,-18.0999);
myNode94.point2.set(-1.735,4.013,18.099999999999998);
myNode94.radius.set(0.261);
myNode94.innerRotation.center.set(0,0,0);
myNode94.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode94.innerRotation.angle.set(89.99978954085029);
myNode94.isVisible = false;

/* définition du node n°95*/
const myNode95 = object.addCylinder();
myNode95.point1.set(-1.736,-2.804,4.07205);
myNode95.point2.set(-1.736,-2.804,18.09995);
myNode95.radius.set(0.263);
myNode95.innerRotation.center.set(0,0,0);
myNode95.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode95.innerRotation.angle.set(89.99978954085029);
myNode95.isVisible = false;

/* définition du node n°96*/
const myNode96_1 = myNode92.clone();
myNode96_1.isVisible = false;
const myNode96_2 = object.addFuseOperation();
myNode96_2.leftArg.set(myNode96_1);
myNode96_2.rightArg.set(myNode93);
myNode96_2.isVisible = false;
const myNode96_3 = object.addFuseOperation();
myNode96_3.leftArg.set(myNode96_2);
myNode96_3.rightArg.set(myNode94);
myNode96_3.isVisible = false;
myNode96 = object.addFuseOperation();
myNode96.leftArg.set(myNode96_3);
myNode96.rightArg.set(myNode95);
myNode96.isVisible = false;
myNode96.isVisible = false;

/* définition du node n°97*/
const myNode97 = object.addCutOperation();
myNode97.leftArg.set(myNode91);
myNode97.rightArg.set(myNode96);
myNode97.isVisible = false;

/* définition du node n°98*/
const myNode98 = object.addBox();
myNode98.point1.set(-18.0999,-3.1089,-2.3619);
myNode98.point2.set(18.0999,18.099899999999998,-1.4830999999999999);
myNode98.innerRotation.center.set(0,0,0);
myNode98.innerRotation.axis.set(0.0,0.0,0.0);
myNode98.innerRotation.angle.set(0.0);
myNode98.innerTranslation.vector.set(0,0,0);
myNode98.isVisible = false;

/* définition du node n°99*/
const myNode99 = object.addCylinder();
myNode99.point1.set(2.308,3.161,-2.3619);
myNode99.point2.set(2.308,3.161,-2.2481);
myNode99.radius.set(0.397);
myNode99.innerRotation.center.set(0,0,0);
myNode99.innerRotation.axis.set(0.0,0.0,0.0);
myNode99.innerRotation.angle.set(0.0);
myNode99.isVisible = false;

/* définition du node n°100*/
const myNode100 = object.addCylinder();
myNode100.point1.set(2.308,3.161,-2.1189);
myNode100.point2.set(2.308,3.161,-2.0051);
myNode100.radius.set(0.397);
myNode100.innerRotation.center.set(0,0,0);
myNode100.innerRotation.axis.set(0.0,0.0,0.0);
myNode100.innerRotation.angle.set(0.0);
myNode100.isVisible = false;

/* définition du node n°101*/
const myNode101 = object.addCylinder();
myNode101.point1.set(2.307,3.157,-2.2479);
myNode101.point2.set(2.307,3.157,18.0989);
myNode101.radius.set(0.247);
myNode101.innerRotation.center.set(0,0,0);
myNode101.innerRotation.axis.set(0.0,0.0,0.0);
myNode101.innerRotation.angle.set(0.0);
myNode101.isVisible = false;

/* définition du node n°102*/
const myNode102_1 = myNode99.clone();
myNode102_1.isVisible = false;
const myNode102_2 = object.addFuseOperation();
myNode102_2.leftArg.set(myNode102_1);
myNode102_2.rightArg.set(myNode100);
myNode102_2.isVisible = false;
myNode102 = object.addFuseOperation();
myNode102.leftArg.set(myNode102_2);
myNode102.rightArg.set(myNode101);
myNode102.isVisible = false;
myNode102.isVisible = false;

/* définition du node n°103*/
const myNode103 = object.addCommonOperation();
myNode103.leftArg.set(myNode98);
myNode103.rightArg.set(myNode102);
myNode103.isVisible = false;

/* définition du node n°104*/
const myNode104 = object.addBox();
myNode104.point1.set(-2.5189,-4.9999,-2.2479);
myNode104.point2.set(1.0419,-4.8481000000000005,-1.3321);
myNode104.innerRotation.center.set(0,0,0);
myNode104.innerRotation.axis.set(0.0,0.0,0.0);
myNode104.innerRotation.angle.set(0.0);
myNode104.innerTranslation.vector.set(0,0,0);
myNode104.isVisible = false;

/* définition du node n°105*/
const myNode105 = object.addCylinder();
myNode105.point1.set(-2.362,-2.646,-2.3619);
myNode105.point2.set(-2.362,-2.646,-2.0061);
myNode105.radius.set(0.393);
myNode105.innerRotation.center.set(0,0,0);
myNode105.innerRotation.axis.set(0.0,0.0,0.0);
myNode105.innerRotation.angle.set(0.0);
myNode105.isVisible = false;

/* définition du node n°106*/
const myNode106 = object.addFuseOperation();
myNode106.leftArg.set(myNode104);
myNode106.rightArg.set(myNode105);
myNode106.isVisible = false;

/* définition du node n°107*/
const myNode107 = object.addCylinder();
myNode107.point1.set(1.858,-0.662,-4.99995);
myNode107.point2.set(1.858,-0.662,3.18295);
myNode107.radius.set(0.116);
myNode107.innerRotation.center.set(0,0,0);
myNode107.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode107.innerRotation.angle.set(119.9998447624254);
myNode107.isVisible = false;

/* définition du node n°108*/
const myNode108 = object.addBox();
myNode108.point1.set(-4.07195,-4.84795,-2.24795);
myNode108.point2.set(1.04195,18.09995,-2.12005);
myNode108.innerRotation.center.set(0,0,0);
myNode108.innerRotation.axis.set(0.0,0.0,0.0);
myNode108.innerRotation.angle.set(0.0);
myNode108.innerTranslation.vector.set(0,0,0);
myNode108.isVisible = false;

/* définition du node n°109*/
const myNode109 = object.addFuseOperation();
myNode109.leftArg.set(myNode107);
myNode109.rightArg.set(myNode108);
myNode109.isVisible = false;

/* définition du node n°110*/
const myNode110 = object.addCutOperation();
myNode110.leftArg.set(myNode106);
myNode110.rightArg.set(myNode109);
myNode110.isVisible = false;

/* définition du node n°111*/
const myNode111 = object.addBox();
myNode111.point1.set(-4.2229,-4.9999,0.0331);
myNode111.point2.set(-4.0711,3.1829,0.5999);
myNode111.innerRotation.center.set(0,0,0);
myNode111.innerRotation.axis.set(0.0,0.0,0.0);
myNode111.innerRotation.angle.set(0.0);
myNode111.innerTranslation.vector.set(0,0,0);
myNode111.isVisible = false;

/* définition du node n°112*/
const myNode112 = object.addCylinder();
myNode112.point1.set(-0.033,-0.227,-18.0999);
myNode112.point2.set(-0.033,-0.227,-4.072000000000001);
myNode112.radius.set(0.263);
myNode112.innerRotation.center.set(0,0,0);
myNode112.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode112.innerRotation.angle.set(89.99978954085029);
myNode112.isVisible = false;

/* définition du node n°113*/
const myNode113 = object.addCutOperation();
myNode113.leftArg.set(myNode111);
myNode113.rightArg.set(myNode112);
myNode113.isVisible = false;

/* définition du node n°114*/
const myNode114 = object.addCylinder();
myNode114.point1.set(-0.033,2.044,-18.0999);
myNode114.point2.set(-0.033,2.044,-2.519000000000002);
myNode114.radius.set(0.264);
myNode114.innerRotation.center.set(0,0,0);
myNode114.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode114.innerRotation.angle.set(89.99978954085029);
myNode114.isVisible = false;

/* définition du node n°115*/
const myNode115 = object.addCylinder();
myNode115.point1.set(-0.039,3.183,-18.0999);
myNode115.point2.set(-0.039,3.183,1.041999999999998);
myNode115.radius.set(0.262);
myNode115.innerRotation.center.set(0,0,0);
myNode115.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode115.innerRotation.angle.set(89.99978954085029);
myNode115.isVisible = false;

/* définition du node n°116*/
const myNode116 = object.addFuseOperation();
myNode116.leftArg.set(myNode114);
myNode116.rightArg.set(myNode115);
myNode116.isVisible = false;

/* définition du node n°117*/
const myNode117 = object.addCutOperation();
myNode117.leftArg.set(myNode113);
myNode117.rightArg.set(myNode116);
myNode117.isVisible = false;

/* définition du node n°118*/
const myNode118_1 = myNode66.clone();
myNode118_1.isVisible = false;
const myNode118_2 = object.addFuseOperation();
myNode118_2.leftArg.set(myNode118_1);
myNode118_2.rightArg.set(myNode80);
myNode118_2.isVisible = false;
myNode118 = object.addFuseOperation();
myNode118.leftArg.set(myNode118_2);
myNode118.rightArg.set(myNode76);
myNode118.isVisible = false;
myNode118.isVisible = false;

/* définition du node n°119*/
const myNode119 = object.addCutOperation();
myNode119.leftArg.set(myNode117);
myNode119.rightArg.set(myNode118);
myNode119.isVisible = false;

/* définition du node n°120*/
const myNode120 = object.addCylinder();
myNode120.point1.set(-2.36,3.161,-2.3619);
myNode120.point2.set(-2.36,3.161,-1.4830999999999999);
myNode120.radius.set(0.246);
myNode120.innerRotation.center.set(0,0,0);
myNode120.innerRotation.axis.set(0.0,0.0,0.0);
myNode120.innerRotation.angle.set(0.0);
myNode120.isVisible = false;

/* définition du node n°121*/
const myNode121 = object.addBox();
myNode121.point1.set(-18.0999,3.1831,-1.4829);
myNode121.point2.set(-2.5191000000000017,4.9999,2.3619000000000003);
myNode121.innerRotation.center.set(0,0,0);
myNode121.innerRotation.axis.set(0.0,0.0,0.0);
myNode121.innerRotation.angle.set(0.0);
myNode121.innerTranslation.vector.set(0,0,0);
myNode121.isVisible = false;

/* définition du node n°122*/
const myNode122 = object.addCylinder();
myNode122.point1.set(-1.735,4.013,-4.22295);
myNode122.point2.set(-1.735,4.013,-4.07105);
myNode122.radius.set(0.261);
myNode122.innerRotation.center.set(0,0,0);
myNode122.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode122.innerRotation.angle.set(89.99978954085029);
myNode122.isVisible = false;

/* définition du node n°123*/
const myNode123 = object.addCylinder();
myNode123.point1.set(0.725,3.714,-18.0999);
myNode123.point2.set(0.725,3.714,-2.519000000000002);
myNode123.radius.set(0.262);
myNode123.innerRotation.center.set(0,0,0);
myNode123.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode123.innerRotation.angle.set(89.99978954085029);
myNode123.isVisible = false;

/* définition du node n°124*/
const myNode124 = object.addFuseOperation();
myNode124.leftArg.set(myNode122);
myNode124.rightArg.set(myNode123);
myNode124.isVisible = false;

/* définition du node n°125*/
const myNode125 = object.addCutOperation();
myNode125.leftArg.set(myNode121);
myNode125.rightArg.set(myNode124);
myNode125.isVisible = false;

/* définition du node n°126*/
const myNode126 = object.addBox();
myNode126.point1.set(-4.2229,3.1831,0.0331);
myNode126.point2.set(-2.5181,18.0999,18.0999);
myNode126.innerRotation.center.set(0,0,0);
myNode126.innerRotation.axis.set(0.0,0.0,0.0);
myNode126.innerRotation.angle.set(0.0);
myNode126.innerTranslation.vector.set(0,0,0);
myNode126.isVisible = false;

/* définition du node n°127*/
const myNode127 = object.addCylinder();
myNode127.point1.set(-1.735,4.013,-4.22295);
myNode127.point2.set(-1.735,4.013,18.09995);
myNode127.radius.set(0.261);
myNode127.innerRotation.center.set(0,0,0);
myNode127.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode127.innerRotation.angle.set(89.99978954085029);
myNode127.isVisible = false;

/* définition du node n°128*/
const myNode128 = object.addCutOperation();
myNode128.leftArg.set(myNode126);
myNode128.rightArg.set(myNode127);
myNode128.isVisible = false;

/* définition du node n°129*/
const myNode129 = object.addCylinder();
myNode129.point1.set(-0.033,-0.227,-18.0999);
myNode129.point2.set(-0.033,-0.227,-4.224100000000002);
myNode129.radius.set(0.263);
myNode129.innerRotation.center.set(0,0,0);
myNode129.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode129.innerRotation.angle.set(89.99978954085029);
myNode129.isVisible = false;

/* définition du node n°130*/
const myNode130 = object.addCommonOperation();
myNode130.leftArg.set(myNode128);
myNode130.rightArg.set(myNode129);
myNode130.isVisible = false;

/* définition du node n°131*/
const myNode131 = object.addFuseOperation();
myNode131.leftArg.set(myNode125);
myNode131.rightArg.set(myNode130);
myNode131.isVisible = false;

/* définition du node n°132*/
const myNode132 = object.addBox();
myNode132.point1.set(-4.07195,3.18305,-18.0999);
myNode132.point2.set(-2.51905,18.09995,2.2099999999999973);
myNode132.innerRotation.center.set(0,0,0);
myNode132.innerRotation.axis.set(0.0,0.0,0.0);
myNode132.innerRotation.angle.set(0.0);
myNode132.innerTranslation.vector.set(0,0,0);
myNode132.isVisible = false;

/* définition du node n°133*/
const myNode133 = object.addCylinder();
myNode133.point1.set(-0.039,3.183,-4.22295);
myNode133.point2.set(-0.039,3.183,18.09995);
myNode133.radius.set(0.262);
myNode133.innerRotation.center.set(0,0,0);
myNode133.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode133.innerRotation.angle.set(89.99978954085029);
myNode133.isVisible = false;

/* définition du node n°134*/
const myNode134 = object.addCylinder();
myNode134.point1.set(-0.033,-0.227,-4.22295);
myNode134.point2.set(-0.033,-0.227,-4.07105);
myNode134.radius.set(0.263);
myNode134.innerRotation.center.set(0,0,0);
myNode134.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode134.innerRotation.angle.set(89.99978954085029);
myNode134.isVisible = false;

/* définition du node n°135*/
const myNode135 = object.addCylinder();
myNode135.point1.set(-0.885,3.139,-18.0999);
myNode135.point2.set(-0.885,3.139,-2.519000000000002);
myNode135.radius.set(0.282);
myNode135.innerRotation.center.set(0,0,0);
myNode135.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode135.innerRotation.angle.set(89.99978954085029);
myNode135.isVisible = false;

/* définition du node n°136*/
const myNode136 = object.addCylinder();
myNode136.point1.set(-0.03,4.317,-4.22295);
myNode136.point2.set(-0.03,4.317,18.09995);
myNode136.radius.set(0.262);
myNode136.innerRotation.center.set(0,0,0);
myNode136.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode136.innerRotation.angle.set(89.99978954085029);
myNode136.isVisible = false;

/* définition du node n°137*/
const myNode137 = object.addBox();
myNode137.point1.set(-18.0999,-3.10895,-18.0999);
myNode137.point2.set(-4.224000000000002,4.99995,18.099999999999998);
myNode137.innerRotation.center.set(0,0,0);
myNode137.innerRotation.axis.set(0.0,0.0,0.0);
myNode137.innerRotation.angle.set(0.0);
myNode137.innerTranslation.vector.set(0,0,0);
myNode137.isVisible = false;

/* définition du node n°138*/
const myNode138_1 = myNode132.clone();
myNode138_1.isVisible = false;
const myNode138_2 = object.addFuseOperation();
myNode138_2.leftArg.set(myNode138_1);
myNode138_2.rightArg.set(myNode133);
myNode138_2.isVisible = false;
const myNode138_3 = object.addFuseOperation();
myNode138_3.leftArg.set(myNode138_2);
myNode138_3.rightArg.set(myNode134);
myNode138_3.isVisible = false;
const myNode138_4 = object.addFuseOperation();
myNode138_4.leftArg.set(myNode138_3);
myNode138_4.rightArg.set(myNode135);
myNode138_4.isVisible = false;
const myNode138_5 = object.addFuseOperation();
myNode138_5.leftArg.set(myNode138_4);
myNode138_5.rightArg.set(myNode136);
myNode138_5.isVisible = false;
myNode138 = object.addFuseOperation();
myNode138.leftArg.set(myNode138_5);
myNode138.rightArg.set(myNode137);
myNode138.isVisible = false;
myNode138.isVisible = false;

/* définition du node n°139*/
const myNode139 = object.addCutOperation();
myNode139.leftArg.set(myNode131);
myNode139.rightArg.set(myNode138);
myNode139.isVisible = false;

/* définition du node n°140*/
const myNode140 = object.addBox();
myNode140.point1.set(4.0721,-3.9409,0.0331);
myNode140.point2.set(4.2238999999999995,-3.1091,0.5999);
myNode140.innerRotation.center.set(0,0,0);
myNode140.innerRotation.axis.set(0.0,0.0,0.0);
myNode140.innerRotation.angle.set(0.0);
myNode140.innerTranslation.vector.set(0,0,0);
myNode140.isVisible = false;

/* définition du node n°141*/
const myNode141 = object.addCylinder();
myNode141.point1.set(2.306,-2.642,-2.2479);
myNode141.point2.set(2.306,-2.642,-1.4830999999999999);
myNode141.radius.set(0.247);
myNode141.innerRotation.center.set(0,0,0);
myNode141.innerRotation.axis.set(0.0,0.0,0.0);
myNode141.innerRotation.angle.set(0.0);
myNode141.isVisible = false;

/* définition du node n°142*/
const myNode142 = object.addBox();
myNode142.point1.set(4.0721,-4.9999,2.2101);
myNode142.point2.set(4.2238999999999995,-3.1091,2.3619000000000003);
myNode142.innerRotation.center.set(0,0,0);
myNode142.innerRotation.axis.set(0.0,0.0,0.0);
myNode142.innerRotation.angle.set(0.0);
myNode142.innerTranslation.vector.set(0,0,0);
myNode142.isVisible = false;

/* définition du node n°143*/
const myNode143 = object.addBox();
myNode143.point1.set(4.0721,-3.9409,-1.4829);
myNode143.point2.set(4.2238999999999995,-3.1091,-0.00010000000000021103);
myNode143.innerRotation.center.set(0,0,0);
myNode143.innerRotation.axis.set(0.0,0.0,0.0);
myNode143.innerRotation.angle.set(0.0);
myNode143.innerTranslation.vector.set(0,0,0);
myNode143.isVisible = false;

/* définition du node n°144*/
const myNode144 = object.addCutOperation();
myNode144.leftArg.set(myNode143);
myNode144.rightArg.set(myNode48);
myNode144.isVisible = false;

/* définition du node n°145*/
const myNode145 = object.addBox();
myNode145.point1.set(1.0421,-3.1089,2.2101);
myNode145.point2.set(4.071899999999999,4.9999,2.3619000000000003);
myNode145.innerRotation.center.set(0,0,0);
myNode145.innerRotation.axis.set(0.0,0.0,0.0);
myNode145.innerRotation.angle.set(0.0);
myNode145.innerTranslation.vector.set(0,0,0);
myNode145.isVisible = false;

/* définition du node n°146*/
const myNode146 = object.addBox();
myNode146.point1.set(-4.2229,-4.9999,1.1691);
myNode146.point2.set(-4.0711,3.1829,2.3619000000000003);
myNode146.innerRotation.center.set(0,0,0);
myNode146.innerRotation.axis.set(0.0,0.0,0.0);
myNode146.innerRotation.angle.set(0.0);
myNode146.innerTranslation.vector.set(0,0,0);
myNode146.isVisible = false;

/* définition du node n°147*/
const myNode147 = object.addCylinder();
myNode147.point1.set(-1.736,2.879,-4.22295);
myNode147.point2.set(-1.736,2.879,4.07195);
myNode147.radius.set(0.263);
myNode147.innerRotation.center.set(0,0,0);
myNode147.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode147.innerRotation.angle.set(89.99978954085029);
myNode147.isVisible = false;

/* définition du node n°148*/
const myNode148 = object.addCylinder();
myNode148.point1.set(-1.736,1.743,-18.0999);
myNode148.point2.set(-1.736,1.743,18.099999999999998);
myNode148.radius.set(0.263);
myNode148.innerRotation.center.set(0,0,0);
myNode148.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode148.innerRotation.angle.set(89.99978954085029);
myNode148.isVisible = false;

/* définition du node n°149*/
const myNode149 = object.addFuseOperation();
myNode149.leftArg.set(myNode147);
myNode149.rightArg.set(myNode148);
myNode149.isVisible = false;

/* définition du node n°150*/
const myNode150 = object.addCutOperation();
myNode150.leftArg.set(myNode146);
myNode150.rightArg.set(myNode149);
myNode150.isVisible = false;

/* définition du node n°151*/
const myNode151 = object.addCylinder();
myNode151.point1.set(-1.74,-0.526,-18.0999);
myNode151.point2.set(-1.74,-0.526,-4.072000000000001);
myNode151.radius.set(0.265);
myNode151.innerRotation.center.set(0,0,0);
myNode151.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode151.innerRotation.angle.set(89.99978954085029);
myNode151.isVisible = false;

/* définition du node n°152*/
const myNode152 = object.addCylinder();
myNode152.point1.set(-1.736,-2.804,-4.22295);
myNode152.point2.set(-1.736,-2.804,18.09995);
myNode152.radius.set(0.263);
myNode152.innerRotation.center.set(0,0,0);
myNode152.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode152.innerRotation.angle.set(89.99978954085029);
myNode152.isVisible = false;

/* définition du node n°153*/
const myNode153_1 = myNode89.clone();
myNode153_1.isVisible = false;
const myNode153_2 = object.addFuseOperation();
myNode153_2.leftArg.set(myNode153_1);
myNode153_2.rightArg.set(myNode151);
myNode153_2.isVisible = false;
const myNode153_3 = object.addFuseOperation();
myNode153_3.leftArg.set(myNode153_2);
myNode153_3.rightArg.set(myNode93);
myNode153_3.isVisible = false;
myNode153 = object.addFuseOperation();
myNode153.leftArg.set(myNode153_3);
myNode153.rightArg.set(myNode152);
myNode153.isVisible = false;
myNode153.isVisible = false;

/* définition du node n°154*/
const myNode154 = object.addCutOperation();
myNode154.leftArg.set(myNode150);
myNode154.rightArg.set(myNode153);
myNode154.isVisible = false;

/* définition du node n°155*/
const myNode155 = object.addCylinder();
myNode155.point1.set(-1.737,-3.941,-18.0999);
myNode155.point2.set(-1.737,-3.941,18.099999999999998);
myNode155.radius.set(0.263);
myNode155.innerRotation.center.set(0,0,0);
myNode155.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode155.innerRotation.angle.set(89.99978954085029);
myNode155.isVisible = false;

/* définition du node n°156*/
const myNode156 = object.addCutOperation();
myNode156.leftArg.set(myNode154);
myNode156.rightArg.set(myNode155);
myNode156.isVisible = false;

/* définition du node n°157*/
const myNode157 = object.addBox();
myNode157.point1.set(-4.2229,-3.1089,-18.0999);
myNode157.point2.set(-4.0711,3.1829,0.03289999999999793);
myNode157.innerRotation.center.set(0,0,0);
myNode157.innerRotation.axis.set(0.0,0.0,0.0);
myNode157.innerRotation.angle.set(0.0);
myNode157.innerTranslation.vector.set(0,0,0);
myNode157.isVisible = false;

/* définition du node n°158*/
const myNode158 = object.addCutOperation();
myNode158.leftArg.set(myNode157);
myNode158.rightArg.set(myNode75);
myNode158.isVisible = false;

/* définition du node n°159*/
const myNode159 = object.addFuseOperation();
myNode159.leftArg.set(myNode48);
myNode159.rightArg.set(myNode80);
myNode159.isVisible = false;

/* définition du node n°160*/
const myNode160 = object.addCutOperation();
myNode160.leftArg.set(myNode158);
myNode160.rightArg.set(myNode159);
myNode160.isVisible = false;

/* définition du node n°161*/
const myNode161 = object.addBox();
myNode161.point1.set(-4.22295,-3.10895,-18.0999);
myNode161.point2.set(-4.07105,18.09995,-1.4830000000000005);
myNode161.innerRotation.center.set(0,0,0);
myNode161.innerRotation.axis.set(0.0,0.0,0.0);
myNode161.innerRotation.angle.set(0.0);
myNode161.innerTranslation.vector.set(0,0,0);
myNode161.isVisible = false;

/* définition du node n°162*/
const myNode162 = object.addCylinder();
myNode162.point1.set(0.725,2.578,-18.0999);
myNode162.point2.set(0.725,2.578,-2.519000000000002);
myNode162.radius.set(0.263);
myNode162.innerRotation.center.set(0,0,0);
myNode162.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode162.innerRotation.angle.set(89.99978954085029);
myNode162.isVisible = false;

/* définition du node n°163*/
const myNode163 = object.addCylinder();
myNode163.point1.set(-0.035,-1.363,-4.22295);
myNode163.point2.set(-0.035,-1.363,18.09995);
myNode163.radius.set(0.266);
myNode163.innerRotation.center.set(0,0,0);
myNode163.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode163.innerRotation.angle.set(89.99978954085029);
myNode163.isVisible = false;

/* définition du node n°164*/
const myNode164_1 = myNode69.clone();
myNode164_1.isVisible = false;
const myNode164_2 = object.addFuseOperation();
myNode164_2.leftArg.set(myNode164_1);
myNode164_2.rightArg.set(myNode161);
myNode164_2.isVisible = false;
const myNode164_3 = object.addFuseOperation();
myNode164_3.leftArg.set(myNode164_2);
myNode164_3.rightArg.set(myNode162);
myNode164_3.isVisible = false;
myNode164 = object.addFuseOperation();
myNode164.leftArg.set(myNode164_3);
myNode164.rightArg.set(myNode163);
myNode164.isVisible = false;
myNode164.isVisible = false;

/* définition du node n°165*/
const myNode165 = object.addCutOperation();
myNode165.leftArg.set(myNode160);
myNode165.rightArg.set(myNode164);
myNode165.isVisible = false;

/* définition du node n°166*/
const myNode166 = object.addSphere();
myNode166.center.set(0,0,0);
myNode166.radius.set(54.29990791889062);
myNode166.isVisible = false;

/* définition du node n°167*/
const myNode167 = object.addCommonOperation();
myNode167.leftArg.set(myNode166);
myNode167.rightArg.set(myNode52);
myNode167.isVisible = false;

/* définition du node n°168*/
const myNode168 = object.addCylinder();
myNode168.point1.set(0.728,-1.971,-4.22295);
myNode168.point2.set(0.728,-1.971,-4.07105);
myNode168.radius.set(0.263);
myNode168.innerRotation.center.set(0,0,0);
myNode168.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode168.innerRotation.angle.set(89.99978954085029);
myNode168.isVisible = false;

/* définition du node n°169*/
const myNode169 = object.addCylinder();
myNode169.point1.set(0.727,1.438,-18.0999);
myNode169.point2.set(0.727,1.438,-4.072000000000001);
myNode169.radius.set(0.262);
myNode169.innerRotation.center.set(0,0,0);
myNode169.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode169.innerRotation.angle.set(89.99978954085029);
myNode169.isVisible = false;

/* définition du node n°170*/
const myNode170 = object.addCylinder();
myNode170.point1.set(-0.028,0.91,-4.22295);
myNode170.point2.set(-0.028,0.91,-2.5180499999999997);
myNode170.radius.set(0.264);
myNode170.innerRotation.center.set(0,0,0);
myNode170.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode170.innerRotation.angle.set(89.99978954085029);
myNode170.isVisible = false;

/* définition du node n°171*/
const myNode171 = object.addCylinder();
myNode171.point1.set(0.724,0.302,-4.22295);
myNode171.point2.set(0.724,0.302,18.09995);
myNode171.radius.set(0.265);
myNode171.innerRotation.center.set(0,0,0);
myNode171.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode171.innerRotation.angle.set(89.99978954085029);
myNode171.isVisible = false;

/* définition du node n°172*/
const myNode172_1 = myNode133.clone();
myNode172_1.isVisible = false;
const myNode172_2 = object.addFuseOperation();
myNode172_2.leftArg.set(myNode172_1);
myNode172_2.rightArg.set(myNode167);
myNode172_2.isVisible = false;
const myNode172_3 = object.addFuseOperation();
myNode172_3.leftArg.set(myNode172_2);
myNode172_3.rightArg.set(myNode168);
myNode172_3.isVisible = false;
const myNode172_4 = object.addFuseOperation();
myNode172_4.leftArg.set(myNode172_3);
myNode172_4.rightArg.set(myNode169);
myNode172_4.isVisible = false;
const myNode172_5 = object.addFuseOperation();
myNode172_5.leftArg.set(myNode172_4);
myNode172_5.rightArg.set(myNode170);
myNode172_5.isVisible = false;
myNode172 = object.addFuseOperation();
myNode172.leftArg.set(myNode172_5);
myNode172.rightArg.set(myNode171);
myNode172.isVisible = false;
myNode172.isVisible = false;

/* définition du node n°173*/
const myNode173 = object.addCutOperation();
myNode173.leftArg.set(myNode165);
myNode173.rightArg.set(myNode172);
myNode173.isVisible = false;

/* définition du node n°174*/
const myNode174_1 = myNode1.clone();
myNode174_1.isVisible = false;
const myNode174_2 = object.addFuseOperation();
myNode174_2.leftArg.set(myNode174_1);
myNode174_2.rightArg.set(myNode2);
myNode174_2.isVisible = false;
const myNode174_3 = object.addFuseOperation();
myNode174_3.leftArg.set(myNode174_2);
myNode174_3.rightArg.set(myNode3);
myNode174_3.isVisible = false;
const myNode174_4 = object.addFuseOperation();
myNode174_4.leftArg.set(myNode174_3);
myNode174_4.rightArg.set(myNode6);
myNode174_4.isVisible = false;
const myNode174_5 = object.addFuseOperation();
myNode174_5.leftArg.set(myNode174_4);
myNode174_5.rightArg.set(myNode7);
myNode174_5.isVisible = false;
const myNode174_6 = object.addFuseOperation();
myNode174_6.leftArg.set(myNode174_5);
myNode174_6.rightArg.set(myNode17);
myNode174_6.isVisible = false;
const myNode174_7 = object.addFuseOperation();
myNode174_7.leftArg.set(myNode174_6);
myNode174_7.rightArg.set(myNode24);
myNode174_7.isVisible = false;
const myNode174_8 = object.addFuseOperation();
myNode174_8.leftArg.set(myNode174_7);
myNode174_8.rightArg.set(myNode25);
myNode174_8.isVisible = false;
const myNode174_9 = object.addFuseOperation();
myNode174_9.leftArg.set(myNode174_8);
myNode174_9.rightArg.set(myNode30);
myNode174_9.isVisible = false;
const myNode174_10 = object.addFuseOperation();
myNode174_10.leftArg.set(myNode174_9);
myNode174_10.rightArg.set(myNode57);
myNode174_10.isVisible = false;
const myNode174_11 = object.addFuseOperation();
myNode174_11.leftArg.set(myNode174_10);
myNode174_11.rightArg.set(myNode85);
myNode174_11.isVisible = false;
const myNode174_12 = object.addFuseOperation();
myNode174_12.leftArg.set(myNode174_11);
myNode174_12.rightArg.set(myNode97);
myNode174_12.isVisible = false;
const myNode174_13 = object.addFuseOperation();
myNode174_13.leftArg.set(myNode174_12);
myNode174_13.rightArg.set(myNode103);
myNode174_13.isVisible = false;
const myNode174_14 = object.addFuseOperation();
myNode174_14.leftArg.set(myNode174_13);
myNode174_14.rightArg.set(myNode110);
myNode174_14.isVisible = false;
const myNode174_15 = object.addFuseOperation();
myNode174_15.leftArg.set(myNode174_14);
myNode174_15.rightArg.set(myNode119);
myNode174_15.isVisible = false;
const myNode174_16 = object.addFuseOperation();
myNode174_16.leftArg.set(myNode174_15);
myNode174_16.rightArg.set(myNode120);
myNode174_16.isVisible = false;
const myNode174_17 = object.addFuseOperation();
myNode174_17.leftArg.set(myNode174_16);
myNode174_17.rightArg.set(myNode139);
myNode174_17.isVisible = false;
const myNode174_18 = object.addFuseOperation();
myNode174_18.leftArg.set(myNode174_17);
myNode174_18.rightArg.set(myNode140);
myNode174_18.isVisible = false;
const myNode174_19 = object.addFuseOperation();
myNode174_19.leftArg.set(myNode174_18);
myNode174_19.rightArg.set(myNode141);
myNode174_19.isVisible = false;
const myNode174_20 = object.addFuseOperation();
myNode174_20.leftArg.set(myNode174_19);
myNode174_20.rightArg.set(myNode142);
myNode174_20.isVisible = false;
const myNode174_21 = object.addFuseOperation();
myNode174_21.leftArg.set(myNode174_20);
myNode174_21.rightArg.set(myNode144);
myNode174_21.isVisible = false;
const myNode174_22 = object.addFuseOperation();
myNode174_22.leftArg.set(myNode174_21);
myNode174_22.rightArg.set(myNode145);
myNode174_22.isVisible = false;
const myNode174_23 = object.addFuseOperation();
myNode174_23.leftArg.set(myNode174_22);
myNode174_23.rightArg.set(myNode156);
myNode174_23.isVisible = false;
myNode174 = object.addFuseOperation();
myNode174.leftArg.set(myNode174_23);
myNode174.rightArg.set(myNode173);
myNode174.isVisible = false;
myNode174.isVisible = false;

/* définition du node n°175*/
const myNode175 = object.addCommonOperation();
myNode175.leftArg.set(myNode0);
myNode175.rightArg.set(myNode174);
myNode175.isVisible = true;


/*END Geometry Object Definition*/