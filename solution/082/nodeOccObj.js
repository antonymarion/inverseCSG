/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addCylinder();
myNode0.point1.set(0.498,1.769,-18.0999);
myNode0.point2.set(0.498,1.769,18.0999);
myNode0.radius.set(0.706);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.6312237032526069,0.6888596675526804,-1.3850945866822204);
myNode0.innerRotation.angle.set(95.72782307757814);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(-4.478,0.0449959,-18.0999);
myNode1.point2.set(-4.478,0.0449959,18.099999999999998);
myNode1.radius.set(0.649);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(1.1818899113977008,2.047107745131362,-0.5262090847453613);
myNode1.innerRotation.angle.set(138.7505747927252);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addCutOperation();
myNode2.leftArg.set(myNode0);
myNode2.rightArg.set(myNode1);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addBox();
myNode3.point1.set(-2.7779,-4.8559,-0.7219);
myNode3.point2.set(2.7779,-2.8561,2.0559000000000003);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);
myNode3.innerTranslation.vector.set(0.0,-3.856,0.667);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(2.075,-3.445,-2.05595);
myNode4.point2.set(2.075,-3.445,18.09995);
myNode4.radius.set(0.442);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addCutOperation();
myNode5.leftArg.set(myNode3);
myNode5.rightArg.set(myNode4);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addCommonOperation();
myNode6.leftArg.set(myNode2);
myNode6.rightArg.set(myNode5);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addBox();
myNode7.point1.set(-4.5559,-4.9999,-2.0559);
myNode7.point2.set(2.7768999999999995,-2.0331,2.0549000000000004);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);
myNode7.innerTranslation.vector.set(-0.8895000000000004,-3.5165,-0.0004999999999997229);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addCylinder();
myNode8.point1.set(-3.444,-3.443,-1.38895);
myNode8.point2.set(-3.444,-3.443,-0.7220499999999999);
myNode8.radius.set(0.663);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addCutOperation();
myNode9.leftArg.set(myNode7);
myNode9.rightArg.set(myNode8);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addCylinder();
myNode10.point1.set(-3.446,-3.444,-18.0999);
myNode10.point2.set(-3.446,-3.444,18.099999999999998);
myNode10.radius.set(0.388);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addCylinder();
myNode11.point1.set(-2.072,-3.445,-18.0999);
myNode11.point2.set(-2.072,-3.445,18.099999999999998);
myNode11.radius.set(0.376);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addFuseOperation();
myNode12.leftArg.set(myNode10);
myNode12.rightArg.set(myNode11);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addCutOperation();
myNode13.leftArg.set(myNode9);
myNode13.rightArg.set(myNode12);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(-2.701,-3.772,-18.1);
myNode14.point2.set(-2.701,-3.772,18.099899999999998);
myNode14.radius.set(0.623);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(1.0030512563647358,2.1029311504841517,-0.45711438050778924);
myNode14.innerRotation.angle.set(136.0383866053534);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addCylinder();
myNode15.point1.set(0.599,0.811,-18.0999);
myNode15.point2.set(0.599,0.811,18.099999999999998);
myNode15.radius.set(0.704);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(-1.3671625151710542,1.916695925690334,0.6375166719295208);
myNode15.innerRotation.angle.set(139.75102036074873);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addCommonOperation();
myNode16.leftArg.set(myNode14);
myNode16.rightArg.set(myNode15);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addCylinder();
myNode17.point1.set(-2.072,-3.443,0.94405);
myNode17.point2.set(-2.072,-3.443,18.09995);
myNode17.radius.set(0.443);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addFuseOperation();
myNode18.leftArg.set(myNode16);
myNode18.rightArg.set(myNode17);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addCutOperation();
myNode19.leftArg.set(myNode13);
myNode19.rightArg.set(myNode18);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addBox();
myNode20.point1.set(-2.7779,-4.8559,-2.0559);
myNode20.point2.set(2.7779,-2.0341,18.099899999999998);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);
myNode20.innerTranslation.vector.set(0.0,-3.4450000000000003,8.022);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addBox();
myNode21.point1.set(-4.5559,-4.1889,-2.0559);
myNode21.point2.set(-2.7781000000000002,-2.0331,-0.7230999999999999);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);
myNode21.innerTranslation.vector.set(-3.6670000000000003,-3.111,-1.3895);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addBox();
myNode22.point1.set(-4.5559,-4.9999,-18.0999);
myNode22.point2.set(18.099899999999998,-4.1891,-0.7221000000000011);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(0.0,0.0,0.0);
myNode22.innerRotation.angle.set(0.0);
myNode22.innerTranslation.vector.set(6.771999999999999,-4.5945,-9.411000000000001);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23_1 = myNode20.clone();
myNode23_1.isVisible = false;
const myNode23_2 = object.addFuseOperation();
myNode23_2.leftArg.set(myNode23_1);
myNode23_2.rightArg.set(myNode21);
myNode23_2.isVisible = false;
myNode23 = object.addFuseOperation();
myNode23.leftArg.set(myNode23_2);
myNode23.rightArg.set(myNode22);
myNode23.isVisible = false;
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addCylinder();
myNode24.point1.set(-2.046,5.56361e-32,-18.0999);
myNode24.point2.set(-2.046,5.56361e-32,18.099999999999998);
myNode24.radius.set(1.789);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode24.innerRotation.angle.set(119.9998447624254);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addCylinder();
myNode25.point1.set(2.075,-3.445,-0.72195);
myNode25.point2.set(2.075,-3.445,18.09995);
myNode25.radius.set(0.442);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(0.0,0.0,0.0);
myNode25.innerRotation.angle.set(0.0);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addCylinder();
myNode26.point1.set(0.498,1.769,-18.0999);
myNode26.point2.set(0.498,1.769,18.099999999999998);
myNode26.radius.set(0.706);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.6312237032526069,0.6888596675526804,-1.3850945866822204);
myNode26.innerRotation.angle.set(95.72782307757814);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addCylinder();
myNode27.point1.set(-1.002,-3.81,-18.1);
myNode27.point2.set(-1.002,-3.81,18.099899999999998);
myNode27.radius.set(0.686);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(-0.08954948905302097,0.8520044685420913,0.19649850658015844);
myNode27.innerRotation.angle.set(50.35977619688126);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addCommonOperation();
myNode28.leftArg.set(myNode26);
myNode28.rightArg.set(myNode27);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29_1 = myNode24.clone();
myNode29_1.isVisible = false;
const myNode29_2 = object.addFuseOperation();
myNode29_2.leftArg.set(myNode29_1);
myNode29_2.rightArg.set(myNode25);
myNode29_2.isVisible = false;
myNode29 = object.addFuseOperation();
myNode29.leftArg.set(myNode29_2);
myNode29.rightArg.set(myNode28);
myNode29.isVisible = false;
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addCutOperation();
myNode30.leftArg.set(myNode23);
myNode30.rightArg.set(myNode29);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addCommonOperation();
myNode31.leftArg.set(myNode19);
myNode31.rightArg.set(myNode30);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addBox();
myNode32.point1.set(-4.5559,-2.0329,-1.6099);
myNode32.point2.set(4.554899999999999,0.9998999999999998,-0.7221000000000001);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);
myNode32.innerTranslation.vector.set(-0.0005000000000006111,-0.5165000000000002,-1.1660000000000001);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addBox();
myNode33.point1.set(-2.7779,-2.8549,-2.0559);
myNode33.point2.set(2.7779,-2.0331,0.9439000000000002);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);
myNode33.innerTranslation.vector.set(0.0,-2.4440000000000004,-0.5559999999999998);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addCylinder();
myNode34.point1.set(-2.046,4.38538e-21,-18.0999);
myNode34.point2.set(-2.046,4.38538e-21,1.0);
myNode34.radius.set(1.789);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode34.innerRotation.angle.set(119.9998447624254);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addCutOperation();
myNode35.leftArg.set(myNode33);
myNode35.rightArg.set(myNode34);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addBox();
myNode36.point1.set(3.8441,1.0001,-1.6099);
myNode36.point2.set(4.0929,3.8719,-1.3891);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(0.0,0.0,0.0);
myNode36.innerRotation.angle.set(0.0);
myNode36.innerTranslation.vector.set(3.9685,2.436,-1.4995);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37_1 = myNode32.clone();
myNode37_1.isVisible = false;
const myNode37_2 = object.addFuseOperation();
myNode37_2.leftArg.set(myNode37_1);
myNode37_2.rightArg.set(myNode35);
myNode37_2.isVisible = false;
myNode37 = object.addFuseOperation();
myNode37.leftArg.set(myNode37_2);
myNode37.rightArg.set(myNode36);
myNode37.isVisible = false;
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addCylinder();
myNode38.point1.set(1.369,-4.093,1.00005);
myNode38.point2.set(1.369,-4.093,1.8889500000000001);
myNode38.radius.set(0.254);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode38.innerRotation.angle.set(119.9998447624254);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addCutOperation();
myNode39.leftArg.set(myNode37);
myNode39.rightArg.set(myNode38);
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addBox();
myNode40.point1.set(-2.7779,-4.1889,-0.7219);
myNode40.point2.set(2.7779,-2.8561000000000005,0.9449000000000001);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(0.0,0.0,0.0);
myNode40.innerRotation.angle.set(0.0);
myNode40.innerTranslation.vector.set(0.0,-3.5225000000000004,0.11150000000000004);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41 = object.addCylinder();
myNode41.point1.set(-2.046,3.95585e-21,-4.1889);
myNode41.point2.set(-2.046,3.95585e-21,-2.8561000000000005);
myNode41.radius.set(1.789);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode41.innerRotation.angle.set(119.9998447624254);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addFuseOperation();
myNode42.leftArg.set(myNode40);
myNode42.rightArg.set(myNode41);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addCylinder();
myNode43.point1.set(-2.072,-3.443,-0.72195);
myNode43.point2.set(-2.072,-3.443,18.09995);
myNode43.radius.set(0.443);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(0.0,0.0,0.0);
myNode43.innerRotation.angle.set(0.0);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44 = object.addCylinder();
myNode44.point1.set(2.075,-3.445,0.94405);
myNode44.point2.set(2.075,-3.445,18.09995);
myNode44.radius.set(0.442);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(0.0,0.0,0.0);
myNode44.innerRotation.angle.set(0.0);
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45 = object.addFuseOperation();
myNode45.leftArg.set(myNode43);
myNode45.rightArg.set(myNode44);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addCutOperation();
myNode46.leftArg.set(myNode42);
myNode46.rightArg.set(myNode45);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addCylinder();
myNode47.point1.set(-2.042,0.003,-4.18895);
myNode47.point2.set(-2.042,0.003,-2.85605);
myNode47.radius.set(1.338);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode47.innerRotation.angle.set(119.9998447624254);
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addCylinder();
myNode48.point1.set(-2.702,-3.803,-18.1);
myNode48.point2.set(-2.702,-3.803,18.099899999999998);
myNode48.radius.set(0.685);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(-0.24106997465000793,2.2935798886533565,0.10733370184429875);
myNode48.innerRotation.angle.set(132.27936514999433);
myNode48.isVisible = false;

/* définition du node n°49*/
const myNode49 = object.addCylinder();
myNode49.point1.set(-2.072,-3.442,-0.94395);
myNode49.point2.set(-2.072,-3.442,1.38895);
myNode49.radius.set(0.376);
myNode49.innerRotation.center.set(0,0,0);
myNode49.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode49.innerRotation.angle.set(179.9999999997983);
myNode49.isVisible = false;

/* définition du node n°50*/
const myNode50 = object.addBox();
myNode50.point1.set(-2.77795,-18.0999,2.05605);
myNode50.point2.set(4.55495,-2.0330000000000013,18.100949999999997);
myNode50.innerRotation.center.set(0,0,0);
myNode50.innerRotation.axis.set(0.0,0.0,0.0);
myNode50.innerRotation.angle.set(0.0);
myNode50.innerTranslation.vector.set(0.8885000000000001,-10.066450000000001,10.078499999999998);
myNode50.isVisible = false;

/* définition du node n°51*/
const myNode51_1 = myNode47.clone();
myNode51_1.isVisible = false;
const myNode51_2 = object.addFuseOperation();
myNode51_2.leftArg.set(myNode51_1);
myNode51_2.rightArg.set(myNode48);
myNode51_2.isVisible = false;
const myNode51_3 = object.addFuseOperation();
myNode51_3.leftArg.set(myNode51_2);
myNode51_3.rightArg.set(myNode49);
myNode51_3.isVisible = false;
myNode51 = object.addFuseOperation();
myNode51.leftArg.set(myNode51_3);
myNode51.rightArg.set(myNode50);
myNode51.isVisible = false;
myNode51.isVisible = false;

/* définition du node n°52*/
const myNode52 = object.addCutOperation();
myNode52.leftArg.set(myNode46);
myNode52.rightArg.set(myNode51);
myNode52.isVisible = false;

/* définition du node n°53*/
const myNode53 = object.addBox();
myNode53.point1.set(-4.5559,-2.0329,-2.0559);
myNode53.point2.set(4.554899999999999,1.8889,-1.6111);
myNode53.innerRotation.center.set(0,0,0);
myNode53.innerRotation.axis.set(0.0,0.0,0.0);
myNode53.innerRotation.angle.set(0.0);
myNode53.innerTranslation.vector.set(-0.0005000000000006111,-0.07200000000000006,-1.8335);
myNode53.isVisible = false;

/* définition du node n°54*/
const myNode54 = object.addBox();
myNode54.point1.set(-4.0619,1.0001,-2.0559);
myNode54.point2.set(-3.8440999999999996,1.8889,-1.3891);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(0.0,0.0,0.0);
myNode54.innerRotation.angle.set(0.0);
myNode54.innerTranslation.vector.set(-3.9529999999999994,1.4445000000000001,-1.7225);
myNode54.isVisible = false;

/* définition du node n°55*/
const myNode55 = object.addCylinder();
myNode55.point1.set(1.397,4.062,-18.0999);
myNode55.point2.set(1.397,4.062,1.8889999999999993);
myNode55.radius.set(0.213);
myNode55.innerRotation.center.set(0,0,0);
myNode55.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode55.innerRotation.angle.set(119.9998447624254);
myNode55.isVisible = false;

/* définition du node n°56*/
const myNode56 = object.addCutOperation();
myNode56.leftArg.set(myNode54);
myNode56.rightArg.set(myNode55);
myNode56.isVisible = false;

/* définition du node n°57*/
const myNode57 = object.addBox();
myNode57.point1.set(-4.5559,1.8891,-2.0559);
myNode57.point2.set(18.099899999999998,4.9999,-0.7230999999999999);
myNode57.innerRotation.center.set(0,0,0);
myNode57.innerRotation.axis.set(0.0,0.0,0.0);
myNode57.innerRotation.angle.set(0.0);
myNode57.innerTranslation.vector.set(6.771999999999999,3.4444999999999997,-1.3895);
myNode57.isVisible = false;

/* définition du node n°58*/
const myNode58 = object.addCylinder();
myNode58.point1.set(-3.444,3.445,-1.38895);
myNode58.point2.set(-3.444,3.445,18.09995);
myNode58.radius.set(0.665);
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
const myNode60 = object.addCylinder();
myNode60.point1.set(-3.445,3.444,-18.0999);
myNode60.point2.set(-3.445,3.444,-1.389000000000003);
myNode60.radius.set(0.387);
myNode60.innerRotation.center.set(0,0,0);
myNode60.innerRotation.axis.set(0.0,0.0,0.0);
myNode60.innerRotation.angle.set(0.0);
myNode60.isVisible = false;

/* définition du node n°61*/
const myNode61 = object.addCylinder();
myNode61.point1.set(3.445,3.444,-18.0999);
myNode61.point2.set(3.445,3.444,18.099999999999998);
myNode61.radius.set(0.666);
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
const myNode64 = object.addCylinder();
myNode64.point1.set(0.925,4.529,-2.0329);
myNode64.point2.set(0.925,4.529,4.9999);
myNode64.radius.set(0.246);
myNode64.innerRotation.center.set(0,0,0);
myNode64.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode64.innerRotation.angle.set(119.9998447624254);
myNode64.isVisible = false;

/* définition du node n°65*/
const myNode65 = object.addBox();
myNode65.point1.set(2.7781,3.8721,-2.0559);
myNode65.point2.set(3.8449,4.9999,-1.3891);
myNode65.innerRotation.center.set(0,0,0);
myNode65.innerRotation.axis.set(0.0,0.0,0.0);
myNode65.innerRotation.angle.set(0.0);
myNode65.innerTranslation.vector.set(3.3114999999999997,4.436,-1.7225);
myNode65.isVisible = false;

/* définition du node n°66*/
const myNode66 = object.addCylinder();
myNode66.point1.set(0.923,-4.53,-2.0329);
myNode66.point2.set(0.923,-4.53,1.8889);
myNode66.radius.set(0.247);
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
myNode67.innerTranslation.vector.set(0.0,1.4445000000000001,-1.1660000000000001);
myNode67.isVisible = false;

/* définition du node n°68*/
const myNode68_1 = myNode63.clone();
myNode68_1.isVisible = false;
const myNode68_2 = object.addFuseOperation();
myNode68_2.leftArg.set(myNode68_1);
myNode68_2.rightArg.set(myNode64);
myNode68_2.isVisible = false;
const myNode68_3 = object.addFuseOperation();
myNode68_3.leftArg.set(myNode68_2);
myNode68_3.rightArg.set(myNode65);
myNode68_3.isVisible = false;
const myNode68_4 = object.addFuseOperation();
myNode68_4.leftArg.set(myNode68_3);
myNode68_4.rightArg.set(myNode66);
myNode68_4.isVisible = false;
myNode68 = object.addFuseOperation();
myNode68.leftArg.set(myNode68_4);
myNode68.rightArg.set(myNode67);
myNode68.isVisible = false;
myNode68.isVisible = false;

/* définition du node n°69*/
const myNode69 = object.addCylinder();
myNode69.point1.set(3.446,3.888,-2.0559);
myNode69.point2.set(3.446,3.888,18.099899999999998);
myNode69.radius.set(1.108);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(0.0,0.0,0.0);
myNode69.innerRotation.angle.set(0.0);
myNode69.isVisible = false;

/* définition du node n°70*/
const myNode70 = object.addBox();
myNode70.point1.set(-18.0999,1.8891,-2.0559);
myNode70.point2.set(2.777899999999999,3.8719,-1.6111);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(0.0,0.0,0.0);
myNode70.innerRotation.angle.set(0.0);
myNode70.innerTranslation.vector.set(-7.661000000000001,2.8805,-1.8335);
myNode70.isVisible = false;

/* définition du node n°71*/
const myNode71 = object.addBox();
myNode71.point1.set(-4.5559,-2.0329,-1.6099);
myNode71.point2.set(4.554899999999999,3.8718999999999997,-0.7221000000000001);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(0.0,0.0,0.0);
myNode71.innerRotation.angle.set(0.0);
myNode71.innerTranslation.vector.set(-0.0005000000000006111,0.9194999999999998,-1.1660000000000001);
myNode71.isVisible = false;

/* définition du node n°72*/
const myNode72 = object.addCylinder();
myNode72.point1.set(-3.43,3.872,-2.0559);
myNode72.point2.set(-3.43,3.872,18.099899999999998);
myNode72.radius.set(1.129);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(0.0,0.0,0.0);
myNode72.innerRotation.angle.set(0.0);
myNode72.isVisible = false;

/* définition du node n°73*/
const myNode73 = object.addBox();
myNode73.point1.set(-3.4299,3.8721,-2.0559);
myNode73.point2.set(3.4459,4.9999,-0.7230999999999999);
myNode73.innerRotation.center.set(0,0,0);
myNode73.innerRotation.axis.set(0.0,0.0,0.0);
myNode73.innerRotation.angle.set(0.0);
myNode73.innerTranslation.vector.set(0.008000000000000007,4.436,-1.3895);
myNode73.isVisible = false;

/* définition du node n°74*/
const myNode74_1 = myNode69.clone();
myNode74_1.isVisible = false;
const myNode74_2 = object.addFuseOperation();
myNode74_2.leftArg.set(myNode74_1);
myNode74_2.rightArg.set(myNode70);
myNode74_2.isVisible = false;
const myNode74_3 = object.addFuseOperation();
myNode74_3.leftArg.set(myNode74_2);
myNode74_3.rightArg.set(myNode71);
myNode74_3.isVisible = false;
const myNode74_4 = object.addFuseOperation();
myNode74_4.leftArg.set(myNode74_3);
myNode74_4.rightArg.set(myNode72);
myNode74_4.isVisible = false;
myNode74 = object.addFuseOperation();
myNode74.leftArg.set(myNode74_4);
myNode74.rightArg.set(myNode73);
myNode74.isVisible = false;
myNode74.isVisible = false;

/* définition du node n°75*/
const myNode75 = object.addCommonOperation();
myNode75.leftArg.set(myNode68);
myNode75.rightArg.set(myNode74);
myNode75.isVisible = false;

/* définition du node n°76*/
const myNode76 = object.addBox();
myNode76.point1.set(-2.7779,-4.9999,-2.0559);
myNode76.point2.set(4.5549,-2.0331,0.9439000000000002);
myNode76.innerRotation.center.set(0,0,0);
myNode76.innerRotation.axis.set(0.0,0.0,0.0);
myNode76.innerRotation.angle.set(0.0);
myNode76.innerTranslation.vector.set(0.8885000000000001,-3.5165,-0.5559999999999998);
myNode76.isVisible = false;

/* définition du node n°77*/
const myNode77 = object.addCylinder();
myNode77.point1.set(3.444,-3.445,-1.38895);
myNode77.point2.set(3.444,-3.445,-0.7220499999999999);
myNode77.radius.set(0.664);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(0.0,0.0,0.0);
myNode77.innerRotation.angle.set(0.0);
myNode77.isVisible = false;

/* définition du node n°78*/
const myNode78 = object.addCutOperation();
myNode78.leftArg.set(myNode76);
myNode78.rightArg.set(myNode77);
myNode78.isVisible = false;

/* définition du node n°79*/
const myNode79 = object.addBox();
myNode79.point1.set(-2.77795,-4.99995,-0.72195);
myNode79.point2.set(4.55495,-2.0330500000000002,2.0559499999999997);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(0.0,0.0,0.0);
myNode79.innerRotation.angle.set(0.0);
myNode79.innerTranslation.vector.set(0.8885000000000001,-3.5165,0.6669999999999999);
myNode79.isVisible = false;

/* définition du node n°80*/
const myNode80 = object.addCylinder();
myNode80.point1.set(3.445,-3.445,-2.05595);
myNode80.point2.set(3.445,-3.445,-1.3890500000000001);
myNode80.radius.set(0.388);
myNode80.innerRotation.center.set(0,0,0);
myNode80.innerRotation.axis.set(0.0,0.0,0.0);
myNode80.innerRotation.angle.set(0.0);
myNode80.isVisible = false;

/* définition du node n°81*/
const myNode81 = object.addFuseOperation();
myNode81.leftArg.set(myNode79);
myNode81.rightArg.set(myNode80);
myNode81.isVisible = false;

/* définition du node n°82*/
const myNode82 = object.addCutOperation();
myNode82.leftArg.set(myNode78);
myNode82.rightArg.set(myNode81);
myNode82.isVisible = false;

/* définition du node n°83*/
const myNode83 = object.addBox();
myNode83.point1.set(-2.7779,1.8891,-2.0559);
myNode83.point2.set(4.5549,3.8719,-1.3891);
myNode83.innerRotation.center.set(0,0,0);
myNode83.innerRotation.axis.set(0.0,0.0,0.0);
myNode83.innerRotation.angle.set(0.0);
myNode83.innerTranslation.vector.set(0.8885000000000001,2.8805,-1.7225);
myNode83.isVisible = false;

/* définition du node n°84*/
const myNode84 = object.addCylinder();
myNode84.point1.set(3.444,3.445,-2.05595);
myNode84.point2.set(3.444,3.445,18.09995);
myNode84.radius.set(0.389);
myNode84.innerRotation.center.set(0,0,0);
myNode84.innerRotation.axis.set(0.0,0.0,0.0);
myNode84.innerRotation.angle.set(0.0);
myNode84.isVisible = false;

/* définition du node n°85*/
const myNode85 = object.addCutOperation();
myNode85.leftArg.set(myNode83);
myNode85.rightArg.set(myNode84);
myNode85.isVisible = false;

/* définition du node n°86*/
const myNode86_1 = myNode6.clone();
myNode86_1.isVisible = false;
const myNode86_2 = object.addFuseOperation();
myNode86_2.leftArg.set(myNode86_1);
myNode86_2.rightArg.set(myNode31);
myNode86_2.isVisible = false;
const myNode86_3 = object.addFuseOperation();
myNode86_3.leftArg.set(myNode86_2);
myNode86_3.rightArg.set(myNode39);
myNode86_3.isVisible = false;
const myNode86_4 = object.addFuseOperation();
myNode86_4.leftArg.set(myNode86_3);
myNode86_4.rightArg.set(myNode52);
myNode86_4.isVisible = false;
const myNode86_5 = object.addFuseOperation();
myNode86_5.leftArg.set(myNode86_4);
myNode86_5.rightArg.set(myNode53);
myNode86_5.isVisible = false;
const myNode86_6 = object.addFuseOperation();
myNode86_6.leftArg.set(myNode86_5);
myNode86_6.rightArg.set(myNode56);
myNode86_6.isVisible = false;
const myNode86_7 = object.addFuseOperation();
myNode86_7.leftArg.set(myNode86_6);
myNode86_7.rightArg.set(myNode75);
myNode86_7.isVisible = false;
const myNode86_8 = object.addFuseOperation();
myNode86_8.leftArg.set(myNode86_7);
myNode86_8.rightArg.set(myNode82);
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