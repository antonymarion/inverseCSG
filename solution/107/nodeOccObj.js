/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.99985,-3.34185,-2.22785);
myNode0.point2.set(5.99985,3.34185,2.22785);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(0.0,0.0,0.0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(2.954,-2.124,-18.0998);
myNode1.point2.set(2.954,-2.124,1.856900000000003);
myNode1.radius.set(7.954);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-2.5179,-1.4589,-1.8569);
myNode2.point2.set(4.3369,2.7849000000000004,1.8569);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.innerTranslation.vector.set(0.9095,0.663,0.0);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addCutOperation();
myNode3.leftArg.set(myNode1);
myNode3.rightArg.set(myNode2);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addBox();
myNode4.point1.set(-2.51785,-1.73985,-1.85685);
myNode4.point2.set(2.52585,-0.6591499999999999,0.23785000000000012);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.innerTranslation.vector.set(0.0040000000000000036,-1.1995,-0.8094999999999999);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(-1.465,2.263,-1.85685);
myNode5.point2.set(-1.465,2.263,0.23785000000000012);
myNode5.radius.set(0.519);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6_1 = myNode3.clone();
myNode6_1.isVisible = false;
const myNode6_2 = object.addFuseOperation();
myNode6_2.leftArg.set(myNode6_1);
myNode6_2.rightArg.set(myNode4);
myNode6_2.isVisible = false;
myNode6 = object.addFuseOperation();
myNode6.leftArg.set(myNode6_2);
myNode6.rightArg.set(myNode5);
myNode6.isVisible = false;
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addBox();
myNode7.point1.set(4.3371,-1.7399,-18.0999);
myNode7.point2.set(18.0999,2.7849,1.8568999999999996);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);
myNode7.innerTranslation.vector.set(11.2185,0.5225,-8.121500000000001);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addCylinder();
myNode8.point1.set(4.454,-1.74,-1.85695);
myNode8.point2.set(4.454,-1.74,1.85695);
myNode8.radius.set(0.548);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addCutOperation();
myNode9.leftArg.set(myNode7);
myNode9.rightArg.set(myNode8);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(-4.3369,-2.5199,-0.1459);
myNode10.point2.set(4.3369,-1.4590999999999998,18.099899999999998);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.innerTranslation.vector.set(0.0,-1.9894999999999998,8.977);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addBox();
myNode11.point1.set(-0.33195,-2.51995,-1.45895);
myNode11.point2.set(0.33095,-0.6590500000000001,18.09995);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);
myNode11.innerTranslation.vector.set(-0.0005000000000000004,-1.5895000000000001,8.320500000000001);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCutOperation();
myNode12.leftArg.set(myNode10);
myNode12.rightArg.set(myNode11);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addFuseOperation();
myNode13.leftArg.set(myNode9);
myNode13.rightArg.set(myNode12);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addCutOperation();
myNode14.leftArg.set(myNode6);
myNode14.rightArg.set(myNode13);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addCylinder();
myNode15.point1.set(4.432,-2.225,-1.85685);
myNode15.point2.set(4.432,-2.225,1.85685);
myNode15.radius.set(0.575);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addBox();
myNode16.point1.set(-2.51785,-2.51985,-1.85685);
myNode16.point2.set(1.9898499999999997,2.7848500000000005,0.23785000000000012);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);
myNode16.innerTranslation.vector.set(-0.26400000000000023,0.13250000000000028,-0.8094999999999999);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(-18.0998,-2.51985,-1.85685);
myNode17.point2.set(4.3369,-1.45915,1.85685);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.innerTranslation.vector.set(-6.881449999999999,-1.9895,0.0);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addFuseOperation();
myNode18.leftArg.set(myNode16);
myNode18.rightArg.set(myNode17);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addCylinder();
myNode19.point1.set(-2.517,-0.662,-1.8569);
myNode19.point2.set(-2.517,-0.662,0.23790000000000022);
myNode19.radius.set(0.529);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(0.0,0.0,0.0);
myNode19.innerRotation.angle.set(0.0);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addBox();
myNode20.point1.set(-18.0999,-2.5199,-18.0999);
myNode20.point2.set(-4.337100000000001,-2.1241,1.8568999999999996);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);
myNode20.innerTranslation.vector.set(-11.218500000000002,-2.3219999999999996,-8.121500000000001);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addFuseOperation();
myNode21.leftArg.set(myNode19);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addCutOperation();
myNode22.leftArg.set(myNode18);
myNode22.rightArg.set(myNode21);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addCylinder();
myNode23.point1.set(-4.469,-2.25,-1.85685);
myNode23.point2.set(-4.469,-2.25,1.85685);
myNode23.radius.set(0.533);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addBox();
myNode24.point1.set(1.99015,-1.73985,-1.85685);
myNode24.point2.set(4.99985,-0.6591499999999999,1.85685);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);
myNode24.innerTranslation.vector.set(3.495,-1.1995,0.0);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addCylinder();
myNode25.point1.set(2.527,-0.659,-1.8569);
myNode25.point2.set(2.527,-0.659,18.0999);
myNode25.radius.set(0.536);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(0.0,0.0,0.0);
myNode25.innerRotation.angle.set(0.0);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addCutOperation();
myNode26.leftArg.set(myNode24);
myNode26.rightArg.set(myNode25);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27_1 = myNode15.clone();
myNode27_1.isVisible = false;
const myNode27_2 = object.addFuseOperation();
myNode27_2.leftArg.set(myNode27_1);
myNode27_2.rightArg.set(myNode22);
myNode27_2.isVisible = false;
const myNode27_3 = object.addFuseOperation();
myNode27_3.leftArg.set(myNode27_2);
myNode27_3.rightArg.set(myNode23);
myNode27_3.isVisible = false;
myNode27 = object.addFuseOperation();
myNode27.leftArg.set(myNode27_3);
myNode27.rightArg.set(myNode26);
myNode27.isVisible = false;
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addCommonOperation();
myNode28.leftArg.set(myNode14);
myNode28.rightArg.set(myNode27);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addBox();
myNode29.point1.set(-4.33685,-2.12385,-0.14585);
myNode29.point2.set(4.99985,-1.4591500000000002,1.85685);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);
myNode29.innerTranslation.vector.set(0.33150000000000013,-1.7915,0.8554999999999999);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addBox();
myNode30.point1.set(-4.33685,-2.78485,-1.85685);
myNode30.point2.set(4.33685,-1.19415,1.85685);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);
myNode30.innerTranslation.vector.set(0.0,-1.9895,0.0);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addCylinder();
myNode31.point1.set(-1.871,-2.335,-18.0999);
myNode31.point2.set(-1.871,-2.335,18.0999);
myNode31.radius.set(1.223);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode31.innerRotation.angle.set(119.9998447624254);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addCutOperation();
myNode32.leftArg.set(myNode30);
myNode32.rightArg.set(myNode31);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addCylinder();
myNode33.point1.set(-4.453,-1.733,-1.85685);
myNode33.point2.set(-4.453,-1.733,1.85685);
myNode33.radius.set(0.547);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addBox();
myNode34.point1.set(-0.33185,-2.12385,-1.85685);
myNode34.point2.set(4.9998499999999995,-1.74015,0.23785000000000012);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(0.0,0.0,0.0);
myNode34.innerRotation.angle.set(0.0);
myNode34.innerTranslation.vector.set(2.3339999999999996,-1.932,-0.8094999999999999);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addBox();
myNode35.point1.set(-1.98885,-1.73985,-1.85685);
myNode35.point2.set(-1.46215,2.23285,0.23785000000000012);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,0.0);
myNode35.innerRotation.angle.set(0.0);
myNode35.innerTranslation.vector.set(-1.7255,0.24650000000000016,-0.8094999999999999);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addBox();
myNode36.point1.set(-1.46185,-2.12385,-1.85685);
myNode36.point2.set(1.99085,2.7848499999999996,0.23785000000000012);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(0.0,0.0,0.0);
myNode36.innerRotation.angle.set(0.0);
myNode36.innerTranslation.vector.set(0.26449999999999996,0.3304999999999998,-0.8094999999999999);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addCylinder();
myNode37.point1.set(0.004,0.8,-1.4589);
myNode37.point2.set(0.004,0.8,18.0999);
myNode37.radius.set(1.279);
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
const myNode39_1 = myNode29.clone();
myNode39_1.isVisible = false;
const myNode39_2 = object.addFuseOperation();
myNode39_2.leftArg.set(myNode39_1);
myNode39_2.rightArg.set(myNode32);
myNode39_2.isVisible = false;
const myNode39_3 = object.addFuseOperation();
myNode39_3.leftArg.set(myNode39_2);
myNode39_3.rightArg.set(myNode33);
myNode39_3.isVisible = false;
const myNode39_4 = object.addFuseOperation();
myNode39_4.leftArg.set(myNode39_3);
myNode39_4.rightArg.set(myNode34);
myNode39_4.isVisible = false;
const myNode39_5 = object.addFuseOperation();
myNode39_5.leftArg.set(myNode39_4);
myNode39_5.rightArg.set(myNode35);
myNode39_5.isVisible = false;
myNode39 = object.addFuseOperation();
myNode39.leftArg.set(myNode39_5);
myNode39.rightArg.set(myNode38);
myNode39.isVisible = false;
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addBox();
myNode40.point1.set(-18.0999,-2.5199,-1.8569);
myNode40.point2.set(4.3369,2.2329,1.8569);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(0.0,0.0,0.0);
myNode40.innerRotation.angle.set(0.0);
myNode40.innerTranslation.vector.set(-6.881500000000001,-0.14349999999999996,0.0);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41 = object.addBox();
myNode41.point1.set(-18.0999,-1.45895,-1.85695);
myNode41.point2.set(4.337,2.2329499999999998,1.85695);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,0.0,0.0);
myNode41.innerRotation.angle.set(0.0);
myNode41.innerTranslation.vector.set(-6.881450000000001,0.387,0.0);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addCylinder();
myNode42.point1.set(-0.002,0.797,-1.857);
myNode42.point2.set(-0.002,0.797,18.1);
myNode42.radius.set(0.871);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0,0.0,0.0);
myNode42.innerRotation.angle.set(0.0);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addCutOperation();
myNode43.leftArg.set(myNode41);
myNode43.rightArg.set(myNode42);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44 = object.addCutOperation();
myNode44.leftArg.set(myNode40);
myNode44.rightArg.set(myNode43);
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45 = object.addBox();
myNode45.point1.set(1.4431,2.2331,-18.0999);
myNode45.point2.set(18.0999,18.099899999999998,18.0999);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(0.0,0.0,0.0);
myNode45.innerRotation.angle.set(0.0);
myNode45.innerTranslation.vector.set(9.7715,10.1665,0.0);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addCylinder();
myNode46.point1.set(-1.848,2.33,-2.7849);
myNode46.point2.set(-1.848,2.33,2.7849);
myNode46.radius.set(1.204);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode46.innerRotation.angle.set(119.9998447624254);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addFuseOperation();
myNode47.leftArg.set(myNode45);
myNode47.rightArg.set(myNode46);
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addCylinder();
myNode48.point1.set(1.441,2.233,-18.0999);
myNode48.point2.set(1.441,2.233,0.23899999999999721);
myNode48.radius.set(0.556);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);
myNode48.isVisible = false;

/* définition du node n°49*/
const myNode49 = object.addCutOperation();
myNode49.leftArg.set(myNode47);
myNode49.rightArg.set(myNode48);
myNode49.isVisible = false;

/* définition du node n°50*/
const myNode50 = object.addFuseOperation();
myNode50.leftArg.set(myNode44);
myNode50.rightArg.set(myNode49);
myNode50.isVisible = false;

/* définition du node n°51*/
const myNode51 = object.addCutOperation();
myNode51.leftArg.set(myNode39);
myNode51.rightArg.set(myNode50);
myNode51.isVisible = false;

/* définition du node n°52*/
const myNode52 = object.addFuseOperation();
myNode52.leftArg.set(myNode28);
myNode52.rightArg.set(myNode51);
myNode52.isVisible = false;

/* définition du node n°53*/
const myNode53 = object.addCommonOperation();
myNode53.leftArg.set(myNode0);
myNode53.rightArg.set(myNode52);
myNode53.isVisible = true;


/*END Geometry Object Definition*/