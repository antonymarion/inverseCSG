/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.4669,-5.9999,-2.4669);
myNode0.point2.set(5.4659,5.9999,2.4659000000000004);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.isVisible = False

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-4.5559,-2.0329,-2.0559);
myNode1.point2.set(4.554899999999999,1.8889,-1.6111);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.isVisible = False

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-4.5559,-4.9999,-2.0559);
myNode2.point2.set(2.7768999999999995,-2.0331,2.0549000000000004);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.isVisible = False

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(-3.444,-3.443,-1.38895);
myNode3.point2.set(-3.444,-3.443,-0.7220499999999999);
myNode3.radius.set(0.663);
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
const myNode5 = object.addCylinder();
myNode5.point1.set(-2.072,-3.445,-18.0999);
myNode5.point2.set(-2.072,-3.445,18.099999999999998);
myNode5.radius.set(0.376);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.isVisible = False

/* définition du node n°6*/
const myNode6 = object.addCylinder();
myNode6.point1.set(-3.446,-3.444,-18.0999);
myNode6.point2.set(-3.446,-3.444,18.099999999999998);
myNode6.radius.set(0.388);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.isVisible = False

/* définition du node n°7*/
const myNode7 = object.addFuseOperation();
myNode7.leftArg.set(myNode5);
myNode7.rightArg.set(myNode6);
myNode7.isVisible = False

/* définition du node n°8*/
const myNode8 = object.addCutOperation();
myNode8.leftArg.set(myNode4);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = False

/* définition du node n°9*/
const myNode9 = object.addCylinder();
myNode9.point1.set(0.599,0.811,-18.0999);
myNode9.point2.set(0.599,0.811,18.099999999999998);
myNode9.radius.set(0.704);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(-1.3671625151710542,1.916695925690334,0.6375166719295208);
myNode9.innerRotation.angle.set(2.4391154383166986);
myNode9.isVisible = False

/* définition du node n°10*/
const myNode10 = object.addCylinder();
myNode10.point1.set(-2.701,-3.772,-18.1);
myNode10.point2.set(-2.701,-3.772,18.099899999999998);
myNode10.radius.set(0.623);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(1.0030512563647358,2.1029311504841517,-0.45711438050778924);
myNode10.innerRotation.angle.set(2.3743177553643684);
myNode10.isVisible = False

/* définition du node n°11*/
const myNode11 = object.addCommonOperation();
myNode11.leftArg.set(myNode9);
myNode11.rightArg.set(myNode10);
myNode11.isVisible = False

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(-2.072,-3.443,0.94405);
myNode12.point2.set(-2.072,-3.443,18.09995);
myNode12.radius.set(0.443);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);
myNode12.isVisible = False

/* définition du node n°13*/
const myNode13 = object.addFuseOperation();
myNode13.leftArg.set(myNode11);
myNode13.rightArg.set(myNode12);
myNode13.isVisible = False

/* définition du node n°14*/
const myNode14 = object.addCutOperation();
myNode14.leftArg.set(myNode8);
myNode14.rightArg.set(myNode13);
myNode14.isVisible = False

/* définition du node n°15*/
const myNode15 = object.addBox();
myNode15.point1.set(-4.5559,-4.9999,-18.0999);
myNode15.point2.set(18.099899999999998,-4.1891,-0.7221000000000011);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);
myNode15.isVisible = False

/* définition du node n°16*/
const myNode16 = object.addBox();
myNode16.point1.set(-4.5559,-4.1889,-2.0559);
myNode16.point2.set(-2.7781000000000002,-2.0331,-0.7230999999999999);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);
myNode16.isVisible = False

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(-2.7779,-4.8559,-2.0559);
myNode17.point2.set(2.7779,-2.0341,18.099899999999998);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.isVisible = False

/* définition du node n°18*/
const myNode18_1 = object.addFuseOperation();
myNode18_1.leftArg.set(myNode15);
myNode18_1.rightArg.set(myNode15);
const myNode18_2 = object.addFuseOperation();
myNode18_2.leftArg.set(myNode18_1);
myNode18_2.rightArg.set(myNode16);
myNode18 = object.addFuseOperation();
myNode18.leftArg.set(myNode18_2);
myNode18.rightArg.set(myNode17);
myNode18.isVisible = False

/* définition du node n°19*/
const myNode19 = object.addCylinder();
myNode19.point1.set(-1.002,-3.81,-18.1);
myNode19.point2.set(-1.002,-3.81,18.099899999999998);
myNode19.radius.set(0.686);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(-0.08954948905302097,0.8520044685420913,0.19649850658015844);
myNode19.innerRotation.angle.set(0.8789439052030461);
myNode19.isVisible = False

/* définition du node n°20*/
const myNode20 = object.addCylinder();
myNode20.point1.set(0.498,1.769,-18.0999);
myNode20.point2.set(0.498,1.769,18.099999999999998);
myNode20.radius.set(0.706);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.6312237032526069,0.6888596675526804,-1.3850945866822204);
myNode20.innerRotation.angle.set(1.6707656984703496);
myNode20.isVisible = False

/* définition du node n°21*/
const myNode21 = object.addCommonOperation();
myNode21.leftArg.set(myNode19);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = False

/* définition du node n°22*/
const myNode22 = object.addCylinder();
myNode22.point1.set(-2.046,5.56361e-32,-18.0999);
myNode22.point2.set(-2.046,5.56361e-32,18.099999999999998);
myNode22.radius.set(1.789);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode22.innerRotation.angle.set(2.094392392986396);
myNode22.isVisible = False

/* définition du node n°23*/
const myNode23 = object.addCylinder();
myNode23.point1.set(2.075,-3.445,-0.72195);
myNode23.point2.set(2.075,-3.445,18.09995);
myNode23.radius.set(0.442);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);
myNode23.isVisible = False

/* définition du node n°24*/
const myNode24_1 = object.addFuseOperation();
myNode24_1.leftArg.set(myNode21);
myNode24_1.rightArg.set(myNode21);
const myNode24_2 = object.addFuseOperation();
myNode24_2.leftArg.set(myNode24_1);
myNode24_2.rightArg.set(myNode22);
myNode24 = object.addFuseOperation();
myNode24.leftArg.set(myNode24_2);
myNode24.rightArg.set(myNode23);
myNode24.isVisible = False

/* définition du node n°25*/
const myNode25 = object.addCutOperation();
myNode25.leftArg.set(myNode18);
myNode25.rightArg.set(myNode24);
myNode25.isVisible = False

/* définition du node n°26*/
const myNode26 = object.addCommonOperation();
myNode26.leftArg.set(myNode14);
myNode26.rightArg.set(myNode25);
myNode26.isVisible = False

/* définition du node n°27*/
const myNode27 = object.addBox();
myNode27.point1.set(-2.7779,1.8891,-2.0559);
myNode27.point2.set(4.5549,3.8719,-1.3891);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);
myNode27.isVisible = False

/* définition du node n°28*/
const myNode28 = object.addCylinder();
myNode28.point1.set(3.444,3.445,-2.05595);
myNode28.point2.set(3.444,3.445,18.09995);
myNode28.radius.set(0.389);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(0.0,0.0,0.0);
myNode28.innerRotation.angle.set(0.0);
myNode28.isVisible = False

/* définition du node n°29*/
const myNode29 = object.addCutOperation();
myNode29.leftArg.set(myNode27);
myNode29.rightArg.set(myNode28);
myNode29.isVisible = False

/* définition du node n°30*/
const myNode30 = object.addBox();
myNode30.point1.set(-3.4299,3.8721,-2.0559);
myNode30.point2.set(3.4459,4.9999,-0.7230999999999999);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);
myNode30.isVisible = False

/* définition du node n°31*/
const myNode31 = object.addBox();
myNode31.point1.set(-4.5559,-2.0329,-1.6099);
myNode31.point2.set(4.554899999999999,3.8718999999999997,-0.7221000000000001);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(0.0,0.0,0.0);
myNode31.innerRotation.angle.set(0.0);
myNode31.isVisible = False

/* définition du node n°32*/
const myNode32 = object.addCylinder();
myNode32.point1.set(3.446,3.888,-2.0559);
myNode32.point2.set(3.446,3.888,18.099899999999998);
myNode32.radius.set(1.108);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);
myNode32.isVisible = False

/* définition du node n°33*/
const myNode33 = object.addBox();
myNode33.point1.set(-18.0999,1.8891,-2.0559);
myNode33.point2.set(2.777899999999999,3.8719,-1.6111);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);
myNode33.isVisible = False

/* définition du node n°34*/
const myNode34 = object.addCylinder();
myNode34.point1.set(-3.43,3.872,-2.0559);
myNode34.point2.set(-3.43,3.872,18.099899999999998);
myNode34.radius.set(1.129);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(0.0,0.0,0.0);
myNode34.innerRotation.angle.set(0.0);
myNode34.isVisible = False

/* définition du node n°35*/
const myNode35_1 = object.addFuseOperation();
myNode35_1.leftArg.set(myNode30);
myNode35_1.rightArg.set(myNode30);
const myNode35_2 = object.addFuseOperation();
myNode35_2.leftArg.set(myNode35_1);
myNode35_2.rightArg.set(myNode31);
const myNode35_3 = object.addFuseOperation();
myNode35_3.leftArg.set(myNode35_2);
myNode35_3.rightArg.set(myNode32);
const myNode35_4 = object.addFuseOperation();
myNode35_4.leftArg.set(myNode35_3);
myNode35_4.rightArg.set(myNode33);
myNode35 = object.addFuseOperation();
myNode35.leftArg.set(myNode35_4);
myNode35.rightArg.set(myNode34);
myNode35.isVisible = False

/* définition du node n°36*/
const myNode36 = object.addBox();
myNode36.point1.set(-3.8439,1.0001,-1.6099);
myNode36.point2.set(3.8439,1.8889,-0.7221000000000001);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(0.0,0.0,0.0);
myNode36.innerRotation.angle.set(0.0);
myNode36.isVisible = False

/* définition du node n°37*/
const myNode37 = object.addCylinder();
myNode37.point1.set(0.923,-4.53,-2.0329);
myNode37.point2.set(0.923,-4.53,1.8889);
myNode37.radius.set(0.247);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode37.innerRotation.angle.set(2.094392392986396);
myNode37.isVisible = False

/* définition du node n°38*/
const myNode38 = object.addBox();
myNode38.point1.set(-4.5559,1.8891,-2.0559);
myNode38.point2.set(18.099899999999998,4.9999,-0.7230999999999999);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(0.0,0.0,0.0);
myNode38.innerRotation.angle.set(0.0);
myNode38.isVisible = False

/* définition du node n°39*/
const myNode39 = object.addCylinder();
myNode39.point1.set(-3.444,3.445,-1.38895);
myNode39.point2.set(-3.444,3.445,18.09995);
myNode39.radius.set(0.665);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(0.0,0.0,0.0);
myNode39.innerRotation.angle.set(0.0);
myNode39.isVisible = False

/* définition du node n°40*/
const myNode40 = object.addCutOperation();
myNode40.leftArg.set(myNode38);
myNode40.rightArg.set(myNode39);
myNode40.isVisible = False

/* définition du node n°41*/
const myNode41 = object.addCylinder();
myNode41.point1.set(3.445,3.444,-18.0999);
myNode41.point2.set(3.445,3.444,18.099999999999998);
myNode41.radius.set(0.666);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,0.0,0.0);
myNode41.innerRotation.angle.set(0.0);
myNode41.isVisible = False

/* définition du node n°42*/
const myNode42 = object.addCylinder();
myNode42.point1.set(-3.445,3.444,-18.0999);
myNode42.point2.set(-3.445,3.444,-1.389000000000003);
myNode42.radius.set(0.387);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0,0.0,0.0);
myNode42.innerRotation.angle.set(0.0);
myNode42.isVisible = False

/* définition du node n°43*/
const myNode43 = object.addFuseOperation();
myNode43.leftArg.set(myNode41);
myNode43.rightArg.set(myNode42);
myNode43.isVisible = False

/* définition du node n°44*/
const myNode44 = object.addCutOperation();
myNode44.leftArg.set(myNode40);
myNode44.rightArg.set(myNode43);
myNode44.isVisible = False

/* définition du node n°45*/
const myNode45 = object.addCylinder();
myNode45.point1.set(0.925,4.529,-2.0329);
myNode45.point2.set(0.925,4.529,4.9999);
myNode45.radius.set(0.246);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode45.innerRotation.angle.set(2.094392392986396);
myNode45.isVisible = False

/* définition du node n°46*/
const myNode46 = object.addBox();
myNode46.point1.set(2.7781,3.8721,-2.0559);
myNode46.point2.set(3.8449,4.9999,-1.3891);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(0.0,0.0,0.0);
myNode46.innerRotation.angle.set(0.0);
myNode46.isVisible = False

/* définition du node n°47*/
const myNode47_1 = object.addFuseOperation();
myNode47_1.leftArg.set(myNode36);
myNode47_1.rightArg.set(myNode36);
const myNode47_2 = object.addFuseOperation();
myNode47_2.leftArg.set(myNode47_1);
myNode47_2.rightArg.set(myNode37);
const myNode47_3 = object.addFuseOperation();
myNode47_3.leftArg.set(myNode47_2);
myNode47_3.rightArg.set(myNode44);
const myNode47_4 = object.addFuseOperation();
myNode47_4.leftArg.set(myNode47_3);
myNode47_4.rightArg.set(myNode45);
myNode47 = object.addFuseOperation();
myNode47.leftArg.set(myNode47_4);
myNode47.rightArg.set(myNode46);
myNode47.isVisible = False

/* définition du node n°48*/
const myNode48 = object.addCommonOperation();
myNode48.leftArg.set(myNode35);
myNode48.rightArg.set(myNode47);
myNode48.isVisible = False

/* définition du node n°49*/
const myNode49 = object.addBox();
myNode49.point1.set(-2.7779,-4.1889,-0.7219);
myNode49.point2.set(2.7779,-2.8561000000000005,0.9449000000000001);
myNode49.innerRotation.center.set(0,0,0);
myNode49.innerRotation.axis.set(0.0,0.0,0.0);
myNode49.innerRotation.angle.set(0.0);
myNode49.isVisible = False

/* définition du node n°50*/
const myNode50 = object.addCylinder();
myNode50.point1.set(-2.046,3.95585e-21,-4.1889);
myNode50.point2.set(-2.046,3.95585e-21,-2.8561000000000005);
myNode50.radius.set(1.789);
myNode50.innerRotation.center.set(0,0,0);
myNode50.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode50.innerRotation.angle.set(2.094392392986396);
myNode50.isVisible = False

/* définition du node n°51*/
const myNode51 = object.addFuseOperation();
myNode51.leftArg.set(myNode49);
myNode51.rightArg.set(myNode50);
myNode51.isVisible = False

/* définition du node n°52*/
const myNode52 = object.addCylinder();
myNode52.point1.set(2.075,-3.445,0.94405);
myNode52.point2.set(2.075,-3.445,18.09995);
myNode52.radius.set(0.442);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,0.0,0.0);
myNode52.innerRotation.angle.set(0.0);
myNode52.isVisible = False

/* définition du node n°53*/
const myNode53 = object.addCylinder();
myNode53.point1.set(-2.072,-3.443,-0.72195);
myNode53.point2.set(-2.072,-3.443,18.09995);
myNode53.radius.set(0.443);
myNode53.innerRotation.center.set(0,0,0);
myNode53.innerRotation.axis.set(0.0,0.0,0.0);
myNode53.innerRotation.angle.set(0.0);
myNode53.isVisible = False

/* définition du node n°54*/
const myNode54 = object.addFuseOperation();
myNode54.leftArg.set(myNode52);
myNode54.rightArg.set(myNode53);
myNode54.isVisible = False

/* définition du node n°55*/
const myNode55 = object.addCutOperation();
myNode55.leftArg.set(myNode51);
myNode55.rightArg.set(myNode54);
myNode55.isVisible = False

/* définition du node n°56*/
const myNode56 = object.addCylinder();
myNode56.point1.set(-2.072,-3.442,-0.94395);
myNode56.point2.set(-2.072,-3.442,1.38895);
myNode56.radius.set(0.376);
myNode56.innerRotation.center.set(0,0,0);
myNode56.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode56.innerRotation.angle.set(3.141592653586273);
myNode56.isVisible = False

/* définition du node n°57*/
const myNode57 = object.addCylinder();
myNode57.point1.set(-2.042,0.003,-4.18895);
myNode57.point2.set(-2.042,0.003,-2.85605);
myNode57.radius.set(1.338);
myNode57.innerRotation.center.set(0,0,0);
myNode57.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode57.innerRotation.angle.set(2.094392392986396);
myNode57.isVisible = False

/* définition du node n°58*/
const myNode58 = object.addBox();
myNode58.point1.set(-2.77795,-18.0999,2.05605);
myNode58.point2.set(4.55495,-2.0330000000000013,18.100949999999997);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(0.0,0.0,0.0);
myNode58.innerRotation.angle.set(0.0);
myNode58.isVisible = False

/* définition du node n°59*/
const myNode59 = object.addCylinder();
myNode59.point1.set(-2.702,-3.803,-18.1);
myNode59.point2.set(-2.702,-3.803,18.099899999999998);
myNode59.radius.set(0.685);
myNode59.innerRotation.center.set(0,0,0);
myNode59.innerRotation.axis.set(-0.24106997465000793,2.2935798886533565,0.10733370184429875);
myNode59.innerRotation.angle.set(2.3087104543152437);
myNode59.isVisible = False

/* définition du node n°60*/
const myNode60_1 = object.addFuseOperation();
myNode60_1.leftArg.set(myNode56);
myNode60_1.rightArg.set(myNode56);
const myNode60_2 = object.addFuseOperation();
myNode60_2.leftArg.set(myNode60_1);
myNode60_2.rightArg.set(myNode57);
const myNode60_3 = object.addFuseOperation();
myNode60_3.leftArg.set(myNode60_2);
myNode60_3.rightArg.set(myNode58);
myNode60 = object.addFuseOperation();
myNode60.leftArg.set(myNode60_3);
myNode60.rightArg.set(myNode59);
myNode60.isVisible = False

/* définition du node n°61*/
const myNode61 = object.addCutOperation();
myNode61.leftArg.set(myNode55);
myNode61.rightArg.set(myNode60);
myNode61.isVisible = False

/* définition du node n°62*/
const myNode62 = object.addCylinder();
myNode62.point1.set(0.498,1.769,-18.0999);
myNode62.point2.set(0.498,1.769,18.0999);
myNode62.radius.set(0.706);
myNode62.innerRotation.center.set(0,0,0);
myNode62.innerRotation.axis.set(0.6312237032526069,0.6888596675526804,-1.3850945866822204);
myNode62.innerRotation.angle.set(1.6707656984703496);
myNode62.isVisible = False

/* définition du node n°63*/
const myNode63 = object.addCylinder();
myNode63.point1.set(-4.478,0.0449959,-18.0999);
myNode63.point2.set(-4.478,0.0449959,18.099999999999998);
myNode63.radius.set(0.649);
myNode63.innerRotation.center.set(0,0,0);
myNode63.innerRotation.axis.set(1.1818899113977008,2.047107745131362,-0.5262090847453613);
myNode63.innerRotation.angle.set(2.4216543691677033);
myNode63.isVisible = False

/* définition du node n°64*/
const myNode64 = object.addCutOperation();
myNode64.leftArg.set(myNode62);
myNode64.rightArg.set(myNode63);
myNode64.isVisible = False

/* définition du node n°65*/
const myNode65 = object.addBox();
myNode65.point1.set(-2.7779,-4.8559,-0.7219);
myNode65.point2.set(2.7779,-2.8561,2.0559000000000003);
myNode65.innerRotation.center.set(0,0,0);
myNode65.innerRotation.axis.set(0.0,0.0,0.0);
myNode65.innerRotation.angle.set(0.0);
myNode65.isVisible = False

/* définition du node n°66*/
const myNode66 = object.addCylinder();
myNode66.point1.set(2.075,-3.445,-2.05595);
myNode66.point2.set(2.075,-3.445,18.09995);
myNode66.radius.set(0.442);
myNode66.innerRotation.center.set(0,0,0);
myNode66.innerRotation.axis.set(0.0,0.0,0.0);
myNode66.innerRotation.angle.set(0.0);
myNode66.isVisible = False

/* définition du node n°67*/
const myNode67 = object.addCutOperation();
myNode67.leftArg.set(myNode65);
myNode67.rightArg.set(myNode66);
myNode67.isVisible = False

/* définition du node n°68*/
const myNode68 = object.addCommonOperation();
myNode68.leftArg.set(myNode64);
myNode68.rightArg.set(myNode67);
myNode68.isVisible = False

/* définition du node n°69*/
const myNode69 = object.addBox();
myNode69.point1.set(-4.0619,1.0001,-2.0559);
myNode69.point2.set(-3.8440999999999996,1.8889,-1.3891);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(0.0,0.0,0.0);
myNode69.innerRotation.angle.set(0.0);
myNode69.isVisible = False

/* définition du node n°70*/
const myNode70 = object.addCylinder();
myNode70.point1.set(1.397,4.062,-18.0999);
myNode70.point2.set(1.397,4.062,1.8889999999999993);
myNode70.radius.set(0.213);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode70.innerRotation.angle.set(2.094392392986396);
myNode70.isVisible = False

/* définition du node n°71*/
const myNode71 = object.addCutOperation();
myNode71.leftArg.set(myNode69);
myNode71.rightArg.set(myNode70);
myNode71.isVisible = False

/* définition du node n°72*/
const myNode72 = object.addBox();
myNode72.point1.set(-2.7779,-2.8549,-2.0559);
myNode72.point2.set(2.7779,-2.0331,0.9439000000000002);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(0.0,0.0,0.0);
myNode72.innerRotation.angle.set(0.0);
myNode72.isVisible = False

/* définition du node n°73*/
const myNode73 = object.addCylinder();
myNode73.point1.set(-2.046,4.38538e-21,-18.0999);
myNode73.point2.set(-2.046,4.38538e-21,1.0);
myNode73.radius.set(1.789);
myNode73.innerRotation.center.set(0,0,0);
myNode73.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode73.innerRotation.angle.set(2.094392392986396);
myNode73.isVisible = False

/* définition du node n°74*/
const myNode74 = object.addCutOperation();
myNode74.leftArg.set(myNode72);
myNode74.rightArg.set(myNode73);
myNode74.isVisible = False

/* définition du node n°75*/
const myNode75 = object.addBox();
myNode75.point1.set(3.8441,1.0001,-1.6099);
myNode75.point2.set(4.0929,3.8719,-1.3891);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(0.0,0.0,0.0);
myNode75.innerRotation.angle.set(0.0);
myNode75.isVisible = False

/* définition du node n°76*/
const myNode76 = object.addBox();
myNode76.point1.set(-4.5559,-2.0329,-1.6099);
myNode76.point2.set(4.554899999999999,0.9998999999999998,-0.7221000000000001);
myNode76.innerRotation.center.set(0,0,0);
myNode76.innerRotation.axis.set(0.0,0.0,0.0);
myNode76.innerRotation.angle.set(0.0);
myNode76.isVisible = False

/* définition du node n°77*/
const myNode77_1 = object.addFuseOperation();
myNode77_1.leftArg.set(myNode74);
myNode77_1.rightArg.set(myNode74);
const myNode77_2 = object.addFuseOperation();
myNode77_2.leftArg.set(myNode77_1);
myNode77_2.rightArg.set(myNode75);
myNode77 = object.addFuseOperation();
myNode77.leftArg.set(myNode77_2);
myNode77.rightArg.set(myNode76);
myNode77.isVisible = False

/* définition du node n°78*/
const myNode78 = object.addCylinder();
myNode78.point1.set(1.369,-4.093,1.00005);
myNode78.point2.set(1.369,-4.093,1.8889500000000001);
myNode78.radius.set(0.254);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode78.innerRotation.angle.set(2.094392392986396);
myNode78.isVisible = False

/* définition du node n°79*/
const myNode79 = object.addCutOperation();
myNode79.leftArg.set(myNode77);
myNode79.rightArg.set(myNode78);
myNode79.isVisible = False

/* définition du node n°80*/
const myNode80 = object.addBox();
myNode80.point1.set(-2.7779,-4.9999,-2.0559);
myNode80.point2.set(4.5549,-2.0331,0.9439000000000002);
myNode80.innerRotation.center.set(0,0,0);
myNode80.innerRotation.axis.set(0.0,0.0,0.0);
myNode80.innerRotation.angle.set(0.0);
myNode80.isVisible = False

/* définition du node n°81*/
const myNode81 = object.addCylinder();
myNode81.point1.set(3.444,-3.445,-1.38895);
myNode81.point2.set(3.444,-3.445,-0.7220499999999999);
myNode81.radius.set(0.664);
myNode81.innerRotation.center.set(0,0,0);
myNode81.innerRotation.axis.set(0.0,0.0,0.0);
myNode81.innerRotation.angle.set(0.0);
myNode81.isVisible = False

/* définition du node n°82*/
const myNode82 = object.addCutOperation();
myNode82.leftArg.set(myNode80);
myNode82.rightArg.set(myNode81);
myNode82.isVisible = False

/* définition du node n°83*/
const myNode83 = object.addBox();
myNode83.point1.set(-2.77795,-4.99995,-0.72195);
myNode83.point2.set(4.55495,-2.0330500000000002,2.0559499999999997);
myNode83.innerRotation.center.set(0,0,0);
myNode83.innerRotation.axis.set(0.0,0.0,0.0);
myNode83.innerRotation.angle.set(0.0);
myNode83.isVisible = False

/* définition du node n°84*/
const myNode84 = object.addCylinder();
myNode84.point1.set(3.445,-3.445,-2.05595);
myNode84.point2.set(3.445,-3.445,-1.3890500000000001);
myNode84.radius.set(0.388);
myNode84.innerRotation.center.set(0,0,0);
myNode84.innerRotation.axis.set(0.0,0.0,0.0);
myNode84.innerRotation.angle.set(0.0);
myNode84.isVisible = False

/* définition du node n°85*/
const myNode85 = object.addFuseOperation();
myNode85.leftArg.set(myNode83);
myNode85.rightArg.set(myNode84);
myNode85.isVisible = False

/* définition du node n°86*/
const myNode86 = object.addCutOperation();
myNode86.leftArg.set(myNode82);
myNode86.rightArg.set(myNode85);
myNode86.isVisible = False

/* définition du node n°87*/
const myNode87_1 = object.addFuseOperation();
myNode87_1.leftArg.set(myNode1);
myNode87_1.rightArg.set(myNode1);
const myNode87_2 = object.addFuseOperation();
myNode87_2.leftArg.set(myNode87_1);
myNode87_2.rightArg.set(myNode26);
const myNode87_3 = object.addFuseOperation();
myNode87_3.leftArg.set(myNode87_2);
myNode87_3.rightArg.set(myNode29);
const myNode87_4 = object.addFuseOperation();
myNode87_4.leftArg.set(myNode87_3);
myNode87_4.rightArg.set(myNode48);
const myNode87_5 = object.addFuseOperation();
myNode87_5.leftArg.set(myNode87_4);
myNode87_5.rightArg.set(myNode61);
const myNode87_6 = object.addFuseOperation();
myNode87_6.leftArg.set(myNode87_5);
myNode87_6.rightArg.set(myNode68);
const myNode87_7 = object.addFuseOperation();
myNode87_7.leftArg.set(myNode87_6);
myNode87_7.rightArg.set(myNode71);
const myNode87_8 = object.addFuseOperation();
myNode87_8.leftArg.set(myNode87_7);
myNode87_8.rightArg.set(myNode79);
myNode87 = object.addFuseOperation();
myNode87.leftArg.set(myNode87_8);
myNode87.rightArg.set(myNode86);
myNode87.isVisible = False

/* définition du node n°88*/
const myNode88 = object.addCommonOperation();
myNode88.leftArg.set(myNode0);
myNode88.rightArg.set(myNode87);
myNode88.isVisible = True


/*END Geometry Object Definition*/