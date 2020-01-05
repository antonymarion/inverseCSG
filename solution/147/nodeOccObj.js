/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.9999,-4.3059,-0.7149);
myNode0.point2.set(11.9998,8.6108,1.4288);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-18.0999,-1.7089,-0.5949);
myNode1.point2.set(20.3398,4.2188,1.1908);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(-3.847,2.51,-18.0999);
myNode2.point2.set(0,0,36.1999);
myNode2.radius.set(0.252);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);

/* définition du node n°3*/
const myNode3 = object.addCutOperation();
myNode3.leftArg.set(myNode1);
myNode3.rightArg.set(myNode2);

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(-4.728,1.982,-18.0999);
myNode4.point2.set(0,0,36.1999);
myNode4.radius.set(0.136);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(0,2.527,-18.0999);
myNode5.point2.set(0,0,18.6949);
myNode5.radius.set(0.135);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);

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
myNode8.point1.set(-3.59195,2.25505,-0.23195);
myNode8.point2.set(3.3199,0.2549,0.1369);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(-4.04995,-1.70895,-0.36795);
myNode9.point2.set(6.2899,3.7359,18.4679);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(-3.98195,2.02705,-0.09395);
myNode10.point2.set(0.8639,0.4819,0.4079);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);

/* définition du node n°11*/
const myNode11_1 = object.addFuseOperation();
myNode11_1.leftArg.set(myNode8);
myNode11_1.rightArg.set(myNode8);
const myNode11_2 = object.addFuseOperation();
myNode11_2.leftArg.set(myNode11_1);
myNode11_2.rightArg.set(myNode9);
myNode11 = object.addFuseOperation();
myNode11.leftArg.set(myNode11_2);
myNode11.rightArg.set(myNode10);

/* définition du node n°12*/
const myNode12 = object.addCutOperation();
myNode12.leftArg.set(myNode7);
myNode12.rightArg.set(myNode11);

/* définition du node n°13*/
const myNode13 = object.addBox();
myNode13.point1.set(-3.9819,1.3001,-0.5949);
myNode13.point2.set(1.7428,1.2098,0.3638);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(-2.239,2.517,-18.0999);
myNode14.point2.set(0,0,36.1999);
myNode14.radius.set(0.26);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);

/* définition du node n°15*/
const myNode15 = object.addCutOperation();
myNode15.leftArg.set(myNode13);
myNode15.rightArg.set(myNode14);

/* définition du node n°16*/
const myNode16 = object.addBox();
myNode16.point1.set(-0.2729,2.2551,-0.5949);
myNode16.point2.set(0.5448,0.2548,1.1908);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(-4.4549,1.3001,-18.0999);
myNode17.point2.set(22.5548,0.9548,18.4138);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);

/* définition du node n°18*/
const myNode18 = object.addBox();
myNode18.point1.set(-4.7269,1.7091,-0.5949);
myNode18.point2.set(0.2728,0.5448,18.6948);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);

/* définition du node n°19*/
const myNode19 = object.addBox();
myNode19.point1.set(-4.4549,-1.7089,-18.0999);
myNode19.point2.set(1.1318,3.7358,18.4138);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(0.0,0.0,0.0);
myNode19.innerRotation.angle.set(0.0);

/* définition du node n°20*/
const myNode20 = object.addCylinder();
myNode20.point1.set(-4.727,1.983,-0.5949);
myNode20.point2.set(0,0,1.1908);
myNode20.radius.set(0.271);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);

/* définition du node n°21*/
const myNode21_1 = object.addFuseOperation();
myNode21_1.leftArg.set(myNode15);
myNode21_1.rightArg.set(myNode15);
const myNode21_2 = object.addFuseOperation();
myNode21_2.leftArg.set(myNode21_1);
myNode21_2.rightArg.set(myNode16);
const myNode21_3 = object.addFuseOperation();
myNode21_3.leftArg.set(myNode21_2);
myNode21_3.rightArg.set(myNode17);
const myNode21_4 = object.addFuseOperation();
myNode21_4.leftArg.set(myNode21_3);
myNode21_4.rightArg.set(myNode18);
const myNode21_5 = object.addFuseOperation();
myNode21_5.leftArg.set(myNode21_4);
myNode21_5.rightArg.set(myNode19);
myNode21 = object.addFuseOperation();
myNode21.leftArg.set(myNode21_5);
myNode21.rightArg.set(myNode20);

/* définition du node n°22*/
const myNode22 = object.addCommonOperation();
myNode22.leftArg.set(myNode12);
myNode22.rightArg.set(myNode21);

/* définition du node n°23*/
const myNode23 = object.addCylinder();
myNode23.point1.set(-4.728,-1.983,-0.5949);
myNode23.point2.set(0,0,1.1908);
myNode23.radius.set(0.27);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);

/* définition du node n°24*/
const myNode24 = object.addCylinder();
myNode24.point1.set(-4.727,-1.981,-18.0999);
myNode24.point2.set(0,0,36.1999);
myNode24.radius.set(0.136);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);

/* définition du node n°25*/
const myNode25 = object.addCutOperation();
myNode25.leftArg.set(myNode23);
myNode25.rightArg.set(myNode24);

/* définition du node n°26*/
const myNode26 = object.addCylinder();
myNode26.point1.set(-3.045,-3.046,-0.5949);
myNode26.point2.set(0,0,0.4458);
myNode26.radius.set(0.254);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);

/* définition du node n°27*/
const myNode27 = object.addBox();
myNode27.point1.set(-18.0999,-2.2539,-18.0999);
myNode27.point2.set(13.6458,0.5448,36.1998);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);

/* définition du node n°28*/
const myNode28 = object.addCutOperation();
myNode28.leftArg.set(myNode27);
myNode28.rightArg.set(myNode24);

/* définition du node n°29*/
const myNode29 = object.addBox();
myNode29.point1.set(-4.7269,-18.0999,-0.5949);
myNode29.point2.set(2.2278,16.7998,0.3638);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);

/* définition du node n°30*/
const myNode30 = object.addCylinder();
myNode30.point1.set(-3.849,-2.512,-0.59495);
myNode30.point2.set(0,0,18.6949);
myNode30.radius.set(0.255);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);

/* définition du node n°31*/
const myNode31 = object.addCutOperation();
myNode31.leftArg.set(myNode29);
myNode31.rightArg.set(myNode30);

/* définition du node n°32*/
const myNode32 = object.addBox();
myNode32.point1.set(-3.5919,-3.0219,-0.5949);
myNode32.point2.set(1.0928,0.5098,0.3638);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);

/* définition du node n°33*/
const myNode33 = object.addBox();
myNode33.point1.set(-4.0499,-2.5119,-0.5949);
myNode33.point2.set(1.5508,0.2578,0.9088);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);

/* définition du node n°34*/
const myNode34 = object.addFuseOperation();
myNode34.leftArg.set(myNode32);
myNode34.rightArg.set(myNode33);

/* définition du node n°35*/
const myNode35 = object.addCommonOperation();
myNode35.leftArg.set(myNode31);
myNode35.rightArg.set(myNode34);

/* définition du node n°36*/
const myNode36_1 = object.addFuseOperation();
myNode36_1.leftArg.set(myNode26);
myNode36_1.rightArg.set(myNode26);
const myNode36_2 = object.addFuseOperation();
myNode36_2.leftArg.set(myNode36_1);
myNode36_2.rightArg.set(myNode28);
myNode36 = object.addFuseOperation();
myNode36.leftArg.set(myNode36_2);
myNode36.rightArg.set(myNode35);

/* définition du node n°37*/
const myNode37 = object.addBox();
myNode37.point1.set(-4.7269,-18.0999,-0.5949);
myNode37.point2.set(2.4878,36.1998,1.1908);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0,0.0,0.0);
myNode37.innerRotation.angle.set(0.0);

/* définition du node n°38*/
const myNode38 = object.addCommonOperation();
myNode38.leftArg.set(myNode36);
myNode38.rightArg.set(myNode37);

/* définition du node n°39*/
const myNode39 = object.addBox();
myNode39.point1.set(2.5001,2.0271,-0.5949);
myNode39.point2.set(1.0928,1.0198,0.3638);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(0.0,0.0,0.0);
myNode39.innerRotation.angle.set(0.0);

/* définition du node n°40*/
const myNode40 = object.addBox();
myNode40.point1.set(-3.5919,-2.5119,-0.5949);
myNode40.point2.set(1.3538,0.8028,0.2268);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(0.0,0.0,0.0);
myNode40.innerRotation.angle.set(0.0);

/* définition du node n°41*/
const myNode41 = object.addCylinder();
myNode41.point1.set(-2.236,-2.519,-18.0999);
myNode41.point2.set(0,0,17.7319);
myNode41.radius.set(0.263);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,0.0,0.0);
myNode41.innerRotation.angle.set(0.0);

/* définition du node n°42*/
const myNode42 = object.addCutOperation();
myNode42.leftArg.set(myNode40);
myNode42.rightArg.set(myNode41);

/* définition du node n°43*/
const myNode43 = object.addCylinder();
myNode43.point1.set(-3.045,-3.047,-0.5949);
myNode43.point2.set(0,0,0.3638);
myNode43.radius.set(0.541);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(0.0,0.0,0.0);
myNode43.innerRotation.angle.set(0.0);

/* définition du node n°44*/
const myNode44 = object.addSphere();
myNode44.center.set(0,0,0);
myNode44.radius.set(54.29981583762508);

/* définition du node n°45*/
const myNode45 = object.addCylinder();
myNode45.point1.set(3.859,2.522,-18.0999);
myNode45.point2.set(0,0,17.5049);
myNode45.radius.set(0.268);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(0.0,0.0,0.0);
myNode45.innerRotation.angle.set(0.0);

/* définition du node n°46*/
const myNode46 = object.addCutOperation();
myNode46.leftArg.set(myNode44);
myNode46.rightArg.set(myNode45);

/* définition du node n°47*/
const myNode47 = object.addBox();
myNode47.point1.set(2.2401,1.3001,-0.5949);
myNode47.point2.set(2.2148,0.7268,0.2268);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(0.0,0.0,0.0);
myNode47.innerRotation.angle.set(0.0);

/* définition du node n°48*/
const myNode48 = object.addCylinder();
myNode48.point1.set(3.044,3.044,-0.3679);
myNode48.point2.set(0,0,0.1358);
myNode48.radius.set(0.545);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);

/* définition du node n°49*/
const myNode49 = object.addFuseOperation();
myNode49.leftArg.set(myNode47);
myNode49.rightArg.set(myNode48);

/* définition du node n°50*/
const myNode50 = object.addCommonOperation();
myNode50.leftArg.set(myNode46);
myNode50.rightArg.set(myNode49);

/* définition du node n°51*/
const myNode51 = object.addCylinder();
myNode51.point1.set(3.045,3.045,-0.5949);
myNode51.point2.set(0,0,0.4458);
myNode51.radius.set(0.253);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(0.0,0.0,0.0);
myNode51.innerRotation.angle.set(0.0);

/* définition du node n°52*/
const myNode52 = object.addBox();
myNode52.point1.set(2.5001,-3.0219,-0.1489);
myNode52.point2.set(0.8228,0.5098,0.1078);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,0.0,0.0);
myNode52.innerRotation.angle.set(0.0);

/* définition du node n°53*/
const myNode53 = object.addBox();
myNode53.point1.set(0.2731,-18.0999,-0.5949);
myNode53.point2.set(17.8268,15.8448,0.5548);
myNode53.innerRotation.center.set(0,0,0);
myNode53.innerRotation.axis.set(0.0,0.0,0.0);
myNode53.innerRotation.angle.set(0.0);

/* définition du node n°54*/
const myNode54 = object.addBox();
myNode54.point1.set(3.3231,-2.0269,-0.5949);
myNode54.point2.set(14.7768,20.1268,0.3638);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(0.0,0.0,0.0);
myNode54.innerRotation.angle.set(0.0);

/* définition du node n°55*/
const myNode55 = object.addFuseOperation();
myNode55.leftArg.set(myNode53);
myNode55.rightArg.set(myNode54);

/* définition du node n°56*/
const myNode56 = object.addBox();
myNode56.point1.set(2.2401,-2.5119,-0.5949);
myNode56.point2.set(1.6118,0.4848,0.3638);
myNode56.innerRotation.center.set(0,0,0);
myNode56.innerRotation.axis.set(0.0,0.0,0.0);
myNode56.innerRotation.angle.set(0.0);

/* définition du node n°57*/
const myNode57 = object.addCylinder();
myNode57.point1.set(3.045,-3.046,-0.1489);
myNode57.point2.set(0,0,0.7448);
myNode57.radius.set(0.136);
myNode57.innerRotation.center.set(0,0,0);
myNode57.innerRotation.axis.set(0.0,0.0,0.0);
myNode57.innerRotation.angle.set(0.0);

/* définition du node n°58*/
const myNode58 = object.addFuseOperation();
myNode58.leftArg.set(myNode56);
myNode58.rightArg.set(myNode57);

/* définition du node n°59*/
const myNode59 = object.addCommonOperation();
myNode59.leftArg.set(myNode55);
myNode59.rightArg.set(myNode58);

/* définition du node n°60*/
const myNode60 = object.addCylinder();
myNode60.point1.set(3.045,-3.045,-0.2319);
myNode60.point2.set(0,0,0.0818);
myNode60.radius.set(0.253);
myNode60.innerRotation.center.set(0,0,0);
myNode60.innerRotation.axis.set(0.0,0.0,0.0);
myNode60.innerRotation.angle.set(0.0);

/* définition du node n°61*/
const myNode61 = object.addBox();
myNode61.point1.set(3.3231,-1.7089,-0.5949);
myNode61.point2.set(0.5288,3.0088,0.2268);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(0.0,0.0,0.0);
myNode61.innerRotation.angle.set(0.0);

/* définition du node n°62*/
const myNode62 = object.addCylinder();
myNode62.point1.set(3.043,-3.043,-0.5949);
myNode62.point2.set(0,0,0.3638);
myNode62.radius.set(0.543);
myNode62.innerRotation.center.set(0,0,0);
myNode62.innerRotation.axis.set(0.0,0.0,0.0);
myNode62.innerRotation.angle.set(0.0);

/* définition du node n°63*/
const myNode63_1 = object.addFuseOperation();
myNode63_1.leftArg.set(myNode52);
myNode63_1.rightArg.set(myNode52);
const myNode63_2 = object.addFuseOperation();
myNode63_2.leftArg.set(myNode63_1);
myNode63_2.rightArg.set(myNode59);
const myNode63_3 = object.addFuseOperation();
myNode63_3.leftArg.set(myNode63_2);
myNode63_3.rightArg.set(myNode60);
const myNode63_4 = object.addFuseOperation();
myNode63_4.leftArg.set(myNode63_3);
myNode63_4.rightArg.set(myNode61);
myNode63 = object.addFuseOperation();
myNode63.leftArg.set(myNode63_4);
myNode63.rightArg.set(myNode62);

/* définition du node n°64*/
const myNode64 = object.addCylinder();
myNode64.point1.set(4.727,-1.982,-0.59495);
myNode64.point2.set(0,0,18.6949);
myNode64.radius.set(0.136);
myNode64.innerRotation.center.set(0,0,0);
myNode64.innerRotation.axis.set(0.0,0.0,0.0);
myNode64.innerRotation.angle.set(0.0);

/* définition du node n°65*/
const myNode65 = object.addBox();
myNode65.point1.set(-0.273,-2.512,-0.595);
myNode65.point2.set(5.001,0.258,0.446);
myNode65.innerRotation.center.set(0,0,0);
myNode65.innerRotation.axis.set(0.0,0.0,0.0);
myNode65.innerRotation.angle.set(0.0);

/* définition du node n°66*/
const myNode66 = object.addCutOperation();
myNode66.leftArg.set(myNode64);
myNode66.rightArg.set(myNode65);

/* définition du node n°67*/
const myNode67 = object.addCylinder();
myNode67.point1.set(2.24,-2.515,-0.59495);
myNode67.point2.set(0,0,0.3639);
myNode67.radius.set(0.258);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(0.0,0.0,0.0);
myNode67.innerRotation.angle.set(0.0);

/* définition du node n°68*/
const myNode68 = object.addBox();
myNode68.point1.set(2.24005,-18.0999,-0.36795);
myNode68.point2.set(0.2599,15.5879,0.1359);
myNode68.innerRotation.center.set(0,0,0);
myNode68.innerRotation.axis.set(0.0,0.0,0.0);
myNode68.innerRotation.angle.set(0.0);

/* définition du node n°69*/
const myNode69 = object.addCylinder();
myNode69.point1.set(3.851,-2.517,-0.59495);
myNode69.point2.set(0,0,0.3639);
myNode69.radius.set(0.259);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(0.0,0.0,0.0);
myNode69.innerRotation.angle.set(0.0);

/* définition du node n°70*/
const myNode70 = object.addBox();
myNode70.point1.set(0.27305,-3.02195,-0.14895);
myNode70.point2.set(3.0499,0.5099,18.2489);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(0.0,0.0,0.0);
myNode70.innerRotation.angle.set(0.0);

/* définition du node n°71*/
const myNode71 = object.addCylinder();
myNode71.point1.set(3.045,-3.046,-0.368);
myNode71.point2.set(0,0,18.468);
myNode71.radius.set(0.136);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(0.0,0.0,0.0);
myNode71.innerRotation.angle.set(0.0);

/* définition du node n°72*/
const myNode72 = object.addCutOperation();
myNode72.leftArg.set(myNode70);
myNode72.rightArg.set(myNode71);

/* définition du node n°73*/
const myNode73_1 = object.addFuseOperation();
myNode73_1.leftArg.set(myNode66);
myNode73_1.rightArg.set(myNode66);
const myNode73_2 = object.addFuseOperation();
myNode73_2.leftArg.set(myNode73_1);
myNode73_2.rightArg.set(myNode67);
const myNode73_3 = object.addFuseOperation();
myNode73_3.leftArg.set(myNode73_2);
myNode73_3.rightArg.set(myNode68);
const myNode73_4 = object.addFuseOperation();
myNode73_4.leftArg.set(myNode73_3);
myNode73_4.rightArg.set(myNode69);
myNode73 = object.addFuseOperation();
myNode73.leftArg.set(myNode73_4);
myNode73.rightArg.set(myNode72);

/* définition du node n°74*/
const myNode74 = object.addCutOperation();
myNode74.leftArg.set(myNode63);
myNode74.rightArg.set(myNode73);

/* définition du node n°75*/
const myNode75 = object.addBox();
myNode75.point1.set(4.0501,1.3001,-0.5949);
myNode75.point2.set(0.6788,0.9548,1.1908);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(0.0,0.0,0.0);
myNode75.innerRotation.angle.set(0.0);

/* définition du node n°76*/
const myNode76 = object.addBox();
myNode76.point1.set(-18.0999,1.30005,-0.59495);
myNode76.point2.set(21.6929,0.4089,0.3639);
myNode76.innerRotation.center.set(0,0,0);
myNode76.innerRotation.axis.set(0.0,0.0,0.0);
myNode76.innerRotation.angle.set(0.0);

/* définition du node n°77*/
const myNode77 = object.addBox();
myNode77.point1.set(4.45505,-18.0999,-0.59495);
myNode77.point2.set(0.2739,20.1269,18.6949);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(0.0,0.0,0.0);
myNode77.innerRotation.angle.set(0.0);

/* définition du node n°78*/
const myNode78 = object.addBox();
myNode78.point1.set(3.59305,1.30005,0.31405);
myNode78.point2.set(0.8609,0.9549,17.7859);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(0.0,0.0,0.0);
myNode78.innerRotation.angle.set(0.0);

/* définition du node n°79*/
const myNode79 = object.addCylinder();
myNode79.point1.set(4.727,1.984,-18.0999);
myNode79.point2.set(0,0,36.1999);
myNode79.radius.set(0.137);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(0.0,0.0,0.0);
myNode79.innerRotation.angle.set(0.0);

/* définition du node n°80*/
const myNode80_1 = object.addFuseOperation();
myNode80_1.leftArg.set(myNode76);
myNode80_1.rightArg.set(myNode76);
const myNode80_2 = object.addFuseOperation();
myNode80_2.leftArg.set(myNode80_1);
myNode80_2.rightArg.set(myNode77);
const myNode80_3 = object.addFuseOperation();
myNode80_3.leftArg.set(myNode80_2);
myNode80_3.rightArg.set(myNode78);
myNode80 = object.addFuseOperation();
myNode80.leftArg.set(myNode80_3);
myNode80.rightArg.set(myNode79);

/* définition du node n°81*/
const myNode81 = object.addCutOperation();
myNode81.leftArg.set(myNode75);
myNode81.rightArg.set(myNode80);

/* définition du node n°82*/
const myNode82 = object.addBox();
myNode82.point1.set(-18.0999,1.7091,-0.5949);
myNode82.point2.set(36.1998,0.8008,1.1908);
myNode82.innerRotation.center.set(0,0,0);
myNode82.innerRotation.axis.set(0.0,0.0,0.0);
myNode82.innerRotation.angle.set(0.0);

/* définition du node n°83*/
const myNode83 = object.addBox();
myNode83.point1.set(2.2401,2.0271,-0.5949);
myNode83.point2.set(1.8098,1.0198,0.9088);
myNode83.innerRotation.center.set(0,0,0);
myNode83.innerRotation.axis.set(0.0,0.0,0.0);
myNode83.innerRotation.angle.set(0.0);

/* définition du node n°84*/
const myNode84 = object.addCylinder();
myNode84.point1.set(2.247,2.508,-0.59495);
myNode84.point2.set(0,0,18.6949);
myNode84.radius.set(0.248);
myNode84.innerRotation.center.set(0,0,0);
myNode84.innerRotation.axis.set(0.0,0.0,0.0);
myNode84.innerRotation.angle.set(0.0);

/* définition du node n°85*/
const myNode85 = object.addCutOperation();
myNode85.leftArg.set(myNode83);
myNode85.rightArg.set(myNode84);

/* définition du node n°86*/
const myNode86 = object.addCylinder();
myNode86.point1.set(3.859,2.522,-18.0999);
myNode86.point2.set(0,0,18.0589);
myNode86.radius.set(0.268);
myNode86.innerRotation.center.set(0,0,0);
myNode86.innerRotation.axis.set(0.0,0.0,0.0);
myNode86.innerRotation.angle.set(0.0);

/* définition du node n°87*/
const myNode87 = object.addBox();
myNode87.point1.set(2.24005,2.25505,-0.23195);
myNode87.point2.set(1.8099,0.7919,0.5449);
myNode87.innerRotation.center.set(0,0,0);
myNode87.innerRotation.axis.set(0.0,0.0,0.0);
myNode87.innerRotation.angle.set(0.0);

/* définition du node n°88*/
const myNode88 = object.addFuseOperation();
myNode88.leftArg.set(myNode86);
myNode88.rightArg.set(myNode87);

/* définition du node n°89*/
const myNode89 = object.addCutOperation();
myNode89.leftArg.set(myNode85);
myNode89.rightArg.set(myNode88);

/* définition du node n°90*/
const myNode90 = object.addCylinder();
myNode90.point1.set(4.729,1.981,-18.0999);
myNode90.point2.set(0,0,36.1998);
myNode90.radius.set(0.27);
myNode90.innerRotation.center.set(0,0,0);
myNode90.innerRotation.axis.set(0.0,0.0,0.0);
myNode90.innerRotation.angle.set(0.0);

/* définition du node n°91*/
const myNode91 = object.addBox();
myNode91.point1.set(4.4551,1.7091,-0.5949);
myNode91.point2.set(0.2738,0.3178,1.1908);
myNode91.innerRotation.center.set(0,0,0);
myNode91.innerRotation.axis.set(0.0,0.0,0.0);
myNode91.innerRotation.angle.set(0.0);

/* définition du node n°92*/
const myNode92 = object.addFuseOperation();
myNode92.leftArg.set(myNode90);
myNode92.rightArg.set(myNode91);

/* définition du node n°93*/
const myNode93 = object.addCylinder();
myNode93.point1.set(4.727,1.984,-18.0999);
myNode93.point2.set(0,0,18.6949);
myNode93.radius.set(0.137);
myNode93.innerRotation.center.set(0,0,0);
myNode93.innerRotation.axis.set(0.0,0.0,0.0);
myNode93.innerRotation.angle.set(0.0);

/* définition du node n°94*/
const myNode94 = object.addCutOperation();
myNode94.leftArg.set(myNode92);
myNode94.rightArg.set(myNode93);

/* définition du node n°95*/
const myNode95 = object.addFuseOperation();
myNode95.leftArg.set(myNode89);
myNode95.rightArg.set(myNode94);

/* définition du node n°96*/
const myNode96 = object.addCommonOperation();
myNode96.leftArg.set(myNode82);
myNode96.rightArg.set(myNode95);

/* définition du node n°97*/
const myNode97 = object.addBox();
myNode97.point1.set(-4.4549,-2.0269,-0.3679);
myNode97.point2.set(0.4048,0.7268,0.6818);
myNode97.innerRotation.center.set(0,0,0);
myNode97.innerRotation.axis.set(0.0,0.0,0.0);
myNode97.innerRotation.angle.set(0.0);

/* définition du node n°98*/
const myNode98 = object.addCylinder();
myNode98.point1.set(3.044,3.044,-0.5949);
myNode98.point2.set(0,0,0.2268);
myNode98.radius.set(0.545);
myNode98.innerRotation.center.set(0,0,0);
myNode98.innerRotation.axis.set(0.0,0.0,0.0);
myNode98.innerRotation.angle.set(0.0);

/* définition du node n°99*/
const myNode99 = object.addCylinder();
myNode99.point1.set(-3.046,-3.046,-0.5949);
myNode99.point2.set(0,0,0.5548);
myNode99.radius.set(0.136);
myNode99.innerRotation.center.set(0,0,0);
myNode99.innerRotation.axis.set(0.0,0.0,0.0);
myNode99.innerRotation.angle.set(0.0);

/* définition du node n°100*/
const myNode100 = object.addBox();
myNode100.point1.set(-0.2729,2.5101,-0.5949);
myNode100.point2.set(18.3728,0.5368,18.6948);
myNode100.innerRotation.center.set(0,0,0);
myNode100.innerRotation.axis.set(0.0,0.0,0.0);
myNode100.innerRotation.angle.set(0.0);

/* définition du node n°101*/
const myNode101 = object.addCylinder();
myNode101.point1.set(-3.045,3.045,-0.2319);
myNode101.point2.set(0,0,0.1908);
myNode101.radius.set(0.136);
myNode101.innerRotation.center.set(0,0,0);
myNode101.innerRotation.axis.set(0.0,0.0,0.0);
myNode101.innerRotation.angle.set(0.0);

/* définition du node n°102*/
const myNode102 = object.addBox();
myNode102.point1.set(-4.4549,2.5101,-0.5949);
myNode102.point2.set(1.9548,15.5898,0.4458);
myNode102.innerRotation.center.set(0,0,0);
myNode102.innerRotation.axis.set(0.0,0.0,0.0);
myNode102.innerRotation.angle.set(0.0);

/* définition du node n°103*/
const myNode103_1 = object.addFuseOperation();
myNode103_1.leftArg.set(myNode100);
myNode103_1.rightArg.set(myNode100);
const myNode103_2 = object.addFuseOperation();
myNode103_2.leftArg.set(myNode103_1);
myNode103_2.rightArg.set(myNode101);
myNode103 = object.addFuseOperation();
myNode103.leftArg.set(myNode103_2);
myNode103.rightArg.set(myNode102);

/* définition du node n°104*/
const myNode104 = object.addBox();
myNode104.point1.set(-3.5919,2.0271,-0.5949);
myNode104.point2.set(1.3538,1.0198,0.3638);
myNode104.innerRotation.center.set(0,0,0);
myNode104.innerRotation.axis.set(0.0,0.0,0.0);
myNode104.innerRotation.angle.set(0.0);

/* définition du node n°105*/
const myNode105 = object.addCylinder();
myNode105.point1.set(0,2.526,-0.5949);
myNode105.point2.set(0,0,1.1908);
myNode105.radius.set(0.273);
myNode105.innerRotation.center.set(0,0,0);
myNode105.innerRotation.axis.set(0.0,0.0,0.0);
myNode105.innerRotation.angle.set(0.0);

/* définition du node n°106*/
const myNode106 = object.addCylinder();
myNode106.point1.set(0,2.527,-0.59495);
myNode106.point2.set(0,0,18.6949);
myNode106.radius.set(0.135);
myNode106.innerRotation.center.set(0,0,0);
myNode106.innerRotation.axis.set(0.0,0.0,0.0);
myNode106.innerRotation.angle.set(0.0);

/* définition du node n°107*/
const myNode107 = object.addCutOperation();
myNode107.leftArg.set(myNode105);
myNode107.rightArg.set(myNode106);

/* définition du node n°108*/
const myNode108 = object.addCommonOperation();
myNode108.leftArg.set(myNode44);
myNode108.rightArg.set(myNode107);

/* définition du node n°109*/
const myNode109 = object.addCylinder();
myNode109.point1.set(-3.044,3.047,-0.5949);
myNode109.point2.set(0,0,0.3638);
myNode109.radius.set(0.541);
myNode109.innerRotation.center.set(0,0,0);
myNode109.innerRotation.axis.set(0.0,0.0,0.0);
myNode109.innerRotation.angle.set(0.0);

/* définition du node n°110*/
const myNode110 = object.addCylinder();
myNode110.point1.set(-3.045,3.045,-0.2319);
myNode110.point2.set(0,0,0.1908);
myNode110.radius.set(0.254);
myNode110.innerRotation.center.set(0,0,0);
myNode110.innerRotation.axis.set(0.0,0.0,0.0);
myNode110.innerRotation.angle.set(0.0);

/* définition du node n°111*/
const myNode111_1 = object.addFuseOperation();
myNode111_1.leftArg.set(myNode104);
myNode111_1.rightArg.set(myNode104);
const myNode111_2 = object.addFuseOperation();
myNode111_2.leftArg.set(myNode111_1);
myNode111_2.rightArg.set(myNode108);
const myNode111_3 = object.addFuseOperation();
myNode111_3.leftArg.set(myNode111_2);
myNode111_3.rightArg.set(myNode109);
myNode111 = object.addFuseOperation();
myNode111.leftArg.set(myNode111_3);
myNode111.rightArg.set(myNode110);

/* définition du node n°112*/
const myNode112 = object.addCommonOperation();
myNode112.leftArg.set(myNode103);
myNode112.rightArg.set(myNode111);

/* définition du node n°113*/
const myNode113 = object.addBox();
myNode113.point1.set(-4.4549,-2.2539,-0.5949);
myNode113.point2.set(4.1818,0.2268,0.9088);
myNode113.innerRotation.center.set(0,0,0);
myNode113.innerRotation.axis.set(0.0,0.0,0.0);
myNode113.innerRotation.angle.set(0.0);

/* définition du node n°114*/
const myNode114 = object.addBox();
myNode114.point1.set(-4.4549,-2.0269,-0.5949);
myNode114.point2.set(4.1818,0.7268,0.2268);
myNode114.innerRotation.center.set(0,0,0);
myNode114.innerRotation.axis.set(0.0,0.0,0.0);
myNode114.innerRotation.angle.set(0.0);

/* définition du node n°115*/
const myNode115 = object.addFuseOperation();
myNode115.leftArg.set(myNode113);
myNode115.rightArg.set(myNode114);

/* définition du node n°116*/
const myNode116 = object.addBox();
myNode116.point1.set(-3.68595,-2.25395,-0.09395);
myNode116.point2.set(0.8639,0.2269,0.4079);
myNode116.innerRotation.center.set(0,0,0);
myNode116.innerRotation.axis.set(0.0,0.0,0.0);
myNode116.innerRotation.angle.set(0.0);

/* définition du node n°117*/
const myNode117 = object.addCutOperation();
myNode117.leftArg.set(myNode115);
myNode117.rightArg.set(myNode116);

/* définition du node n°118*/
const myNode118 = object.addCylinder();
myNode118.point1.set(3.045,3.046,-0.1489);
myNode118.point2.set(0,0,0.1078);
myNode118.radius.set(0.136);
myNode118.innerRotation.center.set(0,0,0);
myNode118.innerRotation.axis.set(0.0,0.0,0.0);
myNode118.innerRotation.angle.set(0.0);

/* définition du node n°119*/
const myNode119 = object.addCylinder();
myNode119.point1.set(4.727,-1.981,-0.5949);
myNode119.point2.set(0,0,1.1908);
myNode119.radius.set(0.272);
myNode119.innerRotation.center.set(0,0,0);
myNode119.innerRotation.axis.set(0.0,0.0,0.0);
myNode119.innerRotation.angle.set(0.0);

/* définition du node n°120*/
const myNode120 = object.addBox();
myNode120.point1.set(-0.2729,-2.5119,-0.5949);
myNode120.point2.set(5.0008,1.2118,1.1908);
myNode120.innerRotation.center.set(0,0,0);
myNode120.innerRotation.axis.set(0.0,0.0,0.0);
myNode120.innerRotation.angle.set(0.0);

/* définition du node n°121*/
const myNode121 = object.addBox();
myNode121.point1.set(2.5001,-3.0219,-0.5949);
myNode121.point2.set(1.9548,4.3218,0.9088);
myNode121.innerRotation.center.set(0,0,0);
myNode121.innerRotation.axis.set(0.0,0.0,0.0);
myNode121.innerRotation.angle.set(0.0);

/* définition du node n°122*/
const myNode122 = object.addCylinder();
myNode122.point1.set(-0.002,-2.524,-0.5949);
myNode122.point2.set(0,0,1.1908);
myNode122.radius.set(0.276);
myNode122.innerRotation.center.set(0,0,0);
myNode122.innerRotation.axis.set(0.0,0.0,0.0);
myNode122.innerRotation.angle.set(0.0);

/* définition du node n°123*/
const myNode123_1 = object.addFuseOperation();
myNode123_1.leftArg.set(myNode119);
myNode123_1.rightArg.set(myNode119);
const myNode123_2 = object.addFuseOperation();
myNode123_2.leftArg.set(myNode123_1);
myNode123_2.rightArg.set(myNode120);
const myNode123_3 = object.addFuseOperation();
myNode123_3.leftArg.set(myNode123_2);
myNode123_3.rightArg.set(myNode121);
myNode123 = object.addFuseOperation();
myNode123.leftArg.set(myNode123_3);
myNode123.rightArg.set(myNode122);

/* définition du node n°124*/
const myNode124 = object.addBox();
myNode124.point1.set(-0.27295,-2.25395,0.31405);
myNode124.point2.set(4.7269,3.5539,0.2819);
myNode124.innerRotation.center.set(0,0,0);
myNode124.innerRotation.axis.set(0.0,0.0,0.0);
myNode124.innerRotation.angle.set(0.0);

/* définition du node n°125*/
const myNode125 = object.addBox();
myNode125.point1.set(-18.0999,-2.02695,-0.36795);
myNode125.point2.set(22.1499,3.3269,18.4679);
myNode125.innerRotation.center.set(0,0,0);
myNode125.innerRotation.axis.set(0.0,0.0,0.0);
myNode125.innerRotation.angle.set(0.0);

/* définition du node n°126*/
const myNode126 = object.addBox();
myNode126.point1.set(4.45505,-1.70895,-18.0999);
myNode126.point2.set(13.6459,0.4089,36.1999);
myNode126.innerRotation.center.set(0,0,0);
myNode126.innerRotation.axis.set(0.0,0.0,0.0);
myNode126.innerRotation.angle.set(0.0);

/* définition du node n°127*/
const myNode127 = object.addCylinder();
myNode127.point1.set(0,-2.528,-0.59495);
myNode127.point2.set(0,0,18.6949);
myNode127.radius.set(0.136);
myNode127.innerRotation.center.set(0,0,0);
myNode127.innerRotation.axis.set(0.0,0.0,0.0);
myNode127.innerRotation.angle.set(0.0);

/* définition du node n°128*/
const myNode128 = object.addBox();
myNode128.point1.set(0.27305,-18.0999,-0.59495);
myNode128.point2.set(17.8269,15.8449,1.1909);
myNode128.innerRotation.center.set(0,0,0);
myNode128.innerRotation.axis.set(0.0,0.0,0.0);
myNode128.innerRotation.angle.set(0.0);

/* définition du node n°129*/
const myNode129 = object.addBox();
myNode129.point1.set(2.5,-3.022,-0.595);
myNode129.point2.set(1.093,1.313,0.364);
myNode129.innerRotation.center.set(0,0,0);
myNode129.innerRotation.axis.set(0.0,0.0,0.0);
myNode129.innerRotation.angle.set(0.0);

/* définition du node n°130*/
const myNode130 = object.addCutOperation();
myNode130.leftArg.set(myNode128);
myNode130.rightArg.set(myNode129);

/* définition du node n°131*/
const myNode131 = object.addBox();
myNode131.point1.set(2.50005,-1.29995,-18.0999);
myNode131.point2.set(1.0929,2.5999,18.4139);
myNode131.innerRotation.center.set(0,0,0);
myNode131.innerRotation.axis.set(0.0,0.0,0.0);
myNode131.innerRotation.angle.set(0.0);

/* définition du node n°132*/
const myNode132_1 = object.addFuseOperation();
myNode132_1.leftArg.set(myNode124);
myNode132_1.rightArg.set(myNode124);
const myNode132_2 = object.addFuseOperation();
myNode132_2.leftArg.set(myNode132_1);
myNode132_2.rightArg.set(myNode64);
const myNode132_3 = object.addFuseOperation();
myNode132_3.leftArg.set(myNode132_2);
myNode132_3.rightArg.set(myNode125);
const myNode132_4 = object.addFuseOperation();
myNode132_4.leftArg.set(myNode132_3);
myNode132_4.rightArg.set(myNode126);
const myNode132_5 = object.addFuseOperation();
myNode132_5.leftArg.set(myNode132_4);
myNode132_5.rightArg.set(myNode127);
const myNode132_6 = object.addFuseOperation();
myNode132_6.leftArg.set(myNode132_5);
myNode132_6.rightArg.set(myNode130);
myNode132 = object.addFuseOperation();
myNode132.leftArg.set(myNode132_6);
myNode132.rightArg.set(myNode131);

/* définition du node n°133*/
const myNode133 = object.addCutOperation();
myNode133.leftArg.set(myNode123);
myNode133.rightArg.set(myNode132);

/* définition du node n°134*/
const myNode134_1 = object.addFuseOperation();
myNode134_1.leftArg.set(myNode22);
myNode134_1.rightArg.set(myNode22);
const myNode134_2 = object.addFuseOperation();
myNode134_2.leftArg.set(myNode134_1);
myNode134_2.rightArg.set(myNode25);
const myNode134_3 = object.addFuseOperation();
myNode134_3.leftArg.set(myNode134_2);
myNode134_3.rightArg.set(myNode38);
const myNode134_4 = object.addFuseOperation();
myNode134_4.leftArg.set(myNode134_3);
myNode134_4.rightArg.set(myNode39);
const myNode134_5 = object.addFuseOperation();
myNode134_5.leftArg.set(myNode134_4);
myNode134_5.rightArg.set(myNode42);
const myNode134_6 = object.addFuseOperation();
myNode134_6.leftArg.set(myNode134_5);
myNode134_6.rightArg.set(myNode43);
const myNode134_7 = object.addFuseOperation();
myNode134_7.leftArg.set(myNode134_6);
myNode134_7.rightArg.set(myNode50);
const myNode134_8 = object.addFuseOperation();
myNode134_8.leftArg.set(myNode134_7);
myNode134_8.rightArg.set(myNode51);
const myNode134_9 = object.addFuseOperation();
myNode134_9.leftArg.set(myNode134_8);
myNode134_9.rightArg.set(myNode74);
const myNode134_10 = object.addFuseOperation();
myNode134_10.leftArg.set(myNode134_9);
myNode134_10.rightArg.set(myNode81);
const myNode134_11 = object.addFuseOperation();
myNode134_11.leftArg.set(myNode134_10);
myNode134_11.rightArg.set(myNode96);
const myNode134_12 = object.addFuseOperation();
myNode134_12.leftArg.set(myNode134_11);
myNode134_12.rightArg.set(myNode97);
const myNode134_13 = object.addFuseOperation();
myNode134_13.leftArg.set(myNode134_12);
myNode134_13.rightArg.set(myNode98);
const myNode134_14 = object.addFuseOperation();
myNode134_14.leftArg.set(myNode134_13);
myNode134_14.rightArg.set(myNode99);
const myNode134_15 = object.addFuseOperation();
myNode134_15.leftArg.set(myNode134_14);
myNode134_15.rightArg.set(myNode112);
const myNode134_16 = object.addFuseOperation();
myNode134_16.leftArg.set(myNode134_15);
myNode134_16.rightArg.set(myNode117);
const myNode134_17 = object.addFuseOperation();
myNode134_17.leftArg.set(myNode134_16);
myNode134_17.rightArg.set(myNode118);
myNode134 = object.addFuseOperation();
myNode134.leftArg.set(myNode134_17);
myNode134.rightArg.set(myNode133);

/* définition du node n°135*/
const myNode135 = object.addCommonOperation();
myNode135.leftArg.set(myNode0);
myNode135.rightArg.set(myNode134);
/*END Geometry Object Definition*/