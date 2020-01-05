/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.8959,-5.9999,-4.0229);
myNode0.point2.set(11.7918,11.9998,8.0458);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-18.0999,1.7051,-2.2159);
myNode1.point2.set(21.0808,16.3948,0.3948);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(3.209,0,-3.35195);
myNode2.point2.set(0,0,21.4519);
myNode2.radius.set(0.113);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);

/* définition du node n°3*/
const myNode3 = object.addCutOperation();
myNode3.leftArg.set(myNode1);
myNode3.rightArg.set(myNode2);

/* définition du node n°4*/
const myNode4 = object.addBox();
myNode4.point1.set(-18.0999,-1.30695,-3.35195);
myNode4.point2.set(21.0809,19.4069,21.4519);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(-0.086,-0.007,-2.21595);
myNode5.point2.set(0,0,0.3419);
myNode5.radius.set(4.998);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);

/* définition du node n°6*/
const myNode6 = object.addFuseOperation();
myNode6.leftArg.set(myNode4);
myNode6.rightArg.set(myNode5);

/* définition du node n°7*/
const myNode7 = object.addCutOperation();
myNode7.leftArg.set(myNode3);
myNode7.rightArg.set(myNode6);

/* définition du node n°8*/
const myNode8 = object.addCylinder();
myNode8.point1.set(-2.076,-3.445,-3.3519);
myNode8.point2.set(0,0,1.1358);
myNode8.radius.set(0.453);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);

/* définition du node n°9*/
const myNode9 = object.addCylinder();
myNode9.point1.set(-2.075,-3.445,-18.0999);
myNode9.point2.set(0,0,36.1999);
myNode9.radius.set(0.113);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);

/* définition du node n°10*/
const myNode10 = object.addCutOperation();
myNode10.leftArg.set(myNode8);
myNode10.rightArg.set(myNode9);

/* définition du node n°11*/
const myNode11 = object.addBox();
myNode11.point1.set(-18.0999,1.3641,-18.0999);
myNode11.point2.set(21.0808,0.3408,15.8838);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(-2.076,-3.445,-18.0999);
myNode12.point2.set(0,0,14.7478);
myNode12.radius.set(0.453);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);

/* définition du node n°13*/
const myNode13 = object.addFuseOperation();
myNode13.leftArg.set(myNode11);
myNode13.rightArg.set(myNode12);

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(-0.086,-0.007,-3.3519);
myNode14.point2.set(0,0,21.4518);
myNode14.radius.set(4.998);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);

/* définition du node n°15*/
const myNode15 = object.addCommonOperation();
myNode15.leftArg.set(myNode13);
myNode15.rightArg.set(myNode14);

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(3.893,0.005,-3.3519);
myNode16.point2.set(0,0,1.1358);
myNode16.radius.set(0.456);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);

/* définition du node n°17*/
const myNode17 = object.addCylinder();
myNode17.point1.set(3.891,-0.001,-18.0999);
myNode17.point2.set(0,0,36.1999);
myNode17.radius.set(0.113);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);

/* définition du node n°18*/
const myNode18 = object.addCutOperation();
myNode18.leftArg.set(myNode16);
myNode18.rightArg.set(myNode17);

/* définition du node n°19*/
const myNode19 = object.addBox();
myNode19.point1.set(-18.0999,-18.0999,-3.3519);
myNode19.point2.set(36.1998,36.1998,21.4518);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(0.0,0.0,0.0);
myNode19.innerRotation.angle.set(0.0);

/* définition du node n°20*/
const myNode20 = object.addCylinder();
myNode20.point1.set(0.085,-0.007,1.82105);
myNode20.point2.set(0,0,16.2789);
myNode20.radius.set(4.198);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode20.innerRotation.angle.set(3.141592653586273);

/* définition du node n°21*/
const myNode21 = object.addCutOperation();
myNode21.leftArg.set(myNode19);
myNode21.rightArg.set(myNode20);

/* définition du node n°22*/
const myNode22 = object.addFuseOperation();
myNode22.leftArg.set(myNode18);
myNode22.rightArg.set(myNode21);

/* définition du node n°23*/
const myNode23 = object.addBox();
myNode23.point1.set(-18.0999,-18.0999,-3.35195);
myNode23.point2.set(36.1999,36.1999,21.4519);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);

/* définition du node n°24*/
const myNode24 = object.addCylinder();
myNode24.point1.set(-0.086,-0.007,-18.1);
myNode24.point2.set(0,0,16.279);
myNode24.radius.set(4.998);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);

/* définition du node n°25*/
const myNode25 = object.addCutOperation();
myNode25.leftArg.set(myNode23);
myNode25.rightArg.set(myNode24);

/* définition du node n°26*/
const myNode26 = object.addBox();
myNode26.point1.set(-18.0999,-1.30695,-3.35195);
myNode26.point2.set(21.0809,19.4069,1.5309);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);

/* définition du node n°27*/
const myNode27 = object.addFuseOperation();
myNode27.leftArg.set(myNode25);
myNode27.rightArg.set(myNode26);

/* définition du node n°28*/
const myNode28 = object.addCutOperation();
myNode28.leftArg.set(myNode22);
myNode28.rightArg.set(myNode27);

/* définition du node n°29*/
const myNode29 = object.addBox();
myNode29.point1.set(-18.0999,1.3641,-3.3519);
myNode29.point2.set(36.1998,0.3408,1.4778);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);

/* définition du node n°30*/
const myNode30 = object.addCylinder();
myNode30.point1.set(0.085,-0.007,1.8211);
myNode30.point2.set(0,0,16.2788);
myNode30.radius.set(4.198);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode30.innerRotation.angle.set(3.141592653586273);

/* définition du node n°31*/
const myNode31 = object.addCommonOperation();
myNode31.leftArg.set(myNode29);
myNode31.rightArg.set(myNode30);

/* définition du node n°32*/
const myNode32 = object.addCylinder();
myNode32.point1.set(-2.795,-1.329,-18.0999);
myNode32.point2.set(0,0,36.1998);
myNode32.radius.set(0.227);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(-1.2220390490453152,1.22204672454102,1.2008907288903108);
myNode32.innerRotation.angle.set(2.1044990323323307);

/* définition du node n°33*/
const myNode33 = object.addCylinder();
myNode33.point1.set(0.085,-0.007,-18.0999);
myNode33.point2.set(0,0,21.4518);
myNode33.radius.set(4.198);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode33.innerRotation.angle.set(3.141592653586273);

/* définition du node n°34*/
const myNode34 = object.addCylinder();
myNode34.point1.set(-1.634,1.803,-18.0999);
myNode34.point2.set(0,0,36.1999);
myNode34.radius.set(0.581);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode34.innerRotation.angle.set(2.094392392986396);

/* définition du node n°35*/
const myNode35 = object.addCutOperation();
myNode35.leftArg.set(myNode33);
myNode35.rightArg.set(myNode34);

/* définition du node n°36*/
const myNode36 = object.addBox();
myNode36.point1.set(0.25405,1.36405,-3.35195);
myNode36.point2.set(17.8459,16.7359,4.9859);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(0.0,0.0,0.0);
myNode36.innerRotation.angle.set(0.0);

/* définition du node n°37*/
const myNode37 = object.addBox();
myNode37.point1.set(-18.0999,-18.0999,-18.0999);
myNode37.point2.set(36.1999,19.4639,36.1999);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0,0.0,0.0);
myNode37.innerRotation.angle.set(0.0);

/* définition du node n°38*/
const myNode38 = object.addFuseOperation();
myNode38.leftArg.set(myNode36);
myNode38.rightArg.set(myNode37);

/* définition du node n°39*/
const myNode39 = object.addCutOperation();
myNode39.leftArg.set(myNode35);
myNode39.rightArg.set(myNode38);

/* définition du node n°40*/
const myNode40 = object.addBox();
myNode40.point1.set(0.2541,1.3641,-3.3519);
myNode40.point2.set(0.7958,0.3408,4.9858);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(0.0,0.0,0.0);
myNode40.innerRotation.angle.set(0.0);

/* définition du node n°41*/
const myNode41 = object.addCylinder();
myNode41.point1.set(-2.791,1.511,1.0231);
myNode41.point2.set(0,0,17.0768);
myNode41.radius.set(0.228);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode41.innerRotation.angle.set(2.094392392986396);

/* définition du node n°42*/
const myNode42 = object.addSphere();
myNode42.center.set(1.334,1.446,2.786);
myNode42.radius.set(0.28079992877491977);

/* définition du node n°43*/
const myNode43_1 = object.addFuseOperation();
myNode43_1.leftArg.set(myNode32);
myNode43_1.rightArg.set(myNode32);
const myNode43_2 = object.addFuseOperation();
myNode43_2.leftArg.set(myNode43_1);
myNode43_2.rightArg.set(myNode39);
const myNode43_3 = object.addFuseOperation();
myNode43_3.leftArg.set(myNode43_2);
myNode43_3.rightArg.set(myNode40);
const myNode43_4 = object.addFuseOperation();
myNode43_4.leftArg.set(myNode43_3);
myNode43_4.rightArg.set(myNode41);
myNode43 = object.addFuseOperation();
myNode43.leftArg.set(myNode43_4);
myNode43.rightArg.set(myNode42);

/* définition du node n°44*/
const myNode44 = object.addBox();
myNode44.point1.set(-1.90495,-18.0999,-1.87395);
myNode44.point2.set(0.6819,19.8049,3.5079);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(0.0,0.0,0.0);
myNode44.innerRotation.angle.set(0.0);

/* définition du node n°45*/
const myNode45 = object.addCylinder();
myNode45.point1.set(-1.639,-1.628,1.36405);
myNode45.point2.set(0,0,0.3409);
myNode45.radius.set(0.576);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode45.innerRotation.angle.set(2.094392392986396);

/* définition du node n°46*/
const myNode46 = object.addCylinder();
myNode46.point1.set(-2.218,0.091,-18.0999);
myNode46.point2.set(0,0,19.8049);
myNode46.radius.set(0.678);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode46.innerRotation.angle.set(2.094392392986396);

/* définition du node n°47*/
const myNode47 = object.addBox();
myNode47.point1.set(-18.0999,1.36405,-3.35195);
myNode47.point2.set(17.6719,16.7359,1.4779);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(0.0,0.0,0.0);
myNode47.innerRotation.angle.set(0.0);

/* définition du node n°48*/
const myNode48 = object.addBox();
myNode48.point1.set(-18.0999,-18.0999,-1.87395);
myNode48.point2.set(36.1999,36.1999,19.9739);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);

/* définition du node n°49*/
const myNode49 = object.addBox();
myNode49.point1.set(-1.905,1.023,-3.352);
myNode49.point2.set(3.637,0.682,6.705);
myNode49.innerRotation.center.set(0,0,0);
myNode49.innerRotation.axis.set(0.0,0.0,0.0);
myNode49.innerRotation.angle.set(0.0);

/* définition du node n°50*/
const myNode50 = object.addCutOperation();
myNode50.leftArg.set(myNode48);
myNode50.rightArg.set(myNode49);

/* définition du node n°51*/
const myNode51 = object.addCylinder();
myNode51.point1.set(0.517,0.105,-18.1);
myNode51.point2.set(0,0,36.1999);
myNode51.radius.set(0.453);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(-1.1963418233785224,1.2174017425887051,1.1963373516041578);
myNode51.innerRotation.angle.set(2.0843521343731517);

/* définition du node n°52*/
const myNode52 = object.addCylinder();
myNode52.point1.set(-0.74,0.087,1.36405);
myNode52.point2.set(0,0,0.3409);
myNode52.radius.set(0.567);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode52.innerRotation.angle.set(2.094392392986396);

/* définition du node n°53*/
const myNode53_1 = object.addFuseOperation();
myNode53_1.leftArg.set(myNode44);
myNode53_1.rightArg.set(myNode44);
const myNode53_2 = object.addFuseOperation();
myNode53_2.leftArg.set(myNode53_1);
myNode53_2.rightArg.set(myNode45);
const myNode53_3 = object.addFuseOperation();
myNode53_3.leftArg.set(myNode53_2);
myNode53_3.rightArg.set(myNode46);
const myNode53_4 = object.addFuseOperation();
myNode53_4.leftArg.set(myNode53_3);
myNode53_4.rightArg.set(myNode47);
const myNode53_5 = object.addFuseOperation();
myNode53_5.leftArg.set(myNode53_4);
myNode53_5.rightArg.set(myNode50);
const myNode53_6 = object.addFuseOperation();
myNode53_6.leftArg.set(myNode53_5);
myNode53_6.rightArg.set(myNode51);
myNode53 = object.addFuseOperation();
myNode53.leftArg.set(myNode53_6);
myNode53.rightArg.set(myNode52);

/* définition du node n°54*/
const myNode54 = object.addCutOperation();
myNode54.leftArg.set(myNode43);
myNode54.rightArg.set(myNode53);

/* définition du node n°55*/
const myNode55 = object.addCylinder();
myNode55.point1.set(-0.086,-0.007,-18.0999);
myNode55.point2.set(0,0,21.4518);
myNode55.radius.set(4.998);
myNode55.innerRotation.center.set(0,0,0);
myNode55.innerRotation.axis.set(0.0,0.0,0.0);
myNode55.innerRotation.angle.set(0.0);

/* définition du node n°56*/
const myNode56 = object.addCylinder();
myNode56.point1.set(-1.736,2.854,-18.0999);
myNode56.point2.set(0,0,36.1999);
myNode56.radius.set(0.113);
myNode56.innerRotation.center.set(0,0,0);
myNode56.innerRotation.axis.set(0.0,0.0,0.0);
myNode56.innerRotation.angle.set(0.0);

/* définition du node n°57*/
const myNode57 = object.addFuseOperation();
myNode57.leftArg.set(myNode51);
myNode57.rightArg.set(myNode56);

/* définition du node n°58*/
const myNode58 = object.addCutOperation();
myNode58.leftArg.set(myNode55);
myNode58.rightArg.set(myNode57);

/* définition du node n°59*/
const myNode59 = object.addBox();
myNode59.point1.set(-1.90495,1.30705,1.63405);
myNode59.point2.set(20.0049,16.7929,1.7189);
myNode59.innerRotation.center.set(0,0,0);
myNode59.innerRotation.axis.set(0.0,0.0,0.0);
myNode59.innerRotation.angle.set(0.0);

/* définition du node n°60*/
const myNode60 = object.addSphere();
myNode60.center.set(-1.507,2.063,2.785);
myNode60.radius.set(0.769);

/* définition du node n°61*/
const myNode61 = object.addCutOperation();
myNode61.leftArg.set(myNode59);
myNode61.rightArg.set(myNode60);

/* définition du node n°62*/
const myNode62 = object.addBox();
myNode62.point1.set(-18.0999,1.36405,-1.82095);
myNode62.point2.set(17.6719,16.7359,5.1739);
myNode62.innerRotation.center.set(0,0,0);
myNode62.innerRotation.axis.set(0.0,0.0,0.0);
myNode62.innerRotation.angle.set(0.0);

/* définition du node n°63*/
const myNode63 = object.addCylinder();
myNode63.point1.set(0.276,3.303,-1.22295);
myNode63.point2.set(0,0,2.9549);
myNode63.radius.set(1.598);
myNode63.innerRotation.center.set(0,0,0);
myNode63.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode63.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°64*/
const myNode64_1 = object.addFuseOperation();
myNode64_1.leftArg.set(myNode61);
myNode64_1.rightArg.set(myNode61);
const myNode64_2 = object.addFuseOperation();
myNode64_2.leftArg.set(myNode64_1);
myNode64_2.rightArg.set(myNode62);
myNode64 = object.addFuseOperation();
myNode64.leftArg.set(myNode64_2);
myNode64.rightArg.set(myNode63);

/* définition du node n°65*/
const myNode65 = object.addCutOperation();
myNode65.leftArg.set(myNode58);
myNode65.rightArg.set(myNode64);

/* définition du node n°66*/
const myNode66 = object.addBox();
myNode66.point1.set(-1.9049,1.3071,1.6341);
myNode66.point2.set(3.6368,16.7928,1.7188);
myNode66.innerRotation.center.set(0,0,0);
myNode66.innerRotation.axis.set(0.0,0.0,0.0);
myNode66.innerRotation.angle.set(0.0);

/* définition du node n°67*/
const myNode67 = object.addCylinder();
myNode67.point1.set(-2.075,3.446,-3.3519);
myNode67.point2.set(0,0,1.1358);
myNode67.radius.set(0.453);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(0.0,0.0,0.0);
myNode67.innerRotation.angle.set(0.0);

/* définition du node n°68*/
const myNode68 = object.addFuseOperation();
myNode68.leftArg.set(myNode66);
myNode68.rightArg.set(myNode67);

/* définition du node n°69*/
const myNode69 = object.addCylinder();
myNode69.point1.set(-2.074,3.444,-18.0999);
myNode69.point2.set(0,0,36.1999);
myNode69.radius.set(0.113);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(0.0,0.0,0.0);
myNode69.innerRotation.angle.set(0.0);

/* définition du node n°70*/
const myNode70 = object.addCutOperation();
myNode70.leftArg.set(myNode68);
myNode70.rightArg.set(myNode69);

/* définition du node n°71*/
const myNode71 = object.addBox();
myNode71.point1.set(-18.0999,1.3071,-3.3519);
myNode71.point2.set(36.1998,16.7928,1.5308);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(0.0,0.0,0.0);
myNode71.innerRotation.angle.set(0.0);

/* définition du node n°72*/
const myNode72 = object.addCylinder();
myNode72.point1.set(0.085,-0.007,-18.0999);
myNode72.point2.set(0,0,36.1999);
myNode72.radius.set(4.198);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode72.innerRotation.angle.set(3.141592653586273);

/* définition du node n°73*/
const myNode73 = object.addCutOperation();
myNode73.leftArg.set(myNode71);
myNode73.rightArg.set(myNode72);

/* définition du node n°74*/
const myNode74 = object.addCylinder();
myNode74.point1.set(-1.733,2.851,-3.3519);
myNode74.point2.set(0,0,2.8358);
myNode74.radius.set(0.339);
myNode74.innerRotation.center.set(0,0,0);
myNode74.innerRotation.axis.set(0.0,0.0,0.0);
myNode74.innerRotation.angle.set(0.0);

/* définition du node n°75*/
const myNode75 = object.addBox();
myNode75.point1.set(-0.4279,1.3641,-2.2159);
myNode75.point2.set(0.6818,1.9398,1.6988);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(0.0,0.0,0.0);
myNode75.innerRotation.angle.set(0.0);

/* définition du node n°76*/
const myNode76_1 = object.addFuseOperation();
myNode76_1.leftArg.set(myNode70);
myNode76_1.rightArg.set(myNode70);
const myNode76_2 = object.addFuseOperation();
myNode76_2.leftArg.set(myNode76_1);
myNode76_2.rightArg.set(myNode73);
const myNode76_3 = object.addFuseOperation();
myNode76_3.leftArg.set(myNode76_2);
myNode76_3.rightArg.set(myNode74);
myNode76 = object.addFuseOperation();
myNode76.leftArg.set(myNode76_3);
myNode76.rightArg.set(myNode75);

/* définition du node n°77*/
const myNode77 = object.addCommonOperation();
myNode77.leftArg.set(myNode65);
myNode77.rightArg.set(myNode76);

/* définition du node n°78*/
const myNode78 = object.addCylinder();
myNode78.point1.set(-1.733,-2.853,-3.3519);
myNode78.point2.set(0,0,21.4518);
myNode78.radius.set(0.34);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(0.0,0.0,0.0);
myNode78.innerRotation.angle.set(0.0);

/* définition du node n°79*/
const myNode79 = object.addFuseOperation();
myNode79.leftArg.set(myNode16);
myNode79.rightArg.set(myNode78);

/* définition du node n°80*/
const myNode80 = object.addBox();
myNode80.point1.set(-18.0999,-18.0999,-18.0999);
myNode80.point2.set(36.1998,16.7928,16.2788);
myNode80.innerRotation.center.set(0,0,0);
myNode80.innerRotation.axis.set(0.0,0.0,0.0);
myNode80.innerRotation.angle.set(0.0);

/* définition du node n°81*/
const myNode81 = object.addCommonOperation();
myNode81.leftArg.set(myNode79);
myNode81.rightArg.set(myNode80);

/* définition du node n°82*/
const myNode82 = object.addCylinder();
myNode82.point1.set(-1.735,-2.854,-3.35195);
myNode82.point2.set(0,0,1.5309);
myNode82.radius.set(0.113);
myNode82.innerRotation.center.set(0,0,0);
myNode82.innerRotation.axis.set(0.0,0.0,0.0);
myNode82.innerRotation.angle.set(0.0);

/* définition du node n°83*/
const myNode83 = object.addCutOperation();
myNode83.leftArg.set(myNode81);
myNode83.rightArg.set(myNode82);

/* définition du node n°84*/
const myNode84 = object.addCylinder();
myNode84.point1.set(3.211,0,-18.0999);
myNode84.point2.set(0,0,36.1998);
myNode84.radius.set(0.339);
myNode84.innerRotation.center.set(0,0,0);
myNode84.innerRotation.axis.set(0.0,0.0,0.0);
myNode84.innerRotation.angle.set(0.0);

/* définition du node n°85*/
const myNode85 = object.addBox();
myNode85.point1.set(2.9811,-18.0999,-3.3519);
myNode85.point2.set(15.1178,36.1998,1.5308);
myNode85.innerRotation.center.set(0,0,0);
myNode85.innerRotation.axis.set(0.0,0.0,0.0);
myNode85.innerRotation.angle.set(0.0);

/* définition du node n°86*/
const myNode86 = object.addCommonOperation();
myNode86.leftArg.set(myNode84);
myNode86.rightArg.set(myNode85);

/* définition du node n°87*/
const myNode87 = object.addCylinder();
myNode87.point1.set(3.893,0.005,-3.35195);
myNode87.point2.set(0,0,1.1359);
myNode87.radius.set(0.456);
myNode87.innerRotation.center.set(0,0,0);
myNode87.innerRotation.axis.set(0.0,0.0,0.0);
myNode87.innerRotation.angle.set(0.0);

/* définition du node n°88*/
const myNode88 = object.addFuseOperation();
myNode88.leftArg.set(myNode87);
myNode88.rightArg.set(myNode2);

/* définition du node n°89*/
const myNode89 = object.addCutOperation();
myNode89.leftArg.set(myNode86);
myNode89.rightArg.set(myNode88);

/* définition du node n°90*/
const myNode90_1 = object.addFuseOperation();
myNode90_1.leftArg.set(myNode7);
myNode90_1.rightArg.set(myNode7);
const myNode90_2 = object.addFuseOperation();
myNode90_2.leftArg.set(myNode90_1);
myNode90_2.rightArg.set(myNode10);
const myNode90_3 = object.addFuseOperation();
myNode90_3.leftArg.set(myNode90_2);
myNode90_3.rightArg.set(myNode15);
const myNode90_4 = object.addFuseOperation();
myNode90_4.leftArg.set(myNode90_3);
myNode90_4.rightArg.set(myNode28);
const myNode90_5 = object.addFuseOperation();
myNode90_5.leftArg.set(myNode90_4);
myNode90_5.rightArg.set(myNode31);
const myNode90_6 = object.addFuseOperation();
myNode90_6.leftArg.set(myNode90_5);
myNode90_6.rightArg.set(myNode54);
const myNode90_7 = object.addFuseOperation();
myNode90_7.leftArg.set(myNode90_6);
myNode90_7.rightArg.set(myNode77);
const myNode90_8 = object.addFuseOperation();
myNode90_8.leftArg.set(myNode90_7);
myNode90_8.rightArg.set(myNode83);
myNode90 = object.addFuseOperation();
myNode90.leftArg.set(myNode90_8);
myNode90.rightArg.set(myNode89);

/* définition du node n°91*/
const myNode91 = object.addCommonOperation();
myNode91.leftArg.set(myNode0);
myNode91.rightArg.set(myNode90);
/*END Geometry Object Definition*/