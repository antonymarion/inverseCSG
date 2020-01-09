/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addCylinder();
myNode0.point1.set(-2.798,-2.601,-0.5329);
myNode0.point2.set(-2.798,-2.601,0.5338999999999999);
myNode0.radius.set(0.399);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(3.5881,-3.3999,-0.5329);
myNode1.point2.set(3.7338999999999998,-3.1331,0.5338999999999999);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.innerTranslation.vector.set(3.661,-3.2665,0.0004999999999999449);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(3.469,-3.132,-18.0999);
myNode2.point2.set(3.469,-3.132,18.099999999999998);
myNode2.radius.set(0.266);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addCutOperation();
myNode3.leftArg.set(myNode1);
myNode3.rightArg.set(myNode2);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addBox();
myNode4.point1.set(-3.7329,-4.9999,-0.5329);
myNode4.point2.set(3.5879000000000003,0.43989999999999974,0.5338999999999999);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.innerTranslation.vector.set(-0.07249999999999979,-2.2800000000000002,0.0004999999999999449);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addBox();
myNode5.point1.set(-4.2669,-4.3249,-0.5329);
myNode5.point2.set(-3.7340999999999998,-0.8931000000000004,0.5338999999999999);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.innerTranslation.vector.set(-4.0005,-2.6090000000000004,0.0004999999999999449);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addCylinder();
myNode6.point1.set(-3.601,-4.338,-0.5329);
myNode6.point2.set(-3.601,-4.338,18.099899999999998);
myNode6.radius.set(0.662);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addBox();
myNode7.point1.set(1.5951,-4.3249,-0.5329);
myNode7.point2.set(4.2669,3.2558999999999996,0.5338999999999999);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);
myNode7.innerTranslation.vector.set(2.931,-0.5345000000000004,0.0004999999999999449);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8_1 = myNode4.clone();
myNode8_1.isVisible = false;
const myNode8_2 = object.addFuseOperation();
myNode8_2.leftArg.set(myNode8_1);
myNode8_2.rightArg.set(myNode5);
myNode8_2.isVisible = false;
const myNode8_3 = object.addFuseOperation();
myNode8_3.leftArg.set(myNode8_2);
myNode8_3.rightArg.set(myNode6);
myNode8_3.isVisible = false;
myNode8 = object.addFuseOperation();
myNode8.leftArg.set(myNode8_3);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = false;
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addCylinder();
myNode9.point1.set(1.061,-0.628,-18.0999);
myNode9.point2.set(1.061,-0.628,18.099999999999998);
myNode9.radius.set(0.271);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(-3.73295,-3.39995,-0.53295);
myNode10.point2.set(3.7339499999999997,3.2549499999999996,0.26695);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.innerTranslation.vector.set(0.0004999999999997229,-0.07250000000000023,-0.133);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addBox();
myNode11.point1.set(-1.06595,-0.89295,-18.0999);
myNode11.point2.set(1.06095,-0.36005,0.5329999999999977);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);
myNode11.innerTranslation.vector.set(-0.0024999999999999467,-0.6265000000000001,-8.783450000000002);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12_1 = myNode9.clone();
myNode12_1.isVisible = false;
const myNode12_2 = object.addFuseOperation();
myNode12_2.leftArg.set(myNode12_1);
myNode12_2.rightArg.set(myNode10);
myNode12_2.isVisible = false;
myNode12 = object.addFuseOperation();
myNode12.leftArg.set(myNode12_2);
myNode12.rightArg.set(myNode11);
myNode12.isVisible = false;
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addCutOperation();
myNode13.leftArg.set(myNode8);
myNode13.rightArg.set(myNode12);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addBox();
myNode14.point1.set(-18.0999,-4.9999,-18.0999);
myNode14.point2.set(3.5878999999999976,1.7729,0.5328999999999979);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);
myNode14.innerTranslation.vector.set(-7.256000000000002,-1.6135000000000002,-8.783500000000002);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addBox();
myNode15.point1.set(2.1331,-4.9999,-18.0999);
myNode15.point2.set(4.2659,3.2548999999999992,0.5328999999999979);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);
myNode15.innerTranslation.vector.set(3.1995000000000005,-0.8725000000000005,-8.783500000000002);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addFuseOperation();
myNode16.leftArg.set(myNode14);
myNode16.rightArg.set(myNode15);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addCylinder();
myNode17.point1.set(1.595,0.706,-18.0999);
myNode17.point2.set(1.595,0.706,18.099999999999998);
myNode17.radius.set(0.27);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addCutOperation();
myNode18.leftArg.set(myNode16);
myNode18.rightArg.set(myNode17);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addCylinder();
myNode19.point1.set(2.133,2.039,0.26705);
myNode19.point2.set(2.133,2.039,18.09995);
myNode19.radius.set(0.266);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(0.0,0.0,0.0);
myNode19.innerRotation.angle.set(0.0);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addCylinder();
myNode20.point1.set(-3.467,-4.174,-18.0999);
myNode20.point2.set(-3.467,-4.174,18.099999999999998);
myNode20.radius.set(0.427);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addCylinder();
myNode21.point1.set(3.59,-4.325,-18.0999);
myNode21.point2.set(3.59,-4.325,0.5329999999999977);
myNode21.radius.set(0.68);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addCylinder();
myNode22.point1.set(-1.066,-0.628,-0.53295);
myNode22.point2.set(-1.066,-0.628,18.09995);
myNode22.radius.set(0.267);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(0.0,0.0,0.0);
myNode22.innerRotation.angle.set(0.0);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23_1 = myNode19.clone();
myNode23_1.isVisible = false;
const myNode23_2 = object.addFuseOperation();
myNode23_2.leftArg.set(myNode23_1);
myNode23_2.rightArg.set(myNode20);
myNode23_2.isVisible = false;
const myNode23_3 = object.addFuseOperation();
myNode23_3.leftArg.set(myNode23_2);
myNode23_3.rightArg.set(myNode21);
myNode23_3.isVisible = false;
myNode23 = object.addFuseOperation();
myNode23.leftArg.set(myNode23_3);
myNode23.rightArg.set(myNode22);
myNode23.isVisible = false;
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addCutOperation();
myNode24.leftArg.set(myNode18);
myNode24.rightArg.set(myNode23);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addCommonOperation();
myNode25.leftArg.set(myNode13);
myNode25.rightArg.set(myNode24);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addCylinder();
myNode26.point1.set(2.799,-2.598,-0.5329);
myNode26.point2.set(2.799,-2.598,0.2668999999999999);
myNode26.radius.set(0.4);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addCylinder();
myNode27.point1.set(3.59,-4.325,-0.5329);
myNode27.point2.set(3.59,-4.325,0.5338999999999999);
myNode27.radius.set(0.68);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addBox();
myNode28.point1.set(-4.2669,-3.3999,-0.5329);
myNode28.point2.set(-3.6010999999999997,-3.1331,0.2668999999999999);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(0.0,0.0,0.0);
myNode28.innerRotation.angle.set(0.0);
myNode28.innerTranslation.vector.set(-3.9339999999999997,-3.2665,-0.13300000000000006);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addFuseOperation();
myNode29.leftArg.set(myNode27);
myNode29.rightArg.set(myNode28);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addCylinder();
myNode30.point1.set(-3.471,-3.133,-0.53295);
myNode30.point2.set(-3.471,-3.133,18.09995);
myNode30.radius.set(0.263);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addCylinder();
myNode31.point1.set(3.467,-4.174,-18.0999);
myNode31.point2.set(3.467,-4.174,18.099999999999998);
myNode31.radius.set(0.426);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(0.0,0.0,0.0);
myNode31.innerRotation.angle.set(0.0);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addFuseOperation();
myNode32.leftArg.set(myNode30);
myNode32.rightArg.set(myNode31);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addCutOperation();
myNode33.leftArg.set(myNode29);
myNode33.rightArg.set(myNode32);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addBox();
myNode34.point1.set(-3.7329,-3.3999,-0.5329);
myNode34.point2.set(3.5879000000000003,1.7728999999999995,0.5338999999999999);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(0.0,0.0,0.0);
myNode34.innerRotation.angle.set(0.0);
myNode34.innerTranslation.vector.set(-0.07249999999999979,-0.8135000000000003,0.0004999999999999449);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addCylinder();
myNode35.point1.set(-1.6,0.706,-0.53295);
myNode35.point2.set(-1.6,0.706,0.5339499999999999);
myNode35.radius.set(0.266);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,0.0);
myNode35.innerRotation.angle.set(0.0);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addCutOperation();
myNode36.leftArg.set(myNode34);
myNode36.rightArg.set(myNode35);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addCylinder();
myNode37.point1.set(2.133,2.039,-18.0999);
myNode37.point2.set(2.133,2.039,18.099999999999998);
myNode37.radius.set(0.266);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0,0.0,0.0);
myNode37.innerRotation.angle.set(0.0);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addBox();
myNode38.point1.set(-1.59995,-0.89295,-0.53295);
myNode38.point2.set(2.13295,0.97395,0.5339499999999999);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(0.0,0.0,0.0);
myNode38.innerRotation.angle.set(0.0);
myNode38.innerTranslation.vector.set(0.26649999999999996,0.04049999999999998,0.0004999999999999449);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addFuseOperation();
myNode39.leftArg.set(myNode37);
myNode39.rightArg.set(myNode38);
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addCutOperation();
myNode40.leftArg.set(myNode36);
myNode40.rightArg.set(myNode39);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41 = object.addBox();
myNode41.point1.set(1.0611,0.4401,0.2671);
myNode41.point2.set(3.5879000000000003,1.7729,0.5339);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,0.0,0.0);
myNode41.innerRotation.angle.set(0.0);
myNode41.innerTranslation.vector.set(2.3245,1.1065,0.40049999999999997);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addCylinder();
myNode42.point1.set(2.801,0.733,-18.0999);
myNode42.point2.set(2.801,0.733,18.0999);
myNode42.radius.set(0.4);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0,0.0,0.0);
myNode42.innerRotation.angle.set(0.0);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addBox();
myNode43.point1.set(-3.7329,0.4401,0.2671);
myNode43.point2.set(1.0609000000000002,1.7729,18.099899999999998);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(0.0,0.0,0.0);
myNode43.innerRotation.angle.set(0.0);
myNode43.innerTranslation.vector.set(-1.3359999999999999,1.1065,9.183499999999999);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44 = object.addBox();
myNode44.point1.set(2.1331,3.2551,-0.5329);
myNode44.point2.set(3.5879000000000003,18.099899999999998,0.5338999999999999);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(0.0,0.0,0.0);
myNode44.innerRotation.angle.set(0.0);
myNode44.innerTranslation.vector.set(2.8605,10.6775,0.0004999999999999449);
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45_1 = myNode41.clone();
myNode45_1.isVisible = false;
const myNode45_2 = object.addFuseOperation();
myNode45_2.leftArg.set(myNode45_1);
myNode45_2.rightArg.set(myNode42);
myNode45_2.isVisible = false;
const myNode45_3 = object.addFuseOperation();
myNode45_3.leftArg.set(myNode45_2);
myNode45_3.rightArg.set(myNode43);
myNode45_3.isVisible = false;
myNode45 = object.addFuseOperation();
myNode45.leftArg.set(myNode45_3);
myNode45.rightArg.set(myNode44);
myNode45.isVisible = false;
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addCommonOperation();
myNode46.leftArg.set(myNode40);
myNode46.rightArg.set(myNode45);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addCylinder();
myNode47.point1.set(-2.801,0.733,0.2671);
myNode47.point2.set(-2.801,0.733,0.5339);
myNode47.radius.set(0.4);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(0.0,0.0,0.0);
myNode47.innerRotation.angle.set(0.0);
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addCylinder();
myNode48.point1.set(3.588,4.321,-0.5329);
myNode48.point2.set(3.588,4.321,0.5338999999999999);
myNode48.radius.set(0.682);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);
myNode48.isVisible = false;

/* définition du node n°49*/
const myNode49 = object.addBox();
myNode49.point1.set(2.5071,-4.9999,-0.5329);
myNode49.point2.set(3.5879,0.8929,0.5338999999999999);
myNode49.innerRotation.center.set(0,0,0);
myNode49.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode49.innerRotation.angle.set(179.9998479605043);
myNode49.innerTranslation.vector.set(3.0475,-2.0535,0.0004999999999999449);
myNode49.isVisible = false;

/* définition du node n°50*/
const myNode50 = object.addBox();
myNode50.point1.set(-4.2669,-4.3439,-0.5329);
myNode50.point2.set(4.2659,0.8929,0.5338999999999999);
myNode50.innerRotation.center.set(0,0,0);
myNode50.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode50.innerRotation.angle.set(179.9998479605043);
myNode50.innerTranslation.vector.set(-0.0004999999999997229,-1.7254999999999998,0.0004999999999999449);
myNode50.isVisible = false;

/* définition du node n°51*/
const myNode51 = object.addCylinder();
myNode51.point1.set(-2.13,2.042,-18.0999);
myNode51.point2.set(-2.13,2.042,18.099999999999998);
myNode51.radius.set(0.269);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(0.0,0.0,0.0);
myNode51.innerRotation.angle.set(0.0);
myNode51.isVisible = false;

/* définition du node n°52*/
const myNode52 = object.addCutOperation();
myNode52.leftArg.set(myNode50);
myNode52.rightArg.set(myNode51);
myNode52.isVisible = false;

/* définition du node n°53*/
const myNode53 = object.addBox();
myNode53.point1.set(-3.6009,-4.9999,-0.2669);
myNode53.point2.set(2.5069,0.8929,0.5328999999999999);
myNode53.innerRotation.center.set(0,0,0);
myNode53.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode53.innerRotation.angle.set(179.9998479605043);
myNode53.innerTranslation.vector.set(-0.5470000000000002,-2.0535,0.13299999999999995);
myNode53.isVisible = false;

/* définition du node n°54*/
const myNode54 = object.addBox();
myNode54.point1.set(-3.6009,-4.9999,-0.5329);
myNode54.point2.set(-2.1291,-4.3441,-0.26610000000000006);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode54.innerRotation.angle.set(179.9998479605043);
myNode54.innerTranslation.vector.set(-2.865,-4.672000000000001,-0.3995000000000001);
myNode54.isVisible = false;

/* définition du node n°55*/
const myNode55_1 = myNode47.clone();
myNode55_1.isVisible = false;
const myNode55_2 = object.addFuseOperation();
myNode55_2.leftArg.set(myNode55_1);
myNode55_2.rightArg.set(myNode48);
myNode55_2.isVisible = false;
const myNode55_3 = object.addFuseOperation();
myNode55_3.leftArg.set(myNode55_2);
myNode55_3.rightArg.set(myNode49);
myNode55_3.isVisible = false;
const myNode55_4 = object.addFuseOperation();
myNode55_4.leftArg.set(myNode55_3);
myNode55_4.rightArg.set(myNode52);
myNode55_4.isVisible = false;
const myNode55_5 = object.addFuseOperation();
myNode55_5.leftArg.set(myNode55_4);
myNode55_5.rightArg.set(myNode53);
myNode55_5.isVisible = false;
myNode55 = object.addFuseOperation();
myNode55.leftArg.set(myNode55_5);
myNode55.rightArg.set(myNode54);
myNode55.isVisible = false;
myNode55.isVisible = false;

/* définition du node n°56*/
const myNode56 = object.addBox();
myNode56.point1.set(-2.50695,-4.99995,0.26705);
myNode56.point2.set(2.5059500000000003,-3.53405,18.09995);
myNode56.innerRotation.center.set(0,0,0);
myNode56.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode56.innerRotation.angle.set(179.9998479605043);
myNode56.innerTranslation.vector.set(-0.0004999999999997229,-4.267,9.183499999999999);
myNode56.isVisible = false;

/* définition du node n°57*/
const myNode57 = object.addCylinder();
myNode57.point1.set(3.467,4.175,-18.0999);
myNode57.point2.set(3.467,4.175,18.099999999999998);
myNode57.radius.set(0.426);
myNode57.innerRotation.center.set(0,0,0);
myNode57.innerRotation.axis.set(0.0,0.0,0.0);
myNode57.innerRotation.angle.set(0.0);
myNode57.isVisible = false;

/* définition du node n°58*/
const myNode58 = object.addBox();
myNode58.point1.set(-2.12895,-2.30695,-18.0999);
myNode58.point2.set(18.09995,18.09995,18.099999999999998);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode58.innerRotation.angle.set(179.9998479605043);
myNode58.innerTranslation.vector.set(7.9855,7.8965,4.9999999998107114e-05);
myNode58.isVisible = false;

/* définition du node n°59*/
const myNode59 = object.addBox();
myNode59.point1.set(-2.50695,-3.25495,-0.26695);
myNode59.point2.set(4.26595,-2.30605,0.53295);
myNode59.innerRotation.center.set(0,0,0);
myNode59.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode59.innerRotation.angle.set(179.9998479605043);
myNode59.innerTranslation.vector.set(0.8795000000000002,-2.7805,0.133);
myNode59.isVisible = false;

/* définition du node n°60*/
const myNode60 = object.addCylinder();
myNode60.point1.set(-3.468,4.173,-0.53295);
myNode60.point2.set(-3.468,4.173,18.09995);
myNode60.radius.set(0.426);
myNode60.innerRotation.center.set(0,0,0);
myNode60.innerRotation.axis.set(0.0,0.0,0.0);
myNode60.innerRotation.angle.set(0.0);
myNode60.isVisible = false;

/* définition du node n°61*/
const myNode61 = object.addBox();
myNode61.point1.set(-3.73295,-3.53295,-0.26695);
myNode61.point2.set(3.5879499999999998,0.8939499999999998,18.09995);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode61.innerRotation.angle.set(179.9998479605043);
myNode61.innerTranslation.vector.set(-0.07250000000000023,-1.3195000000000001,8.916500000000001);
myNode61.isVisible = false;

/* définition du node n°62*/
const myNode62 = object.addCylinder();
myNode62.point1.set(3.468,3.267,-18.0999);
myNode62.point2.set(3.468,3.267,0.26699999999999946);
myNode62.radius.set(0.264);
myNode62.innerRotation.center.set(0,0,0);
myNode62.innerRotation.axis.set(0.0,0.0,0.0);
myNode62.innerRotation.angle.set(0.0);
myNode62.isVisible = false;

/* définition du node n°63*/
const myNode63 = object.addCylinder();
myNode63.point1.set(3.588,4.321,-0.267);
myNode63.point2.set(3.588,4.321,18.1);
myNode63.radius.set(0.682);
myNode63.innerRotation.center.set(0,0,0);
myNode63.innerRotation.axis.set(0.0,0.0,0.0);
myNode63.innerRotation.angle.set(0.0);
myNode63.isVisible = false;

/* définition du node n°64*/
const myNode64 = object.addCutOperation();
myNode64.leftArg.set(myNode62);
myNode64.rightArg.set(myNode63);
myNode64.isVisible = false;

/* définition du node n°65*/
const myNode65_1 = myNode56.clone();
myNode65_1.isVisible = false;
const myNode65_2 = object.addFuseOperation();
myNode65_2.leftArg.set(myNode65_1);
myNode65_2.rightArg.set(myNode57);
myNode65_2.isVisible = false;
const myNode65_3 = object.addFuseOperation();
myNode65_3.leftArg.set(myNode65_2);
myNode65_3.rightArg.set(myNode58);
myNode65_3.isVisible = false;
const myNode65_4 = object.addFuseOperation();
myNode65_4.leftArg.set(myNode65_3);
myNode65_4.rightArg.set(myNode59);
myNode65_4.isVisible = false;
const myNode65_5 = object.addFuseOperation();
myNode65_5.leftArg.set(myNode65_4);
myNode65_5.rightArg.set(myNode60);
myNode65_5.isVisible = false;
const myNode65_6 = object.addFuseOperation();
myNode65_6.leftArg.set(myNode65_5);
myNode65_6.rightArg.set(myNode61);
myNode65_6.isVisible = false;
myNode65 = object.addFuseOperation();
myNode65.leftArg.set(myNode65_6);
myNode65.rightArg.set(myNode64);
myNode65.isVisible = false;
myNode65.isVisible = false;

/* définition du node n°66*/
const myNode66 = object.addCutOperation();
myNode66.leftArg.set(myNode55);
myNode66.rightArg.set(myNode65);
myNode66.isVisible = false;

/* définition du node n°67*/
const myNode67 = object.addBox();
myNode67.point1.set(-4.2669,-4.9999,-0.5329);
myNode67.point2.set(3.5879000000000003,0.8929,0.5338999999999999);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode67.innerRotation.angle.set(179.9998479605043);
myNode67.innerTranslation.vector.set(-0.3394999999999997,-2.0535,0.0004999999999999449);
myNode67.isVisible = false;

/* définition du node n°68*/
const myNode68 = object.addBox();
myNode68.point1.set(-3.60095,-18.0999,-0.26695);
myNode68.point2.set(3.58795,-3.255000000000001,18.09995);
myNode68.innerRotation.center.set(0,0,0);
myNode68.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode68.innerRotation.angle.set(179.9998479605043);
myNode68.innerTranslation.vector.set(-0.00649999999999995,-10.67745,8.916500000000001);
myNode68.isVisible = false;

/* définition du node n°69*/
const myNode69 = object.addBox();
myNode69.point1.set(-18.0999,-4.99995,-18.0999);
myNode69.point2.set(-2.130000000000001,-3.53405,0.5329999999999977);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode69.innerRotation.angle.set(179.9998479605043);
myNode69.innerTranslation.vector.set(-10.11495,-4.267,-8.783450000000002);
myNode69.isVisible = false;

/* définition du node n°70*/
const myNode70 = object.addCylinder();
myNode70.point1.set(-3.608,4.344,-18.1);
myNode70.point2.set(-3.608,4.344,18.1);
myNode70.radius.set(0.654);
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
myNode72.point1.set(2.50705,-18.0999,-0.53295);
myNode72.point2.set(18.09995,-3.5330000000000013,18.09995);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode72.innerRotation.angle.set(179.9998479605043);
myNode72.innerTranslation.vector.set(10.3035,-10.816450000000001,8.7835);
myNode72.isVisible = false;

/* définition du node n°73*/
const myNode73 = object.addCylinder();
myNode73.point1.set(-3.454,3.255,-0.53295);
myNode73.point2.set(-3.454,3.255,0.26695);
myNode73.radius.set(0.283);
myNode73.innerRotation.center.set(0,0,0);
myNode73.innerRotation.axis.set(0.0,0.0,0.0);
myNode73.innerRotation.angle.set(0.0);
myNode73.isVisible = false;

/* définition du node n°74*/
const myNode74 = object.addBox();
myNode74.point1.set(-18.0999,-3.25495,-0.53295);
myNode74.point2.set(18.099999999999998,0.8939500000000002,0.5339499999999999);
myNode74.innerRotation.center.set(0,0,0);
myNode74.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode74.innerRotation.angle.set(179.9998479605043);
myNode74.innerTranslation.vector.set(4.9999999998107114e-05,-1.1804999999999999,0.0004999999999999449);
myNode74.isVisible = false;

/* définition du node n°75*/
const myNode75 = object.addCylinder();
myNode75.point1.set(-2.801,0.733,-0.533);
myNode75.point2.set(-2.801,0.733,18.099999999999998);
myNode75.radius.set(0.4);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(0.0,0.0,0.0);
myNode75.innerRotation.angle.set(0.0);
myNode75.isVisible = false;

/* définition du node n°76*/
const myNode76 = object.addCutOperation();
myNode76.leftArg.set(myNode74);
myNode76.rightArg.set(myNode75);
myNode76.isVisible = false;

/* définition du node n°77*/
const myNode77 = object.addCylinder();
myNode77.point1.set(-3.468,4.173,-18.0999);
myNode77.point2.set(-3.468,4.173,18.099999999999998);
myNode77.radius.set(0.426);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(0.0,0.0,0.0);
myNode77.innerRotation.angle.set(0.0);
myNode77.isVisible = false;

/* définition du node n°78*/
const myNode78_1 = myNode68.clone();
myNode78_1.isVisible = false;
const myNode78_2 = object.addFuseOperation();
myNode78_2.leftArg.set(myNode78_1);
myNode78_2.rightArg.set(myNode71);
myNode78_2.isVisible = false;
const myNode78_3 = object.addFuseOperation();
myNode78_3.leftArg.set(myNode78_2);
myNode78_3.rightArg.set(myNode72);
myNode78_3.isVisible = false;
const myNode78_4 = object.addFuseOperation();
myNode78_4.leftArg.set(myNode78_3);
myNode78_4.rightArg.set(myNode73);
myNode78_4.isVisible = false;
const myNode78_5 = object.addFuseOperation();
myNode78_5.leftArg.set(myNode78_4);
myNode78_5.rightArg.set(myNode76);
myNode78_5.isVisible = false;
myNode78 = object.addFuseOperation();
myNode78.leftArg.set(myNode78_5);
myNode78.rightArg.set(myNode77);
myNode78.isVisible = false;
myNode78.isVisible = false;

/* définition du node n°79*/
const myNode79 = object.addCutOperation();
myNode79.leftArg.set(myNode67);
myNode79.rightArg.set(myNode78);
myNode79.isVisible = false;

/* définition du node n°80*/
const myNode80_1 = myNode0.clone();
myNode80_1.isVisible = false;
const myNode80_2 = object.addFuseOperation();
myNode80_2.leftArg.set(myNode80_1);
myNode80_2.rightArg.set(myNode3);
myNode80_2.isVisible = false;
const myNode80_3 = object.addFuseOperation();
myNode80_3.leftArg.set(myNode80_2);
myNode80_3.rightArg.set(myNode25);
myNode80_3.isVisible = false;
const myNode80_4 = object.addFuseOperation();
myNode80_4.leftArg.set(myNode80_3);
myNode80_4.rightArg.set(myNode26);
myNode80_4.isVisible = false;
const myNode80_5 = object.addFuseOperation();
myNode80_5.leftArg.set(myNode80_4);
myNode80_5.rightArg.set(myNode33);
myNode80_5.isVisible = false;
const myNode80_6 = object.addFuseOperation();
myNode80_6.leftArg.set(myNode80_5);
myNode80_6.rightArg.set(myNode46);
myNode80_6.isVisible = false;
const myNode80_7 = object.addFuseOperation();
myNode80_7.leftArg.set(myNode80_6);
myNode80_7.rightArg.set(myNode66);
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