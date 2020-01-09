/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.8959,-5.9999,-4.0229);
myNode0.point2.set(5.8959,5.9999,4.0229);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(0.0,0.0,0.0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-18.0999,-18.0999,-18.0999);
myNode1.point2.set(18.0999,-1.307100000000002,-1.8211000000000013);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.innerTranslation.vector.set(0.0,-9.703500000000002,-9.960500000000001);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(-1.733,-2.853,-3.3519);
myNode2.point2.set(-1.733,-2.853,18.099899999999998);
myNode2.radius.set(0.34);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(3.893,0.005,-3.3519);
myNode3.point2.set(3.893,0.005,-2.2161);
myNode3.radius.set(0.456);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addFuseOperation();
myNode4.leftArg.set(myNode2);
myNode4.rightArg.set(myNode3);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addCommonOperation();
myNode5.leftArg.set(myNode1);
myNode5.rightArg.set(myNode4);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addCylinder();
myNode6.point1.set(-1.735,-2.854,-3.35195);
myNode6.point2.set(-1.735,-2.854,-1.82105);
myNode6.radius.set(0.113);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addCutOperation();
myNode7.leftArg.set(myNode5);
myNode7.rightArg.set(myNode6);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addCylinder();
myNode8.point1.set(-0.086,-0.007,-3.3519);
myNode8.point2.set(-0.086,-0.007,18.099899999999998);
myNode8.radius.set(4.998);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(-18.0999,1.3641,-18.0999);
myNode9.point2.set(2.9808999999999983,1.7049,-2.216100000000001);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.innerTranslation.vector.set(-7.559500000000002,1.5345,-10.158000000000001);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addCylinder();
myNode10.point1.set(-2.076,-3.445,-18.0999);
myNode10.point2.set(-2.076,-3.445,-3.352100000000002);
myNode10.radius.set(0.453);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addFuseOperation();
myNode11.leftArg.set(myNode9);
myNode11.rightArg.set(myNode10);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCommonOperation();
myNode12.leftArg.set(myNode8);
myNode12.rightArg.set(myNode11);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addCylinder();
myNode13.point1.set(0.085,-0.007,-18.0999);
myNode13.point2.set(0.085,-0.007,3.351899999999997);
myNode13.radius.set(4.198);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode13.innerRotation.angle.set(3.141592653586273);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(-1.634,1.803,-18.0999);
myNode14.point2.set(-1.634,1.803,18.099999999999998);
myNode14.radius.set(0.581);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode14.innerRotation.angle.set(2.094392392986396);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addCutOperation();
myNode15.leftArg.set(myNode13);
myNode15.rightArg.set(myNode14);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addBox();
myNode16.point1.set(0.25405,1.36405,-3.35195);
myNode16.point2.set(18.09995,18.09995,1.63395);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);
myNode16.innerTranslation.vector.set(9.177,9.732000000000001,-0.859);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(-18.0999,-18.0999,-18.0999);
myNode17.point2.set(18.099999999999998,1.3639999999999972,18.099999999999998);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.innerTranslation.vector.set(4.9999999998107114e-05,-8.367950000000002,4.9999999998107114e-05);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addFuseOperation();
myNode18.leftArg.set(myNode16);
myNode18.rightArg.set(myNode17);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addCutOperation();
myNode19.leftArg.set(myNode15);
myNode19.rightArg.set(myNode18);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addBox();
myNode20.point1.set(0.2541,1.3641,-3.3519);
myNode20.point2.set(1.0499,1.7049,1.6339000000000001);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);
myNode20.innerTranslation.vector.set(0.6519999999999999,1.5345,-0.859);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addCylinder();
myNode21.point1.set(-2.791,1.511,1.0231);
myNode21.point2.set(-2.791,1.511,18.099899999999998);
myNode21.radius.set(0.228);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode21.innerRotation.angle.set(2.094392392986396);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addSphere();
myNode22.center.set(1.334,1.446,2.786);
myNode22.radius.set(0.28079992877491977);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addCylinder();
myNode23.point1.set(-2.795,-1.329,-18.0999);
myNode23.point2.set(-2.795,-1.329,18.0999);
myNode23.radius.set(0.227);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(-1.2220390490453152,1.22204672454102,1.2008907288903108);
myNode23.innerRotation.angle.set(2.1044990323323307);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24_1 = myNode19.clone();
myNode24_1.isVisible = false;
const myNode24_2 = object.addFuseOperation();
myNode24_2.leftArg.set(myNode24_1);
myNode24_2.rightArg.set(myNode20);
myNode24_2.isVisible = false;
const myNode24_3 = object.addFuseOperation();
myNode24_3.leftArg.set(myNode24_2);
myNode24_3.rightArg.set(myNode21);
myNode24_3.isVisible = false;
const myNode24_4 = object.addFuseOperation();
myNode24_4.leftArg.set(myNode24_3);
myNode24_4.rightArg.set(myNode22);
myNode24_4.isVisible = false;
myNode24 = object.addFuseOperation();
myNode24.leftArg.set(myNode24_4);
myNode24.rightArg.set(myNode23);
myNode24.isVisible = false;
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addCylinder();
myNode25.point1.set(-2.218,0.091,-18.0999);
myNode25.point2.set(-2.218,0.091,1.7049999999999983);
myNode25.radius.set(0.678);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode25.innerRotation.angle.set(2.094392392986396);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addBox();
myNode26.point1.set(-1.90495,-18.0999,-1.87395);
myNode26.point2.set(-1.22305,1.7049999999999983,1.6339499999999998);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);
myNode26.innerTranslation.vector.set(-1.564,-8.197450000000002,-0.1200000000000001);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addCylinder();
myNode27.point1.set(0.517,0.105,-18.1);
myNode27.point2.set(0.517,0.105,18.099899999999998);
myNode27.radius.set(0.453);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(-1.1963418233785224,1.2174017425887051,1.1963373516041578);
myNode27.innerRotation.angle.set(2.0843521343731517);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addBox();
myNode28.point1.set(-18.0999,-18.0999,-1.87395);
myNode28.point2.set(18.099999999999998,18.099999999999998,18.09995);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(0.0,0.0,0.0);
myNode28.innerRotation.angle.set(0.0);
myNode28.innerTranslation.vector.set(4.9999999998107114e-05,4.9999999998107114e-05,8.113);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addBox();
myNode29.point1.set(-1.905,1.023,-3.352);
myNode29.point2.set(1.732,1.705,3.353);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);
myNode29.innerTranslation.vector.set(-0.08650000000000002,1.3639999999999999,0.000500000000000167);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addCutOperation();
myNode30.leftArg.set(myNode28);
myNode30.rightArg.set(myNode29);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addCylinder();
myNode31.point1.set(-0.74,0.087,1.36405);
myNode31.point2.set(-0.74,0.087,1.70495);
myNode31.radius.set(0.567);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode31.innerRotation.angle.set(2.094392392986396);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addBox();
myNode32.point1.set(-18.0999,1.36405,-3.35195);
myNode32.point2.set(-0.4280000000000008,18.09995,-1.87405);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);
myNode32.innerTranslation.vector.set(-9.263950000000001,9.732000000000001,-2.613);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addCylinder();
myNode33.point1.set(-1.639,-1.628,1.36405);
myNode33.point2.set(-1.639,-1.628,1.70495);
myNode33.radius.set(0.576);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode33.innerRotation.angle.set(2.094392392986396);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34_1 = myNode25.clone();
myNode34_1.isVisible = false;
const myNode34_2 = object.addFuseOperation();
myNode34_2.leftArg.set(myNode34_1);
myNode34_2.rightArg.set(myNode26);
myNode34_2.isVisible = false;
const myNode34_3 = object.addFuseOperation();
myNode34_3.leftArg.set(myNode34_2);
myNode34_3.rightArg.set(myNode27);
myNode34_3.isVisible = false;
const myNode34_4 = object.addFuseOperation();
myNode34_4.leftArg.set(myNode34_3);
myNode34_4.rightArg.set(myNode30);
myNode34_4.isVisible = false;
const myNode34_5 = object.addFuseOperation();
myNode34_5.leftArg.set(myNode34_4);
myNode34_5.rightArg.set(myNode31);
myNode34_5.isVisible = false;
const myNode34_6 = object.addFuseOperation();
myNode34_6.leftArg.set(myNode34_5);
myNode34_6.rightArg.set(myNode32);
myNode34_6.isVisible = false;
myNode34 = object.addFuseOperation();
myNode34.leftArg.set(myNode34_6);
myNode34.rightArg.set(myNode33);
myNode34.isVisible = false;
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addCutOperation();
myNode35.leftArg.set(myNode24);
myNode35.rightArg.set(myNode34);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addCylinder();
myNode36.point1.set(-2.076,-3.445,-3.3519);
myNode36.point2.set(-2.076,-3.445,-2.2161);
myNode36.radius.set(0.453);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(0.0,0.0,0.0);
myNode36.innerRotation.angle.set(0.0);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addCylinder();
myNode37.point1.set(-2.075,-3.445,-18.0999);
myNode37.point2.set(-2.075,-3.445,18.099999999999998);
myNode37.radius.set(0.113);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0,0.0,0.0);
myNode37.innerRotation.angle.set(0.0);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addCutOperation();
myNode38.leftArg.set(myNode36);
myNode38.rightArg.set(myNode37);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addBox();
myNode39.point1.set(-18.0999,1.3641,-3.3519);
myNode39.point2.set(18.0999,1.7049,-1.8741);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(0.0,0.0,0.0);
myNode39.innerRotation.angle.set(0.0);
myNode39.innerTranslation.vector.set(0.0,1.5345,-2.613);
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addCylinder();
myNode40.point1.set(0.085,-0.007,1.8211);
myNode40.point2.set(0.085,-0.007,18.0999);
myNode40.radius.set(4.198);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode40.innerRotation.angle.set(3.141592653586273);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41 = object.addCommonOperation();
myNode41.leftArg.set(myNode39);
myNode41.rightArg.set(myNode40);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addBox();
myNode42.point1.set(-18.0999,1.7051,-2.2159);
myNode42.point2.set(2.9808999999999983,18.0999,-1.8211);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0,0.0,0.0);
myNode42.innerRotation.angle.set(0.0);
myNode42.innerTranslation.vector.set(-7.559500000000002,9.9025,-2.0185);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addCylinder();
myNode43.point1.set(3.209,0,-3.35195);
myNode43.point2.set(3.209,0,18.09995);
myNode43.radius.set(0.113);
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
myNode45.point1.set(-0.086,-0.007,-2.21595);
myNode45.point2.set(-0.086,-0.007,-1.87405);
myNode45.radius.set(4.998);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(0.0,0.0,0.0);
myNode45.innerRotation.angle.set(0.0);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addBox();
myNode46.point1.set(-18.0999,-1.30695,-3.35195);
myNode46.point2.set(2.980999999999998,18.09995,18.09995);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(0.0,0.0,0.0);
myNode46.innerRotation.angle.set(0.0);
myNode46.innerTranslation.vector.set(-7.559450000000002,8.3965,7.373999999999999);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addFuseOperation();
myNode47.leftArg.set(myNode45);
myNode47.rightArg.set(myNode46);
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addCutOperation();
myNode48.leftArg.set(myNode44);
myNode48.rightArg.set(myNode47);
myNode48.isVisible = false;

/* définition du node n°49*/
const myNode49 = object.addCylinder();
myNode49.point1.set(-2.075,3.446,-3.3519);
myNode49.point2.set(-2.075,3.446,-2.2161);
myNode49.radius.set(0.453);
myNode49.innerRotation.center.set(0,0,0);
myNode49.innerRotation.axis.set(0.0,0.0,0.0);
myNode49.innerRotation.angle.set(0.0);
myNode49.isVisible = false;

/* définition du node n°50*/
const myNode50 = object.addBox();
myNode50.point1.set(-1.9049,1.3071,1.6341);
myNode50.point2.set(1.7319,18.099899999999998,3.3529);
myNode50.innerRotation.center.set(0,0,0);
myNode50.innerRotation.axis.set(0.0,0.0,0.0);
myNode50.innerRotation.angle.set(0.0);
myNode50.innerTranslation.vector.set(-0.08650000000000002,9.7035,2.4935);
myNode50.isVisible = false;

/* définition du node n°51*/
const myNode51 = object.addFuseOperation();
myNode51.leftArg.set(myNode49);
myNode51.rightArg.set(myNode50);
myNode51.isVisible = false;

/* définition du node n°52*/
const myNode52 = object.addCylinder();
myNode52.point1.set(-2.074,3.444,-18.0999);
myNode52.point2.set(-2.074,3.444,18.099999999999998);
myNode52.radius.set(0.113);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,0.0,0.0);
myNode52.innerRotation.angle.set(0.0);
myNode52.isVisible = false;

/* définition du node n°53*/
const myNode53 = object.addCutOperation();
myNode53.leftArg.set(myNode51);
myNode53.rightArg.set(myNode52);
myNode53.isVisible = false;

/* définition du node n°54*/
const myNode54 = object.addCylinder();
myNode54.point1.set(-1.733,2.851,-3.3519);
myNode54.point2.set(-1.733,2.851,-0.5161000000000002);
myNode54.radius.set(0.339);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(0.0,0.0,0.0);
myNode54.innerRotation.angle.set(0.0);
myNode54.isVisible = false;

/* définition du node n°55*/
const myNode55 = object.addBox();
myNode55.point1.set(-0.4279,1.3641,-2.2159);
myNode55.point2.set(0.25389999999999996,3.3039,-0.5170999999999999);
myNode55.innerRotation.center.set(0,0,0);
myNode55.innerRotation.axis.set(0.0,0.0,0.0);
myNode55.innerRotation.angle.set(0.0);
myNode55.innerTranslation.vector.set(-0.08700000000000002,2.334,-1.3664999999999998);
myNode55.isVisible = false;

/* définition du node n°56*/
const myNode56 = object.addBox();
myNode56.point1.set(-18.0999,1.3071,-3.3519);
myNode56.point2.set(18.0999,18.099899999999998,-1.8211000000000002);
myNode56.innerRotation.center.set(0,0,0);
myNode56.innerRotation.axis.set(0.0,0.0,0.0);
myNode56.innerRotation.angle.set(0.0);
myNode56.innerTranslation.vector.set(0.0,9.7035,-2.5865);
myNode56.isVisible = false;

/* définition du node n°57*/
const myNode57 = object.addCylinder();
myNode57.point1.set(0.085,-0.007,-18.0999);
myNode57.point2.set(0.085,-0.007,18.099999999999998);
myNode57.radius.set(4.198);
myNode57.innerRotation.center.set(0,0,0);
myNode57.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode57.innerRotation.angle.set(3.141592653586273);
myNode57.isVisible = false;

/* définition du node n°58*/
const myNode58 = object.addCutOperation();
myNode58.leftArg.set(myNode56);
myNode58.rightArg.set(myNode57);
myNode58.isVisible = false;

/* définition du node n°59*/
const myNode59_1 = myNode53.clone();
myNode59_1.isVisible = false;
const myNode59_2 = object.addFuseOperation();
myNode59_2.leftArg.set(myNode59_1);
myNode59_2.rightArg.set(myNode54);
myNode59_2.isVisible = false;
const myNode59_3 = object.addFuseOperation();
myNode59_3.leftArg.set(myNode59_2);
myNode59_3.rightArg.set(myNode55);
myNode59_3.isVisible = false;
myNode59 = object.addFuseOperation();
myNode59.leftArg.set(myNode59_3);
myNode59.rightArg.set(myNode58);
myNode59.isVisible = false;
myNode59.isVisible = false;

/* définition du node n°60*/
const myNode60 = object.addCylinder();
myNode60.point1.set(-0.086,-0.007,-18.0999);
myNode60.point2.set(-0.086,-0.007,3.351899999999997);
myNode60.radius.set(4.998);
myNode60.innerRotation.center.set(0,0,0);
myNode60.innerRotation.axis.set(0.0,0.0,0.0);
myNode60.innerRotation.angle.set(0.0);
myNode60.isVisible = false;

/* définition du node n°61*/
const myNode61 = object.addCylinder();
myNode61.point1.set(-1.736,2.854,-18.0999);
myNode61.point2.set(-1.736,2.854,18.099999999999998);
myNode61.radius.set(0.113);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(0.0,0.0,0.0);
myNode61.innerRotation.angle.set(0.0);
myNode61.isVisible = false;

/* définition du node n°62*/
const myNode62 = object.addFuseOperation();
myNode62.leftArg.set(myNode61);
myNode62.rightArg.set(myNode27);
myNode62.isVisible = false;

/* définition du node n°63*/
const myNode63 = object.addCutOperation();
myNode63.leftArg.set(myNode60);
myNode63.rightArg.set(myNode62);
myNode63.isVisible = false;

/* définition du node n°64*/
const myNode64 = object.addBox();
myNode64.point1.set(-1.90495,1.30705,1.63405);
myNode64.point2.set(18.09995,18.09995,3.35295);
myNode64.innerRotation.center.set(0,0,0);
myNode64.innerRotation.axis.set(0.0,0.0,0.0);
myNode64.innerRotation.angle.set(0.0);
myNode64.innerTranslation.vector.set(8.0975,9.7035,2.4935);
myNode64.isVisible = false;

/* définition du node n°65*/
const myNode65 = object.addSphere();
myNode65.center.set(-1.507,2.063,2.785);
myNode65.radius.set(0.769);
myNode65.isVisible = false;

/* définition du node n°66*/
const myNode66 = object.addCutOperation();
myNode66.leftArg.set(myNode64);
myNode66.rightArg.set(myNode65);
myNode66.isVisible = false;

/* définition du node n°67*/
const myNode67 = object.addCylinder();
myNode67.point1.set(0.276,3.303,-1.22295);
myNode67.point2.set(0.276,3.303,1.7319499999999999);
myNode67.radius.set(1.598);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode67.innerRotation.angle.set(1.5707926535897931);
myNode67.isVisible = false;

/* définition du node n°68*/
const myNode68 = object.addBox();
myNode68.point1.set(-18.0999,1.36405,-1.82095);
myNode68.point2.set(-0.4280000000000008,18.09995,3.35295);
myNode68.innerRotation.center.set(0,0,0);
myNode68.innerRotation.axis.set(0.0,0.0,0.0);
myNode68.innerRotation.angle.set(0.0);
myNode68.innerTranslation.vector.set(-9.263950000000001,9.732000000000001,0.7659999999999998);
myNode68.isVisible = false;

/* définition du node n°69*/
const myNode69_1 = myNode66.clone();
myNode69_1.isVisible = false;
const myNode69_2 = object.addFuseOperation();
myNode69_2.leftArg.set(myNode69_1);
myNode69_2.rightArg.set(myNode67);
myNode69_2.isVisible = false;
myNode69 = object.addFuseOperation();
myNode69.leftArg.set(myNode69_2);
myNode69.rightArg.set(myNode68);
myNode69.isVisible = false;
myNode69.isVisible = false;

/* définition du node n°70*/
const myNode70 = object.addCutOperation();
myNode70.leftArg.set(myNode63);
myNode70.rightArg.set(myNode69);
myNode70.isVisible = false;

/* définition du node n°71*/
const myNode71 = object.addCommonOperation();
myNode71.leftArg.set(myNode59);
myNode71.rightArg.set(myNode70);
myNode71.isVisible = false;

/* définition du node n°72*/
const myNode72 = object.addBox();
myNode72.point1.set(2.9811,-18.0999,-3.3519);
myNode72.point2.set(18.0989,18.0999,-1.8211000000000002);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(0.0,0.0,0.0);
myNode72.innerRotation.angle.set(0.0);
myNode72.innerTranslation.vector.set(10.540000000000001,0.0,-2.5865);
myNode72.isVisible = false;

/* définition du node n°73*/
const myNode73 = object.addCylinder();
myNode73.point1.set(3.211,0,-18.0999);
myNode73.point2.set(3.211,0,18.0999);
myNode73.radius.set(0.339);
myNode73.innerRotation.center.set(0,0,0);
myNode73.innerRotation.axis.set(0.0,0.0,0.0);
myNode73.innerRotation.angle.set(0.0);
myNode73.isVisible = false;

/* définition du node n°74*/
const myNode74 = object.addCommonOperation();
myNode74.leftArg.set(myNode72);
myNode74.rightArg.set(myNode73);
myNode74.isVisible = false;

/* définition du node n°75*/
const myNode75 = object.addCylinder();
myNode75.point1.set(3.893,0.005,-3.35195);
myNode75.point2.set(3.893,0.005,-2.21605);
myNode75.radius.set(0.456);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(0.0,0.0,0.0);
myNode75.innerRotation.angle.set(0.0);
myNode75.isVisible = false;

/* définition du node n°76*/
const myNode76 = object.addFuseOperation();
myNode76.leftArg.set(myNode43);
myNode76.rightArg.set(myNode75);
myNode76.isVisible = false;

/* définition du node n°77*/
const myNode77 = object.addCutOperation();
myNode77.leftArg.set(myNode74);
myNode77.rightArg.set(myNode76);
myNode77.isVisible = false;

/* définition du node n°78*/
const myNode78 = object.addCylinder();
myNode78.point1.set(3.891,-0.001,-18.0999);
myNode78.point2.set(3.891,-0.001,18.099999999999998);
myNode78.radius.set(0.113);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(0.0,0.0,0.0);
myNode78.innerRotation.angle.set(0.0);
myNode78.isVisible = false;

/* définition du node n°79*/
const myNode79 = object.addCutOperation();
myNode79.leftArg.set(myNode3);
myNode79.rightArg.set(myNode78);
myNode79.isVisible = false;

/* définition du node n°80*/
const myNode80 = object.addBox();
myNode80.point1.set(-18.0999,-18.0999,-3.3519);
myNode80.point2.set(18.0999,18.0999,18.099899999999998);
myNode80.innerRotation.center.set(0,0,0);
myNode80.innerRotation.axis.set(0.0,0.0,0.0);
myNode80.innerRotation.angle.set(0.0);
myNode80.innerTranslation.vector.set(0.0,0.0,7.373999999999999);
myNode80.isVisible = false;

/* définition du node n°81*/
const myNode81 = object.addCylinder();
myNode81.point1.set(0.085,-0.007,1.82105);
myNode81.point2.set(0.085,-0.007,18.09995);
myNode81.radius.set(4.198);
myNode81.innerRotation.center.set(0,0,0);
myNode81.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode81.innerRotation.angle.set(3.141592653586273);
myNode81.isVisible = false;

/* définition du node n°82*/
const myNode82 = object.addCutOperation();
myNode82.leftArg.set(myNode80);
myNode82.rightArg.set(myNode81);
myNode82.isVisible = false;

/* définition du node n°83*/
const myNode83 = object.addFuseOperation();
myNode83.leftArg.set(myNode79);
myNode83.rightArg.set(myNode82);
myNode83.isVisible = false;

/* définition du node n°84*/
const myNode84 = object.addBox();
myNode84.point1.set(-18.0999,-1.30695,-3.35195);
myNode84.point2.set(2.980999999999998,18.09995,-1.82105);
myNode84.innerRotation.center.set(0,0,0);
myNode84.innerRotation.axis.set(0.0,0.0,0.0);
myNode84.innerRotation.angle.set(0.0);
myNode84.innerTranslation.vector.set(-7.559450000000002,8.3965,-2.5865);
myNode84.isVisible = false;

/* définition du node n°85*/
const myNode85 = object.addBox();
myNode85.point1.set(-18.0999,-18.0999,-3.35195);
myNode85.point2.set(18.099999999999998,18.099999999999998,18.09995);
myNode85.innerRotation.center.set(0,0,0);
myNode85.innerRotation.axis.set(0.0,0.0,0.0);
myNode85.innerRotation.angle.set(0.0);
myNode85.innerTranslation.vector.set(4.9999999998107114e-05,4.9999999998107114e-05,7.373999999999999);
myNode85.isVisible = false;

/* définition du node n°86*/
const myNode86 = object.addCylinder();
myNode86.point1.set(-0.086,-0.007,-18.1);
myNode86.point2.set(-0.086,-0.007,-1.8210000000000015);
myNode86.radius.set(4.998);
myNode86.innerRotation.center.set(0,0,0);
myNode86.innerRotation.axis.set(0.0,0.0,0.0);
myNode86.innerRotation.angle.set(0.0);
myNode86.isVisible = false;

/* définition du node n°87*/
const myNode87 = object.addCutOperation();
myNode87.leftArg.set(myNode85);
myNode87.rightArg.set(myNode86);
myNode87.isVisible = false;

/* définition du node n°88*/
const myNode88 = object.addFuseOperation();
myNode88.leftArg.set(myNode84);
myNode88.rightArg.set(myNode87);
myNode88.isVisible = false;

/* définition du node n°89*/
const myNode89 = object.addCutOperation();
myNode89.leftArg.set(myNode83);
myNode89.rightArg.set(myNode88);
myNode89.isVisible = false;

/* définition du node n°90*/
const myNode90_1 = myNode7.clone();
myNode90_1.isVisible = false;
const myNode90_2 = object.addFuseOperation();
myNode90_2.leftArg.set(myNode90_1);
myNode90_2.rightArg.set(myNode12);
myNode90_2.isVisible = false;
const myNode90_3 = object.addFuseOperation();
myNode90_3.leftArg.set(myNode90_2);
myNode90_3.rightArg.set(myNode35);
myNode90_3.isVisible = false;
const myNode90_4 = object.addFuseOperation();
myNode90_4.leftArg.set(myNode90_3);
myNode90_4.rightArg.set(myNode38);
myNode90_4.isVisible = false;
const myNode90_5 = object.addFuseOperation();
myNode90_5.leftArg.set(myNode90_4);
myNode90_5.rightArg.set(myNode41);
myNode90_5.isVisible = false;
const myNode90_6 = object.addFuseOperation();
myNode90_6.leftArg.set(myNode90_5);
myNode90_6.rightArg.set(myNode48);
myNode90_6.isVisible = false;
const myNode90_7 = object.addFuseOperation();
myNode90_7.leftArg.set(myNode90_6);
myNode90_7.rightArg.set(myNode71);
myNode90_7.isVisible = false;
const myNode90_8 = object.addFuseOperation();
myNode90_8.leftArg.set(myNode90_7);
myNode90_8.rightArg.set(myNode77);
myNode90_8.isVisible = false;
myNode90 = object.addFuseOperation();
myNode90.leftArg.set(myNode90_8);
myNode90.rightArg.set(myNode89);
myNode90.isVisible = false;
myNode90.isVisible = false;

/* définition du node n°91*/
const myNode91 = object.addCommonOperation();
myNode91.leftArg.set(myNode0);
myNode91.rightArg.set(myNode90);
myNode91.isVisible = true;


/*END Geometry Object Definition*/