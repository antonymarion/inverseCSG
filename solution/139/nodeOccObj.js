/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.9989,-4.5309,-0.9249);
myNode0.point2.set(11.9978,9.0618,1.8488);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(0.4271,0.5211,-0.0299);
myNode1.point2.set(0.4238,1.2328,0.7998);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-0.8499,-2.8709,-0.7699);
myNode2.point2.set(4.2528,1.9128,0.7388);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);

/* définition du node n°3*/
const myNode3 = object.addBox();
myNode3.point1.set(-0.8499,-2.9249,-0.0299);
myNode3.point2.set(4.2528,2.6038,0.7998);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);

/* définition du node n°4*/
const myNode4 = object.addFuseOperation();
myNode4.leftArg.set(myNode2);
myNode4.rightArg.set(myNode3);

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(-0.002,-2.5,-0.77045);
myNode5.point2.set(0,0,1.5419);
myNode5.radius.set(0.149);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode5.innerRotation.angle.set(3.141592653586273);

/* définition du node n°6*/
const myNode6 = object.addCutOperation();
myNode6.leftArg.set(myNode4);
myNode6.rightArg.set(myNode5);

/* définition du node n°7*/
const myNode7 = object.addBox();
myNode7.point1.set(-0.42545,-2.12245,-0.77045);
myNode7.point2.set(0.8499,20.2209,1.5419);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);

/* définition du node n°8*/
const myNode8 = object.addBox();
myNode8.point1.set(2.12855,-3.45645,-18.0995);
myNode8.point2.set(0.8499,21.5559,36.1989);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(0.85155,-2.92545,-0.77045);
myNode9.point2.set(0.8499,21.0239,18.8699);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);

/* définition du node n°10*/
const myNode10 = object.addCylinder();
myNode10.point1.set(-0.356,-1.223,-18.0995);
myNode10.point2.set(0,0,22.3539);
myNode10.radius.set(0.158);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode10.innerRotation.angle.set(1.5707926535968346);

/* définition du node n°11*/
const myNode11_1 = object.addFuseOperation();
myNode11_1.leftArg.set(myNode7);
myNode11_1.rightArg.set(myNode7);
const myNode11_2 = object.addFuseOperation();
myNode11_2.leftArg.set(myNode11_1);
myNode11_2.rightArg.set(myNode8);
const myNode11_3 = object.addFuseOperation();
myNode11_3.leftArg.set(myNode11_2);
myNode11_3.rightArg.set(myNode9);
myNode11 = object.addFuseOperation();
myNode11.leftArg.set(myNode11_3);
myNode11.rightArg.set(myNode10);

/* définition du node n°12*/
const myNode12 = object.addCutOperation();
myNode12.leftArg.set(myNode6);
myNode12.rightArg.set(myNode11);

/* définition du node n°13*/
const myNode13 = object.addBox();
myNode13.point1.set(-4.6799,1.7561,-0.0299);
myNode13.point2.set(2.9768,0.4238,0.7998);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);

/* définition du node n°14*/
const myNode14 = object.addBox();
myNode14.point1.set(-4.0949,-3.4559,-0.4509);
myNode14.point2.set(3.6678,4.4388,1.2208);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);

/* définition du node n°15*/
const myNode15 = object.addBox();
myNode15.point1.set(-4.6799,-2.8709,-0.7699);
myNode15.point2.set(0.5828,3.8538,1.5408);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(-4.679,-3.458,-0.7699);
myNode16.point2.set(0,0,1.5408);
myNode16.radius.set(0.319);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);

/* définition du node n°17*/
const myNode17 = object.addCylinder();
myNode17.point1.set(-4.681,-3.457,-18.0995);
myNode17.point2.set(0,0,36.1989);
myNode17.radius.set(0.148);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);

/* définition du node n°18*/
const myNode18 = object.addCutOperation();
myNode18.leftArg.set(myNode16);
myNode18.rightArg.set(myNode17);

/* définition du node n°19*/
const myNode19 = object.addBox();
myNode19.point1.set(-4.6799,-2.9249,-0.0299);
myNode19.point2.set(0.4238,5.1578,0.7998);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(0.0,0.0,0.0);
myNode19.innerRotation.angle.set(0.0);

/* définition du node n°20*/
const myNode20 = object.addBox();
myNode20.point1.set(-3.5629,0.5211,-0.7699);
myNode20.point2.set(2.0188,0.4608,1.5408);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);

/* définition du node n°21*/
const myNode21 = object.addBox();
myNode21.point1.set(-4.6799,2.2351,-0.7699);
myNode21.point2.set(0.4238,0.7958,1.5408);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);

/* définition du node n°22*/
const myNode22_1 = object.addFuseOperation();
myNode22_1.leftArg.set(myNode13);
myNode22_1.rightArg.set(myNode13);
const myNode22_2 = object.addFuseOperation();
myNode22_2.leftArg.set(myNode22_1);
myNode22_2.rightArg.set(myNode14);
const myNode22_3 = object.addFuseOperation();
myNode22_3.leftArg.set(myNode22_2);
myNode22_3.rightArg.set(myNode15);
const myNode22_4 = object.addFuseOperation();
myNode22_4.leftArg.set(myNode22_3);
myNode22_4.rightArg.set(myNode18);
const myNode22_5 = object.addFuseOperation();
myNode22_5.leftArg.set(myNode22_4);
myNode22_5.rightArg.set(myNode19);
const myNode22_6 = object.addFuseOperation();
myNode22_6.leftArg.set(myNode22_5);
myNode22_6.rightArg.set(myNode20);
myNode22 = object.addFuseOperation();
myNode22.leftArg.set(myNode22_6);
myNode22.rightArg.set(myNode21);

/* définition du node n°23*/
const myNode23 = object.addBox();
myNode23.point1.set(-18.0995,-3.45645,-0.77045);
myNode23.point2.set(36.1989,3.9769,0.7399);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);

/* définition du node n°24*/
const myNode24 = object.addCylinder();
myNode24.point1.set(-0.356,2.554,1.59655);
myNode24.point2.set(0,0,0.5839);
myNode24.radius.set(0.158);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode24.innerRotation.angle.set(2.094392392986396);

/* définition du node n°25*/
const myNode25 = object.addBox();
myNode25.point1.set(-4.68045,-2.92545,-0.77045);
myNode25.point2.set(22.7799,3.4449,18.8699);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(0.0,0.0,0.0);
myNode25.innerRotation.angle.set(0.0);

/* définition du node n°26*/
const myNode26_1 = object.addFuseOperation();
myNode26_1.leftArg.set(myNode23);
myNode26_1.rightArg.set(myNode23);
const myNode26_2 = object.addFuseOperation();
myNode26_2.leftArg.set(myNode26_1);
myNode26_2.rightArg.set(myNode24);
myNode26 = object.addFuseOperation();
myNode26.leftArg.set(myNode26_2);
myNode26.rightArg.set(myNode25);

/* définition du node n°27*/
const myNode27 = object.addCutOperation();
myNode27.leftArg.set(myNode22);
myNode27.rightArg.set(myNode26);

/* définition du node n°28*/
const myNode28 = object.addBox();
myNode28.point1.set(1.0121,0.5211,-0.4509);
myNode28.point2.set(3.6678,0.4608,1.2208);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(0.0,0.0,0.0);
myNode28.innerRotation.angle.set(0.0);

/* définition du node n°29*/
const myNode29 = object.addBox();
myNode29.point1.set(-1.7009,1.7561,-0.0299);
myNode29.point2.set(5.9548,1.6998,0.7998);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);

/* définition du node n°30*/
const myNode30 = object.addBox();
myNode30.point1.set(1.7031,-0.3179,-0.7699);
myNode30.point2.set(1.6998,1.9128,0.7388);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);

/* définition du node n°31*/
const myNode31 = object.addBox();
myNode31.point1.set(-1.0099,3.0331,-0.7699);
myNode31.point2.set(2.0188,0.4238,1.5408);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(0.0,0.0,0.0);
myNode31.innerRotation.angle.set(0.0);

/* définition du node n°32*/
const myNode32_1 = object.addFuseOperation();
myNode32_1.leftArg.set(myNode28);
myNode32_1.rightArg.set(myNode28);
const myNode32_2 = object.addFuseOperation();
myNode32_2.leftArg.set(myNode32_1);
myNode32_2.rightArg.set(myNode29);
const myNode32_3 = object.addFuseOperation();
myNode32_3.leftArg.set(myNode32_2);
myNode32_3.rightArg.set(myNode30);
myNode32 = object.addFuseOperation();
myNode32.leftArg.set(myNode32_3);
myNode32.rightArg.set(myNode31);

/* définition du node n°33*/
const myNode33 = object.addBox();
myNode33.point1.set(-18.0995,2.18155,-0.77045);
myNode33.point2.set(22.3539,0.8499,1.5419);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);

/* définition du node n°34*/
const myNode34 = object.addCylinder();
myNode34.point1.set(-0.356,-2.553,1.75555);
myNode34.point2.set(0,0,1.7009);
myNode34.radius.set(0.153);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode34.innerRotation.angle.set(2.094392392986396);

/* définition du node n°35*/
const myNode35 = object.addBox();
myNode35.point1.set(-1.01045,-0.31845,-0.77045);
myNode35.point2.set(4.4139,2.5519,0.7399);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,0.0);
myNode35.innerRotation.angle.set(0.0);

/* définition du node n°36*/
const myNode36 = object.addBox();
myNode36.point1.set(2.12855,-0.31845,-0.77045);
myNode36.point2.set(0.8499,1.9139,1.5419);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(0.0,0.0,0.0);
myNode36.innerRotation.angle.set(0.0);

/* définition du node n°37*/
const myNode37 = object.addCommonOperation();
myNode37.leftArg.set(myNode35);
myNode37.rightArg.set(myNode36);

/* définition du node n°38*/
const myNode38_1 = object.addFuseOperation();
myNode38_1.leftArg.set(myNode33);
myNode38_1.rightArg.set(myNode33);
const myNode38_2 = object.addFuseOperation();
myNode38_2.leftArg.set(myNode38_1);
myNode38_2.rightArg.set(myNode34);
myNode38 = object.addFuseOperation();
myNode38.leftArg.set(myNode38_2);
myNode38.rightArg.set(myNode37);

/* définition du node n°39*/
const myNode39 = object.addCutOperation();
myNode39.leftArg.set(myNode32);
myNode39.rightArg.set(myNode38);

/* définition du node n°40*/
const myNode40 = object.addCylinder();
myNode40.point1.set(4.679,3.46,-0.7699);
myNode40.point2.set(0,0,1.5408);
myNode40.radius.set(0.319);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(0.0,0.0,0.0);
myNode40.innerRotation.angle.set(0.0);

/* définition du node n°41*/
const myNode41 = object.addCylinder();
myNode41.point1.set(-4.681,3.456,-18.0995);
myNode41.point2.set(0,0,36.1989);
myNode41.radius.set(0.148);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode41.innerRotation.angle.set(3.141592653586273);

/* définition du node n°42*/
const myNode42 = object.addCutOperation();
myNode42.leftArg.set(myNode40);
myNode42.rightArg.set(myNode41);

/* définition du node n°43*/
const myNode43 = object.addBox();
myNode43.point1.set(-0.8499,-3.4559,-0.7699);
myNode43.point2.set(5.5298,3.1358,1.5408);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(0.0,0.0,0.0);
myNode43.innerRotation.angle.set(0.0);

/* définition du node n°44*/
const myNode44 = object.addCylinder();
myNode44.point1.set(-4.681,-3.458,-0.7699);
myNode44.point2.set(0,0,1.5408);
myNode44.radius.set(0.319);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode44.innerRotation.angle.set(3.141592653586273);

/* définition du node n°45*/
const myNode45 = object.addFuseOperation();
myNode45.leftArg.set(myNode43);
myNode45.rightArg.set(myNode44);

/* définition du node n°46*/
const myNode46 = object.addCylinder();
myNode46.point1.set(-0.356,-1.223,-18.0995);
myNode46.point2.set(0,0,36.1989);
myNode46.radius.set(0.158);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode46.innerRotation.angle.set(1.5707926535968346);

/* définition du node n°47*/
const myNode47 = object.addBox();
myNode47.point1.set(-0.42545,-2.93045,-0.77045);
myNode47.point2.set(4.6799,2.6149,1.5419);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(0.0,0.0,0.0);
myNode47.innerRotation.angle.set(0.0);

/* définition du node n°48*/
const myNode48 = object.addFuseOperation();
myNode48.leftArg.set(myNode46);
myNode48.rightArg.set(myNode47);

/* définition du node n°49*/
const myNode49 = object.addCutOperation();
myNode49.leftArg.set(myNode45);
myNode49.rightArg.set(myNode48);

/* définition du node n°50*/
const myNode50 = object.addCylinder();
myNode50.point1.set(4.681,-3.459,-0.77045);
myNode50.point2.set(0,0,1.5419);
myNode50.radius.set(0.149);
myNode50.innerRotation.center.set(0,0,0);
myNode50.innerRotation.axis.set(0.0,0.0,0.0);
myNode50.innerRotation.angle.set(0.0);

/* définition du node n°51*/
const myNode51 = object.addBox();
myNode51.point1.set(-0.85045,-3.45645,-0.77045);
myNode51.point2.set(5.5309,0.5839,0.7399);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(0.0,0.0,0.0);
myNode51.innerRotation.angle.set(0.0);

/* définition du node n°52*/
const myNode52 = object.addBox();
myNode52.point1.set(-0.85045,-0.95645,-0.77045);
myNode52.point2.set(5.5309,0.6369,0.7399);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,0.0,0.0);
myNode52.innerRotation.angle.set(0.0);

/* définition du node n°53*/
const myNode53_1 = object.addFuseOperation();
myNode53_1.leftArg.set(myNode50);
myNode53_1.rightArg.set(myNode50);
const myNode53_2 = object.addFuseOperation();
myNode53_2.leftArg.set(myNode53_1);
myNode53_2.rightArg.set(myNode51);
myNode53 = object.addFuseOperation();
myNode53.leftArg.set(myNode53_2);
myNode53.rightArg.set(myNode52);

/* définition du node n°54*/
const myNode54 = object.addCutOperation();
myNode54.leftArg.set(myNode49);
myNode54.rightArg.set(myNode53);

/* définition du node n°55*/
const myNode55 = object.addBox();
myNode55.point1.set(-0.8499,-2.1219,-0.0299);
myNode55.point2.set(2.3918,1.8008,0.7998);
myNode55.innerRotation.center.set(0,0,0);
myNode55.innerRotation.axis.set(0.0,0.0,0.0);
myNode55.innerRotation.angle.set(0.0);

/* définition du node n°56*/
const myNode56 = object.addBox();
myNode56.point1.set(1.5441,0.5211,-0.7699);
myNode56.point2.set(3.1358,2.9348,0.7388);
myNode56.innerRotation.center.set(0,0,0);
myNode56.innerRotation.axis.set(0.0,0.0,0.0);
myNode56.innerRotation.angle.set(0.0);

/* définition du node n°57*/
const myNode57 = object.addBox();
myNode57.point1.set(1.7031,-2.1219,-0.0299);
myNode57.point2.set(0.4238,3.1038,0.7998);
myNode57.innerRotation.center.set(0,0,0);
myNode57.innerRotation.axis.set(0.0,0.0,0.0);
myNode57.innerRotation.angle.set(0.0);

/* définition du node n°58*/
const myNode58 = object.addBox();
myNode58.point1.set(4.2561,-0.3179,-0.7699);
myNode58.point2.set(0.4238,3.7748,1.5408);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(0.0,0.0,0.0);
myNode58.innerRotation.angle.set(0.0);

/* définition du node n°59*/
const myNode59 = object.addBox();
myNode59.point1.set(-0.8499,-0.3179,-0.7699);
myNode59.point2.set(2.3918,3.3488,1.5408);
myNode59.innerRotation.center.set(0,0,0);
myNode59.innerRotation.axis.set(0.0,0.0,0.0);
myNode59.innerRotation.angle.set(0.0);

/* définition du node n°60*/
const myNode60_1 = object.addFuseOperation();
myNode60_1.leftArg.set(myNode55);
myNode60_1.rightArg.set(myNode55);
const myNode60_2 = object.addFuseOperation();
myNode60_2.leftArg.set(myNode60_1);
myNode60_2.rightArg.set(myNode56);
const myNode60_3 = object.addFuseOperation();
myNode60_3.leftArg.set(myNode60_2);
myNode60_3.rightArg.set(myNode57);
const myNode60_4 = object.addFuseOperation();
myNode60_4.leftArg.set(myNode60_3);
myNode60_4.rightArg.set(myNode58);
myNode60 = object.addFuseOperation();
myNode60.leftArg.set(myNode60_4);
myNode60.rightArg.set(myNode59);

/* définition du node n°61*/
const myNode61 = object.addBox();
myNode61.point1.set(-1.01045,1.59655,-0.77045);
myNode61.point2.set(5.6899,0.6369,0.7399);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(0.0,0.0,0.0);
myNode61.innerRotation.angle.set(0.0);

/* définition du node n°62*/
const myNode62 = object.addCylinder();
myNode62.point1.set(0,2.607,-0.77045);
myNode62.point2.set(0,0,18.8699);
myNode62.radius.set(0.148);
myNode62.innerRotation.center.set(0,0,0);
myNode62.innerRotation.axis.set(0.0,0.0,0.0);
myNode62.innerRotation.angle.set(0.0);

/* définition du node n°63*/
const myNode63 = object.addBox();
myNode63.point1.set(0.85155,0.98455,-0.77045);
myNode63.point2.set(3.4029,2.0469,1.5419);
myNode63.innerRotation.center.set(0,0,0);
myNode63.innerRotation.axis.set(0.0,0.0,0.0);
myNode63.innerRotation.angle.set(0.0);

/* définition du node n°64*/
const myNode64 = object.addBox();
myNode64.point1.set(3.56455,-0.31845,-18.0994);
myNode64.point2.set(0.5309,3.7759,17.6469);
myNode64.innerRotation.center.set(0,0,0);
myNode64.innerRotation.axis.set(0.0,0.0,0.0);
myNode64.innerRotation.angle.set(0.0);

/* définition du node n°65*/
const myNode65 = object.addBox();
myNode65.point1.set(-0.43045,-18.0994,-0.77045);
myNode65.point2.set(1.9769,19.8539,18.8699);
myNode65.innerRotation.center.set(0,0,0);
myNode65.innerRotation.axis.set(0.0,0.0,0.0);
myNode65.innerRotation.angle.set(0.0);

/* définition du node n°66*/
const myNode66 = object.addCylinder();
myNode66.point1.set(-0.356,-1.223,-1.01045);
myNode66.point2.set(0,0,4.4139);
myNode66.radius.set(0.158);
myNode66.innerRotation.center.set(0,0,0);
myNode66.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode66.innerRotation.angle.set(1.5707926535968346);

/* définition du node n°67*/
const myNode67_1 = object.addFuseOperation();
myNode67_1.leftArg.set(myNode41);
myNode67_1.rightArg.set(myNode41);
const myNode67_2 = object.addFuseOperation();
myNode67_2.leftArg.set(myNode67_1);
myNode67_2.rightArg.set(myNode61);
const myNode67_3 = object.addFuseOperation();
myNode67_3.leftArg.set(myNode67_2);
myNode67_3.rightArg.set(myNode62);
const myNode67_4 = object.addFuseOperation();
myNode67_4.leftArg.set(myNode67_3);
myNode67_4.rightArg.set(myNode63);
const myNode67_5 = object.addFuseOperation();
myNode67_5.leftArg.set(myNode67_4);
myNode67_5.rightArg.set(myNode64);
const myNode67_6 = object.addFuseOperation();
myNode67_6.leftArg.set(myNode67_5);
myNode67_6.rightArg.set(myNode65);
myNode67 = object.addFuseOperation();
myNode67.leftArg.set(myNode67_6);
myNode67.rightArg.set(myNode66);

/* définition du node n°68*/
const myNode68 = object.addCutOperation();
myNode68.leftArg.set(myNode60);
myNode68.rightArg.set(myNode67);

/* définition du node n°69*/
const myNode69 = object.addBox();
myNode69.point1.set(-1.7009,3.0331,-0.4509);
myNode69.point2.set(3.2428,0.4238,1.2208);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(0.0,0.0,0.0);
myNode69.innerRotation.angle.set(0.0);

/* définition du node n°70*/
const myNode70 = object.addBox();
myNode70.point1.set(-1.0099,0.5211,-0.7699);
myNode70.point2.set(2.0188,0.4608,1.5408);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(0.0,0.0,0.0);
myNode70.innerRotation.angle.set(0.0);

/* définition du node n°71*/
const myNode71 = object.addBox();
myNode71.point1.set(1.7031,0.9851,-0.0299);
myNode71.point2.set(0.4238,0.7698,0.7998);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(0.0,0.0,0.0);
myNode71.innerRotation.angle.set(0.0);

/* définition du node n°72*/
const myNode72 = object.addCylinder();
myNode72.point1.set(-4.682,3.457,-0.7699);
myNode72.point2.set(0,0,1.5408);
myNode72.radius.set(0.318);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(0.0,0.0,0.0);
myNode72.innerRotation.angle.set(0.0);

/* définition du node n°73*/
const myNode73 = object.addBox();
myNode73.point1.set(-4.6799,3.0331,-0.7699);
myNode73.point2.set(3.1358,0.4238,1.5408);
myNode73.innerRotation.center.set(0,0,0);
myNode73.innerRotation.axis.set(0.0,0.0,0.0);
myNode73.innerRotation.angle.set(0.0);

/* définition du node n°74*/
const myNode74 = object.addFuseOperation();
myNode74.leftArg.set(myNode72);
myNode74.rightArg.set(myNode73);

/* définition du node n°75*/
const myNode75 = object.addCylinder();
myNode75.point1.set(-0.356,2.554,0.98455);
myNode75.point2.set(0,0,17.1149);
myNode75.radius.set(0.158);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode75.innerRotation.angle.set(2.094392392986396);

/* définition du node n°76*/
const myNode76 = object.addCylinder();
myNode76.point1.set(4.682,3.457,-18.0995);
myNode76.point2.set(0,0,18.8699);
myNode76.radius.set(0.148);
myNode76.innerRotation.center.set(0,0,0);
myNode76.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode76.innerRotation.angle.set(3.141592653586273);

/* définition du node n°77*/
const myNode77 = object.addBox();
myNode77.point1.set(-4.09545,-3.45645,-18.0994);
myNode77.point2.set(0.5309,6.9139,17.6469);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(0.0,0.0,0.0);
myNode77.innerRotation.angle.set(0.0);

/* définition du node n°78*/
const myNode78_1 = object.addFuseOperation();
myNode78_1.leftArg.set(myNode75);
myNode78_1.rightArg.set(myNode75);
const myNode78_2 = object.addFuseOperation();
myNode78_2.leftArg.set(myNode78_1);
myNode78_2.rightArg.set(myNode76);
myNode78 = object.addFuseOperation();
myNode78.leftArg.set(myNode78_2);
myNode78.rightArg.set(myNode77);

/* définition du node n°79*/
const myNode79 = object.addCutOperation();
myNode79.leftArg.set(myNode74);
myNode79.rightArg.set(myNode78);

/* définition du node n°80*/
const myNode80 = object.addBox();
myNode80.point1.set(-4.6799,-3.4559,-0.0299);
myNode80.point2.set(2.9768,5.2108,0.7998);
myNode80.innerRotation.center.set(0,0,0);
myNode80.innerRotation.axis.set(0.0,0.0,0.0);
myNode80.innerRotation.angle.set(0.0);

/* définition du node n°81*/
const myNode81 = object.addCylinder();
myNode81.point1.set(-0.356,-1.223,-4.68045);
myNode81.point2.set(0,0,22.7799);
myNode81.radius.set(0.158);
myNode81.innerRotation.center.set(0,0,0);
myNode81.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode81.innerRotation.angle.set(1.5707926535968346);

/* définition du node n°82*/
const myNode82 = object.addCutOperation();
myNode82.leftArg.set(myNode80);
myNode82.rightArg.set(myNode81);

/* définition du node n°83*/
const myNode83 = object.addBox();
myNode83.point1.set(-4.6799,-2.8709,-0.7699);
myNode83.point2.set(2.9768,4.4658,0.7388);
myNode83.innerRotation.center.set(0,0,0);
myNode83.innerRotation.axis.set(0.0,0.0,0.0);
myNode83.innerRotation.angle.set(0.0);

/* définition du node n°84*/
const myNode84 = object.addFuseOperation();
myNode84.leftArg.set(myNode82);
myNode84.rightArg.set(myNode83);

/* définition du node n°85*/
const myNode85 = object.addBox();
myNode85.point1.set(-18.0994,-0.95645,-18.0995);
myNode85.point2.set(16.5569,0.6369,18.0679);
myNode85.innerRotation.center.set(0,0,0);
myNode85.innerRotation.axis.set(0.0,0.0,0.0);
myNode85.innerRotation.angle.set(0.0);

/* définition du node n°86*/
const myNode86 = object.addBox();
myNode86.point1.set(-2.97845,-2.92545,-18.0995);
myNode86.point2.set(0.8499,4.6799,18.8699);
myNode86.innerRotation.center.set(0,0,0);
myNode86.innerRotation.axis.set(0.0,0.0,0.0);
myNode86.innerRotation.angle.set(0.0);

/* définition du node n°87*/
const myNode87 = object.addBox();
myNode87.point1.set(-4.25445,-2.92545,-0.77045);
myNode87.point2.set(0.8499,4.6799,18.8699);
myNode87.innerRotation.center.set(0,0,0);
myNode87.innerRotation.axis.set(0.0,0.0,0.0);
myNode87.innerRotation.angle.set(0.0);

/* définition du node n°88*/
const myNode88 = object.addCylinder();
myNode88.point1.set(-4.681,-3.457,-0.03045);
myNode88.point2.set(0,0,18.1299);
myNode88.radius.set(0.148);
myNode88.innerRotation.center.set(0,0,0);
myNode88.innerRotation.axis.set(0.0,0.0,0.0);
myNode88.innerRotation.angle.set(0.0);

/* définition du node n°89*/
const myNode89_1 = object.addFuseOperation();
myNode89_1.leftArg.set(myNode85);
myNode89_1.rightArg.set(myNode85);
const myNode89_2 = object.addFuseOperation();
myNode89_2.leftArg.set(myNode89_1);
myNode89_2.rightArg.set(myNode86);
const myNode89_3 = object.addFuseOperation();
myNode89_3.leftArg.set(myNode89_2);
myNode89_3.rightArg.set(myNode87);
myNode89 = object.addFuseOperation();
myNode89.leftArg.set(myNode89_3);
myNode89.rightArg.set(myNode88);

/* définition du node n°90*/
const myNode90 = object.addCutOperation();
myNode90.leftArg.set(myNode84);
myNode90.rightArg.set(myNode89);

/* définition du node n°91*/
const myNode91 = object.addBox();
myNode91.point1.set(0.4271,-0.3179,-0.7699);
myNode91.point2.set(0.4238,1.9128,1.5408);
myNode91.innerRotation.center.set(0,0,0);
myNode91.innerRotation.axis.set(0.0,0.0,0.0);
myNode91.innerRotation.angle.set(0.0);

/* définition du node n°92*/
const myNode92 = object.addBox();
myNode92.point1.set(2.9801,-0.3179,-0.0299);
myNode92.point2.set(0.4238,2.0718,0.7998);
myNode92.innerRotation.center.set(0,0,0);
myNode92.innerRotation.axis.set(0.0,0.0,0.0);
myNode92.innerRotation.angle.set(0.0);

/* définition du node n°93*/
const myNode93_1 = object.addFuseOperation();
myNode93_1.leftArg.set(myNode1);
myNode93_1.rightArg.set(myNode1);
const myNode93_2 = object.addFuseOperation();
myNode93_2.leftArg.set(myNode93_1);
myNode93_2.rightArg.set(myNode12);
const myNode93_3 = object.addFuseOperation();
myNode93_3.leftArg.set(myNode93_2);
myNode93_3.rightArg.set(myNode27);
const myNode93_4 = object.addFuseOperation();
myNode93_4.leftArg.set(myNode93_3);
myNode93_4.rightArg.set(myNode39);
const myNode93_5 = object.addFuseOperation();
myNode93_5.leftArg.set(myNode93_4);
myNode93_5.rightArg.set(myNode42);
const myNode93_6 = object.addFuseOperation();
myNode93_6.leftArg.set(myNode93_5);
myNode93_6.rightArg.set(myNode54);
const myNode93_7 = object.addFuseOperation();
myNode93_7.leftArg.set(myNode93_6);
myNode93_7.rightArg.set(myNode68);
const myNode93_8 = object.addFuseOperation();
myNode93_8.leftArg.set(myNode93_7);
myNode93_8.rightArg.set(myNode69);
const myNode93_9 = object.addFuseOperation();
myNode93_9.leftArg.set(myNode93_8);
myNode93_9.rightArg.set(myNode70);
const myNode93_10 = object.addFuseOperation();
myNode93_10.leftArg.set(myNode93_9);
myNode93_10.rightArg.set(myNode71);
const myNode93_11 = object.addFuseOperation();
myNode93_11.leftArg.set(myNode93_10);
myNode93_11.rightArg.set(myNode79);
const myNode93_12 = object.addFuseOperation();
myNode93_12.leftArg.set(myNode93_11);
myNode93_12.rightArg.set(myNode90);
const myNode93_13 = object.addFuseOperation();
myNode93_13.leftArg.set(myNode93_12);
myNode93_13.rightArg.set(myNode91);
myNode93 = object.addFuseOperation();
myNode93.leftArg.set(myNode93_13);
myNode93.rightArg.set(myNode92);

/* définition du node n°94*/
const myNode94 = object.addCommonOperation();
myNode94.leftArg.set(myNode0);
myNode94.rightArg.set(myNode93);
/*END Geometry Object Definition*/