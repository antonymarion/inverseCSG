/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-1.9879,-2.2729,2.7271);
myNode0.point2.set(18.0999,-1.7620999999999998,2.9539);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(0,0,0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addSphere();
myNode1.center.set(0,0,0);
myNode1.radius.set(54.29981583762508);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-1.98795,-2.27295,-18.0999);
myNode2.point2.set(18.09995,1.5909500000000003,-2.955000000000002);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.innerTranslation.vector.set(0,0,0);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addCutOperation();
myNode3.leftArg.set(myNode1);
myNode3.rightArg.set(myNode2);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(-0.016,-0.01,1.5911);
myNode4.point2.set(-0.016,-0.01,2.9549);
myNode4.radius.set(5.012);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(-0.003,0.005,-18.0999);
myNode5.point2.set(-0.003,0.005,-1.591000000000001);
myNode5.radius.set(4.71);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode5.innerRotation.angle.set(179.9999999997983);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addCutOperation();
myNode6.leftArg.set(myNode4);
myNode6.rightArg.set(myNode5);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addCommonOperation();
myNode7.leftArg.set(myNode3);
myNode7.rightArg.set(myNode6);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addBox();
myNode8.point1.set(-3.4089,-2.2729,-2.9549);
myNode8.point2.set(-2.2731000000000003,2.2719000000000005,2.7269);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.innerTranslation.vector.set(0,0,0);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addCylinder();
myNode9.point1.set(-1.987,3.445,2.5001);
myNode9.point2.set(-1.987,3.445,18.0999);
myNode9.radius.set(0.453);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10_1 = myNode0.clone();
myNode10_1.isVisible = false;
const myNode10_2 = object.addFuseOperation();
myNode10_2.leftArg.set(myNode10_1);
myNode10_2.rightArg.set(myNode7);
myNode10_2.isVisible = false;
const myNode10_3 = object.addFuseOperation();
myNode10_3.leftArg.set(myNode10_2);
myNode10_3.rightArg.set(myNode8);
myNode10_3.isVisible = false;
myNode10 = object.addFuseOperation();
myNode10.leftArg.set(myNode10_3);
myNode10.rightArg.set(myNode9);
myNode10.isVisible = false;
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addSphere();
myNode11.center.set(0,0,0);
myNode11.radius.set(54.29990791889062);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(0.028,0.016,-18.1);
myNode12.point2.set(0.028,0.016,2.9549999999999983);
myNode12.radius.set(5.03);
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
myNode14.point1.set(-3.75895,-1.59095,-2.95495);
myNode14.point2.set(-2.27205,1.59095,1.7039499999999999);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);
myNode14.innerTranslation.vector.set(0,0,0);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addCylinder();
myNode15.point1.set(-1.989,3.444,2.50005);
myNode15.point2.set(-1.989,3.444,2.72695);
myNode15.radius.set(0.113);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addBox();
myNode16.point1.set(-3.06795,-1.76095,-2.95495);
myNode16.point2.set(-2.72705,1.76195,1.8179499999999997);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);
myNode16.innerTranslation.vector.set(0,0,0);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(-3.75895,2.27305,1.59105);
myNode17.point2.set(-2.72705,2.50595,2.72695);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.innerTranslation.vector.set(0,0,0);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addFuseOperation();
myNode18.leftArg.set(myNode16);
myNode18.rightArg.set(myNode17);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addCylinder();
myNode19.point1.set(2.5,1.879,-3.068);
myNode19.point2.set(2.5,1.879,-2.727);
myNode19.radius.set(0.23);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode19.innerRotation.angle.set(89.99978954085029);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addCutOperation();
myNode20.leftArg.set(myNode18);
myNode20.rightArg.set(myNode19);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21_1 = myNode13.clone();
myNode21_1.isVisible = false;
const myNode21_2 = object.addFuseOperation();
myNode21_2.leftArg.set(myNode21_1);
myNode21_2.rightArg.set(myNode14);
myNode21_2.isVisible = false;
const myNode21_3 = object.addFuseOperation();
myNode21_3.leftArg.set(myNode21_2);
myNode21_3.rightArg.set(myNode15);
myNode21_3.isVisible = false;
myNode21 = object.addFuseOperation();
myNode21.leftArg.set(myNode21_3);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = false;
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addCutOperation();
myNode22.leftArg.set(myNode10);
myNode22.rightArg.set(myNode21);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addBox();
myNode23.point1.set(-3.0679,-2.5009,-2.9549);
myNode23.point2.set(-2.2731,-1.5911,2.9539000000000004);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);
myNode23.innerTranslation.vector.set(0,0,0);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addCylinder();
myNode24.point1.set(-1.988,-3.445,2.5001);
myNode24.point2.set(-1.988,-3.445,2.9549000000000003);
myNode24.radius.set(0.452);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addBox();
myNode25.point1.set(-3.7589,-2.5009,2.5001);
myNode25.point2.set(-3.0681000000000003,2.5059,2.9549000000000003);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(0.0,0.0,0.0);
myNode25.innerRotation.angle.set(0.0);
myNode25.innerTranslation.vector.set(0,0,0);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addCylinder();
myNode26.point1.set(-2.373,3.759,-18.0999);
myNode26.point2.set(-2.373,3.759,18.099999999999998);
myNode26.radius.set(0.355);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode26.innerRotation.angle.set(119.9998447624254);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addCutOperation();
myNode27.leftArg.set(myNode25);
myNode27.rightArg.set(myNode26);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addCylinder();
myNode28.point1.set(-0.003,0.005,-2.9549);
myNode28.point2.set(-0.003,0.005,-2.7281);
myNode28.radius.set(4.71);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode28.innerRotation.angle.set(179.9999999997983);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addCylinder();
myNode29.point1.set(3.977,-0.001,-2.9549);
myNode29.point2.set(3.977,-0.001,2.7269);
myNode29.radius.set(0.45);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addBox();
myNode30.point1.set(-3.0679,-2.5009,2.5001);
myNode30.point2.set(-1.9880999999999998,2.5059,2.7269);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);
myNode30.innerTranslation.vector.set(0,0,0);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addCylinder();
myNode31.point1.set(-2.379,1.922,-2.50095);
myNode31.point2.set(-2.379,1.922,2.50595);
myNode31.radius.set(0.352);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode31.innerRotation.angle.set(119.9998447624254);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addCutOperation();
myNode32.leftArg.set(myNode30);
myNode32.rightArg.set(myNode31);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33_1 = myNode23.clone();
myNode33_1.isVisible = false;
const myNode33_2 = object.addFuseOperation();
myNode33_2.leftArg.set(myNode33_1);
myNode33_2.rightArg.set(myNode24);
myNode33_2.isVisible = false;
const myNode33_3 = object.addFuseOperation();
myNode33_3.leftArg.set(myNode33_2);
myNode33_3.rightArg.set(myNode27);
myNode33_3.isVisible = false;
const myNode33_4 = object.addFuseOperation();
myNode33_4.leftArg.set(myNode33_3);
myNode33_4.rightArg.set(myNode28);
myNode33_4.isVisible = false;
const myNode33_5 = object.addFuseOperation();
myNode33_5.leftArg.set(myNode33_4);
myNode33_5.rightArg.set(myNode29);
myNode33_5.isVisible = false;
myNode33 = object.addFuseOperation();
myNode33.leftArg.set(myNode33_5);
myNode33.rightArg.set(myNode32);
myNode33.isVisible = false;
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addCylinder();
myNode34.point1.set(-2.489,2.506,-18.0999);
myNode34.point2.set(-2.489,2.506,-1.988000000000003);
myNode34.radius.set(0.236);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode34.innerRotation.angle.set(89.99978954085029);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addCylinder();
myNode35.point1.set(-2.501,-2.501,-3.75895);
myNode35.point2.set(-2.501,-2.501,18.09995);
myNode35.radius.set(0.226);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode35.innerRotation.angle.set(89.99978954085029);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addCylinder();
myNode36.point1.set(-0.003,0.005,2.95505);
myNode36.point2.set(-0.003,0.005,18.09995);
myNode36.radius.set(4.71);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode36.innerRotation.angle.set(179.9999999997983);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addCylinder();
myNode37.point1.set(-0.045,-0.00100001,-18.0999);
myNode37.point2.set(-0.045,-0.00100001,18.099999999999998);
myNode37.radius.set(0.795);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0028938703161114103,0.017293063626353244,-0.3316045510476236);
myNode37.innerRotation.angle.set(19.026081641676285);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addCylinder();
myNode38.point1.set(-0.003,0.005,-2.49995);
myNode38.point2.set(-0.003,0.005,18.09995);
myNode38.radius.set(4.71);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode38.innerRotation.angle.set(179.9999999997983);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addCylinder();
myNode39.point1.set(2.501,-1.865,-18.1);
myNode39.point2.set(2.501,-1.865,-2.2730000000000015);
myNode39.radius.set(0.219);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode39.innerRotation.angle.set(89.99978954085029);
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addCutOperation();
myNode40.leftArg.set(myNode38);
myNode40.rightArg.set(myNode39);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41 = object.addCylinder();
myNode41.point1.set(3.977,0.001,-18.0999);
myNode41.point2.set(3.977,0.001,2.7269999999999968);
myNode41.radius.set(0.113);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,0.0,0.0);
myNode41.innerRotation.angle.set(0.0);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addCylinder();
myNode42.point1.set(-1.987,-3.444,-18.0999);
myNode42.point2.set(-1.987,-3.444,2.7269999999999968);
myNode42.radius.set(0.113);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0,0.0,0.0);
myNode42.innerRotation.angle.set(0.0);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43_1 = myNode34.clone();
myNode43_1.isVisible = false;
const myNode43_2 = object.addFuseOperation();
myNode43_2.leftArg.set(myNode43_1);
myNode43_2.rightArg.set(myNode35);
myNode43_2.isVisible = false;
const myNode43_3 = object.addFuseOperation();
myNode43_3.leftArg.set(myNode43_2);
myNode43_3.rightArg.set(myNode36);
myNode43_3.isVisible = false;
const myNode43_4 = object.addFuseOperation();
myNode43_4.leftArg.set(myNode43_3);
myNode43_4.rightArg.set(myNode37);
myNode43_4.isVisible = false;
const myNode43_5 = object.addFuseOperation();
myNode43_5.leftArg.set(myNode43_4);
myNode43_5.rightArg.set(myNode40);
myNode43_5.isVisible = false;
const myNode43_6 = object.addFuseOperation();
myNode43_6.leftArg.set(myNode43_5);
myNode43_6.rightArg.set(myNode41);
myNode43_6.isVisible = false;
myNode43 = object.addFuseOperation();
myNode43.leftArg.set(myNode43_6);
myNode43.rightArg.set(myNode42);
myNode43.isVisible = false;
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44 = object.addCutOperation();
myNode44.leftArg.set(myNode33);
myNode44.rightArg.set(myNode43);
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45 = object.addFuseOperation();
myNode45.leftArg.set(myNode22);
myNode45.rightArg.set(myNode44);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addBox();
myNode46.point1.set(-5.9999,-5.9979,-3.5449);
myNode46.point2.set(5.9999,5.9979,3.5458999999999996);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(0.0,0.0,0.0);
myNode46.innerRotation.angle.set(0.0);
myNode46.innerTranslation.vector.set(0,0,0);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addCommonOperation();
myNode47.leftArg.set(myNode45);
myNode47.rightArg.set(myNode46);
myNode47.isVisible = true;


/*END Geometry Object Definition*/