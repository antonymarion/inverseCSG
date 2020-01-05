/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.9999,-5.9979,-3.5449);
myNode0.point2.set(11.9998,11.9958,7.0908);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(3.977,-0.001,-2.9549);
myNode1.point2.set(0,0,5.6818);
myNode1.radius.set(0.45);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(-0.003,0.005,-2.9549);
myNode2.point2.set(0,0,0.2268);
myNode2.radius.set(4.71);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode2.innerRotation.angle.set(3.141592653586273);

/* définition du node n°3*/
const myNode3 = object.addBox();
myNode3.point1.set(-3.0679,-2.5009,2.5001);
myNode3.point2.set(1.0798,5.0068,0.2268);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(-2.379,1.922,-2.50095);
myNode4.point2.set(0,0,5.0069);
myNode4.radius.set(0.352);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode4.innerRotation.angle.set(2.094392392986396);

/* définition du node n°5*/
const myNode5 = object.addCutOperation();
myNode5.leftArg.set(myNode3);
myNode5.rightArg.set(myNode4);

/* définition du node n°6*/
const myNode6 = object.addBox();
myNode6.point1.set(-3.7589,-2.5009,2.5001);
myNode6.point2.set(0.6908,5.0068,0.4548);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);

/* définition du node n°7*/
const myNode7 = object.addCylinder();
myNode7.point1.set(-2.373,3.759,-18.0999);
myNode7.point2.set(0,0,36.1999);
myNode7.radius.set(0.355);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode7.innerRotation.angle.set(2.094392392986396);

/* définition du node n°8*/
const myNode8 = object.addCutOperation();
myNode8.leftArg.set(myNode6);
myNode8.rightArg.set(myNode7);

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(-3.0679,-2.5009,-2.9549);
myNode9.point2.set(0.7948,0.9098,5.9088);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);

/* définition du node n°10*/
const myNode10 = object.addCylinder();
myNode10.point1.set(-1.988,-3.445,2.5001);
myNode10.point2.set(0,0,0.4548);
myNode10.radius.set(0.452);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);

/* définition du node n°11*/
const myNode11_1 = object.addFuseOperation();
myNode11_1.leftArg.set(myNode1);
myNode11_1.rightArg.set(myNode1);
const myNode11_2 = object.addFuseOperation();
myNode11_2.leftArg.set(myNode11_1);
myNode11_2.rightArg.set(myNode2);
const myNode11_3 = object.addFuseOperation();
myNode11_3.leftArg.set(myNode11_2);
myNode11_3.rightArg.set(myNode5);
const myNode11_4 = object.addFuseOperation();
myNode11_4.leftArg.set(myNode11_3);
myNode11_4.rightArg.set(myNode8);
const myNode11_5 = object.addFuseOperation();
myNode11_5.leftArg.set(myNode11_4);
myNode11_5.rightArg.set(myNode9);
myNode11 = object.addFuseOperation();
myNode11.leftArg.set(myNode11_5);
myNode11.rightArg.set(myNode10);

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(-0.045,-0.00100001,-18.0999);
myNode12.point2.set(0,0,36.1999);
myNode12.radius.set(0.795);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0028938703161114103,0.017293063626353244,-0.3316045510476236);
myNode12.innerRotation.angle.set(0.3320677684004992);

/* définition du node n°13*/
const myNode13 = object.addCylinder();
myNode13.point1.set(-1.987,-3.444,-18.0999);
myNode13.point2.set(0,0,20.8269);
myNode13.radius.set(0.113);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(-0.003,0.005,-2.49995);
myNode14.point2.set(0,0,20.5999);
myNode14.radius.set(4.71);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode14.innerRotation.angle.set(3.141592653586273);

/* définition du node n°15*/
const myNode15 = object.addCylinder();
myNode15.point1.set(2.501,-1.865,-18.1);
myNode15.point2.set(0,0,15.827);
myNode15.radius.set(0.219);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode15.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°16*/
const myNode16 = object.addCutOperation();
myNode16.leftArg.set(myNode14);
myNode16.rightArg.set(myNode15);

/* définition du node n°17*/
const myNode17 = object.addCylinder();
myNode17.point1.set(-2.501,-2.501,-3.75895);
myNode17.point2.set(0,0,21.8589);
myNode17.radius.set(0.226);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode17.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(-0.003,0.005,2.95505);
myNode18.point2.set(0,0,15.1449);
myNode18.radius.set(4.71);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode18.innerRotation.angle.set(3.141592653586273);

/* définition du node n°19*/
const myNode19 = object.addCylinder();
myNode19.point1.set(3.977,0.001,-18.0999);
myNode19.point2.set(0,0,20.8269);
myNode19.radius.set(0.113);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(0.0,0.0,0.0);
myNode19.innerRotation.angle.set(0.0);

/* définition du node n°20*/
const myNode20 = object.addCylinder();
myNode20.point1.set(-2.489,2.506,-18.0999);
myNode20.point2.set(0,0,16.1119);
myNode20.radius.set(0.236);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode20.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°21*/
const myNode21_1 = object.addFuseOperation();
myNode21_1.leftArg.set(myNode12);
myNode21_1.rightArg.set(myNode12);
const myNode21_2 = object.addFuseOperation();
myNode21_2.leftArg.set(myNode21_1);
myNode21_2.rightArg.set(myNode13);
const myNode21_3 = object.addFuseOperation();
myNode21_3.leftArg.set(myNode21_2);
myNode21_3.rightArg.set(myNode16);
const myNode21_4 = object.addFuseOperation();
myNode21_4.leftArg.set(myNode21_3);
myNode21_4.rightArg.set(myNode17);
const myNode21_5 = object.addFuseOperation();
myNode21_5.leftArg.set(myNode21_4);
myNode21_5.rightArg.set(myNode18);
const myNode21_6 = object.addFuseOperation();
myNode21_6.leftArg.set(myNode21_5);
myNode21_6.rightArg.set(myNode19);
myNode21 = object.addFuseOperation();
myNode21.leftArg.set(myNode21_6);
myNode21.rightArg.set(myNode20);

/* définition du node n°22*/
const myNode22 = object.addCutOperation();
myNode22.leftArg.set(myNode11);
myNode22.rightArg.set(myNode21);

/* définition du node n°23*/
const myNode23 = object.addCylinder();
myNode23.point1.set(-1.987,3.445,2.5001);
myNode23.point2.set(0,0,15.5998);
myNode23.radius.set(0.453);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);

/* définition du node n°24*/
const myNode24 = object.addSphere();
myNode24.center.set(0,0,0);
myNode24.radius.set(54.29981583762508);

/* définition du node n°25*/
const myNode25 = object.addBox();
myNode25.point1.set(-1.98795,-2.27295,-18.0999);
myNode25.point2.set(20.0879,3.8639,15.1449);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(0.0,0.0,0.0);
myNode25.innerRotation.angle.set(0.0);

/* définition du node n°26*/
const myNode26 = object.addCutOperation();
myNode26.leftArg.set(myNode24);
myNode26.rightArg.set(myNode25);

/* définition du node n°27*/
const myNode27 = object.addCylinder();
myNode27.point1.set(-0.016,-0.01,1.5911);
myNode27.point2.set(0,0,1.3638);
myNode27.radius.set(5.012);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);

/* définition du node n°28*/
const myNode28 = object.addCylinder();
myNode28.point1.set(-0.003,0.005,-18.0999);
myNode28.point2.set(0,0,16.5089);
myNode28.radius.set(4.71);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode28.innerRotation.angle.set(3.141592653586273);

/* définition du node n°29*/
const myNode29 = object.addCutOperation();
myNode29.leftArg.set(myNode27);
myNode29.rightArg.set(myNode28);

/* définition du node n°30*/
const myNode30 = object.addCommonOperation();
myNode30.leftArg.set(myNode26);
myNode30.rightArg.set(myNode29);

/* définition du node n°31*/
const myNode31 = object.addBox();
myNode31.point1.set(-1.9879,-2.2729,2.7271);
myNode31.point2.set(20.0878,0.5108,0.2268);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(0.0,0.0,0.0);
myNode31.innerRotation.angle.set(0.0);

/* définition du node n°32*/
const myNode32 = object.addBox();
myNode32.point1.set(-3.4089,-2.2729,-2.9549);
myNode32.point2.set(1.1358,4.5448,5.6818);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);

/* définition du node n°33*/
const myNode33_1 = object.addFuseOperation();
myNode33_1.leftArg.set(myNode23);
myNode33_1.rightArg.set(myNode23);
const myNode33_2 = object.addFuseOperation();
myNode33_2.leftArg.set(myNode33_1);
myNode33_2.rightArg.set(myNode30);
const myNode33_3 = object.addFuseOperation();
myNode33_3.leftArg.set(myNode33_2);
myNode33_3.rightArg.set(myNode31);
myNode33 = object.addFuseOperation();
myNode33.leftArg.set(myNode33_3);
myNode33.rightArg.set(myNode32);

/* définition du node n°34*/
const myNode34 = object.addCylinder();
myNode34.point1.set(-1.989,3.444,2.50005);
myNode34.point2.set(0,0,0.2269);
myNode34.radius.set(0.113);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(0.0,0.0,0.0);
myNode34.innerRotation.angle.set(0.0);

/* définition du node n°35*/
const myNode35 = object.addBox();
myNode35.point1.set(-3.75895,-1.59095,-2.95495);
myNode35.point2.set(1.4869,3.1819,4.6589);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,0.0);
myNode35.innerRotation.angle.set(0.0);

/* définition du node n°36*/
const myNode36 = object.addBox();
myNode36.point1.set(-3.75895,2.27305,1.59105);
myNode36.point2.set(1.0319,0.2329,1.1359);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(0.0,0.0,0.0);
myNode36.innerRotation.angle.set(0.0);

/* définition du node n°37*/
const myNode37 = object.addBox();
myNode37.point1.set(-3.06795,-1.76095,-2.95495);
myNode37.point2.set(0.3409,3.5229,4.7729);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0,0.0,0.0);
myNode37.innerRotation.angle.set(0.0);

/* définition du node n°38*/
const myNode38 = object.addFuseOperation();
myNode38.leftArg.set(myNode36);
myNode38.rightArg.set(myNode37);

/* définition du node n°39*/
const myNode39 = object.addCylinder();
myNode39.point1.set(2.5,1.879,-3.068);
myNode39.point2.set(0,0,0.341);
myNode39.radius.set(0.23);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode39.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°40*/
const myNode40 = object.addCutOperation();
myNode40.leftArg.set(myNode38);
myNode40.rightArg.set(myNode39);

/* définition du node n°41*/
const myNode41 = object.addSphere();
myNode41.center.set(0,0,0);
myNode41.radius.set(54.29990791889062);

/* définition du node n°42*/
const myNode42 = object.addCylinder();
myNode42.point1.set(0.028,0.016,-18.1);
myNode42.point2.set(0,0,21.055);
myNode42.radius.set(5.03);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0,0.0,0.0);
myNode42.innerRotation.angle.set(0.0);

/* définition du node n°43*/
const myNode43 = object.addCutOperation();
myNode43.leftArg.set(myNode41);
myNode43.rightArg.set(myNode42);

/* définition du node n°44*/
const myNode44_1 = object.addFuseOperation();
myNode44_1.leftArg.set(myNode34);
myNode44_1.rightArg.set(myNode34);
const myNode44_2 = object.addFuseOperation();
myNode44_2.leftArg.set(myNode44_1);
myNode44_2.rightArg.set(myNode35);
const myNode44_3 = object.addFuseOperation();
myNode44_3.leftArg.set(myNode44_2);
myNode44_3.rightArg.set(myNode40);
myNode44 = object.addFuseOperation();
myNode44.leftArg.set(myNode44_3);
myNode44.rightArg.set(myNode43);

/* définition du node n°45*/
const myNode45 = object.addCutOperation();
myNode45.leftArg.set(myNode33);
myNode45.rightArg.set(myNode44);

/* définition du node n°46*/
const myNode46 = object.addFuseOperation();
myNode46.leftArg.set(myNode22);
myNode46.rightArg.set(myNode45);

/* définition du node n°47*/
const myNode47 = object.addCommonOperation();
myNode47.leftArg.set(myNode0);
myNode47.rightArg.set(myNode46);
/*END Geometry Object Definition*/