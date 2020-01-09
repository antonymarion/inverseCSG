/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.99985,-3.34185,-2.22785);
myNode0.point2.set(5.99985,3.34185,2.22785);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(0,0,0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-4.33685,-2.12385,-0.14585);
myNode1.point2.set(4.99985,-1.4591500000000002,1.85685);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.innerTranslation.vector.set(0,0,0);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-1.46185,-2.12385,-1.85685);
myNode2.point2.set(1.99085,2.7848499999999996,0.23785000000000012);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.innerTranslation.vector.set(0,0,0);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(0.004,0.8,-1.4589);
myNode3.point2.set(0.004,0.8,18.0999);
myNode3.radius.set(1.279);
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
const myNode5 = object.addBox();
myNode5.point1.set(-4.33685,-2.78485,-1.85685);
myNode5.point2.set(4.33685,-1.19415,1.85685);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.innerTranslation.vector.set(0,0,0);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addCylinder();
myNode6.point1.set(-1.871,-2.335,-18.0999);
myNode6.point2.set(-1.871,-2.335,18.0999);
myNode6.radius.set(1.223);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode6.innerRotation.angle.set(119.9998447624254);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addCutOperation();
myNode7.leftArg.set(myNode5);
myNode7.rightArg.set(myNode6);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addBox();
myNode8.point1.set(-0.33185,-2.12385,-1.85685);
myNode8.point2.set(4.9998499999999995,-1.74015,0.23785000000000012);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.innerTranslation.vector.set(0,0,0);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addCylinder();
myNode9.point1.set(-4.453,-1.733,-1.85685);
myNode9.point2.set(-4.453,-1.733,1.85685);
myNode9.radius.set(0.547);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(-1.98885,-1.73985,-1.85685);
myNode10.point2.set(-1.46215,2.23285,0.23785000000000012);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.innerTranslation.vector.set(0,0,0);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11_1 = myNode1.clone();
myNode11_1.isVisible = false;
const myNode11_2 = object.addFuseOperation();
myNode11_2.leftArg.set(myNode11_1);
myNode11_2.rightArg.set(myNode4);
myNode11_2.isVisible = false;
const myNode11_3 = object.addFuseOperation();
myNode11_3.leftArg.set(myNode11_2);
myNode11_3.rightArg.set(myNode7);
myNode11_3.isVisible = false;
const myNode11_4 = object.addFuseOperation();
myNode11_4.leftArg.set(myNode11_3);
myNode11_4.rightArg.set(myNode8);
myNode11_4.isVisible = false;
const myNode11_5 = object.addFuseOperation();
myNode11_5.leftArg.set(myNode11_4);
myNode11_5.rightArg.set(myNode9);
myNode11_5.isVisible = false;
myNode11 = object.addFuseOperation();
myNode11.leftArg.set(myNode11_5);
myNode11.rightArg.set(myNode10);
myNode11.isVisible = false;
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(-1.848,2.33,-2.7849);
myNode12.point2.set(-1.848,2.33,2.7849);
myNode12.radius.set(1.204);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode12.innerRotation.angle.set(119.9998447624254);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addBox();
myNode13.point1.set(1.4431,2.2331,-18.0999);
myNode13.point2.set(18.0999,18.099899999999998,18.0999);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);
myNode13.innerTranslation.vector.set(0,0,0);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addFuseOperation();
myNode14.leftArg.set(myNode12);
myNode14.rightArg.set(myNode13);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addCylinder();
myNode15.point1.set(1.441,2.233,-18.0999);
myNode15.point2.set(1.441,2.233,0.23899999999999721);
myNode15.radius.set(0.556);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addCutOperation();
myNode16.leftArg.set(myNode14);
myNode16.rightArg.set(myNode15);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(-18.0999,-2.5199,-1.8569);
myNode17.point2.set(4.3369,2.2329,1.8569);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.innerTranslation.vector.set(0,0,0);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addBox();
myNode18.point1.set(-18.0999,-1.45895,-1.85695);
myNode18.point2.set(4.337,2.2329499999999998,1.85695);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);
myNode18.innerTranslation.vector.set(0,0,0);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addCylinder();
myNode19.point1.set(-0.002,0.797,-1.857);
myNode19.point2.set(-0.002,0.797,18.1);
myNode19.radius.set(0.871);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(0.0,0.0,0.0);
myNode19.innerRotation.angle.set(0.0);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addCutOperation();
myNode20.leftArg.set(myNode18);
myNode20.rightArg.set(myNode19);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addCutOperation();
myNode21.leftArg.set(myNode17);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addFuseOperation();
myNode22.leftArg.set(myNode16);
myNode22.rightArg.set(myNode21);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addCutOperation();
myNode23.leftArg.set(myNode11);
myNode23.rightArg.set(myNode22);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addCylinder();
myNode24.point1.set(-4.469,-2.25,-1.85685);
myNode24.point2.set(-4.469,-2.25,1.85685);
myNode24.radius.set(0.533);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addBox();
myNode25.point1.set(-18.0998,-2.51985,-1.85685);
myNode25.point2.set(4.3369,-1.45915,1.85685);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(0.0,0.0,0.0);
myNode25.innerRotation.angle.set(0.0);
myNode25.innerTranslation.vector.set(0,0,0);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addBox();
myNode26.point1.set(-2.51785,-2.51985,-1.85685);
myNode26.point2.set(1.9898499999999997,2.7848500000000005,0.23785000000000012);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);
myNode26.innerTranslation.vector.set(0,0,0);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addFuseOperation();
myNode27.leftArg.set(myNode25);
myNode27.rightArg.set(myNode26);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addCylinder();
myNode28.point1.set(-2.517,-0.662,-1.8569);
myNode28.point2.set(-2.517,-0.662,0.23790000000000022);
myNode28.radius.set(0.529);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(0.0,0.0,0.0);
myNode28.innerRotation.angle.set(0.0);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addBox();
myNode29.point1.set(-18.0999,-2.5199,-18.0999);
myNode29.point2.set(-4.337100000000001,-2.1241,1.8568999999999996);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);
myNode29.innerTranslation.vector.set(0,0,0);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addFuseOperation();
myNode30.leftArg.set(myNode28);
myNode30.rightArg.set(myNode29);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addCutOperation();
myNode31.leftArg.set(myNode27);
myNode31.rightArg.set(myNode30);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addBox();
myNode32.point1.set(1.99015,-1.73985,-1.85685);
myNode32.point2.set(4.99985,-0.6591499999999999,1.85685);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);
myNode32.innerTranslation.vector.set(0,0,0);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addCylinder();
myNode33.point1.set(2.527,-0.659,-1.8569);
myNode33.point2.set(2.527,-0.659,18.0999);
myNode33.radius.set(0.536);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addCutOperation();
myNode34.leftArg.set(myNode32);
myNode34.rightArg.set(myNode33);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addCylinder();
myNode35.point1.set(4.432,-2.225,-1.85685);
myNode35.point2.set(4.432,-2.225,1.85685);
myNode35.radius.set(0.575);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,0.0);
myNode35.innerRotation.angle.set(0.0);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36_1 = myNode24.clone();
myNode36_1.isVisible = false;
const myNode36_2 = object.addFuseOperation();
myNode36_2.leftArg.set(myNode36_1);
myNode36_2.rightArg.set(myNode31);
myNode36_2.isVisible = false;
const myNode36_3 = object.addFuseOperation();
myNode36_3.leftArg.set(myNode36_2);
myNode36_3.rightArg.set(myNode34);
myNode36_3.isVisible = false;
myNode36 = object.addFuseOperation();
myNode36.leftArg.set(myNode36_3);
myNode36.rightArg.set(myNode35);
myNode36.isVisible = false;
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addCylinder();
myNode37.point1.set(-1.465,2.263,-1.85685);
myNode37.point2.set(-1.465,2.263,0.23785000000000012);
myNode37.radius.set(0.519);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0,0.0,0.0);
myNode37.innerRotation.angle.set(0.0);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addCylinder();
myNode38.point1.set(2.954,-2.124,-18.0998);
myNode38.point2.set(2.954,-2.124,1.856900000000003);
myNode38.radius.set(7.954);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(0.0,0.0,0.0);
myNode38.innerRotation.angle.set(0.0);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addBox();
myNode39.point1.set(-2.5179,-1.4589,-1.8569);
myNode39.point2.set(4.3369,2.7849000000000004,1.8569);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(0.0,0.0,0.0);
myNode39.innerRotation.angle.set(0.0);
myNode39.innerTranslation.vector.set(0,0,0);
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addCutOperation();
myNode40.leftArg.set(myNode38);
myNode40.rightArg.set(myNode39);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41 = object.addBox();
myNode41.point1.set(-2.51785,-1.73985,-1.85685);
myNode41.point2.set(2.52585,-0.6591499999999999,0.23785000000000012);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,0.0,0.0);
myNode41.innerRotation.angle.set(0.0);
myNode41.innerTranslation.vector.set(0,0,0);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42_1 = myNode37.clone();
myNode42_1.isVisible = false;
const myNode42_2 = object.addFuseOperation();
myNode42_2.leftArg.set(myNode42_1);
myNode42_2.rightArg.set(myNode40);
myNode42_2.isVisible = false;
myNode42 = object.addFuseOperation();
myNode42.leftArg.set(myNode42_2);
myNode42.rightArg.set(myNode41);
myNode42.isVisible = false;
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addBox();
myNode43.point1.set(4.3371,-1.7399,-18.0999);
myNode43.point2.set(18.0999,2.7849,1.8568999999999996);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(0.0,0.0,0.0);
myNode43.innerRotation.angle.set(0.0);
myNode43.innerTranslation.vector.set(0,0,0);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44 = object.addCylinder();
myNode44.point1.set(4.454,-1.74,-1.85695);
myNode44.point2.set(4.454,-1.74,1.85695);
myNode44.radius.set(0.548);
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
const myNode46 = object.addBox();
myNode46.point1.set(-4.3369,-2.5199,-0.1459);
myNode46.point2.set(4.3369,-1.4590999999999998,18.099899999999998);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(0.0,0.0,0.0);
myNode46.innerRotation.angle.set(0.0);
myNode46.innerTranslation.vector.set(0,0,0);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addBox();
myNode47.point1.set(-0.33195,-2.51995,-1.45895);
myNode47.point2.set(0.33095,-0.6590500000000001,18.09995);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(0.0,0.0,0.0);
myNode47.innerRotation.angle.set(0.0);
myNode47.innerTranslation.vector.set(0,0,0);
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addCutOperation();
myNode48.leftArg.set(myNode46);
myNode48.rightArg.set(myNode47);
myNode48.isVisible = false;

/* définition du node n°49*/
const myNode49 = object.addFuseOperation();
myNode49.leftArg.set(myNode45);
myNode49.rightArg.set(myNode48);
myNode49.isVisible = false;

/* définition du node n°50*/
const myNode50 = object.addCutOperation();
myNode50.leftArg.set(myNode42);
myNode50.rightArg.set(myNode49);
myNode50.isVisible = false;

/* définition du node n°51*/
const myNode51 = object.addCommonOperation();
myNode51.leftArg.set(myNode36);
myNode51.rightArg.set(myNode50);
myNode51.isVisible = false;

/* définition du node n°52*/
const myNode52 = object.addFuseOperation();
myNode52.leftArg.set(myNode23);
myNode52.rightArg.set(myNode51);
myNode52.isVisible = false;

/* définition du node n°53*/
const myNode53 = object.addCommonOperation();
myNode53.leftArg.set(myNode0);
myNode53.rightArg.set(myNode52);
myNode53.isVisible = true;


/*END Geometry Object Definition*/