/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-3.5919,-2.5119,-0.5949);
myNode0.point2.set(-2.2381,-1.7090999999999998,-0.3681);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(-2.915,-2.1105,-0.4815);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(-2.236,-2.519,-18.0999);
myNode1.point2.set(-2.236,-2.519,-0.3680000000000021);
myNode1.radius.set(0.263);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addCutOperation();
myNode2.leftArg.set(myNode0);
myNode2.rightArg.set(myNode1);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addBox();
myNode3.point1.set(-4.4549,-2.0269,-0.3679);
myNode3.point2.set(-4.0501000000000005,-1.3001,0.31389999999999996);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);
myNode3.innerTranslation.vector.set(-4.2525,-1.6635,-0.027000000000000024);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(3.043,-3.043,-0.5949);
myNode4.point2.set(3.043,-3.043,-0.23109999999999997);
myNode4.radius.set(0.543);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(3.045,-3.045,-0.2319);
myNode5.point2.set(3.045,-3.045,-0.1501);
myNode5.radius.set(0.253);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addBox();
myNode6.point1.set(2.2401,-2.5119,-0.5949);
myNode6.point2.set(3.8518999999999997,-2.0271,-0.23109999999999997);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.innerTranslation.vector.set(3.046,-2.2695,-0.413);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addCylinder();
myNode7.point1.set(3.045,-3.046,-0.1489);
myNode7.point2.set(3.045,-3.046,0.5959);
myNode7.radius.set(0.136);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addFuseOperation();
myNode8.leftArg.set(myNode6);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(3.3231,-2.0269,-0.5949);
myNode9.point2.set(18.099899999999998,18.099899999999998,-0.23109999999999997);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.innerTranslation.vector.set(10.711500000000001,8.0365,-0.413);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(0.2731,-18.0999,-0.5949);
myNode10.point2.set(18.099899999999998,-2.2551000000000023,-0.040100000000000025);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.innerTranslation.vector.set(9.186499999999999,-10.177500000000002,-0.3175);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addFuseOperation();
myNode11.leftArg.set(myNode9);
myNode11.rightArg.set(myNode10);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCommonOperation();
myNode12.leftArg.set(myNode8);
myNode12.rightArg.set(myNode11);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addBox();
myNode13.point1.set(3.3231,-1.7089,-0.5949);
myNode13.point2.set(3.8519,1.2998999999999998,-0.3681);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);
myNode13.innerTranslation.vector.set(3.5875000000000004,-0.20450000000000013,-0.4815);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addBox();
myNode14.point1.set(2.5001,-3.0219,-0.1489);
myNode14.point2.set(3.3229,-2.5121,-0.0411);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);
myNode14.innerTranslation.vector.set(2.9115,-2.767,-0.095);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15_1 = myNode4.clone();
myNode15_1.isVisible = false;
const myNode15_2 = object.addFuseOperation();
myNode15_2.leftArg.set(myNode15_1);
myNode15_2.rightArg.set(myNode5);
myNode15_2.isVisible = false;
const myNode15_3 = object.addFuseOperation();
myNode15_3.leftArg.set(myNode15_2);
myNode15_3.rightArg.set(myNode12);
myNode15_3.isVisible = false;
const myNode15_4 = object.addFuseOperation();
myNode15_4.leftArg.set(myNode15_3);
myNode15_4.rightArg.set(myNode13);
myNode15_4.isVisible = false;
myNode15 = object.addFuseOperation();
myNode15.leftArg.set(myNode15_4);
myNode15.rightArg.set(myNode14);
myNode15.isVisible = false;
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(2.24,-2.515,-0.59495);
myNode16.point2.set(2.24,-2.515,-0.23104999999999998);
myNode16.radius.set(0.258);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(2.24005,-18.0999,-0.36795);
myNode17.point2.set(2.49995,-2.5120000000000022,-0.23205);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.innerTranslation.vector.set(2.37,-10.305950000000003,-0.3);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(3.851,-2.517,-0.59495);
myNode18.point2.set(3.851,-2.517,-0.23104999999999998);
myNode18.radius.set(0.259);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addCylinder();
myNode19.point1.set(4.727,-1.982,-0.59495);
myNode19.point2.set(4.727,-1.982,18.09995);
myNode19.radius.set(0.136);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(0.0,0.0,0.0);
myNode19.innerRotation.angle.set(0.0);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addBox();
myNode20.point1.set(-0.273,-2.512,-0.595);
myNode20.point2.set(4.728000000000001,-2.254,-0.14899999999999997);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);
myNode20.innerTranslation.vector.set(2.2275,-2.383,-0.372);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addCutOperation();
myNode21.leftArg.set(myNode19);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addBox();
myNode22.point1.set(0.27305,-3.02195,-0.14895);
myNode22.point2.set(3.32295,-2.51205,18.09995);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(0.0,0.0,0.0);
myNode22.innerRotation.angle.set(0.0);
myNode22.innerTranslation.vector.set(1.798,-2.767,8.9755);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addCylinder();
myNode23.point1.set(3.045,-3.046,-0.368);
myNode23.point2.set(3.045,-3.046,18.1);
myNode23.radius.set(0.136);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addCutOperation();
myNode24.leftArg.set(myNode22);
myNode24.rightArg.set(myNode23);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25_1 = myNode16.clone();
myNode25_1.isVisible = false;
const myNode25_2 = object.addFuseOperation();
myNode25_2.leftArg.set(myNode25_1);
myNode25_2.rightArg.set(myNode17);
myNode25_2.isVisible = false;
const myNode25_3 = object.addFuseOperation();
myNode25_3.leftArg.set(myNode25_2);
myNode25_3.rightArg.set(myNode18);
myNode25_3.isVisible = false;
const myNode25_4 = object.addFuseOperation();
myNode25_4.leftArg.set(myNode25_3);
myNode25_4.rightArg.set(myNode21);
myNode25_4.isVisible = false;
myNode25 = object.addFuseOperation();
myNode25.leftArg.set(myNode25_4);
myNode25.rightArg.set(myNode24);
myNode25.isVisible = false;
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addCutOperation();
myNode26.leftArg.set(myNode15);
myNode26.rightArg.set(myNode25);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addBox();
myNode27.point1.set(4.0501,1.3001,-0.5949);
myNode27.point2.set(4.728899999999999,2.2549,0.5959000000000001);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);
myNode27.innerTranslation.vector.set(4.3895,1.7775,0.000500000000000056);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addBox();
myNode28.point1.set(4.45505,-18.0999,-0.59495);
myNode28.point2.set(4.72895,2.0269999999999975,18.09995);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(0.0,0.0,0.0);
myNode28.innerRotation.angle.set(0.0);
myNode28.innerTranslation.vector.set(4.592,-8.036450000000002,8.7525);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addCylinder();
myNode29.point1.set(4.727,1.984,-18.0999);
myNode29.point2.set(4.727,1.984,18.099999999999998);
myNode29.radius.set(0.137);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addBox();
myNode30.point1.set(-18.0999,1.30005,-0.59495);
myNode30.point2.set(3.593,1.70895,-0.23104999999999998);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);
myNode30.innerTranslation.vector.set(-7.253450000000001,1.5045,-0.413);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addBox();
myNode31.point1.set(3.59305,1.30005,0.31405);
myNode31.point2.set(4.45395,2.25495,18.099950000000003);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(0.0,0.0,0.0);
myNode31.innerRotation.angle.set(0.0);
myNode31.innerTranslation.vector.set(4.0235,1.7774999999999999,9.207);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32_1 = myNode28.clone();
myNode32_1.isVisible = false;
const myNode32_2 = object.addFuseOperation();
myNode32_2.leftArg.set(myNode32_1);
myNode32_2.rightArg.set(myNode29);
myNode32_2.isVisible = false;
const myNode32_3 = object.addFuseOperation();
myNode32_3.leftArg.set(myNode32_2);
myNode32_3.rightArg.set(myNode30);
myNode32_3.isVisible = false;
myNode32 = object.addFuseOperation();
myNode32.leftArg.set(myNode32_3);
myNode32.rightArg.set(myNode31);
myNode32.isVisible = false;
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addCutOperation();
myNode33.leftArg.set(myNode27);
myNode33.rightArg.set(myNode32);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addBox();
myNode34.point1.set(-3.9819,1.3001,-0.5949);
myNode34.point2.set(-2.2391,2.5099,-0.23109999999999997);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(0.0,0.0,0.0);
myNode34.innerRotation.angle.set(0.0);
myNode34.innerTranslation.vector.set(-3.1105,1.905,-0.413);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addCylinder();
myNode35.point1.set(-2.239,2.517,-18.0999);
myNode35.point2.set(-2.239,2.517,18.099999999999998);
myNode35.radius.set(0.26);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,0.0);
myNode35.innerRotation.angle.set(0.0);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addCutOperation();
myNode36.leftArg.set(myNode34);
myNode36.rightArg.set(myNode35);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addBox();
myNode37.point1.set(-4.7269,1.7091,-0.5949);
myNode37.point2.set(-4.4540999999999995,2.2539,18.0999);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0,0.0,0.0);
myNode37.innerRotation.angle.set(0.0);
myNode37.innerTranslation.vector.set(-4.5905,1.9815,8.752500000000001);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addBox();
myNode38.point1.set(-0.2729,2.2551,-0.5949);
myNode38.point2.set(0.2719,2.5099,0.5959000000000001);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(0.0,0.0,0.0);
myNode38.innerRotation.angle.set(0.0);
myNode38.innerTranslation.vector.set(-0.0005000000000000004,2.3825000000000003,0.000500000000000056);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addCylinder();
myNode39.point1.set(-4.727,1.983,-0.5949);
myNode39.point2.set(-4.727,1.983,0.5959000000000001);
myNode39.radius.set(0.271);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(0.0,0.0,0.0);
myNode39.innerRotation.angle.set(0.0);
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addBox();
myNode40.point1.set(-4.4549,-1.7089,-18.0999);
myNode40.point2.set(-3.3231,2.0268999999999995,0.31389999999999674);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(0.0,0.0,0.0);
myNode40.innerRotation.angle.set(0.0);
myNode40.innerTranslation.vector.set(-3.8890000000000002,0.1589999999999998,-8.893000000000002);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41 = object.addBox();
myNode41.point1.set(-4.4549,1.3001,-18.0999);
myNode41.point2.set(18.099899999999998,2.2549,0.31389999999999674);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,0.0,0.0);
myNode41.innerRotation.angle.set(0.0);
myNode41.innerTranslation.vector.set(6.8225,1.7775,-8.893000000000002);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42_1 = myNode36.clone();
myNode42_1.isVisible = false;
const myNode42_2 = object.addFuseOperation();
myNode42_2.leftArg.set(myNode42_1);
myNode42_2.rightArg.set(myNode37);
myNode42_2.isVisible = false;
const myNode42_3 = object.addFuseOperation();
myNode42_3.leftArg.set(myNode42_2);
myNode42_3.rightArg.set(myNode38);
myNode42_3.isVisible = false;
const myNode42_4 = object.addFuseOperation();
myNode42_4.leftArg.set(myNode42_3);
myNode42_4.rightArg.set(myNode39);
myNode42_4.isVisible = false;
const myNode42_5 = object.addFuseOperation();
myNode42_5.leftArg.set(myNode42_4);
myNode42_5.rightArg.set(myNode40);
myNode42_5.isVisible = false;
myNode42 = object.addFuseOperation();
myNode42.leftArg.set(myNode42_5);
myNode42.rightArg.set(myNode41);
myNode42.isVisible = false;
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addBox();
myNode43.point1.set(-18.0999,-1.7089,-0.5949);
myNode43.point2.set(2.2398999999999987,2.5099,0.5959000000000001);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(0.0,0.0,0.0);
myNode43.innerRotation.angle.set(0.0);
myNode43.innerTranslation.vector.set(-7.9300000000000015,0.40049999999999986,0.000500000000000056);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44 = object.addCylinder();
myNode44.point1.set(-3.847,2.51,-18.0999);
myNode44.point2.set(-3.847,2.51,18.099999999999998);
myNode44.radius.set(0.252);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(0.0,0.0,0.0);
myNode44.innerRotation.angle.set(0.0);
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45 = object.addCutOperation();
myNode45.leftArg.set(myNode43);
myNode45.rightArg.set(myNode44);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addCylinder();
myNode46.point1.set(0,2.527,-18.0999);
myNode46.point2.set(0,2.527,0.5949999999999989);
myNode46.radius.set(0.135);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(0.0,0.0,0.0);
myNode46.innerRotation.angle.set(0.0);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addCylinder();
myNode47.point1.set(-4.728,1.982,-18.0999);
myNode47.point2.set(-4.728,1.982,18.099999999999998);
myNode47.radius.set(0.136);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(0.0,0.0,0.0);
myNode47.innerRotation.angle.set(0.0);
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addFuseOperation();
myNode48.leftArg.set(myNode46);
myNode48.rightArg.set(myNode47);
myNode48.isVisible = false;

/* définition du node n°49*/
const myNode49 = object.addCutOperation();
myNode49.leftArg.set(myNode45);
myNode49.rightArg.set(myNode48);
myNode49.isVisible = false;

/* définition du node n°50*/
const myNode50 = object.addBox();
myNode50.point1.set(-3.98195,2.02705,-0.09395);
myNode50.point2.set(-3.1180499999999998,2.50895,0.31394999999999995);
myNode50.innerRotation.center.set(0,0,0);
myNode50.innerRotation.axis.set(0.0,0.0,0.0);
myNode50.innerRotation.angle.set(0.0);
myNode50.innerTranslation.vector.set(-3.55,2.268,0.10999999999999999);
myNode50.isVisible = false;

/* définition du node n°51*/
const myNode51 = object.addBox();
myNode51.point1.set(-3.59195,2.25505,-0.23195);
myNode51.point2.set(-0.2720500000000001,2.5099500000000003,-0.09505);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(0.0,0.0,0.0);
myNode51.innerRotation.angle.set(0.0);
myNode51.innerTranslation.vector.set(-1.9320000000000002,2.3825000000000003,-0.16349999999999998);
myNode51.isVisible = false;

/* définition du node n°52*/
const myNode52 = object.addBox();
myNode52.point1.set(-4.04995,-1.70895,-0.36795);
myNode52.point2.set(2.2399500000000003,2.0269500000000003,18.09995);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,0.0,0.0);
myNode52.innerRotation.angle.set(0.0);
myNode52.innerTranslation.vector.set(-0.9049999999999998,0.15900000000000003,8.866);
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
const myNode55 = object.addCommonOperation();
myNode55.leftArg.set(myNode42);
myNode55.rightArg.set(myNode54);
myNode55.isVisible = false;

/* définition du node n°56*/
const myNode56 = object.addBox();
myNode56.point1.set(-3.5919,2.0271,-0.5949);
myNode56.point2.set(-2.2381,3.0469,-0.23109999999999997);
myNode56.innerRotation.center.set(0,0,0);
myNode56.innerRotation.axis.set(0.0,0.0,0.0);
myNode56.innerRotation.angle.set(0.0);
myNode56.innerTranslation.vector.set(-2.915,2.537,-0.413);
myNode56.isVisible = false;

/* définition du node n°57*/
const myNode57 = object.addCylinder();
myNode57.point1.set(0,2.526,-0.5949);
myNode57.point2.set(0,2.526,0.5959000000000001);
myNode57.radius.set(0.273);
myNode57.innerRotation.center.set(0,0,0);
myNode57.innerRotation.axis.set(0.0,0.0,0.0);
myNode57.innerRotation.angle.set(0.0);
myNode57.isVisible = false;

/* définition du node n°58*/
const myNode58 = object.addCylinder();
myNode58.point1.set(0,2.527,-0.59495);
myNode58.point2.set(0,2.527,18.09995);
myNode58.radius.set(0.135);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(0.0,0.0,0.0);
myNode58.innerRotation.angle.set(0.0);
myNode58.isVisible = false;

/* définition du node n°59*/
const myNode59 = object.addCutOperation();
myNode59.leftArg.set(myNode57);
myNode59.rightArg.set(myNode58);
myNode59.isVisible = false;

/* définition du node n°60*/
const myNode60 = object.addSphere();
myNode60.center.set(0,0,0);
myNode60.radius.set(54.29981583762508);
myNode60.isVisible = false;

/* définition du node n°61*/
const myNode61 = object.addCommonOperation();
myNode61.leftArg.set(myNode59);
myNode61.rightArg.set(myNode60);
myNode61.isVisible = false;

/* définition du node n°62*/
const myNode62 = object.addCylinder();
myNode62.point1.set(-3.044,3.047,-0.5949);
myNode62.point2.set(-3.044,3.047,-0.23109999999999997);
myNode62.radius.set(0.541);
myNode62.innerRotation.center.set(0,0,0);
myNode62.innerRotation.axis.set(0.0,0.0,0.0);
myNode62.innerRotation.angle.set(0.0);
myNode62.isVisible = false;

/* définition du node n°63*/
const myNode63 = object.addCylinder();
myNode63.point1.set(-3.045,3.045,-0.2319);
myNode63.point2.set(-3.045,3.045,-0.0411);
myNode63.radius.set(0.254);
myNode63.innerRotation.center.set(0,0,0);
myNode63.innerRotation.axis.set(0.0,0.0,0.0);
myNode63.innerRotation.angle.set(0.0);
myNode63.isVisible = false;

/* définition du node n°64*/
const myNode64_1 = myNode56.clone();
myNode64_1.isVisible = false;
const myNode64_2 = object.addFuseOperation();
myNode64_2.leftArg.set(myNode64_1);
myNode64_2.rightArg.set(myNode61);
myNode64_2.isVisible = false;
const myNode64_3 = object.addFuseOperation();
myNode64_3.leftArg.set(myNode64_2);
myNode64_3.rightArg.set(myNode62);
myNode64_3.isVisible = false;
myNode64 = object.addFuseOperation();
myNode64.leftArg.set(myNode64_3);
myNode64.rightArg.set(myNode63);
myNode64.isVisible = false;
myNode64.isVisible = false;

/* définition du node n°65*/
const myNode65 = object.addCylinder();
myNode65.point1.set(-3.045,3.045,-0.2319);
myNode65.point2.set(-3.045,3.045,-0.0411);
myNode65.radius.set(0.136);
myNode65.innerRotation.center.set(0,0,0);
myNode65.innerRotation.axis.set(0.0,0.0,0.0);
myNode65.innerRotation.angle.set(0.0);
myNode65.isVisible = false;

/* définition du node n°66*/
const myNode66 = object.addBox();
myNode66.point1.set(-4.4549,2.5101,-0.5949);
myNode66.point2.set(-2.5001,18.0999,-0.1491);
myNode66.innerRotation.center.set(0,0,0);
myNode66.innerRotation.axis.set(0.0,0.0,0.0);
myNode66.innerRotation.angle.set(0.0);
myNode66.innerTranslation.vector.set(-3.4775,10.305,-0.372);
myNode66.isVisible = false;

/* définition du node n°67*/
const myNode67 = object.addBox();
myNode67.point1.set(-0.2729,2.5101,-0.5949);
myNode67.point2.set(18.0999,3.0469,18.0999);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(0.0,0.0,0.0);
myNode67.innerRotation.angle.set(0.0);
myNode67.innerTranslation.vector.set(8.9135,2.7785,8.752500000000001);
myNode67.isVisible = false;

/* définition du node n°68*/
const myNode68_1 = myNode65.clone();
myNode68_1.isVisible = false;
const myNode68_2 = object.addFuseOperation();
myNode68_2.leftArg.set(myNode68_1);
myNode68_2.rightArg.set(myNode66);
myNode68_2.isVisible = false;
myNode68 = object.addFuseOperation();
myNode68.leftArg.set(myNode68_2);
myNode68.rightArg.set(myNode67);
myNode68.isVisible = false;
myNode68.isVisible = false;

/* définition du node n°69*/
const myNode69 = object.addCommonOperation();
myNode69.leftArg.set(myNode64);
myNode69.rightArg.set(myNode68);
myNode69.isVisible = false;

/* définition du node n°70*/
const myNode70 = object.addCylinder();
myNode70.point1.set(-3.046,-3.046,-0.5949);
myNode70.point2.set(-3.046,-3.046,-0.040100000000000025);
myNode70.radius.set(0.136);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(0.0,0.0,0.0);
myNode70.innerRotation.angle.set(0.0);
myNode70.isVisible = false;

/* définition du node n°71*/
const myNode71 = object.addCylinder();
myNode71.point1.set(3.044,3.044,-0.5949);
myNode71.point2.set(3.044,3.044,-0.3681);
myNode71.radius.set(0.545);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(0.0,0.0,0.0);
myNode71.innerRotation.angle.set(0.0);
myNode71.isVisible = false;

/* définition du node n°72*/
const myNode72 = object.addBox();
myNode72.point1.set(-18.0999,-2.2539,-18.0999);
myNode72.point2.set(-4.454100000000002,-1.7090999999999998,18.0999);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(0.0,0.0,0.0);
myNode72.innerRotation.angle.set(0.0);
myNode72.innerTranslation.vector.set(-11.277000000000001,-1.9814999999999998,0.0);
myNode72.isVisible = false;

/* définition du node n°73*/
const myNode73 = object.addCylinder();
myNode73.point1.set(-4.727,-1.981,-18.0999);
myNode73.point2.set(-4.727,-1.981,18.099999999999998);
myNode73.radius.set(0.136);
myNode73.innerRotation.center.set(0,0,0);
myNode73.innerRotation.axis.set(0.0,0.0,0.0);
myNode73.innerRotation.angle.set(0.0);
myNode73.isVisible = false;

/* définition du node n°74*/
const myNode74 = object.addCutOperation();
myNode74.leftArg.set(myNode72);
myNode74.rightArg.set(myNode73);
myNode74.isVisible = false;

/* définition du node n°75*/
const myNode75 = object.addBox();
myNode75.point1.set(-4.0499,-2.5119,-0.5949);
myNode75.point2.set(-2.4991000000000003,-2.2540999999999998,0.31390000000000007);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(0.0,0.0,0.0);
myNode75.innerRotation.angle.set(0.0);
myNode75.innerTranslation.vector.set(-3.2745,-2.383,-0.14049999999999996);
myNode75.isVisible = false;

/* définition du node n°76*/
const myNode76 = object.addBox();
myNode76.point1.set(-3.5919,-3.0219,-0.5949);
myNode76.point2.set(-2.4991,-2.5121,-0.23109999999999997);
myNode76.innerRotation.center.set(0,0,0);
myNode76.innerRotation.axis.set(0.0,0.0,0.0);
myNode76.innerRotation.angle.set(0.0);
myNode76.innerTranslation.vector.set(-3.0454999999999997,-2.767,-0.413);
myNode76.isVisible = false;

/* définition du node n°77*/
const myNode77 = object.addFuseOperation();
myNode77.leftArg.set(myNode75);
myNode77.rightArg.set(myNode76);
myNode77.isVisible = false;

/* définition du node n°78*/
const myNode78 = object.addBox();
myNode78.point1.set(-4.7269,-18.0999,-0.5949);
myNode78.point2.set(-2.4991,-1.3001000000000005,-0.23109999999999997);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(0.0,0.0,0.0);
myNode78.innerRotation.angle.set(0.0);
myNode78.innerTranslation.vector.set(-3.6129999999999995,-9.700000000000001,-0.413);
myNode78.isVisible = false;

/* définition du node n°79*/
const myNode79 = object.addCylinder();
myNode79.point1.set(-3.849,-2.512,-0.59495);
myNode79.point2.set(-3.849,-2.512,18.09995);
myNode79.radius.set(0.255);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(0.0,0.0,0.0);
myNode79.innerRotation.angle.set(0.0);
myNode79.isVisible = false;

/* définition du node n°80*/
const myNode80 = object.addCutOperation();
myNode80.leftArg.set(myNode78);
myNode80.rightArg.set(myNode79);
myNode80.isVisible = false;

/* définition du node n°81*/
const myNode81 = object.addCommonOperation();
myNode81.leftArg.set(myNode77);
myNode81.rightArg.set(myNode80);
myNode81.isVisible = false;

/* définition du node n°82*/
const myNode82 = object.addCylinder();
myNode82.point1.set(-3.045,-3.046,-0.5949);
myNode82.point2.set(-3.045,-3.046,-0.1491);
myNode82.radius.set(0.254);
myNode82.innerRotation.center.set(0,0,0);
myNode82.innerRotation.axis.set(0.0,0.0,0.0);
myNode82.innerRotation.angle.set(0.0);
myNode82.isVisible = false;

/* définition du node n°83*/
const myNode83_1 = myNode74.clone();
myNode83_1.isVisible = false;
const myNode83_2 = object.addFuseOperation();
myNode83_2.leftArg.set(myNode83_1);
myNode83_2.rightArg.set(myNode81);
myNode83_2.isVisible = false;
myNode83 = object.addFuseOperation();
myNode83.leftArg.set(myNode83_2);
myNode83.rightArg.set(myNode82);
myNode83.isVisible = false;
myNode83.isVisible = false;

/* définition du node n°84*/
const myNode84 = object.addBox();
myNode84.point1.set(-4.7269,-18.0999,-0.5949);
myNode84.point2.set(-2.2390999999999996,18.0999,0.5959000000000001);
myNode84.innerRotation.center.set(0,0,0);
myNode84.innerRotation.axis.set(0.0,0.0,0.0);
myNode84.innerRotation.angle.set(0.0);
myNode84.innerTranslation.vector.set(-3.4829999999999997,0.0,0.000500000000000056);
myNode84.isVisible = false;

/* définition du node n°85*/
const myNode85 = object.addCommonOperation();
myNode85.leftArg.set(myNode83);
myNode85.rightArg.set(myNode84);
myNode85.isVisible = false;

/* définition du node n°86*/
const myNode86 = object.addCylinder();
myNode86.point1.set(3.045,3.046,-0.1489);
myNode86.point2.set(3.045,3.046,-0.0411);
myNode86.radius.set(0.136);
myNode86.innerRotation.center.set(0,0,0);
myNode86.innerRotation.axis.set(0.0,0.0,0.0);
myNode86.innerRotation.angle.set(0.0);
myNode86.isVisible = false;

/* définition du node n°87*/
const myNode87 = object.addCylinder();
myNode87.point1.set(4.727,-1.981,-0.5949);
myNode87.point2.set(4.727,-1.981,0.5959000000000001);
myNode87.radius.set(0.272);
myNode87.innerRotation.center.set(0,0,0);
myNode87.innerRotation.axis.set(0.0,0.0,0.0);
myNode87.innerRotation.angle.set(0.0);
myNode87.isVisible = false;

/* définition du node n°88*/
const myNode88 = object.addCylinder();
myNode88.point1.set(-0.002,-2.524,-0.5949);
myNode88.point2.set(-0.002,-2.524,0.5959000000000001);
myNode88.radius.set(0.276);
myNode88.innerRotation.center.set(0,0,0);
myNode88.innerRotation.axis.set(0.0,0.0,0.0);
myNode88.innerRotation.angle.set(0.0);
myNode88.isVisible = false;

/* définition du node n°89*/
const myNode89 = object.addBox();
myNode89.point1.set(-0.2729,-2.5119,-0.5949);
myNode89.point2.set(4.7279,-1.3000999999999998,0.5959000000000001);
myNode89.innerRotation.center.set(0,0,0);
myNode89.innerRotation.axis.set(0.0,0.0,0.0);
myNode89.innerRotation.angle.set(0.0);
myNode89.innerTranslation.vector.set(2.2275,-1.9059999999999997,0.000500000000000056);
myNode89.isVisible = false;

/* définition du node n°90*/
const myNode90 = object.addBox();
myNode90.point1.set(2.5001,-3.0219,-0.5949);
myNode90.point2.set(4.4549,1.2998999999999996,0.31390000000000007);
myNode90.innerRotation.center.set(0,0,0);
myNode90.innerRotation.axis.set(0.0,0.0,0.0);
myNode90.innerRotation.angle.set(0.0);
myNode90.innerTranslation.vector.set(3.4775,-0.8610000000000002,-0.14049999999999996);
myNode90.isVisible = false;

/* définition du node n°91*/
const myNode91_1 = myNode87.clone();
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
const myNode92 = object.addBox();
myNode92.point1.set(-18.0999,-2.02695,-0.36795);
myNode92.point2.set(4.049999999999997,1.2999500000000004,18.09995);
myNode92.innerRotation.center.set(0,0,0);
myNode92.innerRotation.axis.set(0.0,0.0,0.0);
myNode92.innerRotation.angle.set(0.0);
myNode92.innerTranslation.vector.set(-7.024950000000002,-0.3634999999999997,8.866);
myNode92.isVisible = false;

/* définition du node n°93*/
const myNode93 = object.addBox();
myNode93.point1.set(2.50005,-1.29995,-18.0999);
myNode93.point2.set(3.59295,1.29995,0.31400000000000006);
myNode93.innerRotation.center.set(0,0,0);
myNode93.innerRotation.axis.set(0.0,0.0,0.0);
myNode93.innerRotation.angle.set(0.0);
myNode93.innerTranslation.vector.set(3.0465,0.0,-8.89295);
myNode93.isVisible = false;

/* définition du node n°94*/
const myNode94 = object.addCylinder();
myNode94.point1.set(0,-2.528,-0.59495);
myNode94.point2.set(0,-2.528,18.09995);
myNode94.radius.set(0.136);
myNode94.innerRotation.center.set(0,0,0);
myNode94.innerRotation.axis.set(0.0,0.0,0.0);
myNode94.innerRotation.angle.set(0.0);
myNode94.isVisible = false;

/* définition du node n°95*/
const myNode95 = object.addBox();
myNode95.point1.set(0.27305,-18.0999,-0.59495);
myNode95.point2.set(18.09995,-2.255000000000001,0.5959500000000001);
myNode95.innerRotation.center.set(0,0,0);
myNode95.innerRotation.axis.set(0.0,0.0,0.0);
myNode95.innerRotation.angle.set(0.0);
myNode95.innerTranslation.vector.set(9.186499999999999,-10.17745,0.000500000000000056);
myNode95.isVisible = false;

/* définition du node n°96*/
const myNode96 = object.addBox();
myNode96.point1.set(2.5,-3.022,-0.595);
myNode96.point2.set(3.593,-1.7089999999999999,-0.23099999999999998);
myNode96.innerRotation.center.set(0,0,0);
myNode96.innerRotation.axis.set(0.0,0.0,0.0);
myNode96.innerRotation.angle.set(0.0);
myNode96.innerTranslation.vector.set(3.0465,-2.3655,-0.413);
myNode96.isVisible = false;

/* définition du node n°97*/
const myNode97 = object.addCutOperation();
myNode97.leftArg.set(myNode95);
myNode97.rightArg.set(myNode96);
myNode97.isVisible = false;

/* définition du node n°98*/
const myNode98 = object.addBox();
myNode98.point1.set(-0.27295,-2.25395,0.31405);
myNode98.point2.set(4.45395,1.29995,0.59595);
myNode98.innerRotation.center.set(0,0,0);
myNode98.innerRotation.axis.set(0.0,0.0,0.0);
myNode98.innerRotation.angle.set(0.0);
myNode98.innerTranslation.vector.set(2.0904999999999996,-0.4770000000000001,0.45499999999999996);
myNode98.isVisible = false;

/* définition du node n°99*/
const myNode99 = object.addBox();
myNode99.point1.set(4.45505,-1.70895,-18.0999);
myNode99.point2.set(18.100949999999997,-1.30005,18.099999999999998);
myNode99.innerRotation.center.set(0,0,0);
myNode99.innerRotation.axis.set(0.0,0.0,0.0);
myNode99.innerRotation.angle.set(0.0);
myNode99.innerTranslation.vector.set(11.277999999999999,-1.5045,4.9999999998107114e-05);
myNode99.isVisible = false;

/* définition du node n°100*/
const myNode100_1 = myNode92.clone();
myNode100_1.isVisible = false;
const myNode100_2 = object.addFuseOperation();
myNode100_2.leftArg.set(myNode100_1);
myNode100_2.rightArg.set(myNode93);
myNode100_2.isVisible = false;
const myNode100_3 = object.addFuseOperation();
myNode100_3.leftArg.set(myNode100_2);
myNode100_3.rightArg.set(myNode94);
myNode100_3.isVisible = false;
const myNode100_4 = object.addFuseOperation();
myNode100_4.leftArg.set(myNode100_3);
myNode100_4.rightArg.set(myNode97);
myNode100_4.isVisible = false;
const myNode100_5 = object.addFuseOperation();
myNode100_5.leftArg.set(myNode100_4);
myNode100_5.rightArg.set(myNode19);
myNode100_5.isVisible = false;
const myNode100_6 = object.addFuseOperation();
myNode100_6.leftArg.set(myNode100_5);
myNode100_6.rightArg.set(myNode98);
myNode100_6.isVisible = false;
myNode100 = object.addFuseOperation();
myNode100.leftArg.set(myNode100_6);
myNode100.rightArg.set(myNode99);
myNode100.isVisible = false;
myNode100.isVisible = false;

/* définition du node n°101*/
const myNode101 = object.addCutOperation();
myNode101.leftArg.set(myNode91);
myNode101.rightArg.set(myNode100);
myNode101.isVisible = false;

/* définition du node n°102*/
const myNode102 = object.addBox();
myNode102.point1.set(2.5001,2.0271,-0.5949);
myNode102.point2.set(3.5929,3.0469,-0.23109999999999997);
myNode102.innerRotation.center.set(0,0,0);
myNode102.innerRotation.axis.set(0.0,0.0,0.0);
myNode102.innerRotation.angle.set(0.0);
myNode102.innerTranslation.vector.set(3.0465,2.537,-0.413);
myNode102.isVisible = false;

/* définition du node n°103*/
const myNode103 = object.addCylinder();
myNode103.point1.set(-3.045,-3.047,-0.5949);
myNode103.point2.set(-3.045,-3.047,-0.23109999999999997);
myNode103.radius.set(0.541);
myNode103.innerRotation.center.set(0,0,0);
myNode103.innerRotation.axis.set(0.0,0.0,0.0);
myNode103.innerRotation.angle.set(0.0);
myNode103.isVisible = false;

/* définition du node n°104*/
const myNode104 = object.addBox();
myNode104.point1.set(-4.4549,-2.0269,-0.5949);
myNode104.point2.set(-0.27310000000000034,-1.3001,-0.3681);
myNode104.innerRotation.center.set(0,0,0);
myNode104.innerRotation.axis.set(0.0,0.0,0.0);
myNode104.innerRotation.angle.set(0.0);
myNode104.innerTranslation.vector.set(-2.3640000000000003,-1.6635,-0.4815);
myNode104.isVisible = false;

/* définition du node n°105*/
const myNode105 = object.addBox();
myNode105.point1.set(-4.4549,-2.2539,-0.5949);
myNode105.point2.set(-0.27310000000000034,-2.0271,0.31390000000000007);
myNode105.innerRotation.center.set(0,0,0);
myNode105.innerRotation.axis.set(0.0,0.0,0.0);
myNode105.innerRotation.angle.set(0.0);
myNode105.innerTranslation.vector.set(-2.3640000000000003,-2.1405,-0.14049999999999996);
myNode105.isVisible = false;

/* définition du node n°106*/
const myNode106 = object.addFuseOperation();
myNode106.leftArg.set(myNode104);
myNode106.rightArg.set(myNode105);
myNode106.isVisible = false;

/* définition du node n°107*/
const myNode107 = object.addBox();
myNode107.point1.set(-3.68595,-2.25395,-0.09395);
myNode107.point2.set(-2.82205,-2.02705,0.31394999999999995);
myNode107.innerRotation.center.set(0,0,0);
myNode107.innerRotation.axis.set(0.0,0.0,0.0);
myNode107.innerRotation.angle.set(0.0);
myNode107.innerTranslation.vector.set(-3.254,-2.1405000000000003,0.10999999999999999);
myNode107.isVisible = false;

/* définition du node n°108*/
const myNode108 = object.addCutOperation();
myNode108.leftArg.set(myNode106);
myNode108.rightArg.set(myNode107);
myNode108.isVisible = false;

/* définition du node n°109*/
const myNode109 = object.addBox();
myNode109.point1.set(2.2401,2.0271,-0.5949);
myNode109.point2.set(4.0499,3.0469,0.31390000000000007);
myNode109.innerRotation.center.set(0,0,0);
myNode109.innerRotation.axis.set(0.0,0.0,0.0);
myNode109.innerRotation.angle.set(0.0);
myNode109.innerTranslation.vector.set(3.145,2.537,-0.14049999999999996);
myNode109.isVisible = false;

/* définition du node n°110*/
const myNode110 = object.addCylinder();
myNode110.point1.set(2.247,2.508,-0.59495);
myNode110.point2.set(2.247,2.508,18.09995);
myNode110.radius.set(0.248);
myNode110.innerRotation.center.set(0,0,0);
myNode110.innerRotation.axis.set(0.0,0.0,0.0);
myNode110.innerRotation.angle.set(0.0);
myNode110.isVisible = false;

/* définition du node n°111*/
const myNode111 = object.addCutOperation();
myNode111.leftArg.set(myNode109);
myNode111.rightArg.set(myNode110);
myNode111.isVisible = false;

/* définition du node n°112*/
const myNode112 = object.addBox();
myNode112.point1.set(2.24005,2.25505,-0.23195);
myNode112.point2.set(4.04995,3.0469500000000003,0.31295000000000006);
myNode112.innerRotation.center.set(0,0,0);
myNode112.innerRotation.axis.set(0.0,0.0,0.0);
myNode112.innerRotation.angle.set(0.0);
myNode112.innerTranslation.vector.set(3.145,2.6510000000000002,0.040500000000000036);
myNode112.isVisible = false;

/* définition du node n°113*/
const myNode113 = object.addCylinder();
myNode113.point1.set(3.859,2.522,-18.0999);
myNode113.point2.set(3.859,2.522,-0.04100000000000037);
myNode113.radius.set(0.268);
myNode113.innerRotation.center.set(0,0,0);
myNode113.innerRotation.axis.set(0.0,0.0,0.0);
myNode113.innerRotation.angle.set(0.0);
myNode113.isVisible = false;

/* définition du node n°114*/
const myNode114 = object.addFuseOperation();
myNode114.leftArg.set(myNode112);
myNode114.rightArg.set(myNode113);
myNode114.isVisible = false;

/* définition du node n°115*/
const myNode115 = object.addCutOperation();
myNode115.leftArg.set(myNode111);
myNode115.rightArg.set(myNode114);
myNode115.isVisible = false;

/* définition du node n°116*/
const myNode116 = object.addBox();
myNode116.point1.set(4.4551,1.7091,-0.5949);
myNode116.point2.set(4.728899999999999,2.0269,0.5959000000000001);
myNode116.innerRotation.center.set(0,0,0);
myNode116.innerRotation.axis.set(0.0,0.0,0.0);
myNode116.innerRotation.angle.set(0.0);
myNode116.innerTranslation.vector.set(4.592,1.868,0.000500000000000056);
myNode116.isVisible = false;

/* définition du node n°117*/
const myNode117 = object.addCylinder();
myNode117.point1.set(4.729,1.981,-18.0999);
myNode117.point2.set(4.729,1.981,18.0999);
myNode117.radius.set(0.27);
myNode117.innerRotation.center.set(0,0,0);
myNode117.innerRotation.axis.set(0.0,0.0,0.0);
myNode117.innerRotation.angle.set(0.0);
myNode117.isVisible = false;

/* définition du node n°118*/
const myNode118 = object.addFuseOperation();
myNode118.leftArg.set(myNode116);
myNode118.rightArg.set(myNode117);
myNode118.isVisible = false;

/* définition du node n°119*/
const myNode119 = object.addCylinder();
myNode119.point1.set(4.727,1.984,-18.0999);
myNode119.point2.set(4.727,1.984,0.5949999999999989);
myNode119.radius.set(0.137);
myNode119.innerRotation.center.set(0,0,0);
myNode119.innerRotation.axis.set(0.0,0.0,0.0);
myNode119.innerRotation.angle.set(0.0);
myNode119.isVisible = false;

/* définition du node n°120*/
const myNode120 = object.addCutOperation();
myNode120.leftArg.set(myNode118);
myNode120.rightArg.set(myNode119);
myNode120.isVisible = false;

/* définition du node n°121*/
const myNode121 = object.addFuseOperation();
myNode121.leftArg.set(myNode115);
myNode121.rightArg.set(myNode120);
myNode121.isVisible = false;

/* définition du node n°122*/
const myNode122 = object.addBox();
myNode122.point1.set(-18.0999,1.7091,-0.5949);
myNode122.point2.set(18.0999,2.5099,0.5959000000000001);
myNode122.innerRotation.center.set(0,0,0);
myNode122.innerRotation.axis.set(0.0,0.0,0.0);
myNode122.innerRotation.angle.set(0.0);
myNode122.innerTranslation.vector.set(0.0,2.1095,0.000500000000000056);
myNode122.isVisible = false;

/* définition du node n°123*/
const myNode123 = object.addCommonOperation();
myNode123.leftArg.set(myNode121);
myNode123.rightArg.set(myNode122);
myNode123.isVisible = false;

/* définition du node n°124*/
const myNode124 = object.addCylinder();
myNode124.point1.set(3.859,2.522,-18.0999);
myNode124.point2.set(3.859,2.522,-0.5950000000000024);
myNode124.radius.set(0.268);
myNode124.innerRotation.center.set(0,0,0);
myNode124.innerRotation.axis.set(0.0,0.0,0.0);
myNode124.innerRotation.angle.set(0.0);
myNode124.isVisible = false;

/* définition du node n°125*/
const myNode125 = object.addCutOperation();
myNode125.leftArg.set(myNode60);
myNode125.rightArg.set(myNode124);
myNode125.isVisible = false;

/* définition du node n°126*/
const myNode126 = object.addBox();
myNode126.point1.set(2.2401,1.3001,-0.5949);
myNode126.point2.set(4.4549,2.0269,-0.3681);
myNode126.innerRotation.center.set(0,0,0);
myNode126.innerRotation.axis.set(0.0,0.0,0.0);
myNode126.innerRotation.angle.set(0.0);
myNode126.innerTranslation.vector.set(3.3475,1.6635,-0.4815);
myNode126.isVisible = false;

/* définition du node n°127*/
const myNode127 = object.addCylinder();
myNode127.point1.set(3.044,3.044,-0.3679);
myNode127.point2.set(3.044,3.044,-0.2321);
myNode127.radius.set(0.545);
myNode127.innerRotation.center.set(0,0,0);
myNode127.innerRotation.axis.set(0.0,0.0,0.0);
myNode127.innerRotation.angle.set(0.0);
myNode127.isVisible = false;

/* définition du node n°128*/
const myNode128 = object.addFuseOperation();
myNode128.leftArg.set(myNode126);
myNode128.rightArg.set(myNode127);
myNode128.isVisible = false;

/* définition du node n°129*/
const myNode129 = object.addCommonOperation();
myNode129.leftArg.set(myNode125);
myNode129.rightArg.set(myNode128);
myNode129.isVisible = false;

/* définition du node n°130*/
const myNode130 = object.addCylinder();
myNode130.point1.set(3.045,3.045,-0.5949);
myNode130.point2.set(3.045,3.045,-0.1491);
myNode130.radius.set(0.253);
myNode130.innerRotation.center.set(0,0,0);
myNode130.innerRotation.axis.set(0.0,0.0,0.0);
myNode130.innerRotation.angle.set(0.0);
myNode130.isVisible = false;

/* définition du node n°131*/
const myNode131 = object.addCylinder();
myNode131.point1.set(-4.728,-1.983,-0.5949);
myNode131.point2.set(-4.728,-1.983,0.5959000000000001);
myNode131.radius.set(0.27);
myNode131.innerRotation.center.set(0,0,0);
myNode131.innerRotation.axis.set(0.0,0.0,0.0);
myNode131.innerRotation.angle.set(0.0);
myNode131.isVisible = false;

/* définition du node n°132*/
const myNode132 = object.addCutOperation();
myNode132.leftArg.set(myNode131);
myNode132.rightArg.set(myNode73);
myNode132.isVisible = false;

/* définition du node n°133*/
const myNode133_1 = myNode2.clone();
myNode133_1.isVisible = false;
const myNode133_2 = object.addFuseOperation();
myNode133_2.leftArg.set(myNode133_1);
myNode133_2.rightArg.set(myNode3);
myNode133_2.isVisible = false;
const myNode133_3 = object.addFuseOperation();
myNode133_3.leftArg.set(myNode133_2);
myNode133_3.rightArg.set(myNode26);
myNode133_3.isVisible = false;
const myNode133_4 = object.addFuseOperation();
myNode133_4.leftArg.set(myNode133_3);
myNode133_4.rightArg.set(myNode33);
myNode133_4.isVisible = false;
const myNode133_5 = object.addFuseOperation();
myNode133_5.leftArg.set(myNode133_4);
myNode133_5.rightArg.set(myNode55);
myNode133_5.isVisible = false;
const myNode133_6 = object.addFuseOperation();
myNode133_6.leftArg.set(myNode133_5);
myNode133_6.rightArg.set(myNode69);
myNode133_6.isVisible = false;
const myNode133_7 = object.addFuseOperation();
myNode133_7.leftArg.set(myNode133_6);
myNode133_7.rightArg.set(myNode70);
myNode133_7.isVisible = false;
const myNode133_8 = object.addFuseOperation();
myNode133_8.leftArg.set(myNode133_7);
myNode133_8.rightArg.set(myNode71);
myNode133_8.isVisible = false;
const myNode133_9 = object.addFuseOperation();
myNode133_9.leftArg.set(myNode133_8);
myNode133_9.rightArg.set(myNode85);
myNode133_9.isVisible = false;
const myNode133_10 = object.addFuseOperation();
myNode133_10.leftArg.set(myNode133_9);
myNode133_10.rightArg.set(myNode86);
myNode133_10.isVisible = false;
const myNode133_11 = object.addFuseOperation();
myNode133_11.leftArg.set(myNode133_10);
myNode133_11.rightArg.set(myNode101);
myNode133_11.isVisible = false;
const myNode133_12 = object.addFuseOperation();
myNode133_12.leftArg.set(myNode133_11);
myNode133_12.rightArg.set(myNode102);
myNode133_12.isVisible = false;
const myNode133_13 = object.addFuseOperation();
myNode133_13.leftArg.set(myNode133_12);
myNode133_13.rightArg.set(myNode103);
myNode133_13.isVisible = false;
const myNode133_14 = object.addFuseOperation();
myNode133_14.leftArg.set(myNode133_13);
myNode133_14.rightArg.set(myNode108);
myNode133_14.isVisible = false;
const myNode133_15 = object.addFuseOperation();
myNode133_15.leftArg.set(myNode133_14);
myNode133_15.rightArg.set(myNode123);
myNode133_15.isVisible = false;
const myNode133_16 = object.addFuseOperation();
myNode133_16.leftArg.set(myNode133_15);
myNode133_16.rightArg.set(myNode129);
myNode133_16.isVisible = false;
const myNode133_17 = object.addFuseOperation();
myNode133_17.leftArg.set(myNode133_16);
myNode133_17.rightArg.set(myNode130);
myNode133_17.isVisible = false;
myNode133 = object.addFuseOperation();
myNode133.leftArg.set(myNode133_17);
myNode133.rightArg.set(myNode132);
myNode133.isVisible = false;
myNode133.isVisible = false;

/* définition du node n°134*/
const myNode134 = object.addBox();
myNode134.point1.set(-5.9999,-4.3059,-0.7149);
myNode134.point2.set(5.9999,4.304899999999999,0.7139000000000001);
myNode134.innerRotation.center.set(0,0,0);
myNode134.innerRotation.axis.set(0.0,0.0,0.0);
myNode134.innerRotation.angle.set(0.0);
myNode134.innerTranslation.vector.set(0.0,-0.0005000000000006111,-0.0004999999999999449);
myNode134.isVisible = false;

/* définition du node n°135*/
const myNode135 = object.addCommonOperation();
myNode135.leftArg.set(myNode133);
myNode135.rightArg.set(myNode134);
myNode135.isVisible = true;


/*END Geometry Object Definition*/