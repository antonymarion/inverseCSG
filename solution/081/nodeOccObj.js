/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-1.7629,-2.9689,0.3361);
myNode0.point2.set(-0.3811,1.4408999999999996,0.7629);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode0.innerRotation.angle.set(3.14159);
myNode0.isVisible = False

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-18.0999,-0.87795,-1.60195);
myNode1.point2.set(-1.2220000000000013,18.099950000000003,1.5989499999999999);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode1.innerRotation.angle.set(3.14159);
myNode1.isVisible = False

/* définition du node n°2*/
const myNode2 = object.addCutOperation();
myNode2.leftArg.set(myNode0);
myNode2.rightArg.set(myNode1);
myNode2.isVisible = False

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(-1.415,-0.001,-1.70795);
myNode3.point2.set(-1.415,-0.001,18.09995);
myNode3.radius.set(0.892);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);
myNode3.isVisible = False

/* définition du node n°4*/
const myNode4 = object.addCutOperation();
myNode4.leftArg.set(myNode2);
myNode4.rightArg.set(myNode3);
myNode4.isVisible = False

/* définition du node n°5*/
const myNode5 = object.addBox();
myNode5.point1.set(-1.7629,-2.8619,0.7631);
myNode5.point2.set(1.7629,1.4399000000000002,1.7079);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode5.innerRotation.angle.set(3.14159);
myNode5.isVisible = False

/* définition du node n°6*/
const myNode6 = object.addBox();
myNode6.point1.set(-0.38095,-1.07895,0.51005);
myNode6.point2.set(1.22195,18.09995,4.999949999999999);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode6.innerRotation.angle.set(3.14159);
myNode6.isVisible = False

/* définition du node n°7*/
const myNode7 = object.addCylinder();
myNode7.point1.set(-1.42,-0.002,-18.0999);
myNode7.point2.set(-1.42,-0.002,-0.7630000000000017);
myNode7.radius.set(0.68);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);
myNode7.isVisible = False

/* définition du node n°8*/
const myNode8 = object.addBox();
myNode8.point1.set(-1.76295,0.45505,-18.0999);
myNode8.point2.set(-1.2220499999999999,18.09995,5.0);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode8.innerRotation.angle.set(3.14159);
myNode8.isVisible = False

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(-18.1,-18.1,1.599);
myNode9.point2.set(-1.2220000000000013,1.4399999999999977,18.1);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode9.innerRotation.angle.set(3.14159);
myNode9.isVisible = False

/* définition du node n°10*/
const myNode10 = object.addCutOperation();
myNode10.leftArg.set(myNode8);
myNode10.rightArg.set(myNode9);
myNode10.isVisible = False

/* définition du node n°11*/
const myNode11 = object.addCylinder();
myNode11.point1.set(-1.415,-0.001,-1.70795);
myNode11.point2.set(-1.415,-0.001,-1.37305);
myNode11.radius.set(0.892);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);
myNode11.isVisible = False

/* définition du node n°12*/
const myNode12 = object.addBox();
myNode12.point1.set(-1.76295,0.45505,-1.60195);
myNode12.point2.set(-0.6830499999999999,1.43995,1.37295);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode12.innerRotation.angle.set(3.14159);
myNode12.isVisible = False

/* définition du node n°13*/
const myNode13 = object.addCylinder();
myNode13.point1.set(-1.415,-0.001,-1.599);
myNode13.point2.set(-1.415,-0.001,-0.763);
myNode13.radius.set(0.892);
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
const myNode15 = object.addCylinder();
myNode15.point1.set(1.019,1.349,-18.0999);
myNode15.point2.set(1.019,1.349,-0.6830000000000034);
myNode15.radius.set(0.253);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode15.innerRotation.angle.set(1.5707926535897931);
myNode15.isVisible = False

/* définition du node n°16*/
const myNode16_1 = object.addFuseOperation();
myNode16_1.leftArg.set(myNode6);
myNode16_1.rightArg.set(myNode6);
const myNode16_2 = object.addFuseOperation();
myNode16_2.leftArg.set(myNode16_1);
myNode16_2.rightArg.set(myNode7);
const myNode16_3 = object.addFuseOperation();
myNode16_3.leftArg.set(myNode16_2);
myNode16_3.rightArg.set(myNode10);
const myNode16_4 = object.addFuseOperation();
myNode16_4.leftArg.set(myNode16_3);
myNode16_4.rightArg.set(myNode11);
const myNode16_5 = object.addFuseOperation();
myNode16_5.leftArg.set(myNode16_4);
myNode16_5.rightArg.set(myNode14);
myNode16 = object.addFuseOperation();
myNode16.leftArg.set(myNode16_5);
myNode16.rightArg.set(myNode15);
myNode16.isVisible = False

/* définition du node n°17*/
const myNode17 = object.addCutOperation();
myNode17.leftArg.set(myNode5);
myNode17.rightArg.set(myNode16);
myNode17.isVisible = False

/* définition du node n°18*/
const myNode18 = object.addBox();
myNode18.point1.set(1.2231,-2.1009,-2.4049);
myNode18.point2.set(1.7629000000000001,0.5098999999999996,1.3999000000000001);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode18.innerRotation.angle.set(1.5707999999999998);
myNode18.isVisible = False

/* définition du node n°19*/
const myNode19 = object.addCylinder();
myNode19.point1.set(-0.53,-2.427,1.22305);
myNode19.point2.set(-0.53,-2.427,18.09995);
myNode19.radius.set(0.252);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode19.innerRotation.angle.set(1.5707926535897931);
myNode19.isVisible = False

/* définition du node n°20*/
const myNode20 = object.addCutOperation();
myNode20.leftArg.set(myNode18);
myNode20.rightArg.set(myNode19);
myNode20.isVisible = False

/* définition du node n°21*/
const myNode21 = object.addBox();
myNode21.point1.set(1.2231,-18.0999,0.8781);
myNode21.point2.set(1.7629000000000001,18.0999,18.0999);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode21.innerRotation.angle.set(1.5707999999999998);
myNode21.isVisible = False

/* définition du node n°22*/
const myNode22 = object.addCylinder();
myNode22.point1.set(-0.528,1.783,-18.0999);
myNode22.point2.set(-0.528,1.783,18.099999999999998);
myNode22.radius.set(0.25);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode22.innerRotation.angle.set(1.5707926535897931);
myNode22.isVisible = False

/* définition du node n°23*/
const myNode23 = object.addCutOperation();
myNode23.leftArg.set(myNode21);
myNode23.rightArg.set(myNode22);
myNode23.isVisible = False

/* définition du node n°24*/
const myNode24 = object.addFuseOperation();
myNode24.leftArg.set(myNode20);
myNode24.rightArg.set(myNode23);
myNode24.isVisible = False

/* définition du node n°25*/
const myNode25 = object.addCylinder();
myNode25.point1.set(-1.921,1.608,-18.0999);
myNode25.point2.set(-1.921,1.608,1.7629999999999981);
myNode25.radius.set(0.209);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode25.innerRotation.angle.set(1.5707926535968346);
myNode25.isVisible = False

/* définition du node n°26*/
const myNode26 = object.addCutOperation();
myNode26.leftArg.set(myNode24);
myNode26.rightArg.set(myNode25);
myNode26.isVisible = False

/* définition du node n°27*/
const myNode27 = object.addBox();
myNode27.point1.set(1.2231,-4.2549,-0.2209);
myNode27.point2.set(1.7629000000000001,-1.7071,1.3999);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode27.innerRotation.angle.set(1.5707999999999998);
myNode27.isVisible = False

/* définition du node n°28*/
const myNode28 = object.addCylinder();
myNode28.point1.set(-2.101,0.589,1.22305);
myNode28.point2.set(-2.101,0.589,1.76295);
myNode28.radius.set(0.273);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode28.innerRotation.angle.set(1.5707926535897931);
myNode28.isVisible = False

/* définition du node n°29*/
const myNode29 = object.addCutOperation();
myNode29.leftArg.set(myNode27);
myNode29.rightArg.set(myNode28);
myNode29.isVisible = False

/* définition du node n°30*/
const myNode30 = object.addBox();
myNode30.point1.set(-18.0999,-1.9219,0.8781);
myNode30.point2.set(1.7628999999999984,-1.7071,1.6179000000000001);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode30.innerRotation.angle.set(1.5707999999999998);
myNode30.isVisible = False

/* définition du node n°31*/
const myNode31 = object.addBox();
myNode31.point1.set(1.2231,-1.9219,-0.4549);
myNode31.point2.set(1.7089,0.5099,-0.22110000000000002);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode31.innerRotation.angle.set(1.5707999999999998);
myNode31.isVisible = False

/* définition du node n°32*/
const myNode32 = object.addCylinder();
myNode32.point1.set(-1.922,-0.439,1.22305);
myNode32.point2.set(-1.922,-0.439,1.76295);
myNode32.radius.set(0.217);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode32.innerRotation.angle.set(1.5707926535897931);
myNode32.isVisible = False

/* définition du node n°33*/
const myNode33 = object.addCutOperation();
myNode33.leftArg.set(myNode31);
myNode33.rightArg.set(myNode32);
myNode33.isVisible = False

/* définition du node n°34*/
const myNode34 = object.addBox();
myNode34.point1.set(-18.0999,-1.7069,-2.4049);
myNode34.point2.set(1.7628999999999984,0.5099,2.9698999999999995);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode34.innerRotation.angle.set(1.5707999999999998);
myNode34.isVisible = False

/* définition du node n°35*/
const myNode35_1 = object.addFuseOperation();
myNode35_1.leftArg.set(myNode29);
myNode35_1.rightArg.set(myNode29);
const myNode35_2 = object.addFuseOperation();
myNode35_2.leftArg.set(myNode35_1);
myNode35_2.rightArg.set(myNode30);
const myNode35_3 = object.addFuseOperation();
myNode35_3.leftArg.set(myNode35_2);
myNode35_3.rightArg.set(myNode33);
myNode35 = object.addFuseOperation();
myNode35.leftArg.set(myNode35_3);
myNode35.rightArg.set(myNode34);
myNode35.isVisible = False

/* définition du node n°36*/
const myNode36 = object.addCommonOperation();
myNode36.leftArg.set(myNode26);
myNode36.rightArg.set(myNode35);
myNode36.isVisible = False

/* définition du node n°37*/
const myNode37 = object.addCylinder();
myNode37.point1.set(3.486,-1.627,-18.0999);
myNode37.point2.set(3.486,-1.627,1.2228999999999992);
myNode37.radius.set(0.135);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode37.innerRotation.angle.set(1.5707926535897931);
myNode37.isVisible = False

/* définition du node n°38*/
const myNode38 = object.addCylinder();
myNode38.point1.set(3.486,-1.627,1.7091);
myNode38.point2.set(3.486,-1.627,1.7629000000000001);
myNode38.radius.set(0.135);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode38.innerRotation.angle.set(1.5707926535897931);
myNode38.isVisible = False

/* définition du node n°39*/
const myNode39 = object.addCommonOperation();
myNode39.leftArg.set(myNode37);
myNode39.rightArg.set(myNode38);
myNode39.isVisible = False

/* définition du node n°40*/
const myNode40 = object.addCylinder();
myNode40.point1.set(-4.255,0.589,1.4931);
myNode40.point2.set(-4.255,0.589,1.7629000000000001);
myNode40.radius.set(0.254);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode40.innerRotation.angle.set(1.5707926535897931);
myNode40.isVisible = False

/* définition du node n°41*/
const myNode41 = object.addCylinder();
myNode41.point1.set(-4.254,0.588,1.49305);
myNode41.point2.set(-4.254,0.588,1.76295);
myNode41.radius.set(0.189);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode41.innerRotation.angle.set(1.5707926535897931);
myNode41.isVisible = False

/* définition du node n°42*/
const myNode42 = object.addCutOperation();
myNode42.leftArg.set(myNode40);
myNode42.rightArg.set(myNode41);
myNode42.isVisible = False

/* définition du node n°43*/
const myNode43 = object.addBox();
myNode43.point1.set(-0.3809,1.0811,0.3361);
myNode43.point2.set(1.2219,2.9699,1.5989);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode43.innerRotation.angle.set(3.14159);
myNode43.isVisible = False

/* définition du node n°44*/
const myNode44 = object.addCylinder();
myNode44.point1.set(0.335,-0.548,-18.0999);
myNode44.point2.set(0.335,-0.548,0.8780000000000001);
myNode44.radius.set(0.134);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode44.innerRotation.angle.set(2.094392392986396);
myNode44.isVisible = False

/* définition du node n°45*/
const myNode45 = object.addCutOperation();
myNode45.leftArg.set(myNode43);
myNode45.rightArg.set(myNode44);
myNode45.isVisible = False

/* définition du node n°46*/
const myNode46 = object.addBox();
myNode46.point1.set(-0.3809,1.0811,-1.6019);
myNode46.point2.set(1.7618999999999998,2.8559,1.7079);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode46.innerRotation.angle.set(3.14159);
myNode46.isVisible = False

/* définition du node n°47*/
const myNode47 = object.addBox();
myNode47.point1.set(-0.38095,1.08105,-1.60195);
myNode47.point2.set(1.7079500000000003,2.85595,1.5989499999999999);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode47.innerRotation.angle.set(3.14159);
myNode47.isVisible = False

/* définition du node n°48*/
const myNode48 = object.addCylinder();
myNode48.point1.set(-0.53,-2.429,1.70905);
myNode48.point2.set(-0.53,-2.429,1.76295);
myNode48.radius.set(0.16);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode48.innerRotation.angle.set(1.5707926535897931);
myNode48.isVisible = False

/* définition du node n°49*/
const myNode49 = object.addFuseOperation();
myNode49.leftArg.set(myNode47);
myNode49.rightArg.set(myNode48);
myNode49.isVisible = False

/* définition du node n°50*/
const myNode50 = object.addCutOperation();
myNode50.leftArg.set(myNode46);
myNode50.rightArg.set(myNode49);
myNode50.isVisible = False

/* définition du node n°51*/
const myNode51 = object.addBox();
myNode51.point1.set(1.2231,2.8561,-1.6019);
myNode51.point2.set(1.7629000000000001,2.9699,1.7079);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode51.innerRotation.angle.set(3.14159);
myNode51.isVisible = False

/* définition du node n°52*/
const myNode52 = object.addCylinder();
myNode52.point1.set(1.599,2.862,-1.7629);
myNode52.point2.set(1.599,2.862,1.2228999999999999);
myNode52.radius.set(0.107);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode52.innerRotation.angle.set(1.5707999999999998);
myNode52.isVisible = False

/* définition du node n°53*/
const myNode53 = object.addBox();
myNode53.point1.set(-1.7629,0.4551,0.7631);
myNode53.point2.set(-0.6830999999999998,2.8558999999999997,1.3729);
myNode53.innerRotation.center.set(0,0,0);
myNode53.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode53.innerRotation.angle.set(3.14159);
myNode53.isVisible = False

/* définition du node n°54*/
const myNode54 = object.addBox();
myNode54.point1.set(-1.76295,0.45505,0.92905);
myNode54.point2.set(-1.4130500000000001,1.08095,1.0199500000000001);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode54.innerRotation.angle.set(3.14159);
myNode54.isVisible = False

/* définition du node n°55*/
const myNode55 = object.addCutOperation();
myNode55.leftArg.set(myNode53);
myNode55.rightArg.set(myNode54);
myNode55.isVisible = False

/* définition du node n°56*/
const myNode56 = object.addCylinder();
myNode56.point1.set(1.021,-1.352,-1.76295);
myNode56.point2.set(1.021,-1.352,-1.2220499999999999);
myNode56.radius.set(0.253);
myNode56.innerRotation.center.set(0,0,0);
myNode56.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode56.innerRotation.angle.set(1.5707926535897931);
myNode56.isVisible = False

/* définition du node n°57*/
const myNode57 = object.addCylinder();
myNode57.point1.set(-1.42,-0.002,-1.59895);
myNode57.point2.set(-1.42,-0.002,-0.7630500000000001);
myNode57.radius.set(0.68);
myNode57.innerRotation.center.set(0,0,0);
myNode57.innerRotation.axis.set(0.0,0.0,0.0);
myNode57.innerRotation.angle.set(0.0);
myNode57.isVisible = False

/* définition du node n°58*/
const myNode58 = object.addCylinder();
myNode58.point1.set(1.022,-1.353,-1.22195);
myNode58.point2.set(1.022,-1.353,18.09995);
myNode58.radius.set(0.189);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode58.innerRotation.angle.set(1.5707926535897931);
myNode58.isVisible = False

/* définition du node n°59*/
const myNode59_1 = object.addFuseOperation();
myNode59_1.leftArg.set(myNode56);
myNode59_1.rightArg.set(myNode56);
const myNode59_2 = object.addFuseOperation();
myNode59_2.leftArg.set(myNode59_1);
myNode59_2.rightArg.set(myNode57);
myNode59 = object.addFuseOperation();
myNode59.leftArg.set(myNode59_2);
myNode59.rightArg.set(myNode58);
myNode59.isVisible = False

/* définition du node n°60*/
const myNode60 = object.addCutOperation();
myNode60.leftArg.set(myNode55);
myNode60.rightArg.set(myNode59);
myNode60.isVisible = False

/* définition du node n°61*/
const myNode61 = object.addCylinder();
myNode61.point1.set(-1.413,-2.323,-1.37295);
myNode61.point2.set(-1.413,-2.323,-0.7630499999999999);
myNode61.radius.set(0.594);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(0.0,0.0,0.0);
myNode61.innerRotation.angle.set(0.0);
myNode61.isVisible = False

/* définition du node n°62*/
const myNode62 = object.addCutOperation();
myNode62.leftArg.set(myNode60);
myNode62.rightArg.set(myNode61);
myNode62.isVisible = False

/* définition du node n°63*/
const myNode63 = object.addBox();
myNode63.point1.set(-1.7629,-2.9689,0.5101);
myNode63.point2.set(1.7629,-2.8621,1.5989);
myNode63.innerRotation.center.set(0,0,0);
myNode63.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode63.innerRotation.angle.set(3.14159);
myNode63.isVisible = False

/* définition du node n°64*/
const myNode64 = object.addBox();
myNode64.point1.set(1.2231,-2.9689,-1.6019);
myNode64.point2.set(1.7629000000000001,-0.8771,4.9999);
myNode64.innerRotation.center.set(0,0,0);
myNode64.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode64.innerRotation.angle.set(3.14159);
myNode64.isVisible = False

/* définition du node n°65*/
const myNode65 = object.addBox();
myNode65.point1.set(-1.2219,-2.8619,-18.0999);
myNode65.point2.set(1.2219,-1.0791,1.7078999999999986);
myNode65.innerRotation.center.set(0,0,0);
myNode65.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode65.innerRotation.angle.set(3.14159);
myNode65.isVisible = False

/* définition du node n°66*/
const myNode66_1 = object.addFuseOperation();
myNode66_1.leftArg.set(myNode63);
myNode66_1.rightArg.set(myNode63);
const myNode66_2 = object.addFuseOperation();
myNode66_2.leftArg.set(myNode66_1);
myNode66_2.rightArg.set(myNode64);
myNode66 = object.addFuseOperation();
myNode66.leftArg.set(myNode66_2);
myNode66.rightArg.set(myNode65);
myNode66.isVisible = False

/* définition du node n°67*/
const myNode67 = object.addBox();
myNode67.point1.set(-18.0999,-18.0999,0.3361);
myNode67.point2.set(18.0999,18.0999,18.099899999999998);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode67.innerRotation.angle.set(3.14159);
myNode67.isVisible = False

/* définition du node n°68*/
const myNode68 = object.addCylinder();
myNode68.point1.set(3.486,1.618,1.22305);
myNode68.point2.set(3.486,1.618,18.09995);
myNode68.radius.set(0.135);
myNode68.innerRotation.center.set(0,0,0);
myNode68.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode68.innerRotation.angle.set(1.5707926535897931);
myNode68.isVisible = False

/* définition du node n°69*/
const myNode69 = object.addCutOperation();
myNode69.leftArg.set(myNode67);
myNode69.rightArg.set(myNode68);
myNode69.isVisible = False

/* définition du node n°70*/
const myNode70 = object.addCylinder();
myNode70.point1.set(1.021,1.35,-18.0999);
myNode70.point2.set(1.021,1.35,-0.6830000000000034);
myNode70.radius.set(0.189);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode70.innerRotation.angle.set(1.5707926535897931);
myNode70.isVisible = False

/* définition du node n°71*/
const myNode71 = object.addCylinder();
myNode71.point1.set(1.176,-0.232,-18.1);
myNode71.point2.set(1.176,-0.232,18.099899999999998);
myNode71.radius.set(0.133);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(-0.03609661632946712,0.04378870199283992,1.3784735724079273);
myNode71.innerRotation.angle.set(1.3796411873961025);
myNode71.isVisible = False

/* définition du node n°72*/
const myNode72 = object.addFuseOperation();
myNode72.leftArg.set(myNode70);
myNode72.rightArg.set(myNode71);
myNode72.isVisible = False

/* définition du node n°73*/
const myNode73 = object.addCutOperation();
myNode73.leftArg.set(myNode69);
myNode73.rightArg.set(myNode72);
myNode73.isVisible = False

/* définition du node n°74*/
const myNode74 = object.addCommonOperation();
myNode74.leftArg.set(myNode66);
myNode74.rightArg.set(myNode73);
myNode74.isVisible = False

/* définition du node n°75*/
const myNode75 = object.addBox();
myNode75.point1.set(1.2231,-4.2549,-0.2209);
myNode75.point2.set(1.7629000000000001,-2.1011,0.31889999999999996);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode75.innerRotation.angle.set(1.5707999999999998);
myNode75.isVisible = False

/* définition du node n°76*/
const myNode76 = object.addCylinder();
myNode76.point1.set(-1.591,-2.856,1.2231);
myNode76.point2.set(-1.591,-2.856,1.7629000000000001);
myNode76.radius.set(0.116);
myNode76.innerRotation.center.set(0,0,0);
myNode76.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode76.innerRotation.angle.set(1.5707999999999998);
myNode76.isVisible = False

/* définition du node n°77*/
const myNode77 = object.addCylinder();
myNode77.point1.set(-4.188,0.589,1.2231);
myNode77.point2.set(-4.188,0.589,1.7629000000000001);
myNode77.radius.set(0.811);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode77.innerRotation.angle.set(1.5707926535897931);
myNode77.isVisible = False

/* définition du node n°78*/
const myNode78 = object.addCylinder();
myNode78.point1.set(-3.444,0.588,1.22305);
myNode78.point2.set(-3.444,0.588,1.76295);
myNode78.radius.set(0.271);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode78.innerRotation.angle.set(1.5707926535897931);
myNode78.isVisible = False

/* définition du node n°79*/
const myNode79 = object.addCylinder();
myNode79.point1.set(-4.255,0.589,-18.0999);
myNode79.point2.set(-4.255,0.589,1.7629999999999981);
myNode79.radius.set(0.254);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode79.innerRotation.angle.set(1.5707926535897931);
myNode79.isVisible = False

/* définition du node n°80*/
const myNode80 = object.addFuseOperation();
myNode80.leftArg.set(myNode78);
myNode80.rightArg.set(myNode79);
myNode80.isVisible = False

/* définition du node n°81*/
const myNode81 = object.addCutOperation();
myNode81.leftArg.set(myNode77);
myNode81.rightArg.set(myNode80);
myNode81.isVisible = False

/* définition du node n°82*/
const myNode82 = object.addBox();
myNode82.point1.set(-0.3809,2.4051,0.3361);
myNode82.point2.set(1.7079,2.8548999999999998,1.5989);
myNode82.innerRotation.center.set(0,0,0);
myNode82.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode82.innerRotation.angle.set(3.14159);
myNode82.isVisible = False

/* définition du node n°83*/
const myNode83 = object.addCylinder();
myNode83.point1.set(2.377,-0.837,-18.0999);
myNode83.point2.set(2.377,-0.837,18.099999999999998);
myNode83.radius.set(0.157);
myNode83.innerRotation.center.set(0,0,0);
myNode83.innerRotation.axis.set(-1.97304786885883,2.230125709098186,0.2073791021297825);
myNode83.innerRotation.angle.set(2.9848592367462174);
myNode83.isVisible = False

/* définition du node n°84*/
const myNode84 = object.addCutOperation();
myNode84.leftArg.set(myNode82);
myNode84.rightArg.set(myNode83);
myNode84.isVisible = False

/* définition du node n°85*/
const myNode85 = object.addBox();
myNode85.point1.set(1.2231,-18.0999,1.7081);
myNode85.point2.set(1.7629000000000001,2.969899999999999,4.9999);
myNode85.innerRotation.center.set(0,0,0);
myNode85.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode85.innerRotation.angle.set(3.14159);
myNode85.isVisible = False

/* définition du node n°86*/
const myNode86 = object.addCylinder();
myNode86.point1.set(3.486,1.618,-18.0999);
myNode86.point2.set(3.486,1.618,18.099999999999998);
myNode86.radius.set(0.135);
myNode86.innerRotation.center.set(0,0,0);
myNode86.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode86.innerRotation.angle.set(1.5707926535897931);
myNode86.isVisible = False

/* définition du node n°87*/
const myNode87 = object.addCutOperation();
myNode87.leftArg.set(myNode85);
myNode87.rightArg.set(myNode86);
myNode87.isVisible = False

/* définition du node n°88*/
const myNode88 = object.addCylinder();
myNode88.point1.set(4.669,-0.067,-18.0999);
myNode88.point2.set(4.669,-0.067,1.7089999999999996);
myNode88.radius.set(0.251);
myNode88.innerRotation.center.set(0,0,0);
myNode88.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode88.innerRotation.angle.set(1.5707926535897931);
myNode88.isVisible = False

/* définition du node n°89*/
const myNode89 = object.addCylinder();
myNode89.point1.set(3.486,-1.627,-18.0999);
myNode89.point2.set(3.486,-1.627,18.099999999999998);
myNode89.radius.set(0.135);
myNode89.innerRotation.center.set(0,0,0);
myNode89.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode89.innerRotation.angle.set(1.5707926535897931);
myNode89.isVisible = False

/* définition du node n°90*/
const myNode90 = object.addFuseOperation();
myNode90.leftArg.set(myNode88);
myNode90.rightArg.set(myNode89);
myNode90.isVisible = False

/* définition du node n°91*/
const myNode91 = object.addCutOperation();
myNode91.leftArg.set(myNode87);
myNode91.rightArg.set(myNode90);
myNode91.isVisible = False

/* définition du node n°92*/
const myNode92 = object.addCylinder();
myNode92.point1.set(4.668,-0.066,1.70905);
myNode92.point2.set(4.668,-0.066,18.09995);
myNode92.radius.set(0.162);
myNode92.innerRotation.center.set(0,0,0);
myNode92.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode92.innerRotation.angle.set(1.5707926535897931);
myNode92.isVisible = False

/* définition du node n°93*/
const myNode93 = object.addCutOperation();
myNode93.leftArg.set(myNode91);
myNode93.rightArg.set(myNode92);
myNode93.isVisible = False

/* définition du node n°94*/
const myNode94 = object.addBox();
myNode94.point1.set(-18.0999,-18.0999,-18.1);
myNode94.point2.set(18.099999999999998,-2.862000000000002,18.099899999999998);
myNode94.innerRotation.center.set(0,0,0);
myNode94.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode94.innerRotation.angle.set(3.14159);
myNode94.isVisible = False

/* définition du node n°95*/
const myNode95 = object.addCutOperation();
myNode95.leftArg.set(myNode93);
myNode95.rightArg.set(myNode94);
myNode95.isVisible = False

/* définition du node n°96*/
const myNode96 = object.addCylinder();
myNode96.point1.set(-0.528,1.783,1.7091);
myNode96.point2.set(-0.528,1.783,1.7629000000000001);
myNode96.radius.set(0.25);
myNode96.innerRotation.center.set(0,0,0);
myNode96.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode96.innerRotation.angle.set(1.5707926535897931);
myNode96.isVisible = False

/* définition du node n°97*/
const myNode97 = object.addCylinder();
myNode97.point1.set(-0.531,1.781,1.22305);
myNode97.point2.set(-0.531,1.781,1.76295);
myNode97.radius.set(0.161);
myNode97.innerRotation.center.set(0,0,0);
myNode97.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode97.innerRotation.angle.set(1.5707926535897931);
myNode97.isVisible = False

/* définition du node n°98*/
const myNode98 = object.addCutOperation();
myNode98.leftArg.set(myNode96);
myNode98.rightArg.set(myNode97);
myNode98.isVisible = False

/* définition du node n°99*/
const myNode99 = object.addBox();
myNode99.point1.set(-1.1149,2.8561,0.3361);
myNode99.point2.set(1.2229,2.9699,1.5989);
myNode99.innerRotation.center.set(0,0,0);
myNode99.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode99.innerRotation.angle.set(3.14159);
myNode99.isVisible = False

/* définition du node n°100*/
const myNode100 = object.addCylinder();
myNode100.point1.set(1.602,-2.868,-1.1149);
myNode100.point2.set(1.602,-2.868,1.2229);
myNode100.radius.set(0.103);
myNode100.innerRotation.center.set(0,0,0);
myNode100.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode100.innerRotation.angle.set(1.5707999999999998);
myNode100.isVisible = False

/* définition du node n°101*/
const myNode101 = object.addBox();
myNode101.point1.set(-1.1149,1.0811,0.3361);
myNode101.point2.set(1.2229,2.8559,1.7079);
myNode101.innerRotation.center.set(0,0,0);
myNode101.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode101.innerRotation.angle.set(3.14159);
myNode101.isVisible = False

/* définition du node n°102*/
const myNode102 = object.addBox();
myNode102.point1.set(-1.7629,0.4551,0.3361);
myNode102.point2.set(-0.6830999999999998,2.8558999999999997,1.7079);
myNode102.innerRotation.center.set(0,0,0);
myNode102.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode102.innerRotation.angle.set(3.14159);
myNode102.isVisible = False

/* définition du node n°103*/
const myNode103_1 = object.addFuseOperation();
myNode103_1.leftArg.set(myNode99);
myNode103_1.rightArg.set(myNode99);
const myNode103_2 = object.addFuseOperation();
myNode103_2.leftArg.set(myNode103_1);
myNode103_2.rightArg.set(myNode100);
const myNode103_3 = object.addFuseOperation();
myNode103_3.leftArg.set(myNode103_2);
myNode103_3.rightArg.set(myNode101);
myNode103 = object.addFuseOperation();
myNode103.leftArg.set(myNode103_3);
myNode103.rightArg.set(myNode102);
myNode103.isVisible = False

/* définition du node n°104*/
const myNode104 = object.addCylinder();
myNode104.point1.set(0.335,-0.548,-2.96995);
myNode104.point2.set(0.335,-0.548,-1.4400499999999998);
myNode104.radius.set(0.134);
myNode104.innerRotation.center.set(0,0,0);
myNode104.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode104.innerRotation.angle.set(2.094392392986396);
myNode104.isVisible = False

/* définition du node n°105*/
const myNode105 = object.addBox();
myNode105.point1.set(-1.76295,1.08105,0.76305);
myNode105.point2.set(-0.6830499999999999,2.85595,1.37295);
myNode105.innerRotation.center.set(0,0,0);
myNode105.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode105.innerRotation.angle.set(3.14159);
myNode105.isVisible = False

/* définition du node n°106*/
const myNode106 = object.addCylinder();
myNode106.point1.set(-1.413,-2.323,-1.70795);
myNode106.point2.set(-1.413,-2.323,18.09995);
myNode106.radius.set(0.594);
myNode106.innerRotation.center.set(0,0,0);
myNode106.innerRotation.axis.set(0.0,0.0,0.0);
myNode106.innerRotation.angle.set(0.0);
myNode106.isVisible = False

/* définition du node n°107*/
const myNode107_1 = object.addFuseOperation();
myNode107_1.leftArg.set(myNode104);
myNode107_1.rightArg.set(myNode104);
const myNode107_2 = object.addFuseOperation();
myNode107_2.leftArg.set(myNode107_1);
myNode107_2.rightArg.set(myNode3);
const myNode107_3 = object.addFuseOperation();
myNode107_3.leftArg.set(myNode107_2);
myNode107_3.rightArg.set(myNode105);
myNode107 = object.addFuseOperation();
myNode107.leftArg.set(myNode107_3);
myNode107.rightArg.set(myNode106);
myNode107.isVisible = False

/* définition du node n°108*/
const myNode108 = object.addCutOperation();
myNode108.leftArg.set(myNode103);
myNode108.rightArg.set(myNode107);
myNode108.isVisible = False

/* définition du node n°109*/
const myNode109 = object.addBox();
myNode109.point1.set(1.2231,-2.9689,-1.6019);
myNode109.point2.set(1.7629000000000001,-1.0791000000000002,0.3369);
myNode109.innerRotation.center.set(0,0,0);
myNode109.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode109.innerRotation.angle.set(3.14159);
myNode109.isVisible = False

/* définition du node n°110*/
const myNode110 = object.addCylinder();
myNode110.point1.set(-0.528,1.783,-18.0999);
myNode110.point2.set(-0.528,1.783,1.7629999999999981);
myNode110.radius.set(0.25);
myNode110.innerRotation.center.set(0,0,0);
myNode110.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode110.innerRotation.angle.set(1.5707926535897931);
myNode110.isVisible = False

/* définition du node n°111*/
const myNode111 = object.addCutOperation();
myNode111.leftArg.set(myNode109);
myNode111.rightArg.set(myNode110);
myNode111.isVisible = False

/* définition du node n°112*/
const myNode112 = object.addCylinder();
myNode112.point1.set(0.439,2.863,-0.3809);
myNode112.point2.set(0.439,2.863,1.2219);
myNode112.radius.set(0.104);
myNode112.innerRotation.center.set(0,0,0);
myNode112.innerRotation.axis.set(4.1682470084564275e-06,1.570792653585774,-4.1682470084564275e-06);
myNode112.innerRotation.angle.set(1.5707926535968346);
myNode112.isVisible = False

/* définition du node n°113*/
const myNode113 = object.addBox();
myNode113.point1.set(1.2231,-0.8779,-1.7069);
myNode113.point2.set(1.7629000000000001,2.8549,1.5989);
myNode113.innerRotation.center.set(0,0,0);
myNode113.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode113.innerRotation.angle.set(3.14159);
myNode113.isVisible = False

/* définition du node n°114*/
const myNode114 = object.addCylinder();
myNode114.point1.set(0.449,-2.859,-0.3809);
myNode114.point2.set(0.449,-2.859,1.7618999999999998);
myNode114.radius.set(0.113);
myNode114.innerRotation.center.set(0,0,0);
myNode114.innerRotation.axis.set(4.1682470084564275e-06,1.570792653585774,-4.1682470084564275e-06);
myNode114.innerRotation.angle.set(1.5707926535968346);
myNode114.isVisible = False

/* définition du node n°115*/
const myNode115 = object.addFuseOperation();
myNode115.leftArg.set(myNode113);
myNode115.rightArg.set(myNode114);
myNode115.isVisible = False

/* définition du node n°116*/
const myNode116 = object.addCutOperation();
myNode116.leftArg.set(myNode115);
myNode116.rightArg.set(myNode19);
myNode116.isVisible = False

/* définition du node n°117*/
const myNode117_1 = object.addFuseOperation();
myNode117_1.leftArg.set(myNode4);
myNode117_1.rightArg.set(myNode4);
const myNode117_2 = object.addFuseOperation();
myNode117_2.leftArg.set(myNode117_1);
myNode117_2.rightArg.set(myNode17);
const myNode117_3 = object.addFuseOperation();
myNode117_3.leftArg.set(myNode117_2);
myNode117_3.rightArg.set(myNode36);
const myNode117_4 = object.addFuseOperation();
myNode117_4.leftArg.set(myNode117_3);
myNode117_4.rightArg.set(myNode39);
const myNode117_5 = object.addFuseOperation();
myNode117_5.leftArg.set(myNode117_4);
myNode117_5.rightArg.set(myNode42);
const myNode117_6 = object.addFuseOperation();
myNode117_6.leftArg.set(myNode117_5);
myNode117_6.rightArg.set(myNode45);
const myNode117_7 = object.addFuseOperation();
myNode117_7.leftArg.set(myNode117_6);
myNode117_7.rightArg.set(myNode50);
const myNode117_8 = object.addFuseOperation();
myNode117_8.leftArg.set(myNode117_7);
myNode117_8.rightArg.set(myNode51);
const myNode117_9 = object.addFuseOperation();
myNode117_9.leftArg.set(myNode117_8);
myNode117_9.rightArg.set(myNode52);
const myNode117_10 = object.addFuseOperation();
myNode117_10.leftArg.set(myNode117_9);
myNode117_10.rightArg.set(myNode62);
const myNode117_11 = object.addFuseOperation();
myNode117_11.leftArg.set(myNode117_10);
myNode117_11.rightArg.set(myNode74);
const myNode117_12 = object.addFuseOperation();
myNode117_12.leftArg.set(myNode117_11);
myNode117_12.rightArg.set(myNode75);
const myNode117_13 = object.addFuseOperation();
myNode117_13.leftArg.set(myNode117_12);
myNode117_13.rightArg.set(myNode76);
const myNode117_14 = object.addFuseOperation();
myNode117_14.leftArg.set(myNode117_13);
myNode117_14.rightArg.set(myNode81);
const myNode117_15 = object.addFuseOperation();
myNode117_15.leftArg.set(myNode117_14);
myNode117_15.rightArg.set(myNode84);
const myNode117_16 = object.addFuseOperation();
myNode117_16.leftArg.set(myNode117_15);
myNode117_16.rightArg.set(myNode95);
const myNode117_17 = object.addFuseOperation();
myNode117_17.leftArg.set(myNode117_16);
myNode117_17.rightArg.set(myNode98);
const myNode117_18 = object.addFuseOperation();
myNode117_18.leftArg.set(myNode117_17);
myNode117_18.rightArg.set(myNode108);
const myNode117_19 = object.addFuseOperation();
myNode117_19.leftArg.set(myNode117_18);
myNode117_19.rightArg.set(myNode111);
const myNode117_20 = object.addFuseOperation();
myNode117_20.leftArg.set(myNode117_19);
myNode117_20.rightArg.set(myNode112);
myNode117 = object.addFuseOperation();
myNode117.leftArg.set(myNode117_20);
myNode117.rightArg.set(myNode116);
myNode117.isVisible = False

/* définition du node n°118*/
const myNode118 = object.addBox();
myNode118.point1.set(-2.1159,-3.5649,-5.9999);
myNode118.point2.set(2.1149000000000004,3.5639,5.9999);
myNode118.innerRotation.center.set(0,0,0);
myNode118.innerRotation.axis.set(0.0,0.0,0.0);
myNode118.innerRotation.angle.set(0.0);
myNode118.isVisible = False

/* définition du node n°119*/
const myNode119 = object.addCommonOperation();
myNode119.leftArg.set(myNode117);
myNode119.rightArg.set(myNode118);
myNode119.isVisible = True


/*END Geometry Object Definition*/