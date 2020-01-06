/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.9999,-5.9979,-3.5449);
myNode0.point2.set(5.9999,5.9979,3.5458999999999996);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.isVisible = False

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-3.4089,-2.2729,-2.9549);
myNode1.point2.set(-2.2731000000000003,2.2719000000000005,2.7269);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.isVisible = False

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(-0.016,-0.01,1.5911);
myNode2.point2.set(-0.016,-0.01,2.9549);
myNode2.radius.set(5.012);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.isVisible = False

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(-0.003,0.005,-18.0999);
myNode3.point2.set(-0.003,0.005,-1.591000000000001);
myNode3.radius.set(4.71);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode3.innerRotation.angle.set(3.141592653586273);
myNode3.isVisible = False

/* définition du node n°4*/
const myNode4 = object.addCutOperation();
myNode4.leftArg.set(myNode2);
myNode4.rightArg.set(myNode3);
myNode4.isVisible = False

/* définition du node n°5*/
const myNode5 = object.addSphere();
myNode5.center.set(0,0,0);
myNode5.radius.set(54.29981583762508);
myNode5.isVisible = False

/* définition du node n°6*/
const myNode6 = object.addBox();
myNode6.point1.set(-1.98795,-2.27295,-18.0999);
myNode6.point2.set(18.09995,1.5909500000000003,-2.955000000000002);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.isVisible = False

/* définition du node n°7*/
const myNode7 = object.addCutOperation();
myNode7.leftArg.set(myNode5);
myNode7.rightArg.set(myNode6);
myNode7.isVisible = False

/* définition du node n°8*/
const myNode8 = object.addCommonOperation();
myNode8.leftArg.set(myNode4);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = False

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(-1.9879,-2.2729,2.7271);
myNode9.point2.set(18.0999,-1.7620999999999998,2.9539);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.isVisible = False

/* définition du node n°10*/
const myNode10 = object.addCylinder();
myNode10.point1.set(-1.987,3.445,2.5001);
myNode10.point2.set(-1.987,3.445,18.0999);
myNode10.radius.set(0.453);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.isVisible = False

/* définition du node n°11*/
const myNode11_1 = object.addFuseOperation();
myNode11_1.leftArg.set(myNode1);
myNode11_1.rightArg.set(myNode1);
const myNode11_2 = object.addFuseOperation();
myNode11_2.leftArg.set(myNode11_1);
myNode11_2.rightArg.set(myNode8);
const myNode11_3 = object.addFuseOperation();
myNode11_3.leftArg.set(myNode11_2);
myNode11_3.rightArg.set(myNode9);
myNode11 = object.addFuseOperation();
myNode11.leftArg.set(myNode11_3);
myNode11.rightArg.set(myNode10);
myNode11.isVisible = False

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(-1.989,3.444,2.50005);
myNode12.point2.set(-1.989,3.444,2.72695);
myNode12.radius.set(0.113);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);
myNode12.isVisible = False

/* définition du node n°13*/
const myNode13 = object.addBox();
myNode13.point1.set(-3.75895,-1.59095,-2.95495);
myNode13.point2.set(-2.27205,1.59095,1.7039499999999999);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);
myNode13.isVisible = False

/* définition du node n°14*/
const myNode14 = object.addSphere();
myNode14.center.set(0,0,0);
myNode14.radius.set(54.29990791889062);
myNode14.isVisible = False

/* définition du node n°15*/
const myNode15 = object.addCylinder();
myNode15.point1.set(0.028,0.016,-18.1);
myNode15.point2.set(0.028,0.016,2.9549999999999983);
myNode15.radius.set(5.03);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);
myNode15.isVisible = False

/* définition du node n°16*/
const myNode16 = object.addCutOperation();
myNode16.leftArg.set(myNode14);
myNode16.rightArg.set(myNode15);
myNode16.isVisible = False

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(-3.75895,2.27305,1.59105);
myNode17.point2.set(-2.72705,2.50595,2.72695);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.isVisible = False

/* définition du node n°18*/
const myNode18 = object.addBox();
myNode18.point1.set(-3.06795,-1.76095,-2.95495);
myNode18.point2.set(-2.72705,1.76195,1.8179499999999997);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);
myNode18.isVisible = False

/* définition du node n°19*/
const myNode19 = object.addFuseOperation();
myNode19.leftArg.set(myNode17);
myNode19.rightArg.set(myNode18);
myNode19.isVisible = False

/* définition du node n°20*/
const myNode20 = object.addCylinder();
myNode20.point1.set(2.5,1.879,-3.068);
myNode20.point2.set(2.5,1.879,-2.727);
myNode20.radius.set(0.23);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode20.innerRotation.angle.set(1.5707926535897931);
myNode20.isVisible = False

/* définition du node n°21*/
const myNode21 = object.addCutOperation();
myNode21.leftArg.set(myNode19);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = False

/* définition du node n°22*/
const myNode22_1 = object.addFuseOperation();
myNode22_1.leftArg.set(myNode12);
myNode22_1.rightArg.set(myNode12);
const myNode22_2 = object.addFuseOperation();
myNode22_2.leftArg.set(myNode22_1);
myNode22_2.rightArg.set(myNode13);
const myNode22_3 = object.addFuseOperation();
myNode22_3.leftArg.set(myNode22_2);
myNode22_3.rightArg.set(myNode16);
myNode22 = object.addFuseOperation();
myNode22.leftArg.set(myNode22_3);
myNode22.rightArg.set(myNode21);
myNode22.isVisible = False

/* définition du node n°23*/
const myNode23 = object.addCutOperation();
myNode23.leftArg.set(myNode11);
myNode23.rightArg.set(myNode22);
myNode23.isVisible = False

/* définition du node n°24*/
const myNode24 = object.addBox();
myNode24.point1.set(-3.7589,-2.5009,2.5001);
myNode24.point2.set(-3.0681000000000003,2.5059,2.9549000000000003);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);
myNode24.isVisible = False

/* définition du node n°25*/
const myNode25 = object.addCylinder();
myNode25.point1.set(-2.373,3.759,-18.0999);
myNode25.point2.set(-2.373,3.759,18.099999999999998);
myNode25.radius.set(0.355);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode25.innerRotation.angle.set(2.094392392986396);
myNode25.isVisible = False

/* définition du node n°26*/
const myNode26 = object.addCutOperation();
myNode26.leftArg.set(myNode24);
myNode26.rightArg.set(myNode25);
myNode26.isVisible = False

/* définition du node n°27*/
const myNode27 = object.addCylinder();
myNode27.point1.set(-1.988,-3.445,2.5001);
myNode27.point2.set(-1.988,-3.445,2.9549000000000003);
myNode27.radius.set(0.452);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);
myNode27.isVisible = False

/* définition du node n°28*/
const myNode28 = object.addBox();
myNode28.point1.set(-3.0679,-2.5009,-2.9549);
myNode28.point2.set(-2.2731,-1.5911,2.9539000000000004);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(0.0,0.0,0.0);
myNode28.innerRotation.angle.set(0.0);
myNode28.isVisible = False

/* définition du node n°29*/
const myNode29 = object.addCylinder();
myNode29.point1.set(-0.003,0.005,-2.9549);
myNode29.point2.set(-0.003,0.005,-2.7281);
myNode29.radius.set(4.71);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode29.innerRotation.angle.set(3.141592653586273);
myNode29.isVisible = False

/* définition du node n°30*/
const myNode30 = object.addBox();
myNode30.point1.set(-3.0679,-2.5009,2.5001);
myNode30.point2.set(-1.9880999999999998,2.5059,2.7269);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);
myNode30.isVisible = False

/* définition du node n°31*/
const myNode31 = object.addCylinder();
myNode31.point1.set(-2.379,1.922,-2.50095);
myNode31.point2.set(-2.379,1.922,2.50595);
myNode31.radius.set(0.352);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode31.innerRotation.angle.set(2.094392392986396);
myNode31.isVisible = False

/* définition du node n°32*/
const myNode32 = object.addCutOperation();
myNode32.leftArg.set(myNode30);
myNode32.rightArg.set(myNode31);
myNode32.isVisible = False

/* définition du node n°33*/
const myNode33 = object.addCylinder();
myNode33.point1.set(3.977,-0.001,-2.9549);
myNode33.point2.set(3.977,-0.001,2.7269);
myNode33.radius.set(0.45);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);
myNode33.isVisible = False

/* définition du node n°34*/
const myNode34_1 = object.addFuseOperation();
myNode34_1.leftArg.set(myNode26);
myNode34_1.rightArg.set(myNode26);
const myNode34_2 = object.addFuseOperation();
myNode34_2.leftArg.set(myNode34_1);
myNode34_2.rightArg.set(myNode27);
const myNode34_3 = object.addFuseOperation();
myNode34_3.leftArg.set(myNode34_2);
myNode34_3.rightArg.set(myNode28);
const myNode34_4 = object.addFuseOperation();
myNode34_4.leftArg.set(myNode34_3);
myNode34_4.rightArg.set(myNode29);
const myNode34_5 = object.addFuseOperation();
myNode34_5.leftArg.set(myNode34_4);
myNode34_5.rightArg.set(myNode32);
myNode34 = object.addFuseOperation();
myNode34.leftArg.set(myNode34_5);
myNode34.rightArg.set(myNode33);
myNode34.isVisible = False

/* définition du node n°35*/
const myNode35 = object.addCylinder();
myNode35.point1.set(-0.003,0.005,2.95505);
myNode35.point2.set(-0.003,0.005,18.09995);
myNode35.radius.set(4.71);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode35.innerRotation.angle.set(3.141592653586273);
myNode35.isVisible = False

/* définition du node n°36*/
const myNode36 = object.addCylinder();
myNode36.point1.set(3.977,0.001,-18.0999);
myNode36.point2.set(3.977,0.001,2.7269999999999968);
myNode36.radius.set(0.113);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(0.0,0.0,0.0);
myNode36.innerRotation.angle.set(0.0);
myNode36.isVisible = False

/* définition du node n°37*/
const myNode37 = object.addCylinder();
myNode37.point1.set(-1.987,-3.444,-18.0999);
myNode37.point2.set(-1.987,-3.444,2.7269999999999968);
myNode37.radius.set(0.113);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0,0.0,0.0);
myNode37.innerRotation.angle.set(0.0);
myNode37.isVisible = False

/* définition du node n°38*/
const myNode38 = object.addCylinder();
myNode38.point1.set(-0.003,0.005,-2.49995);
myNode38.point2.set(-0.003,0.005,18.09995);
myNode38.radius.set(4.71);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode38.innerRotation.angle.set(3.141592653586273);
myNode38.isVisible = False

/* définition du node n°39*/
const myNode39 = object.addCylinder();
myNode39.point1.set(2.501,-1.865,-18.1);
myNode39.point2.set(2.501,-1.865,-2.2730000000000015);
myNode39.radius.set(0.219);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode39.innerRotation.angle.set(1.5707926535897931);
myNode39.isVisible = False

/* définition du node n°40*/
const myNode40 = object.addCutOperation();
myNode40.leftArg.set(myNode38);
myNode40.rightArg.set(myNode39);
myNode40.isVisible = False

/* définition du node n°41*/
const myNode41 = object.addCylinder();
myNode41.point1.set(-2.489,2.506,-18.0999);
myNode41.point2.set(-2.489,2.506,-1.988000000000003);
myNode41.radius.set(0.236);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode41.innerRotation.angle.set(1.5707926535897931);
myNode41.isVisible = False

/* définition du node n°42*/
const myNode42 = object.addCylinder();
myNode42.point1.set(-0.045,-0.00100001,-18.0999);
myNode42.point2.set(-0.045,-0.00100001,18.099999999999998);
myNode42.radius.set(0.795);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0028938703161114103,0.017293063626353244,-0.3316045510476236);
myNode42.innerRotation.angle.set(0.3320677684004992);
myNode42.isVisible = False

/* définition du node n°43*/
const myNode43 = object.addCylinder();
myNode43.point1.set(-2.501,-2.501,-3.75895);
myNode43.point2.set(-2.501,-2.501,18.09995);
myNode43.radius.set(0.226);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode43.innerRotation.angle.set(1.5707926535897931);
myNode43.isVisible = False

/* définition du node n°44*/
const myNode44_1 = object.addFuseOperation();
myNode44_1.leftArg.set(myNode35);
myNode44_1.rightArg.set(myNode35);
const myNode44_2 = object.addFuseOperation();
myNode44_2.leftArg.set(myNode44_1);
myNode44_2.rightArg.set(myNode36);
const myNode44_3 = object.addFuseOperation();
myNode44_3.leftArg.set(myNode44_2);
myNode44_3.rightArg.set(myNode37);
const myNode44_4 = object.addFuseOperation();
myNode44_4.leftArg.set(myNode44_3);
myNode44_4.rightArg.set(myNode40);
const myNode44_5 = object.addFuseOperation();
myNode44_5.leftArg.set(myNode44_4);
myNode44_5.rightArg.set(myNode41);
const myNode44_6 = object.addFuseOperation();
myNode44_6.leftArg.set(myNode44_5);
myNode44_6.rightArg.set(myNode42);
myNode44 = object.addFuseOperation();
myNode44.leftArg.set(myNode44_6);
myNode44.rightArg.set(myNode43);
myNode44.isVisible = False

/* définition du node n°45*/
const myNode45 = object.addCutOperation();
myNode45.leftArg.set(myNode34);
myNode45.rightArg.set(myNode44);
myNode45.isVisible = False

/* définition du node n°46*/
const myNode46 = object.addFuseOperation();
myNode46.leftArg.set(myNode23);
myNode46.rightArg.set(myNode45);
myNode46.isVisible = False

/* définition du node n°47*/
const myNode47 = object.addCommonOperation();
myNode47.leftArg.set(myNode0);
myNode47.rightArg.set(myNode46);
myNode47.isVisible = True


/*END Geometry Object Definition*/