/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.0679,-5.9999,-2.8339);
myNode0.point2.set(5.0679,5.9999,2.8339);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(0.0,0.0,0.0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(1.0421,-3.1089,2.2101);
myNode1.point2.set(4.071899999999999,4.9999,2.3619000000000003);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.innerTranslation.vector.set(2.557,0.9455,2.286);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(4.0721,-3.9409,0.0331);
myNode2.point2.set(4.2238999999999995,-3.1091,0.5999);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.innerTranslation.vector.set(4.148,-3.525,0.3165);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addBox();
myNode3.point1.set(-4.2229,-4.9999,1.1691);
myNode3.point2.set(-4.0711,3.1829,2.3619000000000003);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);
myNode3.innerTranslation.vector.set(-4.147,-0.9085000000000001,1.7655);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(-1.736,2.879,-4.22295);
myNode4.point2.set(-1.736,2.879,4.07195);
myNode4.radius.set(0.263);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode4.innerRotation.angle.set(89.99978954085029);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(-1.736,1.743,-18.0999);
myNode5.point2.set(-1.736,1.743,18.099999999999998);
myNode5.radius.set(0.263);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode5.innerRotation.angle.set(89.99978954085029);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addFuseOperation();
myNode6.leftArg.set(myNode4);
myNode6.rightArg.set(myNode5);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addCutOperation();
myNode7.leftArg.set(myNode3);
myNode7.rightArg.set(myNode6);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addCylinder();
myNode8.point1.set(-1.736,-1.668,-18.0999);
myNode8.point2.set(-1.736,-1.668,18.099999999999998);
myNode8.radius.set(0.263);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode8.innerRotation.angle.set(89.99978954085029);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addCylinder();
myNode9.point1.set(-1.74,-0.526,-18.0999);
myNode9.point2.set(-1.74,-0.526,-4.072000000000001);
myNode9.radius.set(0.265);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode9.innerRotation.angle.set(89.99978954085029);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addCylinder();
myNode10.point1.set(-1.736,-2.804,-4.22295);
myNode10.point2.set(-1.736,-2.804,18.09995);
myNode10.radius.set(0.263);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode10.innerRotation.angle.set(89.99978954085029);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addCylinder();
myNode11.point1.set(-1.735,0.606,-18.0999);
myNode11.point2.set(-1.735,0.606,18.099999999999998);
myNode11.radius.set(0.262);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode11.innerRotation.angle.set(89.99978954085029);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12_1 = myNode8.clone();
myNode12_1.isVisible = false;
const myNode12_2 = object.addFuseOperation();
myNode12_2.leftArg.set(myNode12_1);
myNode12_2.rightArg.set(myNode9);
myNode12_2.isVisible = false;
const myNode12_3 = object.addFuseOperation();
myNode12_3.leftArg.set(myNode12_2);
myNode12_3.rightArg.set(myNode10);
myNode12_3.isVisible = false;
myNode12 = object.addFuseOperation();
myNode12.leftArg.set(myNode12_3);
myNode12.rightArg.set(myNode11);
myNode12.isVisible = false;
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addCutOperation();
myNode13.leftArg.set(myNode7);
myNode13.rightArg.set(myNode12);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(-1.737,-3.941,-18.0999);
myNode14.point2.set(-1.737,-3.941,18.099999999999998);
myNode14.radius.set(0.263);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode14.innerRotation.angle.set(89.99978954085029);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addCutOperation();
myNode15.leftArg.set(myNode13);
myNode15.rightArg.set(myNode14);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addBox();
myNode16.point1.set(-4.2229,-4.9999,2.2101);
myNode16.point2.set(4.0719,3.1829,2.3619000000000003);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);
myNode16.innerTranslation.vector.set(-0.0754999999999999,-0.9085000000000001,2.286);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(4.0721,-3.1089,-18.0999);
myNode17.point2.set(4.2238999999999995,3.1829,0.5998999999999981);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.innerTranslation.vector.set(4.148,0.03699999999999992,-8.750000000000002);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(0.728,-1.971,-18.0999);
myNode18.point2.set(0.728,-1.971,18.099999999999998);
myNode18.radius.set(0.263);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode18.innerRotation.angle.set(89.99978954085029);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addCutOperation();
myNode19.leftArg.set(myNode17);
myNode19.rightArg.set(myNode18);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addCylinder();
myNode20.point1.set(-0.035,-1.363,-18.0999);
myNode20.point2.set(-0.035,-1.363,4.222999999999999);
myNode20.radius.set(0.266);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode20.innerRotation.angle.set(89.99978954085029);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addCylinder();
myNode21.point1.set(0.727,1.438,4.07205);
myNode21.point2.set(0.727,1.438,4.22395);
myNode21.radius.set(0.262);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode21.innerRotation.angle.set(89.99978954085029);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addFuseOperation();
myNode22.leftArg.set(myNode20);
myNode22.rightArg.set(myNode21);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addCutOperation();
myNode23.leftArg.set(myNode19);
myNode23.rightArg.set(myNode22);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addSphere();
myNode24.center.set(0,0,0);
myNode24.radius.set(54.29981583762508);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addCylinder();
myNode25.point1.set(-0.033,-0.227,-18.0999);
myNode25.point2.set(-0.033,-0.227,18.099999999999998);
myNode25.radius.set(0.263);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode25.innerRotation.angle.set(89.99978954085029);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addCutOperation();
myNode26.leftArg.set(myNode24);
myNode26.rightArg.set(myNode25);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addCylinder();
myNode27.point1.set(0.725,2.578,-18.0999);
myNode27.point2.set(0.725,2.578,18.099999999999998);
myNode27.radius.set(0.263);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode27.innerRotation.angle.set(89.99978954085029);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addCylinder();
myNode28.point1.set(0.727,-3.109,-18.0999);
myNode28.point2.set(0.727,-3.109,18.099999999999998);
myNode28.radius.set(0.263);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode28.innerRotation.angle.set(90.0002104591497);
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
const myNode31 = object.addCylinder();
myNode31.point1.set(0.724,0.302,-18.0999);
myNode31.point2.set(0.724,0.302,18.099999999999998);
myNode31.radius.set(0.265);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode31.innerRotation.angle.set(89.99978954085029);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addCylinder();
myNode32.point1.set(-0.033,2.044,-18.0999);
myNode32.point2.set(-0.033,2.044,18.099999999999998);
myNode32.radius.set(0.264);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode32.innerRotation.angle.set(89.99978954085029);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addCylinder();
myNode33.point1.set(-0.028,0.91,-18.0999);
myNode33.point2.set(-0.028,0.91,18.099999999999998);
myNode33.radius.set(0.264);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode33.innerRotation.angle.set(89.99978954085029);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addCylinder();
myNode34.point1.set(-0.032,-2.501,4.07205);
myNode34.point2.set(-0.032,-2.501,18.09995);
myNode34.radius.set(0.262);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode34.innerRotation.angle.set(89.99978954085029);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35_1 = myNode31.clone();
myNode35_1.isVisible = false;
const myNode35_2 = object.addFuseOperation();
myNode35_2.leftArg.set(myNode35_1);
myNode35_2.rightArg.set(myNode32);
myNode35_2.isVisible = false;
const myNode35_3 = object.addFuseOperation();
myNode35_3.leftArg.set(myNode35_2);
myNode35_3.rightArg.set(myNode33);
myNode35_3.isVisible = false;
myNode35 = object.addFuseOperation();
myNode35.leftArg.set(myNode35_3);
myNode35.rightArg.set(myNode34);
myNode35.isVisible = false;
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addCutOperation();
myNode36.leftArg.set(myNode30);
myNode36.rightArg.set(myNode35);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addCylinder();
myNode37.point1.set(-0.039,3.183,-18.0999);
myNode37.point2.set(-0.039,3.183,4.222999999999999);
myNode37.radius.set(0.262);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode37.innerRotation.angle.set(89.99978954085029);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addCutOperation();
myNode38.leftArg.set(myNode24);
myNode38.rightArg.set(myNode37);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addCylinder();
myNode39.point1.set(0.726,-0.834,-18.0999);
myNode39.point2.set(0.726,-0.834,4.222999999999999);
myNode39.radius.set(0.263);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode39.innerRotation.angle.set(90.0002104591497);
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addBox();
myNode40.point1.set(-18.0999,-3.10895,-18.0999);
myNode40.point2.set(18.099999999999998,3.18295,-1.4830000000000005);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(0.0,0.0,0.0);
myNode40.innerRotation.angle.set(0.0);
myNode40.innerTranslation.vector.set(4.9999999998107114e-05,0.03699999999999992,-9.791450000000001);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41 = object.addFuseOperation();
myNode41.leftArg.set(myNode39);
myNode41.rightArg.set(myNode40);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addCutOperation();
myNode42.leftArg.set(myNode38);
myNode42.rightArg.set(myNode41);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addCommonOperation();
myNode43.leftArg.set(myNode23);
myNode43.rightArg.set(myNode36);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44 = object.addCylinder();
myNode44.point1.set(-2.358,-2.644,-2.2479);
myNode44.point2.set(-2.358,-2.644,-1.4830999999999999);
myNode44.radius.set(0.246);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(0.0,0.0,0.0);
myNode44.innerRotation.angle.set(0.0);
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45 = object.addBox();
myNode45.point1.set(4.0721,3.1831,-1.4829);
myNode45.point2.set(4.2238999999999995,4.9999,1.1689);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(0.0,0.0,0.0);
myNode45.innerRotation.angle.set(0.0);
myNode45.innerTranslation.vector.set(4.148,4.0915,-0.15700000000000003);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addCylinder();
myNode46.point1.set(-0.885,3.139,-18.0999);
myNode46.point2.set(-0.885,3.139,18.099999999999998);
myNode46.radius.set(0.282);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode46.innerRotation.angle.set(89.99978954085029);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addCutOperation();
myNode47.leftArg.set(myNode45);
myNode47.rightArg.set(myNode46);
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addCylinder();
myNode48.point1.set(-0.03,4.317,-18.0999);
myNode48.point2.set(-0.03,4.317,18.099999999999998);
myNode48.radius.set(0.262);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode48.innerRotation.angle.set(89.99978954085029);
myNode48.isVisible = false;

/* définition du node n°49*/
const myNode49 = object.addCutOperation();
myNode49.leftArg.set(myNode47);
myNode49.rightArg.set(myNode48);
myNode49.isVisible = false;

/* définition du node n°50*/
const myNode50 = object.addCylinder();
myNode50.point1.set(-0.039,3.183,-18.0999);
myNode50.point2.set(-0.039,3.183,18.099999999999998);
myNode50.radius.set(0.262);
myNode50.innerRotation.center.set(0,0,0);
myNode50.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode50.innerRotation.angle.set(89.99978954085029);
myNode50.isVisible = false;

/* définition du node n°51*/
const myNode51 = object.addCylinder();
myNode51.point1.set(0.725,3.714,4.07205);
myNode51.point2.set(0.725,3.714,18.09995);
myNode51.radius.set(0.262);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode51.innerRotation.angle.set(89.99978954085029);
myNode51.isVisible = false;

/* définition du node n°52*/
const myNode52 = object.addBox();
myNode52.point1.set(-18.0999,-18.0999,-2.24795);
myNode52.point2.set(4.071999999999999,18.099999999999998,18.098950000000002);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,0.0,0.0);
myNode52.innerRotation.angle.set(0.0);
myNode52.innerTranslation.vector.set(-7.013950000000001,4.9999999998107114e-05,7.925500000000001);
myNode52.isVisible = false;

/* définition du node n°53*/
const myNode53_1 = myNode50.clone();
myNode53_1.isVisible = false;
const myNode53_2 = object.addFuseOperation();
myNode53_2.leftArg.set(myNode53_1);
myNode53_2.rightArg.set(myNode51);
myNode53_2.isVisible = false;
myNode53 = object.addFuseOperation();
myNode53.leftArg.set(myNode53_2);
myNode53.rightArg.set(myNode52);
myNode53.isVisible = false;
myNode53.isVisible = false;

/* définition du node n°54*/
const myNode54 = object.addCutOperation();
myNode54.leftArg.set(myNode49);
myNode54.rightArg.set(myNode53);
myNode54.isVisible = false;

/* définition du node n°55*/
const myNode55 = object.addBox();
myNode55.point1.set(4.0721,-3.9409,-1.4829);
myNode55.point2.set(4.2238999999999995,-3.1091,-0.00010000000000021103);
myNode55.innerRotation.center.set(0,0,0);
myNode55.innerRotation.axis.set(0.0,0.0,0.0);
myNode55.innerRotation.angle.set(0.0);
myNode55.innerTranslation.vector.set(4.148,-3.525,-0.7415000000000002);
myNode55.isVisible = false;

/* définition du node n°56*/
const myNode56 = object.addCutOperation();
myNode56.leftArg.set(myNode55);
myNode56.rightArg.set(myNode28);
myNode56.isVisible = false;

/* définition du node n°57*/
const myNode57 = object.addBox();
myNode57.point1.set(-4.2229,3.1831,0.0331);
myNode57.point2.set(-2.5181,18.0999,18.0999);
myNode57.innerRotation.center.set(0,0,0);
myNode57.innerRotation.axis.set(0.0,0.0,0.0);
myNode57.innerRotation.angle.set(0.0);
myNode57.innerTranslation.vector.set(-3.3705,10.6415,9.0665);
myNode57.isVisible = false;

/* définition du node n°58*/
const myNode58 = object.addCylinder();
myNode58.point1.set(-1.735,4.013,-4.22295);
myNode58.point2.set(-1.735,4.013,18.09995);
myNode58.radius.set(0.261);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode58.innerRotation.angle.set(89.99978954085029);
myNode58.isVisible = false;

/* définition du node n°59*/
const myNode59 = object.addCutOperation();
myNode59.leftArg.set(myNode57);
myNode59.rightArg.set(myNode58);
myNode59.isVisible = false;

/* définition du node n°60*/
const myNode60 = object.addCylinder();
myNode60.point1.set(-0.033,-0.227,-18.0999);
myNode60.point2.set(-0.033,-0.227,-4.224100000000002);
myNode60.radius.set(0.263);
myNode60.innerRotation.center.set(0,0,0);
myNode60.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode60.innerRotation.angle.set(89.99978954085029);
myNode60.isVisible = false;

/* définition du node n°61*/
const myNode61 = object.addCommonOperation();
myNode61.leftArg.set(myNode59);
myNode61.rightArg.set(myNode60);
myNode61.isVisible = false;

/* définition du node n°62*/
const myNode62 = object.addBox();
myNode62.point1.set(-18.0999,3.1831,-1.4829);
myNode62.point2.set(-2.5191000000000017,4.9999,2.3619000000000003);
myNode62.innerRotation.center.set(0,0,0);
myNode62.innerRotation.axis.set(0.0,0.0,0.0);
myNode62.innerRotation.angle.set(0.0);
myNode62.innerTranslation.vector.set(-10.309500000000002,4.0915,0.4395);
myNode62.isVisible = false;

/* définition du node n°63*/
const myNode63 = object.addCylinder();
myNode63.point1.set(-1.735,4.013,-4.22295);
myNode63.point2.set(-1.735,4.013,-4.07105);
myNode63.radius.set(0.261);
myNode63.innerRotation.center.set(0,0,0);
myNode63.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode63.innerRotation.angle.set(89.99978954085029);
myNode63.isVisible = false;

/* définition du node n°64*/
const myNode64 = object.addCylinder();
myNode64.point1.set(0.725,3.714,-18.0999);
myNode64.point2.set(0.725,3.714,-2.519000000000002);
myNode64.radius.set(0.262);
myNode64.innerRotation.center.set(0,0,0);
myNode64.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode64.innerRotation.angle.set(89.99978954085029);
myNode64.isVisible = false;

/* définition du node n°65*/
const myNode65 = object.addFuseOperation();
myNode65.leftArg.set(myNode63);
myNode65.rightArg.set(myNode64);
myNode65.isVisible = false;

/* définition du node n°66*/
const myNode66 = object.addCutOperation();
myNode66.leftArg.set(myNode62);
myNode66.rightArg.set(myNode65);
myNode66.isVisible = false;

/* définition du node n°67*/
const myNode67 = object.addFuseOperation();
myNode67.leftArg.set(myNode61);
myNode67.rightArg.set(myNode66);
myNode67.isVisible = false;

/* définition du node n°68*/
const myNode68 = object.addCylinder();
myNode68.point1.set(-0.03,4.317,-4.22295);
myNode68.point2.set(-0.03,4.317,18.09995);
myNode68.radius.set(0.262);
myNode68.innerRotation.center.set(0,0,0);
myNode68.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode68.innerRotation.angle.set(89.99978954085029);
myNode68.isVisible = false;

/* définition du node n°69*/
const myNode69 = object.addBox();
myNode69.point1.set(-18.0999,-3.10895,-18.0999);
myNode69.point2.set(-4.224000000000002,4.99995,18.099999999999998);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(0.0,0.0,0.0);
myNode69.innerRotation.angle.set(0.0);
myNode69.innerTranslation.vector.set(-11.161950000000001,0.9455,4.9999999998107114e-05);
myNode69.isVisible = false;

/* définition du node n°70*/
const myNode70 = object.addCylinder();
myNode70.point1.set(-0.039,3.183,-4.22295);
myNode70.point2.set(-0.039,3.183,18.09995);
myNode70.radius.set(0.262);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode70.innerRotation.angle.set(89.99978954085029);
myNode70.isVisible = false;

/* définition du node n°71*/
const myNode71 = object.addCylinder();
myNode71.point1.set(-0.885,3.139,-18.0999);
myNode71.point2.set(-0.885,3.139,-2.519000000000002);
myNode71.radius.set(0.282);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode71.innerRotation.angle.set(89.99978954085029);
myNode71.isVisible = false;

/* définition du node n°72*/
const myNode72 = object.addBox();
myNode72.point1.set(-4.07195,3.18305,-18.0999);
myNode72.point2.set(-2.51905,18.09995,2.2099999999999973);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(0.0,0.0,0.0);
myNode72.innerRotation.angle.set(0.0);
myNode72.innerTranslation.vector.set(-3.2955,10.6415,-7.944950000000002);
myNode72.isVisible = false;

/* définition du node n°73*/
const myNode73 = object.addCylinder();
myNode73.point1.set(-0.033,-0.227,-4.22295);
myNode73.point2.set(-0.033,-0.227,-4.07105);
myNode73.radius.set(0.263);
myNode73.innerRotation.center.set(0,0,0);
myNode73.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode73.innerRotation.angle.set(89.99978954085029);
myNode73.isVisible = false;

/* définition du node n°74*/
const myNode74_1 = myNode68.clone();
myNode74_1.isVisible = false;
const myNode74_2 = object.addFuseOperation();
myNode74_2.leftArg.set(myNode74_1);
myNode74_2.rightArg.set(myNode69);
myNode74_2.isVisible = false;
const myNode74_3 = object.addFuseOperation();
myNode74_3.leftArg.set(myNode74_2);
myNode74_3.rightArg.set(myNode70);
myNode74_3.isVisible = false;
const myNode74_4 = object.addFuseOperation();
myNode74_4.leftArg.set(myNode74_3);
myNode74_4.rightArg.set(myNode71);
myNode74_4.isVisible = false;
const myNode74_5 = object.addFuseOperation();
myNode74_5.leftArg.set(myNode74_4);
myNode74_5.rightArg.set(myNode72);
myNode74_5.isVisible = false;
myNode74 = object.addFuseOperation();
myNode74.leftArg.set(myNode74_5);
myNode74.rightArg.set(myNode73);
myNode74.isVisible = false;
myNode74.isVisible = false;

/* définition du node n°75*/
const myNode75 = object.addCutOperation();
myNode75.leftArg.set(myNode67);
myNode75.rightArg.set(myNode74);
myNode75.isVisible = false;

/* définition du node n°76*/
const myNode76 = object.addBox();
myNode76.point1.set(-2.5189,3.1831,2.2101);
myNode76.point2.set(1.0419,4.9999,2.3619000000000003);
myNode76.innerRotation.center.set(0,0,0);
myNode76.innerRotation.axis.set(0.0,0.0,0.0);
myNode76.innerRotation.angle.set(0.0);
myNode76.innerTranslation.vector.set(-0.7384999999999999,4.0915,2.286);
myNode76.isVisible = false;

/* définition du node n°77*/
const myNode77 = object.addBox();
myNode77.point1.set(-4.2229,-3.1089,-18.0999);
myNode77.point2.set(-4.0711,3.1829,0.03289999999999793);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(0.0,0.0,0.0);
myNode77.innerRotation.angle.set(0.0);
myNode77.innerTranslation.vector.set(-4.147,0.03699999999999992,-9.033500000000002);
myNode77.isVisible = false;

/* définition du node n°78*/
const myNode78 = object.addCylinder();
myNode78.point1.set(0.726,-0.834,-4.22295);
myNode78.point2.set(0.726,-0.834,-2.5180499999999997);
myNode78.radius.set(0.263);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode78.innerRotation.angle.set(90.0002104591497);
myNode78.isVisible = false;

/* définition du node n°79*/
const myNode79 = object.addCutOperation();
myNode79.leftArg.set(myNode77);
myNode79.rightArg.set(myNode78);
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
const myNode81 = object.addFuseOperation();
myNode81.leftArg.set(myNode28);
myNode81.rightArg.set(myNode80);
myNode81.isVisible = false;

/* définition du node n°82*/
const myNode82 = object.addCutOperation();
myNode82.leftArg.set(myNode79);
myNode82.rightArg.set(myNode81);
myNode82.isVisible = false;

/* définition du node n°83*/
const myNode83 = object.addCylinder();
myNode83.point1.set(-0.033,-0.227,-4.22295);
myNode83.point2.set(-0.033,-0.227,18.09995);
myNode83.radius.set(0.263);
myNode83.innerRotation.center.set(0,0,0);
myNode83.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode83.innerRotation.angle.set(89.99978954085029);
myNode83.isVisible = false;

/* définition du node n°84*/
const myNode84 = object.addBox();
myNode84.point1.set(-4.22295,-3.10895,-18.0999);
myNode84.point2.set(-4.07105,18.09995,-1.4830000000000005);
myNode84.innerRotation.center.set(0,0,0);
myNode84.innerRotation.axis.set(0.0,0.0,0.0);
myNode84.innerRotation.angle.set(0.0);
myNode84.innerTranslation.vector.set(-4.147,7.4955,-9.791450000000001);
myNode84.isVisible = false;

/* définition du node n°85*/
const myNode85 = object.addCylinder();
myNode85.point1.set(0.725,2.578,-18.0999);
myNode85.point2.set(0.725,2.578,-2.519000000000002);
myNode85.radius.set(0.263);
myNode85.innerRotation.center.set(0,0,0);
myNode85.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode85.innerRotation.angle.set(89.99978954085029);
myNode85.isVisible = false;

/* définition du node n°86*/
const myNode86 = object.addCylinder();
myNode86.point1.set(-0.035,-1.363,-4.22295);
myNode86.point2.set(-0.035,-1.363,18.09995);
myNode86.radius.set(0.266);
myNode86.innerRotation.center.set(0,0,0);
myNode86.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode86.innerRotation.angle.set(89.99978954085029);
myNode86.isVisible = false;

/* définition du node n°87*/
const myNode87_1 = myNode83.clone();
myNode87_1.isVisible = false;
const myNode87_2 = object.addFuseOperation();
myNode87_2.leftArg.set(myNode87_1);
myNode87_2.rightArg.set(myNode84);
myNode87_2.isVisible = false;
const myNode87_3 = object.addFuseOperation();
myNode87_3.leftArg.set(myNode87_2);
myNode87_3.rightArg.set(myNode85);
myNode87_3.isVisible = false;
myNode87 = object.addFuseOperation();
myNode87.leftArg.set(myNode87_3);
myNode87.rightArg.set(myNode86);
myNode87.isVisible = false;
myNode87.isVisible = false;

/* définition du node n°88*/
const myNode88 = object.addCutOperation();
myNode88.leftArg.set(myNode82);
myNode88.rightArg.set(myNode87);
myNode88.isVisible = false;

/* définition du node n°89*/
const myNode89 = object.addCylinder();
myNode89.point1.set(0.728,-1.971,-4.22295);
myNode89.point2.set(0.728,-1.971,-4.07105);
myNode89.radius.set(0.263);
myNode89.innerRotation.center.set(0,0,0);
myNode89.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode89.innerRotation.angle.set(89.99978954085029);
myNode89.isVisible = false;

/* définition du node n°90*/
const myNode90 = object.addCylinder();
myNode90.point1.set(0.724,0.302,-4.22295);
myNode90.point2.set(0.724,0.302,18.09995);
myNode90.radius.set(0.265);
myNode90.innerRotation.center.set(0,0,0);
myNode90.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode90.innerRotation.angle.set(89.99978954085029);
myNode90.isVisible = false;

/* définition du node n°91*/
const myNode91 = object.addCylinder();
myNode91.point1.set(0.727,1.438,-18.0999);
myNode91.point2.set(0.727,1.438,-4.072000000000001);
myNode91.radius.set(0.262);
myNode91.innerRotation.center.set(0,0,0);
myNode91.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode91.innerRotation.angle.set(89.99978954085029);
myNode91.isVisible = false;

/* définition du node n°92*/
const myNode92 = object.addCylinder();
myNode92.point1.set(-0.028,0.91,-4.22295);
myNode92.point2.set(-0.028,0.91,-2.5180499999999997);
myNode92.radius.set(0.264);
myNode92.innerRotation.center.set(0,0,0);
myNode92.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode92.innerRotation.angle.set(89.99978954085029);
myNode92.isVisible = false;

/* définition du node n°93*/
const myNode93 = object.addSphere();
myNode93.center.set(0,0,0);
myNode93.radius.set(54.29990791889062);
myNode93.isVisible = false;

/* définition du node n°94*/
const myNode94 = object.addCommonOperation();
myNode94.leftArg.set(myNode93);
myNode94.rightArg.set(myNode32);
myNode94.isVisible = false;

/* définition du node n°95*/
const myNode95_1 = myNode89.clone();
myNode95_1.isVisible = false;
const myNode95_2 = object.addFuseOperation();
myNode95_2.leftArg.set(myNode95_1);
myNode95_2.rightArg.set(myNode90);
myNode95_2.isVisible = false;
const myNode95_3 = object.addFuseOperation();
myNode95_3.leftArg.set(myNode95_2);
myNode95_3.rightArg.set(myNode91);
myNode95_3.isVisible = false;
const myNode95_4 = object.addFuseOperation();
myNode95_4.leftArg.set(myNode95_3);
myNode95_4.rightArg.set(myNode92);
myNode95_4.isVisible = false;
const myNode95_5 = object.addFuseOperation();
myNode95_5.leftArg.set(myNode95_4);
myNode95_5.rightArg.set(myNode70);
myNode95_5.isVisible = false;
myNode95 = object.addFuseOperation();
myNode95.leftArg.set(myNode95_5);
myNode95.rightArg.set(myNode94);
myNode95.isVisible = false;
myNode95.isVisible = false;

/* définition du node n°96*/
const myNode96 = object.addCutOperation();
myNode96.leftArg.set(myNode88);
myNode96.rightArg.set(myNode95);
myNode96.isVisible = false;

/* définition du node n°97*/
const myNode97 = object.addBox();
myNode97.point1.set(-4.0719,-3.1089,-1.4829);
myNode97.point2.set(4.0719,4.9999,-1.3311000000000002);
myNode97.innerRotation.center.set(0,0,0);
myNode97.innerRotation.axis.set(0.0,0.0,0.0);
myNode97.innerRotation.angle.set(0.0);
myNode97.innerTranslation.vector.set(0.0,0.9455,-1.407);
myNode97.isVisible = false;

/* définition du node n°98*/
const myNode98 = object.addBox();
myNode98.point1.set(-2.5189,-4.9999,-2.2479);
myNode98.point2.set(1.0419,-4.8481000000000005,-1.3321);
myNode98.innerRotation.center.set(0,0,0);
myNode98.innerRotation.axis.set(0.0,0.0,0.0);
myNode98.innerRotation.angle.set(0.0);
myNode98.innerTranslation.vector.set(-0.7384999999999999,-4.924,-1.79);
myNode98.isVisible = false;

/* définition du node n°99*/
const myNode99 = object.addCylinder();
myNode99.point1.set(-2.362,-2.646,-2.3619);
myNode99.point2.set(-2.362,-2.646,-2.0061);
myNode99.radius.set(0.393);
myNode99.innerRotation.center.set(0,0,0);
myNode99.innerRotation.axis.set(0.0,0.0,0.0);
myNode99.innerRotation.angle.set(0.0);
myNode99.isVisible = false;

/* définition du node n°100*/
const myNode100 = object.addFuseOperation();
myNode100.leftArg.set(myNode98);
myNode100.rightArg.set(myNode99);
myNode100.isVisible = false;

/* définition du node n°101*/
const myNode101 = object.addCylinder();
myNode101.point1.set(1.858,-0.662,-4.99995);
myNode101.point2.set(1.858,-0.662,3.18295);
myNode101.radius.set(0.116);
myNode101.innerRotation.center.set(0,0,0);
myNode101.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode101.innerRotation.angle.set(119.9998447624254);
myNode101.isVisible = false;

/* définition du node n°102*/
const myNode102 = object.addBox();
myNode102.point1.set(-4.07195,-4.84795,-2.24795);
myNode102.point2.set(1.04195,18.09995,-2.12005);
myNode102.innerRotation.center.set(0,0,0);
myNode102.innerRotation.axis.set(0.0,0.0,0.0);
myNode102.innerRotation.angle.set(0.0);
myNode102.innerTranslation.vector.set(-1.5150000000000001,6.626,-2.1839999999999997);
myNode102.isVisible = false;

/* définition du node n°103*/
const myNode103 = object.addFuseOperation();
myNode103.leftArg.set(myNode101);
myNode103.rightArg.set(myNode102);
myNode103.isVisible = false;

/* définition du node n°104*/
const myNode104 = object.addCutOperation();
myNode104.leftArg.set(myNode100);
myNode104.rightArg.set(myNode103);
myNode104.isVisible = false;

/* définition du node n°105*/
const myNode105 = object.addBox();
myNode105.point1.set(-4.2229,-4.9999,0.0331);
myNode105.point2.set(-4.0711,3.1829,0.5999);
myNode105.innerRotation.center.set(0,0,0);
myNode105.innerRotation.axis.set(0.0,0.0,0.0);
myNode105.innerRotation.angle.set(0.0);
myNode105.innerTranslation.vector.set(-4.147,-0.9085000000000001,0.3165);
myNode105.isVisible = false;

/* définition du node n°106*/
const myNode106 = object.addCylinder();
myNode106.point1.set(-0.033,-0.227,-18.0999);
myNode106.point2.set(-0.033,-0.227,-4.072000000000001);
myNode106.radius.set(0.263);
myNode106.innerRotation.center.set(0,0,0);
myNode106.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode106.innerRotation.angle.set(89.99978954085029);
myNode106.isVisible = false;

/* définition du node n°107*/
const myNode107 = object.addCutOperation();
myNode107.leftArg.set(myNode105);
myNode107.rightArg.set(myNode106);
myNode107.isVisible = false;

/* définition du node n°108*/
const myNode108 = object.addCylinder();
myNode108.point1.set(-0.033,2.044,-18.0999);
myNode108.point2.set(-0.033,2.044,-2.519000000000002);
myNode108.radius.set(0.264);
myNode108.innerRotation.center.set(0,0,0);
myNode108.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode108.innerRotation.angle.set(89.99978954085029);
myNode108.isVisible = false;

/* définition du node n°109*/
const myNode109 = object.addCylinder();
myNode109.point1.set(-0.039,3.183,-18.0999);
myNode109.point2.set(-0.039,3.183,1.041999999999998);
myNode109.radius.set(0.262);
myNode109.innerRotation.center.set(0,0,0);
myNode109.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode109.innerRotation.angle.set(89.99978954085029);
myNode109.isVisible = false;

/* définition du node n°110*/
const myNode110 = object.addFuseOperation();
myNode110.leftArg.set(myNode108);
myNode110.rightArg.set(myNode109);
myNode110.isVisible = false;

/* définition du node n°111*/
const myNode111 = object.addCutOperation();
myNode111.leftArg.set(myNode107);
myNode111.rightArg.set(myNode110);
myNode111.isVisible = false;

/* définition du node n°112*/
const myNode112 = object.addCylinder();
myNode112.point1.set(-0.035,-1.363,-18.0999);
myNode112.point2.set(-0.035,-1.363,18.099999999999998);
myNode112.radius.set(0.266);
myNode112.innerRotation.center.set(0,0,0);
myNode112.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode112.innerRotation.angle.set(89.99978954085029);
myNode112.isVisible = false;

/* définition du node n°113*/
const myNode113 = object.addCylinder();
myNode113.point1.set(-0.028,0.91,-18.0999);
myNode113.point2.set(-0.028,0.91,-4.072000000000001);
myNode113.radius.set(0.264);
myNode113.innerRotation.center.set(0,0,0);
myNode113.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode113.innerRotation.angle.set(89.99978954085029);
myNode113.isVisible = false;

/* définition du node n°114*/
const myNode114_1 = myNode112.clone();
myNode114_1.isVisible = false;
const myNode114_2 = object.addFuseOperation();
myNode114_2.leftArg.set(myNode114_1);
myNode114_2.rightArg.set(myNode80);
myNode114_2.isVisible = false;
myNode114 = object.addFuseOperation();
myNode114.leftArg.set(myNode114_2);
myNode114.rightArg.set(myNode113);
myNode114.isVisible = false;
myNode114.isVisible = false;

/* définition du node n°115*/
const myNode115 = object.addCutOperation();
myNode115.leftArg.set(myNode111);
myNode115.rightArg.set(myNode114);
myNode115.isVisible = false;

/* définition du node n°116*/
const myNode116 = object.addCylinder();
myNode116.point1.set(-2.359,3.16,-2.3619);
myNode116.point2.set(-2.359,3.16,-2.0061);
myNode116.radius.set(0.393);
myNode116.innerRotation.center.set(0,0,0);
myNode116.innerRotation.axis.set(0.0,0.0,0.0);
myNode116.innerRotation.angle.set(0.0);
myNode116.isVisible = false;

/* définition du node n°117*/
const myNode117 = object.addBox();
myNode117.point1.set(-18.0999,-18.0999,-2.24795);
myNode117.point2.set(4.071999999999999,18.099999999999998,-2.12005);
myNode117.innerRotation.center.set(0,0,0);
myNode117.innerRotation.axis.set(0.0,0.0,0.0);
myNode117.innerRotation.angle.set(0.0);
myNode117.innerTranslation.vector.set(-7.013950000000001,4.9999999998107114e-05,-2.1839999999999997);
myNode117.isVisible = false;

/* définition du node n°118*/
const myNode118 = object.addCutOperation();
myNode118.leftArg.set(myNode116);
myNode118.rightArg.set(myNode117);
myNode118.isVisible = false;

/* définition du node n°119*/
const myNode119 = object.addCylinder();
myNode119.point1.set(2.306,-2.642,-2.2479);
myNode119.point2.set(2.306,-2.642,-1.4830999999999999);
myNode119.radius.set(0.247);
myNode119.innerRotation.center.set(0,0,0);
myNode119.innerRotation.axis.set(0.0,0.0,0.0);
myNode119.innerRotation.angle.set(0.0);
myNode119.isVisible = false;

/* définition du node n°120*/
const myNode120 = object.addBox();
myNode120.point1.set(-4.2229,-4.9999,-1.4829);
myNode120.point2.set(1.0419,3.1829,-1.3311000000000002);
myNode120.innerRotation.center.set(0,0,0);
myNode120.innerRotation.axis.set(0.0,0.0,0.0);
myNode120.innerRotation.angle.set(0.0);
myNode120.innerTranslation.vector.set(-1.5905,-0.9085000000000001,-1.407);
myNode120.isVisible = false;

/* définition du node n°121*/
const myNode121 = object.addBox();
myNode121.point1.set(1.0421,-4.9999,-1.4829);
myNode121.point2.set(4.2239,-3.1091,-1.3311000000000002);
myNode121.innerRotation.center.set(0,0,0);
myNode121.innerRotation.axis.set(0.0,0.0,0.0);
myNode121.innerRotation.angle.set(0.0);
myNode121.innerTranslation.vector.set(2.633,-4.0545,-1.407);
myNode121.isVisible = false;

/* définition du node n°122*/
const myNode122 = object.addBox();
myNode122.point1.set(4.0721,-4.9999,1.1691);
myNode122.point2.set(4.2238999999999995,-3.1091,2.2109);
myNode122.innerRotation.center.set(0,0,0);
myNode122.innerRotation.axis.set(0.0,0.0,0.0);
myNode122.innerRotation.angle.set(0.0);
myNode122.innerTranslation.vector.set(4.148,-4.0545,1.69);
myNode122.isVisible = false;

/* définition du node n°123*/
const myNode123 = object.addFuseOperation();
myNode123.leftArg.set(myNode121);
myNode123.rightArg.set(myNode122);
myNode123.isVisible = false;

/* définition du node n°124*/
const myNode124 = object.addCylinder();
myNode124.point1.set(-1.737,-3.941,1.04205);
myNode124.point2.set(-1.737,-3.941,4.22395);
myNode124.radius.set(0.263);
myNode124.innerRotation.center.set(0,0,0);
myNode124.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode124.innerRotation.angle.set(89.99978954085029);
myNode124.isVisible = false;

/* définition du node n°125*/
const myNode125 = object.addCutOperation();
myNode125.leftArg.set(myNode123);
myNode125.rightArg.set(myNode124);
myNode125.isVisible = false;

/* définition du node n°126*/
const myNode126 = object.addBox();
myNode126.point1.set(-18.0999,-3.1089,-2.3619);
myNode126.point2.set(18.0999,18.099899999999998,-1.4830999999999999);
myNode126.innerRotation.center.set(0,0,0);
myNode126.innerRotation.axis.set(0.0,0.0,0.0);
myNode126.innerRotation.angle.set(0.0);
myNode126.innerTranslation.vector.set(0.0,7.4955,-1.9224999999999999);
myNode126.isVisible = false;

/* définition du node n°127*/
const myNode127 = object.addCylinder();
myNode127.point1.set(2.308,3.161,-2.1189);
myNode127.point2.set(2.308,3.161,-2.0051);
myNode127.radius.set(0.397);
myNode127.innerRotation.center.set(0,0,0);
myNode127.innerRotation.axis.set(0.0,0.0,0.0);
myNode127.innerRotation.angle.set(0.0);
myNode127.isVisible = false;

/* définition du node n°128*/
const myNode128 = object.addCylinder();
myNode128.point1.set(2.307,3.157,-2.2479);
myNode128.point2.set(2.307,3.157,18.0989);
myNode128.radius.set(0.247);
myNode128.innerRotation.center.set(0,0,0);
myNode128.innerRotation.axis.set(0.0,0.0,0.0);
myNode128.innerRotation.angle.set(0.0);
myNode128.isVisible = false;

/* définition du node n°129*/
const myNode129 = object.addCylinder();
myNode129.point1.set(2.308,3.161,-2.3619);
myNode129.point2.set(2.308,3.161,-2.2481);
myNode129.radius.set(0.397);
myNode129.innerRotation.center.set(0,0,0);
myNode129.innerRotation.axis.set(0.0,0.0,0.0);
myNode129.innerRotation.angle.set(0.0);
myNode129.isVisible = false;

/* définition du node n°130*/
const myNode130_1 = myNode127.clone();
myNode130_1.isVisible = false;
const myNode130_2 = object.addFuseOperation();
myNode130_2.leftArg.set(myNode130_1);
myNode130_2.rightArg.set(myNode128);
myNode130_2.isVisible = false;
myNode130 = object.addFuseOperation();
myNode130.leftArg.set(myNode130_2);
myNode130.rightArg.set(myNode129);
myNode130.isVisible = false;
myNode130.isVisible = false;

/* définition du node n°131*/
const myNode131 = object.addCommonOperation();
myNode131.leftArg.set(myNode126);
myNode131.rightArg.set(myNode130);
myNode131.isVisible = false;

/* définition du node n°132*/
const myNode132 = object.addBox();
myNode132.point1.set(4.0721,-3.1089,1.1691);
myNode132.point2.set(4.2238999999999995,4.9999,2.3619000000000003);
myNode132.innerRotation.center.set(0,0,0);
myNode132.innerRotation.axis.set(0.0,0.0,0.0);
myNode132.innerRotation.angle.set(0.0);
myNode132.innerTranslation.vector.set(4.148,0.9455,1.7655);
myNode132.isVisible = false;

/* définition du node n°133*/
const myNode133 = object.addCylinder();
myNode133.point1.set(-1.74,-0.526,1.04205);
myNode133.point2.set(-1.74,-0.526,18.09995);
myNode133.radius.set(0.265);
myNode133.innerRotation.center.set(0,0,0);
myNode133.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode133.innerRotation.angle.set(89.99978954085029);
myNode133.isVisible = false;

/* définition du node n°134*/
const myNode134 = object.addCylinder();
myNode134.point1.set(-1.736,1.743,1.04205);
myNode134.point2.set(-1.736,1.743,18.09995);
myNode134.radius.set(0.263);
myNode134.innerRotation.center.set(0,0,0);
myNode134.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode134.innerRotation.angle.set(89.99978954085029);
myNode134.isVisible = false;

/* définition du node n°135*/
const myNode135_1 = myNode133.clone();
myNode135_1.isVisible = false;
const myNode135_2 = object.addFuseOperation();
myNode135_2.leftArg.set(myNode135_1);
myNode135_2.rightArg.set(myNode134);
myNode135_2.isVisible = false;
myNode135 = object.addFuseOperation();
myNode135.leftArg.set(myNode135_2);
myNode135.rightArg.set(myNode8);
myNode135.isVisible = false;
myNode135.isVisible = false;

/* définition du node n°136*/
const myNode136 = object.addCutOperation();
myNode136.leftArg.set(myNode132);
myNode136.rightArg.set(myNode135);
myNode136.isVisible = false;

/* définition du node n°137*/
const myNode137 = object.addCylinder();
myNode137.point1.set(-1.736,2.879,-18.0999);
myNode137.point2.set(-1.736,2.879,18.099999999999998);
myNode137.radius.set(0.263);
myNode137.innerRotation.center.set(0,0,0);
myNode137.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode137.innerRotation.angle.set(89.99978954085029);
myNode137.isVisible = false;

/* définition du node n°138*/
const myNode138 = object.addCylinder();
myNode138.point1.set(-1.735,4.013,-18.0999);
myNode138.point2.set(-1.735,4.013,18.099999999999998);
myNode138.radius.set(0.261);
myNode138.innerRotation.center.set(0,0,0);
myNode138.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode138.innerRotation.angle.set(89.99978954085029);
myNode138.isVisible = false;

/* définition du node n°139*/
const myNode139 = object.addCylinder();
myNode139.point1.set(-1.736,-2.804,4.07205);
myNode139.point2.set(-1.736,-2.804,18.09995);
myNode139.radius.set(0.263);
myNode139.innerRotation.center.set(0,0,0);
myNode139.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode139.innerRotation.angle.set(89.99978954085029);
myNode139.isVisible = false;

/* définition du node n°140*/
const myNode140_1 = myNode137.clone();
myNode140_1.isVisible = false;
const myNode140_2 = object.addFuseOperation();
myNode140_2.leftArg.set(myNode140_1);
myNode140_2.rightArg.set(myNode11);
myNode140_2.isVisible = false;
const myNode140_3 = object.addFuseOperation();
myNode140_3.leftArg.set(myNode140_2);
myNode140_3.rightArg.set(myNode138);
myNode140_3.isVisible = false;
myNode140 = object.addFuseOperation();
myNode140.leftArg.set(myNode140_3);
myNode140.rightArg.set(myNode139);
myNode140.isVisible = false;
myNode140.isVisible = false;

/* définition du node n°141*/
const myNode141 = object.addCutOperation();
myNode141.leftArg.set(myNode136);
myNode141.rightArg.set(myNode140);
myNode141.isVisible = false;

/* définition du node n°142*/
const myNode142 = object.addBox();
myNode142.point1.set(-4.2229,-18.0999,-1.3309);
myNode142.point2.set(-4.0711,18.0999,-9.999999999998899e-05);
myNode142.innerRotation.center.set(0,0,0);
myNode142.innerRotation.axis.set(0.0,0.0,0.0);
myNode142.innerRotation.angle.set(0.0);
myNode142.innerTranslation.vector.set(-4.147,0.0,-0.6655);
myNode142.isVisible = false;

/* définition du node n°143*/
const myNode143 = object.addCylinder();
myNode143.point1.set(0.727,1.438,-18.0999);
myNode143.point2.set(0.727,1.438,1.041999999999998);
myNode143.radius.set(0.262);
myNode143.innerRotation.center.set(0,0,0);
myNode143.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode143.innerRotation.angle.set(89.99978954085029);
myNode143.isVisible = false;

/* définition du node n°144*/
const myNode144 = object.addCutOperation();
myNode144.leftArg.set(myNode142);
myNode144.rightArg.set(myNode143);
myNode144.isVisible = false;

/* définition du node n°145*/
const myNode145 = object.addCylinder();
myNode145.point1.set(0.728,-1.971,-18.0999);
myNode145.point2.set(0.728,-1.971,-4.072000000000001);
myNode145.radius.set(0.263);
myNode145.innerRotation.center.set(0,0,0);
myNode145.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode145.innerRotation.angle.set(89.99978954085029);
myNode145.isVisible = false;

/* définition du node n°146*/
const myNode146 = object.addCylinder();
myNode146.point1.set(0.724,-4.242,-18.0999);
myNode146.point2.set(0.724,-4.242,18.099999999999998);
myNode146.radius.set(0.263);
myNode146.innerRotation.center.set(0,0,0);
myNode146.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode146.innerRotation.angle.set(89.99978954125373);
myNode146.isVisible = false;

/* définition du node n°147*/
const myNode147 = object.addFuseOperation();
myNode147.leftArg.set(myNode145);
myNode147.rightArg.set(myNode146);
myNode147.isVisible = false;

/* définition du node n°148*/
const myNode148 = object.addCutOperation();
myNode148.leftArg.set(myNode144);
myNode148.rightArg.set(myNode147);
myNode148.isVisible = false;

/* définition du node n°149*/
const myNode149 = object.addBox();
myNode149.point1.set(-4.2229,-4.9999,-1.4829);
myNode149.point2.set(-4.0711,3.1829,0.03289999999999993);
myNode149.innerRotation.center.set(0,0,0);
myNode149.innerRotation.axis.set(0.0,0.0,0.0);
myNode149.innerRotation.angle.set(0.0);
myNode149.innerTranslation.vector.set(-4.147,-0.9085000000000001,-0.7250000000000001);
myNode149.isVisible = false;

/* définition du node n°150*/
const myNode150 = object.addCutOperation();
myNode150.leftArg.set(myNode149);
myNode150.rightArg.set(myNode112);
myNode150.isVisible = false;

/* définition du node n°151*/
const myNode151 = object.addCylinder();
myNode151.point1.set(-0.033,2.044,-4.22295);
myNode151.point2.set(-0.033,2.044,18.09995);
myNode151.radius.set(0.264);
myNode151.innerRotation.center.set(0,0,0);
myNode151.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode151.innerRotation.angle.set(89.99978954085029);
myNode151.isVisible = false;

/* définition du node n°152*/
const myNode152 = object.addFuseOperation();
myNode152.leftArg.set(myNode151);
myNode152.rightArg.set(myNode83);
myNode152.isVisible = false;

/* définition du node n°153*/
const myNode153 = object.addCutOperation();
myNode153.leftArg.set(myNode150);
myNode153.rightArg.set(myNode152);
myNode153.isVisible = false;

/* définition du node n°154*/
const myNode154 = object.addBox();
myNode154.point1.set(-4.2229,-4.9999,-2.3619);
myNode154.point2.set(-4.0711,3.1829,-9.999999999976694e-05);
myNode154.innerRotation.center.set(0,0,0);
myNode154.innerRotation.axis.set(0.0,0.0,0.0);
myNode154.innerRotation.angle.set(0.0);
myNode154.innerTranslation.vector.set(-4.147,-0.9085000000000001,-1.1809999999999998);
myNode154.isVisible = false;

/* définition du node n°155*/
const myNode155 = object.addCylinder();
myNode155.point1.set(0.724,0.302,-18.0999);
myNode155.point2.set(0.724,0.302,-4.072000000000001);
myNode155.radius.set(0.265);
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
const myNode157 = object.addFuseOperation();
myNode157.leftArg.set(myNode78);
myNode157.rightArg.set(myNode113);
myNode157.isVisible = false;

/* définition du node n°158*/
const myNode158 = object.addCutOperation();
myNode158.leftArg.set(myNode156);
myNode158.rightArg.set(myNode157);
myNode158.isVisible = false;

/* définition du node n°159*/
const myNode159 = object.addCylinder();
myNode159.point1.set(0.727,-3.109,-18.0999);
myNode159.point2.set(0.727,-3.109,-4.072000000000001);
myNode159.radius.set(0.263);
myNode159.innerRotation.center.set(0,0,0);
myNode159.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode159.innerRotation.angle.set(90.0002104591497);
myNode159.isVisible = false;

/* définition du node n°160*/
const myNode160 = object.addCylinder();
myNode160.point1.set(-0.039,3.183,-18.0999);
myNode160.point2.set(-0.039,3.183,-4.072000000000001);
myNode160.radius.set(0.262);
myNode160.innerRotation.center.set(0,0,0);
myNode160.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode160.innerRotation.angle.set(89.99978954085029);
myNode160.isVisible = false;

/* définition du node n°161*/
const myNode161 = object.addCylinder();
myNode161.point1.set(0.725,2.578,-18.0999);
myNode161.point2.set(0.725,2.578,-4.072000000000001);
myNode161.radius.set(0.263);
myNode161.innerRotation.center.set(0,0,0);
myNode161.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode161.innerRotation.angle.set(89.99978954085029);
myNode161.isVisible = false;

/* définition du node n°162*/
const myNode162_1 = myNode159.clone();
myNode162_1.isVisible = false;
const myNode162_2 = object.addFuseOperation();
myNode162_2.leftArg.set(myNode162_1);
myNode162_2.rightArg.set(myNode80);
myNode162_2.isVisible = false;
const myNode162_3 = object.addFuseOperation();
myNode162_3.leftArg.set(myNode162_2);
myNode162_3.rightArg.set(myNode160);
myNode162_3.isVisible = false;
myNode162 = object.addFuseOperation();
myNode162.leftArg.set(myNode162_3);
myNode162.rightArg.set(myNode161);
myNode162.isVisible = false;
myNode162.isVisible = false;

/* définition du node n°163*/
const myNode163 = object.addCutOperation();
myNode163.leftArg.set(myNode158);
myNode163.rightArg.set(myNode162);
myNode163.isVisible = false;

/* définition du node n°164*/
const myNode164 = object.addCommonOperation();
myNode164.leftArg.set(myNode148);
myNode164.rightArg.set(myNode153);
myNode164.isVisible = false;

/* définition du node n°165*/
const myNode165 = object.addCylinder();
myNode165.point1.set(-2.36,3.161,-2.3619);
myNode165.point2.set(-2.36,3.161,-1.4830999999999999);
myNode165.radius.set(0.246);
myNode165.innerRotation.center.set(0,0,0);
myNode165.innerRotation.axis.set(0.0,0.0,0.0);
myNode165.innerRotation.angle.set(0.0);
myNode165.isVisible = false;

/* définition du node n°166*/
const myNode166 = object.addBox();
myNode166.point1.set(4.0721,-4.9999,2.2101);
myNode166.point2.set(4.2238999999999995,-3.1091,2.3619000000000003);
myNode166.innerRotation.center.set(0,0,0);
myNode166.innerRotation.axis.set(0.0,0.0,0.0);
myNode166.innerRotation.angle.set(0.0);
myNode166.innerTranslation.vector.set(4.148,-4.0545,2.286);
myNode166.isVisible = false;

/* définition du node n°167*/
const myNode167 = object.addBox();
myNode167.point1.set(4.0721,-4.9999,-1.4829);
myNode167.point2.set(4.2238999999999995,-3.9411000000000005,0.5999000000000001);
myNode167.innerRotation.center.set(0,0,0);
myNode167.innerRotation.axis.set(0.0,0.0,0.0);
myNode167.innerRotation.angle.set(0.0);
myNode167.innerTranslation.vector.set(4.148,-4.4705,-0.4415);
myNode167.isVisible = false;

/* définition du node n°168*/
const myNode168 = object.addCylinder();
myNode168.point1.set(2.305,-2.643,-2.3619);
myNode168.point2.set(2.305,-2.643,-2.0061);
myNode168.radius.set(0.394);
myNode168.innerRotation.center.set(0,0,0);
myNode168.innerRotation.axis.set(0.0,0.0,0.0);
myNode168.innerRotation.angle.set(0.0);
myNode168.isVisible = false;

/* définition du node n°169*/
const myNode169 = object.addFuseOperation();
myNode169.leftArg.set(myNode167);
myNode169.rightArg.set(myNode168);
myNode169.isVisible = false;

/* définition du node n°170*/
const myNode170 = object.addCylinder();
myNode170.point1.set(2.305,-2.643,-2.24795);
myNode170.point2.set(2.305,-2.643,-2.12005);
myNode170.radius.set(0.394);
myNode170.innerRotation.center.set(0,0,0);
myNode170.innerRotation.axis.set(0.0,0.0,0.0);
myNode170.innerRotation.angle.set(0.0);
myNode170.isVisible = false;

/* définition du node n°171*/
const myNode171 = object.addCylinder();
myNode171.point1.set(0.724,-4.242,1.04205);
myNode171.point2.set(0.724,-4.242,18.09995);
myNode171.radius.set(0.263);
myNode171.innerRotation.center.set(0,0,0);
myNode171.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode171.innerRotation.angle.set(89.99978954125373);
myNode171.isVisible = false;

/* définition du node n°172*/
const myNode172 = object.addFuseOperation();
myNode172.leftArg.set(myNode170);
myNode172.rightArg.set(myNode171);
myNode172.isVisible = false;

/* définition du node n°173*/
const myNode173 = object.addCutOperation();
myNode173.leftArg.set(myNode169);
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
myNode174_3.rightArg.set(myNode15);
myNode174_3.isVisible = false;
const myNode174_4 = object.addFuseOperation();
myNode174_4.leftArg.set(myNode174_3);
myNode174_4.rightArg.set(myNode16);
myNode174_4.isVisible = false;
const myNode174_5 = object.addFuseOperation();
myNode174_5.leftArg.set(myNode174_4);
myNode174_5.rightArg.set(myNode43);
myNode174_5.isVisible = false;
const myNode174_6 = object.addFuseOperation();
myNode174_6.leftArg.set(myNode174_5);
myNode174_6.rightArg.set(myNode44);
myNode174_6.isVisible = false;
const myNode174_7 = object.addFuseOperation();
myNode174_7.leftArg.set(myNode174_6);
myNode174_7.rightArg.set(myNode54);
myNode174_7.isVisible = false;
const myNode174_8 = object.addFuseOperation();
myNode174_8.leftArg.set(myNode174_7);
myNode174_8.rightArg.set(myNode56);
myNode174_8.isVisible = false;
const myNode174_9 = object.addFuseOperation();
myNode174_9.leftArg.set(myNode174_8);
myNode174_9.rightArg.set(myNode75);
myNode174_9.isVisible = false;
const myNode174_10 = object.addFuseOperation();
myNode174_10.leftArg.set(myNode174_9);
myNode174_10.rightArg.set(myNode76);
myNode174_10.isVisible = false;
const myNode174_11 = object.addFuseOperation();
myNode174_11.leftArg.set(myNode174_10);
myNode174_11.rightArg.set(myNode96);
myNode174_11.isVisible = false;
const myNode174_12 = object.addFuseOperation();
myNode174_12.leftArg.set(myNode174_11);
myNode174_12.rightArg.set(myNode97);
myNode174_12.isVisible = false;
const myNode174_13 = object.addFuseOperation();
myNode174_13.leftArg.set(myNode174_12);
myNode174_13.rightArg.set(myNode104);
myNode174_13.isVisible = false;
const myNode174_14 = object.addFuseOperation();
myNode174_14.leftArg.set(myNode174_13);
myNode174_14.rightArg.set(myNode115);
myNode174_14.isVisible = false;
const myNode174_15 = object.addFuseOperation();
myNode174_15.leftArg.set(myNode174_14);
myNode174_15.rightArg.set(myNode118);
myNode174_15.isVisible = false;
const myNode174_16 = object.addFuseOperation();
myNode174_16.leftArg.set(myNode174_15);
myNode174_16.rightArg.set(myNode119);
myNode174_16.isVisible = false;
const myNode174_17 = object.addFuseOperation();
myNode174_17.leftArg.set(myNode174_16);
myNode174_17.rightArg.set(myNode120);
myNode174_17.isVisible = false;
const myNode174_18 = object.addFuseOperation();
myNode174_18.leftArg.set(myNode174_17);
myNode174_18.rightArg.set(myNode125);
myNode174_18.isVisible = false;
const myNode174_19 = object.addFuseOperation();
myNode174_19.leftArg.set(myNode174_18);
myNode174_19.rightArg.set(myNode131);
myNode174_19.isVisible = false;
const myNode174_20 = object.addFuseOperation();
myNode174_20.leftArg.set(myNode174_19);
myNode174_20.rightArg.set(myNode141);
myNode174_20.isVisible = false;
const myNode174_21 = object.addFuseOperation();
myNode174_21.leftArg.set(myNode174_20);
myNode174_21.rightArg.set(myNode164);
myNode174_21.isVisible = false;
const myNode174_22 = object.addFuseOperation();
myNode174_22.leftArg.set(myNode174_21);
myNode174_22.rightArg.set(myNode165);
myNode174_22.isVisible = false;
const myNode174_23 = object.addFuseOperation();
myNode174_23.leftArg.set(myNode174_22);
myNode174_23.rightArg.set(myNode166);
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