/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.9209,-5.99985,-1.5788);
myNode0.point2.set(5.9209,5.99985,1.5788);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(0.0,0.0,0.0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-3.953,2.96381,-0.787634);
myNode1.point2.set(-1.0527799999999998,18.19981,18.199866);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode1.innerRotation.angle.set(3.11857);
myNode1.innerTranslation.vector.set(-2.50289,10.58181,8.706116);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-3.953,-4.99985,-0.60511);
myNode2.point2.set(4.02722,18.199849999999998,1.31564);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.innerTranslation.vector.set(0.0371100000000002,6.6,0.35526499999999994);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addCommonOperation();
myNode3.leftArg.set(myNode1);
myNode3.rightArg.set(myNode2);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addBox();
myNode4.point1.set(-1.05253,-18.2,0.0001);
myNode4.point2.set(4.02727,-4.3423,18.1999);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.innerTranslation.vector.set(1.4873699999999999,-11.271149999999999,9.1);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(-0.71933,-2.98097,-3.95305);
myNode5.point2.set(-0.71933,-2.98097,4.02727);
myNode5.radius.set(0.73077);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode5.innerRotation.angle.set(1.5707999999999998);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addFuseOperation();
myNode6.leftArg.set(myNode4);
myNode6.rightArg.set(myNode5);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addCutOperation();
myNode7.leftArg.set(myNode3);
myNode7.rightArg.set(myNode6);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addCylinder();
myNode8.point1.set(4.02737,4.08172,-1.31564);
myNode8.point2.set(4.02737,4.08172,-0.00014999999999987246);
myNode8.radius.set(0.9173);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(4.02755,3.65695,-0.787632);
myNode9.point2.set(18.199849999999998,18.199849999999998,18.199868000000002);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode9.innerRotation.angle.set(3.11857);
myNode9.innerTranslation.vector.set(11.1137,10.9284,8.706118);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addCylinder();
myNode10.point1.set(-0.71933,-2.98097,-18.1998);
myNode10.point2.set(-0.71933,-2.98097,-4.9343);
myNode10.radius.set(0.73077);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode10.innerRotation.angle.set(1.5707999999999998);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addBox();
myNode11.point1.set(-4.93406,3.65695,-18.1999);
myNode11.point2.set(-1.0527799999999998,18.199849999999998,18.199800000000003);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode11.innerRotation.angle.set(3.11857);
myNode11.innerTranslation.vector.set(-2.9934199999999995,10.9284,-4.9999999998107114e-05);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addBox();
myNode12.point1.set(-4.93406,2.96381,-0.787634);
myNode12.point2.set(4.93406,18.19981,18.199866);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode12.innerRotation.angle.set(3.11857);
myNode12.innerTranslation.vector.set(0.0,10.58181,8.706116);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13_1 = myNode9.clone();
myNode13_1.isVisible = false;
const myNode13_2 = object.addFuseOperation();
myNode13_2.leftArg.set(myNode13_1);
myNode13_2.rightArg.set(myNode10);
myNode13_2.isVisible = false;
const myNode13_3 = object.addFuseOperation();
myNode13_3.leftArg.set(myNode13_2);
myNode13_3.rightArg.set(myNode11);
myNode13_3.isVisible = false;
myNode13 = object.addFuseOperation();
myNode13.leftArg.set(myNode13_3);
myNode13.rightArg.set(myNode12);
myNode13.isVisible = false;
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addBox();
myNode14.point1.set(-4.93406,-4.99985,-0.60511);
myNode14.point2.set(4.93406,18.199849999999998,1.31564);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);
myNode14.innerTranslation.vector.set(0.0,6.6,0.35526499999999994);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addBox();
myNode15.point1.set(-18.1999,-18.1999,-18.1999);
myNode15.point2.set(4.934100000000001,2.9635999999999996,18.1999);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode15.innerRotation.angle.set(3.11857);
myNode15.innerTranslation.vector.set(-6.632899999999999,-7.61815,0.0);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addCutOperation();
myNode16.leftArg.set(myNode14);
myNode16.rightArg.set(myNode15);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addCylinder();
myNode17.point1.set(-0.71933,-2.98097,-4.9341);
myNode17.point2.set(-0.71933,-2.98097,18.1999);
myNode17.radius.set(0.73077);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode17.innerRotation.angle.set(1.5707999999999998);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addBox();
myNode18.point1.set(-3.95305,2.96376,-0.787684);
myNode18.point2.set(1.0502000000000002,18.19986,18.199916);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode18.innerRotation.angle.set(3.11857);
myNode18.innerTranslation.vector.set(-1.451425,10.58181,8.706116);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addFuseOperation();
myNode19.leftArg.set(myNode17);
myNode19.rightArg.set(myNode18);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addCutOperation();
myNode20.leftArg.set(myNode16);
myNode20.rightArg.set(myNode19);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addCommonOperation();
myNode21.leftArg.set(myNode13);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addCylinder();
myNode22.point1.set(-1.24306,0.33299,-18.1998);
myNode22.point2.set(-1.24306,0.33299,-9.999999999976694e-05);
myNode22.radius.set(0.32378);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(0.0,0.0,0.0);
myNode22.innerRotation.angle.set(0.0);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addCylinder();
myNode23.point1.set(1.24614,0.32995,-1.31564);
myNode23.point2.set(1.24614,0.32995,-0.00014999999999987246);
myNode23.radius.set(0.32288);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addBox();
myNode24.point1.set(-4.93406,-4.99985,-1.31564);
myNode24.point2.set(4.93406,4.99985,-0.00014999999999987246);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);
myNode24.innerTranslation.vector.set(0.0,0.0,-0.6578949999999999);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addBox();
myNode25.point1.set(-1.05253,-1.63661,-18.1999);
myNode25.point2.set(1.0502000000000002,18.19989,18.1999);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode25.innerRotation.angle.set(3.11857);
myNode25.innerTranslation.vector.set(-0.0011649999999998606,8.281640000000001,0.0);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addCutOperation();
myNode26.leftArg.set(myNode24);
myNode26.rightArg.set(myNode25);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27_1 = myNode22.clone();
myNode27_1.isVisible = false;
const myNode27_2 = object.addFuseOperation();
myNode27_2.leftArg.set(myNode27_1);
myNode27_2.rightArg.set(myNode23);
myNode27_2.isVisible = false;
myNode27 = object.addFuseOperation();
myNode27.leftArg.set(myNode27_2);
myNode27.rightArg.set(myNode26);
myNode27.isVisible = false;
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addBox();
myNode28.point1.set(-3.95305,-18.2,-18.1999);
myNode28.point2.set(4.9341099999999996,-4.033299999999999,18.1999);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode28.innerRotation.angle.set(3.11857);
myNode28.innerTranslation.vector.set(0.4905299999999997,-11.11665,0.0);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addBox();
myNode29.point1.set(-3.95305,-4.03302,-18.1999);
myNode29.point2.set(1.0502000000000002,2.96356,18.1999);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode29.innerRotation.angle.set(3.11857);
myNode29.innerTranslation.vector.set(-1.451425,-0.5347299999999997,0.0);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addFuseOperation();
myNode30.leftArg.set(myNode28);
myNode30.rightArg.set(myNode29);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addBox();
myNode31.point1.set(-3.9531,-3.57887,-1.31574);
myNode31.point2.set(4.02732,18.199930000000002,-4.999999999988347e-05);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(0.0,0.0,0.0);
myNode31.innerRotation.angle.set(0.0);
myNode31.innerTranslation.vector.set(0.037109999999999754,7.31053,-0.6578949999999999);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addCylinder();
myNode32.point1.set(-0.0275,1.63709,-1.31579);
myNode32.point2.set(-0.0275,1.63709,0.0);
myNode32.radius.set(1.05773);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addCutOperation();
myNode33.leftArg.set(myNode31);
myNode33.rightArg.set(myNode32);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addCutOperation();
myNode34.leftArg.set(myNode30);
myNode34.rightArg.set(myNode33);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addCutOperation();
myNode35.leftArg.set(myNode27);
myNode35.rightArg.set(myNode34);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addBox();
myNode36.point1.set(-18.1999,-4.34201,-1.31569);
myNode36.point2.set(4.934100000000001,-3.57905,1.31569);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(0.0,0.0,0.0);
myNode36.innerRotation.angle.set(0.0);
myNode36.innerTranslation.vector.set(-6.632899999999999,-3.9605300000000003,0.0);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addBox();
myNode37.point1.set(-18.2,-18.2,-0.787681);
myNode37.point2.set(-3.9532999999999987,-4.033299999999999,18.199919);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode37.innerRotation.angle.set(3.11857);
myNode37.innerTranslation.vector.set(-11.076649999999999,-11.11665,8.706119000000001);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addCylinder();
myNode38.point1.set(-3.95315,4.03059,-18.2);
myNode38.point2.set(-3.95315,4.03059,18.199900000000003);
myNode38.radius.set(0.99991);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(0.0,0.0,0.0);
myNode38.innerRotation.angle.set(0.0);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addCutOperation();
myNode39.leftArg.set(myNode37);
myNode39.rightArg.set(myNode38);
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addFuseOperation();
myNode40.leftArg.set(myNode36);
myNode40.rightArg.set(myNode39);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41 = object.addBox();
myNode41.point1.set(-1.05256,-18.2,-0.60521);
myNode41.point2.set(18.19994,18.199900000000003,1.31574);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,0.0,0.0);
myNode41.innerRotation.angle.set(0.0);
myNode41.innerTranslation.vector.set(8.573690000000001,-4.9999999998107114e-05,0.35526499999999994);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addCutOperation();
myNode42.leftArg.set(myNode40);
myNode42.rightArg.set(myNode41);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addCutOperation();
myNode43.leftArg.set(myNode35);
myNode43.rightArg.set(myNode42);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44 = object.addBox();
myNode44.point1.set(1.05045,3.65691,-18.1998);
myNode44.point2.set(18.19985,18.19981,-0.7879000000000005);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode44.innerRotation.angle.set(3.11857);
myNode44.innerTranslation.vector.set(9.62515,10.92836,-9.49385);
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45 = object.addBox();
myNode45.point1.set(-18.1999,-4.99984,0.00015);
myNode45.point2.set(4.934000000000001,-3.57909,1.3156400000000001);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(0.0,0.0,0.0);
myNode45.innerRotation.angle.set(0.0);
myNode45.innerTranslation.vector.set(-6.632949999999999,-4.289465,0.657895);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addCommonOperation();
myNode46.leftArg.set(myNode44);
myNode46.rightArg.set(myNode45);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47_1 = myNode7.clone();
myNode47_1.isVisible = false;
const myNode47_2 = object.addFuseOperation();
myNode47_2.leftArg.set(myNode47_1);
myNode47_2.rightArg.set(myNode8);
myNode47_2.isVisible = false;
const myNode47_3 = object.addFuseOperation();
myNode47_3.leftArg.set(myNode47_2);
myNode47_3.rightArg.set(myNode21);
myNode47_3.isVisible = false;
const myNode47_4 = object.addFuseOperation();
myNode47_4.leftArg.set(myNode47_3);
myNode47_4.rightArg.set(myNode43);
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