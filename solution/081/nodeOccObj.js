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
myNode1.point1.set(-0.3809,1.0811,-1.6019);
myNode1.point2.set(1.7618999999999998,2.8559,1.7079);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode1.innerRotation.angle.set(3.14159);
myNode1.innerTranslation.vector.set(0.6904999999999999,1.9685,0.052999999999999936);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-0.38095,1.08105,-1.60195);
myNode2.point2.set(1.7079500000000003,2.85595,1.5989499999999999);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode2.innerRotation.angle.set(3.14159);
myNode2.innerTranslation.vector.set(0.6635000000000001,1.9685000000000001,-0.0015000000000000568);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(-0.53,-2.429,1.70905);
myNode3.point2.set(-0.53,-2.429,1.76295);
myNode3.radius.set(0.16);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode3.innerRotation.angle.set(1.5707926535897931);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addFuseOperation();
myNode4.leftArg.set(myNode2);
myNode4.rightArg.set(myNode3);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addCutOperation();
myNode5.leftArg.set(myNode1);
myNode5.rightArg.set(myNode4);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addCylinder();
myNode6.point1.set(-0.528,1.783,1.7091);
myNode6.point2.set(-0.528,1.783,1.7629000000000001);
myNode6.radius.set(0.25);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode6.innerRotation.angle.set(1.5707926535897931);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addCylinder();
myNode7.point1.set(-0.531,1.781,1.22305);
myNode7.point2.set(-0.531,1.781,1.76295);
myNode7.radius.set(0.161);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode7.innerRotation.angle.set(1.5707926535897931);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addCutOperation();
myNode8.leftArg.set(myNode6);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(1.2231,-4.2549,-0.2209);
myNode9.point2.set(1.7629000000000001,-2.1011,0.31889999999999996);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode9.innerRotation.angle.set(1.5707999999999998);
myNode9.innerTranslation.vector.set(1.493,-3.178,0.04899999999999996);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(-18.0999,-18.0999,0.3361);
myNode10.point2.set(18.0999,18.0999,18.099899999999998);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode10.innerRotation.angle.set(3.14159);
myNode10.innerTranslation.vector.set(0.0,0.0,9.218);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addCylinder();
myNode11.point1.set(3.486,1.618,1.22305);
myNode11.point2.set(3.486,1.618,18.09995);
myNode11.radius.set(0.135);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode11.innerRotation.angle.set(1.5707926535897931);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCutOperation();
myNode12.leftArg.set(myNode10);
myNode12.rightArg.set(myNode11);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addCylinder();
myNode13.point1.set(1.176,-0.232,-18.1);
myNode13.point2.set(1.176,-0.232,18.099899999999998);
myNode13.radius.set(0.133);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(-0.03609661632946712,0.04378870199283992,1.3784735724079273);
myNode13.innerRotation.angle.set(1.3796411873961025);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(1.021,1.35,-18.0999);
myNode14.point2.set(1.021,1.35,-0.6830000000000034);
myNode14.radius.set(0.189);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode14.innerRotation.angle.set(1.5707926535897931);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addFuseOperation();
myNode15.leftArg.set(myNode13);
myNode15.rightArg.set(myNode14);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addCutOperation();
myNode16.leftArg.set(myNode12);
myNode16.rightArg.set(myNode15);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(-1.7629,-2.9689,0.5101);
myNode17.point2.set(1.7629,-2.8621,1.5989);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode17.innerRotation.angle.set(3.14159);
myNode17.innerTranslation.vector.set(0.0,-2.9155,1.0545);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addBox();
myNode18.point1.set(-1.2219,-2.8619,-18.0999);
myNode18.point2.set(1.2219,-1.0791,1.7078999999999986);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode18.innerRotation.angle.set(3.14159);
myNode18.innerTranslation.vector.set(0.0,-1.9705,-8.196000000000002);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addBox();
myNode19.point1.set(1.2231,-2.9689,-1.6019);
myNode19.point2.set(1.7629000000000001,-0.8771,4.9999);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode19.innerRotation.angle.set(3.14159);
myNode19.innerTranslation.vector.set(1.493,-1.923,1.6989999999999998);
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
const myNode21 = object.addCommonOperation();
myNode21.leftArg.set(myNode16);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addCylinder();
myNode22.point1.set(1.599,2.862,-1.7629);
myNode22.point2.set(1.599,2.862,1.2228999999999999);
myNode22.radius.set(0.107);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode22.innerRotation.angle.set(1.5707999999999998);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addCylinder();
myNode23.point1.set(3.486,-1.627,-18.0999);
myNode23.point2.set(3.486,-1.627,1.2228999999999992);
myNode23.radius.set(0.135);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode23.innerRotation.angle.set(1.5707926535897931);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addCylinder();
myNode24.point1.set(3.486,-1.627,1.7091);
myNode24.point2.set(3.486,-1.627,1.7629000000000001);
myNode24.radius.set(0.135);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode24.innerRotation.angle.set(1.5707926535897931);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addCommonOperation();
myNode25.leftArg.set(myNode23);
myNode25.rightArg.set(myNode24);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addBox();
myNode26.point1.set(-1.7629,-2.9689,0.3361);
myNode26.point2.set(-0.3811,1.4408999999999996,0.7629);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode26.innerRotation.angle.set(3.14159);
myNode26.innerTranslation.vector.set(-1.072,-0.7640000000000002,0.5495);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addBox();
myNode27.point1.set(-18.0999,-0.87795,-1.60195);
myNode27.point2.set(-1.2220000000000013,18.099950000000003,1.5989499999999999);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode27.innerRotation.angle.set(3.14159);
myNode27.innerTranslation.vector.set(-9.660950000000001,8.611,-0.0015000000000000568);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addCutOperation();
myNode28.leftArg.set(myNode26);
myNode28.rightArg.set(myNode27);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addCylinder();
myNode29.point1.set(-1.415,-0.001,-1.70795);
myNode29.point2.set(-1.415,-0.001,18.09995);
myNode29.radius.set(0.892);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addCutOperation();
myNode30.leftArg.set(myNode28);
myNode30.rightArg.set(myNode29);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addCylinder();
myNode31.point1.set(-4.188,0.589,1.2231);
myNode31.point2.set(-4.188,0.589,1.7629000000000001);
myNode31.radius.set(0.811);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode31.innerRotation.angle.set(1.5707926535897931);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addCylinder();
myNode32.point1.set(-3.444,0.588,1.22305);
myNode32.point2.set(-3.444,0.588,1.76295);
myNode32.radius.set(0.271);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode32.innerRotation.angle.set(1.5707926535897931);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addCylinder();
myNode33.point1.set(-4.255,0.589,-18.0999);
myNode33.point2.set(-4.255,0.589,1.7629999999999981);
myNode33.radius.set(0.254);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode33.innerRotation.angle.set(1.5707926535897931);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addFuseOperation();
myNode34.leftArg.set(myNode32);
myNode34.rightArg.set(myNode33);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addCutOperation();
myNode35.leftArg.set(myNode31);
myNode35.rightArg.set(myNode34);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addCylinder();
myNode36.point1.set(-1.591,-2.856,1.2231);
myNode36.point2.set(-1.591,-2.856,1.7629000000000001);
myNode36.radius.set(0.116);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode36.innerRotation.angle.set(1.5707999999999998);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addBox();
myNode37.point1.set(-1.7629,0.4551,0.3361);
myNode37.point2.set(-0.6830999999999998,2.8558999999999997,1.7079);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode37.innerRotation.angle.set(3.14159);
myNode37.innerTranslation.vector.set(-1.2229999999999999,1.6555,1.022);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addCylinder();
myNode38.point1.set(1.602,-2.868,-1.1149);
myNode38.point2.set(1.602,-2.868,1.2229);
myNode38.radius.set(0.103);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode38.innerRotation.angle.set(1.5707999999999998);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addBox();
myNode39.point1.set(-1.1149,2.8561,0.3361);
myNode39.point2.set(1.2229,2.9699,1.5989);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode39.innerRotation.angle.set(3.14159);
myNode39.innerTranslation.vector.set(0.05400000000000005,2.9130000000000003,0.9675);
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addBox();
myNode40.point1.set(-1.1149,1.0811,0.3361);
myNode40.point2.set(1.2229,2.8559,1.7079);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode40.innerRotation.angle.set(3.14159);
myNode40.innerTranslation.vector.set(0.05400000000000005,1.9685,1.022);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41_1 = myNode37.clone();
myNode41_1.isVisible = false;
const myNode41_2 = object.addFuseOperation();
myNode41_2.leftArg.set(myNode41_1);
myNode41_2.rightArg.set(myNode38);
myNode41_2.isVisible = false;
const myNode41_3 = object.addFuseOperation();
myNode41_3.leftArg.set(myNode41_2);
myNode41_3.rightArg.set(myNode39);
myNode41_3.isVisible = false;
myNode41 = object.addFuseOperation();
myNode41.leftArg.set(myNode41_3);
myNode41.rightArg.set(myNode40);
myNode41.isVisible = false;
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addCylinder();
myNode42.point1.set(0.335,-0.548,-2.96995);
myNode42.point2.set(0.335,-0.548,-1.4400499999999998);
myNode42.radius.set(0.134);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode42.innerRotation.angle.set(2.094392392986396);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addBox();
myNode43.point1.set(-1.76295,1.08105,0.76305);
myNode43.point2.set(-0.6830499999999999,2.85595,1.37295);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode43.innerRotation.angle.set(3.14159);
myNode43.innerTranslation.vector.set(-1.2229999999999999,1.9685000000000001,1.068);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44 = object.addCylinder();
myNode44.point1.set(-1.413,-2.323,-1.70795);
myNode44.point2.set(-1.413,-2.323,18.09995);
myNode44.radius.set(0.594);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(0.0,0.0,0.0);
myNode44.innerRotation.angle.set(0.0);
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45_1 = myNode29.clone();
myNode45_1.isVisible = false;
const myNode45_2 = object.addFuseOperation();
myNode45_2.leftArg.set(myNode45_1);
myNode45_2.rightArg.set(myNode42);
myNode45_2.isVisible = false;
const myNode45_3 = object.addFuseOperation();
myNode45_3.leftArg.set(myNode45_2);
myNode45_3.rightArg.set(myNode43);
myNode45_3.isVisible = false;
myNode45 = object.addFuseOperation();
myNode45.leftArg.set(myNode45_3);
myNode45.rightArg.set(myNode44);
myNode45.isVisible = false;
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addCutOperation();
myNode46.leftArg.set(myNode41);
myNode46.rightArg.set(myNode45);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addBox();
myNode47.point1.set(1.2231,-0.8779,-1.7069);
myNode47.point2.set(1.7629000000000001,2.8549,1.5989);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode47.innerRotation.angle.set(3.14159);
myNode47.innerTranslation.vector.set(1.493,0.9885,-0.05400000000000005);
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addCylinder();
myNode48.point1.set(0.449,-2.859,-0.3809);
myNode48.point2.set(0.449,-2.859,1.7618999999999998);
myNode48.radius.set(0.113);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(4.1682470084564275e-06,1.570792653585774,-4.1682470084564275e-06);
myNode48.innerRotation.angle.set(1.5707926535968346);
myNode48.isVisible = false;

/* définition du node n°49*/
const myNode49 = object.addFuseOperation();
myNode49.leftArg.set(myNode47);
myNode49.rightArg.set(myNode48);
myNode49.isVisible = false;

/* définition du node n°50*/
const myNode50 = object.addCylinder();
myNode50.point1.set(-0.53,-2.427,1.22305);
myNode50.point2.set(-0.53,-2.427,18.09995);
myNode50.radius.set(0.252);
myNode50.innerRotation.center.set(0,0,0);
myNode50.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode50.innerRotation.angle.set(1.5707926535897931);
myNode50.isVisible = false;

/* définition du node n°51*/
const myNode51 = object.addCutOperation();
myNode51.leftArg.set(myNode49);
myNode51.rightArg.set(myNode50);
myNode51.isVisible = false;

/* définition du node n°52*/
const myNode52 = object.addBox();
myNode52.point1.set(-0.3809,1.0811,0.3361);
myNode52.point2.set(1.2219,2.9699,1.5989);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode52.innerRotation.angle.set(3.14159);
myNode52.innerTranslation.vector.set(0.4205,2.0255,0.9675);
myNode52.isVisible = false;

/* définition du node n°53*/
const myNode53 = object.addCylinder();
myNode53.point1.set(0.335,-0.548,-18.0999);
myNode53.point2.set(0.335,-0.548,0.8780000000000001);
myNode53.radius.set(0.134);
myNode53.innerRotation.center.set(0,0,0);
myNode53.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode53.innerRotation.angle.set(2.094392392986396);
myNode53.isVisible = false;

/* définition du node n°54*/
const myNode54 = object.addCutOperation();
myNode54.leftArg.set(myNode52);
myNode54.rightArg.set(myNode53);
myNode54.isVisible = false;

/* définition du node n°55*/
const myNode55 = object.addBox();
myNode55.point1.set(-0.3809,2.4051,0.3361);
myNode55.point2.set(1.7079,2.8548999999999998,1.5989);
myNode55.innerRotation.center.set(0,0,0);
myNode55.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode55.innerRotation.angle.set(3.14159);
myNode55.innerTranslation.vector.set(0.6635,2.63,0.9675);
myNode55.isVisible = false;

/* définition du node n°56*/
const myNode56 = object.addCylinder();
myNode56.point1.set(2.377,-0.837,-18.0999);
myNode56.point2.set(2.377,-0.837,18.099999999999998);
myNode56.radius.set(0.157);
myNode56.innerRotation.center.set(0,0,0);
myNode56.innerRotation.axis.set(-1.97304786885883,2.230125709098186,0.2073791021297825);
myNode56.innerRotation.angle.set(2.9848592367462174);
myNode56.isVisible = false;

/* définition du node n°57*/
const myNode57 = object.addCutOperation();
myNode57.leftArg.set(myNode55);
myNode57.rightArg.set(myNode56);
myNode57.isVisible = false;

/* définition du node n°58*/
const myNode58 = object.addBox();
myNode58.point1.set(1.2231,-2.1009,-2.4049);
myNode58.point2.set(1.7629000000000001,0.5098999999999996,1.3999000000000001);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode58.innerRotation.angle.set(1.5707999999999998);
myNode58.innerTranslation.vector.set(1.493,-0.7955000000000003,-0.5025);
myNode58.isVisible = false;

/* définition du node n°59*/
const myNode59 = object.addCutOperation();
myNode59.leftArg.set(myNode58);
myNode59.rightArg.set(myNode50);
myNode59.isVisible = false;

/* définition du node n°60*/
const myNode60 = object.addBox();
myNode60.point1.set(1.2231,-18.0999,0.8781);
myNode60.point2.set(1.7629000000000001,18.0999,18.0999);
myNode60.innerRotation.center.set(0,0,0);
myNode60.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode60.innerRotation.angle.set(1.5707999999999998);
myNode60.innerTranslation.vector.set(1.493,0.0,9.489);
myNode60.isVisible = false;

/* définition du node n°61*/
const myNode61 = object.addCylinder();
myNode61.point1.set(-0.528,1.783,-18.0999);
myNode61.point2.set(-0.528,1.783,18.099999999999998);
myNode61.radius.set(0.25);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode61.innerRotation.angle.set(1.5707926535897931);
myNode61.isVisible = false;

/* définition du node n°62*/
const myNode62 = object.addCutOperation();
myNode62.leftArg.set(myNode60);
myNode62.rightArg.set(myNode61);
myNode62.isVisible = false;

/* définition du node n°63*/
const myNode63 = object.addFuseOperation();
myNode63.leftArg.set(myNode59);
myNode63.rightArg.set(myNode62);
myNode63.isVisible = false;

/* définition du node n°64*/
const myNode64 = object.addCylinder();
myNode64.point1.set(-1.921,1.608,-18.0999);
myNode64.point2.set(-1.921,1.608,1.7629999999999981);
myNode64.radius.set(0.209);
myNode64.innerRotation.center.set(0,0,0);
myNode64.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode64.innerRotation.angle.set(1.5707926535968346);
myNode64.isVisible = false;

/* définition du node n°65*/
const myNode65 = object.addCutOperation();
myNode65.leftArg.set(myNode63);
myNode65.rightArg.set(myNode64);
myNode65.isVisible = false;

/* définition du node n°66*/
const myNode66 = object.addBox();
myNode66.point1.set(-18.0999,-1.9219,0.8781);
myNode66.point2.set(1.7628999999999984,-1.7071,1.6179000000000001);
myNode66.innerRotation.center.set(0,0,0);
myNode66.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode66.innerRotation.angle.set(1.5707999999999998);
myNode66.innerTranslation.vector.set(-8.168500000000002,-1.8145,1.248);
myNode66.isVisible = false;

/* définition du node n°67*/
const myNode67 = object.addBox();
myNode67.point1.set(1.2231,-1.9219,-0.4549);
myNode67.point2.set(1.7089,0.5099,-0.22110000000000002);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode67.innerRotation.angle.set(1.5707999999999998);
myNode67.innerTranslation.vector.set(1.4660000000000002,-0.706,-0.338);
myNode67.isVisible = false;

/* définition du node n°68*/
const myNode68 = object.addCylinder();
myNode68.point1.set(-1.922,-0.439,1.22305);
myNode68.point2.set(-1.922,-0.439,1.76295);
myNode68.radius.set(0.217);
myNode68.innerRotation.center.set(0,0,0);
myNode68.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode68.innerRotation.angle.set(1.5707926535897931);
myNode68.isVisible = false;

/* définition du node n°69*/
const myNode69 = object.addCutOperation();
myNode69.leftArg.set(myNode67);
myNode69.rightArg.set(myNode68);
myNode69.isVisible = false;

/* définition du node n°70*/
const myNode70 = object.addBox();
myNode70.point1.set(1.2231,-4.2549,-0.2209);
myNode70.point2.set(1.7629000000000001,-1.7071,1.3999);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode70.innerRotation.angle.set(1.5707999999999998);
myNode70.innerTranslation.vector.set(1.493,-2.981,0.5895);
myNode70.isVisible = false;

/* définition du node n°71*/
const myNode71 = object.addCylinder();
myNode71.point1.set(-2.101,0.589,1.22305);
myNode71.point2.set(-2.101,0.589,1.76295);
myNode71.radius.set(0.273);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode71.innerRotation.angle.set(1.5707926535897931);
myNode71.isVisible = false;

/* définition du node n°72*/
const myNode72 = object.addCutOperation();
myNode72.leftArg.set(myNode70);
myNode72.rightArg.set(myNode71);
myNode72.isVisible = false;

/* définition du node n°73*/
const myNode73 = object.addBox();
myNode73.point1.set(-18.0999,-1.7069,-2.4049);
myNode73.point2.set(1.7628999999999984,0.5099,2.9698999999999995);
myNode73.innerRotation.center.set(0,0,0);
myNode73.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode73.innerRotation.angle.set(1.5707999999999998);
myNode73.innerTranslation.vector.set(-8.168500000000002,-0.5985,0.28249999999999975);
myNode73.isVisible = false;

/* définition du node n°74*/
const myNode74_1 = myNode66.clone();
myNode74_1.isVisible = false;
const myNode74_2 = object.addFuseOperation();
myNode74_2.leftArg.set(myNode74_1);
myNode74_2.rightArg.set(myNode69);
myNode74_2.isVisible = false;
const myNode74_3 = object.addFuseOperation();
myNode74_3.leftArg.set(myNode74_2);
myNode74_3.rightArg.set(myNode72);
myNode74_3.isVisible = false;
myNode74 = object.addFuseOperation();
myNode74.leftArg.set(myNode74_3);
myNode74.rightArg.set(myNode73);
myNode74.isVisible = false;
myNode74.isVisible = false;

/* définition du node n°75*/
const myNode75 = object.addCommonOperation();
myNode75.leftArg.set(myNode65);
myNode75.rightArg.set(myNode74);
myNode75.isVisible = false;

/* définition du node n°76*/
const myNode76 = object.addCylinder();
myNode76.point1.set(-4.255,0.589,1.4931);
myNode76.point2.set(-4.255,0.589,1.7629000000000001);
myNode76.radius.set(0.254);
myNode76.innerRotation.center.set(0,0,0);
myNode76.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode76.innerRotation.angle.set(1.5707926535897931);
myNode76.isVisible = false;

/* définition du node n°77*/
const myNode77 = object.addCylinder();
myNode77.point1.set(-4.254,0.588,1.49305);
myNode77.point2.set(-4.254,0.588,1.76295);
myNode77.radius.set(0.189);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode77.innerRotation.angle.set(1.5707926535897931);
myNode77.isVisible = false;

/* définition du node n°78*/
const myNode78 = object.addCutOperation();
myNode78.leftArg.set(myNode76);
myNode78.rightArg.set(myNode77);
myNode78.isVisible = false;

/* définition du node n°79*/
const myNode79 = object.addCylinder();
myNode79.point1.set(0.439,2.863,-0.3809);
myNode79.point2.set(0.439,2.863,1.2219);
myNode79.radius.set(0.104);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(4.1682470084564275e-06,1.570792653585774,-4.1682470084564275e-06);
myNode79.innerRotation.angle.set(1.5707926535968346);
myNode79.isVisible = false;

/* définition du node n°80*/
const myNode80 = object.addBox();
myNode80.point1.set(1.2231,-2.9689,-1.6019);
myNode80.point2.set(1.7629000000000001,-1.0791000000000002,0.3369);
myNode80.innerRotation.center.set(0,0,0);
myNode80.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode80.innerRotation.angle.set(3.14159);
myNode80.innerTranslation.vector.set(1.493,-2.024,-0.6325000000000001);
myNode80.isVisible = false;

/* définition du node n°81*/
const myNode81 = object.addCylinder();
myNode81.point1.set(-0.528,1.783,-18.0999);
myNode81.point2.set(-0.528,1.783,1.7629999999999981);
myNode81.radius.set(0.25);
myNode81.innerRotation.center.set(0,0,0);
myNode81.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode81.innerRotation.angle.set(1.5707926535897931);
myNode81.isVisible = false;

/* définition du node n°82*/
const myNode82 = object.addCutOperation();
myNode82.leftArg.set(myNode80);
myNode82.rightArg.set(myNode81);
myNode82.isVisible = false;

/* définition du node n°83*/
const myNode83 = object.addBox();
myNode83.point1.set(-1.7629,0.4551,0.7631);
myNode83.point2.set(-0.6830999999999998,2.8558999999999997,1.3729);
myNode83.innerRotation.center.set(0,0,0);
myNode83.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode83.innerRotation.angle.set(3.14159);
myNode83.innerTranslation.vector.set(-1.2229999999999999,1.6555,1.068);
myNode83.isVisible = false;

/* définition du node n°84*/
const myNode84 = object.addBox();
myNode84.point1.set(-1.76295,0.45505,0.92905);
myNode84.point2.set(-1.4130500000000001,1.08095,1.0199500000000001);
myNode84.innerRotation.center.set(0,0,0);
myNode84.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode84.innerRotation.angle.set(3.14159);
myNode84.innerTranslation.vector.set(-1.588,0.768,0.9745);
myNode84.isVisible = false;

/* définition du node n°85*/
const myNode85 = object.addCutOperation();
myNode85.leftArg.set(myNode83);
myNode85.rightArg.set(myNode84);
myNode85.isVisible = false;

/* définition du node n°86*/
const myNode86 = object.addCylinder();
myNode86.point1.set(1.021,-1.352,-1.76295);
myNode86.point2.set(1.021,-1.352,-1.2220499999999999);
myNode86.radius.set(0.253);
myNode86.innerRotation.center.set(0,0,0);
myNode86.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode86.innerRotation.angle.set(1.5707926535897931);
myNode86.isVisible = false;

/* définition du node n°87*/
const myNode87 = object.addCylinder();
myNode87.point1.set(1.022,-1.353,-1.22195);
myNode87.point2.set(1.022,-1.353,18.09995);
myNode87.radius.set(0.189);
myNode87.innerRotation.center.set(0,0,0);
myNode87.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode87.innerRotation.angle.set(1.5707926535897931);
myNode87.isVisible = false;

/* définition du node n°88*/
const myNode88 = object.addCylinder();
myNode88.point1.set(-1.42,-0.002,-1.59895);
myNode88.point2.set(-1.42,-0.002,-0.7630500000000001);
myNode88.radius.set(0.68);
myNode88.innerRotation.center.set(0,0,0);
myNode88.innerRotation.axis.set(0.0,0.0,0.0);
myNode88.innerRotation.angle.set(0.0);
myNode88.isVisible = false;

/* définition du node n°89*/
const myNode89_1 = myNode86.clone();
myNode89_1.isVisible = false;
const myNode89_2 = object.addFuseOperation();
myNode89_2.leftArg.set(myNode89_1);
myNode89_2.rightArg.set(myNode87);
myNode89_2.isVisible = false;
myNode89 = object.addFuseOperation();
myNode89.leftArg.set(myNode89_2);
myNode89.rightArg.set(myNode88);
myNode89.isVisible = false;
myNode89.isVisible = false;

/* définition du node n°90*/
const myNode90 = object.addCutOperation();
myNode90.leftArg.set(myNode85);
myNode90.rightArg.set(myNode89);
myNode90.isVisible = false;

/* définition du node n°91*/
const myNode91 = object.addCylinder();
myNode91.point1.set(-1.413,-2.323,-1.37295);
myNode91.point2.set(-1.413,-2.323,-0.7630499999999999);
myNode91.radius.set(0.594);
myNode91.innerRotation.center.set(0,0,0);
myNode91.innerRotation.axis.set(0.0,0.0,0.0);
myNode91.innerRotation.angle.set(0.0);
myNode91.isVisible = false;

/* définition du node n°92*/
const myNode92 = object.addCutOperation();
myNode92.leftArg.set(myNode90);
myNode92.rightArg.set(myNode91);
myNode92.isVisible = false;

/* définition du node n°93*/
const myNode93 = object.addBox();
myNode93.point1.set(1.2231,-18.0999,1.7081);
myNode93.point2.set(1.7629000000000001,2.969899999999999,4.9999);
myNode93.innerRotation.center.set(0,0,0);
myNode93.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode93.innerRotation.angle.set(3.14159);
myNode93.innerTranslation.vector.set(1.493,-7.565000000000001,3.354);
myNode93.isVisible = false;

/* définition du node n°94*/
const myNode94 = object.addCylinder();
myNode94.point1.set(3.486,1.618,-18.0999);
myNode94.point2.set(3.486,1.618,18.099999999999998);
myNode94.radius.set(0.135);
myNode94.innerRotation.center.set(0,0,0);
myNode94.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode94.innerRotation.angle.set(1.5707926535897931);
myNode94.isVisible = false;

/* définition du node n°95*/
const myNode95 = object.addCutOperation();
myNode95.leftArg.set(myNode93);
myNode95.rightArg.set(myNode94);
myNode95.isVisible = false;

/* définition du node n°96*/
const myNode96 = object.addCylinder();
myNode96.point1.set(4.669,-0.067,-18.0999);
myNode96.point2.set(4.669,-0.067,1.7089999999999996);
myNode96.radius.set(0.251);
myNode96.innerRotation.center.set(0,0,0);
myNode96.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode96.innerRotation.angle.set(1.5707926535897931);
myNode96.isVisible = false;

/* définition du node n°97*/
const myNode97 = object.addCylinder();
myNode97.point1.set(3.486,-1.627,-18.0999);
myNode97.point2.set(3.486,-1.627,18.099999999999998);
myNode97.radius.set(0.135);
myNode97.innerRotation.center.set(0,0,0);
myNode97.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode97.innerRotation.angle.set(1.5707926535897931);
myNode97.isVisible = false;

/* définition du node n°98*/
const myNode98 = object.addFuseOperation();
myNode98.leftArg.set(myNode96);
myNode98.rightArg.set(myNode97);
myNode98.isVisible = false;

/* définition du node n°99*/
const myNode99 = object.addCutOperation();
myNode99.leftArg.set(myNode95);
myNode99.rightArg.set(myNode98);
myNode99.isVisible = false;

/* définition du node n°100*/
const myNode100 = object.addCylinder();
myNode100.point1.set(4.668,-0.066,1.70905);
myNode100.point2.set(4.668,-0.066,18.09995);
myNode100.radius.set(0.162);
myNode100.innerRotation.center.set(0,0,0);
myNode100.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode100.innerRotation.angle.set(1.5707926535897931);
myNode100.isVisible = false;

/* définition du node n°101*/
const myNode101 = object.addCutOperation();
myNode101.leftArg.set(myNode99);
myNode101.rightArg.set(myNode100);
myNode101.isVisible = false;

/* définition du node n°102*/
const myNode102 = object.addBox();
myNode102.point1.set(-18.0999,-18.0999,-18.1);
myNode102.point2.set(18.099999999999998,-2.862000000000002,18.099899999999998);
myNode102.innerRotation.center.set(0,0,0);
myNode102.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode102.innerRotation.angle.set(3.14159);
myNode102.innerTranslation.vector.set(4.9999999998107114e-05,-10.480950000000002,-5.000000000165983e-05);
myNode102.isVisible = false;

/* définition du node n°103*/
const myNode103 = object.addCutOperation();
myNode103.leftArg.set(myNode101);
myNode103.rightArg.set(myNode102);
myNode103.isVisible = false;

/* définition du node n°104*/
const myNode104 = object.addBox();
myNode104.point1.set(1.2231,2.8561,-1.6019);
myNode104.point2.set(1.7629000000000001,2.9699,1.7079);
myNode104.innerRotation.center.set(0,0,0);
myNode104.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode104.innerRotation.angle.set(3.14159);
myNode104.innerTranslation.vector.set(1.493,2.9130000000000003,0.052999999999999936);
myNode104.isVisible = false;

/* définition du node n°105*/
const myNode105 = object.addBox();
myNode105.point1.set(-1.7629,-2.8619,0.7631);
myNode105.point2.set(1.7629,1.4399000000000002,1.7079);
myNode105.innerRotation.center.set(0,0,0);
myNode105.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode105.innerRotation.angle.set(3.14159);
myNode105.innerTranslation.vector.set(0.0,-0.7109999999999999,1.2355);
myNode105.isVisible = false;

/* définition du node n°106*/
const myNode106 = object.addBox();
myNode106.point1.set(-0.38095,-1.07895,0.51005);
myNode106.point2.set(1.22195,18.09995,4.999949999999999);
myNode106.innerRotation.center.set(0,0,0);
myNode106.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode106.innerRotation.angle.set(3.14159);
myNode106.innerTranslation.vector.set(0.4205,8.510499999999999,2.755);
myNode106.isVisible = false;

/* définition du node n°107*/
const myNode107 = object.addCylinder();
myNode107.point1.set(-1.415,-0.001,-1.70795);
myNode107.point2.set(-1.415,-0.001,-1.37305);
myNode107.radius.set(0.892);
myNode107.innerRotation.center.set(0,0,0);
myNode107.innerRotation.axis.set(0.0,0.0,0.0);
myNode107.innerRotation.angle.set(0.0);
myNode107.isVisible = false;

/* définition du node n°108*/
const myNode108 = object.addCylinder();
myNode108.point1.set(1.019,1.349,-18.0999);
myNode108.point2.set(1.019,1.349,-0.6830000000000034);
myNode108.radius.set(0.253);
myNode108.innerRotation.center.set(0,0,0);
myNode108.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode108.innerRotation.angle.set(1.5707926535897931);
myNode108.isVisible = false;

/* définition du node n°109*/
const myNode109 = object.addBox();
myNode109.point1.set(-1.76295,0.45505,-18.0999);
myNode109.point2.set(-1.2220499999999999,18.09995,5.0);
myNode109.innerRotation.center.set(0,0,0);
myNode109.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode109.innerRotation.angle.set(3.14159);
myNode109.innerTranslation.vector.set(-1.4925,9.2775,-6.549950000000001);
myNode109.isVisible = false;

/* définition du node n°110*/
const myNode110 = object.addBox();
myNode110.point1.set(-18.1,-18.1,1.599);
myNode110.point2.set(-1.2220000000000013,1.4399999999999977,18.1);
myNode110.innerRotation.center.set(0,0,0);
myNode110.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode110.innerRotation.angle.set(3.14159);
myNode110.innerTranslation.vector.set(-9.661000000000001,-8.330000000000002,9.8495);
myNode110.isVisible = false;

/* définition du node n°111*/
const myNode111 = object.addCutOperation();
myNode111.leftArg.set(myNode109);
myNode111.rightArg.set(myNode110);
myNode111.isVisible = false;

/* définition du node n°112*/
const myNode112 = object.addCylinder();
myNode112.point1.set(-1.42,-0.002,-18.0999);
myNode112.point2.set(-1.42,-0.002,-0.7630000000000017);
myNode112.radius.set(0.68);
myNode112.innerRotation.center.set(0,0,0);
myNode112.innerRotation.axis.set(0.0,0.0,0.0);
myNode112.innerRotation.angle.set(0.0);
myNode112.isVisible = false;

/* définition du node n°113*/
const myNode113 = object.addBox();
myNode113.point1.set(-1.76295,0.45505,-1.60195);
myNode113.point2.set(-0.6830499999999999,1.43995,1.37295);
myNode113.innerRotation.center.set(0,0,0);
myNode113.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode113.innerRotation.angle.set(3.14159);
myNode113.innerTranslation.vector.set(-1.2229999999999999,0.9475,-0.11450000000000005);
myNode113.isVisible = false;

/* définition du node n°114*/
const myNode114 = object.addCylinder();
myNode114.point1.set(-1.415,-0.001,-1.599);
myNode114.point2.set(-1.415,-0.001,-0.763);
myNode114.radius.set(0.892);
myNode114.innerRotation.center.set(0,0,0);
myNode114.innerRotation.axis.set(0.0,0.0,0.0);
myNode114.innerRotation.angle.set(0.0);
myNode114.isVisible = false;

/* définition du node n°115*/
const myNode115 = object.addCutOperation();
myNode115.leftArg.set(myNode113);
myNode115.rightArg.set(myNode114);
myNode115.isVisible = false;

/* définition du node n°116*/
const myNode116_1 = myNode106.clone();
myNode116_1.isVisible = false;
const myNode116_2 = object.addFuseOperation();
myNode116_2.leftArg.set(myNode116_1);
myNode116_2.rightArg.set(myNode107);
myNode116_2.isVisible = false;
const myNode116_3 = object.addFuseOperation();
myNode116_3.leftArg.set(myNode116_2);
myNode116_3.rightArg.set(myNode108);
myNode116_3.isVisible = false;
const myNode116_4 = object.addFuseOperation();
myNode116_4.leftArg.set(myNode116_3);
myNode116_4.rightArg.set(myNode111);
myNode116_4.isVisible = false;
const myNode116_5 = object.addFuseOperation();
myNode116_5.leftArg.set(myNode116_4);
myNode116_5.rightArg.set(myNode112);
myNode116_5.isVisible = false;
myNode116 = object.addFuseOperation();
myNode116.leftArg.set(myNode116_5);
myNode116.rightArg.set(myNode115);
myNode116.isVisible = false;
myNode116.isVisible = false;

/* définition du node n°117*/
const myNode117 = object.addCutOperation();
myNode117.leftArg.set(myNode105);
myNode117.rightArg.set(myNode116);
myNode117.isVisible = false;

/* définition du node n°118*/
const myNode118_1 = myNode5.clone();
myNode118_1.isVisible = false;
const myNode118_2 = object.addFuseOperation();
myNode118_2.leftArg.set(myNode118_1);
myNode118_2.rightArg.set(myNode8);
myNode118_2.isVisible = false;
const myNode118_3 = object.addFuseOperation();
myNode118_3.leftArg.set(myNode118_2);
myNode118_3.rightArg.set(myNode9);
myNode118_3.isVisible = false;
const myNode118_4 = object.addFuseOperation();
myNode118_4.leftArg.set(myNode118_3);
myNode118_4.rightArg.set(myNode21);
myNode118_4.isVisible = false;
const myNode118_5 = object.addFuseOperation();
myNode118_5.leftArg.set(myNode118_4);
myNode118_5.rightArg.set(myNode22);
myNode118_5.isVisible = false;
const myNode118_6 = object.addFuseOperation();
myNode118_6.leftArg.set(myNode118_5);
myNode118_6.rightArg.set(myNode25);
myNode118_6.isVisible = false;
const myNode118_7 = object.addFuseOperation();
myNode118_7.leftArg.set(myNode118_6);
myNode118_7.rightArg.set(myNode30);
myNode118_7.isVisible = false;
const myNode118_8 = object.addFuseOperation();
myNode118_8.leftArg.set(myNode118_7);
myNode118_8.rightArg.set(myNode35);
myNode118_8.isVisible = false;
const myNode118_9 = object.addFuseOperation();
myNode118_9.leftArg.set(myNode118_8);
myNode118_9.rightArg.set(myNode36);
myNode118_9.isVisible = false;
const myNode118_10 = object.addFuseOperation();
myNode118_10.leftArg.set(myNode118_9);
myNode118_10.rightArg.set(myNode46);
myNode118_10.isVisible = false;
const myNode118_11 = object.addFuseOperation();
myNode118_11.leftArg.set(myNode118_10);
myNode118_11.rightArg.set(myNode51);
myNode118_11.isVisible = false;
const myNode118_12 = object.addFuseOperation();
myNode118_12.leftArg.set(myNode118_11);
myNode118_12.rightArg.set(myNode54);
myNode118_12.isVisible = false;
const myNode118_13 = object.addFuseOperation();
myNode118_13.leftArg.set(myNode118_12);
myNode118_13.rightArg.set(myNode57);
myNode118_13.isVisible = false;
const myNode118_14 = object.addFuseOperation();
myNode118_14.leftArg.set(myNode118_13);
myNode118_14.rightArg.set(myNode75);
myNode118_14.isVisible = false;
const myNode118_15 = object.addFuseOperation();
myNode118_15.leftArg.set(myNode118_14);
myNode118_15.rightArg.set(myNode78);
myNode118_15.isVisible = false;
const myNode118_16 = object.addFuseOperation();
myNode118_16.leftArg.set(myNode118_15);
myNode118_16.rightArg.set(myNode79);
myNode118_16.isVisible = false;
const myNode118_17 = object.addFuseOperation();
myNode118_17.leftArg.set(myNode118_16);
myNode118_17.rightArg.set(myNode82);
myNode118_17.isVisible = false;
const myNode118_18 = object.addFuseOperation();
myNode118_18.leftArg.set(myNode118_17);
myNode118_18.rightArg.set(myNode92);
myNode118_18.isVisible = false;
const myNode118_19 = object.addFuseOperation();
myNode118_19.leftArg.set(myNode118_18);
myNode118_19.rightArg.set(myNode103);
myNode118_19.isVisible = false;
const myNode118_20 = object.addFuseOperation();
myNode118_20.leftArg.set(myNode118_19);
myNode118_20.rightArg.set(myNode104);
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