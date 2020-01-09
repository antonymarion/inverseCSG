/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-2.1159,-3.5649,-5.9999);
myNode0.point2.set(2.1149000000000004,3.5639,5.9999);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(-0.0004999999999997229,-0.000500000000000167,0.0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(1.2231,-2.9689,-1.6019);
myNode1.point2.set(1.7629000000000001,-1.0791000000000002,0.3369);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode1.innerRotation.angle.set(179.9998479605043);
myNode1.innerTranslation.vector.set(1.493,-2.024,-0.6325000000000001);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(-0.528,1.783,-18.0999);
myNode2.point2.set(-0.528,1.783,1.7629999999999981);
myNode2.radius.set(0.25);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode2.innerRotation.angle.set(89.99978954085029);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addCutOperation();
myNode3.leftArg.set(myNode1);
myNode3.rightArg.set(myNode2);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addBox();
myNode4.point1.set(-1.7629,0.4551,0.7631);
myNode4.point2.set(-0.6830999999999998,2.8558999999999997,1.3729);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode4.innerRotation.angle.set(179.9998479605043);
myNode4.innerTranslation.vector.set(-1.2229999999999999,1.6555,1.068);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addBox();
myNode5.point1.set(-1.76295,0.45505,0.92905);
myNode5.point2.set(-1.4130500000000001,1.08095,1.0199500000000001);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode5.innerRotation.angle.set(179.9998479605043);
myNode5.innerTranslation.vector.set(-1.588,0.768,0.9745);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addCutOperation();
myNode6.leftArg.set(myNode4);
myNode6.rightArg.set(myNode5);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addCylinder();
myNode7.point1.set(1.022,-1.353,-1.22195);
myNode7.point2.set(1.022,-1.353,18.09995);
myNode7.radius.set(0.189);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode7.innerRotation.angle.set(89.99978954085029);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addCylinder();
myNode8.point1.set(-1.42,-0.002,-1.59895);
myNode8.point2.set(-1.42,-0.002,-0.7630500000000001);
myNode8.radius.set(0.68);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addCylinder();
myNode9.point1.set(1.021,-1.352,-1.76295);
myNode9.point2.set(1.021,-1.352,-1.2220499999999999);
myNode9.radius.set(0.253);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode9.innerRotation.angle.set(89.99978954085029);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10_1 = myNode7.clone();
myNode10_1.isVisible = false;
const myNode10_2 = object.addFuseOperation();
myNode10_2.leftArg.set(myNode10_1);
myNode10_2.rightArg.set(myNode8);
myNode10_2.isVisible = false;
myNode10 = object.addFuseOperation();
myNode10.leftArg.set(myNode10_2);
myNode10.rightArg.set(myNode9);
myNode10.isVisible = false;
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addCutOperation();
myNode11.leftArg.set(myNode6);
myNode11.rightArg.set(myNode10);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(-1.413,-2.323,-1.37295);
myNode12.point2.set(-1.413,-2.323,-0.7630499999999999);
myNode12.radius.set(0.594);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addCutOperation();
myNode13.leftArg.set(myNode11);
myNode13.rightArg.set(myNode12);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addBox();
myNode14.point1.set(-18.0999,-18.0999,0.3361);
myNode14.point2.set(18.0999,18.0999,18.099899999999998);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode14.innerRotation.angle.set(179.9998479605043);
myNode14.innerTranslation.vector.set(0.0,0.0,9.218);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addCylinder();
myNode15.point1.set(3.486,1.618,1.22305);
myNode15.point2.set(3.486,1.618,18.09995);
myNode15.radius.set(0.135);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode15.innerRotation.angle.set(89.99978954085029);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addCutOperation();
myNode16.leftArg.set(myNode14);
myNode16.rightArg.set(myNode15);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addCylinder();
myNode17.point1.set(1.176,-0.232,-18.1);
myNode17.point2.set(1.176,-0.232,18.099899999999998);
myNode17.radius.set(0.133);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(-0.03609661632946712,0.04378870199283992,1.3784735724079273);
myNode17.innerRotation.angle.set(79.04761728021418);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(1.021,1.35,-18.0999);
myNode18.point2.set(1.021,1.35,-0.6830000000000034);
myNode18.radius.set(0.189);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode18.innerRotation.angle.set(89.99978954085029);
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
const myNode21 = object.addBox();
myNode21.point1.set(1.2231,-2.9689,-1.6019);
myNode21.point2.set(1.7629000000000001,-0.8771,4.9999);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode21.innerRotation.angle.set(179.9998479605043);
myNode21.innerTranslation.vector.set(1.493,-1.923,1.6989999999999998);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addBox();
myNode22.point1.set(-1.7629,-2.9689,0.5101);
myNode22.point2.set(1.7629,-2.8621,1.5989);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode22.innerRotation.angle.set(179.9998479605043);
myNode22.innerTranslation.vector.set(0.0,-2.9155,1.0545);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addBox();
myNode23.point1.set(-1.2219,-2.8619,-18.0999);
myNode23.point2.set(1.2219,-1.0791,1.7078999999999986);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode23.innerRotation.angle.set(179.9998479605043);
myNode23.innerTranslation.vector.set(0.0,-1.9705,-8.196000000000002);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24_1 = myNode21.clone();
myNode24_1.isVisible = false;
const myNode24_2 = object.addFuseOperation();
myNode24_2.leftArg.set(myNode24_1);
myNode24_2.rightArg.set(myNode22);
myNode24_2.isVisible = false;
myNode24 = object.addFuseOperation();
myNode24.leftArg.set(myNode24_2);
myNode24.rightArg.set(myNode23);
myNode24.isVisible = false;
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addCommonOperation();
myNode25.leftArg.set(myNode20);
myNode25.rightArg.set(myNode24);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addBox();
myNode26.point1.set(1.2231,2.8561,-1.6019);
myNode26.point2.set(1.7629000000000001,2.9699,1.7079);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode26.innerRotation.angle.set(179.9998479605043);
myNode26.innerTranslation.vector.set(1.493,2.9130000000000003,0.052999999999999936);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addBox();
myNode27.point1.set(1.2231,-18.0999,0.8781);
myNode27.point2.set(1.7629000000000001,18.0999,18.0999);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode27.innerRotation.angle.set(90.0002104591497);
myNode27.innerTranslation.vector.set(1.493,0.0,9.489);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addCylinder();
myNode28.point1.set(-0.528,1.783,-18.0999);
myNode28.point2.set(-0.528,1.783,18.099999999999998);
myNode28.radius.set(0.25);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode28.innerRotation.angle.set(89.99978954085029);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addCutOperation();
myNode29.leftArg.set(myNode27);
myNode29.rightArg.set(myNode28);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addBox();
myNode30.point1.set(1.2231,-2.1009,-2.4049);
myNode30.point2.set(1.7629000000000001,0.5098999999999996,1.3999000000000001);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode30.innerRotation.angle.set(90.0002104591497);
myNode30.innerTranslation.vector.set(1.493,-0.7955000000000003,-0.5025);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addCylinder();
myNode31.point1.set(-0.53,-2.427,1.22305);
myNode31.point2.set(-0.53,-2.427,18.09995);
myNode31.radius.set(0.252);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode31.innerRotation.angle.set(89.99978954085029);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addCutOperation();
myNode32.leftArg.set(myNode30);
myNode32.rightArg.set(myNode31);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addFuseOperation();
myNode33.leftArg.set(myNode29);
myNode33.rightArg.set(myNode32);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addCylinder();
myNode34.point1.set(-1.921,1.608,-18.0999);
myNode34.point2.set(-1.921,1.608,1.7629999999999981);
myNode34.radius.set(0.209);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode34.innerRotation.angle.set(89.99978954125373);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addCutOperation();
myNode35.leftArg.set(myNode33);
myNode35.rightArg.set(myNode34);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addBox();
myNode36.point1.set(-18.0999,-1.7069,-2.4049);
myNode36.point2.set(1.7628999999999984,0.5099,2.9698999999999995);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode36.innerRotation.angle.set(90.0002104591497);
myNode36.innerTranslation.vector.set(-8.168500000000002,-0.5985,0.28249999999999975);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addBox();
myNode37.point1.set(-18.0999,-1.9219,0.8781);
myNode37.point2.set(1.7628999999999984,-1.7071,1.6179000000000001);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode37.innerRotation.angle.set(90.0002104591497);
myNode37.innerTranslation.vector.set(-8.168500000000002,-1.8145,1.248);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addBox();
myNode38.point1.set(1.2231,-1.9219,-0.4549);
myNode38.point2.set(1.7089,0.5099,-0.22110000000000002);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode38.innerRotation.angle.set(90.0002104591497);
myNode38.innerTranslation.vector.set(1.4660000000000002,-0.706,-0.338);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addCylinder();
myNode39.point1.set(-1.922,-0.439,1.22305);
myNode39.point2.set(-1.922,-0.439,1.76295);
myNode39.radius.set(0.217);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode39.innerRotation.angle.set(89.99978954085029);
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addCutOperation();
myNode40.leftArg.set(myNode38);
myNode40.rightArg.set(myNode39);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41 = object.addBox();
myNode41.point1.set(1.2231,-4.2549,-0.2209);
myNode41.point2.set(1.7629000000000001,-1.7071,1.3999);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode41.innerRotation.angle.set(90.0002104591497);
myNode41.innerTranslation.vector.set(1.493,-2.981,0.5895);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addCylinder();
myNode42.point1.set(-2.101,0.589,1.22305);
myNode42.point2.set(-2.101,0.589,1.76295);
myNode42.radius.set(0.273);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode42.innerRotation.angle.set(89.99978954085029);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addCutOperation();
myNode43.leftArg.set(myNode41);
myNode43.rightArg.set(myNode42);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44_1 = myNode36.clone();
myNode44_1.isVisible = false;
const myNode44_2 = object.addFuseOperation();
myNode44_2.leftArg.set(myNode44_1);
myNode44_2.rightArg.set(myNode37);
myNode44_2.isVisible = false;
const myNode44_3 = object.addFuseOperation();
myNode44_3.leftArg.set(myNode44_2);
myNode44_3.rightArg.set(myNode40);
myNode44_3.isVisible = false;
myNode44 = object.addFuseOperation();
myNode44.leftArg.set(myNode44_3);
myNode44.rightArg.set(myNode43);
myNode44.isVisible = false;
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45 = object.addCommonOperation();
myNode45.leftArg.set(myNode35);
myNode45.rightArg.set(myNode44);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addBox();
myNode46.point1.set(-1.7629,-2.8619,0.7631);
myNode46.point2.set(1.7629,1.4399000000000002,1.7079);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode46.innerRotation.angle.set(179.9998479605043);
myNode46.innerTranslation.vector.set(0.0,-0.7109999999999999,1.2355);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addCylinder();
myNode47.point1.set(1.019,1.349,-18.0999);
myNode47.point2.set(1.019,1.349,-0.6830000000000034);
myNode47.radius.set(0.253);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode47.innerRotation.angle.set(89.99978954085029);
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addCylinder();
myNode48.point1.set(-1.415,-0.001,-1.70795);
myNode48.point2.set(-1.415,-0.001,-1.37305);
myNode48.radius.set(0.892);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);
myNode48.isVisible = false;

/* définition du node n°49*/
const myNode49 = object.addBox();
myNode49.point1.set(-0.38095,-1.07895,0.51005);
myNode49.point2.set(1.22195,18.09995,4.999949999999999);
myNode49.innerRotation.center.set(0,0,0);
myNode49.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode49.innerRotation.angle.set(179.9998479605043);
myNode49.innerTranslation.vector.set(0.4205,8.510499999999999,2.755);
myNode49.isVisible = false;

/* définition du node n°50*/
const myNode50 = object.addCylinder();
myNode50.point1.set(-1.42,-0.002,-18.0999);
myNode50.point2.set(-1.42,-0.002,-0.7630000000000017);
myNode50.radius.set(0.68);
myNode50.innerRotation.center.set(0,0,0);
myNode50.innerRotation.axis.set(0.0,0.0,0.0);
myNode50.innerRotation.angle.set(0.0);
myNode50.isVisible = false;

/* définition du node n°51*/
const myNode51 = object.addBox();
myNode51.point1.set(-1.76295,0.45505,-1.60195);
myNode51.point2.set(-0.6830499999999999,1.43995,1.37295);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode51.innerRotation.angle.set(179.9998479605043);
myNode51.innerTranslation.vector.set(-1.2229999999999999,0.9475,-0.11450000000000005);
myNode51.isVisible = false;

/* définition du node n°52*/
const myNode52 = object.addCylinder();
myNode52.point1.set(-1.415,-0.001,-1.599);
myNode52.point2.set(-1.415,-0.001,-0.763);
myNode52.radius.set(0.892);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,0.0,0.0);
myNode52.innerRotation.angle.set(0.0);
myNode52.isVisible = false;

/* définition du node n°53*/
const myNode53 = object.addCutOperation();
myNode53.leftArg.set(myNode51);
myNode53.rightArg.set(myNode52);
myNode53.isVisible = false;

/* définition du node n°54*/
const myNode54 = object.addBox();
myNode54.point1.set(-1.76295,0.45505,-18.0999);
myNode54.point2.set(-1.2220499999999999,18.09995,5.0);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode54.innerRotation.angle.set(179.9998479605043);
myNode54.innerTranslation.vector.set(-1.4925,9.2775,-6.549950000000001);
myNode54.isVisible = false;

/* définition du node n°55*/
const myNode55 = object.addBox();
myNode55.point1.set(-18.1,-18.1,1.599);
myNode55.point2.set(-1.2220000000000013,1.4399999999999977,18.1);
myNode55.innerRotation.center.set(0,0,0);
myNode55.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode55.innerRotation.angle.set(179.9998479605043);
myNode55.innerTranslation.vector.set(-9.661000000000001,-8.330000000000002,9.8495);
myNode55.isVisible = false;

/* définition du node n°56*/
const myNode56 = object.addCutOperation();
myNode56.leftArg.set(myNode54);
myNode56.rightArg.set(myNode55);
myNode56.isVisible = false;

/* définition du node n°57*/
const myNode57_1 = myNode47.clone();
myNode57_1.isVisible = false;
const myNode57_2 = object.addFuseOperation();
myNode57_2.leftArg.set(myNode57_1);
myNode57_2.rightArg.set(myNode48);
myNode57_2.isVisible = false;
const myNode57_3 = object.addFuseOperation();
myNode57_3.leftArg.set(myNode57_2);
myNode57_3.rightArg.set(myNode49);
myNode57_3.isVisible = false;
const myNode57_4 = object.addFuseOperation();
myNode57_4.leftArg.set(myNode57_3);
myNode57_4.rightArg.set(myNode50);
myNode57_4.isVisible = false;
const myNode57_5 = object.addFuseOperation();
myNode57_5.leftArg.set(myNode57_4);
myNode57_5.rightArg.set(myNode53);
myNode57_5.isVisible = false;
myNode57 = object.addFuseOperation();
myNode57.leftArg.set(myNode57_5);
myNode57.rightArg.set(myNode56);
myNode57.isVisible = false;
myNode57.isVisible = false;

/* définition du node n°58*/
const myNode58 = object.addCutOperation();
myNode58.leftArg.set(myNode46);
myNode58.rightArg.set(myNode57);
myNode58.isVisible = false;

/* définition du node n°59*/
const myNode59 = object.addCylinder();
myNode59.point1.set(1.599,2.862,-1.7629);
myNode59.point2.set(1.599,2.862,1.2228999999999999);
myNode59.radius.set(0.107);
myNode59.innerRotation.center.set(0,0,0);
myNode59.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode59.innerRotation.angle.set(90.0002104591497);
myNode59.isVisible = false;

/* définition du node n°60*/
const myNode60 = object.addBox();
myNode60.point1.set(-0.3809,1.0811,0.3361);
myNode60.point2.set(1.2219,2.9699,1.5989);
myNode60.innerRotation.center.set(0,0,0);
myNode60.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode60.innerRotation.angle.set(179.9998479605043);
myNode60.innerTranslation.vector.set(0.4205,2.0255,0.9675);
myNode60.isVisible = false;

/* définition du node n°61*/
const myNode61 = object.addCylinder();
myNode61.point1.set(0.335,-0.548,-18.0999);
myNode61.point2.set(0.335,-0.548,0.8780000000000001);
myNode61.radius.set(0.134);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode61.innerRotation.angle.set(119.9998447624254);
myNode61.isVisible = false;

/* définition du node n°62*/
const myNode62 = object.addCutOperation();
myNode62.leftArg.set(myNode60);
myNode62.rightArg.set(myNode61);
myNode62.isVisible = false;

/* définition du node n°63*/
const myNode63 = object.addBox();
myNode63.point1.set(-0.3809,1.0811,-1.6019);
myNode63.point2.set(1.7618999999999998,2.8559,1.7079);
myNode63.innerRotation.center.set(0,0,0);
myNode63.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode63.innerRotation.angle.set(179.9998479605043);
myNode63.innerTranslation.vector.set(0.6904999999999999,1.9685,0.052999999999999936);
myNode63.isVisible = false;

/* définition du node n°64*/
const myNode64 = object.addCylinder();
myNode64.point1.set(-0.53,-2.429,1.70905);
myNode64.point2.set(-0.53,-2.429,1.76295);
myNode64.radius.set(0.16);
myNode64.innerRotation.center.set(0,0,0);
myNode64.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode64.innerRotation.angle.set(89.99978954085029);
myNode64.isVisible = false;

/* définition du node n°65*/
const myNode65 = object.addBox();
myNode65.point1.set(-0.38095,1.08105,-1.60195);
myNode65.point2.set(1.7079500000000003,2.85595,1.5989499999999999);
myNode65.innerRotation.center.set(0,0,0);
myNode65.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode65.innerRotation.angle.set(179.9998479605043);
myNode65.innerTranslation.vector.set(0.6635000000000001,1.9685000000000001,-0.0015000000000000568);
myNode65.isVisible = false;

/* définition du node n°66*/
const myNode66 = object.addFuseOperation();
myNode66.leftArg.set(myNode64);
myNode66.rightArg.set(myNode65);
myNode66.isVisible = false;

/* définition du node n°67*/
const myNode67 = object.addCutOperation();
myNode67.leftArg.set(myNode63);
myNode67.rightArg.set(myNode66);
myNode67.isVisible = false;

/* définition du node n°68*/
const myNode68 = object.addBox();
myNode68.point1.set(1.2231,-4.2549,-0.2209);
myNode68.point2.set(1.7629000000000001,-2.1011,0.31889999999999996);
myNode68.innerRotation.center.set(0,0,0);
myNode68.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode68.innerRotation.angle.set(90.0002104591497);
myNode68.innerTranslation.vector.set(1.493,-3.178,0.04899999999999996);
myNode68.isVisible = false;

/* définition du node n°69*/
const myNode69 = object.addCylinder();
myNode69.point1.set(-4.255,0.589,1.4931);
myNode69.point2.set(-4.255,0.589,1.7629000000000001);
myNode69.radius.set(0.254);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode69.innerRotation.angle.set(89.99978954085029);
myNode69.isVisible = false;

/* définition du node n°70*/
const myNode70 = object.addCylinder();
myNode70.point1.set(-4.254,0.588,1.49305);
myNode70.point2.set(-4.254,0.588,1.76295);
myNode70.radius.set(0.189);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode70.innerRotation.angle.set(89.99978954085029);
myNode70.isVisible = false;

/* définition du node n°71*/
const myNode71 = object.addCutOperation();
myNode71.leftArg.set(myNode69);
myNode71.rightArg.set(myNode70);
myNode71.isVisible = false;

/* définition du node n°72*/
const myNode72 = object.addCylinder();
myNode72.point1.set(-0.528,1.783,1.7091);
myNode72.point2.set(-0.528,1.783,1.7629000000000001);
myNode72.radius.set(0.25);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode72.innerRotation.angle.set(89.99978954085029);
myNode72.isVisible = false;

/* définition du node n°73*/
const myNode73 = object.addCylinder();
myNode73.point1.set(-0.531,1.781,1.22305);
myNode73.point2.set(-0.531,1.781,1.76295);
myNode73.radius.set(0.161);
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
const myNode75 = object.addCylinder();
myNode75.point1.set(-1.591,-2.856,1.2231);
myNode75.point2.set(-1.591,-2.856,1.7629000000000001);
myNode75.radius.set(0.116);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode75.innerRotation.angle.set(90.0002104591497);
myNode75.isVisible = false;

/* définition du node n°76*/
const myNode76 = object.addBox();
myNode76.point1.set(-1.7629,0.4551,0.3361);
myNode76.point2.set(-0.6830999999999998,2.8558999999999997,1.7079);
myNode76.innerRotation.center.set(0,0,0);
myNode76.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode76.innerRotation.angle.set(179.9998479605043);
myNode76.innerTranslation.vector.set(-1.2229999999999999,1.6555,1.022);
myNode76.isVisible = false;

/* définition du node n°77*/
const myNode77 = object.addCylinder();
myNode77.point1.set(1.602,-2.868,-1.1149);
myNode77.point2.set(1.602,-2.868,1.2229);
myNode77.radius.set(0.103);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode77.innerRotation.angle.set(90.0002104591497);
myNode77.isVisible = false;

/* définition du node n°78*/
const myNode78 = object.addBox();
myNode78.point1.set(-1.1149,2.8561,0.3361);
myNode78.point2.set(1.2229,2.9699,1.5989);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode78.innerRotation.angle.set(179.9998479605043);
myNode78.innerTranslation.vector.set(0.05400000000000005,2.9130000000000003,0.9675);
myNode78.isVisible = false;

/* définition du node n°79*/
const myNode79 = object.addBox();
myNode79.point1.set(-1.1149,1.0811,0.3361);
myNode79.point2.set(1.2229,2.8559,1.7079);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode79.innerRotation.angle.set(179.9998479605043);
myNode79.innerTranslation.vector.set(0.05400000000000005,1.9685,1.022);
myNode79.isVisible = false;

/* définition du node n°80*/
const myNode80_1 = myNode76.clone();
myNode80_1.isVisible = false;
const myNode80_2 = object.addFuseOperation();
myNode80_2.leftArg.set(myNode80_1);
myNode80_2.rightArg.set(myNode77);
myNode80_2.isVisible = false;
const myNode80_3 = object.addFuseOperation();
myNode80_3.leftArg.set(myNode80_2);
myNode80_3.rightArg.set(myNode78);
myNode80_3.isVisible = false;
myNode80 = object.addFuseOperation();
myNode80.leftArg.set(myNode80_3);
myNode80.rightArg.set(myNode79);
myNode80.isVisible = false;
myNode80.isVisible = false;

/* définition du node n°81*/
const myNode81 = object.addCylinder();
myNode81.point1.set(-1.413,-2.323,-1.70795);
myNode81.point2.set(-1.413,-2.323,18.09995);
myNode81.radius.set(0.594);
myNode81.innerRotation.center.set(0,0,0);
myNode81.innerRotation.axis.set(0.0,0.0,0.0);
myNode81.innerRotation.angle.set(0.0);
myNode81.isVisible = false;

/* définition du node n°82*/
const myNode82 = object.addBox();
myNode82.point1.set(-1.76295,1.08105,0.76305);
myNode82.point2.set(-0.6830499999999999,2.85595,1.37295);
myNode82.innerRotation.center.set(0,0,0);
myNode82.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode82.innerRotation.angle.set(179.9998479605043);
myNode82.innerTranslation.vector.set(-1.2229999999999999,1.9685000000000001,1.068);
myNode82.isVisible = false;

/* définition du node n°83*/
const myNode83 = object.addCylinder();
myNode83.point1.set(0.335,-0.548,-2.96995);
myNode83.point2.set(0.335,-0.548,-1.4400499999999998);
myNode83.radius.set(0.134);
myNode83.innerRotation.center.set(0,0,0);
myNode83.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode83.innerRotation.angle.set(119.9998447624254);
myNode83.isVisible = false;

/* définition du node n°84*/
const myNode84 = object.addCylinder();
myNode84.point1.set(-1.415,-0.001,-1.70795);
myNode84.point2.set(-1.415,-0.001,18.09995);
myNode84.radius.set(0.892);
myNode84.innerRotation.center.set(0,0,0);
myNode84.innerRotation.axis.set(0.0,0.0,0.0);
myNode84.innerRotation.angle.set(0.0);
myNode84.isVisible = false;

/* définition du node n°85*/
const myNode85_1 = myNode81.clone();
myNode85_1.isVisible = false;
const myNode85_2 = object.addFuseOperation();
myNode85_2.leftArg.set(myNode85_1);
myNode85_2.rightArg.set(myNode82);
myNode85_2.isVisible = false;
const myNode85_3 = object.addFuseOperation();
myNode85_3.leftArg.set(myNode85_2);
myNode85_3.rightArg.set(myNode83);
myNode85_3.isVisible = false;
myNode85 = object.addFuseOperation();
myNode85.leftArg.set(myNode85_3);
myNode85.rightArg.set(myNode84);
myNode85.isVisible = false;
myNode85.isVisible = false;

/* définition du node n°86*/
const myNode86 = object.addCutOperation();
myNode86.leftArg.set(myNode80);
myNode86.rightArg.set(myNode85);
myNode86.isVisible = false;

/* définition du node n°87*/
const myNode87 = object.addBox();
myNode87.point1.set(-0.3809,2.4051,0.3361);
myNode87.point2.set(1.7079,2.8548999999999998,1.5989);
myNode87.innerRotation.center.set(0,0,0);
myNode87.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode87.innerRotation.angle.set(179.9998479605043);
myNode87.innerTranslation.vector.set(0.6635,2.63,0.9675);
myNode87.isVisible = false;

/* définition du node n°88*/
const myNode88 = object.addCylinder();
myNode88.point1.set(2.377,-0.837,-18.0999);
myNode88.point2.set(2.377,-0.837,18.099999999999998);
myNode88.radius.set(0.157);
myNode88.innerRotation.center.set(0,0,0);
myNode88.innerRotation.axis.set(-1.97304786885883,2.230125709098186,0.2073791021297825);
myNode88.innerRotation.angle.set(171.01983670619848);
myNode88.isVisible = false;

/* définition du node n°89*/
const myNode89 = object.addCutOperation();
myNode89.leftArg.set(myNode87);
myNode89.rightArg.set(myNode88);
myNode89.isVisible = false;

/* définition du node n°90*/
const myNode90 = object.addBox();
myNode90.point1.set(-1.7629,-2.9689,0.3361);
myNode90.point2.set(-0.3811,1.4408999999999996,0.7629);
myNode90.innerRotation.center.set(0,0,0);
myNode90.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode90.innerRotation.angle.set(179.9998479605043);
myNode90.innerTranslation.vector.set(-1.072,-0.7640000000000002,0.5495);
myNode90.isVisible = false;

/* définition du node n°91*/
const myNode91 = object.addBox();
myNode91.point1.set(-18.0999,-0.87795,-1.60195);
myNode91.point2.set(-1.2220000000000013,18.099950000000003,1.5989499999999999);
myNode91.innerRotation.center.set(0,0,0);
myNode91.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode91.innerRotation.angle.set(179.9998479605043);
myNode91.innerTranslation.vector.set(-9.660950000000001,8.611,-0.0015000000000000568);
myNode91.isVisible = false;

/* définition du node n°92*/
const myNode92 = object.addCutOperation();
myNode92.leftArg.set(myNode90);
myNode92.rightArg.set(myNode91);
myNode92.isVisible = false;

/* définition du node n°93*/
const myNode93 = object.addCutOperation();
myNode93.leftArg.set(myNode92);
myNode93.rightArg.set(myNode84);
myNode93.isVisible = false;

/* définition du node n°94*/
const myNode94 = object.addBox();
myNode94.point1.set(1.2231,-18.0999,1.7081);
myNode94.point2.set(1.7629000000000001,2.969899999999999,4.9999);
myNode94.innerRotation.center.set(0,0,0);
myNode94.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode94.innerRotation.angle.set(179.9998479605043);
myNode94.innerTranslation.vector.set(1.493,-7.565000000000001,3.354);
myNode94.isVisible = false;

/* définition du node n°95*/
const myNode95 = object.addCylinder();
myNode95.point1.set(3.486,1.618,-18.0999);
myNode95.point2.set(3.486,1.618,18.099999999999998);
myNode95.radius.set(0.135);
myNode95.innerRotation.center.set(0,0,0);
myNode95.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode95.innerRotation.angle.set(89.99978954085029);
myNode95.isVisible = false;

/* définition du node n°96*/
const myNode96 = object.addCutOperation();
myNode96.leftArg.set(myNode94);
myNode96.rightArg.set(myNode95);
myNode96.isVisible = false;

/* définition du node n°97*/
const myNode97 = object.addCylinder();
myNode97.point1.set(4.669,-0.067,-18.0999);
myNode97.point2.set(4.669,-0.067,1.7089999999999996);
myNode97.radius.set(0.251);
myNode97.innerRotation.center.set(0,0,0);
myNode97.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode97.innerRotation.angle.set(89.99978954085029);
myNode97.isVisible = false;

/* définition du node n°98*/
const myNode98 = object.addCylinder();
myNode98.point1.set(3.486,-1.627,-18.0999);
myNode98.point2.set(3.486,-1.627,18.099999999999998);
myNode98.radius.set(0.135);
myNode98.innerRotation.center.set(0,0,0);
myNode98.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode98.innerRotation.angle.set(89.99978954085029);
myNode98.isVisible = false;

/* définition du node n°99*/
const myNode99 = object.addFuseOperation();
myNode99.leftArg.set(myNode97);
myNode99.rightArg.set(myNode98);
myNode99.isVisible = false;

/* définition du node n°100*/
const myNode100 = object.addCutOperation();
myNode100.leftArg.set(myNode96);
myNode100.rightArg.set(myNode99);
myNode100.isVisible = false;

/* définition du node n°101*/
const myNode101 = object.addCylinder();
myNode101.point1.set(4.668,-0.066,1.70905);
myNode101.point2.set(4.668,-0.066,18.09995);
myNode101.radius.set(0.162);
myNode101.innerRotation.center.set(0,0,0);
myNode101.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode101.innerRotation.angle.set(89.99978954085029);
myNode101.isVisible = false;

/* définition du node n°102*/
const myNode102 = object.addCutOperation();
myNode102.leftArg.set(myNode100);
myNode102.rightArg.set(myNode101);
myNode102.isVisible = false;

/* définition du node n°103*/
const myNode103 = object.addBox();
myNode103.point1.set(-18.0999,-18.0999,-18.1);
myNode103.point2.set(18.099999999999998,-2.862000000000002,18.099899999999998);
myNode103.innerRotation.center.set(0,0,0);
myNode103.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode103.innerRotation.angle.set(179.9998479605043);
myNode103.innerTranslation.vector.set(4.9999999998107114e-05,-10.480950000000002,-5.000000000165983e-05);
myNode103.isVisible = false;

/* définition du node n°104*/
const myNode104 = object.addCutOperation();
myNode104.leftArg.set(myNode102);
myNode104.rightArg.set(myNode103);
myNode104.isVisible = false;

/* définition du node n°105*/
const myNode105 = object.addCylinder();
myNode105.point1.set(-4.188,0.589,1.2231);
myNode105.point2.set(-4.188,0.589,1.7629000000000001);
myNode105.radius.set(0.811);
myNode105.innerRotation.center.set(0,0,0);
myNode105.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode105.innerRotation.angle.set(89.99978954085029);
myNode105.isVisible = false;

/* définition du node n°106*/
const myNode106 = object.addCylinder();
myNode106.point1.set(-3.444,0.588,1.22305);
myNode106.point2.set(-3.444,0.588,1.76295);
myNode106.radius.set(0.271);
myNode106.innerRotation.center.set(0,0,0);
myNode106.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode106.innerRotation.angle.set(89.99978954085029);
myNode106.isVisible = false;

/* définition du node n°107*/
const myNode107 = object.addCylinder();
myNode107.point1.set(-4.255,0.589,-18.0999);
myNode107.point2.set(-4.255,0.589,1.7629999999999981);
myNode107.radius.set(0.254);
myNode107.innerRotation.center.set(0,0,0);
myNode107.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode107.innerRotation.angle.set(89.99978954085029);
myNode107.isVisible = false;

/* définition du node n°108*/
const myNode108 = object.addFuseOperation();
myNode108.leftArg.set(myNode106);
myNode108.rightArg.set(myNode107);
myNode108.isVisible = false;

/* définition du node n°109*/
const myNode109 = object.addCutOperation();
myNode109.leftArg.set(myNode105);
myNode109.rightArg.set(myNode108);
myNode109.isVisible = false;

/* définition du node n°110*/
const myNode110 = object.addBox();
myNode110.point1.set(1.2231,-0.8779,-1.7069);
myNode110.point2.set(1.7629000000000001,2.8549,1.5989);
myNode110.innerRotation.center.set(0,0,0);
myNode110.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode110.innerRotation.angle.set(179.9998479605043);
myNode110.innerTranslation.vector.set(1.493,0.9885,-0.05400000000000005);
myNode110.isVisible = false;

/* définition du node n°111*/
const myNode111 = object.addCylinder();
myNode111.point1.set(0.449,-2.859,-0.3809);
myNode111.point2.set(0.449,-2.859,1.7618999999999998);
myNode111.radius.set(0.113);
myNode111.innerRotation.center.set(0,0,0);
myNode111.innerRotation.axis.set(4.1682470084564275e-06,1.570792653585774,-4.1682470084564275e-06);
myNode111.innerRotation.angle.set(89.99978954125373);
myNode111.isVisible = false;

/* définition du node n°112*/
const myNode112 = object.addFuseOperation();
myNode112.leftArg.set(myNode110);
myNode112.rightArg.set(myNode111);
myNode112.isVisible = false;

/* définition du node n°113*/
const myNode113 = object.addCutOperation();
myNode113.leftArg.set(myNode112);
myNode113.rightArg.set(myNode31);
myNode113.isVisible = false;

/* définition du node n°114*/
const myNode114 = object.addCylinder();
myNode114.point1.set(0.439,2.863,-0.3809);
myNode114.point2.set(0.439,2.863,1.2219);
myNode114.radius.set(0.104);
myNode114.innerRotation.center.set(0,0,0);
myNode114.innerRotation.axis.set(4.1682470084564275e-06,1.570792653585774,-4.1682470084564275e-06);
myNode114.innerRotation.angle.set(89.99978954125373);
myNode114.isVisible = false;

/* définition du node n°115*/
const myNode115 = object.addCylinder();
myNode115.point1.set(3.486,-1.627,-18.0999);
myNode115.point2.set(3.486,-1.627,1.2228999999999992);
myNode115.radius.set(0.135);
myNode115.innerRotation.center.set(0,0,0);
myNode115.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode115.innerRotation.angle.set(89.99978954085029);
myNode115.isVisible = false;

/* définition du node n°116*/
const myNode116 = object.addCylinder();
myNode116.point1.set(3.486,-1.627,1.7091);
myNode116.point2.set(3.486,-1.627,1.7629000000000001);
myNode116.radius.set(0.135);
myNode116.innerRotation.center.set(0,0,0);
myNode116.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode116.innerRotation.angle.set(89.99978954085029);
myNode116.isVisible = false;

/* définition du node n°117*/
const myNode117 = object.addCommonOperation();
myNode117.leftArg.set(myNode115);
myNode117.rightArg.set(myNode116);
myNode117.isVisible = false;

/* définition du node n°118*/
const myNode118_1 = myNode3.clone();
myNode118_1.isVisible = false;
const myNode118_2 = object.addFuseOperation();
myNode118_2.leftArg.set(myNode118_1);
myNode118_2.rightArg.set(myNode13);
myNode118_2.isVisible = false;
const myNode118_3 = object.addFuseOperation();
myNode118_3.leftArg.set(myNode118_2);
myNode118_3.rightArg.set(myNode25);
myNode118_3.isVisible = false;
const myNode118_4 = object.addFuseOperation();
myNode118_4.leftArg.set(myNode118_3);
myNode118_4.rightArg.set(myNode26);
myNode118_4.isVisible = false;
const myNode118_5 = object.addFuseOperation();
myNode118_5.leftArg.set(myNode118_4);
myNode118_5.rightArg.set(myNode45);
myNode118_5.isVisible = false;
const myNode118_6 = object.addFuseOperation();
myNode118_6.leftArg.set(myNode118_5);
myNode118_6.rightArg.set(myNode58);
myNode118_6.isVisible = false;
const myNode118_7 = object.addFuseOperation();
myNode118_7.leftArg.set(myNode118_6);
myNode118_7.rightArg.set(myNode59);
myNode118_7.isVisible = false;
const myNode118_8 = object.addFuseOperation();
myNode118_8.leftArg.set(myNode118_7);
myNode118_8.rightArg.set(myNode62);
myNode118_8.isVisible = false;
const myNode118_9 = object.addFuseOperation();
myNode118_9.leftArg.set(myNode118_8);
myNode118_9.rightArg.set(myNode67);
myNode118_9.isVisible = false;
const myNode118_10 = object.addFuseOperation();
myNode118_10.leftArg.set(myNode118_9);
myNode118_10.rightArg.set(myNode68);
myNode118_10.isVisible = false;
const myNode118_11 = object.addFuseOperation();
myNode118_11.leftArg.set(myNode118_10);
myNode118_11.rightArg.set(myNode71);
myNode118_11.isVisible = false;
const myNode118_12 = object.addFuseOperation();
myNode118_12.leftArg.set(myNode118_11);
myNode118_12.rightArg.set(myNode74);
myNode118_12.isVisible = false;
const myNode118_13 = object.addFuseOperation();
myNode118_13.leftArg.set(myNode118_12);
myNode118_13.rightArg.set(myNode75);
myNode118_13.isVisible = false;
const myNode118_14 = object.addFuseOperation();
myNode118_14.leftArg.set(myNode118_13);
myNode118_14.rightArg.set(myNode86);
myNode118_14.isVisible = false;
const myNode118_15 = object.addFuseOperation();
myNode118_15.leftArg.set(myNode118_14);
myNode118_15.rightArg.set(myNode89);
myNode118_15.isVisible = false;
const myNode118_16 = object.addFuseOperation();
myNode118_16.leftArg.set(myNode118_15);
myNode118_16.rightArg.set(myNode93);
myNode118_16.isVisible = false;
const myNode118_17 = object.addFuseOperation();
myNode118_17.leftArg.set(myNode118_16);
myNode118_17.rightArg.set(myNode104);
myNode118_17.isVisible = false;
const myNode118_18 = object.addFuseOperation();
myNode118_18.leftArg.set(myNode118_17);
myNode118_18.rightArg.set(myNode109);
myNode118_18.isVisible = false;
const myNode118_19 = object.addFuseOperation();
myNode118_19.leftArg.set(myNode118_18);
myNode118_19.rightArg.set(myNode113);
myNode118_19.isVisible = false;
const myNode118_20 = object.addFuseOperation();
myNode118_20.leftArg.set(myNode118_19);
myNode118_20.rightArg.set(myNode114);
myNode118_20.isVisible = false;
myNode118 = object.addFuseOperation();
myNode118.leftArg.set(myNode118_20);
myNode118.rightArg.set(myNode117);
myNode118.isVisible = false;
myNode118.isVisible = false;

/* définition du node n°119*/
const myNode119 = object.addCommonOperation();
myNode119.leftArg.set(myNode0);
myNode119.rightArg.set(myNode118);
myNode119.isVisible = true;


/*END Geometry Object Definition*/