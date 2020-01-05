/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.0679,-5.9999,-2.8339);
myNode0.point2.set(10.1358,11.9998,5.6678);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-4.2229,-18.0999,-1.3309);
myNode1.point2.set(0.1518,36.1998,1.3308);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(0.727,1.438,-18.0999);
myNode2.point2.set(0,0,19.1419);
myNode2.radius.set(0.262);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode2.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°3*/
const myNode3 = object.addCutOperation();
myNode3.leftArg.set(myNode1);
myNode3.rightArg.set(myNode2);

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(0.724,-4.242,-18.0999);
myNode4.point2.set(0,0,36.1999);
myNode4.radius.set(0.263);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode4.innerRotation.angle.set(1.5707926535968346);

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(0.728,-1.971,-18.0999);
myNode5.point2.set(0,0,14.0279);
myNode5.radius.set(0.263);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode5.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°6*/
const myNode6 = object.addFuseOperation();
myNode6.leftArg.set(myNode4);
myNode6.rightArg.set(myNode5);

/* définition du node n°7*/
const myNode7 = object.addCutOperation();
myNode7.leftArg.set(myNode3);
myNode7.rightArg.set(myNode6);

/* définition du node n°8*/
const myNode8 = object.addBox();
myNode8.point1.set(-4.2229,-4.9999,-2.3619);
myNode8.point2.set(0.1518,8.1828,2.3618);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);

/* définition du node n°9*/
const myNode9 = object.addCylinder();
myNode9.point1.set(0.724,0.302,-18.0999);
myNode9.point2.set(0,0,14.0279);
myNode9.radius.set(0.265);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode9.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°10*/
const myNode10 = object.addCutOperation();
myNode10.leftArg.set(myNode8);
myNode10.rightArg.set(myNode9);

/* définition du node n°11*/
const myNode11 = object.addCylinder();
myNode11.point1.set(-0.028,0.91,-18.0999);
myNode11.point2.set(0,0,14.0279);
myNode11.radius.set(0.264);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode11.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(0.726,-0.834,-4.22295);
myNode12.point2.set(0,0,1.7049);
myNode12.radius.set(0.263);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode12.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°13*/
const myNode13 = object.addFuseOperation();
myNode13.leftArg.set(myNode11);
myNode13.rightArg.set(myNode12);

/* définition du node n°14*/
const myNode14 = object.addCutOperation();
myNode14.leftArg.set(myNode10);
myNode14.rightArg.set(myNode13);

/* définition du node n°15*/
const myNode15 = object.addCylinder();
myNode15.point1.set(-0.032,-2.501,-4.22295);
myNode15.point2.set(0,0,22.3229);
myNode15.radius.set(0.262);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode15.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(0.727,-3.109,-18.0999);
myNode16.point2.set(0,0,14.0279);
myNode16.radius.set(0.263);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode16.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°17*/
const myNode17 = object.addCylinder();
myNode17.point1.set(-0.039,3.183,-18.0999);
myNode17.point2.set(0,0,14.0279);
myNode17.radius.set(0.262);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode17.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(0.725,2.578,-18.0999);
myNode18.point2.set(0,0,14.0279);
myNode18.radius.set(0.263);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode18.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°19*/
const myNode19_1 = object.addFuseOperation();
myNode19_1.leftArg.set(myNode15);
myNode19_1.rightArg.set(myNode15);
const myNode19_2 = object.addFuseOperation();
myNode19_2.leftArg.set(myNode19_1);
myNode19_2.rightArg.set(myNode16);
const myNode19_3 = object.addFuseOperation();
myNode19_3.leftArg.set(myNode19_2);
myNode19_3.rightArg.set(myNode17);
myNode19 = object.addFuseOperation();
myNode19.leftArg.set(myNode19_3);
myNode19.rightArg.set(myNode18);

/* définition du node n°20*/
const myNode20 = object.addCutOperation();
myNode20.leftArg.set(myNode14);
myNode20.rightArg.set(myNode19);

/* définition du node n°21*/
const myNode21 = object.addBox();
myNode21.point1.set(-4.2229,-4.9999,-1.4829);
myNode21.point2.set(0.1518,8.1828,1.5158);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);

/* définition du node n°22*/
const myNode22 = object.addCylinder();
myNode22.point1.set(-0.035,-1.363,-18.0999);
myNode22.point2.set(0,0,36.1999);
myNode22.radius.set(0.266);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode22.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°23*/
const myNode23 = object.addCutOperation();
myNode23.leftArg.set(myNode21);
myNode23.rightArg.set(myNode22);

/* définition du node n°24*/
const myNode24 = object.addCylinder();
myNode24.point1.set(-0.033,-0.227,-4.22295);
myNode24.point2.set(0,0,22.3229);
myNode24.radius.set(0.263);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode24.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°25*/
const myNode25 = object.addCylinder();
myNode25.point1.set(-0.033,2.044,-4.22295);
myNode25.point2.set(0,0,22.3229);
myNode25.radius.set(0.264);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode25.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°26*/
const myNode26 = object.addFuseOperation();
myNode26.leftArg.set(myNode24);
myNode26.rightArg.set(myNode25);

/* définition du node n°27*/
const myNode27 = object.addCutOperation();
myNode27.leftArg.set(myNode23);
myNode27.rightArg.set(myNode26);

/* définition du node n°28*/
const myNode28 = object.addCommonOperation();
myNode28.leftArg.set(myNode7);
myNode28.rightArg.set(myNode20);

/* définition du node n°29*/
const myNode29 = object.addBox();
myNode29.point1.set(-4.2229,-4.9999,2.2101);
myNode29.point2.set(8.2948,8.1828,0.1518);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);

/* définition du node n°30*/
const myNode30 = object.addBox();
myNode30.point1.set(1.0421,-4.9999,-1.4829);
myNode30.point2.set(3.1818,1.8908,0.1518);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);

/* définition du node n°31*/
const myNode31 = object.addBox();
myNode31.point1.set(4.0721,-4.9999,1.1691);
myNode31.point2.set(0.1518,1.8908,1.0418);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(0.0,0.0,0.0);
myNode31.innerRotation.angle.set(0.0);

/* définition du node n°32*/
const myNode32 = object.addFuseOperation();
myNode32.leftArg.set(myNode30);
myNode32.rightArg.set(myNode31);

/* définition du node n°33*/
const myNode33 = object.addCylinder();
myNode33.point1.set(-1.737,-3.941,1.04205);
myNode33.point2.set(0,0,3.1819);
myNode33.radius.set(0.263);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode33.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°34*/
const myNode34 = object.addCutOperation();
myNode34.leftArg.set(myNode32);
myNode34.rightArg.set(myNode33);

/* définition du node n°35*/
const myNode35 = object.addCylinder();
myNode35.point1.set(-2.358,-2.644,-2.2479);
myNode35.point2.set(0,0,0.7648);
myNode35.radius.set(0.246);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,0.0);
myNode35.innerRotation.angle.set(0.0);

/* définition du node n°36*/
const myNode36 = object.addBox();
myNode36.point1.set(-2.5189,3.1831,2.2101);
myNode36.point2.set(3.5608,1.8168,0.1518);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(0.0,0.0,0.0);
myNode36.innerRotation.angle.set(0.0);

/* définition du node n°37*/
const myNode37 = object.addBox();
myNode37.point1.set(-18.0999,3.1831,-1.4829);
myNode37.point2.set(15.5808,1.8168,3.8448);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0,0.0,0.0);
myNode37.innerRotation.angle.set(0.0);

/* définition du node n°38*/
const myNode38 = object.addCylinder();
myNode38.point1.set(0.725,3.714,-18.0999);
myNode38.point2.set(0,0,15.5809);
myNode38.radius.set(0.262);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode38.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°39*/
const myNode39 = object.addCylinder();
myNode39.point1.set(-1.735,4.013,-4.22295);
myNode39.point2.set(0,0,0.1519);
myNode39.radius.set(0.261);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode39.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°40*/
const myNode40 = object.addFuseOperation();
myNode40.leftArg.set(myNode38);
myNode40.rightArg.set(myNode39);

/* définition du node n°41*/
const myNode41 = object.addCutOperation();
myNode41.leftArg.set(myNode37);
myNode41.rightArg.set(myNode40);

/* définition du node n°42*/
const myNode42 = object.addCylinder();
myNode42.point1.set(-0.033,-0.227,-18.0999);
myNode42.point2.set(0,0,13.8758);
myNode42.radius.set(0.263);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode42.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°43*/
const myNode43 = object.addBox();
myNode43.point1.set(-4.2229,3.1831,0.0331);
myNode43.point2.set(1.7048,14.9168,18.0668);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(0.0,0.0,0.0);
myNode43.innerRotation.angle.set(0.0);

/* définition du node n°44*/
const myNode44 = object.addCylinder();
myNode44.point1.set(-1.735,4.013,-4.22295);
myNode44.point2.set(0,0,22.3229);
myNode44.radius.set(0.261);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode44.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°45*/
const myNode45 = object.addCutOperation();
myNode45.leftArg.set(myNode43);
myNode45.rightArg.set(myNode44);

/* définition du node n°46*/
const myNode46 = object.addCommonOperation();
myNode46.leftArg.set(myNode42);
myNode46.rightArg.set(myNode45);

/* définition du node n°47*/
const myNode47 = object.addFuseOperation();
myNode47.leftArg.set(myNode41);
myNode47.rightArg.set(myNode46);

/* définition du node n°48*/
const myNode48 = object.addCylinder();
myNode48.point1.set(-0.039,3.183,-4.22295);
myNode48.point2.set(0,0,22.3229);
myNode48.radius.set(0.262);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode48.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°49*/
const myNode49 = object.addCylinder();
myNode49.point1.set(-0.885,3.139,-18.0999);
myNode49.point2.set(0,0,15.5809);
myNode49.radius.set(0.282);
myNode49.innerRotation.center.set(0,0,0);
myNode49.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode49.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°50*/
const myNode50 = object.addBox();
myNode50.point1.set(-18.0999,-3.10895,-18.0999);
myNode50.point2.set(13.8759,8.1089,36.1999);
myNode50.innerRotation.center.set(0,0,0);
myNode50.innerRotation.axis.set(0.0,0.0,0.0);
myNode50.innerRotation.angle.set(0.0);

/* définition du node n°51*/
const myNode51 = object.addCylinder();
myNode51.point1.set(-0.033,-0.227,-4.22295);
myNode51.point2.set(0,0,0.1519);
myNode51.radius.set(0.263);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode51.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°52*/
const myNode52 = object.addBox();
myNode52.point1.set(-4.07195,3.18305,-18.0999);
myNode52.point2.set(1.5529,14.9169,20.3099);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,0.0,0.0);
myNode52.innerRotation.angle.set(0.0);

/* définition du node n°53*/
const myNode53 = object.addCylinder();
myNode53.point1.set(-0.03,4.317,-4.22295);
myNode53.point2.set(0,0,22.3229);
myNode53.radius.set(0.262);
myNode53.innerRotation.center.set(0,0,0);
myNode53.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode53.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°54*/
const myNode54_1 = object.addFuseOperation();
myNode54_1.leftArg.set(myNode48);
myNode54_1.rightArg.set(myNode48);
const myNode54_2 = object.addFuseOperation();
myNode54_2.leftArg.set(myNode54_1);
myNode54_2.rightArg.set(myNode49);
const myNode54_3 = object.addFuseOperation();
myNode54_3.leftArg.set(myNode54_2);
myNode54_3.rightArg.set(myNode50);
const myNode54_4 = object.addFuseOperation();
myNode54_4.leftArg.set(myNode54_3);
myNode54_4.rightArg.set(myNode51);
const myNode54_5 = object.addFuseOperation();
myNode54_5.leftArg.set(myNode54_4);
myNode54_5.rightArg.set(myNode52);
myNode54 = object.addFuseOperation();
myNode54.leftArg.set(myNode54_5);
myNode54.rightArg.set(myNode53);

/* définition du node n°55*/
const myNode55 = object.addCutOperation();
myNode55.leftArg.set(myNode47);
myNode55.rightArg.set(myNode54);

/* définition du node n°56*/
const myNode56 = object.addBox();
myNode56.point1.set(-4.0719,-3.1089,-1.4829);
myNode56.point2.set(8.1438,8.1088,0.1518);
myNode56.innerRotation.center.set(0,0,0);
myNode56.innerRotation.axis.set(0.0,0.0,0.0);
myNode56.innerRotation.angle.set(0.0);

/* définition du node n°57*/
const myNode57 = object.addCylinder();
myNode57.point1.set(2.308,3.161,-2.1189);
myNode57.point2.set(0,0,0.1138);
myNode57.radius.set(0.397);
myNode57.innerRotation.center.set(0,0,0);
myNode57.innerRotation.axis.set(0.0,0.0,0.0);
myNode57.innerRotation.angle.set(0.0);

/* définition du node n°58*/
const myNode58 = object.addCylinder();
myNode58.point1.set(2.308,3.161,-2.3619);
myNode58.point2.set(0,0,0.1138);
myNode58.radius.set(0.397);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(0.0,0.0,0.0);
myNode58.innerRotation.angle.set(0.0);

/* définition du node n°59*/
const myNode59 = object.addCylinder();
myNode59.point1.set(2.307,3.157,-2.2479);
myNode59.point2.set(0,0,20.3468);
myNode59.radius.set(0.247);
myNode59.innerRotation.center.set(0,0,0);
myNode59.innerRotation.axis.set(0.0,0.0,0.0);
myNode59.innerRotation.angle.set(0.0);

/* définition du node n°60*/
const myNode60_1 = object.addFuseOperation();
myNode60_1.leftArg.set(myNode57);
myNode60_1.rightArg.set(myNode57);
const myNode60_2 = object.addFuseOperation();
myNode60_2.leftArg.set(myNode60_1);
myNode60_2.rightArg.set(myNode58);
myNode60 = object.addFuseOperation();
myNode60.leftArg.set(myNode60_2);
myNode60.rightArg.set(myNode59);

/* définition du node n°61*/
const myNode61 = object.addBox();
myNode61.point1.set(-18.0999,-3.1089,-2.3619);
myNode61.point2.set(36.1998,21.2088,0.8788);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(0.0,0.0,0.0);
myNode61.innerRotation.angle.set(0.0);

/* définition du node n°62*/
const myNode62 = object.addCommonOperation();
myNode62.leftArg.set(myNode60);
myNode62.rightArg.set(myNode61);

/* définition du node n°63*/
const myNode63 = object.addBox();
myNode63.point1.set(1.0421,-3.1089,2.2101);
myNode63.point2.set(3.0298,8.1088,0.1518);
myNode63.innerRotation.center.set(0,0,0);
myNode63.innerRotation.axis.set(0.0,0.0,0.0);
myNode63.innerRotation.angle.set(0.0);

/* définition du node n°64*/
const myNode64 = object.addBox();
myNode64.point1.set(4.0721,3.1831,-1.4829);
myNode64.point2.set(0.1518,1.8168,2.6518);
myNode64.innerRotation.center.set(0,0,0);
myNode64.innerRotation.axis.set(0.0,0.0,0.0);
myNode64.innerRotation.angle.set(0.0);

/* définition du node n°65*/
const myNode65 = object.addCylinder();
myNode65.point1.set(-0.885,3.139,-18.0999);
myNode65.point2.set(0,0,36.1999);
myNode65.radius.set(0.282);
myNode65.innerRotation.center.set(0,0,0);
myNode65.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode65.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°66*/
const myNode66 = object.addCutOperation();
myNode66.leftArg.set(myNode64);
myNode66.rightArg.set(myNode65);

/* définition du node n°67*/
const myNode67 = object.addCylinder();
myNode67.point1.set(-0.03,4.317,-18.0999);
myNode67.point2.set(0,0,36.1999);
myNode67.radius.set(0.262);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode67.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°68*/
const myNode68 = object.addCutOperation();
myNode68.leftArg.set(myNode66);
myNode68.rightArg.set(myNode67);

/* définition du node n°69*/
const myNode69 = object.addCylinder();
myNode69.point1.set(0.725,3.714,4.07205);
myNode69.point2.set(0,0,14.0279);
myNode69.radius.set(0.262);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode69.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°70*/
const myNode70 = object.addBox();
myNode70.point1.set(-18.0999,-18.0999,-2.24795);
myNode70.point2.set(22.1719,36.1999,20.3469);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(0.0,0.0,0.0);
myNode70.innerRotation.angle.set(0.0);

/* définition du node n°71*/
const myNode71 = object.addCylinder();
myNode71.point1.set(-0.039,3.183,-18.0999);
myNode71.point2.set(0,0,36.1999);
myNode71.radius.set(0.262);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode71.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°72*/
const myNode72_1 = object.addFuseOperation();
myNode72_1.leftArg.set(myNode69);
myNode72_1.rightArg.set(myNode69);
const myNode72_2 = object.addFuseOperation();
myNode72_2.leftArg.set(myNode72_1);
myNode72_2.rightArg.set(myNode70);
myNode72 = object.addFuseOperation();
myNode72.leftArg.set(myNode72_2);
myNode72.rightArg.set(myNode71);

/* définition du node n°73*/
const myNode73 = object.addCutOperation();
myNode73.leftArg.set(myNode68);
myNode73.rightArg.set(myNode72);

/* définition du node n°74*/
const myNode74 = object.addBox();
myNode74.point1.set(-4.2229,-3.1089,-18.0999);
myNode74.point2.set(0.1518,6.2918,18.1328);
myNode74.innerRotation.center.set(0,0,0);
myNode74.innerRotation.axis.set(0.0,0.0,0.0);
myNode74.innerRotation.angle.set(0.0);

/* définition du node n°75*/
const myNode75 = object.addCutOperation();
myNode75.leftArg.set(myNode74);
myNode75.rightArg.set(myNode12);

/* définition du node n°76*/
const myNode76 = object.addCylinder();
myNode76.point1.set(0.727,-3.109,-18.0999);
myNode76.point2.set(0,0,36.1999);
myNode76.radius.set(0.263);
myNode76.innerRotation.center.set(0,0,0);
myNode76.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode76.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°77*/
const myNode77 = object.addFuseOperation();
myNode77.leftArg.set(myNode15);
myNode77.rightArg.set(myNode76);

/* définition du node n°78*/
const myNode78 = object.addCutOperation();
myNode78.leftArg.set(myNode75);
myNode78.rightArg.set(myNode77);

/* définition du node n°79*/
const myNode79 = object.addBox();
myNode79.point1.set(-4.22295,-3.10895,-18.0999);
myNode79.point2.set(0.1519,21.2089,16.6169);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(0.0,0.0,0.0);
myNode79.innerRotation.angle.set(0.0);

/* définition du node n°80*/
const myNode80 = object.addCylinder();
myNode80.point1.set(-0.035,-1.363,-4.22295);
myNode80.point2.set(0,0,22.3229);
myNode80.radius.set(0.266);
myNode80.innerRotation.center.set(0,0,0);
myNode80.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode80.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°81*/
const myNode81 = object.addCylinder();
myNode81.point1.set(0.725,2.578,-18.0999);
myNode81.point2.set(0,0,15.5809);
myNode81.radius.set(0.263);
myNode81.innerRotation.center.set(0,0,0);
myNode81.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode81.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°82*/
const myNode82_1 = object.addFuseOperation();
myNode82_1.leftArg.set(myNode79);
myNode82_1.rightArg.set(myNode79);
const myNode82_2 = object.addFuseOperation();
myNode82_2.leftArg.set(myNode82_1);
myNode82_2.rightArg.set(myNode24);
const myNode82_3 = object.addFuseOperation();
myNode82_3.leftArg.set(myNode82_2);
myNode82_3.rightArg.set(myNode80);
myNode82 = object.addFuseOperation();
myNode82.leftArg.set(myNode82_3);
myNode82.rightArg.set(myNode81);

/* définition du node n°83*/
const myNode83 = object.addCutOperation();
myNode83.leftArg.set(myNode78);
myNode83.rightArg.set(myNode82);

/* définition du node n°84*/
const myNode84 = object.addCylinder();
myNode84.point1.set(0.724,0.302,-4.22295);
myNode84.point2.set(0,0,22.3229);
myNode84.radius.set(0.265);
myNode84.innerRotation.center.set(0,0,0);
myNode84.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode84.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°85*/
const myNode85 = object.addCylinder();
myNode85.point1.set(-0.028,0.91,-4.22295);
myNode85.point2.set(0,0,1.7049);
myNode85.radius.set(0.264);
myNode85.innerRotation.center.set(0,0,0);
myNode85.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode85.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°86*/
const myNode86 = object.addCylinder();
myNode86.point1.set(0.727,1.438,-18.0999);
myNode86.point2.set(0,0,14.0279);
myNode86.radius.set(0.262);
myNode86.innerRotation.center.set(0,0,0);
myNode86.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode86.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°87*/
const myNode87 = object.addSphere();
myNode87.center.set(0,0,0);
myNode87.radius.set(54.29990791889062);

/* définition du node n°88*/
const myNode88 = object.addCylinder();
myNode88.point1.set(-0.033,2.044,-18.0999);
myNode88.point2.set(0,0,36.1999);
myNode88.radius.set(0.264);
myNode88.innerRotation.center.set(0,0,0);
myNode88.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode88.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°89*/
const myNode89 = object.addCommonOperation();
myNode89.leftArg.set(myNode87);
myNode89.rightArg.set(myNode88);

/* définition du node n°90*/
const myNode90 = object.addCylinder();
myNode90.point1.set(0.728,-1.971,-4.22295);
myNode90.point2.set(0,0,0.1519);
myNode90.radius.set(0.263);
myNode90.innerRotation.center.set(0,0,0);
myNode90.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode90.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°91*/
const myNode91_1 = object.addFuseOperation();
myNode91_1.leftArg.set(myNode48);
myNode91_1.rightArg.set(myNode48);
const myNode91_2 = object.addFuseOperation();
myNode91_2.leftArg.set(myNode91_1);
myNode91_2.rightArg.set(myNode84);
const myNode91_3 = object.addFuseOperation();
myNode91_3.leftArg.set(myNode91_2);
myNode91_3.rightArg.set(myNode85);
const myNode91_4 = object.addFuseOperation();
myNode91_4.leftArg.set(myNode91_3);
myNode91_4.rightArg.set(myNode86);
const myNode91_5 = object.addFuseOperation();
myNode91_5.leftArg.set(myNode91_4);
myNode91_5.rightArg.set(myNode89);
myNode91 = object.addFuseOperation();
myNode91.leftArg.set(myNode91_5);
myNode91.rightArg.set(myNode90);

/* définition du node n°92*/
const myNode92 = object.addCutOperation();
myNode92.leftArg.set(myNode83);
myNode92.rightArg.set(myNode91);

/* définition du node n°93*/
const myNode93 = object.addCylinder();
myNode93.point1.set(-2.359,3.16,-2.3619);
myNode93.point2.set(0,0,0.3558);
myNode93.radius.set(0.393);
myNode93.innerRotation.center.set(0,0,0);
myNode93.innerRotation.axis.set(0.0,0.0,0.0);
myNode93.innerRotation.angle.set(0.0);

/* définition du node n°94*/
const myNode94 = object.addBox();
myNode94.point1.set(-18.0999,-18.0999,-2.24795);
myNode94.point2.set(22.1719,36.1999,0.1279);
myNode94.innerRotation.center.set(0,0,0);
myNode94.innerRotation.axis.set(0.0,0.0,0.0);
myNode94.innerRotation.angle.set(0.0);

/* définition du node n°95*/
const myNode95 = object.addCutOperation();
myNode95.leftArg.set(myNode93);
myNode95.rightArg.set(myNode94);

/* définition du node n°96*/
const myNode96 = object.addSphere();
myNode96.center.set(0,0,0);
myNode96.radius.set(54.29981583762508);

/* définition du node n°97*/
const myNode97 = object.addCylinder();
myNode97.point1.set(-0.033,-0.227,-18.0999);
myNode97.point2.set(0,0,36.1999);
myNode97.radius.set(0.263);
myNode97.innerRotation.center.set(0,0,0);
myNode97.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode97.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°98*/
const myNode98 = object.addCutOperation();
myNode98.leftArg.set(myNode96);
myNode98.rightArg.set(myNode97);

/* définition du node n°99*/
const myNode99 = object.addCylinder();
myNode99.point1.set(0.725,2.578,-18.0999);
myNode99.point2.set(0,0,36.1999);
myNode99.radius.set(0.263);
myNode99.innerRotation.center.set(0,0,0);
myNode99.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode99.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°100*/
const myNode100 = object.addFuseOperation();
myNode100.leftArg.set(myNode76);
myNode100.rightArg.set(myNode99);

/* définition du node n°101*/
const myNode101 = object.addCutOperation();
myNode101.leftArg.set(myNode98);
myNode101.rightArg.set(myNode100);

/* définition du node n°102*/
const myNode102 = object.addCylinder();
myNode102.point1.set(-0.032,-2.501,4.07205);
myNode102.point2.set(0,0,14.0279);
myNode102.radius.set(0.262);
myNode102.innerRotation.center.set(0,0,0);
myNode102.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode102.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°103*/
const myNode103 = object.addCylinder();
myNode103.point1.set(0.724,0.302,-18.0999);
myNode103.point2.set(0,0,36.1999);
myNode103.radius.set(0.265);
myNode103.innerRotation.center.set(0,0,0);
myNode103.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode103.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°104*/
const myNode104 = object.addCylinder();
myNode104.point1.set(-0.028,0.91,-18.0999);
myNode104.point2.set(0,0,36.1999);
myNode104.radius.set(0.264);
myNode104.innerRotation.center.set(0,0,0);
myNode104.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode104.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°105*/
const myNode105_1 = object.addFuseOperation();
myNode105_1.leftArg.set(myNode102);
myNode105_1.rightArg.set(myNode102);
const myNode105_2 = object.addFuseOperation();
myNode105_2.leftArg.set(myNode105_1);
myNode105_2.rightArg.set(myNode103);
const myNode105_3 = object.addFuseOperation();
myNode105_3.leftArg.set(myNode105_2);
myNode105_3.rightArg.set(myNode88);
myNode105 = object.addFuseOperation();
myNode105.leftArg.set(myNode105_3);
myNode105.rightArg.set(myNode104);

/* définition du node n°106*/
const myNode106 = object.addCutOperation();
myNode106.leftArg.set(myNode101);
myNode106.rightArg.set(myNode105);

/* définition du node n°107*/
const myNode107 = object.addCylinder();
myNode107.point1.set(-0.039,3.183,-18.0999);
myNode107.point2.set(0,0,22.3229);
myNode107.radius.set(0.262);
myNode107.innerRotation.center.set(0,0,0);
myNode107.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode107.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°108*/
const myNode108 = object.addCutOperation();
myNode108.leftArg.set(myNode96);
myNode108.rightArg.set(myNode107);

/* définition du node n°109*/
const myNode109 = object.addCylinder();
myNode109.point1.set(0.726,-0.834,-18.0999);
myNode109.point2.set(0,0,22.3229);
myNode109.radius.set(0.263);
myNode109.innerRotation.center.set(0,0,0);
myNode109.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode109.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°110*/
const myNode110 = object.addBox();
myNode110.point1.set(-18.0999,-3.10895,-18.0999);
myNode110.point2.set(36.1999,6.2919,16.6169);
myNode110.innerRotation.center.set(0,0,0);
myNode110.innerRotation.axis.set(0.0,0.0,0.0);
myNode110.innerRotation.angle.set(0.0);

/* définition du node n°111*/
const myNode111 = object.addFuseOperation();
myNode111.leftArg.set(myNode109);
myNode111.rightArg.set(myNode110);

/* définition du node n°112*/
const myNode112 = object.addCutOperation();
myNode112.leftArg.set(myNode108);
myNode112.rightArg.set(myNode111);

/* définition du node n°113*/
const myNode113 = object.addBox();
myNode113.point1.set(4.0721,-3.1089,-18.0999);
myNode113.point2.set(0.1518,6.2918,18.6998);
myNode113.innerRotation.center.set(0,0,0);
myNode113.innerRotation.axis.set(0.0,0.0,0.0);
myNode113.innerRotation.angle.set(0.0);

/* définition du node n°114*/
const myNode114 = object.addCylinder();
myNode114.point1.set(0.728,-1.971,-18.0999);
myNode114.point2.set(0,0,36.1999);
myNode114.radius.set(0.263);
myNode114.innerRotation.center.set(0,0,0);
myNode114.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode114.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°115*/
const myNode115 = object.addCutOperation();
myNode115.leftArg.set(myNode113);
myNode115.rightArg.set(myNode114);

/* définition du node n°116*/
const myNode116 = object.addCylinder();
myNode116.point1.set(0.727,1.438,4.07205);
myNode116.point2.set(0,0,0.1519);
myNode116.radius.set(0.262);
myNode116.innerRotation.center.set(0,0,0);
myNode116.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode116.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°117*/
const myNode117 = object.addCylinder();
myNode117.point1.set(-0.035,-1.363,-18.0999);
myNode117.point2.set(0,0,22.3229);
myNode117.radius.set(0.266);
myNode117.innerRotation.center.set(0,0,0);
myNode117.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode117.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°118*/
const myNode118 = object.addFuseOperation();
myNode118.leftArg.set(myNode116);
myNode118.rightArg.set(myNode117);

/* définition du node n°119*/
const myNode119 = object.addCutOperation();
myNode119.leftArg.set(myNode115);
myNode119.rightArg.set(myNode118);

/* définition du node n°120*/
const myNode120 = object.addCommonOperation();
myNode120.leftArg.set(myNode106);
myNode120.rightArg.set(myNode112);

/* définition du node n°121*/
const myNode121 = object.addBox();
myNode121.point1.set(-4.2229,-4.9999,-1.4829);
myNode121.point2.set(5.2648,8.1828,0.1518);
myNode121.innerRotation.center.set(0,0,0);
myNode121.innerRotation.axis.set(0.0,0.0,0.0);
myNode121.innerRotation.angle.set(0.0);

/* définition du node n°122*/
const myNode122 = object.addBox();
myNode122.point1.set(4.0721,-3.9409,-1.4829);
myNode122.point2.set(0.1518,0.8318,1.4828);
myNode122.innerRotation.center.set(0,0,0);
myNode122.innerRotation.axis.set(0.0,0.0,0.0);
myNode122.innerRotation.angle.set(0.0);

/* définition du node n°123*/
const myNode123 = object.addCutOperation();
myNode123.leftArg.set(myNode122);
myNode123.rightArg.set(myNode76);

/* définition du node n°124*/
const myNode124 = object.addCylinder();
myNode124.point1.set(-2.36,3.161,-2.3619);
myNode124.point2.set(0,0,0.8788);
myNode124.radius.set(0.246);
myNode124.innerRotation.center.set(0,0,0);
myNode124.innerRotation.axis.set(0.0,0.0,0.0);
myNode124.innerRotation.angle.set(0.0);

/* définition du node n°125*/
const myNode125 = object.addBox();
myNode125.point1.set(4.0721,-3.1089,1.1691);
myNode125.point2.set(0.1518,8.1088,1.1928);
myNode125.innerRotation.center.set(0,0,0);
myNode125.innerRotation.axis.set(0.0,0.0,0.0);
myNode125.innerRotation.angle.set(0.0);

/* définition du node n°126*/
const myNode126 = object.addCylinder();
myNode126.point1.set(-1.736,-1.668,-18.0999);
myNode126.point2.set(0,0,36.1999);
myNode126.radius.set(0.263);
myNode126.innerRotation.center.set(0,0,0);
myNode126.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode126.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°127*/
const myNode127 = object.addCylinder();
myNode127.point1.set(-1.736,1.743,1.04205);
myNode127.point2.set(0,0,17.0579);
myNode127.radius.set(0.263);
myNode127.innerRotation.center.set(0,0,0);
myNode127.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode127.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°128*/
const myNode128 = object.addCylinder();
myNode128.point1.set(-1.74,-0.526,1.04205);
myNode128.point2.set(0,0,17.0579);
myNode128.radius.set(0.265);
myNode128.innerRotation.center.set(0,0,0);
myNode128.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode128.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°129*/
const myNode129_1 = object.addFuseOperation();
myNode129_1.leftArg.set(myNode126);
myNode129_1.rightArg.set(myNode126);
const myNode129_2 = object.addFuseOperation();
myNode129_2.leftArg.set(myNode129_1);
myNode129_2.rightArg.set(myNode127);
myNode129 = object.addFuseOperation();
myNode129.leftArg.set(myNode129_2);
myNode129.rightArg.set(myNode128);

/* définition du node n°130*/
const myNode130 = object.addCutOperation();
myNode130.leftArg.set(myNode125);
myNode130.rightArg.set(myNode129);

/* définition du node n°131*/
const myNode131 = object.addCylinder();
myNode131.point1.set(-1.735,4.013,-18.0999);
myNode131.point2.set(0,0,36.1999);
myNode131.radius.set(0.261);
myNode131.innerRotation.center.set(0,0,0);
myNode131.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode131.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°132*/
const myNode132 = object.addCylinder();
myNode132.point1.set(-1.736,2.879,-18.0999);
myNode132.point2.set(0,0,36.1999);
myNode132.radius.set(0.263);
myNode132.innerRotation.center.set(0,0,0);
myNode132.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode132.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°133*/
const myNode133 = object.addCylinder();
myNode133.point1.set(-1.736,-2.804,4.07205);
myNode133.point2.set(0,0,14.0279);
myNode133.radius.set(0.263);
myNode133.innerRotation.center.set(0,0,0);
myNode133.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode133.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°134*/
const myNode134 = object.addCylinder();
myNode134.point1.set(-1.735,0.606,-18.0999);
myNode134.point2.set(0,0,36.1999);
myNode134.radius.set(0.262);
myNode134.innerRotation.center.set(0,0,0);
myNode134.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode134.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°135*/
const myNode135_1 = object.addFuseOperation();
myNode135_1.leftArg.set(myNode131);
myNode135_1.rightArg.set(myNode131);
const myNode135_2 = object.addFuseOperation();
myNode135_2.leftArg.set(myNode135_1);
myNode135_2.rightArg.set(myNode132);
const myNode135_3 = object.addFuseOperation();
myNode135_3.leftArg.set(myNode135_2);
myNode135_3.rightArg.set(myNode133);
myNode135 = object.addFuseOperation();
myNode135.leftArg.set(myNode135_3);
myNode135.rightArg.set(myNode134);

/* définition du node n°136*/
const myNode136 = object.addCutOperation();
myNode136.leftArg.set(myNode130);
myNode136.rightArg.set(myNode135);

/* définition du node n°137*/
const myNode137 = object.addCylinder();
myNode137.point1.set(2.306,-2.642,-2.2479);
myNode137.point2.set(0,0,0.7648);
myNode137.radius.set(0.247);
myNode137.innerRotation.center.set(0,0,0);
myNode137.innerRotation.axis.set(0.0,0.0,0.0);
myNode137.innerRotation.angle.set(0.0);

/* définition du node n°138*/
const myNode138 = object.addBox();
myNode138.point1.set(-4.2229,-4.9999,1.1691);
myNode138.point2.set(0.1518,8.1828,1.1928);
myNode138.innerRotation.center.set(0,0,0);
myNode138.innerRotation.axis.set(0.0,0.0,0.0);
myNode138.innerRotation.angle.set(0.0);

/* définition du node n°139*/
const myNode139 = object.addCylinder();
myNode139.point1.set(-1.736,2.879,-4.22295);
myNode139.point2.set(0,0,8.2949);
myNode139.radius.set(0.263);
myNode139.innerRotation.center.set(0,0,0);
myNode139.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode139.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°140*/
const myNode140 = object.addCylinder();
myNode140.point1.set(-1.736,1.743,-18.0999);
myNode140.point2.set(0,0,36.1999);
myNode140.radius.set(0.263);
myNode140.innerRotation.center.set(0,0,0);
myNode140.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode140.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°141*/
const myNode141 = object.addFuseOperation();
myNode141.leftArg.set(myNode139);
myNode141.rightArg.set(myNode140);

/* définition du node n°142*/
const myNode142 = object.addCutOperation();
myNode142.leftArg.set(myNode138);
myNode142.rightArg.set(myNode141);

/* définition du node n°143*/
const myNode143 = object.addCylinder();
myNode143.point1.set(-1.74,-0.526,-18.0999);
myNode143.point2.set(0,0,14.0279);
myNode143.radius.set(0.265);
myNode143.innerRotation.center.set(0,0,0);
myNode143.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode143.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°144*/
const myNode144 = object.addCylinder();
myNode144.point1.set(-1.736,-2.804,-4.22295);
myNode144.point2.set(0,0,22.3229);
myNode144.radius.set(0.263);
myNode144.innerRotation.center.set(0,0,0);
myNode144.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode144.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°145*/
const myNode145_1 = object.addFuseOperation();
myNode145_1.leftArg.set(myNode143);
myNode145_1.rightArg.set(myNode143);
const myNode145_2 = object.addFuseOperation();
myNode145_2.leftArg.set(myNode145_1);
myNode145_2.rightArg.set(myNode144);
const myNode145_3 = object.addFuseOperation();
myNode145_3.leftArg.set(myNode145_2);
myNode145_3.rightArg.set(myNode126);
myNode145 = object.addFuseOperation();
myNode145.leftArg.set(myNode145_3);
myNode145.rightArg.set(myNode134);

/* définition du node n°146*/
const myNode146 = object.addCutOperation();
myNode146.leftArg.set(myNode142);
myNode146.rightArg.set(myNode145);

/* définition du node n°147*/
const myNode147 = object.addCylinder();
myNode147.point1.set(-1.737,-3.941,-18.0999);
myNode147.point2.set(0,0,36.1999);
myNode147.radius.set(0.263);
myNode147.innerRotation.center.set(0,0,0);
myNode147.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode147.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°148*/
const myNode148 = object.addCutOperation();
myNode148.leftArg.set(myNode146);
myNode148.rightArg.set(myNode147);

/* définition du node n°149*/
const myNode149 = object.addCylinder();
myNode149.point1.set(2.305,-2.643,-2.3619);
myNode149.point2.set(0,0,0.3558);
myNode149.radius.set(0.394);
myNode149.innerRotation.center.set(0,0,0);
myNode149.innerRotation.axis.set(0.0,0.0,0.0);
myNode149.innerRotation.angle.set(0.0);

/* définition du node n°150*/
const myNode150 = object.addBox();
myNode150.point1.set(4.0721,-4.9999,-1.4829);
myNode150.point2.set(0.1518,1.0588,2.0828);
myNode150.innerRotation.center.set(0,0,0);
myNode150.innerRotation.axis.set(0.0,0.0,0.0);
myNode150.innerRotation.angle.set(0.0);

/* définition du node n°151*/
const myNode151 = object.addFuseOperation();
myNode151.leftArg.set(myNode149);
myNode151.rightArg.set(myNode150);

/* définition du node n°152*/
const myNode152 = object.addCylinder();
myNode152.point1.set(0.724,-4.242,1.04205);
myNode152.point2.set(0,0,17.0579);
myNode152.radius.set(0.263);
myNode152.innerRotation.center.set(0,0,0);
myNode152.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode152.innerRotation.angle.set(1.5707926535968346);

/* définition du node n°153*/
const myNode153 = object.addCylinder();
myNode153.point1.set(2.305,-2.643,-2.24795);
myNode153.point2.set(0,0,0.1279);
myNode153.radius.set(0.394);
myNode153.innerRotation.center.set(0,0,0);
myNode153.innerRotation.axis.set(0.0,0.0,0.0);
myNode153.innerRotation.angle.set(0.0);

/* définition du node n°154*/
const myNode154 = object.addFuseOperation();
myNode154.leftArg.set(myNode152);
myNode154.rightArg.set(myNode153);

/* définition du node n°155*/
const myNode155 = object.addCutOperation();
myNode155.leftArg.set(myNode151);
myNode155.rightArg.set(myNode154);

/* définition du node n°156*/
const myNode156 = object.addBox();
myNode156.point1.set(4.0721,-4.9999,2.2101);
myNode156.point2.set(0.1518,1.8908,0.1518);
myNode156.innerRotation.center.set(0,0,0);
myNode156.innerRotation.axis.set(0.0,0.0,0.0);
myNode156.innerRotation.angle.set(0.0);

/* définition du node n°157*/
const myNode157 = object.addCylinder();
myNode157.point1.set(-2.362,-2.646,-2.3619);
myNode157.point2.set(0,0,0.3558);
myNode157.radius.set(0.393);
myNode157.innerRotation.center.set(0,0,0);
myNode157.innerRotation.axis.set(0.0,0.0,0.0);
myNode157.innerRotation.angle.set(0.0);

/* définition du node n°158*/
const myNode158 = object.addBox();
myNode158.point1.set(-2.5189,-4.9999,-2.2479);
myNode158.point2.set(3.5608,0.1518,0.9158);
myNode158.innerRotation.center.set(0,0,0);
myNode158.innerRotation.axis.set(0.0,0.0,0.0);
myNode158.innerRotation.angle.set(0.0);

/* définition du node n°159*/
const myNode159 = object.addFuseOperation();
myNode159.leftArg.set(myNode157);
myNode159.rightArg.set(myNode158);

/* définition du node n°160*/
const myNode160 = object.addCylinder();
myNode160.point1.set(1.858,-0.662,-4.99995);
myNode160.point2.set(0,0,8.1829);
myNode160.radius.set(0.116);
myNode160.innerRotation.center.set(0,0,0);
myNode160.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode160.innerRotation.angle.set(2.094392392986396);

/* définition du node n°161*/
const myNode161 = object.addBox();
myNode161.point1.set(-4.07195,-4.84795,-2.24795);
myNode161.point2.set(5.1139,22.9479,0.1279);
myNode161.innerRotation.center.set(0,0,0);
myNode161.innerRotation.axis.set(0.0,0.0,0.0);
myNode161.innerRotation.angle.set(0.0);

/* définition du node n°162*/
const myNode162 = object.addFuseOperation();
myNode162.leftArg.set(myNode160);
myNode162.rightArg.set(myNode161);

/* définition du node n°163*/
const myNode163 = object.addCutOperation();
myNode163.leftArg.set(myNode159);
myNode163.rightArg.set(myNode162);

/* définition du node n°164*/
const myNode164 = object.addBox();
myNode164.point1.set(-4.2229,-4.9999,0.0331);
myNode164.point2.set(0.1518,8.1828,0.5668);
myNode164.innerRotation.center.set(0,0,0);
myNode164.innerRotation.axis.set(0.0,0.0,0.0);
myNode164.innerRotation.angle.set(0.0);

/* définition du node n°165*/
const myNode165 = object.addCylinder();
myNode165.point1.set(-0.033,-0.227,-18.0999);
myNode165.point2.set(0,0,14.0279);
myNode165.radius.set(0.263);
myNode165.innerRotation.center.set(0,0,0);
myNode165.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode165.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°166*/
const myNode166 = object.addCutOperation();
myNode166.leftArg.set(myNode164);
myNode166.rightArg.set(myNode165);

/* définition du node n°167*/
const myNode167 = object.addCylinder();
myNode167.point1.set(-0.033,2.044,-18.0999);
myNode167.point2.set(0,0,15.5809);
myNode167.radius.set(0.264);
myNode167.innerRotation.center.set(0,0,0);
myNode167.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode167.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°168*/
const myNode168 = object.addCylinder();
myNode168.point1.set(-0.039,3.183,-18.0999);
myNode168.point2.set(0,0,19.1419);
myNode168.radius.set(0.262);
myNode168.innerRotation.center.set(0,0,0);
myNode168.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode168.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°169*/
const myNode169 = object.addFuseOperation();
myNode169.leftArg.set(myNode167);
myNode169.rightArg.set(myNode168);

/* définition du node n°170*/
const myNode170 = object.addCutOperation();
myNode170.leftArg.set(myNode166);
myNode170.rightArg.set(myNode169);

/* définition du node n°171*/
const myNode171_1 = object.addFuseOperation();
myNode171_1.leftArg.set(myNode22);
myNode171_1.rightArg.set(myNode22);
const myNode171_2 = object.addFuseOperation();
myNode171_2.leftArg.set(myNode171_1);
myNode171_2.rightArg.set(myNode15);
myNode171 = object.addFuseOperation();
myNode171.leftArg.set(myNode171_2);
myNode171.rightArg.set(myNode11);

/* définition du node n°172*/
const myNode172 = object.addCutOperation();
myNode172.leftArg.set(myNode170);
myNode172.rightArg.set(myNode171);

/* définition du node n°173*/
const myNode173 = object.addBox();
myNode173.point1.set(4.0721,-3.9409,0.0331);
myNode173.point2.set(0.1518,0.8318,0.5668);
myNode173.innerRotation.center.set(0,0,0);
myNode173.innerRotation.axis.set(0.0,0.0,0.0);
myNode173.innerRotation.angle.set(0.0);

/* définition du node n°174*/
const myNode174_1 = object.addFuseOperation();
myNode174_1.leftArg.set(myNode28);
myNode174_1.rightArg.set(myNode28);
const myNode174_2 = object.addFuseOperation();
myNode174_2.leftArg.set(myNode174_1);
myNode174_2.rightArg.set(myNode29);
const myNode174_3 = object.addFuseOperation();
myNode174_3.leftArg.set(myNode174_2);
myNode174_3.rightArg.set(myNode34);
const myNode174_4 = object.addFuseOperation();
myNode174_4.leftArg.set(myNode174_3);
myNode174_4.rightArg.set(myNode35);
const myNode174_5 = object.addFuseOperation();
myNode174_5.leftArg.set(myNode174_4);
myNode174_5.rightArg.set(myNode36);
const myNode174_6 = object.addFuseOperation();
myNode174_6.leftArg.set(myNode174_5);
myNode174_6.rightArg.set(myNode55);
const myNode174_7 = object.addFuseOperation();
myNode174_7.leftArg.set(myNode174_6);
myNode174_7.rightArg.set(myNode56);
const myNode174_8 = object.addFuseOperation();
myNode174_8.leftArg.set(myNode174_7);
myNode174_8.rightArg.set(myNode62);
const myNode174_9 = object.addFuseOperation();
myNode174_9.leftArg.set(myNode174_8);
myNode174_9.rightArg.set(myNode63);
const myNode174_10 = object.addFuseOperation();
myNode174_10.leftArg.set(myNode174_9);
myNode174_10.rightArg.set(myNode73);
const myNode174_11 = object.addFuseOperation();
myNode174_11.leftArg.set(myNode174_10);
myNode174_11.rightArg.set(myNode92);
const myNode174_12 = object.addFuseOperation();
myNode174_12.leftArg.set(myNode174_11);
myNode174_12.rightArg.set(myNode95);
const myNode174_13 = object.addFuseOperation();
myNode174_13.leftArg.set(myNode174_12);
myNode174_13.rightArg.set(myNode120);
const myNode174_14 = object.addFuseOperation();
myNode174_14.leftArg.set(myNode174_13);
myNode174_14.rightArg.set(myNode121);
const myNode174_15 = object.addFuseOperation();
myNode174_15.leftArg.set(myNode174_14);
myNode174_15.rightArg.set(myNode123);
const myNode174_16 = object.addFuseOperation();
myNode174_16.leftArg.set(myNode174_15);
myNode174_16.rightArg.set(myNode124);
const myNode174_17 = object.addFuseOperation();
myNode174_17.leftArg.set(myNode174_16);
myNode174_17.rightArg.set(myNode136);
const myNode174_18 = object.addFuseOperation();
myNode174_18.leftArg.set(myNode174_17);
myNode174_18.rightArg.set(myNode137);
const myNode174_19 = object.addFuseOperation();
myNode174_19.leftArg.set(myNode174_18);
myNode174_19.rightArg.set(myNode148);
const myNode174_20 = object.addFuseOperation();
myNode174_20.leftArg.set(myNode174_19);
myNode174_20.rightArg.set(myNode155);
const myNode174_21 = object.addFuseOperation();
myNode174_21.leftArg.set(myNode174_20);
myNode174_21.rightArg.set(myNode156);
const myNode174_22 = object.addFuseOperation();
myNode174_22.leftArg.set(myNode174_21);
myNode174_22.rightArg.set(myNode163);
const myNode174_23 = object.addFuseOperation();
myNode174_23.leftArg.set(myNode174_22);
myNode174_23.rightArg.set(myNode172);
myNode174 = object.addFuseOperation();
myNode174.leftArg.set(myNode174_23);
myNode174.rightArg.set(myNode173);

/* définition du node n°175*/
const myNode175 = object.addCommonOperation();
myNode175.leftArg.set(myNode0);
myNode175.rightArg.set(myNode174);
/*END Geometry Object Definition*/