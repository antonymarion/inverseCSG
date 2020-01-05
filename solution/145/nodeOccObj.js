/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-0.48895,-4.99995,-1.99995);
myNode0.point2.set(3.4889,4.9999,1.9999);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(1.501,-2.999,-18.1);
myNode1.point2.set(0,0,19.6);
myNode1.radius.set(0.6);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);

/* définition du node n°2*/
const myNode2 = object.addCutOperation();
myNode2.leftArg.set(myNode0);
myNode2.rightArg.set(myNode1);

/* définition du node n°3*/
const myNode3 = object.addBox();
myNode3.point1.set(-2.99995,3.00005,-1.99995);
myNode3.point2.set(1.9999,1.9999,3.9999);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(-2.499,4.502,-2);
myNode4.point2.set(0,0,4);
myNode4.radius.set(0.2);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);

/* définition du node n°5*/
const myNode5 = object.addCutOperation();
myNode5.leftArg.set(myNode3);
myNode5.rightArg.set(myNode4);

/* définition du node n°6*/
const myNode6 = object.addBox();
myNode6.point1.set(-2.99995,5e-05,-1.99995);
myNode6.point2.set(1.0009,4.0109,3.9999);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);

/* définition du node n°7*/
const myNode7 = object.addCylinder();
myNode7.point1.set(-2.499,0.501,-2);
myNode7.point2.set(0,0,4);
myNode7.radius.set(0.2);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);

/* définition du node n°8*/
const myNode8 = object.addCutOperation();
myNode8.leftArg.set(myNode6);
myNode8.rightArg.set(myNode7);

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(-1.99895,5e-05,1.00005);
myNode9.point2.set(0.4749,0.9899,0.9999);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);

/* définition du node n°10*/
const myNode10 = object.addCylinder();
myNode10.point1.set(-1.507,0.99,1);
myNode10.point2.set(0,0,17.1);
myNode10.radius.set(0.488);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);

/* définition du node n°11*/
const myNode11 = object.addCutOperation();
myNode11.leftArg.set(myNode9);
myNode11.rightArg.set(myNode10);

/* définition du node n°12*/
const myNode12 = object.addBox();
myNode12.point1.set(-1.99895,4.01105,1.00005);
myNode12.point2.set(1.5099,0.4849,0.9999);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);

/* définition du node n°13*/
const myNode13 = object.addCylinder();
myNode13.point1.set(-0.489,3.995,1.5);
myNode13.point2.set(0,0,16.6);
myNode13.radius.set(0.511);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);

/* définition du node n°14*/
const myNode14 = object.addCutOperation();
myNode14.leftArg.set(myNode12);
myNode14.rightArg.set(myNode13);

/* définition du node n°15*/
const myNode15 = object.addBox();
myNode15.point1.set(-1.99895,5e-05,-1.99995);
myNode15.point2.set(4.9989,4.9999,3.9999);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(0.515,4.011,2.00005);
myNode16.point2.set(0,0,16.0999);
myNode16.radius.set(0.483);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(-0.48895,-4.99995,-1.99995);
myNode17.point2.set(3.4889,4.9999,0.9999);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);

/* définition du node n°18*/
const myNode18_1 = object.addFuseOperation();
myNode18_1.leftArg.set(myNode15);
myNode18_1.rightArg.set(myNode15);
const myNode18_2 = object.addFuseOperation();
myNode18_2.leftArg.set(myNode18_1);
myNode18_2.rightArg.set(myNode16);
myNode18 = object.addFuseOperation();
myNode18.leftArg.set(myNode18_2);
myNode18.rightArg.set(myNode17);

/* définition du node n°19*/
const myNode19 = object.addCylinder();
myNode19.point1.set(2.499,0.499,-18.1);
myNode19.point2.set(0,0,20.1);
myNode19.radius.set(0.2);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(0.0,0.0,0.0);
myNode19.innerRotation.angle.set(0.0);

/* définition du node n°20*/
const myNode20 = object.addCylinder();
myNode20.point1.set(2.5,4.499,-2);
myNode20.point2.set(0,0,20.1);
myNode20.radius.set(0.199);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);

/* définition du node n°21*/
const myNode21 = object.addBox();
myNode21.point1.set(-1.999,0.5,1);
myNode21.point2.set(3.997,3.996,17.1);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);

/* définition du node n°22*/
const myNode22 = object.addCylinder();
myNode22.point1.set(1.5,-3,-18.1);
myNode22.point2.set(0,0,17.1);
myNode22.radius.set(0.399);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(0.0,0.0,0.0);
myNode22.innerRotation.angle.set(0.0);

/* définition du node n°23*/
const myNode23_1 = object.addFuseOperation();
myNode23_1.leftArg.set(myNode19);
myNode23_1.rightArg.set(myNode19);
const myNode23_2 = object.addFuseOperation();
myNode23_2.leftArg.set(myNode23_1);
myNode23_2.rightArg.set(myNode20);
const myNode23_3 = object.addFuseOperation();
myNode23_3.leftArg.set(myNode23_2);
myNode23_3.rightArg.set(myNode21);
myNode23 = object.addFuseOperation();
myNode23.leftArg.set(myNode23_3);
myNode23.rightArg.set(myNode22);

/* définition du node n°24*/
const myNode24 = object.addCutOperation();
myNode24.leftArg.set(myNode18);
myNode24.rightArg.set(myNode23);

/* définition du node n°25*/
const myNode25 = object.addBox();
myNode25.point1.set(-0.99995,3.00005,1.00005);
myNode25.point2.set(2.4659,1.4959,0.9999);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(0.0,0.0,0.0);
myNode25.innerRotation.angle.set(0.0);

/* définition du node n°26*/
const myNode26 = object.addBox();
myNode26.point1.set(0.515,3,1.5);
myNode26.point2.set(0.493,1.011,16.6);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);

/* définition du node n°27*/
const myNode27 = object.addCutOperation();
myNode27.leftArg.set(myNode25);
myNode27.rightArg.set(myNode26);

/* définition du node n°28*/
const myNode28 = object.addBox();
myNode28.point1.set(-2.99995,-4.99995,-1.99995);
myNode28.point2.set(2.5109,4.9999,1.9999);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(0.0,0.0,0.0);
myNode28.innerRotation.angle.set(0.0);

/* définition du node n°29*/
const myNode29 = object.addCylinder();
myNode29.point1.set(-1.499,-3,-18.1);
myNode29.point2.set(0,0,18.1);
myNode29.radius.set(0.401);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);

/* définition du node n°30*/
const myNode30 = object.addCutOperation();
myNode30.leftArg.set(myNode28);
myNode30.rightArg.set(myNode29);

/* définition du node n°31*/
const myNode31 = object.addFuseOperation();
myNode31.leftArg.set(myNode27);
myNode31.rightArg.set(myNode30);

/* définition du node n°32*/
const myNode32 = object.addCylinder();
myNode32.point1.set(0.515,4.011,1.5);
myNode32.point2.set(0,0,0.5);
myNode32.radius.set(0.483);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);

/* définition du node n°33*/
const myNode33 = object.addBox();
myNode33.point1.set(-3,0.5,1.5);
myNode33.point2.set(3.515,3.996,0.5);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);

/* définition du node n°34*/
const myNode34 = object.addCylinder();
myNode34.point1.set(-1.499,-3,-1);
myNode34.point2.set(0,0,2);
myNode34.radius.set(0.599);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(0.0,0.0,0.0);
myNode34.innerRotation.angle.set(0.0);

/* définition du node n°35*/
const myNode35_1 = object.addFuseOperation();
myNode35_1.leftArg.set(myNode32);
myNode35_1.rightArg.set(myNode32);
const myNode35_2 = object.addFuseOperation();
myNode35_2.leftArg.set(myNode35_1);
myNode35_2.rightArg.set(myNode33);
myNode35 = object.addFuseOperation();
myNode35.leftArg.set(myNode35_2);
myNode35.rightArg.set(myNode34);

/* définition du node n°36*/
const myNode36 = object.addCutOperation();
myNode36.leftArg.set(myNode31);
myNode36.rightArg.set(myNode35);

/* définition du node n°37*/
const myNode37 = object.addBox();
myNode37.point1.set(1.46705,2.46905,5e-05);
myNode37.point2.set(0.5309,2.5309,1.9999);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0,0.0,0.0);
myNode37.innerRotation.angle.set(0.0);

/* définition du node n°38*/
const myNode38 = object.addCylinder();
myNode38.point1.set(1.467,2.469,1);
myNode38.point2.set(0,0,1);
myNode38.radius.set(0.543);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(0.0,0.0,0.0);
myNode38.innerRotation.angle.set(0.0);

/* définition du node n°39*/
const myNode39 = object.addCutOperation();
myNode39.leftArg.set(myNode37);
myNode39.rightArg.set(myNode38);

/* définition du node n°40*/
const myNode40 = object.addBox();
myNode40.point1.set(1.46705,5e-05,1.00005);
myNode40.point2.set(0.5309,0.9899,0.9999);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(0.0,0.0,0.0);
myNode40.innerRotation.angle.set(0.0);

/* définition du node n°41*/
const myNode41 = object.addBox();
myNode41.point1.set(-1.99895,2.46905,-1.99995);
myNode41.point2.set(0.4749,1.5419,3.9999);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,0.0,0.0);
myNode41.innerRotation.angle.set(0.0);

/* définition du node n°42*/
const myNode42 = object.addFuseOperation();
myNode42.leftArg.set(myNode40);
myNode42.rightArg.set(myNode41);

/* définition du node n°43*/
const myNode43 = object.addCylinder();
myNode43.point1.set(-1.525,2.523,1);
myNode43.point2.set(0,0,17.1);
myNode43.radius.set(0.466);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(0.0,0.0,0.0);
myNode43.innerRotation.angle.set(0.0);

/* définition du node n°44*/
const myNode44 = object.addCylinder();
myNode44.point1.set(1.495,1.003,0);
myNode44.point2.set(0,0,2);
myNode44.radius.set(0.506);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(0.0,0.0,0.0);
myNode44.innerRotation.angle.set(0.0);

/* définition du node n°45*/
const myNode45 = object.addFuseOperation();
myNode45.leftArg.set(myNode43);
myNode45.rightArg.set(myNode44);

/* définition du node n°46*/
const myNode46 = object.addCutOperation();
myNode46.leftArg.set(myNode42);
myNode46.rightArg.set(myNode45);

/* définition du node n°47*/
const myNode47_1 = object.addFuseOperation();
myNode47_1.leftArg.set(myNode2);
myNode47_1.rightArg.set(myNode2);
const myNode47_2 = object.addFuseOperation();
myNode47_2.leftArg.set(myNode47_1);
myNode47_2.rightArg.set(myNode5);
const myNode47_3 = object.addFuseOperation();
myNode47_3.leftArg.set(myNode47_2);
myNode47_3.rightArg.set(myNode8);
const myNode47_4 = object.addFuseOperation();
myNode47_4.leftArg.set(myNode47_3);
myNode47_4.rightArg.set(myNode11);
const myNode47_5 = object.addFuseOperation();
myNode47_5.leftArg.set(myNode47_4);
myNode47_5.rightArg.set(myNode14);
const myNode47_6 = object.addFuseOperation();
myNode47_6.leftArg.set(myNode47_5);
myNode47_6.rightArg.set(myNode24);
const myNode47_7 = object.addFuseOperation();
myNode47_7.leftArg.set(myNode47_6);
myNode47_7.rightArg.set(myNode36);
const myNode47_8 = object.addFuseOperation();
myNode47_8.leftArg.set(myNode47_7);
myNode47_8.rightArg.set(myNode39);
myNode47 = object.addFuseOperation();
myNode47.leftArg.set(myNode47_8);
myNode47.rightArg.set(myNode46);

/* définition du node n°48*/
const myNode48 = object.addBox();
myNode48.point1.set(-3.59995,-5.99995,-2.39995);
myNode48.point2.set(7.1999,11.9999,4.7999);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);

/* définition du node n°49*/
const myNode49 = object.addCommonOperation();
myNode49.leftArg.set(myNode47);
myNode49.rightArg.set(myNode48);
/*END Geometry Object Definition*/