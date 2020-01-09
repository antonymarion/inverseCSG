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
myNode1.point1.set(-2.5189,3.1831,2.2101);
myNode1.point2.set(1.0419,4.9999,2.3619000000000003);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.innerTranslation.vector.set(-0.7384999999999999,4.0915,2.286);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-4.0719,-3.1089,-1.4829);
myNode2.point2.set(4.0719,4.9999,-1.3311000000000002);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.innerTranslation.vector.set(0.0,0.9455,-1.407);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addBox();
myNode3.point1.set(-2.5189,-4.9999,-2.2479);
myNode3.point2.set(1.0419,-4.8481000000000005,-1.3321);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);
myNode3.innerTranslation.vector.set(-0.7384999999999999,-4.924,-1.79);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(-2.362,-2.646,-2.3619);
myNode4.point2.set(-2.362,-2.646,-2.0061);
myNode4.radius.set(0.393);
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
const myNode6 = object.addCylinder();
myNode6.point1.set(1.858,-0.662,-4.99995);
myNode6.point2.set(1.858,-0.662,3.18295);
myNode6.radius.set(0.116);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode6.innerRotation.angle.set(2.094392392986396);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addBox();
myNode7.point1.set(-4.07195,-4.84795,-2.24795);
myNode7.point2.set(1.04195,18.09995,-2.12005);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);
myNode7.innerTranslation.vector.set(-1.5150000000000001,6.626,-2.1839999999999997);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addFuseOperation();
myNode8.leftArg.set(myNode6);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addCutOperation();
myNode9.leftArg.set(myNode5);
myNode9.rightArg.set(myNode8);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(4.0721,-3.1089,-18.0999);
myNode10.point2.set(4.2238999999999995,3.1829,0.5998999999999981);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.innerTranslation.vector.set(4.148,0.03699999999999992,-8.750000000000002);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addCylinder();
myNode11.point1.set(0.728,-1.971,-18.0999);
myNode11.point2.set(0.728,-1.971,18.099999999999998);
myNode11.radius.set(0.263);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode11.innerRotation.angle.set(1.5707926535897931);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCutOperation();
myNode12.leftArg.set(myNode10);
myNode12.rightArg.set(myNode11);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addCylinder();
myNode13.point1.set(-0.035,-1.363,-18.0999);
myNode13.point2.set(-0.035,-1.363,4.222999999999999);
myNode13.radius.set(0.266);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode13.innerRotation.angle.set(1.5707926535897931);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(0.727,1.438,4.07205);
myNode14.point2.set(0.727,1.438,4.22395);
myNode14.radius.set(0.262);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode14.innerRotation.angle.set(1.5707926535897931);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addFuseOperation();
myNode15.leftArg.set(myNode13);
myNode15.rightArg.set(myNode14);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addCutOperation();
myNode16.leftArg.set(myNode12);
myNode16.rightArg.set(myNode15);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addSphere();
myNode17.center.set(0,0,0);
myNode17.radius.set(54.29981583762508);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(-0.033,-0.227,-18.0999);
myNode18.point2.set(-0.033,-0.227,18.099999999999998);
myNode18.radius.set(0.263);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode18.innerRotation.angle.set(1.5707926535897931);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addCutOperation();
myNode19.leftArg.set(myNode17);
myNode19.rightArg.set(myNode18);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addCylinder();
myNode20.point1.set(0.725,2.578,-18.0999);
myNode20.point2.set(0.725,2.578,18.099999999999998);
myNode20.radius.set(0.263);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode20.innerRotation.angle.set(1.5707926535897931);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addCylinder();
myNode21.point1.set(0.727,-3.109,-18.0999);
myNode21.point2.set(0.727,-3.109,18.099999999999998);
myNode21.radius.set(0.263);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode21.innerRotation.angle.set(1.5707999999999998);
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
const myNode24 = object.addCylinder();
myNode24.point1.set(-0.033,2.044,-18.0999);
myNode24.point2.set(-0.033,2.044,18.099999999999998);
myNode24.radius.set(0.264);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode24.innerRotation.angle.set(1.5707926535897931);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addCylinder();
myNode25.point1.set(-0.032,-2.501,4.07205);
myNode25.point2.set(-0.032,-2.501,18.09995);
myNode25.radius.set(0.262);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode25.innerRotation.angle.set(1.5707926535897931);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addCylinder();
myNode26.point1.set(0.724,0.302,-18.0999);
myNode26.point2.set(0.724,0.302,18.099999999999998);
myNode26.radius.set(0.265);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode26.innerRotation.angle.set(1.5707926535897931);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addCylinder();
myNode27.point1.set(-0.028,0.91,-18.0999);
myNode27.point2.set(-0.028,0.91,18.099999999999998);
myNode27.radius.set(0.264);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode27.innerRotation.angle.set(1.5707926535897931);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28_1 = myNode24.clone();
myNode28_1.isVisible = false;
const myNode28_2 = object.addFuseOperation();
myNode28_2.leftArg.set(myNode28_1);
myNode28_2.rightArg.set(myNode25);
myNode28_2.isVisible = false;
const myNode28_3 = object.addFuseOperation();
myNode28_3.leftArg.set(myNode28_2);
myNode28_3.rightArg.set(myNode26);
myNode28_3.isVisible = false;
myNode28 = object.addFuseOperation();
myNode28.leftArg.set(myNode28_3);
myNode28.rightArg.set(myNode27);
myNode28.isVisible = false;
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addCutOperation();
myNode29.leftArg.set(myNode23);
myNode29.rightArg.set(myNode28);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addCylinder();
myNode30.point1.set(-0.039,3.183,-18.0999);
myNode30.point2.set(-0.039,3.183,4.222999999999999);
myNode30.radius.set(0.262);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode30.innerRotation.angle.set(1.5707926535897931);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addCutOperation();
myNode31.leftArg.set(myNode17);
myNode31.rightArg.set(myNode30);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addBox();
myNode32.point1.set(-18.0999,-3.10895,-18.0999);
myNode32.point2.set(18.099999999999998,3.18295,-1.4830000000000005);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);
myNode32.innerTranslation.vector.set(4.9999999998107114e-05,0.03699999999999992,-9.791450000000001);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addCylinder();
myNode33.point1.set(0.726,-0.834,-18.0999);
myNode33.point2.set(0.726,-0.834,4.222999999999999);
myNode33.radius.set(0.263);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode33.innerRotation.angle.set(1.5707999999999998);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addFuseOperation();
myNode34.leftArg.set(myNode32);
myNode34.rightArg.set(myNode33);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addCutOperation();
myNode35.leftArg.set(myNode31);
myNode35.rightArg.set(myNode34);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addCommonOperation();
myNode36.leftArg.set(myNode16);
myNode36.rightArg.set(myNode29);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addBox();
myNode37.point1.set(4.0721,-3.1089,1.1691);
myNode37.point2.set(4.2238999999999995,4.9999,2.3619000000000003);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0,0.0,0.0);
myNode37.innerRotation.angle.set(0.0);
myNode37.innerTranslation.vector.set(4.148,0.9455,1.7655);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addCylinder();
myNode38.point1.set(-1.736,1.743,1.04205);
myNode38.point2.set(-1.736,1.743,18.09995);
myNode38.radius.set(0.263);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode38.innerRotation.angle.set(1.5707926535897931);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addCylinder();
myNode39.point1.set(-1.736,-1.668,-18.0999);
myNode39.point2.set(-1.736,-1.668,18.099999999999998);
myNode39.radius.set(0.263);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode39.innerRotation.angle.set(1.5707926535897931);
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addCylinder();
myNode40.point1.set(-1.74,-0.526,1.04205);
myNode40.point2.set(-1.74,-0.526,18.09995);
myNode40.radius.set(0.265);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode40.innerRotation.angle.set(1.5707926535897931);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41_1 = myNode38.clone();
myNode41_1.isVisible = false;
const myNode41_2 = object.addFuseOperation();
myNode41_2.leftArg.set(myNode41_1);
myNode41_2.rightArg.set(myNode39);
myNode41_2.isVisible = false;
myNode41 = object.addFuseOperation();
myNode41.leftArg.set(myNode41_2);
myNode41.rightArg.set(myNode40);
myNode41.isVisible = false;
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addCutOperation();
myNode42.leftArg.set(myNode37);
myNode42.rightArg.set(myNode41);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addCylinder();
myNode43.point1.set(-1.736,2.879,-18.0999);
myNode43.point2.set(-1.736,2.879,18.099999999999998);
myNode43.radius.set(0.263);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode43.innerRotation.angle.set(1.5707926535897931);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44 = object.addCylinder();
myNode44.point1.set(-1.735,0.606,-18.0999);
myNode44.point2.set(-1.735,0.606,18.099999999999998);
myNode44.radius.set(0.262);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode44.innerRotation.angle.set(1.5707926535897931);
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45 = object.addCylinder();
myNode45.point1.set(-1.736,-2.804,4.07205);
myNode45.point2.set(-1.736,-2.804,18.09995);
myNode45.radius.set(0.263);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode45.innerRotation.angle.set(1.5707926535897931);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addCylinder();
myNode46.point1.set(-1.735,4.013,-18.0999);
myNode46.point2.set(-1.735,4.013,18.099999999999998);
myNode46.radius.set(0.261);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode46.innerRotation.angle.set(1.5707926535897931);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47_1 = myNode43.clone();
myNode47_1.isVisible = false;
const myNode47_2 = object.addFuseOperation();
myNode47_2.leftArg.set(myNode47_1);
myNode47_2.rightArg.set(myNode44);
myNode47_2.isVisible = false;
const myNode47_3 = object.addFuseOperation();
myNode47_3.leftArg.set(myNode47_2);
myNode47_3.rightArg.set(myNode45);
myNode47_3.isVisible = false;
myNode47 = object.addFuseOperation();
myNode47.leftArg.set(myNode47_3);
myNode47.rightArg.set(myNode46);
myNode47.isVisible = false;
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addCutOperation();
myNode48.leftArg.set(myNode42);
myNode48.rightArg.set(myNode47);
myNode48.isVisible = false;

/* définition du node n°49*/
const myNode49 = object.addBox();
myNode49.point1.set(-4.2229,-4.9999,1.1691);
myNode49.point2.set(-4.0711,3.1829,2.3619000000000003);
myNode49.innerRotation.center.set(0,0,0);
myNode49.innerRotation.axis.set(0.0,0.0,0.0);
myNode49.innerRotation.angle.set(0.0);
myNode49.innerTranslation.vector.set(-4.147,-0.9085000000000001,1.7655);
myNode49.isVisible = false;

/* définition du node n°50*/
const myNode50 = object.addCylinder();
myNode50.point1.set(-1.736,2.879,-4.22295);
myNode50.point2.set(-1.736,2.879,4.07195);
myNode50.radius.set(0.263);
myNode50.innerRotation.center.set(0,0,0);
myNode50.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode50.innerRotation.angle.set(1.5707926535897931);
myNode50.isVisible = false;

/* définition du node n°51*/
const myNode51 = object.addCylinder();
myNode51.point1.set(-1.736,1.743,-18.0999);
myNode51.point2.set(-1.736,1.743,18.099999999999998);
myNode51.radius.set(0.263);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode51.innerRotation.angle.set(1.5707926535897931);
myNode51.isVisible = false;

/* définition du node n°52*/
const myNode52 = object.addFuseOperation();
myNode52.leftArg.set(myNode50);
myNode52.rightArg.set(myNode51);
myNode52.isVisible = false;

/* définition du node n°53*/
const myNode53 = object.addCutOperation();
myNode53.leftArg.set(myNode49);
myNode53.rightArg.set(myNode52);
myNode53.isVisible = false;

/* définition du node n°54*/
const myNode54 = object.addCylinder();
myNode54.point1.set(-1.736,-2.804,-4.22295);
myNode54.point2.set(-1.736,-2.804,18.09995);
myNode54.radius.set(0.263);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode54.innerRotation.angle.set(1.5707926535897931);
myNode54.isVisible = false;

/* définition du node n°55*/
const myNode55 = object.addCylinder();
myNode55.point1.set(-1.74,-0.526,-18.0999);
myNode55.point2.set(-1.74,-0.526,-4.072000000000001);
myNode55.radius.set(0.265);
myNode55.innerRotation.center.set(0,0,0);
myNode55.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode55.innerRotation.angle.set(1.5707926535897931);
myNode55.isVisible = false;

/* définition du node n°56*/
const myNode56_1 = myNode39.clone();
myNode56_1.isVisible = false;
const myNode56_2 = object.addFuseOperation();
myNode56_2.leftArg.set(myNode56_1);
myNode56_2.rightArg.set(myNode54);
myNode56_2.isVisible = false;
const myNode56_3 = object.addFuseOperation();
myNode56_3.leftArg.set(myNode56_2);
myNode56_3.rightArg.set(myNode55);
myNode56_3.isVisible = false;
myNode56 = object.addFuseOperation();
myNode56.leftArg.set(myNode56_3);
myNode56.rightArg.set(myNode44);
myNode56.isVisible = false;
myNode56.isVisible = false;

/* définition du node n°57*/
const myNode57 = object.addCutOperation();
myNode57.leftArg.set(myNode53);
myNode57.rightArg.set(myNode56);
myNode57.isVisible = false;

/* définition du node n°58*/
const myNode58 = object.addCylinder();
myNode58.point1.set(-1.737,-3.941,-18.0999);
myNode58.point2.set(-1.737,-3.941,18.099999999999998);
myNode58.radius.set(0.263);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode58.innerRotation.angle.set(1.5707926535897931);
myNode58.isVisible = false;

/* définition du node n°59*/
const myNode59 = object.addCutOperation();
myNode59.leftArg.set(myNode57);
myNode59.rightArg.set(myNode58);
myNode59.isVisible = false;

/* définition du node n°60*/
const myNode60 = object.addBox();
myNode60.point1.set(-4.2229,-3.1089,-18.0999);
myNode60.point2.set(-4.0711,3.1829,0.03289999999999793);
myNode60.innerRotation.center.set(0,0,0);
myNode60.innerRotation.axis.set(0.0,0.0,0.0);
myNode60.innerRotation.angle.set(0.0);
myNode60.innerTranslation.vector.set(-4.147,0.03699999999999992,-9.033500000000002);
myNode60.isVisible = false;

/* définition du node n°61*/
const myNode61 = object.addCylinder();
myNode61.point1.set(0.726,-0.834,-4.22295);
myNode61.point2.set(0.726,-0.834,-2.5180499999999997);
myNode61.radius.set(0.263);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode61.innerRotation.angle.set(1.5707999999999998);
myNode61.isVisible = false;

/* définition du node n°62*/
const myNode62 = object.addCutOperation();
myNode62.leftArg.set(myNode60);
myNode62.rightArg.set(myNode61);
myNode62.isVisible = false;

/* définition du node n°63*/
const myNode63 = object.addCylinder();
myNode63.point1.set(-0.032,-2.501,-4.22295);
myNode63.point2.set(-0.032,-2.501,18.09995);
myNode63.radius.set(0.262);
myNode63.innerRotation.center.set(0,0,0);
myNode63.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode63.innerRotation.angle.set(1.5707926535897931);
myNode63.isVisible = false;

/* définition du node n°64*/
const myNode64 = object.addFuseOperation();
myNode64.leftArg.set(myNode63);
myNode64.rightArg.set(myNode21);
myNode64.isVisible = false;

/* définition du node n°65*/
const myNode65 = object.addCutOperation();
myNode65.leftArg.set(myNode62);
myNode65.rightArg.set(myNode64);
myNode65.isVisible = false;

/* définition du node n°66*/
const myNode66 = object.addBox();
myNode66.point1.set(-4.22295,-3.10895,-18.0999);
myNode66.point2.set(-4.07105,18.09995,-1.4830000000000005);
myNode66.innerRotation.center.set(0,0,0);
myNode66.innerRotation.axis.set(0.0,0.0,0.0);
myNode66.innerRotation.angle.set(0.0);
myNode66.innerTranslation.vector.set(-4.147,7.4955,-9.791450000000001);
myNode66.isVisible = false;

/* définition du node n°67*/
const myNode67 = object.addCylinder();
myNode67.point1.set(-0.035,-1.363,-4.22295);
myNode67.point2.set(-0.035,-1.363,18.09995);
myNode67.radius.set(0.266);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode67.innerRotation.angle.set(1.5707926535897931);
myNode67.isVisible = false;

/* définition du node n°68*/
const myNode68 = object.addCylinder();
myNode68.point1.set(-0.033,-0.227,-4.22295);
myNode68.point2.set(-0.033,-0.227,18.09995);
myNode68.radius.set(0.263);
myNode68.innerRotation.center.set(0,0,0);
myNode68.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode68.innerRotation.angle.set(1.5707926535897931);
myNode68.isVisible = false;

/* définition du node n°69*/
const myNode69 = object.addCylinder();
myNode69.point1.set(0.725,2.578,-18.0999);
myNode69.point2.set(0.725,2.578,-2.519000000000002);
myNode69.radius.set(0.263);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode69.innerRotation.angle.set(1.5707926535897931);
myNode69.isVisible = false;

/* définition du node n°70*/
const myNode70_1 = myNode66.clone();
myNode70_1.isVisible = false;
const myNode70_2 = object.addFuseOperation();
myNode70_2.leftArg.set(myNode70_1);
myNode70_2.rightArg.set(myNode67);
myNode70_2.isVisible = false;
const myNode70_3 = object.addFuseOperation();
myNode70_3.leftArg.set(myNode70_2);
myNode70_3.rightArg.set(myNode68);
myNode70_3.isVisible = false;
myNode70 = object.addFuseOperation();
myNode70.leftArg.set(myNode70_3);
myNode70.rightArg.set(myNode69);
myNode70.isVisible = false;
myNode70.isVisible = false;

/* définition du node n°71*/
const myNode71 = object.addCutOperation();
myNode71.leftArg.set(myNode65);
myNode71.rightArg.set(myNode70);
myNode71.isVisible = false;

/* définition du node n°72*/
const myNode72 = object.addCylinder();
myNode72.point1.set(-0.028,0.91,-4.22295);
myNode72.point2.set(-0.028,0.91,-2.5180499999999997);
myNode72.radius.set(0.264);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode72.innerRotation.angle.set(1.5707926535897931);
myNode72.isVisible = false;

/* définition du node n°73*/
const myNode73 = object.addCylinder();
myNode73.point1.set(0.727,1.438,-18.0999);
myNode73.point2.set(0.727,1.438,-4.072000000000001);
myNode73.radius.set(0.262);
myNode73.innerRotation.center.set(0,0,0);
myNode73.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode73.innerRotation.angle.set(1.5707926535897931);
myNode73.isVisible = false;

/* définition du node n°74*/
const myNode74 = object.addCylinder();
myNode74.point1.set(0.724,0.302,-4.22295);
myNode74.point2.set(0.724,0.302,18.09995);
myNode74.radius.set(0.265);
myNode74.innerRotation.center.set(0,0,0);
myNode74.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode74.innerRotation.angle.set(1.5707926535897931);
myNode74.isVisible = false;

/* définition du node n°75*/
const myNode75 = object.addSphere();
myNode75.center.set(0,0,0);
myNode75.radius.set(54.29990791889062);
myNode75.isVisible = false;

/* définition du node n°76*/
const myNode76 = object.addCommonOperation();
myNode76.leftArg.set(myNode24);
myNode76.rightArg.set(myNode75);
myNode76.isVisible = false;

/* définition du node n°77*/
const myNode77 = object.addCylinder();
myNode77.point1.set(-0.039,3.183,-4.22295);
myNode77.point2.set(-0.039,3.183,18.09995);
myNode77.radius.set(0.262);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode77.innerRotation.angle.set(1.5707926535897931);
myNode77.isVisible = false;

/* définition du node n°78*/
const myNode78 = object.addCylinder();
myNode78.point1.set(0.728,-1.971,-4.22295);
myNode78.point2.set(0.728,-1.971,-4.07105);
myNode78.radius.set(0.263);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode78.innerRotation.angle.set(1.5707926535897931);
myNode78.isVisible = false;

/* définition du node n°79*/
const myNode79_1 = myNode72.clone();
myNode79_1.isVisible = false;
const myNode79_2 = object.addFuseOperation();
myNode79_2.leftArg.set(myNode79_1);
myNode79_2.rightArg.set(myNode73);
myNode79_2.isVisible = false;
const myNode79_3 = object.addFuseOperation();
myNode79_3.leftArg.set(myNode79_2);
myNode79_3.rightArg.set(myNode74);
myNode79_3.isVisible = false;
const myNode79_4 = object.addFuseOperation();
myNode79_4.leftArg.set(myNode79_3);
myNode79_4.rightArg.set(myNode76);
myNode79_4.isVisible = false;
const myNode79_5 = object.addFuseOperation();
myNode79_5.leftArg.set(myNode79_4);
myNode79_5.rightArg.set(myNode77);
myNode79_5.isVisible = false;
myNode79 = object.addFuseOperation();
myNode79.leftArg.set(myNode79_5);
myNode79.rightArg.set(myNode78);
myNode79.isVisible = false;
myNode79.isVisible = false;

/* définition du node n°80*/
const myNode80 = object.addCutOperation();
myNode80.leftArg.set(myNode71);
myNode80.rightArg.set(myNode79);
myNode80.isVisible = false;

/* définition du node n°81*/
const myNode81 = object.addBox();
myNode81.point1.set(-4.2229,-4.9999,-1.4829);
myNode81.point2.set(1.0419,3.1829,-1.3311000000000002);
myNode81.innerRotation.center.set(0,0,0);
myNode81.innerRotation.axis.set(0.0,0.0,0.0);
myNode81.innerRotation.angle.set(0.0);
myNode81.innerTranslation.vector.set(-1.5905,-0.9085000000000001,-1.407);
myNode81.isVisible = false;

/* définition du node n°82*/
const myNode82 = object.addBox();
myNode82.point1.set(-4.2229,-4.9999,-2.3619);
myNode82.point2.set(-4.0711,3.1829,-9.999999999976694e-05);
myNode82.innerRotation.center.set(0,0,0);
myNode82.innerRotation.axis.set(0.0,0.0,0.0);
myNode82.innerRotation.angle.set(0.0);
myNode82.innerTranslation.vector.set(-4.147,-0.9085000000000001,-1.1809999999999998);
myNode82.isVisible = false;

/* définition du node n°83*/
const myNode83 = object.addCylinder();
myNode83.point1.set(0.724,0.302,-18.0999);
myNode83.point2.set(0.724,0.302,-4.072000000000001);
myNode83.radius.set(0.265);
myNode83.innerRotation.center.set(0,0,0);
myNode83.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode83.innerRotation.angle.set(1.5707926535897931);
myNode83.isVisible = false;

/* définition du node n°84*/
const myNode84 = object.addCutOperation();
myNode84.leftArg.set(myNode82);
myNode84.rightArg.set(myNode83);
myNode84.isVisible = false;

/* définition du node n°85*/
const myNode85 = object.addCylinder();
myNode85.point1.set(-0.028,0.91,-18.0999);
myNode85.point2.set(-0.028,0.91,-4.072000000000001);
myNode85.radius.set(0.264);
myNode85.innerRotation.center.set(0,0,0);
myNode85.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode85.innerRotation.angle.set(1.5707926535897931);
myNode85.isVisible = false;

/* définition du node n°86*/
const myNode86 = object.addFuseOperation();
myNode86.leftArg.set(myNode61);
myNode86.rightArg.set(myNode85);
myNode86.isVisible = false;

/* définition du node n°87*/
const myNode87 = object.addCutOperation();
myNode87.leftArg.set(myNode84);
myNode87.rightArg.set(myNode86);
myNode87.isVisible = false;

/* définition du node n°88*/
const myNode88 = object.addCylinder();
myNode88.point1.set(0.725,2.578,-18.0999);
myNode88.point2.set(0.725,2.578,-4.072000000000001);
myNode88.radius.set(0.263);
myNode88.innerRotation.center.set(0,0,0);
myNode88.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode88.innerRotation.angle.set(1.5707926535897931);
myNode88.isVisible = false;

/* définition du node n°89*/
const myNode89 = object.addCylinder();
myNode89.point1.set(-0.039,3.183,-18.0999);
myNode89.point2.set(-0.039,3.183,-4.072000000000001);
myNode89.radius.set(0.262);
myNode89.innerRotation.center.set(0,0,0);
myNode89.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode89.innerRotation.angle.set(1.5707926535897931);
myNode89.isVisible = false;

/* définition du node n°90*/
const myNode90 = object.addCylinder();
myNode90.point1.set(0.727,-3.109,-18.0999);
myNode90.point2.set(0.727,-3.109,-4.072000000000001);
myNode90.radius.set(0.263);
myNode90.innerRotation.center.set(0,0,0);
myNode90.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode90.innerRotation.angle.set(1.5707999999999998);
myNode90.isVisible = false;

/* définition du node n°91*/
const myNode91_1 = myNode63.clone();
myNode91_1.isVisible = false;
const myNode91_2 = object.addFuseOperation();
myNode91_2.leftArg.set(myNode91_1);
myNode91_2.rightArg.set(myNode88);
myNode91_2.isVisible = false;
const myNode91_3 = object.addFuseOperation();
myNode91_3.leftArg.set(myNode91_2);
myNode91_3.rightArg.set(myNode89);
myNode91_3.isVisible = false;
myNode91 = object.addFuseOperation();
myNode91.leftArg.set(myNode91_3);
myNode91.rightArg.set(myNode90);
myNode91.isVisible = false;
myNode91.isVisible = false;

/* définition du node n°92*/
const myNode92 = object.addCutOperation();
myNode92.leftArg.set(myNode87);
myNode92.rightArg.set(myNode91);
myNode92.isVisible = false;

/* définition du node n°93*/
const myNode93 = object.addBox();
myNode93.point1.set(-4.2229,-4.9999,-1.4829);
myNode93.point2.set(-4.0711,3.1829,0.03289999999999993);
myNode93.innerRotation.center.set(0,0,0);
myNode93.innerRotation.axis.set(0.0,0.0,0.0);
myNode93.innerRotation.angle.set(0.0);
myNode93.innerTranslation.vector.set(-4.147,-0.9085000000000001,-0.7250000000000001);
myNode93.isVisible = false;

/* définition du node n°94*/
const myNode94 = object.addCylinder();
myNode94.point1.set(-0.035,-1.363,-18.0999);
myNode94.point2.set(-0.035,-1.363,18.099999999999998);
myNode94.radius.set(0.266);
myNode94.innerRotation.center.set(0,0,0);
myNode94.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode94.innerRotation.angle.set(1.5707926535897931);
myNode94.isVisible = false;

/* définition du node n°95*/
const myNode95 = object.addCutOperation();
myNode95.leftArg.set(myNode93);
myNode95.rightArg.set(myNode94);
myNode95.isVisible = false;

/* définition du node n°96*/
const myNode96 = object.addCylinder();
myNode96.point1.set(-0.033,2.044,-4.22295);
myNode96.point2.set(-0.033,2.044,18.09995);
myNode96.radius.set(0.264);
myNode96.innerRotation.center.set(0,0,0);
myNode96.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode96.innerRotation.angle.set(1.5707926535897931);
myNode96.isVisible = false;

/* définition du node n°97*/
const myNode97 = object.addFuseOperation();
myNode97.leftArg.set(myNode68);
myNode97.rightArg.set(myNode96);
myNode97.isVisible = false;

/* définition du node n°98*/
const myNode98 = object.addCutOperation();
myNode98.leftArg.set(myNode95);
myNode98.rightArg.set(myNode97);
myNode98.isVisible = false;

/* définition du node n°99*/
const myNode99 = object.addBox();
myNode99.point1.set(-4.2229,-18.0999,-1.3309);
myNode99.point2.set(-4.0711,18.0999,-9.999999999998899e-05);
myNode99.innerRotation.center.set(0,0,0);
myNode99.innerRotation.axis.set(0.0,0.0,0.0);
myNode99.innerRotation.angle.set(0.0);
myNode99.innerTranslation.vector.set(-4.147,0.0,-0.6655);
myNode99.isVisible = false;

/* définition du node n°100*/
const myNode100 = object.addCylinder();
myNode100.point1.set(0.727,1.438,-18.0999);
myNode100.point2.set(0.727,1.438,1.041999999999998);
myNode100.radius.set(0.262);
myNode100.innerRotation.center.set(0,0,0);
myNode100.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode100.innerRotation.angle.set(1.5707926535897931);
myNode100.isVisible = false;

/* définition du node n°101*/
const myNode101 = object.addCutOperation();
myNode101.leftArg.set(myNode99);
myNode101.rightArg.set(myNode100);
myNode101.isVisible = false;

/* définition du node n°102*/
const myNode102 = object.addCylinder();
myNode102.point1.set(0.728,-1.971,-18.0999);
myNode102.point2.set(0.728,-1.971,-4.072000000000001);
myNode102.radius.set(0.263);
myNode102.innerRotation.center.set(0,0,0);
myNode102.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode102.innerRotation.angle.set(1.5707926535897931);
myNode102.isVisible = false;

/* définition du node n°103*/
const myNode103 = object.addCylinder();
myNode103.point1.set(0.724,-4.242,-18.0999);
myNode103.point2.set(0.724,-4.242,18.099999999999998);
myNode103.radius.set(0.263);
myNode103.innerRotation.center.set(0,0,0);
myNode103.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode103.innerRotation.angle.set(1.5707926535968346);
myNode103.isVisible = false;

/* définition du node n°104*/
const myNode104 = object.addFuseOperation();
myNode104.leftArg.set(myNode102);
myNode104.rightArg.set(myNode103);
myNode104.isVisible = false;

/* définition du node n°105*/
const myNode105 = object.addCutOperation();
myNode105.leftArg.set(myNode101);
myNode105.rightArg.set(myNode104);
myNode105.isVisible = false;

/* définition du node n°106*/
const myNode106 = object.addCommonOperation();
myNode106.leftArg.set(myNode92);
myNode106.rightArg.set(myNode98);
myNode106.isVisible = false;

/* définition du node n°107*/
const myNode107 = object.addBox();
myNode107.point1.set(-18.0999,3.1831,-1.4829);
myNode107.point2.set(-2.5191000000000017,4.9999,2.3619000000000003);
myNode107.innerRotation.center.set(0,0,0);
myNode107.innerRotation.axis.set(0.0,0.0,0.0);
myNode107.innerRotation.angle.set(0.0);
myNode107.innerTranslation.vector.set(-10.309500000000002,4.0915,0.4395);
myNode107.isVisible = false;

/* définition du node n°108*/
const myNode108 = object.addCylinder();
myNode108.point1.set(0.725,3.714,-18.0999);
myNode108.point2.set(0.725,3.714,-2.519000000000002);
myNode108.radius.set(0.262);
myNode108.innerRotation.center.set(0,0,0);
myNode108.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode108.innerRotation.angle.set(1.5707926535897931);
myNode108.isVisible = false;

/* définition du node n°109*/
const myNode109 = object.addCylinder();
myNode109.point1.set(-1.735,4.013,-4.22295);
myNode109.point2.set(-1.735,4.013,-4.07105);
myNode109.radius.set(0.261);
myNode109.innerRotation.center.set(0,0,0);
myNode109.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode109.innerRotation.angle.set(1.5707926535897931);
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
myNode112.point1.set(-0.033,-0.227,-18.0999);
myNode112.point2.set(-0.033,-0.227,-4.224100000000002);
myNode112.radius.set(0.263);
myNode112.innerRotation.center.set(0,0,0);
myNode112.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode112.innerRotation.angle.set(1.5707926535897931);
myNode112.isVisible = false;

/* définition du node n°113*/
const myNode113 = object.addBox();
myNode113.point1.set(-4.2229,3.1831,0.0331);
myNode113.point2.set(-2.5181,18.0999,18.0999);
myNode113.innerRotation.center.set(0,0,0);
myNode113.innerRotation.axis.set(0.0,0.0,0.0);
myNode113.innerRotation.angle.set(0.0);
myNode113.innerTranslation.vector.set(-3.3705,10.6415,9.0665);
myNode113.isVisible = false;

/* définition du node n°114*/
const myNode114 = object.addCylinder();
myNode114.point1.set(-1.735,4.013,-4.22295);
myNode114.point2.set(-1.735,4.013,18.09995);
myNode114.radius.set(0.261);
myNode114.innerRotation.center.set(0,0,0);
myNode114.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode114.innerRotation.angle.set(1.5707926535897931);
myNode114.isVisible = false;

/* définition du node n°115*/
const myNode115 = object.addCutOperation();
myNode115.leftArg.set(myNode113);
myNode115.rightArg.set(myNode114);
myNode115.isVisible = false;

/* définition du node n°116*/
const myNode116 = object.addCommonOperation();
myNode116.leftArg.set(myNode112);
myNode116.rightArg.set(myNode115);
myNode116.isVisible = false;

/* définition du node n°117*/
const myNode117 = object.addFuseOperation();
myNode117.leftArg.set(myNode111);
myNode117.rightArg.set(myNode116);
myNode117.isVisible = false;

/* définition du node n°118*/
const myNode118 = object.addBox();
myNode118.point1.set(-18.0999,-3.10895,-18.0999);
myNode118.point2.set(-4.224000000000002,4.99995,18.099999999999998);
myNode118.innerRotation.center.set(0,0,0);
myNode118.innerRotation.axis.set(0.0,0.0,0.0);
myNode118.innerRotation.angle.set(0.0);
myNode118.innerTranslation.vector.set(-11.161950000000001,0.9455,4.9999999998107114e-05);
myNode118.isVisible = false;

/* définition du node n°119*/
const myNode119 = object.addCylinder();
myNode119.point1.set(-0.885,3.139,-18.0999);
myNode119.point2.set(-0.885,3.139,-2.519000000000002);
myNode119.radius.set(0.282);
myNode119.innerRotation.center.set(0,0,0);
myNode119.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode119.innerRotation.angle.set(1.5707926535897931);
myNode119.isVisible = false;

/* définition du node n°120*/
const myNode120 = object.addCylinder();
myNode120.point1.set(-0.033,-0.227,-4.22295);
myNode120.point2.set(-0.033,-0.227,-4.07105);
myNode120.radius.set(0.263);
myNode120.innerRotation.center.set(0,0,0);
myNode120.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode120.innerRotation.angle.set(1.5707926535897931);
myNode120.isVisible = false;

/* définition du node n°121*/
const myNode121 = object.addBox();
myNode121.point1.set(-4.07195,3.18305,-18.0999);
myNode121.point2.set(-2.51905,18.09995,2.2099999999999973);
myNode121.innerRotation.center.set(0,0,0);
myNode121.innerRotation.axis.set(0.0,0.0,0.0);
myNode121.innerRotation.angle.set(0.0);
myNode121.innerTranslation.vector.set(-3.2955,10.6415,-7.944950000000002);
myNode121.isVisible = false;

/* définition du node n°122*/
const myNode122 = object.addCylinder();
myNode122.point1.set(-0.03,4.317,-4.22295);
myNode122.point2.set(-0.03,4.317,18.09995);
myNode122.radius.set(0.262);
myNode122.innerRotation.center.set(0,0,0);
myNode122.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode122.innerRotation.angle.set(1.5707926535897931);
myNode122.isVisible = false;

/* définition du node n°123*/
const myNode123_1 = myNode118.clone();
myNode123_1.isVisible = false;
const myNode123_2 = object.addFuseOperation();
myNode123_2.leftArg.set(myNode123_1);
myNode123_2.rightArg.set(myNode119);
myNode123_2.isVisible = false;
const myNode123_3 = object.addFuseOperation();
myNode123_3.leftArg.set(myNode123_2);
myNode123_3.rightArg.set(myNode120);
myNode123_3.isVisible = false;
const myNode123_4 = object.addFuseOperation();
myNode123_4.leftArg.set(myNode123_3);
myNode123_4.rightArg.set(myNode121);
myNode123_4.isVisible = false;
const myNode123_5 = object.addFuseOperation();
myNode123_5.leftArg.set(myNode123_4);
myNode123_5.rightArg.set(myNode77);
myNode123_5.isVisible = false;
myNode123 = object.addFuseOperation();
myNode123.leftArg.set(myNode123_5);
myNode123.rightArg.set(myNode122);
myNode123.isVisible = false;
myNode123.isVisible = false;

/* définition du node n°124*/
const myNode124 = object.addCutOperation();
myNode124.leftArg.set(myNode117);
myNode124.rightArg.set(myNode123);
myNode124.isVisible = false;

/* définition du node n°125*/
const myNode125 = object.addBox();
myNode125.point1.set(4.0721,-3.9409,-1.4829);
myNode125.point2.set(4.2238999999999995,-3.1091,-0.00010000000000021103);
myNode125.innerRotation.center.set(0,0,0);
myNode125.innerRotation.axis.set(0.0,0.0,0.0);
myNode125.innerRotation.angle.set(0.0);
myNode125.innerTranslation.vector.set(4.148,-3.525,-0.7415000000000002);
myNode125.isVisible = false;

/* définition du node n°126*/
const myNode126 = object.addCutOperation();
myNode126.leftArg.set(myNode125);
myNode126.rightArg.set(myNode21);
myNode126.isVisible = false;

/* définition du node n°127*/
const myNode127 = object.addCylinder();
myNode127.point1.set(-2.359,3.16,-2.3619);
myNode127.point2.set(-2.359,3.16,-2.0061);
myNode127.radius.set(0.393);
myNode127.innerRotation.center.set(0,0,0);
myNode127.innerRotation.axis.set(0.0,0.0,0.0);
myNode127.innerRotation.angle.set(0.0);
myNode127.isVisible = false;

/* définition du node n°128*/
const myNode128 = object.addBox();
myNode128.point1.set(-18.0999,-18.0999,-2.24795);
myNode128.point2.set(4.071999999999999,18.099999999999998,-2.12005);
myNode128.innerRotation.center.set(0,0,0);
myNode128.innerRotation.axis.set(0.0,0.0,0.0);
myNode128.innerRotation.angle.set(0.0);
myNode128.innerTranslation.vector.set(-7.013950000000001,4.9999999998107114e-05,-2.1839999999999997);
myNode128.isVisible = false;

/* définition du node n°129*/
const myNode129 = object.addCutOperation();
myNode129.leftArg.set(myNode127);
myNode129.rightArg.set(myNode128);
myNode129.isVisible = false;

/* définition du node n°130*/
const myNode130 = object.addBox();
myNode130.point1.set(4.0721,-4.9999,-1.4829);
myNode130.point2.set(4.2238999999999995,-3.9411000000000005,0.5999000000000001);
myNode130.innerRotation.center.set(0,0,0);
myNode130.innerRotation.axis.set(0.0,0.0,0.0);
myNode130.innerRotation.angle.set(0.0);
myNode130.innerTranslation.vector.set(4.148,-4.4705,-0.4415);
myNode130.isVisible = false;

/* définition du node n°131*/
const myNode131 = object.addCylinder();
myNode131.point1.set(2.305,-2.643,-2.3619);
myNode131.point2.set(2.305,-2.643,-2.0061);
myNode131.radius.set(0.394);
myNode131.innerRotation.center.set(0,0,0);
myNode131.innerRotation.axis.set(0.0,0.0,0.0);
myNode131.innerRotation.angle.set(0.0);
myNode131.isVisible = false;

/* définition du node n°132*/
const myNode132 = object.addFuseOperation();
myNode132.leftArg.set(myNode130);
myNode132.rightArg.set(myNode131);
myNode132.isVisible = false;

/* définition du node n°133*/
const myNode133 = object.addCylinder();
myNode133.point1.set(0.724,-4.242,1.04205);
myNode133.point2.set(0.724,-4.242,18.09995);
myNode133.radius.set(0.263);
myNode133.innerRotation.center.set(0,0,0);
myNode133.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode133.innerRotation.angle.set(1.5707926535968346);
myNode133.isVisible = false;

/* définition du node n°134*/
const myNode134 = object.addCylinder();
myNode134.point1.set(2.305,-2.643,-2.24795);
myNode134.point2.set(2.305,-2.643,-2.12005);
myNode134.radius.set(0.394);
myNode134.innerRotation.center.set(0,0,0);
myNode134.innerRotation.axis.set(0.0,0.0,0.0);
myNode134.innerRotation.angle.set(0.0);
myNode134.isVisible = false;

/* définition du node n°135*/
const myNode135 = object.addFuseOperation();
myNode135.leftArg.set(myNode133);
myNode135.rightArg.set(myNode134);
myNode135.isVisible = false;

/* définition du node n°136*/
const myNode136 = object.addCutOperation();
myNode136.leftArg.set(myNode132);
myNode136.rightArg.set(myNode135);
myNode136.isVisible = false;

/* définition du node n°137*/
const myNode137 = object.addCylinder();
myNode137.point1.set(2.308,3.161,-2.3619);
myNode137.point2.set(2.308,3.161,-2.2481);
myNode137.radius.set(0.397);
myNode137.innerRotation.center.set(0,0,0);
myNode137.innerRotation.axis.set(0.0,0.0,0.0);
myNode137.innerRotation.angle.set(0.0);
myNode137.isVisible = false;

/* définition du node n°138*/
const myNode138 = object.addCylinder();
myNode138.point1.set(2.308,3.161,-2.1189);
myNode138.point2.set(2.308,3.161,-2.0051);
myNode138.radius.set(0.397);
myNode138.innerRotation.center.set(0,0,0);
myNode138.innerRotation.axis.set(0.0,0.0,0.0);
myNode138.innerRotation.angle.set(0.0);
myNode138.isVisible = false;

/* définition du node n°139*/
const myNode139 = object.addCylinder();
myNode139.point1.set(2.307,3.157,-2.2479);
myNode139.point2.set(2.307,3.157,18.0989);
myNode139.radius.set(0.247);
myNode139.innerRotation.center.set(0,0,0);
myNode139.innerRotation.axis.set(0.0,0.0,0.0);
myNode139.innerRotation.angle.set(0.0);
myNode139.isVisible = false;

/* définition du node n°140*/
const myNode140_1 = myNode137.clone();
myNode140_1.isVisible = false;
const myNode140_2 = object.addFuseOperation();
myNode140_2.leftArg.set(myNode140_1);
myNode140_2.rightArg.set(myNode138);
myNode140_2.isVisible = false;
myNode140 = object.addFuseOperation();
myNode140.leftArg.set(myNode140_2);
myNode140.rightArg.set(myNode139);
myNode140.isVisible = false;
myNode140.isVisible = false;

/* définition du node n°141*/
const myNode141 = object.addBox();
myNode141.point1.set(-18.0999,-3.1089,-2.3619);
myNode141.point2.set(18.0999,18.099899999999998,-1.4830999999999999);
myNode141.innerRotation.center.set(0,0,0);
myNode141.innerRotation.axis.set(0.0,0.0,0.0);
myNode141.innerRotation.angle.set(0.0);
myNode141.innerTranslation.vector.set(0.0,7.4955,-1.9224999999999999);
myNode141.isVisible = false;

/* définition du node n°142*/
const myNode142 = object.addCommonOperation();
myNode142.leftArg.set(myNode140);
myNode142.rightArg.set(myNode141);
myNode142.isVisible = false;

/* définition du node n°143*/
const myNode143 = object.addCylinder();
myNode143.point1.set(-2.36,3.161,-2.3619);
myNode143.point2.set(-2.36,3.161,-1.4830999999999999);
myNode143.radius.set(0.246);
myNode143.innerRotation.center.set(0,0,0);
myNode143.innerRotation.axis.set(0.0,0.0,0.0);
myNode143.innerRotation.angle.set(0.0);
myNode143.isVisible = false;

/* définition du node n°144*/
const myNode144 = object.addBox();
myNode144.point1.set(4.0721,3.1831,-1.4829);
myNode144.point2.set(4.2238999999999995,4.9999,1.1689);
myNode144.innerRotation.center.set(0,0,0);
myNode144.innerRotation.axis.set(0.0,0.0,0.0);
myNode144.innerRotation.angle.set(0.0);
myNode144.innerTranslation.vector.set(4.148,4.0915,-0.15700000000000003);
myNode144.isVisible = false;

/* définition du node n°145*/
const myNode145 = object.addCylinder();
myNode145.point1.set(-0.885,3.139,-18.0999);
myNode145.point2.set(-0.885,3.139,18.099999999999998);
myNode145.radius.set(0.282);
myNode145.innerRotation.center.set(0,0,0);
myNode145.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode145.innerRotation.angle.set(1.5707926535897931);
myNode145.isVisible = false;

/* définition du node n°146*/
const myNode146 = object.addCutOperation();
myNode146.leftArg.set(myNode144);
myNode146.rightArg.set(myNode145);
myNode146.isVisible = false;

/* définition du node n°147*/
const myNode147 = object.addCylinder();
myNode147.point1.set(-0.03,4.317,-18.0999);
myNode147.point2.set(-0.03,4.317,18.099999999999998);
myNode147.radius.set(0.262);
myNode147.innerRotation.center.set(0,0,0);
myNode147.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode147.innerRotation.angle.set(1.5707926535897931);
myNode147.isVisible = false;

/* définition du node n°148*/
const myNode148 = object.addCutOperation();
myNode148.leftArg.set(myNode146);
myNode148.rightArg.set(myNode147);
myNode148.isVisible = false;

/* définition du node n°149*/
const myNode149 = object.addCylinder();
myNode149.point1.set(-0.039,3.183,-18.0999);
myNode149.point2.set(-0.039,3.183,18.099999999999998);
myNode149.radius.set(0.262);
myNode149.innerRotation.center.set(0,0,0);
myNode149.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode149.innerRotation.angle.set(1.5707926535897931);
myNode149.isVisible = false;

/* définition du node n°150*/
const myNode150 = object.addCylinder();
myNode150.point1.set(0.725,3.714,4.07205);
myNode150.point2.set(0.725,3.714,18.09995);
myNode150.radius.set(0.262);
myNode150.innerRotation.center.set(0,0,0);
myNode150.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode150.innerRotation.angle.set(1.5707926535897931);
myNode150.isVisible = false;

/* définition du node n°151*/
const myNode151 = object.addBox();
myNode151.point1.set(-18.0999,-18.0999,-2.24795);
myNode151.point2.set(4.071999999999999,18.099999999999998,18.098950000000002);
myNode151.innerRotation.center.set(0,0,0);
myNode151.innerRotation.axis.set(0.0,0.0,0.0);
myNode151.innerRotation.angle.set(0.0);
myNode151.innerTranslation.vector.set(-7.013950000000001,4.9999999998107114e-05,7.925500000000001);
myNode151.isVisible = false;

/* définition du node n°152*/
const myNode152_1 = myNode149.clone();
myNode152_1.isVisible = false;
const myNode152_2 = object.addFuseOperation();
myNode152_2.leftArg.set(myNode152_1);
myNode152_2.rightArg.set(myNode150);
myNode152_2.isVisible = false;
myNode152 = object.addFuseOperation();
myNode152.leftArg.set(myNode152_2);
myNode152.rightArg.set(myNode151);
myNode152.isVisible = false;
myNode152.isVisible = false;

/* définition du node n°153*/
const myNode153 = object.addCutOperation();
myNode153.leftArg.set(myNode148);
myNode153.rightArg.set(myNode152);
myNode153.isVisible = false;

/* définition du node n°154*/
const myNode154 = object.addCylinder();
myNode154.point1.set(2.306,-2.642,-2.2479);
myNode154.point2.set(2.306,-2.642,-1.4830999999999999);
myNode154.radius.set(0.247);
myNode154.innerRotation.center.set(0,0,0);
myNode154.innerRotation.axis.set(0.0,0.0,0.0);
myNode154.innerRotation.angle.set(0.0);
myNode154.isVisible = false;

/* définition du node n°155*/
const myNode155 = object.addBox();
myNode155.point1.set(4.0721,-4.9999,2.2101);
myNode155.point2.set(4.2238999999999995,-3.1091,2.3619000000000003);
myNode155.innerRotation.center.set(0,0,0);
myNode155.innerRotation.axis.set(0.0,0.0,0.0);
myNode155.innerRotation.angle.set(0.0);
myNode155.innerTranslation.vector.set(4.148,-4.0545,2.286);
myNode155.isVisible = false;

/* définition du node n°156*/
const myNode156 = object.addBox();
myNode156.point1.set(4.0721,-3.9409,0.0331);
myNode156.point2.set(4.2238999999999995,-3.1091,0.5999);
myNode156.innerRotation.center.set(0,0,0);
myNode156.innerRotation.axis.set(0.0,0.0,0.0);
myNode156.innerRotation.angle.set(0.0);
myNode156.innerTranslation.vector.set(4.148,-3.525,0.3165);
myNode156.isVisible = false;

/* définition du node n°157*/
const myNode157 = object.addBox();
myNode157.point1.set(1.0421,-3.1089,2.2101);
myNode157.point2.set(4.071899999999999,4.9999,2.3619000000000003);
myNode157.innerRotation.center.set(0,0,0);
myNode157.innerRotation.axis.set(0.0,0.0,0.0);
myNode157.innerRotation.angle.set(0.0);
myNode157.innerTranslation.vector.set(2.557,0.9455,2.286);
myNode157.isVisible = false;

/* définition du node n°158*/
const myNode158 = object.addBox();
myNode158.point1.set(-4.2229,-4.9999,2.2101);
myNode158.point2.set(4.0719,3.1829,2.3619000000000003);
myNode158.innerRotation.center.set(0,0,0);
myNode158.innerRotation.axis.set(0.0,0.0,0.0);
myNode158.innerRotation.angle.set(0.0);
myNode158.innerTranslation.vector.set(-0.0754999999999999,-0.9085000000000001,2.286);
myNode158.isVisible = false;

/* définition du node n°159*/
const myNode159 = object.addBox();
myNode159.point1.set(-4.2229,-4.9999,0.0331);
myNode159.point2.set(-4.0711,3.1829,0.5999);
myNode159.innerRotation.center.set(0,0,0);
myNode159.innerRotation.axis.set(0.0,0.0,0.0);
myNode159.innerRotation.angle.set(0.0);
myNode159.innerTranslation.vector.set(-4.147,-0.9085000000000001,0.3165);
myNode159.isVisible = false;

/* définition du node n°160*/
const myNode160 = object.addCylinder();
myNode160.point1.set(-0.033,-0.227,-18.0999);
myNode160.point2.set(-0.033,-0.227,-4.072000000000001);
myNode160.radius.set(0.263);
myNode160.innerRotation.center.set(0,0,0);
myNode160.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode160.innerRotation.angle.set(1.5707926535897931);
myNode160.isVisible = false;

/* définition du node n°161*/
const myNode161 = object.addCutOperation();
myNode161.leftArg.set(myNode159);
myNode161.rightArg.set(myNode160);
myNode161.isVisible = false;

/* définition du node n°162*/
const myNode162 = object.addCylinder();
myNode162.point1.set(-0.039,3.183,-18.0999);
myNode162.point2.set(-0.039,3.183,1.041999999999998);
myNode162.radius.set(0.262);
myNode162.innerRotation.center.set(0,0,0);
myNode162.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode162.innerRotation.angle.set(1.5707926535897931);
myNode162.isVisible = false;

/* définition du node n°163*/
const myNode163 = object.addCylinder();
myNode163.point1.set(-0.033,2.044,-18.0999);
myNode163.point2.set(-0.033,2.044,-2.519000000000002);
myNode163.radius.set(0.264);
myNode163.innerRotation.center.set(0,0,0);
myNode163.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode163.innerRotation.angle.set(1.5707926535897931);
myNode163.isVisible = false;

/* définition du node n°164*/
const myNode164 = object.addFuseOperation();
myNode164.leftArg.set(myNode162);
myNode164.rightArg.set(myNode163);
myNode164.isVisible = false;

/* définition du node n°165*/
const myNode165 = object.addCutOperation();
myNode165.leftArg.set(myNode161);
myNode165.rightArg.set(myNode164);
myNode165.isVisible = false;

/* définition du node n°166*/
const myNode166_1 = myNode63.clone();
myNode166_1.isVisible = false;
const myNode166_2 = object.addFuseOperation();
myNode166_2.leftArg.set(myNode166_1);
myNode166_2.rightArg.set(myNode94);
myNode166_2.isVisible = false;
myNode166 = object.addFuseOperation();
myNode166.leftArg.set(myNode166_2);
myNode166.rightArg.set(myNode85);
myNode166.isVisible = false;
myNode166.isVisible = false;

/* définition du node n°167*/
const myNode167 = object.addCutOperation();
myNode167.leftArg.set(myNode165);
myNode167.rightArg.set(myNode166);
myNode167.isVisible = false;

/* définition du node n°168*/
const myNode168 = object.addCylinder();
myNode168.point1.set(-2.358,-2.644,-2.2479);
myNode168.point2.set(-2.358,-2.644,-1.4830999999999999);
myNode168.radius.set(0.246);
myNode168.innerRotation.center.set(0,0,0);
myNode168.innerRotation.axis.set(0.0,0.0,0.0);
myNode168.innerRotation.angle.set(0.0);
myNode168.isVisible = false;

/* définition du node n°169*/
const myNode169 = object.addBox();
myNode169.point1.set(4.0721,-4.9999,1.1691);
myNode169.point2.set(4.2238999999999995,-3.1091,2.2109);
myNode169.innerRotation.center.set(0,0,0);
myNode169.innerRotation.axis.set(0.0,0.0,0.0);
myNode169.innerRotation.angle.set(0.0);
myNode169.innerTranslation.vector.set(4.148,-4.0545,1.69);
myNode169.isVisible = false;

/* définition du node n°170*/
const myNode170 = object.addBox();
myNode170.point1.set(1.0421,-4.9999,-1.4829);
myNode170.point2.set(4.2239,-3.1091,-1.3311000000000002);
myNode170.innerRotation.center.set(0,0,0);
myNode170.innerRotation.axis.set(0.0,0.0,0.0);
myNode170.innerRotation.angle.set(0.0);
myNode170.innerTranslation.vector.set(2.633,-4.0545,-1.407);
myNode170.isVisible = false;

/* définition du node n°171*/
const myNode171 = object.addFuseOperation();
myNode171.leftArg.set(myNode169);
myNode171.rightArg.set(myNode170);
myNode171.isVisible = false;

/* définition du node n°172*/
const myNode172 = object.addCylinder();
myNode172.point1.set(-1.737,-3.941,1.04205);
myNode172.point2.set(-1.737,-3.941,4.22395);
myNode172.radius.set(0.263);
myNode172.innerRotation.center.set(0,0,0);
myNode172.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode172.innerRotation.angle.set(1.5707926535897931);
myNode172.isVisible = false;

/* définition du node n°173*/
const myNode173 = object.addCutOperation();
myNode173.leftArg.set(myNode171);
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
myNode174_3.rightArg.set(myNode9);
myNode174_3.isVisible = false;
const myNode174_4 = object.addFuseOperation();
myNode174_4.leftArg.set(myNode174_3);
myNode174_4.rightArg.set(myNode36);
myNode174_4.isVisible = false;
const myNode174_5 = object.addFuseOperation();
myNode174_5.leftArg.set(myNode174_4);
myNode174_5.rightArg.set(myNode48);
myNode174_5.isVisible = false;
const myNode174_6 = object.addFuseOperation();
myNode174_6.leftArg.set(myNode174_5);
myNode174_6.rightArg.set(myNode59);
myNode174_6.isVisible = false;
const myNode174_7 = object.addFuseOperation();
myNode174_7.leftArg.set(myNode174_6);
myNode174_7.rightArg.set(myNode80);
myNode174_7.isVisible = false;
const myNode174_8 = object.addFuseOperation();
myNode174_8.leftArg.set(myNode174_7);
myNode174_8.rightArg.set(myNode81);
myNode174_8.isVisible = false;
const myNode174_9 = object.addFuseOperation();
myNode174_9.leftArg.set(myNode174_8);
myNode174_9.rightArg.set(myNode106);
myNode174_9.isVisible = false;
const myNode174_10 = object.addFuseOperation();
myNode174_10.leftArg.set(myNode174_9);
myNode174_10.rightArg.set(myNode124);
myNode174_10.isVisible = false;
const myNode174_11 = object.addFuseOperation();
myNode174_11.leftArg.set(myNode174_10);
myNode174_11.rightArg.set(myNode126);
myNode174_11.isVisible = false;
const myNode174_12 = object.addFuseOperation();
myNode174_12.leftArg.set(myNode174_11);
myNode174_12.rightArg.set(myNode129);
myNode174_12.isVisible = false;
const myNode174_13 = object.addFuseOperation();
myNode174_13.leftArg.set(myNode174_12);
myNode174_13.rightArg.set(myNode136);
myNode174_13.isVisible = false;
const myNode174_14 = object.addFuseOperation();
myNode174_14.leftArg.set(myNode174_13);
myNode174_14.rightArg.set(myNode142);
myNode174_14.isVisible = false;
const myNode174_15 = object.addFuseOperation();
myNode174_15.leftArg.set(myNode174_14);
myNode174_15.rightArg.set(myNode143);
myNode174_15.isVisible = false;
const myNode174_16 = object.addFuseOperation();
myNode174_16.leftArg.set(myNode174_15);
myNode174_16.rightArg.set(myNode153);
myNode174_16.isVisible = false;
const myNode174_17 = object.addFuseOperation();
myNode174_17.leftArg.set(myNode174_16);
myNode174_17.rightArg.set(myNode154);
myNode174_17.isVisible = false;
const myNode174_18 = object.addFuseOperation();
myNode174_18.leftArg.set(myNode174_17);
myNode174_18.rightArg.set(myNode155);
myNode174_18.isVisible = false;
const myNode174_19 = object.addFuseOperation();
myNode174_19.leftArg.set(myNode174_18);
myNode174_19.rightArg.set(myNode156);
myNode174_19.isVisible = false;
const myNode174_20 = object.addFuseOperation();
myNode174_20.leftArg.set(myNode174_19);
myNode174_20.rightArg.set(myNode157);
myNode174_20.isVisible = false;
const myNode174_21 = object.addFuseOperation();
myNode174_21.leftArg.set(myNode174_20);
myNode174_21.rightArg.set(myNode158);
myNode174_21.isVisible = false;
const myNode174_22 = object.addFuseOperation();
myNode174_22.leftArg.set(myNode174_21);
myNode174_22.rightArg.set(myNode167);
myNode174_22.isVisible = false;
const myNode174_23 = object.addFuseOperation();
myNode174_23.leftArg.set(myNode174_22);
myNode174_23.rightArg.set(myNode168);
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