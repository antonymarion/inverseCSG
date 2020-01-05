/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-2.1159,-3.5649,-5.9999);
myNode0.point2.set(4.2308,7.1288,11.9998);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(-1.591,-2.856,1.2231);
myNode1.point2.set(0,0,0.5398);
myNode1.radius.set(0.116);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode1.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(-4.255,0.589,1.4931);
myNode2.point2.set(0,0,0.2698);
myNode2.radius.set(0.254);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode2.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(-4.254,0.588,1.49305);
myNode3.point2.set(0,0,0.2699);
myNode3.radius.set(0.189);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode3.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°4*/
const myNode4 = object.addCutOperation();
myNode4.leftArg.set(myNode2);
myNode4.rightArg.set(myNode3);

/* définition du node n°5*/
const myNode5 = object.addBox();
myNode5.point1.set(1.2231,-2.9689,-1.6019);
myNode5.point2.set(0.5398,1.8898,1.9388);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode5.innerRotation.angle.set(3.14159);

/* définition du node n°6*/
const myNode6 = object.addCylinder();
myNode6.point1.set(-0.528,1.783,-18.0999);
myNode6.point2.set(0,0,19.8629);
myNode6.radius.set(0.25);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode6.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°7*/
const myNode7 = object.addCutOperation();
myNode7.leftArg.set(myNode5);
myNode7.rightArg.set(myNode6);

/* définition du node n°8*/
const myNode8 = object.addCylinder();
myNode8.point1.set(3.486,-1.627,-18.0999);
myNode8.point2.set(0,0,19.3228);
myNode8.radius.set(0.135);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode8.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°9*/
const myNode9 = object.addCylinder();
myNode9.point1.set(3.486,-1.627,1.7091);
myNode9.point2.set(0,0,0.0538);
myNode9.radius.set(0.135);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode9.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°10*/
const myNode10 = object.addCommonOperation();
myNode10.leftArg.set(myNode8);
myNode10.rightArg.set(myNode9);

/* définition du node n°11*/
const myNode11 = object.addBox();
myNode11.point1.set(-1.1149,1.0811,0.3361);
myNode11.point2.set(2.3378,1.7748,1.3718);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode11.innerRotation.angle.set(3.14159);

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(1.602,-2.868,-1.1149);
myNode12.point2.set(0,0,2.3378);
myNode12.radius.set(0.103);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode12.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°13*/
const myNode13 = object.addBox();
myNode13.point1.set(-1.1149,2.8561,0.3361);
myNode13.point2.set(2.3378,0.1138,1.2628);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode13.innerRotation.angle.set(3.14159);

/* définition du node n°14*/
const myNode14 = object.addBox();
myNode14.point1.set(-1.7629,0.4551,0.3361);
myNode14.point2.set(1.0798,2.4008,1.3718);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode14.innerRotation.angle.set(3.14159);

/* définition du node n°15*/
const myNode15_1 = object.addFuseOperation();
myNode15_1.leftArg.set(myNode11);
myNode15_1.rightArg.set(myNode11);
const myNode15_2 = object.addFuseOperation();
myNode15_2.leftArg.set(myNode15_1);
myNode15_2.rightArg.set(myNode12);
const myNode15_3 = object.addFuseOperation();
myNode15_3.leftArg.set(myNode15_2);
myNode15_3.rightArg.set(myNode13);
myNode15 = object.addFuseOperation();
myNode15.leftArg.set(myNode15_3);
myNode15.rightArg.set(myNode14);

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(-1.415,-0.001,-1.70795);
myNode16.point2.set(0,0,19.8079);
myNode16.radius.set(0.892);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(-1.76295,1.08105,0.76305);
myNode17.point2.set(1.0799,1.7749,0.6099);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode17.innerRotation.angle.set(3.14159);

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(-1.413,-2.323,-1.70795);
myNode18.point2.set(0,0,19.8079);
myNode18.radius.set(0.594);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);

/* définition du node n°19*/
const myNode19 = object.addCylinder();
myNode19.point1.set(0.335,-0.548,-2.96995);
myNode19.point2.set(0,0,1.5299);
myNode19.radius.set(0.134);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode19.innerRotation.angle.set(2.094392392986396);

/* définition du node n°20*/
const myNode20_1 = object.addFuseOperation();
myNode20_1.leftArg.set(myNode16);
myNode20_1.rightArg.set(myNode16);
const myNode20_2 = object.addFuseOperation();
myNode20_2.leftArg.set(myNode20_1);
myNode20_2.rightArg.set(myNode17);
const myNode20_3 = object.addFuseOperation();
myNode20_3.leftArg.set(myNode20_2);
myNode20_3.rightArg.set(myNode18);
myNode20 = object.addFuseOperation();
myNode20.leftArg.set(myNode20_3);
myNode20.rightArg.set(myNode19);

/* définition du node n°21*/
const myNode21 = object.addCutOperation();
myNode21.leftArg.set(myNode15);
myNode21.rightArg.set(myNode20);

/* définition du node n°22*/
const myNode22 = object.addBox();
myNode22.point1.set(-0.3809,1.0811,0.3361);
myNode22.point2.set(1.6028,1.8888,1.2628);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode22.innerRotation.angle.set(3.14159);

/* définition du node n°23*/
const myNode23 = object.addCylinder();
myNode23.point1.set(0.335,-0.548,-18.0999);
myNode23.point2.set(0,0,18.9779);
myNode23.radius.set(0.134);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode23.innerRotation.angle.set(2.094392392986396);

/* définition du node n°24*/
const myNode24 = object.addCutOperation();
myNode24.leftArg.set(myNode22);
myNode24.rightArg.set(myNode23);

/* définition du node n°25*/
const myNode25 = object.addBox();
myNode25.point1.set(-1.7629,-2.9689,0.3361);
myNode25.point2.set(1.3818,4.4098,0.4268);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode25.innerRotation.angle.set(3.14159);

/* définition du node n°26*/
const myNode26 = object.addBox();
myNode26.point1.set(-18.0999,-0.87795,-1.60195);
myNode26.point2.set(16.8779,18.9779,3.2009);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode26.innerRotation.angle.set(3.14159);

/* définition du node n°27*/
const myNode27 = object.addCutOperation();
myNode27.leftArg.set(myNode25);
myNode27.rightArg.set(myNode26);

/* définition du node n°28*/
const myNode28 = object.addCutOperation();
myNode28.leftArg.set(myNode27);
myNode28.rightArg.set(myNode16);

/* définition du node n°29*/
const myNode29 = object.addCylinder();
myNode29.point1.set(0.439,2.863,-0.3809);
myNode29.point2.set(0,0,1.6028);
myNode29.radius.set(0.104);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(4.1682470084564275e-06,1.570792653585774,-4.1682470084564275e-06);
myNode29.innerRotation.angle.set(1.5707926535968346);

/* définition du node n°30*/
const myNode30 = object.addBox();
myNode30.point1.set(-1.7629,0.4551,0.7631);
myNode30.point2.set(1.0798,2.4008,0.6098);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode30.innerRotation.angle.set(3.14159);

/* définition du node n°31*/
const myNode31 = object.addBox();
myNode31.point1.set(-1.76295,0.45505,0.92905);
myNode31.point2.set(0.3499,0.6259,0.0909);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode31.innerRotation.angle.set(3.14159);

/* définition du node n°32*/
const myNode32 = object.addCutOperation();
myNode32.leftArg.set(myNode30);
myNode32.rightArg.set(myNode31);

/* définition du node n°33*/
const myNode33 = object.addCylinder();
myNode33.point1.set(1.021,-1.352,-1.76295);
myNode33.point2.set(0,0,0.5409);
myNode33.radius.set(0.253);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode33.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°34*/
const myNode34 = object.addCylinder();
myNode34.point1.set(-1.42,-0.002,-1.59895);
myNode34.point2.set(0,0,0.8359);
myNode34.radius.set(0.68);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(0.0,0.0,0.0);
myNode34.innerRotation.angle.set(0.0);

/* définition du node n°35*/
const myNode35 = object.addCylinder();
myNode35.point1.set(1.022,-1.353,-1.22195);
myNode35.point2.set(0,0,19.3219);
myNode35.radius.set(0.189);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode35.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°36*/
const myNode36_1 = object.addFuseOperation();
myNode36_1.leftArg.set(myNode33);
myNode36_1.rightArg.set(myNode33);
const myNode36_2 = object.addFuseOperation();
myNode36_2.leftArg.set(myNode36_1);
myNode36_2.rightArg.set(myNode34);
myNode36 = object.addFuseOperation();
myNode36.leftArg.set(myNode36_2);
myNode36.rightArg.set(myNode35);

/* définition du node n°37*/
const myNode37 = object.addCutOperation();
myNode37.leftArg.set(myNode32);
myNode37.rightArg.set(myNode36);

/* définition du node n°38*/
const myNode38 = object.addCylinder();
myNode38.point1.set(-1.413,-2.323,-1.37295);
myNode38.point2.set(0,0,0.6099);
myNode38.radius.set(0.594);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(0.0,0.0,0.0);
myNode38.innerRotation.angle.set(0.0);

/* définition du node n°39*/
const myNode39 = object.addCutOperation();
myNode39.leftArg.set(myNode37);
myNode39.rightArg.set(myNode38);

/* définition du node n°40*/
const myNode40 = object.addCylinder();
myNode40.point1.set(0.449,-2.859,-0.3809);
myNode40.point2.set(0,0,2.1428);
myNode40.radius.set(0.113);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(4.1682470084564275e-06,1.570792653585774,-4.1682470084564275e-06);
myNode40.innerRotation.angle.set(1.5707926535968346);

/* définition du node n°41*/
const myNode41 = object.addBox();
myNode41.point1.set(1.2231,-0.8779,-1.7069);
myNode41.point2.set(0.5398,3.7328,3.3058);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode41.innerRotation.angle.set(3.14159);

/* définition du node n°42*/
const myNode42 = object.addFuseOperation();
myNode42.leftArg.set(myNode40);
myNode42.rightArg.set(myNode41);

/* définition du node n°43*/
const myNode43 = object.addCylinder();
myNode43.point1.set(-0.53,-2.427,1.22305);
myNode43.point2.set(0,0,16.8769);
myNode43.radius.set(0.252);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode43.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°44*/
const myNode44 = object.addCutOperation();
myNode44.leftArg.set(myNode42);
myNode44.rightArg.set(myNode43);

/* définition du node n°45*/
const myNode45 = object.addCylinder();
myNode45.point1.set(-0.528,1.783,1.7091);
myNode45.point2.set(0,0,0.0538);
myNode45.radius.set(0.25);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode45.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°46*/
const myNode46 = object.addCylinder();
myNode46.point1.set(-0.531,1.781,1.22305);
myNode46.point2.set(0,0,0.5399);
myNode46.radius.set(0.161);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode46.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°47*/
const myNode47 = object.addCutOperation();
myNode47.leftArg.set(myNode45);
myNode47.rightArg.set(myNode46);

/* définition du node n°48*/
const myNode48 = object.addBox();
myNode48.point1.set(-0.3809,2.4051,0.3361);
myNode48.point2.set(2.0888,0.4498,1.2628);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode48.innerRotation.angle.set(3.14159);

/* définition du node n°49*/
const myNode49 = object.addCylinder();
myNode49.point1.set(2.377,-0.837,-18.0999);
myNode49.point2.set(0,0,36.1999);
myNode49.radius.set(0.157);
myNode49.innerRotation.center.set(0,0,0);
myNode49.innerRotation.axis.set(-1.97304786885883,2.230125709098186,0.2073791021297825);
myNode49.innerRotation.angle.set(2.9848592367462174);

/* définition du node n°50*/
const myNode50 = object.addCutOperation();
myNode50.leftArg.set(myNode48);
myNode50.rightArg.set(myNode49);

/* définition du node n°51*/
const myNode51 = object.addBox();
myNode51.point1.set(-1.7629,-2.8619,0.7631);
myNode51.point2.set(3.5258,4.3018,0.9448);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode51.innerRotation.angle.set(3.14159);

/* définition du node n°52*/
const myNode52 = object.addCylinder();
myNode52.point1.set(-1.42,-0.002,-18.0999);
myNode52.point2.set(0,0,17.3369);
myNode52.radius.set(0.68);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,0.0,0.0);
myNode52.innerRotation.angle.set(0.0);

/* définition du node n°53*/
const myNode53 = object.addCylinder();
myNode53.point1.set(1.019,1.349,-18.0999);
myNode53.point2.set(0,0,17.4169);
myNode53.radius.set(0.253);
myNode53.innerRotation.center.set(0,0,0);
myNode53.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode53.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°54*/
const myNode54 = object.addBox();
myNode54.point1.set(-0.38095,-1.07895,0.51005);
myNode54.point2.set(1.6029,19.1789,4.4899);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode54.innerRotation.angle.set(3.14159);

/* définition du node n°55*/
const myNode55 = object.addBox();
myNode55.point1.set(-1.76295,0.45505,-18.0999);
myNode55.point2.set(0.5409,17.6449,23.0999);
myNode55.innerRotation.center.set(0,0,0);
myNode55.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode55.innerRotation.angle.set(3.14159);

/* définition du node n°56*/
const myNode56 = object.addBox();
myNode56.point1.set(-18.1,-18.1,1.599);
myNode56.point2.set(16.878,19.54,16.501);
myNode56.innerRotation.center.set(0,0,0);
myNode56.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode56.innerRotation.angle.set(3.14159);

/* définition du node n°57*/
const myNode57 = object.addCutOperation();
myNode57.leftArg.set(myNode55);
myNode57.rightArg.set(myNode56);

/* définition du node n°58*/
const myNode58 = object.addCylinder();
myNode58.point1.set(-1.415,-0.001,-1.70795);
myNode58.point2.set(0,0,0.3349);
myNode58.radius.set(0.892);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(0.0,0.0,0.0);
myNode58.innerRotation.angle.set(0.0);

/* définition du node n°59*/
const myNode59 = object.addBox();
myNode59.point1.set(-1.76295,0.45505,-1.60195);
myNode59.point2.set(1.0799,0.9849,2.9749);
myNode59.innerRotation.center.set(0,0,0);
myNode59.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode59.innerRotation.angle.set(3.14159);

/* définition du node n°60*/
const myNode60 = object.addCylinder();
myNode60.point1.set(-1.415,-0.001,-1.599);
myNode60.point2.set(0,0,0.836);
myNode60.radius.set(0.892);
myNode60.innerRotation.center.set(0,0,0);
myNode60.innerRotation.axis.set(0.0,0.0,0.0);
myNode60.innerRotation.angle.set(0.0);

/* définition du node n°61*/
const myNode61 = object.addCutOperation();
myNode61.leftArg.set(myNode59);
myNode61.rightArg.set(myNode60);

/* définition du node n°62*/
const myNode62_1 = object.addFuseOperation();
myNode62_1.leftArg.set(myNode52);
myNode62_1.rightArg.set(myNode52);
const myNode62_2 = object.addFuseOperation();
myNode62_2.leftArg.set(myNode62_1);
myNode62_2.rightArg.set(myNode53);
const myNode62_3 = object.addFuseOperation();
myNode62_3.leftArg.set(myNode62_2);
myNode62_3.rightArg.set(myNode54);
const myNode62_4 = object.addFuseOperation();
myNode62_4.leftArg.set(myNode62_3);
myNode62_4.rightArg.set(myNode57);
const myNode62_5 = object.addFuseOperation();
myNode62_5.leftArg.set(myNode62_4);
myNode62_5.rightArg.set(myNode58);
myNode62 = object.addFuseOperation();
myNode62.leftArg.set(myNode62_5);
myNode62.rightArg.set(myNode61);

/* définition du node n°63*/
const myNode63 = object.addCutOperation();
myNode63.leftArg.set(myNode51);
myNode63.rightArg.set(myNode62);

/* définition du node n°64*/
const myNode64 = object.addCylinder();
myNode64.point1.set(-4.188,0.589,1.2231);
myNode64.point2.set(0,0,0.5398);
myNode64.radius.set(0.811);
myNode64.innerRotation.center.set(0,0,0);
myNode64.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode64.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°65*/
const myNode65 = object.addCylinder();
myNode65.point1.set(-4.255,0.589,-18.0999);
myNode65.point2.set(0,0,19.8629);
myNode65.radius.set(0.254);
myNode65.innerRotation.center.set(0,0,0);
myNode65.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode65.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°66*/
const myNode66 = object.addCylinder();
myNode66.point1.set(-3.444,0.588,1.22305);
myNode66.point2.set(0,0,0.5399);
myNode66.radius.set(0.271);
myNode66.innerRotation.center.set(0,0,0);
myNode66.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode66.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°67*/
const myNode67 = object.addFuseOperation();
myNode67.leftArg.set(myNode65);
myNode67.rightArg.set(myNode66);

/* définition du node n°68*/
const myNode68 = object.addCutOperation();
myNode68.leftArg.set(myNode64);
myNode68.rightArg.set(myNode67);

/* définition du node n°69*/
const myNode69 = object.addBox();
myNode69.point1.set(-0.3809,1.0811,-1.6019);
myNode69.point2.set(2.1428,1.7748,3.3098);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode69.innerRotation.angle.set(3.14159);

/* définition du node n°70*/
const myNode70 = object.addCylinder();
myNode70.point1.set(-0.53,-2.429,1.70905);
myNode70.point2.set(0,0,0.0539);
myNode70.radius.set(0.16);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode70.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°71*/
const myNode71 = object.addBox();
myNode71.point1.set(-0.38095,1.08105,-1.60195);
myNode71.point2.set(2.0889,1.7749,3.2009);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode71.innerRotation.angle.set(3.14159);

/* définition du node n°72*/
const myNode72 = object.addFuseOperation();
myNode72.leftArg.set(myNode70);
myNode72.rightArg.set(myNode71);

/* définition du node n°73*/
const myNode73 = object.addCutOperation();
myNode73.leftArg.set(myNode69);
myNode73.rightArg.set(myNode72);

/* définition du node n°74*/
const myNode74 = object.addCylinder();
myNode74.point1.set(1.599,2.862,-1.7629);
myNode74.point2.set(0,0,2.9858);
myNode74.radius.set(0.107);
myNode74.innerRotation.center.set(0,0,0);
myNode74.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode74.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°75*/
const myNode75 = object.addBox();
myNode75.point1.set(1.2231,2.8561,-1.6019);
myNode75.point2.set(0.5398,0.1138,3.3098);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode75.innerRotation.angle.set(3.14159);

/* définition du node n°76*/
const myNode76 = object.addBox();
myNode76.point1.set(-18.0999,-18.0999,0.3361);
myNode76.point2.set(36.1998,36.1998,17.7638);
myNode76.innerRotation.center.set(0,0,0);
myNode76.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode76.innerRotation.angle.set(3.14159);

/* définition du node n°77*/
const myNode77 = object.addCylinder();
myNode77.point1.set(3.486,1.618,1.22305);
myNode77.point2.set(0,0,16.8769);
myNode77.radius.set(0.135);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode77.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°78*/
const myNode78 = object.addCutOperation();
myNode78.leftArg.set(myNode76);
myNode78.rightArg.set(myNode77);

/* définition du node n°79*/
const myNode79 = object.addCylinder();
myNode79.point1.set(1.021,1.35,-18.0999);
myNode79.point2.set(0,0,17.4169);
myNode79.radius.set(0.189);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode79.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°80*/
const myNode80 = object.addCylinder();
myNode80.point1.set(1.176,-0.232,-18.1);
myNode80.point2.set(0,0,36.1999);
myNode80.radius.set(0.133);
myNode80.innerRotation.center.set(0,0,0);
myNode80.innerRotation.axis.set(-0.03609661632946712,0.04378870199283992,1.3784735724079273);
myNode80.innerRotation.angle.set(1.3796411873961025);

/* définition du node n°81*/
const myNode81 = object.addFuseOperation();
myNode81.leftArg.set(myNode79);
myNode81.rightArg.set(myNode80);

/* définition du node n°82*/
const myNode82 = object.addCutOperation();
myNode82.leftArg.set(myNode78);
myNode82.rightArg.set(myNode81);

/* définition du node n°83*/
const myNode83 = object.addBox();
myNode83.point1.set(1.2231,-2.9689,-1.6019);
myNode83.point2.set(0.5398,2.0918,6.6018);
myNode83.innerRotation.center.set(0,0,0);
myNode83.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode83.innerRotation.angle.set(3.14159);

/* définition du node n°84*/
const myNode84 = object.addBox();
myNode84.point1.set(-1.2219,-2.8619,-18.0999);
myNode84.point2.set(2.4438,1.7828,19.8078);
myNode84.innerRotation.center.set(0,0,0);
myNode84.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode84.innerRotation.angle.set(3.14159);

/* définition du node n°85*/
const myNode85 = object.addBox();
myNode85.point1.set(-1.7629,-2.9689,0.5101);
myNode85.point2.set(3.5258,0.1068,1.0888);
myNode85.innerRotation.center.set(0,0,0);
myNode85.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode85.innerRotation.angle.set(3.14159);

/* définition du node n°86*/
const myNode86_1 = object.addFuseOperation();
myNode86_1.leftArg.set(myNode83);
myNode86_1.rightArg.set(myNode83);
const myNode86_2 = object.addFuseOperation();
myNode86_2.leftArg.set(myNode86_1);
myNode86_2.rightArg.set(myNode84);
myNode86 = object.addFuseOperation();
myNode86.leftArg.set(myNode86_2);
myNode86.rightArg.set(myNode85);

/* définition du node n°87*/
const myNode87 = object.addCommonOperation();
myNode87.leftArg.set(myNode82);
myNode87.rightArg.set(myNode86);

/* définition du node n°88*/
const myNode88 = object.addBox();
myNode88.point1.set(1.2231,-18.0999,1.7081);
myNode88.point2.set(0.5398,21.0698,3.2918);
myNode88.innerRotation.center.set(0,0,0);
myNode88.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode88.innerRotation.angle.set(3.14159);

/* définition du node n°89*/
const myNode89 = object.addCylinder();
myNode89.point1.set(3.486,1.618,-18.0999);
myNode89.point2.set(0,0,36.1999);
myNode89.radius.set(0.135);
myNode89.innerRotation.center.set(0,0,0);
myNode89.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode89.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°90*/
const myNode90 = object.addCutOperation();
myNode90.leftArg.set(myNode88);
myNode90.rightArg.set(myNode89);

/* définition du node n°91*/
const myNode91 = object.addCylinder();
myNode91.point1.set(3.486,-1.627,-18.0999);
myNode91.point2.set(0,0,36.1999);
myNode91.radius.set(0.135);
myNode91.innerRotation.center.set(0,0,0);
myNode91.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode91.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°92*/
const myNode92 = object.addCylinder();
myNode92.point1.set(4.669,-0.067,-18.0999);
myNode92.point2.set(0,0,19.8089);
myNode92.radius.set(0.251);
myNode92.innerRotation.center.set(0,0,0);
myNode92.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode92.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°93*/
const myNode93 = object.addFuseOperation();
myNode93.leftArg.set(myNode91);
myNode93.rightArg.set(myNode92);

/* définition du node n°94*/
const myNode94 = object.addCutOperation();
myNode94.leftArg.set(myNode90);
myNode94.rightArg.set(myNode93);

/* définition du node n°95*/
const myNode95 = object.addCylinder();
myNode95.point1.set(4.668,-0.066,1.70905);
myNode95.point2.set(0,0,16.3909);
myNode95.radius.set(0.162);
myNode95.innerRotation.center.set(0,0,0);
myNode95.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode95.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°96*/
const myNode96 = object.addCutOperation();
myNode96.leftArg.set(myNode94);
myNode96.rightArg.set(myNode95);

/* définition du node n°97*/
const myNode97 = object.addBox();
myNode97.point1.set(-18.0999,-18.0999,-18.1);
myNode97.point2.set(36.1999,15.2379,36.1999);
myNode97.innerRotation.center.set(0,0,0);
myNode97.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode97.innerRotation.angle.set(3.14159);

/* définition du node n°98*/
const myNode98 = object.addCutOperation();
myNode98.leftArg.set(myNode96);
myNode98.rightArg.set(myNode97);

/* définition du node n°99*/
const myNode99 = object.addBox();
myNode99.point1.set(1.2231,-4.2549,-0.2209);
myNode99.point2.set(0.5398,2.1538,0.5398);
myNode99.innerRotation.center.set(0,0,0);
myNode99.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode99.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°100*/
const myNode100 = object.addBox();
myNode100.point1.set(1.2231,-2.1009,-2.4049);
myNode100.point2.set(0.5398,2.6108,3.8048);
myNode100.innerRotation.center.set(0,0,0);
myNode100.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode100.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°101*/
const myNode101 = object.addCutOperation();
myNode101.leftArg.set(myNode100);
myNode101.rightArg.set(myNode43);

/* définition du node n°102*/
const myNode102 = object.addBox();
myNode102.point1.set(1.2231,-18.0999,0.8781);
myNode102.point2.set(0.5398,36.1998,17.2218);
myNode102.innerRotation.center.set(0,0,0);
myNode102.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode102.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°103*/
const myNode103 = object.addCylinder();
myNode103.point1.set(-0.528,1.783,-18.0999);
myNode103.point2.set(0,0,36.1999);
myNode103.radius.set(0.25);
myNode103.innerRotation.center.set(0,0,0);
myNode103.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode103.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°104*/
const myNode104 = object.addCutOperation();
myNode104.leftArg.set(myNode102);
myNode104.rightArg.set(myNode103);

/* définition du node n°105*/
const myNode105 = object.addFuseOperation();
myNode105.leftArg.set(myNode101);
myNode105.rightArg.set(myNode104);

/* définition du node n°106*/
const myNode106 = object.addCylinder();
myNode106.point1.set(-1.921,1.608,-18.0999);
myNode106.point2.set(0,0,19.8629);
myNode106.radius.set(0.209);
myNode106.innerRotation.center.set(0,0,0);
myNode106.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode106.innerRotation.angle.set(1.5707926535968346);

/* définition du node n°107*/
const myNode107 = object.addCutOperation();
myNode107.leftArg.set(myNode105);
myNode107.rightArg.set(myNode106);

/* définition du node n°108*/
const myNode108 = object.addBox();
myNode108.point1.set(-18.0999,-1.7069,-2.4049);
myNode108.point2.set(19.8628,2.2168,5.3748);
myNode108.innerRotation.center.set(0,0,0);
myNode108.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode108.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°109*/
const myNode109 = object.addBox();
myNode109.point1.set(1.2231,-4.2549,-0.2209);
myNode109.point2.set(0.5398,2.5478,1.6208);
myNode109.innerRotation.center.set(0,0,0);
myNode109.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode109.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°110*/
const myNode110 = object.addCylinder();
myNode110.point1.set(-2.101,0.589,1.22305);
myNode110.point2.set(0,0,0.5399);
myNode110.radius.set(0.273);
myNode110.innerRotation.center.set(0,0,0);
myNode110.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode110.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°111*/
const myNode111 = object.addCutOperation();
myNode111.leftArg.set(myNode109);
myNode111.rightArg.set(myNode110);

/* définition du node n°112*/
const myNode112 = object.addBox();
myNode112.point1.set(1.2231,-1.9219,-0.4549);
myNode112.point2.set(0.4858,2.4318,0.2338);
myNode112.innerRotation.center.set(0,0,0);
myNode112.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode112.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°113*/
const myNode113 = object.addCylinder();
myNode113.point1.set(-1.922,-0.439,1.22305);
myNode113.point2.set(0,0,0.5399);
myNode113.radius.set(0.217);
myNode113.innerRotation.center.set(0,0,0);
myNode113.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode113.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°114*/
const myNode114 = object.addCutOperation();
myNode114.leftArg.set(myNode112);
myNode114.rightArg.set(myNode113);

/* définition du node n°115*/
const myNode115 = object.addBox();
myNode115.point1.set(-18.0999,-1.9219,0.8781);
myNode115.point2.set(19.8628,0.2148,0.7398);
myNode115.innerRotation.center.set(0,0,0);
myNode115.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode115.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°116*/
const myNode116_1 = object.addFuseOperation();
myNode116_1.leftArg.set(myNode108);
myNode116_1.rightArg.set(myNode108);
const myNode116_2 = object.addFuseOperation();
myNode116_2.leftArg.set(myNode116_1);
myNode116_2.rightArg.set(myNode111);
const myNode116_3 = object.addFuseOperation();
myNode116_3.leftArg.set(myNode116_2);
myNode116_3.rightArg.set(myNode114);
myNode116 = object.addFuseOperation();
myNode116.leftArg.set(myNode116_3);
myNode116.rightArg.set(myNode115);

/* définition du node n°117*/
const myNode117 = object.addCommonOperation();
myNode117.leftArg.set(myNode107);
myNode117.rightArg.set(myNode116);

/* définition du node n°118*/
const myNode118_1 = object.addFuseOperation();
myNode118_1.leftArg.set(myNode1);
myNode118_1.rightArg.set(myNode1);
const myNode118_2 = object.addFuseOperation();
myNode118_2.leftArg.set(myNode118_1);
myNode118_2.rightArg.set(myNode4);
const myNode118_3 = object.addFuseOperation();
myNode118_3.leftArg.set(myNode118_2);
myNode118_3.rightArg.set(myNode7);
const myNode118_4 = object.addFuseOperation();
myNode118_4.leftArg.set(myNode118_3);
myNode118_4.rightArg.set(myNode10);
const myNode118_5 = object.addFuseOperation();
myNode118_5.leftArg.set(myNode118_4);
myNode118_5.rightArg.set(myNode21);
const myNode118_6 = object.addFuseOperation();
myNode118_6.leftArg.set(myNode118_5);
myNode118_6.rightArg.set(myNode24);
const myNode118_7 = object.addFuseOperation();
myNode118_7.leftArg.set(myNode118_6);
myNode118_7.rightArg.set(myNode28);
const myNode118_8 = object.addFuseOperation();
myNode118_8.leftArg.set(myNode118_7);
myNode118_8.rightArg.set(myNode29);
const myNode118_9 = object.addFuseOperation();
myNode118_9.leftArg.set(myNode118_8);
myNode118_9.rightArg.set(myNode39);
const myNode118_10 = object.addFuseOperation();
myNode118_10.leftArg.set(myNode118_9);
myNode118_10.rightArg.set(myNode44);
const myNode118_11 = object.addFuseOperation();
myNode118_11.leftArg.set(myNode118_10);
myNode118_11.rightArg.set(myNode47);
const myNode118_12 = object.addFuseOperation();
myNode118_12.leftArg.set(myNode118_11);
myNode118_12.rightArg.set(myNode50);
const myNode118_13 = object.addFuseOperation();
myNode118_13.leftArg.set(myNode118_12);
myNode118_13.rightArg.set(myNode63);
const myNode118_14 = object.addFuseOperation();
myNode118_14.leftArg.set(myNode118_13);
myNode118_14.rightArg.set(myNode68);
const myNode118_15 = object.addFuseOperation();
myNode118_15.leftArg.set(myNode118_14);
myNode118_15.rightArg.set(myNode73);
const myNode118_16 = object.addFuseOperation();
myNode118_16.leftArg.set(myNode118_15);
myNode118_16.rightArg.set(myNode74);
const myNode118_17 = object.addFuseOperation();
myNode118_17.leftArg.set(myNode118_16);
myNode118_17.rightArg.set(myNode75);
const myNode118_18 = object.addFuseOperation();
myNode118_18.leftArg.set(myNode118_17);
myNode118_18.rightArg.set(myNode87);
const myNode118_19 = object.addFuseOperation();
myNode118_19.leftArg.set(myNode118_18);
myNode118_19.rightArg.set(myNode98);
const myNode118_20 = object.addFuseOperation();
myNode118_20.leftArg.set(myNode118_19);
myNode118_20.rightArg.set(myNode99);
myNode118 = object.addFuseOperation();
myNode118.leftArg.set(myNode118_20);
myNode118.rightArg.set(myNode117);

/* définition du node n°119*/
const myNode119 = object.addCommonOperation();
myNode119.leftArg.set(myNode0);
myNode119.rightArg.set(myNode118);
/*END Geometry Object Definition*/