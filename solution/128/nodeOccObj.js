/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.1199,-5.9999,-0.6399);
myNode0.point2.set(10.2398,11.9998,1.2798);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-3.6009,-4.9999,-0.2669);
myNode1.point2.set(6.1078,5.8928,0.7998);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode1.innerRotation.angle.set(3.14159);

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-3.6009,-4.9999,-0.5329);
myNode2.point2.set(1.4718,0.6558,0.2668);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode2.innerRotation.angle.set(3.14159);

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(3.588,4.321,-0.5329);
myNode3.point2.set(0,0,1.0668);
myNode3.radius.set(0.682);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(-2.801,0.733,0.2671);
myNode4.point2.set(0,0,0.2668);
myNode4.radius.set(0.4);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);

/* définition du node n°5*/
const myNode5 = object.addBox();
myNode5.point1.set(-4.2669,-4.3439,-0.5329);
myNode5.point2.set(8.5328,5.2368,1.0668);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode5.innerRotation.angle.set(3.14159);

/* définition du node n°6*/
const myNode6 = object.addCylinder();
myNode6.point1.set(-2.13,2.042,-18.0999);
myNode6.point2.set(0,0,36.1999);
myNode6.radius.set(0.269);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);

/* définition du node n°7*/
const myNode7 = object.addCutOperation();
myNode7.leftArg.set(myNode5);
myNode7.rightArg.set(myNode6);

/* définition du node n°8*/
const myNode8 = object.addBox();
myNode8.point1.set(2.5071,-4.9999,-0.5329);
myNode8.point2.set(1.0808,5.8928,1.0668);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode8.innerRotation.angle.set(3.14159);

/* définition du node n°9*/
const myNode9_1 = object.addFuseOperation();
myNode9_1.leftArg.set(myNode1);
myNode9_1.rightArg.set(myNode1);
const myNode9_2 = object.addFuseOperation();
myNode9_2.leftArg.set(myNode9_1);
myNode9_2.rightArg.set(myNode2);
const myNode9_3 = object.addFuseOperation();
myNode9_3.leftArg.set(myNode9_2);
myNode9_3.rightArg.set(myNode3);
const myNode9_4 = object.addFuseOperation();
myNode9_4.leftArg.set(myNode9_3);
myNode9_4.rightArg.set(myNode4);
const myNode9_5 = object.addFuseOperation();
myNode9_5.leftArg.set(myNode9_4);
myNode9_5.rightArg.set(myNode7);
myNode9 = object.addFuseOperation();
myNode9.leftArg.set(myNode9_5);
myNode9.rightArg.set(myNode8);

/* définition du node n°10*/
const myNode10 = object.addCylinder();
myNode10.point1.set(3.467,4.175,-18.0999);
myNode10.point2.set(0,0,36.1999);
myNode10.radius.set(0.426);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);

/* définition du node n°11*/
const myNode11 = object.addBox();
myNode11.point1.set(-2.50695,-3.25495,-0.26695);
myNode11.point2.set(6.7729,0.9489,0.7999);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode11.innerRotation.angle.set(3.14159);

/* définition du node n°12*/
const myNode12 = object.addBox();
myNode12.point1.set(-3.73295,-3.53295,-0.26695);
myNode12.point2.set(7.3209,4.4269,18.3669);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode12.innerRotation.angle.set(3.14159);

/* définition du node n°13*/
const myNode13 = object.addBox();
myNode13.point1.set(-2.50695,-4.99995,0.26705);
myNode13.point2.set(5.0129,1.4659,17.8329);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode13.innerRotation.angle.set(3.14159);

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(3.468,3.267,-18.0999);
myNode14.point2.set(0,0,18.3669);
myNode14.radius.set(0.264);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);

/* définition du node n°15*/
const myNode15 = object.addCylinder();
myNode15.point1.set(3.588,4.321,-0.267);
myNode15.point2.set(0,0,18.367);
myNode15.radius.set(0.682);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);

/* définition du node n°16*/
const myNode16 = object.addCutOperation();
myNode16.leftArg.set(myNode14);
myNode16.rightArg.set(myNode15);

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(-2.12895,-2.30695,-18.0999);
myNode17.point2.set(20.2289,20.4069,36.1999);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode17.innerRotation.angle.set(3.14159);

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(-3.468,4.173,-0.53295);
myNode18.point2.set(0,0,18.6329);
myNode18.radius.set(0.426);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);

/* définition du node n°19*/
const myNode19_1 = object.addFuseOperation();
myNode19_1.leftArg.set(myNode10);
myNode19_1.rightArg.set(myNode10);
const myNode19_2 = object.addFuseOperation();
myNode19_2.leftArg.set(myNode19_1);
myNode19_2.rightArg.set(myNode11);
const myNode19_3 = object.addFuseOperation();
myNode19_3.leftArg.set(myNode19_2);
myNode19_3.rightArg.set(myNode12);
const myNode19_4 = object.addFuseOperation();
myNode19_4.leftArg.set(myNode19_3);
myNode19_4.rightArg.set(myNode13);
const myNode19_5 = object.addFuseOperation();
myNode19_5.leftArg.set(myNode19_4);
myNode19_5.rightArg.set(myNode16);
const myNode19_6 = object.addFuseOperation();
myNode19_6.leftArg.set(myNode19_5);
myNode19_6.rightArg.set(myNode17);
myNode19 = object.addFuseOperation();
myNode19.leftArg.set(myNode19_6);
myNode19.rightArg.set(myNode18);

/* définition du node n°20*/
const myNode20 = object.addCutOperation();
myNode20.leftArg.set(myNode9);
myNode20.rightArg.set(myNode19);

/* définition du node n°21*/
const myNode21 = object.addBox();
myNode21.point1.set(1.0611,0.4401,0.2671);
myNode21.point2.set(2.5268,1.3328,0.2668);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);

/* définition du node n°22*/
const myNode22 = object.addCylinder();
myNode22.point1.set(2.801,0.733,-18.0999);
myNode22.point2.set(0,0,36.1998);
myNode22.radius.set(0.4);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(0.0,0.0,0.0);
myNode22.innerRotation.angle.set(0.0);

/* définition du node n°23*/
const myNode23 = object.addBox();
myNode23.point1.set(-3.7329,0.4401,0.2671);
myNode23.point2.set(4.7938,1.3328,17.8328);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);

/* définition du node n°24*/
const myNode24 = object.addBox();
myNode24.point1.set(2.1331,3.2551,-0.5329);
myNode24.point2.set(1.4548,14.8448,1.0668);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);

/* définition du node n°25*/
const myNode25_1 = object.addFuseOperation();
myNode25_1.leftArg.set(myNode21);
myNode25_1.rightArg.set(myNode21);
const myNode25_2 = object.addFuseOperation();
myNode25_2.leftArg.set(myNode25_1);
myNode25_2.rightArg.set(myNode22);
const myNode25_3 = object.addFuseOperation();
myNode25_3.leftArg.set(myNode25_2);
myNode25_3.rightArg.set(myNode23);
myNode25 = object.addFuseOperation();
myNode25.leftArg.set(myNode25_3);
myNode25.rightArg.set(myNode24);

/* définition du node n°26*/
const myNode26 = object.addBox();
myNode26.point1.set(-3.7329,-3.3999,-0.5329);
myNode26.point2.set(7.3208,5.1728,1.0668);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);

/* définition du node n°27*/
const myNode27 = object.addCylinder();
myNode27.point1.set(-1.6,0.706,-0.53295);
myNode27.point2.set(0,0,1.0669);
myNode27.radius.set(0.266);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);

/* définition du node n°28*/
const myNode28 = object.addCutOperation();
myNode28.leftArg.set(myNode26);
myNode28.rightArg.set(myNode27);

/* définition du node n°29*/
const myNode29 = object.addBox();
myNode29.point1.set(-1.59995,-0.89295,-0.53295);
myNode29.point2.set(3.7329,1.8669,1.0669);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);

/* définition du node n°30*/
const myNode30 = object.addCylinder();
myNode30.point1.set(2.133,2.039,-18.0999);
myNode30.point2.set(0,0,36.1999);
myNode30.radius.set(0.266);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);

/* définition du node n°31*/
const myNode31 = object.addFuseOperation();
myNode31.leftArg.set(myNode29);
myNode31.rightArg.set(myNode30);

/* définition du node n°32*/
const myNode32 = object.addCutOperation();
myNode32.leftArg.set(myNode28);
myNode32.rightArg.set(myNode31);

/* définition du node n°33*/
const myNode33 = object.addCommonOperation();
myNode33.leftArg.set(myNode25);
myNode33.rightArg.set(myNode32);

/* définition du node n°34*/
const myNode34 = object.addCylinder();
myNode34.point1.set(2.799,-2.598,-0.5329);
myNode34.point2.set(0,0,0.7998);
myNode34.radius.set(0.4);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(0.0,0.0,0.0);
myNode34.innerRotation.angle.set(0.0);

/* définition du node n°35*/
const myNode35 = object.addBox();
myNode35.point1.set(-4.2669,-4.9999,-0.5329);
myNode35.point2.set(7.8548,5.8928,1.0668);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode35.innerRotation.angle.set(3.14159);

/* définition du node n°36*/
const myNode36 = object.addBox();
myNode36.point1.set(2.50705,-18.0999,-0.53295);
myNode36.point2.set(15.5929,14.5669,18.6329);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode36.innerRotation.angle.set(3.14159);

/* définition du node n°37*/
const myNode37 = object.addBox();
myNode37.point1.set(-18.0999,-3.25495,-0.53295);
myNode37.point2.set(36.1999,4.1489,1.0669);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode37.innerRotation.angle.set(3.14159);

/* définition du node n°38*/
const myNode38 = object.addCylinder();
myNode38.point1.set(-2.801,0.733,-0.533);
myNode38.point2.set(0,0,18.633);
myNode38.radius.set(0.4);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(0.0,0.0,0.0);
myNode38.innerRotation.angle.set(0.0);

/* définition du node n°39*/
const myNode39 = object.addCutOperation();
myNode39.leftArg.set(myNode37);
myNode39.rightArg.set(myNode38);

/* définition du node n°40*/
const myNode40 = object.addBox();
myNode40.point1.set(-18.0999,-4.99995,-18.0999);
myNode40.point2.set(15.9699,1.4659,18.6329);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode40.innerRotation.angle.set(3.14159);

/* définition du node n°41*/
const myNode41 = object.addCylinder();
myNode41.point1.set(-3.608,4.344,-18.1);
myNode41.point2.set(0,0,36.2);
myNode41.radius.set(0.654);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,0.0,0.0);
myNode41.innerRotation.angle.set(0.0);

/* définition du node n°42*/
const myNode42 = object.addCutOperation();
myNode42.leftArg.set(myNode40);
myNode42.rightArg.set(myNode41);

/* définition du node n°43*/
const myNode43 = object.addCylinder();
myNode43.point1.set(-3.454,3.255,-0.53295);
myNode43.point2.set(0,0,0.7999);
myNode43.radius.set(0.283);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(0.0,0.0,0.0);
myNode43.innerRotation.angle.set(0.0);

/* définition du node n°44*/
const myNode44 = object.addCylinder();
myNode44.point1.set(-3.468,4.173,-18.0999);
myNode44.point2.set(0,0,36.1999);
myNode44.radius.set(0.426);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(0.0,0.0,0.0);
myNode44.innerRotation.angle.set(0.0);

/* définition du node n°45*/
const myNode45 = object.addBox();
myNode45.point1.set(-3.60095,-18.0999,-0.26695);
myNode45.point2.set(7.1889,14.8449,18.3669);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(-3.14159,0.0,0.0);
myNode45.innerRotation.angle.set(3.14159);

/* définition du node n°46*/
const myNode46_1 = object.addFuseOperation();
myNode46_1.leftArg.set(myNode36);
myNode46_1.rightArg.set(myNode36);
const myNode46_2 = object.addFuseOperation();
myNode46_2.leftArg.set(myNode46_1);
myNode46_2.rightArg.set(myNode39);
const myNode46_3 = object.addFuseOperation();
myNode46_3.leftArg.set(myNode46_2);
myNode46_3.rightArg.set(myNode42);
const myNode46_4 = object.addFuseOperation();
myNode46_4.leftArg.set(myNode46_3);
myNode46_4.rightArg.set(myNode43);
const myNode46_5 = object.addFuseOperation();
myNode46_5.leftArg.set(myNode46_4);
myNode46_5.rightArg.set(myNode44);
myNode46 = object.addFuseOperation();
myNode46.leftArg.set(myNode46_5);
myNode46.rightArg.set(myNode45);

/* définition du node n°47*/
const myNode47 = object.addCutOperation();
myNode47.leftArg.set(myNode35);
myNode47.rightArg.set(myNode46);

/* définition du node n°48*/
const myNode48 = object.addBox();
myNode48.point1.set(2.1331,-4.9999,-18.0999);
myNode48.point2.set(2.1328,8.2548,18.6328);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);

/* définition du node n°49*/
const myNode49 = object.addBox();
myNode49.point1.set(-18.0999,-4.9999,-18.0999);
myNode49.point2.set(21.6878,6.7728,18.6328);
myNode49.innerRotation.center.set(0,0,0);
myNode49.innerRotation.axis.set(0.0,0.0,0.0);
myNode49.innerRotation.angle.set(0.0);

/* définition du node n°50*/
const myNode50 = object.addFuseOperation();
myNode50.leftArg.set(myNode48);
myNode50.rightArg.set(myNode49);

/* définition du node n°51*/
const myNode51 = object.addCylinder();
myNode51.point1.set(1.595,0.706,-18.0999);
myNode51.point2.set(0,0,36.1999);
myNode51.radius.set(0.27);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(0.0,0.0,0.0);
myNode51.innerRotation.angle.set(0.0);

/* définition du node n°52*/
const myNode52 = object.addCutOperation();
myNode52.leftArg.set(myNode50);
myNode52.rightArg.set(myNode51);

/* définition du node n°53*/
const myNode53 = object.addCylinder();
myNode53.point1.set(-3.467,-4.174,-18.0999);
myNode53.point2.set(0,0,36.1999);
myNode53.radius.set(0.427);
myNode53.innerRotation.center.set(0,0,0);
myNode53.innerRotation.axis.set(0.0,0.0,0.0);
myNode53.innerRotation.angle.set(0.0);

/* définition du node n°54*/
const myNode54 = object.addCylinder();
myNode54.point1.set(3.59,-4.325,-18.0999);
myNode54.point2.set(0,0,18.6329);
myNode54.radius.set(0.68);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(0.0,0.0,0.0);
myNode54.innerRotation.angle.set(0.0);

/* définition du node n°55*/
const myNode55 = object.addCylinder();
myNode55.point1.set(-1.066,-0.628,-0.53295);
myNode55.point2.set(0,0,18.6329);
myNode55.radius.set(0.267);
myNode55.innerRotation.center.set(0,0,0);
myNode55.innerRotation.axis.set(0.0,0.0,0.0);
myNode55.innerRotation.angle.set(0.0);

/* définition du node n°56*/
const myNode56 = object.addCylinder();
myNode56.point1.set(2.133,2.039,0.26705);
myNode56.point2.set(0,0,17.8329);
myNode56.radius.set(0.266);
myNode56.innerRotation.center.set(0,0,0);
myNode56.innerRotation.axis.set(0.0,0.0,0.0);
myNode56.innerRotation.angle.set(0.0);

/* définition du node n°57*/
const myNode57_1 = object.addFuseOperation();
myNode57_1.leftArg.set(myNode53);
myNode57_1.rightArg.set(myNode53);
const myNode57_2 = object.addFuseOperation();
myNode57_2.leftArg.set(myNode57_1);
myNode57_2.rightArg.set(myNode54);
const myNode57_3 = object.addFuseOperation();
myNode57_3.leftArg.set(myNode57_2);
myNode57_3.rightArg.set(myNode55);
myNode57 = object.addFuseOperation();
myNode57.leftArg.set(myNode57_3);
myNode57.rightArg.set(myNode56);

/* définition du node n°58*/
const myNode58 = object.addCutOperation();
myNode58.leftArg.set(myNode52);
myNode58.rightArg.set(myNode57);

/* définition du node n°59*/
const myNode59 = object.addCylinder();
myNode59.point1.set(-3.601,-4.338,-0.5329);
myNode59.point2.set(0,0,18.6328);
myNode59.radius.set(0.662);
myNode59.innerRotation.center.set(0,0,0);
myNode59.innerRotation.axis.set(0.0,0.0,0.0);
myNode59.innerRotation.angle.set(0.0);

/* définition du node n°60*/
const myNode60 = object.addBox();
myNode60.point1.set(1.5951,-4.3249,-0.5329);
myNode60.point2.set(2.6718,7.5808,1.0668);
myNode60.innerRotation.center.set(0,0,0);
myNode60.innerRotation.axis.set(0.0,0.0,0.0);
myNode60.innerRotation.angle.set(0.0);

/* définition du node n°61*/
const myNode61 = object.addBox();
myNode61.point1.set(-4.2669,-4.3249,-0.5329);
myNode61.point2.set(0.5328,3.4318,1.0668);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(0.0,0.0,0.0);
myNode61.innerRotation.angle.set(0.0);

/* définition du node n°62*/
const myNode62 = object.addBox();
myNode62.point1.set(-3.7329,-4.9999,-0.5329);
myNode62.point2.set(7.3208,5.4398,1.0668);
myNode62.innerRotation.center.set(0,0,0);
myNode62.innerRotation.axis.set(0.0,0.0,0.0);
myNode62.innerRotation.angle.set(0.0);

/* définition du node n°63*/
const myNode63_1 = object.addFuseOperation();
myNode63_1.leftArg.set(myNode59);
myNode63_1.rightArg.set(myNode59);
const myNode63_2 = object.addFuseOperation();
myNode63_2.leftArg.set(myNode63_1);
myNode63_2.rightArg.set(myNode60);
const myNode63_3 = object.addFuseOperation();
myNode63_3.leftArg.set(myNode63_2);
myNode63_3.rightArg.set(myNode61);
myNode63 = object.addFuseOperation();
myNode63.leftArg.set(myNode63_3);
myNode63.rightArg.set(myNode62);

/* définition du node n°64*/
const myNode64 = object.addBox();
myNode64.point1.set(-1.06595,-0.89295,-18.0999);
myNode64.point2.set(2.1269,0.5329,18.6329);
myNode64.innerRotation.center.set(0,0,0);
myNode64.innerRotation.axis.set(0.0,0.0,0.0);
myNode64.innerRotation.angle.set(0.0);

/* définition du node n°65*/
const myNode65 = object.addCylinder();
myNode65.point1.set(1.061,-0.628,-18.0999);
myNode65.point2.set(0,0,36.1999);
myNode65.radius.set(0.271);
myNode65.innerRotation.center.set(0,0,0);
myNode65.innerRotation.axis.set(0.0,0.0,0.0);
myNode65.innerRotation.angle.set(0.0);

/* définition du node n°66*/
const myNode66 = object.addBox();
myNode66.point1.set(-3.73295,-3.39995,-0.53295);
myNode66.point2.set(7.4669,6.6549,0.7999);
myNode66.innerRotation.center.set(0,0,0);
myNode66.innerRotation.axis.set(0.0,0.0,0.0);
myNode66.innerRotation.angle.set(0.0);

/* définition du node n°67*/
const myNode67_1 = object.addFuseOperation();
myNode67_1.leftArg.set(myNode64);
myNode67_1.rightArg.set(myNode64);
const myNode67_2 = object.addFuseOperation();
myNode67_2.leftArg.set(myNode67_1);
myNode67_2.rightArg.set(myNode65);
myNode67 = object.addFuseOperation();
myNode67.leftArg.set(myNode67_2);
myNode67.rightArg.set(myNode66);

/* définition du node n°68*/
const myNode68 = object.addCutOperation();
myNode68.leftArg.set(myNode63);
myNode68.rightArg.set(myNode67);

/* définition du node n°69*/
const myNode69 = object.addCommonOperation();
myNode69.leftArg.set(myNode58);
myNode69.rightArg.set(myNode68);

/* définition du node n°70*/
const myNode70 = object.addBox();
myNode70.point1.set(-4.2669,-3.3999,-0.5329);
myNode70.point2.set(0.6658,0.2668,0.7998);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(0.0,0.0,0.0);
myNode70.innerRotation.angle.set(0.0);

/* définition du node n°71*/
const myNode71 = object.addCylinder();
myNode71.point1.set(3.59,-4.325,-0.5329);
myNode71.point2.set(0,0,1.0668);
myNode71.radius.set(0.68);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(0.0,0.0,0.0);
myNode71.innerRotation.angle.set(0.0);

/* définition du node n°72*/
const myNode72 = object.addFuseOperation();
myNode72.leftArg.set(myNode70);
myNode72.rightArg.set(myNode71);

/* définition du node n°73*/
const myNode73 = object.addCylinder();
myNode73.point1.set(3.467,-4.174,-18.0999);
myNode73.point2.set(0,0,36.1999);
myNode73.radius.set(0.426);
myNode73.innerRotation.center.set(0,0,0);
myNode73.innerRotation.axis.set(0.0,0.0,0.0);
myNode73.innerRotation.angle.set(0.0);

/* définition du node n°74*/
const myNode74 = object.addCylinder();
myNode74.point1.set(-3.471,-3.133,-0.53295);
myNode74.point2.set(0,0,18.6329);
myNode74.radius.set(0.263);
myNode74.innerRotation.center.set(0,0,0);
myNode74.innerRotation.axis.set(0.0,0.0,0.0);
myNode74.innerRotation.angle.set(0.0);

/* définition du node n°75*/
const myNode75 = object.addFuseOperation();
myNode75.leftArg.set(myNode73);
myNode75.rightArg.set(myNode74);

/* définition du node n°76*/
const myNode76 = object.addCutOperation();
myNode76.leftArg.set(myNode72);
myNode76.rightArg.set(myNode75);

/* définition du node n°77*/
const myNode77 = object.addCylinder();
myNode77.point1.set(-2.798,-2.601,-0.5329);
myNode77.point2.set(0,0,1.0668);
myNode77.radius.set(0.399);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(0.0,0.0,0.0);
myNode77.innerRotation.angle.set(0.0);

/* définition du node n°78*/
const myNode78 = object.addBox();
myNode78.point1.set(3.5881,-3.3999,-0.5329);
myNode78.point2.set(0.1458,0.2668,1.0668);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(0.0,0.0,0.0);
myNode78.innerRotation.angle.set(0.0);

/* définition du node n°79*/
const myNode79 = object.addCylinder();
myNode79.point1.set(3.469,-3.132,-18.0999);
myNode79.point2.set(0,0,36.1999);
myNode79.radius.set(0.266);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(0.0,0.0,0.0);
myNode79.innerRotation.angle.set(0.0);

/* définition du node n°80*/
const myNode80 = object.addCutOperation();
myNode80.leftArg.set(myNode78);
myNode80.rightArg.set(myNode79);

/* définition du node n°81*/
const myNode81_1 = object.addFuseOperation();
myNode81_1.leftArg.set(myNode20);
myNode81_1.rightArg.set(myNode20);
const myNode81_2 = object.addFuseOperation();
myNode81_2.leftArg.set(myNode81_1);
myNode81_2.rightArg.set(myNode33);
const myNode81_3 = object.addFuseOperation();
myNode81_3.leftArg.set(myNode81_2);
myNode81_3.rightArg.set(myNode34);
const myNode81_4 = object.addFuseOperation();
myNode81_4.leftArg.set(myNode81_3);
myNode81_4.rightArg.set(myNode47);
const myNode81_5 = object.addFuseOperation();
myNode81_5.leftArg.set(myNode81_4);
myNode81_5.rightArg.set(myNode69);
const myNode81_6 = object.addFuseOperation();
myNode81_6.leftArg.set(myNode81_5);
myNode81_6.rightArg.set(myNode76);
const myNode81_7 = object.addFuseOperation();
myNode81_7.leftArg.set(myNode81_6);
myNode81_7.rightArg.set(myNode77);
myNode81 = object.addFuseOperation();
myNode81.leftArg.set(myNode81_7);
myNode81.rightArg.set(myNode80);

/* définition du node n°82*/
const myNode82 = object.addCommonOperation();
myNode82.leftArg.set(myNode0);
myNode82.rightArg.set(myNode81);
/*END Geometry Object Definition*/