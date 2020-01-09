/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-4.5559,-2.0329,-2.0559);
myNode0.point2.set(4.554899999999999,1.8889,-1.6111);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(-0.0005000000000006111,-0.07200000000000006,-1.8335);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-2.7779,-4.9999,-2.0559);
myNode1.point2.set(4.5549,-2.0331,0.9439000000000002);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.innerTranslation.vector.set(0.8885000000000001,-3.5165,-0.5559999999999998);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(3.444,-3.445,-1.38895);
myNode2.point2.set(3.444,-3.445,-0.7220499999999999);
myNode2.radius.set(0.664);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addCutOperation();
myNode3.leftArg.set(myNode1);
myNode3.rightArg.set(myNode2);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(3.445,-3.445,-2.05595);
myNode4.point2.set(3.445,-3.445,-1.3890500000000001);
myNode4.radius.set(0.388);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addBox();
myNode5.point1.set(-2.77795,-4.99995,-0.72195);
myNode5.point2.set(4.55495,-2.0330500000000002,2.0559499999999997);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.innerTranslation.vector.set(0.8885000000000001,-3.5165,0.6669999999999999);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addFuseOperation();
myNode6.leftArg.set(myNode4);
myNode6.rightArg.set(myNode5);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addCutOperation();
myNode7.leftArg.set(myNode3);
myNode7.rightArg.set(myNode6);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addBox();
myNode8.point1.set(-4.0619,1.0001,-2.0559);
myNode8.point2.set(-3.8440999999999996,1.8889,-1.3891);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.innerTranslation.vector.set(-3.9529999999999994,1.4445000000000001,-1.7225);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addCylinder();
myNode9.point1.set(1.397,4.062,-18.0999);
myNode9.point2.set(1.397,4.062,1.8889999999999993);
myNode9.radius.set(0.213);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode9.innerRotation.angle.set(2.094392392986396);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addCutOperation();
myNode10.leftArg.set(myNode8);
myNode10.rightArg.set(myNode9);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addBox();
myNode11.point1.set(-2.7779,1.8891,-2.0559);
myNode11.point2.set(4.5549,3.8719,-1.3891);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);
myNode11.innerTranslation.vector.set(0.8885000000000001,2.8805,-1.7225);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(3.444,3.445,-2.05595);
myNode12.point2.set(3.444,3.445,18.09995);
myNode12.radius.set(0.389);
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
myNode14.point1.set(-4.5559,-4.9999,-2.0559);
myNode14.point2.set(2.7768999999999995,-2.0331,2.0549000000000004);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);
myNode14.innerTranslation.vector.set(-0.8895000000000004,-3.5165,-0.0004999999999997229);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addCylinder();
myNode15.point1.set(-3.444,-3.443,-1.38895);
myNode15.point2.set(-3.444,-3.443,-0.7220499999999999);
myNode15.radius.set(0.663);
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
const myNode17 = object.addCylinder();
myNode17.point1.set(-3.446,-3.444,-18.0999);
myNode17.point2.set(-3.446,-3.444,18.099999999999998);
myNode17.radius.set(0.388);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(-2.072,-3.445,-18.0999);
myNode18.point2.set(-2.072,-3.445,18.099999999999998);
myNode18.radius.set(0.376);
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
myNode21.point1.set(-2.072,-3.443,0.94405);
myNode21.point2.set(-2.072,-3.443,18.09995);
myNode21.radius.set(0.443);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addCylinder();
myNode22.point1.set(0.599,0.811,-18.0999);
myNode22.point2.set(0.599,0.811,18.099999999999998);
myNode22.radius.set(0.704);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(-1.3671625151710542,1.916695925690334,0.6375166719295208);
myNode22.innerRotation.angle.set(2.4391154383166986);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addCylinder();
myNode23.point1.set(-2.701,-3.772,-18.1);
myNode23.point2.set(-2.701,-3.772,18.099899999999998);
myNode23.radius.set(0.623);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(1.0030512563647358,2.1029311504841517,-0.45711438050778924);
myNode23.innerRotation.angle.set(2.3743177553643684);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addCommonOperation();
myNode24.leftArg.set(myNode22);
myNode24.rightArg.set(myNode23);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addFuseOperation();
myNode25.leftArg.set(myNode21);
myNode25.rightArg.set(myNode24);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addCutOperation();
myNode26.leftArg.set(myNode20);
myNode26.rightArg.set(myNode25);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addBox();
myNode27.point1.set(-2.7779,-4.8559,-2.0559);
myNode27.point2.set(2.7779,-2.0341,18.099899999999998);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);
myNode27.innerTranslation.vector.set(0.0,-3.4450000000000003,8.022);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addBox();
myNode28.point1.set(-4.5559,-4.1889,-2.0559);
myNode28.point2.set(-2.7781000000000002,-2.0331,-0.7230999999999999);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(0.0,0.0,0.0);
myNode28.innerRotation.angle.set(0.0);
myNode28.innerTranslation.vector.set(-3.6670000000000003,-3.111,-1.3895);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addBox();
myNode29.point1.set(-4.5559,-4.9999,-18.0999);
myNode29.point2.set(18.099899999999998,-4.1891,-0.7221000000000011);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);
myNode29.innerTranslation.vector.set(6.771999999999999,-4.5945,-9.411000000000001);
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
const myNode31 = object.addCylinder();
myNode31.point1.set(-2.046,5.56361e-32,-18.0999);
myNode31.point2.set(-2.046,5.56361e-32,18.099999999999998);
myNode31.radius.set(1.789);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode31.innerRotation.angle.set(2.094392392986396);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addCylinder();
myNode32.point1.set(2.075,-3.445,-0.72195);
myNode32.point2.set(2.075,-3.445,18.09995);
myNode32.radius.set(0.442);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addCylinder();
myNode33.point1.set(-1.002,-3.81,-18.1);
myNode33.point2.set(-1.002,-3.81,18.099899999999998);
myNode33.radius.set(0.686);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(-0.08954948905302097,0.8520044685420913,0.19649850658015844);
myNode33.innerRotation.angle.set(0.8789439052030461);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addCylinder();
myNode34.point1.set(0.498,1.769,-18.0999);
myNode34.point2.set(0.498,1.769,18.099999999999998);
myNode34.radius.set(0.706);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(0.6312237032526069,0.6888596675526804,-1.3850945866822204);
myNode34.innerRotation.angle.set(1.6707656984703496);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addCommonOperation();
myNode35.leftArg.set(myNode33);
myNode35.rightArg.set(myNode34);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36_1 = myNode31.clone();
myNode36_1.isVisible = false;
const myNode36_2 = object.addFuseOperation();
myNode36_2.leftArg.set(myNode36_1);
myNode36_2.rightArg.set(myNode32);
myNode36_2.isVisible = false;
myNode36 = object.addFuseOperation();
myNode36.leftArg.set(myNode36_2);
myNode36.rightArg.set(myNode35);
myNode36.isVisible = false;
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addCutOperation();
myNode37.leftArg.set(myNode30);
myNode37.rightArg.set(myNode36);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addCommonOperation();
myNode38.leftArg.set(myNode26);
myNode38.rightArg.set(myNode37);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addBox();
myNode39.point1.set(-4.5559,1.8891,-2.0559);
myNode39.point2.set(18.099899999999998,4.9999,-0.7230999999999999);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(0.0,0.0,0.0);
myNode39.innerRotation.angle.set(0.0);
myNode39.innerTranslation.vector.set(6.771999999999999,3.4444999999999997,-1.3895);
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addCylinder();
myNode40.point1.set(-3.444,3.445,-1.38895);
myNode40.point2.set(-3.444,3.445,18.09995);
myNode40.radius.set(0.665);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(0.0,0.0,0.0);
myNode40.innerRotation.angle.set(0.0);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41 = object.addCutOperation();
myNode41.leftArg.set(myNode39);
myNode41.rightArg.set(myNode40);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addCylinder();
myNode42.point1.set(-3.445,3.444,-18.0999);
myNode42.point2.set(-3.445,3.444,-1.389000000000003);
myNode42.radius.set(0.387);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0,0.0,0.0);
myNode42.innerRotation.angle.set(0.0);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addCylinder();
myNode43.point1.set(3.445,3.444,-18.0999);
myNode43.point2.set(3.445,3.444,18.099999999999998);
myNode43.radius.set(0.666);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(0.0,0.0,0.0);
myNode43.innerRotation.angle.set(0.0);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44 = object.addFuseOperation();
myNode44.leftArg.set(myNode42);
myNode44.rightArg.set(myNode43);
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45 = object.addCutOperation();
myNode45.leftArg.set(myNode41);
myNode45.rightArg.set(myNode44);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addBox();
myNode46.point1.set(2.7781,3.8721,-2.0559);
myNode46.point2.set(3.8449,4.9999,-1.3891);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(0.0,0.0,0.0);
myNode46.innerRotation.angle.set(0.0);
myNode46.innerTranslation.vector.set(3.3114999999999997,4.436,-1.7225);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addCylinder();
myNode47.point1.set(0.925,4.529,-2.0329);
myNode47.point2.set(0.925,4.529,4.9999);
myNode47.radius.set(0.246);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode47.innerRotation.angle.set(2.094392392986396);
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addBox();
myNode48.point1.set(-3.8439,1.0001,-1.6099);
myNode48.point2.set(3.8439,1.8889,-0.7221000000000001);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);
myNode48.innerTranslation.vector.set(0.0,1.4445000000000001,-1.1660000000000001);
myNode48.isVisible = false;

/* définition du node n°49*/
const myNode49 = object.addCylinder();
myNode49.point1.set(0.923,-4.53,-2.0329);
myNode49.point2.set(0.923,-4.53,1.8889);
myNode49.radius.set(0.247);
myNode49.innerRotation.center.set(0,0,0);
myNode49.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode49.innerRotation.angle.set(2.094392392986396);
myNode49.isVisible = false;

/* définition du node n°50*/
const myNode50_1 = myNode45.clone();
myNode50_1.isVisible = false;
const myNode50_2 = object.addFuseOperation();
myNode50_2.leftArg.set(myNode50_1);
myNode50_2.rightArg.set(myNode46);
myNode50_2.isVisible = false;
const myNode50_3 = object.addFuseOperation();
myNode50_3.leftArg.set(myNode50_2);
myNode50_3.rightArg.set(myNode47);
myNode50_3.isVisible = false;
const myNode50_4 = object.addFuseOperation();
myNode50_4.leftArg.set(myNode50_3);
myNode50_4.rightArg.set(myNode48);
myNode50_4.isVisible = false;
myNode50 = object.addFuseOperation();
myNode50.leftArg.set(myNode50_4);
myNode50.rightArg.set(myNode49);
myNode50.isVisible = false;
myNode50.isVisible = false;

/* définition du node n°51*/
const myNode51 = object.addBox();
myNode51.point1.set(-3.4299,3.8721,-2.0559);
myNode51.point2.set(3.4459,4.9999,-0.7230999999999999);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(0.0,0.0,0.0);
myNode51.innerRotation.angle.set(0.0);
myNode51.innerTranslation.vector.set(0.008000000000000007,4.436,-1.3895);
myNode51.isVisible = false;

/* définition du node n°52*/
const myNode52 = object.addBox();
myNode52.point1.set(-4.5559,-2.0329,-1.6099);
myNode52.point2.set(4.554899999999999,3.8718999999999997,-0.7221000000000001);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,0.0,0.0);
myNode52.innerRotation.angle.set(0.0);
myNode52.innerTranslation.vector.set(-0.0005000000000006111,0.9194999999999998,-1.1660000000000001);
myNode52.isVisible = false;

/* définition du node n°53*/
const myNode53 = object.addCylinder();
myNode53.point1.set(3.446,3.888,-2.0559);
myNode53.point2.set(3.446,3.888,18.099899999999998);
myNode53.radius.set(1.108);
myNode53.innerRotation.center.set(0,0,0);
myNode53.innerRotation.axis.set(0.0,0.0,0.0);
myNode53.innerRotation.angle.set(0.0);
myNode53.isVisible = false;

/* définition du node n°54*/
const myNode54 = object.addBox();
myNode54.point1.set(-18.0999,1.8891,-2.0559);
myNode54.point2.set(2.777899999999999,3.8719,-1.6111);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(0.0,0.0,0.0);
myNode54.innerRotation.angle.set(0.0);
myNode54.innerTranslation.vector.set(-7.661000000000001,2.8805,-1.8335);
myNode54.isVisible = false;

/* définition du node n°55*/
const myNode55 = object.addCylinder();
myNode55.point1.set(-3.43,3.872,-2.0559);
myNode55.point2.set(-3.43,3.872,18.099899999999998);
myNode55.radius.set(1.129);
myNode55.innerRotation.center.set(0,0,0);
myNode55.innerRotation.axis.set(0.0,0.0,0.0);
myNode55.innerRotation.angle.set(0.0);
myNode55.isVisible = false;

/* définition du node n°56*/
const myNode56_1 = myNode51.clone();
myNode56_1.isVisible = false;
const myNode56_2 = object.addFuseOperation();
myNode56_2.leftArg.set(myNode56_1);
myNode56_2.rightArg.set(myNode52);
myNode56_2.isVisible = false;
const myNode56_3 = object.addFuseOperation();
myNode56_3.leftArg.set(myNode56_2);
myNode56_3.rightArg.set(myNode53);
myNode56_3.isVisible = false;
const myNode56_4 = object.addFuseOperation();
myNode56_4.leftArg.set(myNode56_3);
myNode56_4.rightArg.set(myNode54);
myNode56_4.isVisible = false;
myNode56 = object.addFuseOperation();
myNode56.leftArg.set(myNode56_4);
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
myNode58.point1.set(-2.046,3.95585e-21,-4.1889);
myNode58.point2.set(-2.046,3.95585e-21,-2.8561000000000005);
myNode58.radius.set(1.789);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode58.innerRotation.angle.set(2.094392392986396);
myNode58.isVisible = false;

/* définition du node n°59*/
const myNode59 = object.addBox();
myNode59.point1.set(-2.7779,-4.1889,-0.7219);
myNode59.point2.set(2.7779,-2.8561000000000005,0.9449000000000001);
myNode59.innerRotation.center.set(0,0,0);
myNode59.innerRotation.axis.set(0.0,0.0,0.0);
myNode59.innerRotation.angle.set(0.0);
myNode59.innerTranslation.vector.set(0.0,-3.5225000000000004,0.11150000000000004);
myNode59.isVisible = false;

/* définition du node n°60*/
const myNode60 = object.addFuseOperation();
myNode60.leftArg.set(myNode58);
myNode60.rightArg.set(myNode59);
myNode60.isVisible = false;

/* définition du node n°61*/
const myNode61 = object.addCylinder();
myNode61.point1.set(-2.072,-3.443,-0.72195);
myNode61.point2.set(-2.072,-3.443,18.09995);
myNode61.radius.set(0.443);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(0.0,0.0,0.0);
myNode61.innerRotation.angle.set(0.0);
myNode61.isVisible = false;

/* définition du node n°62*/
const myNode62 = object.addCylinder();
myNode62.point1.set(2.075,-3.445,0.94405);
myNode62.point2.set(2.075,-3.445,18.09995);
myNode62.radius.set(0.442);
myNode62.innerRotation.center.set(0,0,0);
myNode62.innerRotation.axis.set(0.0,0.0,0.0);
myNode62.innerRotation.angle.set(0.0);
myNode62.isVisible = false;

/* définition du node n°63*/
const myNode63 = object.addFuseOperation();
myNode63.leftArg.set(myNode61);
myNode63.rightArg.set(myNode62);
myNode63.isVisible = false;

/* définition du node n°64*/
const myNode64 = object.addCutOperation();
myNode64.leftArg.set(myNode60);
myNode64.rightArg.set(myNode63);
myNode64.isVisible = false;

/* définition du node n°65*/
const myNode65 = object.addCylinder();
myNode65.point1.set(-2.042,0.003,-4.18895);
myNode65.point2.set(-2.042,0.003,-2.85605);
myNode65.radius.set(1.338);
myNode65.innerRotation.center.set(0,0,0);
myNode65.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode65.innerRotation.angle.set(2.094392392986396);
myNode65.isVisible = false;

/* définition du node n°66*/
const myNode66 = object.addCylinder();
myNode66.point1.set(-2.702,-3.803,-18.1);
myNode66.point2.set(-2.702,-3.803,18.099899999999998);
myNode66.radius.set(0.685);
myNode66.innerRotation.center.set(0,0,0);
myNode66.innerRotation.axis.set(-0.24106997465000793,2.2935798886533565,0.10733370184429875);
myNode66.innerRotation.angle.set(2.3087104543152437);
myNode66.isVisible = false;

/* définition du node n°67*/
const myNode67 = object.addBox();
myNode67.point1.set(-2.77795,-18.0999,2.05605);
myNode67.point2.set(4.55495,-2.0330000000000013,18.100949999999997);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(0.0,0.0,0.0);
myNode67.innerRotation.angle.set(0.0);
myNode67.innerTranslation.vector.set(0.8885000000000001,-10.066450000000001,10.078499999999998);
myNode67.isVisible = false;

/* définition du node n°68*/
const myNode68 = object.addCylinder();
myNode68.point1.set(-2.072,-3.442,-0.94395);
myNode68.point2.set(-2.072,-3.442,1.38895);
myNode68.radius.set(0.376);
myNode68.innerRotation.center.set(0,0,0);
myNode68.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode68.innerRotation.angle.set(3.141592653586273);
myNode68.isVisible = false;

/* définition du node n°69*/
const myNode69_1 = myNode65.clone();
myNode69_1.isVisible = false;
const myNode69_2 = object.addFuseOperation();
myNode69_2.leftArg.set(myNode69_1);
myNode69_2.rightArg.set(myNode66);
myNode69_2.isVisible = false;
const myNode69_3 = object.addFuseOperation();
myNode69_3.leftArg.set(myNode69_2);
myNode69_3.rightArg.set(myNode67);
myNode69_3.isVisible = false;
myNode69 = object.addFuseOperation();
myNode69.leftArg.set(myNode69_3);
myNode69.rightArg.set(myNode68);
myNode69.isVisible = false;
myNode69.isVisible = false;

/* définition du node n°70*/
const myNode70 = object.addCutOperation();
myNode70.leftArg.set(myNode64);
myNode70.rightArg.set(myNode69);
myNode70.isVisible = false;

/* définition du node n°71*/
const myNode71 = object.addBox();
myNode71.point1.set(-2.7779,-4.8559,-0.7219);
myNode71.point2.set(2.7779,-2.8561,2.0559000000000003);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(0.0,0.0,0.0);
myNode71.innerRotation.angle.set(0.0);
myNode71.innerTranslation.vector.set(0.0,-3.856,0.667);
myNode71.isVisible = false;

/* définition du node n°72*/
const myNode72 = object.addCylinder();
myNode72.point1.set(2.075,-3.445,-2.05595);
myNode72.point2.set(2.075,-3.445,18.09995);
myNode72.radius.set(0.442);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(0.0,0.0,0.0);
myNode72.innerRotation.angle.set(0.0);
myNode72.isVisible = false;

/* définition du node n°73*/
const myNode73 = object.addCutOperation();
myNode73.leftArg.set(myNode71);
myNode73.rightArg.set(myNode72);
myNode73.isVisible = false;

/* définition du node n°74*/
const myNode74 = object.addCylinder();
myNode74.point1.set(0.498,1.769,-18.0999);
myNode74.point2.set(0.498,1.769,18.0999);
myNode74.radius.set(0.706);
myNode74.innerRotation.center.set(0,0,0);
myNode74.innerRotation.axis.set(0.6312237032526069,0.6888596675526804,-1.3850945866822204);
myNode74.innerRotation.angle.set(1.6707656984703496);
myNode74.isVisible = false;

/* définition du node n°75*/
const myNode75 = object.addCylinder();
myNode75.point1.set(-4.478,0.0449959,-18.0999);
myNode75.point2.set(-4.478,0.0449959,18.099999999999998);
myNode75.radius.set(0.649);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(1.1818899113977008,2.047107745131362,-0.5262090847453613);
myNode75.innerRotation.angle.set(2.4216543691677033);
myNode75.isVisible = false;

/* définition du node n°76*/
const myNode76 = object.addCutOperation();
myNode76.leftArg.set(myNode74);
myNode76.rightArg.set(myNode75);
myNode76.isVisible = false;

/* définition du node n°77*/
const myNode77 = object.addCommonOperation();
myNode77.leftArg.set(myNode73);
myNode77.rightArg.set(myNode76);
myNode77.isVisible = false;

/* définition du node n°78*/
const myNode78 = object.addBox();
myNode78.point1.set(3.8441,1.0001,-1.6099);
myNode78.point2.set(4.0929,3.8719,-1.3891);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(0.0,0.0,0.0);
myNode78.innerRotation.angle.set(0.0);
myNode78.innerTranslation.vector.set(3.9685,2.436,-1.4995);
myNode78.isVisible = false;

/* définition du node n°79*/
const myNode79 = object.addBox();
myNode79.point1.set(-4.5559,-2.0329,-1.6099);
myNode79.point2.set(4.554899999999999,0.9998999999999998,-0.7221000000000001);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(0.0,0.0,0.0);
myNode79.innerRotation.angle.set(0.0);
myNode79.innerTranslation.vector.set(-0.0005000000000006111,-0.5165000000000002,-1.1660000000000001);
myNode79.isVisible = false;

/* définition du node n°80*/
const myNode80 = object.addBox();
myNode80.point1.set(-2.7779,-2.8549,-2.0559);
myNode80.point2.set(2.7779,-2.0331,0.9439000000000002);
myNode80.innerRotation.center.set(0,0,0);
myNode80.innerRotation.axis.set(0.0,0.0,0.0);
myNode80.innerRotation.angle.set(0.0);
myNode80.innerTranslation.vector.set(0.0,-2.4440000000000004,-0.5559999999999998);
myNode80.isVisible = false;

/* définition du node n°81*/
const myNode81 = object.addCylinder();
myNode81.point1.set(-2.046,4.38538e-21,-18.0999);
myNode81.point2.set(-2.046,4.38538e-21,1.0);
myNode81.radius.set(1.789);
myNode81.innerRotation.center.set(0,0,0);
myNode81.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode81.innerRotation.angle.set(2.094392392986396);
myNode81.isVisible = false;

/* définition du node n°82*/
const myNode82 = object.addCutOperation();
myNode82.leftArg.set(myNode80);
myNode82.rightArg.set(myNode81);
myNode82.isVisible = false;

/* définition du node n°83*/
const myNode83_1 = myNode78.clone();
myNode83_1.isVisible = false;
const myNode83_2 = object.addFuseOperation();
myNode83_2.leftArg.set(myNode83_1);
myNode83_2.rightArg.set(myNode79);
myNode83_2.isVisible = false;
myNode83 = object.addFuseOperation();
myNode83.leftArg.set(myNode83_2);
myNode83.rightArg.set(myNode82);
myNode83.isVisible = false;
myNode83.isVisible = false;

/* définition du node n°84*/
const myNode84 = object.addCylinder();
myNode84.point1.set(1.369,-4.093,1.00005);
myNode84.point2.set(1.369,-4.093,1.8889500000000001);
myNode84.radius.set(0.254);
myNode84.innerRotation.center.set(0,0,0);
myNode84.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode84.innerRotation.angle.set(2.094392392986396);
myNode84.isVisible = false;

/* définition du node n°85*/
const myNode85 = object.addCutOperation();
myNode85.leftArg.set(myNode83);
myNode85.rightArg.set(myNode84);
myNode85.isVisible = false;

/* définition du node n°86*/
const myNode86_1 = myNode0.clone();
myNode86_1.isVisible = false;
const myNode86_2 = object.addFuseOperation();
myNode86_2.leftArg.set(myNode86_1);
myNode86_2.rightArg.set(myNode7);
myNode86_2.isVisible = false;
const myNode86_3 = object.addFuseOperation();
myNode86_3.leftArg.set(myNode86_2);
myNode86_3.rightArg.set(myNode10);
myNode86_3.isVisible = false;
const myNode86_4 = object.addFuseOperation();
myNode86_4.leftArg.set(myNode86_3);
myNode86_4.rightArg.set(myNode13);
myNode86_4.isVisible = false;
const myNode86_5 = object.addFuseOperation();
myNode86_5.leftArg.set(myNode86_4);
myNode86_5.rightArg.set(myNode38);
myNode86_5.isVisible = false;
const myNode86_6 = object.addFuseOperation();
myNode86_6.leftArg.set(myNode86_5);
myNode86_6.rightArg.set(myNode57);
myNode86_6.isVisible = false;
const myNode86_7 = object.addFuseOperation();
myNode86_7.leftArg.set(myNode86_6);
myNode86_7.rightArg.set(myNode70);
myNode86_7.isVisible = false;
const myNode86_8 = object.addFuseOperation();
myNode86_8.leftArg.set(myNode86_7);
myNode86_8.rightArg.set(myNode77);
myNode86_8.isVisible = false;
myNode86 = object.addFuseOperation();
myNode86.leftArg.set(myNode86_8);
myNode86.rightArg.set(myNode85);
myNode86.isVisible = false;
myNode86.isVisible = false;

/* définition du node n°87*/
const myNode87 = object.addBox();
myNode87.point1.set(-5.4669,-5.9999,-2.4669);
myNode87.point2.set(5.4659,5.9999,2.4659000000000004);
myNode87.innerRotation.center.set(0,0,0);
myNode87.innerRotation.axis.set(0.0,0.0,0.0);
myNode87.innerRotation.angle.set(0.0);
myNode87.innerTranslation.vector.set(-0.0004999999999997229,0.0,-0.0004999999999997229);
myNode87.isVisible = false;

/* définition du node n°88*/
const myNode88 = object.addCommonOperation();
myNode88.leftArg.set(myNode86);
myNode88.rightArg.set(myNode87);
myNode88.isVisible = true;


/*END Geometry Object Definition*/