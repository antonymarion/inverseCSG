/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-4.2669,-3.3999,-0.5329);
myNode0.point2.set(-3.6010999999999997,-3.1331,0.2668999999999999);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(0,0,0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(3.59,-4.325,-0.5329);
myNode1.point2.set(3.59,-4.325,0.5338999999999999);
myNode1.radius.set(0.68);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addFuseOperation();
myNode2.leftArg.set(myNode0);
myNode2.rightArg.set(myNode1);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(-3.471,-3.133,-0.53295);
myNode3.point2.set(-3.471,-3.133,18.09995);
myNode3.radius.set(0.263);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(3.467,-4.174,-18.0999);
myNode4.point2.set(3.467,-4.174,18.099999999999998);
myNode4.radius.set(0.426);
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
myNode7.point1.set(-4.2669,-4.3249,-0.5329);
myNode7.point2.set(-3.7340999999999998,-0.8931000000000004,0.5338999999999999);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);
myNode7.innerTranslation.vector.set(0,0,0);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addBox();
myNode8.point1.set(-3.7329,-4.9999,-0.5329);
myNode8.point2.set(3.5879000000000003,0.43989999999999974,0.5338999999999999);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.innerTranslation.vector.set(0,0,0);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(1.5951,-4.3249,-0.5329);
myNode9.point2.set(4.2669,3.2558999999999996,0.5338999999999999);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.innerTranslation.vector.set(0,0,0);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addCylinder();
myNode10.point1.set(-3.601,-4.338,-0.5329);
myNode10.point2.set(-3.601,-4.338,18.099899999999998);
myNode10.radius.set(0.662);
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
myNode12.point1.set(-1.06595,-0.89295,-18.0999);
myNode12.point2.set(1.06095,-0.36005,0.5329999999999977);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);
myNode12.innerTranslation.vector.set(0,0,0);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addBox();
myNode13.point1.set(-3.73295,-3.39995,-0.53295);
myNode13.point2.set(3.7339499999999997,3.2549499999999996,0.26695);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);
myNode13.innerTranslation.vector.set(0,0,0);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(1.061,-0.628,-18.0999);
myNode14.point2.set(1.061,-0.628,18.099999999999998);
myNode14.radius.set(0.271);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15_1 = myNode12.clone();
myNode15_1.isVisible = false;
const myNode15_2 = object.addFuseOperation();
myNode15_2.leftArg.set(myNode15_1);
myNode15_2.rightArg.set(myNode13);
myNode15_2.isVisible = false;
myNode15 = object.addFuseOperation();
myNode15.leftArg.set(myNode15_2);
myNode15.rightArg.set(myNode14);
myNode15.isVisible = false;
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addCutOperation();
myNode16.leftArg.set(myNode11);
myNode16.rightArg.set(myNode15);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(-18.0999,-4.9999,-18.0999);
myNode17.point2.set(3.5878999999999976,1.7729,0.5328999999999979);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.innerTranslation.vector.set(0,0,0);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addBox();
myNode18.point1.set(2.1331,-4.9999,-18.0999);
myNode18.point2.set(4.2659,3.2548999999999992,0.5328999999999979);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);
myNode18.innerTranslation.vector.set(0,0,0);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addFuseOperation();
myNode19.leftArg.set(myNode17);
myNode19.rightArg.set(myNode18);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addCylinder();
myNode20.point1.set(1.595,0.706,-18.0999);
myNode20.point2.set(1.595,0.706,18.099999999999998);
myNode20.radius.set(0.27);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addCutOperation();
myNode21.leftArg.set(myNode19);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addCylinder();
myNode22.point1.set(3.59,-4.325,-18.0999);
myNode22.point2.set(3.59,-4.325,0.5329999999999977);
myNode22.radius.set(0.68);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(0.0,0.0,0.0);
myNode22.innerRotation.angle.set(0.0);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addCylinder();
myNode23.point1.set(2.133,2.039,0.26705);
myNode23.point2.set(2.133,2.039,18.09995);
myNode23.radius.set(0.266);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addCylinder();
myNode24.point1.set(-1.066,-0.628,-0.53295);
myNode24.point2.set(-1.066,-0.628,18.09995);
myNode24.radius.set(0.267);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addCylinder();
myNode25.point1.set(-3.467,-4.174,-18.0999);
myNode25.point2.set(-3.467,-4.174,18.099999999999998);
myNode25.radius.set(0.427);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(0.0,0.0,0.0);
myNode25.innerRotation.angle.set(0.0);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26_1 = myNode22.clone();
myNode26_1.isVisible = false;
const myNode26_2 = object.addFuseOperation();
myNode26_2.leftArg.set(myNode26_1);
myNode26_2.rightArg.set(myNode23);
myNode26_2.isVisible = false;
const myNode26_3 = object.addFuseOperation();
myNode26_3.leftArg.set(myNode26_2);
myNode26_3.rightArg.set(myNode24);
myNode26_3.isVisible = false;
myNode26 = object.addFuseOperation();
myNode26.leftArg.set(myNode26_3);
myNode26.rightArg.set(myNode25);
myNode26.isVisible = false;
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addCutOperation();
myNode27.leftArg.set(myNode21);
myNode27.rightArg.set(myNode26);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addCommonOperation();
myNode28.leftArg.set(myNode16);
myNode28.rightArg.set(myNode27);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addBox();
myNode29.point1.set(-3.7329,-3.3999,-0.5329);
myNode29.point2.set(3.5879000000000003,1.7728999999999995,0.5338999999999999);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);
myNode29.innerTranslation.vector.set(0,0,0);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addCylinder();
myNode30.point1.set(-1.6,0.706,-0.53295);
myNode30.point2.set(-1.6,0.706,0.5339499999999999);
myNode30.radius.set(0.266);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addCutOperation();
myNode31.leftArg.set(myNode29);
myNode31.rightArg.set(myNode30);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addCylinder();
myNode32.point1.set(2.133,2.039,-18.0999);
myNode32.point2.set(2.133,2.039,18.099999999999998);
myNode32.radius.set(0.266);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addBox();
myNode33.point1.set(-1.59995,-0.89295,-0.53295);
myNode33.point2.set(2.13295,0.97395,0.5339499999999999);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);
myNode33.innerTranslation.vector.set(0,0,0);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addFuseOperation();
myNode34.leftArg.set(myNode32);
myNode34.rightArg.set(myNode33);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addCutOperation();
myNode35.leftArg.set(myNode31);
myNode35.rightArg.set(myNode34);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addBox();
myNode36.point1.set(-3.7329,0.4401,0.2671);
myNode36.point2.set(1.0609000000000002,1.7729,18.099899999999998);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(0.0,0.0,0.0);
myNode36.innerRotation.angle.set(0.0);
myNode36.innerTranslation.vector.set(0,0,0);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addBox();
myNode37.point1.set(1.0611,0.4401,0.2671);
myNode37.point2.set(3.5879000000000003,1.7729,0.5339);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0,0.0,0.0);
myNode37.innerRotation.angle.set(0.0);
myNode37.innerTranslation.vector.set(0,0,0);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addCylinder();
myNode38.point1.set(2.801,0.733,-18.0999);
myNode38.point2.set(2.801,0.733,18.0999);
myNode38.radius.set(0.4);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(0.0,0.0,0.0);
myNode38.innerRotation.angle.set(0.0);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addBox();
myNode39.point1.set(2.1331,3.2551,-0.5329);
myNode39.point2.set(3.5879000000000003,18.099899999999998,0.5338999999999999);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(0.0,0.0,0.0);
myNode39.innerRotation.angle.set(0.0);
myNode39.innerTranslation.vector.set(0,0,0);
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40_1 = myNode36.clone();
myNode40_1.isVisible = false;
const myNode40_2 = object.addFuseOperation();
myNode40_2.leftArg.set(myNode40_1);
myNode40_2.rightArg.set(myNode37);
myNode40_2.isVisible = false;
const myNode40_3 = object.addFuseOperation();
myNode40_3.leftArg.set(myNode40_2);
myNode40_3.rightArg.set(myNode38);
myNode40_3.isVisible = false;
myNode40 = object.addFuseOperation();
myNode40.leftArg.set(myNode40_3);
myNode40.rightArg.set(myNode39);
myNode40.isVisible = false;
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41 = object.addCommonOperation();
myNode41.leftArg.set(myNode35);
myNode41.rightArg.set(myNode40);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addBox();
myNode42.point1.set(-4.2669,-4.3439,-0.5329);
myNode42.point2.set(4.2659,0.8929,0.5338999999999999);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode42.innerRotation.angle.set(179.9998479605043);
myNode42.innerTranslation.vector.set(0,0,0);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addCylinder();
myNode43.point1.set(-2.13,2.042,-18.0999);
myNode43.point2.set(-2.13,2.042,18.099999999999998);
myNode43.radius.set(0.269);
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
const myNode45 = object.addBox();
myNode45.point1.set(-3.6009,-4.9999,-0.2669);
myNode45.point2.set(2.5069,0.8929,0.5328999999999999);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode45.innerRotation.angle.set(179.9998479605043);
myNode45.innerTranslation.vector.set(0,0,0);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addBox();
myNode46.point1.set(-3.6009,-4.9999,-0.5329);
myNode46.point2.set(-2.1291,-4.3441,-0.26610000000000006);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode46.innerRotation.angle.set(179.9998479605043);
myNode46.innerTranslation.vector.set(0,0,0);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addBox();
myNode47.point1.set(2.5071,-4.9999,-0.5329);
myNode47.point2.set(3.5879,0.8929,0.5338999999999999);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode47.innerRotation.angle.set(179.9998479605043);
myNode47.innerTranslation.vector.set(0,0,0);
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
const myNode49 = object.addCylinder();
myNode49.point1.set(-2.801,0.733,0.2671);
myNode49.point2.set(-2.801,0.733,0.5339);
myNode49.radius.set(0.4);
myNode49.innerRotation.center.set(0,0,0);
myNode49.innerRotation.axis.set(0.0,0.0,0.0);
myNode49.innerRotation.angle.set(0.0);
myNode49.isVisible = false;

/* définition du node n°50*/
const myNode50_1 = myNode44.clone();
myNode50_1.isVisible = false;
const myNode50_2 = object.addFuseOperation();
myNode50_2.leftArg.set(myNode50_1);
myNode50_2.rightArg.set(myNode45);
myNode50_2.isVisible = false;
const myNode50_3 = object.addFuseOperation();
myNode50_3.leftArg.set(myNode50_2);
myNode50_3.rightArg.set(myNode46);
myNode50_3.isVisible = false;
const myNode50_4 = object.addFuseOperation();
myNode50_4.leftArg.set(myNode50_3);
myNode50_4.rightArg.set(myNode47);
myNode50_4.isVisible = false;
const myNode50_5 = object.addFuseOperation();
myNode50_5.leftArg.set(myNode50_4);
myNode50_5.rightArg.set(myNode48);
myNode50_5.isVisible = false;
myNode50 = object.addFuseOperation();
myNode50.leftArg.set(myNode50_5);
myNode50.rightArg.set(myNode49);
myNode50.isVisible = false;
myNode50.isVisible = false;

/* définition du node n°51*/
const myNode51 = object.addBox();
myNode51.point1.set(-2.12895,-2.30695,-18.0999);
myNode51.point2.set(18.09995,18.09995,18.099999999999998);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode51.innerRotation.angle.set(179.9998479605043);
myNode51.innerTranslation.vector.set(0,0,0);
myNode51.isVisible = false;

/* définition du node n°52*/
const myNode52 = object.addBox();
myNode52.point1.set(-2.50695,-3.25495,-0.26695);
myNode52.point2.set(4.26595,-2.30605,0.53295);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode52.innerRotation.angle.set(179.9998479605043);
myNode52.innerTranslation.vector.set(0,0,0);
myNode52.isVisible = false;

/* définition du node n°53*/
const myNode53 = object.addCylinder();
myNode53.point1.set(3.467,4.175,-18.0999);
myNode53.point2.set(3.467,4.175,18.099999999999998);
myNode53.radius.set(0.426);
myNode53.innerRotation.center.set(0,0,0);
myNode53.innerRotation.axis.set(0.0,0.0,0.0);
myNode53.innerRotation.angle.set(0.0);
myNode53.isVisible = false;

/* définition du node n°54*/
const myNode54 = object.addCylinder();
myNode54.point1.set(3.468,3.267,-18.0999);
myNode54.point2.set(3.468,3.267,0.26699999999999946);
myNode54.radius.set(0.264);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(0.0,0.0,0.0);
myNode54.innerRotation.angle.set(0.0);
myNode54.isVisible = false;

/* définition du node n°55*/
const myNode55 = object.addCylinder();
myNode55.point1.set(3.588,4.321,-0.267);
myNode55.point2.set(3.588,4.321,18.1);
myNode55.radius.set(0.682);
myNode55.innerRotation.center.set(0,0,0);
myNode55.innerRotation.axis.set(0.0,0.0,0.0);
myNode55.innerRotation.angle.set(0.0);
myNode55.isVisible = false;

/* définition du node n°56*/
const myNode56 = object.addCutOperation();
myNode56.leftArg.set(myNode54);
myNode56.rightArg.set(myNode55);
myNode56.isVisible = false;

/* définition du node n°57*/
const myNode57 = object.addCylinder();
myNode57.point1.set(-3.468,4.173,-0.53295);
myNode57.point2.set(-3.468,4.173,18.09995);
myNode57.radius.set(0.426);
myNode57.innerRotation.center.set(0,0,0);
myNode57.innerRotation.axis.set(0.0,0.0,0.0);
myNode57.innerRotation.angle.set(0.0);
myNode57.isVisible = false;

/* définition du node n°58*/
const myNode58 = object.addBox();
myNode58.point1.set(-2.50695,-4.99995,0.26705);
myNode58.point2.set(2.5059500000000003,-3.53405,18.09995);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode58.innerRotation.angle.set(179.9998479605043);
myNode58.innerTranslation.vector.set(0,0,0);
myNode58.isVisible = false;

/* définition du node n°59*/
const myNode59 = object.addBox();
myNode59.point1.set(-3.73295,-3.53295,-0.26695);
myNode59.point2.set(3.5879499999999998,0.8939499999999998,18.09995);
myNode59.innerRotation.center.set(0,0,0);
myNode59.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode59.innerRotation.angle.set(179.9998479605043);
myNode59.innerTranslation.vector.set(0,0,0);
myNode59.isVisible = false;

/* définition du node n°60*/
const myNode60_1 = myNode51.clone();
myNode60_1.isVisible = false;
const myNode60_2 = object.addFuseOperation();
myNode60_2.leftArg.set(myNode60_1);
myNode60_2.rightArg.set(myNode52);
myNode60_2.isVisible = false;
const myNode60_3 = object.addFuseOperation();
myNode60_3.leftArg.set(myNode60_2);
myNode60_3.rightArg.set(myNode53);
myNode60_3.isVisible = false;
const myNode60_4 = object.addFuseOperation();
myNode60_4.leftArg.set(myNode60_3);
myNode60_4.rightArg.set(myNode56);
myNode60_4.isVisible = false;
const myNode60_5 = object.addFuseOperation();
myNode60_5.leftArg.set(myNode60_4);
myNode60_5.rightArg.set(myNode57);
myNode60_5.isVisible = false;
const myNode60_6 = object.addFuseOperation();
myNode60_6.leftArg.set(myNode60_5);
myNode60_6.rightArg.set(myNode58);
myNode60_6.isVisible = false;
myNode60 = object.addFuseOperation();
myNode60.leftArg.set(myNode60_6);
myNode60.rightArg.set(myNode59);
myNode60.isVisible = false;
myNode60.isVisible = false;

/* définition du node n°61*/
const myNode61 = object.addCutOperation();
myNode61.leftArg.set(myNode50);
myNode61.rightArg.set(myNode60);
myNode61.isVisible = false;

/* définition du node n°62*/
const myNode62 = object.addCylinder();
myNode62.point1.set(-2.798,-2.601,-0.5329);
myNode62.point2.set(-2.798,-2.601,0.5338999999999999);
myNode62.radius.set(0.399);
myNode62.innerRotation.center.set(0,0,0);
myNode62.innerRotation.axis.set(0.0,0.0,0.0);
myNode62.innerRotation.angle.set(0.0);
myNode62.isVisible = false;

/* définition du node n°63*/
const myNode63 = object.addCylinder();
myNode63.point1.set(2.799,-2.598,-0.5329);
myNode63.point2.set(2.799,-2.598,0.2668999999999999);
myNode63.radius.set(0.4);
myNode63.innerRotation.center.set(0,0,0);
myNode63.innerRotation.axis.set(0.0,0.0,0.0);
myNode63.innerRotation.angle.set(0.0);
myNode63.isVisible = false;

/* définition du node n°64*/
const myNode64 = object.addBox();
myNode64.point1.set(-4.2669,-4.9999,-0.5329);
myNode64.point2.set(3.5879000000000003,0.8929,0.5338999999999999);
myNode64.innerRotation.center.set(0,0,0);
myNode64.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode64.innerRotation.angle.set(179.9998479605043);
myNode64.innerTranslation.vector.set(0,0,0);
myNode64.isVisible = false;

/* définition du node n°65*/
const myNode65 = object.addBox();
myNode65.point1.set(-18.0999,-3.25495,-0.53295);
myNode65.point2.set(18.099999999999998,0.8939500000000002,0.5339499999999999);
myNode65.innerRotation.center.set(0,0,0);
myNode65.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode65.innerRotation.angle.set(179.9998479605043);
myNode65.innerTranslation.vector.set(0,0,0);
myNode65.isVisible = false;

/* définition du node n°66*/
const myNode66 = object.addCylinder();
myNode66.point1.set(-2.801,0.733,-0.533);
myNode66.point2.set(-2.801,0.733,18.099999999999998);
myNode66.radius.set(0.4);
myNode66.innerRotation.center.set(0,0,0);
myNode66.innerRotation.axis.set(0.0,0.0,0.0);
myNode66.innerRotation.angle.set(0.0);
myNode66.isVisible = false;

/* définition du node n°67*/
const myNode67 = object.addCutOperation();
myNode67.leftArg.set(myNode65);
myNode67.rightArg.set(myNode66);
myNode67.isVisible = false;

/* définition du node n°68*/
const myNode68 = object.addBox();
myNode68.point1.set(-18.0999,-4.99995,-18.0999);
myNode68.point2.set(-2.130000000000001,-3.53405,0.5329999999999977);
myNode68.innerRotation.center.set(0,0,0);
myNode68.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode68.innerRotation.angle.set(179.9998479605043);
myNode68.innerTranslation.vector.set(0,0,0);
myNode68.isVisible = false;

/* définition du node n°69*/
const myNode69 = object.addCylinder();
myNode69.point1.set(-3.608,4.344,-18.1);
myNode69.point2.set(-3.608,4.344,18.1);
myNode69.radius.set(0.654);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(0.0,0.0,0.0);
myNode69.innerRotation.angle.set(0.0);
myNode69.isVisible = false;

/* définition du node n°70*/
const myNode70 = object.addCutOperation();
myNode70.leftArg.set(myNode68);
myNode70.rightArg.set(myNode69);
myNode70.isVisible = false;

/* définition du node n°71*/
const myNode71 = object.addBox();
myNode71.point1.set(2.50705,-18.0999,-0.53295);
myNode71.point2.set(18.09995,-3.5330000000000013,18.09995);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode71.innerRotation.angle.set(179.9998479605043);
myNode71.innerTranslation.vector.set(0,0,0);
myNode71.isVisible = false;

/* définition du node n°72*/
const myNode72 = object.addCylinder();
myNode72.point1.set(-3.454,3.255,-0.53295);
myNode72.point2.set(-3.454,3.255,0.26695);
myNode72.radius.set(0.283);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(0.0,0.0,0.0);
myNode72.innerRotation.angle.set(0.0);
myNode72.isVisible = false;

/* définition du node n°73*/
const myNode73 = object.addCylinder();
myNode73.point1.set(-3.468,4.173,-18.0999);
myNode73.point2.set(-3.468,4.173,18.099999999999998);
myNode73.radius.set(0.426);
myNode73.innerRotation.center.set(0,0,0);
myNode73.innerRotation.axis.set(0.0,0.0,0.0);
myNode73.innerRotation.angle.set(0.0);
myNode73.isVisible = false;

/* définition du node n°74*/
const myNode74 = object.addBox();
myNode74.point1.set(-3.60095,-18.0999,-0.26695);
myNode74.point2.set(3.58795,-3.255000000000001,18.09995);
myNode74.innerRotation.center.set(0,0,0);
myNode74.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode74.innerRotation.angle.set(179.9998479605043);
myNode74.innerTranslation.vector.set(0,0,0);
myNode74.isVisible = false;

/* définition du node n°75*/
const myNode75_1 = myNode67.clone();
myNode75_1.isVisible = false;
const myNode75_2 = object.addFuseOperation();
myNode75_2.leftArg.set(myNode75_1);
myNode75_2.rightArg.set(myNode70);
myNode75_2.isVisible = false;
const myNode75_3 = object.addFuseOperation();
myNode75_3.leftArg.set(myNode75_2);
myNode75_3.rightArg.set(myNode71);
myNode75_3.isVisible = false;
const myNode75_4 = object.addFuseOperation();
myNode75_4.leftArg.set(myNode75_3);
myNode75_4.rightArg.set(myNode72);
myNode75_4.isVisible = false;
const myNode75_5 = object.addFuseOperation();
myNode75_5.leftArg.set(myNode75_4);
myNode75_5.rightArg.set(myNode73);
myNode75_5.isVisible = false;
myNode75 = object.addFuseOperation();
myNode75.leftArg.set(myNode75_5);
myNode75.rightArg.set(myNode74);
myNode75.isVisible = false;
myNode75.isVisible = false;

/* définition du node n°76*/
const myNode76 = object.addCutOperation();
myNode76.leftArg.set(myNode64);
myNode76.rightArg.set(myNode75);
myNode76.isVisible = false;

/* définition du node n°77*/
const myNode77 = object.addBox();
myNode77.point1.set(3.5881,-3.3999,-0.5329);
myNode77.point2.set(3.7338999999999998,-3.1331,0.5338999999999999);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(0.0,0.0,0.0);
myNode77.innerRotation.angle.set(0.0);
myNode77.innerTranslation.vector.set(0,0,0);
myNode77.isVisible = false;

/* définition du node n°78*/
const myNode78 = object.addCylinder();
myNode78.point1.set(3.469,-3.132,-18.0999);
myNode78.point2.set(3.469,-3.132,18.099999999999998);
myNode78.radius.set(0.266);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(0.0,0.0,0.0);
myNode78.innerRotation.angle.set(0.0);
myNode78.isVisible = false;

/* définition du node n°79*/
const myNode79 = object.addCutOperation();
myNode79.leftArg.set(myNode77);
myNode79.rightArg.set(myNode78);
myNode79.isVisible = false;

/* définition du node n°80*/
const myNode80_1 = myNode6.clone();
myNode80_1.isVisible = false;
const myNode80_2 = object.addFuseOperation();
myNode80_2.leftArg.set(myNode80_1);
myNode80_2.rightArg.set(myNode28);
myNode80_2.isVisible = false;
const myNode80_3 = object.addFuseOperation();
myNode80_3.leftArg.set(myNode80_2);
myNode80_3.rightArg.set(myNode41);
myNode80_3.isVisible = false;
const myNode80_4 = object.addFuseOperation();
myNode80_4.leftArg.set(myNode80_3);
myNode80_4.rightArg.set(myNode61);
myNode80_4.isVisible = false;
const myNode80_5 = object.addFuseOperation();
myNode80_5.leftArg.set(myNode80_4);
myNode80_5.rightArg.set(myNode62);
myNode80_5.isVisible = false;
const myNode80_6 = object.addFuseOperation();
myNode80_6.leftArg.set(myNode80_5);
myNode80_6.rightArg.set(myNode63);
myNode80_6.isVisible = false;
const myNode80_7 = object.addFuseOperation();
myNode80_7.leftArg.set(myNode80_6);
myNode80_7.rightArg.set(myNode76);
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
myNode81.innerTranslation.vector.set(0,0,0);
myNode81.isVisible = false;

/* définition du node n°82*/
const myNode82 = object.addCommonOperation();
myNode82.leftArg.set(myNode80);
myNode82.rightArg.set(myNode81);
myNode82.isVisible = true;


/*END Geometry Object Definition*/