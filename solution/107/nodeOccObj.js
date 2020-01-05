/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-1.46185,-2.12385,-1.85685);
myNode0.point2.set(3.4527,4.9087,2.0947);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(0.004,0.8,-1.4589);
myNode1.point2.set(0,0,19.5588);
myNode1.radius.set(1.279);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);

/* définition du node n°2*/
const myNode2 = object.addCutOperation();
myNode2.leftArg.set(myNode0);
myNode2.rightArg.set(myNode1);

/* définition du node n°3*/
const myNode3 = object.addBox();
myNode3.point1.set(-4.33685,-2.78485,-1.85685);
myNode3.point2.set(8.6737,1.5907,3.7137);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(-1.871,-2.335,-18.0999);
myNode4.point2.set(0,0,36.1998);
myNode4.radius.set(1.223);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode4.innerRotation.angle.set(2.094392392986396);

/* définition du node n°5*/
const myNode5 = object.addCutOperation();
myNode5.leftArg.set(myNode3);
myNode5.rightArg.set(myNode4);

/* définition du node n°6*/
const myNode6 = object.addBox();
myNode6.point1.set(-4.33685,-2.12385,-0.14585);
myNode6.point2.set(9.3367,0.6647,2.0027);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);

/* définition du node n°7*/
const myNode7 = object.addCylinder();
myNode7.point1.set(-4.453,-1.733,-1.85685);
myNode7.point2.set(0,0,3.7137);
myNode7.radius.set(0.547);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);

/* définition du node n°8*/
const myNode8 = object.addBox();
myNode8.point1.set(-0.33185,-2.12385,-1.85685);
myNode8.point2.set(5.3317,0.3837,2.0947);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(-1.98885,-1.73985,-1.85685);
myNode9.point2.set(0.5267,3.9727,2.0947);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);

/* définition du node n°10*/
const myNode10_1 = object.addFuseOperation();
myNode10_1.leftArg.set(myNode2);
myNode10_1.rightArg.set(myNode2);
const myNode10_2 = object.addFuseOperation();
myNode10_2.leftArg.set(myNode10_1);
myNode10_2.rightArg.set(myNode5);
const myNode10_3 = object.addFuseOperation();
myNode10_3.leftArg.set(myNode10_2);
myNode10_3.rightArg.set(myNode6);
const myNode10_4 = object.addFuseOperation();
myNode10_4.leftArg.set(myNode10_3);
myNode10_4.rightArg.set(myNode7);
const myNode10_5 = object.addFuseOperation();
myNode10_5.leftArg.set(myNode10_4);
myNode10_5.rightArg.set(myNode8);
myNode10 = object.addFuseOperation();
myNode10.leftArg.set(myNode10_5);
myNode10.rightArg.set(myNode9);

/* définition du node n°11*/
const myNode11 = object.addBox();
myNode11.point1.set(1.4431,2.2331,-18.0999);
myNode11.point2.set(16.6568,15.8668,36.1998);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(-1.848,2.33,-2.7849);
myNode12.point2.set(0,0,5.5698);
myNode12.radius.set(1.204);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode12.innerRotation.angle.set(2.094392392986396);

/* définition du node n°13*/
const myNode13 = object.addFuseOperation();
myNode13.leftArg.set(myNode11);
myNode13.rightArg.set(myNode12);

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(1.441,2.233,-18.0999);
myNode14.point2.set(0,0,18.3389);
myNode14.radius.set(0.556);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);

/* définition du node n°15*/
const myNode15 = object.addCutOperation();
myNode15.leftArg.set(myNode13);
myNode15.rightArg.set(myNode14);

/* définition du node n°16*/
const myNode16 = object.addBox();
myNode16.point1.set(-18.0999,-2.5199,-1.8569);
myNode16.point2.set(22.4368,4.7528,3.7138);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(-18.0999,-1.45895,-1.85695);
myNode17.point2.set(22.4369,3.6919,3.7139);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(-0.002,0.797,-1.857);
myNode18.point2.set(0,0,19.957);
myNode18.radius.set(0.871);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);

/* définition du node n°19*/
const myNode19 = object.addCutOperation();
myNode19.leftArg.set(myNode17);
myNode19.rightArg.set(myNode18);

/* définition du node n°20*/
const myNode20 = object.addCutOperation();
myNode20.leftArg.set(myNode16);
myNode20.rightArg.set(myNode19);

/* définition du node n°21*/
const myNode21 = object.addFuseOperation();
myNode21.leftArg.set(myNode15);
myNode21.rightArg.set(myNode20);

/* définition du node n°22*/
const myNode22 = object.addCutOperation();
myNode22.leftArg.set(myNode10);
myNode22.rightArg.set(myNode21);

/* définition du node n°23*/
const myNode23 = object.addCylinder();
myNode23.point1.set(2.954,-2.124,-18.0998);
myNode23.point2.set(0,0,19.9567);
myNode23.radius.set(7.954);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);

/* définition du node n°24*/
const myNode24 = object.addBox();
myNode24.point1.set(-2.5179,-1.4589,-1.8569);
myNode24.point2.set(6.8548,4.2438,3.7138);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);

/* définition du node n°25*/
const myNode25 = object.addCutOperation();
myNode25.leftArg.set(myNode23);
myNode25.rightArg.set(myNode24);

/* définition du node n°26*/
const myNode26 = object.addBox();
myNode26.point1.set(-2.51785,-1.73985,-1.85685);
myNode26.point2.set(5.0437,1.0807,2.0947);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);

/* définition du node n°27*/
const myNode27 = object.addCylinder();
myNode27.point1.set(-1.465,2.263,-1.85685);
myNode27.point2.set(0,0,2.0947);
myNode27.radius.set(0.519);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);

/* définition du node n°28*/
const myNode28_1 = object.addFuseOperation();
myNode28_1.leftArg.set(myNode25);
myNode28_1.rightArg.set(myNode25);
const myNode28_2 = object.addFuseOperation();
myNode28_2.leftArg.set(myNode28_1);
myNode28_2.rightArg.set(myNode26);
myNode28 = object.addFuseOperation();
myNode28.leftArg.set(myNode28_2);
myNode28.rightArg.set(myNode27);

/* définition du node n°29*/
const myNode29 = object.addBox();
myNode29.point1.set(4.3371,-1.7399,-18.0999);
myNode29.point2.set(13.7628,4.5248,19.9568);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);

/* définition du node n°30*/
const myNode30 = object.addCylinder();
myNode30.point1.set(4.454,-1.74,-1.85695);
myNode30.point2.set(0,0,3.7139);
myNode30.radius.set(0.548);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);

/* définition du node n°31*/
const myNode31 = object.addCutOperation();
myNode31.leftArg.set(myNode29);
myNode31.rightArg.set(myNode30);

/* définition du node n°32*/
const myNode32 = object.addBox();
myNode32.point1.set(-4.3369,-2.5199,-0.1459);
myNode32.point2.set(8.6738,1.0608,18.2458);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);

/* définition du node n°33*/
const myNode33 = object.addBox();
myNode33.point1.set(-0.33195,-2.51995,-1.45895);
myNode33.point2.set(0.6629,1.8609,19.5589);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);

/* définition du node n°34*/
const myNode34 = object.addCutOperation();
myNode34.leftArg.set(myNode32);
myNode34.rightArg.set(myNode33);

/* définition du node n°35*/
const myNode35 = object.addFuseOperation();
myNode35.leftArg.set(myNode31);
myNode35.rightArg.set(myNode34);

/* définition du node n°36*/
const myNode36 = object.addCutOperation();
myNode36.leftArg.set(myNode28);
myNode36.rightArg.set(myNode35);

/* définition du node n°37*/
const myNode37 = object.addCylinder();
myNode37.point1.set(-4.469,-2.25,-1.85685);
myNode37.point2.set(0,0,3.7137);
myNode37.radius.set(0.533);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0,0.0,0.0);
myNode37.innerRotation.angle.set(0.0);

/* définition du node n°38*/
const myNode38 = object.addBox();
myNode38.point1.set(-2.51785,-2.51985,-1.85685);
myNode38.point2.set(4.5077,5.3047,2.0947);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(0.0,0.0,0.0);
myNode38.innerRotation.angle.set(0.0);

/* définition du node n°39*/
const myNode39 = object.addBox();
myNode39.point1.set(-18.0998,-2.51985,-1.85685);
myNode39.point2.set(22.4367,1.0607,3.7137);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(0.0,0.0,0.0);
myNode39.innerRotation.angle.set(0.0);

/* définition du node n°40*/
const myNode40 = object.addFuseOperation();
myNode40.leftArg.set(myNode38);
myNode40.rightArg.set(myNode39);

/* définition du node n°41*/
const myNode41 = object.addBox();
myNode41.point1.set(-18.0999,-2.5199,-18.0999);
myNode41.point2.set(13.7628,0.3958,19.9568);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,0.0,0.0);
myNode41.innerRotation.angle.set(0.0);

/* définition du node n°42*/
const myNode42 = object.addCylinder();
myNode42.point1.set(-2.517,-0.662,-1.8569);
myNode42.point2.set(0,0,2.0948);
myNode42.radius.set(0.529);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0,0.0,0.0);
myNode42.innerRotation.angle.set(0.0);

/* définition du node n°43*/
const myNode43 = object.addFuseOperation();
myNode43.leftArg.set(myNode41);
myNode43.rightArg.set(myNode42);

/* définition du node n°44*/
const myNode44 = object.addCutOperation();
myNode44.leftArg.set(myNode40);
myNode44.rightArg.set(myNode43);

/* définition du node n°45*/
const myNode45 = object.addBox();
myNode45.point1.set(1.99015,-1.73985,-1.85685);
myNode45.point2.set(3.0097,1.0807,3.7137);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(0.0,0.0,0.0);
myNode45.innerRotation.angle.set(0.0);

/* définition du node n°46*/
const myNode46 = object.addCylinder();
myNode46.point1.set(2.527,-0.659,-1.8569);
myNode46.point2.set(0,0,19.9568);
myNode46.radius.set(0.536);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(0.0,0.0,0.0);
myNode46.innerRotation.angle.set(0.0);

/* définition du node n°47*/
const myNode47 = object.addCutOperation();
myNode47.leftArg.set(myNode45);
myNode47.rightArg.set(myNode46);

/* définition du node n°48*/
const myNode48 = object.addCylinder();
myNode48.point1.set(4.432,-2.225,-1.85685);
myNode48.point2.set(0,0,3.7137);
myNode48.radius.set(0.575);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);

/* définition du node n°49*/
const myNode49_1 = object.addFuseOperation();
myNode49_1.leftArg.set(myNode37);
myNode49_1.rightArg.set(myNode37);
const myNode49_2 = object.addFuseOperation();
myNode49_2.leftArg.set(myNode49_1);
myNode49_2.rightArg.set(myNode44);
const myNode49_3 = object.addFuseOperation();
myNode49_3.leftArg.set(myNode49_2);
myNode49_3.rightArg.set(myNode47);
myNode49 = object.addFuseOperation();
myNode49.leftArg.set(myNode49_3);
myNode49.rightArg.set(myNode48);

/* définition du node n°50*/
const myNode50 = object.addCommonOperation();
myNode50.leftArg.set(myNode36);
myNode50.rightArg.set(myNode49);

/* définition du node n°51*/
const myNode51 = object.addFuseOperation();
myNode51.leftArg.set(myNode22);
myNode51.rightArg.set(myNode50);

/* définition du node n°52*/
const myNode52 = object.addBox();
myNode52.point1.set(-5.99985,-3.34185,-2.22785);
myNode52.point2.set(11.9997,6.6837,4.4557);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,0.0,0.0);
myNode52.innerRotation.angle.set(0.0);

/* définition du node n°53*/
const myNode53 = object.addCommonOperation();
myNode53.leftArg.set(myNode51);
myNode53.rightArg.set(myNode52);
/*END Geometry Object Definition*/