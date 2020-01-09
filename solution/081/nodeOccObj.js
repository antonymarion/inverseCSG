/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addCylinder();
myNode0.point1.set(1.602,-2.868,-1.1149);
myNode0.point2.set(1.602,-2.868,1.2229);
myNode0.radius.set(0.103);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode0.innerRotation.angle.set(90.0002104591497);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-1.1149,2.8561,0.3361);
myNode1.point2.set(1.2229,2.9699,1.5989);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode1.innerRotation.angle.set(179.9998479605043);
myNode1.innerTranslation.vector.set(0,0,0);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-1.7629,0.4551,0.3361);
myNode2.point2.set(-0.6830999999999998,2.8558999999999997,1.7079);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode2.innerRotation.angle.set(179.9998479605043);
myNode2.innerTranslation.vector.set(0,0,0);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addBox();
myNode3.point1.set(-1.1149,1.0811,0.3361);
myNode3.point2.set(1.2229,2.8559,1.7079);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode3.innerRotation.angle.set(179.9998479605043);
myNode3.innerTranslation.vector.set(0,0,0);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4_1 = myNode0.clone();
myNode4_1.isVisible = false;
const myNode4_2 = object.addFuseOperation();
myNode4_2.leftArg.set(myNode4_1);
myNode4_2.rightArg.set(myNode1);
myNode4_2.isVisible = false;
const myNode4_3 = object.addFuseOperation();
myNode4_3.leftArg.set(myNode4_2);
myNode4_3.rightArg.set(myNode2);
myNode4_3.isVisible = false;
myNode4 = object.addFuseOperation();
myNode4.leftArg.set(myNode4_3);
myNode4.rightArg.set(myNode3);
myNode4.isVisible = false;
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(-1.413,-2.323,-1.70795);
myNode5.point2.set(-1.413,-2.323,18.09995);
myNode5.radius.set(0.594);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addBox();
myNode6.point1.set(-1.76295,1.08105,0.76305);
myNode6.point2.set(-0.6830499999999999,2.85595,1.37295);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode6.innerRotation.angle.set(179.9998479605043);
myNode6.innerTranslation.vector.set(0,0,0);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addCylinder();
myNode7.point1.set(0.335,-0.548,-2.96995);
myNode7.point2.set(0.335,-0.548,-1.4400499999999998);
myNode7.radius.set(0.134);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode7.innerRotation.angle.set(119.9998447624254);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addCylinder();
myNode8.point1.set(-1.415,-0.001,-1.70795);
myNode8.point2.set(-1.415,-0.001,18.09995);
myNode8.radius.set(0.892);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9_1 = myNode5.clone();
myNode9_1.isVisible = false;
const myNode9_2 = object.addFuseOperation();
myNode9_2.leftArg.set(myNode9_1);
myNode9_2.rightArg.set(myNode6);
myNode9_2.isVisible = false;
const myNode9_3 = object.addFuseOperation();
myNode9_3.leftArg.set(myNode9_2);
myNode9_3.rightArg.set(myNode7);
myNode9_3.isVisible = false;
myNode9 = object.addFuseOperation();
myNode9.leftArg.set(myNode9_3);
myNode9.rightArg.set(myNode8);
myNode9.isVisible = false;
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addCutOperation();
myNode10.leftArg.set(myNode4);
myNode10.rightArg.set(myNode9);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addCylinder();
myNode11.point1.set(3.486,-1.627,-18.0999);
myNode11.point2.set(3.486,-1.627,1.2228999999999992);
myNode11.radius.set(0.135);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode11.innerRotation.angle.set(89.99978954085029);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(3.486,-1.627,1.7091);
myNode12.point2.set(3.486,-1.627,1.7629000000000001);
myNode12.radius.set(0.135);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode12.innerRotation.angle.set(89.99978954085029);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addCommonOperation();
myNode13.leftArg.set(myNode11);
myNode13.rightArg.set(myNode12);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addBox();
myNode14.point1.set(-1.7629,0.4551,0.7631);
myNode14.point2.set(-0.6830999999999998,2.8558999999999997,1.3729);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode14.innerRotation.angle.set(179.9998479605043);
myNode14.innerTranslation.vector.set(0,0,0);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addBox();
myNode15.point1.set(-1.76295,0.45505,0.92905);
myNode15.point2.set(-1.4130500000000001,1.08095,1.0199500000000001);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode15.innerRotation.angle.set(179.9998479605043);
myNode15.innerTranslation.vector.set(0,0,0);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addCutOperation();
myNode16.leftArg.set(myNode14);
myNode16.rightArg.set(myNode15);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addCylinder();
myNode17.point1.set(1.021,-1.352,-1.76295);
myNode17.point2.set(1.021,-1.352,-1.2220499999999999);
myNode17.radius.set(0.253);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode17.innerRotation.angle.set(89.99978954085029);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(-1.42,-0.002,-1.59895);
myNode18.point2.set(-1.42,-0.002,-0.7630500000000001);
myNode18.radius.set(0.68);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addCylinder();
myNode19.point1.set(1.022,-1.353,-1.22195);
myNode19.point2.set(1.022,-1.353,18.09995);
myNode19.radius.set(0.189);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode19.innerRotation.angle.set(89.99978954085029);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20_1 = myNode17.clone();
myNode20_1.isVisible = false;
const myNode20_2 = object.addFuseOperation();
myNode20_2.leftArg.set(myNode20_1);
myNode20_2.rightArg.set(myNode18);
myNode20_2.isVisible = false;
myNode20 = object.addFuseOperation();
myNode20.leftArg.set(myNode20_2);
myNode20.rightArg.set(myNode19);
myNode20.isVisible = false;
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addCutOperation();
myNode21.leftArg.set(myNode16);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addCylinder();
myNode22.point1.set(-1.413,-2.323,-1.37295);
myNode22.point2.set(-1.413,-2.323,-0.7630499999999999);
myNode22.radius.set(0.594);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(0.0,0.0,0.0);
myNode22.innerRotation.angle.set(0.0);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addCutOperation();
myNode23.leftArg.set(myNode21);
myNode23.rightArg.set(myNode22);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addCylinder();
myNode24.point1.set(-4.255,0.589,1.4931);
myNode24.point2.set(-4.255,0.589,1.7629000000000001);
myNode24.radius.set(0.254);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode24.innerRotation.angle.set(89.99978954085029);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addCylinder();
myNode25.point1.set(-4.254,0.588,1.49305);
myNode25.point2.set(-4.254,0.588,1.76295);
myNode25.radius.set(0.189);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode25.innerRotation.angle.set(89.99978954085029);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addCutOperation();
myNode26.leftArg.set(myNode24);
myNode26.rightArg.set(myNode25);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addBox();
myNode27.point1.set(1.2231,-2.9689,-1.6019);
myNode27.point2.set(1.7629000000000001,-0.8771,4.9999);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode27.innerRotation.angle.set(179.9998479605043);
myNode27.innerTranslation.vector.set(0,0,0);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addBox();
myNode28.point1.set(-1.2219,-2.8619,-18.0999);
myNode28.point2.set(1.2219,-1.0791,1.7078999999999986);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode28.innerRotation.angle.set(179.9998479605043);
myNode28.innerTranslation.vector.set(0,0,0);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addBox();
myNode29.point1.set(-1.7629,-2.9689,0.5101);
myNode29.point2.set(1.7629,-2.8621,1.5989);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode29.innerRotation.angle.set(179.9998479605043);
myNode29.innerTranslation.vector.set(0,0,0);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30_1 = myNode27.clone();
myNode30_1.isVisible = false;
const myNode30_2 = object.addFuseOperation();
myNode30_2.leftArg.set(myNode30_1);
myNode30_2.rightArg.set(myNode28);
myNode30_2.isVisible = false;
myNode30 = object.addFuseOperation();
myNode30.leftArg.set(myNode30_2);
myNode30.rightArg.set(myNode29);
myNode30.isVisible = false;
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addBox();
myNode31.point1.set(-18.0999,-18.0999,0.3361);
myNode31.point2.set(18.0999,18.0999,18.099899999999998);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode31.innerRotation.angle.set(179.9998479605043);
myNode31.innerTranslation.vector.set(0,0,0);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addCylinder();
myNode32.point1.set(3.486,1.618,1.22305);
myNode32.point2.set(3.486,1.618,18.09995);
myNode32.radius.set(0.135);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode32.innerRotation.angle.set(89.99978954085029);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addCutOperation();
myNode33.leftArg.set(myNode31);
myNode33.rightArg.set(myNode32);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addCylinder();
myNode34.point1.set(1.176,-0.232,-18.1);
myNode34.point2.set(1.176,-0.232,18.099899999999998);
myNode34.radius.set(0.133);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(-0.03609661632946712,0.04378870199283992,1.3784735724079273);
myNode34.innerRotation.angle.set(79.04761728021418);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addCylinder();
myNode35.point1.set(1.021,1.35,-18.0999);
myNode35.point2.set(1.021,1.35,-0.6830000000000034);
myNode35.radius.set(0.189);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode35.innerRotation.angle.set(89.99978954085029);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addFuseOperation();
myNode36.leftArg.set(myNode34);
myNode36.rightArg.set(myNode35);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addCutOperation();
myNode37.leftArg.set(myNode33);
myNode37.rightArg.set(myNode36);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addCommonOperation();
myNode38.leftArg.set(myNode30);
myNode38.rightArg.set(myNode37);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addBox();
myNode39.point1.set(-0.3809,1.0811,0.3361);
myNode39.point2.set(1.2219,2.9699,1.5989);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode39.innerRotation.angle.set(179.9998479605043);
myNode39.innerTranslation.vector.set(0,0,0);
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addCylinder();
myNode40.point1.set(0.335,-0.548,-18.0999);
myNode40.point2.set(0.335,-0.548,0.8780000000000001);
myNode40.radius.set(0.134);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode40.innerRotation.angle.set(119.9998447624254);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41 = object.addCutOperation();
myNode41.leftArg.set(myNode39);
myNode41.rightArg.set(myNode40);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addCylinder();
myNode42.point1.set(0.449,-2.859,-0.3809);
myNode42.point2.set(0.449,-2.859,1.7618999999999998);
myNode42.radius.set(0.113);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(4.1682470084564275e-06,1.570792653585774,-4.1682470084564275e-06);
myNode42.innerRotation.angle.set(89.99978954125373);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addBox();
myNode43.point1.set(1.2231,-0.8779,-1.7069);
myNode43.point2.set(1.7629000000000001,2.8549,1.5989);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode43.innerRotation.angle.set(179.9998479605043);
myNode43.innerTranslation.vector.set(0,0,0);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44 = object.addFuseOperation();
myNode44.leftArg.set(myNode42);
myNode44.rightArg.set(myNode43);
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45 = object.addCylinder();
myNode45.point1.set(-0.53,-2.427,1.22305);
myNode45.point2.set(-0.53,-2.427,18.09995);
myNode45.radius.set(0.252);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode45.innerRotation.angle.set(89.99978954085029);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addCutOperation();
myNode46.leftArg.set(myNode44);
myNode46.rightArg.set(myNode45);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addCylinder();
myNode47.point1.set(-4.188,0.589,1.2231);
myNode47.point2.set(-4.188,0.589,1.7629000000000001);
myNode47.radius.set(0.811);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode47.innerRotation.angle.set(89.99978954085029);
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addCylinder();
myNode48.point1.set(-4.255,0.589,-18.0999);
myNode48.point2.set(-4.255,0.589,1.7629999999999981);
myNode48.radius.set(0.254);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode48.innerRotation.angle.set(89.99978954085029);
myNode48.isVisible = false;

/* définition du node n°49*/
const myNode49 = object.addCylinder();
myNode49.point1.set(-3.444,0.588,1.22305);
myNode49.point2.set(-3.444,0.588,1.76295);
myNode49.radius.set(0.271);
myNode49.innerRotation.center.set(0,0,0);
myNode49.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode49.innerRotation.angle.set(89.99978954085029);
myNode49.isVisible = false;

/* définition du node n°50*/
const myNode50 = object.addFuseOperation();
myNode50.leftArg.set(myNode48);
myNode50.rightArg.set(myNode49);
myNode50.isVisible = false;

/* définition du node n°51*/
const myNode51 = object.addCutOperation();
myNode51.leftArg.set(myNode47);
myNode51.rightArg.set(myNode50);
myNode51.isVisible = false;

/* définition du node n°52*/
const myNode52 = object.addBox();
myNode52.point1.set(-1.7629,-2.8619,0.7631);
myNode52.point2.set(1.7629,1.4399000000000002,1.7079);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode52.innerRotation.angle.set(179.9998479605043);
myNode52.innerTranslation.vector.set(0,0,0);
myNode52.isVisible = false;

/* définition du node n°53*/
const myNode53 = object.addCylinder();
myNode53.point1.set(1.019,1.349,-18.0999);
myNode53.point2.set(1.019,1.349,-0.6830000000000034);
myNode53.radius.set(0.253);
myNode53.innerRotation.center.set(0,0,0);
myNode53.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode53.innerRotation.angle.set(89.99978954085029);
myNode53.isVisible = false;

/* définition du node n°54*/
const myNode54 = object.addBox();
myNode54.point1.set(-1.76295,0.45505,-1.60195);
myNode54.point2.set(-0.6830499999999999,1.43995,1.37295);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode54.innerRotation.angle.set(179.9998479605043);
myNode54.innerTranslation.vector.set(0,0,0);
myNode54.isVisible = false;

/* définition du node n°55*/
const myNode55 = object.addCylinder();
myNode55.point1.set(-1.415,-0.001,-1.599);
myNode55.point2.set(-1.415,-0.001,-0.763);
myNode55.radius.set(0.892);
myNode55.innerRotation.center.set(0,0,0);
myNode55.innerRotation.axis.set(0.0,0.0,0.0);
myNode55.innerRotation.angle.set(0.0);
myNode55.isVisible = false;

/* définition du node n°56*/
const myNode56 = object.addCutOperation();
myNode56.leftArg.set(myNode54);
myNode56.rightArg.set(myNode55);
myNode56.isVisible = false;

/* définition du node n°57*/
const myNode57 = object.addCylinder();
myNode57.point1.set(-1.42,-0.002,-18.0999);
myNode57.point2.set(-1.42,-0.002,-0.7630000000000017);
myNode57.radius.set(0.68);
myNode57.innerRotation.center.set(0,0,0);
myNode57.innerRotation.axis.set(0.0,0.0,0.0);
myNode57.innerRotation.angle.set(0.0);
myNode57.isVisible = false;

/* définition du node n°58*/
const myNode58 = object.addBox();
myNode58.point1.set(-0.38095,-1.07895,0.51005);
myNode58.point2.set(1.22195,18.09995,4.999949999999999);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode58.innerRotation.angle.set(179.9998479605043);
myNode58.innerTranslation.vector.set(0,0,0);
myNode58.isVisible = false;

/* définition du node n°59*/
const myNode59 = object.addCylinder();
myNode59.point1.set(-1.415,-0.001,-1.70795);
myNode59.point2.set(-1.415,-0.001,-1.37305);
myNode59.radius.set(0.892);
myNode59.innerRotation.center.set(0,0,0);
myNode59.innerRotation.axis.set(0.0,0.0,0.0);
myNode59.innerRotation.angle.set(0.0);
myNode59.isVisible = false;

/* définition du node n°60*/
const myNode60 = object.addBox();
myNode60.point1.set(-1.76295,0.45505,-18.0999);
myNode60.point2.set(-1.2220499999999999,18.09995,5.0);
myNode60.innerRotation.center.set(0,0,0);
myNode60.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode60.innerRotation.angle.set(179.9998479605043);
myNode60.innerTranslation.vector.set(0,0,0);
myNode60.isVisible = false;

/* définition du node n°61*/
const myNode61 = object.addBox();
myNode61.point1.set(-18.1,-18.1,1.599);
myNode61.point2.set(-1.2220000000000013,1.4399999999999977,18.1);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode61.innerRotation.angle.set(179.9998479605043);
myNode61.innerTranslation.vector.set(0,0,0);
myNode61.isVisible = false;

/* définition du node n°62*/
const myNode62 = object.addCutOperation();
myNode62.leftArg.set(myNode60);
myNode62.rightArg.set(myNode61);
myNode62.isVisible = false;

/* définition du node n°63*/
const myNode63_1 = myNode53.clone();
myNode63_1.isVisible = false;
const myNode63_2 = object.addFuseOperation();
myNode63_2.leftArg.set(myNode63_1);
myNode63_2.rightArg.set(myNode56);
myNode63_2.isVisible = false;
const myNode63_3 = object.addFuseOperation();
myNode63_3.leftArg.set(myNode63_2);
myNode63_3.rightArg.set(myNode57);
myNode63_3.isVisible = false;
const myNode63_4 = object.addFuseOperation();
myNode63_4.leftArg.set(myNode63_3);
myNode63_4.rightArg.set(myNode58);
myNode63_4.isVisible = false;
const myNode63_5 = object.addFuseOperation();
myNode63_5.leftArg.set(myNode63_4);
myNode63_5.rightArg.set(myNode59);
myNode63_5.isVisible = false;
myNode63 = object.addFuseOperation();
myNode63.leftArg.set(myNode63_5);
myNode63.rightArg.set(myNode62);
myNode63.isVisible = false;
myNode63.isVisible = false;

/* définition du node n°64*/
const myNode64 = object.addCutOperation();
myNode64.leftArg.set(myNode52);
myNode64.rightArg.set(myNode63);
myNode64.isVisible = false;

/* définition du node n°65*/
const myNode65 = object.addBox();
myNode65.point1.set(-1.7629,-2.9689,0.3361);
myNode65.point2.set(-0.3811,1.4408999999999996,0.7629);
myNode65.innerRotation.center.set(0,0,0);
myNode65.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode65.innerRotation.angle.set(179.9998479605043);
myNode65.innerTranslation.vector.set(0,0,0);
myNode65.isVisible = false;

/* définition du node n°66*/
const myNode66 = object.addBox();
myNode66.point1.set(-18.0999,-0.87795,-1.60195);
myNode66.point2.set(-1.2220000000000013,18.099950000000003,1.5989499999999999);
myNode66.innerRotation.center.set(0,0,0);
myNode66.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode66.innerRotation.angle.set(179.9998479605043);
myNode66.innerTranslation.vector.set(0,0,0);
myNode66.isVisible = false;

/* définition du node n°67*/
const myNode67 = object.addCutOperation();
myNode67.leftArg.set(myNode65);
myNode67.rightArg.set(myNode66);
myNode67.isVisible = false;

/* définition du node n°68*/
const myNode68 = object.addCutOperation();
myNode68.leftArg.set(myNode67);
myNode68.rightArg.set(myNode8);
myNode68.isVisible = false;

/* définition du node n°69*/
const myNode69 = object.addCylinder();
myNode69.point1.set(0.439,2.863,-0.3809);
myNode69.point2.set(0.439,2.863,1.2219);
myNode69.radius.set(0.104);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(4.1682470084564275e-06,1.570792653585774,-4.1682470084564275e-06);
myNode69.innerRotation.angle.set(89.99978954125373);
myNode69.isVisible = false;

/* définition du node n°70*/
const myNode70 = object.addBox();
myNode70.point1.set(1.2231,-2.1009,-2.4049);
myNode70.point2.set(1.7629000000000001,0.5098999999999996,1.3999000000000001);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode70.innerRotation.angle.set(90.0002104591497);
myNode70.innerTranslation.vector.set(0,0,0);
myNode70.isVisible = false;

/* définition du node n°71*/
const myNode71 = object.addCutOperation();
myNode71.leftArg.set(myNode70);
myNode71.rightArg.set(myNode45);
myNode71.isVisible = false;

/* définition du node n°72*/
const myNode72 = object.addBox();
myNode72.point1.set(1.2231,-18.0999,0.8781);
myNode72.point2.set(1.7629000000000001,18.0999,18.0999);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode72.innerRotation.angle.set(90.0002104591497);
myNode72.innerTranslation.vector.set(0,0,0);
myNode72.isVisible = false;

/* définition du node n°73*/
const myNode73 = object.addCylinder();
myNode73.point1.set(-0.528,1.783,-18.0999);
myNode73.point2.set(-0.528,1.783,18.099999999999998);
myNode73.radius.set(0.25);
myNode73.innerRotation.center.set(0,0,0);
myNode73.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode73.innerRotation.angle.set(89.99978954085029);
myNode73.isVisible = false;

/* définition du node n°74*/
const myNode74 = object.addCutOperation();
myNode74.leftArg.set(myNode72);
myNode74.rightArg.set(myNode73);
myNode74.isVisible = false;

/* définition du node n°75*/
const myNode75 = object.addFuseOperation();
myNode75.leftArg.set(myNode71);
myNode75.rightArg.set(myNode74);
myNode75.isVisible = false;

/* définition du node n°76*/
const myNode76 = object.addCylinder();
myNode76.point1.set(-1.921,1.608,-18.0999);
myNode76.point2.set(-1.921,1.608,1.7629999999999981);
myNode76.radius.set(0.209);
myNode76.innerRotation.center.set(0,0,0);
myNode76.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode76.innerRotation.angle.set(89.99978954125373);
myNode76.isVisible = false;

/* définition du node n°77*/
const myNode77 = object.addCutOperation();
myNode77.leftArg.set(myNode75);
myNode77.rightArg.set(myNode76);
myNode77.isVisible = false;

/* définition du node n°78*/
const myNode78 = object.addBox();
myNode78.point1.set(-18.0999,-1.7069,-2.4049);
myNode78.point2.set(1.7628999999999984,0.5099,2.9698999999999995);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode78.innerRotation.angle.set(90.0002104591497);
myNode78.innerTranslation.vector.set(0,0,0);
myNode78.isVisible = false;

/* définition du node n°79*/
const myNode79 = object.addBox();
myNode79.point1.set(-18.0999,-1.9219,0.8781);
myNode79.point2.set(1.7628999999999984,-1.7071,1.6179000000000001);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode79.innerRotation.angle.set(90.0002104591497);
myNode79.innerTranslation.vector.set(0,0,0);
myNode79.isVisible = false;

/* définition du node n°80*/
const myNode80 = object.addBox();
myNode80.point1.set(1.2231,-4.2549,-0.2209);
myNode80.point2.set(1.7629000000000001,-1.7071,1.3999);
myNode80.innerRotation.center.set(0,0,0);
myNode80.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode80.innerRotation.angle.set(90.0002104591497);
myNode80.innerTranslation.vector.set(0,0,0);
myNode80.isVisible = false;

/* définition du node n°81*/
const myNode81 = object.addCylinder();
myNode81.point1.set(-2.101,0.589,1.22305);
myNode81.point2.set(-2.101,0.589,1.76295);
myNode81.radius.set(0.273);
myNode81.innerRotation.center.set(0,0,0);
myNode81.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode81.innerRotation.angle.set(89.99978954085029);
myNode81.isVisible = false;

/* définition du node n°82*/
const myNode82 = object.addCutOperation();
myNode82.leftArg.set(myNode80);
myNode82.rightArg.set(myNode81);
myNode82.isVisible = false;

/* définition du node n°83*/
const myNode83 = object.addBox();
myNode83.point1.set(1.2231,-1.9219,-0.4549);
myNode83.point2.set(1.7089,0.5099,-0.22110000000000002);
myNode83.innerRotation.center.set(0,0,0);
myNode83.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode83.innerRotation.angle.set(90.0002104591497);
myNode83.innerTranslation.vector.set(0,0,0);
myNode83.isVisible = false;

/* définition du node n°84*/
const myNode84 = object.addCylinder();
myNode84.point1.set(-1.922,-0.439,1.22305);
myNode84.point2.set(-1.922,-0.439,1.76295);
myNode84.radius.set(0.217);
myNode84.innerRotation.center.set(0,0,0);
myNode84.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode84.innerRotation.angle.set(89.99978954085029);
myNode84.isVisible = false;

/* définition du node n°85*/
const myNode85 = object.addCutOperation();
myNode85.leftArg.set(myNode83);
myNode85.rightArg.set(myNode84);
myNode85.isVisible = false;

/* définition du node n°86*/
const myNode86_1 = myNode78.clone();
myNode86_1.isVisible = false;
const myNode86_2 = object.addFuseOperation();
myNode86_2.leftArg.set(myNode86_1);
myNode86_2.rightArg.set(myNode79);
myNode86_2.isVisible = false;
const myNode86_3 = object.addFuseOperation();
myNode86_3.leftArg.set(myNode86_2);
myNode86_3.rightArg.set(myNode82);
myNode86_3.isVisible = false;
myNode86 = object.addFuseOperation();
myNode86.leftArg.set(myNode86_3);
myNode86.rightArg.set(myNode85);
myNode86.isVisible = false;
myNode86.isVisible = false;

/* définition du node n°87*/
const myNode87 = object.addCommonOperation();
myNode87.leftArg.set(myNode77);
myNode87.rightArg.set(myNode86);
myNode87.isVisible = false;

/* définition du node n°88*/
const myNode88 = object.addBox();
myNode88.point1.set(1.2231,-2.9689,-1.6019);
myNode88.point2.set(1.7629000000000001,-1.0791000000000002,0.3369);
myNode88.innerRotation.center.set(0,0,0);
myNode88.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode88.innerRotation.angle.set(179.9998479605043);
myNode88.innerTranslation.vector.set(0,0,0);
myNode88.isVisible = false;

/* définition du node n°89*/
const myNode89 = object.addCylinder();
myNode89.point1.set(-0.528,1.783,-18.0999);
myNode89.point2.set(-0.528,1.783,1.7629999999999981);
myNode89.radius.set(0.25);
myNode89.innerRotation.center.set(0,0,0);
myNode89.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode89.innerRotation.angle.set(89.99978954085029);
myNode89.isVisible = false;

/* définition du node n°90*/
const myNode90 = object.addCutOperation();
myNode90.leftArg.set(myNode88);
myNode90.rightArg.set(myNode89);
myNode90.isVisible = false;

/* définition du node n°91*/
const myNode91 = object.addBox();
myNode91.point1.set(1.2231,2.8561,-1.6019);
myNode91.point2.set(1.7629000000000001,2.9699,1.7079);
myNode91.innerRotation.center.set(0,0,0);
myNode91.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode91.innerRotation.angle.set(179.9998479605043);
myNode91.innerTranslation.vector.set(0,0,0);
myNode91.isVisible = false;

/* définition du node n°92*/
const myNode92 = object.addCylinder();
myNode92.point1.set(1.599,2.862,-1.7629);
myNode92.point2.set(1.599,2.862,1.2228999999999999);
myNode92.radius.set(0.107);
myNode92.innerRotation.center.set(0,0,0);
myNode92.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode92.innerRotation.angle.set(90.0002104591497);
myNode92.isVisible = false;

/* définition du node n°93*/
const myNode93 = object.addCylinder();
myNode93.point1.set(-0.528,1.783,1.7091);
myNode93.point2.set(-0.528,1.783,1.7629000000000001);
myNode93.radius.set(0.25);
myNode93.innerRotation.center.set(0,0,0);
myNode93.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode93.innerRotation.angle.set(89.99978954085029);
myNode93.isVisible = false;

/* définition du node n°94*/
const myNode94 = object.addCylinder();
myNode94.point1.set(-0.531,1.781,1.22305);
myNode94.point2.set(-0.531,1.781,1.76295);
myNode94.radius.set(0.161);
myNode94.innerRotation.center.set(0,0,0);
myNode94.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode94.innerRotation.angle.set(89.99978954085029);
myNode94.isVisible = false;

/* définition du node n°95*/
const myNode95 = object.addCutOperation();
myNode95.leftArg.set(myNode93);
myNode95.rightArg.set(myNode94);
myNode95.isVisible = false;

/* définition du node n°96*/
const myNode96 = object.addBox();
myNode96.point1.set(1.2231,-4.2549,-0.2209);
myNode96.point2.set(1.7629000000000001,-2.1011,0.31889999999999996);
myNode96.innerRotation.center.set(0,0,0);
myNode96.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode96.innerRotation.angle.set(90.0002104591497);
myNode96.innerTranslation.vector.set(0,0,0);
myNode96.isVisible = false;

/* définition du node n°97*/
const myNode97 = object.addCylinder();
myNode97.point1.set(-1.591,-2.856,1.2231);
myNode97.point2.set(-1.591,-2.856,1.7629000000000001);
myNode97.radius.set(0.116);
myNode97.innerRotation.center.set(0,0,0);
myNode97.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode97.innerRotation.angle.set(90.0002104591497);
myNode97.isVisible = false;

/* définition du node n°98*/
const myNode98 = object.addBox();
myNode98.point1.set(1.2231,-18.0999,1.7081);
myNode98.point2.set(1.7629000000000001,2.969899999999999,4.9999);
myNode98.innerRotation.center.set(0,0,0);
myNode98.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode98.innerRotation.angle.set(179.9998479605043);
myNode98.innerTranslation.vector.set(0,0,0);
myNode98.isVisible = false;

/* définition du node n°99*/
const myNode99 = object.addCylinder();
myNode99.point1.set(3.486,1.618,-18.0999);
myNode99.point2.set(3.486,1.618,18.099999999999998);
myNode99.radius.set(0.135);
myNode99.innerRotation.center.set(0,0,0);
myNode99.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode99.innerRotation.angle.set(89.99978954085029);
myNode99.isVisible = false;

/* définition du node n°100*/
const myNode100 = object.addCutOperation();
myNode100.leftArg.set(myNode98);
myNode100.rightArg.set(myNode99);
myNode100.isVisible = false;

/* définition du node n°101*/
const myNode101 = object.addCylinder();
myNode101.point1.set(3.486,-1.627,-18.0999);
myNode101.point2.set(3.486,-1.627,18.099999999999998);
myNode101.radius.set(0.135);
myNode101.innerRotation.center.set(0,0,0);
myNode101.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode101.innerRotation.angle.set(89.99978954085029);
myNode101.isVisible = false;

/* définition du node n°102*/
const myNode102 = object.addCylinder();
myNode102.point1.set(4.669,-0.067,-18.0999);
myNode102.point2.set(4.669,-0.067,1.7089999999999996);
myNode102.radius.set(0.251);
myNode102.innerRotation.center.set(0,0,0);
myNode102.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode102.innerRotation.angle.set(89.99978954085029);
myNode102.isVisible = false;

/* définition du node n°103*/
const myNode103 = object.addFuseOperation();
myNode103.leftArg.set(myNode101);
myNode103.rightArg.set(myNode102);
myNode103.isVisible = false;

/* définition du node n°104*/
const myNode104 = object.addCutOperation();
myNode104.leftArg.set(myNode100);
myNode104.rightArg.set(myNode103);
myNode104.isVisible = false;

/* définition du node n°105*/
const myNode105 = object.addCylinder();
myNode105.point1.set(4.668,-0.066,1.70905);
myNode105.point2.set(4.668,-0.066,18.09995);
myNode105.radius.set(0.162);
myNode105.innerRotation.center.set(0,0,0);
myNode105.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode105.innerRotation.angle.set(89.99978954085029);
myNode105.isVisible = false;

/* définition du node n°106*/
const myNode106 = object.addCutOperation();
myNode106.leftArg.set(myNode104);
myNode106.rightArg.set(myNode105);
myNode106.isVisible = false;

/* définition du node n°107*/
const myNode107 = object.addBox();
myNode107.point1.set(-18.0999,-18.0999,-18.1);
myNode107.point2.set(18.099999999999998,-2.862000000000002,18.099899999999998);
myNode107.innerRotation.center.set(0,0,0);
myNode107.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode107.innerRotation.angle.set(179.9998479605043);
myNode107.innerTranslation.vector.set(0,0,0);
myNode107.isVisible = false;

/* définition du node n°108*/
const myNode108 = object.addCutOperation();
myNode108.leftArg.set(myNode106);
myNode108.rightArg.set(myNode107);
myNode108.isVisible = false;

/* définition du node n°109*/
const myNode109 = object.addBox();
myNode109.point1.set(-0.3809,1.0811,-1.6019);
myNode109.point2.set(1.7618999999999998,2.8559,1.7079);
myNode109.innerRotation.center.set(0,0,0);
myNode109.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode109.innerRotation.angle.set(179.9998479605043);
myNode109.innerTranslation.vector.set(0,0,0);
myNode109.isVisible = false;

/* définition du node n°110*/
const myNode110 = object.addBox();
myNode110.point1.set(-0.38095,1.08105,-1.60195);
myNode110.point2.set(1.7079500000000003,2.85595,1.5989499999999999);
myNode110.innerRotation.center.set(0,0,0);
myNode110.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode110.innerRotation.angle.set(179.9998479605043);
myNode110.innerTranslation.vector.set(0,0,0);
myNode110.isVisible = false;

/* définition du node n°111*/
const myNode111 = object.addCylinder();
myNode111.point1.set(-0.53,-2.429,1.70905);
myNode111.point2.set(-0.53,-2.429,1.76295);
myNode111.radius.set(0.16);
myNode111.innerRotation.center.set(0,0,0);
myNode111.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode111.innerRotation.angle.set(89.99978954085029);
myNode111.isVisible = false;

/* définition du node n°112*/
const myNode112 = object.addFuseOperation();
myNode112.leftArg.set(myNode110);
myNode112.rightArg.set(myNode111);
myNode112.isVisible = false;

/* définition du node n°113*/
const myNode113 = object.addCutOperation();
myNode113.leftArg.set(myNode109);
myNode113.rightArg.set(myNode112);
myNode113.isVisible = false;

/* définition du node n°114*/
const myNode114 = object.addBox();
myNode114.point1.set(-0.3809,2.4051,0.3361);
myNode114.point2.set(1.7079,2.8548999999999998,1.5989);
myNode114.innerRotation.center.set(0,0,0);
myNode114.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode114.innerRotation.angle.set(179.9998479605043);
myNode114.innerTranslation.vector.set(0,0,0);
myNode114.isVisible = false;

/* définition du node n°115*/
const myNode115 = object.addCylinder();
myNode115.point1.set(2.377,-0.837,-18.0999);
myNode115.point2.set(2.377,-0.837,18.099999999999998);
myNode115.radius.set(0.157);
myNode115.innerRotation.center.set(0,0,0);
myNode115.innerRotation.axis.set(-1.97304786885883,2.230125709098186,0.2073791021297825);
myNode115.innerRotation.angle.set(171.01983670619848);
myNode115.isVisible = false;

/* définition du node n°116*/
const myNode116 = object.addCutOperation();
myNode116.leftArg.set(myNode114);
myNode116.rightArg.set(myNode115);
myNode116.isVisible = false;

/* définition du node n°117*/
const myNode117_1 = myNode10.clone();
myNode117_1.isVisible = false;
const myNode117_2 = object.addFuseOperation();
myNode117_2.leftArg.set(myNode117_1);
myNode117_2.rightArg.set(myNode13);
myNode117_2.isVisible = false;
const myNode117_3 = object.addFuseOperation();
myNode117_3.leftArg.set(myNode117_2);
myNode117_3.rightArg.set(myNode23);
myNode117_3.isVisible = false;
const myNode117_4 = object.addFuseOperation();
myNode117_4.leftArg.set(myNode117_3);
myNode117_4.rightArg.set(myNode26);
myNode117_4.isVisible = false;
const myNode117_5 = object.addFuseOperation();
myNode117_5.leftArg.set(myNode117_4);
myNode117_5.rightArg.set(myNode38);
myNode117_5.isVisible = false;
const myNode117_6 = object.addFuseOperation();
myNode117_6.leftArg.set(myNode117_5);
myNode117_6.rightArg.set(myNode41);
myNode117_6.isVisible = false;
const myNode117_7 = object.addFuseOperation();
myNode117_7.leftArg.set(myNode117_6);
myNode117_7.rightArg.set(myNode46);
myNode117_7.isVisible = false;
const myNode117_8 = object.addFuseOperation();
myNode117_8.leftArg.set(myNode117_7);
myNode117_8.rightArg.set(myNode51);
myNode117_8.isVisible = false;
const myNode117_9 = object.addFuseOperation();
myNode117_9.leftArg.set(myNode117_8);
myNode117_9.rightArg.set(myNode64);
myNode117_9.isVisible = false;
const myNode117_10 = object.addFuseOperation();
myNode117_10.leftArg.set(myNode117_9);
myNode117_10.rightArg.set(myNode68);
myNode117_10.isVisible = false;
const myNode117_11 = object.addFuseOperation();
myNode117_11.leftArg.set(myNode117_10);
myNode117_11.rightArg.set(myNode69);
myNode117_11.isVisible = false;
const myNode117_12 = object.addFuseOperation();
myNode117_12.leftArg.set(myNode117_11);
myNode117_12.rightArg.set(myNode87);
myNode117_12.isVisible = false;
const myNode117_13 = object.addFuseOperation();
myNode117_13.leftArg.set(myNode117_12);
myNode117_13.rightArg.set(myNode90);
myNode117_13.isVisible = false;
const myNode117_14 = object.addFuseOperation();
myNode117_14.leftArg.set(myNode117_13);
myNode117_14.rightArg.set(myNode91);
myNode117_14.isVisible = false;
const myNode117_15 = object.addFuseOperation();
myNode117_15.leftArg.set(myNode117_14);
myNode117_15.rightArg.set(myNode92);
myNode117_15.isVisible = false;
const myNode117_16 = object.addFuseOperation();
myNode117_16.leftArg.set(myNode117_15);
myNode117_16.rightArg.set(myNode95);
myNode117_16.isVisible = false;
const myNode117_17 = object.addFuseOperation();
myNode117_17.leftArg.set(myNode117_16);
myNode117_17.rightArg.set(myNode96);
myNode117_17.isVisible = false;
const myNode117_18 = object.addFuseOperation();
myNode117_18.leftArg.set(myNode117_17);
myNode117_18.rightArg.set(myNode97);
myNode117_18.isVisible = false;
const myNode117_19 = object.addFuseOperation();
myNode117_19.leftArg.set(myNode117_18);
myNode117_19.rightArg.set(myNode108);
myNode117_19.isVisible = false;
const myNode117_20 = object.addFuseOperation();
myNode117_20.leftArg.set(myNode117_19);
myNode117_20.rightArg.set(myNode113);
myNode117_20.isVisible = false;
myNode117 = object.addFuseOperation();
myNode117.leftArg.set(myNode117_20);
myNode117.rightArg.set(myNode116);
myNode117.isVisible = false;
myNode117.isVisible = false;

/* définition du node n°118*/
const myNode118 = object.addBox();
myNode118.point1.set(-2.1159,-3.5649,-5.9999);
myNode118.point2.set(2.1149000000000004,3.5639,5.9999);
myNode118.innerRotation.center.set(0,0,0);
myNode118.innerRotation.axis.set(0.0,0.0,0.0);
myNode118.innerRotation.angle.set(0.0);
myNode118.innerTranslation.vector.set(0,0,0);
myNode118.isVisible = false;

/* définition du node n°119*/
const myNode119 = object.addCommonOperation();
myNode119.leftArg.set(myNode117);
myNode119.rightArg.set(myNode118);
myNode119.isVisible = true;


/*END Geometry Object Definition*/