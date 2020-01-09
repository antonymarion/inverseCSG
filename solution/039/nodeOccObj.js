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
const myNode1 = object.addCylinder();
myNode1.point1.set(-3.47,-4.552,-1.9679);
myNode1.point2.set(-3.47,-4.552,-1.1000999999999999);
myNode1.radius.set(0.233);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-4.4029,-1.7129,-1.9679);
myNode2.point2.set(-4.1581,-1.4411,-0.7281);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.innerTranslation.vector.set(-4.2805,-1.5770000000000002,-1.3479999999999999);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addBox();
myNode3.point1.set(-3.4349,-1.4389,-1.9679);
myNode3.point2.set(-2.7840999999999996,3.6449,-1.1000999999999999);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);
myNode3.innerTranslation.vector.set(-3.1094999999999997,1.103,-1.534);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addBox();
myNode4.point1.set(-4.1549,3.3491,-1.4709);
myNode4.point2.set(-3.4360999999999997,3.6449,1.5698999999999999);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.innerTranslation.vector.set(-3.7954999999999997,3.497,0.04949999999999988);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(-3.458,3.397,-1.9679);
myNode5.point2.set(-3.458,3.397,-1.1000999999999999);
myNode5.radius.set(0.249);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addCylinder();
myNode6.point1.set(3.602,-0.701,0.2311);
myNode6.point2.set(3.602,-0.701,1.9679);
myNode6.radius.set(0.992);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode6.innerRotation.angle.set(3.141592653586273);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addCylinder();
myNode7.point1.set(-1.515,-0.702,-4.9989);
myNode7.point2.set(-1.515,-0.702,-4.7280999999999995);
myNode7.radius.set(0.453);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode7.innerRotation.angle.set(1.5707926535897931);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addFuseOperation();
myNode8.leftArg.set(myNode6);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(-18.0989,-2.9369,-0.2289);
myNode9.point2.set(-4.158100000000001,2.9739,18.0989);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.innerTranslation.vector.set(-11.1285,0.01849999999999996,8.935);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(-3.7069,-2.9369,-1.9679);
myNode10.point2.set(18.0989,0.27190000000000003,18.0989);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.innerTranslation.vector.set(7.196000000000001,-1.3325,8.0655);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addFuseOperation();
myNode11.leftArg.set(myNode9);
myNode11.rightArg.set(myNode10);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCommonOperation();
myNode12.leftArg.set(myNode8);
myNode12.rightArg.set(myNode11);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13_1 = myNode2.clone();
myNode13_1.isVisible = false;
const myNode13_2 = object.addFuseOperation();
myNode13_2.leftArg.set(myNode13_1);
myNode13_2.rightArg.set(myNode3);
myNode13_2.isVisible = false;
const myNode13_3 = object.addFuseOperation();
myNode13_3.leftArg.set(myNode13_2);
myNode13_3.rightArg.set(myNode4);
myNode13_3.isVisible = false;
const myNode13_4 = object.addFuseOperation();
myNode13_4.leftArg.set(myNode13_3);
myNode13_4.rightArg.set(myNode5);
myNode13_4.isVisible = false;
myNode13 = object.addFuseOperation();
myNode13.leftArg.set(myNode13_4);
myNode13.rightArg.set(myNode12);
myNode13.isVisible = false;
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addBox();
myNode14.point1.set(-4.40345,-1.71345,-1.96845);
myNode14.point2.set(-3.4365500000000004,0.2724500000000001,-0.7275500000000001);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);
myNode14.innerTranslation.vector.set(-3.9200000000000004,-0.7204999999999999,-1.348);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addCylinder();
myNode15.point1.set(-3.436,-1.714,-1.969);
myNode15.point2.set(-3.436,-1.714,-1.472);
myNode15.radius.set(0.285);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addCutOperation();
myNode16.leftArg.set(myNode14);
myNode16.rightArg.set(myNode15);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(-4.156,-1.714,-1.472);
myNode17.point2.set(-3.4349999999999996,0.27300000000000013,1.5710000000000002);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.innerTranslation.vector.set(-3.7954999999999997,-0.7204999999999999,0.0495000000000001);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(-4.157,-1.687,-1.472);
myNode18.point2.set(-4.157,-1.687,18.099999999999998);
myNode18.radius.set(0.246);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);
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
const myNode21 = object.addCylinder();
myNode21.point1.set(3.606,-0.701,0.23055);
myNode21.point2.set(3.606,-0.701,1.96845);
myNode21.radius.set(0.747);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode21.innerRotation.angle.set(3.141592653586273);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addFuseOperation();
myNode22.leftArg.set(myNode20);
myNode22.rightArg.set(myNode21);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addCutOperation();
myNode23.leftArg.set(myNode13);
myNode23.rightArg.set(myNode22);
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
const myNode35 = object.addBox();
myNode35.point1.set(3.465,-4.789,-1.472);
myNode35.point2.set(4.152,-1.4399999999999995,-0.22999999999999998);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,0.0);
myNode35.innerRotation.angle.set(0.0);
myNode35.innerTranslation.vector.set(3.8085,-3.1144999999999996,-0.851);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addCylinder();
myNode36.point1.set(-1.515,-0.702,4.727);
myNode36.point2.set(-1.515,-0.702,18.1);
myNode36.radius.set(0.453);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode36.innerRotation.angle.set(1.5707926535897931);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addCylinder();
myNode37.point1.set(4.148,-1.694,-1.472);
myNode37.point2.set(4.148,-1.694,1.5710000000000002);
myNode37.radius.set(0.256);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0,0.0,0.0);
myNode37.innerRotation.angle.set(0.0);
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
myNode44.point1.set(-4.1549,-4.7879,-1.4709);
myNode44.point2.set(-2.7830999999999997,-4.392099999999999,1.5698999999999999);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(0.0,0.0,0.0);
myNode44.innerRotation.angle.set(0.0);
myNode44.innerTranslation.vector.set(-3.4689999999999994,-4.59,0.04949999999999988);
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45 = object.addSphere();
myNode45.center.set(-0.004,1.418,1.584);
myNode45.radius.set(3.4288044563666795);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addBox();
myNode46.point1.set(-18.0989,0.0371,-18.0989);
myNode46.point2.set(4.402899999999999,3.6449000000000003,-0.23110000000000142);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(0.0,0.0,0.0);
myNode46.innerRotation.angle.set(0.0);
myNode46.innerTranslation.vector.set(-6.848000000000001,1.841,-9.165000000000001);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addSphere();
myNode47.center.set(0.004,3.07,1.571);
myNode47.radius.set(2.610800643480846);
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addCylinder();
myNode48.point1.set(-1.568,0.001,3.3491);
myNode48.point2.set(-1.568,0.001,4.7869);
myNode48.radius.set(2.107);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode48.innerRotation.angle.set(2.094392392986396);
myNode48.isVisible = false;

/* définition du node n°49*/
const myNode49 = object.addCommonOperation();
myNode49.leftArg.set(myNode47);
myNode49.rightArg.set(myNode48);
myNode49.isVisible = false;

/* définition du node n°50*/
const myNode50_1 = myNode45.clone();
myNode50_1.isVisible = false;
const myNode50_2 = object.addFuseOperation();
myNode50_2.leftArg.set(myNode50_1);
myNode50_2.rightArg.set(myNode46);
myNode50_2.isVisible = false;
myNode50 = object.addFuseOperation();
myNode50.leftArg.set(myNode50_2);
myNode50.rightArg.set(myNode49);
myNode50.isVisible = false;
myNode50.isVisible = false;

/* définition du node n°51*/
const myNode51 = object.addCylinder();
myNode51.point1.set(4.151,0.293,-1.4709);
myNode51.point2.set(4.151,0.293,1.5698999999999999);
myNode51.radius.set(0.257);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(0.0,0.0,0.0);
myNode51.innerRotation.angle.set(0.0);
myNode51.isVisible = false;

/* définition du node n°52*/
const myNode52 = object.addCylinder();
myNode52.point1.set(3.45,0.294,-1.9679);
myNode52.point2.set(3.45,0.294,-1.4731);
myNode52.radius.set(0.264);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,0.0,0.0);
myNode52.innerRotation.angle.set(0.0);
myNode52.isVisible = false;

/* définition du node n°53*/
const myNode53 = object.addBox();
myNode53.point1.set(-2.7819,3.3491,-1.4709);
myNode53.point2.set(4.149900000000001,4.7869,1.5698999999999999);
myNode53.innerRotation.center.set(0,0,0);
myNode53.innerRotation.axis.set(0.0,0.0,0.0);
myNode53.innerRotation.angle.set(0.0);
myNode53.innerTranslation.vector.set(0.6840000000000002,4.068,0.04949999999999988);
myNode53.isVisible = false;

/* définition du node n°54*/
const myNode54 = object.addCylinder();
myNode54.point1.set(-1.56,-0.002,-18.0995);
myNode54.point2.set(-1.56,-0.002,4.787400000000002);
myNode54.radius.set(1.483);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode54.innerRotation.angle.set(2.094392392986396);
myNode54.isVisible = false;

/* définition du node n°55*/
const myNode55 = object.addCutOperation();
myNode55.leftArg.set(myNode53);
myNode55.rightArg.set(myNode54);
myNode55.isVisible = false;

/* définition du node n°56*/
const myNode56_1 = myNode51.clone();
myNode56_1.isVisible = false;
const myNode56_2 = object.addFuseOperation();
myNode56_2.leftArg.set(myNode56_1);
myNode56_2.rightArg.set(myNode52);
myNode56_2.isVisible = false;
myNode56 = object.addFuseOperation();
myNode56.leftArg.set(myNode56_2);
myNode56.rightArg.set(myNode55);
myNode56.isVisible = false;
myNode56.isVisible = false;

/* définition du node n°57*/
const myNode57 = object.addCommonOperation();
myNode57.leftArg.set(myNode50);
myNode57.rightArg.set(myNode56);
myNode57.isVisible = false;

/* définition du node n°58*/
const myNode58 = object.addCylinder();
myNode58.point1.set(-1.125,-0.702,3.4661);
myNode58.point2.set(-1.125,-0.702,4.9989);
myNode58.radius.set(0.448);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode58.innerRotation.angle.set(1.5707926535897931);
myNode58.isVisible = false;

/* définition du node n°59*/
const myNode59 = object.addBox();
myNode59.point1.set(-2.7819,-4.7879,-0.2289);
myNode59.point2.set(3.7069000000000005,3.3469000000000007,1.5699);
myNode59.innerRotation.center.set(0,0,0);
myNode59.innerRotation.axis.set(0.0,0.0,0.0);
myNode59.innerRotation.angle.set(0.0);
myNode59.innerTranslation.vector.set(0.46250000000000036,-0.7204999999999995,0.6705);
myNode59.isVisible = false;

/* définition du node n°60*/
const myNode60 = object.addCylinder();
myNode60.point1.set(-3.603,-0.704,0.2311);
myNode60.point2.set(-3.603,-0.704,1.9679);
myNode60.radius.set(0.994);
myNode60.innerRotation.center.set(0,0,0);
myNode60.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode60.innerRotation.angle.set(3.141592653586273);
myNode60.isVisible = false;

/* définition du node n°61*/
const myNode61 = object.addBox();
myNode61.point1.set(-2.7819,-4.7879,-1.9679);
myNode61.point2.set(3.4629,-2.9391,1.5698999999999999);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(0.0,0.0,0.0);
myNode61.innerRotation.angle.set(0.0);
myNode61.innerTranslation.vector.set(0.3405,-3.8634999999999997,-0.19900000000000007);
myNode61.isVisible = false;

/* définition du node n°62*/
const myNode62 = object.addBox();
myNode62.point1.set(-18.0994,-4.39045,-1.09845);
myNode62.point2.set(3.7074999999999996,-2.93855,-0.22954999999999992);
myNode62.innerRotation.center.set(0,0,0);
myNode62.innerRotation.axis.set(0.0,0.0,0.0);
myNode62.innerRotation.angle.set(0.0);
myNode62.innerTranslation.vector.set(-7.19595,-3.6645000000000003,-0.6639999999999999);
myNode62.isVisible = false;

/* définition du node n°63*/
const myNode63 = object.addCutOperation();
myNode63.leftArg.set(myNode61);
myNode63.rightArg.set(myNode62);
myNode63.isVisible = false;

/* définition du node n°64*/
const myNode64 = object.addBox();
myNode64.point1.set(3.7091,-4.5529,-1.4709);
myNode64.point2.set(4.4029,3.3468999999999998,1.5698999999999999);
myNode64.innerRotation.center.set(0,0,0);
myNode64.innerRotation.axis.set(0.0,0.0,0.0);
myNode64.innerRotation.angle.set(0.0);
myNode64.innerTranslation.vector.set(4.056,-0.6030000000000002,0.04949999999999988);
myNode64.isVisible = false;

/* définition du node n°65*/
const myNode65 = object.addBox();
myNode65.point1.set(2.7841,-1.7129,-1.9679);
myNode65.point2.set(4.4029,3.3468999999999998,-1.1000999999999999);
myNode65.innerRotation.center.set(0,0,0);
myNode65.innerRotation.axis.set(0.0,0.0,0.0);
myNode65.innerRotation.angle.set(0.0);
myNode65.innerTranslation.vector.set(3.5935,0.817,-1.534);
myNode65.isVisible = false;

/* définition du node n°66*/
const myNode66_1 = myNode58.clone();
myNode66_1.isVisible = false;
const myNode66_2 = object.addFuseOperation();
myNode66_2.leftArg.set(myNode66_1);
myNode66_2.rightArg.set(myNode59);
myNode66_2.isVisible = false;
const myNode66_3 = object.addFuseOperation();
myNode66_3.leftArg.set(myNode66_2);
myNode66_3.rightArg.set(myNode60);
myNode66_3.isVisible = false;
const myNode66_4 = object.addFuseOperation();
myNode66_4.leftArg.set(myNode66_3);
myNode66_4.rightArg.set(myNode63);
myNode66_4.isVisible = false;
const myNode66_5 = object.addFuseOperation();
myNode66_5.leftArg.set(myNode66_4);
myNode66_5.rightArg.set(myNode64);
myNode66_5.isVisible = false;
myNode66 = object.addFuseOperation();
myNode66.leftArg.set(myNode66_5);
myNode66.rightArg.set(myNode65);
myNode66.isVisible = false;
myNode66.isVisible = false;

/* définition du node n°67*/
const myNode67 = object.addBox();
myNode67.point1.set(4.40455,-4.39045,-1.96845);
myNode67.point2.set(18.09945,3.3474499999999994,-0.23055000000000003);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(0.0,0.0,0.0);
myNode67.innerRotation.angle.set(0.0);
myNode67.innerTranslation.vector.set(11.252,-0.5215000000000005,-1.0995);
myNode67.isVisible = false;

/* définition du node n°68*/
const myNode68 = object.addCylinder();
myNode68.point1.set(-1.483,-0.114,-18.0995);
myNode68.point2.set(-1.483,-0.114,18.099400000000003);
myNode68.radius.set(2.733);
myNode68.innerRotation.center.set(0,0,0);
myNode68.innerRotation.axis.set(1.18359229880969,1.2044359286746318,-1.2044359286746318);
myNode68.innerRotation.angle.set(2.074179968654179);
myNode68.isVisible = false;

/* définition du node n°69*/
const myNode69 = object.addBox();
myNode69.point1.set(3.46555,-1.71345,-18.0995);
myNode69.point2.set(18.09945,3.3474500000000003,-0.7275999999999989);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(0.0,0.0,0.0);
myNode69.innerRotation.angle.set(0.0);
myNode69.innerTranslation.vector.set(10.7825,0.8170000000000002,-9.413549999999999);
myNode69.isVisible = false;

/* définition du node n°70*/
const myNode70 = object.addCylinder();
myNode70.point1.set(3.451,-1.694,-1.969);
myNode70.point2.set(3.451,-1.694,18.099999999999998);
myNode70.radius.set(0.26);
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
myNode72.point1.set(-3.603,-0.701,-1.57045);
myNode72.point2.set(-3.603,-0.701,18.099449999999997);
myNode72.radius.set(0.428);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode72.innerRotation.angle.set(3.141592653586273);
myNode72.isVisible = false;

/* définition du node n°73*/
const myNode73 = object.addBox();
myNode73.point1.set(-18.0994,-4.39045,-0.22945);
myNode73.point2.set(3.7074999999999996,18.099449999999997,18.09945);
myNode73.innerRotation.center.set(0,0,0);
myNode73.innerRotation.axis.set(0.0,0.0,0.0);
myNode73.innerRotation.angle.set(0.0);
myNode73.innerTranslation.vector.set(-7.19595,6.854499999999999,8.935);
myNode73.isVisible = false;

/* définition du node n°74*/
const myNode74 = object.addCylinder();
myNode74.point1.set(3.605,-0.703,-0.727);
myNode74.point2.set(3.605,-0.703,1.5710000000000002);
myNode74.radius.set(0.747);
myNode74.innerRotation.center.set(0,0,0);
myNode74.innerRotation.axis.set(0.0,0.0,0.0);
myNode74.innerRotation.angle.set(0.0);
myNode74.isVisible = false;

/* définition du node n°75*/
const myNode75 = object.addCutOperation();
myNode75.leftArg.set(myNode73);
myNode75.rightArg.set(myNode74);
myNode75.isVisible = false;

/* définition du node n°76*/
const myNode76 = object.addCylinder();
myNode76.point1.set(3.605,-0.703,-18.0995);
myNode76.point2.set(3.605,-0.703,-0.7275999999999989);
myNode76.radius.set(0.747);
myNode76.innerRotation.center.set(0,0,0);
myNode76.innerRotation.axis.set(0.0,0.0,0.0);
myNode76.innerRotation.angle.set(0.0);
myNode76.isVisible = false;

/* définition du node n°77*/
const myNode77_1 = myNode67.clone();
myNode77_1.isVisible = false;
const myNode77_2 = object.addFuseOperation();
myNode77_2.leftArg.set(myNode77_1);
myNode77_2.rightArg.set(myNode68);
myNode77_2.isVisible = false;
const myNode77_3 = object.addFuseOperation();
myNode77_3.leftArg.set(myNode77_2);
myNode77_3.rightArg.set(myNode71);
myNode77_3.isVisible = false;
const myNode77_4 = object.addFuseOperation();
myNode77_4.leftArg.set(myNode77_3);
myNode77_4.rightArg.set(myNode72);
myNode77_4.isVisible = false;
const myNode77_5 = object.addFuseOperation();
myNode77_5.leftArg.set(myNode77_4);
myNode77_5.rightArg.set(myNode75);
myNode77_5.isVisible = false;
myNode77 = object.addFuseOperation();
myNode77.leftArg.set(myNode77_5);
myNode77.rightArg.set(myNode76);
myNode77.isVisible = false;
myNode77.isVisible = false;

/* définition du node n°78*/
const myNode78 = object.addCutOperation();
myNode78.leftArg.set(myNode66);
myNode78.rightArg.set(myNode77);
myNode78.isVisible = false;

/* définition du node n°79*/
const myNode79 = object.addBox();
myNode79.point1.set(-4.4029,-4.5529,-1.4709);
myNode79.point2.set(-3.7091,-2.9391000000000003,1.5698999999999999);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(0.0,0.0,0.0);
myNode79.innerRotation.angle.set(0.0);
myNode79.innerTranslation.vector.set(-4.056,-3.7460000000000004,0.04949999999999988);
myNode79.isVisible = false;

/* définition du node n°80*/
const myNode80 = object.addBox();
myNode80.point1.set(-2.7819,-18.0989,-1.9679);
myNode80.point2.set(4.149900000000001,0.2718999999999987,-0.23110000000000008);
myNode80.innerRotation.center.set(0,0,0);
myNode80.innerRotation.axis.set(0.0,0.0,0.0);
myNode80.innerRotation.angle.set(0.0);
myNode80.innerTranslation.vector.set(0.6840000000000002,-8.9135,-1.0995);
myNode80.isVisible = false;

/* définition du node n°81*/
const myNode81 = object.addCylinder();
myNode81.point1.set(3.465,3.397,-18.0989);
myNode81.point2.set(3.465,3.397,-1.4730999999999987);
myNode81.radius.set(0.244);
myNode81.innerRotation.center.set(0,0,0);
myNode81.innerRotation.axis.set(0.0,0.0,0.0);
myNode81.innerRotation.angle.set(0.0);
myNode81.isVisible = false;

/* définition du node n°82*/
const myNode82 = object.addFuseOperation();
myNode82.leftArg.set(myNode80);
myNode82.rightArg.set(myNode81);
myNode82.isVisible = false;

/* définition du node n°83*/
const myNode83 = object.addBox();
myNode83.point1.set(-18.0989,0.2741,-1.9679);
myNode83.point2.set(3.706900000000001,3.6449,1.5698999999999999);
myNode83.innerRotation.center.set(0,0,0);
myNode83.innerRotation.axis.set(0.0,0.0,0.0);
myNode83.innerRotation.angle.set(0.0);
myNode83.innerTranslation.vector.set(-7.196,1.9595,-0.19900000000000007);
myNode83.isVisible = false;

/* définition du node n°84*/
const myNode84 = object.addBox();
myNode84.point1.set(3.4661,0.0371,-1.4709);
myNode84.point2.set(18.0989,0.27190000000000003,1.5698999999999999);
myNode84.innerRotation.center.set(0,0,0);
myNode84.innerRotation.axis.set(0.0,0.0,0.0);
myNode84.innerRotation.angle.set(0.0);
myNode84.innerTranslation.vector.set(10.782499999999999,0.1545,0.04949999999999988);
myNode84.isVisible = false;

/* définition du node n°85*/
const myNode85 = object.addFuseOperation();
myNode85.leftArg.set(myNode83);
myNode85.rightArg.set(myNode84);
myNode85.isVisible = false;

/* définition du node n°86*/
const myNode86 = object.addCommonOperation();
myNode86.leftArg.set(myNode82);
myNode86.rightArg.set(myNode85);
myNode86.isVisible = false;

/* définition du node n°87*/
const myNode87 = object.addCylinder();
myNode87.point1.set(4.139,-4.525,-1.5699);
myNode87.point2.set(4.139,-4.525,1.4708999999999999);
myNode87.radius.set(0.269);
myNode87.innerRotation.center.set(0,0,0);
myNode87.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode87.innerRotation.angle.set(3.141592653586273);
myNode87.isVisible = false;

/* définition du node n°88*/
const myNode88 = object.addBox();
myNode88.point1.set(-2.7819,2.9761,-1.9679);
myNode88.point2.set(3.4629,3.6449000000000003,-1.4731);
myNode88.innerRotation.center.set(0,0,0);
myNode88.innerRotation.axis.set(0.0,0.0,0.0);
myNode88.innerRotation.angle.set(0.0);
myNode88.innerTranslation.vector.set(0.3405,3.3105,-1.7205);
myNode88.isVisible = false;

/* définition du node n°89*/
const myNode89 = object.addBox();
myNode89.point1.set(3.4661,-18.0989,-1.9679);
myNode89.point2.set(4.1509,3.346899999999998,18.0989);
myNode89.innerRotation.center.set(0,0,0);
myNode89.innerRotation.axis.set(0.0,0.0,0.0);
myNode89.innerRotation.angle.set(0.0);
myNode89.innerTranslation.vector.set(3.8085,-7.376000000000001,8.0655);
myNode89.isVisible = false;

/* définition du node n°90*/
const myNode90 = object.addFuseOperation();
myNode90.leftArg.set(myNode88);
myNode90.rightArg.set(myNode89);
myNode90.isVisible = false;

/* définition du node n°91*/
const myNode91 = object.addBox();
myNode91.point1.set(3.4661,0.2741,-18.0989);
myNode91.point2.set(3.7069,3.6449,-1.1001000000000012);
myNode91.innerRotation.center.set(0,0,0);
myNode91.innerRotation.axis.set(0.0,0.0,0.0);
myNode91.innerRotation.angle.set(0.0);
myNode91.innerTranslation.vector.set(3.5865,1.9595,-9.5995);
myNode91.isVisible = false;

/* définition du node n°92*/
const myNode92 = object.addBox();
myNode92.point1.set(-2.7819,2.9761,-18.0989);
myNode92.point2.set(3.7069000000000005,3.6449000000000003,-0.23110000000000142);
myNode92.innerRotation.center.set(0,0,0);
myNode92.innerRotation.axis.set(0.0,0.0,0.0);
myNode92.innerRotation.angle.set(0.0);
myNode92.innerTranslation.vector.set(0.46250000000000036,3.3105,-9.165000000000001);
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
myNode95.point1.set(-3.7069,-2.9369,-1.9679);
myNode95.point2.set(-2.7841,2.9739,-1.1000999999999999);
myNode95.innerRotation.center.set(0,0,0);
myNode95.innerRotation.axis.set(0.0,0.0,0.0);
myNode95.innerRotation.angle.set(0.0);
myNode95.innerTranslation.vector.set(-3.2455000000000003,0.01849999999999996,-1.534);
myNode95.isVisible = false;

/* définition du node n°96*/
const myNode96 = object.addBox();
myNode96.point1.set(-4.4029,-2.9369,-1.4709);
myNode96.point2.set(-3.7091,3.3469,1.5698999999999999);
myNode96.innerRotation.center.set(0,0,0);
myNode96.innerRotation.axis.set(0.0,0.0,0.0);
myNode96.innerRotation.angle.set(0.0);
myNode96.innerTranslation.vector.set(-4.056,0.20500000000000007,0.04949999999999988);
myNode96.isVisible = false;

/* définition du node n°97*/
const myNode97 = object.addBox();
myNode97.point1.set(-4.1549,2.9761,-1.9679);
myNode97.point2.set(-2.7830999999999997,3.6449000000000003,1.5698999999999999);
myNode97.innerRotation.center.set(0,0,0);
myNode97.innerRotation.axis.set(0.0,0.0,0.0);
myNode97.innerRotation.angle.set(0.0);
myNode97.innerTranslation.vector.set(-3.4689999999999994,3.3105,-0.19900000000000007);
myNode97.isVisible = false;

/* définition du node n°98*/
const myNode98 = object.addCylinder();
myNode98.point1.set(4.156,3.396,-1.5699);
myNode98.point2.set(4.156,3.396,1.4708999999999999);
myNode98.radius.set(0.248);
myNode98.innerRotation.center.set(0,0,0);
myNode98.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode98.innerRotation.angle.set(3.141592653586273);
myNode98.isVisible = false;

/* définition du node n°99*/
const myNode99 = object.addCylinder();
myNode99.point1.set(-1.125,-0.702,-4.9989);
myNode99.point2.set(-1.125,-0.702,-3.7091);
myNode99.radius.set(0.448);
myNode99.innerRotation.center.set(0,0,0);
myNode99.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode99.innerRotation.angle.set(1.5707926535897931);
myNode99.isVisible = false;

/* définition du node n°100*/
const myNode100 = object.addCylinder();
myNode100.point1.set(3.606,-0.701,-1.5699);
myNode100.point2.set(3.606,-0.701,0.7258999999999998);
myNode100.radius.set(0.747);
myNode100.innerRotation.center.set(0,0,0);
myNode100.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode100.innerRotation.angle.set(3.141592653586273);
myNode100.isVisible = false;

/* définition du node n°101*/
const myNode101_1 = myNode95.clone();
myNode101_1.isVisible = false;
const myNode101_2 = object.addFuseOperation();
myNode101_2.leftArg.set(myNode101_1);
myNode101_2.rightArg.set(myNode96);
myNode101_2.isVisible = false;
const myNode101_3 = object.addFuseOperation();
myNode101_3.leftArg.set(myNode101_2);
myNode101_3.rightArg.set(myNode97);
myNode101_3.isVisible = false;
const myNode101_4 = object.addFuseOperation();
myNode101_4.leftArg.set(myNode101_3);
myNode101_4.rightArg.set(myNode98);
myNode101_4.isVisible = false;
const myNode101_5 = object.addFuseOperation();
myNode101_5.leftArg.set(myNode101_4);
myNode101_5.rightArg.set(myNode99);
myNode101_5.isVisible = false;
myNode101 = object.addFuseOperation();
myNode101.leftArg.set(myNode101_5);
myNode101.rightArg.set(myNode100);
myNode101.isVisible = false;
myNode101.isVisible = false;

/* définition du node n°102*/
const myNode102 = object.addBox();
myNode102.point1.set(-18.0995,-1.43945,-1.96845);
myNode102.point2.set(-3.708599999999999,0.035450000000000204,-0.7275500000000001);
myNode102.innerRotation.center.set(0,0,0);
myNode102.innerRotation.axis.set(0.0,0.0,0.0);
myNode102.innerRotation.angle.set(0.0);
myNode102.innerTranslation.vector.set(-10.904049999999998,-0.7019999999999998,-1.348);
myNode102.isVisible = false;

/* définition du node n°103*/
const myNode103 = object.addBox();
myNode103.point1.set(-4.40345,-1.71345,-1.96845);
myNode103.point2.set(-4.1575500000000005,0.2724500000000001,-0.7275500000000001);
myNode103.innerRotation.center.set(0,0,0);
myNode103.innerRotation.axis.set(0.0,0.0,0.0);
myNode103.innerRotation.angle.set(0.0);
myNode103.innerTranslation.vector.set(-4.2805,-0.7204999999999999,-1.348);
myNode103.isVisible = false;

/* définition du node n°104*/
const myNode104 = object.addBox();
myNode104.point1.set(-4.40345,-1.71345,-1.96845);
myNode104.point2.set(-3.4365500000000004,18.099449999999997,-1.47255);
myNode104.innerRotation.center.set(0,0,0);
myNode104.innerRotation.axis.set(0.0,0.0,0.0);
myNode104.innerRotation.angle.set(0.0);
myNode104.innerTranslation.vector.set(-3.9200000000000004,8.193,-1.7205);
myNode104.isVisible = false;

/* définition du node n°105*/
const myNode105 = object.addFuseOperation();
myNode105.leftArg.set(myNode103);
myNode105.rightArg.set(myNode104);
myNode105.isVisible = false;

/* définition du node n°106*/
const myNode106 = object.addCylinder();
myNode106.point1.set(-4.162,0.273,-1.969);
myNode106.point2.set(-4.162,0.273,-0.7270000000000001);
myNode106.radius.set(0.237);
myNode106.innerRotation.center.set(0,0,0);
myNode106.innerRotation.axis.set(0.0,0.0,0.0);
myNode106.innerRotation.angle.set(0.0);
myNode106.isVisible = false;

/* définition du node n°107*/
const myNode107 = object.addBox();
myNode107.point1.set(-3.708,0.036,-1.969);
myNode107.point2.set(-2.7830000000000004,3.348,-1.0990000000000002);
myNode107.innerRotation.center.set(0,0,0);
myNode107.innerRotation.axis.set(0.0,0.0,0.0);
myNode107.innerRotation.angle.set(0.0);
myNode107.innerTranslation.vector.set(-3.2455000000000003,1.692,-1.534);
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
const myNode110 = object.addCylinder();
myNode110.point1.set(3.604,-0.702,-18.0995);
myNode110.point2.set(3.604,-0.702,0.7264000000000017);
myNode110.radius.set(0.428);
myNode110.innerRotation.center.set(0,0,0);
myNode110.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode110.innerRotation.angle.set(3.141592653586273);
myNode110.isVisible = false;

/* définition du node n°111*/
const myNode111 = object.addBox();
myNode111.point1.set(-3.70745,-1.43945,-1.96845);
myNode111.point2.set(-2.78355,0.2724500000000001,-0.7275500000000001);
myNode111.innerRotation.center.set(0,0,0);
myNode111.innerRotation.axis.set(0.0,0.0,0.0);
myNode111.innerRotation.angle.set(0.0);
myNode111.innerTranslation.vector.set(-3.2455000000000003,-0.5834999999999999,-1.348);
myNode111.isVisible = false;

/* définition du node n°112*/
const myNode112 = object.addCylinder();
myNode112.point1.set(-3.451,0.286,-18.1);
myNode112.point2.set(-3.451,0.286,-1.0990000000000002);
myNode112.radius.set(0.257);
myNode112.innerRotation.center.set(0,0,0);
myNode112.innerRotation.axis.set(0.0,0.0,0.0);
myNode112.innerRotation.angle.set(0.0);
myNode112.isVisible = false;

/* définition du node n°113*/
const myNode113 = object.addCutOperation();
myNode113.leftArg.set(myNode111);
myNode113.rightArg.set(myNode112);
myNode113.isVisible = false;

/* définition du node n°114*/
const myNode114_1 = myNode102.clone();
myNode114_1.isVisible = false;
const myNode114_2 = object.addFuseOperation();
myNode114_2.leftArg.set(myNode114_1);
myNode114_2.rightArg.set(myNode109);
myNode114_2.isVisible = false;
const myNode114_3 = object.addFuseOperation();
myNode114_3.leftArg.set(myNode114_2);
myNode114_3.rightArg.set(myNode110);
myNode114_3.isVisible = false;
myNode114 = object.addFuseOperation();
myNode114.leftArg.set(myNode114_3);
myNode114.rightArg.set(myNode113);
myNode114.isVisible = false;
myNode114.isVisible = false;

/* définition du node n°115*/
const myNode115 = object.addCutOperation();
myNode115.leftArg.set(myNode101);
myNode115.rightArg.set(myNode114);
myNode115.isVisible = false;

/* définition du node n°116*/
const myNode116 = object.addBox();
myNode116.point1.set(-3.7069,-4.3899,-1.4709);
myNode116.point2.set(18.0989,-2.9391,-1.1001);
myNode116.innerRotation.center.set(0,0,0);
myNode116.innerRotation.axis.set(0.0,0.0,0.0);
myNode116.innerRotation.angle.set(0.0);
myNode116.innerTranslation.vector.set(7.196000000000001,-3.6645,-1.2855);
myNode116.isVisible = false;

/* définition du node n°117*/
const myNode117 = object.addCylinder();
myNode117.point1.set(-1.483,-0.114,-18.0989);
myNode117.point2.set(-1.483,-0.114,18.0989);
myNode117.radius.set(2.733);
myNode117.innerRotation.center.set(0,0,0);
myNode117.innerRotation.axis.set(1.18359229880969,1.2044359286746318,-1.2044359286746318);
myNode117.innerRotation.angle.set(2.074179968654179);
myNode117.isVisible = false;

/* définition du node n°118*/
const myNode118 = object.addCommonOperation();
myNode118.leftArg.set(myNode116);
myNode118.rightArg.set(myNode117);
myNode118.isVisible = false;

/* définition du node n°119*/
const myNode119 = object.addBox();
myNode119.point1.set(3.4661,2.9761,-1.4709);
myNode119.point2.set(4.1509,3.6449000000000003,1.5698999999999999);
myNode119.innerRotation.center.set(0,0,0);
myNode119.innerRotation.axis.set(0.0,0.0,0.0);
myNode119.innerRotation.angle.set(0.0);
myNode119.innerTranslation.vector.set(3.8085,3.3105,0.04949999999999988);
myNode119.isVisible = false;

/* définition du node n°120*/
const myNode120 = object.addBox();
myNode120.point1.set(3.7091,0.2741,-1.4709);
myNode120.point2.set(4.4029,3.3468999999999998,1.5698999999999999);
myNode120.innerRotation.center.set(0,0,0);
myNode120.innerRotation.axis.set(0.0,0.0,0.0);
myNode120.innerRotation.angle.set(0.0);
myNode120.innerTranslation.vector.set(4.056,1.8105,0.04949999999999988);
myNode120.isVisible = false;

/* définition du node n°121*/
const myNode121 = object.addBox();
myNode121.point1.set(-2.7819,0.0371,-1.4709);
myNode121.point2.set(3.4629,3.6449000000000003,1.5698999999999999);
myNode121.innerRotation.center.set(0,0,0);
myNode121.innerRotation.axis.set(0.0,0.0,0.0);
myNode121.innerRotation.angle.set(0.0);
myNode121.innerTranslation.vector.set(0.3405,1.841,0.04949999999999988);
myNode121.isVisible = false;

/* définition du node n°122*/
const myNode122 = object.addCylinder();
myNode122.point1.set(-1.561,-0.001,0.03655);
myNode122.point2.set(-1.561,-0.001,4.78745);
myNode122.radius.set(1.958);
myNode122.innerRotation.center.set(0,0,0);
myNode122.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode122.innerRotation.angle.set(2.094392392986396);
myNode122.isVisible = false;

/* définition du node n°123*/
const myNode123 = object.addCutOperation();
myNode123.leftArg.set(myNode121);
myNode123.rightArg.set(myNode122);
myNode123.isVisible = false;

/* définition du node n°124*/
const myNode124 = object.addCylinder();
myNode124.point1.set(4.164,3.407,-1.4709);
myNode124.point2.set(4.164,3.407,1.5698999999999999);
myNode124.radius.set(0.236);
myNode124.innerRotation.center.set(0,0,0);
myNode124.innerRotation.axis.set(0.0,0.0,0.0);
myNode124.innerRotation.angle.set(0.0);
myNode124.isVisible = false;

/* définition du node n°125*/
const myNode125_1 = myNode119.clone();
myNode125_1.isVisible = false;
const myNode125_2 = object.addFuseOperation();
myNode125_2.leftArg.set(myNode125_1);
myNode125_2.rightArg.set(myNode120);
myNode125_2.isVisible = false;
const myNode125_3 = object.addFuseOperation();
myNode125_3.leftArg.set(myNode125_2);
myNode125_3.rightArg.set(myNode123);
myNode125_3.isVisible = false;
myNode125 = object.addFuseOperation();
myNode125.leftArg.set(myNode125_3);
myNode125.rightArg.set(myNode124);
myNode125.isVisible = false;
myNode125.isVisible = false;

/* définition du node n°126*/
const myNode126 = object.addBox();
myNode126.point1.set(-2.78245,0.03655,-1.47145);
myNode126.point2.set(3.46345,2.97445,1.5704500000000001);
myNode126.innerRotation.center.set(0,0,0);
myNode126.innerRotation.axis.set(0.0,0.0,0.0);
myNode126.innerRotation.angle.set(0.0);
myNode126.innerTranslation.vector.set(0.3405,1.5055,0.0495000000000001);
myNode126.isVisible = false;

/* définition du node n°127*/
const myNode127 = object.addCutOperation();
myNode127.leftArg.set(myNode125);
myNode127.rightArg.set(myNode126);
myNode127.isVisible = false;

/* définition du node n°128*/
const myNode128_1 = myNode1.clone();
myNode128_1.isVisible = false;
const myNode128_2 = object.addFuseOperation();
myNode128_2.leftArg.set(myNode128_1);
myNode128_2.rightArg.set(myNode23);
myNode128_2.isVisible = false;
const myNode128_3 = object.addFuseOperation();
myNode128_3.leftArg.set(myNode128_2);
myNode128_3.rightArg.set(myNode40);
myNode128_3.isVisible = false;
const myNode128_4 = object.addFuseOperation();
myNode128_4.leftArg.set(myNode128_3);
myNode128_4.rightArg.set(myNode43);
myNode128_4.isVisible = false;
const myNode128_5 = object.addFuseOperation();
myNode128_5.leftArg.set(myNode128_4);
myNode128_5.rightArg.set(myNode44);
myNode128_5.isVisible = false;
const myNode128_6 = object.addFuseOperation();
myNode128_6.leftArg.set(myNode128_5);
myNode128_6.rightArg.set(myNode57);
myNode128_6.isVisible = false;
const myNode128_7 = object.addFuseOperation();
myNode128_7.leftArg.set(myNode128_6);
myNode128_7.rightArg.set(myNode78);
myNode128_7.isVisible = false;
const myNode128_8 = object.addFuseOperation();
myNode128_8.leftArg.set(myNode128_7);
myNode128_8.rightArg.set(myNode79);
myNode128_8.isVisible = false;
const myNode128_9 = object.addFuseOperation();
myNode128_9.leftArg.set(myNode128_8);
myNode128_9.rightArg.set(myNode86);
myNode128_9.isVisible = false;
const myNode128_10 = object.addFuseOperation();
myNode128_10.leftArg.set(myNode128_9);
myNode128_10.rightArg.set(myNode87);
myNode128_10.isVisible = false;
const myNode128_11 = object.addFuseOperation();
myNode128_11.leftArg.set(myNode128_10);
myNode128_11.rightArg.set(myNode94);
myNode128_11.isVisible = false;
const myNode128_12 = object.addFuseOperation();
myNode128_12.leftArg.set(myNode128_11);
myNode128_12.rightArg.set(myNode115);
myNode128_12.isVisible = false;
const myNode128_13 = object.addFuseOperation();
myNode128_13.leftArg.set(myNode128_12);
myNode128_13.rightArg.set(myNode118);
myNode128_13.isVisible = false;
myNode128 = object.addFuseOperation();
myNode128.leftArg.set(myNode128_13);
myNode128.rightArg.set(myNode127);
myNode128.isVisible = false;
myNode128.isVisible = false;

/* définition du node n°129*/
const myNode129 = object.addCommonOperation();
myNode129.leftArg.set(myNode0);
myNode129.rightArg.set(myNode128);
myNode129.isVisible = true;


/*END Geometry Object Definition*/