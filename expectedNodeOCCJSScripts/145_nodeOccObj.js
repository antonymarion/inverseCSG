/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-0.48895,-4.99995,-1.99995);
myNode0.point2.set(2.99995,-4.999999999988347e-05,-1.0000499999999999);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(0,0,0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-1.99895,5e-05,-1.99995);
myNode1.point2.set(2.99995,4.99995,1.99995);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.innerTranslation.vector.set(0,0,0);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(0.515,4.011,2.00005);
myNode2.point2.set(0.515,4.011,18.09995);
myNode2.radius.set(0.483);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3_1 = myNode0.clone();
myNode3_1.isVisible = false;
const myNode3_2 = object.addFuseOperation();
myNode3_2.leftArg.set(myNode3_1);
myNode3_2.rightArg.set(myNode1);
myNode3_2.isVisible = false;
myNode3 = object.addFuseOperation();
myNode3.leftArg.set(myNode3_2);
myNode3.rightArg.set(myNode2);
myNode3.isVisible = false;
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(2.499,0.499,-18.1);
myNode4.point2.set(2.499,0.499,2.0);
myNode4.radius.set(0.2);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addBox();
myNode5.point1.set(-1.999,0.5,1);
myNode5.point2.set(1.9979999999999998,4.496,18.1);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.innerTranslation.vector.set(0,0,0);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addCylinder();
myNode6.point1.set(1.5,-3,-18.1);
myNode6.point2.set(1.5,-3,-1.0);
myNode6.radius.set(0.399);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addCylinder();
myNode7.point1.set(2.5,4.499,-2);
myNode7.point2.set(2.5,4.499,18.1);
myNode7.radius.set(0.199);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8_1 = myNode4.clone();
myNode8_1.isVisible = false;
const myNode8_2 = object.addFuseOperation();
myNode8_2.leftArg.set(myNode8_1);
myNode8_2.rightArg.set(myNode5);
myNode8_2.isVisible = false;
const myNode8_3 = object.addFuseOperation();
myNode8_3.leftArg.set(myNode8_2);
myNode8_3.rightArg.set(myNode6);
myNode8_3.isVisible = false;
myNode8 = object.addFuseOperation();
myNode8.leftArg.set(myNode8_3);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = false;
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addCutOperation();
myNode9.leftArg.set(myNode3);
myNode9.rightArg.set(myNode8);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(-1.99895,5e-05,1.00005);
myNode10.point2.set(-1.52405,0.98995,1.9999500000000001);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.innerTranslation.vector.set(0,0,0);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addCylinder();
myNode11.point1.set(-1.507,0.99,1);
myNode11.point2.set(-1.507,0.99,18.1);
myNode11.radius.set(0.488);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCutOperation();
myNode12.leftArg.set(myNode10);
myNode12.rightArg.set(myNode11);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addBox();
myNode13.point1.set(-2.99995,5e-05,-1.99995);
myNode13.point2.set(-1.9990500000000002,4.01095,1.99995);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);
myNode13.innerTranslation.vector.set(0,0,0);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(-2.499,0.501,-2);
myNode14.point2.set(-2.499,0.501,2);
myNode14.radius.set(0.2);
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
const myNode16 = object.addBox();
myNode16.point1.set(-2.99995,3.00005,-1.99995);
myNode16.point2.set(-1.00005,4.99995,1.99995);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);
myNode16.innerTranslation.vector.set(0,0,0);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addCylinder();
myNode17.point1.set(-2.499,4.502,-2);
myNode17.point2.set(-2.499,4.502,2);
myNode17.radius.set(0.2);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addCutOperation();
myNode18.leftArg.set(myNode16);
myNode18.rightArg.set(myNode17);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addBox();
myNode19.point1.set(1.46705,2.46905,5e-05);
myNode19.point2.set(1.99795,4.99995,1.9999500000000001);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(0.0,0.0,0.0);
myNode19.innerRotation.angle.set(0.0);
myNode19.innerTranslation.vector.set(0,0,0);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addCylinder();
myNode20.point1.set(1.467,2.469,1);
myNode20.point2.set(1.467,2.469,2);
myNode20.radius.set(0.543);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addCutOperation();
myNode21.leftArg.set(myNode19);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addBox();
myNode22.point1.set(-1.99895,2.46905,-1.99995);
myNode22.point2.set(-1.52405,4.01095,1.99995);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(0.0,0.0,0.0);
myNode22.innerRotation.angle.set(0.0);
myNode22.innerTranslation.vector.set(0,0,0);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addBox();
myNode23.point1.set(1.46705,5e-05,1.00005);
myNode23.point2.set(1.99795,0.98995,1.9999500000000001);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);
myNode23.innerTranslation.vector.set(0,0,0);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addFuseOperation();
myNode24.leftArg.set(myNode22);
myNode24.rightArg.set(myNode23);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addCylinder();
myNode25.point1.set(1.495,1.003,0);
myNode25.point2.set(1.495,1.003,2);
myNode25.radius.set(0.506);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(0.0,0.0,0.0);
myNode25.innerRotation.angle.set(0.0);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addCylinder();
myNode26.point1.set(-1.525,2.523,1);
myNode26.point2.set(-1.525,2.523,18.1);
myNode26.radius.set(0.466);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addFuseOperation();
myNode27.leftArg.set(myNode25);
myNode27.rightArg.set(myNode26);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addCutOperation();
myNode28.leftArg.set(myNode24);
myNode28.rightArg.set(myNode27);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addBox();
myNode29.point1.set(-0.99995,3.00005,1.00005);
myNode29.point2.set(1.4659499999999999,4.49595,1.9999500000000001);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);
myNode29.innerTranslation.vector.set(0,0,0);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addBox();
myNode30.point1.set(0.515,3,1.5);
myNode30.point2.set(1.008,4.011,18.1);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);
myNode30.innerTranslation.vector.set(0,0,0);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addCutOperation();
myNode31.leftArg.set(myNode29);
myNode31.rightArg.set(myNode30);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addBox();
myNode32.point1.set(-2.99995,-4.99995,-1.99995);
myNode32.point2.set(-0.4890500000000002,-4.999999999988347e-05,-4.999999999988347e-05);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);
myNode32.innerTranslation.vector.set(0,0,0);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addCylinder();
myNode33.point1.set(-1.499,-3,-18.1);
myNode33.point2.set(-1.499,-3,0.0);
myNode33.radius.set(0.401);
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
const myNode35 = object.addFuseOperation();
myNode35.leftArg.set(myNode31);
myNode35.rightArg.set(myNode34);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addBox();
myNode36.point1.set(-3,0.5,1.5);
myNode36.point2.set(0.5150000000000001,4.496,2.0);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(0.0,0.0,0.0);
myNode36.innerRotation.angle.set(0.0);
myNode36.innerTranslation.vector.set(0,0,0);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addCylinder();
myNode37.point1.set(-1.499,-3,-1);
myNode37.point2.set(-1.499,-3,1);
myNode37.radius.set(0.599);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0,0.0,0.0);
myNode37.innerRotation.angle.set(0.0);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addCylinder();
myNode38.point1.set(0.515,4.011,1.5);
myNode38.point2.set(0.515,4.011,2.0);
myNode38.radius.set(0.483);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(0.0,0.0,0.0);
myNode38.innerRotation.angle.set(0.0);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39_1 = myNode36.clone();
myNode39_1.isVisible = false;
const myNode39_2 = object.addFuseOperation();
myNode39_2.leftArg.set(myNode39_1);
myNode39_2.rightArg.set(myNode37);
myNode39_2.isVisible = false;
myNode39 = object.addFuseOperation();
myNode39.leftArg.set(myNode39_2);
myNode39.rightArg.set(myNode38);
myNode39.isVisible = false;
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addCutOperation();
myNode40.leftArg.set(myNode35);
myNode40.rightArg.set(myNode39);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41 = object.addBox();
myNode41.point1.set(-0.48895,-4.99995,-1.99995);
myNode41.point2.set(2.99995,-4.999999999988347e-05,-4.999999999988347e-05);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,0.0,0.0);
myNode41.innerRotation.angle.set(0.0);
myNode41.innerTranslation.vector.set(0,0,0);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addCylinder();
myNode42.point1.set(1.501,-2.999,-18.1);
myNode42.point2.set(1.501,-2.999,1.5);
myNode42.radius.set(0.6);
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
const myNode44 = object.addBox();
myNode44.point1.set(-1.99895,4.01105,1.00005);
myNode44.point2.set(-0.48905,4.49595,1.9999500000000001);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(0.0,0.0,0.0);
myNode44.innerRotation.angle.set(0.0);
myNode44.innerTranslation.vector.set(0,0,0);
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45 = object.addCylinder();
myNode45.point1.set(-0.489,3.995,1.5);
myNode45.point2.set(-0.489,3.995,18.1);
myNode45.radius.set(0.511);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(0.0,0.0,0.0);
myNode45.innerRotation.angle.set(0.0);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addCutOperation();
myNode46.leftArg.set(myNode44);
myNode46.rightArg.set(myNode45);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47_1 = myNode9.clone();
myNode47_1.isVisible = false;
const myNode47_2 = object.addFuseOperation();
myNode47_2.leftArg.set(myNode47_1);
myNode47_2.rightArg.set(myNode12);
myNode47_2.isVisible = false;
const myNode47_3 = object.addFuseOperation();
myNode47_3.leftArg.set(myNode47_2);
myNode47_3.rightArg.set(myNode15);
myNode47_3.isVisible = false;
const myNode47_4 = object.addFuseOperation();
myNode47_4.leftArg.set(myNode47_3);
myNode47_4.rightArg.set(myNode18);
myNode47_4.isVisible = false;
const myNode47_5 = object.addFuseOperation();
myNode47_5.leftArg.set(myNode47_4);
myNode47_5.rightArg.set(myNode21);
myNode47_5.isVisible = false;
const myNode47_6 = object.addFuseOperation();
myNode47_6.leftArg.set(myNode47_5);
myNode47_6.rightArg.set(myNode28);
myNode47_6.isVisible = false;
const myNode47_7 = object.addFuseOperation();
myNode47_7.leftArg.set(myNode47_6);
myNode47_7.rightArg.set(myNode40);
myNode47_7.isVisible = false;
const myNode47_8 = object.addFuseOperation();
myNode47_8.leftArg.set(myNode47_7);
myNode47_8.rightArg.set(myNode43);
myNode47_8.isVisible = false;
myNode47 = object.addFuseOperation();
myNode47.leftArg.set(myNode47_8);
myNode47.rightArg.set(myNode46);
myNode47.isVisible = false;
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addBox();
myNode48.point1.set(-3.59995,-5.99995,-2.39995);
myNode48.point2.set(3.59995,5.99995,2.39995);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);
myNode48.innerTranslation.vector.set(0,0,0);
myNode48.isVisible = false;

/* définition du node n°49*/
const myNode49 = object.addCommonOperation();
myNode49.leftArg.set(myNode47);
myNode49.rightArg.set(myNode48);
myNode49.isVisible = true;


/*END Geometry Object Definition*/