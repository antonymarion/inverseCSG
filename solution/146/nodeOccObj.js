/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.9999,-4.3849,-0.5239);
myNode0.point2.set(11.9998,8.7708,1.0468);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(3.8241,-3.3969,-0.4359);
myNode1.point2.set(0.2478,1.3688,0.4088);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(4.0721,-2.4359,-0.4359);
myNode2.point2.set(0.3828,4.1448,0.8728);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(3.824,-3.397,-0.4359);
myNode3.point2.set(0,0,0.4088);
myNode3.radius.set(0.255);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);

/* définition du node n°4*/
const myNode4 = object.addBox();
myNode4.point1.set(3.5361,2.0271,-0.4359);
myNode4.point2.set(0.5348,1.3668,0.4088);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);

/* définition du node n°5*/
const myNode5_1 = object.addFuseOperation();
myNode5_1.leftArg.set(myNode1);
myNode5_1.rightArg.set(myNode1);
const myNode5_2 = object.addFuseOperation();
myNode5_2.leftArg.set(myNode5_1);
myNode5_2.rightArg.set(myNode2);
const myNode5_3 = object.addFuseOperation();
myNode5_3.leftArg.set(myNode5_2);
myNode5_3.rightArg.set(myNode3);
myNode5 = object.addFuseOperation();
myNode5.leftArg.set(myNode5_3);
myNode5.rightArg.set(myNode4);

/* définition du node n°6*/
const myNode6 = object.addBox();
myNode6.point1.set(3.53605,-2.43595,-0.02695);
myNode6.point2.set(14.5639,0.7269,18.1269);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);

/* définition du node n°7*/
const myNode7 = object.addCylinder();
myNode7.point1.set(4.342,-2.514,-18.0999);
myNode7.point2.set(0,0,18.5359);
myNode7.radius.set(0.257);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);

/* définition du node n°8*/
const myNode8 = object.addCylinder();
myNode8.point1.set(3.719,3.046,-18.0999);
myNode8.point2.set(0,0,36.1999);
myNode8.radius.set(0.072);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);

/* définition du node n°9*/
const myNode9_1 = object.addFuseOperation();
myNode9_1.leftArg.set(myNode6);
myNode9_1.rightArg.set(myNode6);
const myNode9_2 = object.addFuseOperation();
myNode9_2.leftArg.set(myNode9_1);
myNode9_2.rightArg.set(myNode7);
myNode9 = object.addFuseOperation();
myNode9.leftArg.set(myNode9_2);
myNode9.rightArg.set(myNode8);

/* définition du node n°10*/
const myNode10 = object.addCutOperation();
myNode10.leftArg.set(myNode5);
myNode10.rightArg.set(myNode9);

/* définition du node n°11*/
const myNode11 = object.addCylinder();
myNode11.point1.set(1.087,3.394,-0.4359);
myNode11.point2.set(0,0,0.4088);
myNode11.radius.set(0.258);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);

/* définition du node n°12*/
const myNode12 = object.addBox();
myNode12.point1.set(-1.3729,2.0271,-0.4359);
myNode12.point2.set(0.5448,1.3668,0.4088);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);

/* définition du node n°13*/
const myNode13 = object.addCylinder();
myNode13.point1.set(-1.191,3.045,-18.0999);
myNode13.point2.set(0,0,18.5359);
myNode13.radius.set(0.072);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);

/* définition du node n°14*/
const myNode14 = object.addCutOperation();
myNode14.leftArg.set(myNode12);
myNode14.rightArg.set(myNode13);

/* définition du node n°15*/
const myNode15 = object.addBox();
myNode15.point1.set(3.5361,-3.6549,-0.4359);
myNode15.point2.set(0.2878,7.3088,0.4088);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(3.718,-3.046,-0.43595);
myNode16.point2.set(0,0,18.5359);
myNode16.radius.set(0.072);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(3.53605,-2.02695,-18.0999);
myNode17.point2.set(0.2879,5.4209,36.1999);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);

/* définition du node n°18*/
const myNode18 = object.addFuseOperation();
myNode18.leftArg.set(myNode16);
myNode18.rightArg.set(myNode17);

/* définition du node n°19*/
const myNode19 = object.addCutOperation();
myNode19.leftArg.set(myNode15);
myNode19.rightArg.set(myNode18);

/* définition du node n°20*/
const myNode20 = object.addBox();
myNode20.point1.set(1.0871,2.0271,-0.4359);
myNode20.point2.set(0.2858,1.6268,0.4088);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);

/* définition du node n°21*/
const myNode21 = object.addCylinder();
myNode21.point1.set(1.191,3.046,-0.43595);
myNode21.point2.set(0,0,18.5359);
myNode21.radius.set(0.072);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);

/* définition du node n°22*/
const myNode22 = object.addCutOperation();
myNode22.leftArg.set(myNode20);
myNode22.rightArg.set(myNode21);

/* définition du node n°23*/
const myNode23 = object.addBox();
myNode23.point1.set(-2.8229,2.0271,-0.4359);
myNode23.point2.set(6.1448,0.2268,0.8728);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);

/* définition du node n°24*/
const myNode24 = object.addBox();
myNode24.point1.set(-3.1179,-2.2549,-0.2089);
myNode24.point2.set(4.4908,0.2268,0.6448);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);

/* définition du node n°25*/
const myNode25 = object.addBox();
myNode25.point1.set(-1.3729,-3.6549,-0.4359);
myNode25.point2.set(0.2798,0.2578,0.4088);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(0.0,0.0,0.0);
myNode25.innerRotation.angle.set(0.0);

/* définition du node n°26*/
const myNode26 = object.addBox();
myNode26.point1.set(-4.4549,2.0271,-0.0269);
myNode26.point2.set(0.7678,0.2268,0.4638);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);

/* définition du node n°27*/
const myNode27 = object.addCylinder();
myNode27.point1.set(-4.727,1.981,-0.4359);
myNode27.point2.set(0,0,18.5358);
myNode27.radius.set(0.272);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);

/* définition du node n°28*/
const myNode28 = object.addBox();
myNode28.point1.set(-3.6859,2.0271,-0.4359);
myNode28.point2.set(3.1188,0.4088,0.4638);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(0.0,0.0,0.0);
myNode28.innerRotation.angle.set(0.0);

/* définition du node n°29*/
const myNode29 = object.addBox();
myNode29.point1.set(-4.7259,-18.0999,-0.4359);
myNode29.point2.set(0.6538,20.3538,0.8728);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);

/* définition du node n°30*/
const myNode30 = object.addCylinder();
myNode30.point1.set(-3.819,3.39,-0.4359);
myNode30.point2.set(0,0,0.4088);
myNode30.radius.set(0.262);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);

/* définition du node n°31*/
const myNode31_1 = object.addFuseOperation();
myNode31_1.leftArg.set(myNode27);
myNode31_1.rightArg.set(myNode27);
const myNode31_2 = object.addFuseOperation();
myNode31_2.leftArg.set(myNode31_1);
myNode31_2.rightArg.set(myNode28);
const myNode31_3 = object.addFuseOperation();
myNode31_3.leftArg.set(myNode31_2);
myNode31_3.rightArg.set(myNode29);
myNode31 = object.addFuseOperation();
myNode31.leftArg.set(myNode31_3);
myNode31.rightArg.set(myNode30);

/* définition du node n°32*/
const myNode32 = object.addBox();
myNode32.point1.set(-18.0999,1.3001,-18.0999);
myNode32.point2.set(19.4728,16.7998,18.5358);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);

/* définition du node n°33*/
const myNode33 = object.addBox();
myNode33.point1.set(-18.0999,1.30005,-0.43595);
myNode33.point2.set(13.6459,0.4079,18.5359);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);

/* définition du node n°34*/
const myNode34 = object.addCutOperation();
myNode34.leftArg.set(myNode32);
myNode34.rightArg.set(myNode33);

/* définition du node n°35*/
const myNode35 = object.addCylinder();
myNode35.point1.set(-0.568,2.513,-18.0999);
myNode35.point2.set(0,0,36.1999);
myNode35.radius.set(0.256);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,0.0);
myNode35.innerRotation.angle.set(0.0);

/* définition du node n°36*/
const myNode36 = object.addCylinder();
myNode36.point1.set(-4.727,1.982,-18.0999);
myNode36.point2.set(0,0,36.1999);
myNode36.radius.set(0.136);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(0.0,0.0,0.0);
myNode36.innerRotation.angle.set(0.0);

/* définition du node n°37*/
const myNode37 = object.addFuseOperation();
myNode37.leftArg.set(myNode35);
myNode37.rightArg.set(myNode36);

/* définition du node n°38*/
const myNode38 = object.addCutOperation();
myNode38.leftArg.set(myNode34);
myNode38.rightArg.set(myNode37);

/* définition du node n°39*/
const myNode39 = object.addCommonOperation();
myNode39.leftArg.set(myNode31);
myNode39.rightArg.set(myNode38);

/* définition du node n°40*/
const myNode40 = object.addBox();
myNode40.point1.set(4.0721,-2.2549,-0.4359);
myNode40.point2.set(0.6558,0.5448,0.8728);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(0.0,0.0,0.0);
myNode40.innerRotation.angle.set(0.0);

/* définition du node n°41*/
const myNode41 = object.addBox();
myNode41.point1.set(1.3731,-2.4359,-0.4359);
myNode41.point2.set(2.6988,0.4088,0.8728);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,0.0,0.0);
myNode41.innerRotation.angle.set(0.0);

/* définition du node n°42*/
const myNode42 = object.addFuseOperation();
myNode42.leftArg.set(myNode40);
myNode42.rightArg.set(myNode41);

/* définition du node n°43*/
const myNode43 = object.addCylinder();
myNode43.point1.set(4.727,-1.982,-18.0999);
myNode43.point2.set(0,0,18.5359);
myNode43.radius.set(0.272);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(0.0,0.0,0.0);
myNode43.innerRotation.angle.set(0.0);

/* définition du node n°44*/
const myNode44 = object.addBox();
myNode44.point1.set(-18.0999,-2.43595,-0.02695);
myNode44.point2.set(22.8269,0.1819,0.4639);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(0.0,0.0,0.0);
myNode44.innerRotation.angle.set(0.0);

/* définition du node n°45*/
const myNode45 = object.addFuseOperation();
myNode45.leftArg.set(myNode43);
myNode45.rightArg.set(myNode44);

/* définition du node n°46*/
const myNode46 = object.addCutOperation();
myNode46.leftArg.set(myNode42);
myNode46.rightArg.set(myNode45);

/* définition du node n°47*/
const myNode47 = object.addBox();
myNode47.point1.set(-0.2729,-2.4359,-0.4359);
myNode47.point2.set(0.5448,0.1818,0.8728);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(0.0,0.0,0.0);
myNode47.innerRotation.angle.set(0.0);

/* définition du node n°48*/
const myNode48 = object.addBox();
myNode48.point1.set(-1.3729,-3.3969,-0.4359);
myNode48.point2.set(2.7448,0.9598,0.4088);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);

/* définition du node n°49*/
const myNode49 = object.addBox();
myNode49.point1.set(-0.82695,-3.39695,-18.0999);
myNode49.point2.set(1.6539,0.9599,36.1999);
myNode49.innerRotation.center.set(0,0,0);
myNode49.innerRotation.axis.set(0.0,0.0,0.0);
myNode49.innerRotation.angle.set(0.0);

/* définition du node n°50*/
const myNode50 = object.addCutOperation();
myNode50.leftArg.set(myNode48);
myNode50.rightArg.set(myNode49);

/* définition du node n°51*/
const myNode51 = object.addCylinder();
myNode51.point1.set(0,-2.526,-0.4359);
myNode51.point2.set(0,0,0.8728);
myNode51.radius.set(0.271);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(0.0,0.0,0.0);
myNode51.innerRotation.angle.set(0.0);

/* définition du node n°52*/
const myNode52 = object.addBox();
myNode52.point1.set(1.0871,-3.6549,-0.4359);
myNode52.point2.set(0.2858,0.2578,0.4088);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(0.0,0.0,0.0);
myNode52.innerRotation.angle.set(0.0);

/* définition du node n°53*/
const myNode53 = object.addBox();
myNode53.point1.set(-4.7259,-2.2549,-0.4359);
myNode53.point2.set(0.7438,3.5548,0.8728);
myNode53.innerRotation.center.set(0,0,0);
myNode53.innerRotation.axis.set(0.0,0.0,0.0);
myNode53.innerRotation.angle.set(0.0);

/* définition du node n°54*/
const myNode54 = object.addBox();
myNode54.point1.set(-4.4549,-2.2549,-0.4359);
myNode54.point2.set(8.2778,3.5548,0.2268);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(0.0,0.0,0.0);
myNode54.innerRotation.angle.set(0.0);

/* définition du node n°55*/
const myNode55 = object.addCylinder();
myNode55.point1.set(-1.093,-3.389,-0.4359);
myNode55.point2.set(0,0,0.4088);
myNode55.radius.set(0.265);
myNode55.innerRotation.center.set(0,0,0);
myNode55.innerRotation.axis.set(0.0,0.0,0.0);
myNode55.innerRotation.angle.set(0.0);

/* définition du node n°56*/
const myNode56_1 = object.addFuseOperation();
myNode56_1.leftArg.set(myNode47);
myNode56_1.rightArg.set(myNode47);
const myNode56_2 = object.addFuseOperation();
myNode56_2.leftArg.set(myNode56_1);
myNode56_2.rightArg.set(myNode50);
const myNode56_3 = object.addFuseOperation();
myNode56_3.leftArg.set(myNode56_2);
myNode56_3.rightArg.set(myNode51);
const myNode56_4 = object.addFuseOperation();
myNode56_4.leftArg.set(myNode56_3);
myNode56_4.rightArg.set(myNode52);
const myNode56_5 = object.addFuseOperation();
myNode56_5.leftArg.set(myNode56_4);
myNode56_5.rightArg.set(myNode53);
const myNode56_6 = object.addFuseOperation();
myNode56_6.leftArg.set(myNode56_5);
myNode56_6.rightArg.set(myNode54);
myNode56 = object.addFuseOperation();
myNode56.leftArg.set(myNode56_6);
myNode56.rightArg.set(myNode55);

/* définition du node n°57*/
const myNode57 = object.addBox();
myNode57.point1.set(-3.32295,-1.29995,-0.43595);
myNode57.point2.set(7.1469,2.5999,0.4089);
myNode57.innerRotation.center.set(0,0,0);
myNode57.innerRotation.axis.set(0.0,0.0,0.0);
myNode57.innerRotation.angle.set(0.0);

/* définition du node n°58*/
const myNode58 = object.addBox();
myNode58.point1.set(-4.72595,-1.70895,-0.43595);
myNode58.point2.set(0.2709,3.0089,0.8729);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(0.0,0.0,0.0);
myNode58.innerRotation.angle.set(0.0);

/* définition du node n°59*/
const myNode59 = object.addBox();
myNode59.point1.set(-4.07095,-2.02695,-0.20895);
myNode59.point2.set(0.0889,3.3269,18.3089);
myNode59.innerRotation.center.set(0,0,0);
myNode59.innerRotation.axis.set(0.0,0.0,0.0);
myNode59.innerRotation.angle.set(0.0);

/* définition du node n°60*/
const myNode60 = object.addCylinder();
myNode60.point1.set(-4.726,-1.982,-18.0999);
myNode60.point2.set(0,0,18.5359);
myNode60.radius.set(0.273);
myNode60.innerRotation.center.set(0,0,0);
myNode60.innerRotation.axis.set(0.0,0.0,0.0);
myNode60.innerRotation.angle.set(0.0);

/* définition du node n°61*/
const myNode61 = object.addCylinder();
myNode61.point1.set(1.191,-3.045,-18.0999);
myNode61.point2.set(0,0,36.1999);
myNode61.radius.set(0.072);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(0.0,0.0,0.0);
myNode61.innerRotation.angle.set(0.0);

/* définition du node n°62*/
const myNode62 = object.addCylinder();
myNode62.point1.set(-1.191,-3.045,-18.0999);
myNode62.point2.set(0,0,36.1999);
myNode62.radius.set(0.073);
myNode62.innerRotation.center.set(0,0,0);
myNode62.innerRotation.axis.set(0.0,0.0,0.0);
myNode62.innerRotation.angle.set(0.0);

/* définition du node n°63*/
const myNode63 = object.addCylinder();
myNode63.point1.set(0,-2.527,-0.43595);
myNode63.point2.set(0,0,18.5359);
myNode63.radius.set(0.136);
myNode63.innerRotation.center.set(0,0,0);
myNode63.innerRotation.axis.set(0.0,0.0,0.0);
myNode63.innerRotation.angle.set(0.0);

/* définition du node n°64*/
const myNode64_1 = object.addFuseOperation();
myNode64_1.leftArg.set(myNode57);
myNode64_1.rightArg.set(myNode57);
const myNode64_2 = object.addFuseOperation();
myNode64_2.leftArg.set(myNode64_1);
myNode64_2.rightArg.set(myNode58);
const myNode64_3 = object.addFuseOperation();
myNode64_3.leftArg.set(myNode64_2);
myNode64_3.rightArg.set(myNode59);
const myNode64_4 = object.addFuseOperation();
myNode64_4.leftArg.set(myNode64_3);
myNode64_4.rightArg.set(myNode60);
const myNode64_5 = object.addFuseOperation();
myNode64_5.leftArg.set(myNode64_4);
myNode64_5.rightArg.set(myNode61);
const myNode64_6 = object.addFuseOperation();
myNode64_6.leftArg.set(myNode64_5);
myNode64_6.rightArg.set(myNode62);
myNode64 = object.addFuseOperation();
myNode64.leftArg.set(myNode64_6);
myNode64.rightArg.set(myNode63);

/* définition du node n°65*/
const myNode65 = object.addCutOperation();
myNode65.leftArg.set(myNode56);
myNode65.rightArg.set(myNode64);

/* définition du node n°66*/
const myNode66 = object.addBox();
myNode66.point1.set(-0.2729,2.0271,-0.4359);
myNode66.point2.set(0.5448,0.4088,0.8728);
myNode66.innerRotation.center.set(0,0,0);
myNode66.innerRotation.axis.set(0.0,0.0,0.0);
myNode66.innerRotation.angle.set(0.0);

/* définition du node n°67*/
const myNode67 = object.addCylinder();
myNode67.point1.set(0,2.527,-0.20895);
myNode67.point2.set(0,0,18.3089);
myNode67.radius.set(0.136);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(0.0,0.0,0.0);
myNode67.innerRotation.angle.set(0.0);

/* définition du node n°68*/
const myNode68 = object.addCutOperation();
myNode68.leftArg.set(myNode66);
myNode68.rightArg.set(myNode67);

/* définition du node n°69*/
const myNode69 = object.addBox();
myNode69.point1.set(-3.6859,-3.6549,-0.4359);
myNode69.point2.set(0.1498,0.2578,0.4088);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(0.0,0.0,0.0);
myNode69.innerRotation.angle.set(0.0);

/* définition du node n°70*/
const myNode70 = object.addCylinder();
myNode70.point1.set(4.727,1.98,-0.4359);
myNode70.point2.set(0,0,0.8728);
myNode70.radius.set(0.271);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(0.0,0.0,0.0);
myNode70.innerRotation.angle.set(0.0);

/* définition du node n°71*/
const myNode71 = object.addBox();
myNode71.point1.set(1.3731,2.0271,-0.4359);
myNode71.point2.set(3.0818,0.4088,0.4088);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(0.0,0.0,0.0);
myNode71.innerRotation.angle.set(0.0);

/* définition du node n°72*/
const myNode72 = object.addFuseOperation();
myNode72.leftArg.set(myNode70);
myNode72.rightArg.set(myNode71);

/* définition du node n°73*/
const myNode73 = object.addCylinder();
myNode73.point1.set(4.727,1.982,-18.0999);
myNode73.point2.set(0,0,36.1999);
myNode73.radius.set(0.136);
myNode73.innerRotation.center.set(0,0,0);
myNode73.innerRotation.axis.set(0.0,0.0,0.0);
myNode73.innerRotation.angle.set(0.0);

/* définition du node n°74*/
const myNode74 = object.addCylinder();
myNode74.point1.set(4.345,2.52,-18.0999);
myNode74.point2.set(0,0,36.1999);
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
myNode77.point1.set(3.819,3.392,-0.4359);
myNode77.point2.set(0,0,0.4088);
myNode77.radius.set(0.261);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(0.0,0.0,0.0);
myNode77.innerRotation.angle.set(0.0);

/* définition du node n°78*/
const myNode78 = object.addBox();
myNode78.point1.set(-4.4549,1.3001,-0.4359);
myNode78.point2.set(0.3828,1.1358,0.4638);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(0.0,0.0,0.0);
myNode78.innerRotation.angle.set(0.0);

/* définition du node n°79*/
const myNode79 = object.addCylinder();
myNode79.point1.set(-4.341,2.514,-18.0999);
myNode79.point2.set(0,0,36.1999);
myNode79.radius.set(0.257);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(0.0,0.0,0.0);
myNode79.innerRotation.angle.set(0.0);

/* définition du node n°80*/
const myNode80 = object.addCutOperation();
myNode80.leftArg.set(myNode78);
myNode80.rightArg.set(myNode79);

/* définition du node n°81*/
const myNode81 = object.addBox();
myNode81.point1.set(-4.4549,-2.4359,-0.4359);
myNode81.point2.set(0.3828,3.7358,0.4088);
myNode81.innerRotation.center.set(0,0,0);
myNode81.innerRotation.axis.set(0.0,0.0,0.0);
myNode81.innerRotation.angle.set(0.0);

/* définition du node n°82*/
const myNode82 = object.addCylinder();
myNode82.point1.set(-4.341,-2.514,-18.0999);
myNode82.point2.set(0,0,36.1999);
myNode82.radius.set(0.257);
myNode82.innerRotation.center.set(0,0,0);
myNode82.innerRotation.axis.set(0.0,0.0,0.0);
myNode82.innerRotation.angle.set(0.0);

/* définition du node n°83*/
const myNode83 = object.addCutOperation();
myNode83.leftArg.set(myNode81);
myNode83.rightArg.set(myNode82);

/* définition du node n°84*/
const myNode84 = object.addCylinder();
myNode84.point1.set(0.001,2.525,-0.4359);
myNode84.point2.set(0,0,0.8728);
myNode84.radius.set(0.275);
myNode84.innerRotation.center.set(0,0,0);
myNode84.innerRotation.axis.set(0.0,0.0,0.0);
myNode84.innerRotation.angle.set(0.0);

/* définition du node n°85*/
const myNode85 = object.addCylinder();
myNode85.point1.set(0,2.527,-18.0999);
myNode85.point2.set(0,0,36.1999);
myNode85.radius.set(0.136);
myNode85.innerRotation.center.set(0,0,0);
myNode85.innerRotation.axis.set(0.0,0.0,0.0);
myNode85.innerRotation.angle.set(0.0);

/* définition du node n°86*/
const myNode86 = object.addCutOperation();
myNode86.leftArg.set(myNode84);
myNode86.rightArg.set(myNode85);

/* définition du node n°87*/
const myNode87 = object.addCylinder();
myNode87.point1.set(1.088,-3.394,-0.4359);
myNode87.point2.set(0,0,0.4088);
myNode87.radius.set(0.259);
myNode87.innerRotation.center.set(0,0,0);
myNode87.innerRotation.axis.set(0.0,0.0,0.0);
myNode87.innerRotation.angle.set(0.0);

/* définition du node n°88*/
const myNode88 = object.addBox();
myNode88.point1.set(1.3731,1.7081,-0.4359);
myNode88.point2.set(3.3548,0.5458,0.8728);
myNode88.innerRotation.center.set(0,0,0);
myNode88.innerRotation.axis.set(0.0,0.0,0.0);
myNode88.innerRotation.angle.set(0.0);

/* définition du node n°89*/
const myNode89 = object.addCylinder();
myNode89.point1.set(4.727,-1.982,-0.4359);
myNode89.point2.set(0,0,0.8728);
myNode89.radius.set(0.272);
myNode89.innerRotation.center.set(0,0,0);
myNode89.innerRotation.axis.set(0.0,0.0,0.0);
myNode89.innerRotation.angle.set(0.0);

/* définition du node n°90*/
const myNode90 = object.addFuseOperation();
myNode90.leftArg.set(myNode88);
myNode90.rightArg.set(myNode89);

/* définition du node n°91*/
const myNode91 = object.addCylinder();
myNode91.point1.set(4.727,-1.982,-0.43595);
myNode91.point2.set(0,0,18.5359);
myNode91.radius.set(0.136);
myNode91.innerRotation.center.set(0,0,0);
myNode91.innerRotation.axis.set(0.0,0.0,0.0);
myNode91.innerRotation.angle.set(0.0);

/* définition du node n°92*/
const myNode92 = object.addBox();
myNode92.point1.set(-18.0999,-3.39695,-0.20895);
myNode92.point2.set(22.1719,5.4239,0.6449);
myNode92.innerRotation.center.set(0,0,0);
myNode92.innerRotation.axis.set(0.0,0.0,0.0);
myNode92.innerRotation.angle.set(0.0);

/* définition du node n°93*/
const myNode93_1 = object.addFuseOperation();
myNode93_1.leftArg.set(myNode91);
myNode93_1.rightArg.set(myNode91);
const myNode93_2 = object.addFuseOperation();
myNode93_2.leftArg.set(myNode93_1);
myNode93_2.rightArg.set(myNode73);
myNode93 = object.addFuseOperation();
myNode93.leftArg.set(myNode93_2);
myNode93.rightArg.set(myNode92);

/* définition du node n°94*/
const myNode94 = object.addCutOperation();
myNode94.leftArg.set(myNode90);
myNode94.rightArg.set(myNode93);

/* définition du node n°95*/
const myNode95 = object.addCylinder();
myNode95.point1.set(-4.726,-1.982,-0.4359);
myNode95.point2.set(0,0,0.8728);
myNode95.radius.set(0.273);
myNode95.innerRotation.center.set(0,0,0);
myNode95.innerRotation.axis.set(0.0,0.0,0.0);
myNode95.innerRotation.angle.set(0.0);

/* définition du node n°96*/
const myNode96 = object.addBox();
myNode96.point1.set(-4.0709,-3.3969,-0.4359);
myNode96.point2.set(3.5038,1.3688,0.4088);
myNode96.innerRotation.center.set(0,0,0);
myNode96.innerRotation.axis.set(0.0,0.0,0.0);
myNode96.innerRotation.angle.set(0.0);

/* définition du node n°97*/
const myNode97 = object.addCylinder();
myNode97.point1.set(-3.818,-3.393,-0.4359);
myNode97.point2.set(0,0,0.4088);
myNode97.radius.set(0.261);
myNode97.innerRotation.center.set(0,0,0);
myNode97.innerRotation.axis.set(0.0,0.0,0.0);
myNode97.innerRotation.angle.set(0.0);

/* définition du node n°98*/
const myNode98_1 = object.addFuseOperation();
myNode98_1.leftArg.set(myNode95);
myNode98_1.rightArg.set(myNode95);
const myNode98_2 = object.addFuseOperation();
myNode98_2.leftArg.set(myNode98_1);
myNode98_2.rightArg.set(myNode96);
myNode98 = object.addFuseOperation();
myNode98.leftArg.set(myNode98_2);
myNode98.rightArg.set(myNode97);

/* définition du node n°99*/
const myNode99 = object.addBox();
myNode99.point1.set(-3.53595,-3.39695,-0.43595);
myNode99.point2.set(2.9689,0.9599,18.5359);
myNode99.innerRotation.center.set(0,0,0);
myNode99.innerRotation.axis.set(0.0,0.0,0.0);
myNode99.innerRotation.angle.set(0.0);

/* définition du node n°100*/
const myNode100 = object.addCylinder();
myNode100.point1.set(-3.719,-3.046,-0.43595);
myNode100.point2.set(0,0,18.5359);
myNode100.radius.set(0.073);
myNode100.innerRotation.center.set(0,0,0);
myNode100.innerRotation.axis.set(0.0,0.0,0.0);
myNode100.innerRotation.angle.set(0.0);

/* définition du node n°101*/
const myNode101 = object.addCylinder();
myNode101.point1.set(-0.564,-2.519,-0.43595);
myNode101.point2.set(0,0,18.5359);
myNode101.radius.set(0.263);
myNode101.innerRotation.center.set(0,0,0);
myNode101.innerRotation.axis.set(0.0,0.0,0.0);
myNode101.innerRotation.angle.set(0.0);

/* définition du node n°102*/
const myNode102 = object.addCylinder();
myNode102.point1.set(-4.726,-1.981,-0.43595);
myNode102.point2.set(0,0,18.5359);
myNode102.radius.set(0.135);
myNode102.innerRotation.center.set(0,0,0);
myNode102.innerRotation.axis.set(0.0,0.0,0.0);
myNode102.innerRotation.angle.set(0.0);

/* définition du node n°103*/
const myNode103_1 = object.addFuseOperation();
myNode103_1.leftArg.set(myNode99);
myNode103_1.rightArg.set(myNode99);
const myNode103_2 = object.addFuseOperation();
myNode103_2.leftArg.set(myNode103_1);
myNode103_2.rightArg.set(myNode100);
const myNode103_3 = object.addFuseOperation();
myNode103_3.leftArg.set(myNode103_2);
myNode103_3.rightArg.set(myNode101);
myNode103 = object.addFuseOperation();
myNode103.leftArg.set(myNode103_3);
myNode103.rightArg.set(myNode102);

/* définition du node n°104*/
const myNode104 = object.addCutOperation();
myNode104.leftArg.set(myNode98);
myNode104.rightArg.set(myNode103);

/* définition du node n°105*/
const myNode105 = object.addBox();
myNode105.point1.set(0.5691,-2.4359,-0.4359);
myNode105.point2.set(0.8028,0.4088,0.4088);
myNode105.innerRotation.center.set(0,0,0);
myNode105.innerRotation.axis.set(0.0,0.0,0.0);
myNode105.innerRotation.angle.set(0.0);

/* définition du node n°106*/
const myNode106 = object.addCylinder();
myNode106.point1.set(0.573,-2.509,-18.0999);
myNode106.point2.set(0,0,18.0729);
myNode106.radius.set(0.25);
myNode106.innerRotation.center.set(0,0,0);
myNode106.innerRotation.axis.set(0.0,0.0,0.0);
myNode106.innerRotation.angle.set(0.0);

/* définition du node n°107*/
const myNode107 = object.addCutOperation();
myNode107.leftArg.set(myNode105);
myNode107.rightArg.set(myNode106);

/* définition du node n°108*/
const myNode108 = object.addBox();
myNode108.point1.set(3.3231,-2.4359,-0.4359);
myNode108.point2.set(0.7488,4.4638,0.2268);
myNode108.innerRotation.center.set(0,0,0);
myNode108.innerRotation.axis.set(0.0,0.0,0.0);
myNode108.innerRotation.angle.set(0.0);

/* définition du node n°109*/
const myNode109 = object.addBox();
myNode109.point1.set(-4.4549,1.3001,-0.4359);
myNode109.point2.set(7.7768,0.7268,0.2268);
myNode109.innerRotation.center.set(0,0,0);
myNode109.innerRotation.axis.set(0.0,0.0,0.0);
myNode109.innerRotation.angle.set(0.0);

/* définition du node n°110*/
const myNode110 = object.addBox();
myNode110.point1.set(-4.0709,2.0271,-0.4359);
myNode110.point2.set(0.5348,1.3668,0.4088);
myNode110.innerRotation.center.set(0,0,0);
myNode110.innerRotation.axis.set(0.0,0.0,0.0);
myNode110.innerRotation.angle.set(0.0);

/* définition du node n°111*/
const myNode111 = object.addCylinder();
myNode111.point1.set(-3.718,3.046,-18.0999);
myNode111.point2.set(0,0,18.0729);
myNode111.radius.set(0.072);
myNode111.innerRotation.center.set(0,0,0);
myNode111.innerRotation.axis.set(0.0,0.0,0.0);
myNode111.innerRotation.angle.set(0.0);

/* définition du node n°112*/
const myNode112 = object.addCutOperation();
myNode112.leftArg.set(myNode110);
myNode112.rightArg.set(myNode111);

/* définition du node n°113*/
const myNode113 = object.addBox();
myNode113.point1.set(0.5691,2.0271,-0.4359);
myNode113.point2.set(0.5168,1.3668,0.4088);
myNode113.innerRotation.center.set(0,0,0);
myNode113.innerRotation.axis.set(0.0,0.0,0.0);
myNode113.innerRotation.angle.set(0.0);

/* définition du node n°114*/
const myNode114 = object.addBox();
myNode114.point1.set(-3.6859,3.3841,-0.4359);
myNode114.point2.set(2.8588,0.2608,0.4088);
myNode114.innerRotation.center.set(0,0,0);
myNode114.innerRotation.axis.set(0.0,0.0,0.0);
myNode114.innerRotation.angle.set(0.0);

/* définition du node n°115*/
const myNode115 = object.addFuseOperation();
myNode115.leftArg.set(myNode113);
myNode115.rightArg.set(myNode114);

/* définition du node n°116*/
const myNode116 = object.addCylinder();
myNode116.point1.set(0.569,2.513,-18.0999);
myNode116.point2.set(0,0,18.5359);
myNode116.radius.set(0.255);
myNode116.innerRotation.center.set(0,0,0);
myNode116.innerRotation.axis.set(0.0,0.0,0.0);
myNode116.innerRotation.angle.set(0.0);

/* définition du node n°117*/
const myNode117 = object.addCutOperation();
myNode117.leftArg.set(myNode115);
myNode117.rightArg.set(myNode116);

/* définition du node n°118*/
const myNode118 = object.addBox();
myNode118.point1.set(-1.09295,2.43605,-0.43595);
myNode118.point2.set(1.9189,1.2179,0.8729);
myNode118.innerRotation.center.set(0,0,0);
myNode118.innerRotation.axis.set(0.0,0.0,0.0);
myNode118.innerRotation.angle.set(0.0);

/* définition du node n°119*/
const myNode119 = object.addBox();
myNode119.point1.set(-3.53595,2.25505,-0.43595);
myNode119.point2.set(2.1639,1.3999,0.8729);
myNode119.innerRotation.center.set(0,0,0);
myNode119.innerRotation.axis.set(0.0,0.0,0.0);
myNode119.innerRotation.angle.set(0.0);

/* définition du node n°120*/
const myNode120 = object.addFuseOperation();
myNode120.leftArg.set(myNode118);
myNode120.rightArg.set(myNode119);

/* définition du node n°121*/
const myNode121 = object.addCylinder();
myNode121.point1.set(-1.092,3.391,-0.436);
myNode121.point2.set(0,0,18.536);
myNode121.radius.set(0.263);
myNode121.innerRotation.center.set(0,0,0);
myNode121.innerRotation.axis.set(0.0,0.0,0.0);
myNode121.innerRotation.angle.set(0.0);

/* définition du node n°122*/
const myNode122 = object.addCutOperation();
myNode122.leftArg.set(myNode120);
myNode122.rightArg.set(myNode121);

/* définition du node n°123*/
const myNode123 = object.addCutOperation();
myNode123.leftArg.set(myNode117);
myNode123.rightArg.set(myNode122);

/* définition du node n°124*/
const myNode124_1 = object.addFuseOperation();
myNode124_1.leftArg.set(myNode10);
myNode124_1.rightArg.set(myNode10);
const myNode124_2 = object.addFuseOperation();
myNode124_2.leftArg.set(myNode124_1);
myNode124_2.rightArg.set(myNode11);
const myNode124_3 = object.addFuseOperation();
myNode124_3.leftArg.set(myNode124_2);
myNode124_3.rightArg.set(myNode14);
const myNode124_4 = object.addFuseOperation();
myNode124_4.leftArg.set(myNode124_3);
myNode124_4.rightArg.set(myNode19);
const myNode124_5 = object.addFuseOperation();
myNode124_5.leftArg.set(myNode124_4);
myNode124_5.rightArg.set(myNode22);
const myNode124_6 = object.addFuseOperation();
myNode124_6.leftArg.set(myNode124_5);
myNode124_6.rightArg.set(myNode23);
const myNode124_7 = object.addFuseOperation();
myNode124_7.leftArg.set(myNode124_6);
myNode124_7.rightArg.set(myNode24);
const myNode124_8 = object.addFuseOperation();
myNode124_8.leftArg.set(myNode124_7);
myNode124_8.rightArg.set(myNode25);
const myNode124_9 = object.addFuseOperation();
myNode124_9.leftArg.set(myNode124_8);
myNode124_9.rightArg.set(myNode26);
const myNode124_10 = object.addFuseOperation();
myNode124_10.leftArg.set(myNode124_9);
myNode124_10.rightArg.set(myNode39);
const myNode124_11 = object.addFuseOperation();
myNode124_11.leftArg.set(myNode124_10);
myNode124_11.rightArg.set(myNode46);
const myNode124_12 = object.addFuseOperation();
myNode124_12.leftArg.set(myNode124_11);
myNode124_12.rightArg.set(myNode65);
const myNode124_13 = object.addFuseOperation();
myNode124_13.leftArg.set(myNode124_12);
myNode124_13.rightArg.set(myNode68);
const myNode124_14 = object.addFuseOperation();
myNode124_14.leftArg.set(myNode124_13);
myNode124_14.rightArg.set(myNode69);
const myNode124_15 = object.addFuseOperation();
myNode124_15.leftArg.set(myNode124_14);
myNode124_15.rightArg.set(myNode76);
const myNode124_16 = object.addFuseOperation();
myNode124_16.leftArg.set(myNode124_15);
myNode124_16.rightArg.set(myNode77);
const myNode124_17 = object.addFuseOperation();
myNode124_17.leftArg.set(myNode124_16);
myNode124_17.rightArg.set(myNode80);
const myNode124_18 = object.addFuseOperation();
myNode124_18.leftArg.set(myNode124_17);
myNode124_18.rightArg.set(myNode83);
const myNode124_19 = object.addFuseOperation();
myNode124_19.leftArg.set(myNode124_18);
myNode124_19.rightArg.set(myNode86);
const myNode124_20 = object.addFuseOperation();
myNode124_20.leftArg.set(myNode124_19);
myNode124_20.rightArg.set(myNode87);
const myNode124_21 = object.addFuseOperation();
myNode124_21.leftArg.set(myNode124_20);
myNode124_21.rightArg.set(myNode94);
const myNode124_22 = object.addFuseOperation();
myNode124_22.leftArg.set(myNode124_21);
myNode124_22.rightArg.set(myNode104);
const myNode124_23 = object.addFuseOperation();
myNode124_23.leftArg.set(myNode124_22);
myNode124_23.rightArg.set(myNode107);
const myNode124_24 = object.addFuseOperation();
myNode124_24.leftArg.set(myNode124_23);
myNode124_24.rightArg.set(myNode108);
const myNode124_25 = object.addFuseOperation();
myNode124_25.leftArg.set(myNode124_24);
myNode124_25.rightArg.set(myNode109);
const myNode124_26 = object.addFuseOperation();
myNode124_26.leftArg.set(myNode124_25);
myNode124_26.rightArg.set(myNode112);
myNode124 = object.addFuseOperation();
myNode124.leftArg.set(myNode124_26);
myNode124.rightArg.set(myNode123);

/* définition du node n°125*/
const myNode125 = object.addCommonOperation();
myNode125.leftArg.set(myNode0);
myNode125.rightArg.set(myNode124);
/*END Geometry Object Definition*/