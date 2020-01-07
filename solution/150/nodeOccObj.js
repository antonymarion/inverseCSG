/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(4.0721,3.1831,-1.4829);
myNode0.point2.set(4.2238999999999995,4.9999,1.1689);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.isVisible = False

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(-0.885,3.139,-18.0999);
myNode1.point2.set(-0.885,3.139,18.099999999999998);
myNode1.radius.set(0.282);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode1.innerRotation.angle.set(1.5707926535897931);
myNode1.isVisible = False

/* définition du node n°2*/
const myNode2 = object.addCutOperation();
myNode2.leftArg.set(myNode0);
myNode2.rightArg.set(myNode1);
myNode2.isVisible = False

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(-0.03,4.317,-18.0999);
myNode3.point2.set(-0.03,4.317,18.099999999999998);
myNode3.radius.set(0.262);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode3.innerRotation.angle.set(1.5707926535897931);
myNode3.isVisible = False

/* définition du node n°4*/
const myNode4 = object.addCutOperation();
myNode4.leftArg.set(myNode2);
myNode4.rightArg.set(myNode3);
myNode4.isVisible = False

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(0.725,3.714,4.07205);
myNode5.point2.set(0.725,3.714,18.09995);
myNode5.radius.set(0.262);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode5.innerRotation.angle.set(1.5707926535897931);
myNode5.isVisible = False

/* définition du node n°6*/
const myNode6 = object.addCylinder();
myNode6.point1.set(-0.039,3.183,-18.0999);
myNode6.point2.set(-0.039,3.183,18.099999999999998);
myNode6.radius.set(0.262);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode6.innerRotation.angle.set(1.5707926535897931);
myNode6.isVisible = False

/* définition du node n°7*/
const myNode7 = object.addBox();
myNode7.point1.set(-18.0999,-18.0999,-2.24795);
myNode7.point2.set(4.071999999999999,18.099999999999998,18.098950000000002);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);
myNode7.isVisible = False

/* définition du node n°8*/
const myNode8_1 = object.addFuseOperation();
myNode8_1.leftArg.set(myNode5);
myNode8_1.rightArg.set(myNode5);
const myNode8_2 = object.addFuseOperation();
myNode8_2.leftArg.set(myNode8_1);
myNode8_2.rightArg.set(myNode6);
myNode8 = object.addFuseOperation();
myNode8.leftArg.set(myNode8_2);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = False

/* définition du node n°9*/
const myNode9 = object.addCutOperation();
myNode9.leftArg.set(myNode4);
myNode9.rightArg.set(myNode8);
myNode9.isVisible = False

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(-2.5189,-4.9999,-2.2479);
myNode10.point2.set(1.0419,-4.8481000000000005,-1.3321);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.isVisible = False

/* définition du node n°11*/
const myNode11 = object.addCylinder();
myNode11.point1.set(-2.362,-2.646,-2.3619);
myNode11.point2.set(-2.362,-2.646,-2.0061);
myNode11.radius.set(0.393);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);
myNode11.isVisible = False

/* définition du node n°12*/
const myNode12 = object.addFuseOperation();
myNode12.leftArg.set(myNode10);
myNode12.rightArg.set(myNode11);
myNode12.isVisible = False

/* définition du node n°13*/
const myNode13 = object.addBox();
myNode13.point1.set(-4.07195,-4.84795,-2.24795);
myNode13.point2.set(1.04195,18.09995,-2.12005);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);
myNode13.isVisible = False

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(1.858,-0.662,-4.99995);
myNode14.point2.set(1.858,-0.662,3.18295);
myNode14.radius.set(0.116);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode14.innerRotation.angle.set(2.094392392986396);
myNode14.isVisible = False

/* définition du node n°15*/
const myNode15 = object.addFuseOperation();
myNode15.leftArg.set(myNode13);
myNode15.rightArg.set(myNode14);
myNode15.isVisible = False

/* définition du node n°16*/
const myNode16 = object.addCutOperation();
myNode16.leftArg.set(myNode12);
myNode16.rightArg.set(myNode15);
myNode16.isVisible = False

/* définition du node n°17*/
const myNode17 = object.addCylinder();
myNode17.point1.set(-2.36,3.161,-2.3619);
myNode17.point2.set(-2.36,3.161,-1.4830999999999999);
myNode17.radius.set(0.246);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.isVisible = False

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(2.306,-2.642,-2.2479);
myNode18.point2.set(2.306,-2.642,-1.4830999999999999);
myNode18.radius.set(0.247);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);
myNode18.isVisible = False

/* définition du node n°19*/
const myNode19 = object.addBox();
myNode19.point1.set(4.0721,-4.9999,2.2101);
myNode19.point2.set(4.2238999999999995,-3.1091,2.3619000000000003);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(0.0,0.0,0.0);
myNode19.innerRotation.angle.set(0.0);
myNode19.isVisible = False

/* définition du node n°20*/
const myNode20 = object.addSphere();
myNode20.center.set(0,0,0);
myNode20.radius.set(54.29981583762508);
myNode20.isVisible = False

/* définition du node n°21*/
const myNode21 = object.addCylinder();
myNode21.point1.set(-0.033,-0.227,-18.0999);
myNode21.point2.set(-0.033,-0.227,18.099999999999998);
myNode21.radius.set(0.263);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode21.innerRotation.angle.set(1.5707926535897931);
myNode21.isVisible = False

/* définition du node n°22*/
const myNode22 = object.addCutOperation();
myNode22.leftArg.set(myNode20);
myNode22.rightArg.set(myNode21);
myNode22.isVisible = False

/* définition du node n°23*/
const myNode23 = object.addCylinder();
myNode23.point1.set(0.725,2.578,-18.0999);
myNode23.point2.set(0.725,2.578,18.099999999999998);
myNode23.radius.set(0.263);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode23.innerRotation.angle.set(1.5707926535897931);
myNode23.isVisible = False

/* définition du node n°24*/
const myNode24 = object.addCylinder();
myNode24.point1.set(0.727,-3.109,-18.0999);
myNode24.point2.set(0.727,-3.109,18.099999999999998);
myNode24.radius.set(0.263);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode24.innerRotation.angle.set(1.5707999999999998);
myNode24.isVisible = False

/* définition du node n°25*/
const myNode25 = object.addFuseOperation();
myNode25.leftArg.set(myNode23);
myNode25.rightArg.set(myNode24);
myNode25.isVisible = False

/* définition du node n°26*/
const myNode26 = object.addCutOperation();
myNode26.leftArg.set(myNode22);
myNode26.rightArg.set(myNode25);
myNode26.isVisible = False

/* définition du node n°27*/
const myNode27 = object.addCylinder();
myNode27.point1.set(-0.032,-2.501,4.07205);
myNode27.point2.set(-0.032,-2.501,18.09995);
myNode27.radius.set(0.262);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode27.innerRotation.angle.set(1.5707926535897931);
myNode27.isVisible = False

/* définition du node n°28*/
const myNode28 = object.addCylinder();
myNode28.point1.set(-0.028,0.91,-18.0999);
myNode28.point2.set(-0.028,0.91,18.099999999999998);
myNode28.radius.set(0.264);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode28.innerRotation.angle.set(1.5707926535897931);
myNode28.isVisible = False

/* définition du node n°29*/
const myNode29 = object.addCylinder();
myNode29.point1.set(-0.033,2.044,-18.0999);
myNode29.point2.set(-0.033,2.044,18.099999999999998);
myNode29.radius.set(0.264);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode29.innerRotation.angle.set(1.5707926535897931);
myNode29.isVisible = False

/* définition du node n°30*/
const myNode30 = object.addCylinder();
myNode30.point1.set(0.724,0.302,-18.0999);
myNode30.point2.set(0.724,0.302,18.099999999999998);
myNode30.radius.set(0.265);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode30.innerRotation.angle.set(1.5707926535897931);
myNode30.isVisible = False

/* définition du node n°31*/
const myNode31_1 = object.addFuseOperation();
myNode31_1.leftArg.set(myNode27);
myNode31_1.rightArg.set(myNode27);
const myNode31_2 = object.addFuseOperation();
myNode31_2.leftArg.set(myNode31_1);
myNode31_2.rightArg.set(myNode28);
const myNode31_3 = object.addFuseOperation();
myNode31_3.leftArg.set(myNode31_2);
myNode31_3.rightArg.set(myNode29);
myNode31 = object.addFuseOperation();
myNode31.leftArg.set(myNode31_3);
myNode31.rightArg.set(myNode30);
myNode31.isVisible = False

/* définition du node n°32*/
const myNode32 = object.addCutOperation();
myNode32.leftArg.set(myNode26);
myNode32.rightArg.set(myNode31);
myNode32.isVisible = False

/* définition du node n°33*/
const myNode33 = object.addCylinder();
myNode33.point1.set(-0.039,3.183,-18.0999);
myNode33.point2.set(-0.039,3.183,4.222999999999999);
myNode33.radius.set(0.262);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode33.innerRotation.angle.set(1.5707926535897931);
myNode33.isVisible = False

/* définition du node n°34*/
const myNode34 = object.addCutOperation();
myNode34.leftArg.set(myNode20);
myNode34.rightArg.set(myNode33);
myNode34.isVisible = False

/* définition du node n°35*/
const myNode35 = object.addBox();
myNode35.point1.set(-18.0999,-3.10895,-18.0999);
myNode35.point2.set(18.099999999999998,3.18295,-1.4830000000000005);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,0.0);
myNode35.innerRotation.angle.set(0.0);
myNode35.isVisible = False

/* définition du node n°36*/
const myNode36 = object.addCylinder();
myNode36.point1.set(0.726,-0.834,-18.0999);
myNode36.point2.set(0.726,-0.834,4.222999999999999);
myNode36.radius.set(0.263);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode36.innerRotation.angle.set(1.5707999999999998);
myNode36.isVisible = False

/* définition du node n°37*/
const myNode37 = object.addFuseOperation();
myNode37.leftArg.set(myNode35);
myNode37.rightArg.set(myNode36);
myNode37.isVisible = False

/* définition du node n°38*/
const myNode38 = object.addCutOperation();
myNode38.leftArg.set(myNode34);
myNode38.rightArg.set(myNode37);
myNode38.isVisible = False

/* définition du node n°39*/
const myNode39 = object.addBox();
myNode39.point1.set(4.0721,-3.1089,-18.0999);
myNode39.point2.set(4.2238999999999995,3.1829,0.5998999999999981);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(0.0,0.0,0.0);
myNode39.innerRotation.angle.set(0.0);
myNode39.isVisible = False

/* définition du node n°40*/
const myNode40 = object.addCylinder();
myNode40.point1.set(0.728,-1.971,-18.0999);
myNode40.point2.set(0.728,-1.971,18.099999999999998);
myNode40.radius.set(0.263);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode40.innerRotation.angle.set(1.5707926535897931);
myNode40.isVisible = False

/* définition du node n°41*/
const myNode41 = object.addCutOperation();
myNode41.leftArg.set(myNode39);
myNode41.rightArg.set(myNode40);
myNode41.isVisible = False

/* définition du node n°42*/
const myNode42 = object.addCylinder();
myNode42.point1.set(-0.035,-1.363,-18.0999);
myNode42.point2.set(-0.035,-1.363,4.222999999999999);
myNode42.radius.set(0.266);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode42.innerRotation.angle.set(1.5707926535897931);
myNode42.isVisible = False

/* définition du node n°43*/
const myNode43 = object.addCylinder();
myNode43.point1.set(0.727,1.438,4.07205);
myNode43.point2.set(0.727,1.438,4.22395);
myNode43.radius.set(0.262);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode43.innerRotation.angle.set(1.5707926535897931);
myNode43.isVisible = False

/* définition du node n°44*/
const myNode44 = object.addFuseOperation();
myNode44.leftArg.set(myNode42);
myNode44.rightArg.set(myNode43);
myNode44.isVisible = False

/* définition du node n°45*/
const myNode45 = object.addCutOperation();
myNode45.leftArg.set(myNode41);
myNode45.rightArg.set(myNode44);
myNode45.isVisible = False

/* définition du node n°46*/
const myNode46 = object.addCommonOperation();
myNode46.leftArg.set(myNode32);
myNode46.rightArg.set(myNode38);
myNode46.isVisible = False

/* définition du node n°47*/
const myNode47 = object.addCylinder();
myNode47.point1.set(-0.033,-0.227,-18.0999);
myNode47.point2.set(-0.033,-0.227,-4.224100000000002);
myNode47.radius.set(0.263);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode47.innerRotation.angle.set(1.5707926535897931);
myNode47.isVisible = False

/* définition du node n°48*/
const myNode48 = object.addBox();
myNode48.point1.set(-4.2229,3.1831,0.0331);
myNode48.point2.set(-2.5181,18.0999,18.0999);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);
myNode48.isVisible = False

/* définition du node n°49*/
const myNode49 = object.addCylinder();
myNode49.point1.set(-1.735,4.013,-4.22295);
myNode49.point2.set(-1.735,4.013,18.09995);
myNode49.radius.set(0.261);
myNode49.innerRotation.center.set(0,0,0);
myNode49.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode49.innerRotation.angle.set(1.5707926535897931);
myNode49.isVisible = False

/* définition du node n°50*/
const myNode50 = object.addCutOperation();
myNode50.leftArg.set(myNode48);
myNode50.rightArg.set(myNode49);
myNode50.isVisible = False

/* définition du node n°51*/
const myNode51 = object.addCommonOperation();
myNode51.leftArg.set(myNode47);
myNode51.rightArg.set(myNode50);
myNode51.isVisible = False

/* définition du node n°52*/
const myNode52 = object.addBox();
myNode52.point1.set(-18.0999,3.1831,-1.4829);
myNode52.point2.set(-2.5191000000000017,4.9999,2.3619000000000003);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,0.0,0.0);
myNode52.innerRotation.angle.set(0.0);
myNode52.isVisible = False

/* définition du node n°53*/
const myNode53 = object.addCylinder();
myNode53.point1.set(-1.735,4.013,-4.22295);
myNode53.point2.set(-1.735,4.013,-4.07105);
myNode53.radius.set(0.261);
myNode53.innerRotation.center.set(0,0,0);
myNode53.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode53.innerRotation.angle.set(1.5707926535897931);
myNode53.isVisible = False

/* définition du node n°54*/
const myNode54 = object.addCylinder();
myNode54.point1.set(0.725,3.714,-18.0999);
myNode54.point2.set(0.725,3.714,-2.519000000000002);
myNode54.radius.set(0.262);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode54.innerRotation.angle.set(1.5707926535897931);
myNode54.isVisible = False

/* définition du node n°55*/
const myNode55 = object.addFuseOperation();
myNode55.leftArg.set(myNode53);
myNode55.rightArg.set(myNode54);
myNode55.isVisible = False

/* définition du node n°56*/
const myNode56 = object.addCutOperation();
myNode56.leftArg.set(myNode52);
myNode56.rightArg.set(myNode55);
myNode56.isVisible = False

/* définition du node n°57*/
const myNode57 = object.addFuseOperation();
myNode57.leftArg.set(myNode51);
myNode57.rightArg.set(myNode56);
myNode57.isVisible = False

/* définition du node n°58*/
const myNode58 = object.addBox();
myNode58.point1.set(-18.0999,-3.10895,-18.0999);
myNode58.point2.set(-4.224000000000002,4.99995,18.099999999999998);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(0.0,0.0,0.0);
myNode58.innerRotation.angle.set(0.0);
myNode58.isVisible = False

/* définition du node n°59*/
const myNode59 = object.addCylinder();
myNode59.point1.set(-0.885,3.139,-18.0999);
myNode59.point2.set(-0.885,3.139,-2.519000000000002);
myNode59.radius.set(0.282);
myNode59.innerRotation.center.set(0,0,0);
myNode59.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode59.innerRotation.angle.set(1.5707926535897931);
myNode59.isVisible = False

/* définition du node n°60*/
const myNode60 = object.addBox();
myNode60.point1.set(-4.07195,3.18305,-18.0999);
myNode60.point2.set(-2.51905,18.09995,2.2099999999999973);
myNode60.innerRotation.center.set(0,0,0);
myNode60.innerRotation.axis.set(0.0,0.0,0.0);
myNode60.innerRotation.angle.set(0.0);
myNode60.isVisible = False

/* définition du node n°61*/
const myNode61 = object.addCylinder();
myNode61.point1.set(-0.03,4.317,-4.22295);
myNode61.point2.set(-0.03,4.317,18.09995);
myNode61.radius.set(0.262);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode61.innerRotation.angle.set(1.5707926535897931);
myNode61.isVisible = False

/* définition du node n°62*/
const myNode62 = object.addCylinder();
myNode62.point1.set(-0.033,-0.227,-4.22295);
myNode62.point2.set(-0.033,-0.227,-4.07105);
myNode62.radius.set(0.263);
myNode62.innerRotation.center.set(0,0,0);
myNode62.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode62.innerRotation.angle.set(1.5707926535897931);
myNode62.isVisible = False

/* définition du node n°63*/
const myNode63 = object.addCylinder();
myNode63.point1.set(-0.039,3.183,-4.22295);
myNode63.point2.set(-0.039,3.183,18.09995);
myNode63.radius.set(0.262);
myNode63.innerRotation.center.set(0,0,0);
myNode63.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode63.innerRotation.angle.set(1.5707926535897931);
myNode63.isVisible = False

/* définition du node n°64*/
const myNode64_1 = object.addFuseOperation();
myNode64_1.leftArg.set(myNode58);
myNode64_1.rightArg.set(myNode58);
const myNode64_2 = object.addFuseOperation();
myNode64_2.leftArg.set(myNode64_1);
myNode64_2.rightArg.set(myNode59);
const myNode64_3 = object.addFuseOperation();
myNode64_3.leftArg.set(myNode64_2);
myNode64_3.rightArg.set(myNode60);
const myNode64_4 = object.addFuseOperation();
myNode64_4.leftArg.set(myNode64_3);
myNode64_4.rightArg.set(myNode61);
const myNode64_5 = object.addFuseOperation();
myNode64_5.leftArg.set(myNode64_4);
myNode64_5.rightArg.set(myNode62);
myNode64 = object.addFuseOperation();
myNode64.leftArg.set(myNode64_5);
myNode64.rightArg.set(myNode63);
myNode64.isVisible = False

/* définition du node n°65*/
const myNode65 = object.addCutOperation();
myNode65.leftArg.set(myNode57);
myNode65.rightArg.set(myNode64);
myNode65.isVisible = False

/* définition du node n°66*/
const myNode66 = object.addCylinder();
myNode66.point1.set(-2.359,3.16,-2.3619);
myNode66.point2.set(-2.359,3.16,-2.0061);
myNode66.radius.set(0.393);
myNode66.innerRotation.center.set(0,0,0);
myNode66.innerRotation.axis.set(0.0,0.0,0.0);
myNode66.innerRotation.angle.set(0.0);
myNode66.isVisible = False

/* définition du node n°67*/
const myNode67 = object.addBox();
myNode67.point1.set(-18.0999,-18.0999,-2.24795);
myNode67.point2.set(4.071999999999999,18.099999999999998,-2.12005);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(0.0,0.0,0.0);
myNode67.innerRotation.angle.set(0.0);
myNode67.isVisible = False

/* définition du node n°68*/
const myNode68 = object.addCutOperation();
myNode68.leftArg.set(myNode66);
myNode68.rightArg.set(myNode67);
myNode68.isVisible = False

/* définition du node n°69*/
const myNode69 = object.addBox();
myNode69.point1.set(4.0721,-3.9409,0.0331);
myNode69.point2.set(4.2238999999999995,-3.1091,0.5999);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(0.0,0.0,0.0);
myNode69.innerRotation.angle.set(0.0);
myNode69.isVisible = False

/* définition du node n°70*/
const myNode70 = object.addBox();
myNode70.point1.set(1.0421,-3.1089,2.2101);
myNode70.point2.set(4.071899999999999,4.9999,2.3619000000000003);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(0.0,0.0,0.0);
myNode70.innerRotation.angle.set(0.0);
myNode70.isVisible = False

/* définition du node n°71*/
const myNode71 = object.addBox();
myNode71.point1.set(-4.2229,-4.9999,0.0331);
myNode71.point2.set(-4.0711,3.1829,0.5999);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(0.0,0.0,0.0);
myNode71.innerRotation.angle.set(0.0);
myNode71.isVisible = False

/* définition du node n°72*/
const myNode72 = object.addCylinder();
myNode72.point1.set(-0.033,-0.227,-18.0999);
myNode72.point2.set(-0.033,-0.227,-4.072000000000001);
myNode72.radius.set(0.263);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode72.innerRotation.angle.set(1.5707926535897931);
myNode72.isVisible = False

/* définition du node n°73*/
const myNode73 = object.addCutOperation();
myNode73.leftArg.set(myNode71);
myNode73.rightArg.set(myNode72);
myNode73.isVisible = False

/* définition du node n°74*/
const myNode74 = object.addCylinder();
myNode74.point1.set(-0.039,3.183,-18.0999);
myNode74.point2.set(-0.039,3.183,1.041999999999998);
myNode74.radius.set(0.262);
myNode74.innerRotation.center.set(0,0,0);
myNode74.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode74.innerRotation.angle.set(1.5707926535897931);
myNode74.isVisible = False

/* définition du node n°75*/
const myNode75 = object.addCylinder();
myNode75.point1.set(-0.033,2.044,-18.0999);
myNode75.point2.set(-0.033,2.044,-2.519000000000002);
myNode75.radius.set(0.264);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode75.innerRotation.angle.set(1.5707926535897931);
myNode75.isVisible = False

/* définition du node n°76*/
const myNode76 = object.addFuseOperation();
myNode76.leftArg.set(myNode74);
myNode76.rightArg.set(myNode75);
myNode76.isVisible = False

/* définition du node n°77*/
const myNode77 = object.addCutOperation();
myNode77.leftArg.set(myNode73);
myNode77.rightArg.set(myNode76);
myNode77.isVisible = False

/* définition du node n°78*/
const myNode78 = object.addCylinder();
myNode78.point1.set(-0.032,-2.501,-4.22295);
myNode78.point2.set(-0.032,-2.501,18.09995);
myNode78.radius.set(0.262);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode78.innerRotation.angle.set(1.5707926535897931);
myNode78.isVisible = False

/* définition du node n°79*/
const myNode79 = object.addCylinder();
myNode79.point1.set(-0.035,-1.363,-18.0999);
myNode79.point2.set(-0.035,-1.363,18.099999999999998);
myNode79.radius.set(0.266);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode79.innerRotation.angle.set(1.5707926535897931);
myNode79.isVisible = False

/* définition du node n°80*/
const myNode80 = object.addCylinder();
myNode80.point1.set(-0.028,0.91,-18.0999);
myNode80.point2.set(-0.028,0.91,-4.072000000000001);
myNode80.radius.set(0.264);
myNode80.innerRotation.center.set(0,0,0);
myNode80.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode80.innerRotation.angle.set(1.5707926535897931);
myNode80.isVisible = False

/* définition du node n°81*/
const myNode81_1 = object.addFuseOperation();
myNode81_1.leftArg.set(myNode78);
myNode81_1.rightArg.set(myNode78);
const myNode81_2 = object.addFuseOperation();
myNode81_2.leftArg.set(myNode81_1);
myNode81_2.rightArg.set(myNode79);
myNode81 = object.addFuseOperation();
myNode81.leftArg.set(myNode81_2);
myNode81.rightArg.set(myNode80);
myNode81.isVisible = False

/* définition du node n°82*/
const myNode82 = object.addCutOperation();
myNode82.leftArg.set(myNode77);
myNode82.rightArg.set(myNode81);
myNode82.isVisible = False

/* définition du node n°83*/
const myNode83 = object.addBox();
myNode83.point1.set(-4.2229,-4.9999,1.1691);
myNode83.point2.set(-4.0711,3.1829,2.3619000000000003);
myNode83.innerRotation.center.set(0,0,0);
myNode83.innerRotation.axis.set(0.0,0.0,0.0);
myNode83.innerRotation.angle.set(0.0);
myNode83.isVisible = False

/* définition du node n°84*/
const myNode84 = object.addCylinder();
myNode84.point1.set(-1.736,2.879,-4.22295);
myNode84.point2.set(-1.736,2.879,4.07195);
myNode84.radius.set(0.263);
myNode84.innerRotation.center.set(0,0,0);
myNode84.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode84.innerRotation.angle.set(1.5707926535897931);
myNode84.isVisible = False

/* définition du node n°85*/
const myNode85 = object.addCylinder();
myNode85.point1.set(-1.736,1.743,-18.0999);
myNode85.point2.set(-1.736,1.743,18.099999999999998);
myNode85.radius.set(0.263);
myNode85.innerRotation.center.set(0,0,0);
myNode85.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode85.innerRotation.angle.set(1.5707926535897931);
myNode85.isVisible = False

/* définition du node n°86*/
const myNode86 = object.addFuseOperation();
myNode86.leftArg.set(myNode84);
myNode86.rightArg.set(myNode85);
myNode86.isVisible = False

/* définition du node n°87*/
const myNode87 = object.addCutOperation();
myNode87.leftArg.set(myNode83);
myNode87.rightArg.set(myNode86);
myNode87.isVisible = False

/* définition du node n°88*/
const myNode88 = object.addCylinder();
myNode88.point1.set(-1.736,-2.804,-4.22295);
myNode88.point2.set(-1.736,-2.804,18.09995);
myNode88.radius.set(0.263);
myNode88.innerRotation.center.set(0,0,0);
myNode88.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode88.innerRotation.angle.set(1.5707926535897931);
myNode88.isVisible = False

/* définition du node n°89*/
const myNode89 = object.addCylinder();
myNode89.point1.set(-1.74,-0.526,-18.0999);
myNode89.point2.set(-1.74,-0.526,-4.072000000000001);
myNode89.radius.set(0.265);
myNode89.innerRotation.center.set(0,0,0);
myNode89.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode89.innerRotation.angle.set(1.5707926535897931);
myNode89.isVisible = False

/* définition du node n°90*/
const myNode90 = object.addCylinder();
myNode90.point1.set(-1.736,-1.668,-18.0999);
myNode90.point2.set(-1.736,-1.668,18.099999999999998);
myNode90.radius.set(0.263);
myNode90.innerRotation.center.set(0,0,0);
myNode90.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode90.innerRotation.angle.set(1.5707926535897931);
myNode90.isVisible = False

/* définition du node n°91*/
const myNode91 = object.addCylinder();
myNode91.point1.set(-1.735,0.606,-18.0999);
myNode91.point2.set(-1.735,0.606,18.099999999999998);
myNode91.radius.set(0.262);
myNode91.innerRotation.center.set(0,0,0);
myNode91.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode91.innerRotation.angle.set(1.5707926535897931);
myNode91.isVisible = False

/* définition du node n°92*/
const myNode92_1 = object.addFuseOperation();
myNode92_1.leftArg.set(myNode88);
myNode92_1.rightArg.set(myNode88);
const myNode92_2 = object.addFuseOperation();
myNode92_2.leftArg.set(myNode92_1);
myNode92_2.rightArg.set(myNode89);
const myNode92_3 = object.addFuseOperation();
myNode92_3.leftArg.set(myNode92_2);
myNode92_3.rightArg.set(myNode90);
myNode92 = object.addFuseOperation();
myNode92.leftArg.set(myNode92_3);
myNode92.rightArg.set(myNode91);
myNode92.isVisible = False

/* définition du node n°93*/
const myNode93 = object.addCutOperation();
myNode93.leftArg.set(myNode87);
myNode93.rightArg.set(myNode92);
myNode93.isVisible = False

/* définition du node n°94*/
const myNode94 = object.addCylinder();
myNode94.point1.set(-1.737,-3.941,-18.0999);
myNode94.point2.set(-1.737,-3.941,18.099999999999998);
myNode94.radius.set(0.263);
myNode94.innerRotation.center.set(0,0,0);
myNode94.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode94.innerRotation.angle.set(1.5707926535897931);
myNode94.isVisible = False

/* définition du node n°95*/
const myNode95 = object.addCutOperation();
myNode95.leftArg.set(myNode93);
myNode95.rightArg.set(myNode94);
myNode95.isVisible = False

/* définition du node n°96*/
const myNode96 = object.addBox();
myNode96.point1.set(4.0721,-4.9999,1.1691);
myNode96.point2.set(4.2238999999999995,-3.1091,2.2109);
myNode96.innerRotation.center.set(0,0,0);
myNode96.innerRotation.axis.set(0.0,0.0,0.0);
myNode96.innerRotation.angle.set(0.0);
myNode96.isVisible = False

/* définition du node n°97*/
const myNode97 = object.addBox();
myNode97.point1.set(1.0421,-4.9999,-1.4829);
myNode97.point2.set(4.2239,-3.1091,-1.3311000000000002);
myNode97.innerRotation.center.set(0,0,0);
myNode97.innerRotation.axis.set(0.0,0.0,0.0);
myNode97.innerRotation.angle.set(0.0);
myNode97.isVisible = False

/* définition du node n°98*/
const myNode98 = object.addFuseOperation();
myNode98.leftArg.set(myNode96);
myNode98.rightArg.set(myNode97);
myNode98.isVisible = False

/* définition du node n°99*/
const myNode99 = object.addCylinder();
myNode99.point1.set(-1.737,-3.941,1.04205);
myNode99.point2.set(-1.737,-3.941,4.22395);
myNode99.radius.set(0.263);
myNode99.innerRotation.center.set(0,0,0);
myNode99.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode99.innerRotation.angle.set(1.5707926535897931);
myNode99.isVisible = False

/* définition du node n°100*/
const myNode100 = object.addCutOperation();
myNode100.leftArg.set(myNode98);
myNode100.rightArg.set(myNode99);
myNode100.isVisible = False

/* définition du node n°101*/
const myNode101 = object.addBox();
myNode101.point1.set(-4.2229,-4.9999,2.2101);
myNode101.point2.set(4.0719,3.1829,2.3619000000000003);
myNode101.innerRotation.center.set(0,0,0);
myNode101.innerRotation.axis.set(0.0,0.0,0.0);
myNode101.innerRotation.angle.set(0.0);
myNode101.isVisible = False

/* définition du node n°102*/
const myNode102 = object.addBox();
myNode102.point1.set(-4.2229,-4.9999,-1.4829);
myNode102.point2.set(-4.0711,3.1829,0.03289999999999993);
myNode102.innerRotation.center.set(0,0,0);
myNode102.innerRotation.axis.set(0.0,0.0,0.0);
myNode102.innerRotation.angle.set(0.0);
myNode102.isVisible = False

/* définition du node n°103*/
const myNode103 = object.addCutOperation();
myNode103.leftArg.set(myNode102);
myNode103.rightArg.set(myNode79);
myNode103.isVisible = False

/* définition du node n°104*/
const myNode104 = object.addCylinder();
myNode104.point1.set(-0.033,-0.227,-4.22295);
myNode104.point2.set(-0.033,-0.227,18.09995);
myNode104.radius.set(0.263);
myNode104.innerRotation.center.set(0,0,0);
myNode104.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode104.innerRotation.angle.set(1.5707926535897931);
myNode104.isVisible = False

/* définition du node n°105*/
const myNode105 = object.addCylinder();
myNode105.point1.set(-0.033,2.044,-4.22295);
myNode105.point2.set(-0.033,2.044,18.09995);
myNode105.radius.set(0.264);
myNode105.innerRotation.center.set(0,0,0);
myNode105.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode105.innerRotation.angle.set(1.5707926535897931);
myNode105.isVisible = False

/* définition du node n°106*/
const myNode106 = object.addFuseOperation();
myNode106.leftArg.set(myNode104);
myNode106.rightArg.set(myNode105);
myNode106.isVisible = False

/* définition du node n°107*/
const myNode107 = object.addCutOperation();
myNode107.leftArg.set(myNode103);
myNode107.rightArg.set(myNode106);
myNode107.isVisible = False

/* définition du node n°108*/
const myNode108 = object.addBox();
myNode108.point1.set(-4.2229,-4.9999,-2.3619);
myNode108.point2.set(-4.0711,3.1829,-9.999999999976694e-05);
myNode108.innerRotation.center.set(0,0,0);
myNode108.innerRotation.axis.set(0.0,0.0,0.0);
myNode108.innerRotation.angle.set(0.0);
myNode108.isVisible = False

/* définition du node n°109*/
const myNode109 = object.addCylinder();
myNode109.point1.set(0.724,0.302,-18.0999);
myNode109.point2.set(0.724,0.302,-4.072000000000001);
myNode109.radius.set(0.265);
myNode109.innerRotation.center.set(0,0,0);
myNode109.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode109.innerRotation.angle.set(1.5707926535897931);
myNode109.isVisible = False

/* définition du node n°110*/
const myNode110 = object.addCutOperation();
myNode110.leftArg.set(myNode108);
myNode110.rightArg.set(myNode109);
myNode110.isVisible = False

/* définition du node n°111*/
const myNode111 = object.addCylinder();
myNode111.point1.set(0.726,-0.834,-4.22295);
myNode111.point2.set(0.726,-0.834,-2.5180499999999997);
myNode111.radius.set(0.263);
myNode111.innerRotation.center.set(0,0,0);
myNode111.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode111.innerRotation.angle.set(1.5707999999999998);
myNode111.isVisible = False

/* définition du node n°112*/
const myNode112 = object.addFuseOperation();
myNode112.leftArg.set(myNode111);
myNode112.rightArg.set(myNode80);
myNode112.isVisible = False

/* définition du node n°113*/
const myNode113 = object.addCutOperation();
myNode113.leftArg.set(myNode110);
myNode113.rightArg.set(myNode112);
myNode113.isVisible = False

/* définition du node n°114*/
const myNode114 = object.addCylinder();
myNode114.point1.set(0.727,-3.109,-18.0999);
myNode114.point2.set(0.727,-3.109,-4.072000000000001);
myNode114.radius.set(0.263);
myNode114.innerRotation.center.set(0,0,0);
myNode114.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode114.innerRotation.angle.set(1.5707999999999998);
myNode114.isVisible = False

/* définition du node n°115*/
const myNode115 = object.addCylinder();
myNode115.point1.set(0.725,2.578,-18.0999);
myNode115.point2.set(0.725,2.578,-4.072000000000001);
myNode115.radius.set(0.263);
myNode115.innerRotation.center.set(0,0,0);
myNode115.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode115.innerRotation.angle.set(1.5707926535897931);
myNode115.isVisible = False

/* définition du node n°116*/
const myNode116 = object.addCylinder();
myNode116.point1.set(-0.039,3.183,-18.0999);
myNode116.point2.set(-0.039,3.183,-4.072000000000001);
myNode116.radius.set(0.262);
myNode116.innerRotation.center.set(0,0,0);
myNode116.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode116.innerRotation.angle.set(1.5707926535897931);
myNode116.isVisible = False

/* définition du node n°117*/
const myNode117_1 = object.addFuseOperation();
myNode117_1.leftArg.set(myNode114);
myNode117_1.rightArg.set(myNode114);
const myNode117_2 = object.addFuseOperation();
myNode117_2.leftArg.set(myNode117_1);
myNode117_2.rightArg.set(myNode115);
const myNode117_3 = object.addFuseOperation();
myNode117_3.leftArg.set(myNode117_2);
myNode117_3.rightArg.set(myNode116);
myNode117 = object.addFuseOperation();
myNode117.leftArg.set(myNode117_3);
myNode117.rightArg.set(myNode78);
myNode117.isVisible = False

/* définition du node n°118*/
const myNode118 = object.addCutOperation();
myNode118.leftArg.set(myNode113);
myNode118.rightArg.set(myNode117);
myNode118.isVisible = False

/* définition du node n°119*/
const myNode119 = object.addBox();
myNode119.point1.set(-4.2229,-18.0999,-1.3309);
myNode119.point2.set(-4.0711,18.0999,-9.999999999998899e-05);
myNode119.innerRotation.center.set(0,0,0);
myNode119.innerRotation.axis.set(0.0,0.0,0.0);
myNode119.innerRotation.angle.set(0.0);
myNode119.isVisible = False

/* définition du node n°120*/
const myNode120 = object.addCylinder();
myNode120.point1.set(0.727,1.438,-18.0999);
myNode120.point2.set(0.727,1.438,1.041999999999998);
myNode120.radius.set(0.262);
myNode120.innerRotation.center.set(0,0,0);
myNode120.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode120.innerRotation.angle.set(1.5707926535897931);
myNode120.isVisible = False

/* définition du node n°121*/
const myNode121 = object.addCutOperation();
myNode121.leftArg.set(myNode119);
myNode121.rightArg.set(myNode120);
myNode121.isVisible = False

/* définition du node n°122*/
const myNode122 = object.addCylinder();
myNode122.point1.set(0.724,-4.242,-18.0999);
myNode122.point2.set(0.724,-4.242,18.099999999999998);
myNode122.radius.set(0.263);
myNode122.innerRotation.center.set(0,0,0);
myNode122.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode122.innerRotation.angle.set(1.5707926535968346);
myNode122.isVisible = False

/* définition du node n°123*/
const myNode123 = object.addCylinder();
myNode123.point1.set(0.728,-1.971,-18.0999);
myNode123.point2.set(0.728,-1.971,-4.072000000000001);
myNode123.radius.set(0.263);
myNode123.innerRotation.center.set(0,0,0);
myNode123.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode123.innerRotation.angle.set(1.5707926535897931);
myNode123.isVisible = False

/* définition du node n°124*/
const myNode124 = object.addFuseOperation();
myNode124.leftArg.set(myNode122);
myNode124.rightArg.set(myNode123);
myNode124.isVisible = False

/* définition du node n°125*/
const myNode125 = object.addCutOperation();
myNode125.leftArg.set(myNode121);
myNode125.rightArg.set(myNode124);
myNode125.isVisible = False

/* définition du node n°126*/
const myNode126 = object.addCommonOperation();
myNode126.leftArg.set(myNode107);
myNode126.rightArg.set(myNode118);
myNode126.isVisible = False

/* définition du node n°127*/
const myNode127 = object.addBox();
myNode127.point1.set(4.0721,-3.1089,1.1691);
myNode127.point2.set(4.2238999999999995,4.9999,2.3619000000000003);
myNode127.innerRotation.center.set(0,0,0);
myNode127.innerRotation.axis.set(0.0,0.0,0.0);
myNode127.innerRotation.angle.set(0.0);
myNode127.isVisible = False

/* définition du node n°128*/
const myNode128 = object.addCylinder();
myNode128.point1.set(-1.74,-0.526,1.04205);
myNode128.point2.set(-1.74,-0.526,18.09995);
myNode128.radius.set(0.265);
myNode128.innerRotation.center.set(0,0,0);
myNode128.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode128.innerRotation.angle.set(1.5707926535897931);
myNode128.isVisible = False

/* définition du node n°129*/
const myNode129 = object.addCylinder();
myNode129.point1.set(-1.736,1.743,1.04205);
myNode129.point2.set(-1.736,1.743,18.09995);
myNode129.radius.set(0.263);
myNode129.innerRotation.center.set(0,0,0);
myNode129.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode129.innerRotation.angle.set(1.5707926535897931);
myNode129.isVisible = False

/* définition du node n°130*/
const myNode130_1 = object.addFuseOperation();
myNode130_1.leftArg.set(myNode128);
myNode130_1.rightArg.set(myNode128);
const myNode130_2 = object.addFuseOperation();
myNode130_2.leftArg.set(myNode130_1);
myNode130_2.rightArg.set(myNode90);
myNode130 = object.addFuseOperation();
myNode130.leftArg.set(myNode130_2);
myNode130.rightArg.set(myNode129);
myNode130.isVisible = False

/* définition du node n°131*/
const myNode131 = object.addCutOperation();
myNode131.leftArg.set(myNode127);
myNode131.rightArg.set(myNode130);
myNode131.isVisible = False

/* définition du node n°132*/
const myNode132 = object.addCylinder();
myNode132.point1.set(-1.736,-2.804,4.07205);
myNode132.point2.set(-1.736,-2.804,18.09995);
myNode132.radius.set(0.263);
myNode132.innerRotation.center.set(0,0,0);
myNode132.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode132.innerRotation.angle.set(1.5707926535897931);
myNode132.isVisible = False

/* définition du node n°133*/
const myNode133 = object.addCylinder();
myNode133.point1.set(-1.735,4.013,-18.0999);
myNode133.point2.set(-1.735,4.013,18.099999999999998);
myNode133.radius.set(0.261);
myNode133.innerRotation.center.set(0,0,0);
myNode133.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode133.innerRotation.angle.set(1.5707926535897931);
myNode133.isVisible = False

/* définition du node n°134*/
const myNode134 = object.addCylinder();
myNode134.point1.set(-1.736,2.879,-18.0999);
myNode134.point2.set(-1.736,2.879,18.099999999999998);
myNode134.radius.set(0.263);
myNode134.innerRotation.center.set(0,0,0);
myNode134.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode134.innerRotation.angle.set(1.5707926535897931);
myNode134.isVisible = False

/* définition du node n°135*/
const myNode135_1 = object.addFuseOperation();
myNode135_1.leftArg.set(myNode91);
myNode135_1.rightArg.set(myNode91);
const myNode135_2 = object.addFuseOperation();
myNode135_2.leftArg.set(myNode135_1);
myNode135_2.rightArg.set(myNode132);
const myNode135_3 = object.addFuseOperation();
myNode135_3.leftArg.set(myNode135_2);
myNode135_3.rightArg.set(myNode133);
myNode135 = object.addFuseOperation();
myNode135.leftArg.set(myNode135_3);
myNode135.rightArg.set(myNode134);
myNode135.isVisible = False

/* définition du node n°136*/
const myNode136 = object.addCutOperation();
myNode136.leftArg.set(myNode131);
myNode136.rightArg.set(myNode135);
myNode136.isVisible = False

/* définition du node n°137*/
const myNode137 = object.addCylinder();
myNode137.point1.set(-2.358,-2.644,-2.2479);
myNode137.point2.set(-2.358,-2.644,-1.4830999999999999);
myNode137.radius.set(0.246);
myNode137.innerRotation.center.set(0,0,0);
myNode137.innerRotation.axis.set(0.0,0.0,0.0);
myNode137.innerRotation.angle.set(0.0);
myNode137.isVisible = False

/* définition du node n°138*/
const myNode138 = object.addBox();
myNode138.point1.set(4.0721,-3.9409,-1.4829);
myNode138.point2.set(4.2238999999999995,-3.1091,-0.00010000000000021103);
myNode138.innerRotation.center.set(0,0,0);
myNode138.innerRotation.axis.set(0.0,0.0,0.0);
myNode138.innerRotation.angle.set(0.0);
myNode138.isVisible = False

/* définition du node n°139*/
const myNode139 = object.addCutOperation();
myNode139.leftArg.set(myNode138);
myNode139.rightArg.set(myNode24);
myNode139.isVisible = False

/* définition du node n°140*/
const myNode140 = object.addBox();
myNode140.point1.set(-2.5189,3.1831,2.2101);
myNode140.point2.set(1.0419,4.9999,2.3619000000000003);
myNode140.innerRotation.center.set(0,0,0);
myNode140.innerRotation.axis.set(0.0,0.0,0.0);
myNode140.innerRotation.angle.set(0.0);
myNode140.isVisible = False

/* définition du node n°141*/
const myNode141 = object.addCylinder();
myNode141.point1.set(2.305,-2.643,-2.3619);
myNode141.point2.set(2.305,-2.643,-2.0061);
myNode141.radius.set(0.394);
myNode141.innerRotation.center.set(0,0,0);
myNode141.innerRotation.axis.set(0.0,0.0,0.0);
myNode141.innerRotation.angle.set(0.0);
myNode141.isVisible = False

/* définition du node n°142*/
const myNode142 = object.addBox();
myNode142.point1.set(4.0721,-4.9999,-1.4829);
myNode142.point2.set(4.2238999999999995,-3.9411000000000005,0.5999000000000001);
myNode142.innerRotation.center.set(0,0,0);
myNode142.innerRotation.axis.set(0.0,0.0,0.0);
myNode142.innerRotation.angle.set(0.0);
myNode142.isVisible = False

/* définition du node n°143*/
const myNode143 = object.addFuseOperation();
myNode143.leftArg.set(myNode141);
myNode143.rightArg.set(myNode142);
myNode143.isVisible = False

/* définition du node n°144*/
const myNode144 = object.addCylinder();
myNode144.point1.set(2.305,-2.643,-2.24795);
myNode144.point2.set(2.305,-2.643,-2.12005);
myNode144.radius.set(0.394);
myNode144.innerRotation.center.set(0,0,0);
myNode144.innerRotation.axis.set(0.0,0.0,0.0);
myNode144.innerRotation.angle.set(0.0);
myNode144.isVisible = False

/* définition du node n°145*/
const myNode145 = object.addCylinder();
myNode145.point1.set(0.724,-4.242,1.04205);
myNode145.point2.set(0.724,-4.242,18.09995);
myNode145.radius.set(0.263);
myNode145.innerRotation.center.set(0,0,0);
myNode145.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode145.innerRotation.angle.set(1.5707926535968346);
myNode145.isVisible = False

/* définition du node n°146*/
const myNode146 = object.addFuseOperation();
myNode146.leftArg.set(myNode144);
myNode146.rightArg.set(myNode145);
myNode146.isVisible = False

/* définition du node n°147*/
const myNode147 = object.addCutOperation();
myNode147.leftArg.set(myNode143);
myNode147.rightArg.set(myNode146);
myNode147.isVisible = False

/* définition du node n°148*/
const myNode148 = object.addBox();
myNode148.point1.set(-4.2229,-3.1089,-18.0999);
myNode148.point2.set(-4.0711,3.1829,0.03289999999999793);
myNode148.innerRotation.center.set(0,0,0);
myNode148.innerRotation.axis.set(0.0,0.0,0.0);
myNode148.innerRotation.angle.set(0.0);
myNode148.isVisible = False

/* définition du node n°149*/
const myNode149 = object.addCutOperation();
myNode149.leftArg.set(myNode148);
myNode149.rightArg.set(myNode111);
myNode149.isVisible = False

/* définition du node n°150*/
const myNode150 = object.addFuseOperation();
myNode150.leftArg.set(myNode78);
myNode150.rightArg.set(myNode24);
myNode150.isVisible = False

/* définition du node n°151*/
const myNode151 = object.addCutOperation();
myNode151.leftArg.set(myNode149);
myNode151.rightArg.set(myNode150);
myNode151.isVisible = False

/* définition du node n°152*/
const myNode152 = object.addCylinder();
myNode152.point1.set(0.725,2.578,-18.0999);
myNode152.point2.set(0.725,2.578,-2.519000000000002);
myNode152.radius.set(0.263);
myNode152.innerRotation.center.set(0,0,0);
myNode152.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode152.innerRotation.angle.set(1.5707926535897931);
myNode152.isVisible = False

/* définition du node n°153*/
const myNode153 = object.addCylinder();
myNode153.point1.set(-0.035,-1.363,-4.22295);
myNode153.point2.set(-0.035,-1.363,18.09995);
myNode153.radius.set(0.266);
myNode153.innerRotation.center.set(0,0,0);
myNode153.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode153.innerRotation.angle.set(1.5707926535897931);
myNode153.isVisible = False

/* définition du node n°154*/
const myNode154 = object.addBox();
myNode154.point1.set(-4.22295,-3.10895,-18.0999);
myNode154.point2.set(-4.07105,18.09995,-1.4830000000000005);
myNode154.innerRotation.center.set(0,0,0);
myNode154.innerRotation.axis.set(0.0,0.0,0.0);
myNode154.innerRotation.angle.set(0.0);
myNode154.isVisible = False

/* définition du node n°155*/
const myNode155_1 = object.addFuseOperation();
myNode155_1.leftArg.set(myNode152);
myNode155_1.rightArg.set(myNode152);
const myNode155_2 = object.addFuseOperation();
myNode155_2.leftArg.set(myNode155_1);
myNode155_2.rightArg.set(myNode153);
const myNode155_3 = object.addFuseOperation();
myNode155_3.leftArg.set(myNode155_2);
myNode155_3.rightArg.set(myNode104);
myNode155 = object.addFuseOperation();
myNode155.leftArg.set(myNode155_3);
myNode155.rightArg.set(myNode154);
myNode155.isVisible = False

/* définition du node n°156*/
const myNode156 = object.addCutOperation();
myNode156.leftArg.set(myNode151);
myNode156.rightArg.set(myNode155);
myNode156.isVisible = False

/* définition du node n°157*/
const myNode157 = object.addCylinder();
myNode157.point1.set(-0.028,0.91,-4.22295);
myNode157.point2.set(-0.028,0.91,-2.5180499999999997);
myNode157.radius.set(0.264);
myNode157.innerRotation.center.set(0,0,0);
myNode157.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode157.innerRotation.angle.set(1.5707926535897931);
myNode157.isVisible = False

/* définition du node n°158*/
const myNode158 = object.addCylinder();
myNode158.point1.set(0.727,1.438,-18.0999);
myNode158.point2.set(0.727,1.438,-4.072000000000001);
myNode158.radius.set(0.262);
myNode158.innerRotation.center.set(0,0,0);
myNode158.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode158.innerRotation.angle.set(1.5707926535897931);
myNode158.isVisible = False

/* définition du node n°159*/
const myNode159 = object.addCylinder();
myNode159.point1.set(0.724,0.302,-4.22295);
myNode159.point2.set(0.724,0.302,18.09995);
myNode159.radius.set(0.265);
myNode159.innerRotation.center.set(0,0,0);
myNode159.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode159.innerRotation.angle.set(1.5707926535897931);
myNode159.isVisible = False

/* définition du node n°160*/
const myNode160 = object.addSphere();
myNode160.center.set(0,0,0);
myNode160.radius.set(54.29990791889062);
myNode160.isVisible = False

/* définition du node n°161*/
const myNode161 = object.addCommonOperation();
myNode161.leftArg.set(myNode29);
myNode161.rightArg.set(myNode160);
myNode161.isVisible = False

/* définition du node n°162*/
const myNode162 = object.addCylinder();
myNode162.point1.set(0.728,-1.971,-4.22295);
myNode162.point2.set(0.728,-1.971,-4.07105);
myNode162.radius.set(0.263);
myNode162.innerRotation.center.set(0,0,0);
myNode162.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode162.innerRotation.angle.set(1.5707926535897931);
myNode162.isVisible = False

/* définition du node n°163*/
const myNode163_1 = object.addFuseOperation();
myNode163_1.leftArg.set(myNode157);
myNode163_1.rightArg.set(myNode157);
const myNode163_2 = object.addFuseOperation();
myNode163_2.leftArg.set(myNode163_1);
myNode163_2.rightArg.set(myNode158);
const myNode163_3 = object.addFuseOperation();
myNode163_3.leftArg.set(myNode163_2);
myNode163_3.rightArg.set(myNode159);
const myNode163_4 = object.addFuseOperation();
myNode163_4.leftArg.set(myNode163_3);
myNode163_4.rightArg.set(myNode161);
const myNode163_5 = object.addFuseOperation();
myNode163_5.leftArg.set(myNode163_4);
myNode163_5.rightArg.set(myNode63);
myNode163 = object.addFuseOperation();
myNode163.leftArg.set(myNode163_5);
myNode163.rightArg.set(myNode162);
myNode163.isVisible = False

/* définition du node n°164*/
const myNode164 = object.addCutOperation();
myNode164.leftArg.set(myNode156);
myNode164.rightArg.set(myNode163);
myNode164.isVisible = False

/* définition du node n°165*/
const myNode165 = object.addBox();
myNode165.point1.set(-4.0719,-3.1089,-1.4829);
myNode165.point2.set(4.0719,4.9999,-1.3311000000000002);
myNode165.innerRotation.center.set(0,0,0);
myNode165.innerRotation.axis.set(0.0,0.0,0.0);
myNode165.innerRotation.angle.set(0.0);
myNode165.isVisible = False

/* définition du node n°166*/
const myNode166 = object.addCylinder();
myNode166.point1.set(2.308,3.161,-2.3619);
myNode166.point2.set(2.308,3.161,-2.2481);
myNode166.radius.set(0.397);
myNode166.innerRotation.center.set(0,0,0);
myNode166.innerRotation.axis.set(0.0,0.0,0.0);
myNode166.innerRotation.angle.set(0.0);
myNode166.isVisible = False

/* définition du node n°167*/
const myNode167 = object.addCylinder();
myNode167.point1.set(2.307,3.157,-2.2479);
myNode167.point2.set(2.307,3.157,18.0989);
myNode167.radius.set(0.247);
myNode167.innerRotation.center.set(0,0,0);
myNode167.innerRotation.axis.set(0.0,0.0,0.0);
myNode167.innerRotation.angle.set(0.0);
myNode167.isVisible = False

/* définition du node n°168*/
const myNode168 = object.addCylinder();
myNode168.point1.set(2.308,3.161,-2.1189);
myNode168.point2.set(2.308,3.161,-2.0051);
myNode168.radius.set(0.397);
myNode168.innerRotation.center.set(0,0,0);
myNode168.innerRotation.axis.set(0.0,0.0,0.0);
myNode168.innerRotation.angle.set(0.0);
myNode168.isVisible = False

/* définition du node n°169*/
const myNode169_1 = object.addFuseOperation();
myNode169_1.leftArg.set(myNode166);
myNode169_1.rightArg.set(myNode166);
const myNode169_2 = object.addFuseOperation();
myNode169_2.leftArg.set(myNode169_1);
myNode169_2.rightArg.set(myNode167);
myNode169 = object.addFuseOperation();
myNode169.leftArg.set(myNode169_2);
myNode169.rightArg.set(myNode168);
myNode169.isVisible = False

/* définition du node n°170*/
const myNode170 = object.addBox();
myNode170.point1.set(-18.0999,-3.1089,-2.3619);
myNode170.point2.set(18.0999,18.099899999999998,-1.4830999999999999);
myNode170.innerRotation.center.set(0,0,0);
myNode170.innerRotation.axis.set(0.0,0.0,0.0);
myNode170.innerRotation.angle.set(0.0);
myNode170.isVisible = False

/* définition du node n°171*/
const myNode171 = object.addCommonOperation();
myNode171.leftArg.set(myNode169);
myNode171.rightArg.set(myNode170);
myNode171.isVisible = False

/* définition du node n°172*/
const myNode172 = object.addBox();
myNode172.point1.set(-4.2229,-4.9999,-1.4829);
myNode172.point2.set(1.0419,3.1829,-1.3311000000000002);
myNode172.innerRotation.center.set(0,0,0);
myNode172.innerRotation.axis.set(0.0,0.0,0.0);
myNode172.innerRotation.angle.set(0.0);
myNode172.isVisible = False

/* définition du node n°173*/
const myNode173_1 = object.addFuseOperation();
myNode173_1.leftArg.set(myNode9);
myNode173_1.rightArg.set(myNode9);
const myNode173_2 = object.addFuseOperation();
myNode173_2.leftArg.set(myNode173_1);
myNode173_2.rightArg.set(myNode16);
const myNode173_3 = object.addFuseOperation();
myNode173_3.leftArg.set(myNode173_2);
myNode173_3.rightArg.set(myNode17);
const myNode173_4 = object.addFuseOperation();
myNode173_4.leftArg.set(myNode173_3);
myNode173_4.rightArg.set(myNode18);
const myNode173_5 = object.addFuseOperation();
myNode173_5.leftArg.set(myNode173_4);
myNode173_5.rightArg.set(myNode19);
const myNode173_6 = object.addFuseOperation();
myNode173_6.leftArg.set(myNode173_5);
myNode173_6.rightArg.set(myNode46);
const myNode173_7 = object.addFuseOperation();
myNode173_7.leftArg.set(myNode173_6);
myNode173_7.rightArg.set(myNode65);
const myNode173_8 = object.addFuseOperation();
myNode173_8.leftArg.set(myNode173_7);
myNode173_8.rightArg.set(myNode68);
const myNode173_9 = object.addFuseOperation();
myNode173_9.leftArg.set(myNode173_8);
myNode173_9.rightArg.set(myNode69);
const myNode173_10 = object.addFuseOperation();
myNode173_10.leftArg.set(myNode173_9);
myNode173_10.rightArg.set(myNode70);
const myNode173_11 = object.addFuseOperation();
myNode173_11.leftArg.set(myNode173_10);
myNode173_11.rightArg.set(myNode82);
const myNode173_12 = object.addFuseOperation();
myNode173_12.leftArg.set(myNode173_11);
myNode173_12.rightArg.set(myNode95);
const myNode173_13 = object.addFuseOperation();
myNode173_13.leftArg.set(myNode173_12);
myNode173_13.rightArg.set(myNode100);
const myNode173_14 = object.addFuseOperation();
myNode173_14.leftArg.set(myNode173_13);
myNode173_14.rightArg.set(myNode101);
const myNode173_15 = object.addFuseOperation();
myNode173_15.leftArg.set(myNode173_14);
myNode173_15.rightArg.set(myNode126);
const myNode173_16 = object.addFuseOperation();
myNode173_16.leftArg.set(myNode173_15);
myNode173_16.rightArg.set(myNode136);
const myNode173_17 = object.addFuseOperation();
myNode173_17.leftArg.set(myNode173_16);
myNode173_17.rightArg.set(myNode137);
const myNode173_18 = object.addFuseOperation();
myNode173_18.leftArg.set(myNode173_17);
myNode173_18.rightArg.set(myNode139);
const myNode173_19 = object.addFuseOperation();
myNode173_19.leftArg.set(myNode173_18);
myNode173_19.rightArg.set(myNode140);
const myNode173_20 = object.addFuseOperation();
myNode173_20.leftArg.set(myNode173_19);
myNode173_20.rightArg.set(myNode147);
const myNode173_21 = object.addFuseOperation();
myNode173_21.leftArg.set(myNode173_20);
myNode173_21.rightArg.set(myNode164);
const myNode173_22 = object.addFuseOperation();
myNode173_22.leftArg.set(myNode173_21);
myNode173_22.rightArg.set(myNode165);
const myNode173_23 = object.addFuseOperation();
myNode173_23.leftArg.set(myNode173_22);
myNode173_23.rightArg.set(myNode171);
myNode173 = object.addFuseOperation();
myNode173.leftArg.set(myNode173_23);
myNode173.rightArg.set(myNode172);
myNode173.isVisible = False

/* définition du node n°174*/
const myNode174 = object.addBox();
myNode174.point1.set(-5.0679,-5.9999,-2.8339);
myNode174.point2.set(5.0679,5.9999,2.8339);
myNode174.innerRotation.center.set(0,0,0);
myNode174.innerRotation.axis.set(0.0,0.0,0.0);
myNode174.innerRotation.angle.set(0.0);
myNode174.isVisible = False

/* définition du node n°175*/
const myNode175 = object.addCommonOperation();
myNode175.leftArg.set(myNode173);
myNode175.rightArg.set(myNode174);
myNode175.isVisible = True


/*END Geometry Object Definition*/