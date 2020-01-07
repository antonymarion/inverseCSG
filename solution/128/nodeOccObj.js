/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.1199,-5.9999,-0.6399);
myNode0.point2.set(5.1199,5.9999,0.6399);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.isVisible = False

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(-2.798,-2.601,-0.5329);
myNode1.point2.set(-2.798,-2.601,0.5338999999999999);
myNode1.radius.set(0.399);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.isVisible = False

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-3.7329,-3.3999,-0.5329);
myNode2.point2.set(3.5879000000000003,1.7728999999999995,0.5338999999999999);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.isVisible = False

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(-1.6,0.706,-0.53295);
myNode3.point2.set(-1.6,0.706,0.5339499999999999);
myNode3.radius.set(0.266);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);
myNode3.isVisible = False

/* définition du node n°4*/
const myNode4 = object.addCutOperation();
myNode4.leftArg.set(myNode2);
myNode4.rightArg.set(myNode3);
myNode4.isVisible = False

/* définition du node n°5*/
const myNode5 = object.addBox();
myNode5.point1.set(-1.59995,-0.89295,-0.53295);
myNode5.point2.set(2.13295,0.97395,0.5339499999999999);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.isVisible = False

/* définition du node n°6*/
const myNode6 = object.addCylinder();
myNode6.point1.set(2.133,2.039,-18.0999);
myNode6.point2.set(2.133,2.039,18.099999999999998);
myNode6.radius.set(0.266);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.isVisible = False

/* définition du node n°7*/
const myNode7 = object.addFuseOperation();
myNode7.leftArg.set(myNode5);
myNode7.rightArg.set(myNode6);
myNode7.isVisible = False

/* définition du node n°8*/
const myNode8 = object.addCutOperation();
myNode8.leftArg.set(myNode4);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = False

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(2.1331,3.2551,-0.5329);
myNode9.point2.set(3.5879000000000003,18.099899999999998,0.5338999999999999);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.isVisible = False

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(1.0611,0.4401,0.2671);
myNode10.point2.set(3.5879000000000003,1.7729,0.5339);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.isVisible = False

/* définition du node n°11*/
const myNode11 = object.addCylinder();
myNode11.point1.set(2.801,0.733,-18.0999);
myNode11.point2.set(2.801,0.733,18.0999);
myNode11.radius.set(0.4);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);
myNode11.isVisible = False

/* définition du node n°12*/
const myNode12 = object.addBox();
myNode12.point1.set(-3.7329,0.4401,0.2671);
myNode12.point2.set(1.0609000000000002,1.7729,18.099899999999998);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);
myNode12.isVisible = False

/* définition du node n°13*/
const myNode13_1 = object.addFuseOperation();
myNode13_1.leftArg.set(myNode9);
myNode13_1.rightArg.set(myNode9);
const myNode13_2 = object.addFuseOperation();
myNode13_2.leftArg.set(myNode13_1);
myNode13_2.rightArg.set(myNode10);
const myNode13_3 = object.addFuseOperation();
myNode13_3.leftArg.set(myNode13_2);
myNode13_3.rightArg.set(myNode11);
myNode13 = object.addFuseOperation();
myNode13.leftArg.set(myNode13_3);
myNode13.rightArg.set(myNode12);
myNode13.isVisible = False

/* définition du node n°14*/
const myNode14 = object.addCommonOperation();
myNode14.leftArg.set(myNode8);
myNode14.rightArg.set(myNode13);
myNode14.isVisible = False

/* définition du node n°15*/
const myNode15 = object.addBox();
myNode15.point1.set(-3.7329,-4.9999,-0.5329);
myNode15.point2.set(3.5879000000000003,0.43989999999999974,0.5338999999999999);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);
myNode15.isVisible = False

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(-3.601,-4.338,-0.5329);
myNode16.point2.set(-3.601,-4.338,18.099899999999998);
myNode16.radius.set(0.662);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);
myNode16.isVisible = False

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(1.5951,-4.3249,-0.5329);
myNode17.point2.set(4.2669,3.2558999999999996,0.5338999999999999);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.isVisible = False

/* définition du node n°18*/
const myNode18 = object.addBox();
myNode18.point1.set(-4.2669,-4.3249,-0.5329);
myNode18.point2.set(-3.7340999999999998,-0.8931000000000004,0.5338999999999999);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);
myNode18.isVisible = False

/* définition du node n°19*/
const myNode19_1 = object.addFuseOperation();
myNode19_1.leftArg.set(myNode15);
myNode19_1.rightArg.set(myNode15);
const myNode19_2 = object.addFuseOperation();
myNode19_2.leftArg.set(myNode19_1);
myNode19_2.rightArg.set(myNode16);
const myNode19_3 = object.addFuseOperation();
myNode19_3.leftArg.set(myNode19_2);
myNode19_3.rightArg.set(myNode17);
myNode19 = object.addFuseOperation();
myNode19.leftArg.set(myNode19_3);
myNode19.rightArg.set(myNode18);
myNode19.isVisible = False

/* définition du node n°20*/
const myNode20 = object.addBox();
myNode20.point1.set(-1.06595,-0.89295,-18.0999);
myNode20.point2.set(1.06095,-0.36005,0.5329999999999977);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);
myNode20.isVisible = False

/* définition du node n°21*/
const myNode21 = object.addCylinder();
myNode21.point1.set(1.061,-0.628,-18.0999);
myNode21.point2.set(1.061,-0.628,18.099999999999998);
myNode21.radius.set(0.271);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);
myNode21.isVisible = False

/* définition du node n°22*/
const myNode22 = object.addBox();
myNode22.point1.set(-3.73295,-3.39995,-0.53295);
myNode22.point2.set(3.7339499999999997,3.2549499999999996,0.26695);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(0.0,0.0,0.0);
myNode22.innerRotation.angle.set(0.0);
myNode22.isVisible = False

/* définition du node n°23*/
const myNode23_1 = object.addFuseOperation();
myNode23_1.leftArg.set(myNode20);
myNode23_1.rightArg.set(myNode20);
const myNode23_2 = object.addFuseOperation();
myNode23_2.leftArg.set(myNode23_1);
myNode23_2.rightArg.set(myNode21);
myNode23 = object.addFuseOperation();
myNode23.leftArg.set(myNode23_2);
myNode23.rightArg.set(myNode22);
myNode23.isVisible = False

/* définition du node n°24*/
const myNode24 = object.addCutOperation();
myNode24.leftArg.set(myNode19);
myNode24.rightArg.set(myNode23);
myNode24.isVisible = False

/* définition du node n°25*/
const myNode25 = object.addBox();
myNode25.point1.set(2.1331,-4.9999,-18.0999);
myNode25.point2.set(4.2659,3.2548999999999992,0.5328999999999979);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(0.0,0.0,0.0);
myNode25.innerRotation.angle.set(0.0);
myNode25.isVisible = False

/* définition du node n°26*/
const myNode26 = object.addBox();
myNode26.point1.set(-18.0999,-4.9999,-18.0999);
myNode26.point2.set(3.5878999999999976,1.7729,0.5328999999999979);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);
myNode26.isVisible = False

/* définition du node n°27*/
const myNode27 = object.addFuseOperation();
myNode27.leftArg.set(myNode25);
myNode27.rightArg.set(myNode26);
myNode27.isVisible = False

/* définition du node n°28*/
const myNode28 = object.addCylinder();
myNode28.point1.set(1.595,0.706,-18.0999);
myNode28.point2.set(1.595,0.706,18.099999999999998);
myNode28.radius.set(0.27);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(0.0,0.0,0.0);
myNode28.innerRotation.angle.set(0.0);
myNode28.isVisible = False

/* définition du node n°29*/
const myNode29 = object.addCutOperation();
myNode29.leftArg.set(myNode27);
myNode29.rightArg.set(myNode28);
myNode29.isVisible = False

/* définition du node n°30*/
const myNode30 = object.addCylinder();
myNode30.point1.set(-1.066,-0.628,-0.53295);
myNode30.point2.set(-1.066,-0.628,18.09995);
myNode30.radius.set(0.267);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);
myNode30.isVisible = False

/* définition du node n°31*/
const myNode31 = object.addCylinder();
myNode31.point1.set(-3.467,-4.174,-18.0999);
myNode31.point2.set(-3.467,-4.174,18.099999999999998);
myNode31.radius.set(0.427);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(0.0,0.0,0.0);
myNode31.innerRotation.angle.set(0.0);
myNode31.isVisible = False

/* définition du node n°32*/
const myNode32 = object.addCylinder();
myNode32.point1.set(3.59,-4.325,-18.0999);
myNode32.point2.set(3.59,-4.325,0.5329999999999977);
myNode32.radius.set(0.68);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);
myNode32.isVisible = False

/* définition du node n°33*/
const myNode33 = object.addCylinder();
myNode33.point1.set(2.133,2.039,0.26705);
myNode33.point2.set(2.133,2.039,18.09995);
myNode33.radius.set(0.266);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);
myNode33.isVisible = False

/* définition du node n°34*/
const myNode34_1 = object.addFuseOperation();
myNode34_1.leftArg.set(myNode30);
myNode34_1.rightArg.set(myNode30);
const myNode34_2 = object.addFuseOperation();
myNode34_2.leftArg.set(myNode34_1);
myNode34_2.rightArg.set(myNode31);
const myNode34_3 = object.addFuseOperation();
myNode34_3.leftArg.set(myNode34_2);
myNode34_3.rightArg.set(myNode32);
myNode34 = object.addFuseOperation();
myNode34.leftArg.set(myNode34_3);
myNode34.rightArg.set(myNode33);
myNode34.isVisible = False

/* définition du node n°35*/
const myNode35 = object.addCutOperation();
myNode35.leftArg.set(myNode29);
myNode35.rightArg.set(myNode34);
myNode35.isVisible = False

/* définition du node n°36*/
const myNode36 = object.addCommonOperation();
myNode36.leftArg.set(myNode24);
myNode36.rightArg.set(myNode35);
myNode36.isVisible = False

/* définition du node n°37*/
const myNode37 = object.addBox();
myNode37.point1.set(-3.6009,-4.9999,-0.2669);
myNode37.point2.set(2.5069,0.8929,0.5328999999999999);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode37.innerRotation.angle.set(3.14159);
myNode37.isVisible = False

/* définition du node n°38*/
const myNode38 = object.addBox();
myNode38.point1.set(-4.2669,-4.3439,-0.5329);
myNode38.point2.set(4.2659,0.8929,0.5338999999999999);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode38.innerRotation.angle.set(3.14159);
myNode38.isVisible = False

/* définition du node n°39*/
const myNode39 = object.addCylinder();
myNode39.point1.set(-2.13,2.042,-18.0999);
myNode39.point2.set(-2.13,2.042,18.099999999999998);
myNode39.radius.set(0.269);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(0.0,0.0,0.0);
myNode39.innerRotation.angle.set(0.0);
myNode39.isVisible = False

/* définition du node n°40*/
const myNode40 = object.addCutOperation();
myNode40.leftArg.set(myNode38);
myNode40.rightArg.set(myNode39);
myNode40.isVisible = False

/* définition du node n°41*/
const myNode41 = object.addBox();
myNode41.point1.set(-3.6009,-4.9999,-0.5329);
myNode41.point2.set(-2.1291,-4.3441,-0.26610000000000006);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode41.innerRotation.angle.set(3.14159);
myNode41.isVisible = False

/* définition du node n°42*/
const myNode42 = object.addBox();
myNode42.point1.set(2.5071,-4.9999,-0.5329);
myNode42.point2.set(3.5879,0.8929,0.5338999999999999);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode42.innerRotation.angle.set(3.14159);
myNode42.isVisible = False

/* définition du node n°43*/
const myNode43 = object.addCylinder();
myNode43.point1.set(-2.801,0.733,0.2671);
myNode43.point2.set(-2.801,0.733,0.5339);
myNode43.radius.set(0.4);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(0.0,0.0,0.0);
myNode43.innerRotation.angle.set(0.0);
myNode43.isVisible = False

/* définition du node n°44*/
const myNode44 = object.addCylinder();
myNode44.point1.set(3.588,4.321,-0.5329);
myNode44.point2.set(3.588,4.321,0.5338999999999999);
myNode44.radius.set(0.682);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(0.0,0.0,0.0);
myNode44.innerRotation.angle.set(0.0);
myNode44.isVisible = False

/* définition du node n°45*/
const myNode45_1 = object.addFuseOperation();
myNode45_1.leftArg.set(myNode37);
myNode45_1.rightArg.set(myNode37);
const myNode45_2 = object.addFuseOperation();
myNode45_2.leftArg.set(myNode45_1);
myNode45_2.rightArg.set(myNode40);
const myNode45_3 = object.addFuseOperation();
myNode45_3.leftArg.set(myNode45_2);
myNode45_3.rightArg.set(myNode41);
const myNode45_4 = object.addFuseOperation();
myNode45_4.leftArg.set(myNode45_3);
myNode45_4.rightArg.set(myNode42);
const myNode45_5 = object.addFuseOperation();
myNode45_5.leftArg.set(myNode45_4);
myNode45_5.rightArg.set(myNode43);
myNode45 = object.addFuseOperation();
myNode45.leftArg.set(myNode45_5);
myNode45.rightArg.set(myNode44);
myNode45.isVisible = False

/* définition du node n°46*/
const myNode46 = object.addBox();
myNode46.point1.set(-2.12895,-2.30695,-18.0999);
myNode46.point2.set(18.09995,18.09995,18.099999999999998);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode46.innerRotation.angle.set(3.14159);
myNode46.isVisible = False

/* définition du node n°47*/
const myNode47 = object.addBox();
myNode47.point1.set(-2.50695,-3.25495,-0.26695);
myNode47.point2.set(4.26595,-2.30605,0.53295);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode47.innerRotation.angle.set(3.14159);
myNode47.isVisible = False

/* définition du node n°48*/
const myNode48 = object.addCylinder();
myNode48.point1.set(3.467,4.175,-18.0999);
myNode48.point2.set(3.467,4.175,18.099999999999998);
myNode48.radius.set(0.426);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);
myNode48.isVisible = False

/* définition du node n°49*/
const myNode49 = object.addBox();
myNode49.point1.set(-3.73295,-3.53295,-0.26695);
myNode49.point2.set(3.5879499999999998,0.8939499999999998,18.09995);
myNode49.innerRotation.center.set(0,0,0);
myNode49.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode49.innerRotation.angle.set(3.14159);
myNode49.isVisible = False

/* définition du node n°50*/
const myNode50 = object.addCylinder();
myNode50.point1.set(-3.468,4.173,-0.53295);
myNode50.point2.set(-3.468,4.173,18.09995);
myNode50.radius.set(0.426);
myNode50.innerRotation.center.set(0,0,0);
myNode50.innerRotation.axis.set(0.0,0.0,0.0);
myNode50.innerRotation.angle.set(0.0);
myNode50.isVisible = False

/* définition du node n°51*/
const myNode51 = object.addCylinder();
myNode51.point1.set(3.468,3.267,-18.0999);
myNode51.point2.set(3.468,3.267,0.26699999999999946);
myNode51.radius.set(0.264);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(0.0,0.0,0.0);
myNode51.innerRotation.angle.set(0.0);
myNode51.isVisible = False

/* définition du node n°52*/
const myNode52 = object.addCylinder();
myNode52.point1.set(3.588,4.321,-0.267);
myNode52.point2.set(3.588,4.321,18.1);
myNode52.radius.set(0.682);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,0.0,0.0);
myNode52.innerRotation.angle.set(0.0);
myNode52.isVisible = False

/* définition du node n°53*/
const myNode53 = object.addCutOperation();
myNode53.leftArg.set(myNode51);
myNode53.rightArg.set(myNode52);
myNode53.isVisible = False

/* définition du node n°54*/
const myNode54 = object.addBox();
myNode54.point1.set(-2.50695,-4.99995,0.26705);
myNode54.point2.set(2.5059500000000003,-3.53405,18.09995);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode54.innerRotation.angle.set(3.14159);
myNode54.isVisible = False

/* définition du node n°55*/
const myNode55_1 = object.addFuseOperation();
myNode55_1.leftArg.set(myNode46);
myNode55_1.rightArg.set(myNode46);
const myNode55_2 = object.addFuseOperation();
myNode55_2.leftArg.set(myNode55_1);
myNode55_2.rightArg.set(myNode47);
const myNode55_3 = object.addFuseOperation();
myNode55_3.leftArg.set(myNode55_2);
myNode55_3.rightArg.set(myNode48);
const myNode55_4 = object.addFuseOperation();
myNode55_4.leftArg.set(myNode55_3);
myNode55_4.rightArg.set(myNode49);
const myNode55_5 = object.addFuseOperation();
myNode55_5.leftArg.set(myNode55_4);
myNode55_5.rightArg.set(myNode50);
const myNode55_6 = object.addFuseOperation();
myNode55_6.leftArg.set(myNode55_5);
myNode55_6.rightArg.set(myNode53);
myNode55 = object.addFuseOperation();
myNode55.leftArg.set(myNode55_6);
myNode55.rightArg.set(myNode54);
myNode55.isVisible = False

/* définition du node n°56*/
const myNode56 = object.addCutOperation();
myNode56.leftArg.set(myNode45);
myNode56.rightArg.set(myNode55);
myNode56.isVisible = False

/* définition du node n°57*/
const myNode57 = object.addCylinder();
myNode57.point1.set(2.799,-2.598,-0.5329);
myNode57.point2.set(2.799,-2.598,0.2668999999999999);
myNode57.radius.set(0.4);
myNode57.innerRotation.center.set(0,0,0);
myNode57.innerRotation.axis.set(0.0,0.0,0.0);
myNode57.innerRotation.angle.set(0.0);
myNode57.isVisible = False

/* définition du node n°58*/
const myNode58 = object.addBox();
myNode58.point1.set(-4.2669,-3.3999,-0.5329);
myNode58.point2.set(-3.6010999999999997,-3.1331,0.2668999999999999);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(0.0,0.0,0.0);
myNode58.innerRotation.angle.set(0.0);
myNode58.isVisible = False

/* définition du node n°59*/
const myNode59 = object.addCylinder();
myNode59.point1.set(3.59,-4.325,-0.5329);
myNode59.point2.set(3.59,-4.325,0.5338999999999999);
myNode59.radius.set(0.68);
myNode59.innerRotation.center.set(0,0,0);
myNode59.innerRotation.axis.set(0.0,0.0,0.0);
myNode59.innerRotation.angle.set(0.0);
myNode59.isVisible = False

/* définition du node n°60*/
const myNode60 = object.addFuseOperation();
myNode60.leftArg.set(myNode58);
myNode60.rightArg.set(myNode59);
myNode60.isVisible = False

/* définition du node n°61*/
const myNode61 = object.addCylinder();
myNode61.point1.set(3.467,-4.174,-18.0999);
myNode61.point2.set(3.467,-4.174,18.099999999999998);
myNode61.radius.set(0.426);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(0.0,0.0,0.0);
myNode61.innerRotation.angle.set(0.0);
myNode61.isVisible = False

/* définition du node n°62*/
const myNode62 = object.addCylinder();
myNode62.point1.set(-3.471,-3.133,-0.53295);
myNode62.point2.set(-3.471,-3.133,18.09995);
myNode62.radius.set(0.263);
myNode62.innerRotation.center.set(0,0,0);
myNode62.innerRotation.axis.set(0.0,0.0,0.0);
myNode62.innerRotation.angle.set(0.0);
myNode62.isVisible = False

/* définition du node n°63*/
const myNode63 = object.addFuseOperation();
myNode63.leftArg.set(myNode61);
myNode63.rightArg.set(myNode62);
myNode63.isVisible = False

/* définition du node n°64*/
const myNode64 = object.addCutOperation();
myNode64.leftArg.set(myNode60);
myNode64.rightArg.set(myNode63);
myNode64.isVisible = False

/* définition du node n°65*/
const myNode65 = object.addBox();
myNode65.point1.set(-4.2669,-4.9999,-0.5329);
myNode65.point2.set(3.5879000000000003,0.8929,0.5338999999999999);
myNode65.innerRotation.center.set(0,0,0);
myNode65.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode65.innerRotation.angle.set(3.14159);
myNode65.isVisible = False

/* définition du node n°66*/
const myNode66 = object.addBox();
myNode66.point1.set(2.50705,-18.0999,-0.53295);
myNode66.point2.set(18.09995,-3.5330000000000013,18.09995);
myNode66.innerRotation.center.set(0,0,0);
myNode66.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode66.innerRotation.angle.set(3.14159);
myNode66.isVisible = False

/* définition du node n°67*/
const myNode67 = object.addBox();
myNode67.point1.set(-18.0999,-3.25495,-0.53295);
myNode67.point2.set(18.099999999999998,0.8939500000000002,0.5339499999999999);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode67.innerRotation.angle.set(3.14159);
myNode67.isVisible = False

/* définition du node n°68*/
const myNode68 = object.addCylinder();
myNode68.point1.set(-2.801,0.733,-0.533);
myNode68.point2.set(-2.801,0.733,18.099999999999998);
myNode68.radius.set(0.4);
myNode68.innerRotation.center.set(0,0,0);
myNode68.innerRotation.axis.set(0.0,0.0,0.0);
myNode68.innerRotation.angle.set(0.0);
myNode68.isVisible = False

/* définition du node n°69*/
const myNode69 = object.addCutOperation();
myNode69.leftArg.set(myNode67);
myNode69.rightArg.set(myNode68);
myNode69.isVisible = False

/* définition du node n°70*/
const myNode70 = object.addBox();
myNode70.point1.set(-18.0999,-4.99995,-18.0999);
myNode70.point2.set(-2.130000000000001,-3.53405,0.5329999999999977);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode70.innerRotation.angle.set(3.14159);
myNode70.isVisible = False

/* définition du node n°71*/
const myNode71 = object.addCylinder();
myNode71.point1.set(-3.608,4.344,-18.1);
myNode71.point2.set(-3.608,4.344,18.1);
myNode71.radius.set(0.654);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(0.0,0.0,0.0);
myNode71.innerRotation.angle.set(0.0);
myNode71.isVisible = False

/* définition du node n°72*/
const myNode72 = object.addCutOperation();
myNode72.leftArg.set(myNode70);
myNode72.rightArg.set(myNode71);
myNode72.isVisible = False

/* définition du node n°73*/
const myNode73 = object.addCylinder();
myNode73.point1.set(-3.454,3.255,-0.53295);
myNode73.point2.set(-3.454,3.255,0.26695);
myNode73.radius.set(0.283);
myNode73.innerRotation.center.set(0,0,0);
myNode73.innerRotation.axis.set(0.0,0.0,0.0);
myNode73.innerRotation.angle.set(0.0);
myNode73.isVisible = False

/* définition du node n°74*/
const myNode74 = object.addBox();
myNode74.point1.set(-3.60095,-18.0999,-0.26695);
myNode74.point2.set(3.58795,-3.255000000000001,18.09995);
myNode74.innerRotation.center.set(0,0,0);
myNode74.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode74.innerRotation.angle.set(3.14159);
myNode74.isVisible = False

/* définition du node n°75*/
const myNode75 = object.addCylinder();
myNode75.point1.set(-3.468,4.173,-18.0999);
myNode75.point2.set(-3.468,4.173,18.099999999999998);
myNode75.radius.set(0.426);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(0.0,0.0,0.0);
myNode75.innerRotation.angle.set(0.0);
myNode75.isVisible = False

/* définition du node n°76*/
const myNode76_1 = object.addFuseOperation();
myNode76_1.leftArg.set(myNode66);
myNode76_1.rightArg.set(myNode66);
const myNode76_2 = object.addFuseOperation();
myNode76_2.leftArg.set(myNode76_1);
myNode76_2.rightArg.set(myNode69);
const myNode76_3 = object.addFuseOperation();
myNode76_3.leftArg.set(myNode76_2);
myNode76_3.rightArg.set(myNode72);
const myNode76_4 = object.addFuseOperation();
myNode76_4.leftArg.set(myNode76_3);
myNode76_4.rightArg.set(myNode73);
const myNode76_5 = object.addFuseOperation();
myNode76_5.leftArg.set(myNode76_4);
myNode76_5.rightArg.set(myNode74);
myNode76 = object.addFuseOperation();
myNode76.leftArg.set(myNode76_5);
myNode76.rightArg.set(myNode75);
myNode76.isVisible = False

/* définition du node n°77*/
const myNode77 = object.addCutOperation();
myNode77.leftArg.set(myNode65);
myNode77.rightArg.set(myNode76);
myNode77.isVisible = False

/* définition du node n°78*/
const myNode78 = object.addBox();
myNode78.point1.set(3.5881,-3.3999,-0.5329);
myNode78.point2.set(3.7338999999999998,-3.1331,0.5338999999999999);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(0.0,0.0,0.0);
myNode78.innerRotation.angle.set(0.0);
myNode78.isVisible = False

/* définition du node n°79*/
const myNode79 = object.addCylinder();
myNode79.point1.set(3.469,-3.132,-18.0999);
myNode79.point2.set(3.469,-3.132,18.099999999999998);
myNode79.radius.set(0.266);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(0.0,0.0,0.0);
myNode79.innerRotation.angle.set(0.0);
myNode79.isVisible = False

/* définition du node n°80*/
const myNode80 = object.addCutOperation();
myNode80.leftArg.set(myNode78);
myNode80.rightArg.set(myNode79);
myNode80.isVisible = False

/* définition du node n°81*/
const myNode81_1 = object.addFuseOperation();
myNode81_1.leftArg.set(myNode1);
myNode81_1.rightArg.set(myNode1);
const myNode81_2 = object.addFuseOperation();
myNode81_2.leftArg.set(myNode81_1);
myNode81_2.rightArg.set(myNode14);
const myNode81_3 = object.addFuseOperation();
myNode81_3.leftArg.set(myNode81_2);
myNode81_3.rightArg.set(myNode36);
const myNode81_4 = object.addFuseOperation();
myNode81_4.leftArg.set(myNode81_3);
myNode81_4.rightArg.set(myNode56);
const myNode81_5 = object.addFuseOperation();
myNode81_5.leftArg.set(myNode81_4);
myNode81_5.rightArg.set(myNode57);
const myNode81_6 = object.addFuseOperation();
myNode81_6.leftArg.set(myNode81_5);
myNode81_6.rightArg.set(myNode64);
const myNode81_7 = object.addFuseOperation();
myNode81_7.leftArg.set(myNode81_6);
myNode81_7.rightArg.set(myNode77);
myNode81 = object.addFuseOperation();
myNode81.leftArg.set(myNode81_7);
myNode81.rightArg.set(myNode80);
myNode81.isVisible = False

/* définition du node n°82*/
const myNode82 = object.addCommonOperation();
myNode82.leftArg.set(myNode0);
myNode82.rightArg.set(myNode81);
myNode82.isVisible = True


/*END Geometry Object Definition*/