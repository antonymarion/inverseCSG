/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addCylinder();
myNode0.point1.set(3.59,-4.325,-0.5329);
myNode0.point2.set(3.59,-4.325,0.5338999999999999);
myNode0.radius.set(0.68);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-4.2669,-3.3999,-0.5329);
myNode1.point2.set(-3.6010999999999997,-3.1331,0.2668999999999999);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.innerTranslation.vector.set(-3.9339999999999997,-3.2665,-0.13300000000000006);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addFuseOperation();
myNode2.leftArg.set(myNode0);
myNode2.rightArg.set(myNode1);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(3.467,-4.174,-18.0999);
myNode3.point2.set(3.467,-4.174,18.099999999999998);
myNode3.radius.set(0.426);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(-3.471,-3.133,-0.53295);
myNode4.point2.set(-3.471,-3.133,18.09995);
myNode4.radius.set(0.263);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addFuseOperation();
myNode5.leftArg.set(myNode3);
myNode5.rightArg.set(myNode4);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addCutOperation();
myNode6.leftArg.set(myNode2);
myNode6.rightArg.set(myNode5);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addBox();
myNode7.point1.set(3.5881,-3.3999,-0.5329);
myNode7.point2.set(3.7338999999999998,-3.1331,0.5338999999999999);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);
myNode7.innerTranslation.vector.set(3.661,-3.2665,0.0004999999999999449);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addCylinder();
myNode8.point1.set(3.469,-3.132,-18.0999);
myNode8.point2.set(3.469,-3.132,18.099999999999998);
myNode8.radius.set(0.266);
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
myNode10.point1.set(2.799,-2.598,-0.5329);
myNode10.point2.set(2.799,-2.598,0.2668999999999999);
myNode10.radius.set(0.4);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addBox();
myNode11.point1.set(-4.2669,-4.3249,-0.5329);
myNode11.point2.set(-3.7340999999999998,-0.8931000000000004,0.5338999999999999);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);
myNode11.innerTranslation.vector.set(-4.0005,-2.6090000000000004,0.0004999999999999449);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(-3.601,-4.338,-0.5329);
myNode12.point2.set(-3.601,-4.338,18.099899999999998);
myNode12.radius.set(0.662);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addBox();
myNode13.point1.set(-3.7329,-4.9999,-0.5329);
myNode13.point2.set(3.5879000000000003,0.43989999999999974,0.5338999999999999);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);
myNode13.innerTranslation.vector.set(-0.07249999999999979,-2.2800000000000002,0.0004999999999999449);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addBox();
myNode14.point1.set(1.5951,-4.3249,-0.5329);
myNode14.point2.set(4.2669,3.2558999999999996,0.5338999999999999);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);
myNode14.innerTranslation.vector.set(2.931,-0.5345000000000004,0.0004999999999999449);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15_1 = myNode11.clone();
myNode15_1.isVisible = false;
const myNode15_2 = object.addFuseOperation();
myNode15_2.leftArg.set(myNode15_1);
myNode15_2.rightArg.set(myNode12);
myNode15_2.isVisible = false;
const myNode15_3 = object.addFuseOperation();
myNode15_3.leftArg.set(myNode15_2);
myNode15_3.rightArg.set(myNode13);
myNode15_3.isVisible = false;
myNode15 = object.addFuseOperation();
myNode15.leftArg.set(myNode15_3);
myNode15.rightArg.set(myNode14);
myNode15.isVisible = false;
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addBox();
myNode16.point1.set(-3.73295,-3.39995,-0.53295);
myNode16.point2.set(3.7339499999999997,3.2549499999999996,0.26695);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);
myNode16.innerTranslation.vector.set(0.0004999999999997229,-0.07250000000000023,-0.133);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addCylinder();
myNode17.point1.set(1.061,-0.628,-18.0999);
myNode17.point2.set(1.061,-0.628,18.099999999999998);
myNode17.radius.set(0.271);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addBox();
myNode18.point1.set(-1.06595,-0.89295,-18.0999);
myNode18.point2.set(1.06095,-0.36005,0.5329999999999977);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);
myNode18.innerTranslation.vector.set(-0.0024999999999999467,-0.6265000000000001,-8.783450000000002);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19_1 = myNode16.clone();
myNode19_1.isVisible = false;
const myNode19_2 = object.addFuseOperation();
myNode19_2.leftArg.set(myNode19_1);
myNode19_2.rightArg.set(myNode17);
myNode19_2.isVisible = false;
myNode19 = object.addFuseOperation();
myNode19.leftArg.set(myNode19_2);
myNode19.rightArg.set(myNode18);
myNode19.isVisible = false;
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addCutOperation();
myNode20.leftArg.set(myNode15);
myNode20.rightArg.set(myNode19);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addBox();
myNode21.point1.set(-18.0999,-4.9999,-18.0999);
myNode21.point2.set(3.5878999999999976,1.7729,0.5328999999999979);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);
myNode21.innerTranslation.vector.set(-7.256000000000002,-1.6135000000000002,-8.783500000000002);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addBox();
myNode22.point1.set(2.1331,-4.9999,-18.0999);
myNode22.point2.set(4.2659,3.2548999999999992,0.5328999999999979);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(0.0,0.0,0.0);
myNode22.innerRotation.angle.set(0.0);
myNode22.innerTranslation.vector.set(3.1995000000000005,-0.8725000000000005,-8.783500000000002);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addFuseOperation();
myNode23.leftArg.set(myNode21);
myNode23.rightArg.set(myNode22);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addCylinder();
myNode24.point1.set(1.595,0.706,-18.0999);
myNode24.point2.set(1.595,0.706,18.099999999999998);
myNode24.radius.set(0.27);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addCutOperation();
myNode25.leftArg.set(myNode23);
myNode25.rightArg.set(myNode24);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addCylinder();
myNode26.point1.set(-1.066,-0.628,-0.53295);
myNode26.point2.set(-1.066,-0.628,18.09995);
myNode26.radius.set(0.267);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addCylinder();
myNode27.point1.set(-3.467,-4.174,-18.0999);
myNode27.point2.set(-3.467,-4.174,18.099999999999998);
myNode27.radius.set(0.427);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addCylinder();
myNode28.point1.set(3.59,-4.325,-18.0999);
myNode28.point2.set(3.59,-4.325,0.5329999999999977);
myNode28.radius.set(0.68);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(0.0,0.0,0.0);
myNode28.innerRotation.angle.set(0.0);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addCylinder();
myNode29.point1.set(2.133,2.039,0.26705);
myNode29.point2.set(2.133,2.039,18.09995);
myNode29.radius.set(0.266);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30_1 = myNode26.clone();
myNode30_1.isVisible = false;
const myNode30_2 = object.addFuseOperation();
myNode30_2.leftArg.set(myNode30_1);
myNode30_2.rightArg.set(myNode27);
myNode30_2.isVisible = false;
const myNode30_3 = object.addFuseOperation();
myNode30_3.leftArg.set(myNode30_2);
myNode30_3.rightArg.set(myNode28);
myNode30_3.isVisible = false;
myNode30 = object.addFuseOperation();
myNode30.leftArg.set(myNode30_3);
myNode30.rightArg.set(myNode29);
myNode30.isVisible = false;
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addCutOperation();
myNode31.leftArg.set(myNode25);
myNode31.rightArg.set(myNode30);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addCommonOperation();
myNode32.leftArg.set(myNode20);
myNode32.rightArg.set(myNode31);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addBox();
myNode33.point1.set(-4.2669,-4.9999,-0.5329);
myNode33.point2.set(3.5879000000000003,0.8929,0.5338999999999999);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode33.innerRotation.angle.set(3.14159);
myNode33.innerTranslation.vector.set(-0.3394999999999997,-2.0535,0.0004999999999999449);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addBox();
myNode34.point1.set(2.50705,-18.0999,-0.53295);
myNode34.point2.set(18.09995,-3.5330000000000013,18.09995);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode34.innerRotation.angle.set(3.14159);
myNode34.innerTranslation.vector.set(10.3035,-10.816450000000001,8.7835);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addCylinder();
myNode35.point1.set(-3.468,4.173,-18.0999);
myNode35.point2.set(-3.468,4.173,18.099999999999998);
myNode35.radius.set(0.426);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,0.0);
myNode35.innerRotation.angle.set(0.0);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addCylinder();
myNode36.point1.set(-3.454,3.255,-0.53295);
myNode36.point2.set(-3.454,3.255,0.26695);
myNode36.radius.set(0.283);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(0.0,0.0,0.0);
myNode36.innerRotation.angle.set(0.0);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addBox();
myNode37.point1.set(-3.60095,-18.0999,-0.26695);
myNode37.point2.set(3.58795,-3.255000000000001,18.09995);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode37.innerRotation.angle.set(3.14159);
myNode37.innerTranslation.vector.set(-0.00649999999999995,-10.67745,8.916500000000001);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addBox();
myNode38.point1.set(-18.0999,-4.99995,-18.0999);
myNode38.point2.set(-2.130000000000001,-3.53405,0.5329999999999977);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode38.innerRotation.angle.set(3.14159);
myNode38.innerTranslation.vector.set(-10.11495,-4.267,-8.783450000000002);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addCylinder();
myNode39.point1.set(-3.608,4.344,-18.1);
myNode39.point2.set(-3.608,4.344,18.1);
myNode39.radius.set(0.654);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(0.0,0.0,0.0);
myNode39.innerRotation.angle.set(0.0);
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addCutOperation();
myNode40.leftArg.set(myNode38);
myNode40.rightArg.set(myNode39);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41 = object.addBox();
myNode41.point1.set(-18.0999,-3.25495,-0.53295);
myNode41.point2.set(18.099999999999998,0.8939500000000002,0.5339499999999999);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode41.innerRotation.angle.set(3.14159);
myNode41.innerTranslation.vector.set(4.9999999998107114e-05,-1.1804999999999999,0.0004999999999999449);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addCylinder();
myNode42.point1.set(-2.801,0.733,-0.533);
myNode42.point2.set(-2.801,0.733,18.099999999999998);
myNode42.radius.set(0.4);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0,0.0,0.0);
myNode42.innerRotation.angle.set(0.0);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addCutOperation();
myNode43.leftArg.set(myNode41);
myNode43.rightArg.set(myNode42);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44_1 = myNode34.clone();
myNode44_1.isVisible = false;
const myNode44_2 = object.addFuseOperation();
myNode44_2.leftArg.set(myNode44_1);
myNode44_2.rightArg.set(myNode35);
myNode44_2.isVisible = false;
const myNode44_3 = object.addFuseOperation();
myNode44_3.leftArg.set(myNode44_2);
myNode44_3.rightArg.set(myNode36);
myNode44_3.isVisible = false;
const myNode44_4 = object.addFuseOperation();
myNode44_4.leftArg.set(myNode44_3);
myNode44_4.rightArg.set(myNode37);
myNode44_4.isVisible = false;
const myNode44_5 = object.addFuseOperation();
myNode44_5.leftArg.set(myNode44_4);
myNode44_5.rightArg.set(myNode40);
myNode44_5.isVisible = false;
myNode44 = object.addFuseOperation();
myNode44.leftArg.set(myNode44_5);
myNode44.rightArg.set(myNode43);
myNode44.isVisible = false;
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45 = object.addCutOperation();
myNode45.leftArg.set(myNode33);
myNode45.rightArg.set(myNode44);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addCylinder();
myNode46.point1.set(-2.798,-2.601,-0.5329);
myNode46.point2.set(-2.798,-2.601,0.5338999999999999);
myNode46.radius.set(0.399);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(0.0,0.0,0.0);
myNode46.innerRotation.angle.set(0.0);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addBox();
myNode47.point1.set(-3.7329,-3.3999,-0.5329);
myNode47.point2.set(3.5879000000000003,1.7728999999999995,0.5338999999999999);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(0.0,0.0,0.0);
myNode47.innerRotation.angle.set(0.0);
myNode47.innerTranslation.vector.set(-0.07249999999999979,-0.8135000000000003,0.0004999999999999449);
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addCylinder();
myNode48.point1.set(-1.6,0.706,-0.53295);
myNode48.point2.set(-1.6,0.706,0.5339499999999999);
myNode48.radius.set(0.266);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);
myNode48.isVisible = false;

/* définition du node n°49*/
const myNode49 = object.addCutOperation();
myNode49.leftArg.set(myNode47);
myNode49.rightArg.set(myNode48);
myNode49.isVisible = false;

/* définition du node n°50*/
const myNode50 = object.addCylinder();
myNode50.point1.set(2.133,2.039,-18.0999);
myNode50.point2.set(2.133,2.039,18.099999999999998);
myNode50.radius.set(0.266);
myNode50.innerRotation.center.set(0,0,0);
myNode50.innerRotation.axis.set(0.0,0.0,0.0);
myNode50.innerRotation.angle.set(0.0);
myNode50.isVisible = false;

/* définition du node n°51*/
const myNode51 = object.addBox();
myNode51.point1.set(-1.59995,-0.89295,-0.53295);
myNode51.point2.set(2.13295,0.97395,0.5339499999999999);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(0.0,0.0,0.0);
myNode51.innerRotation.angle.set(0.0);
myNode51.innerTranslation.vector.set(0.26649999999999996,0.04049999999999998,0.0004999999999999449);
myNode51.isVisible = false;

/* définition du node n°52*/
const myNode52 = object.addFuseOperation();
myNode52.leftArg.set(myNode50);
myNode52.rightArg.set(myNode51);
myNode52.isVisible = false;

/* définition du node n°53*/
const myNode53 = object.addCutOperation();
myNode53.leftArg.set(myNode49);
myNode53.rightArg.set(myNode52);
myNode53.isVisible = false;

/* définition du node n°54*/
const myNode54 = object.addCylinder();
myNode54.point1.set(2.801,0.733,-18.0999);
myNode54.point2.set(2.801,0.733,18.0999);
myNode54.radius.set(0.4);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(0.0,0.0,0.0);
myNode54.innerRotation.angle.set(0.0);
myNode54.isVisible = false;

/* définition du node n°55*/
const myNode55 = object.addBox();
myNode55.point1.set(2.1331,3.2551,-0.5329);
myNode55.point2.set(3.5879000000000003,18.099899999999998,0.5338999999999999);
myNode55.innerRotation.center.set(0,0,0);
myNode55.innerRotation.axis.set(0.0,0.0,0.0);
myNode55.innerRotation.angle.set(0.0);
myNode55.innerTranslation.vector.set(2.8605,10.6775,0.0004999999999999449);
myNode55.isVisible = false;

/* définition du node n°56*/
const myNode56 = object.addBox();
myNode56.point1.set(1.0611,0.4401,0.2671);
myNode56.point2.set(3.5879000000000003,1.7729,0.5339);
myNode56.innerRotation.center.set(0,0,0);
myNode56.innerRotation.axis.set(0.0,0.0,0.0);
myNode56.innerRotation.angle.set(0.0);
myNode56.innerTranslation.vector.set(2.3245,1.1065,0.40049999999999997);
myNode56.isVisible = false;

/* définition du node n°57*/
const myNode57 = object.addBox();
myNode57.point1.set(-3.7329,0.4401,0.2671);
myNode57.point2.set(1.0609000000000002,1.7729,18.099899999999998);
myNode57.innerRotation.center.set(0,0,0);
myNode57.innerRotation.axis.set(0.0,0.0,0.0);
myNode57.innerRotation.angle.set(0.0);
myNode57.innerTranslation.vector.set(-1.3359999999999999,1.1065,9.183499999999999);
myNode57.isVisible = false;

/* définition du node n°58*/
const myNode58_1 = myNode54.clone();
myNode58_1.isVisible = false;
const myNode58_2 = object.addFuseOperation();
myNode58_2.leftArg.set(myNode58_1);
myNode58_2.rightArg.set(myNode55);
myNode58_2.isVisible = false;
const myNode58_3 = object.addFuseOperation();
myNode58_3.leftArg.set(myNode58_2);
myNode58_3.rightArg.set(myNode56);
myNode58_3.isVisible = false;
myNode58 = object.addFuseOperation();
myNode58.leftArg.set(myNode58_3);
myNode58.rightArg.set(myNode57);
myNode58.isVisible = false;
myNode58.isVisible = false;

/* définition du node n°59*/
const myNode59 = object.addCommonOperation();
myNode59.leftArg.set(myNode53);
myNode59.rightArg.set(myNode58);
myNode59.isVisible = false;

/* définition du node n°60*/
const myNode60 = object.addCylinder();
myNode60.point1.set(-2.801,0.733,0.2671);
myNode60.point2.set(-2.801,0.733,0.5339);
myNode60.radius.set(0.4);
myNode60.innerRotation.center.set(0,0,0);
myNode60.innerRotation.axis.set(0.0,0.0,0.0);
myNode60.innerRotation.angle.set(0.0);
myNode60.isVisible = false;

/* définition du node n°61*/
const myNode61 = object.addBox();
myNode61.point1.set(-3.6009,-4.9999,-0.2669);
myNode61.point2.set(2.5069,0.8929,0.5328999999999999);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode61.innerRotation.angle.set(3.14159);
myNode61.innerTranslation.vector.set(-0.5470000000000002,-2.0535,0.13299999999999995);
myNode61.isVisible = false;

/* définition du node n°62*/
const myNode62 = object.addBox();
myNode62.point1.set(-3.6009,-4.9999,-0.5329);
myNode62.point2.set(-2.1291,-4.3441,-0.26610000000000006);
myNode62.innerRotation.center.set(0,0,0);
myNode62.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode62.innerRotation.angle.set(3.14159);
myNode62.innerTranslation.vector.set(-2.865,-4.672000000000001,-0.3995000000000001);
myNode62.isVisible = false;

/* définition du node n°63*/
const myNode63 = object.addCylinder();
myNode63.point1.set(3.588,4.321,-0.5329);
myNode63.point2.set(3.588,4.321,0.5338999999999999);
myNode63.radius.set(0.682);
myNode63.innerRotation.center.set(0,0,0);
myNode63.innerRotation.axis.set(0.0,0.0,0.0);
myNode63.innerRotation.angle.set(0.0);
myNode63.isVisible = false;

/* définition du node n°64*/
const myNode64 = object.addBox();
myNode64.point1.set(-4.2669,-4.3439,-0.5329);
myNode64.point2.set(4.2659,0.8929,0.5338999999999999);
myNode64.innerRotation.center.set(0,0,0);
myNode64.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode64.innerRotation.angle.set(3.14159);
myNode64.innerTranslation.vector.set(-0.0004999999999997229,-1.7254999999999998,0.0004999999999999449);
myNode64.isVisible = false;

/* définition du node n°65*/
const myNode65 = object.addCylinder();
myNode65.point1.set(-2.13,2.042,-18.0999);
myNode65.point2.set(-2.13,2.042,18.099999999999998);
myNode65.radius.set(0.269);
myNode65.innerRotation.center.set(0,0,0);
myNode65.innerRotation.axis.set(0.0,0.0,0.0);
myNode65.innerRotation.angle.set(0.0);
myNode65.isVisible = false;

/* définition du node n°66*/
const myNode66 = object.addCutOperation();
myNode66.leftArg.set(myNode64);
myNode66.rightArg.set(myNode65);
myNode66.isVisible = false;

/* définition du node n°67*/
const myNode67 = object.addBox();
myNode67.point1.set(2.5071,-4.9999,-0.5329);
myNode67.point2.set(3.5879,0.8929,0.5338999999999999);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode67.innerRotation.angle.set(3.14159);
myNode67.innerTranslation.vector.set(3.0475,-2.0535,0.0004999999999999449);
myNode67.isVisible = false;

/* définition du node n°68*/
const myNode68_1 = myNode60.clone();
myNode68_1.isVisible = false;
const myNode68_2 = object.addFuseOperation();
myNode68_2.leftArg.set(myNode68_1);
myNode68_2.rightArg.set(myNode61);
myNode68_2.isVisible = false;
const myNode68_3 = object.addFuseOperation();
myNode68_3.leftArg.set(myNode68_2);
myNode68_3.rightArg.set(myNode62);
myNode68_3.isVisible = false;
const myNode68_4 = object.addFuseOperation();
myNode68_4.leftArg.set(myNode68_3);
myNode68_4.rightArg.set(myNode63);
myNode68_4.isVisible = false;
const myNode68_5 = object.addFuseOperation();
myNode68_5.leftArg.set(myNode68_4);
myNode68_5.rightArg.set(myNode66);
myNode68_5.isVisible = false;
myNode68 = object.addFuseOperation();
myNode68.leftArg.set(myNode68_5);
myNode68.rightArg.set(myNode67);
myNode68.isVisible = false;
myNode68.isVisible = false;

/* définition du node n°69*/
const myNode69 = object.addCylinder();
myNode69.point1.set(3.468,3.267,-18.0999);
myNode69.point2.set(3.468,3.267,0.26699999999999946);
myNode69.radius.set(0.264);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(0.0,0.0,0.0);
myNode69.innerRotation.angle.set(0.0);
myNode69.isVisible = false;

/* définition du node n°70*/
const myNode70 = object.addCylinder();
myNode70.point1.set(3.588,4.321,-0.267);
myNode70.point2.set(3.588,4.321,18.1);
myNode70.radius.set(0.682);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(0.0,0.0,0.0);
myNode70.innerRotation.angle.set(0.0);
myNode70.isVisible = false;

/* définition du node n°71*/
const myNode71 = object.addCutOperation();
myNode71.leftArg.set(myNode69);
myNode71.rightArg.set(myNode70);
myNode71.isVisible = false;

/* définition du node n°72*/
const myNode72 = object.addBox();
myNode72.point1.set(-3.73295,-3.53295,-0.26695);
myNode72.point2.set(3.5879499999999998,0.8939499999999998,18.09995);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode72.innerRotation.angle.set(3.14159);
myNode72.innerTranslation.vector.set(-0.07250000000000023,-1.3195000000000001,8.916500000000001);
myNode72.isVisible = false;

/* définition du node n°73*/
const myNode73 = object.addCylinder();
myNode73.point1.set(-3.468,4.173,-0.53295);
myNode73.point2.set(-3.468,4.173,18.09995);
myNode73.radius.set(0.426);
myNode73.innerRotation.center.set(0,0,0);
myNode73.innerRotation.axis.set(0.0,0.0,0.0);
myNode73.innerRotation.angle.set(0.0);
myNode73.isVisible = false;

/* définition du node n°74*/
const myNode74 = object.addBox();
myNode74.point1.set(-2.50695,-3.25495,-0.26695);
myNode74.point2.set(4.26595,-2.30605,0.53295);
myNode74.innerRotation.center.set(0,0,0);
myNode74.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode74.innerRotation.angle.set(3.14159);
myNode74.innerTranslation.vector.set(0.8795000000000002,-2.7805,0.133);
myNode74.isVisible = false;

/* définition du node n°75*/
const myNode75 = object.addCylinder();
myNode75.point1.set(3.467,4.175,-18.0999);
myNode75.point2.set(3.467,4.175,18.099999999999998);
myNode75.radius.set(0.426);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(0.0,0.0,0.0);
myNode75.innerRotation.angle.set(0.0);
myNode75.isVisible = false;

/* définition du node n°76*/
const myNode76 = object.addBox();
myNode76.point1.set(-2.50695,-4.99995,0.26705);
myNode76.point2.set(2.5059500000000003,-3.53405,18.09995);
myNode76.innerRotation.center.set(0,0,0);
myNode76.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode76.innerRotation.angle.set(3.14159);
myNode76.innerTranslation.vector.set(-0.0004999999999997229,-4.267,9.183499999999999);
myNode76.isVisible = false;

/* définition du node n°77*/
const myNode77 = object.addBox();
myNode77.point1.set(-2.12895,-2.30695,-18.0999);
myNode77.point2.set(18.09995,18.09995,18.099999999999998);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode77.innerRotation.angle.set(3.14159);
myNode77.innerTranslation.vector.set(7.9855,7.8965,4.9999999998107114e-05);
myNode77.isVisible = false;

/* définition du node n°78*/
const myNode78_1 = myNode71.clone();
myNode78_1.isVisible = false;
const myNode78_2 = object.addFuseOperation();
myNode78_2.leftArg.set(myNode78_1);
myNode78_2.rightArg.set(myNode72);
myNode78_2.isVisible = false;
const myNode78_3 = object.addFuseOperation();
myNode78_3.leftArg.set(myNode78_2);
myNode78_3.rightArg.set(myNode73);
myNode78_3.isVisible = false;
const myNode78_4 = object.addFuseOperation();
myNode78_4.leftArg.set(myNode78_3);
myNode78_4.rightArg.set(myNode74);
myNode78_4.isVisible = false;
const myNode78_5 = object.addFuseOperation();
myNode78_5.leftArg.set(myNode78_4);
myNode78_5.rightArg.set(myNode75);
myNode78_5.isVisible = false;
const myNode78_6 = object.addFuseOperation();
myNode78_6.leftArg.set(myNode78_5);
myNode78_6.rightArg.set(myNode76);
myNode78_6.isVisible = false;
myNode78 = object.addFuseOperation();
myNode78.leftArg.set(myNode78_6);
myNode78.rightArg.set(myNode77);
myNode78.isVisible = false;
myNode78.isVisible = false;

/* définition du node n°79*/
const myNode79 = object.addCutOperation();
myNode79.leftArg.set(myNode68);
myNode79.rightArg.set(myNode78);
myNode79.isVisible = false;

/* définition du node n°80*/
const myNode80_1 = myNode6.clone();
myNode80_1.isVisible = false;
const myNode80_2 = object.addFuseOperation();
myNode80_2.leftArg.set(myNode80_1);
myNode80_2.rightArg.set(myNode9);
myNode80_2.isVisible = false;
const myNode80_3 = object.addFuseOperation();
myNode80_3.leftArg.set(myNode80_2);
myNode80_3.rightArg.set(myNode10);
myNode80_3.isVisible = false;
const myNode80_4 = object.addFuseOperation();
myNode80_4.leftArg.set(myNode80_3);
myNode80_4.rightArg.set(myNode32);
myNode80_4.isVisible = false;
const myNode80_5 = object.addFuseOperation();
myNode80_5.leftArg.set(myNode80_4);
myNode80_5.rightArg.set(myNode45);
myNode80_5.isVisible = false;
const myNode80_6 = object.addFuseOperation();
myNode80_6.leftArg.set(myNode80_5);
myNode80_6.rightArg.set(myNode46);
myNode80_6.isVisible = false;
const myNode80_7 = object.addFuseOperation();
myNode80_7.leftArg.set(myNode80_6);
myNode80_7.rightArg.set(myNode59);
myNode80_7.isVisible = false;
myNode80 = object.addFuseOperation();
myNode80.leftArg.set(myNode80_7);
myNode80.rightArg.set(myNode79);
myNode80.isVisible = false;
myNode80.isVisible = false;

/* définition du node n°81*/
const myNode81 = object.addBox();
myNode81.point1.set(-5.1199,-5.9999,-0.6399);
myNode81.point2.set(5.1199,5.9999,0.6399);
myNode81.innerRotation.center.set(0,0,0);
myNode81.innerRotation.axis.set(0.0,0.0,0.0);
myNode81.innerRotation.angle.set(0.0);
myNode81.innerTranslation.vector.set(0.0,0.0,0.0);
myNode81.isVisible = false;

/* définition du node n°82*/
const myNode82 = object.addCommonOperation();
myNode82.leftArg.set(myNode80);
myNode82.rightArg.set(myNode81);
myNode82.isVisible = true;


/*END Geometry Object Definition*/