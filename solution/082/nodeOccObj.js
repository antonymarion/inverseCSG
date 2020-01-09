/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.4669,-5.9999,-2.4669);
myNode0.point2.set(5.4659,5.9999,2.4659000000000004);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(0,0,0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-4.5559,-2.0329,-2.0559);
myNode1.point2.set(4.554899999999999,1.8889,-1.6111);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.innerTranslation.vector.set(0,0,0);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-2.7779,-4.9999,-2.0559);
myNode2.point2.set(4.5549,-2.0331,0.9439000000000002);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.innerTranslation.vector.set(0,0,0);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(3.444,-3.445,-1.38895);
myNode3.point2.set(3.444,-3.445,-0.7220499999999999);
myNode3.radius.set(0.664);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addCutOperation();
myNode4.leftArg.set(myNode2);
myNode4.rightArg.set(myNode3);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(3.445,-3.445,-2.05595);
myNode5.point2.set(3.445,-3.445,-1.3890500000000001);
myNode5.radius.set(0.388);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addBox();
myNode6.point1.set(-2.77795,-4.99995,-0.72195);
myNode6.point2.set(4.55495,-2.0330500000000002,2.0559499999999997);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.innerTranslation.vector.set(0,0,0);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addFuseOperation();
myNode7.leftArg.set(myNode5);
myNode7.rightArg.set(myNode6);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addCutOperation();
myNode8.leftArg.set(myNode4);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(-4.5559,-2.0329,-1.6099);
myNode9.point2.set(4.554899999999999,0.9998999999999998,-0.7221000000000001);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.innerTranslation.vector.set(0,0,0);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(-2.7779,-2.8549,-2.0559);
myNode10.point2.set(2.7779,-2.0331,0.9439000000000002);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.innerTranslation.vector.set(0,0,0);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addCylinder();
myNode11.point1.set(-2.046,4.38538e-21,-18.0999);
myNode11.point2.set(-2.046,4.38538e-21,1.0);
myNode11.radius.set(1.789);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode11.innerRotation.angle.set(119.9998447624254);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCutOperation();
myNode12.leftArg.set(myNode10);
myNode12.rightArg.set(myNode11);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addBox();
myNode13.point1.set(3.8441,1.0001,-1.6099);
myNode13.point2.set(4.0929,3.8719,-1.3891);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);
myNode13.innerTranslation.vector.set(0,0,0);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14_1 = myNode9.clone();
myNode14_1.isVisible = false;
const myNode14_2 = object.addFuseOperation();
myNode14_2.leftArg.set(myNode14_1);
myNode14_2.rightArg.set(myNode12);
myNode14_2.isVisible = false;
myNode14 = object.addFuseOperation();
myNode14.leftArg.set(myNode14_2);
myNode14.rightArg.set(myNode13);
myNode14.isVisible = false;
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addCylinder();
myNode15.point1.set(1.369,-4.093,1.00005);
myNode15.point2.set(1.369,-4.093,1.8889500000000001);
myNode15.radius.set(0.254);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode15.innerRotation.angle.set(119.9998447624254);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addCutOperation();
myNode16.leftArg.set(myNode14);
myNode16.rightArg.set(myNode15);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(-4.5559,-4.9999,-2.0559);
myNode17.point2.set(2.7768999999999995,-2.0331,2.0549000000000004);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.innerTranslation.vector.set(0,0,0);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(-3.444,-3.443,-1.38895);
myNode18.point2.set(-3.444,-3.443,-0.7220499999999999);
myNode18.radius.set(0.663);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addCutOperation();
myNode19.leftArg.set(myNode17);
myNode19.rightArg.set(myNode18);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addCylinder();
myNode20.point1.set(-3.446,-3.444,-18.0999);
myNode20.point2.set(-3.446,-3.444,18.099999999999998);
myNode20.radius.set(0.388);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addCylinder();
myNode21.point1.set(-2.072,-3.445,-18.0999);
myNode21.point2.set(-2.072,-3.445,18.099999999999998);
myNode21.radius.set(0.376);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addFuseOperation();
myNode22.leftArg.set(myNode20);
myNode22.rightArg.set(myNode21);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addCutOperation();
myNode23.leftArg.set(myNode19);
myNode23.rightArg.set(myNode22);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addCylinder();
myNode24.point1.set(0.599,0.811,-18.0999);
myNode24.point2.set(0.599,0.811,18.099999999999998);
myNode24.radius.set(0.704);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(-1.3671625151710542,1.916695925690334,0.6375166719295208);
myNode24.innerRotation.angle.set(139.75102036074873);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addCylinder();
myNode25.point1.set(-2.701,-3.772,-18.1);
myNode25.point2.set(-2.701,-3.772,18.099899999999998);
myNode25.radius.set(0.623);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(1.0030512563647358,2.1029311504841517,-0.45711438050778924);
myNode25.innerRotation.angle.set(136.0383866053534);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addCommonOperation();
myNode26.leftArg.set(myNode24);
myNode26.rightArg.set(myNode25);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addCylinder();
myNode27.point1.set(-2.072,-3.443,0.94405);
myNode27.point2.set(-2.072,-3.443,18.09995);
myNode27.radius.set(0.443);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addFuseOperation();
myNode28.leftArg.set(myNode26);
myNode28.rightArg.set(myNode27);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addCutOperation();
myNode29.leftArg.set(myNode23);
myNode29.rightArg.set(myNode28);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addBox();
myNode30.point1.set(-4.5559,-4.9999,-18.0999);
myNode30.point2.set(18.099899999999998,-4.1891,-0.7221000000000011);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);
myNode30.innerTranslation.vector.set(0,0,0);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addBox();
myNode31.point1.set(-2.7779,-4.8559,-2.0559);
myNode31.point2.set(2.7779,-2.0341,18.099899999999998);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(0.0,0.0,0.0);
myNode31.innerRotation.angle.set(0.0);
myNode31.innerTranslation.vector.set(0,0,0);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addBox();
myNode32.point1.set(-4.5559,-4.1889,-2.0559);
myNode32.point2.set(-2.7781000000000002,-2.0331,-0.7230999999999999);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);
myNode32.innerTranslation.vector.set(0,0,0);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33_1 = myNode30.clone();
myNode33_1.isVisible = false;
const myNode33_2 = object.addFuseOperation();
myNode33_2.leftArg.set(myNode33_1);
myNode33_2.rightArg.set(myNode31);
myNode33_2.isVisible = false;
myNode33 = object.addFuseOperation();
myNode33.leftArg.set(myNode33_2);
myNode33.rightArg.set(myNode32);
myNode33.isVisible = false;
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addCylinder();
myNode34.point1.set(-2.046,5.56361e-32,-18.0999);
myNode34.point2.set(-2.046,5.56361e-32,18.099999999999998);
myNode34.radius.set(1.789);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode34.innerRotation.angle.set(119.9998447624254);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addCylinder();
myNode35.point1.set(0.498,1.769,-18.0999);
myNode35.point2.set(0.498,1.769,18.099999999999998);
myNode35.radius.set(0.706);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.6312237032526069,0.6888596675526804,-1.3850945866822204);
myNode35.innerRotation.angle.set(95.72782307757814);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addCylinder();
myNode36.point1.set(-1.002,-3.81,-18.1);
myNode36.point2.set(-1.002,-3.81,18.099899999999998);
myNode36.radius.set(0.686);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(-0.08954948905302097,0.8520044685420913,0.19649850658015844);
myNode36.innerRotation.angle.set(50.35977619688126);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addCommonOperation();
myNode37.leftArg.set(myNode35);
myNode37.rightArg.set(myNode36);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addCylinder();
myNode38.point1.set(2.075,-3.445,-0.72195);
myNode38.point2.set(2.075,-3.445,18.09995);
myNode38.radius.set(0.442);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(0.0,0.0,0.0);
myNode38.innerRotation.angle.set(0.0);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39_1 = myNode34.clone();
myNode39_1.isVisible = false;
const myNode39_2 = object.addFuseOperation();
myNode39_2.leftArg.set(myNode39_1);
myNode39_2.rightArg.set(myNode37);
myNode39_2.isVisible = false;
myNode39 = object.addFuseOperation();
myNode39.leftArg.set(myNode39_2);
myNode39.rightArg.set(myNode38);
myNode39.isVisible = false;
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addCutOperation();
myNode40.leftArg.set(myNode33);
myNode40.rightArg.set(myNode39);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41 = object.addCommonOperation();
myNode41.leftArg.set(myNode29);
myNode41.rightArg.set(myNode40);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addBox();
myNode42.point1.set(-2.7779,1.8891,-2.0559);
myNode42.point2.set(4.5549,3.8719,-1.3891);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0,0.0,0.0);
myNode42.innerRotation.angle.set(0.0);
myNode42.innerTranslation.vector.set(0,0,0);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addCylinder();
myNode43.point1.set(3.444,3.445,-2.05595);
myNode43.point2.set(3.444,3.445,18.09995);
myNode43.radius.set(0.389);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(0.0,0.0,0.0);
myNode43.innerRotation.angle.set(0.0);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44 = object.addCutOperation();
myNode44.leftArg.set(myNode42);
myNode44.rightArg.set(myNode43);
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45 = object.addCylinder();
myNode45.point1.set(-2.046,3.95585e-21,-4.1889);
myNode45.point2.set(-2.046,3.95585e-21,-2.8561000000000005);
myNode45.radius.set(1.789);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode45.innerRotation.angle.set(119.9998447624254);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addBox();
myNode46.point1.set(-2.7779,-4.1889,-0.7219);
myNode46.point2.set(2.7779,-2.8561000000000005,0.9449000000000001);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(0.0,0.0,0.0);
myNode46.innerRotation.angle.set(0.0);
myNode46.innerTranslation.vector.set(0,0,0);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addFuseOperation();
myNode47.leftArg.set(myNode45);
myNode47.rightArg.set(myNode46);
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addCylinder();
myNode48.point1.set(-2.072,-3.443,-0.72195);
myNode48.point2.set(-2.072,-3.443,18.09995);
myNode48.radius.set(0.443);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);
myNode48.isVisible = false;

/* définition du node n°49*/
const myNode49 = object.addCylinder();
myNode49.point1.set(2.075,-3.445,0.94405);
myNode49.point2.set(2.075,-3.445,18.09995);
myNode49.radius.set(0.442);
myNode49.innerRotation.center.set(0,0,0);
myNode49.innerRotation.axis.set(0.0,0.0,0.0);
myNode49.innerRotation.angle.set(0.0);
myNode49.isVisible = false;

/* définition du node n°50*/
const myNode50 = object.addFuseOperation();
myNode50.leftArg.set(myNode48);
myNode50.rightArg.set(myNode49);
myNode50.isVisible = false;

/* définition du node n°51*/
const myNode51 = object.addCutOperation();
myNode51.leftArg.set(myNode47);
myNode51.rightArg.set(myNode50);
myNode51.isVisible = false;

/* définition du node n°52*/
const myNode52 = object.addBox();
myNode52.point1.set(-2.77795,-18.0999,2.05605);
myNode52.point2.set(4.55495,-2.0330000000000013,18.100949999999997);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,0.0,0.0);
myNode52.innerRotation.angle.set(0.0);
myNode52.innerTranslation.vector.set(0,0,0);
myNode52.isVisible = false;

/* définition du node n°53*/
const myNode53 = object.addCylinder();
myNode53.point1.set(-2.042,0.003,-4.18895);
myNode53.point2.set(-2.042,0.003,-2.85605);
myNode53.radius.set(1.338);
myNode53.innerRotation.center.set(0,0,0);
myNode53.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode53.innerRotation.angle.set(119.9998447624254);
myNode53.isVisible = false;

/* définition du node n°54*/
const myNode54 = object.addCylinder();
myNode54.point1.set(-2.072,-3.442,-0.94395);
myNode54.point2.set(-2.072,-3.442,1.38895);
myNode54.radius.set(0.376);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode54.innerRotation.angle.set(179.9999999997983);
myNode54.isVisible = false;

/* définition du node n°55*/
const myNode55 = object.addCylinder();
myNode55.point1.set(-2.702,-3.803,-18.1);
myNode55.point2.set(-2.702,-3.803,18.099899999999998);
myNode55.radius.set(0.685);
myNode55.innerRotation.center.set(0,0,0);
myNode55.innerRotation.axis.set(-0.24106997465000793,2.2935798886533565,0.10733370184429875);
myNode55.innerRotation.angle.set(132.27936514999433);
myNode55.isVisible = false;

/* définition du node n°56*/
const myNode56_1 = myNode52.clone();
myNode56_1.isVisible = false;
const myNode56_2 = object.addFuseOperation();
myNode56_2.leftArg.set(myNode56_1);
myNode56_2.rightArg.set(myNode53);
myNode56_2.isVisible = false;
const myNode56_3 = object.addFuseOperation();
myNode56_3.leftArg.set(myNode56_2);
myNode56_3.rightArg.set(myNode54);
myNode56_3.isVisible = false;
myNode56 = object.addFuseOperation();
myNode56.leftArg.set(myNode56_3);
myNode56.rightArg.set(myNode55);
myNode56.isVisible = false;
myNode56.isVisible = false;

/* définition du node n°57*/
const myNode57 = object.addCutOperation();
myNode57.leftArg.set(myNode51);
myNode57.rightArg.set(myNode56);
myNode57.isVisible = false;

/* définition du node n°58*/
const myNode58 = object.addBox();
myNode58.point1.set(-2.7779,-4.8559,-0.7219);
myNode58.point2.set(2.7779,-2.8561,2.0559000000000003);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(0.0,0.0,0.0);
myNode58.innerRotation.angle.set(0.0);
myNode58.innerTranslation.vector.set(0,0,0);
myNode58.isVisible = false;

/* définition du node n°59*/
const myNode59 = object.addCylinder();
myNode59.point1.set(2.075,-3.445,-2.05595);
myNode59.point2.set(2.075,-3.445,18.09995);
myNode59.radius.set(0.442);
myNode59.innerRotation.center.set(0,0,0);
myNode59.innerRotation.axis.set(0.0,0.0,0.0);
myNode59.innerRotation.angle.set(0.0);
myNode59.isVisible = false;

/* définition du node n°60*/
const myNode60 = object.addCutOperation();
myNode60.leftArg.set(myNode58);
myNode60.rightArg.set(myNode59);
myNode60.isVisible = false;

/* définition du node n°61*/
const myNode61 = object.addCylinder();
myNode61.point1.set(0.498,1.769,-18.0999);
myNode61.point2.set(0.498,1.769,18.0999);
myNode61.radius.set(0.706);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(0.6312237032526069,0.6888596675526804,-1.3850945866822204);
myNode61.innerRotation.angle.set(95.72782307757814);
myNode61.isVisible = false;

/* définition du node n°62*/
const myNode62 = object.addCylinder();
myNode62.point1.set(-4.478,0.0449959,-18.0999);
myNode62.point2.set(-4.478,0.0449959,18.099999999999998);
myNode62.radius.set(0.649);
myNode62.innerRotation.center.set(0,0,0);
myNode62.innerRotation.axis.set(1.1818899113977008,2.047107745131362,-0.5262090847453613);
myNode62.innerRotation.angle.set(138.7505747927252);
myNode62.isVisible = false;

/* définition du node n°63*/
const myNode63 = object.addCutOperation();
myNode63.leftArg.set(myNode61);
myNode63.rightArg.set(myNode62);
myNode63.isVisible = false;

/* définition du node n°64*/
const myNode64 = object.addCommonOperation();
myNode64.leftArg.set(myNode60);
myNode64.rightArg.set(myNode63);
myNode64.isVisible = false;

/* définition du node n°65*/
const myNode65 = object.addCylinder();
myNode65.point1.set(0.923,-4.53,-2.0329);
myNode65.point2.set(0.923,-4.53,1.8889);
myNode65.radius.set(0.247);
myNode65.innerRotation.center.set(0,0,0);
myNode65.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode65.innerRotation.angle.set(119.9998447624254);
myNode65.isVisible = false;

/* définition du node n°66*/
const myNode66 = object.addCylinder();
myNode66.point1.set(0.925,4.529,-2.0329);
myNode66.point2.set(0.925,4.529,4.9999);
myNode66.radius.set(0.246);
myNode66.innerRotation.center.set(0,0,0);
myNode66.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode66.innerRotation.angle.set(119.9998447624254);
myNode66.isVisible = false;

/* définition du node n°67*/
const myNode67 = object.addBox();
myNode67.point1.set(-3.8439,1.0001,-1.6099);
myNode67.point2.set(3.8439,1.8889,-0.7221000000000001);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(0.0,0.0,0.0);
myNode67.innerRotation.angle.set(0.0);
myNode67.innerTranslation.vector.set(0,0,0);
myNode67.isVisible = false;

/* définition du node n°68*/
const myNode68 = object.addBox();
myNode68.point1.set(-4.5559,1.8891,-2.0559);
myNode68.point2.set(18.099899999999998,4.9999,-0.7230999999999999);
myNode68.innerRotation.center.set(0,0,0);
myNode68.innerRotation.axis.set(0.0,0.0,0.0);
myNode68.innerRotation.angle.set(0.0);
myNode68.innerTranslation.vector.set(0,0,0);
myNode68.isVisible = false;

/* définition du node n°69*/
const myNode69 = object.addCylinder();
myNode69.point1.set(-3.444,3.445,-1.38895);
myNode69.point2.set(-3.444,3.445,18.09995);
myNode69.radius.set(0.665);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(0.0,0.0,0.0);
myNode69.innerRotation.angle.set(0.0);
myNode69.isVisible = false;

/* définition du node n°70*/
const myNode70 = object.addCutOperation();
myNode70.leftArg.set(myNode68);
myNode70.rightArg.set(myNode69);
myNode70.isVisible = false;

/* définition du node n°71*/
const myNode71 = object.addCylinder();
myNode71.point1.set(-3.445,3.444,-18.0999);
myNode71.point2.set(-3.445,3.444,-1.389000000000003);
myNode71.radius.set(0.387);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(0.0,0.0,0.0);
myNode71.innerRotation.angle.set(0.0);
myNode71.isVisible = false;

/* définition du node n°72*/
const myNode72 = object.addCylinder();
myNode72.point1.set(3.445,3.444,-18.0999);
myNode72.point2.set(3.445,3.444,18.099999999999998);
myNode72.radius.set(0.666);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(0.0,0.0,0.0);
myNode72.innerRotation.angle.set(0.0);
myNode72.isVisible = false;

/* définition du node n°73*/
const myNode73 = object.addFuseOperation();
myNode73.leftArg.set(myNode71);
myNode73.rightArg.set(myNode72);
myNode73.isVisible = false;

/* définition du node n°74*/
const myNode74 = object.addCutOperation();
myNode74.leftArg.set(myNode70);
myNode74.rightArg.set(myNode73);
myNode74.isVisible = false;

/* définition du node n°75*/
const myNode75 = object.addBox();
myNode75.point1.set(2.7781,3.8721,-2.0559);
myNode75.point2.set(3.8449,4.9999,-1.3891);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(0.0,0.0,0.0);
myNode75.innerRotation.angle.set(0.0);
myNode75.innerTranslation.vector.set(0,0,0);
myNode75.isVisible = false;

/* définition du node n°76*/
const myNode76_1 = myNode65.clone();
myNode76_1.isVisible = false;
const myNode76_2 = object.addFuseOperation();
myNode76_2.leftArg.set(myNode76_1);
myNode76_2.rightArg.set(myNode66);
myNode76_2.isVisible = false;
const myNode76_3 = object.addFuseOperation();
myNode76_3.leftArg.set(myNode76_2);
myNode76_3.rightArg.set(myNode67);
myNode76_3.isVisible = false;
const myNode76_4 = object.addFuseOperation();
myNode76_4.leftArg.set(myNode76_3);
myNode76_4.rightArg.set(myNode74);
myNode76_4.isVisible = false;
myNode76 = object.addFuseOperation();
myNode76.leftArg.set(myNode76_4);
myNode76.rightArg.set(myNode75);
myNode76.isVisible = false;
myNode76.isVisible = false;

/* définition du node n°77*/
const myNode77 = object.addBox();
myNode77.point1.set(-3.4299,3.8721,-2.0559);
myNode77.point2.set(3.4459,4.9999,-0.7230999999999999);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(0.0,0.0,0.0);
myNode77.innerRotation.angle.set(0.0);
myNode77.innerTranslation.vector.set(0,0,0);
myNode77.isVisible = false;

/* définition du node n°78*/
const myNode78 = object.addBox();
myNode78.point1.set(-4.5559,-2.0329,-1.6099);
myNode78.point2.set(4.554899999999999,3.8718999999999997,-0.7221000000000001);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(0.0,0.0,0.0);
myNode78.innerRotation.angle.set(0.0);
myNode78.innerTranslation.vector.set(0,0,0);
myNode78.isVisible = false;

/* définition du node n°79*/
const myNode79 = object.addCylinder();
myNode79.point1.set(3.446,3.888,-2.0559);
myNode79.point2.set(3.446,3.888,18.099899999999998);
myNode79.radius.set(1.108);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(0.0,0.0,0.0);
myNode79.innerRotation.angle.set(0.0);
myNode79.isVisible = false;

/* définition du node n°80*/
const myNode80 = object.addBox();
myNode80.point1.set(-18.0999,1.8891,-2.0559);
myNode80.point2.set(2.777899999999999,3.8719,-1.6111);
myNode80.innerRotation.center.set(0,0,0);
myNode80.innerRotation.axis.set(0.0,0.0,0.0);
myNode80.innerRotation.angle.set(0.0);
myNode80.innerTranslation.vector.set(0,0,0);
myNode80.isVisible = false;

/* définition du node n°81*/
const myNode81 = object.addCylinder();
myNode81.point1.set(-3.43,3.872,-2.0559);
myNode81.point2.set(-3.43,3.872,18.099899999999998);
myNode81.radius.set(1.129);
myNode81.innerRotation.center.set(0,0,0);
myNode81.innerRotation.axis.set(0.0,0.0,0.0);
myNode81.innerRotation.angle.set(0.0);
myNode81.isVisible = false;

/* définition du node n°82*/
const myNode82_1 = myNode77.clone();
myNode82_1.isVisible = false;
const myNode82_2 = object.addFuseOperation();
myNode82_2.leftArg.set(myNode82_1);
myNode82_2.rightArg.set(myNode78);
myNode82_2.isVisible = false;
const myNode82_3 = object.addFuseOperation();
myNode82_3.leftArg.set(myNode82_2);
myNode82_3.rightArg.set(myNode79);
myNode82_3.isVisible = false;
const myNode82_4 = object.addFuseOperation();
myNode82_4.leftArg.set(myNode82_3);
myNode82_4.rightArg.set(myNode80);
myNode82_4.isVisible = false;
myNode82 = object.addFuseOperation();
myNode82.leftArg.set(myNode82_4);
myNode82.rightArg.set(myNode81);
myNode82.isVisible = false;
myNode82.isVisible = false;

/* définition du node n°83*/
const myNode83 = object.addCommonOperation();
myNode83.leftArg.set(myNode76);
myNode83.rightArg.set(myNode82);
myNode83.isVisible = false;

/* définition du node n°84*/
const myNode84 = object.addBox();
myNode84.point1.set(-4.0619,1.0001,-2.0559);
myNode84.point2.set(-3.8440999999999996,1.8889,-1.3891);
myNode84.innerRotation.center.set(0,0,0);
myNode84.innerRotation.axis.set(0.0,0.0,0.0);
myNode84.innerRotation.angle.set(0.0);
myNode84.innerTranslation.vector.set(0,0,0);
myNode84.isVisible = false;

/* définition du node n°85*/
const myNode85 = object.addCylinder();
myNode85.point1.set(1.397,4.062,-18.0999);
myNode85.point2.set(1.397,4.062,1.8889999999999993);
myNode85.radius.set(0.213);
myNode85.innerRotation.center.set(0,0,0);
myNode85.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode85.innerRotation.angle.set(119.9998447624254);
myNode85.isVisible = false;

/* définition du node n°86*/
const myNode86 = object.addCutOperation();
myNode86.leftArg.set(myNode84);
myNode86.rightArg.set(myNode85);
myNode86.isVisible = false;

/* définition du node n°87*/
const myNode87_1 = myNode1.clone();
myNode87_1.isVisible = false;
const myNode87_2 = object.addFuseOperation();
myNode87_2.leftArg.set(myNode87_1);
myNode87_2.rightArg.set(myNode8);
myNode87_2.isVisible = false;
const myNode87_3 = object.addFuseOperation();
myNode87_3.leftArg.set(myNode87_2);
myNode87_3.rightArg.set(myNode16);
myNode87_3.isVisible = false;
const myNode87_4 = object.addFuseOperation();
myNode87_4.leftArg.set(myNode87_3);
myNode87_4.rightArg.set(myNode41);
myNode87_4.isVisible = false;
const myNode87_5 = object.addFuseOperation();
myNode87_5.leftArg.set(myNode87_4);
myNode87_5.rightArg.set(myNode44);
myNode87_5.isVisible = false;
const myNode87_6 = object.addFuseOperation();
myNode87_6.leftArg.set(myNode87_5);
myNode87_6.rightArg.set(myNode57);
myNode87_6.isVisible = false;
const myNode87_7 = object.addFuseOperation();
myNode87_7.leftArg.set(myNode87_6);
myNode87_7.rightArg.set(myNode64);
myNode87_7.isVisible = false;
const myNode87_8 = object.addFuseOperation();
myNode87_8.leftArg.set(myNode87_7);
myNode87_8.rightArg.set(myNode83);
myNode87_8.isVisible = false;
myNode87 = object.addFuseOperation();
myNode87.leftArg.set(myNode87_8);
myNode87.rightArg.set(myNode86);
myNode87.isVisible = false;
myNode87.isVisible = false;

/* définition du node n°88*/
const myNode88 = object.addCommonOperation();
myNode88.leftArg.set(myNode0);
myNode88.rightArg.set(myNode87);
myNode88.isVisible = true;


/*END Geometry Object Definition*/