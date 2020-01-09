/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-2.8689,-1.7209,-1.7209);
myNode0.point2.set(2.8689,4.999899999999999,1.7219);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(0.0,1.6394999999999997,0.0004999999999999449);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-2.04895,1.23005,-0.90195);
myNode1.point2.set(2.04895,4.99995,18.09995);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.innerTranslation.vector.set(0.0,3.115,8.599);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addCutOperation();
myNode2.leftArg.set(myNode0);
myNode2.rightArg.set(myNode1);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addBox();
myNode3.point1.set(-2.86895,-18.0999,1.09105);
myNode3.point2.set(2.86895,18.099999999999998,18.09995);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(-0.401426,0.0,0.0);
myNode3.innerRotation.angle.set(23.000015586818584);
myNode3.innerTranslation.vector.set(0.0,4.9999999998107114e-05,9.595500000000001);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(0.001,4.18,-18.0999);
myNode4.point2.set(0.001,4.18,0.7369999999999983);
myNode4.radius.set(0.286);
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
myNode7.point1.set(-3.4449,-1.7209,-1.7209);
myNode7.point2.set(4.835899999999999,-0.9011000000000001,1.7219);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);
myNode7.innerTranslation.vector.set(0.6954999999999996,-1.3110000000000002,0.0004999999999999449);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addBox();
myNode8.point1.set(-4.8359,-1.7209,-0.9019);
myNode8.point2.set(-4.2931,-0.9011000000000001,1.7208999999999999);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);
myNode8.innerTranslation.vector.set(-4.5645,-1.3110000000000002,0.40949999999999986);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(-4.8359,-1.7209,-1.7209);
myNode9.point2.set(4.8359,-0.9011000000000001,0.7369000000000001);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.innerTranslation.vector.set(0.0,-1.3110000000000002,-0.492);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(-4.8359,-4.9999,-1.7209);
myNode10.point2.set(4.8359,-3.7851,-0.9011000000000001);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(0.0,0.0,0.0);
myNode10.innerRotation.angle.set(0.0);
myNode10.innerTranslation.vector.set(0.0,-4.3925,-1.3110000000000002);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11_1 = myNode6.clone();
myNode11_1.isVisible = false;
const myNode11_2 = object.addFuseOperation();
myNode11_2.leftArg.set(myNode11_1);
myNode11_2.rightArg.set(myNode7);
myNode11_2.isVisible = false;
const myNode11_3 = object.addFuseOperation();
myNode11_3.leftArg.set(myNode11_2);
myNode11_3.rightArg.set(myNode8);
myNode11_3.isVisible = false;
const myNode11_4 = object.addFuseOperation();
myNode11_4.leftArg.set(myNode11_3);
myNode11_4.rightArg.set(myNode9);
myNode11_4.isVisible = false;
myNode11 = object.addFuseOperation();
myNode11.leftArg.set(myNode11_4);
myNode11.rightArg.set(myNode10);
myNode11.isVisible = false;
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addBox();
myNode12.point1.set(-2.04895,-0.90195,-1.72095);
myNode12.point2.set(2.04895,4.1789499999999995,18.099950000000003);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(0.0,0.0,0.0);
myNode12.innerRotation.angle.set(0.0);
myNode12.innerTranslation.vector.set(0.0,1.6384999999999998,8.1895);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addCylinder();
myNode13.point1.set(-0.737,3.87,-1.72095);
myNode13.point2.set(-0.737,3.87,-0.90105);
myNode13.radius.set(0.422);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode13.innerRotation.angle.set(119.9998447624254);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addBox();
myNode14.point1.set(3.44505,-1.72095,0.73705);
myNode14.point2.set(4.29295,-0.90105,18.09995);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);
myNode14.innerTranslation.vector.set(3.869,-1.311,9.4185);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addCylinder();
myNode15.point1.set(-0.736,-3.869,-18.0999);
myNode15.point2.set(-0.736,-3.869,1.2299999999999969);
myNode15.radius.set(0.424);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode15.innerRotation.angle.set(119.9998447624254);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addBox();
myNode16.point1.set(3.44505,-18.0999,1.09105);
myNode16.point2.set(4.29295,18.099999999999998,18.09995);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(-0.401426,0.0,0.0);
myNode16.innerRotation.angle.set(23.000015586818584);
myNode16.innerTranslation.vector.set(3.869,4.9999999998107114e-05,9.595500000000001);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addSphere();
myNode17.center.set(0,0,0);
myNode17.radius.set(54.29990791889062);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addCommonOperation();
myNode18.leftArg.set(myNode16);
myNode18.rightArg.set(myNode17);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19_1 = myNode12.clone();
myNode19_1.isVisible = false;
const myNode19_2 = object.addFuseOperation();
myNode19_2.leftArg.set(myNode19_1);
myNode19_2.rightArg.set(myNode13);
myNode19_2.isVisible = false;
const myNode19_3 = object.addFuseOperation();
myNode19_3.leftArg.set(myNode19_2);
myNode19_3.rightArg.set(myNode14);
myNode19_3.isVisible = false;
const myNode19_4 = object.addFuseOperation();
myNode19_4.leftArg.set(myNode19_3);
myNode19_4.rightArg.set(myNode15);
myNode19_4.isVisible = false;
myNode19 = object.addFuseOperation();
myNode19.leftArg.set(myNode19_4);
myNode19.rightArg.set(myNode18);
myNode19.isVisible = false;
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addCutOperation();
myNode20.leftArg.set(myNode11);
myNode20.rightArg.set(myNode19);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addBox();
myNode21.point1.set(-4.8359,-3.7849,-1.7209);
myNode21.point2.set(4.8359,-0.9020999999999999,-0.9011000000000001);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);
myNode21.innerTranslation.vector.set(0.0,-2.3434999999999997,-1.3110000000000002);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addBox();
myNode22.point1.set(-2.8689,-0.9019,-1.7209);
myNode22.point2.set(2.0488999999999997,4.999899999999999,-0.9011000000000001);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(0.0,0.0,0.0);
myNode22.innerRotation.angle.set(0.0);
myNode22.innerTranslation.vector.set(-0.41000000000000014,2.049,-1.3110000000000002);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addCylinder();
myNode23.point1.set(-0.002,2.547,-18.0999);
myNode23.point2.set(-0.002,2.547,18.099999999999998);
myNode23.radius.set(0.905);
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
const myNode25 = object.addFuseOperation();
myNode25.leftArg.set(myNode21);
myNode25.rightArg.set(myNode24);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addBox();
myNode26.point1.set(-18.0999,-2.9369,-1.7209);
myNode26.point2.set(-0.28710000000000235,4.9999,1.7219);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);
myNode26.innerTranslation.vector.set(-9.193500000000002,1.0314999999999999,0.0004999999999999449);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addBox();
myNode27.point1.set(0.2871,-2.9369,-1.7209);
myNode27.point2.set(18.099899999999998,4.9999,-0.9011000000000001);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);
myNode27.innerTranslation.vector.set(9.1935,1.0314999999999999,-1.3110000000000002);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addCylinder();
myNode28.point1.set(1.311,2.868,-18.0999);
myNode28.point2.set(1.311,2.868,-0.902000000000001);
myNode28.radius.set(0.287);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(0.0,0.0,0.0);
myNode28.innerRotation.angle.set(0.0);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addCutOperation();
myNode29.leftArg.set(myNode27);
myNode29.rightArg.set(myNode28);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addBox();
myNode30.point1.set(-3.4449,-3.7849,-1.7209);
myNode30.point2.set(3.4449,1.2288999999999999,-0.9011000000000001);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);
myNode30.innerTranslation.vector.set(0.0,-1.278,-1.3110000000000002);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31_1 = myNode26.clone();
myNode31_1.isVisible = false;
const myNode31_2 = object.addFuseOperation();
myNode31_2.leftArg.set(myNode31_1);
myNode31_2.rightArg.set(myNode29);
myNode31_2.isVisible = false;
myNode31 = object.addFuseOperation();
myNode31.leftArg.set(myNode31_2);
myNode31.rightArg.set(myNode30);
myNode31.isVisible = false;
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addCylinder();
myNode32.point1.set(3.624,-3.36,-1.72095);
myNode32.point2.set(3.624,-3.36,-0.90105);
myNode32.radius.set(0.426);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addCylinder();
myNode33.point1.set(0.003,2.867,-18.0999);
myNode33.point2.set(0.003,2.867,0.7369999999999983);
myNode33.radius.set(0.898);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addCylinder();
myNode34.point1.set(0.001,1.23,-18.0999);
myNode34.point2.set(0.001,1.23,1.721);
myNode34.radius.set(0.284);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(0.0,0.0,0.0);
myNode34.innerRotation.angle.set(0.0);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addCylinder();
myNode35.point1.set(-1.312,2.866,-18.0999);
myNode35.point2.set(-1.312,2.866,-0.902000000000001);
myNode35.radius.set(0.288);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,0.0);
myNode35.innerRotation.angle.set(0.0);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36_1 = myNode32.clone();
myNode36_1.isVisible = false;
const myNode36_2 = object.addFuseOperation();
myNode36_2.leftArg.set(myNode36_1);
myNode36_2.rightArg.set(myNode33);
myNode36_2.isVisible = false;
const myNode36_3 = object.addFuseOperation();
myNode36_3.leftArg.set(myNode36_2);
myNode36_3.rightArg.set(myNode34);
myNode36_3.isVisible = false;
myNode36 = object.addFuseOperation();
myNode36.leftArg.set(myNode36_3);
myNode36.rightArg.set(myNode35);
myNode36.isVisible = false;
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addCutOperation();
myNode37.leftArg.set(myNode31);
myNode37.rightArg.set(myNode36);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addBox();
myNode38.point1.set(-4.8359,-18.0999,-18.0999);
myNode38.point2.set(18.0999,18.0999,1.0908999999999978);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(-0.401426,0.0,0.0);
myNode38.innerRotation.angle.set(23.000015586818584);
myNode38.innerTranslation.vector.set(6.632000000000001,0.0,-8.504500000000002);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addCylinder();
myNode39.point1.set(1.311,2.544,-1.72095);
myNode39.point2.set(1.311,2.544,0.73695);
myNode39.radius.set(0.29);
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
const myNode41 = object.addCylinder();
myNode41.point1.set(-3.623,-3.36,-1.72095);
myNode41.point2.set(-3.623,-3.36,0.73695);
myNode41.radius.set(0.425);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,0.0,0.0);
myNode41.innerRotation.angle.set(0.0);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addCylinder();
myNode42.point1.set(-1.312,2.545,-1.72095);
myNode42.point2.set(-1.312,2.545,18.099950000000003);
myNode42.radius.set(0.289);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0,0.0,0.0);
myNode42.innerRotation.angle.set(0.0);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addFuseOperation();
myNode43.leftArg.set(myNode41);
myNode43.rightArg.set(myNode42);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44 = object.addCutOperation();
myNode44.leftArg.set(myNode40);
myNode44.rightArg.set(myNode43);
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45 = object.addCommonOperation();
myNode45.leftArg.set(myNode25);
myNode45.rightArg.set(myNode37);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addFuseOperation();
myNode46.leftArg.set(myNode20);
myNode46.rightArg.set(myNode45);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addBox();
myNode47.point1.set(-5.8029,-5.9999,-2.0659);
myNode47.point2.set(5.8039,5.9999,2.0648999999999997);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(0.0,0.0,0.0);
myNode47.innerRotation.angle.set(0.0);
myNode47.innerTranslation.vector.set(0.0004999999999997229,0.0,-0.000500000000000167);
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addCommonOperation();
myNode48.leftArg.set(myNode46);
myNode48.rightArg.set(myNode47);
myNode48.isVisible = true;


/*END Geometry Object Definition*/