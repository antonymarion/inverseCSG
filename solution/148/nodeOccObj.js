/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.8029,-5.9999,-2.0659);
myNode0.point2.set(5.8039,5.9999,2.0648999999999997);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(0.0004999999999997229,0.0,-0.000500000000000167);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-4.8359,-1.7209,-1.7209);
myNode1.point2.set(4.8359,-0.9011000000000001,0.7369000000000001);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.innerTranslation.vector.set(0.0,-1.3110000000000002,-0.492);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-4.8359,-4.9999,-1.7209);
myNode2.point2.set(4.8359,-3.7851,-0.9011000000000001);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.innerTranslation.vector.set(0.0,-4.3925,-1.3110000000000002);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addBox();
myNode3.point1.set(-2.8689,-1.7209,-1.7209);
myNode3.point2.set(2.8689,4.999899999999999,1.7219);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);
myNode3.innerTranslation.vector.set(0.0,1.6394999999999997,0.0004999999999999449);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addBox();
myNode4.point1.set(-2.04895,1.23005,-0.90195);
myNode4.point2.set(2.04895,4.99995,18.09995);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.innerTranslation.vector.set(0.0,3.115,8.599);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addCutOperation();
myNode5.leftArg.set(myNode3);
myNode5.rightArg.set(myNode4);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addCylinder();
myNode6.point1.set(0.001,4.18,-18.0999);
myNode6.point2.set(0.001,4.18,0.7369999999999983);
myNode6.radius.set(0.286);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addBox();
myNode7.point1.set(-2.86895,-18.0999,1.09105);
myNode7.point2.set(2.86895,18.099999999999998,18.09995);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(-0.401426,0.0,0.0);
myNode7.innerRotation.angle.set(0.401426);
myNode7.innerTranslation.vector.set(0.0,4.9999999998107114e-05,9.595500000000001);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addFuseOperation();
myNode8.leftArg.set(myNode6);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addCutOperation();
myNode9.leftArg.set(myNode5);
myNode9.rightArg.set(myNode8);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(-4.8359,-1.7209,-0.9019);
myNode10.point2.set(-4.2931,-0.9011000000000001,1.7208999999999999);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.innerTranslation.vector.set(-4.5645,-1.3110000000000002,0.40949999999999986);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addBox();
myNode11.point1.set(-3.4449,-1.7209,-1.7209);
myNode11.point2.set(4.835899999999999,-0.9011000000000001,1.7219);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);
myNode11.innerTranslation.vector.set(0.6954999999999996,-1.3110000000000002,0.0004999999999999449);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12_1 = myNode1.clone();
myNode12_1.isVisible = false;
const myNode12_2 = object.addFuseOperation();
myNode12_2.leftArg.set(myNode12_1);
myNode12_2.rightArg.set(myNode2);
myNode12_2.isVisible = false;
const myNode12_3 = object.addFuseOperation();
myNode12_3.leftArg.set(myNode12_2);
myNode12_3.rightArg.set(myNode9);
myNode12_3.isVisible = false;
const myNode12_4 = object.addFuseOperation();
myNode12_4.leftArg.set(myNode12_3);
myNode12_4.rightArg.set(myNode10);
myNode12_4.isVisible = false;
myNode12 = object.addFuseOperation();
myNode12.leftArg.set(myNode12_4);
myNode12.rightArg.set(myNode11);
myNode12.isVisible = false;
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addCylinder();
myNode13.point1.set(-0.736,-3.869,-18.0999);
myNode13.point2.set(-0.736,-3.869,1.2299999999999969);
myNode13.radius.set(0.424);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode13.innerRotation.angle.set(2.094392392986396);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addSphere();
myNode14.center.set(0,0,0);
myNode14.radius.set(54.29990791889062);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addBox();
myNode15.point1.set(3.44505,-18.0999,1.09105);
myNode15.point2.set(4.29295,18.099999999999998,18.09995);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(-0.401426,0.0,0.0);
myNode15.innerRotation.angle.set(0.401426);
myNode15.innerTranslation.vector.set(3.869,4.9999999998107114e-05,9.595500000000001);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addCommonOperation();
myNode16.leftArg.set(myNode14);
myNode16.rightArg.set(myNode15);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(-2.04895,-0.90195,-1.72095);
myNode17.point2.set(2.04895,4.1789499999999995,18.099950000000003);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.innerTranslation.vector.set(0.0,1.6384999999999998,8.1895);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(-0.737,3.87,-1.72095);
myNode18.point2.set(-0.737,3.87,-0.90105);
myNode18.radius.set(0.422);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode18.innerRotation.angle.set(2.094392392986396);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addBox();
myNode19.point1.set(3.44505,-1.72095,0.73705);
myNode19.point2.set(4.29295,-0.90105,18.09995);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(0.0,0.0,0.0);
myNode19.innerRotation.angle.set(0.0);
myNode19.innerTranslation.vector.set(3.869,-1.311,9.4185);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20_1 = myNode13.clone();
myNode20_1.isVisible = false;
const myNode20_2 = object.addFuseOperation();
myNode20_2.leftArg.set(myNode20_1);
myNode20_2.rightArg.set(myNode16);
myNode20_2.isVisible = false;
const myNode20_3 = object.addFuseOperation();
myNode20_3.leftArg.set(myNode20_2);
myNode20_3.rightArg.set(myNode17);
myNode20_3.isVisible = false;
const myNode20_4 = object.addFuseOperation();
myNode20_4.leftArg.set(myNode20_3);
myNode20_4.rightArg.set(myNode18);
myNode20_4.isVisible = false;
myNode20 = object.addFuseOperation();
myNode20.leftArg.set(myNode20_4);
myNode20.rightArg.set(myNode19);
myNode20.isVisible = false;
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addCutOperation();
myNode21.leftArg.set(myNode12);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addBox();
myNode22.point1.set(-4.8359,-18.0999,-18.0999);
myNode22.point2.set(18.0999,18.0999,1.0908999999999978);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(-0.401426,0.0,0.0);
myNode22.innerRotation.angle.set(0.401426);
myNode22.innerTranslation.vector.set(6.632000000000001,0.0,-8.504500000000002);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addCylinder();
myNode23.point1.set(1.311,2.544,-1.72095);
myNode23.point2.set(1.311,2.544,0.73695);
myNode23.radius.set(0.29);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addCutOperation();
myNode24.leftArg.set(myNode22);
myNode24.rightArg.set(myNode23);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addCylinder();
myNode25.point1.set(-3.623,-3.36,-1.72095);
myNode25.point2.set(-3.623,-3.36,0.73695);
myNode25.radius.set(0.425);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(0.0,0.0,0.0);
myNode25.innerRotation.angle.set(0.0);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addCylinder();
myNode26.point1.set(-1.312,2.545,-1.72095);
myNode26.point2.set(-1.312,2.545,18.099950000000003);
myNode26.radius.set(0.289);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addFuseOperation();
myNode27.leftArg.set(myNode25);
myNode27.rightArg.set(myNode26);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addCutOperation();
myNode28.leftArg.set(myNode24);
myNode28.rightArg.set(myNode27);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addBox();
myNode29.point1.set(-3.4449,-3.7849,-1.7209);
myNode29.point2.set(3.4449,1.2288999999999999,-0.9011000000000001);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);
myNode29.innerTranslation.vector.set(0.0,-1.278,-1.3110000000000002);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addBox();
myNode30.point1.set(0.2871,-2.9369,-1.7209);
myNode30.point2.set(18.099899999999998,4.9999,-0.9011000000000001);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);
myNode30.innerTranslation.vector.set(9.1935,1.0314999999999999,-1.3110000000000002);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addCylinder();
myNode31.point1.set(1.311,2.868,-18.0999);
myNode31.point2.set(1.311,2.868,-0.902000000000001);
myNode31.radius.set(0.287);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(0.0,0.0,0.0);
myNode31.innerRotation.angle.set(0.0);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addCutOperation();
myNode32.leftArg.set(myNode30);
myNode32.rightArg.set(myNode31);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addBox();
myNode33.point1.set(-18.0999,-2.9369,-1.7209);
myNode33.point2.set(-0.28710000000000235,4.9999,1.7219);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);
myNode33.innerTranslation.vector.set(-9.193500000000002,1.0314999999999999,0.0004999999999999449);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34_1 = myNode29.clone();
myNode34_1.isVisible = false;
const myNode34_2 = object.addFuseOperation();
myNode34_2.leftArg.set(myNode34_1);
myNode34_2.rightArg.set(myNode32);
myNode34_2.isVisible = false;
myNode34 = object.addFuseOperation();
myNode34.leftArg.set(myNode34_2);
myNode34.rightArg.set(myNode33);
myNode34.isVisible = false;
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addCylinder();
myNode35.point1.set(3.624,-3.36,-1.72095);
myNode35.point2.set(3.624,-3.36,-0.90105);
myNode35.radius.set(0.426);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,0.0);
myNode35.innerRotation.angle.set(0.0);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addCylinder();
myNode36.point1.set(0.003,2.867,-18.0999);
myNode36.point2.set(0.003,2.867,0.7369999999999983);
myNode36.radius.set(0.898);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(0.0,0.0,0.0);
myNode36.innerRotation.angle.set(0.0);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addCylinder();
myNode37.point1.set(0.001,1.23,-18.0999);
myNode37.point2.set(0.001,1.23,1.721);
myNode37.radius.set(0.284);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0,0.0,0.0);
myNode37.innerRotation.angle.set(0.0);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addCylinder();
myNode38.point1.set(-1.312,2.866,-18.0999);
myNode38.point2.set(-1.312,2.866,-0.902000000000001);
myNode38.radius.set(0.288);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(0.0,0.0,0.0);
myNode38.innerRotation.angle.set(0.0);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39_1 = myNode35.clone();
myNode39_1.isVisible = false;
const myNode39_2 = object.addFuseOperation();
myNode39_2.leftArg.set(myNode39_1);
myNode39_2.rightArg.set(myNode36);
myNode39_2.isVisible = false;
const myNode39_3 = object.addFuseOperation();
myNode39_3.leftArg.set(myNode39_2);
myNode39_3.rightArg.set(myNode37);
myNode39_3.isVisible = false;
myNode39 = object.addFuseOperation();
myNode39.leftArg.set(myNode39_3);
myNode39.rightArg.set(myNode38);
myNode39.isVisible = false;
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addCutOperation();
myNode40.leftArg.set(myNode34);
myNode40.rightArg.set(myNode39);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41 = object.addBox();
myNode41.point1.set(-4.8359,-3.7849,-1.7209);
myNode41.point2.set(4.8359,-0.9020999999999999,-0.9011000000000001);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,0.0,0.0);
myNode41.innerRotation.angle.set(0.0);
myNode41.innerTranslation.vector.set(0.0,-2.3434999999999997,-1.3110000000000002);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addBox();
myNode42.point1.set(-2.8689,-0.9019,-1.7209);
myNode42.point2.set(2.0488999999999997,4.999899999999999,-0.9011000000000001);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0,0.0,0.0);
myNode42.innerRotation.angle.set(0.0);
myNode42.innerTranslation.vector.set(-0.41000000000000014,2.049,-1.3110000000000002);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addCylinder();
myNode43.point1.set(-0.002,2.547,-18.0999);
myNode43.point2.set(-0.002,2.547,18.099999999999998);
myNode43.radius.set(0.905);
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
const myNode45 = object.addFuseOperation();
myNode45.leftArg.set(myNode41);
myNode45.rightArg.set(myNode44);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addCommonOperation();
myNode46.leftArg.set(myNode28);
myNode46.rightArg.set(myNode40);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addFuseOperation();
myNode47.leftArg.set(myNode21);
myNode47.rightArg.set(myNode46);
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addCommonOperation();
myNode48.leftArg.set(myNode0);
myNode48.rightArg.set(myNode47);
myNode48.isVisible = true;


/*END Geometry Object Definition*/