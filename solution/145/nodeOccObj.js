/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-0.99995,3.00005,1.00005);
myNode0.point2.set(1.4659499999999999,4.49595,1.9999500000000001);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.isVisible = False

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(0.515,3,1.5);
myNode1.point2.set(1.008,4.011,18.1);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.isVisible = False

/* définition du node n°2*/
const myNode2 = object.addCutOperation();
myNode2.leftArg.set(myNode0);
myNode2.rightArg.set(myNode1);
myNode2.isVisible = False

/* définition du node n°3*/
const myNode3 = object.addBox();
myNode3.point1.set(-2.99995,-4.99995,-1.99995);
myNode3.point2.set(-0.4890500000000002,-4.999999999988347e-05,-4.999999999988347e-05);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);
myNode3.isVisible = False

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(-1.499,-3,-18.1);
myNode4.point2.set(-1.499,-3,0.0);
myNode4.radius.set(0.401);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.isVisible = False

/* définition du node n°5*/
const myNode5 = object.addCutOperation();
myNode5.leftArg.set(myNode3);
myNode5.rightArg.set(myNode4);
myNode5.isVisible = False

/* définition du node n°6*/
const myNode6 = object.addFuseOperation();
myNode6.leftArg.set(myNode2);
myNode6.rightArg.set(myNode5);
myNode6.isVisible = False

/* définition du node n°7*/
const myNode7 = object.addCylinder();
myNode7.point1.set(0.515,4.011,1.5);
myNode7.point2.set(0.515,4.011,2.0);
myNode7.radius.set(0.483);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);
myNode7.isVisible = False

/* définition du node n°8*/
const myNode8 = object.addCylinder();
myNode8.point1.set(-1.499,-3,-1);
myNode8.point2.set(-1.499,-3,1);
myNode8.radius.set(0.599);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.isVisible = False

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(-3,0.5,1.5);
myNode9.point2.set(0.5150000000000001,4.496,2.0);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.isVisible = False

/* définition du node n°10*/
const myNode10_1 = object.addFuseOperation();
myNode10_1.leftArg.set(myNode7);
myNode10_1.rightArg.set(myNode7);
const myNode10_2 = object.addFuseOperation();
myNode10_2.leftArg.set(myNode10_1);
myNode10_2.rightArg.set(myNode8);
myNode10 = object.addFuseOperation();
myNode10.leftArg.set(myNode10_2);
myNode10.rightArg.set(myNode9);
myNode10.isVisible = False

/* définition du node n°11*/
const myNode11 = object.addCutOperation();
myNode11.leftArg.set(myNode6);
myNode11.rightArg.set(myNode10);
myNode11.isVisible = False

/* définition du node n°12*/
const myNode12 = object.addBox();
myNode12.point1.set(-2.99995,3.00005,-1.99995);
myNode12.point2.set(-1.00005,4.99995,1.99995);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);
myNode12.isVisible = False

/* définition du node n°13*/
const myNode13 = object.addCylinder();
myNode13.point1.set(-2.499,4.502,-2);
myNode13.point2.set(-2.499,4.502,2);
myNode13.radius.set(0.2);
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
const myNode15 = object.addBox();
myNode15.point1.set(1.46705,2.46905,5e-05);
myNode15.point2.set(1.99795,4.99995,1.9999500000000001);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);
myNode15.isVisible = False

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(1.467,2.469,1);
myNode16.point2.set(1.467,2.469,2);
myNode16.radius.set(0.543);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);
myNode16.isVisible = False

/* définition du node n°17*/
const myNode17 = object.addCutOperation();
myNode17.leftArg.set(myNode15);
myNode17.rightArg.set(myNode16);
myNode17.isVisible = False

/* définition du node n°18*/
const myNode18 = object.addBox();
myNode18.point1.set(-2.99995,5e-05,-1.99995);
myNode18.point2.set(-1.9990500000000002,4.01095,1.99995);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);
myNode18.isVisible = False

/* définition du node n°19*/
const myNode19 = object.addCylinder();
myNode19.point1.set(-2.499,0.501,-2);
myNode19.point2.set(-2.499,0.501,2);
myNode19.radius.set(0.2);
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
const myNode21 = object.addBox();
myNode21.point1.set(-0.48895,-4.99995,-1.99995);
myNode21.point2.set(2.99995,-4.999999999988347e-05,-4.999999999988347e-05);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);
myNode21.isVisible = False

/* définition du node n°22*/
const myNode22 = object.addCylinder();
myNode22.point1.set(1.501,-2.999,-18.1);
myNode22.point2.set(1.501,-2.999,1.5);
myNode22.radius.set(0.6);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(0.0,0.0,0.0);
myNode22.innerRotation.angle.set(0.0);
myNode22.isVisible = False

/* définition du node n°23*/
const myNode23 = object.addCutOperation();
myNode23.leftArg.set(myNode21);
myNode23.rightArg.set(myNode22);
myNode23.isVisible = False

/* définition du node n°24*/
const myNode24 = object.addBox();
myNode24.point1.set(-1.99895,2.46905,-1.99995);
myNode24.point2.set(-1.52405,4.01095,1.99995);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);
myNode24.isVisible = False

/* définition du node n°25*/
const myNode25 = object.addBox();
myNode25.point1.set(1.46705,5e-05,1.00005);
myNode25.point2.set(1.99795,0.98995,1.9999500000000001);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(0.0,0.0,0.0);
myNode25.innerRotation.angle.set(0.0);
myNode25.isVisible = False

/* définition du node n°26*/
const myNode26 = object.addFuseOperation();
myNode26.leftArg.set(myNode24);
myNode26.rightArg.set(myNode25);
myNode26.isVisible = False

/* définition du node n°27*/
const myNode27 = object.addCylinder();
myNode27.point1.set(-1.525,2.523,1);
myNode27.point2.set(-1.525,2.523,18.1);
myNode27.radius.set(0.466);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);
myNode27.isVisible = False

/* définition du node n°28*/
const myNode28 = object.addCylinder();
myNode28.point1.set(1.495,1.003,0);
myNode28.point2.set(1.495,1.003,2);
myNode28.radius.set(0.506);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(0.0,0.0,0.0);
myNode28.innerRotation.angle.set(0.0);
myNode28.isVisible = False

/* définition du node n°29*/
const myNode29 = object.addFuseOperation();
myNode29.leftArg.set(myNode27);
myNode29.rightArg.set(myNode28);
myNode29.isVisible = False

/* définition du node n°30*/
const myNode30 = object.addCutOperation();
myNode30.leftArg.set(myNode26);
myNode30.rightArg.set(myNode29);
myNode30.isVisible = False

/* définition du node n°31*/
const myNode31 = object.addBox();
myNode31.point1.set(-0.48895,-4.99995,-1.99995);
myNode31.point2.set(2.99995,-4.999999999988347e-05,-1.0000499999999999);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(0.0,0.0,0.0);
myNode31.innerRotation.angle.set(0.0);
myNode31.isVisible = False

/* définition du node n°32*/
const myNode32 = object.addBox();
myNode32.point1.set(-1.99895,5e-05,-1.99995);
myNode32.point2.set(2.99995,4.99995,1.99995);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);
myNode32.isVisible = False

/* définition du node n°33*/
const myNode33 = object.addCylinder();
myNode33.point1.set(0.515,4.011,2.00005);
myNode33.point2.set(0.515,4.011,18.09995);
myNode33.radius.set(0.483);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);
myNode33.isVisible = False

/* définition du node n°34*/
const myNode34_1 = object.addFuseOperation();
myNode34_1.leftArg.set(myNode31);
myNode34_1.rightArg.set(myNode31);
const myNode34_2 = object.addFuseOperation();
myNode34_2.leftArg.set(myNode34_1);
myNode34_2.rightArg.set(myNode32);
myNode34 = object.addFuseOperation();
myNode34.leftArg.set(myNode34_2);
myNode34.rightArg.set(myNode33);
myNode34.isVisible = False

/* définition du node n°35*/
const myNode35 = object.addBox();
myNode35.point1.set(-1.999,0.5,1);
myNode35.point2.set(1.9979999999999998,4.496,18.1);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,0.0);
myNode35.innerRotation.angle.set(0.0);
myNode35.isVisible = False

/* définition du node n°36*/
const myNode36 = object.addCylinder();
myNode36.point1.set(2.499,0.499,-18.1);
myNode36.point2.set(2.499,0.499,2.0);
myNode36.radius.set(0.2);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(0.0,0.0,0.0);
myNode36.innerRotation.angle.set(0.0);
myNode36.isVisible = False

/* définition du node n°37*/
const myNode37 = object.addCylinder();
myNode37.point1.set(2.5,4.499,-2);
myNode37.point2.set(2.5,4.499,18.1);
myNode37.radius.set(0.199);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0,0.0,0.0);
myNode37.innerRotation.angle.set(0.0);
myNode37.isVisible = False

/* définition du node n°38*/
const myNode38 = object.addCylinder();
myNode38.point1.set(1.5,-3,-18.1);
myNode38.point2.set(1.5,-3,-1.0);
myNode38.radius.set(0.399);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(0.0,0.0,0.0);
myNode38.innerRotation.angle.set(0.0);
myNode38.isVisible = False

/* définition du node n°39*/
const myNode39_1 = object.addFuseOperation();
myNode39_1.leftArg.set(myNode35);
myNode39_1.rightArg.set(myNode35);
const myNode39_2 = object.addFuseOperation();
myNode39_2.leftArg.set(myNode39_1);
myNode39_2.rightArg.set(myNode36);
const myNode39_3 = object.addFuseOperation();
myNode39_3.leftArg.set(myNode39_2);
myNode39_3.rightArg.set(myNode37);
myNode39 = object.addFuseOperation();
myNode39.leftArg.set(myNode39_3);
myNode39.rightArg.set(myNode38);
myNode39.isVisible = False

/* définition du node n°40*/
const myNode40 = object.addCutOperation();
myNode40.leftArg.set(myNode34);
myNode40.rightArg.set(myNode39);
myNode40.isVisible = False

/* définition du node n°41*/
const myNode41 = object.addBox();
myNode41.point1.set(-1.99895,5e-05,1.00005);
myNode41.point2.set(-1.52405,0.98995,1.9999500000000001);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,0.0,0.0);
myNode41.innerRotation.angle.set(0.0);
myNode41.isVisible = False

/* définition du node n°42*/
const myNode42 = object.addCylinder();
myNode42.point1.set(-1.507,0.99,1);
myNode42.point2.set(-1.507,0.99,18.1);
myNode42.radius.set(0.488);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0,0.0,0.0);
myNode42.innerRotation.angle.set(0.0);
myNode42.isVisible = False

/* définition du node n°43*/
const myNode43 = object.addCutOperation();
myNode43.leftArg.set(myNode41);
myNode43.rightArg.set(myNode42);
myNode43.isVisible = False

/* définition du node n°44*/
const myNode44 = object.addBox();
myNode44.point1.set(-1.99895,4.01105,1.00005);
myNode44.point2.set(-0.48905,4.49595,1.9999500000000001);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(0.0,0.0,0.0);
myNode44.innerRotation.angle.set(0.0);
myNode44.isVisible = False

/* définition du node n°45*/
const myNode45 = object.addCylinder();
myNode45.point1.set(-0.489,3.995,1.5);
myNode45.point2.set(-0.489,3.995,18.1);
myNode45.radius.set(0.511);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(0.0,0.0,0.0);
myNode45.innerRotation.angle.set(0.0);
myNode45.isVisible = False

/* définition du node n°46*/
const myNode46 = object.addCutOperation();
myNode46.leftArg.set(myNode44);
myNode46.rightArg.set(myNode45);
myNode46.isVisible = False

/* définition du node n°47*/
const myNode47_1 = object.addFuseOperation();
myNode47_1.leftArg.set(myNode11);
myNode47_1.rightArg.set(myNode11);
const myNode47_2 = object.addFuseOperation();
myNode47_2.leftArg.set(myNode47_1);
myNode47_2.rightArg.set(myNode14);
const myNode47_3 = object.addFuseOperation();
myNode47_3.leftArg.set(myNode47_2);
myNode47_3.rightArg.set(myNode17);
const myNode47_4 = object.addFuseOperation();
myNode47_4.leftArg.set(myNode47_3);
myNode47_4.rightArg.set(myNode20);
const myNode47_5 = object.addFuseOperation();
myNode47_5.leftArg.set(myNode47_4);
myNode47_5.rightArg.set(myNode23);
const myNode47_6 = object.addFuseOperation();
myNode47_6.leftArg.set(myNode47_5);
myNode47_6.rightArg.set(myNode30);
const myNode47_7 = object.addFuseOperation();
myNode47_7.leftArg.set(myNode47_6);
myNode47_7.rightArg.set(myNode40);
const myNode47_8 = object.addFuseOperation();
myNode47_8.leftArg.set(myNode47_7);
myNode47_8.rightArg.set(myNode43);
myNode47 = object.addFuseOperation();
myNode47.leftArg.set(myNode47_8);
myNode47.rightArg.set(myNode46);
myNode47.isVisible = False

/* définition du node n°48*/
const myNode48 = object.addBox();
myNode48.point1.set(-3.59995,-5.99995,-2.39995);
myNode48.point2.set(3.59995,5.99995,2.39995);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);
myNode48.isVisible = False

/* définition du node n°49*/
const myNode49 = object.addCommonOperation();
myNode49.leftArg.set(myNode47);
myNode49.rightArg.set(myNode48);
myNode49.isVisible = True


/*END Geometry Object Definition*/