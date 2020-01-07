/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.9999,-4.3059,-0.7149);
myNode0.point2.set(5.9999,4.304899999999999,0.7139000000000001);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.isVisible = False

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-3.5919,-2.5119,-0.5949);
myNode1.point2.set(-2.2381,-1.7090999999999998,-0.3681);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.isVisible = False

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(-2.236,-2.519,-18.0999);
myNode2.point2.set(-2.236,-2.519,-0.3680000000000021);
myNode2.radius.set(0.263);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.isVisible = False

/* définition du node n°3*/
const myNode3 = object.addCutOperation();
myNode3.leftArg.set(myNode1);
myNode3.rightArg.set(myNode2);
myNode3.isVisible = False

/* définition du node n°4*/
const myNode4 = object.addBox();
myNode4.point1.set(-4.4549,-2.0269,-0.3679);
myNode4.point2.set(-4.0501000000000005,-1.3001,0.31389999999999996);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.isVisible = False

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(3.043,-3.043,-0.5949);
myNode5.point2.set(3.043,-3.043,-0.23109999999999997);
myNode5.radius.set(0.543);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.isVisible = False

/* définition du node n°6*/
const myNode6 = object.addCylinder();
myNode6.point1.set(3.045,-3.045,-0.2319);
myNode6.point2.set(3.045,-3.045,-0.1501);
myNode6.radius.set(0.253);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.isVisible = False

/* définition du node n°7*/
const myNode7 = object.addBox();
myNode7.point1.set(2.2401,-2.5119,-0.5949);
myNode7.point2.set(3.8518999999999997,-2.0271,-0.23109999999999997);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);
myNode7.isVisible = False

/* définition du node n°8*/
const myNode8 = object.addCylinder();
myNode8.point1.set(3.045,-3.046,-0.1489);
myNode8.point2.set(3.045,-3.046,0.5959);
myNode8.radius.set(0.136);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.isVisible = False

/* définition du node n°9*/
const myNode9 = object.addFuseOperation();
myNode9.leftArg.set(myNode7);
myNode9.rightArg.set(myNode8);
myNode9.isVisible = False

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(0.2731,-18.0999,-0.5949);
myNode10.point2.set(18.099899999999998,-2.2551000000000023,-0.040100000000000025);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.isVisible = False

/* définition du node n°11*/
const myNode11 = object.addBox();
myNode11.point1.set(3.3231,-2.0269,-0.5949);
myNode11.point2.set(18.099899999999998,18.099899999999998,-0.23109999999999997);
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
const myNode13 = object.addCommonOperation();
myNode13.leftArg.set(myNode9);
myNode13.rightArg.set(myNode12);
myNode13.isVisible = False

/* définition du node n°14*/
const myNode14 = object.addBox();
myNode14.point1.set(3.3231,-1.7089,-0.5949);
myNode14.point2.set(3.8519,1.2998999999999998,-0.3681);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);
myNode14.isVisible = False

/* définition du node n°15*/
const myNode15 = object.addBox();
myNode15.point1.set(2.5001,-3.0219,-0.1489);
myNode15.point2.set(3.3229,-2.5121,-0.0411);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);
myNode15.isVisible = False

/* définition du node n°16*/
const myNode16_1 = object.addFuseOperation();
myNode16_1.leftArg.set(myNode5);
myNode16_1.rightArg.set(myNode5);
const myNode16_2 = object.addFuseOperation();
myNode16_2.leftArg.set(myNode16_1);
myNode16_2.rightArg.set(myNode6);
const myNode16_3 = object.addFuseOperation();
myNode16_3.leftArg.set(myNode16_2);
myNode16_3.rightArg.set(myNode13);
const myNode16_4 = object.addFuseOperation();
myNode16_4.leftArg.set(myNode16_3);
myNode16_4.rightArg.set(myNode14);
myNode16 = object.addFuseOperation();
myNode16.leftArg.set(myNode16_4);
myNode16.rightArg.set(myNode15);
myNode16.isVisible = False

/* définition du node n°17*/
const myNode17 = object.addCylinder();
myNode17.point1.set(4.727,-1.982,-0.59495);
myNode17.point2.set(4.727,-1.982,18.09995);
myNode17.radius.set(0.136);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.isVisible = False

/* définition du node n°18*/
const myNode18 = object.addBox();
myNode18.point1.set(-0.273,-2.512,-0.595);
myNode18.point2.set(4.728000000000001,-2.254,-0.14899999999999997);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);
myNode18.isVisible = False

/* définition du node n°19*/
const myNode19 = object.addCutOperation();
myNode19.leftArg.set(myNode17);
myNode19.rightArg.set(myNode18);
myNode19.isVisible = False

/* définition du node n°20*/
const myNode20 = object.addCylinder();
myNode20.point1.set(3.851,-2.517,-0.59495);
myNode20.point2.set(3.851,-2.517,-0.23104999999999998);
myNode20.radius.set(0.259);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);
myNode20.isVisible = False

/* définition du node n°21*/
const myNode21 = object.addCylinder();
myNode21.point1.set(2.24,-2.515,-0.59495);
myNode21.point2.set(2.24,-2.515,-0.23104999999999998);
myNode21.radius.set(0.258);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);
myNode21.isVisible = False

/* définition du node n°22*/
const myNode22 = object.addBox();
myNode22.point1.set(2.24005,-18.0999,-0.36795);
myNode22.point2.set(2.49995,-2.5120000000000022,-0.23205);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(0.0,0.0,0.0);
myNode22.innerRotation.angle.set(0.0);
myNode22.isVisible = False

/* définition du node n°23*/
const myNode23 = object.addBox();
myNode23.point1.set(0.27305,-3.02195,-0.14895);
myNode23.point2.set(3.32295,-2.51205,18.09995);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);
myNode23.isVisible = False

/* définition du node n°24*/
const myNode24 = object.addCylinder();
myNode24.point1.set(3.045,-3.046,-0.368);
myNode24.point2.set(3.045,-3.046,18.1);
myNode24.radius.set(0.136);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);
myNode24.isVisible = False

/* définition du node n°25*/
const myNode25 = object.addCutOperation();
myNode25.leftArg.set(myNode23);
myNode25.rightArg.set(myNode24);
myNode25.isVisible = False

/* définition du node n°26*/
const myNode26_1 = object.addFuseOperation();
myNode26_1.leftArg.set(myNode19);
myNode26_1.rightArg.set(myNode19);
const myNode26_2 = object.addFuseOperation();
myNode26_2.leftArg.set(myNode26_1);
myNode26_2.rightArg.set(myNode20);
const myNode26_3 = object.addFuseOperation();
myNode26_3.leftArg.set(myNode26_2);
myNode26_3.rightArg.set(myNode21);
const myNode26_4 = object.addFuseOperation();
myNode26_4.leftArg.set(myNode26_3);
myNode26_4.rightArg.set(myNode22);
myNode26 = object.addFuseOperation();
myNode26.leftArg.set(myNode26_4);
myNode26.rightArg.set(myNode25);
myNode26.isVisible = False

/* définition du node n°27*/
const myNode27 = object.addCutOperation();
myNode27.leftArg.set(myNode16);
myNode27.rightArg.set(myNode26);
myNode27.isVisible = False

/* définition du node n°28*/
const myNode28 = object.addBox();
myNode28.point1.set(-18.0999,-2.2539,-18.0999);
myNode28.point2.set(-4.454100000000002,-1.7090999999999998,18.0999);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(0.0,0.0,0.0);
myNode28.innerRotation.angle.set(0.0);
myNode28.isVisible = False

/* définition du node n°29*/
const myNode29 = object.addCylinder();
myNode29.point1.set(-4.727,-1.981,-18.0999);
myNode29.point2.set(-4.727,-1.981,18.099999999999998);
myNode29.radius.set(0.136);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);
myNode29.isVisible = False

/* définition du node n°30*/
const myNode30 = object.addCutOperation();
myNode30.leftArg.set(myNode28);
myNode30.rightArg.set(myNode29);
myNode30.isVisible = False

/* définition du node n°31*/
const myNode31 = object.addCylinder();
myNode31.point1.set(-3.045,-3.046,-0.5949);
myNode31.point2.set(-3.045,-3.046,-0.1491);
myNode31.radius.set(0.254);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(0.0,0.0,0.0);
myNode31.innerRotation.angle.set(0.0);
myNode31.isVisible = False

/* définition du node n°32*/
const myNode32 = object.addBox();
myNode32.point1.set(-3.5919,-3.0219,-0.5949);
myNode32.point2.set(-2.4991,-2.5121,-0.23109999999999997);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);
myNode32.isVisible = False

/* définition du node n°33*/
const myNode33 = object.addBox();
myNode33.point1.set(-4.0499,-2.5119,-0.5949);
myNode33.point2.set(-2.4991000000000003,-2.2540999999999998,0.31390000000000007);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);
myNode33.isVisible = False

/* définition du node n°34*/
const myNode34 = object.addFuseOperation();
myNode34.leftArg.set(myNode32);
myNode34.rightArg.set(myNode33);
myNode34.isVisible = False

/* définition du node n°35*/
const myNode35 = object.addBox();
myNode35.point1.set(-4.7269,-18.0999,-0.5949);
myNode35.point2.set(-2.4991,-1.3001000000000005,-0.23109999999999997);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,0.0);
myNode35.innerRotation.angle.set(0.0);
myNode35.isVisible = False

/* définition du node n°36*/
const myNode36 = object.addCylinder();
myNode36.point1.set(-3.849,-2.512,-0.59495);
myNode36.point2.set(-3.849,-2.512,18.09995);
myNode36.radius.set(0.255);
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
const myNode38 = object.addCommonOperation();
myNode38.leftArg.set(myNode34);
myNode38.rightArg.set(myNode37);
myNode38.isVisible = False

/* définition du node n°39*/
const myNode39_1 = object.addFuseOperation();
myNode39_1.leftArg.set(myNode30);
myNode39_1.rightArg.set(myNode30);
const myNode39_2 = object.addFuseOperation();
myNode39_2.leftArg.set(myNode39_1);
myNode39_2.rightArg.set(myNode31);
myNode39 = object.addFuseOperation();
myNode39.leftArg.set(myNode39_2);
myNode39.rightArg.set(myNode38);
myNode39.isVisible = False

/* définition du node n°40*/
const myNode40 = object.addBox();
myNode40.point1.set(-4.7269,-18.0999,-0.5949);
myNode40.point2.set(-2.2390999999999996,18.0999,0.5959000000000001);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(0.0,0.0,0.0);
myNode40.innerRotation.angle.set(0.0);
myNode40.isVisible = False

/* définition du node n°41*/
const myNode41 = object.addCommonOperation();
myNode41.leftArg.set(myNode39);
myNode41.rightArg.set(myNode40);
myNode41.isVisible = False

/* définition du node n°42*/
const myNode42 = object.addCylinder();
myNode42.point1.set(-4.728,-1.983,-0.5949);
myNode42.point2.set(-4.728,-1.983,0.5959000000000001);
myNode42.radius.set(0.27);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0,0.0,0.0);
myNode42.innerRotation.angle.set(0.0);
myNode42.isVisible = False

/* définition du node n°43*/
const myNode43 = object.addCutOperation();
myNode43.leftArg.set(myNode42);
myNode43.rightArg.set(myNode29);
myNode43.isVisible = False

/* définition du node n°44*/
const myNode44 = object.addBox();
myNode44.point1.set(4.0501,1.3001,-0.5949);
myNode44.point2.set(4.728899999999999,2.2549,0.5959000000000001);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(0.0,0.0,0.0);
myNode44.innerRotation.angle.set(0.0);
myNode44.isVisible = False

/* définition du node n°45*/
const myNode45 = object.addBox();
myNode45.point1.set(4.45505,-18.0999,-0.59495);
myNode45.point2.set(4.72895,2.0269999999999975,18.09995);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(0.0,0.0,0.0);
myNode45.innerRotation.angle.set(0.0);
myNode45.isVisible = False

/* définition du node n°46*/
const myNode46 = object.addBox();
myNode46.point1.set(-18.0999,1.30005,-0.59495);
myNode46.point2.set(3.593,1.70895,-0.23104999999999998);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(0.0,0.0,0.0);
myNode46.innerRotation.angle.set(0.0);
myNode46.isVisible = False

/* définition du node n°47*/
const myNode47 = object.addBox();
myNode47.point1.set(3.59305,1.30005,0.31405);
myNode47.point2.set(4.45395,2.25495,18.099950000000003);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(0.0,0.0,0.0);
myNode47.innerRotation.angle.set(0.0);
myNode47.isVisible = False

/* définition du node n°48*/
const myNode48 = object.addCylinder();
myNode48.point1.set(4.727,1.984,-18.0999);
myNode48.point2.set(4.727,1.984,18.099999999999998);
myNode48.radius.set(0.137);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);
myNode48.isVisible = False

/* définition du node n°49*/
const myNode49_1 = object.addFuseOperation();
myNode49_1.leftArg.set(myNode45);
myNode49_1.rightArg.set(myNode45);
const myNode49_2 = object.addFuseOperation();
myNode49_2.leftArg.set(myNode49_1);
myNode49_2.rightArg.set(myNode46);
const myNode49_3 = object.addFuseOperation();
myNode49_3.leftArg.set(myNode49_2);
myNode49_3.rightArg.set(myNode47);
myNode49 = object.addFuseOperation();
myNode49.leftArg.set(myNode49_3);
myNode49.rightArg.set(myNode48);
myNode49.isVisible = False

/* définition du node n°50*/
const myNode50 = object.addCutOperation();
myNode50.leftArg.set(myNode44);
myNode50.rightArg.set(myNode49);
myNode50.isVisible = False

/* définition du node n°51*/
const myNode51 = object.addCylinder();
myNode51.point1.set(3.044,3.044,-0.5949);
myNode51.point2.set(3.044,3.044,-0.3681);
myNode51.radius.set(0.545);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(0.0,0.0,0.0);
myNode51.innerRotation.angle.set(0.0);
myNode51.isVisible = False

/* définition du node n°52*/
const myNode52 = object.addCylinder();
myNode52.point1.set(-3.046,-3.046,-0.5949);
myNode52.point2.set(-3.046,-3.046,-0.040100000000000025);
myNode52.radius.set(0.136);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,0.0,0.0);
myNode52.innerRotation.angle.set(0.0);
myNode52.isVisible = False

/* définition du node n°53*/
const myNode53 = object.addBox();
myNode53.point1.set(-4.4549,-2.0269,-0.5949);
myNode53.point2.set(-0.27310000000000034,-1.3001,-0.3681);
myNode53.innerRotation.center.set(0,0,0);
myNode53.innerRotation.axis.set(0.0,0.0,0.0);
myNode53.innerRotation.angle.set(0.0);
myNode53.isVisible = False

/* définition du node n°54*/
const myNode54 = object.addBox();
myNode54.point1.set(-4.4549,-2.2539,-0.5949);
myNode54.point2.set(-0.27310000000000034,-2.0271,0.31390000000000007);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(0.0,0.0,0.0);
myNode54.innerRotation.angle.set(0.0);
myNode54.isVisible = False

/* définition du node n°55*/
const myNode55 = object.addFuseOperation();
myNode55.leftArg.set(myNode53);
myNode55.rightArg.set(myNode54);
myNode55.isVisible = False

/* définition du node n°56*/
const myNode56 = object.addBox();
myNode56.point1.set(-3.68595,-2.25395,-0.09395);
myNode56.point2.set(-2.82205,-2.02705,0.31394999999999995);
myNode56.innerRotation.center.set(0,0,0);
myNode56.innerRotation.axis.set(0.0,0.0,0.0);
myNode56.innerRotation.angle.set(0.0);
myNode56.isVisible = False

/* définition du node n°57*/
const myNode57 = object.addCutOperation();
myNode57.leftArg.set(myNode55);
myNode57.rightArg.set(myNode56);
myNode57.isVisible = False

/* définition du node n°58*/
const myNode58 = object.addBox();
myNode58.point1.set(-18.0999,1.7091,-0.5949);
myNode58.point2.set(18.0999,2.5099,0.5959000000000001);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(0.0,0.0,0.0);
myNode58.innerRotation.angle.set(0.0);
myNode58.isVisible = False

/* définition du node n°59*/
const myNode59 = object.addBox();
myNode59.point1.set(2.2401,2.0271,-0.5949);
myNode59.point2.set(4.0499,3.0469,0.31390000000000007);
myNode59.innerRotation.center.set(0,0,0);
myNode59.innerRotation.axis.set(0.0,0.0,0.0);
myNode59.innerRotation.angle.set(0.0);
myNode59.isVisible = False

/* définition du node n°60*/
const myNode60 = object.addCylinder();
myNode60.point1.set(2.247,2.508,-0.59495);
myNode60.point2.set(2.247,2.508,18.09995);
myNode60.radius.set(0.248);
myNode60.innerRotation.center.set(0,0,0);
myNode60.innerRotation.axis.set(0.0,0.0,0.0);
myNode60.innerRotation.angle.set(0.0);
myNode60.isVisible = False

/* définition du node n°61*/
const myNode61 = object.addCutOperation();
myNode61.leftArg.set(myNode59);
myNode61.rightArg.set(myNode60);
myNode61.isVisible = False

/* définition du node n°62*/
const myNode62 = object.addCylinder();
myNode62.point1.set(3.859,2.522,-18.0999);
myNode62.point2.set(3.859,2.522,-0.04100000000000037);
myNode62.radius.set(0.268);
myNode62.innerRotation.center.set(0,0,0);
myNode62.innerRotation.axis.set(0.0,0.0,0.0);
myNode62.innerRotation.angle.set(0.0);
myNode62.isVisible = False

/* définition du node n°63*/
const myNode63 = object.addBox();
myNode63.point1.set(2.24005,2.25505,-0.23195);
myNode63.point2.set(4.04995,3.0469500000000003,0.31295000000000006);
myNode63.innerRotation.center.set(0,0,0);
myNode63.innerRotation.axis.set(0.0,0.0,0.0);
myNode63.innerRotation.angle.set(0.0);
myNode63.isVisible = False

/* définition du node n°64*/
const myNode64 = object.addFuseOperation();
myNode64.leftArg.set(myNode62);
myNode64.rightArg.set(myNode63);
myNode64.isVisible = False

/* définition du node n°65*/
const myNode65 = object.addCutOperation();
myNode65.leftArg.set(myNode61);
myNode65.rightArg.set(myNode64);
myNode65.isVisible = False

/* définition du node n°66*/
const myNode66 = object.addBox();
myNode66.point1.set(4.4551,1.7091,-0.5949);
myNode66.point2.set(4.728899999999999,2.0269,0.5959000000000001);
myNode66.innerRotation.center.set(0,0,0);
myNode66.innerRotation.axis.set(0.0,0.0,0.0);
myNode66.innerRotation.angle.set(0.0);
myNode66.isVisible = False

/* définition du node n°67*/
const myNode67 = object.addCylinder();
myNode67.point1.set(4.729,1.981,-18.0999);
myNode67.point2.set(4.729,1.981,18.0999);
myNode67.radius.set(0.27);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(0.0,0.0,0.0);
myNode67.innerRotation.angle.set(0.0);
myNode67.isVisible = False

/* définition du node n°68*/
const myNode68 = object.addFuseOperation();
myNode68.leftArg.set(myNode66);
myNode68.rightArg.set(myNode67);
myNode68.isVisible = False

/* définition du node n°69*/
const myNode69 = object.addCylinder();
myNode69.point1.set(4.727,1.984,-18.0999);
myNode69.point2.set(4.727,1.984,0.5949999999999989);
myNode69.radius.set(0.137);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(0.0,0.0,0.0);
myNode69.innerRotation.angle.set(0.0);
myNode69.isVisible = False

/* définition du node n°70*/
const myNode70 = object.addCutOperation();
myNode70.leftArg.set(myNode68);
myNode70.rightArg.set(myNode69);
myNode70.isVisible = False

/* définition du node n°71*/
const myNode71 = object.addFuseOperation();
myNode71.leftArg.set(myNode65);
myNode71.rightArg.set(myNode70);
myNode71.isVisible = False

/* définition du node n°72*/
const myNode72 = object.addCommonOperation();
myNode72.leftArg.set(myNode58);
myNode72.rightArg.set(myNode71);
myNode72.isVisible = False

/* définition du node n°73*/
const myNode73 = object.addBox();
myNode73.point1.set(-18.0999,-1.7089,-0.5949);
myNode73.point2.set(2.2398999999999987,2.5099,0.5959000000000001);
myNode73.innerRotation.center.set(0,0,0);
myNode73.innerRotation.axis.set(0.0,0.0,0.0);
myNode73.innerRotation.angle.set(0.0);
myNode73.isVisible = False

/* définition du node n°74*/
const myNode74 = object.addCylinder();
myNode74.point1.set(-3.847,2.51,-18.0999);
myNode74.point2.set(-3.847,2.51,18.099999999999998);
myNode74.radius.set(0.252);
myNode74.innerRotation.center.set(0,0,0);
myNode74.innerRotation.axis.set(0.0,0.0,0.0);
myNode74.innerRotation.angle.set(0.0);
myNode74.isVisible = False

/* définition du node n°75*/
const myNode75 = object.addCutOperation();
myNode75.leftArg.set(myNode73);
myNode75.rightArg.set(myNode74);
myNode75.isVisible = False

/* définition du node n°76*/
const myNode76 = object.addCylinder();
myNode76.point1.set(-4.728,1.982,-18.0999);
myNode76.point2.set(-4.728,1.982,18.099999999999998);
myNode76.radius.set(0.136);
myNode76.innerRotation.center.set(0,0,0);
myNode76.innerRotation.axis.set(0.0,0.0,0.0);
myNode76.innerRotation.angle.set(0.0);
myNode76.isVisible = False

/* définition du node n°77*/
const myNode77 = object.addCylinder();
myNode77.point1.set(0,2.527,-18.0999);
myNode77.point2.set(0,2.527,0.5949999999999989);
myNode77.radius.set(0.135);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(0.0,0.0,0.0);
myNode77.innerRotation.angle.set(0.0);
myNode77.isVisible = False

/* définition du node n°78*/
const myNode78 = object.addFuseOperation();
myNode78.leftArg.set(myNode76);
myNode78.rightArg.set(myNode77);
myNode78.isVisible = False

/* définition du node n°79*/
const myNode79 = object.addCutOperation();
myNode79.leftArg.set(myNode75);
myNode79.rightArg.set(myNode78);
myNode79.isVisible = False

/* définition du node n°80*/
const myNode80 = object.addBox();
myNode80.point1.set(-3.98195,2.02705,-0.09395);
myNode80.point2.set(-3.1180499999999998,2.50895,0.31394999999999995);
myNode80.innerRotation.center.set(0,0,0);
myNode80.innerRotation.axis.set(0.0,0.0,0.0);
myNode80.innerRotation.angle.set(0.0);
myNode80.isVisible = False

/* définition du node n°81*/
const myNode81 = object.addBox();
myNode81.point1.set(-4.04995,-1.70895,-0.36795);
myNode81.point2.set(2.2399500000000003,2.0269500000000003,18.09995);
myNode81.innerRotation.center.set(0,0,0);
myNode81.innerRotation.axis.set(0.0,0.0,0.0);
myNode81.innerRotation.angle.set(0.0);
myNode81.isVisible = False

/* définition du node n°82*/
const myNode82 = object.addBox();
myNode82.point1.set(-3.59195,2.25505,-0.23195);
myNode82.point2.set(-0.2720500000000001,2.5099500000000003,-0.09505);
myNode82.innerRotation.center.set(0,0,0);
myNode82.innerRotation.axis.set(0.0,0.0,0.0);
myNode82.innerRotation.angle.set(0.0);
myNode82.isVisible = False

/* définition du node n°83*/
const myNode83_1 = object.addFuseOperation();
myNode83_1.leftArg.set(myNode80);
myNode83_1.rightArg.set(myNode80);
const myNode83_2 = object.addFuseOperation();
myNode83_2.leftArg.set(myNode83_1);
myNode83_2.rightArg.set(myNode81);
myNode83 = object.addFuseOperation();
myNode83.leftArg.set(myNode83_2);
myNode83.rightArg.set(myNode82);
myNode83.isVisible = False

/* définition du node n°84*/
const myNode84 = object.addCutOperation();
myNode84.leftArg.set(myNode79);
myNode84.rightArg.set(myNode83);
myNode84.isVisible = False

/* définition du node n°85*/
const myNode85 = object.addBox();
myNode85.point1.set(-4.7269,1.7091,-0.5949);
myNode85.point2.set(-4.4540999999999995,2.2539,18.0999);
myNode85.innerRotation.center.set(0,0,0);
myNode85.innerRotation.axis.set(0.0,0.0,0.0);
myNode85.innerRotation.angle.set(0.0);
myNode85.isVisible = False

/* définition du node n°86*/
const myNode86 = object.addBox();
myNode86.point1.set(-0.2729,2.2551,-0.5949);
myNode86.point2.set(0.2719,2.5099,0.5959000000000001);
myNode86.innerRotation.center.set(0,0,0);
myNode86.innerRotation.axis.set(0.0,0.0,0.0);
myNode86.innerRotation.angle.set(0.0);
myNode86.isVisible = False

/* définition du node n°87*/
const myNode87 = object.addBox();
myNode87.point1.set(-4.4549,-1.7089,-18.0999);
myNode87.point2.set(-3.3231,2.0268999999999995,0.31389999999999674);
myNode87.innerRotation.center.set(0,0,0);
myNode87.innerRotation.axis.set(0.0,0.0,0.0);
myNode87.innerRotation.angle.set(0.0);
myNode87.isVisible = False

/* définition du node n°88*/
const myNode88 = object.addCylinder();
myNode88.point1.set(-4.727,1.983,-0.5949);
myNode88.point2.set(-4.727,1.983,0.5959000000000001);
myNode88.radius.set(0.271);
myNode88.innerRotation.center.set(0,0,0);
myNode88.innerRotation.axis.set(0.0,0.0,0.0);
myNode88.innerRotation.angle.set(0.0);
myNode88.isVisible = False

/* définition du node n°89*/
const myNode89 = object.addBox();
myNode89.point1.set(-3.9819,1.3001,-0.5949);
myNode89.point2.set(-2.2391,2.5099,-0.23109999999999997);
myNode89.innerRotation.center.set(0,0,0);
myNode89.innerRotation.axis.set(0.0,0.0,0.0);
myNode89.innerRotation.angle.set(0.0);
myNode89.isVisible = False

/* définition du node n°90*/
const myNode90 = object.addCylinder();
myNode90.point1.set(-2.239,2.517,-18.0999);
myNode90.point2.set(-2.239,2.517,18.099999999999998);
myNode90.radius.set(0.26);
myNode90.innerRotation.center.set(0,0,0);
myNode90.innerRotation.axis.set(0.0,0.0,0.0);
myNode90.innerRotation.angle.set(0.0);
myNode90.isVisible = False

/* définition du node n°91*/
const myNode91 = object.addCutOperation();
myNode91.leftArg.set(myNode89);
myNode91.rightArg.set(myNode90);
myNode91.isVisible = False

/* définition du node n°92*/
const myNode92 = object.addBox();
myNode92.point1.set(-4.4549,1.3001,-18.0999);
myNode92.point2.set(18.099899999999998,2.2549,0.31389999999999674);
myNode92.innerRotation.center.set(0,0,0);
myNode92.innerRotation.axis.set(0.0,0.0,0.0);
myNode92.innerRotation.angle.set(0.0);
myNode92.isVisible = False

/* définition du node n°93*/
const myNode93_1 = object.addFuseOperation();
myNode93_1.leftArg.set(myNode85);
myNode93_1.rightArg.set(myNode85);
const myNode93_2 = object.addFuseOperation();
myNode93_2.leftArg.set(myNode93_1);
myNode93_2.rightArg.set(myNode86);
const myNode93_3 = object.addFuseOperation();
myNode93_3.leftArg.set(myNode93_2);
myNode93_3.rightArg.set(myNode87);
const myNode93_4 = object.addFuseOperation();
myNode93_4.leftArg.set(myNode93_3);
myNode93_4.rightArg.set(myNode88);
const myNode93_5 = object.addFuseOperation();
myNode93_5.leftArg.set(myNode93_4);
myNode93_5.rightArg.set(myNode91);
myNode93 = object.addFuseOperation();
myNode93.leftArg.set(myNode93_5);
myNode93.rightArg.set(myNode92);
myNode93.isVisible = False

/* définition du node n°94*/
const myNode94 = object.addCommonOperation();
myNode94.leftArg.set(myNode84);
myNode94.rightArg.set(myNode93);
myNode94.isVisible = False

/* définition du node n°95*/
const myNode95 = object.addCylinder();
myNode95.point1.set(3.045,3.046,-0.1489);
myNode95.point2.set(3.045,3.046,-0.0411);
myNode95.radius.set(0.136);
myNode95.innerRotation.center.set(0,0,0);
myNode95.innerRotation.axis.set(0.0,0.0,0.0);
myNode95.innerRotation.angle.set(0.0);
myNode95.isVisible = False

/* définition du node n°96*/
const myNode96 = object.addBox();
myNode96.point1.set(2.5001,2.0271,-0.5949);
myNode96.point2.set(3.5929,3.0469,-0.23109999999999997);
myNode96.innerRotation.center.set(0,0,0);
myNode96.innerRotation.axis.set(0.0,0.0,0.0);
myNode96.innerRotation.angle.set(0.0);
myNode96.isVisible = False

/* définition du node n°97*/
const myNode97 = object.addBox();
myNode97.point1.set(2.5001,-3.0219,-0.5949);
myNode97.point2.set(4.4549,1.2998999999999996,0.31390000000000007);
myNode97.innerRotation.center.set(0,0,0);
myNode97.innerRotation.axis.set(0.0,0.0,0.0);
myNode97.innerRotation.angle.set(0.0);
myNode97.isVisible = False

/* définition du node n°98*/
const myNode98 = object.addBox();
myNode98.point1.set(-0.2729,-2.5119,-0.5949);
myNode98.point2.set(4.7279,-1.3000999999999998,0.5959000000000001);
myNode98.innerRotation.center.set(0,0,0);
myNode98.innerRotation.axis.set(0.0,0.0,0.0);
myNode98.innerRotation.angle.set(0.0);
myNode98.isVisible = False

/* définition du node n°99*/
const myNode99 = object.addCylinder();
myNode99.point1.set(4.727,-1.981,-0.5949);
myNode99.point2.set(4.727,-1.981,0.5959000000000001);
myNode99.radius.set(0.272);
myNode99.innerRotation.center.set(0,0,0);
myNode99.innerRotation.axis.set(0.0,0.0,0.0);
myNode99.innerRotation.angle.set(0.0);
myNode99.isVisible = False

/* définition du node n°100*/
const myNode100 = object.addCylinder();
myNode100.point1.set(-0.002,-2.524,-0.5949);
myNode100.point2.set(-0.002,-2.524,0.5959000000000001);
myNode100.radius.set(0.276);
myNode100.innerRotation.center.set(0,0,0);
myNode100.innerRotation.axis.set(0.0,0.0,0.0);
myNode100.innerRotation.angle.set(0.0);
myNode100.isVisible = False

/* définition du node n°101*/
const myNode101_1 = object.addFuseOperation();
myNode101_1.leftArg.set(myNode97);
myNode101_1.rightArg.set(myNode97);
const myNode101_2 = object.addFuseOperation();
myNode101_2.leftArg.set(myNode101_1);
myNode101_2.rightArg.set(myNode98);
const myNode101_3 = object.addFuseOperation();
myNode101_3.leftArg.set(myNode101_2);
myNode101_3.rightArg.set(myNode99);
myNode101 = object.addFuseOperation();
myNode101.leftArg.set(myNode101_3);
myNode101.rightArg.set(myNode100);
myNode101.isVisible = False

/* définition du node n°102*/
const myNode102 = object.addBox();
myNode102.point1.set(2.50005,-1.29995,-18.0999);
myNode102.point2.set(3.59295,1.29995,0.31400000000000006);
myNode102.innerRotation.center.set(0,0,0);
myNode102.innerRotation.axis.set(0.0,0.0,0.0);
myNode102.innerRotation.angle.set(0.0);
myNode102.isVisible = False

/* définition du node n°103*/
const myNode103 = object.addCylinder();
myNode103.point1.set(0,-2.528,-0.59495);
myNode103.point2.set(0,-2.528,18.09995);
myNode103.radius.set(0.136);
myNode103.innerRotation.center.set(0,0,0);
myNode103.innerRotation.axis.set(0.0,0.0,0.0);
myNode103.innerRotation.angle.set(0.0);
myNode103.isVisible = False

/* définition du node n°104*/
const myNode104 = object.addBox();
myNode104.point1.set(4.45505,-1.70895,-18.0999);
myNode104.point2.set(18.100949999999997,-1.30005,18.099999999999998);
myNode104.innerRotation.center.set(0,0,0);
myNode104.innerRotation.axis.set(0.0,0.0,0.0);
myNode104.innerRotation.angle.set(0.0);
myNode104.isVisible = False

/* définition du node n°105*/
const myNode105 = object.addBox();
myNode105.point1.set(-18.0999,-2.02695,-0.36795);
myNode105.point2.set(4.049999999999997,1.2999500000000004,18.09995);
myNode105.innerRotation.center.set(0,0,0);
myNode105.innerRotation.axis.set(0.0,0.0,0.0);
myNode105.innerRotation.angle.set(0.0);
myNode105.isVisible = False

/* définition du node n°106*/
const myNode106 = object.addBox();
myNode106.point1.set(-0.27295,-2.25395,0.31405);
myNode106.point2.set(4.45395,1.29995,0.59595);
myNode106.innerRotation.center.set(0,0,0);
myNode106.innerRotation.axis.set(0.0,0.0,0.0);
myNode106.innerRotation.angle.set(0.0);
myNode106.isVisible = False

/* définition du node n°107*/
const myNode107 = object.addBox();
myNode107.point1.set(0.27305,-18.0999,-0.59495);
myNode107.point2.set(18.09995,-2.255000000000001,0.5959500000000001);
myNode107.innerRotation.center.set(0,0,0);
myNode107.innerRotation.axis.set(0.0,0.0,0.0);
myNode107.innerRotation.angle.set(0.0);
myNode107.isVisible = False

/* définition du node n°108*/
const myNode108 = object.addBox();
myNode108.point1.set(2.5,-3.022,-0.595);
myNode108.point2.set(3.593,-1.7089999999999999,-0.23099999999999998);
myNode108.innerRotation.center.set(0,0,0);
myNode108.innerRotation.axis.set(0.0,0.0,0.0);
myNode108.innerRotation.angle.set(0.0);
myNode108.isVisible = False

/* définition du node n°109*/
const myNode109 = object.addCutOperation();
myNode109.leftArg.set(myNode107);
myNode109.rightArg.set(myNode108);
myNode109.isVisible = False

/* définition du node n°110*/
const myNode110_1 = object.addFuseOperation();
myNode110_1.leftArg.set(myNode102);
myNode110_1.rightArg.set(myNode102);
const myNode110_2 = object.addFuseOperation();
myNode110_2.leftArg.set(myNode110_1);
myNode110_2.rightArg.set(myNode103);
const myNode110_3 = object.addFuseOperation();
myNode110_3.leftArg.set(myNode110_2);
myNode110_3.rightArg.set(myNode104);
const myNode110_4 = object.addFuseOperation();
myNode110_4.leftArg.set(myNode110_3);
myNode110_4.rightArg.set(myNode17);
const myNode110_5 = object.addFuseOperation();
myNode110_5.leftArg.set(myNode110_4);
myNode110_5.rightArg.set(myNode105);
const myNode110_6 = object.addFuseOperation();
myNode110_6.leftArg.set(myNode110_5);
myNode110_6.rightArg.set(myNode106);
myNode110 = object.addFuseOperation();
myNode110.leftArg.set(myNode110_6);
myNode110.rightArg.set(myNode109);
myNode110.isVisible = False

/* définition du node n°111*/
const myNode111 = object.addCutOperation();
myNode111.leftArg.set(myNode101);
myNode111.rightArg.set(myNode110);
myNode111.isVisible = False

/* définition du node n°112*/
const myNode112 = object.addCylinder();
myNode112.point1.set(-3.045,-3.047,-0.5949);
myNode112.point2.set(-3.045,-3.047,-0.23109999999999997);
myNode112.radius.set(0.541);
myNode112.innerRotation.center.set(0,0,0);
myNode112.innerRotation.axis.set(0.0,0.0,0.0);
myNode112.innerRotation.angle.set(0.0);
myNode112.isVisible = False

/* définition du node n°113*/
const myNode113 = object.addSphere();
myNode113.center.set(0,0,0);
myNode113.radius.set(54.29981583762508);
myNode113.isVisible = False

/* définition du node n°114*/
const myNode114 = object.addCylinder();
myNode114.point1.set(3.859,2.522,-18.0999);
myNode114.point2.set(3.859,2.522,-0.5950000000000024);
myNode114.radius.set(0.268);
myNode114.innerRotation.center.set(0,0,0);
myNode114.innerRotation.axis.set(0.0,0.0,0.0);
myNode114.innerRotation.angle.set(0.0);
myNode114.isVisible = False

/* définition du node n°115*/
const myNode115 = object.addCutOperation();
myNode115.leftArg.set(myNode113);
myNode115.rightArg.set(myNode114);
myNode115.isVisible = False

/* définition du node n°116*/
const myNode116 = object.addCylinder();
myNode116.point1.set(3.044,3.044,-0.3679);
myNode116.point2.set(3.044,3.044,-0.2321);
myNode116.radius.set(0.545);
myNode116.innerRotation.center.set(0,0,0);
myNode116.innerRotation.axis.set(0.0,0.0,0.0);
myNode116.innerRotation.angle.set(0.0);
myNode116.isVisible = False

/* définition du node n°117*/
const myNode117 = object.addBox();
myNode117.point1.set(2.2401,1.3001,-0.5949);
myNode117.point2.set(4.4549,2.0269,-0.3681);
myNode117.innerRotation.center.set(0,0,0);
myNode117.innerRotation.axis.set(0.0,0.0,0.0);
myNode117.innerRotation.angle.set(0.0);
myNode117.isVisible = False

/* définition du node n°118*/
const myNode118 = object.addFuseOperation();
myNode118.leftArg.set(myNode116);
myNode118.rightArg.set(myNode117);
myNode118.isVisible = False

/* définition du node n°119*/
const myNode119 = object.addCommonOperation();
myNode119.leftArg.set(myNode115);
myNode119.rightArg.set(myNode118);
myNode119.isVisible = False

/* définition du node n°120*/
const myNode120 = object.addCylinder();
myNode120.point1.set(3.045,3.045,-0.5949);
myNode120.point2.set(3.045,3.045,-0.1491);
myNode120.radius.set(0.253);
myNode120.innerRotation.center.set(0,0,0);
myNode120.innerRotation.axis.set(0.0,0.0,0.0);
myNode120.innerRotation.angle.set(0.0);
myNode120.isVisible = False

/* définition du node n°121*/
const myNode121 = object.addCylinder();
myNode121.point1.set(0,2.526,-0.5949);
myNode121.point2.set(0,2.526,0.5959000000000001);
myNode121.radius.set(0.273);
myNode121.innerRotation.center.set(0,0,0);
myNode121.innerRotation.axis.set(0.0,0.0,0.0);
myNode121.innerRotation.angle.set(0.0);
myNode121.isVisible = False

/* définition du node n°122*/
const myNode122 = object.addCylinder();
myNode122.point1.set(0,2.527,-0.59495);
myNode122.point2.set(0,2.527,18.09995);
myNode122.radius.set(0.135);
myNode122.innerRotation.center.set(0,0,0);
myNode122.innerRotation.axis.set(0.0,0.0,0.0);
myNode122.innerRotation.angle.set(0.0);
myNode122.isVisible = False

/* définition du node n°123*/
const myNode123 = object.addCutOperation();
myNode123.leftArg.set(myNode121);
myNode123.rightArg.set(myNode122);
myNode123.isVisible = False

/* définition du node n°124*/
const myNode124 = object.addCommonOperation();
myNode124.leftArg.set(myNode113);
myNode124.rightArg.set(myNode123);
myNode124.isVisible = False

/* définition du node n°125*/
const myNode125 = object.addCylinder();
myNode125.point1.set(-3.044,3.047,-0.5949);
myNode125.point2.set(-3.044,3.047,-0.23109999999999997);
myNode125.radius.set(0.541);
myNode125.innerRotation.center.set(0,0,0);
myNode125.innerRotation.axis.set(0.0,0.0,0.0);
myNode125.innerRotation.angle.set(0.0);
myNode125.isVisible = False

/* définition du node n°126*/
const myNode126 = object.addBox();
myNode126.point1.set(-3.5919,2.0271,-0.5949);
myNode126.point2.set(-2.2381,3.0469,-0.23109999999999997);
myNode126.innerRotation.center.set(0,0,0);
myNode126.innerRotation.axis.set(0.0,0.0,0.0);
myNode126.innerRotation.angle.set(0.0);
myNode126.isVisible = False

/* définition du node n°127*/
const myNode127 = object.addCylinder();
myNode127.point1.set(-3.045,3.045,-0.2319);
myNode127.point2.set(-3.045,3.045,-0.0411);
myNode127.radius.set(0.254);
myNode127.innerRotation.center.set(0,0,0);
myNode127.innerRotation.axis.set(0.0,0.0,0.0);
myNode127.innerRotation.angle.set(0.0);
myNode127.isVisible = False

/* définition du node n°128*/
const myNode128_1 = object.addFuseOperation();
myNode128_1.leftArg.set(myNode124);
myNode128_1.rightArg.set(myNode124);
const myNode128_2 = object.addFuseOperation();
myNode128_2.leftArg.set(myNode128_1);
myNode128_2.rightArg.set(myNode125);
const myNode128_3 = object.addFuseOperation();
myNode128_3.leftArg.set(myNode128_2);
myNode128_3.rightArg.set(myNode126);
myNode128 = object.addFuseOperation();
myNode128.leftArg.set(myNode128_3);
myNode128.rightArg.set(myNode127);
myNode128.isVisible = False

/* définition du node n°129*/
const myNode129 = object.addCylinder();
myNode129.point1.set(-3.045,3.045,-0.2319);
myNode129.point2.set(-3.045,3.045,-0.0411);
myNode129.radius.set(0.136);
myNode129.innerRotation.center.set(0,0,0);
myNode129.innerRotation.axis.set(0.0,0.0,0.0);
myNode129.innerRotation.angle.set(0.0);
myNode129.isVisible = False

/* définition du node n°130*/
const myNode130 = object.addBox();
myNode130.point1.set(-0.2729,2.5101,-0.5949);
myNode130.point2.set(18.0999,3.0469,18.0999);
myNode130.innerRotation.center.set(0,0,0);
myNode130.innerRotation.axis.set(0.0,0.0,0.0);
myNode130.innerRotation.angle.set(0.0);
myNode130.isVisible = False

/* définition du node n°131*/
const myNode131 = object.addBox();
myNode131.point1.set(-4.4549,2.5101,-0.5949);
myNode131.point2.set(-2.5001,18.0999,-0.1491);
myNode131.innerRotation.center.set(0,0,0);
myNode131.innerRotation.axis.set(0.0,0.0,0.0);
myNode131.innerRotation.angle.set(0.0);
myNode131.isVisible = False

/* définition du node n°132*/
const myNode132_1 = object.addFuseOperation();
myNode132_1.leftArg.set(myNode129);
myNode132_1.rightArg.set(myNode129);
const myNode132_2 = object.addFuseOperation();
myNode132_2.leftArg.set(myNode132_1);
myNode132_2.rightArg.set(myNode130);
myNode132 = object.addFuseOperation();
myNode132.leftArg.set(myNode132_2);
myNode132.rightArg.set(myNode131);
myNode132.isVisible = False

/* définition du node n°133*/
const myNode133 = object.addCommonOperation();
myNode133.leftArg.set(myNode128);
myNode133.rightArg.set(myNode132);
myNode133.isVisible = False

/* définition du node n°134*/
const myNode134_1 = object.addFuseOperation();
myNode134_1.leftArg.set(myNode3);
myNode134_1.rightArg.set(myNode3);
const myNode134_2 = object.addFuseOperation();
myNode134_2.leftArg.set(myNode134_1);
myNode134_2.rightArg.set(myNode4);
const myNode134_3 = object.addFuseOperation();
myNode134_3.leftArg.set(myNode134_2);
myNode134_3.rightArg.set(myNode27);
const myNode134_4 = object.addFuseOperation();
myNode134_4.leftArg.set(myNode134_3);
myNode134_4.rightArg.set(myNode41);
const myNode134_5 = object.addFuseOperation();
myNode134_5.leftArg.set(myNode134_4);
myNode134_5.rightArg.set(myNode43);
const myNode134_6 = object.addFuseOperation();
myNode134_6.leftArg.set(myNode134_5);
myNode134_6.rightArg.set(myNode50);
const myNode134_7 = object.addFuseOperation();
myNode134_7.leftArg.set(myNode134_6);
myNode134_7.rightArg.set(myNode51);
const myNode134_8 = object.addFuseOperation();
myNode134_8.leftArg.set(myNode134_7);
myNode134_8.rightArg.set(myNode52);
const myNode134_9 = object.addFuseOperation();
myNode134_9.leftArg.set(myNode134_8);
myNode134_9.rightArg.set(myNode57);
const myNode134_10 = object.addFuseOperation();
myNode134_10.leftArg.set(myNode134_9);
myNode134_10.rightArg.set(myNode72);
const myNode134_11 = object.addFuseOperation();
myNode134_11.leftArg.set(myNode134_10);
myNode134_11.rightArg.set(myNode94);
const myNode134_12 = object.addFuseOperation();
myNode134_12.leftArg.set(myNode134_11);
myNode134_12.rightArg.set(myNode95);
const myNode134_13 = object.addFuseOperation();
myNode134_13.leftArg.set(myNode134_12);
myNode134_13.rightArg.set(myNode96);
const myNode134_14 = object.addFuseOperation();
myNode134_14.leftArg.set(myNode134_13);
myNode134_14.rightArg.set(myNode111);
const myNode134_15 = object.addFuseOperation();
myNode134_15.leftArg.set(myNode134_14);
myNode134_15.rightArg.set(myNode112);
const myNode134_16 = object.addFuseOperation();
myNode134_16.leftArg.set(myNode134_15);
myNode134_16.rightArg.set(myNode119);
const myNode134_17 = object.addFuseOperation();
myNode134_17.leftArg.set(myNode134_16);
myNode134_17.rightArg.set(myNode120);
myNode134 = object.addFuseOperation();
myNode134.leftArg.set(myNode134_17);
myNode134.rightArg.set(myNode133);
myNode134.isVisible = False

/* définition du node n°135*/
const myNode135 = object.addCommonOperation();
myNode135.leftArg.set(myNode0);
myNode135.rightArg.set(myNode134);
myNode135.isVisible = True


/*END Geometry Object Definition*/