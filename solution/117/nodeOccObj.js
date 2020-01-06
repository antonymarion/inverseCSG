/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.8959,-5.9999,-4.0229);
myNode0.point2.set(5.8959,5.9999,4.0229);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.isVisible = False

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-18.0999,1.7051,-2.2159);
myNode1.point2.set(2.9808999999999983,18.0999,-1.8211);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.isVisible = False

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(3.209,0,-3.35195);
myNode2.point2.set(3.209,0,18.09995);
myNode2.radius.set(0.113);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.isVisible = False

/* définition du node n°3*/
const myNode3 = object.addCutOperation();
myNode3.leftArg.set(myNode1);
myNode3.rightArg.set(myNode2);
myNode3.isVisible = False

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(-0.086,-0.007,-2.21595);
myNode4.point2.set(-0.086,-0.007,-1.87405);
myNode4.radius.set(4.998);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.isVisible = False

/* définition du node n°5*/
const myNode5 = object.addBox();
myNode5.point1.set(-18.0999,-1.30695,-3.35195);
myNode5.point2.set(2.980999999999998,18.09995,18.09995);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.isVisible = False

/* définition du node n°6*/
const myNode6 = object.addFuseOperation();
myNode6.leftArg.set(myNode4);
myNode6.rightArg.set(myNode5);
myNode6.isVisible = False

/* définition du node n°7*/
const myNode7 = object.addCutOperation();
myNode7.leftArg.set(myNode3);
myNode7.rightArg.set(myNode6);
myNode7.isVisible = False

/* définition du node n°8*/
const myNode8 = object.addBox();
myNode8.point1.set(-18.0999,-18.0999,-18.0999);
myNode8.point2.set(18.0999,-1.307100000000002,-1.8211000000000013);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.isVisible = False

/* définition du node n°9*/
const myNode9 = object.addCylinder();
myNode9.point1.set(3.893,0.005,-3.3519);
myNode9.point2.set(3.893,0.005,-2.2161);
myNode9.radius.set(0.456);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.isVisible = False

/* définition du node n°10*/
const myNode10 = object.addCylinder();
myNode10.point1.set(-1.733,-2.853,-3.3519);
myNode10.point2.set(-1.733,-2.853,18.099899999999998);
myNode10.radius.set(0.34);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.isVisible = False

/* définition du node n°11*/
const myNode11 = object.addFuseOperation();
myNode11.leftArg.set(myNode9);
myNode11.rightArg.set(myNode10);
myNode11.isVisible = False

/* définition du node n°12*/
const myNode12 = object.addCommonOperation();
myNode12.leftArg.set(myNode8);
myNode12.rightArg.set(myNode11);
myNode12.isVisible = False

/* définition du node n°13*/
const myNode13 = object.addCylinder();
myNode13.point1.set(-1.735,-2.854,-3.35195);
myNode13.point2.set(-1.735,-2.854,-1.82105);
myNode13.radius.set(0.113);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);
myNode13.isVisible = False

/* définition du node n°14*/
const myNode14 = object.addCutOperation();
myNode14.leftArg.set(myNode12);
myNode14.rightArg.set(myNode13);
myNode14.isVisible = False

/* définition du node n°15*/
const myNode15 = object.addCylinder();
myNode15.point1.set(-0.086,-0.007,-18.0999);
myNode15.point2.set(-0.086,-0.007,3.351899999999997);
myNode15.radius.set(4.998);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);
myNode15.isVisible = False

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(-1.736,2.854,-18.0999);
myNode16.point2.set(-1.736,2.854,18.099999999999998);
myNode16.radius.set(0.113);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);
myNode16.isVisible = False

/* définition du node n°17*/
const myNode17 = object.addCylinder();
myNode17.point1.set(0.517,0.105,-18.1);
myNode17.point2.set(0.517,0.105,18.099899999999998);
myNode17.radius.set(0.453);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(-1.1963418233785224,1.2174017425887051,1.1963373516041578);
myNode17.innerRotation.angle.set(2.0843521343731517);
myNode17.isVisible = False

/* définition du node n°18*/
const myNode18 = object.addFuseOperation();
myNode18.leftArg.set(myNode16);
myNode18.rightArg.set(myNode17);
myNode18.isVisible = False

/* définition du node n°19*/
const myNode19 = object.addCutOperation();
myNode19.leftArg.set(myNode15);
myNode19.rightArg.set(myNode18);
myNode19.isVisible = False

/* définition du node n°20*/
const myNode20 = object.addCylinder();
myNode20.point1.set(0.276,3.303,-1.22295);
myNode20.point2.set(0.276,3.303,1.7319499999999999);
myNode20.radius.set(1.598);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode20.innerRotation.angle.set(1.5707926535897931);
myNode20.isVisible = False

/* définition du node n°21*/
const myNode21 = object.addBox();
myNode21.point1.set(-18.0999,1.36405,-1.82095);
myNode21.point2.set(-0.4280000000000008,18.09995,3.35295);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);
myNode21.isVisible = False

/* définition du node n°22*/
const myNode22 = object.addBox();
myNode22.point1.set(-1.90495,1.30705,1.63405);
myNode22.point2.set(18.09995,18.09995,3.35295);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(0.0,0.0,0.0);
myNode22.innerRotation.angle.set(0.0);
myNode22.isVisible = False

/* définition du node n°23*/
const myNode23 = object.addSphere();
myNode23.center.set(-1.507,2.063,2.785);
myNode23.radius.set(0.769);
myNode23.isVisible = False

/* définition du node n°24*/
const myNode24 = object.addCutOperation();
myNode24.leftArg.set(myNode22);
myNode24.rightArg.set(myNode23);
myNode24.isVisible = False

/* définition du node n°25*/
const myNode25_1 = object.addFuseOperation();
myNode25_1.leftArg.set(myNode20);
myNode25_1.rightArg.set(myNode20);
const myNode25_2 = object.addFuseOperation();
myNode25_2.leftArg.set(myNode25_1);
myNode25_2.rightArg.set(myNode21);
myNode25 = object.addFuseOperation();
myNode25.leftArg.set(myNode25_2);
myNode25.rightArg.set(myNode24);
myNode25.isVisible = False

/* définition du node n°26*/
const myNode26 = object.addCutOperation();
myNode26.leftArg.set(myNode19);
myNode26.rightArg.set(myNode25);
myNode26.isVisible = False

/* définition du node n°27*/
const myNode27 = object.addBox();
myNode27.point1.set(-0.4279,1.3641,-2.2159);
myNode27.point2.set(0.25389999999999996,3.3039,-0.5170999999999999);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);
myNode27.isVisible = False

/* définition du node n°28*/
const myNode28 = object.addCylinder();
myNode28.point1.set(-1.733,2.851,-3.3519);
myNode28.point2.set(-1.733,2.851,-0.5161000000000002);
myNode28.radius.set(0.339);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(0.0,0.0,0.0);
myNode28.innerRotation.angle.set(0.0);
myNode28.isVisible = False

/* définition du node n°29*/
const myNode29 = object.addBox();
myNode29.point1.set(-1.9049,1.3071,1.6341);
myNode29.point2.set(1.7319,18.099899999999998,3.3529);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);
myNode29.isVisible = False

/* définition du node n°30*/
const myNode30 = object.addCylinder();
myNode30.point1.set(-2.075,3.446,-3.3519);
myNode30.point2.set(-2.075,3.446,-2.2161);
myNode30.radius.set(0.453);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);
myNode30.isVisible = False

/* définition du node n°31*/
const myNode31 = object.addFuseOperation();
myNode31.leftArg.set(myNode29);
myNode31.rightArg.set(myNode30);
myNode31.isVisible = False

/* définition du node n°32*/
const myNode32 = object.addCylinder();
myNode32.point1.set(-2.074,3.444,-18.0999);
myNode32.point2.set(-2.074,3.444,18.099999999999998);
myNode32.radius.set(0.113);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);
myNode32.isVisible = False

/* définition du node n°33*/
const myNode33 = object.addCutOperation();
myNode33.leftArg.set(myNode31);
myNode33.rightArg.set(myNode32);
myNode33.isVisible = False

/* définition du node n°34*/
const myNode34 = object.addBox();
myNode34.point1.set(-18.0999,1.3071,-3.3519);
myNode34.point2.set(18.0999,18.099899999999998,-1.8211000000000002);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(0.0,0.0,0.0);
myNode34.innerRotation.angle.set(0.0);
myNode34.isVisible = False

/* définition du node n°35*/
const myNode35 = object.addCylinder();
myNode35.point1.set(0.085,-0.007,-18.0999);
myNode35.point2.set(0.085,-0.007,18.099999999999998);
myNode35.radius.set(4.198);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode35.innerRotation.angle.set(3.141592653586273);
myNode35.isVisible = False

/* définition du node n°36*/
const myNode36 = object.addCutOperation();
myNode36.leftArg.set(myNode34);
myNode36.rightArg.set(myNode35);
myNode36.isVisible = False

/* définition du node n°37*/
const myNode37_1 = object.addFuseOperation();
myNode37_1.leftArg.set(myNode27);
myNode37_1.rightArg.set(myNode27);
const myNode37_2 = object.addFuseOperation();
myNode37_2.leftArg.set(myNode37_1);
myNode37_2.rightArg.set(myNode28);
const myNode37_3 = object.addFuseOperation();
myNode37_3.leftArg.set(myNode37_2);
myNode37_3.rightArg.set(myNode33);
myNode37 = object.addFuseOperation();
myNode37.leftArg.set(myNode37_3);
myNode37.rightArg.set(myNode36);
myNode37.isVisible = False

/* définition du node n°38*/
const myNode38 = object.addCommonOperation();
myNode38.leftArg.set(myNode26);
myNode38.rightArg.set(myNode37);
myNode38.isVisible = False

/* définition du node n°39*/
const myNode39 = object.addBox();
myNode39.point1.set(-18.0999,1.3641,-18.0999);
myNode39.point2.set(2.9808999999999983,1.7049,-2.216100000000001);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(0.0,0.0,0.0);
myNode39.innerRotation.angle.set(0.0);
myNode39.isVisible = False

/* définition du node n°40*/
const myNode40 = object.addCylinder();
myNode40.point1.set(-2.076,-3.445,-18.0999);
myNode40.point2.set(-2.076,-3.445,-3.352100000000002);
myNode40.radius.set(0.453);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(0.0,0.0,0.0);
myNode40.innerRotation.angle.set(0.0);
myNode40.isVisible = False

/* définition du node n°41*/
const myNode41 = object.addFuseOperation();
myNode41.leftArg.set(myNode39);
myNode41.rightArg.set(myNode40);
myNode41.isVisible = False

/* définition du node n°42*/
const myNode42 = object.addCylinder();
myNode42.point1.set(-0.086,-0.007,-3.3519);
myNode42.point2.set(-0.086,-0.007,18.099899999999998);
myNode42.radius.set(4.998);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0,0.0,0.0);
myNode42.innerRotation.angle.set(0.0);
myNode42.isVisible = False

/* définition du node n°43*/
const myNode43 = object.addCommonOperation();
myNode43.leftArg.set(myNode41);
myNode43.rightArg.set(myNode42);
myNode43.isVisible = False

/* définition du node n°44*/
const myNode44 = object.addCylinder();
myNode44.point1.set(-2.791,1.511,1.0231);
myNode44.point2.set(-2.791,1.511,18.099899999999998);
myNode44.radius.set(0.228);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode44.innerRotation.angle.set(2.094392392986396);
myNode44.isVisible = False

/* définition du node n°45*/
const myNode45 = object.addBox();
myNode45.point1.set(0.2541,1.3641,-3.3519);
myNode45.point2.set(1.0499,1.7049,1.6339000000000001);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(0.0,0.0,0.0);
myNode45.innerRotation.angle.set(0.0);
myNode45.isVisible = False

/* définition du node n°46*/
const myNode46 = object.addSphere();
myNode46.center.set(1.334,1.446,2.786);
myNode46.radius.set(0.28079992877491977);
myNode46.isVisible = False

/* définition du node n°47*/
const myNode47 = object.addCylinder();
myNode47.point1.set(-2.795,-1.329,-18.0999);
myNode47.point2.set(-2.795,-1.329,18.0999);
myNode47.radius.set(0.227);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(-1.2220390490453152,1.22204672454102,1.2008907288903108);
myNode47.innerRotation.angle.set(2.1044990323323307);
myNode47.isVisible = False

/* définition du node n°48*/
const myNode48 = object.addCylinder();
myNode48.point1.set(0.085,-0.007,-18.0999);
myNode48.point2.set(0.085,-0.007,3.351899999999997);
myNode48.radius.set(4.198);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode48.innerRotation.angle.set(3.141592653586273);
myNode48.isVisible = False

/* définition du node n°49*/
const myNode49 = object.addCylinder();
myNode49.point1.set(-1.634,1.803,-18.0999);
myNode49.point2.set(-1.634,1.803,18.099999999999998);
myNode49.radius.set(0.581);
myNode49.innerRotation.center.set(0,0,0);
myNode49.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode49.innerRotation.angle.set(2.094392392986396);
myNode49.isVisible = False

/* définition du node n°50*/
const myNode50 = object.addCutOperation();
myNode50.leftArg.set(myNode48);
myNode50.rightArg.set(myNode49);
myNode50.isVisible = False

/* définition du node n°51*/
const myNode51 = object.addBox();
myNode51.point1.set(-18.0999,-18.0999,-18.0999);
myNode51.point2.set(18.099999999999998,1.3639999999999972,18.099999999999998);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(0.0,0.0,0.0);
myNode51.innerRotation.angle.set(0.0);
myNode51.isVisible = False

/* définition du node n°52*/
const myNode52 = object.addBox();
myNode52.point1.set(0.25405,1.36405,-3.35195);
myNode52.point2.set(18.09995,18.09995,1.63395);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,0.0,0.0);
myNode52.innerRotation.angle.set(0.0);
myNode52.isVisible = False

/* définition du node n°53*/
const myNode53 = object.addFuseOperation();
myNode53.leftArg.set(myNode51);
myNode53.rightArg.set(myNode52);
myNode53.isVisible = False

/* définition du node n°54*/
const myNode54 = object.addCutOperation();
myNode54.leftArg.set(myNode50);
myNode54.rightArg.set(myNode53);
myNode54.isVisible = False

/* définition du node n°55*/
const myNode55_1 = object.addFuseOperation();
myNode55_1.leftArg.set(myNode44);
myNode55_1.rightArg.set(myNode44);
const myNode55_2 = object.addFuseOperation();
myNode55_2.leftArg.set(myNode55_1);
myNode55_2.rightArg.set(myNode45);
const myNode55_3 = object.addFuseOperation();
myNode55_3.leftArg.set(myNode55_2);
myNode55_3.rightArg.set(myNode46);
const myNode55_4 = object.addFuseOperation();
myNode55_4.leftArg.set(myNode55_3);
myNode55_4.rightArg.set(myNode47);
myNode55 = object.addFuseOperation();
myNode55.leftArg.set(myNode55_4);
myNode55.rightArg.set(myNode54);
myNode55.isVisible = False

/* définition du node n°56*/
const myNode56 = object.addBox();
myNode56.point1.set(-1.90495,-18.0999,-1.87395);
myNode56.point2.set(-1.22305,1.7049999999999983,1.6339499999999998);
myNode56.innerRotation.center.set(0,0,0);
myNode56.innerRotation.axis.set(0.0,0.0,0.0);
myNode56.innerRotation.angle.set(0.0);
myNode56.isVisible = False

/* définition du node n°57*/
const myNode57 = object.addCylinder();
myNode57.point1.set(-2.218,0.091,-18.0999);
myNode57.point2.set(-2.218,0.091,1.7049999999999983);
myNode57.radius.set(0.678);
myNode57.innerRotation.center.set(0,0,0);
myNode57.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode57.innerRotation.angle.set(2.094392392986396);
myNode57.isVisible = False

/* définition du node n°58*/
const myNode58 = object.addBox();
myNode58.point1.set(-18.0999,1.36405,-3.35195);
myNode58.point2.set(-0.4280000000000008,18.09995,-1.87405);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(0.0,0.0,0.0);
myNode58.innerRotation.angle.set(0.0);
myNode58.isVisible = False

/* définition du node n°59*/
const myNode59 = object.addBox();
myNode59.point1.set(-18.0999,-18.0999,-1.87395);
myNode59.point2.set(18.099999999999998,18.099999999999998,18.09995);
myNode59.innerRotation.center.set(0,0,0);
myNode59.innerRotation.axis.set(0.0,0.0,0.0);
myNode59.innerRotation.angle.set(0.0);
myNode59.isVisible = False

/* définition du node n°60*/
const myNode60 = object.addBox();
myNode60.point1.set(-1.905,1.023,-3.352);
myNode60.point2.set(1.732,1.705,3.353);
myNode60.innerRotation.center.set(0,0,0);
myNode60.innerRotation.axis.set(0.0,0.0,0.0);
myNode60.innerRotation.angle.set(0.0);
myNode60.isVisible = False

/* définition du node n°61*/
const myNode61 = object.addCutOperation();
myNode61.leftArg.set(myNode59);
myNode61.rightArg.set(myNode60);
myNode61.isVisible = False

/* définition du node n°62*/
const myNode62 = object.addCylinder();
myNode62.point1.set(-0.74,0.087,1.36405);
myNode62.point2.set(-0.74,0.087,1.70495);
myNode62.radius.set(0.567);
myNode62.innerRotation.center.set(0,0,0);
myNode62.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode62.innerRotation.angle.set(2.094392392986396);
myNode62.isVisible = False

/* définition du node n°63*/
const myNode63 = object.addCylinder();
myNode63.point1.set(-1.639,-1.628,1.36405);
myNode63.point2.set(-1.639,-1.628,1.70495);
myNode63.radius.set(0.576);
myNode63.innerRotation.center.set(0,0,0);
myNode63.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode63.innerRotation.angle.set(2.094392392986396);
myNode63.isVisible = False

/* définition du node n°64*/
const myNode64_1 = object.addFuseOperation();
myNode64_1.leftArg.set(myNode56);
myNode64_1.rightArg.set(myNode56);
const myNode64_2 = object.addFuseOperation();
myNode64_2.leftArg.set(myNode64_1);
myNode64_2.rightArg.set(myNode57);
const myNode64_3 = object.addFuseOperation();
myNode64_3.leftArg.set(myNode64_2);
myNode64_3.rightArg.set(myNode17);
const myNode64_4 = object.addFuseOperation();
myNode64_4.leftArg.set(myNode64_3);
myNode64_4.rightArg.set(myNode58);
const myNode64_5 = object.addFuseOperation();
myNode64_5.leftArg.set(myNode64_4);
myNode64_5.rightArg.set(myNode61);
const myNode64_6 = object.addFuseOperation();
myNode64_6.leftArg.set(myNode64_5);
myNode64_6.rightArg.set(myNode62);
myNode64 = object.addFuseOperation();
myNode64.leftArg.set(myNode64_6);
myNode64.rightArg.set(myNode63);
myNode64.isVisible = False

/* définition du node n°65*/
const myNode65 = object.addCutOperation();
myNode65.leftArg.set(myNode55);
myNode65.rightArg.set(myNode64);
myNode65.isVisible = False

/* définition du node n°66*/
const myNode66 = object.addBox();
myNode66.point1.set(2.9811,-18.0999,-3.3519);
myNode66.point2.set(18.0989,18.0999,-1.8211000000000002);
myNode66.innerRotation.center.set(0,0,0);
myNode66.innerRotation.axis.set(0.0,0.0,0.0);
myNode66.innerRotation.angle.set(0.0);
myNode66.isVisible = False

/* définition du node n°67*/
const myNode67 = object.addCylinder();
myNode67.point1.set(3.211,0,-18.0999);
myNode67.point2.set(3.211,0,18.0999);
myNode67.radius.set(0.339);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(0.0,0.0,0.0);
myNode67.innerRotation.angle.set(0.0);
myNode67.isVisible = False

/* définition du node n°68*/
const myNode68 = object.addCommonOperation();
myNode68.leftArg.set(myNode66);
myNode68.rightArg.set(myNode67);
myNode68.isVisible = False

/* définition du node n°69*/
const myNode69 = object.addCylinder();
myNode69.point1.set(3.893,0.005,-3.35195);
myNode69.point2.set(3.893,0.005,-2.21605);
myNode69.radius.set(0.456);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(0.0,0.0,0.0);
myNode69.innerRotation.angle.set(0.0);
myNode69.isVisible = False

/* définition du node n°70*/
const myNode70 = object.addFuseOperation();
myNode70.leftArg.set(myNode2);
myNode70.rightArg.set(myNode69);
myNode70.isVisible = False

/* définition du node n°71*/
const myNode71 = object.addCutOperation();
myNode71.leftArg.set(myNode68);
myNode71.rightArg.set(myNode70);
myNode71.isVisible = False

/* définition du node n°72*/
const myNode72 = object.addCylinder();
myNode72.point1.set(3.891,-0.001,-18.0999);
myNode72.point2.set(3.891,-0.001,18.099999999999998);
myNode72.radius.set(0.113);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(0.0,0.0,0.0);
myNode72.innerRotation.angle.set(0.0);
myNode72.isVisible = False

/* définition du node n°73*/
const myNode73 = object.addCutOperation();
myNode73.leftArg.set(myNode9);
myNode73.rightArg.set(myNode72);
myNode73.isVisible = False

/* définition du node n°74*/
const myNode74 = object.addBox();
myNode74.point1.set(-18.0999,-18.0999,-3.3519);
myNode74.point2.set(18.0999,18.0999,18.099899999999998);
myNode74.innerRotation.center.set(0,0,0);
myNode74.innerRotation.axis.set(0.0,0.0,0.0);
myNode74.innerRotation.angle.set(0.0);
myNode74.isVisible = False

/* définition du node n°75*/
const myNode75 = object.addCylinder();
myNode75.point1.set(0.085,-0.007,1.82105);
myNode75.point2.set(0.085,-0.007,18.09995);
myNode75.radius.set(4.198);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode75.innerRotation.angle.set(3.141592653586273);
myNode75.isVisible = False

/* définition du node n°76*/
const myNode76 = object.addCutOperation();
myNode76.leftArg.set(myNode74);
myNode76.rightArg.set(myNode75);
myNode76.isVisible = False

/* définition du node n°77*/
const myNode77 = object.addFuseOperation();
myNode77.leftArg.set(myNode73);
myNode77.rightArg.set(myNode76);
myNode77.isVisible = False

/* définition du node n°78*/
const myNode78 = object.addBox();
myNode78.point1.set(-18.0999,-1.30695,-3.35195);
myNode78.point2.set(2.980999999999998,18.09995,-1.82105);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(0.0,0.0,0.0);
myNode78.innerRotation.angle.set(0.0);
myNode78.isVisible = False

/* définition du node n°79*/
const myNode79 = object.addBox();
myNode79.point1.set(-18.0999,-18.0999,-3.35195);
myNode79.point2.set(18.099999999999998,18.099999999999998,18.09995);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(0.0,0.0,0.0);
myNode79.innerRotation.angle.set(0.0);
myNode79.isVisible = False

/* définition du node n°80*/
const myNode80 = object.addCylinder();
myNode80.point1.set(-0.086,-0.007,-18.1);
myNode80.point2.set(-0.086,-0.007,-1.8210000000000015);
myNode80.radius.set(4.998);
myNode80.innerRotation.center.set(0,0,0);
myNode80.innerRotation.axis.set(0.0,0.0,0.0);
myNode80.innerRotation.angle.set(0.0);
myNode80.isVisible = False

/* définition du node n°81*/
const myNode81 = object.addCutOperation();
myNode81.leftArg.set(myNode79);
myNode81.rightArg.set(myNode80);
myNode81.isVisible = False

/* définition du node n°82*/
const myNode82 = object.addFuseOperation();
myNode82.leftArg.set(myNode78);
myNode82.rightArg.set(myNode81);
myNode82.isVisible = False

/* définition du node n°83*/
const myNode83 = object.addCutOperation();
myNode83.leftArg.set(myNode77);
myNode83.rightArg.set(myNode82);
myNode83.isVisible = False

/* définition du node n°84*/
const myNode84 = object.addCylinder();
myNode84.point1.set(0.085,-0.007,1.8211);
myNode84.point2.set(0.085,-0.007,18.0999);
myNode84.radius.set(4.198);
myNode84.innerRotation.center.set(0,0,0);
myNode84.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode84.innerRotation.angle.set(3.141592653586273);
myNode84.isVisible = False

/* définition du node n°85*/
const myNode85 = object.addBox();
myNode85.point1.set(-18.0999,1.3641,-3.3519);
myNode85.point2.set(18.0999,1.7049,-1.8741);
myNode85.innerRotation.center.set(0,0,0);
myNode85.innerRotation.axis.set(0.0,0.0,0.0);
myNode85.innerRotation.angle.set(0.0);
myNode85.isVisible = False

/* définition du node n°86*/
const myNode86 = object.addCommonOperation();
myNode86.leftArg.set(myNode84);
myNode86.rightArg.set(myNode85);
myNode86.isVisible = False

/* définition du node n°87*/
const myNode87 = object.addCylinder();
myNode87.point1.set(-2.076,-3.445,-3.3519);
myNode87.point2.set(-2.076,-3.445,-2.2161);
myNode87.radius.set(0.453);
myNode87.innerRotation.center.set(0,0,0);
myNode87.innerRotation.axis.set(0.0,0.0,0.0);
myNode87.innerRotation.angle.set(0.0);
myNode87.isVisible = False

/* définition du node n°88*/
const myNode88 = object.addCylinder();
myNode88.point1.set(-2.075,-3.445,-18.0999);
myNode88.point2.set(-2.075,-3.445,18.099999999999998);
myNode88.radius.set(0.113);
myNode88.innerRotation.center.set(0,0,0);
myNode88.innerRotation.axis.set(0.0,0.0,0.0);
myNode88.innerRotation.angle.set(0.0);
myNode88.isVisible = False

/* définition du node n°89*/
const myNode89 = object.addCutOperation();
myNode89.leftArg.set(myNode87);
myNode89.rightArg.set(myNode88);
myNode89.isVisible = False

/* définition du node n°90*/
const myNode90_1 = object.addFuseOperation();
myNode90_1.leftArg.set(myNode7);
myNode90_1.rightArg.set(myNode7);
const myNode90_2 = object.addFuseOperation();
myNode90_2.leftArg.set(myNode90_1);
myNode90_2.rightArg.set(myNode14);
const myNode90_3 = object.addFuseOperation();
myNode90_3.leftArg.set(myNode90_2);
myNode90_3.rightArg.set(myNode38);
const myNode90_4 = object.addFuseOperation();
myNode90_4.leftArg.set(myNode90_3);
myNode90_4.rightArg.set(myNode43);
const myNode90_5 = object.addFuseOperation();
myNode90_5.leftArg.set(myNode90_4);
myNode90_5.rightArg.set(myNode65);
const myNode90_6 = object.addFuseOperation();
myNode90_6.leftArg.set(myNode90_5);
myNode90_6.rightArg.set(myNode71);
const myNode90_7 = object.addFuseOperation();
myNode90_7.leftArg.set(myNode90_6);
myNode90_7.rightArg.set(myNode83);
const myNode90_8 = object.addFuseOperation();
myNode90_8.leftArg.set(myNode90_7);
myNode90_8.rightArg.set(myNode86);
myNode90 = object.addFuseOperation();
myNode90.leftArg.set(myNode90_8);
myNode90.rightArg.set(myNode89);
myNode90.isVisible = False

/* définition du node n°91*/
const myNode91 = object.addCommonOperation();
myNode91.leftArg.set(myNode0);
myNode91.rightArg.set(myNode90);
myNode91.isVisible = True


/*END Geometry Object Definition*/