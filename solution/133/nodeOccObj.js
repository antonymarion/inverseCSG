/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-2.3499,-1.5149,-5.9999);
myNode0.point2.set(2.3489000000000004,1.5149,5.9999);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(-0.0004999999999997229,0.0,0.0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(0.133,0.003,-18.0999);
myNode1.point2.set(0.133,0.003,2.474899999999998);
myNode1.radius.set(0.991);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode1.innerRotation.angle.set(179.9999999997983);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-1.2239,-18.0999,-18.0999);
myNode2.point2.set(-0.46609999999999996,18.0999,18.0999);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(2.35619,0.0,0.0);
myNode2.innerRotation.angle.set(134.99974273092943);
myNode2.innerTranslation.vector.set(-0.845,0.0,0.0);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addCommonOperation();
myNode3.leftArg.set(myNode1);
myNode3.rightArg.set(myNode2);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addBox();
myNode4.point1.set(-1.2239,-1.0099,-18.0999);
myNode4.point2.set(-0.46609999999999996,1.0099,18.0999);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.innerTranslation.vector.set(-0.845,0.0,0.0);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addBox();
myNode5.point1.set(-18.0999,-18.0999,-1.00995);
myNode5.point2.set(-1.6600000000000001,18.099999999999998,1.00995);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(1.5533898752620918,0.2739036602689634,-0.2739046663751339);
myNode5.innerRotation.angle.set(91.72814674472609);
myNode5.innerTranslation.vector.set(-9.879950000000001,4.9999999998107114e-05,0.0);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addCutOperation();
myNode6.leftArg.set(myNode4);
myNode6.rightArg.set(myNode5);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addFuseOperation();
myNode7.leftArg.set(myNode3);
myNode7.rightArg.set(myNode6);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addBox();
myNode8.point1.set(-18.0999,-18.0999,-18.0999);
myNode8.point2.set(18.0999,2.7418999999999976,1.0098999999999982);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(1.482193287627775,0.613942164784534,-0.6139444199241687);
myNode8.innerRotation.angle.set(98.42123636815091);
myNode8.innerTranslation.vector.set(0.0,-7.679000000000002,-8.545000000000002);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addCommonOperation();
myNode9.leftArg.set(myNode7);
myNode9.rightArg.set(myNode8);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(-0.990951,-18.0999,-18.0999);
myNode10.point2.set(18.099949000000002,18.099999999999998,1.009999999999998);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(1.5533898752620918,0.2739036602689634,-0.2739046663751339);
myNode10.innerRotation.angle.set(91.72814674472609);
myNode10.innerTranslation.vector.set(8.554499,4.9999999998107114e-05,-8.544950000000002);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addBox();
myNode11.point1.set(-1.22395,-0.63795,2.80305);
myNode11.point2.set(18.09995,0.6569499999999999,18.09995);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);
myNode11.innerTranslation.vector.set(8.437999999999999,0.009499999999999953,10.4515);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addFuseOperation();
myNode12.leftArg.set(myNode10);
myNode12.rightArg.set(myNode11);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addBox();
myNode13.point1.set(-18.0999,-18.1,-2.91094);
myNode13.point2.set(18.099999999999998,2.910899999999998,18.098959999999998);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(2.35619,0.0,0.0);
myNode13.innerRotation.angle.set(134.99974273092943);
myNode13.innerTranslation.vector.set(4.9999999998107114e-05,-7.594550000000002,7.594009999999999);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addCommonOperation();
myNode14.leftArg.set(myNode12);
myNode14.rightArg.set(myNode13);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addBox();
myNode15.point1.set(-1.65995,-18.1,-18.0999);
myNode15.point2.set(18.09995,18.099899999999998,1.009999999999998);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(1.5533898752620918,0.2739036602689634,-0.2739046663751339);
myNode15.innerRotation.angle.set(91.72814674472609);
myNode15.innerTranslation.vector.set(8.219999999999999,-5.000000000165983e-05,-8.544950000000002);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addBox();
myNode16.point1.set(-18.1,-18.1,-18.1);
myNode16.point2.set(-0.4660000000000011,18.1,2.878999999999998);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);
myNode16.innerTranslation.vector.set(-9.283000000000001,0.0,-7.610500000000002);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addCylinder();
myNode17.point1.set(0.133,0.003,-18.1);
myNode17.point2.set(0.133,0.003,2.474999999999998);
myNode17.radius.set(0.991);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode17.innerRotation.angle.set(179.9999999997983);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addFuseOperation();
myNode18.leftArg.set(myNode16);
myNode18.rightArg.set(myNode17);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addCutOperation();
myNode19.leftArg.set(myNode15);
myNode19.rightArg.set(myNode18);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addFuseOperation();
myNode20.leftArg.set(myNode14);
myNode20.rightArg.set(myNode19);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addCutOperation();
myNode21.leftArg.set(myNode9);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addBox();
myNode22.point1.set(-2.22289,-18.0999,-18.0999);
myNode22.point2.set(-1.7180900000000001,2.5158999999999985,2.5158999999999985);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(-2.207172725506897,-0.37869328791329343,-0.9142406661431877);
myNode22.innerRotation.angle.set(138.59014167037353);
myNode22.innerTranslation.vector.set(-1.97049,-7.792000000000002,-7.792000000000002);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addBox();
myNode23.point1.set(-18.0999,-1.2629,-4.9999);
myNode23.point2.set(-0.719100000000001,-0.9601,-3.9471000000000003);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);
myNode23.innerTranslation.vector.set(-9.409500000000001,-1.1115,-4.4735000000000005);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addBox();
myNode24.point1.set(-18.1,-18.1,-18.1);
myNode24.point2.set(-2.2231000000000023,2.5158999999999985,2.5158999999999985);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(-2.207172725506897,-0.37869328791329343,-0.9142406661431877);
myNode24.innerRotation.angle.set(138.59014167037353);
myNode24.innerTranslation.vector.set(-10.161550000000002,-7.7920500000000015,-7.7920500000000015);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addCutOperation();
myNode25.leftArg.set(myNode23);
myNode25.rightArg.set(myNode24);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addBox();
myNode26.point1.set(1.4531,-0.9599,-4.9999);
myNode26.point2.set(1.9579,-0.6391,-3.9471000000000003);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);
myNode26.innerTranslation.vector.set(1.7055,-0.7995,-4.4735000000000005);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addBox();
myNode27.point1.set(-2.2229,2.51607,-18.0999);
myNode27.point2.set(-1.7181000000000002,18.09987,2.5158999999999985);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(-2.207172725506897,-0.37869328791329343,-0.9142406661431877);
myNode27.innerRotation.angle.set(138.59014167037353);
myNode27.innerTranslation.vector.set(-1.9705000000000001,10.307970000000001,-7.792000000000002);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addBox();
myNode28.point1.set(-0.7189,0.9601,-18.0999);
myNode28.point2.set(0.6448999999999999,1.2629,-2.475100000000001);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(0.0,0.0,0.0);
myNode28.innerRotation.angle.set(0.0);
myNode28.innerTranslation.vector.set(-0.03700000000000003,1.1115,-10.287500000000001);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addBox();
myNode29.point1.set(-2.2229,-18.0999,2.51608);
myNode29.point2.set(18.0999,2.5158999999999985,18.09988);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(-2.207172725506897,-0.37869328791329343,-0.9142406661431877);
myNode29.innerRotation.angle.set(138.59014167037353);
myNode29.innerTranslation.vector.set(7.9385,-7.792000000000002,10.30798);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30_1 = myNode22.clone();
myNode30_1.isVisible = false;
const myNode30_2 = object.addFuseOperation();
myNode30_2.leftArg.set(myNode30_1);
myNode30_2.rightArg.set(myNode25);
myNode30_2.isVisible = false;
const myNode30_3 = object.addFuseOperation();
myNode30_3.leftArg.set(myNode30_2);
myNode30_3.rightArg.set(myNode26);
myNode30_3.isVisible = false;
const myNode30_4 = object.addFuseOperation();
myNode30_4.leftArg.set(myNode30_3);
myNode30_4.rightArg.set(myNode27);
myNode30_4.isVisible = false;
const myNode30_5 = object.addFuseOperation();
myNode30_5.leftArg.set(myNode30_4);
myNode30_5.rightArg.set(myNode28);
myNode30_5.isVisible = false;
myNode30 = object.addFuseOperation();
myNode30.leftArg.set(myNode30_5);
myNode30.rightArg.set(myNode29);
myNode30.isVisible = false;
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addBox();
myNode31.point1.set(3.3861,-2.2229,-0.9599);
myNode31.point2.set(18.0999,-1.7181000000000002,-0.6571);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(1.482193287627775,0.613942164784534,-0.6139444199241687);
myNode31.innerRotation.angle.set(98.42123636815091);
myNode31.innerTranslation.vector.set(10.743,-1.9705000000000001,-0.8085);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addBox();
myNode32.point1.set(3.3861,-2.2229,-0.3869);
myNode32.point2.set(18.0999,-1.7181000000000002,0.9599);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(1.482193287627775,0.613942164784534,-0.6139444199241687);
myNode32.innerRotation.angle.set(98.42123636815091);
myNode32.innerTranslation.vector.set(10.743,-1.9705000000000001,0.2865);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addBox();
myNode33.point1.set(0.64505,-0.63795,-18.0999);
myNode33.point2.set(18.09995,0.38795,-2.4750000000000014);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);
myNode33.innerTranslation.vector.set(9.372499999999999,-0.125,-10.287450000000002);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addCutOperation();
myNode34.leftArg.set(myNode32);
myNode34.rightArg.set(myNode33);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addBox();
myNode35.point1.set(-18.0999,-18.0999,-0.9599);
myNode35.point2.set(18.0999,-2.2231000000000023,0.9589000000000001);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(1.482193287627775,0.613942164784534,-0.6139444199241687);
myNode35.innerRotation.angle.set(98.42123636815091);
myNode35.innerTranslation.vector.set(0.0,-10.161500000000002,-0.0004999999999999449);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addBox();
myNode36.point1.set(-18.0999,-18.0999,-18.0999);
myNode36.point2.set(-2.2231000000000023,18.0999,2.5158999999999985);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(-2.207172725506897,-0.37869328791329343,-0.9142406661431877);
myNode36.innerRotation.angle.set(138.59014167037353);
myNode36.innerTranslation.vector.set(-10.161500000000002,0.0,-7.792000000000002);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addBox();
myNode37.point1.set(-0.7189,-18.0999,-4.9999);
myNode37.point2.set(0.6448999999999999,-1.2631000000000014,-3.9471000000000003);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0,0.0,0.0);
myNode37.innerRotation.angle.set(0.0);
myNode37.innerTranslation.vector.set(-0.03700000000000003,-9.681500000000002,-4.4735000000000005);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38_1 = myNode31.clone();
myNode38_1.isVisible = false;
const myNode38_2 = object.addFuseOperation();
myNode38_2.leftArg.set(myNode38_1);
myNode38_2.rightArg.set(myNode34);
myNode38_2.isVisible = false;
const myNode38_3 = object.addFuseOperation();
myNode38_3.leftArg.set(myNode38_2);
myNode38_3.rightArg.set(myNode35);
myNode38_3.isVisible = false;
const myNode38_4 = object.addFuseOperation();
myNode38_4.leftArg.set(myNode38_3);
myNode38_4.rightArg.set(myNode36);
myNode38_4.isVisible = false;
myNode38 = object.addFuseOperation();
myNode38.leftArg.set(myNode38_4);
myNode38.rightArg.set(myNode37);
myNode38.isVisible = false;
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addCommonOperation();
myNode39.leftArg.set(myNode30);
myNode39.rightArg.set(myNode38);
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addCylinder();
myNode40.point1.set(0.539,-0.001,-4.9999);
myNode40.point2.set(0.539,-0.001,-2.4751000000000003);
myNode40.radius.set(2.495);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(0.0,0.0,0.0);
myNode40.innerRotation.angle.set(0.0);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41 = object.addBox();
myNode41.point1.set(0.64505,-0.63795,-4.99995);
myNode41.point2.set(18.09995,0.6569499999999999,18.09995);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,0.0,0.0);
myNode41.innerRotation.angle.set(0.0);
myNode41.innerTranslation.vector.set(9.372499999999999,0.009499999999999953,6.550000000000001);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addCutOperation();
myNode42.leftArg.set(myNode40);
myNode42.rightArg.set(myNode41);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addBox();
myNode43.point1.set(-0.71895,0.96005,-18.0999);
myNode43.point2.set(18.09995,1.26295,-2.4750000000000014);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(0.0,0.0,0.0);
myNode43.innerRotation.angle.set(0.0);
myNode43.innerTranslation.vector.set(8.6905,1.1115,-10.287450000000002);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44 = object.addBox();
myNode44.point1.set(-2.223,-18.1,-18.1);
myNode44.point2.set(18.1,18.1,2.5159999999999982);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(-2.207172725506897,-0.37869328791329343,-0.9142406661431877);
myNode44.innerRotation.angle.set(138.59014167037353);
myNode44.innerTranslation.vector.set(7.9385,0.0,-7.792000000000002);
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45 = object.addCutOperation();
myNode45.leftArg.set(myNode43);
myNode45.rightArg.set(myNode44);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addCutOperation();
myNode46.leftArg.set(myNode42);
myNode46.rightArg.set(myNode45);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addBox();
myNode47.point1.set(-18.0999,-18.0999,-18.0999);
myNode47.point2.set(18.0999,2.5158999999999985,18.0999);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(-2.207172725506897,-0.37869328791329343,-0.9142406661431877);
myNode47.innerRotation.angle.set(138.59014167037353);
myNode47.innerTranslation.vector.set(0.0,-7.792000000000002,0.0);
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addBox();
myNode48.point1.set(-0.51695,-0.39295,-3.94695);
myNode48.point2.set(0.6449499999999999,0.38695,18.09995);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);
myNode48.innerTranslation.vector.set(0.06399999999999995,-0.0030000000000000027,7.0765);
myNode48.isVisible = false;

/* définition du node n°49*/
const myNode49 = object.addCutOperation();
myNode49.leftArg.set(myNode47);
myNode49.rightArg.set(myNode48);
myNode49.isVisible = false;

/* définition du node n°50*/
const myNode50 = object.addBox();
myNode50.point1.set(-18.0999,-18.0999,0.3931);
myNode50.point2.set(3.3858999999999995,-1.717100000000002,0.9599);
myNode50.innerRotation.center.set(0,0,0);
myNode50.innerRotation.axis.set(1.482193287627775,0.613942164784534,-0.6139444199241687);
myNode50.innerRotation.angle.set(98.42123636815091);
myNode50.innerTranslation.vector.set(-7.357000000000001,-9.908500000000002,0.6765);
myNode50.isVisible = false;

/* définition du node n°51*/
const myNode51 = object.addBox();
myNode51.point1.set(-18.0999,-0.9599,-4.9999);
myNode51.point2.set(1.9578999999999986,0.9589000000000001,-3.9471000000000003);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(0.0,0.0,0.0);
myNode51.innerRotation.angle.set(0.0);
myNode51.innerTranslation.vector.set(-8.071000000000002,-0.0004999999999999449,-4.4735000000000005);
myNode51.isVisible = false;

/* définition du node n°52*/
const myNode52_1 = myNode49.clone();
myNode52_1.isVisible = false;
const myNode52_2 = object.addFuseOperation();
myNode52_2.leftArg.set(myNode52_1);
myNode52_2.rightArg.set(myNode50);
myNode52_2.isVisible = false;
myNode52 = object.addFuseOperation();
myNode52.leftArg.set(myNode52_2);
myNode52.rightArg.set(myNode51);
myNode52.isVisible = false;
myNode52.isVisible = false;

/* définition du node n°53*/
const myNode53 = object.addBox();
myNode53.point1.set(-18.0999,-18.0999,-1.2629);
myNode53.point2.set(18.0999,-1.717100000000002,0.9589000000000001);
myNode53.innerRotation.center.set(0,0,0);
myNode53.innerRotation.axis.set(1.482193287627775,0.613942164784534,-0.6139444199241687);
myNode53.innerRotation.angle.set(98.42123636815091);
myNode53.innerTranslation.vector.set(0.0,-9.908500000000002,-0.1519999999999999);
myNode53.isVisible = false;

/* définition du node n°54*/
const myNode54 = object.addBox();
myNode54.point1.set(-18.0999,-1.2629,-3.9469);
myNode54.point2.set(0.5938999999999979,1.2619,-2.4751);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(0.0,0.0,0.0);
myNode54.innerRotation.angle.set(0.0);
myNode54.innerTranslation.vector.set(-8.753000000000002,-0.0004999999999999449,-3.211);
myNode54.isVisible = false;

/* définition du node n°55*/
const myNode55 = object.addFuseOperation();
myNode55.leftArg.set(myNode53);
myNode55.rightArg.set(myNode54);
myNode55.isVisible = false;

/* définition du node n°56*/
const myNode56 = object.addBox();
myNode56.point1.set(0.64505,-1.26295,-4.99995);
myNode56.point2.set(1.45295,0.9589500000000002,-3.94705);
myNode56.innerRotation.center.set(0,0,0);
myNode56.innerRotation.axis.set(0.0,0.0,0.0);
myNode56.innerRotation.angle.set(0.0);
myNode56.innerTranslation.vector.set(1.049,-0.1519999999999999,-4.4735000000000005);
myNode56.isVisible = false;

/* définition du node n°57*/
const myNode57 = object.addCylinder();
myNode57.point1.set(3.947,-0.001,-18.0999);
myNode57.point2.set(3.947,-0.001,1.9579999999999984);
myNode57.radius.set(0.639);
myNode57.innerRotation.center.set(0,0,0);
myNode57.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode57.innerRotation.angle.set(89.99978954125373);
myNode57.isVisible = false;

/* définition du node n°58*/
const myNode58 = object.addFuseOperation();
myNode58.leftArg.set(myNode56);
myNode58.rightArg.set(myNode57);
myNode58.isVisible = false;

/* définition du node n°59*/
const myNode59 = object.addCutOperation();
myNode59.leftArg.set(myNode55);
myNode59.rightArg.set(myNode58);
myNode59.isVisible = false;

/* définition du node n°60*/
const myNode60 = object.addBox();
myNode60.point1.set(-18.0999,-18.0999,-0.9599);
myNode60.point2.set(3.3858999999999995,-1.717100000000002,1.2619);
myNode60.innerRotation.center.set(0,0,0);
myNode60.innerRotation.axis.set(1.482193287627775,0.613942164784534,-0.6139444199241687);
myNode60.innerRotation.angle.set(98.42123636815091);
myNode60.innerTranslation.vector.set(-7.357000000000001,-9.908500000000002,0.15100000000000002);
myNode60.isVisible = false;

/* définition du node n°61*/
const myNode61 = object.addBox();
myNode61.point1.set(-0.7189,-1.2629,-4.9999);
myNode61.point2.set(0.5939,-0.9601,-2.4751000000000003);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(0.0,0.0,0.0);
myNode61.innerRotation.angle.set(0.0);
myNode61.innerTranslation.vector.set(-0.0625,-1.1115,-3.7375000000000003);
myNode61.isVisible = false;

/* définition du node n°62*/
const myNode62 = object.addFuseOperation();
myNode62.leftArg.set(myNode60);
myNode62.rightArg.set(myNode61);
myNode62.isVisible = false;

/* définition du node n°63*/
const myNode63 = object.addBox();
myNode63.point1.set(-18.1,-18.1,-0.65695);
myNode63.point2.set(3.3858999999999995,-1.717100000000002,0.6379499999999999);
myNode63.innerRotation.center.set(0,0,0);
myNode63.innerRotation.axis.set(1.482193287627775,0.613942164784534,-0.6139444199241687);
myNode63.innerRotation.angle.set(98.42123636815091);
myNode63.innerTranslation.vector.set(-7.357050000000001,-9.908550000000002,-0.009500000000000064);
myNode63.isVisible = false;

/* définition du node n°64*/
const myNode64 = object.addCutOperation();
myNode64.leftArg.set(myNode62);
myNode64.rightArg.set(myNode63);
myNode64.isVisible = false;

/* définition du node n°65*/
const myNode65 = object.addFuseOperation();
myNode65.leftArg.set(myNode59);
myNode65.rightArg.set(myNode64);
myNode65.isVisible = false;

/* définition du node n°66*/
const myNode66 = object.addCommonOperation();
myNode66.leftArg.set(myNode46);
myNode66.rightArg.set(myNode52);
myNode66.isVisible = false;

/* définition du node n°67*/
const myNode67 = object.addBox();
myNode67.point1.set(-1.6599,-18.0999,-1.0099);
myNode67.point2.set(18.099899999999998,18.0999,1.0099);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(1.5533898752620918,0.2739036602689634,-0.2739046663751339);
myNode67.innerRotation.angle.set(91.72814674472609);
myNode67.innerTranslation.vector.set(8.219999999999999,0.0,0.0);
myNode67.isVisible = false;

/* définition du node n°68*/
const myNode68 = object.addBox();
myNode68.point1.set(-18.0999,-18.0999,-3.94695);
myNode68.point2.set(-0.4660000000000011,0.657,-2.4750500000000004);
myNode68.innerRotation.center.set(0,0,0);
myNode68.innerRotation.axis.set(0.0,0.0,0.0);
myNode68.innerRotation.angle.set(0.0);
myNode68.innerTranslation.vector.set(-9.282950000000001,-8.72145,-3.2110000000000003);
myNode68.isVisible = false;

/* définition du node n°69*/
const myNode69 = object.addCutOperation();
myNode69.leftArg.set(myNode67);
myNode69.rightArg.set(myNode68);
myNode69.isVisible = false;

/* définition du node n°70*/
const myNode70 = object.addCylinder();
myNode70.point1.set(0.539,-0.001,-3.9469);
myNode70.point2.set(0.539,-0.001,-2.4751);
myNode70.radius.set(2.495);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(0.0,0.0,0.0);
myNode70.innerRotation.angle.set(0.0);
myNode70.isVisible = false;

/* définition du node n°71*/
const myNode71 = object.addCylinder();
myNode71.point1.set(3.947,-0.001,-18.0999);
myNode71.point2.set(3.947,-0.001,18.099999999999998);
myNode71.radius.set(0.639);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode71.innerRotation.angle.set(89.99978954125373);
myNode71.isVisible = false;

/* définition du node n°72*/
const myNode72 = object.addCutOperation();
myNode72.leftArg.set(myNode70);
myNode72.rightArg.set(myNode71);
myNode72.isVisible = false;

/* définition du node n°73*/
const myNode73 = object.addFuseOperation();
myNode73.leftArg.set(myNode69);
myNode73.rightArg.set(myNode72);
myNode73.isVisible = false;

/* définition du node n°74*/
const myNode74 = object.addBox();
myNode74.point1.set(-18.0999,-18.0999,-18.0999);
myNode74.point2.set(-1.6601,18.0999,-0.6571000000000033);
myNode74.innerRotation.center.set(0,0,0);
myNode74.innerRotation.axis.set(1.5533898752620918,0.2739036602689634,-0.2739046663751339);
myNode74.innerRotation.angle.set(91.72814674472609);
myNode74.innerTranslation.vector.set(-9.88,0.0,-9.378500000000003);
myNode74.isVisible = false;

/* définition du node n°75*/
const myNode75 = object.addBox();
myNode75.point1.set(-18.0999,-18.0999,-2.9109);
myNode75.point2.set(-1.2241,18.0999,18.0989);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(2.35619,0.0,0.0);
myNode75.innerRotation.angle.set(134.99974273092943);
myNode75.innerTranslation.vector.set(-9.662,0.0,7.593999999999999);
myNode75.isVisible = false;

/* définition du node n°76*/
const myNode76 = object.addCommonOperation();
myNode76.leftArg.set(myNode74);
myNode76.rightArg.set(myNode75);
myNode76.isVisible = false;

/* définition du node n°77*/
const myNode77 = object.addBox();
myNode77.point1.set(-18.0999,-1.0099,-18.0999);
myNode77.point2.set(-0.46610000000000085,1.0099,2.878899999999998);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(0.0,0.0,0.0);
myNode77.innerRotation.angle.set(0.0);
myNode77.innerTranslation.vector.set(-9.283000000000001,0.0,-7.610500000000002);
myNode77.isVisible = false;

/* définition du node n°78*/
const myNode78 = object.addCylinder();
myNode78.point1.set(0.133,0.003,-2.80295);
myNode78.point2.set(0.133,0.003,18.09995);
myNode78.radius.set(0.991);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode78.innerRotation.angle.set(179.9999999997983);
myNode78.isVisible = false;

/* définition du node n°79*/
const myNode79 = object.addCutOperation();
myNode79.leftArg.set(myNode77);
myNode79.rightArg.set(myNode78);
myNode79.isVisible = false;

/* définition du node n°80*/
const myNode80 = object.addFuseOperation();
myNode80.leftArg.set(myNode76);
myNode80.rightArg.set(myNode79);
myNode80.isVisible = false;

/* définition du node n°81*/
const myNode81 = object.addCommonOperation();
myNode81.leftArg.set(myNode73);
myNode81.rightArg.set(myNode80);
myNode81.isVisible = false;

/* définition du node n°82*/
const myNode82 = object.addBox();
myNode82.point1.set(-1.22395,-1.00995,-2.47495);
myNode82.point2.set(-0.4660500000000001,1.00995,2.87895);
myNode82.innerRotation.center.set(0,0,0);
myNode82.innerRotation.axis.set(0.0,0.0,0.0);
myNode82.innerRotation.angle.set(0.0);
myNode82.innerTranslation.vector.set(-0.8450000000000001,0.0,0.20199999999999996);
myNode82.isVisible = false;

/* définition du node n°83*/
const myNode83 = object.addCylinder();
myNode83.point1.set(0.133,0.003,3.94705);
myNode83.point2.set(0.133,0.003,18.09995);
myNode83.radius.set(0.991);
myNode83.innerRotation.center.set(0,0,0);
myNode83.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode83.innerRotation.angle.set(179.9999999997983);
myNode83.isVisible = false;

/* définition du node n°84*/
const myNode84 = object.addBox();
myNode84.point1.set(-18.0999,-18.1,-2.91094);
myNode84.point2.set(-0.4660000000000011,2.910899999999998,18.098959999999998);
myNode84.innerRotation.center.set(0,0,0);
myNode84.innerRotation.axis.set(2.35619,0.0,0.0);
myNode84.innerRotation.angle.set(134.99974273092943);
myNode84.innerTranslation.vector.set(-9.282950000000001,-7.594550000000002,7.594009999999999);
myNode84.isVisible = false;

/* définition du node n°85*/
const myNode85 = object.addCylinder();
myNode85.point1.set(0.539,-0.001,-3.947);
myNode85.point2.set(0.539,-0.001,2.8789999999999996);
myNode85.radius.set(2.495);
myNode85.innerRotation.center.set(0,0,0);
myNode85.innerRotation.axis.set(0.0,0.0,0.0);
myNode85.innerRotation.angle.set(0.0);
myNode85.isVisible = false;

/* définition du node n°86*/
const myNode86 = object.addCutOperation();
myNode86.leftArg.set(myNode84);
myNode86.rightArg.set(myNode85);
myNode86.isVisible = false;

/* définition du node n°87*/
const myNode87_1 = myNode82.clone();
myNode87_1.isVisible = false;
const myNode87_2 = object.addFuseOperation();
myNode87_2.leftArg.set(myNode87_1);
myNode87_2.rightArg.set(myNode83);
myNode87_2.isVisible = false;
myNode87 = object.addFuseOperation();
myNode87.leftArg.set(myNode87_2);
myNode87.rightArg.set(myNode86);
myNode87.isVisible = false;
myNode87.isVisible = false;

/* définition du node n°88*/
const myNode88 = object.addCutOperation();
myNode88.leftArg.set(myNode81);
myNode88.rightArg.set(myNode87);
myNode88.isVisible = false;

/* définition du node n°89*/
const myNode89_1 = myNode21.clone();
myNode89_1.isVisible = false;
const myNode89_2 = object.addFuseOperation();
myNode89_2.leftArg.set(myNode89_1);
myNode89_2.rightArg.set(myNode39);
myNode89_2.isVisible = false;
const myNode89_3 = object.addFuseOperation();
myNode89_3.leftArg.set(myNode89_2);
myNode89_3.rightArg.set(myNode66);
myNode89_3.isVisible = false;
myNode89 = object.addFuseOperation();
myNode89.leftArg.set(myNode89_3);
myNode89.rightArg.set(myNode88);
myNode89.isVisible = false;
myNode89.isVisible = false;

/* définition du node n°90*/
const myNode90 = object.addCommonOperation();
myNode90.leftArg.set(myNode0);
myNode90.rightArg.set(myNode89);
myNode90.isVisible = true;


/*END Geometry Object Definition*/