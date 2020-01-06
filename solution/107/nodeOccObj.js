/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-4.33685,-2.12385,-0.14585);
myNode0.point2.set(4.99985,-1.4591500000000002,1.85685);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.isVisible = False

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-1.46185,-2.12385,-1.85685);
myNode1.point2.set(1.99085,2.7848499999999996,0.23785000000000012);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.isVisible = False

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(0.004,0.8,-1.4589);
myNode2.point2.set(0.004,0.8,18.0999);
myNode2.radius.set(1.279);
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
myNode4.point1.set(-0.33185,-2.12385,-1.85685);
myNode4.point2.set(4.9998499999999995,-1.74015,0.23785000000000012);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.isVisible = False

/* définition du node n°5*/
const myNode5 = object.addBox();
myNode5.point1.set(-4.33685,-2.78485,-1.85685);
myNode5.point2.set(4.33685,-1.19415,1.85685);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.isVisible = False

/* définition du node n°6*/
const myNode6 = object.addCylinder();
myNode6.point1.set(-1.871,-2.335,-18.0999);
myNode6.point2.set(-1.871,-2.335,18.0999);
myNode6.radius.set(1.223);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode6.innerRotation.angle.set(2.094392392986396);
myNode6.isVisible = False

/* définition du node n°7*/
const myNode7 = object.addCutOperation();
myNode7.leftArg.set(myNode5);
myNode7.rightArg.set(myNode6);
myNode7.isVisible = False

/* définition du node n°8*/
const myNode8 = object.addCylinder();
myNode8.point1.set(-4.453,-1.733,-1.85685);
myNode8.point2.set(-4.453,-1.733,1.85685);
myNode8.radius.set(0.547);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.isVisible = False

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(-1.98885,-1.73985,-1.85685);
myNode9.point2.set(-1.46215,2.23285,0.23785000000000012);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.isVisible = False

/* définition du node n°10*/
const myNode10_1 = object.addFuseOperation();
myNode10_1.leftArg.set(myNode0);
myNode10_1.rightArg.set(myNode0);
const myNode10_2 = object.addFuseOperation();
myNode10_2.leftArg.set(myNode10_1);
myNode10_2.rightArg.set(myNode3);
const myNode10_3 = object.addFuseOperation();
myNode10_3.leftArg.set(myNode10_2);
myNode10_3.rightArg.set(myNode4);
const myNode10_4 = object.addFuseOperation();
myNode10_4.leftArg.set(myNode10_3);
myNode10_4.rightArg.set(myNode7);
const myNode10_5 = object.addFuseOperation();
myNode10_5.leftArg.set(myNode10_4);
myNode10_5.rightArg.set(myNode8);
myNode10 = object.addFuseOperation();
myNode10.leftArg.set(myNode10_5);
myNode10.rightArg.set(myNode9);
myNode10.isVisible = False

/* définition du node n°11*/
const myNode11 = object.addBox();
myNode11.point1.set(-18.0999,-2.5199,-1.8569);
myNode11.point2.set(4.3369,2.2329,1.8569);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);
myNode11.isVisible = False

/* définition du node n°12*/
const myNode12 = object.addBox();
myNode12.point1.set(-18.0999,-1.45895,-1.85695);
myNode12.point2.set(4.337,2.2329499999999998,1.85695);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);
myNode12.isVisible = False

/* définition du node n°13*/
const myNode13 = object.addCylinder();
myNode13.point1.set(-0.002,0.797,-1.857);
myNode13.point2.set(-0.002,0.797,18.1);
myNode13.radius.set(0.871);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);
myNode13.isVisible = False

/* définition du node n°14*/
const myNode14 = object.addCutOperation();
myNode14.leftArg.set(myNode12);
myNode14.rightArg.set(myNode13);
myNode14.isVisible = False

/* définition du node n°15*/
const myNode15 = object.addCutOperation();
myNode15.leftArg.set(myNode11);
myNode15.rightArg.set(myNode14);
myNode15.isVisible = False

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(-1.848,2.33,-2.7849);
myNode16.point2.set(-1.848,2.33,2.7849);
myNode16.radius.set(1.204);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode16.innerRotation.angle.set(2.094392392986396);
myNode16.isVisible = False

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(1.4431,2.2331,-18.0999);
myNode17.point2.set(18.0999,18.099899999999998,18.0999);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.isVisible = False

/* définition du node n°18*/
const myNode18 = object.addFuseOperation();
myNode18.leftArg.set(myNode16);
myNode18.rightArg.set(myNode17);
myNode18.isVisible = False

/* définition du node n°19*/
const myNode19 = object.addCylinder();
myNode19.point1.set(1.441,2.233,-18.0999);
myNode19.point2.set(1.441,2.233,0.23899999999999721);
myNode19.radius.set(0.556);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(0.0,0.0,0.0);
myNode19.innerRotation.angle.set(0.0);
myNode19.isVisible = False

/* définition du node n°20*/
const myNode20 = object.addCutOperation();
myNode20.leftArg.set(myNode18);
myNode20.rightArg.set(myNode19);
myNode20.isVisible = False

/* définition du node n°21*/
const myNode21 = object.addFuseOperation();
myNode21.leftArg.set(myNode15);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = False

/* définition du node n°22*/
const myNode22 = object.addCutOperation();
myNode22.leftArg.set(myNode10);
myNode22.rightArg.set(myNode21);
myNode22.isVisible = False

/* définition du node n°23*/
const myNode23 = object.addCylinder();
myNode23.point1.set(-1.465,2.263,-1.85685);
myNode23.point2.set(-1.465,2.263,0.23785000000000012);
myNode23.radius.set(0.519);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);
myNode23.isVisible = False

/* définition du node n°24*/
const myNode24 = object.addCylinder();
myNode24.point1.set(2.954,-2.124,-18.0998);
myNode24.point2.set(2.954,-2.124,1.856900000000003);
myNode24.radius.set(7.954);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);
myNode24.isVisible = False

/* définition du node n°25*/
const myNode25 = object.addBox();
myNode25.point1.set(-2.5179,-1.4589,-1.8569);
myNode25.point2.set(4.3369,2.7849000000000004,1.8569);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(0.0,0.0,0.0);
myNode25.innerRotation.angle.set(0.0);
myNode25.isVisible = False

/* définition du node n°26*/
const myNode26 = object.addCutOperation();
myNode26.leftArg.set(myNode24);
myNode26.rightArg.set(myNode25);
myNode26.isVisible = False

/* définition du node n°27*/
const myNode27 = object.addBox();
myNode27.point1.set(-2.51785,-1.73985,-1.85685);
myNode27.point2.set(2.52585,-0.6591499999999999,0.23785000000000012);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);
myNode27.isVisible = False

/* définition du node n°28*/
const myNode28_1 = object.addFuseOperation();
myNode28_1.leftArg.set(myNode23);
myNode28_1.rightArg.set(myNode23);
const myNode28_2 = object.addFuseOperation();
myNode28_2.leftArg.set(myNode28_1);
myNode28_2.rightArg.set(myNode26);
myNode28 = object.addFuseOperation();
myNode28.leftArg.set(myNode28_2);
myNode28.rightArg.set(myNode27);
myNode28.isVisible = False

/* définition du node n°29*/
const myNode29 = object.addBox();
myNode29.point1.set(4.3371,-1.7399,-18.0999);
myNode29.point2.set(18.0999,2.7849,1.8568999999999996);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);
myNode29.isVisible = False

/* définition du node n°30*/
const myNode30 = object.addCylinder();
myNode30.point1.set(4.454,-1.74,-1.85695);
myNode30.point2.set(4.454,-1.74,1.85695);
myNode30.radius.set(0.548);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);
myNode30.isVisible = False

/* définition du node n°31*/
const myNode31 = object.addCutOperation();
myNode31.leftArg.set(myNode29);
myNode31.rightArg.set(myNode30);
myNode31.isVisible = False

/* définition du node n°32*/
const myNode32 = object.addBox();
myNode32.point1.set(-4.3369,-2.5199,-0.1459);
myNode32.point2.set(4.3369,-1.4590999999999998,18.099899999999998);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);
myNode32.isVisible = False

/* définition du node n°33*/
const myNode33 = object.addBox();
myNode33.point1.set(-0.33195,-2.51995,-1.45895);
myNode33.point2.set(0.33095,-0.6590500000000001,18.09995);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);
myNode33.isVisible = False

/* définition du node n°34*/
const myNode34 = object.addCutOperation();
myNode34.leftArg.set(myNode32);
myNode34.rightArg.set(myNode33);
myNode34.isVisible = False

/* définition du node n°35*/
const myNode35 = object.addFuseOperation();
myNode35.leftArg.set(myNode31);
myNode35.rightArg.set(myNode34);
myNode35.isVisible = False

/* définition du node n°36*/
const myNode36 = object.addCutOperation();
myNode36.leftArg.set(myNode28);
myNode36.rightArg.set(myNode35);
myNode36.isVisible = False

/* définition du node n°37*/
const myNode37 = object.addBox();
myNode37.point1.set(-18.0998,-2.51985,-1.85685);
myNode37.point2.set(4.3369,-1.45915,1.85685);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0,0.0,0.0);
myNode37.innerRotation.angle.set(0.0);
myNode37.isVisible = False

/* définition du node n°38*/
const myNode38 = object.addBox();
myNode38.point1.set(-2.51785,-2.51985,-1.85685);
myNode38.point2.set(1.9898499999999997,2.7848500000000005,0.23785000000000012);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(0.0,0.0,0.0);
myNode38.innerRotation.angle.set(0.0);
myNode38.isVisible = False

/* définition du node n°39*/
const myNode39 = object.addFuseOperation();
myNode39.leftArg.set(myNode37);
myNode39.rightArg.set(myNode38);
myNode39.isVisible = False

/* définition du node n°40*/
const myNode40 = object.addBox();
myNode40.point1.set(-18.0999,-2.5199,-18.0999);
myNode40.point2.set(-4.337100000000001,-2.1241,1.8568999999999996);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(0.0,0.0,0.0);
myNode40.innerRotation.angle.set(0.0);
myNode40.isVisible = False

/* définition du node n°41*/
const myNode41 = object.addCylinder();
myNode41.point1.set(-2.517,-0.662,-1.8569);
myNode41.point2.set(-2.517,-0.662,0.23790000000000022);
myNode41.radius.set(0.529);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,0.0,0.0);
myNode41.innerRotation.angle.set(0.0);
myNode41.isVisible = False

/* définition du node n°42*/
const myNode42 = object.addFuseOperation();
myNode42.leftArg.set(myNode40);
myNode42.rightArg.set(myNode41);
myNode42.isVisible = False

/* définition du node n°43*/
const myNode43 = object.addCutOperation();
myNode43.leftArg.set(myNode39);
myNode43.rightArg.set(myNode42);
myNode43.isVisible = False

/* définition du node n°44*/
const myNode44 = object.addCylinder();
myNode44.point1.set(4.432,-2.225,-1.85685);
myNode44.point2.set(4.432,-2.225,1.85685);
myNode44.radius.set(0.575);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(0.0,0.0,0.0);
myNode44.innerRotation.angle.set(0.0);
myNode44.isVisible = False

/* définition du node n°45*/
const myNode45 = object.addBox();
myNode45.point1.set(1.99015,-1.73985,-1.85685);
myNode45.point2.set(4.99985,-0.6591499999999999,1.85685);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(0.0,0.0,0.0);
myNode45.innerRotation.angle.set(0.0);
myNode45.isVisible = False

/* définition du node n°46*/
const myNode46 = object.addCylinder();
myNode46.point1.set(2.527,-0.659,-1.8569);
myNode46.point2.set(2.527,-0.659,18.0999);
myNode46.radius.set(0.536);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(0.0,0.0,0.0);
myNode46.innerRotation.angle.set(0.0);
myNode46.isVisible = False

/* définition du node n°47*/
const myNode47 = object.addCutOperation();
myNode47.leftArg.set(myNode45);
myNode47.rightArg.set(myNode46);
myNode47.isVisible = False

/* définition du node n°48*/
const myNode48 = object.addCylinder();
myNode48.point1.set(-4.469,-2.25,-1.85685);
myNode48.point2.set(-4.469,-2.25,1.85685);
myNode48.radius.set(0.533);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);
myNode48.isVisible = False

/* définition du node n°49*/
const myNode49_1 = object.addFuseOperation();
myNode49_1.leftArg.set(myNode43);
myNode49_1.rightArg.set(myNode43);
const myNode49_2 = object.addFuseOperation();
myNode49_2.leftArg.set(myNode49_1);
myNode49_2.rightArg.set(myNode44);
const myNode49_3 = object.addFuseOperation();
myNode49_3.leftArg.set(myNode49_2);
myNode49_3.rightArg.set(myNode47);
myNode49 = object.addFuseOperation();
myNode49.leftArg.set(myNode49_3);
myNode49.rightArg.set(myNode48);
myNode49.isVisible = False

/* définition du node n°50*/
const myNode50 = object.addCommonOperation();
myNode50.leftArg.set(myNode36);
myNode50.rightArg.set(myNode49);
myNode50.isVisible = False

/* définition du node n°51*/
const myNode51 = object.addFuseOperation();
myNode51.leftArg.set(myNode22);
myNode51.rightArg.set(myNode50);
myNode51.isVisible = False

/* définition du node n°52*/
const myNode52 = object.addBox();
myNode52.point1.set(-5.99985,-3.34185,-2.22785);
myNode52.point2.set(5.99985,3.34185,2.22785);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,0.0,0.0);
myNode52.innerRotation.angle.set(0.0);
myNode52.isVisible = False

/* définition du node n°53*/
const myNode53 = object.addCommonOperation();
myNode53.leftArg.set(myNode51);
myNode53.rightArg.set(myNode52);
myNode53.isVisible = True


/*END Geometry Object Definition*/