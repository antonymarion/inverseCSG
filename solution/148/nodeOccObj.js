/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.8029,-5.9999,-2.0659);
myNode0.point2.set(11.6068,11.9998,4.1308);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-4.8359,-1.7209,-0.9019);
myNode1.point2.set(0.5428,0.8198,2.6228);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-3.4449,-1.7209,-1.7209);
myNode2.point2.set(8.2808,0.8198,3.4428);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);

/* définition du node n°3*/
const myNode3 = object.addBox();
myNode3.point1.set(-2.8689,-1.7209,-1.7209);
myNode3.point2.set(5.7378,6.7208,3.4428);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);

/* définition du node n°4*/
const myNode4 = object.addBox();
myNode4.point1.set(-2.04895,1.23005,-0.90195);
myNode4.point2.set(4.0979,3.7699,19.0019);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);

/* définition du node n°5*/
const myNode5 = object.addCutOperation();
myNode5.leftArg.set(myNode3);
myNode5.rightArg.set(myNode4);

/* définition du node n°6*/
const myNode6 = object.addBox();
myNode6.point1.set(-2.86895,-18.0999,1.09105);
myNode6.point2.set(5.7379,36.1999,17.0089);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(-0.401426,0.0,0.0);
myNode6.innerRotation.angle.set(0.401426);

/* définition du node n°7*/
const myNode7 = object.addCylinder();
myNode7.point1.set(0.001,4.18,-18.0999);
myNode7.point2.set(0,0,18.8369);
myNode7.radius.set(0.286);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);

/* définition du node n°8*/
const myNode8 = object.addFuseOperation();
myNode8.leftArg.set(myNode6);
myNode8.rightArg.set(myNode7);

/* définition du node n°9*/
const myNode9 = object.addCutOperation();
myNode9.leftArg.set(myNode5);
myNode9.rightArg.set(myNode8);

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(-4.8359,-1.7209,-1.7209);
myNode10.point2.set(9.6718,0.8198,2.4578);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);

/* définition du node n°11*/
const myNode11 = object.addBox();
myNode11.point1.set(-4.8359,-4.9999,-1.7209);
myNode11.point2.set(9.6718,1.2148,0.8198);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);

/* définition du node n°12*/
const myNode12_1 = object.addFuseOperation();
myNode12_1.leftArg.set(myNode1);
myNode12_1.rightArg.set(myNode1);
const myNode12_2 = object.addFuseOperation();
myNode12_2.leftArg.set(myNode12_1);
myNode12_2.rightArg.set(myNode2);
const myNode12_3 = object.addFuseOperation();
myNode12_3.leftArg.set(myNode12_2);
myNode12_3.rightArg.set(myNode9);
const myNode12_4 = object.addFuseOperation();
myNode12_4.leftArg.set(myNode12_3);
myNode12_4.rightArg.set(myNode10);
myNode12 = object.addFuseOperation();
myNode12.leftArg.set(myNode12_4);
myNode12.rightArg.set(myNode11);

/* définition du node n°13*/
const myNode13 = object.addCylinder();
myNode13.point1.set(-0.737,3.87,-1.72095);
myNode13.point2.set(0,0,0.8199);
myNode13.radius.set(0.422);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode13.innerRotation.angle.set(2.094392392986396);

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(-0.736,-3.869,-18.0999);
myNode14.point2.set(0,0,19.3299);
myNode14.radius.set(0.424);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode14.innerRotation.angle.set(2.094392392986396);

/* définition du node n°15*/
const myNode15 = object.addBox();
myNode15.point1.set(3.44505,-1.72095,0.73705);
myNode15.point2.set(0.8479,0.8199,17.3629);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);

/* définition du node n°16*/
const myNode16 = object.addSphere();
myNode16.center.set(0,0,0);
myNode16.radius.set(54.29990791889062);

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(3.44505,-18.0999,1.09105);
myNode17.point2.set(0.8479,36.1999,17.0089);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(-0.401426,0.0,0.0);
myNode17.innerRotation.angle.set(0.401426);

/* définition du node n°18*/
const myNode18 = object.addCommonOperation();
myNode18.leftArg.set(myNode16);
myNode18.rightArg.set(myNode17);

/* définition du node n°19*/
const myNode19 = object.addBox();
myNode19.point1.set(-2.04895,-0.90195,-1.72095);
myNode19.point2.set(4.0979,5.0809,19.8209);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(0.0,0.0,0.0);
myNode19.innerRotation.angle.set(0.0);

/* définition du node n°20*/
const myNode20_1 = object.addFuseOperation();
myNode20_1.leftArg.set(myNode13);
myNode20_1.rightArg.set(myNode13);
const myNode20_2 = object.addFuseOperation();
myNode20_2.leftArg.set(myNode20_1);
myNode20_2.rightArg.set(myNode14);
const myNode20_3 = object.addFuseOperation();
myNode20_3.leftArg.set(myNode20_2);
myNode20_3.rightArg.set(myNode15);
const myNode20_4 = object.addFuseOperation();
myNode20_4.leftArg.set(myNode20_3);
myNode20_4.rightArg.set(myNode18);
myNode20 = object.addFuseOperation();
myNode20.leftArg.set(myNode20_4);
myNode20.rightArg.set(myNode19);

/* définition du node n°21*/
const myNode21 = object.addCutOperation();
myNode21.leftArg.set(myNode12);
myNode21.rightArg.set(myNode20);

/* définition du node n°22*/
const myNode22 = object.addBox();
myNode22.point1.set(-18.0999,-2.9369,-1.7209);
myNode22.point2.set(17.8128,7.9368,3.4428);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(0.0,0.0,0.0);
myNode22.innerRotation.angle.set(0.0);

/* définition du node n°23*/
const myNode23 = object.addBox();
myNode23.point1.set(0.2871,-2.9369,-1.7209);
myNode23.point2.set(17.8128,7.9368,0.8198);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);

/* définition du node n°24*/
const myNode24 = object.addCylinder();
myNode24.point1.set(1.311,2.868,-18.0999);
myNode24.point2.set(0,0,17.1979);
myNode24.radius.set(0.287);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);

/* définition du node n°25*/
const myNode25 = object.addCutOperation();
myNode25.leftArg.set(myNode23);
myNode25.rightArg.set(myNode24);

/* définition du node n°26*/
const myNode26 = object.addBox();
myNode26.point1.set(-3.4449,-3.7849,-1.7209);
myNode26.point2.set(6.8898,5.0138,0.8198);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);

/* définition du node n°27*/
const myNode27_1 = object.addFuseOperation();
myNode27_1.leftArg.set(myNode22);
myNode27_1.rightArg.set(myNode22);
const myNode27_2 = object.addFuseOperation();
myNode27_2.leftArg.set(myNode27_1);
myNode27_2.rightArg.set(myNode25);
myNode27 = object.addFuseOperation();
myNode27.leftArg.set(myNode27_2);
myNode27.rightArg.set(myNode26);

/* définition du node n°28*/
const myNode28 = object.addCylinder();
myNode28.point1.set(0.003,2.867,-18.0999);
myNode28.point2.set(0,0,18.8369);
myNode28.radius.set(0.898);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(0.0,0.0,0.0);
myNode28.innerRotation.angle.set(0.0);

/* définition du node n°29*/
const myNode29 = object.addCylinder();
myNode29.point1.set(0.001,1.23,-18.0999);
myNode29.point2.set(0,0,19.8209);
myNode29.radius.set(0.284);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);

/* définition du node n°30*/
const myNode30 = object.addCylinder();
myNode30.point1.set(-1.312,2.866,-18.0999);
myNode30.point2.set(0,0,17.1979);
myNode30.radius.set(0.288);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);

/* définition du node n°31*/
const myNode31 = object.addCylinder();
myNode31.point1.set(3.624,-3.36,-1.72095);
myNode31.point2.set(0,0,0.8199);
myNode31.radius.set(0.426);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(0.0,0.0,0.0);
myNode31.innerRotation.angle.set(0.0);

/* définition du node n°32*/
const myNode32_1 = object.addFuseOperation();
myNode32_1.leftArg.set(myNode28);
myNode32_1.rightArg.set(myNode28);
const myNode32_2 = object.addFuseOperation();
myNode32_2.leftArg.set(myNode32_1);
myNode32_2.rightArg.set(myNode29);
const myNode32_3 = object.addFuseOperation();
myNode32_3.leftArg.set(myNode32_2);
myNode32_3.rightArg.set(myNode30);
myNode32 = object.addFuseOperation();
myNode32.leftArg.set(myNode32_3);
myNode32.rightArg.set(myNode31);

/* définition du node n°33*/
const myNode33 = object.addCutOperation();
myNode33.leftArg.set(myNode27);
myNode33.rightArg.set(myNode32);

/* définition du node n°34*/
const myNode34 = object.addBox();
myNode34.point1.set(-4.8359,-18.0999,-18.0999);
myNode34.point2.set(22.9358,36.1998,19.1908);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(-0.401426,0.0,0.0);
myNode34.innerRotation.angle.set(0.401426);

/* définition du node n°35*/
const myNode35 = object.addCylinder();
myNode35.point1.set(1.311,2.544,-1.72095);
myNode35.point2.set(0,0,2.4579);
myNode35.radius.set(0.29);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,0.0);
myNode35.innerRotation.angle.set(0.0);

/* définition du node n°36*/
const myNode36 = object.addCutOperation();
myNode36.leftArg.set(myNode34);
myNode36.rightArg.set(myNode35);

/* définition du node n°37*/
const myNode37 = object.addCylinder();
myNode37.point1.set(-1.312,2.545,-1.72095);
myNode37.point2.set(0,0,19.8209);
myNode37.radius.set(0.289);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0,0.0,0.0);
myNode37.innerRotation.angle.set(0.0);

/* définition du node n°38*/
const myNode38 = object.addCylinder();
myNode38.point1.set(-3.623,-3.36,-1.72095);
myNode38.point2.set(0,0,2.4579);
myNode38.radius.set(0.425);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(0.0,0.0,0.0);
myNode38.innerRotation.angle.set(0.0);

/* définition du node n°39*/
const myNode39 = object.addFuseOperation();
myNode39.leftArg.set(myNode37);
myNode39.rightArg.set(myNode38);

/* définition du node n°40*/
const myNode40 = object.addCutOperation();
myNode40.leftArg.set(myNode36);
myNode40.rightArg.set(myNode39);

/* définition du node n°41*/
const myNode41 = object.addBox();
myNode41.point1.set(-2.8689,-0.9019,-1.7209);
myNode41.point2.set(4.9178,5.9018,0.8198);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,0.0,0.0);
myNode41.innerRotation.angle.set(0.0);

/* définition du node n°42*/
const myNode42 = object.addCylinder();
myNode42.point1.set(-0.002,2.547,-18.0999);
myNode42.point2.set(0,0,36.1999);
myNode42.radius.set(0.905);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0,0.0,0.0);
myNode42.innerRotation.angle.set(0.0);

/* définition du node n°43*/
const myNode43 = object.addCutOperation();
myNode43.leftArg.set(myNode41);
myNode43.rightArg.set(myNode42);

/* définition du node n°44*/
const myNode44 = object.addBox();
myNode44.point1.set(-4.8359,-3.7849,-1.7209);
myNode44.point2.set(9.6718,2.8828,0.8198);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(0.0,0.0,0.0);
myNode44.innerRotation.angle.set(0.0);

/* définition du node n°45*/
const myNode45 = object.addFuseOperation();
myNode45.leftArg.set(myNode43);
myNode45.rightArg.set(myNode44);

/* définition du node n°46*/
const myNode46 = object.addCommonOperation();
myNode46.leftArg.set(myNode33);
myNode46.rightArg.set(myNode40);

/* définition du node n°47*/
const myNode47 = object.addFuseOperation();
myNode47.leftArg.set(myNode21);
myNode47.rightArg.set(myNode46);

/* définition du node n°48*/
const myNode48 = object.addCommonOperation();
myNode48.leftArg.set(myNode0);
myNode48.rightArg.set(myNode47);
/*END Geometry Object Definition*/