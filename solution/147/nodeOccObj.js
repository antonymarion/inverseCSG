/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.9999,-4.3059,-0.7149);
myNode0.point2.set(5.9999,4.304899999999999,0.7139000000000001);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(0,0,0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-18.0999,1.7091,-0.5949);
myNode1.point2.set(18.0999,2.5099,0.5959000000000001);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.innerTranslation.vector.set(0,0,0);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(2.2401,2.0271,-0.5949);
myNode2.point2.set(4.0499,3.0469,0.31390000000000007);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.innerTranslation.vector.set(0,0,0);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(2.247,2.508,-0.59495);
myNode3.point2.set(2.247,2.508,18.09995);
myNode3.radius.set(0.248);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addCutOperation();
myNode4.leftArg.set(myNode2);
myNode4.rightArg.set(myNode3);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(3.859,2.522,-18.0999);
myNode5.point2.set(3.859,2.522,-0.04100000000000037);
myNode5.radius.set(0.268);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addBox();
myNode6.point1.set(2.24005,2.25505,-0.23195);
myNode6.point2.set(4.04995,3.0469500000000003,0.31295000000000006);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.innerTranslation.vector.set(0,0,0);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addFuseOperation();
myNode7.leftArg.set(myNode5);
myNode7.rightArg.set(myNode6);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addCutOperation();
myNode8.leftArg.set(myNode4);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(4.4551,1.7091,-0.5949);
myNode9.point2.set(4.728899999999999,2.0269,0.5959000000000001);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.innerTranslation.vector.set(0,0,0);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addCylinder();
myNode10.point1.set(4.729,1.981,-18.0999);
myNode10.point2.set(4.729,1.981,18.0999);
myNode10.radius.set(0.27);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addFuseOperation();
myNode11.leftArg.set(myNode9);
myNode11.rightArg.set(myNode10);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(4.727,1.984,-18.0999);
myNode12.point2.set(4.727,1.984,0.5949999999999989);
myNode12.radius.set(0.137);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addCutOperation();
myNode13.leftArg.set(myNode11);
myNode13.rightArg.set(myNode12);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addFuseOperation();
myNode14.leftArg.set(myNode8);
myNode14.rightArg.set(myNode13);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addCommonOperation();
myNode15.leftArg.set(myNode1);
myNode15.rightArg.set(myNode14);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(3.045,3.045,-0.5949);
myNode16.point2.set(3.045,3.045,-0.1491);
myNode16.radius.set(0.253);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addSphere();
myNode17.center.set(0,0,0);
myNode17.radius.set(54.29981583762508);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(3.859,2.522,-18.0999);
myNode18.point2.set(3.859,2.522,-0.5950000000000024);
myNode18.radius.set(0.268);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addCutOperation();
myNode19.leftArg.set(myNode17);
myNode19.rightArg.set(myNode18);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addBox();
myNode20.point1.set(2.2401,1.3001,-0.5949);
myNode20.point2.set(4.4549,2.0269,-0.3681);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);
myNode20.innerTranslation.vector.set(0,0,0);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addCylinder();
myNode21.point1.set(3.044,3.044,-0.3679);
myNode21.point2.set(3.044,3.044,-0.2321);
myNode21.radius.set(0.545);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addFuseOperation();
myNode22.leftArg.set(myNode20);
myNode22.rightArg.set(myNode21);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addCommonOperation();
myNode23.leftArg.set(myNode19);
myNode23.rightArg.set(myNode22);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addCylinder();
myNode24.point1.set(3.045,-3.045,-0.2319);
myNode24.point2.set(3.045,-3.045,-0.1501);
myNode24.radius.set(0.253);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addCylinder();
myNode25.point1.set(3.043,-3.043,-0.5949);
myNode25.point2.set(3.043,-3.043,-0.23109999999999997);
myNode25.radius.set(0.543);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(0.0,0.0,0.0);
myNode25.innerRotation.angle.set(0.0);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addBox();
myNode26.point1.set(3.3231,-1.7089,-0.5949);
myNode26.point2.set(3.8519,1.2998999999999998,-0.3681);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);
myNode26.innerTranslation.vector.set(0,0,0);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addBox();
myNode27.point1.set(2.2401,-2.5119,-0.5949);
myNode27.point2.set(3.8518999999999997,-2.0271,-0.23109999999999997);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);
myNode27.innerTranslation.vector.set(0,0,0);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addCylinder();
myNode28.point1.set(3.045,-3.046,-0.1489);
myNode28.point2.set(3.045,-3.046,0.5959);
myNode28.radius.set(0.136);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(0.0,0.0,0.0);
myNode28.innerRotation.angle.set(0.0);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addFuseOperation();
myNode29.leftArg.set(myNode27);
myNode29.rightArg.set(myNode28);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addBox();
myNode30.point1.set(3.3231,-2.0269,-0.5949);
myNode30.point2.set(18.099899999999998,18.099899999999998,-0.23109999999999997);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);
myNode30.innerTranslation.vector.set(0,0,0);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addBox();
myNode31.point1.set(0.2731,-18.0999,-0.5949);
myNode31.point2.set(18.099899999999998,-2.2551000000000023,-0.040100000000000025);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(0.0,0.0,0.0);
myNode31.innerRotation.angle.set(0.0);
myNode31.innerTranslation.vector.set(0,0,0);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addFuseOperation();
myNode32.leftArg.set(myNode30);
myNode32.rightArg.set(myNode31);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addCommonOperation();
myNode33.leftArg.set(myNode29);
myNode33.rightArg.set(myNode32);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addBox();
myNode34.point1.set(2.5001,-3.0219,-0.1489);
myNode34.point2.set(3.3229,-2.5121,-0.0411);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(0.0,0.0,0.0);
myNode34.innerRotation.angle.set(0.0);
myNode34.innerTranslation.vector.set(0,0,0);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35_1 = myNode24.clone();
myNode35_1.isVisible = false;
const myNode35_2 = object.addFuseOperation();
myNode35_2.leftArg.set(myNode35_1);
myNode35_2.rightArg.set(myNode25);
myNode35_2.isVisible = false;
const myNode35_3 = object.addFuseOperation();
myNode35_3.leftArg.set(myNode35_2);
myNode35_3.rightArg.set(myNode26);
myNode35_3.isVisible = false;
const myNode35_4 = object.addFuseOperation();
myNode35_4.leftArg.set(myNode35_3);
myNode35_4.rightArg.set(myNode33);
myNode35_4.isVisible = false;
myNode35 = object.addFuseOperation();
myNode35.leftArg.set(myNode35_4);
myNode35.rightArg.set(myNode34);
myNode35.isVisible = false;
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addBox();
myNode36.point1.set(0.27305,-3.02195,-0.14895);
myNode36.point2.set(3.32295,-2.51205,18.09995);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(0.0,0.0,0.0);
myNode36.innerRotation.angle.set(0.0);
myNode36.innerTranslation.vector.set(0,0,0);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addCylinder();
myNode37.point1.set(3.045,-3.046,-0.368);
myNode37.point2.set(3.045,-3.046,18.1);
myNode37.radius.set(0.136);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0,0.0,0.0);
myNode37.innerRotation.angle.set(0.0);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addCutOperation();
myNode38.leftArg.set(myNode36);
myNode38.rightArg.set(myNode37);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addBox();
myNode39.point1.set(2.24005,-18.0999,-0.36795);
myNode39.point2.set(2.49995,-2.5120000000000022,-0.23205);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(0.0,0.0,0.0);
myNode39.innerRotation.angle.set(0.0);
myNode39.innerTranslation.vector.set(0,0,0);
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addCylinder();
myNode40.point1.set(3.851,-2.517,-0.59495);
myNode40.point2.set(3.851,-2.517,-0.23104999999999998);
myNode40.radius.set(0.259);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(0.0,0.0,0.0);
myNode40.innerRotation.angle.set(0.0);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41 = object.addCylinder();
myNode41.point1.set(2.24,-2.515,-0.59495);
myNode41.point2.set(2.24,-2.515,-0.23104999999999998);
myNode41.radius.set(0.258);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,0.0,0.0);
myNode41.innerRotation.angle.set(0.0);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addCylinder();
myNode42.point1.set(4.727,-1.982,-0.59495);
myNode42.point2.set(4.727,-1.982,18.09995);
myNode42.radius.set(0.136);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0,0.0,0.0);
myNode42.innerRotation.angle.set(0.0);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addBox();
myNode43.point1.set(-0.273,-2.512,-0.595);
myNode43.point2.set(4.728000000000001,-2.254,-0.14899999999999997);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(0.0,0.0,0.0);
myNode43.innerRotation.angle.set(0.0);
myNode43.innerTranslation.vector.set(0,0,0);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44 = object.addCutOperation();
myNode44.leftArg.set(myNode42);
myNode44.rightArg.set(myNode43);
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45_1 = myNode38.clone();
myNode45_1.isVisible = false;
const myNode45_2 = object.addFuseOperation();
myNode45_2.leftArg.set(myNode45_1);
myNode45_2.rightArg.set(myNode39);
myNode45_2.isVisible = false;
const myNode45_3 = object.addFuseOperation();
myNode45_3.leftArg.set(myNode45_2);
myNode45_3.rightArg.set(myNode40);
myNode45_3.isVisible = false;
const myNode45_4 = object.addFuseOperation();
myNode45_4.leftArg.set(myNode45_3);
myNode45_4.rightArg.set(myNode41);
myNode45_4.isVisible = false;
myNode45 = object.addFuseOperation();
myNode45.leftArg.set(myNode45_4);
myNode45.rightArg.set(myNode44);
myNode45.isVisible = false;
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addCutOperation();
myNode46.leftArg.set(myNode35);
myNode46.rightArg.set(myNode45);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addBox();
myNode47.point1.set(-3.5919,2.0271,-0.5949);
myNode47.point2.set(-2.2381,3.0469,-0.23109999999999997);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(0.0,0.0,0.0);
myNode47.innerRotation.angle.set(0.0);
myNode47.innerTranslation.vector.set(0,0,0);
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addCylinder();
myNode48.point1.set(0,2.526,-0.5949);
myNode48.point2.set(0,2.526,0.5959000000000001);
myNode48.radius.set(0.273);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);
myNode48.isVisible = false;

/* définition du node n°49*/
const myNode49 = object.addCylinder();
myNode49.point1.set(0,2.527,-0.59495);
myNode49.point2.set(0,2.527,18.09995);
myNode49.radius.set(0.135);
myNode49.innerRotation.center.set(0,0,0);
myNode49.innerRotation.axis.set(0.0,0.0,0.0);
myNode49.innerRotation.angle.set(0.0);
myNode49.isVisible = false;

/* définition du node n°50*/
const myNode50 = object.addCutOperation();
myNode50.leftArg.set(myNode48);
myNode50.rightArg.set(myNode49);
myNode50.isVisible = false;

/* définition du node n°51*/
const myNode51 = object.addCommonOperation();
myNode51.leftArg.set(myNode50);
myNode51.rightArg.set(myNode17);
myNode51.isVisible = false;

/* définition du node n°52*/
const myNode52 = object.addCylinder();
myNode52.point1.set(-3.044,3.047,-0.5949);
myNode52.point2.set(-3.044,3.047,-0.23109999999999997);
myNode52.radius.set(0.541);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,0.0,0.0);
myNode52.innerRotation.angle.set(0.0);
myNode52.isVisible = false;

/* définition du node n°53*/
const myNode53 = object.addCylinder();
myNode53.point1.set(-3.045,3.045,-0.2319);
myNode53.point2.set(-3.045,3.045,-0.0411);
myNode53.radius.set(0.254);
myNode53.innerRotation.center.set(0,0,0);
myNode53.innerRotation.axis.set(0.0,0.0,0.0);
myNode53.innerRotation.angle.set(0.0);
myNode53.isVisible = false;

/* définition du node n°54*/
const myNode54_1 = myNode47.clone();
myNode54_1.isVisible = false;
const myNode54_2 = object.addFuseOperation();
myNode54_2.leftArg.set(myNode54_1);
myNode54_2.rightArg.set(myNode51);
myNode54_2.isVisible = false;
const myNode54_3 = object.addFuseOperation();
myNode54_3.leftArg.set(myNode54_2);
myNode54_3.rightArg.set(myNode52);
myNode54_3.isVisible = false;
myNode54 = object.addFuseOperation();
myNode54.leftArg.set(myNode54_3);
myNode54.rightArg.set(myNode53);
myNode54.isVisible = false;
myNode54.isVisible = false;

/* définition du node n°55*/
const myNode55 = object.addBox();
myNode55.point1.set(-0.2729,2.5101,-0.5949);
myNode55.point2.set(18.0999,3.0469,18.0999);
myNode55.innerRotation.center.set(0,0,0);
myNode55.innerRotation.axis.set(0.0,0.0,0.0);
myNode55.innerRotation.angle.set(0.0);
myNode55.innerTranslation.vector.set(0,0,0);
myNode55.isVisible = false;

/* définition du node n°56*/
const myNode56 = object.addBox();
myNode56.point1.set(-4.4549,2.5101,-0.5949);
myNode56.point2.set(-2.5001,18.0999,-0.1491);
myNode56.innerRotation.center.set(0,0,0);
myNode56.innerRotation.axis.set(0.0,0.0,0.0);
myNode56.innerRotation.angle.set(0.0);
myNode56.innerTranslation.vector.set(0,0,0);
myNode56.isVisible = false;

/* définition du node n°57*/
const myNode57 = object.addCylinder();
myNode57.point1.set(-3.045,3.045,-0.2319);
myNode57.point2.set(-3.045,3.045,-0.0411);
myNode57.radius.set(0.136);
myNode57.innerRotation.center.set(0,0,0);
myNode57.innerRotation.axis.set(0.0,0.0,0.0);
myNode57.innerRotation.angle.set(0.0);
myNode57.isVisible = false;

/* définition du node n°58*/
const myNode58_1 = myNode55.clone();
myNode58_1.isVisible = false;
const myNode58_2 = object.addFuseOperation();
myNode58_2.leftArg.set(myNode58_1);
myNode58_2.rightArg.set(myNode56);
myNode58_2.isVisible = false;
myNode58 = object.addFuseOperation();
myNode58.leftArg.set(myNode58_2);
myNode58.rightArg.set(myNode57);
myNode58.isVisible = false;
myNode58.isVisible = false;

/* définition du node n°59*/
const myNode59 = object.addCommonOperation();
myNode59.leftArg.set(myNode54);
myNode59.rightArg.set(myNode58);
myNode59.isVisible = false;

/* définition du node n°60*/
const myNode60 = object.addBox();
myNode60.point1.set(4.0501,1.3001,-0.5949);
myNode60.point2.set(4.728899999999999,2.2549,0.5959000000000001);
myNode60.innerRotation.center.set(0,0,0);
myNode60.innerRotation.axis.set(0.0,0.0,0.0);
myNode60.innerRotation.angle.set(0.0);
myNode60.innerTranslation.vector.set(0,0,0);
myNode60.isVisible = false;

/* définition du node n°61*/
const myNode61 = object.addBox();
myNode61.point1.set(4.45505,-18.0999,-0.59495);
myNode61.point2.set(4.72895,2.0269999999999975,18.09995);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(0.0,0.0,0.0);
myNode61.innerRotation.angle.set(0.0);
myNode61.innerTranslation.vector.set(0,0,0);
myNode61.isVisible = false;

/* définition du node n°62*/
const myNode62 = object.addBox();
myNode62.point1.set(-18.0999,1.30005,-0.59495);
myNode62.point2.set(3.593,1.70895,-0.23104999999999998);
myNode62.innerRotation.center.set(0,0,0);
myNode62.innerRotation.axis.set(0.0,0.0,0.0);
myNode62.innerRotation.angle.set(0.0);
myNode62.innerTranslation.vector.set(0,0,0);
myNode62.isVisible = false;

/* définition du node n°63*/
const myNode63 = object.addCylinder();
myNode63.point1.set(4.727,1.984,-18.0999);
myNode63.point2.set(4.727,1.984,18.099999999999998);
myNode63.radius.set(0.137);
myNode63.innerRotation.center.set(0,0,0);
myNode63.innerRotation.axis.set(0.0,0.0,0.0);
myNode63.innerRotation.angle.set(0.0);
myNode63.isVisible = false;

/* définition du node n°64*/
const myNode64 = object.addBox();
myNode64.point1.set(3.59305,1.30005,0.31405);
myNode64.point2.set(4.45395,2.25495,18.099950000000003);
myNode64.innerRotation.center.set(0,0,0);
myNode64.innerRotation.axis.set(0.0,0.0,0.0);
myNode64.innerRotation.angle.set(0.0);
myNode64.innerTranslation.vector.set(0,0,0);
myNode64.isVisible = false;

/* définition du node n°65*/
const myNode65_1 = myNode61.clone();
myNode65_1.isVisible = false;
const myNode65_2 = object.addFuseOperation();
myNode65_2.leftArg.set(myNode65_1);
myNode65_2.rightArg.set(myNode62);
myNode65_2.isVisible = false;
const myNode65_3 = object.addFuseOperation();
myNode65_3.leftArg.set(myNode65_2);
myNode65_3.rightArg.set(myNode63);
myNode65_3.isVisible = false;
myNode65 = object.addFuseOperation();
myNode65.leftArg.set(myNode65_3);
myNode65.rightArg.set(myNode64);
myNode65.isVisible = false;
myNode65.isVisible = false;

/* définition du node n°66*/
const myNode66 = object.addCutOperation();
myNode66.leftArg.set(myNode60);
myNode66.rightArg.set(myNode65);
myNode66.isVisible = false;

/* définition du node n°67*/
const myNode67 = object.addBox();
myNode67.point1.set(-4.4549,-2.0269,-0.5949);
myNode67.point2.set(-0.27310000000000034,-1.3001,-0.3681);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(0.0,0.0,0.0);
myNode67.innerRotation.angle.set(0.0);
myNode67.innerTranslation.vector.set(0,0,0);
myNode67.isVisible = false;

/* définition du node n°68*/
const myNode68 = object.addBox();
myNode68.point1.set(-4.4549,-2.2539,-0.5949);
myNode68.point2.set(-0.27310000000000034,-2.0271,0.31390000000000007);
myNode68.innerRotation.center.set(0,0,0);
myNode68.innerRotation.axis.set(0.0,0.0,0.0);
myNode68.innerRotation.angle.set(0.0);
myNode68.innerTranslation.vector.set(0,0,0);
myNode68.isVisible = false;

/* définition du node n°69*/
const myNode69 = object.addFuseOperation();
myNode69.leftArg.set(myNode67);
myNode69.rightArg.set(myNode68);
myNode69.isVisible = false;

/* définition du node n°70*/
const myNode70 = object.addBox();
myNode70.point1.set(-3.68595,-2.25395,-0.09395);
myNode70.point2.set(-2.82205,-2.02705,0.31394999999999995);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(0.0,0.0,0.0);
myNode70.innerRotation.angle.set(0.0);
myNode70.innerTranslation.vector.set(0,0,0);
myNode70.isVisible = false;

/* définition du node n°71*/
const myNode71 = object.addCutOperation();
myNode71.leftArg.set(myNode69);
myNode71.rightArg.set(myNode70);
myNode71.isVisible = false;

/* définition du node n°72*/
const myNode72 = object.addBox();
myNode72.point1.set(2.5001,-3.0219,-0.5949);
myNode72.point2.set(4.4549,1.2998999999999996,0.31390000000000007);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(0.0,0.0,0.0);
myNode72.innerRotation.angle.set(0.0);
myNode72.innerTranslation.vector.set(0,0,0);
myNode72.isVisible = false;

/* définition du node n°73*/
const myNode73 = object.addCylinder();
myNode73.point1.set(-0.002,-2.524,-0.5949);
myNode73.point2.set(-0.002,-2.524,0.5959000000000001);
myNode73.radius.set(0.276);
myNode73.innerRotation.center.set(0,0,0);
myNode73.innerRotation.axis.set(0.0,0.0,0.0);
myNode73.innerRotation.angle.set(0.0);
myNode73.isVisible = false;

/* définition du node n°74*/
const myNode74 = object.addCylinder();
myNode74.point1.set(4.727,-1.981,-0.5949);
myNode74.point2.set(4.727,-1.981,0.5959000000000001);
myNode74.radius.set(0.272);
myNode74.innerRotation.center.set(0,0,0);
myNode74.innerRotation.axis.set(0.0,0.0,0.0);
myNode74.innerRotation.angle.set(0.0);
myNode74.isVisible = false;

/* définition du node n°75*/
const myNode75 = object.addBox();
myNode75.point1.set(-0.2729,-2.5119,-0.5949);
myNode75.point2.set(4.7279,-1.3000999999999998,0.5959000000000001);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(0.0,0.0,0.0);
myNode75.innerRotation.angle.set(0.0);
myNode75.innerTranslation.vector.set(0,0,0);
myNode75.isVisible = false;

/* définition du node n°76*/
const myNode76_1 = myNode72.clone();
myNode76_1.isVisible = false;
const myNode76_2 = object.addFuseOperation();
myNode76_2.leftArg.set(myNode76_1);
myNode76_2.rightArg.set(myNode73);
myNode76_2.isVisible = false;
const myNode76_3 = object.addFuseOperation();
myNode76_3.leftArg.set(myNode76_2);
myNode76_3.rightArg.set(myNode74);
myNode76_3.isVisible = false;
myNode76 = object.addFuseOperation();
myNode76.leftArg.set(myNode76_3);
myNode76.rightArg.set(myNode75);
myNode76.isVisible = false;
myNode76.isVisible = false;

/* définition du node n°77*/
const myNode77 = object.addBox();
myNode77.point1.set(-0.27295,-2.25395,0.31405);
myNode77.point2.set(4.45395,1.29995,0.59595);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(0.0,0.0,0.0);
myNode77.innerRotation.angle.set(0.0);
myNode77.innerTranslation.vector.set(0,0,0);
myNode77.isVisible = false;

/* définition du node n°78*/
const myNode78 = object.addCylinder();
myNode78.point1.set(0,-2.528,-0.59495);
myNode78.point2.set(0,-2.528,18.09995);
myNode78.radius.set(0.136);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(0.0,0.0,0.0);
myNode78.innerRotation.angle.set(0.0);
myNode78.isVisible = false;

/* définition du node n°79*/
const myNode79 = object.addBox();
myNode79.point1.set(2.50005,-1.29995,-18.0999);
myNode79.point2.set(3.59295,1.29995,0.31400000000000006);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(0.0,0.0,0.0);
myNode79.innerRotation.angle.set(0.0);
myNode79.innerTranslation.vector.set(0,0,0);
myNode79.isVisible = false;

/* définition du node n°80*/
const myNode80 = object.addBox();
myNode80.point1.set(4.45505,-1.70895,-18.0999);
myNode80.point2.set(18.100949999999997,-1.30005,18.099999999999998);
myNode80.innerRotation.center.set(0,0,0);
myNode80.innerRotation.axis.set(0.0,0.0,0.0);
myNode80.innerRotation.angle.set(0.0);
myNode80.innerTranslation.vector.set(0,0,0);
myNode80.isVisible = false;

/* définition du node n°81*/
const myNode81 = object.addBox();
myNode81.point1.set(-18.0999,-2.02695,-0.36795);
myNode81.point2.set(4.049999999999997,1.2999500000000004,18.09995);
myNode81.innerRotation.center.set(0,0,0);
myNode81.innerRotation.axis.set(0.0,0.0,0.0);
myNode81.innerRotation.angle.set(0.0);
myNode81.innerTranslation.vector.set(0,0,0);
myNode81.isVisible = false;

/* définition du node n°82*/
const myNode82 = object.addBox();
myNode82.point1.set(0.27305,-18.0999,-0.59495);
myNode82.point2.set(18.09995,-2.255000000000001,0.5959500000000001);
myNode82.innerRotation.center.set(0,0,0);
myNode82.innerRotation.axis.set(0.0,0.0,0.0);
myNode82.innerRotation.angle.set(0.0);
myNode82.innerTranslation.vector.set(0,0,0);
myNode82.isVisible = false;

/* définition du node n°83*/
const myNode83 = object.addBox();
myNode83.point1.set(2.5,-3.022,-0.595);
myNode83.point2.set(3.593,-1.7089999999999999,-0.23099999999999998);
myNode83.innerRotation.center.set(0,0,0);
myNode83.innerRotation.axis.set(0.0,0.0,0.0);
myNode83.innerRotation.angle.set(0.0);
myNode83.innerTranslation.vector.set(0,0,0);
myNode83.isVisible = false;

/* définition du node n°84*/
const myNode84 = object.addCutOperation();
myNode84.leftArg.set(myNode82);
myNode84.rightArg.set(myNode83);
myNode84.isVisible = false;

/* définition du node n°85*/
const myNode85_1 = myNode77.clone();
myNode85_1.isVisible = false;
const myNode85_2 = object.addFuseOperation();
myNode85_2.leftArg.set(myNode85_1);
myNode85_2.rightArg.set(myNode78);
myNode85_2.isVisible = false;
const myNode85_3 = object.addFuseOperation();
myNode85_3.leftArg.set(myNode85_2);
myNode85_3.rightArg.set(myNode79);
myNode85_3.isVisible = false;
const myNode85_4 = object.addFuseOperation();
myNode85_4.leftArg.set(myNode85_3);
myNode85_4.rightArg.set(myNode42);
myNode85_4.isVisible = false;
const myNode85_5 = object.addFuseOperation();
myNode85_5.leftArg.set(myNode85_4);
myNode85_5.rightArg.set(myNode80);
myNode85_5.isVisible = false;
const myNode85_6 = object.addFuseOperation();
myNode85_6.leftArg.set(myNode85_5);
myNode85_6.rightArg.set(myNode81);
myNode85_6.isVisible = false;
myNode85 = object.addFuseOperation();
myNode85.leftArg.set(myNode85_6);
myNode85.rightArg.set(myNode84);
myNode85.isVisible = false;
myNode85.isVisible = false;

/* définition du node n°86*/
const myNode86 = object.addCutOperation();
myNode86.leftArg.set(myNode76);
myNode86.rightArg.set(myNode85);
myNode86.isVisible = false;

/* définition du node n°87*/
const myNode87 = object.addBox();
myNode87.point1.set(-4.4549,-2.0269,-0.3679);
myNode87.point2.set(-4.0501000000000005,-1.3001,0.31389999999999996);
myNode87.innerRotation.center.set(0,0,0);
myNode87.innerRotation.axis.set(0.0,0.0,0.0);
myNode87.innerRotation.angle.set(0.0);
myNode87.innerTranslation.vector.set(0,0,0);
myNode87.isVisible = false;

/* définition du node n°88*/
const myNode88 = object.addBox();
myNode88.point1.set(-3.5919,-2.5119,-0.5949);
myNode88.point2.set(-2.2381,-1.7090999999999998,-0.3681);
myNode88.innerRotation.center.set(0,0,0);
myNode88.innerRotation.axis.set(0.0,0.0,0.0);
myNode88.innerRotation.angle.set(0.0);
myNode88.innerTranslation.vector.set(0,0,0);
myNode88.isVisible = false;

/* définition du node n°89*/
const myNode89 = object.addCylinder();
myNode89.point1.set(-2.236,-2.519,-18.0999);
myNode89.point2.set(-2.236,-2.519,-0.3680000000000021);
myNode89.radius.set(0.263);
myNode89.innerRotation.center.set(0,0,0);
myNode89.innerRotation.axis.set(0.0,0.0,0.0);
myNode89.innerRotation.angle.set(0.0);
myNode89.isVisible = false;

/* définition du node n°90*/
const myNode90 = object.addCutOperation();
myNode90.leftArg.set(myNode88);
myNode90.rightArg.set(myNode89);
myNode90.isVisible = false;

/* définition du node n°91*/
const myNode91 = object.addCylinder();
myNode91.point1.set(3.044,3.044,-0.5949);
myNode91.point2.set(3.044,3.044,-0.3681);
myNode91.radius.set(0.545);
myNode91.innerRotation.center.set(0,0,0);
myNode91.innerRotation.axis.set(0.0,0.0,0.0);
myNode91.innerRotation.angle.set(0.0);
myNode91.isVisible = false;

/* définition du node n°92*/
const myNode92 = object.addCylinder();
myNode92.point1.set(-3.046,-3.046,-0.5949);
myNode92.point2.set(-3.046,-3.046,-0.040100000000000025);
myNode92.radius.set(0.136);
myNode92.innerRotation.center.set(0,0,0);
myNode92.innerRotation.axis.set(0.0,0.0,0.0);
myNode92.innerRotation.angle.set(0.0);
myNode92.isVisible = false;

/* définition du node n°93*/
const myNode93 = object.addCylinder();
myNode93.point1.set(-3.045,-3.046,-0.5949);
myNode93.point2.set(-3.045,-3.046,-0.1491);
myNode93.radius.set(0.254);
myNode93.innerRotation.center.set(0,0,0);
myNode93.innerRotation.axis.set(0.0,0.0,0.0);
myNode93.innerRotation.angle.set(0.0);
myNode93.isVisible = false;

/* définition du node n°94*/
const myNode94 = object.addBox();
myNode94.point1.set(-3.5919,-3.0219,-0.5949);
myNode94.point2.set(-2.4991,-2.5121,-0.23109999999999997);
myNode94.innerRotation.center.set(0,0,0);
myNode94.innerRotation.axis.set(0.0,0.0,0.0);
myNode94.innerRotation.angle.set(0.0);
myNode94.innerTranslation.vector.set(0,0,0);
myNode94.isVisible = false;

/* définition du node n°95*/
const myNode95 = object.addBox();
myNode95.point1.set(-4.0499,-2.5119,-0.5949);
myNode95.point2.set(-2.4991000000000003,-2.2540999999999998,0.31390000000000007);
myNode95.innerRotation.center.set(0,0,0);
myNode95.innerRotation.axis.set(0.0,0.0,0.0);
myNode95.innerRotation.angle.set(0.0);
myNode95.innerTranslation.vector.set(0,0,0);
myNode95.isVisible = false;

/* définition du node n°96*/
const myNode96 = object.addFuseOperation();
myNode96.leftArg.set(myNode94);
myNode96.rightArg.set(myNode95);
myNode96.isVisible = false;

/* définition du node n°97*/
const myNode97 = object.addBox();
myNode97.point1.set(-4.7269,-18.0999,-0.5949);
myNode97.point2.set(-2.4991,-1.3001000000000005,-0.23109999999999997);
myNode97.innerRotation.center.set(0,0,0);
myNode97.innerRotation.axis.set(0.0,0.0,0.0);
myNode97.innerRotation.angle.set(0.0);
myNode97.innerTranslation.vector.set(0,0,0);
myNode97.isVisible = false;

/* définition du node n°98*/
const myNode98 = object.addCylinder();
myNode98.point1.set(-3.849,-2.512,-0.59495);
myNode98.point2.set(-3.849,-2.512,18.09995);
myNode98.radius.set(0.255);
myNode98.innerRotation.center.set(0,0,0);
myNode98.innerRotation.axis.set(0.0,0.0,0.0);
myNode98.innerRotation.angle.set(0.0);
myNode98.isVisible = false;

/* définition du node n°99*/
const myNode99 = object.addCutOperation();
myNode99.leftArg.set(myNode97);
myNode99.rightArg.set(myNode98);
myNode99.isVisible = false;

/* définition du node n°100*/
const myNode100 = object.addCommonOperation();
myNode100.leftArg.set(myNode96);
myNode100.rightArg.set(myNode99);
myNode100.isVisible = false;

/* définition du node n°101*/
const myNode101 = object.addBox();
myNode101.point1.set(-18.0999,-2.2539,-18.0999);
myNode101.point2.set(-4.454100000000002,-1.7090999999999998,18.0999);
myNode101.innerRotation.center.set(0,0,0);
myNode101.innerRotation.axis.set(0.0,0.0,0.0);
myNode101.innerRotation.angle.set(0.0);
myNode101.innerTranslation.vector.set(0,0,0);
myNode101.isVisible = false;

/* définition du node n°102*/
const myNode102 = object.addCylinder();
myNode102.point1.set(-4.727,-1.981,-18.0999);
myNode102.point2.set(-4.727,-1.981,18.099999999999998);
myNode102.radius.set(0.136);
myNode102.innerRotation.center.set(0,0,0);
myNode102.innerRotation.axis.set(0.0,0.0,0.0);
myNode102.innerRotation.angle.set(0.0);
myNode102.isVisible = false;

/* définition du node n°103*/
const myNode103 = object.addCutOperation();
myNode103.leftArg.set(myNode101);
myNode103.rightArg.set(myNode102);
myNode103.isVisible = false;

/* définition du node n°104*/
const myNode104_1 = myNode93.clone();
myNode104_1.isVisible = false;
const myNode104_2 = object.addFuseOperation();
myNode104_2.leftArg.set(myNode104_1);
myNode104_2.rightArg.set(myNode100);
myNode104_2.isVisible = false;
myNode104 = object.addFuseOperation();
myNode104.leftArg.set(myNode104_2);
myNode104.rightArg.set(myNode103);
myNode104.isVisible = false;
myNode104.isVisible = false;

/* définition du node n°105*/
const myNode105 = object.addBox();
myNode105.point1.set(-4.7269,-18.0999,-0.5949);
myNode105.point2.set(-2.2390999999999996,18.0999,0.5959000000000001);
myNode105.innerRotation.center.set(0,0,0);
myNode105.innerRotation.axis.set(0.0,0.0,0.0);
myNode105.innerRotation.angle.set(0.0);
myNode105.innerTranslation.vector.set(0,0,0);
myNode105.isVisible = false;

/* définition du node n°106*/
const myNode106 = object.addCommonOperation();
myNode106.leftArg.set(myNode104);
myNode106.rightArg.set(myNode105);
myNode106.isVisible = false;

/* définition du node n°107*/
const myNode107 = object.addBox();
myNode107.point1.set(-0.2729,2.2551,-0.5949);
myNode107.point2.set(0.2719,2.5099,0.5959000000000001);
myNode107.innerRotation.center.set(0,0,0);
myNode107.innerRotation.axis.set(0.0,0.0,0.0);
myNode107.innerRotation.angle.set(0.0);
myNode107.innerTranslation.vector.set(0,0,0);
myNode107.isVisible = false;

/* définition du node n°108*/
const myNode108 = object.addBox();
myNode108.point1.set(-4.4549,-1.7089,-18.0999);
myNode108.point2.set(-3.3231,2.0268999999999995,0.31389999999999674);
myNode108.innerRotation.center.set(0,0,0);
myNode108.innerRotation.axis.set(0.0,0.0,0.0);
myNode108.innerRotation.angle.set(0.0);
myNode108.innerTranslation.vector.set(0,0,0);
myNode108.isVisible = false;

/* définition du node n°109*/
const myNode109 = object.addBox();
myNode109.point1.set(-4.4549,1.3001,-18.0999);
myNode109.point2.set(18.099899999999998,2.2549,0.31389999999999674);
myNode109.innerRotation.center.set(0,0,0);
myNode109.innerRotation.axis.set(0.0,0.0,0.0);
myNode109.innerRotation.angle.set(0.0);
myNode109.innerTranslation.vector.set(0,0,0);
myNode109.isVisible = false;

/* définition du node n°110*/
const myNode110 = object.addCylinder();
myNode110.point1.set(-4.727,1.983,-0.5949);
myNode110.point2.set(-4.727,1.983,0.5959000000000001);
myNode110.radius.set(0.271);
myNode110.innerRotation.center.set(0,0,0);
myNode110.innerRotation.axis.set(0.0,0.0,0.0);
myNode110.innerRotation.angle.set(0.0);
myNode110.isVisible = false;

/* définition du node n°111*/
const myNode111 = object.addBox();
myNode111.point1.set(-4.7269,1.7091,-0.5949);
myNode111.point2.set(-4.4540999999999995,2.2539,18.0999);
myNode111.innerRotation.center.set(0,0,0);
myNode111.innerRotation.axis.set(0.0,0.0,0.0);
myNode111.innerRotation.angle.set(0.0);
myNode111.innerTranslation.vector.set(0,0,0);
myNode111.isVisible = false;

/* définition du node n°112*/
const myNode112 = object.addBox();
myNode112.point1.set(-3.9819,1.3001,-0.5949);
myNode112.point2.set(-2.2391,2.5099,-0.23109999999999997);
myNode112.innerRotation.center.set(0,0,0);
myNode112.innerRotation.axis.set(0.0,0.0,0.0);
myNode112.innerRotation.angle.set(0.0);
myNode112.innerTranslation.vector.set(0,0,0);
myNode112.isVisible = false;

/* définition du node n°113*/
const myNode113 = object.addCylinder();
myNode113.point1.set(-2.239,2.517,-18.0999);
myNode113.point2.set(-2.239,2.517,18.099999999999998);
myNode113.radius.set(0.26);
myNode113.innerRotation.center.set(0,0,0);
myNode113.innerRotation.axis.set(0.0,0.0,0.0);
myNode113.innerRotation.angle.set(0.0);
myNode113.isVisible = false;

/* définition du node n°114*/
const myNode114 = object.addCutOperation();
myNode114.leftArg.set(myNode112);
myNode114.rightArg.set(myNode113);
myNode114.isVisible = false;

/* définition du node n°115*/
const myNode115_1 = myNode107.clone();
myNode115_1.isVisible = false;
const myNode115_2 = object.addFuseOperation();
myNode115_2.leftArg.set(myNode115_1);
myNode115_2.rightArg.set(myNode108);
myNode115_2.isVisible = false;
const myNode115_3 = object.addFuseOperation();
myNode115_3.leftArg.set(myNode115_2);
myNode115_3.rightArg.set(myNode109);
myNode115_3.isVisible = false;
const myNode115_4 = object.addFuseOperation();
myNode115_4.leftArg.set(myNode115_3);
myNode115_4.rightArg.set(myNode110);
myNode115_4.isVisible = false;
const myNode115_5 = object.addFuseOperation();
myNode115_5.leftArg.set(myNode115_4);
myNode115_5.rightArg.set(myNode111);
myNode115_5.isVisible = false;
myNode115 = object.addFuseOperation();
myNode115.leftArg.set(myNode115_5);
myNode115.rightArg.set(myNode114);
myNode115.isVisible = false;
myNode115.isVisible = false;

/* définition du node n°116*/
const myNode116 = object.addBox();
myNode116.point1.set(-18.0999,-1.7089,-0.5949);
myNode116.point2.set(2.2398999999999987,2.5099,0.5959000000000001);
myNode116.innerRotation.center.set(0,0,0);
myNode116.innerRotation.axis.set(0.0,0.0,0.0);
myNode116.innerRotation.angle.set(0.0);
myNode116.innerTranslation.vector.set(0,0,0);
myNode116.isVisible = false;

/* définition du node n°117*/
const myNode117 = object.addCylinder();
myNode117.point1.set(-3.847,2.51,-18.0999);
myNode117.point2.set(-3.847,2.51,18.099999999999998);
myNode117.radius.set(0.252);
myNode117.innerRotation.center.set(0,0,0);
myNode117.innerRotation.axis.set(0.0,0.0,0.0);
myNode117.innerRotation.angle.set(0.0);
myNode117.isVisible = false;

/* définition du node n°118*/
const myNode118 = object.addCutOperation();
myNode118.leftArg.set(myNode116);
myNode118.rightArg.set(myNode117);
myNode118.isVisible = false;

/* définition du node n°119*/
const myNode119 = object.addCylinder();
myNode119.point1.set(-4.728,1.982,-18.0999);
myNode119.point2.set(-4.728,1.982,18.099999999999998);
myNode119.radius.set(0.136);
myNode119.innerRotation.center.set(0,0,0);
myNode119.innerRotation.axis.set(0.0,0.0,0.0);
myNode119.innerRotation.angle.set(0.0);
myNode119.isVisible = false;

/* définition du node n°120*/
const myNode120 = object.addCylinder();
myNode120.point1.set(0,2.527,-18.0999);
myNode120.point2.set(0,2.527,0.5949999999999989);
myNode120.radius.set(0.135);
myNode120.innerRotation.center.set(0,0,0);
myNode120.innerRotation.axis.set(0.0,0.0,0.0);
myNode120.innerRotation.angle.set(0.0);
myNode120.isVisible = false;

/* définition du node n°121*/
const myNode121 = object.addFuseOperation();
myNode121.leftArg.set(myNode119);
myNode121.rightArg.set(myNode120);
myNode121.isVisible = false;

/* définition du node n°122*/
const myNode122 = object.addCutOperation();
myNode122.leftArg.set(myNode118);
myNode122.rightArg.set(myNode121);
myNode122.isVisible = false;

/* définition du node n°123*/
const myNode123 = object.addBox();
myNode123.point1.set(-4.04995,-1.70895,-0.36795);
myNode123.point2.set(2.2399500000000003,2.0269500000000003,18.09995);
myNode123.innerRotation.center.set(0,0,0);
myNode123.innerRotation.axis.set(0.0,0.0,0.0);
myNode123.innerRotation.angle.set(0.0);
myNode123.innerTranslation.vector.set(0,0,0);
myNode123.isVisible = false;

/* définition du node n°124*/
const myNode124 = object.addBox();
myNode124.point1.set(-3.98195,2.02705,-0.09395);
myNode124.point2.set(-3.1180499999999998,2.50895,0.31394999999999995);
myNode124.innerRotation.center.set(0,0,0);
myNode124.innerRotation.axis.set(0.0,0.0,0.0);
myNode124.innerRotation.angle.set(0.0);
myNode124.innerTranslation.vector.set(0,0,0);
myNode124.isVisible = false;

/* définition du node n°125*/
const myNode125 = object.addBox();
myNode125.point1.set(-3.59195,2.25505,-0.23195);
myNode125.point2.set(-0.2720500000000001,2.5099500000000003,-0.09505);
myNode125.innerRotation.center.set(0,0,0);
myNode125.innerRotation.axis.set(0.0,0.0,0.0);
myNode125.innerRotation.angle.set(0.0);
myNode125.innerTranslation.vector.set(0,0,0);
myNode125.isVisible = false;

/* définition du node n°126*/
const myNode126_1 = myNode123.clone();
myNode126_1.isVisible = false;
const myNode126_2 = object.addFuseOperation();
myNode126_2.leftArg.set(myNode126_1);
myNode126_2.rightArg.set(myNode124);
myNode126_2.isVisible = false;
myNode126 = object.addFuseOperation();
myNode126.leftArg.set(myNode126_2);
myNode126.rightArg.set(myNode125);
myNode126.isVisible = false;
myNode126.isVisible = false;

/* définition du node n°127*/
const myNode127 = object.addCutOperation();
myNode127.leftArg.set(myNode122);
myNode127.rightArg.set(myNode126);
myNode127.isVisible = false;

/* définition du node n°128*/
const myNode128 = object.addCommonOperation();
myNode128.leftArg.set(myNode115);
myNode128.rightArg.set(myNode127);
myNode128.isVisible = false;

/* définition du node n°129*/
const myNode129 = object.addCylinder();
myNode129.point1.set(-3.045,-3.047,-0.5949);
myNode129.point2.set(-3.045,-3.047,-0.23109999999999997);
myNode129.radius.set(0.541);
myNode129.innerRotation.center.set(0,0,0);
myNode129.innerRotation.axis.set(0.0,0.0,0.0);
myNode129.innerRotation.angle.set(0.0);
myNode129.isVisible = false;

/* définition du node n°130*/
const myNode130 = object.addCylinder();
myNode130.point1.set(3.045,3.046,-0.1489);
myNode130.point2.set(3.045,3.046,-0.0411);
myNode130.radius.set(0.136);
myNode130.innerRotation.center.set(0,0,0);
myNode130.innerRotation.axis.set(0.0,0.0,0.0);
myNode130.innerRotation.angle.set(0.0);
myNode130.isVisible = false;

/* définition du node n°131*/
const myNode131 = object.addBox();
myNode131.point1.set(2.5001,2.0271,-0.5949);
myNode131.point2.set(3.5929,3.0469,-0.23109999999999997);
myNode131.innerRotation.center.set(0,0,0);
myNode131.innerRotation.axis.set(0.0,0.0,0.0);
myNode131.innerRotation.angle.set(0.0);
myNode131.innerTranslation.vector.set(0,0,0);
myNode131.isVisible = false;

/* définition du node n°132*/
const myNode132 = object.addCylinder();
myNode132.point1.set(-4.728,-1.983,-0.5949);
myNode132.point2.set(-4.728,-1.983,0.5959000000000001);
myNode132.radius.set(0.27);
myNode132.innerRotation.center.set(0,0,0);
myNode132.innerRotation.axis.set(0.0,0.0,0.0);
myNode132.innerRotation.angle.set(0.0);
myNode132.isVisible = false;

/* définition du node n°133*/
const myNode133 = object.addCutOperation();
myNode133.leftArg.set(myNode132);
myNode133.rightArg.set(myNode102);
myNode133.isVisible = false;

/* définition du node n°134*/
const myNode134_1 = myNode15.clone();
myNode134_1.isVisible = false;
const myNode134_2 = object.addFuseOperation();
myNode134_2.leftArg.set(myNode134_1);
myNode134_2.rightArg.set(myNode16);
myNode134_2.isVisible = false;
const myNode134_3 = object.addFuseOperation();
myNode134_3.leftArg.set(myNode134_2);
myNode134_3.rightArg.set(myNode23);
myNode134_3.isVisible = false;
const myNode134_4 = object.addFuseOperation();
myNode134_4.leftArg.set(myNode134_3);
myNode134_4.rightArg.set(myNode46);
myNode134_4.isVisible = false;
const myNode134_5 = object.addFuseOperation();
myNode134_5.leftArg.set(myNode134_4);
myNode134_5.rightArg.set(myNode59);
myNode134_5.isVisible = false;
const myNode134_6 = object.addFuseOperation();
myNode134_6.leftArg.set(myNode134_5);
myNode134_6.rightArg.set(myNode66);
myNode134_6.isVisible = false;
const myNode134_7 = object.addFuseOperation();
myNode134_7.leftArg.set(myNode134_6);
myNode134_7.rightArg.set(myNode71);
myNode134_7.isVisible = false;
const myNode134_8 = object.addFuseOperation();
myNode134_8.leftArg.set(myNode134_7);
myNode134_8.rightArg.set(myNode86);
myNode134_8.isVisible = false;
const myNode134_9 = object.addFuseOperation();
myNode134_9.leftArg.set(myNode134_8);
myNode134_9.rightArg.set(myNode87);
myNode134_9.isVisible = false;
const myNode134_10 = object.addFuseOperation();
myNode134_10.leftArg.set(myNode134_9);
myNode134_10.rightArg.set(myNode90);
myNode134_10.isVisible = false;
const myNode134_11 = object.addFuseOperation();
myNode134_11.leftArg.set(myNode134_10);
myNode134_11.rightArg.set(myNode91);
myNode134_11.isVisible = false;
const myNode134_12 = object.addFuseOperation();
myNode134_12.leftArg.set(myNode134_11);
myNode134_12.rightArg.set(myNode92);
myNode134_12.isVisible = false;
const myNode134_13 = object.addFuseOperation();
myNode134_13.leftArg.set(myNode134_12);
myNode134_13.rightArg.set(myNode106);
myNode134_13.isVisible = false;
const myNode134_14 = object.addFuseOperation();
myNode134_14.leftArg.set(myNode134_13);
myNode134_14.rightArg.set(myNode128);
myNode134_14.isVisible = false;
const myNode134_15 = object.addFuseOperation();
myNode134_15.leftArg.set(myNode134_14);
myNode134_15.rightArg.set(myNode129);
myNode134_15.isVisible = false;
const myNode134_16 = object.addFuseOperation();
myNode134_16.leftArg.set(myNode134_15);
myNode134_16.rightArg.set(myNode130);
myNode134_16.isVisible = false;
const myNode134_17 = object.addFuseOperation();
myNode134_17.leftArg.set(myNode134_16);
myNode134_17.rightArg.set(myNode131);
myNode134_17.isVisible = false;
myNode134 = object.addFuseOperation();
myNode134.leftArg.set(myNode134_17);
myNode134.rightArg.set(myNode133);
myNode134.isVisible = false;
myNode134.isVisible = false;

/* définition du node n°135*/
const myNode135 = object.addCommonOperation();
myNode135.leftArg.set(myNode0);
myNode135.rightArg.set(myNode134);
myNode135.isVisible = true;


/*END Geometry Object Definition*/