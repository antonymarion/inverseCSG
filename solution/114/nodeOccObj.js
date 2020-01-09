/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-3.0679,-2.5009,-2.9549);
myNode0.point2.set(-2.2731,-1.5911,2.9539000000000004);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(-2.6704999999999997,-2.0460000000000003,-0.0004999999999997229);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(-1.988,-3.445,2.5001);
myNode1.point2.set(-1.988,-3.445,2.9549000000000003);
myNode1.radius.set(0.452);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-3.0679,-2.5009,2.5001);
myNode2.point2.set(-1.9880999999999998,2.5059,2.7269);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.innerTranslation.vector.set(-2.5279999999999996,0.0024999999999999467,2.6135);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(-2.379,1.922,-2.50095);
myNode3.point2.set(-2.379,1.922,2.50595);
myNode3.radius.set(0.352);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode3.innerRotation.angle.set(119.9998447624254);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addCutOperation();
myNode4.leftArg.set(myNode2);
myNode4.rightArg.set(myNode3);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(3.977,-0.001,-2.9549);
myNode5.point2.set(3.977,-0.001,2.7269);
myNode5.radius.set(0.45);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addCylinder();
myNode6.point1.set(-0.003,0.005,-2.9549);
myNode6.point2.set(-0.003,0.005,-2.7281);
myNode6.radius.set(4.71);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode6.innerRotation.angle.set(179.9999999997983);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addBox();
myNode7.point1.set(-3.7589,-2.5009,2.5001);
myNode7.point2.set(-3.0681000000000003,2.5059,2.9549000000000003);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);
myNode7.innerTranslation.vector.set(-3.4135,0.0024999999999999467,2.7275);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addCylinder();
myNode8.point1.set(-2.373,3.759,-18.0999);
myNode8.point2.set(-2.373,3.759,18.099999999999998);
myNode8.radius.set(0.355);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode8.innerRotation.angle.set(119.9998447624254);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addCutOperation();
myNode9.leftArg.set(myNode7);
myNode9.rightArg.set(myNode8);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10_1 = myNode0.clone();
myNode10_1.isVisible = false;
const myNode10_2 = object.addFuseOperation();
myNode10_2.leftArg.set(myNode10_1);
myNode10_2.rightArg.set(myNode1);
myNode10_2.isVisible = false;
const myNode10_3 = object.addFuseOperation();
myNode10_3.leftArg.set(myNode10_2);
myNode10_3.rightArg.set(myNode4);
myNode10_3.isVisible = false;
const myNode10_4 = object.addFuseOperation();
myNode10_4.leftArg.set(myNode10_3);
myNode10_4.rightArg.set(myNode5);
myNode10_4.isVisible = false;
const myNode10_5 = object.addFuseOperation();
myNode10_5.leftArg.set(myNode10_4);
myNode10_5.rightArg.set(myNode6);
myNode10_5.isVisible = false;
myNode10 = object.addFuseOperation();
myNode10.leftArg.set(myNode10_5);
myNode10.rightArg.set(myNode9);
myNode10.isVisible = false;
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addCylinder();
myNode11.point1.set(-0.003,0.005,2.95505);
myNode11.point2.set(-0.003,0.005,18.09995);
myNode11.radius.set(4.71);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode11.innerRotation.angle.set(179.9999999997983);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(3.977,0.001,-18.0999);
myNode12.point2.set(3.977,0.001,2.7269999999999968);
myNode12.radius.set(0.113);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addCylinder();
myNode13.point1.set(-1.987,-3.444,-18.0999);
myNode13.point2.set(-1.987,-3.444,2.7269999999999968);
myNode13.radius.set(0.113);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(-0.003,0.005,-2.49995);
myNode14.point2.set(-0.003,0.005,18.09995);
myNode14.radius.set(4.71);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode14.innerRotation.angle.set(179.9999999997983);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addCylinder();
myNode15.point1.set(2.501,-1.865,-18.1);
myNode15.point2.set(2.501,-1.865,-2.2730000000000015);
myNode15.radius.set(0.219);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode15.innerRotation.angle.set(89.99978954085029);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addCutOperation();
myNode16.leftArg.set(myNode14);
myNode16.rightArg.set(myNode15);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addCylinder();
myNode17.point1.set(-2.489,2.506,-18.0999);
myNode17.point2.set(-2.489,2.506,-1.988000000000003);
myNode17.radius.set(0.236);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode17.innerRotation.angle.set(89.99978954085029);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(-0.045,-0.00100001,-18.0999);
myNode18.point2.set(-0.045,-0.00100001,18.099999999999998);
myNode18.radius.set(0.795);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0028938703161114103,0.017293063626353244,-0.3316045510476236);
myNode18.innerRotation.angle.set(19.026081641676285);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addCylinder();
myNode19.point1.set(-2.501,-2.501,-3.75895);
myNode19.point2.set(-2.501,-2.501,18.09995);
myNode19.radius.set(0.226);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode19.innerRotation.angle.set(89.99978954085029);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20_1 = myNode11.clone();
myNode20_1.isVisible = false;
const myNode20_2 = object.addFuseOperation();
myNode20_2.leftArg.set(myNode20_1);
myNode20_2.rightArg.set(myNode12);
myNode20_2.isVisible = false;
const myNode20_3 = object.addFuseOperation();
myNode20_3.leftArg.set(myNode20_2);
myNode20_3.rightArg.set(myNode13);
myNode20_3.isVisible = false;
const myNode20_4 = object.addFuseOperation();
myNode20_4.leftArg.set(myNode20_3);
myNode20_4.rightArg.set(myNode16);
myNode20_4.isVisible = false;
const myNode20_5 = object.addFuseOperation();
myNode20_5.leftArg.set(myNode20_4);
myNode20_5.rightArg.set(myNode17);
myNode20_5.isVisible = false;
const myNode20_6 = object.addFuseOperation();
myNode20_6.leftArg.set(myNode20_5);
myNode20_6.rightArg.set(myNode18);
myNode20_6.isVisible = false;
myNode20 = object.addFuseOperation();
myNode20.leftArg.set(myNode20_6);
myNode20.rightArg.set(myNode19);
myNode20.isVisible = false;
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addCutOperation();
myNode21.leftArg.set(myNode10);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addSphere();
myNode22.center.set(0,0,0);
myNode22.radius.set(54.29981583762508);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addBox();
myNode23.point1.set(-1.98795,-2.27295,-18.0999);
myNode23.point2.set(18.09995,1.5909500000000003,-2.955000000000002);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);
myNode23.innerTranslation.vector.set(8.056000000000001,-0.34099999999999975,-10.527450000000002);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addCutOperation();
myNode24.leftArg.set(myNode22);
myNode24.rightArg.set(myNode23);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addCylinder();
myNode25.point1.set(-0.016,-0.01,1.5911);
myNode25.point2.set(-0.016,-0.01,2.9549);
myNode25.radius.set(5.012);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(0.0,0.0,0.0);
myNode25.innerRotation.angle.set(0.0);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addCylinder();
myNode26.point1.set(-0.003,0.005,-18.0999);
myNode26.point2.set(-0.003,0.005,-1.591000000000001);
myNode26.radius.set(4.71);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode26.innerRotation.angle.set(179.9999999997983);
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
myNode29.point1.set(-1.9879,-2.2729,2.7271);
myNode29.point2.set(18.0999,-1.7620999999999998,2.9539);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);
myNode29.innerTranslation.vector.set(8.056000000000001,-2.0175,2.8405);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addBox();
myNode30.point1.set(-3.4089,-2.2729,-2.9549);
myNode30.point2.set(-2.2731000000000003,2.2719000000000005,2.7269);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);
myNode30.innerTranslation.vector.set(-2.841,-0.0004999999999997229,-0.11399999999999988);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addCylinder();
myNode31.point1.set(-1.987,3.445,2.5001);
myNode31.point2.set(-1.987,3.445,18.0999);
myNode31.radius.set(0.453);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(0.0,0.0,0.0);
myNode31.innerRotation.angle.set(0.0);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32_1 = myNode28.clone();
myNode32_1.isVisible = false;
const myNode32_2 = object.addFuseOperation();
myNode32_2.leftArg.set(myNode32_1);
myNode32_2.rightArg.set(myNode29);
myNode32_2.isVisible = false;
const myNode32_3 = object.addFuseOperation();
myNode32_3.leftArg.set(myNode32_2);
myNode32_3.rightArg.set(myNode30);
myNode32_3.isVisible = false;
myNode32 = object.addFuseOperation();
myNode32.leftArg.set(myNode32_3);
myNode32.rightArg.set(myNode31);
myNode32.isVisible = false;
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addBox();
myNode33.point1.set(-3.75895,-1.59095,-2.95495);
myNode33.point2.set(-2.27205,1.59095,1.7039499999999999);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);
myNode33.innerTranslation.vector.set(-3.0155,0.0,-0.6255000000000002);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addBox();
myNode34.point1.set(-3.06795,-1.76095,-2.95495);
myNode34.point2.set(-2.72705,1.76195,1.8179499999999997);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(0.0,0.0,0.0);
myNode34.innerRotation.angle.set(0.0);
myNode34.innerTranslation.vector.set(-2.8975,0.0004999999999999449,-0.5685000000000002);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addBox();
myNode35.point1.set(-3.75895,2.27305,1.59105);
myNode35.point2.set(-2.72705,2.50595,2.72695);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,0.0);
myNode35.innerRotation.angle.set(0.0);
myNode35.innerTranslation.vector.set(-3.243,2.3895,2.159);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addFuseOperation();
myNode36.leftArg.set(myNode34);
myNode36.rightArg.set(myNode35);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addCylinder();
myNode37.point1.set(2.5,1.879,-3.068);
myNode37.point2.set(2.5,1.879,-2.727);
myNode37.radius.set(0.23);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode37.innerRotation.angle.set(89.99978954085029);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addCutOperation();
myNode38.leftArg.set(myNode36);
myNode38.rightArg.set(myNode37);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addSphere();
myNode39.center.set(0,0,0);
myNode39.radius.set(54.29990791889062);
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addCylinder();
myNode40.point1.set(0.028,0.016,-18.1);
myNode40.point2.set(0.028,0.016,2.9549999999999983);
myNode40.radius.set(5.03);
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
myNode42.point1.set(-1.989,3.444,2.50005);
myNode42.point2.set(-1.989,3.444,2.72695);
myNode42.radius.set(0.113);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0,0.0,0.0);
myNode42.innerRotation.angle.set(0.0);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43_1 = myNode33.clone();
myNode43_1.isVisible = false;
const myNode43_2 = object.addFuseOperation();
myNode43_2.leftArg.set(myNode43_1);
myNode43_2.rightArg.set(myNode38);
myNode43_2.isVisible = false;
const myNode43_3 = object.addFuseOperation();
myNode43_3.leftArg.set(myNode43_2);
myNode43_3.rightArg.set(myNode41);
myNode43_3.isVisible = false;
myNode43 = object.addFuseOperation();
myNode43.leftArg.set(myNode43_3);
myNode43.rightArg.set(myNode42);
myNode43.isVisible = false;
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44 = object.addCutOperation();
myNode44.leftArg.set(myNode32);
myNode44.rightArg.set(myNode43);
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45 = object.addFuseOperation();
myNode45.leftArg.set(myNode21);
myNode45.rightArg.set(myNode44);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addBox();
myNode46.point1.set(-5.9999,-5.9979,-3.5449);
myNode46.point2.set(5.9999,5.9979,3.5458999999999996);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(0.0,0.0,0.0);
myNode46.innerRotation.angle.set(0.0);
myNode46.innerTranslation.vector.set(0.0,0.0,0.0004999999999997229);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addCommonOperation();
myNode47.leftArg.set(myNode45);
myNode47.rightArg.set(myNode46);
myNode47.isVisible = true;


/*END Geometry Object Definition*/