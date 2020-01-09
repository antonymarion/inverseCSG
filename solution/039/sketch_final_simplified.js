/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.9989,-5.7459,-2.3619);
myNode0.point2.set(5.9989,5.7449,2.3609000000000004);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(0.0,-0.0004999999999997229,-0.0004999999999997229);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-4.1549,-4.7879,-1.4709);
myNode1.point2.set(-2.7830999999999997,-4.392099999999999,1.5698999999999999);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.innerTranslation.vector.set(-3.4689999999999994,-4.59,0.04949999999999988);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(-3.603,-0.704,0.2311);
myNode2.point2.set(-3.603,-0.704,1.9679);
myNode2.radius.set(0.994);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode2.innerRotation.angle.set(3.141592653586273);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(-1.125,-0.702,3.4661);
myNode3.point2.set(-1.125,-0.702,4.9989);
myNode3.radius.set(0.448);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode3.innerRotation.angle.set(1.5707926535897931);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addBox();
myNode4.point1.set(-2.7819,-4.7879,-0.2289);
myNode4.point2.set(3.7069000000000005,3.3469000000000007,1.5699);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.innerTranslation.vector.set(0.46250000000000036,-0.7204999999999995,0.6705);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addBox();
myNode5.point1.set(2.7841,-1.7129,-1.9679);
myNode5.point2.set(4.4029,3.3468999999999998,-1.1000999999999999);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.innerTranslation.vector.set(3.5935,0.817,-1.534);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addBox();
myNode6.point1.set(3.7091,-4.5529,-1.4709);
myNode6.point2.set(4.4029,3.3468999999999998,1.5698999999999999);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.innerTranslation.vector.set(4.056,-0.6030000000000002,0.04949999999999988);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addBox();
myNode7.point1.set(-2.7819,-4.7879,-1.9679);
myNode7.point2.set(3.4629,-2.9391,1.5698999999999999);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);
myNode7.innerTranslation.vector.set(0.3405,-3.8634999999999997,-0.19900000000000007);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addBox();
myNode8.point1.set(-18.0994,-4.39045,-1.09845);
myNode8.point2.set(3.7074999999999996,-2.93855,-0.22954999999999992);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.innerTranslation.vector.set(-7.19595,-3.6645000000000003,-0.6639999999999999);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addCutOperation();
myNode9.leftArg.set(myNode7);
myNode9.rightArg.set(myNode8);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10_1 = myNode2.clone();
const myNode10_2 = object.addFuseOperation();
myNode10_2.leftArg.set(myNode10_1);
myNode10_2.rightArg.set(myNode3);
const myNode10_3 = object.addFuseOperation();
myNode10_3.leftArg.set(myNode10_2);
myNode10_3.rightArg.set(myNode4);
const myNode10_4 = object.addFuseOperation();
myNode10_4.leftArg.set(myNode10_3);
myNode10_4.rightArg.set(myNode5);
const myNode10_5 = object.addFuseOperation();
myNode10_5.leftArg.set(myNode10_4);
myNode10_5.rightArg.set(myNode6);
myNode10 = object.addFuseOperation();
myNode10.leftArg.set(myNode10_5);
myNode10.rightArg.set(myNode9);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addCylinder();
myNode11.point1.set(-3.603,-0.701,-1.57045);
myNode11.point2.set(-3.603,-0.701,18.099449999999997);
myNode11.radius.set(0.428);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode11.innerRotation.angle.set(3.141592653586273);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addBox();
myNode12.point1.set(3.46555,-1.71345,-18.0995);
myNode12.point2.set(18.09945,3.3474500000000003,-0.7275999999999989);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);
myNode12.innerTranslation.vector.set(10.7825,0.8170000000000002,-9.413549999999999);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addCylinder();
myNode13.point1.set(3.451,-1.694,-1.969);
myNode13.point2.set(3.451,-1.694,18.099999999999998);
myNode13.radius.set(0.26);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addCutOperation();
myNode14.leftArg.set(myNode12);
myNode14.rightArg.set(myNode13);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addBox();
myNode15.point1.set(-18.0994,-4.39045,-0.22945);
myNode15.point2.set(3.7074999999999996,18.099449999999997,18.09945);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);
myNode15.innerTranslation.vector.set(-7.19595,6.854499999999999,8.935);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(3.605,-0.703,-0.727);
myNode16.point2.set(3.605,-0.703,1.5710000000000002);
myNode16.radius.set(0.747);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addCutOperation();
myNode17.leftArg.set(myNode15);
myNode17.rightArg.set(myNode16);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(-1.483,-0.114,-18.0995);
myNode18.point2.set(-1.483,-0.114,18.099400000000003);
myNode18.radius.set(2.733);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(1.18359229880969,1.2044359286746318,-1.2044359286746318);
myNode18.innerRotation.angle.set(2.074179968654179);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addBox();
myNode19.point1.set(4.40455,-4.39045,-1.96845);
myNode19.point2.set(18.09945,3.3474499999999994,-0.23055000000000003);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(0.0,0.0,0.0);
myNode19.innerRotation.angle.set(0.0);
myNode19.innerTranslation.vector.set(11.252,-0.5215000000000005,-1.0995);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addCylinder();
myNode20.point1.set(3.605,-0.703,-18.0995);
myNode20.point2.set(3.605,-0.703,-0.7275999999999989);
myNode20.radius.set(0.747);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21_1 = myNode11.clone();
const myNode21_2 = object.addFuseOperation();
myNode21_2.leftArg.set(myNode21_1);
myNode21_2.rightArg.set(myNode14);
const myNode21_3 = object.addFuseOperation();
myNode21_3.leftArg.set(myNode21_2);
myNode21_3.rightArg.set(myNode17);
const myNode21_4 = object.addFuseOperation();
myNode21_4.leftArg.set(myNode21_3);
myNode21_4.rightArg.set(myNode18);
const myNode21_5 = object.addFuseOperation();
myNode21_5.leftArg.set(myNode21_4);
myNode21_5.rightArg.set(myNode19);
myNode21 = object.addFuseOperation();
myNode21.leftArg.set(myNode21_5);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addCutOperation();
myNode22.leftArg.set(myNode10);
myNode22.rightArg.set(myNode21);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addBox();
myNode23.point1.set(-2.7819,-18.0989,-1.9679);
myNode23.point2.set(4.149900000000001,0.2718999999999987,-0.23110000000000008);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);
myNode23.innerTranslation.vector.set(0.6840000000000002,-8.9135,-1.0995);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addCylinder();
myNode24.point1.set(3.465,3.397,-18.0989);
myNode24.point2.set(3.465,3.397,-1.4730999999999987);
myNode24.radius.set(0.244);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addFuseOperation();
myNode25.leftArg.set(myNode23);
myNode25.rightArg.set(myNode24);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addBox();
myNode26.point1.set(-18.0989,0.2741,-1.9679);
myNode26.point2.set(3.706900000000001,3.6449,1.5698999999999999);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);
myNode26.innerTranslation.vector.set(-7.196,1.9595,-0.19900000000000007);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addBox();
myNode27.point1.set(3.4661,0.0371,-1.4709);
myNode27.point2.set(18.0989,0.27190000000000003,1.5698999999999999);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);
myNode27.innerTranslation.vector.set(10.782499999999999,0.1545,0.04949999999999988);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addFuseOperation();
myNode28.leftArg.set(myNode26);
myNode28.rightArg.set(myNode27);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addCommonOperation();
myNode29.leftArg.set(myNode25);
myNode29.rightArg.set(myNode28);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addCylinder();
myNode30.point1.set(-3.47,-4.552,-1.9679);
myNode30.point2.set(-3.47,-4.552,-1.1000999999999999);
myNode30.radius.set(0.233);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addCylinder();
myNode31.point1.set(4.164,3.407,-1.4709);
myNode31.point2.set(4.164,3.407,1.5698999999999999);
myNode31.radius.set(0.236);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(0.0,0.0,0.0);
myNode31.innerRotation.angle.set(0.0);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addBox();
myNode32.point1.set(3.4661,2.9761,-1.4709);
myNode32.point2.set(4.1509,3.6449000000000003,1.5698999999999999);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);
myNode32.innerTranslation.vector.set(3.8085,3.3105,0.04949999999999988);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addBox();
myNode33.point1.set(3.7091,0.2741,-1.4709);
myNode33.point2.set(4.4029,3.3468999999999998,1.5698999999999999);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);
myNode33.innerTranslation.vector.set(4.056,1.8105,0.04949999999999988);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addBox();
myNode34.point1.set(-2.7819,0.0371,-1.4709);
myNode34.point2.set(3.4629,3.6449000000000003,1.5698999999999999);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(0.0,0.0,0.0);
myNode34.innerRotation.angle.set(0.0);
myNode34.innerTranslation.vector.set(0.3405,1.841,0.04949999999999988);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addCylinder();
myNode35.point1.set(-1.561,-0.001,0.03655);
myNode35.point2.set(-1.561,-0.001,4.78745);
myNode35.radius.set(1.958);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode35.innerRotation.angle.set(2.094392392986396);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addCutOperation();
myNode36.leftArg.set(myNode34);
myNode36.rightArg.set(myNode35);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37_1 = myNode31.clone();
const myNode37_2 = object.addFuseOperation();
myNode37_2.leftArg.set(myNode37_1);
myNode37_2.rightArg.set(myNode32);
const myNode37_3 = object.addFuseOperation();
myNode37_3.leftArg.set(myNode37_2);
myNode37_3.rightArg.set(myNode33);
myNode37 = object.addFuseOperation();
myNode37.leftArg.set(myNode37_3);
myNode37.rightArg.set(myNode36);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addBox();
myNode38.point1.set(-2.78245,0.03655,-1.47145);
myNode38.point2.set(3.46345,2.97445,1.5704500000000001);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(0.0,0.0,0.0);
myNode38.innerRotation.angle.set(0.0);
myNode38.innerTranslation.vector.set(0.3405,1.5055,0.0495000000000001);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addCutOperation();
myNode39.leftArg.set(myNode37);
myNode39.rightArg.set(myNode38);
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addBox();
myNode40.point1.set(-3.7069,-4.7879,-1.9679);
myNode40.point2.set(-2.7841,-2.9391,-1.1000999999999999);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(0.0,0.0,0.0);
myNode40.innerRotation.angle.set(0.0);
myNode40.innerTranslation.vector.set(-3.2455000000000003,-3.8634999999999997,-1.534);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41 = object.addBox();
myNode41.point1.set(-3.70745,-18.0995,-1.96845);
myNode41.point2.set(-3.43655,-4.554599999999999,-1.47255);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,0.0,0.0);
myNode41.innerRotation.angle.set(0.0);
myNode41.innerTranslation.vector.set(-3.572,-11.32705,-1.7205);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addCutOperation();
myNode42.leftArg.set(myNode40);
myNode42.rightArg.set(myNode41);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addBox();
myNode43.point1.set(-4.4029,-4.5529,-1.4709);
myNode43.point2.set(-3.7091,-2.9391000000000003,1.5698999999999999);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(0.0,0.0,0.0);
myNode43.innerRotation.angle.set(0.0);
myNode43.innerTranslation.vector.set(-4.056,-3.7460000000000004,0.04949999999999988);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44 = object.addCylinder();
myNode44.point1.set(-3.458,3.397,-1.9679);
myNode44.point2.set(-3.458,3.397,-1.1000999999999999);
myNode44.radius.set(0.249);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(0.0,0.0,0.0);
myNode44.innerRotation.angle.set(0.0);
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45 = object.addBox();
myNode45.point1.set(-3.4349,-1.4389,-1.9679);
myNode45.point2.set(-2.7840999999999996,3.6449,-1.1000999999999999);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(0.0,0.0,0.0);
myNode45.innerRotation.angle.set(0.0);
myNode45.innerTranslation.vector.set(-3.1094999999999997,1.103,-1.534);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addBox();
myNode46.point1.set(-4.1549,3.3491,-1.4709);
myNode46.point2.set(-3.4360999999999997,3.6449,1.5698999999999999);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(0.0,0.0,0.0);
myNode46.innerRotation.angle.set(0.0);
myNode46.innerTranslation.vector.set(-3.7954999999999997,3.497,0.04949999999999988);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addBox();
myNode47.point1.set(-4.4029,-1.7129,-1.9679);
myNode47.point2.set(-4.1581,-1.4411,-0.7281);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(0.0,0.0,0.0);
myNode47.innerRotation.angle.set(0.0);
myNode47.innerTranslation.vector.set(-4.2805,-1.5770000000000002,-1.3479999999999999);
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addCylinder();
myNode48.point1.set(3.602,-0.701,0.2311);
myNode48.point2.set(3.602,-0.701,1.9679);
myNode48.radius.set(0.992);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode48.innerRotation.angle.set(3.141592653586273);
myNode48.isVisible = false;

/* définition du node n°49*/
const myNode49 = object.addCylinder();
myNode49.point1.set(-1.515,-0.702,-4.9989);
myNode49.point2.set(-1.515,-0.702,-4.7280999999999995);
myNode49.radius.set(0.453);
myNode49.innerRotation.center.set(0,0,0);
myNode49.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode49.innerRotation.angle.set(1.5707926535897931);
myNode49.isVisible = false;

/* définition du node n°50*/
const myNode50 = object.addFuseOperation();
myNode50.leftArg.set(myNode48);
myNode50.rightArg.set(myNode49);
myNode50.isVisible = false;

/* définition du node n°51*/
const myNode51 = object.addBox();
myNode51.point1.set(-3.7069,-2.9369,-1.9679);
myNode51.point2.set(18.0989,0.27190000000000003,18.0989);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(0.0,0.0,0.0);
myNode51.innerRotation.angle.set(0.0);
myNode51.innerTranslation.vector.set(7.196000000000001,-1.3325,8.0655);
myNode51.isVisible = false;

/* définition du node n°52*/
const myNode52 = object.addBox();
myNode52.point1.set(-18.0989,-2.9369,-0.2289);
myNode52.point2.set(-4.158100000000001,2.9739,18.0989);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,0.0,0.0);
myNode52.innerRotation.angle.set(0.0);
myNode52.innerTranslation.vector.set(-11.1285,0.01849999999999996,8.935);
myNode52.isVisible = false;

/* définition du node n°53*/
const myNode53 = object.addFuseOperation();
myNode53.leftArg.set(myNode51);
myNode53.rightArg.set(myNode52);
myNode53.isVisible = false;

/* définition du node n°54*/
const myNode54 = object.addCommonOperation();
myNode54.leftArg.set(myNode50);
myNode54.rightArg.set(myNode53);
myNode54.isVisible = false;

/* définition du node n°55*/
const myNode55_1 = myNode44.clone();
const myNode55_2 = object.addFuseOperation();
myNode55_2.leftArg.set(myNode55_1);
myNode55_2.rightArg.set(myNode45);
const myNode55_3 = object.addFuseOperation();
myNode55_3.leftArg.set(myNode55_2);
myNode55_3.rightArg.set(myNode46);
const myNode55_4 = object.addFuseOperation();
myNode55_4.leftArg.set(myNode55_3);
myNode55_4.rightArg.set(myNode47);
myNode55 = object.addFuseOperation();
myNode55.leftArg.set(myNode55_4);
myNode55.rightArg.set(myNode54);
myNode55.isVisible = false;

/* définition du node n°56*/
const myNode56 = object.addCylinder();
myNode56.point1.set(3.606,-0.701,0.23055);
myNode56.point2.set(3.606,-0.701,1.96845);
myNode56.radius.set(0.747);
myNode56.innerRotation.center.set(0,0,0);
myNode56.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode56.innerRotation.angle.set(3.141592653586273);
myNode56.isVisible = false;

/* définition du node n°57*/
const myNode57 = object.addBox();
myNode57.point1.set(-4.40345,-1.71345,-1.96845);
myNode57.point2.set(-3.4365500000000004,0.2724500000000001,-0.7275500000000001);
myNode57.innerRotation.center.set(0,0,0);
myNode57.innerRotation.axis.set(0.0,0.0,0.0);
myNode57.innerRotation.angle.set(0.0);
myNode57.innerTranslation.vector.set(-3.9200000000000004,-0.7204999999999999,-1.348);
myNode57.isVisible = false;

/* définition du node n°58*/
const myNode58 = object.addCylinder();
myNode58.point1.set(-3.436,-1.714,-1.969);
myNode58.point2.set(-3.436,-1.714,-1.472);
myNode58.radius.set(0.285);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(0.0,0.0,0.0);
myNode58.innerRotation.angle.set(0.0);
myNode58.isVisible = false;

/* définition du node n°59*/
const myNode59 = object.addCutOperation();
myNode59.leftArg.set(myNode57);
myNode59.rightArg.set(myNode58);
myNode59.isVisible = false;

/* définition du node n°60*/
const myNode60 = object.addBox();
myNode60.point1.set(-4.156,-1.714,-1.472);
myNode60.point2.set(-3.4349999999999996,0.27300000000000013,1.5710000000000002);
myNode60.innerRotation.center.set(0,0,0);
myNode60.innerRotation.axis.set(0.0,0.0,0.0);
myNode60.innerRotation.angle.set(0.0);
myNode60.innerTranslation.vector.set(-3.7954999999999997,-0.7204999999999999,0.0495000000000001);
myNode60.isVisible = false;

/* définition du node n°61*/
const myNode61 = object.addCylinder();
myNode61.point1.set(-4.157,-1.687,-1.472);
myNode61.point2.set(-4.157,-1.687,18.099999999999998);
myNode61.radius.set(0.246);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(0.0,0.0,0.0);
myNode61.innerRotation.angle.set(0.0);
myNode61.isVisible = false;

/* définition du node n°62*/
const myNode62 = object.addFuseOperation();
myNode62.leftArg.set(myNode60);
myNode62.rightArg.set(myNode61);
myNode62.isVisible = false;

/* définition du node n°63*/
const myNode63 = object.addCutOperation();
myNode63.leftArg.set(myNode59);
myNode63.rightArg.set(myNode62);
myNode63.isVisible = false;

/* définition du node n°64*/
const myNode64 = object.addFuseOperation();
myNode64.leftArg.set(myNode56);
myNode64.rightArg.set(myNode63);
myNode64.isVisible = false;

/* définition du node n°65*/
const myNode65 = object.addCutOperation();
myNode65.leftArg.set(myNode55);
myNode65.rightArg.set(myNode64);
myNode65.isVisible = false;

/* définition du node n°66*/
const myNode66 = object.addCylinder();
myNode66.point1.set(4.139,-4.525,-1.5699);
myNode66.point2.set(4.139,-4.525,1.4708999999999999);
myNode66.radius.set(0.269);
myNode66.innerRotation.center.set(0,0,0);
myNode66.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode66.innerRotation.angle.set(3.141592653586273);
myNode66.isVisible = false;

/* définition du node n°67*/
const myNode67 = object.addBox();
myNode67.point1.set(-3.7069,-2.9369,-1.9679);
myNode67.point2.set(-2.7841,2.9739,-1.1000999999999999);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(0.0,0.0,0.0);
myNode67.innerRotation.angle.set(0.0);
myNode67.innerTranslation.vector.set(-3.2455000000000003,0.01849999999999996,-1.534);
myNode67.isVisible = false;

/* définition du node n°68*/
const myNode68 = object.addCylinder();
myNode68.point1.set(3.606,-0.701,-1.5699);
myNode68.point2.set(3.606,-0.701,0.7258999999999998);
myNode68.radius.set(0.747);
myNode68.innerRotation.center.set(0,0,0);
myNode68.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode68.innerRotation.angle.set(3.141592653586273);
myNode68.isVisible = false;

/* définition du node n°69*/
const myNode69 = object.addBox();
myNode69.point1.set(-4.4029,-2.9369,-1.4709);
myNode69.point2.set(-3.7091,3.3469,1.5698999999999999);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(0.0,0.0,0.0);
myNode69.innerRotation.angle.set(0.0);
myNode69.innerTranslation.vector.set(-4.056,0.20500000000000007,0.04949999999999988);
myNode69.isVisible = false;

/* définition du node n°70*/
const myNode70 = object.addBox();
myNode70.point1.set(-4.1549,2.9761,-1.9679);
myNode70.point2.set(-2.7830999999999997,3.6449000000000003,1.5698999999999999);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(0.0,0.0,0.0);
myNode70.innerRotation.angle.set(0.0);
myNode70.innerTranslation.vector.set(-3.4689999999999994,3.3105,-0.19900000000000007);
myNode70.isVisible = false;

/* définition du node n°71*/
const myNode71 = object.addCylinder();
myNode71.point1.set(4.156,3.396,-1.5699);
myNode71.point2.set(4.156,3.396,1.4708999999999999);
myNode71.radius.set(0.248);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode71.innerRotation.angle.set(3.141592653586273);
myNode71.isVisible = false;

/* définition du node n°72*/
const myNode72 = object.addCylinder();
myNode72.point1.set(-1.125,-0.702,-4.9989);
myNode72.point2.set(-1.125,-0.702,-3.7091);
myNode72.radius.set(0.448);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode72.innerRotation.angle.set(1.5707926535897931);
myNode72.isVisible = false;

/* définition du node n°73*/
const myNode73_1 = myNode67.clone();
const myNode73_2 = object.addFuseOperation();
myNode73_2.leftArg.set(myNode73_1);
myNode73_2.rightArg.set(myNode68);
const myNode73_3 = object.addFuseOperation();
myNode73_3.leftArg.set(myNode73_2);
myNode73_3.rightArg.set(myNode69);
const myNode73_4 = object.addFuseOperation();
myNode73_4.leftArg.set(myNode73_3);
myNode73_4.rightArg.set(myNode70);
const myNode73_5 = object.addFuseOperation();
myNode73_5.leftArg.set(myNode73_4);
myNode73_5.rightArg.set(myNode71);
myNode73 = object.addFuseOperation();
myNode73.leftArg.set(myNode73_5);
myNode73.rightArg.set(myNode72);
myNode73.isVisible = false;

/* définition du node n°74*/
const myNode74 = object.addBox();
myNode74.point1.set(-18.0995,-1.43945,-1.96845);
myNode74.point2.set(-3.708599999999999,0.035450000000000204,-0.7275500000000001);
myNode74.innerRotation.center.set(0,0,0);
myNode74.innerRotation.axis.set(0.0,0.0,0.0);
myNode74.innerRotation.angle.set(0.0);
myNode74.innerTranslation.vector.set(-10.904049999999998,-0.7019999999999998,-1.348);
myNode74.isVisible = false;

/* définition du node n°75*/
const myNode75 = object.addBox();
myNode75.point1.set(-4.40345,-1.71345,-1.96845);
myNode75.point2.set(-4.1575500000000005,0.2724500000000001,-0.7275500000000001);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(0.0,0.0,0.0);
myNode75.innerRotation.angle.set(0.0);
myNode75.innerTranslation.vector.set(-4.2805,-0.7204999999999999,-1.348);
myNode75.isVisible = false;

/* définition du node n°76*/
const myNode76 = object.addBox();
myNode76.point1.set(-4.40345,-1.71345,-1.96845);
myNode76.point2.set(-3.4365500000000004,18.099449999999997,-1.47255);
myNode76.innerRotation.center.set(0,0,0);
myNode76.innerRotation.axis.set(0.0,0.0,0.0);
myNode76.innerRotation.angle.set(0.0);
myNode76.innerTranslation.vector.set(-3.9200000000000004,8.193,-1.7205);
myNode76.isVisible = false;

/* définition du node n°77*/
const myNode77 = object.addFuseOperation();
myNode77.leftArg.set(myNode75);
myNode77.rightArg.set(myNode76);
myNode77.isVisible = false;

/* définition du node n°78*/
const myNode78 = object.addBox();
myNode78.point1.set(-3.708,0.036,-1.969);
myNode78.point2.set(-2.7830000000000004,3.348,-1.0990000000000002);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(0.0,0.0,0.0);
myNode78.innerRotation.angle.set(0.0);
myNode78.innerTranslation.vector.set(-3.2455000000000003,1.692,-1.534);
myNode78.isVisible = false;

/* définition du node n°79*/
const myNode79 = object.addCylinder();
myNode79.point1.set(-4.162,0.273,-1.969);
myNode79.point2.set(-4.162,0.273,-0.7270000000000001);
myNode79.radius.set(0.237);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(0.0,0.0,0.0);
myNode79.innerRotation.angle.set(0.0);
myNode79.isVisible = false;

/* définition du node n°80*/
const myNode80 = object.addFuseOperation();
myNode80.leftArg.set(myNode78);
myNode80.rightArg.set(myNode79);
myNode80.isVisible = false;

/* définition du node n°81*/
const myNode81 = object.addCutOperation();
myNode81.leftArg.set(myNode77);
myNode81.rightArg.set(myNode80);
myNode81.isVisible = false;

/* définition du node n°82*/
const myNode82 = object.addBox();
myNode82.point1.set(-3.70745,-1.43945,-1.96845);
myNode82.point2.set(-2.78355,0.2724500000000001,-0.7275500000000001);
myNode82.innerRotation.center.set(0,0,0);
myNode82.innerRotation.axis.set(0.0,0.0,0.0);
myNode82.innerRotation.angle.set(0.0);
myNode82.innerTranslation.vector.set(-3.2455000000000003,-0.5834999999999999,-1.348);
myNode82.isVisible = false;

/* définition du node n°83*/
const myNode83 = object.addCylinder();
myNode83.point1.set(-3.451,0.286,-18.1);
myNode83.point2.set(-3.451,0.286,-1.0990000000000002);
myNode83.radius.set(0.257);
myNode83.innerRotation.center.set(0,0,0);
myNode83.innerRotation.axis.set(0.0,0.0,0.0);
myNode83.innerRotation.angle.set(0.0);
myNode83.isVisible = false;

/* définition du node n°84*/
const myNode84 = object.addCutOperation();
myNode84.leftArg.set(myNode82);
myNode84.rightArg.set(myNode83);
myNode84.isVisible = false;

/* définition du node n°85*/
const myNode85 = object.addCylinder();
myNode85.point1.set(3.604,-0.702,-18.0995);
myNode85.point2.set(3.604,-0.702,0.7264000000000017);
myNode85.radius.set(0.428);
myNode85.innerRotation.center.set(0,0,0);
myNode85.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode85.innerRotation.angle.set(3.141592653586273);
myNode85.isVisible = false;

/* définition du node n°86*/
const myNode86_1 = myNode74.clone();
const myNode86_2 = object.addFuseOperation();
myNode86_2.leftArg.set(myNode86_1);
myNode86_2.rightArg.set(myNode81);
const myNode86_3 = object.addFuseOperation();
myNode86_3.leftArg.set(myNode86_2);
myNode86_3.rightArg.set(myNode84);
myNode86 = object.addFuseOperation();
myNode86.leftArg.set(myNode86_3);
myNode86.rightArg.set(myNode85);
myNode86.isVisible = false;

/* définition du node n°87*/
const myNode87 = object.addCutOperation();
myNode87.leftArg.set(myNode73);
myNode87.rightArg.set(myNode86);
myNode87.isVisible = false;

/* définition du node n°88*/
const myNode88 = object.addBox();
myNode88.point1.set(3.4661,0.2741,-18.0989);
myNode88.point2.set(3.7069,3.6449,-1.1001000000000012);
myNode88.innerRotation.center.set(0,0,0);
myNode88.innerRotation.axis.set(0.0,0.0,0.0);
myNode88.innerRotation.angle.set(0.0);
myNode88.innerTranslation.vector.set(3.5865,1.9595,-9.5995);
myNode88.isVisible = false;

/* définition du node n°89*/
const myNode89 = object.addBox();
myNode89.point1.set(-2.7819,2.9761,-18.0989);
myNode89.point2.set(3.7069000000000005,3.6449000000000003,-0.23110000000000142);
myNode89.innerRotation.center.set(0,0,0);
myNode89.innerRotation.axis.set(0.0,0.0,0.0);
myNode89.innerRotation.angle.set(0.0);
myNode89.innerTranslation.vector.set(0.46250000000000036,3.3105,-9.165000000000001);
myNode89.isVisible = false;

/* définition du node n°90*/
const myNode90 = object.addFuseOperation();
myNode90.leftArg.set(myNode88);
myNode90.rightArg.set(myNode89);
myNode90.isVisible = false;

/* définition du node n°91*/
const myNode91 = object.addBox();
myNode91.point1.set(3.4661,-18.0989,-1.9679);
myNode91.point2.set(4.1509,3.346899999999998,18.0989);
myNode91.innerRotation.center.set(0,0,0);
myNode91.innerRotation.axis.set(0.0,0.0,0.0);
myNode91.innerRotation.angle.set(0.0);
myNode91.innerTranslation.vector.set(3.8085,-7.376000000000001,8.0655);
myNode91.isVisible = false;

/* définition du node n°92*/
const myNode92 = object.addBox();
myNode92.point1.set(-2.7819,2.9761,-1.9679);
myNode92.point2.set(3.4629,3.6449000000000003,-1.4731);
myNode92.innerRotation.center.set(0,0,0);
myNode92.innerRotation.axis.set(0.0,0.0,0.0);
myNode92.innerRotation.angle.set(0.0);
myNode92.innerTranslation.vector.set(0.3405,3.3105,-1.7205);
myNode92.isVisible = false;

/* définition du node n°93*/
const myNode93 = object.addFuseOperation();
myNode93.leftArg.set(myNode91);
myNode93.rightArg.set(myNode92);
myNode93.isVisible = false;

/* définition du node n°94*/
const myNode94 = object.addCommonOperation();
myNode94.leftArg.set(myNode90);
myNode94.rightArg.set(myNode93);
myNode94.isVisible = false;

/* définition du node n°95*/
const myNode95 = object.addBox();
myNode95.point1.set(-3.7069,-4.3899,-1.4709);
myNode95.point2.set(18.0989,-2.9391,-1.1001);
myNode95.innerRotation.center.set(0,0,0);
myNode95.innerRotation.axis.set(0.0,0.0,0.0);
myNode95.innerRotation.angle.set(0.0);
myNode95.innerTranslation.vector.set(7.196000000000001,-3.6645,-1.2855);
myNode95.isVisible = false;

/* définition du node n°96*/
const myNode96 = object.addCylinder();
myNode96.point1.set(-1.483,-0.114,-18.0989);
myNode96.point2.set(-1.483,-0.114,18.0989);
myNode96.radius.set(2.733);
myNode96.innerRotation.center.set(0,0,0);
myNode96.innerRotation.axis.set(1.18359229880969,1.2044359286746318,-1.2044359286746318);
myNode96.innerRotation.angle.set(2.074179968654179);
myNode96.isVisible = false;

/* définition du node n°97*/
const myNode97 = object.addCommonOperation();
myNode97.leftArg.set(myNode95);
myNode97.rightArg.set(myNode96);
myNode97.isVisible = false;

/* définition du node n°98*/
const myNode98 = object.addCylinder();
myNode98.point1.set(3.45,0.294,-1.9679);
myNode98.point2.set(3.45,0.294,-1.4731);
myNode98.radius.set(0.264);
myNode98.innerRotation.center.set(0,0,0);
myNode98.innerRotation.axis.set(0.0,0.0,0.0);
myNode98.innerRotation.angle.set(0.0);
myNode98.isVisible = false;

/* définition du node n°99*/
const myNode99 = object.addCylinder();
myNode99.point1.set(4.151,0.293,-1.4709);
myNode99.point2.set(4.151,0.293,1.5698999999999999);
myNode99.radius.set(0.257);
myNode99.innerRotation.center.set(0,0,0);
myNode99.innerRotation.axis.set(0.0,0.0,0.0);
myNode99.innerRotation.angle.set(0.0);
myNode99.isVisible = false;

/* définition du node n°100*/
const myNode100 = object.addBox();
myNode100.point1.set(-2.7819,3.3491,-1.4709);
myNode100.point2.set(4.149900000000001,4.7869,1.5698999999999999);
myNode100.innerRotation.center.set(0,0,0);
myNode100.innerRotation.axis.set(0.0,0.0,0.0);
myNode100.innerRotation.angle.set(0.0);
myNode100.innerTranslation.vector.set(0.6840000000000002,4.068,0.04949999999999988);
myNode100.isVisible = false;

/* définition du node n°101*/
const myNode101 = object.addCylinder();
myNode101.point1.set(-1.56,-0.002,-18.0995);
myNode101.point2.set(-1.56,-0.002,4.787400000000002);
myNode101.radius.set(1.483);
myNode101.innerRotation.center.set(0,0,0);
myNode101.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode101.innerRotation.angle.set(2.094392392986396);
myNode101.isVisible = false;

/* définition du node n°102*/
const myNode102 = object.addCutOperation();
myNode102.leftArg.set(myNode100);
myNode102.rightArg.set(myNode101);
myNode102.isVisible = false;

/* définition du node n°103*/
const myNode103_1 = myNode98.clone();
const myNode103_2 = object.addFuseOperation();
myNode103_2.leftArg.set(myNode103_1);
myNode103_2.rightArg.set(myNode99);
myNode103 = object.addFuseOperation();
myNode103.leftArg.set(myNode103_2);
myNode103.rightArg.set(myNode102);
myNode103.isVisible = false;

/* définition du node n°104*/
const myNode104 = object.addSphere();
myNode104.center.set(-0.004,1.418,1.584);
myNode104.radius.set(3.4288044563666795);
myNode104.isVisible = false;

/* définition du node n°105*/
const myNode105 = object.addSphere();
myNode105.center.set(0.004,3.07,1.571);
myNode105.radius.set(2.610800643480846);
myNode105.isVisible = false;

/* définition du node n°106*/
const myNode106 = object.addCylinder();
myNode106.point1.set(-1.568,0.001,3.3491);
myNode106.point2.set(-1.568,0.001,4.7869);
myNode106.radius.set(2.107);
myNode106.innerRotation.center.set(0,0,0);
myNode106.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode106.innerRotation.angle.set(2.094392392986396);
myNode106.isVisible = false;

/* définition du node n°107*/
const myNode107 = object.addCommonOperation();
myNode107.leftArg.set(myNode105);
myNode107.rightArg.set(myNode106);
myNode107.isVisible = false;

/* définition du node n°108*/
const myNode108 = object.addBox();
myNode108.point1.set(-18.0989,0.0371,-18.0989);
myNode108.point2.set(4.402899999999999,3.6449000000000003,-0.23110000000000142);
myNode108.innerRotation.center.set(0,0,0);
myNode108.innerRotation.axis.set(0.0,0.0,0.0);
myNode108.innerRotation.angle.set(0.0);
myNode108.innerTranslation.vector.set(-6.848000000000001,1.841,-9.165000000000001);
myNode108.isVisible = false;

/* définition du node n°109*/
const myNode109_1 = myNode104.clone();
const myNode109_2 = object.addFuseOperation();
myNode109_2.leftArg.set(myNode109_1);
myNode109_2.rightArg.set(myNode107);
myNode109 = object.addFuseOperation();
myNode109.leftArg.set(myNode109_2);
myNode109.rightArg.set(myNode108);
myNode109.isVisible = false;

/* définition du node n°110*/
const myNode110 = object.addCommonOperation();
myNode110.leftArg.set(myNode103);
myNode110.rightArg.set(myNode109);
myNode110.isVisible = false;

/* définition du node n°111*/
const myNode111 = object.addBox();
myNode111.point1.set(2.7841,-4.7879,-1.9679);
myNode111.point2.set(4.9989,3.3469000000000007,18.0989);
myNode111.innerRotation.center.set(0,0,0);
myNode111.innerRotation.axis.set(0.0,0.0,0.0);
myNode111.innerRotation.angle.set(0.0);
myNode111.innerTranslation.vector.set(3.8914999999999997,-0.7204999999999995,8.0655);
myNode111.isVisible = false;

/* définition du node n°112*/
const myNode112 = object.addBox();
myNode112.point1.set(2.78355,-4.39045,-1.09845);
myNode112.point2.set(3.70745,-1.7135500000000006,1.5714500000000002);
myNode112.innerRotation.center.set(0,0,0);
myNode112.innerRotation.axis.set(0.0,0.0,0.0);
myNode112.innerRotation.angle.set(0.0);
myNode112.innerTranslation.vector.set(3.2455,-3.0520000000000005,0.23650000000000015);
myNode112.isVisible = false;

/* définition du node n°113*/
const myNode113 = object.addCutOperation();
myNode113.leftArg.set(myNode111);
myNode113.rightArg.set(myNode112);
myNode113.isVisible = false;

/* définition du node n°114*/
const myNode114 = object.addBox();
myNode114.point1.set(-2.78245,-4.78845,-1.96845);
myNode114.point2.set(4.99945,18.099449999999997,18.09945);
myNode114.innerRotation.center.set(0,0,0);
myNode114.innerRotation.axis.set(0.0,0.0,0.0);
myNode114.innerRotation.angle.set(0.0);
myNode114.innerTranslation.vector.set(1.1085000000000003,6.655499999999999,8.0655);
myNode114.isVisible = false;

/* définition du node n°115*/
const myNode115 = object.addBox();
myNode115.point1.set(-18.1,-4.391,-1.969);
myNode115.point2.set(3.7079999999999984,-1.713,-0.22999999999999998);
myNode115.innerRotation.center.set(0,0,0);
myNode115.innerRotation.axis.set(0.0,0.0,0.0);
myNode115.innerRotation.angle.set(0.0);
myNode115.innerTranslation.vector.set(-7.1960000000000015,-3.052,-1.0995);
myNode115.isVisible = false;

/* définition du node n°116*/
const myNode116 = object.addCutOperation();
myNode116.leftArg.set(myNode114);
myNode116.rightArg.set(myNode115);
myNode116.isVisible = false;

/* définition du node n°117*/
const myNode117 = object.addCylinder();
myNode117.point1.set(4.171,-4.554,-1.472);
myNode117.point2.set(4.171,-4.554,1.5710000000000002);
myNode117.radius.set(0.228);
myNode117.innerRotation.center.set(0,0,0);
myNode117.innerRotation.axis.set(0.0,0.0,0.0);
myNode117.innerRotation.angle.set(0.0);
myNode117.isVisible = false;

/* définition du node n°118*/
const myNode118 = object.addCylinder();
myNode118.point1.set(3.452,-4.528,-18.1);
myNode118.point2.set(3.452,-4.528,1.570999999999998);
myNode118.radius.set(0.261);
myNode118.innerRotation.center.set(0,0,0);
myNode118.innerRotation.axis.set(0.0,0.0,0.0);
myNode118.innerRotation.angle.set(0.0);
myNode118.isVisible = false;

/* définition du node n°119*/
const myNode119 = object.addFuseOperation();
myNode119.leftArg.set(myNode117);
myNode119.rightArg.set(myNode118);
myNode119.isVisible = false;

/* définition du node n°120*/
const myNode120 = object.addCutOperation();
myNode120.leftArg.set(myNode116);
myNode120.rightArg.set(myNode119);
myNode120.isVisible = false;

/* définition du node n°121*/
const myNode121 = object.addCylinder();
myNode121.point1.set(-1.515,-0.702,4.727);
myNode121.point2.set(-1.515,-0.702,18.1);
myNode121.radius.set(0.453);
myNode121.innerRotation.center.set(0,0,0);
myNode121.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode121.innerRotation.angle.set(1.5707926535897931);
myNode121.isVisible = false;

/* définition du node n°122*/
const myNode122 = object.addBox();
myNode122.point1.set(3.465,-4.789,-1.472);
myNode122.point2.set(4.152,-1.4399999999999995,-0.22999999999999998);
myNode122.innerRotation.center.set(0,0,0);
myNode122.innerRotation.axis.set(0.0,0.0,0.0);
myNode122.innerRotation.angle.set(0.0);
myNode122.innerTranslation.vector.set(3.8085,-3.1144999999999996,-0.851);
myNode122.isVisible = false;

/* définition du node n°123*/
const myNode123 = object.addCylinder();
myNode123.point1.set(4.148,-1.694,-1.472);
myNode123.point2.set(4.148,-1.694,1.5710000000000002);
myNode123.radius.set(0.256);
myNode123.innerRotation.center.set(0,0,0);
myNode123.innerRotation.axis.set(0.0,0.0,0.0);
myNode123.innerRotation.angle.set(0.0);
myNode123.isVisible = false;

/* définition du node n°124*/
const myNode124 = object.addBox();
myNode124.point1.set(3.708,-4.789,-0.23);
myNode124.point2.set(4.151,-1.4399999999999995,1.571);
myNode124.innerRotation.center.set(0,0,0);
myNode124.innerRotation.axis.set(0.0,0.0,0.0);
myNode124.innerRotation.angle.set(0.0);
myNode124.innerTranslation.vector.set(3.9295,-3.1144999999999996,0.6705);
myNode124.isVisible = false;

/* définition du node n°125*/
const myNode125_1 = myNode121.clone();
const myNode125_2 = object.addFuseOperation();
myNode125_2.leftArg.set(myNode125_1);
myNode125_2.rightArg.set(myNode122);
const myNode125_3 = object.addFuseOperation();
myNode125_3.leftArg.set(myNode125_2);
myNode125_3.rightArg.set(myNode123);
myNode125 = object.addFuseOperation();
myNode125.leftArg.set(myNode125_3);
myNode125.rightArg.set(myNode124);
myNode125.isVisible = false;

/* définition du node n°126*/
const myNode126 = object.addCutOperation();
myNode126.leftArg.set(myNode120);
myNode126.rightArg.set(myNode125);
myNode126.isVisible = false;

/* définition du node n°127*/
const myNode127 = object.addCutOperation();
myNode127.leftArg.set(myNode113);
myNode127.rightArg.set(myNode126);
myNode127.isVisible = false;

/* définition du node n°128*/
const myNode128_1 = myNode1.clone();
const myNode128_2 = object.addFuseOperation();
myNode128_2.leftArg.set(myNode128_1);
myNode128_2.rightArg.set(myNode22);
const myNode128_3 = object.addFuseOperation();
myNode128_3.leftArg.set(myNode128_2);
myNode128_3.rightArg.set(myNode29);
const myNode128_4 = object.addFuseOperation();
myNode128_4.leftArg.set(myNode128_3);
myNode128_4.rightArg.set(myNode30);
const myNode128_5 = object.addFuseOperation();
myNode128_5.leftArg.set(myNode128_4);
myNode128_5.rightArg.set(myNode39);
const myNode128_6 = object.addFuseOperation();
myNode128_6.leftArg.set(myNode128_5);
myNode128_6.rightArg.set(myNode42);
const myNode128_7 = object.addFuseOperation();
myNode128_7.leftArg.set(myNode128_6);
myNode128_7.rightArg.set(myNode43);
const myNode128_8 = object.addFuseOperation();
myNode128_8.leftArg.set(myNode128_7);
myNode128_8.rightArg.set(myNode65);
const myNode128_9 = object.addFuseOperation();
myNode128_9.leftArg.set(myNode128_8);
myNode128_9.rightArg.set(myNode66);
const myNode128_10 = object.addFuseOperation();
myNode128_10.leftArg.set(myNode128_9);
myNode128_10.rightArg.set(myNode87);
const myNode128_11 = object.addFuseOperation();
myNode128_11.leftArg.set(myNode128_10);
myNode128_11.rightArg.set(myNode94);
const myNode128_12 = object.addFuseOperation();
myNode128_12.leftArg.set(myNode128_11);
myNode128_12.rightArg.set(myNode97);
const myNode128_13 = object.addFuseOperation();
myNode128_13.leftArg.set(myNode128_12);
myNode128_13.rightArg.set(myNode110);
myNode128 = object.addFuseOperation();
myNode128.leftArg.set(myNode128_13);
myNode128.rightArg.set(myNode127);
myNode128.isVisible = false;

/* définition du node n°129*/
const myNode129 = object.addCommonOperation();
myNode129.leftArg.set(myNode0);
myNode129.rightArg.set(myNode128);
myNode129.isVisible = true;


/*END Geometry Object Definition*/