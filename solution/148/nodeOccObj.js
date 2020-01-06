/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-4.8359,-3.7849,-1.7209);
myNode0.point2.set(4.8359,-0.9020999999999999,-0.9011000000000001);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.isVisible = False

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-2.8689,-0.9019,-1.7209);
myNode1.point2.set(2.0488999999999997,4.999899999999999,-0.9011000000000001);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.isVisible = False

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(-0.002,2.547,-18.0999);
myNode2.point2.set(-0.002,2.547,18.099999999999998);
myNode2.radius.set(0.905);
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
const myNode4 = object.addFuseOperation();
myNode4.leftArg.set(myNode0);
myNode4.rightArg.set(myNode3);
myNode4.isVisible = False

/* définition du node n°5*/
const myNode5 = object.addBox();
myNode5.point1.set(-3.4449,-3.7849,-1.7209);
myNode5.point2.set(3.4449,1.2288999999999999,-0.9011000000000001);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.isVisible = False

/* définition du node n°6*/
const myNode6 = object.addBox();
myNode6.point1.set(0.2871,-2.9369,-1.7209);
myNode6.point2.set(18.099899999999998,4.9999,-0.9011000000000001);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.isVisible = False

/* définition du node n°7*/
const myNode7 = object.addCylinder();
myNode7.point1.set(1.311,2.868,-18.0999);
myNode7.point2.set(1.311,2.868,-0.902000000000001);
myNode7.radius.set(0.287);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);
myNode7.isVisible = False

/* définition du node n°8*/
const myNode8 = object.addCutOperation();
myNode8.leftArg.set(myNode6);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = False

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(-18.0999,-2.9369,-1.7209);
myNode9.point2.set(-0.28710000000000235,4.9999,1.7219);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.isVisible = False

/* définition du node n°10*/
const myNode10_1 = object.addFuseOperation();
myNode10_1.leftArg.set(myNode5);
myNode10_1.rightArg.set(myNode5);
const myNode10_2 = object.addFuseOperation();
myNode10_2.leftArg.set(myNode10_1);
myNode10_2.rightArg.set(myNode8);
myNode10 = object.addFuseOperation();
myNode10.leftArg.set(myNode10_2);
myNode10.rightArg.set(myNode9);
myNode10.isVisible = False

/* définition du node n°11*/
const myNode11 = object.addCylinder();
myNode11.point1.set(0.003,2.867,-18.0999);
myNode11.point2.set(0.003,2.867,0.7369999999999983);
myNode11.radius.set(0.898);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);
myNode11.isVisible = False

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(3.624,-3.36,-1.72095);
myNode12.point2.set(3.624,-3.36,-0.90105);
myNode12.radius.set(0.426);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);
myNode12.isVisible = False

/* définition du node n°13*/
const myNode13 = object.addCylinder();
myNode13.point1.set(0.001,1.23,-18.0999);
myNode13.point2.set(0.001,1.23,1.721);
myNode13.radius.set(0.284);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);
myNode13.isVisible = False

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(-1.312,2.866,-18.0999);
myNode14.point2.set(-1.312,2.866,-0.902000000000001);
myNode14.radius.set(0.288);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);
myNode14.isVisible = False

/* définition du node n°15*/
const myNode15_1 = object.addFuseOperation();
myNode15_1.leftArg.set(myNode11);
myNode15_1.rightArg.set(myNode11);
const myNode15_2 = object.addFuseOperation();
myNode15_2.leftArg.set(myNode15_1);
myNode15_2.rightArg.set(myNode12);
const myNode15_3 = object.addFuseOperation();
myNode15_3.leftArg.set(myNode15_2);
myNode15_3.rightArg.set(myNode13);
myNode15 = object.addFuseOperation();
myNode15.leftArg.set(myNode15_3);
myNode15.rightArg.set(myNode14);
myNode15.isVisible = False

/* définition du node n°16*/
const myNode16 = object.addCutOperation();
myNode16.leftArg.set(myNode10);
myNode16.rightArg.set(myNode15);
myNode16.isVisible = False

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(-4.8359,-18.0999,-18.0999);
myNode17.point2.set(18.0999,18.0999,1.0908999999999978);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(-0.401426,0.0,0.0);
myNode17.innerRotation.angle.set(0.401426);
myNode17.isVisible = False

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(1.311,2.544,-1.72095);
myNode18.point2.set(1.311,2.544,0.73695);
myNode18.radius.set(0.29);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);
myNode18.isVisible = False

/* définition du node n°19*/
const myNode19 = object.addCutOperation();
myNode19.leftArg.set(myNode17);
myNode19.rightArg.set(myNode18);
myNode19.isVisible = False

/* définition du node n°20*/
const myNode20 = object.addCylinder();
myNode20.point1.set(-3.623,-3.36,-1.72095);
myNode20.point2.set(-3.623,-3.36,0.73695);
myNode20.radius.set(0.425);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);
myNode20.isVisible = False

/* définition du node n°21*/
const myNode21 = object.addCylinder();
myNode21.point1.set(-1.312,2.545,-1.72095);
myNode21.point2.set(-1.312,2.545,18.099950000000003);
myNode21.radius.set(0.289);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);
myNode21.isVisible = False

/* définition du node n°22*/
const myNode22 = object.addFuseOperation();
myNode22.leftArg.set(myNode20);
myNode22.rightArg.set(myNode21);
myNode22.isVisible = False

/* définition du node n°23*/
const myNode23 = object.addCutOperation();
myNode23.leftArg.set(myNode19);
myNode23.rightArg.set(myNode22);
myNode23.isVisible = False

/* définition du node n°24*/
const myNode24 = object.addCommonOperation();
myNode24.leftArg.set(myNode4);
myNode24.rightArg.set(myNode16);
myNode24.isVisible = False

/* définition du node n°25*/
const myNode25 = object.addBox();
myNode25.point1.set(-4.8359,-4.9999,-1.7209);
myNode25.point2.set(4.8359,-3.7851,-0.9011000000000001);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(0.0,0.0,0.0);
myNode25.innerRotation.angle.set(0.0);
myNode25.isVisible = False

/* définition du node n°26*/
const myNode26 = object.addBox();
myNode26.point1.set(-4.8359,-1.7209,-1.7209);
myNode26.point2.set(4.8359,-0.9011000000000001,0.7369000000000001);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);
myNode26.isVisible = False

/* définition du node n°27*/
const myNode27 = object.addBox();
myNode27.point1.set(-4.8359,-1.7209,-0.9019);
myNode27.point2.set(-4.2931,-0.9011000000000001,1.7208999999999999);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);
myNode27.isVisible = False

/* définition du node n°28*/
const myNode28 = object.addBox();
myNode28.point1.set(-2.8689,-1.7209,-1.7209);
myNode28.point2.set(2.8689,4.999899999999999,1.7219);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(0.0,0.0,0.0);
myNode28.innerRotation.angle.set(0.0);
myNode28.isVisible = False

/* définition du node n°29*/
const myNode29 = object.addBox();
myNode29.point1.set(-2.04895,1.23005,-0.90195);
myNode29.point2.set(2.04895,4.99995,18.09995);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);
myNode29.isVisible = False

/* définition du node n°30*/
const myNode30 = object.addCutOperation();
myNode30.leftArg.set(myNode28);
myNode30.rightArg.set(myNode29);
myNode30.isVisible = False

/* définition du node n°31*/
const myNode31 = object.addBox();
myNode31.point1.set(-2.86895,-18.0999,1.09105);
myNode31.point2.set(2.86895,18.099999999999998,18.09995);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(-0.401426,0.0,0.0);
myNode31.innerRotation.angle.set(0.401426);
myNode31.isVisible = False

/* définition du node n°32*/
const myNode32 = object.addCylinder();
myNode32.point1.set(0.001,4.18,-18.0999);
myNode32.point2.set(0.001,4.18,0.7369999999999983);
myNode32.radius.set(0.286);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);
myNode32.isVisible = False

/* définition du node n°33*/
const myNode33 = object.addFuseOperation();
myNode33.leftArg.set(myNode31);
myNode33.rightArg.set(myNode32);
myNode33.isVisible = False

/* définition du node n°34*/
const myNode34 = object.addCutOperation();
myNode34.leftArg.set(myNode30);
myNode34.rightArg.set(myNode33);
myNode34.isVisible = False

/* définition du node n°35*/
const myNode35 = object.addBox();
myNode35.point1.set(-3.4449,-1.7209,-1.7209);
myNode35.point2.set(4.835899999999999,-0.9011000000000001,1.7219);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,0.0);
myNode35.innerRotation.angle.set(0.0);
myNode35.isVisible = False

/* définition du node n°36*/
const myNode36_1 = object.addFuseOperation();
myNode36_1.leftArg.set(myNode25);
myNode36_1.rightArg.set(myNode25);
const myNode36_2 = object.addFuseOperation();
myNode36_2.leftArg.set(myNode36_1);
myNode36_2.rightArg.set(myNode26);
const myNode36_3 = object.addFuseOperation();
myNode36_3.leftArg.set(myNode36_2);
myNode36_3.rightArg.set(myNode27);
const myNode36_4 = object.addFuseOperation();
myNode36_4.leftArg.set(myNode36_3);
myNode36_4.rightArg.set(myNode34);
myNode36 = object.addFuseOperation();
myNode36.leftArg.set(myNode36_4);
myNode36.rightArg.set(myNode35);
myNode36.isVisible = False

/* définition du node n°37*/
const myNode37 = object.addBox();
myNode37.point1.set(-2.04895,-0.90195,-1.72095);
myNode37.point2.set(2.04895,4.1789499999999995,18.099950000000003);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0,0.0,0.0);
myNode37.innerRotation.angle.set(0.0);
myNode37.isVisible = False

/* définition du node n°38*/
const myNode38 = object.addCylinder();
myNode38.point1.set(-0.737,3.87,-1.72095);
myNode38.point2.set(-0.737,3.87,-0.90105);
myNode38.radius.set(0.422);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode38.innerRotation.angle.set(2.094392392986396);
myNode38.isVisible = False

/* définition du node n°39*/
const myNode39 = object.addBox();
myNode39.point1.set(3.44505,-1.72095,0.73705);
myNode39.point2.set(4.29295,-0.90105,18.09995);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(0.0,0.0,0.0);
myNode39.innerRotation.angle.set(0.0);
myNode39.isVisible = False

/* définition du node n°40*/
const myNode40 = object.addCylinder();
myNode40.point1.set(-0.736,-3.869,-18.0999);
myNode40.point2.set(-0.736,-3.869,1.2299999999999969);
myNode40.radius.set(0.424);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode40.innerRotation.angle.set(2.094392392986396);
myNode40.isVisible = False

/* définition du node n°41*/
const myNode41 = object.addBox();
myNode41.point1.set(3.44505,-18.0999,1.09105);
myNode41.point2.set(4.29295,18.099999999999998,18.09995);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(-0.401426,0.0,0.0);
myNode41.innerRotation.angle.set(0.401426);
myNode41.isVisible = False

/* définition du node n°42*/
const myNode42 = object.addSphere();
myNode42.center.set(0,0,0);
myNode42.radius.set(54.29990791889062);
myNode42.isVisible = False

/* définition du node n°43*/
const myNode43 = object.addCommonOperation();
myNode43.leftArg.set(myNode41);
myNode43.rightArg.set(myNode42);
myNode43.isVisible = False

/* définition du node n°44*/
const myNode44_1 = object.addFuseOperation();
myNode44_1.leftArg.set(myNode37);
myNode44_1.rightArg.set(myNode37);
const myNode44_2 = object.addFuseOperation();
myNode44_2.leftArg.set(myNode44_1);
myNode44_2.rightArg.set(myNode38);
const myNode44_3 = object.addFuseOperation();
myNode44_3.leftArg.set(myNode44_2);
myNode44_3.rightArg.set(myNode39);
const myNode44_4 = object.addFuseOperation();
myNode44_4.leftArg.set(myNode44_3);
myNode44_4.rightArg.set(myNode40);
myNode44 = object.addFuseOperation();
myNode44.leftArg.set(myNode44_4);
myNode44.rightArg.set(myNode43);
myNode44.isVisible = False

/* définition du node n°45*/
const myNode45 = object.addCutOperation();
myNode45.leftArg.set(myNode36);
myNode45.rightArg.set(myNode44);
myNode45.isVisible = False

/* définition du node n°46*/
const myNode46 = object.addFuseOperation();
myNode46.leftArg.set(myNode24);
myNode46.rightArg.set(myNode45);
myNode46.isVisible = False

/* définition du node n°47*/
const myNode47 = object.addBox();
myNode47.point1.set(-5.8029,-5.9999,-2.0659);
myNode47.point2.set(5.8039,5.9999,2.0648999999999997);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(0.0,0.0,0.0);
myNode47.innerRotation.angle.set(0.0);
myNode47.isVisible = False

/* définition du node n°48*/
const myNode48 = object.addCommonOperation();
myNode48.leftArg.set(myNode46);
myNode48.rightArg.set(myNode47);
myNode48.isVisible = True


/*END Geometry Object Definition*/