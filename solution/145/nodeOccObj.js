/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-3.59995,-5.99995,-2.39995);
myNode0.point2.set(3.59995,5.99995,2.39995);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(0.0,0.0,0.0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-2.99995,3.00005,-1.99995);
myNode1.point2.set(-1.00005,4.99995,1.99995);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.innerTranslation.vector.set(-2.0,4.0,0.0);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(-2.499,4.502,-2);
myNode2.point2.set(-2.499,4.502,2);
myNode2.radius.set(0.2);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addCutOperation();
myNode3.leftArg.set(myNode1);
myNode3.rightArg.set(myNode2);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addBox();
myNode4.point1.set(-2.99995,5e-05,-1.99995);
myNode4.point2.set(-1.9990500000000002,4.01095,1.99995);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.innerTranslation.vector.set(-2.4995000000000003,2.0055,0.0);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(-2.499,0.501,-2);
myNode5.point2.set(-2.499,0.501,2);
myNode5.radius.set(0.2);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addCutOperation();
myNode6.leftArg.set(myNode4);
myNode6.rightArg.set(myNode5);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addBox();
myNode7.point1.set(-1.99895,4.01105,1.00005);
myNode7.point2.set(-0.48905,4.49595,1.9999500000000001);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);
myNode7.innerTranslation.vector.set(-1.244,4.2535,1.5);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addCylinder();
myNode8.point1.set(-0.489,3.995,1.5);
myNode8.point2.set(-0.489,3.995,18.1);
myNode8.radius.set(0.511);
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
myNode10.point1.set(1.46705,2.46905,5e-05);
myNode10.point2.set(1.99795,4.99995,1.9999500000000001);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.innerTranslation.vector.set(1.7325,3.7345,1.0);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addCylinder();
myNode11.point1.set(1.467,2.469,1);
myNode11.point2.set(1.467,2.469,2);
myNode11.radius.set(0.543);
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
myNode13.point1.set(-1.99895,5e-05,1.00005);
myNode13.point2.set(-1.52405,0.98995,1.9999500000000001);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);
myNode13.innerTranslation.vector.set(-1.7615,0.495,1.5);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(-1.507,0.99,1);
myNode14.point2.set(-1.507,0.99,18.1);
myNode14.radius.set(0.488);
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
myNode16.point1.set(-1.99895,2.46905,-1.99995);
myNode16.point2.set(-1.52405,4.01095,1.99995);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);
myNode16.innerTranslation.vector.set(-1.7615,3.24,0.0);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(1.46705,5e-05,1.00005);
myNode17.point2.set(1.99795,0.98995,1.9999500000000001);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.innerTranslation.vector.set(1.7325,0.495,1.5);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addFuseOperation();
myNode18.leftArg.set(myNode16);
myNode18.rightArg.set(myNode17);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addCylinder();
myNode19.point1.set(1.495,1.003,0);
myNode19.point2.set(1.495,1.003,2);
myNode19.radius.set(0.506);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(0.0,0.0,0.0);
myNode19.innerRotation.angle.set(0.0);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addCylinder();
myNode20.point1.set(-1.525,2.523,1);
myNode20.point2.set(-1.525,2.523,18.1);
myNode20.radius.set(0.466);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);
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
const myNode23 = object.addBox();
myNode23.point1.set(-0.48895,-4.99995,-1.99995);
myNode23.point2.set(2.99995,-4.999999999988347e-05,-4.999999999988347e-05);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);
myNode23.innerTranslation.vector.set(1.2555,-2.5,-0.9999999999999999);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addCylinder();
myNode24.point1.set(1.501,-2.999,-18.1);
myNode24.point2.set(1.501,-2.999,1.5);
myNode24.radius.set(0.6);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addCutOperation();
myNode25.leftArg.set(myNode23);
myNode25.rightArg.set(myNode24);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addBox();
myNode26.point1.set(-0.99995,3.00005,1.00005);
myNode26.point2.set(1.4659499999999999,4.49595,1.9999500000000001);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);
myNode26.innerTranslation.vector.set(0.23299999999999998,3.7479999999999998,1.5);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addBox();
myNode27.point1.set(0.515,3,1.5);
myNode27.point2.set(1.008,4.011,18.1);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);
myNode27.innerTranslation.vector.set(0.7615000000000001,3.5055,9.8);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addCutOperation();
myNode28.leftArg.set(myNode26);
myNode28.rightArg.set(myNode27);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addBox();
myNode29.point1.set(-2.99995,-4.99995,-1.99995);
myNode29.point2.set(-0.4890500000000002,-4.999999999988347e-05,-4.999999999988347e-05);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);
myNode29.innerTranslation.vector.set(-1.7445000000000002,-2.5,-0.9999999999999999);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addCylinder();
myNode30.point1.set(-1.499,-3,-18.1);
myNode30.point2.set(-1.499,-3,0.0);
myNode30.radius.set(0.401);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addCutOperation();
myNode31.leftArg.set(myNode29);
myNode31.rightArg.set(myNode30);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addFuseOperation();
myNode32.leftArg.set(myNode28);
myNode32.rightArg.set(myNode31);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addBox();
myNode33.point1.set(-3,0.5,1.5);
myNode33.point2.set(0.5150000000000001,4.496,2.0);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);
myNode33.innerTranslation.vector.set(-1.2425,2.498,1.75);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addCylinder();
myNode34.point1.set(-1.499,-3,-1);
myNode34.point2.set(-1.499,-3,1);
myNode34.radius.set(0.599);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(0.0,0.0,0.0);
myNode34.innerRotation.angle.set(0.0);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addCylinder();
myNode35.point1.set(0.515,4.011,1.5);
myNode35.point2.set(0.515,4.011,2.0);
myNode35.radius.set(0.483);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,0.0);
myNode35.innerRotation.angle.set(0.0);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36_1 = myNode33.clone();
myNode36_1.isVisible = false;
const myNode36_2 = object.addFuseOperation();
myNode36_2.leftArg.set(myNode36_1);
myNode36_2.rightArg.set(myNode34);
myNode36_2.isVisible = false;
myNode36 = object.addFuseOperation();
myNode36.leftArg.set(myNode36_2);
myNode36.rightArg.set(myNode35);
myNode36.isVisible = false;
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addCutOperation();
myNode37.leftArg.set(myNode32);
myNode37.rightArg.set(myNode36);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addBox();
myNode38.point1.set(-1.99895,5e-05,-1.99995);
myNode38.point2.set(2.99995,4.99995,1.99995);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(0.0,0.0,0.0);
myNode38.innerRotation.angle.set(0.0);
myNode38.innerTranslation.vector.set(0.5005,2.5,0.0);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addBox();
myNode39.point1.set(-0.48895,-4.99995,-1.99995);
myNode39.point2.set(2.99995,-4.999999999988347e-05,-1.0000499999999999);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(0.0,0.0,0.0);
myNode39.innerRotation.angle.set(0.0);
myNode39.innerTranslation.vector.set(1.2555,-2.5,-1.5);
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addCylinder();
myNode40.point1.set(0.515,4.011,2.00005);
myNode40.point2.set(0.515,4.011,18.09995);
myNode40.radius.set(0.483);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(0.0,0.0,0.0);
myNode40.innerRotation.angle.set(0.0);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41_1 = myNode38.clone();
myNode41_1.isVisible = false;
const myNode41_2 = object.addFuseOperation();
myNode41_2.leftArg.set(myNode41_1);
myNode41_2.rightArg.set(myNode39);
myNode41_2.isVisible = false;
myNode41 = object.addFuseOperation();
myNode41.leftArg.set(myNode41_2);
myNode41.rightArg.set(myNode40);
myNode41.isVisible = false;
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addCylinder();
myNode42.point1.set(2.499,0.499,-18.1);
myNode42.point2.set(2.499,0.499,2.0);
myNode42.radius.set(0.2);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0,0.0,0.0);
myNode42.innerRotation.angle.set(0.0);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addCylinder();
myNode43.point1.set(1.5,-3,-18.1);
myNode43.point2.set(1.5,-3,-1.0);
myNode43.radius.set(0.399);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(0.0,0.0,0.0);
myNode43.innerRotation.angle.set(0.0);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44 = object.addCylinder();
myNode44.point1.set(2.5,4.499,-2);
myNode44.point2.set(2.5,4.499,18.1);
myNode44.radius.set(0.199);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(0.0,0.0,0.0);
myNode44.innerRotation.angle.set(0.0);
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45 = object.addBox();
myNode45.point1.set(-1.999,0.5,1);
myNode45.point2.set(1.9979999999999998,4.496,18.1);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(0.0,0.0,0.0);
myNode45.innerRotation.angle.set(0.0);
myNode45.innerTranslation.vector.set(-0.000500000000000167,2.498,9.55);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46_1 = myNode42.clone();
myNode46_1.isVisible = false;
const myNode46_2 = object.addFuseOperation();
myNode46_2.leftArg.set(myNode46_1);
myNode46_2.rightArg.set(myNode43);
myNode46_2.isVisible = false;
const myNode46_3 = object.addFuseOperation();
myNode46_3.leftArg.set(myNode46_2);
myNode46_3.rightArg.set(myNode44);
myNode46_3.isVisible = false;
myNode46 = object.addFuseOperation();
myNode46.leftArg.set(myNode46_3);
myNode46.rightArg.set(myNode45);
myNode46.isVisible = false;
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addCutOperation();
myNode47.leftArg.set(myNode41);
myNode47.rightArg.set(myNode46);
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48_1 = myNode3.clone();
myNode48_1.isVisible = false;
const myNode48_2 = object.addFuseOperation();
myNode48_2.leftArg.set(myNode48_1);
myNode48_2.rightArg.set(myNode6);
myNode48_2.isVisible = false;
const myNode48_3 = object.addFuseOperation();
myNode48_3.leftArg.set(myNode48_2);
myNode48_3.rightArg.set(myNode9);
myNode48_3.isVisible = false;
const myNode48_4 = object.addFuseOperation();
myNode48_4.leftArg.set(myNode48_3);
myNode48_4.rightArg.set(myNode12);
myNode48_4.isVisible = false;
const myNode48_5 = object.addFuseOperation();
myNode48_5.leftArg.set(myNode48_4);
myNode48_5.rightArg.set(myNode15);
myNode48_5.isVisible = false;
const myNode48_6 = object.addFuseOperation();
myNode48_6.leftArg.set(myNode48_5);
myNode48_6.rightArg.set(myNode22);
myNode48_6.isVisible = false;
const myNode48_7 = object.addFuseOperation();
myNode48_7.leftArg.set(myNode48_6);
myNode48_7.rightArg.set(myNode25);
myNode48_7.isVisible = false;
const myNode48_8 = object.addFuseOperation();
myNode48_8.leftArg.set(myNode48_7);
myNode48_8.rightArg.set(myNode37);
myNode48_8.isVisible = false;
myNode48 = object.addFuseOperation();
myNode48.leftArg.set(myNode48_8);
myNode48.rightArg.set(myNode47);
myNode48.isVisible = false;
myNode48.isVisible = false;

/* définition du node n°49*/
const myNode49 = object.addCommonOperation();
myNode49.leftArg.set(myNode0);
myNode49.rightArg.set(myNode48);
myNode49.isVisible = true;


/*END Geometry Object Definition*/