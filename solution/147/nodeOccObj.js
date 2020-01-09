/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(4.0501,1.3001,-0.5949);
myNode0.point2.set(4.728899999999999,2.2549,0.5959000000000001);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(4.3895,1.7775,0.000500000000000056);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(4.727,1.984,-18.0999);
myNode1.point2.set(4.727,1.984,18.099999999999998);
myNode1.radius.set(0.137);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(3.59305,1.30005,0.31405);
myNode2.point2.set(4.45395,2.25495,18.099950000000003);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.innerTranslation.vector.set(4.0235,1.7774999999999999,9.207);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addBox();
myNode3.point1.set(4.45505,-18.0999,-0.59495);
myNode3.point2.set(4.72895,2.0269999999999975,18.09995);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);
myNode3.innerTranslation.vector.set(4.592,-8.036450000000002,8.7525);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addBox();
myNode4.point1.set(-18.0999,1.30005,-0.59495);
myNode4.point2.set(3.593,1.70895,-0.23104999999999998);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.innerTranslation.vector.set(-7.253450000000001,1.5045,-0.413);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5_1 = myNode1.clone();
myNode5_1.isVisible = false;
const myNode5_2 = object.addFuseOperation();
myNode5_2.leftArg.set(myNode5_1);
myNode5_2.rightArg.set(myNode2);
myNode5_2.isVisible = false;
const myNode5_3 = object.addFuseOperation();
myNode5_3.leftArg.set(myNode5_2);
myNode5_3.rightArg.set(myNode3);
myNode5_3.isVisible = false;
myNode5 = object.addFuseOperation();
myNode5.leftArg.set(myNode5_3);
myNode5.rightArg.set(myNode4);
myNode5.isVisible = false;
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addCutOperation();
myNode6.leftArg.set(myNode0);
myNode6.rightArg.set(myNode5);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addBox();
myNode7.point1.set(-0.2729,-2.5119,-0.5949);
myNode7.point2.set(4.7279,-1.3000999999999998,0.5959000000000001);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);
myNode7.innerTranslation.vector.set(2.2275,-1.9059999999999997,0.000500000000000056);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addBox();
myNode8.point1.set(2.5001,-3.0219,-0.5949);
myNode8.point2.set(4.4549,1.2998999999999996,0.31390000000000007);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.innerTranslation.vector.set(3.4775,-0.8610000000000002,-0.14049999999999996);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addCylinder();
myNode9.point1.set(4.727,-1.981,-0.5949);
myNode9.point2.set(4.727,-1.981,0.5959000000000001);
myNode9.radius.set(0.272);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addCylinder();
myNode10.point1.set(-0.002,-2.524,-0.5949);
myNode10.point2.set(-0.002,-2.524,0.5959000000000001);
myNode10.radius.set(0.276);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11_1 = myNode7.clone();
myNode11_1.isVisible = false;
const myNode11_2 = object.addFuseOperation();
myNode11_2.leftArg.set(myNode11_1);
myNode11_2.rightArg.set(myNode8);
myNode11_2.isVisible = false;
const myNode11_3 = object.addFuseOperation();
myNode11_3.leftArg.set(myNode11_2);
myNode11_3.rightArg.set(myNode9);
myNode11_3.isVisible = false;
myNode11 = object.addFuseOperation();
myNode11.leftArg.set(myNode11_3);
myNode11.rightArg.set(myNode10);
myNode11.isVisible = false;
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addBox();
myNode12.point1.set(4.45505,-1.70895,-18.0999);
myNode12.point2.set(18.100949999999997,-1.30005,18.099999999999998);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);
myNode12.innerTranslation.vector.set(11.277999999999999,-1.5045,4.9999999998107114e-05);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addCylinder();
myNode13.point1.set(0,-2.528,-0.59495);
myNode13.point2.set(0,-2.528,18.09995);
myNode13.radius.set(0.136);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addBox();
myNode14.point1.set(2.50005,-1.29995,-18.0999);
myNode14.point2.set(3.59295,1.29995,0.31400000000000006);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);
myNode14.innerTranslation.vector.set(3.0465,0.0,-8.89295);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addBox();
myNode15.point1.set(-0.27295,-2.25395,0.31405);
myNode15.point2.set(4.45395,1.29995,0.59595);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);
myNode15.innerTranslation.vector.set(2.0904999999999996,-0.4770000000000001,0.45499999999999996);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(4.727,-1.982,-0.59495);
myNode16.point2.set(4.727,-1.982,18.09995);
myNode16.radius.set(0.136);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(0.27305,-18.0999,-0.59495);
myNode17.point2.set(18.09995,-2.255000000000001,0.5959500000000001);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.innerTranslation.vector.set(9.186499999999999,-10.17745,0.000500000000000056);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addBox();
myNode18.point1.set(2.5,-3.022,-0.595);
myNode18.point2.set(3.593,-1.7089999999999999,-0.23099999999999998);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);
myNode18.innerTranslation.vector.set(3.0465,-2.3655,-0.413);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addCutOperation();
myNode19.leftArg.set(myNode17);
myNode19.rightArg.set(myNode18);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addBox();
myNode20.point1.set(-18.0999,-2.02695,-0.36795);
myNode20.point2.set(4.049999999999997,1.2999500000000004,18.09995);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);
myNode20.innerTranslation.vector.set(-7.024950000000002,-0.3634999999999997,8.866);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21_1 = myNode12.clone();
myNode21_1.isVisible = false;
const myNode21_2 = object.addFuseOperation();
myNode21_2.leftArg.set(myNode21_1);
myNode21_2.rightArg.set(myNode13);
myNode21_2.isVisible = false;
const myNode21_3 = object.addFuseOperation();
myNode21_3.leftArg.set(myNode21_2);
myNode21_3.rightArg.set(myNode14);
myNode21_3.isVisible = false;
const myNode21_4 = object.addFuseOperation();
myNode21_4.leftArg.set(myNode21_3);
myNode21_4.rightArg.set(myNode15);
myNode21_4.isVisible = false;
const myNode21_5 = object.addFuseOperation();
myNode21_5.leftArg.set(myNode21_4);
myNode21_5.rightArg.set(myNode16);
myNode21_5.isVisible = false;
const myNode21_6 = object.addFuseOperation();
myNode21_6.leftArg.set(myNode21_5);
myNode21_6.rightArg.set(myNode19);
myNode21_6.isVisible = false;
myNode21 = object.addFuseOperation();
myNode21.leftArg.set(myNode21_6);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = false;
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addCutOperation();
myNode22.leftArg.set(myNode11);
myNode22.rightArg.set(myNode21);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addCylinder();
myNode23.point1.set(-3.044,3.047,-0.5949);
myNode23.point2.set(-3.044,3.047,-0.23109999999999997);
myNode23.radius.set(0.541);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addSphere();
myNode24.center.set(0,0,0);
myNode24.radius.set(54.29981583762508);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addCylinder();
myNode25.point1.set(0,2.526,-0.5949);
myNode25.point2.set(0,2.526,0.5959000000000001);
myNode25.radius.set(0.273);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(0.0,0.0,0.0);
myNode25.innerRotation.angle.set(0.0);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addCylinder();
myNode26.point1.set(0,2.527,-0.59495);
myNode26.point2.set(0,2.527,18.09995);
myNode26.radius.set(0.135);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addCutOperation();
myNode27.leftArg.set(myNode25);
myNode27.rightArg.set(myNode26);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addCommonOperation();
myNode28.leftArg.set(myNode24);
myNode28.rightArg.set(myNode27);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addBox();
myNode29.point1.set(-3.5919,2.0271,-0.5949);
myNode29.point2.set(-2.2381,3.0469,-0.23109999999999997);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);
myNode29.innerTranslation.vector.set(-2.915,2.537,-0.413);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addCylinder();
myNode30.point1.set(-3.045,3.045,-0.2319);
myNode30.point2.set(-3.045,3.045,-0.0411);
myNode30.radius.set(0.254);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31_1 = myNode23.clone();
myNode31_1.isVisible = false;
const myNode31_2 = object.addFuseOperation();
myNode31_2.leftArg.set(myNode31_1);
myNode31_2.rightArg.set(myNode28);
myNode31_2.isVisible = false;
const myNode31_3 = object.addFuseOperation();
myNode31_3.leftArg.set(myNode31_2);
myNode31_3.rightArg.set(myNode29);
myNode31_3.isVisible = false;
myNode31 = object.addFuseOperation();
myNode31.leftArg.set(myNode31_3);
myNode31.rightArg.set(myNode30);
myNode31.isVisible = false;
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addBox();
myNode32.point1.set(-4.4549,2.5101,-0.5949);
myNode32.point2.set(-2.5001,18.0999,-0.1491);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);
myNode32.innerTranslation.vector.set(-3.4775,10.305,-0.372);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addBox();
myNode33.point1.set(-0.2729,2.5101,-0.5949);
myNode33.point2.set(18.0999,3.0469,18.0999);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);
myNode33.innerTranslation.vector.set(8.9135,2.7785,8.752500000000001);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addCylinder();
myNode34.point1.set(-3.045,3.045,-0.2319);
myNode34.point2.set(-3.045,3.045,-0.0411);
myNode34.radius.set(0.136);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(0.0,0.0,0.0);
myNode34.innerRotation.angle.set(0.0);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35_1 = myNode32.clone();
myNode35_1.isVisible = false;
const myNode35_2 = object.addFuseOperation();
myNode35_2.leftArg.set(myNode35_1);
myNode35_2.rightArg.set(myNode33);
myNode35_2.isVisible = false;
myNode35 = object.addFuseOperation();
myNode35.leftArg.set(myNode35_2);
myNode35.rightArg.set(myNode34);
myNode35.isVisible = false;
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addCommonOperation();
myNode36.leftArg.set(myNode31);
myNode36.rightArg.set(myNode35);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addCylinder();
myNode37.point1.set(3.044,3.044,-0.5949);
myNode37.point2.set(3.044,3.044,-0.3681);
myNode37.radius.set(0.545);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0,0.0,0.0);
myNode37.innerRotation.angle.set(0.0);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addCylinder();
myNode38.point1.set(-3.046,-3.046,-0.5949);
myNode38.point2.set(-3.046,-3.046,-0.040100000000000025);
myNode38.radius.set(0.136);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(0.0,0.0,0.0);
myNode38.innerRotation.angle.set(0.0);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addBox();
myNode39.point1.set(-3.5919,-2.5119,-0.5949);
myNode39.point2.set(-2.2381,-1.7090999999999998,-0.3681);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(0.0,0.0,0.0);
myNode39.innerRotation.angle.set(0.0);
myNode39.innerTranslation.vector.set(-2.915,-2.1105,-0.4815);
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addCylinder();
myNode40.point1.set(-2.236,-2.519,-18.0999);
myNode40.point2.set(-2.236,-2.519,-0.3680000000000021);
myNode40.radius.set(0.263);
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
myNode42.point1.set(3.045,-3.046,-0.1489);
myNode42.point2.set(3.045,-3.046,0.5959);
myNode42.radius.set(0.136);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0,0.0,0.0);
myNode42.innerRotation.angle.set(0.0);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addBox();
myNode43.point1.set(2.2401,-2.5119,-0.5949);
myNode43.point2.set(3.8518999999999997,-2.0271,-0.23109999999999997);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(0.0,0.0,0.0);
myNode43.innerRotation.angle.set(0.0);
myNode43.innerTranslation.vector.set(3.046,-2.2695,-0.413);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44 = object.addFuseOperation();
myNode44.leftArg.set(myNode42);
myNode44.rightArg.set(myNode43);
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45 = object.addBox();
myNode45.point1.set(3.3231,-2.0269,-0.5949);
myNode45.point2.set(18.099899999999998,18.099899999999998,-0.23109999999999997);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(0.0,0.0,0.0);
myNode45.innerRotation.angle.set(0.0);
myNode45.innerTranslation.vector.set(10.711500000000001,8.0365,-0.413);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addBox();
myNode46.point1.set(0.2731,-18.0999,-0.5949);
myNode46.point2.set(18.099899999999998,-2.2551000000000023,-0.040100000000000025);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(0.0,0.0,0.0);
myNode46.innerRotation.angle.set(0.0);
myNode46.innerTranslation.vector.set(9.186499999999999,-10.177500000000002,-0.3175);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addFuseOperation();
myNode47.leftArg.set(myNode45);
myNode47.rightArg.set(myNode46);
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addCommonOperation();
myNode48.leftArg.set(myNode44);
myNode48.rightArg.set(myNode47);
myNode48.isVisible = false;

/* définition du node n°49*/
const myNode49 = object.addCylinder();
myNode49.point1.set(3.045,-3.045,-0.2319);
myNode49.point2.set(3.045,-3.045,-0.1501);
myNode49.radius.set(0.253);
myNode49.innerRotation.center.set(0,0,0);
myNode49.innerRotation.axis.set(0.0,0.0,0.0);
myNode49.innerRotation.angle.set(0.0);
myNode49.isVisible = false;

/* définition du node n°50*/
const myNode50 = object.addCylinder();
myNode50.point1.set(3.043,-3.043,-0.5949);
myNode50.point2.set(3.043,-3.043,-0.23109999999999997);
myNode50.radius.set(0.543);
myNode50.innerRotation.center.set(0,0,0);
myNode50.innerRotation.axis.set(0.0,0.0,0.0);
myNode50.innerRotation.angle.set(0.0);
myNode50.isVisible = false;

/* définition du node n°51*/
const myNode51 = object.addBox();
myNode51.point1.set(3.3231,-1.7089,-0.5949);
myNode51.point2.set(3.8519,1.2998999999999998,-0.3681);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(0.0,0.0,0.0);
myNode51.innerRotation.angle.set(0.0);
myNode51.innerTranslation.vector.set(3.5875000000000004,-0.20450000000000013,-0.4815);
myNode51.isVisible = false;

/* définition du node n°52*/
const myNode52 = object.addBox();
myNode52.point1.set(2.5001,-3.0219,-0.1489);
myNode52.point2.set(3.3229,-2.5121,-0.0411);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,0.0,0.0);
myNode52.innerRotation.angle.set(0.0);
myNode52.innerTranslation.vector.set(2.9115,-2.767,-0.095);
myNode52.isVisible = false;

/* définition du node n°53*/
const myNode53_1 = myNode48.clone();
myNode53_1.isVisible = false;
const myNode53_2 = object.addFuseOperation();
myNode53_2.leftArg.set(myNode53_1);
myNode53_2.rightArg.set(myNode49);
myNode53_2.isVisible = false;
const myNode53_3 = object.addFuseOperation();
myNode53_3.leftArg.set(myNode53_2);
myNode53_3.rightArg.set(myNode50);
myNode53_3.isVisible = false;
const myNode53_4 = object.addFuseOperation();
myNode53_4.leftArg.set(myNode53_3);
myNode53_4.rightArg.set(myNode51);
myNode53_4.isVisible = false;
myNode53 = object.addFuseOperation();
myNode53.leftArg.set(myNode53_4);
myNode53.rightArg.set(myNode52);
myNode53.isVisible = false;
myNode53.isVisible = false;

/* définition du node n°54*/
const myNode54 = object.addCylinder();
myNode54.point1.set(2.24,-2.515,-0.59495);
myNode54.point2.set(2.24,-2.515,-0.23104999999999998);
myNode54.radius.set(0.258);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(0.0,0.0,0.0);
myNode54.innerRotation.angle.set(0.0);
myNode54.isVisible = false;

/* définition du node n°55*/
const myNode55 = object.addBox();
myNode55.point1.set(0.27305,-3.02195,-0.14895);
myNode55.point2.set(3.32295,-2.51205,18.09995);
myNode55.innerRotation.center.set(0,0,0);
myNode55.innerRotation.axis.set(0.0,0.0,0.0);
myNode55.innerRotation.angle.set(0.0);
myNode55.innerTranslation.vector.set(1.798,-2.767,8.9755);
myNode55.isVisible = false;

/* définition du node n°56*/
const myNode56 = object.addCylinder();
myNode56.point1.set(3.045,-3.046,-0.368);
myNode56.point2.set(3.045,-3.046,18.1);
myNode56.radius.set(0.136);
myNode56.innerRotation.center.set(0,0,0);
myNode56.innerRotation.axis.set(0.0,0.0,0.0);
myNode56.innerRotation.angle.set(0.0);
myNode56.isVisible = false;

/* définition du node n°57*/
const myNode57 = object.addCutOperation();
myNode57.leftArg.set(myNode55);
myNode57.rightArg.set(myNode56);
myNode57.isVisible = false;

/* définition du node n°58*/
const myNode58 = object.addBox();
myNode58.point1.set(-0.273,-2.512,-0.595);
myNode58.point2.set(4.728000000000001,-2.254,-0.14899999999999997);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(0.0,0.0,0.0);
myNode58.innerRotation.angle.set(0.0);
myNode58.innerTranslation.vector.set(2.2275,-2.383,-0.372);
myNode58.isVisible = false;

/* définition du node n°59*/
const myNode59 = object.addCutOperation();
myNode59.leftArg.set(myNode16);
myNode59.rightArg.set(myNode58);
myNode59.isVisible = false;

/* définition du node n°60*/
const myNode60 = object.addBox();
myNode60.point1.set(2.24005,-18.0999,-0.36795);
myNode60.point2.set(2.49995,-2.5120000000000022,-0.23205);
myNode60.innerRotation.center.set(0,0,0);
myNode60.innerRotation.axis.set(0.0,0.0,0.0);
myNode60.innerRotation.angle.set(0.0);
myNode60.innerTranslation.vector.set(2.37,-10.305950000000003,-0.3);
myNode60.isVisible = false;

/* définition du node n°61*/
const myNode61 = object.addCylinder();
myNode61.point1.set(3.851,-2.517,-0.59495);
myNode61.point2.set(3.851,-2.517,-0.23104999999999998);
myNode61.radius.set(0.259);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(0.0,0.0,0.0);
myNode61.innerRotation.angle.set(0.0);
myNode61.isVisible = false;

/* définition du node n°62*/
const myNode62_1 = myNode54.clone();
myNode62_1.isVisible = false;
const myNode62_2 = object.addFuseOperation();
myNode62_2.leftArg.set(myNode62_1);
myNode62_2.rightArg.set(myNode57);
myNode62_2.isVisible = false;
const myNode62_3 = object.addFuseOperation();
myNode62_3.leftArg.set(myNode62_2);
myNode62_3.rightArg.set(myNode59);
myNode62_3.isVisible = false;
const myNode62_4 = object.addFuseOperation();
myNode62_4.leftArg.set(myNode62_3);
myNode62_4.rightArg.set(myNode60);
myNode62_4.isVisible = false;
myNode62 = object.addFuseOperation();
myNode62.leftArg.set(myNode62_4);
myNode62.rightArg.set(myNode61);
myNode62.isVisible = false;
myNode62.isVisible = false;

/* définition du node n°63*/
const myNode63 = object.addCutOperation();
myNode63.leftArg.set(myNode53);
myNode63.rightArg.set(myNode62);
myNode63.isVisible = false;

/* définition du node n°64*/
const myNode64 = object.addCylinder();
myNode64.point1.set(3.045,3.046,-0.1489);
myNode64.point2.set(3.045,3.046,-0.0411);
myNode64.radius.set(0.136);
myNode64.innerRotation.center.set(0,0,0);
myNode64.innerRotation.axis.set(0.0,0.0,0.0);
myNode64.innerRotation.angle.set(0.0);
myNode64.isVisible = false;

/* définition du node n°65*/
const myNode65 = object.addBox();
myNode65.point1.set(-4.4549,-2.0269,-0.5949);
myNode65.point2.set(-0.27310000000000034,-1.3001,-0.3681);
myNode65.innerRotation.center.set(0,0,0);
myNode65.innerRotation.axis.set(0.0,0.0,0.0);
myNode65.innerRotation.angle.set(0.0);
myNode65.innerTranslation.vector.set(-2.3640000000000003,-1.6635,-0.4815);
myNode65.isVisible = false;

/* définition du node n°66*/
const myNode66 = object.addBox();
myNode66.point1.set(-4.4549,-2.2539,-0.5949);
myNode66.point2.set(-0.27310000000000034,-2.0271,0.31390000000000007);
myNode66.innerRotation.center.set(0,0,0);
myNode66.innerRotation.axis.set(0.0,0.0,0.0);
myNode66.innerRotation.angle.set(0.0);
myNode66.innerTranslation.vector.set(-2.3640000000000003,-2.1405,-0.14049999999999996);
myNode66.isVisible = false;

/* définition du node n°67*/
const myNode67 = object.addFuseOperation();
myNode67.leftArg.set(myNode65);
myNode67.rightArg.set(myNode66);
myNode67.isVisible = false;

/* définition du node n°68*/
const myNode68 = object.addBox();
myNode68.point1.set(-3.68595,-2.25395,-0.09395);
myNode68.point2.set(-2.82205,-2.02705,0.31394999999999995);
myNode68.innerRotation.center.set(0,0,0);
myNode68.innerRotation.axis.set(0.0,0.0,0.0);
myNode68.innerRotation.angle.set(0.0);
myNode68.innerTranslation.vector.set(-3.254,-2.1405000000000003,0.10999999999999999);
myNode68.isVisible = false;

/* définition du node n°69*/
const myNode69 = object.addCutOperation();
myNode69.leftArg.set(myNode67);
myNode69.rightArg.set(myNode68);
myNode69.isVisible = false;

/* définition du node n°70*/
const myNode70 = object.addBox();
myNode70.point1.set(-18.0999,-1.7089,-0.5949);
myNode70.point2.set(2.2398999999999987,2.5099,0.5959000000000001);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(0.0,0.0,0.0);
myNode70.innerRotation.angle.set(0.0);
myNode70.innerTranslation.vector.set(-7.9300000000000015,0.40049999999999986,0.000500000000000056);
myNode70.isVisible = false;

/* définition du node n°71*/
const myNode71 = object.addCylinder();
myNode71.point1.set(-3.847,2.51,-18.0999);
myNode71.point2.set(-3.847,2.51,18.099999999999998);
myNode71.radius.set(0.252);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(0.0,0.0,0.0);
myNode71.innerRotation.angle.set(0.0);
myNode71.isVisible = false;

/* définition du node n°72*/
const myNode72 = object.addCutOperation();
myNode72.leftArg.set(myNode70);
myNode72.rightArg.set(myNode71);
myNode72.isVisible = false;

/* définition du node n°73*/
const myNode73 = object.addCylinder();
myNode73.point1.set(-4.728,1.982,-18.0999);
myNode73.point2.set(-4.728,1.982,18.099999999999998);
myNode73.radius.set(0.136);
myNode73.innerRotation.center.set(0,0,0);
myNode73.innerRotation.axis.set(0.0,0.0,0.0);
myNode73.innerRotation.angle.set(0.0);
myNode73.isVisible = false;

/* définition du node n°74*/
const myNode74 = object.addCylinder();
myNode74.point1.set(0,2.527,-18.0999);
myNode74.point2.set(0,2.527,0.5949999999999989);
myNode74.radius.set(0.135);
myNode74.innerRotation.center.set(0,0,0);
myNode74.innerRotation.axis.set(0.0,0.0,0.0);
myNode74.innerRotation.angle.set(0.0);
myNode74.isVisible = false;

/* définition du node n°75*/
const myNode75 = object.addFuseOperation();
myNode75.leftArg.set(myNode73);
myNode75.rightArg.set(myNode74);
myNode75.isVisible = false;

/* définition du node n°76*/
const myNode76 = object.addCutOperation();
myNode76.leftArg.set(myNode72);
myNode76.rightArg.set(myNode75);
myNode76.isVisible = false;

/* définition du node n°77*/
const myNode77 = object.addBox();
myNode77.point1.set(-3.98195,2.02705,-0.09395);
myNode77.point2.set(-3.1180499999999998,2.50895,0.31394999999999995);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(0.0,0.0,0.0);
myNode77.innerRotation.angle.set(0.0);
myNode77.innerTranslation.vector.set(-3.55,2.268,0.10999999999999999);
myNode77.isVisible = false;

/* définition du node n°78*/
const myNode78 = object.addBox();
myNode78.point1.set(-3.59195,2.25505,-0.23195);
myNode78.point2.set(-0.2720500000000001,2.5099500000000003,-0.09505);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(0.0,0.0,0.0);
myNode78.innerRotation.angle.set(0.0);
myNode78.innerTranslation.vector.set(-1.9320000000000002,2.3825000000000003,-0.16349999999999998);
myNode78.isVisible = false;

/* définition du node n°79*/
const myNode79 = object.addBox();
myNode79.point1.set(-4.04995,-1.70895,-0.36795);
myNode79.point2.set(2.2399500000000003,2.0269500000000003,18.09995);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(0.0,0.0,0.0);
myNode79.innerRotation.angle.set(0.0);
myNode79.innerTranslation.vector.set(-0.9049999999999998,0.15900000000000003,8.866);
myNode79.isVisible = false;

/* définition du node n°80*/
const myNode80_1 = myNode77.clone();
myNode80_1.isVisible = false;
const myNode80_2 = object.addFuseOperation();
myNode80_2.leftArg.set(myNode80_1);
myNode80_2.rightArg.set(myNode78);
myNode80_2.isVisible = false;
myNode80 = object.addFuseOperation();
myNode80.leftArg.set(myNode80_2);
myNode80.rightArg.set(myNode79);
myNode80.isVisible = false;
myNode80.isVisible = false;

/* définition du node n°81*/
const myNode81 = object.addCutOperation();
myNode81.leftArg.set(myNode76);
myNode81.rightArg.set(myNode80);
myNode81.isVisible = false;

/* définition du node n°82*/
const myNode82 = object.addBox();
myNode82.point1.set(-4.4549,1.3001,-18.0999);
myNode82.point2.set(18.099899999999998,2.2549,0.31389999999999674);
myNode82.innerRotation.center.set(0,0,0);
myNode82.innerRotation.axis.set(0.0,0.0,0.0);
myNode82.innerRotation.angle.set(0.0);
myNode82.innerTranslation.vector.set(6.8225,1.7775,-8.893000000000002);
myNode82.isVisible = false;

/* définition du node n°83*/
const myNode83 = object.addBox();
myNode83.point1.set(-3.9819,1.3001,-0.5949);
myNode83.point2.set(-2.2391,2.5099,-0.23109999999999997);
myNode83.innerRotation.center.set(0,0,0);
myNode83.innerRotation.axis.set(0.0,0.0,0.0);
myNode83.innerRotation.angle.set(0.0);
myNode83.innerTranslation.vector.set(-3.1105,1.905,-0.413);
myNode83.isVisible = false;

/* définition du node n°84*/
const myNode84 = object.addCylinder();
myNode84.point1.set(-2.239,2.517,-18.0999);
myNode84.point2.set(-2.239,2.517,18.099999999999998);
myNode84.radius.set(0.26);
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
const myNode86 = object.addBox();
myNode86.point1.set(-0.2729,2.2551,-0.5949);
myNode86.point2.set(0.2719,2.5099,0.5959000000000001);
myNode86.innerRotation.center.set(0,0,0);
myNode86.innerRotation.axis.set(0.0,0.0,0.0);
myNode86.innerRotation.angle.set(0.0);
myNode86.innerTranslation.vector.set(-0.0005000000000000004,2.3825000000000003,0.000500000000000056);
myNode86.isVisible = false;

/* définition du node n°87*/
const myNode87 = object.addBox();
myNode87.point1.set(-4.7269,1.7091,-0.5949);
myNode87.point2.set(-4.4540999999999995,2.2539,18.0999);
myNode87.innerRotation.center.set(0,0,0);
myNode87.innerRotation.axis.set(0.0,0.0,0.0);
myNode87.innerRotation.angle.set(0.0);
myNode87.innerTranslation.vector.set(-4.5905,1.9815,8.752500000000001);
myNode87.isVisible = false;

/* définition du node n°88*/
const myNode88 = object.addBox();
myNode88.point1.set(-4.4549,-1.7089,-18.0999);
myNode88.point2.set(-3.3231,2.0268999999999995,0.31389999999999674);
myNode88.innerRotation.center.set(0,0,0);
myNode88.innerRotation.axis.set(0.0,0.0,0.0);
myNode88.innerRotation.angle.set(0.0);
myNode88.innerTranslation.vector.set(-3.8890000000000002,0.1589999999999998,-8.893000000000002);
myNode88.isVisible = false;

/* définition du node n°89*/
const myNode89 = object.addCylinder();
myNode89.point1.set(-4.727,1.983,-0.5949);
myNode89.point2.set(-4.727,1.983,0.5959000000000001);
myNode89.radius.set(0.271);
myNode89.innerRotation.center.set(0,0,0);
myNode89.innerRotation.axis.set(0.0,0.0,0.0);
myNode89.innerRotation.angle.set(0.0);
myNode89.isVisible = false;

/* définition du node n°90*/
const myNode90_1 = myNode82.clone();
myNode90_1.isVisible = false;
const myNode90_2 = object.addFuseOperation();
myNode90_2.leftArg.set(myNode90_1);
myNode90_2.rightArg.set(myNode85);
myNode90_2.isVisible = false;
const myNode90_3 = object.addFuseOperation();
myNode90_3.leftArg.set(myNode90_2);
myNode90_3.rightArg.set(myNode86);
myNode90_3.isVisible = false;
const myNode90_4 = object.addFuseOperation();
myNode90_4.leftArg.set(myNode90_3);
myNode90_4.rightArg.set(myNode87);
myNode90_4.isVisible = false;
const myNode90_5 = object.addFuseOperation();
myNode90_5.leftArg.set(myNode90_4);
myNode90_5.rightArg.set(myNode88);
myNode90_5.isVisible = false;
myNode90 = object.addFuseOperation();
myNode90.leftArg.set(myNode90_5);
myNode90.rightArg.set(myNode89);
myNode90.isVisible = false;
myNode90.isVisible = false;

/* définition du node n°91*/
const myNode91 = object.addCommonOperation();
myNode91.leftArg.set(myNode81);
myNode91.rightArg.set(myNode90);
myNode91.isVisible = false;

/* définition du node n°92*/
const myNode92 = object.addBox();
myNode92.point1.set(2.5001,2.0271,-0.5949);
myNode92.point2.set(3.5929,3.0469,-0.23109999999999997);
myNode92.innerRotation.center.set(0,0,0);
myNode92.innerRotation.axis.set(0.0,0.0,0.0);
myNode92.innerRotation.angle.set(0.0);
myNode92.innerTranslation.vector.set(3.0465,2.537,-0.413);
myNode92.isVisible = false;

/* définition du node n°93*/
const myNode93 = object.addCylinder();
myNode93.point1.set(-3.045,-3.047,-0.5949);
myNode93.point2.set(-3.045,-3.047,-0.23109999999999997);
myNode93.radius.set(0.541);
myNode93.innerRotation.center.set(0,0,0);
myNode93.innerRotation.axis.set(0.0,0.0,0.0);
myNode93.innerRotation.angle.set(0.0);
myNode93.isVisible = false;

/* définition du node n°94*/
const myNode94 = object.addCylinder();
myNode94.point1.set(-4.728,-1.983,-0.5949);
myNode94.point2.set(-4.728,-1.983,0.5959000000000001);
myNode94.radius.set(0.27);
myNode94.innerRotation.center.set(0,0,0);
myNode94.innerRotation.axis.set(0.0,0.0,0.0);
myNode94.innerRotation.angle.set(0.0);
myNode94.isVisible = false;

/* définition du node n°95*/
const myNode95 = object.addCylinder();
myNode95.point1.set(-4.727,-1.981,-18.0999);
myNode95.point2.set(-4.727,-1.981,18.099999999999998);
myNode95.radius.set(0.136);
myNode95.innerRotation.center.set(0,0,0);
myNode95.innerRotation.axis.set(0.0,0.0,0.0);
myNode95.innerRotation.angle.set(0.0);
myNode95.isVisible = false;

/* définition du node n°96*/
const myNode96 = object.addCutOperation();
myNode96.leftArg.set(myNode94);
myNode96.rightArg.set(myNode95);
myNode96.isVisible = false;

/* définition du node n°97*/
const myNode97 = object.addCylinder();
myNode97.point1.set(3.045,3.045,-0.5949);
myNode97.point2.set(3.045,3.045,-0.1491);
myNode97.radius.set(0.253);
myNode97.innerRotation.center.set(0,0,0);
myNode97.innerRotation.axis.set(0.0,0.0,0.0);
myNode97.innerRotation.angle.set(0.0);
myNode97.isVisible = false;

/* définition du node n°98*/
const myNode98 = object.addBox();
myNode98.point1.set(2.2401,2.0271,-0.5949);
myNode98.point2.set(4.0499,3.0469,0.31390000000000007);
myNode98.innerRotation.center.set(0,0,0);
myNode98.innerRotation.axis.set(0.0,0.0,0.0);
myNode98.innerRotation.angle.set(0.0);
myNode98.innerTranslation.vector.set(3.145,2.537,-0.14049999999999996);
myNode98.isVisible = false;

/* définition du node n°99*/
const myNode99 = object.addCylinder();
myNode99.point1.set(2.247,2.508,-0.59495);
myNode99.point2.set(2.247,2.508,18.09995);
myNode99.radius.set(0.248);
myNode99.innerRotation.center.set(0,0,0);
myNode99.innerRotation.axis.set(0.0,0.0,0.0);
myNode99.innerRotation.angle.set(0.0);
myNode99.isVisible = false;

/* définition du node n°100*/
const myNode100 = object.addCutOperation();
myNode100.leftArg.set(myNode98);
myNode100.rightArg.set(myNode99);
myNode100.isVisible = false;

/* définition du node n°101*/
const myNode101 = object.addCylinder();
myNode101.point1.set(3.859,2.522,-18.0999);
myNode101.point2.set(3.859,2.522,-0.04100000000000037);
myNode101.radius.set(0.268);
myNode101.innerRotation.center.set(0,0,0);
myNode101.innerRotation.axis.set(0.0,0.0,0.0);
myNode101.innerRotation.angle.set(0.0);
myNode101.isVisible = false;

/* définition du node n°102*/
const myNode102 = object.addBox();
myNode102.point1.set(2.24005,2.25505,-0.23195);
myNode102.point2.set(4.04995,3.0469500000000003,0.31295000000000006);
myNode102.innerRotation.center.set(0,0,0);
myNode102.innerRotation.axis.set(0.0,0.0,0.0);
myNode102.innerRotation.angle.set(0.0);
myNode102.innerTranslation.vector.set(3.145,2.6510000000000002,0.040500000000000036);
myNode102.isVisible = false;

/* définition du node n°103*/
const myNode103 = object.addFuseOperation();
myNode103.leftArg.set(myNode101);
myNode103.rightArg.set(myNode102);
myNode103.isVisible = false;

/* définition du node n°104*/
const myNode104 = object.addCutOperation();
myNode104.leftArg.set(myNode100);
myNode104.rightArg.set(myNode103);
myNode104.isVisible = false;

/* définition du node n°105*/
const myNode105 = object.addBox();
myNode105.point1.set(4.4551,1.7091,-0.5949);
myNode105.point2.set(4.728899999999999,2.0269,0.5959000000000001);
myNode105.innerRotation.center.set(0,0,0);
myNode105.innerRotation.axis.set(0.0,0.0,0.0);
myNode105.innerRotation.angle.set(0.0);
myNode105.innerTranslation.vector.set(4.592,1.868,0.000500000000000056);
myNode105.isVisible = false;

/* définition du node n°106*/
const myNode106 = object.addCylinder();
myNode106.point1.set(4.729,1.981,-18.0999);
myNode106.point2.set(4.729,1.981,18.0999);
myNode106.radius.set(0.27);
myNode106.innerRotation.center.set(0,0,0);
myNode106.innerRotation.axis.set(0.0,0.0,0.0);
myNode106.innerRotation.angle.set(0.0);
myNode106.isVisible = false;

/* définition du node n°107*/
const myNode107 = object.addFuseOperation();
myNode107.leftArg.set(myNode105);
myNode107.rightArg.set(myNode106);
myNode107.isVisible = false;

/* définition du node n°108*/
const myNode108 = object.addCylinder();
myNode108.point1.set(4.727,1.984,-18.0999);
myNode108.point2.set(4.727,1.984,0.5949999999999989);
myNode108.radius.set(0.137);
myNode108.innerRotation.center.set(0,0,0);
myNode108.innerRotation.axis.set(0.0,0.0,0.0);
myNode108.innerRotation.angle.set(0.0);
myNode108.isVisible = false;

/* définition du node n°109*/
const myNode109 = object.addCutOperation();
myNode109.leftArg.set(myNode107);
myNode109.rightArg.set(myNode108);
myNode109.isVisible = false;

/* définition du node n°110*/
const myNode110 = object.addFuseOperation();
myNode110.leftArg.set(myNode104);
myNode110.rightArg.set(myNode109);
myNode110.isVisible = false;

/* définition du node n°111*/
const myNode111 = object.addBox();
myNode111.point1.set(-18.0999,1.7091,-0.5949);
myNode111.point2.set(18.0999,2.5099,0.5959000000000001);
myNode111.innerRotation.center.set(0,0,0);
myNode111.innerRotation.axis.set(0.0,0.0,0.0);
myNode111.innerRotation.angle.set(0.0);
myNode111.innerTranslation.vector.set(0.0,2.1095,0.000500000000000056);
myNode111.isVisible = false;

/* définition du node n°112*/
const myNode112 = object.addCommonOperation();
myNode112.leftArg.set(myNode110);
myNode112.rightArg.set(myNode111);
myNode112.isVisible = false;

/* définition du node n°113*/
const myNode113 = object.addCylinder();
myNode113.point1.set(3.859,2.522,-18.0999);
myNode113.point2.set(3.859,2.522,-0.5950000000000024);
myNode113.radius.set(0.268);
myNode113.innerRotation.center.set(0,0,0);
myNode113.innerRotation.axis.set(0.0,0.0,0.0);
myNode113.innerRotation.angle.set(0.0);
myNode113.isVisible = false;

/* définition du node n°114*/
const myNode114 = object.addCutOperation();
myNode114.leftArg.set(myNode24);
myNode114.rightArg.set(myNode113);
myNode114.isVisible = false;

/* définition du node n°115*/
const myNode115 = object.addBox();
myNode115.point1.set(2.2401,1.3001,-0.5949);
myNode115.point2.set(4.4549,2.0269,-0.3681);
myNode115.innerRotation.center.set(0,0,0);
myNode115.innerRotation.axis.set(0.0,0.0,0.0);
myNode115.innerRotation.angle.set(0.0);
myNode115.innerTranslation.vector.set(3.3475,1.6635,-0.4815);
myNode115.isVisible = false;

/* définition du node n°116*/
const myNode116 = object.addCylinder();
myNode116.point1.set(3.044,3.044,-0.3679);
myNode116.point2.set(3.044,3.044,-0.2321);
myNode116.radius.set(0.545);
myNode116.innerRotation.center.set(0,0,0);
myNode116.innerRotation.axis.set(0.0,0.0,0.0);
myNode116.innerRotation.angle.set(0.0);
myNode116.isVisible = false;

/* définition du node n°117*/
const myNode117 = object.addFuseOperation();
myNode117.leftArg.set(myNode115);
myNode117.rightArg.set(myNode116);
myNode117.isVisible = false;

/* définition du node n°118*/
const myNode118 = object.addCommonOperation();
myNode118.leftArg.set(myNode114);
myNode118.rightArg.set(myNode117);
myNode118.isVisible = false;

/* définition du node n°119*/
const myNode119 = object.addBox();
myNode119.point1.set(-4.4549,-2.0269,-0.3679);
myNode119.point2.set(-4.0501000000000005,-1.3001,0.31389999999999996);
myNode119.innerRotation.center.set(0,0,0);
myNode119.innerRotation.axis.set(0.0,0.0,0.0);
myNode119.innerRotation.angle.set(0.0);
myNode119.innerTranslation.vector.set(-4.2525,-1.6635,-0.027000000000000024);
myNode119.isVisible = false;

/* définition du node n°120*/
const myNode120 = object.addBox();
myNode120.point1.set(-4.7269,-18.0999,-0.5949);
myNode120.point2.set(-2.2390999999999996,18.0999,0.5959000000000001);
myNode120.innerRotation.center.set(0,0,0);
myNode120.innerRotation.axis.set(0.0,0.0,0.0);
myNode120.innerRotation.angle.set(0.0);
myNode120.innerTranslation.vector.set(-3.4829999999999997,0.0,0.000500000000000056);
myNode120.isVisible = false;

/* définition du node n°121*/
const myNode121 = object.addBox();
myNode121.point1.set(-18.0999,-2.2539,-18.0999);
myNode121.point2.set(-4.454100000000002,-1.7090999999999998,18.0999);
myNode121.innerRotation.center.set(0,0,0);
myNode121.innerRotation.axis.set(0.0,0.0,0.0);
myNode121.innerRotation.angle.set(0.0);
myNode121.innerTranslation.vector.set(-11.277000000000001,-1.9814999999999998,0.0);
myNode121.isVisible = false;

/* définition du node n°122*/
const myNode122 = object.addCutOperation();
myNode122.leftArg.set(myNode121);
myNode122.rightArg.set(myNode95);
myNode122.isVisible = false;

/* définition du node n°123*/
const myNode123 = object.addBox();
myNode123.point1.set(-4.0499,-2.5119,-0.5949);
myNode123.point2.set(-2.4991000000000003,-2.2540999999999998,0.31390000000000007);
myNode123.innerRotation.center.set(0,0,0);
myNode123.innerRotation.axis.set(0.0,0.0,0.0);
myNode123.innerRotation.angle.set(0.0);
myNode123.innerTranslation.vector.set(-3.2745,-2.383,-0.14049999999999996);
myNode123.isVisible = false;

/* définition du node n°124*/
const myNode124 = object.addBox();
myNode124.point1.set(-3.5919,-3.0219,-0.5949);
myNode124.point2.set(-2.4991,-2.5121,-0.23109999999999997);
myNode124.innerRotation.center.set(0,0,0);
myNode124.innerRotation.axis.set(0.0,0.0,0.0);
myNode124.innerRotation.angle.set(0.0);
myNode124.innerTranslation.vector.set(-3.0454999999999997,-2.767,-0.413);
myNode124.isVisible = false;

/* définition du node n°125*/
const myNode125 = object.addFuseOperation();
myNode125.leftArg.set(myNode123);
myNode125.rightArg.set(myNode124);
myNode125.isVisible = false;

/* définition du node n°126*/
const myNode126 = object.addBox();
myNode126.point1.set(-4.7269,-18.0999,-0.5949);
myNode126.point2.set(-2.4991,-1.3001000000000005,-0.23109999999999997);
myNode126.innerRotation.center.set(0,0,0);
myNode126.innerRotation.axis.set(0.0,0.0,0.0);
myNode126.innerRotation.angle.set(0.0);
myNode126.innerTranslation.vector.set(-3.6129999999999995,-9.700000000000001,-0.413);
myNode126.isVisible = false;

/* définition du node n°127*/
const myNode127 = object.addCylinder();
myNode127.point1.set(-3.849,-2.512,-0.59495);
myNode127.point2.set(-3.849,-2.512,18.09995);
myNode127.radius.set(0.255);
myNode127.innerRotation.center.set(0,0,0);
myNode127.innerRotation.axis.set(0.0,0.0,0.0);
myNode127.innerRotation.angle.set(0.0);
myNode127.isVisible = false;

/* définition du node n°128*/
const myNode128 = object.addCutOperation();
myNode128.leftArg.set(myNode126);
myNode128.rightArg.set(myNode127);
myNode128.isVisible = false;

/* définition du node n°129*/
const myNode129 = object.addCommonOperation();
myNode129.leftArg.set(myNode125);
myNode129.rightArg.set(myNode128);
myNode129.isVisible = false;

/* définition du node n°130*/
const myNode130 = object.addCylinder();
myNode130.point1.set(-3.045,-3.046,-0.5949);
myNode130.point2.set(-3.045,-3.046,-0.1491);
myNode130.radius.set(0.254);
myNode130.innerRotation.center.set(0,0,0);
myNode130.innerRotation.axis.set(0.0,0.0,0.0);
myNode130.innerRotation.angle.set(0.0);
myNode130.isVisible = false;

/* définition du node n°131*/
const myNode131_1 = myNode122.clone();
myNode131_1.isVisible = false;
const myNode131_2 = object.addFuseOperation();
myNode131_2.leftArg.set(myNode131_1);
myNode131_2.rightArg.set(myNode129);
myNode131_2.isVisible = false;
myNode131 = object.addFuseOperation();
myNode131.leftArg.set(myNode131_2);
myNode131.rightArg.set(myNode130);
myNode131.isVisible = false;
myNode131.isVisible = false;

/* définition du node n°132*/
const myNode132 = object.addCommonOperation();
myNode132.leftArg.set(myNode120);
myNode132.rightArg.set(myNode131);
myNode132.isVisible = false;

/* définition du node n°133*/
const myNode133_1 = myNode6.clone();
myNode133_1.isVisible = false;
const myNode133_2 = object.addFuseOperation();
myNode133_2.leftArg.set(myNode133_1);
myNode133_2.rightArg.set(myNode22);
myNode133_2.isVisible = false;
const myNode133_3 = object.addFuseOperation();
myNode133_3.leftArg.set(myNode133_2);
myNode133_3.rightArg.set(myNode36);
myNode133_3.isVisible = false;
const myNode133_4 = object.addFuseOperation();
myNode133_4.leftArg.set(myNode133_3);
myNode133_4.rightArg.set(myNode37);
myNode133_4.isVisible = false;
const myNode133_5 = object.addFuseOperation();
myNode133_5.leftArg.set(myNode133_4);
myNode133_5.rightArg.set(myNode38);
myNode133_5.isVisible = false;
const myNode133_6 = object.addFuseOperation();
myNode133_6.leftArg.set(myNode133_5);
myNode133_6.rightArg.set(myNode41);
myNode133_6.isVisible = false;
const myNode133_7 = object.addFuseOperation();
myNode133_7.leftArg.set(myNode133_6);
myNode133_7.rightArg.set(myNode63);
myNode133_7.isVisible = false;
const myNode133_8 = object.addFuseOperation();
myNode133_8.leftArg.set(myNode133_7);
myNode133_8.rightArg.set(myNode64);
myNode133_8.isVisible = false;
const myNode133_9 = object.addFuseOperation();
myNode133_9.leftArg.set(myNode133_8);
myNode133_9.rightArg.set(myNode69);
myNode133_9.isVisible = false;
const myNode133_10 = object.addFuseOperation();
myNode133_10.leftArg.set(myNode133_9);
myNode133_10.rightArg.set(myNode91);
myNode133_10.isVisible = false;
const myNode133_11 = object.addFuseOperation();
myNode133_11.leftArg.set(myNode133_10);
myNode133_11.rightArg.set(myNode92);
myNode133_11.isVisible = false;
const myNode133_12 = object.addFuseOperation();
myNode133_12.leftArg.set(myNode133_11);
myNode133_12.rightArg.set(myNode93);
myNode133_12.isVisible = false;
const myNode133_13 = object.addFuseOperation();
myNode133_13.leftArg.set(myNode133_12);
myNode133_13.rightArg.set(myNode96);
myNode133_13.isVisible = false;
const myNode133_14 = object.addFuseOperation();
myNode133_14.leftArg.set(myNode133_13);
myNode133_14.rightArg.set(myNode97);
myNode133_14.isVisible = false;
const myNode133_15 = object.addFuseOperation();
myNode133_15.leftArg.set(myNode133_14);
myNode133_15.rightArg.set(myNode112);
myNode133_15.isVisible = false;
const myNode133_16 = object.addFuseOperation();
myNode133_16.leftArg.set(myNode133_15);
myNode133_16.rightArg.set(myNode118);
myNode133_16.isVisible = false;
const myNode133_17 = object.addFuseOperation();
myNode133_17.leftArg.set(myNode133_16);
myNode133_17.rightArg.set(myNode119);
myNode133_17.isVisible = false;
myNode133 = object.addFuseOperation();
myNode133.leftArg.set(myNode133_17);
myNode133.rightArg.set(myNode132);
myNode133.isVisible = false;
myNode133.isVisible = false;

/* définition du node n°134*/
const myNode134 = object.addBox();
myNode134.point1.set(-5.9999,-4.3059,-0.7149);
myNode134.point2.set(5.9999,4.304899999999999,0.7139000000000001);
myNode134.innerRotation.center.set(0,0,0);
myNode134.innerRotation.axis.set(0.0,0.0,0.0);
myNode134.innerRotation.angle.set(0.0);
myNode134.innerTranslation.vector.set(0.0,-0.0005000000000006111,-0.0004999999999999449);
myNode134.isVisible = false;

/* définition du node n°135*/
const myNode135 = object.addCommonOperation();
myNode135.leftArg.set(myNode133);
myNode135.rightArg.set(myNode134);
myNode135.isVisible = true;


/*END Geometry Object Definition*/