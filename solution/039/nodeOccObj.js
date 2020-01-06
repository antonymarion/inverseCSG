/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.9989,-5.7459,-2.3619);
myNode0.point2.set(5.9989,5.7449,2.3609000000000004);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.isVisible = False

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(4.139,-4.525,-1.5699);
myNode1.point2.set(4.139,-4.525,1.4708999999999999);
myNode1.radius.set(0.269);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode1.innerRotation.angle.set(3.141592653586273);
myNode1.isVisible = False

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(3.606,-0.701,-1.5699);
myNode2.point2.set(3.606,-0.701,0.7258999999999998);
myNode2.radius.set(0.747);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode2.innerRotation.angle.set(3.141592653586273);
myNode2.isVisible = False

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(-1.125,-0.702,-4.9989);
myNode3.point2.set(-1.125,-0.702,-3.7091);
myNode3.radius.set(0.448);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode3.innerRotation.angle.set(1.5707926535897931);
myNode3.isVisible = False

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(4.156,3.396,-1.5699);
myNode4.point2.set(4.156,3.396,1.4708999999999999);
myNode4.radius.set(0.248);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode4.innerRotation.angle.set(3.141592653586273);
myNode4.isVisible = False

/* définition du node n°5*/
const myNode5 = object.addBox();
myNode5.point1.set(-4.4029,-2.9369,-1.4709);
myNode5.point2.set(-3.7091,3.3469,1.5698999999999999);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.isVisible = False

/* définition du node n°6*/
const myNode6 = object.addBox();
myNode6.point1.set(-4.1549,2.9761,-1.9679);
myNode6.point2.set(-2.7830999999999997,3.6449000000000003,1.5698999999999999);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.isVisible = False

/* définition du node n°7*/
const myNode7 = object.addBox();
myNode7.point1.set(-3.7069,-2.9369,-1.9679);
myNode7.point2.set(-2.7841,2.9739,-1.1000999999999999);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);
myNode7.isVisible = False

/* définition du node n°8*/
const myNode8_1 = object.addFuseOperation();
myNode8_1.leftArg.set(myNode2);
myNode8_1.rightArg.set(myNode2);
const myNode8_2 = object.addFuseOperation();
myNode8_2.leftArg.set(myNode8_1);
myNode8_2.rightArg.set(myNode3);
const myNode8_3 = object.addFuseOperation();
myNode8_3.leftArg.set(myNode8_2);
myNode8_3.rightArg.set(myNode4);
const myNode8_4 = object.addFuseOperation();
myNode8_4.leftArg.set(myNode8_3);
myNode8_4.rightArg.set(myNode5);
const myNode8_5 = object.addFuseOperation();
myNode8_5.leftArg.set(myNode8_4);
myNode8_5.rightArg.set(myNode6);
myNode8 = object.addFuseOperation();
myNode8.leftArg.set(myNode8_5);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = False

/* définition du node n°9*/
const myNode9 = object.addCylinder();
myNode9.point1.set(3.604,-0.702,-18.0995);
myNode9.point2.set(3.604,-0.702,0.7264000000000017);
myNode9.radius.set(0.428);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode9.innerRotation.angle.set(3.141592653586273);
myNode9.isVisible = False

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(-18.0995,-1.43945,-1.96845);
myNode10.point2.set(-3.708599999999999,0.035450000000000204,-0.7275500000000001);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.isVisible = False

/* définition du node n°11*/
const myNode11 = object.addBox();
myNode11.point1.set(-3.70745,-1.43945,-1.96845);
myNode11.point2.set(-2.78355,0.2724500000000001,-0.7275500000000001);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);
myNode11.isVisible = False

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(-3.451,0.286,-18.1);
myNode12.point2.set(-3.451,0.286,-1.0990000000000002);
myNode12.radius.set(0.257);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);
myNode12.isVisible = False

/* définition du node n°13*/
const myNode13 = object.addCutOperation();
myNode13.leftArg.set(myNode11);
myNode13.rightArg.set(myNode12);
myNode13.isVisible = False

/* définition du node n°14*/
const myNode14 = object.addBox();
myNode14.point1.set(-4.40345,-1.71345,-1.96845);
myNode14.point2.set(-4.1575500000000005,0.2724500000000001,-0.7275500000000001);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);
myNode14.isVisible = False

/* définition du node n°15*/
const myNode15 = object.addBox();
myNode15.point1.set(-4.40345,-1.71345,-1.96845);
myNode15.point2.set(-3.4365500000000004,18.099449999999997,-1.47255);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);
myNode15.isVisible = False

/* définition du node n°16*/
const myNode16 = object.addFuseOperation();
myNode16.leftArg.set(myNode14);
myNode16.rightArg.set(myNode15);
myNode16.isVisible = False

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(-3.708,0.036,-1.969);
myNode17.point2.set(-2.7830000000000004,3.348,-1.0990000000000002);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.isVisible = False

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(-4.162,0.273,-1.969);
myNode18.point2.set(-4.162,0.273,-0.7270000000000001);
myNode18.radius.set(0.237);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);
myNode18.isVisible = False

/* définition du node n°19*/
const myNode19 = object.addFuseOperation();
myNode19.leftArg.set(myNode17);
myNode19.rightArg.set(myNode18);
myNode19.isVisible = False

/* définition du node n°20*/
const myNode20 = object.addCutOperation();
myNode20.leftArg.set(myNode16);
myNode20.rightArg.set(myNode19);
myNode20.isVisible = False

/* définition du node n°21*/
const myNode21_1 = object.addFuseOperation();
myNode21_1.leftArg.set(myNode9);
myNode21_1.rightArg.set(myNode9);
const myNode21_2 = object.addFuseOperation();
myNode21_2.leftArg.set(myNode21_1);
myNode21_2.rightArg.set(myNode10);
const myNode21_3 = object.addFuseOperation();
myNode21_3.leftArg.set(myNode21_2);
myNode21_3.rightArg.set(myNode13);
myNode21 = object.addFuseOperation();
myNode21.leftArg.set(myNode21_3);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = False

/* définition du node n°22*/
const myNode22 = object.addCutOperation();
myNode22.leftArg.set(myNode8);
myNode22.rightArg.set(myNode21);
myNode22.isVisible = False

/* définition du node n°23*/
const myNode23 = object.addCylinder();
myNode23.point1.set(4.164,3.407,-1.4709);
myNode23.point2.set(4.164,3.407,1.5698999999999999);
myNode23.radius.set(0.236);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);
myNode23.isVisible = False

/* définition du node n°24*/
const myNode24 = object.addBox();
myNode24.point1.set(-2.7819,0.0371,-1.4709);
myNode24.point2.set(3.4629,3.6449000000000003,1.5698999999999999);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);
myNode24.isVisible = False

/* définition du node n°25*/
const myNode25 = object.addCylinder();
myNode25.point1.set(-1.561,-0.001,0.03655);
myNode25.point2.set(-1.561,-0.001,4.78745);
myNode25.radius.set(1.958);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode25.innerRotation.angle.set(2.094392392986396);
myNode25.isVisible = False

/* définition du node n°26*/
const myNode26 = object.addCutOperation();
myNode26.leftArg.set(myNode24);
myNode26.rightArg.set(myNode25);
myNode26.isVisible = False

/* définition du node n°27*/
const myNode27 = object.addBox();
myNode27.point1.set(3.7091,0.2741,-1.4709);
myNode27.point2.set(4.4029,3.3468999999999998,1.5698999999999999);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);
myNode27.isVisible = False

/* définition du node n°28*/
const myNode28 = object.addBox();
myNode28.point1.set(3.4661,2.9761,-1.4709);
myNode28.point2.set(4.1509,3.6449000000000003,1.5698999999999999);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(0.0,0.0,0.0);
myNode28.innerRotation.angle.set(0.0);
myNode28.isVisible = False

/* définition du node n°29*/
const myNode29_1 = object.addFuseOperation();
myNode29_1.leftArg.set(myNode23);
myNode29_1.rightArg.set(myNode23);
const myNode29_2 = object.addFuseOperation();
myNode29_2.leftArg.set(myNode29_1);
myNode29_2.rightArg.set(myNode26);
const myNode29_3 = object.addFuseOperation();
myNode29_3.leftArg.set(myNode29_2);
myNode29_3.rightArg.set(myNode27);
myNode29 = object.addFuseOperation();
myNode29.leftArg.set(myNode29_3);
myNode29.rightArg.set(myNode28);
myNode29.isVisible = False

/* définition du node n°30*/
const myNode30 = object.addBox();
myNode30.point1.set(-2.78245,0.03655,-1.47145);
myNode30.point2.set(3.46345,2.97445,1.5704500000000001);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);
myNode30.isVisible = False

/* définition du node n°31*/
const myNode31 = object.addCutOperation();
myNode31.leftArg.set(myNode29);
myNode31.rightArg.set(myNode30);
myNode31.isVisible = False

/* définition du node n°32*/
const myNode32 = object.addBox();
myNode32.point1.set(3.7091,-4.5529,-1.4709);
myNode32.point2.set(4.4029,3.3468999999999998,1.5698999999999999);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);
myNode32.isVisible = False

/* définition du node n°33*/
const myNode33 = object.addBox();
myNode33.point1.set(2.7841,-1.7129,-1.9679);
myNode33.point2.set(4.4029,3.3468999999999998,-1.1000999999999999);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);
myNode33.isVisible = False

/* définition du node n°34*/
const myNode34 = object.addBox();
myNode34.point1.set(-2.7819,-4.7879,-1.9679);
myNode34.point2.set(3.4629,-2.9391,1.5698999999999999);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(0.0,0.0,0.0);
myNode34.innerRotation.angle.set(0.0);
myNode34.isVisible = False

/* définition du node n°35*/
const myNode35 = object.addBox();
myNode35.point1.set(-18.0994,-4.39045,-1.09845);
myNode35.point2.set(3.7074999999999996,-2.93855,-0.22954999999999992);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,0.0);
myNode35.innerRotation.angle.set(0.0);
myNode35.isVisible = False

/* définition du node n°36*/
const myNode36 = object.addCutOperation();
myNode36.leftArg.set(myNode34);
myNode36.rightArg.set(myNode35);
myNode36.isVisible = False

/* définition du node n°37*/
const myNode37 = object.addCylinder();
myNode37.point1.set(-1.125,-0.702,3.4661);
myNode37.point2.set(-1.125,-0.702,4.9989);
myNode37.radius.set(0.448);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode37.innerRotation.angle.set(1.5707926535897931);
myNode37.isVisible = False

/* définition du node n°38*/
const myNode38 = object.addCylinder();
myNode38.point1.set(-3.603,-0.704,0.2311);
myNode38.point2.set(-3.603,-0.704,1.9679);
myNode38.radius.set(0.994);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode38.innerRotation.angle.set(3.141592653586273);
myNode38.isVisible = False

/* définition du node n°39*/
const myNode39 = object.addBox();
myNode39.point1.set(-2.7819,-4.7879,-0.2289);
myNode39.point2.set(3.7069000000000005,3.3469000000000007,1.5699);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(0.0,0.0,0.0);
myNode39.innerRotation.angle.set(0.0);
myNode39.isVisible = False

/* définition du node n°40*/
const myNode40_1 = object.addFuseOperation();
myNode40_1.leftArg.set(myNode32);
myNode40_1.rightArg.set(myNode32);
const myNode40_2 = object.addFuseOperation();
myNode40_2.leftArg.set(myNode40_1);
myNode40_2.rightArg.set(myNode33);
const myNode40_3 = object.addFuseOperation();
myNode40_3.leftArg.set(myNode40_2);
myNode40_3.rightArg.set(myNode36);
const myNode40_4 = object.addFuseOperation();
myNode40_4.leftArg.set(myNode40_3);
myNode40_4.rightArg.set(myNode37);
const myNode40_5 = object.addFuseOperation();
myNode40_5.leftArg.set(myNode40_4);
myNode40_5.rightArg.set(myNode38);
myNode40 = object.addFuseOperation();
myNode40.leftArg.set(myNode40_5);
myNode40.rightArg.set(myNode39);
myNode40.isVisible = False

/* définition du node n°41*/
const myNode41 = object.addCylinder();
myNode41.point1.set(-3.603,-0.701,-1.57045);
myNode41.point2.set(-3.603,-0.701,18.099449999999997);
myNode41.radius.set(0.428);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode41.innerRotation.angle.set(3.141592653586273);
myNode41.isVisible = False

/* définition du node n°42*/
const myNode42 = object.addCylinder();
myNode42.point1.set(-1.483,-0.114,-18.0995);
myNode42.point2.set(-1.483,-0.114,18.099400000000003);
myNode42.radius.set(2.733);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(1.18359229880969,1.2044359286746318,-1.2044359286746318);
myNode42.innerRotation.angle.set(2.074179968654179);
myNode42.isVisible = False

/* définition du node n°43*/
const myNode43 = object.addCylinder();
myNode43.point1.set(3.605,-0.703,-18.0995);
myNode43.point2.set(3.605,-0.703,-0.7275999999999989);
myNode43.radius.set(0.747);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(0.0,0.0,0.0);
myNode43.innerRotation.angle.set(0.0);
myNode43.isVisible = False

/* définition du node n°44*/
const myNode44 = object.addBox();
myNode44.point1.set(4.40455,-4.39045,-1.96845);
myNode44.point2.set(18.09945,3.3474499999999994,-0.23055000000000003);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(0.0,0.0,0.0);
myNode44.innerRotation.angle.set(0.0);
myNode44.isVisible = False

/* définition du node n°45*/
const myNode45 = object.addBox();
myNode45.point1.set(-18.0994,-4.39045,-0.22945);
myNode45.point2.set(3.7074999999999996,18.099449999999997,18.09945);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(0.0,0.0,0.0);
myNode45.innerRotation.angle.set(0.0);
myNode45.isVisible = False

/* définition du node n°46*/
const myNode46 = object.addCylinder();
myNode46.point1.set(3.605,-0.703,-0.727);
myNode46.point2.set(3.605,-0.703,1.5710000000000002);
myNode46.radius.set(0.747);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(0.0,0.0,0.0);
myNode46.innerRotation.angle.set(0.0);
myNode46.isVisible = False

/* définition du node n°47*/
const myNode47 = object.addCutOperation();
myNode47.leftArg.set(myNode45);
myNode47.rightArg.set(myNode46);
myNode47.isVisible = False

/* définition du node n°48*/
const myNode48 = object.addBox();
myNode48.point1.set(3.46555,-1.71345,-18.0995);
myNode48.point2.set(18.09945,3.3474500000000003,-0.7275999999999989);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);
myNode48.isVisible = False

/* définition du node n°49*/
const myNode49 = object.addCylinder();
myNode49.point1.set(3.451,-1.694,-1.969);
myNode49.point2.set(3.451,-1.694,18.099999999999998);
myNode49.radius.set(0.26);
myNode49.innerRotation.center.set(0,0,0);
myNode49.innerRotation.axis.set(0.0,0.0,0.0);
myNode49.innerRotation.angle.set(0.0);
myNode49.isVisible = False

/* définition du node n°50*/
const myNode50 = object.addCutOperation();
myNode50.leftArg.set(myNode48);
myNode50.rightArg.set(myNode49);
myNode50.isVisible = False

/* définition du node n°51*/
const myNode51_1 = object.addFuseOperation();
myNode51_1.leftArg.set(myNode41);
myNode51_1.rightArg.set(myNode41);
const myNode51_2 = object.addFuseOperation();
myNode51_2.leftArg.set(myNode51_1);
myNode51_2.rightArg.set(myNode42);
const myNode51_3 = object.addFuseOperation();
myNode51_3.leftArg.set(myNode51_2);
myNode51_3.rightArg.set(myNode43);
const myNode51_4 = object.addFuseOperation();
myNode51_4.leftArg.set(myNode51_3);
myNode51_4.rightArg.set(myNode44);
const myNode51_5 = object.addFuseOperation();
myNode51_5.leftArg.set(myNode51_4);
myNode51_5.rightArg.set(myNode47);
myNode51 = object.addFuseOperation();
myNode51.leftArg.set(myNode51_5);
myNode51.rightArg.set(myNode50);
myNode51.isVisible = False

/* définition du node n°52*/
const myNode52 = object.addCutOperation();
myNode52.leftArg.set(myNode40);
myNode52.rightArg.set(myNode51);
myNode52.isVisible = False

/* définition du node n°53*/
const myNode53 = object.addBox();
myNode53.point1.set(-3.7069,-4.3899,-1.4709);
myNode53.point2.set(18.0989,-2.9391,-1.1001);
myNode53.innerRotation.center.set(0,0,0);
myNode53.innerRotation.axis.set(0.0,0.0,0.0);
myNode53.innerRotation.angle.set(0.0);
myNode53.isVisible = False

/* définition du node n°54*/
const myNode54 = object.addCylinder();
myNode54.point1.set(-1.483,-0.114,-18.0989);
myNode54.point2.set(-1.483,-0.114,18.0989);
myNode54.radius.set(2.733);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(1.18359229880969,1.2044359286746318,-1.2044359286746318);
myNode54.innerRotation.angle.set(2.074179968654179);
myNode54.isVisible = False

/* définition du node n°55*/
const myNode55 = object.addCommonOperation();
myNode55.leftArg.set(myNode53);
myNode55.rightArg.set(myNode54);
myNode55.isVisible = False

/* définition du node n°56*/
const myNode56 = object.addSphere();
myNode56.center.set(0.004,3.07,1.571);
myNode56.radius.set(2.610800643480846);
myNode56.isVisible = False

/* définition du node n°57*/
const myNode57 = object.addCylinder();
myNode57.point1.set(-1.568,0.001,3.3491);
myNode57.point2.set(-1.568,0.001,4.7869);
myNode57.radius.set(2.107);
myNode57.innerRotation.center.set(0,0,0);
myNode57.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode57.innerRotation.angle.set(2.094392392986396);
myNode57.isVisible = False

/* définition du node n°58*/
const myNode58 = object.addCommonOperation();
myNode58.leftArg.set(myNode56);
myNode58.rightArg.set(myNode57);
myNode58.isVisible = False

/* définition du node n°59*/
const myNode59 = object.addSphere();
myNode59.center.set(-0.004,1.418,1.584);
myNode59.radius.set(3.4288044563666795);
myNode59.isVisible = False

/* définition du node n°60*/
const myNode60 = object.addBox();
myNode60.point1.set(-18.0989,0.0371,-18.0989);
myNode60.point2.set(4.402899999999999,3.6449000000000003,-0.23110000000000142);
myNode60.innerRotation.center.set(0,0,0);
myNode60.innerRotation.axis.set(0.0,0.0,0.0);
myNode60.innerRotation.angle.set(0.0);
myNode60.isVisible = False

/* définition du node n°61*/
const myNode61_1 = object.addFuseOperation();
myNode61_1.leftArg.set(myNode58);
myNode61_1.rightArg.set(myNode58);
const myNode61_2 = object.addFuseOperation();
myNode61_2.leftArg.set(myNode61_1);
myNode61_2.rightArg.set(myNode59);
myNode61 = object.addFuseOperation();
myNode61.leftArg.set(myNode61_2);
myNode61.rightArg.set(myNode60);
myNode61.isVisible = False

/* définition du node n°62*/
const myNode62 = object.addBox();
myNode62.point1.set(-2.7819,3.3491,-1.4709);
myNode62.point2.set(4.149900000000001,4.7869,1.5698999999999999);
myNode62.innerRotation.center.set(0,0,0);
myNode62.innerRotation.axis.set(0.0,0.0,0.0);
myNode62.innerRotation.angle.set(0.0);
myNode62.isVisible = False

/* définition du node n°63*/
const myNode63 = object.addCylinder();
myNode63.point1.set(-1.56,-0.002,-18.0995);
myNode63.point2.set(-1.56,-0.002,4.787400000000002);
myNode63.radius.set(1.483);
myNode63.innerRotation.center.set(0,0,0);
myNode63.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode63.innerRotation.angle.set(2.094392392986396);
myNode63.isVisible = False

/* définition du node n°64*/
const myNode64 = object.addCutOperation();
myNode64.leftArg.set(myNode62);
myNode64.rightArg.set(myNode63);
myNode64.isVisible = False

/* définition du node n°65*/
const myNode65 = object.addCylinder();
myNode65.point1.set(3.45,0.294,-1.9679);
myNode65.point2.set(3.45,0.294,-1.4731);
myNode65.radius.set(0.264);
myNode65.innerRotation.center.set(0,0,0);
myNode65.innerRotation.axis.set(0.0,0.0,0.0);
myNode65.innerRotation.angle.set(0.0);
myNode65.isVisible = False

/* définition du node n°66*/
const myNode66 = object.addCylinder();
myNode66.point1.set(4.151,0.293,-1.4709);
myNode66.point2.set(4.151,0.293,1.5698999999999999);
myNode66.radius.set(0.257);
myNode66.innerRotation.center.set(0,0,0);
myNode66.innerRotation.axis.set(0.0,0.0,0.0);
myNode66.innerRotation.angle.set(0.0);
myNode66.isVisible = False

/* définition du node n°67*/
const myNode67_1 = object.addFuseOperation();
myNode67_1.leftArg.set(myNode64);
myNode67_1.rightArg.set(myNode64);
const myNode67_2 = object.addFuseOperation();
myNode67_2.leftArg.set(myNode67_1);
myNode67_2.rightArg.set(myNode65);
myNode67 = object.addFuseOperation();
myNode67.leftArg.set(myNode67_2);
myNode67.rightArg.set(myNode66);
myNode67.isVisible = False

/* définition du node n°68*/
const myNode68 = object.addCommonOperation();
myNode68.leftArg.set(myNode61);
myNode68.rightArg.set(myNode67);
myNode68.isVisible = False

/* définition du node n°69*/
const myNode69 = object.addBox();
myNode69.point1.set(-4.4029,-4.5529,-1.4709);
myNode69.point2.set(-3.7091,-2.9391000000000003,1.5698999999999999);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(0.0,0.0,0.0);
myNode69.innerRotation.angle.set(0.0);
myNode69.isVisible = False

/* définition du node n°70*/
const myNode70 = object.addBox();
myNode70.point1.set(-18.0989,0.2741,-1.9679);
myNode70.point2.set(3.706900000000001,3.6449,1.5698999999999999);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(0.0,0.0,0.0);
myNode70.innerRotation.angle.set(0.0);
myNode70.isVisible = False

/* définition du node n°71*/
const myNode71 = object.addBox();
myNode71.point1.set(3.4661,0.0371,-1.4709);
myNode71.point2.set(18.0989,0.27190000000000003,1.5698999999999999);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(0.0,0.0,0.0);
myNode71.innerRotation.angle.set(0.0);
myNode71.isVisible = False

/* définition du node n°72*/
const myNode72 = object.addFuseOperation();
myNode72.leftArg.set(myNode70);
myNode72.rightArg.set(myNode71);
myNode72.isVisible = False

/* définition du node n°73*/
const myNode73 = object.addCylinder();
myNode73.point1.set(3.465,3.397,-18.0989);
myNode73.point2.set(3.465,3.397,-1.4730999999999987);
myNode73.radius.set(0.244);
myNode73.innerRotation.center.set(0,0,0);
myNode73.innerRotation.axis.set(0.0,0.0,0.0);
myNode73.innerRotation.angle.set(0.0);
myNode73.isVisible = False

/* définition du node n°74*/
const myNode74 = object.addBox();
myNode74.point1.set(-2.7819,-18.0989,-1.9679);
myNode74.point2.set(4.149900000000001,0.2718999999999987,-0.23110000000000008);
myNode74.innerRotation.center.set(0,0,0);
myNode74.innerRotation.axis.set(0.0,0.0,0.0);
myNode74.innerRotation.angle.set(0.0);
myNode74.isVisible = False

/* définition du node n°75*/
const myNode75 = object.addFuseOperation();
myNode75.leftArg.set(myNode73);
myNode75.rightArg.set(myNode74);
myNode75.isVisible = False

/* définition du node n°76*/
const myNode76 = object.addCommonOperation();
myNode76.leftArg.set(myNode72);
myNode76.rightArg.set(myNode75);
myNode76.isVisible = False

/* définition du node n°77*/
const myNode77 = object.addCylinder();
myNode77.point1.set(-3.47,-4.552,-1.9679);
myNode77.point2.set(-3.47,-4.552,-1.1000999999999999);
myNode77.radius.set(0.233);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(0.0,0.0,0.0);
myNode77.innerRotation.angle.set(0.0);
myNode77.isVisible = False

/* définition du node n°78*/
const myNode78 = object.addBox();
myNode78.point1.set(-2.7819,2.9761,-1.9679);
myNode78.point2.set(3.4629,3.6449000000000003,-1.4731);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(0.0,0.0,0.0);
myNode78.innerRotation.angle.set(0.0);
myNode78.isVisible = False

/* définition du node n°79*/
const myNode79 = object.addBox();
myNode79.point1.set(3.4661,-18.0989,-1.9679);
myNode79.point2.set(4.1509,3.346899999999998,18.0989);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(0.0,0.0,0.0);
myNode79.innerRotation.angle.set(0.0);
myNode79.isVisible = False

/* définition du node n°80*/
const myNode80 = object.addFuseOperation();
myNode80.leftArg.set(myNode78);
myNode80.rightArg.set(myNode79);
myNode80.isVisible = False

/* définition du node n°81*/
const myNode81 = object.addBox();
myNode81.point1.set(3.4661,0.2741,-18.0989);
myNode81.point2.set(3.7069,3.6449,-1.1001000000000012);
myNode81.innerRotation.center.set(0,0,0);
myNode81.innerRotation.axis.set(0.0,0.0,0.0);
myNode81.innerRotation.angle.set(0.0);
myNode81.isVisible = False

/* définition du node n°82*/
const myNode82 = object.addBox();
myNode82.point1.set(-2.7819,2.9761,-18.0989);
myNode82.point2.set(3.7069000000000005,3.6449000000000003,-0.23110000000000142);
myNode82.innerRotation.center.set(0,0,0);
myNode82.innerRotation.axis.set(0.0,0.0,0.0);
myNode82.innerRotation.angle.set(0.0);
myNode82.isVisible = False

/* définition du node n°83*/
const myNode83 = object.addFuseOperation();
myNode83.leftArg.set(myNode81);
myNode83.rightArg.set(myNode82);
myNode83.isVisible = False

/* définition du node n°84*/
const myNode84 = object.addCommonOperation();
myNode84.leftArg.set(myNode80);
myNode84.rightArg.set(myNode83);
myNode84.isVisible = False

/* définition du node n°85*/
const myNode85 = object.addBox();
myNode85.point1.set(-4.1549,-4.7879,-1.4709);
myNode85.point2.set(-2.7830999999999997,-4.392099999999999,1.5698999999999999);
myNode85.innerRotation.center.set(0,0,0);
myNode85.innerRotation.axis.set(0.0,0.0,0.0);
myNode85.innerRotation.angle.set(0.0);
myNode85.isVisible = False

/* définition du node n°86*/
const myNode86 = object.addBox();
myNode86.point1.set(2.7841,-4.7879,-1.9679);
myNode86.point2.set(4.9989,3.3469000000000007,18.0989);
myNode86.innerRotation.center.set(0,0,0);
myNode86.innerRotation.axis.set(0.0,0.0,0.0);
myNode86.innerRotation.angle.set(0.0);
myNode86.isVisible = False

/* définition du node n°87*/
const myNode87 = object.addBox();
myNode87.point1.set(2.78355,-4.39045,-1.09845);
myNode87.point2.set(3.70745,-1.7135500000000006,1.5714500000000002);
myNode87.innerRotation.center.set(0,0,0);
myNode87.innerRotation.axis.set(0.0,0.0,0.0);
myNode87.innerRotation.angle.set(0.0);
myNode87.isVisible = False

/* définition du node n°88*/
const myNode88 = object.addCutOperation();
myNode88.leftArg.set(myNode86);
myNode88.rightArg.set(myNode87);
myNode88.isVisible = False

/* définition du node n°89*/
const myNode89 = object.addBox();
myNode89.point1.set(-2.78245,-4.78845,-1.96845);
myNode89.point2.set(4.99945,18.099449999999997,18.09945);
myNode89.innerRotation.center.set(0,0,0);
myNode89.innerRotation.axis.set(0.0,0.0,0.0);
myNode89.innerRotation.angle.set(0.0);
myNode89.isVisible = False

/* définition du node n°90*/
const myNode90 = object.addBox();
myNode90.point1.set(-18.1,-4.391,-1.969);
myNode90.point2.set(3.7079999999999984,-1.713,-0.22999999999999998);
myNode90.innerRotation.center.set(0,0,0);
myNode90.innerRotation.axis.set(0.0,0.0,0.0);
myNode90.innerRotation.angle.set(0.0);
myNode90.isVisible = False

/* définition du node n°91*/
const myNode91 = object.addCutOperation();
myNode91.leftArg.set(myNode89);
myNode91.rightArg.set(myNode90);
myNode91.isVisible = False

/* définition du node n°92*/
const myNode92 = object.addCylinder();
myNode92.point1.set(3.452,-4.528,-18.1);
myNode92.point2.set(3.452,-4.528,1.570999999999998);
myNode92.radius.set(0.261);
myNode92.innerRotation.center.set(0,0,0);
myNode92.innerRotation.axis.set(0.0,0.0,0.0);
myNode92.innerRotation.angle.set(0.0);
myNode92.isVisible = False

/* définition du node n°93*/
const myNode93 = object.addCylinder();
myNode93.point1.set(4.171,-4.554,-1.472);
myNode93.point2.set(4.171,-4.554,1.5710000000000002);
myNode93.radius.set(0.228);
myNode93.innerRotation.center.set(0,0,0);
myNode93.innerRotation.axis.set(0.0,0.0,0.0);
myNode93.innerRotation.angle.set(0.0);
myNode93.isVisible = False

/* définition du node n°94*/
const myNode94 = object.addFuseOperation();
myNode94.leftArg.set(myNode92);
myNode94.rightArg.set(myNode93);
myNode94.isVisible = False

/* définition du node n°95*/
const myNode95 = object.addCutOperation();
myNode95.leftArg.set(myNode91);
myNode95.rightArg.set(myNode94);
myNode95.isVisible = False

/* définition du node n°96*/
const myNode96 = object.addCylinder();
myNode96.point1.set(-1.515,-0.702,4.727);
myNode96.point2.set(-1.515,-0.702,18.1);
myNode96.radius.set(0.453);
myNode96.innerRotation.center.set(0,0,0);
myNode96.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode96.innerRotation.angle.set(1.5707926535897931);
myNode96.isVisible = False

/* définition du node n°97*/
const myNode97 = object.addBox();
myNode97.point1.set(3.465,-4.789,-1.472);
myNode97.point2.set(4.152,-1.4399999999999995,-0.22999999999999998);
myNode97.innerRotation.center.set(0,0,0);
myNode97.innerRotation.axis.set(0.0,0.0,0.0);
myNode97.innerRotation.angle.set(0.0);
myNode97.isVisible = False

/* définition du node n°98*/
const myNode98 = object.addCylinder();
myNode98.point1.set(4.148,-1.694,-1.472);
myNode98.point2.set(4.148,-1.694,1.5710000000000002);
myNode98.radius.set(0.256);
myNode98.innerRotation.center.set(0,0,0);
myNode98.innerRotation.axis.set(0.0,0.0,0.0);
myNode98.innerRotation.angle.set(0.0);
myNode98.isVisible = False

/* définition du node n°99*/
const myNode99 = object.addBox();
myNode99.point1.set(3.708,-4.789,-0.23);
myNode99.point2.set(4.151,-1.4399999999999995,1.571);
myNode99.innerRotation.center.set(0,0,0);
myNode99.innerRotation.axis.set(0.0,0.0,0.0);
myNode99.innerRotation.angle.set(0.0);
myNode99.isVisible = False

/* définition du node n°100*/
const myNode100_1 = object.addFuseOperation();
myNode100_1.leftArg.set(myNode96);
myNode100_1.rightArg.set(myNode96);
const myNode100_2 = object.addFuseOperation();
myNode100_2.leftArg.set(myNode100_1);
myNode100_2.rightArg.set(myNode97);
const myNode100_3 = object.addFuseOperation();
myNode100_3.leftArg.set(myNode100_2);
myNode100_3.rightArg.set(myNode98);
myNode100 = object.addFuseOperation();
myNode100.leftArg.set(myNode100_3);
myNode100.rightArg.set(myNode99);
myNode100.isVisible = False

/* définition du node n°101*/
const myNode101 = object.addCutOperation();
myNode101.leftArg.set(myNode95);
myNode101.rightArg.set(myNode100);
myNode101.isVisible = False

/* définition du node n°102*/
const myNode102 = object.addCutOperation();
myNode102.leftArg.set(myNode88);
myNode102.rightArg.set(myNode101);
myNode102.isVisible = False

/* définition du node n°103*/
const myNode103 = object.addBox();
myNode103.point1.set(-3.7069,-4.7879,-1.9679);
myNode103.point2.set(-2.7841,-2.9391,-1.1000999999999999);
myNode103.innerRotation.center.set(0,0,0);
myNode103.innerRotation.axis.set(0.0,0.0,0.0);
myNode103.innerRotation.angle.set(0.0);
myNode103.isVisible = False

/* définition du node n°104*/
const myNode104 = object.addBox();
myNode104.point1.set(-3.70745,-18.0995,-1.96845);
myNode104.point2.set(-3.43655,-4.554599999999999,-1.47255);
myNode104.innerRotation.center.set(0,0,0);
myNode104.innerRotation.axis.set(0.0,0.0,0.0);
myNode104.innerRotation.angle.set(0.0);
myNode104.isVisible = False

/* définition du node n°105*/
const myNode105 = object.addCutOperation();
myNode105.leftArg.set(myNode103);
myNode105.rightArg.set(myNode104);
myNode105.isVisible = False

/* définition du node n°106*/
const myNode106 = object.addBox();
myNode106.point1.set(-4.1549,3.3491,-1.4709);
myNode106.point2.set(-3.4360999999999997,3.6449,1.5698999999999999);
myNode106.innerRotation.center.set(0,0,0);
myNode106.innerRotation.axis.set(0.0,0.0,0.0);
myNode106.innerRotation.angle.set(0.0);
myNode106.isVisible = False

/* définition du node n°107*/
const myNode107 = object.addCylinder();
myNode107.point1.set(-3.458,3.397,-1.9679);
myNode107.point2.set(-3.458,3.397,-1.1000999999999999);
myNode107.radius.set(0.249);
myNode107.innerRotation.center.set(0,0,0);
myNode107.innerRotation.axis.set(0.0,0.0,0.0);
myNode107.innerRotation.angle.set(0.0);
myNode107.isVisible = False

/* définition du node n°108*/
const myNode108 = object.addBox();
myNode108.point1.set(-18.0989,-2.9369,-0.2289);
myNode108.point2.set(-4.158100000000001,2.9739,18.0989);
myNode108.innerRotation.center.set(0,0,0);
myNode108.innerRotation.axis.set(0.0,0.0,0.0);
myNode108.innerRotation.angle.set(0.0);
myNode108.isVisible = False

/* définition du node n°109*/
const myNode109 = object.addBox();
myNode109.point1.set(-3.7069,-2.9369,-1.9679);
myNode109.point2.set(18.0989,0.27190000000000003,18.0989);
myNode109.innerRotation.center.set(0,0,0);
myNode109.innerRotation.axis.set(0.0,0.0,0.0);
myNode109.innerRotation.angle.set(0.0);
myNode109.isVisible = False

/* définition du node n°110*/
const myNode110 = object.addFuseOperation();
myNode110.leftArg.set(myNode108);
myNode110.rightArg.set(myNode109);
myNode110.isVisible = False

/* définition du node n°111*/
const myNode111 = object.addCylinder();
myNode111.point1.set(-1.515,-0.702,-4.9989);
myNode111.point2.set(-1.515,-0.702,-4.7280999999999995);
myNode111.radius.set(0.453);
myNode111.innerRotation.center.set(0,0,0);
myNode111.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode111.innerRotation.angle.set(1.5707926535897931);
myNode111.isVisible = False

/* définition du node n°112*/
const myNode112 = object.addCylinder();
myNode112.point1.set(3.602,-0.701,0.2311);
myNode112.point2.set(3.602,-0.701,1.9679);
myNode112.radius.set(0.992);
myNode112.innerRotation.center.set(0,0,0);
myNode112.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode112.innerRotation.angle.set(3.141592653586273);
myNode112.isVisible = False

/* définition du node n°113*/
const myNode113 = object.addFuseOperation();
myNode113.leftArg.set(myNode111);
myNode113.rightArg.set(myNode112);
myNode113.isVisible = False

/* définition du node n°114*/
const myNode114 = object.addCommonOperation();
myNode114.leftArg.set(myNode110);
myNode114.rightArg.set(myNode113);
myNode114.isVisible = False

/* définition du node n°115*/
const myNode115 = object.addBox();
myNode115.point1.set(-4.4029,-1.7129,-1.9679);
myNode115.point2.set(-4.1581,-1.4411,-0.7281);
myNode115.innerRotation.center.set(0,0,0);
myNode115.innerRotation.axis.set(0.0,0.0,0.0);
myNode115.innerRotation.angle.set(0.0);
myNode115.isVisible = False

/* définition du node n°116*/
const myNode116 = object.addBox();
myNode116.point1.set(-3.4349,-1.4389,-1.9679);
myNode116.point2.set(-2.7840999999999996,3.6449,-1.1000999999999999);
myNode116.innerRotation.center.set(0,0,0);
myNode116.innerRotation.axis.set(0.0,0.0,0.0);
myNode116.innerRotation.angle.set(0.0);
myNode116.isVisible = False

/* définition du node n°117*/
const myNode117_1 = object.addFuseOperation();
myNode117_1.leftArg.set(myNode106);
myNode117_1.rightArg.set(myNode106);
const myNode117_2 = object.addFuseOperation();
myNode117_2.leftArg.set(myNode117_1);
myNode117_2.rightArg.set(myNode107);
const myNode117_3 = object.addFuseOperation();
myNode117_3.leftArg.set(myNode117_2);
myNode117_3.rightArg.set(myNode114);
const myNode117_4 = object.addFuseOperation();
myNode117_4.leftArg.set(myNode117_3);
myNode117_4.rightArg.set(myNode115);
myNode117 = object.addFuseOperation();
myNode117.leftArg.set(myNode117_4);
myNode117.rightArg.set(myNode116);
myNode117.isVisible = False

/* définition du node n°118*/
const myNode118 = object.addCylinder();
myNode118.point1.set(3.606,-0.701,0.23055);
myNode118.point2.set(3.606,-0.701,1.96845);
myNode118.radius.set(0.747);
myNode118.innerRotation.center.set(0,0,0);
myNode118.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode118.innerRotation.angle.set(3.141592653586273);
myNode118.isVisible = False

/* définition du node n°119*/
const myNode119 = object.addBox();
myNode119.point1.set(-4.40345,-1.71345,-1.96845);
myNode119.point2.set(-3.4365500000000004,0.2724500000000001,-0.7275500000000001);
myNode119.innerRotation.center.set(0,0,0);
myNode119.innerRotation.axis.set(0.0,0.0,0.0);
myNode119.innerRotation.angle.set(0.0);
myNode119.isVisible = False

/* définition du node n°120*/
const myNode120 = object.addCylinder();
myNode120.point1.set(-3.436,-1.714,-1.969);
myNode120.point2.set(-3.436,-1.714,-1.472);
myNode120.radius.set(0.285);
myNode120.innerRotation.center.set(0,0,0);
myNode120.innerRotation.axis.set(0.0,0.0,0.0);
myNode120.innerRotation.angle.set(0.0);
myNode120.isVisible = False

/* définition du node n°121*/
const myNode121 = object.addCutOperation();
myNode121.leftArg.set(myNode119);
myNode121.rightArg.set(myNode120);
myNode121.isVisible = False

/* définition du node n°122*/
const myNode122 = object.addBox();
myNode122.point1.set(-4.156,-1.714,-1.472);
myNode122.point2.set(-3.4349999999999996,0.27300000000000013,1.5710000000000002);
myNode122.innerRotation.center.set(0,0,0);
myNode122.innerRotation.axis.set(0.0,0.0,0.0);
myNode122.innerRotation.angle.set(0.0);
myNode122.isVisible = False

/* définition du node n°123*/
const myNode123 = object.addCylinder();
myNode123.point1.set(-4.157,-1.687,-1.472);
myNode123.point2.set(-4.157,-1.687,18.099999999999998);
myNode123.radius.set(0.246);
myNode123.innerRotation.center.set(0,0,0);
myNode123.innerRotation.axis.set(0.0,0.0,0.0);
myNode123.innerRotation.angle.set(0.0);
myNode123.isVisible = False

/* définition du node n°124*/
const myNode124 = object.addFuseOperation();
myNode124.leftArg.set(myNode122);
myNode124.rightArg.set(myNode123);
myNode124.isVisible = False

/* définition du node n°125*/
const myNode125 = object.addCutOperation();
myNode125.leftArg.set(myNode121);
myNode125.rightArg.set(myNode124);
myNode125.isVisible = False

/* définition du node n°126*/
const myNode126 = object.addFuseOperation();
myNode126.leftArg.set(myNode118);
myNode126.rightArg.set(myNode125);
myNode126.isVisible = False

/* définition du node n°127*/
const myNode127 = object.addCutOperation();
myNode127.leftArg.set(myNode117);
myNode127.rightArg.set(myNode126);
myNode127.isVisible = False

/* définition du node n°128*/
const myNode128_1 = object.addFuseOperation();
myNode128_1.leftArg.set(myNode1);
myNode128_1.rightArg.set(myNode1);
const myNode128_2 = object.addFuseOperation();
myNode128_2.leftArg.set(myNode128_1);
myNode128_2.rightArg.set(myNode22);
const myNode128_3 = object.addFuseOperation();
myNode128_3.leftArg.set(myNode128_2);
myNode128_3.rightArg.set(myNode31);
const myNode128_4 = object.addFuseOperation();
myNode128_4.leftArg.set(myNode128_3);
myNode128_4.rightArg.set(myNode52);
const myNode128_5 = object.addFuseOperation();
myNode128_5.leftArg.set(myNode128_4);
myNode128_5.rightArg.set(myNode55);
const myNode128_6 = object.addFuseOperation();
myNode128_6.leftArg.set(myNode128_5);
myNode128_6.rightArg.set(myNode68);
const myNode128_7 = object.addFuseOperation();
myNode128_7.leftArg.set(myNode128_6);
myNode128_7.rightArg.set(myNode69);
const myNode128_8 = object.addFuseOperation();
myNode128_8.leftArg.set(myNode128_7);
myNode128_8.rightArg.set(myNode76);
const myNode128_9 = object.addFuseOperation();
myNode128_9.leftArg.set(myNode128_8);
myNode128_9.rightArg.set(myNode77);
const myNode128_10 = object.addFuseOperation();
myNode128_10.leftArg.set(myNode128_9);
myNode128_10.rightArg.set(myNode84);
const myNode128_11 = object.addFuseOperation();
myNode128_11.leftArg.set(myNode128_10);
myNode128_11.rightArg.set(myNode85);
const myNode128_12 = object.addFuseOperation();
myNode128_12.leftArg.set(myNode128_11);
myNode128_12.rightArg.set(myNode102);
const myNode128_13 = object.addFuseOperation();
myNode128_13.leftArg.set(myNode128_12);
myNode128_13.rightArg.set(myNode105);
myNode128 = object.addFuseOperation();
myNode128.leftArg.set(myNode128_13);
myNode128.rightArg.set(myNode127);
myNode128.isVisible = False

/* définition du node n°129*/
const myNode129 = object.addCommonOperation();
myNode129.leftArg.set(myNode0);
myNode129.rightArg.set(myNode128);
myNode129.isVisible = True


/*END Geometry Object Definition*/