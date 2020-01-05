/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addCylinder();
myNode0.point1.set(4.02737,4.08172,-1.31564);
myNode0.point2.set(0,0,1.31549);
myNode0.radius.set(0.9173);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(-1.24306,0.33299,-18.1998);
myNode1.point2.set(0,0,18.1997);
myNode1.radius.set(0.32378);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-4.93406,-4.99985,-1.31564);
myNode2.point2.set(9.86812,9.9997,1.31549);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);

/* définition du node n°3*/
const myNode3 = object.addBox();
myNode3.point1.set(-1.05253,-1.63661,-18.1999);
myNode3.point2.set(2.10273,19.8365,36.3998);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode3.innerRotation.angle.set(3.11857);

/* définition du node n°4*/
const myNode4 = object.addCutOperation();
myNode4.leftArg.set(myNode2);
myNode4.rightArg.set(myNode3);

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(1.24614,0.32995,-1.31564);
myNode5.point2.set(0,0,1.31549);
myNode5.radius.set(0.32288);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);

/* définition du node n°6*/
const myNode6_1 = object.addFuseOperation();
myNode6_1.leftArg.set(myNode1);
myNode6_1.rightArg.set(myNode1);
const myNode6_2 = object.addFuseOperation();
myNode6_2.leftArg.set(myNode6_1);
myNode6_2.rightArg.set(myNode4);
myNode6 = object.addFuseOperation();
myNode6.leftArg.set(myNode6_2);
myNode6.rightArg.set(myNode5);

/* définition du node n°7*/
const myNode7 = object.addBox();
myNode7.point1.set(-3.95305,-4.03302,-18.1999);
myNode7.point2.set(5.00325,6.99658,36.3998);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode7.innerRotation.angle.set(3.11857);

/* définition du node n°8*/
const myNode8 = object.addBox();
myNode8.point1.set(-3.95305,-18.2,-18.1999);
myNode8.point2.set(8.88716,14.1667,36.3998);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode8.innerRotation.angle.set(3.11857);

/* définition du node n°9*/
const myNode9 = object.addFuseOperation();
myNode9.leftArg.set(myNode7);
myNode9.rightArg.set(myNode8);

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(-3.9531,-3.57887,-1.31574);
myNode10.point2.set(7.98042,21.7788,1.31569);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);

/* définition du node n°11*/
const myNode11 = object.addCylinder();
myNode11.point1.set(-0.0275,1.63709,-1.31579);
myNode11.point2.set(0,0,1.31579);
myNode11.radius.set(1.05773);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);

/* définition du node n°12*/
const myNode12 = object.addCutOperation();
myNode12.leftArg.set(myNode10);
myNode12.rightArg.set(myNode11);

/* définition du node n°13*/
const myNode13 = object.addCutOperation();
myNode13.leftArg.set(myNode9);
myNode13.rightArg.set(myNode12);

/* définition du node n°14*/
const myNode14 = object.addCutOperation();
myNode14.leftArg.set(myNode6);
myNode14.rightArg.set(myNode13);

/* définition du node n°15*/
const myNode15 = object.addBox();
myNode15.point1.set(-18.1999,-4.34201,-1.31569);
myNode15.point2.set(23.134,0.76296,2.63138);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);

/* définition du node n°16*/
const myNode16 = object.addBox();
myNode16.point1.set(-18.2,-18.2,-0.787681);
myNode16.point2.set(14.2467,14.1667,18.9876);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode16.innerRotation.angle.set(3.11857);

/* définition du node n°17*/
const myNode17 = object.addCylinder();
myNode17.point1.set(-3.95315,4.03059,-18.2);
myNode17.point2.set(0,0,36.3999);
myNode17.radius.set(0.99991);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);

/* définition du node n°18*/
const myNode18 = object.addCutOperation();
myNode18.leftArg.set(myNode16);
myNode18.rightArg.set(myNode17);

/* définition du node n°19*/
const myNode19 = object.addFuseOperation();
myNode19.leftArg.set(myNode15);
myNode19.rightArg.set(myNode18);

/* définition du node n°20*/
const myNode20 = object.addBox();
myNode20.point1.set(-1.05256,-18.2,-0.60521);
myNode20.point2.set(19.2525,36.3999,1.92095);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);

/* définition du node n°21*/
const myNode21 = object.addCutOperation();
myNode21.leftArg.set(myNode19);
myNode21.rightArg.set(myNode20);

/* définition du node n°22*/
const myNode22 = object.addCutOperation();
myNode22.leftArg.set(myNode14);
myNode22.rightArg.set(myNode21);

/* définition du node n°23*/
const myNode23 = object.addBox();
myNode23.point1.set(1.05045,3.65691,-18.1998);
myNode23.point2.set(17.1494,14.5429,17.4119);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode23.innerRotation.angle.set(3.11857);

/* définition du node n°24*/
const myNode24 = object.addBox();
myNode24.point1.set(-18.1999,-4.99984,0.00015);
myNode24.point2.set(23.1339,1.42075,1.31549);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);

/* définition du node n°25*/
const myNode25 = object.addCommonOperation();
myNode25.leftArg.set(myNode23);
myNode25.rightArg.set(myNode24);

/* définition du node n°26*/
const myNode26 = object.addBox();
myNode26.point1.set(-3.953,-4.99985,-0.60511);
myNode26.point2.set(7.98022,23.1997,1.92075);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);

/* définition du node n°27*/
const myNode27 = object.addBox();
myNode27.point1.set(-3.953,2.96381,-0.787634);
myNode27.point2.set(2.90022,15.236,18.9875);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode27.innerRotation.angle.set(3.11857);

/* définition du node n°28*/
const myNode28 = object.addCommonOperation();
myNode28.leftArg.set(myNode26);
myNode28.rightArg.set(myNode27);

/* définition du node n°29*/
const myNode29 = object.addBox();
myNode29.point1.set(-1.05253,-18.2,0.0001);
myNode29.point2.set(5.0798,13.8577,18.1998);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);

/* définition du node n°30*/
const myNode30 = object.addCylinder();
myNode30.point1.set(-0.71933,-2.98097,-3.95305);
myNode30.point2.set(0,0,7.98032);
myNode30.radius.set(0.73077);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode30.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°31*/
const myNode31 = object.addFuseOperation();
myNode31.leftArg.set(myNode29);
myNode31.rightArg.set(myNode30);

/* définition du node n°32*/
const myNode32 = object.addCutOperation();
myNode32.leftArg.set(myNode28);
myNode32.rightArg.set(myNode31);

/* définition du node n°33*/
const myNode33 = object.addBox();
myNode33.point1.set(-4.93406,2.96381,-0.787634);
myNode33.point2.set(9.86812,15.236,18.9875);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode33.innerRotation.angle.set(3.11857);

/* définition du node n°34*/
const myNode34 = object.addCylinder();
myNode34.point1.set(-0.71933,-2.98097,-18.1998);
myNode34.point2.set(0,0,13.2655);
myNode34.radius.set(0.73077);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode34.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°35*/
const myNode35 = object.addBox();
myNode35.point1.set(4.02755,3.65695,-0.787632);
myNode35.point2.set(14.1723,14.5429,18.9875);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode35.innerRotation.angle.set(3.11857);

/* définition du node n°36*/
const myNode36 = object.addBox();
myNode36.point1.set(-4.93406,3.65695,-18.1999);
myNode36.point2.set(3.88128,14.5429,36.3997);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode36.innerRotation.angle.set(3.11857);

/* définition du node n°37*/
const myNode37_1 = object.addFuseOperation();
myNode37_1.leftArg.set(myNode33);
myNode37_1.rightArg.set(myNode33);
const myNode37_2 = object.addFuseOperation();
myNode37_2.leftArg.set(myNode37_1);
myNode37_2.rightArg.set(myNode34);
const myNode37_3 = object.addFuseOperation();
myNode37_3.leftArg.set(myNode37_2);
myNode37_3.rightArg.set(myNode35);
myNode37 = object.addFuseOperation();
myNode37.leftArg.set(myNode37_3);
myNode37.rightArg.set(myNode36);

/* définition du node n°38*/
const myNode38 = object.addBox();
myNode38.point1.set(-4.93406,-4.99985,-0.60511);
myNode38.point2.set(9.86812,23.1997,1.92075);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(0.0,0.0,0.0);
myNode38.innerRotation.angle.set(0.0);

/* définition du node n°39*/
const myNode39 = object.addBox();
myNode39.point1.set(-18.1999,-18.1999,-18.1999);
myNode39.point2.set(23.134,21.1635,36.3998);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode39.innerRotation.angle.set(3.11857);

/* définition du node n°40*/
const myNode40 = object.addCutOperation();
myNode40.leftArg.set(myNode38);
myNode40.rightArg.set(myNode39);

/* définition du node n°41*/
const myNode41 = object.addCylinder();
myNode41.point1.set(-0.71933,-2.98097,-4.9341);
myNode41.point2.set(0,0,23.134);
myNode41.radius.set(0.73077);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode41.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°42*/
const myNode42 = object.addBox();
myNode42.point1.set(-3.95305,2.96376,-0.787684);
myNode42.point2.set(5.00325,15.2361,18.9876);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(-3.11857,0.0,0.0);
myNode42.innerRotation.angle.set(3.11857);

/* définition du node n°43*/
const myNode43 = object.addFuseOperation();
myNode43.leftArg.set(myNode41);
myNode43.rightArg.set(myNode42);

/* définition du node n°44*/
const myNode44 = object.addCutOperation();
myNode44.leftArg.set(myNode40);
myNode44.rightArg.set(myNode43);

/* définition du node n°45*/
const myNode45 = object.addCommonOperation();
myNode45.leftArg.set(myNode37);
myNode45.rightArg.set(myNode44);

/* définition du node n°46*/
const myNode46_1 = object.addFuseOperation();
myNode46_1.leftArg.set(myNode0);
myNode46_1.rightArg.set(myNode0);
const myNode46_2 = object.addFuseOperation();
myNode46_2.leftArg.set(myNode46_1);
myNode46_2.rightArg.set(myNode22);
const myNode46_3 = object.addFuseOperation();
myNode46_3.leftArg.set(myNode46_2);
myNode46_3.rightArg.set(myNode25);
const myNode46_4 = object.addFuseOperation();
myNode46_4.leftArg.set(myNode46_3);
myNode46_4.rightArg.set(myNode32);
myNode46 = object.addFuseOperation();
myNode46.leftArg.set(myNode46_4);
myNode46.rightArg.set(myNode45);

/* définition du node n°47*/
const myNode47 = object.addBox();
myNode47.point1.set(-5.9209,-5.99985,-1.5788);
myNode47.point2.set(11.8418,11.9997,3.1576);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(0.0,0.0,0.0);
myNode47.innerRotation.angle.set(0.0);

/* définition du node n°48*/
const myNode48 = object.addCommonOperation();
myNode48.leftArg.set(myNode46);
myNode48.rightArg.set(myNode47);
/*END Geometry Object Definition*/