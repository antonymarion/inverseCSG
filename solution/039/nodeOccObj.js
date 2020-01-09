/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addSphere();
myNode0.center.set(0.004,3.07,1.571);
myNode0.radius.set(2.610800643480846);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(-1.568,0.001,3.3491);
myNode1.point2.set(-1.568,0.001,4.7869);
myNode1.radius.set(2.107);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode1.innerRotation.angle.set(119.9998447624254);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addCommonOperation();
myNode2.leftArg.set(myNode0);
myNode2.rightArg.set(myNode1);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addSphere();
myNode3.center.set(-0.004,1.418,1.584);
myNode3.radius.set(3.4288044563666795);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addBox();
myNode4.point1.set(-18.0989,0.0371,-18.0989);
myNode4.point2.set(4.402899999999999,3.6449000000000003,-0.23110000000000142);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.innerTranslation.vector.set(-6.848000000000001,1.841,-9.165000000000001);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5_1 = myNode2.clone();
myNode5_1.isVisible = false;
const myNode5_2 = object.addFuseOperation();
myNode5_2.leftArg.set(myNode5_1);
myNode5_2.rightArg.set(myNode3);
myNode5_2.isVisible = false;
myNode5 = object.addFuseOperation();
myNode5.leftArg.set(myNode5_2);
myNode5.rightArg.set(myNode4);
myNode5.isVisible = false;
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addBox();
myNode6.point1.set(-2.7819,3.3491,-1.4709);
myNode6.point2.set(4.149900000000001,4.7869,1.5698999999999999);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.innerTranslation.vector.set(0.6840000000000002,4.068,0.04949999999999988);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addCylinder();
myNode7.point1.set(-1.56,-0.002,-18.0995);
myNode7.point2.set(-1.56,-0.002,4.787400000000002);
myNode7.radius.set(1.483);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode7.innerRotation.angle.set(119.9998447624254);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addCutOperation();
myNode8.leftArg.set(myNode6);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addCylinder();
myNode9.point1.set(4.151,0.293,-1.4709);
myNode9.point2.set(4.151,0.293,1.5698999999999999);
myNode9.radius.set(0.257);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addCylinder();
myNode10.point1.set(3.45,0.294,-1.9679);
myNode10.point2.set(3.45,0.294,-1.4731);
myNode10.radius.set(0.264);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11_1 = myNode8.clone();
myNode11_1.isVisible = false;
const myNode11_2 = object.addFuseOperation();
myNode11_2.leftArg.set(myNode11_1);
myNode11_2.rightArg.set(myNode9);
myNode11_2.isVisible = false;
myNode11 = object.addFuseOperation();
myNode11.leftArg.set(myNode11_2);
myNode11.rightArg.set(myNode10);
myNode11.isVisible = false;
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCommonOperation();
myNode12.leftArg.set(myNode5);
myNode12.rightArg.set(myNode11);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addBox();
myNode13.point1.set(3.4661,2.9761,-1.4709);
myNode13.point2.set(4.1509,3.6449000000000003,1.5698999999999999);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);
myNode13.innerTranslation.vector.set(3.8085,3.3105,0.04949999999999988);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addBox();
myNode14.point1.set(3.7091,0.2741,-1.4709);
myNode14.point2.set(4.4029,3.3468999999999998,1.5698999999999999);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);
myNode14.innerTranslation.vector.set(4.056,1.8105,0.04949999999999988);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addBox();
myNode15.point1.set(-2.7819,0.0371,-1.4709);
myNode15.point2.set(3.4629,3.6449000000000003,1.5698999999999999);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);
myNode15.innerTranslation.vector.set(0.3405,1.841,0.04949999999999988);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(-1.561,-0.001,0.03655);
myNode16.point2.set(-1.561,-0.001,4.78745);
myNode16.radius.set(1.958);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode16.innerRotation.angle.set(119.9998447624254);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addCutOperation();
myNode17.leftArg.set(myNode15);
myNode17.rightArg.set(myNode16);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(4.164,3.407,-1.4709);
myNode18.point2.set(4.164,3.407,1.5698999999999999);
myNode18.radius.set(0.236);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19_1 = myNode13.clone();
myNode19_1.isVisible = false;
const myNode19_2 = object.addFuseOperation();
myNode19_2.leftArg.set(myNode19_1);
myNode19_2.rightArg.set(myNode14);
myNode19_2.isVisible = false;
const myNode19_3 = object.addFuseOperation();
myNode19_3.leftArg.set(myNode19_2);
myNode19_3.rightArg.set(myNode17);
myNode19_3.isVisible = false;
myNode19 = object.addFuseOperation();
myNode19.leftArg.set(myNode19_3);
myNode19.rightArg.set(myNode18);
myNode19.isVisible = false;
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addBox();
myNode20.point1.set(-2.78245,0.03655,-1.47145);
myNode20.point2.set(3.46345,2.97445,1.5704500000000001);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);
myNode20.innerTranslation.vector.set(0.3405,1.5055,0.0495000000000001);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addCutOperation();
myNode21.leftArg.set(myNode19);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addBox();
myNode22.point1.set(-4.4029,-4.5529,-1.4709);
myNode22.point2.set(-3.7091,-2.9391000000000003,1.5698999999999999);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(0.0,0.0,0.0);
myNode22.innerRotation.angle.set(0.0);
myNode22.innerTranslation.vector.set(-4.056,-3.7460000000000004,0.04949999999999988);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addCylinder();
myNode23.point1.set(4.139,-4.525,-1.5699);
myNode23.point2.set(4.139,-4.525,1.4708999999999999);
myNode23.radius.set(0.269);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode23.innerRotation.angle.set(179.9999999997983);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addBox();
myNode24.point1.set(2.7841,-4.7879,-1.9679);
myNode24.point2.set(4.9989,3.3469000000000007,18.0989);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);
myNode24.innerTranslation.vector.set(3.8914999999999997,-0.7204999999999995,8.0655);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addBox();
myNode25.point1.set(2.78355,-4.39045,-1.09845);
myNode25.point2.set(3.70745,-1.7135500000000006,1.5714500000000002);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(0.0,0.0,0.0);
myNode25.innerRotation.angle.set(0.0);
myNode25.innerTranslation.vector.set(3.2455,-3.0520000000000005,0.23650000000000015);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addCutOperation();
myNode26.leftArg.set(myNode24);
myNode26.rightArg.set(myNode25);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addBox();
myNode27.point1.set(-2.78245,-4.78845,-1.96845);
myNode27.point2.set(4.99945,18.099449999999997,18.09945);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);
myNode27.innerTranslation.vector.set(1.1085000000000003,6.655499999999999,8.0655);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addBox();
myNode28.point1.set(-18.1,-4.391,-1.969);
myNode28.point2.set(3.7079999999999984,-1.713,-0.22999999999999998);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(0.0,0.0,0.0);
myNode28.innerRotation.angle.set(0.0);
myNode28.innerTranslation.vector.set(-7.1960000000000015,-3.052,-1.0995);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addCutOperation();
myNode29.leftArg.set(myNode27);
myNode29.rightArg.set(myNode28);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addCylinder();
myNode30.point1.set(3.452,-4.528,-18.1);
myNode30.point2.set(3.452,-4.528,1.570999999999998);
myNode30.radius.set(0.261);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addCylinder();
myNode31.point1.set(4.171,-4.554,-1.472);
myNode31.point2.set(4.171,-4.554,1.5710000000000002);
myNode31.radius.set(0.228);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(0.0,0.0,0.0);
myNode31.innerRotation.angle.set(0.0);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addFuseOperation();
myNode32.leftArg.set(myNode30);
myNode32.rightArg.set(myNode31);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addCutOperation();
myNode33.leftArg.set(myNode29);
myNode33.rightArg.set(myNode32);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addBox();
myNode34.point1.set(3.708,-4.789,-0.23);
myNode34.point2.set(4.151,-1.4399999999999995,1.571);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(0.0,0.0,0.0);
myNode34.innerRotation.angle.set(0.0);
myNode34.innerTranslation.vector.set(3.9295,-3.1144999999999996,0.6705);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addCylinder();
myNode35.point1.set(4.148,-1.694,-1.472);
myNode35.point2.set(4.148,-1.694,1.5710000000000002);
myNode35.radius.set(0.256);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,0.0);
myNode35.innerRotation.angle.set(0.0);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addCylinder();
myNode36.point1.set(-1.515,-0.702,4.727);
myNode36.point2.set(-1.515,-0.702,18.1);
myNode36.radius.set(0.453);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode36.innerRotation.angle.set(89.99978954085029);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addBox();
myNode37.point1.set(3.465,-4.789,-1.472);
myNode37.point2.set(4.152,-1.4399999999999995,-0.22999999999999998);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0,0.0,0.0);
myNode37.innerRotation.angle.set(0.0);
myNode37.innerTranslation.vector.set(3.8085,-3.1144999999999996,-0.851);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38_1 = myNode34.clone();
myNode38_1.isVisible = false;
const myNode38_2 = object.addFuseOperation();
myNode38_2.leftArg.set(myNode38_1);
myNode38_2.rightArg.set(myNode35);
myNode38_2.isVisible = false;
const myNode38_3 = object.addFuseOperation();
myNode38_3.leftArg.set(myNode38_2);
myNode38_3.rightArg.set(myNode36);
myNode38_3.isVisible = false;
myNode38 = object.addFuseOperation();
myNode38.leftArg.set(myNode38_3);
myNode38.rightArg.set(myNode37);
myNode38.isVisible = false;
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addCutOperation();
myNode39.leftArg.set(myNode33);
myNode39.rightArg.set(myNode38);
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addCutOperation();
myNode40.leftArg.set(myNode26);
myNode40.rightArg.set(myNode39);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41 = object.addBox();
myNode41.point1.set(-3.7069,-4.7879,-1.9679);
myNode41.point2.set(-2.7841,-2.9391,-1.1000999999999999);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,0.0,0.0);
myNode41.innerRotation.angle.set(0.0);
myNode41.innerTranslation.vector.set(-3.2455000000000003,-3.8634999999999997,-1.534);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addBox();
myNode42.point1.set(-3.70745,-18.0995,-1.96845);
myNode42.point2.set(-3.43655,-4.554599999999999,-1.47255);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0,0.0,0.0);
myNode42.innerRotation.angle.set(0.0);
myNode42.innerTranslation.vector.set(-3.572,-11.32705,-1.7205);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addCutOperation();
myNode43.leftArg.set(myNode41);
myNode43.rightArg.set(myNode42);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44 = object.addBox();
myNode44.point1.set(-2.7819,-18.0989,-1.9679);
myNode44.point2.set(4.149900000000001,0.2718999999999987,-0.23110000000000008);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(0.0,0.0,0.0);
myNode44.innerRotation.angle.set(0.0);
myNode44.innerTranslation.vector.set(0.6840000000000002,-8.9135,-1.0995);
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45 = object.addCylinder();
myNode45.point1.set(3.465,3.397,-18.0989);
myNode45.point2.set(3.465,3.397,-1.4730999999999987);
myNode45.radius.set(0.244);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(0.0,0.0,0.0);
myNode45.innerRotation.angle.set(0.0);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addFuseOperation();
myNode46.leftArg.set(myNode44);
myNode46.rightArg.set(myNode45);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addBox();
myNode47.point1.set(3.4661,0.0371,-1.4709);
myNode47.point2.set(18.0989,0.27190000000000003,1.5698999999999999);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(0.0,0.0,0.0);
myNode47.innerRotation.angle.set(0.0);
myNode47.innerTranslation.vector.set(10.782499999999999,0.1545,0.04949999999999988);
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addBox();
myNode48.point1.set(-18.0989,0.2741,-1.9679);
myNode48.point2.set(3.706900000000001,3.6449,1.5698999999999999);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);
myNode48.innerTranslation.vector.set(-7.196,1.9595,-0.19900000000000007);
myNode48.isVisible = false;

/* définition du node n°49*/
const myNode49 = object.addFuseOperation();
myNode49.leftArg.set(myNode47);
myNode49.rightArg.set(myNode48);
myNode49.isVisible = false;

/* définition du node n°50*/
const myNode50 = object.addCommonOperation();
myNode50.leftArg.set(myNode46);
myNode50.rightArg.set(myNode49);
myNode50.isVisible = false;

/* définition du node n°51*/
const myNode51 = object.addBox();
myNode51.point1.set(-3.7069,-4.3899,-1.4709);
myNode51.point2.set(18.0989,-2.9391,-1.1001);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(0.0,0.0,0.0);
myNode51.innerRotation.angle.set(0.0);
myNode51.innerTranslation.vector.set(7.196000000000001,-3.6645,-1.2855);
myNode51.isVisible = false;

/* définition du node n°52*/
const myNode52 = object.addCylinder();
myNode52.point1.set(-1.483,-0.114,-18.0989);
myNode52.point2.set(-1.483,-0.114,18.0989);
myNode52.radius.set(2.733);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(1.18359229880969,1.2044359286746318,-1.2044359286746318);
myNode52.innerRotation.angle.set(118.84175815446184);
myNode52.isVisible = false;

/* définition du node n°53*/
const myNode53 = object.addCommonOperation();
myNode53.leftArg.set(myNode51);
myNode53.rightArg.set(myNode52);
myNode53.isVisible = false;

/* définition du node n°54*/
const myNode54 = object.addCylinder();
myNode54.point1.set(-1.125,-0.702,3.4661);
myNode54.point2.set(-1.125,-0.702,4.9989);
myNode54.radius.set(0.448);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode54.innerRotation.angle.set(89.99978954085029);
myNode54.isVisible = false;

/* définition du node n°55*/
const myNode55 = object.addCylinder();
myNode55.point1.set(-3.603,-0.704,0.2311);
myNode55.point2.set(-3.603,-0.704,1.9679);
myNode55.radius.set(0.994);
myNode55.innerRotation.center.set(0,0,0);
myNode55.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode55.innerRotation.angle.set(179.9999999997983);
myNode55.isVisible = false;

/* définition du node n°56*/
const myNode56 = object.addBox();
myNode56.point1.set(-2.7819,-4.7879,-0.2289);
myNode56.point2.set(3.7069000000000005,3.3469000000000007,1.5699);
myNode56.innerRotation.center.set(0,0,0);
myNode56.innerRotation.axis.set(0.0,0.0,0.0);
myNode56.innerRotation.angle.set(0.0);
myNode56.innerTranslation.vector.set(0.46250000000000036,-0.7204999999999995,0.6705);
myNode56.isVisible = false;

/* définition du node n°57*/
const myNode57 = object.addBox();
myNode57.point1.set(-2.7819,-4.7879,-1.9679);
myNode57.point2.set(3.4629,-2.9391,1.5698999999999999);
myNode57.innerRotation.center.set(0,0,0);
myNode57.innerRotation.axis.set(0.0,0.0,0.0);
myNode57.innerRotation.angle.set(0.0);
myNode57.innerTranslation.vector.set(0.3405,-3.8634999999999997,-0.19900000000000007);
myNode57.isVisible = false;

/* définition du node n°58*/
const myNode58 = object.addBox();
myNode58.point1.set(-18.0994,-4.39045,-1.09845);
myNode58.point2.set(3.7074999999999996,-2.93855,-0.22954999999999992);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(0.0,0.0,0.0);
myNode58.innerRotation.angle.set(0.0);
myNode58.innerTranslation.vector.set(-7.19595,-3.6645000000000003,-0.6639999999999999);
myNode58.isVisible = false;

/* définition du node n°59*/
const myNode59 = object.addCutOperation();
myNode59.leftArg.set(myNode57);
myNode59.rightArg.set(myNode58);
myNode59.isVisible = false;

/* définition du node n°60*/
const myNode60 = object.addBox();
myNode60.point1.set(3.7091,-4.5529,-1.4709);
myNode60.point2.set(4.4029,3.3468999999999998,1.5698999999999999);
myNode60.innerRotation.center.set(0,0,0);
myNode60.innerRotation.axis.set(0.0,0.0,0.0);
myNode60.innerRotation.angle.set(0.0);
myNode60.innerTranslation.vector.set(4.056,-0.6030000000000002,0.04949999999999988);
myNode60.isVisible = false;

/* définition du node n°61*/
const myNode61 = object.addBox();
myNode61.point1.set(2.7841,-1.7129,-1.9679);
myNode61.point2.set(4.4029,3.3468999999999998,-1.1000999999999999);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(0.0,0.0,0.0);
myNode61.innerRotation.angle.set(0.0);
myNode61.innerTranslation.vector.set(3.5935,0.817,-1.534);
myNode61.isVisible = false;

/* définition du node n°62*/
const myNode62_1 = myNode54.clone();
myNode62_1.isVisible = false;
const myNode62_2 = object.addFuseOperation();
myNode62_2.leftArg.set(myNode62_1);
myNode62_2.rightArg.set(myNode55);
myNode62_2.isVisible = false;
const myNode62_3 = object.addFuseOperation();
myNode62_3.leftArg.set(myNode62_2);
myNode62_3.rightArg.set(myNode56);
myNode62_3.isVisible = false;
const myNode62_4 = object.addFuseOperation();
myNode62_4.leftArg.set(myNode62_3);
myNode62_4.rightArg.set(myNode59);
myNode62_4.isVisible = false;
const myNode62_5 = object.addFuseOperation();
myNode62_5.leftArg.set(myNode62_4);
myNode62_5.rightArg.set(myNode60);
myNode62_5.isVisible = false;
myNode62 = object.addFuseOperation();
myNode62.leftArg.set(myNode62_5);
myNode62.rightArg.set(myNode61);
myNode62.isVisible = false;
myNode62.isVisible = false;

/* définition du node n°63*/
const myNode63 = object.addBox();
myNode63.point1.set(4.40455,-4.39045,-1.96845);
myNode63.point2.set(18.09945,3.3474499999999994,-0.23055000000000003);
myNode63.innerRotation.center.set(0,0,0);
myNode63.innerRotation.axis.set(0.0,0.0,0.0);
myNode63.innerRotation.angle.set(0.0);
myNode63.innerTranslation.vector.set(11.252,-0.5215000000000005,-1.0995);
myNode63.isVisible = false;

/* définition du node n°64*/
const myNode64 = object.addCylinder();
myNode64.point1.set(-1.483,-0.114,-18.0995);
myNode64.point2.set(-1.483,-0.114,18.099400000000003);
myNode64.radius.set(2.733);
myNode64.innerRotation.center.set(0,0,0);
myNode64.innerRotation.axis.set(1.18359229880969,1.2044359286746318,-1.2044359286746318);
myNode64.innerRotation.angle.set(118.84175815446184);
myNode64.isVisible = false;

/* définition du node n°65*/
const myNode65 = object.addCylinder();
myNode65.point1.set(-3.603,-0.701,-1.57045);
myNode65.point2.set(-3.603,-0.701,18.099449999999997);
myNode65.radius.set(0.428);
myNode65.innerRotation.center.set(0,0,0);
myNode65.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode65.innerRotation.angle.set(179.9999999997983);
myNode65.isVisible = false;

/* définition du node n°66*/
const myNode66 = object.addBox();
myNode66.point1.set(3.46555,-1.71345,-18.0995);
myNode66.point2.set(18.09945,3.3474500000000003,-0.7275999999999989);
myNode66.innerRotation.center.set(0,0,0);
myNode66.innerRotation.axis.set(0.0,0.0,0.0);
myNode66.innerRotation.angle.set(0.0);
myNode66.innerTranslation.vector.set(10.7825,0.8170000000000002,-9.413549999999999);
myNode66.isVisible = false;

/* définition du node n°67*/
const myNode67 = object.addCylinder();
myNode67.point1.set(3.451,-1.694,-1.969);
myNode67.point2.set(3.451,-1.694,18.099999999999998);
myNode67.radius.set(0.26);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(0.0,0.0,0.0);
myNode67.innerRotation.angle.set(0.0);
myNode67.isVisible = false;

/* définition du node n°68*/
const myNode68 = object.addCutOperation();
myNode68.leftArg.set(myNode66);
myNode68.rightArg.set(myNode67);
myNode68.isVisible = false;

/* définition du node n°69*/
const myNode69 = object.addBox();
myNode69.point1.set(-18.0994,-4.39045,-0.22945);
myNode69.point2.set(3.7074999999999996,18.099449999999997,18.09945);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(0.0,0.0,0.0);
myNode69.innerRotation.angle.set(0.0);
myNode69.innerTranslation.vector.set(-7.19595,6.854499999999999,8.935);
myNode69.isVisible = false;

/* définition du node n°70*/
const myNode70 = object.addCylinder();
myNode70.point1.set(3.605,-0.703,-0.727);
myNode70.point2.set(3.605,-0.703,1.5710000000000002);
myNode70.radius.set(0.747);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(0.0,0.0,0.0);
myNode70.innerRotation.angle.set(0.0);
myNode70.isVisible = false;

/* définition du node n°71*/
const myNode71 = object.addCutOperation();
myNode71.leftArg.set(myNode69);
myNode71.rightArg.set(myNode70);
myNode71.isVisible = false;

/* définition du node n°72*/
const myNode72 = object.addCylinder();
myNode72.point1.set(3.605,-0.703,-18.0995);
myNode72.point2.set(3.605,-0.703,-0.7275999999999989);
myNode72.radius.set(0.747);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(0.0,0.0,0.0);
myNode72.innerRotation.angle.set(0.0);
myNode72.isVisible = false;

/* définition du node n°73*/
const myNode73_1 = myNode63.clone();
myNode73_1.isVisible = false;
const myNode73_2 = object.addFuseOperation();
myNode73_2.leftArg.set(myNode73_1);
myNode73_2.rightArg.set(myNode64);
myNode73_2.isVisible = false;
const myNode73_3 = object.addFuseOperation();
myNode73_3.leftArg.set(myNode73_2);
myNode73_3.rightArg.set(myNode65);
myNode73_3.isVisible = false;
const myNode73_4 = object.addFuseOperation();
myNode73_4.leftArg.set(myNode73_3);
myNode73_4.rightArg.set(myNode68);
myNode73_4.isVisible = false;
const myNode73_5 = object.addFuseOperation();
myNode73_5.leftArg.set(myNode73_4);
myNode73_5.rightArg.set(myNode71);
myNode73_5.isVisible = false;
myNode73 = object.addFuseOperation();
myNode73.leftArg.set(myNode73_5);
myNode73.rightArg.set(myNode72);
myNode73.isVisible = false;
myNode73.isVisible = false;

/* définition du node n°74*/
const myNode74 = object.addCutOperation();
myNode74.leftArg.set(myNode62);
myNode74.rightArg.set(myNode73);
myNode74.isVisible = false;

/* définition du node n°75*/
const myNode75 = object.addBox();
myNode75.point1.set(-4.1549,2.9761,-1.9679);
myNode75.point2.set(-2.7830999999999997,3.6449000000000003,1.5698999999999999);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(0.0,0.0,0.0);
myNode75.innerRotation.angle.set(0.0);
myNode75.innerTranslation.vector.set(-3.4689999999999994,3.3105,-0.19900000000000007);
myNode75.isVisible = false;

/* définition du node n°76*/
const myNode76 = object.addBox();
myNode76.point1.set(-3.7069,-2.9369,-1.9679);
myNode76.point2.set(-2.7841,2.9739,-1.1000999999999999);
myNode76.innerRotation.center.set(0,0,0);
myNode76.innerRotation.axis.set(0.0,0.0,0.0);
myNode76.innerRotation.angle.set(0.0);
myNode76.innerTranslation.vector.set(-3.2455000000000003,0.01849999999999996,-1.534);
myNode76.isVisible = false;

/* définition du node n°77*/
const myNode77 = object.addBox();
myNode77.point1.set(-4.4029,-2.9369,-1.4709);
myNode77.point2.set(-3.7091,3.3469,1.5698999999999999);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(0.0,0.0,0.0);
myNode77.innerRotation.angle.set(0.0);
myNode77.innerTranslation.vector.set(-4.056,0.20500000000000007,0.04949999999999988);
myNode77.isVisible = false;

/* définition du node n°78*/
const myNode78 = object.addCylinder();
myNode78.point1.set(4.156,3.396,-1.5699);
myNode78.point2.set(4.156,3.396,1.4708999999999999);
myNode78.radius.set(0.248);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode78.innerRotation.angle.set(179.9999999997983);
myNode78.isVisible = false;

/* définition du node n°79*/
const myNode79 = object.addCylinder();
myNode79.point1.set(3.606,-0.701,-1.5699);
myNode79.point2.set(3.606,-0.701,0.7258999999999998);
myNode79.radius.set(0.747);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode79.innerRotation.angle.set(179.9999999997983);
myNode79.isVisible = false;

/* définition du node n°80*/
const myNode80 = object.addCylinder();
myNode80.point1.set(-1.125,-0.702,-4.9989);
myNode80.point2.set(-1.125,-0.702,-3.7091);
myNode80.radius.set(0.448);
myNode80.innerRotation.center.set(0,0,0);
myNode80.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode80.innerRotation.angle.set(89.99978954085029);
myNode80.isVisible = false;

/* définition du node n°81*/
const myNode81_1 = myNode75.clone();
myNode81_1.isVisible = false;
const myNode81_2 = object.addFuseOperation();
myNode81_2.leftArg.set(myNode81_1);
myNode81_2.rightArg.set(myNode76);
myNode81_2.isVisible = false;
const myNode81_3 = object.addFuseOperation();
myNode81_3.leftArg.set(myNode81_2);
myNode81_3.rightArg.set(myNode77);
myNode81_3.isVisible = false;
const myNode81_4 = object.addFuseOperation();
myNode81_4.leftArg.set(myNode81_3);
myNode81_4.rightArg.set(myNode78);
myNode81_4.isVisible = false;
const myNode81_5 = object.addFuseOperation();
myNode81_5.leftArg.set(myNode81_4);
myNode81_5.rightArg.set(myNode79);
myNode81_5.isVisible = false;
myNode81 = object.addFuseOperation();
myNode81.leftArg.set(myNode81_5);
myNode81.rightArg.set(myNode80);
myNode81.isVisible = false;
myNode81.isVisible = false;

/* définition du node n°82*/
const myNode82 = object.addBox();
myNode82.point1.set(-18.0995,-1.43945,-1.96845);
myNode82.point2.set(-3.708599999999999,0.035450000000000204,-0.7275500000000001);
myNode82.innerRotation.center.set(0,0,0);
myNode82.innerRotation.axis.set(0.0,0.0,0.0);
myNode82.innerRotation.angle.set(0.0);
myNode82.innerTranslation.vector.set(-10.904049999999998,-0.7019999999999998,-1.348);
myNode82.isVisible = false;

/* définition du node n°83*/
const myNode83 = object.addBox();
myNode83.point1.set(-4.40345,-1.71345,-1.96845);
myNode83.point2.set(-4.1575500000000005,0.2724500000000001,-0.7275500000000001);
myNode83.innerRotation.center.set(0,0,0);
myNode83.innerRotation.axis.set(0.0,0.0,0.0);
myNode83.innerRotation.angle.set(0.0);
myNode83.innerTranslation.vector.set(-4.2805,-0.7204999999999999,-1.348);
myNode83.isVisible = false;

/* définition du node n°84*/
const myNode84 = object.addBox();
myNode84.point1.set(-4.40345,-1.71345,-1.96845);
myNode84.point2.set(-3.4365500000000004,18.099449999999997,-1.47255);
myNode84.innerRotation.center.set(0,0,0);
myNode84.innerRotation.axis.set(0.0,0.0,0.0);
myNode84.innerRotation.angle.set(0.0);
myNode84.innerTranslation.vector.set(-3.9200000000000004,8.193,-1.7205);
myNode84.isVisible = false;

/* définition du node n°85*/
const myNode85 = object.addFuseOperation();
myNode85.leftArg.set(myNode83);
myNode85.rightArg.set(myNode84);
myNode85.isVisible = false;

/* définition du node n°86*/
const myNode86 = object.addCylinder();
myNode86.point1.set(-4.162,0.273,-1.969);
myNode86.point2.set(-4.162,0.273,-0.7270000000000001);
myNode86.radius.set(0.237);
myNode86.innerRotation.center.set(0,0,0);
myNode86.innerRotation.axis.set(0.0,0.0,0.0);
myNode86.innerRotation.angle.set(0.0);
myNode86.isVisible = false;

/* définition du node n°87*/
const myNode87 = object.addBox();
myNode87.point1.set(-3.708,0.036,-1.969);
myNode87.point2.set(-2.7830000000000004,3.348,-1.0990000000000002);
myNode87.innerRotation.center.set(0,0,0);
myNode87.innerRotation.axis.set(0.0,0.0,0.0);
myNode87.innerRotation.angle.set(0.0);
myNode87.innerTranslation.vector.set(-3.2455000000000003,1.692,-1.534);
myNode87.isVisible = false;

/* définition du node n°88*/
const myNode88 = object.addFuseOperation();
myNode88.leftArg.set(myNode86);
myNode88.rightArg.set(myNode87);
myNode88.isVisible = false;

/* définition du node n°89*/
const myNode89 = object.addCutOperation();
myNode89.leftArg.set(myNode85);
myNode89.rightArg.set(myNode88);
myNode89.isVisible = false;

/* définition du node n°90*/
const myNode90 = object.addBox();
myNode90.point1.set(-3.70745,-1.43945,-1.96845);
myNode90.point2.set(-2.78355,0.2724500000000001,-0.7275500000000001);
myNode90.innerRotation.center.set(0,0,0);
myNode90.innerRotation.axis.set(0.0,0.0,0.0);
myNode90.innerRotation.angle.set(0.0);
myNode90.innerTranslation.vector.set(-3.2455000000000003,-0.5834999999999999,-1.348);
myNode90.isVisible = false;

/* définition du node n°91*/
const myNode91 = object.addCylinder();
myNode91.point1.set(-3.451,0.286,-18.1);
myNode91.point2.set(-3.451,0.286,-1.0990000000000002);
myNode91.radius.set(0.257);
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
const myNode93 = object.addCylinder();
myNode93.point1.set(3.604,-0.702,-18.0995);
myNode93.point2.set(3.604,-0.702,0.7264000000000017);
myNode93.radius.set(0.428);
myNode93.innerRotation.center.set(0,0,0);
myNode93.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode93.innerRotation.angle.set(179.9999999997983);
myNode93.isVisible = false;

/* définition du node n°94*/
const myNode94_1 = myNode82.clone();
myNode94_1.isVisible = false;
const myNode94_2 = object.addFuseOperation();
myNode94_2.leftArg.set(myNode94_1);
myNode94_2.rightArg.set(myNode89);
myNode94_2.isVisible = false;
const myNode94_3 = object.addFuseOperation();
myNode94_3.leftArg.set(myNode94_2);
myNode94_3.rightArg.set(myNode92);
myNode94_3.isVisible = false;
myNode94 = object.addFuseOperation();
myNode94.leftArg.set(myNode94_3);
myNode94.rightArg.set(myNode93);
myNode94.isVisible = false;
myNode94.isVisible = false;

/* définition du node n°95*/
const myNode95 = object.addCutOperation();
myNode95.leftArg.set(myNode81);
myNode95.rightArg.set(myNode94);
myNode95.isVisible = false;

/* définition du node n°96*/
const myNode96 = object.addCylinder();
myNode96.point1.set(-3.47,-4.552,-1.9679);
myNode96.point2.set(-3.47,-4.552,-1.1000999999999999);
myNode96.radius.set(0.233);
myNode96.innerRotation.center.set(0,0,0);
myNode96.innerRotation.axis.set(0.0,0.0,0.0);
myNode96.innerRotation.angle.set(0.0);
myNode96.isVisible = false;

/* définition du node n°97*/
const myNode97 = object.addBox();
myNode97.point1.set(-2.7819,2.9761,-1.9679);
myNode97.point2.set(3.4629,3.6449000000000003,-1.4731);
myNode97.innerRotation.center.set(0,0,0);
myNode97.innerRotation.axis.set(0.0,0.0,0.0);
myNode97.innerRotation.angle.set(0.0);
myNode97.innerTranslation.vector.set(0.3405,3.3105,-1.7205);
myNode97.isVisible = false;

/* définition du node n°98*/
const myNode98 = object.addBox();
myNode98.point1.set(3.4661,-18.0989,-1.9679);
myNode98.point2.set(4.1509,3.346899999999998,18.0989);
myNode98.innerRotation.center.set(0,0,0);
myNode98.innerRotation.axis.set(0.0,0.0,0.0);
myNode98.innerRotation.angle.set(0.0);
myNode98.innerTranslation.vector.set(3.8085,-7.376000000000001,8.0655);
myNode98.isVisible = false;

/* définition du node n°99*/
const myNode99 = object.addFuseOperation();
myNode99.leftArg.set(myNode97);
myNode99.rightArg.set(myNode98);
myNode99.isVisible = false;

/* définition du node n°100*/
const myNode100 = object.addBox();
myNode100.point1.set(-2.7819,2.9761,-18.0989);
myNode100.point2.set(3.7069000000000005,3.6449000000000003,-0.23110000000000142);
myNode100.innerRotation.center.set(0,0,0);
myNode100.innerRotation.axis.set(0.0,0.0,0.0);
myNode100.innerRotation.angle.set(0.0);
myNode100.innerTranslation.vector.set(0.46250000000000036,3.3105,-9.165000000000001);
myNode100.isVisible = false;

/* définition du node n°101*/
const myNode101 = object.addBox();
myNode101.point1.set(3.4661,0.2741,-18.0989);
myNode101.point2.set(3.7069,3.6449,-1.1001000000000012);
myNode101.innerRotation.center.set(0,0,0);
myNode101.innerRotation.axis.set(0.0,0.0,0.0);
myNode101.innerRotation.angle.set(0.0);
myNode101.innerTranslation.vector.set(3.5865,1.9595,-9.5995);
myNode101.isVisible = false;

/* définition du node n°102*/
const myNode102 = object.addFuseOperation();
myNode102.leftArg.set(myNode100);
myNode102.rightArg.set(myNode101);
myNode102.isVisible = false;

/* définition du node n°103*/
const myNode103 = object.addCommonOperation();
myNode103.leftArg.set(myNode99);
myNode103.rightArg.set(myNode102);
myNode103.isVisible = false;

/* définition du node n°104*/
const myNode104 = object.addBox();
myNode104.point1.set(-3.4349,-1.4389,-1.9679);
myNode104.point2.set(-2.7840999999999996,3.6449,-1.1000999999999999);
myNode104.innerRotation.center.set(0,0,0);
myNode104.innerRotation.axis.set(0.0,0.0,0.0);
myNode104.innerRotation.angle.set(0.0);
myNode104.innerTranslation.vector.set(-3.1094999999999997,1.103,-1.534);
myNode104.isVisible = false;

/* définition du node n°105*/
const myNode105 = object.addBox();
myNode105.point1.set(-4.4029,-1.7129,-1.9679);
myNode105.point2.set(-4.1581,-1.4411,-0.7281);
myNode105.innerRotation.center.set(0,0,0);
myNode105.innerRotation.axis.set(0.0,0.0,0.0);
myNode105.innerRotation.angle.set(0.0);
myNode105.innerTranslation.vector.set(-4.2805,-1.5770000000000002,-1.3479999999999999);
myNode105.isVisible = false;

/* définition du node n°106*/
const myNode106 = object.addBox();
myNode106.point1.set(-18.0989,-2.9369,-0.2289);
myNode106.point2.set(-4.158100000000001,2.9739,18.0989);
myNode106.innerRotation.center.set(0,0,0);
myNode106.innerRotation.axis.set(0.0,0.0,0.0);
myNode106.innerRotation.angle.set(0.0);
myNode106.innerTranslation.vector.set(-11.1285,0.01849999999999996,8.935);
myNode106.isVisible = false;

/* définition du node n°107*/
const myNode107 = object.addBox();
myNode107.point1.set(-3.7069,-2.9369,-1.9679);
myNode107.point2.set(18.0989,0.27190000000000003,18.0989);
myNode107.innerRotation.center.set(0,0,0);
myNode107.innerRotation.axis.set(0.0,0.0,0.0);
myNode107.innerRotation.angle.set(0.0);
myNode107.innerTranslation.vector.set(7.196000000000001,-1.3325,8.0655);
myNode107.isVisible = false;

/* définition du node n°108*/
const myNode108 = object.addFuseOperation();
myNode108.leftArg.set(myNode106);
myNode108.rightArg.set(myNode107);
myNode108.isVisible = false;

/* définition du node n°109*/
const myNode109 = object.addCylinder();
myNode109.point1.set(3.602,-0.701,0.2311);
myNode109.point2.set(3.602,-0.701,1.9679);
myNode109.radius.set(0.992);
myNode109.innerRotation.center.set(0,0,0);
myNode109.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode109.innerRotation.angle.set(179.9999999997983);
myNode109.isVisible = false;

/* définition du node n°110*/
const myNode110 = object.addCylinder();
myNode110.point1.set(-1.515,-0.702,-4.9989);
myNode110.point2.set(-1.515,-0.702,-4.7280999999999995);
myNode110.radius.set(0.453);
myNode110.innerRotation.center.set(0,0,0);
myNode110.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode110.innerRotation.angle.set(89.99978954085029);
myNode110.isVisible = false;

/* définition du node n°111*/
const myNode111 = object.addFuseOperation();
myNode111.leftArg.set(myNode109);
myNode111.rightArg.set(myNode110);
myNode111.isVisible = false;

/* définition du node n°112*/
const myNode112 = object.addCommonOperation();
myNode112.leftArg.set(myNode108);
myNode112.rightArg.set(myNode111);
myNode112.isVisible = false;

/* définition du node n°113*/
const myNode113 = object.addBox();
myNode113.point1.set(-4.1549,3.3491,-1.4709);
myNode113.point2.set(-3.4360999999999997,3.6449,1.5698999999999999);
myNode113.innerRotation.center.set(0,0,0);
myNode113.innerRotation.axis.set(0.0,0.0,0.0);
myNode113.innerRotation.angle.set(0.0);
myNode113.innerTranslation.vector.set(-3.7954999999999997,3.497,0.04949999999999988);
myNode113.isVisible = false;

/* définition du node n°114*/
const myNode114 = object.addCylinder();
myNode114.point1.set(-3.458,3.397,-1.9679);
myNode114.point2.set(-3.458,3.397,-1.1000999999999999);
myNode114.radius.set(0.249);
myNode114.innerRotation.center.set(0,0,0);
myNode114.innerRotation.axis.set(0.0,0.0,0.0);
myNode114.innerRotation.angle.set(0.0);
myNode114.isVisible = false;

/* définition du node n°115*/
const myNode115_1 = myNode104.clone();
myNode115_1.isVisible = false;
const myNode115_2 = object.addFuseOperation();
myNode115_2.leftArg.set(myNode115_1);
myNode115_2.rightArg.set(myNode105);
myNode115_2.isVisible = false;
const myNode115_3 = object.addFuseOperation();
myNode115_3.leftArg.set(myNode115_2);
myNode115_3.rightArg.set(myNode112);
myNode115_3.isVisible = false;
const myNode115_4 = object.addFuseOperation();
myNode115_4.leftArg.set(myNode115_3);
myNode115_4.rightArg.set(myNode113);
myNode115_4.isVisible = false;
myNode115 = object.addFuseOperation();
myNode115.leftArg.set(myNode115_4);
myNode115.rightArg.set(myNode114);
myNode115.isVisible = false;
myNode115.isVisible = false;

/* définition du node n°116*/
const myNode116 = object.addBox();
myNode116.point1.set(-4.40345,-1.71345,-1.96845);
myNode116.point2.set(-3.4365500000000004,0.2724500000000001,-0.7275500000000001);
myNode116.innerRotation.center.set(0,0,0);
myNode116.innerRotation.axis.set(0.0,0.0,0.0);
myNode116.innerRotation.angle.set(0.0);
myNode116.innerTranslation.vector.set(-3.9200000000000004,-0.7204999999999999,-1.348);
myNode116.isVisible = false;

/* définition du node n°117*/
const myNode117 = object.addCylinder();
myNode117.point1.set(-3.436,-1.714,-1.969);
myNode117.point2.set(-3.436,-1.714,-1.472);
myNode117.radius.set(0.285);
myNode117.innerRotation.center.set(0,0,0);
myNode117.innerRotation.axis.set(0.0,0.0,0.0);
myNode117.innerRotation.angle.set(0.0);
myNode117.isVisible = false;

/* définition du node n°118*/
const myNode118 = object.addCutOperation();
myNode118.leftArg.set(myNode116);
myNode118.rightArg.set(myNode117);
myNode118.isVisible = false;

/* définition du node n°119*/
const myNode119 = object.addBox();
myNode119.point1.set(-4.156,-1.714,-1.472);
myNode119.point2.set(-3.4349999999999996,0.27300000000000013,1.5710000000000002);
myNode119.innerRotation.center.set(0,0,0);
myNode119.innerRotation.axis.set(0.0,0.0,0.0);
myNode119.innerRotation.angle.set(0.0);
myNode119.innerTranslation.vector.set(-3.7954999999999997,-0.7204999999999999,0.0495000000000001);
myNode119.isVisible = false;

/* définition du node n°120*/
const myNode120 = object.addCylinder();
myNode120.point1.set(-4.157,-1.687,-1.472);
myNode120.point2.set(-4.157,-1.687,18.099999999999998);
myNode120.radius.set(0.246);
myNode120.innerRotation.center.set(0,0,0);
myNode120.innerRotation.axis.set(0.0,0.0,0.0);
myNode120.innerRotation.angle.set(0.0);
myNode120.isVisible = false;

/* définition du node n°121*/
const myNode121 = object.addFuseOperation();
myNode121.leftArg.set(myNode119);
myNode121.rightArg.set(myNode120);
myNode121.isVisible = false;

/* définition du node n°122*/
const myNode122 = object.addCutOperation();
myNode122.leftArg.set(myNode118);
myNode122.rightArg.set(myNode121);
myNode122.isVisible = false;

/* définition du node n°123*/
const myNode123 = object.addCylinder();
myNode123.point1.set(3.606,-0.701,0.23055);
myNode123.point2.set(3.606,-0.701,1.96845);
myNode123.radius.set(0.747);
myNode123.innerRotation.center.set(0,0,0);
myNode123.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode123.innerRotation.angle.set(179.9999999997983);
myNode123.isVisible = false;

/* définition du node n°124*/
const myNode124 = object.addFuseOperation();
myNode124.leftArg.set(myNode122);
myNode124.rightArg.set(myNode123);
myNode124.isVisible = false;

/* définition du node n°125*/
const myNode125 = object.addCutOperation();
myNode125.leftArg.set(myNode115);
myNode125.rightArg.set(myNode124);
myNode125.isVisible = false;

/* définition du node n°126*/
const myNode126 = object.addBox();
myNode126.point1.set(-4.1549,-4.7879,-1.4709);
myNode126.point2.set(-2.7830999999999997,-4.392099999999999,1.5698999999999999);
myNode126.innerRotation.center.set(0,0,0);
myNode126.innerRotation.axis.set(0.0,0.0,0.0);
myNode126.innerRotation.angle.set(0.0);
myNode126.innerTranslation.vector.set(-3.4689999999999994,-4.59,0.04949999999999988);
myNode126.isVisible = false;

/* définition du node n°127*/
const myNode127_1 = myNode12.clone();
myNode127_1.isVisible = false;
const myNode127_2 = object.addFuseOperation();
myNode127_2.leftArg.set(myNode127_1);
myNode127_2.rightArg.set(myNode21);
myNode127_2.isVisible = false;
const myNode127_3 = object.addFuseOperation();
myNode127_3.leftArg.set(myNode127_2);
myNode127_3.rightArg.set(myNode22);
myNode127_3.isVisible = false;
const myNode127_4 = object.addFuseOperation();
myNode127_4.leftArg.set(myNode127_3);
myNode127_4.rightArg.set(myNode23);
myNode127_4.isVisible = false;
const myNode127_5 = object.addFuseOperation();
myNode127_5.leftArg.set(myNode127_4);
myNode127_5.rightArg.set(myNode40);
myNode127_5.isVisible = false;
const myNode127_6 = object.addFuseOperation();
myNode127_6.leftArg.set(myNode127_5);
myNode127_6.rightArg.set(myNode43);
myNode127_6.isVisible = false;
const myNode127_7 = object.addFuseOperation();
myNode127_7.leftArg.set(myNode127_6);
myNode127_7.rightArg.set(myNode50);
myNode127_7.isVisible = false;
const myNode127_8 = object.addFuseOperation();
myNode127_8.leftArg.set(myNode127_7);
myNode127_8.rightArg.set(myNode53);
myNode127_8.isVisible = false;
const myNode127_9 = object.addFuseOperation();
myNode127_9.leftArg.set(myNode127_8);
myNode127_9.rightArg.set(myNode74);
myNode127_9.isVisible = false;
const myNode127_10 = object.addFuseOperation();
myNode127_10.leftArg.set(myNode127_9);
myNode127_10.rightArg.set(myNode95);
myNode127_10.isVisible = false;
const myNode127_11 = object.addFuseOperation();
myNode127_11.leftArg.set(myNode127_10);
myNode127_11.rightArg.set(myNode96);
myNode127_11.isVisible = false;
const myNode127_12 = object.addFuseOperation();
myNode127_12.leftArg.set(myNode127_11);
myNode127_12.rightArg.set(myNode103);
myNode127_12.isVisible = false;
const myNode127_13 = object.addFuseOperation();
myNode127_13.leftArg.set(myNode127_12);
myNode127_13.rightArg.set(myNode125);
myNode127_13.isVisible = false;
myNode127 = object.addFuseOperation();
myNode127.leftArg.set(myNode127_13);
myNode127.rightArg.set(myNode126);
myNode127.isVisible = false;
myNode127.isVisible = false;

/* définition du node n°128*/
const myNode128 = object.addBox();
myNode128.point1.set(-5.9989,-5.7459,-2.3619);
myNode128.point2.set(5.9989,5.7449,2.3609000000000004);
myNode128.innerRotation.center.set(0,0,0);
myNode128.innerRotation.axis.set(0.0,0.0,0.0);
myNode128.innerRotation.angle.set(0.0);
myNode128.innerTranslation.vector.set(0.0,-0.0004999999999997229,-0.0004999999999997229);
myNode128.isVisible = false;

/* définition du node n°129*/
const myNode129 = object.addCommonOperation();
myNode129.leftArg.set(myNode127);
myNode129.rightArg.set(myNode128);
myNode129.isVisible = true;


/*END Geometry Object Definition*/