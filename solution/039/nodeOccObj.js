/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.9989,-5.7459,-2.3619);
myNode0.point2.set(11.9978,11.4908,4.7228);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(-3.47,-4.552,-1.9679);
myNode1.point2.set(0,0,0.8678);
myNode1.radius.set(0.233);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-4.1549,-4.7879,-1.4709);
myNode2.point2.set(1.3718,0.3958,3.0408);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(4.164,3.407,-1.4709);
myNode3.point2.set(0,0,3.0408);
myNode3.radius.set(0.236);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);

/* définition du node n°4*/
const myNode4 = object.addBox();
myNode4.point1.set(3.7091,0.2741,-1.4709);
myNode4.point2.set(0.6938,3.0728,3.0408);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);

/* définition du node n°5*/
const myNode5 = object.addBox();
myNode5.point1.set(-2.7819,0.0371,-1.4709);
myNode5.point2.set(6.2448,3.6078,3.0408);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);

/* définition du node n°6*/
const myNode6 = object.addCylinder();
myNode6.point1.set(-1.561,-0.001,0.03655);
myNode6.point2.set(0,0,4.7509);
myNode6.radius.set(1.958);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode6.innerRotation.angle.set(2.094392392986396);

/* définition du node n°7*/
const myNode7 = object.addCutOperation();
myNode7.leftArg.set(myNode5);
myNode7.rightArg.set(myNode6);

/* définition du node n°8*/
const myNode8 = object.addBox();
myNode8.point1.set(3.4661,2.9761,-1.4709);
myNode8.point2.set(0.6848,0.6688,3.0408);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);

/* définition du node n°9*/
const myNode9_1 = object.addFuseOperation();
myNode9_1.leftArg.set(myNode3);
myNode9_1.rightArg.set(myNode3);
const myNode9_2 = object.addFuseOperation();
myNode9_2.leftArg.set(myNode9_1);
myNode9_2.rightArg.set(myNode4);
const myNode9_3 = object.addFuseOperation();
myNode9_3.leftArg.set(myNode9_2);
myNode9_3.rightArg.set(myNode7);
myNode9 = object.addFuseOperation();
myNode9.leftArg.set(myNode9_3);
myNode9.rightArg.set(myNode8);

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(-2.78245,0.03655,-1.47145);
myNode10.point2.set(6.2459,2.9379,3.0419);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);

/* définition du node n°11*/
const myNode11 = object.addCutOperation();
myNode11.leftArg.set(myNode9);
myNode11.rightArg.set(myNode10);

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(3.465,3.397,-18.0989);
myNode12.point2.set(0,0,16.6258);
myNode12.radius.set(0.244);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);

/* définition du node n°13*/
const myNode13 = object.addBox();
myNode13.point1.set(-2.7819,-18.0989,-1.9679);
myNode13.point2.set(6.9318,18.3708,1.7368);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);

/* définition du node n°14*/
const myNode14 = object.addFuseOperation();
myNode14.leftArg.set(myNode12);
myNode14.rightArg.set(myNode13);

/* définition du node n°15*/
const myNode15 = object.addBox();
myNode15.point1.set(-18.0989,0.2741,-1.9679);
myNode15.point2.set(21.8058,3.3708,3.5378);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);

/* définition du node n°16*/
const myNode16 = object.addBox();
myNode16.point1.set(3.4661,0.0371,-1.4709);
myNode16.point2.set(14.6328,0.2348,3.0408);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);

/* définition du node n°17*/
const myNode17 = object.addFuseOperation();
myNode17.leftArg.set(myNode15);
myNode17.rightArg.set(myNode16);

/* définition du node n°18*/
const myNode18 = object.addCommonOperation();
myNode18.leftArg.set(myNode14);
myNode18.rightArg.set(myNode17);

/* définition du node n°19*/
const myNode19 = object.addCylinder();
myNode19.point1.set(4.156,3.396,-1.5699);
myNode19.point2.set(0,0,3.0408);
myNode19.radius.set(0.248);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode19.innerRotation.angle.set(3.141592653586273);

/* définition du node n°20*/
const myNode20 = object.addCylinder();
myNode20.point1.set(3.606,-0.701,-1.5699);
myNode20.point2.set(0,0,2.2958);
myNode20.radius.set(0.747);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode20.innerRotation.angle.set(3.141592653586273);

/* définition du node n°21*/
const myNode21 = object.addCylinder();
myNode21.point1.set(-1.125,-0.702,-4.9989);
myNode21.point2.set(0,0,1.2898);
myNode21.radius.set(0.448);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode21.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°22*/
const myNode22 = object.addBox();
myNode22.point1.set(-4.4029,-2.9369,-1.4709);
myNode22.point2.set(0.6938,6.2838,3.0408);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(0.0,0.0,0.0);
myNode22.innerRotation.angle.set(0.0);

/* définition du node n°23*/
const myNode23 = object.addBox();
myNode23.point1.set(-4.1549,2.9761,-1.9679);
myNode23.point2.set(1.3718,0.6688,3.5378);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);

/* définition du node n°24*/
const myNode24 = object.addBox();
myNode24.point1.set(-3.7069,-2.9369,-1.9679);
myNode24.point2.set(0.9228,5.9108,0.8678);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);

/* définition du node n°25*/
const myNode25_1 = object.addFuseOperation();
myNode25_1.leftArg.set(myNode19);
myNode25_1.rightArg.set(myNode19);
const myNode25_2 = object.addFuseOperation();
myNode25_2.leftArg.set(myNode25_1);
myNode25_2.rightArg.set(myNode20);
const myNode25_3 = object.addFuseOperation();
myNode25_3.leftArg.set(myNode25_2);
myNode25_3.rightArg.set(myNode21);
const myNode25_4 = object.addFuseOperation();
myNode25_4.leftArg.set(myNode25_3);
myNode25_4.rightArg.set(myNode22);
const myNode25_5 = object.addFuseOperation();
myNode25_5.leftArg.set(myNode25_4);
myNode25_5.rightArg.set(myNode23);
myNode25 = object.addFuseOperation();
myNode25.leftArg.set(myNode25_5);
myNode25.rightArg.set(myNode24);

/* définition du node n°26*/
const myNode26 = object.addBox();
myNode26.point1.set(-4.40345,-1.71345,-1.96845);
myNode26.point2.set(0.9669,19.8129,0.4959);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);

/* définition du node n°27*/
const myNode27 = object.addBox();
myNode27.point1.set(-4.40345,-1.71345,-1.96845);
myNode27.point2.set(0.2459,1.9859,1.2409);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);

/* définition du node n°28*/
const myNode28 = object.addFuseOperation();
myNode28.leftArg.set(myNode26);
myNode28.rightArg.set(myNode27);

/* définition du node n°29*/
const myNode29 = object.addBox();
myNode29.point1.set(-3.708,0.036,-1.969);
myNode29.point2.set(0.925,3.312,0.87);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);

/* définition du node n°30*/
const myNode30 = object.addCylinder();
myNode30.point1.set(-4.162,0.273,-1.969);
myNode30.point2.set(0,0,1.242);
myNode30.radius.set(0.237);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);

/* définition du node n°31*/
const myNode31 = object.addFuseOperation();
myNode31.leftArg.set(myNode29);
myNode31.rightArg.set(myNode30);

/* définition du node n°32*/
const myNode32 = object.addCutOperation();
myNode32.leftArg.set(myNode28);
myNode32.rightArg.set(myNode31);

/* définition du node n°33*/
const myNode33 = object.addCylinder();
myNode33.point1.set(3.604,-0.702,-18.0995);
myNode33.point2.set(0,0,18.8259);
myNode33.radius.set(0.428);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode33.innerRotation.angle.set(3.141592653586273);

/* définition du node n°34*/
const myNode34 = object.addBox();
myNode34.point1.set(-18.0995,-1.43945,-1.96845);
myNode34.point2.set(14.3909,1.4749,1.2409);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(0.0,0.0,0.0);
myNode34.innerRotation.angle.set(0.0);

/* définition du node n°35*/
const myNode35 = object.addBox();
myNode35.point1.set(-3.70745,-1.43945,-1.96845);
myNode35.point2.set(0.9239,1.7119,1.2409);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,0.0);
myNode35.innerRotation.angle.set(0.0);

/* définition du node n°36*/
const myNode36 = object.addCylinder();
myNode36.point1.set(-3.451,0.286,-18.1);
myNode36.point2.set(0,0,17.001);
myNode36.radius.set(0.257);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(0.0,0.0,0.0);
myNode36.innerRotation.angle.set(0.0);

/* définition du node n°37*/
const myNode37 = object.addCutOperation();
myNode37.leftArg.set(myNode35);
myNode37.rightArg.set(myNode36);

/* définition du node n°38*/
const myNode38_1 = object.addFuseOperation();
myNode38_1.leftArg.set(myNode32);
myNode38_1.rightArg.set(myNode32);
const myNode38_2 = object.addFuseOperation();
myNode38_2.leftArg.set(myNode38_1);
myNode38_2.rightArg.set(myNode33);
const myNode38_3 = object.addFuseOperation();
myNode38_3.leftArg.set(myNode38_2);
myNode38_3.rightArg.set(myNode34);
myNode38 = object.addFuseOperation();
myNode38.leftArg.set(myNode38_3);
myNode38.rightArg.set(myNode37);

/* définition du node n°39*/
const myNode39 = object.addCutOperation();
myNode39.leftArg.set(myNode25);
myNode39.rightArg.set(myNode38);

/* définition du node n°40*/
const myNode40 = object.addCylinder();
myNode40.point1.set(-1.483,-0.114,-18.0989);
myNode40.point2.set(0,0,36.1978);
myNode40.radius.set(2.733);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(1.18359229880969,1.2044359286746318,-1.2044359286746318);
myNode40.innerRotation.angle.set(2.074179968654179);

/* définition du node n°41*/
const myNode41 = object.addBox();
myNode41.point1.set(-3.7069,-4.3899,-1.4709);
myNode41.point2.set(21.8058,1.4508,0.3708);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,0.0,0.0);
myNode41.innerRotation.angle.set(0.0);

/* définition du node n°42*/
const myNode42 = object.addCommonOperation();
myNode42.leftArg.set(myNode40);
myNode42.rightArg.set(myNode41);

/* définition du node n°43*/
const myNode43 = object.addBox();
myNode43.point1.set(-4.4029,-4.5529,-1.4709);
myNode43.point2.set(0.6938,1.6138,3.0408);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(0.0,0.0,0.0);
myNode43.innerRotation.angle.set(0.0);

/* définition du node n°44*/
const myNode44 = object.addSphere();
myNode44.center.set(0.004,3.07,1.571);
myNode44.radius.set(2.610800643480846);

/* définition du node n°45*/
const myNode45 = object.addCylinder();
myNode45.point1.set(-1.568,0.001,3.3491);
myNode45.point2.set(0,0,1.4378);
myNode45.radius.set(2.107);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode45.innerRotation.angle.set(2.094392392986396);

/* définition du node n°46*/
const myNode46 = object.addCommonOperation();
myNode46.leftArg.set(myNode44);
myNode46.rightArg.set(myNode45);

/* définition du node n°47*/
const myNode47 = object.addBox();
myNode47.point1.set(-18.0989,0.0371,-18.0989);
myNode47.point2.set(22.5018,3.6078,17.8678);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(0.0,0.0,0.0);
myNode47.innerRotation.angle.set(0.0);

/* définition du node n°48*/
const myNode48 = object.addSphere();
myNode48.center.set(-0.004,1.418,1.584);
myNode48.radius.set(3.4288044563666795);

/* définition du node n°49*/
const myNode49_1 = object.addFuseOperation();
myNode49_1.leftArg.set(myNode46);
myNode49_1.rightArg.set(myNode46);
const myNode49_2 = object.addFuseOperation();
myNode49_2.leftArg.set(myNode49_1);
myNode49_2.rightArg.set(myNode47);
myNode49 = object.addFuseOperation();
myNode49.leftArg.set(myNode49_2);
myNode49.rightArg.set(myNode48);

/* définition du node n°50*/
const myNode50 = object.addCylinder();
myNode50.point1.set(3.45,0.294,-1.9679);
myNode50.point2.set(0,0,0.4948);
myNode50.radius.set(0.264);
myNode50.innerRotation.center.set(0,0,0);
myNode50.innerRotation.axis.set(0.0,0.0,0.0);
myNode50.innerRotation.angle.set(0.0);

/* définition du node n°51*/
const myNode51 = object.addBox();
myNode51.point1.set(-2.7819,3.3491,-1.4709);
myNode51.point2.set(6.9318,1.4378,3.0408);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(0.0,0.0,0.0);
myNode51.innerRotation.angle.set(0.0);

/* définition du node n°52*/
const myNode52 = object.addCylinder();
myNode52.point1.set(-1.56,-0.002,-18.0995);
myNode52.point2.set(0,0,22.8869);
myNode52.radius.set(1.483);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode52.innerRotation.angle.set(2.094392392986396);

/* définition du node n°53*/
const myNode53 = object.addCutOperation();
myNode53.leftArg.set(myNode51);
myNode53.rightArg.set(myNode52);

/* définition du node n°54*/
const myNode54 = object.addCylinder();
myNode54.point1.set(4.151,0.293,-1.4709);
myNode54.point2.set(0,0,3.0408);
myNode54.radius.set(0.257);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(0.0,0.0,0.0);
myNode54.innerRotation.angle.set(0.0);

/* définition du node n°55*/
const myNode55_1 = object.addFuseOperation();
myNode55_1.leftArg.set(myNode50);
myNode55_1.rightArg.set(myNode50);
const myNode55_2 = object.addFuseOperation();
myNode55_2.leftArg.set(myNode55_1);
myNode55_2.rightArg.set(myNode53);
myNode55 = object.addFuseOperation();
myNode55.leftArg.set(myNode55_2);
myNode55.rightArg.set(myNode54);

/* définition du node n°56*/
const myNode56 = object.addCommonOperation();
myNode56.leftArg.set(myNode49);
myNode56.rightArg.set(myNode55);

/* définition du node n°57*/
const myNode57 = object.addCylinder();
myNode57.point1.set(4.139,-4.525,-1.5699);
myNode57.point2.set(0,0,3.0408);
myNode57.radius.set(0.269);
myNode57.innerRotation.center.set(0,0,0);
myNode57.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode57.innerRotation.angle.set(3.141592653586273);

/* définition du node n°58*/
const myNode58 = object.addBox();
myNode58.point1.set(-2.7819,2.9761,-1.9679);
myNode58.point2.set(6.2448,0.6688,0.4948);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(0.0,0.0,0.0);
myNode58.innerRotation.angle.set(0.0);

/* définition du node n°59*/
const myNode59 = object.addBox();
myNode59.point1.set(3.4661,-18.0989,-1.9679);
myNode59.point2.set(0.6848,21.4458,20.0668);
myNode59.innerRotation.center.set(0,0,0);
myNode59.innerRotation.axis.set(0.0,0.0,0.0);
myNode59.innerRotation.angle.set(0.0);

/* définition du node n°60*/
const myNode60 = object.addFuseOperation();
myNode60.leftArg.set(myNode58);
myNode60.rightArg.set(myNode59);

/* définition du node n°61*/
const myNode61 = object.addBox();
myNode61.point1.set(3.4661,0.2741,-18.0989);
myNode61.point2.set(0.2408,3.3708,16.9988);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(0.0,0.0,0.0);
myNode61.innerRotation.angle.set(0.0);

/* définition du node n°62*/
const myNode62 = object.addBox();
myNode62.point1.set(-2.7819,2.9761,-18.0989);
myNode62.point2.set(6.4888,0.6688,17.8678);
myNode62.innerRotation.center.set(0,0,0);
myNode62.innerRotation.axis.set(0.0,0.0,0.0);
myNode62.innerRotation.angle.set(0.0);

/* définition du node n°63*/
const myNode63 = object.addFuseOperation();
myNode63.leftArg.set(myNode61);
myNode63.rightArg.set(myNode62);

/* définition du node n°64*/
const myNode64 = object.addCommonOperation();
myNode64.leftArg.set(myNode60);
myNode64.rightArg.set(myNode63);

/* définition du node n°65*/
const myNode65 = object.addBox();
myNode65.point1.set(2.7841,-1.7129,-1.9679);
myNode65.point2.set(1.6188,5.0598,0.8678);
myNode65.innerRotation.center.set(0,0,0);
myNode65.innerRotation.axis.set(0.0,0.0,0.0);
myNode65.innerRotation.angle.set(0.0);

/* définition du node n°66*/
const myNode66 = object.addBox();
myNode66.point1.set(3.7091,-4.5529,-1.4709);
myNode66.point2.set(0.6938,7.8998,3.0408);
myNode66.innerRotation.center.set(0,0,0);
myNode66.innerRotation.axis.set(0.0,0.0,0.0);
myNode66.innerRotation.angle.set(0.0);

/* définition du node n°67*/
const myNode67 = object.addBox();
myNode67.point1.set(-2.7819,-4.7879,-0.2289);
myNode67.point2.set(6.4888,8.1348,1.7988);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(0.0,0.0,0.0);
myNode67.innerRotation.angle.set(0.0);

/* définition du node n°68*/
const myNode68 = object.addBox();
myNode68.point1.set(-2.7819,-4.7879,-1.9679);
myNode68.point2.set(6.2448,1.8488,3.5378);
myNode68.innerRotation.center.set(0,0,0);
myNode68.innerRotation.axis.set(0.0,0.0,0.0);
myNode68.innerRotation.angle.set(0.0);

/* définition du node n°69*/
const myNode69 = object.addBox();
myNode69.point1.set(-18.0994,-4.39045,-1.09845);
myNode69.point2.set(21.8069,1.4519,0.8689);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(0.0,0.0,0.0);
myNode69.innerRotation.angle.set(0.0);

/* définition du node n°70*/
const myNode70 = object.addCutOperation();
myNode70.leftArg.set(myNode68);
myNode70.rightArg.set(myNode69);

/* définition du node n°71*/
const myNode71 = object.addCylinder();
myNode71.point1.set(-1.125,-0.702,3.4661);
myNode71.point2.set(0,0,1.5328);
myNode71.radius.set(0.448);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode71.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°72*/
const myNode72 = object.addCylinder();
myNode72.point1.set(-3.603,-0.704,0.2311);
myNode72.point2.set(0,0,1.7368);
myNode72.radius.set(0.994);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode72.innerRotation.angle.set(3.141592653586273);

/* définition du node n°73*/
const myNode73_1 = object.addFuseOperation();
myNode73_1.leftArg.set(myNode65);
myNode73_1.rightArg.set(myNode65);
const myNode73_2 = object.addFuseOperation();
myNode73_2.leftArg.set(myNode73_1);
myNode73_2.rightArg.set(myNode66);
const myNode73_3 = object.addFuseOperation();
myNode73_3.leftArg.set(myNode73_2);
myNode73_3.rightArg.set(myNode67);
const myNode73_4 = object.addFuseOperation();
myNode73_4.leftArg.set(myNode73_3);
myNode73_4.rightArg.set(myNode70);
const myNode73_5 = object.addFuseOperation();
myNode73_5.leftArg.set(myNode73_4);
myNode73_5.rightArg.set(myNode71);
myNode73 = object.addFuseOperation();
myNode73.leftArg.set(myNode73_5);
myNode73.rightArg.set(myNode72);

/* définition du node n°74*/
const myNode74 = object.addBox();
myNode74.point1.set(3.46555,-1.71345,-18.0995);
myNode74.point2.set(14.6339,5.0609,17.3719);
myNode74.innerRotation.center.set(0,0,0);
myNode74.innerRotation.axis.set(0.0,0.0,0.0);
myNode74.innerRotation.angle.set(0.0);

/* définition du node n°75*/
const myNode75 = object.addCylinder();
myNode75.point1.set(3.451,-1.694,-1.969);
myNode75.point2.set(0,0,20.069);
myNode75.radius.set(0.26);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(0.0,0.0,0.0);
myNode75.innerRotation.angle.set(0.0);

/* définition du node n°76*/
const myNode76 = object.addCutOperation();
myNode76.leftArg.set(myNode74);
myNode76.rightArg.set(myNode75);

/* définition du node n°77*/
const myNode77 = object.addCylinder();
myNode77.point1.set(3.605,-0.703,-18.0995);
myNode77.point2.set(0,0,17.3719);
myNode77.radius.set(0.747);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(0.0,0.0,0.0);
myNode77.innerRotation.angle.set(0.0);

/* définition du node n°78*/
const myNode78 = object.addBox();
myNode78.point1.set(4.40455,-4.39045,-1.96845);
myNode78.point2.set(13.6949,7.7379,1.7379);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(0.0,0.0,0.0);
myNode78.innerRotation.angle.set(0.0);

/* définition du node n°79*/
const myNode79 = object.addCylinder();
myNode79.point1.set(-1.483,-0.114,-18.0995);
myNode79.point2.set(0,0,36.1989);
myNode79.radius.set(2.733);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(1.18359229880969,1.2044359286746318,-1.2044359286746318);
myNode79.innerRotation.angle.set(2.074179968654179);

/* définition du node n°80*/
const myNode80 = object.addCylinder();
myNode80.point1.set(-3.603,-0.701,-1.57045);
myNode80.point2.set(0,0,19.6699);
myNode80.radius.set(0.428);
myNode80.innerRotation.center.set(0,0,0);
myNode80.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode80.innerRotation.angle.set(3.141592653586273);

/* définition du node n°81*/
const myNode81 = object.addBox();
myNode81.point1.set(-18.0994,-4.39045,-0.22945);
myNode81.point2.set(21.8069,22.4899,18.3289);
myNode81.innerRotation.center.set(0,0,0);
myNode81.innerRotation.axis.set(0.0,0.0,0.0);
myNode81.innerRotation.angle.set(0.0);

/* définition du node n°82*/
const myNode82 = object.addCylinder();
myNode82.point1.set(3.605,-0.703,-0.727);
myNode82.point2.set(0,0,2.298);
myNode82.radius.set(0.747);
myNode82.innerRotation.center.set(0,0,0);
myNode82.innerRotation.axis.set(0.0,0.0,0.0);
myNode82.innerRotation.angle.set(0.0);

/* définition du node n°83*/
const myNode83 = object.addCutOperation();
myNode83.leftArg.set(myNode81);
myNode83.rightArg.set(myNode82);

/* définition du node n°84*/
const myNode84_1 = object.addFuseOperation();
myNode84_1.leftArg.set(myNode76);
myNode84_1.rightArg.set(myNode76);
const myNode84_2 = object.addFuseOperation();
myNode84_2.leftArg.set(myNode84_1);
myNode84_2.rightArg.set(myNode77);
const myNode84_3 = object.addFuseOperation();
myNode84_3.leftArg.set(myNode84_2);
myNode84_3.rightArg.set(myNode78);
const myNode84_4 = object.addFuseOperation();
myNode84_4.leftArg.set(myNode84_3);
myNode84_4.rightArg.set(myNode79);
const myNode84_5 = object.addFuseOperation();
myNode84_5.leftArg.set(myNode84_4);
myNode84_5.rightArg.set(myNode80);
myNode84 = object.addFuseOperation();
myNode84.leftArg.set(myNode84_5);
myNode84.rightArg.set(myNode83);

/* définition du node n°85*/
const myNode85 = object.addCutOperation();
myNode85.leftArg.set(myNode73);
myNode85.rightArg.set(myNode84);

/* définition du node n°86*/
const myNode86 = object.addBox();
myNode86.point1.set(2.7841,-4.7879,-1.9679);
myNode86.point2.set(2.2148,8.1348,20.0668);
myNode86.innerRotation.center.set(0,0,0);
myNode86.innerRotation.axis.set(0.0,0.0,0.0);
myNode86.innerRotation.angle.set(0.0);

/* définition du node n°87*/
const myNode87 = object.addBox();
myNode87.point1.set(2.78355,-4.39045,-1.09845);
myNode87.point2.set(0.9239,2.6769,2.6699);
myNode87.innerRotation.center.set(0,0,0);
myNode87.innerRotation.axis.set(0.0,0.0,0.0);
myNode87.innerRotation.angle.set(0.0);

/* définition du node n°88*/
const myNode88 = object.addCutOperation();
myNode88.leftArg.set(myNode86);
myNode88.rightArg.set(myNode87);

/* définition du node n°89*/
const myNode89 = object.addBox();
myNode89.point1.set(-2.78245,-4.78845,-1.96845);
myNode89.point2.set(7.7819,22.8879,20.0679);
myNode89.innerRotation.center.set(0,0,0);
myNode89.innerRotation.axis.set(0.0,0.0,0.0);
myNode89.innerRotation.angle.set(0.0);

/* définition du node n°90*/
const myNode90 = object.addBox();
myNode90.point1.set(-18.1,-4.391,-1.969);
myNode90.point2.set(21.808,2.678,1.739);
myNode90.innerRotation.center.set(0,0,0);
myNode90.innerRotation.axis.set(0.0,0.0,0.0);
myNode90.innerRotation.angle.set(0.0);

/* définition du node n°91*/
const myNode91 = object.addCutOperation();
myNode91.leftArg.set(myNode89);
myNode91.rightArg.set(myNode90);

/* définition du node n°92*/
const myNode92 = object.addCylinder();
myNode92.point1.set(4.171,-4.554,-1.472);
myNode92.point2.set(0,0,3.043);
myNode92.radius.set(0.228);
myNode92.innerRotation.center.set(0,0,0);
myNode92.innerRotation.axis.set(0.0,0.0,0.0);
myNode92.innerRotation.angle.set(0.0);

/* définition du node n°93*/
const myNode93 = object.addCylinder();
myNode93.point1.set(3.452,-4.528,-18.1);
myNode93.point2.set(0,0,19.671);
myNode93.radius.set(0.261);
myNode93.innerRotation.center.set(0,0,0);
myNode93.innerRotation.axis.set(0.0,0.0,0.0);
myNode93.innerRotation.angle.set(0.0);

/* définition du node n°94*/
const myNode94 = object.addFuseOperation();
myNode94.leftArg.set(myNode92);
myNode94.rightArg.set(myNode93);

/* définition du node n°95*/
const myNode95 = object.addCutOperation();
myNode95.leftArg.set(myNode91);
myNode95.rightArg.set(myNode94);

/* définition du node n°96*/
const myNode96 = object.addBox();
myNode96.point1.set(3.708,-4.789,-0.23);
myNode96.point2.set(0.443,3.349,1.801);
myNode96.innerRotation.center.set(0,0,0);
myNode96.innerRotation.axis.set(0.0,0.0,0.0);
myNode96.innerRotation.angle.set(0.0);

/* définition du node n°97*/
const myNode97 = object.addCylinder();
myNode97.point1.set(4.148,-1.694,-1.472);
myNode97.point2.set(0,0,3.043);
myNode97.radius.set(0.256);
myNode97.innerRotation.center.set(0,0,0);
myNode97.innerRotation.axis.set(0.0,0.0,0.0);
myNode97.innerRotation.angle.set(0.0);

/* définition du node n°98*/
const myNode98 = object.addCylinder();
myNode98.point1.set(-1.515,-0.702,4.727);
myNode98.point2.set(0,0,13.373);
myNode98.radius.set(0.453);
myNode98.innerRotation.center.set(0,0,0);
myNode98.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode98.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°99*/
const myNode99 = object.addBox();
myNode99.point1.set(3.465,-4.789,-1.472);
myNode99.point2.set(0.687,3.349,1.242);
myNode99.innerRotation.center.set(0,0,0);
myNode99.innerRotation.axis.set(0.0,0.0,0.0);
myNode99.innerRotation.angle.set(0.0);

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

/* définition du node n°101*/
const myNode101 = object.addCutOperation();
myNode101.leftArg.set(myNode95);
myNode101.rightArg.set(myNode100);

/* définition du node n°102*/
const myNode102 = object.addCutOperation();
myNode102.leftArg.set(myNode88);
myNode102.rightArg.set(myNode101);

/* définition du node n°103*/
const myNode103 = object.addBox();
myNode103.point1.set(-4.1549,3.3491,-1.4709);
myNode103.point2.set(0.7188,0.2958,3.0408);
myNode103.innerRotation.center.set(0,0,0);
myNode103.innerRotation.axis.set(0.0,0.0,0.0);
myNode103.innerRotation.angle.set(0.0);

/* définition du node n°104*/
const myNode104 = object.addBox();
myNode104.point1.set(-3.7069,-2.9369,-1.9679);
myNode104.point2.set(21.8058,3.2088,20.0668);
myNode104.innerRotation.center.set(0,0,0);
myNode104.innerRotation.axis.set(0.0,0.0,0.0);
myNode104.innerRotation.angle.set(0.0);

/* définition du node n°105*/
const myNode105 = object.addBox();
myNode105.point1.set(-18.0989,-2.9369,-0.2289);
myNode105.point2.set(13.9408,5.9108,18.3278);
myNode105.innerRotation.center.set(0,0,0);
myNode105.innerRotation.axis.set(0.0,0.0,0.0);
myNode105.innerRotation.angle.set(0.0);

/* définition du node n°106*/
const myNode106 = object.addFuseOperation();
myNode106.leftArg.set(myNode104);
myNode106.rightArg.set(myNode105);

/* définition du node n°107*/
const myNode107 = object.addCylinder();
myNode107.point1.set(3.602,-0.701,0.2311);
myNode107.point2.set(0,0,1.7368);
myNode107.radius.set(0.992);
myNode107.innerRotation.center.set(0,0,0);
myNode107.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode107.innerRotation.angle.set(3.141592653586273);

/* définition du node n°108*/
const myNode108 = object.addCylinder();
myNode108.point1.set(-1.515,-0.702,-4.9989);
myNode108.point2.set(0,0,0.2708);
myNode108.radius.set(0.453);
myNode108.innerRotation.center.set(0,0,0);
myNode108.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode108.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°109*/
const myNode109 = object.addFuseOperation();
myNode109.leftArg.set(myNode107);
myNode109.rightArg.set(myNode108);

/* définition du node n°110*/
const myNode110 = object.addCommonOperation();
myNode110.leftArg.set(myNode106);
myNode110.rightArg.set(myNode109);

/* définition du node n°111*/
const myNode111 = object.addCylinder();
myNode111.point1.set(-3.458,3.397,-1.9679);
myNode111.point2.set(0,0,0.8678);
myNode111.radius.set(0.249);
myNode111.innerRotation.center.set(0,0,0);
myNode111.innerRotation.axis.set(0.0,0.0,0.0);
myNode111.innerRotation.angle.set(0.0);

/* définition du node n°112*/
const myNode112 = object.addBox();
myNode112.point1.set(-4.4029,-1.7129,-1.9679);
myNode112.point2.set(0.2448,0.2718,1.2398);
myNode112.innerRotation.center.set(0,0,0);
myNode112.innerRotation.axis.set(0.0,0.0,0.0);
myNode112.innerRotation.angle.set(0.0);

/* définition du node n°113*/
const myNode113 = object.addBox();
myNode113.point1.set(-3.4349,-1.4389,-1.9679);
myNode113.point2.set(0.6508,5.0838,0.8678);
myNode113.innerRotation.center.set(0,0,0);
myNode113.innerRotation.axis.set(0.0,0.0,0.0);
myNode113.innerRotation.angle.set(0.0);

/* définition du node n°114*/
const myNode114_1 = object.addFuseOperation();
myNode114_1.leftArg.set(myNode103);
myNode114_1.rightArg.set(myNode103);
const myNode114_2 = object.addFuseOperation();
myNode114_2.leftArg.set(myNode114_1);
myNode114_2.rightArg.set(myNode110);
const myNode114_3 = object.addFuseOperation();
myNode114_3.leftArg.set(myNode114_2);
myNode114_3.rightArg.set(myNode111);
const myNode114_4 = object.addFuseOperation();
myNode114_4.leftArg.set(myNode114_3);
myNode114_4.rightArg.set(myNode112);
myNode114 = object.addFuseOperation();
myNode114.leftArg.set(myNode114_4);
myNode114.rightArg.set(myNode113);

/* définition du node n°115*/
const myNode115 = object.addCylinder();
myNode115.point1.set(3.606,-0.701,0.23055);
myNode115.point2.set(0,0,1.7379);
myNode115.radius.set(0.747);
myNode115.innerRotation.center.set(0,0,0);
myNode115.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode115.innerRotation.angle.set(3.141592653586273);

/* définition du node n°116*/
const myNode116 = object.addBox();
myNode116.point1.set(-4.40345,-1.71345,-1.96845);
myNode116.point2.set(0.9669,1.9859,1.2409);
myNode116.innerRotation.center.set(0,0,0);
myNode116.innerRotation.axis.set(0.0,0.0,0.0);
myNode116.innerRotation.angle.set(0.0);

/* définition du node n°117*/
const myNode117 = object.addCylinder();
myNode117.point1.set(-3.436,-1.714,-1.969);
myNode117.point2.set(0,0,0.497);
myNode117.radius.set(0.285);
myNode117.innerRotation.center.set(0,0,0);
myNode117.innerRotation.axis.set(0.0,0.0,0.0);
myNode117.innerRotation.angle.set(0.0);

/* définition du node n°118*/
const myNode118 = object.addCutOperation();
myNode118.leftArg.set(myNode116);
myNode118.rightArg.set(myNode117);

/* définition du node n°119*/
const myNode119 = object.addBox();
myNode119.point1.set(-4.156,-1.714,-1.472);
myNode119.point2.set(0.721,1.987,3.043);
myNode119.innerRotation.center.set(0,0,0);
myNode119.innerRotation.axis.set(0.0,0.0,0.0);
myNode119.innerRotation.angle.set(0.0);

/* définition du node n°120*/
const myNode120 = object.addCylinder();
myNode120.point1.set(-4.157,-1.687,-1.472);
myNode120.point2.set(0,0,19.572);
myNode120.radius.set(0.246);
myNode120.innerRotation.center.set(0,0,0);
myNode120.innerRotation.axis.set(0.0,0.0,0.0);
myNode120.innerRotation.angle.set(0.0);

/* définition du node n°121*/
const myNode121 = object.addFuseOperation();
myNode121.leftArg.set(myNode119);
myNode121.rightArg.set(myNode120);

/* définition du node n°122*/
const myNode122 = object.addCutOperation();
myNode122.leftArg.set(myNode118);
myNode122.rightArg.set(myNode121);

/* définition du node n°123*/
const myNode123 = object.addFuseOperation();
myNode123.leftArg.set(myNode115);
myNode123.rightArg.set(myNode122);

/* définition du node n°124*/
const myNode124 = object.addCutOperation();
myNode124.leftArg.set(myNode114);
myNode124.rightArg.set(myNode123);

/* définition du node n°125*/
const myNode125 = object.addBox();
myNode125.point1.set(-3.7069,-4.7879,-1.9679);
myNode125.point2.set(0.9228,1.8488,0.8678);
myNode125.innerRotation.center.set(0,0,0);
myNode125.innerRotation.axis.set(0.0,0.0,0.0);
myNode125.innerRotation.angle.set(0.0);

/* définition du node n°126*/
const myNode126 = object.addBox();
myNode126.point1.set(-3.70745,-18.0995,-1.96845);
myNode126.point2.set(0.2709,13.5449,0.4959);
myNode126.innerRotation.center.set(0,0,0);
myNode126.innerRotation.axis.set(0.0,0.0,0.0);
myNode126.innerRotation.angle.set(0.0);

/* définition du node n°127*/
const myNode127 = object.addCutOperation();
myNode127.leftArg.set(myNode125);
myNode127.rightArg.set(myNode126);

/* définition du node n°128*/
const myNode128_1 = object.addFuseOperation();
myNode128_1.leftArg.set(myNode1);
myNode128_1.rightArg.set(myNode1);
const myNode128_2 = object.addFuseOperation();
myNode128_2.leftArg.set(myNode128_1);
myNode128_2.rightArg.set(myNode2);
const myNode128_3 = object.addFuseOperation();
myNode128_3.leftArg.set(myNode128_2);
myNode128_3.rightArg.set(myNode11);
const myNode128_4 = object.addFuseOperation();
myNode128_4.leftArg.set(myNode128_3);
myNode128_4.rightArg.set(myNode18);
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
myNode128_8.rightArg.set(myNode56);
const myNode128_9 = object.addFuseOperation();
myNode128_9.leftArg.set(myNode128_8);
myNode128_9.rightArg.set(myNode57);
const myNode128_10 = object.addFuseOperation();
myNode128_10.leftArg.set(myNode128_9);
myNode128_10.rightArg.set(myNode64);
const myNode128_11 = object.addFuseOperation();
myNode128_11.leftArg.set(myNode128_10);
myNode128_11.rightArg.set(myNode85);
const myNode128_12 = object.addFuseOperation();
myNode128_12.leftArg.set(myNode128_11);
myNode128_12.rightArg.set(myNode102);
const myNode128_13 = object.addFuseOperation();
myNode128_13.leftArg.set(myNode128_12);
myNode128_13.rightArg.set(myNode124);
myNode128 = object.addFuseOperation();
myNode128.leftArg.set(myNode128_13);
myNode128.rightArg.set(myNode127);

/* définition du node n°129*/
const myNode129 = object.addCommonOperation();
myNode129.leftArg.set(myNode0);
myNode129.rightArg.set(myNode128);
/*END Geometry Object Definition*/