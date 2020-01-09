/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.9209,-5.99985,-1.5788);
myNode0.point2.set(5.9209,5.99985,1.5788);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(0,0,0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(1.05045,3.65691,-18.1998);
myNode1.point2.set(18.19985,18.19981,-0.7879000000000005);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode1.innerRotation.angle.set(178.68089911611315);
myNode1.innerTranslation.vector.set(0,0,0);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-18.1999,-4.99984,0.00015);
myNode2.point2.set(4.934000000000001,-3.57909,1.3156400000000001);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.innerTranslation.vector.set(0,0,0);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addCommonOperation();
myNode3.leftArg.set(myNode1);
myNode3.rightArg.set(myNode2);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(1.24614,0.32995,-1.31564);
myNode4.point2.set(1.24614,0.32995,-0.00014999999999987246);
myNode4.radius.set(0.32288);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(-1.24306,0.33299,-18.1998);
myNode5.point2.set(-1.24306,0.33299,-9.999999999976694e-05);
myNode5.radius.set(0.32378);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addBox();
myNode6.point1.set(-4.93406,-4.99985,-1.31564);
myNode6.point2.set(4.93406,4.99985,-0.00014999999999987246);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.innerTranslation.vector.set(0,0,0);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addBox();
myNode7.point1.set(-1.05253,-1.63661,-18.1999);
myNode7.point2.set(1.0502000000000002,18.19989,18.1999);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode7.innerRotation.angle.set(178.68089911611315);
myNode7.innerTranslation.vector.set(0,0,0);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addCutOperation();
myNode8.leftArg.set(myNode6);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9_1 = myNode4.clone();
myNode9_1.isVisible = false;
const myNode9_2 = object.addFuseOperation();
myNode9_2.leftArg.set(myNode9_1);
myNode9_2.rightArg.set(myNode5);
myNode9_2.isVisible = false;
myNode9 = object.addFuseOperation();
myNode9.leftArg.set(myNode9_2);
myNode9.rightArg.set(myNode8);
myNode9.isVisible = false;
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(-3.95305,-4.03302,-18.1999);
myNode10.point2.set(1.0502000000000002,2.96356,18.1999);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode10.innerRotation.angle.set(178.68089911611315);
myNode10.innerTranslation.vector.set(0,0,0);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addBox();
myNode11.point1.set(-3.95305,-18.2,-18.1999);
myNode11.point2.set(4.9341099999999996,-4.033299999999999,18.1999);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode11.innerRotation.angle.set(178.68089911611315);
myNode11.innerTranslation.vector.set(0,0,0);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addFuseOperation();
myNode12.leftArg.set(myNode10);
myNode12.rightArg.set(myNode11);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addBox();
myNode13.point1.set(-3.9531,-3.57887,-1.31574);
myNode13.point2.set(4.02732,18.199930000000002,-4.999999999988347e-05);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);
myNode13.innerTranslation.vector.set(0,0,0);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(-0.0275,1.63709,-1.31579);
myNode14.point2.set(-0.0275,1.63709,0.0);
myNode14.radius.set(1.05773);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addCutOperation();
myNode15.leftArg.set(myNode13);
myNode15.rightArg.set(myNode14);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addCutOperation();
myNode16.leftArg.set(myNode12);
myNode16.rightArg.set(myNode15);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addCutOperation();
myNode17.leftArg.set(myNode9);
myNode17.rightArg.set(myNode16);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addBox();
myNode18.point1.set(-18.2,-18.2,-0.787681);
myNode18.point2.set(-3.9532999999999987,-4.033299999999999,18.199919);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode18.innerRotation.angle.set(178.68089911611315);
myNode18.innerTranslation.vector.set(0,0,0);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addCylinder();
myNode19.point1.set(-3.95315,4.03059,-18.2);
myNode19.point2.set(-3.95315,4.03059,18.199900000000003);
myNode19.radius.set(0.99991);
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
const myNode21 = object.addBox();
myNode21.point1.set(-18.1999,-4.34201,-1.31569);
myNode21.point2.set(4.934100000000001,-3.57905,1.31569);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);
myNode21.innerTranslation.vector.set(0,0,0);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addFuseOperation();
myNode22.leftArg.set(myNode20);
myNode22.rightArg.set(myNode21);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addBox();
myNode23.point1.set(-1.05256,-18.2,-0.60521);
myNode23.point2.set(18.19994,18.199900000000003,1.31574);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);
myNode23.innerTranslation.vector.set(0,0,0);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addCutOperation();
myNode24.leftArg.set(myNode22);
myNode24.rightArg.set(myNode23);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addCutOperation();
myNode25.leftArg.set(myNode17);
myNode25.rightArg.set(myNode24);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addBox();
myNode26.point1.set(-3.953,-4.99985,-0.60511);
myNode26.point2.set(4.02722,18.199849999999998,1.31564);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);
myNode26.innerTranslation.vector.set(0,0,0);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addBox();
myNode27.point1.set(-3.953,2.96381,-0.787634);
myNode27.point2.set(-1.0527799999999998,18.19981,18.199866);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode27.innerRotation.angle.set(178.68089911611315);
myNode27.innerTranslation.vector.set(0,0,0);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addCommonOperation();
myNode28.leftArg.set(myNode26);
myNode28.rightArg.set(myNode27);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addCylinder();
myNode29.point1.set(-0.71933,-2.98097,-3.95305);
myNode29.point2.set(-0.71933,-2.98097,4.02727);
myNode29.radius.set(0.73077);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode29.innerRotation.angle.set(90.0002104591497);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addBox();
myNode30.point1.set(-1.05253,-18.2,0.0001);
myNode30.point2.set(4.02727,-4.3423,18.1999);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);
myNode30.innerTranslation.vector.set(0,0,0);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addFuseOperation();
myNode31.leftArg.set(myNode29);
myNode31.rightArg.set(myNode30);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addCutOperation();
myNode32.leftArg.set(myNode28);
myNode32.rightArg.set(myNode31);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addCylinder();
myNode33.point1.set(4.02737,4.08172,-1.31564);
myNode33.point2.set(4.02737,4.08172,-0.00014999999999987246);
myNode33.radius.set(0.9173);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addCylinder();
myNode34.point1.set(-0.71933,-2.98097,-18.1998);
myNode34.point2.set(-0.71933,-2.98097,-4.9343);
myNode34.radius.set(0.73077);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode34.innerRotation.angle.set(90.0002104591497);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addBox();
myNode35.point1.set(-4.93406,3.65695,-18.1999);
myNode35.point2.set(-1.0527799999999998,18.199849999999998,18.199800000000003);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode35.innerRotation.angle.set(178.68089911611315);
myNode35.innerTranslation.vector.set(0,0,0);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addBox();
myNode36.point1.set(-4.93406,2.96381,-0.787634);
myNode36.point2.set(4.93406,18.19981,18.199866);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode36.innerRotation.angle.set(178.68089911611315);
myNode36.innerTranslation.vector.set(0,0,0);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addBox();
myNode37.point1.set(4.02755,3.65695,-0.787632);
myNode37.point2.set(18.199849999999998,18.199849999999998,18.199868000000002);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode37.innerRotation.angle.set(178.68089911611315);
myNode37.innerTranslation.vector.set(0,0,0);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38_1 = myNode34.clone();
myNode38_1.isVisible = false;
const myNode38_2 = object.addFuseOperation();
myNode38_2.leftArg.set(myNode38_1);
myNode38_2.rightArg.set(myNode35);
myNode38_2.isVisible = false;
const myNode38_3 = object.addFuseOperation();
myNode38_3.leftArg.set(myNode38_2);
myNode38_3.rightArg.set(myNode36);
myNode38_3.isVisible = false;
myNode38 = object.addFuseOperation();
myNode38.leftArg.set(myNode38_3);
myNode38.rightArg.set(myNode37);
myNode38.isVisible = false;
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addBox();
myNode39.point1.set(-4.93406,-4.99985,-0.60511);
myNode39.point2.set(4.93406,18.199849999999998,1.31564);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(0.0,0.0,0.0);
myNode39.innerRotation.angle.set(0.0);
myNode39.innerTranslation.vector.set(0,0,0);
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addBox();
myNode40.point1.set(-18.1999,-18.1999,-18.1999);
myNode40.point2.set(4.934100000000001,2.9635999999999996,18.1999);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode40.innerRotation.angle.set(178.68089911611315);
myNode40.innerTranslation.vector.set(0,0,0);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41 = object.addCutOperation();
myNode41.leftArg.set(myNode39);
myNode41.rightArg.set(myNode40);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addBox();
myNode42.point1.set(-3.95305,2.96376,-0.787684);
myNode42.point2.set(1.0502000000000002,18.19986,18.199916);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode42.innerRotation.angle.set(178.68089911611315);
myNode42.innerTranslation.vector.set(0,0,0);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addCylinder();
myNode43.point1.set(-0.71933,-2.98097,-4.9341);
myNode43.point2.set(-0.71933,-2.98097,18.1999);
myNode43.radius.set(0.73077);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode43.innerRotation.angle.set(90.0002104591497);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44 = object.addFuseOperation();
myNode44.leftArg.set(myNode42);
myNode44.rightArg.set(myNode43);
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45 = object.addCutOperation();
myNode45.leftArg.set(myNode41);
myNode45.rightArg.set(myNode44);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addCommonOperation();
myNode46.leftArg.set(myNode38);
myNode46.rightArg.set(myNode45);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47_1 = myNode3.clone();
myNode47_1.isVisible = false;
const myNode47_2 = object.addFuseOperation();
myNode47_2.leftArg.set(myNode47_1);
myNode47_2.rightArg.set(myNode25);
myNode47_2.isVisible = false;
const myNode47_3 = object.addFuseOperation();
myNode47_3.leftArg.set(myNode47_2);
myNode47_3.rightArg.set(myNode32);
myNode47_3.isVisible = false;
const myNode47_4 = object.addFuseOperation();
myNode47_4.leftArg.set(myNode47_3);
myNode47_4.rightArg.set(myNode33);
myNode47_4.isVisible = false;
myNode47 = object.addFuseOperation();
myNode47.leftArg.set(myNode47_4);
myNode47.rightArg.set(myNode46);
myNode47.isVisible = false;
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addCommonOperation();
myNode48.leftArg.set(myNode0);
myNode48.rightArg.set(myNode47);
myNode48.isVisible = true;


/*END Geometry Object Definition*/