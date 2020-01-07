/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-2.3499,-1.5149,-5.9999);
myNode0.point2.set(2.3489000000000004,1.5149,5.9999);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.isVisible = False

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-18.0999,-18.0999,-0.9599);
myNode1.point2.set(18.0999,-2.2231000000000023,0.9589000000000001);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(1.482193287627775,0.613942164784534,-0.6139444199241687);
myNode1.innerRotation.angle.set(1.7177746285078193);
myNode1.isVisible = False

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-0.7189,-18.0999,-4.9999);
myNode2.point2.set(0.6448999999999999,-1.2631000000000014,-3.9471000000000003);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.isVisible = False

/* définition du node n°3*/
const myNode3 = object.addBox();
myNode3.point1.set(3.3861,-2.2229,-0.9599);
myNode3.point2.set(18.0999,-1.7181000000000002,-0.6571);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(1.482193287627775,0.613942164784534,-0.6139444199241687);
myNode3.innerRotation.angle.set(1.7177746285078193);
myNode3.isVisible = False

/* définition du node n°4*/
const myNode4 = object.addBox();
myNode4.point1.set(-18.0999,-18.0999,-18.0999);
myNode4.point2.set(-2.2231000000000023,18.0999,2.5158999999999985);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(-2.207172725506897,-0.37869328791329343,-0.9142406661431877);
myNode4.innerRotation.angle.set(2.418854282953412);
myNode4.isVisible = False

/* définition du node n°5*/
const myNode5 = object.addBox();
myNode5.point1.set(3.3861,-2.2229,-0.3869);
myNode5.point2.set(18.0999,-1.7181000000000002,0.9599);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(1.482193287627775,0.613942164784534,-0.6139444199241687);
myNode5.innerRotation.angle.set(1.7177746285078193);
myNode5.isVisible = False

/* définition du node n°6*/
const myNode6 = object.addBox();
myNode6.point1.set(0.64505,-0.63795,-18.0999);
myNode6.point2.set(18.09995,0.38795,-2.4750000000000014);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.isVisible = False

/* définition du node n°7*/
const myNode7 = object.addCutOperation();
myNode7.leftArg.set(myNode5);
myNode7.rightArg.set(myNode6);
myNode7.isVisible = False

/* définition du node n°8*/
const myNode8_1 = object.addFuseOperation();
myNode8_1.leftArg.set(myNode1);
myNode8_1.rightArg.set(myNode1);
const myNode8_2 = object.addFuseOperation();
myNode8_2.leftArg.set(myNode8_1);
myNode8_2.rightArg.set(myNode2);
const myNode8_3 = object.addFuseOperation();
myNode8_3.leftArg.set(myNode8_2);
myNode8_3.rightArg.set(myNode3);
const myNode8_4 = object.addFuseOperation();
myNode8_4.leftArg.set(myNode8_3);
myNode8_4.rightArg.set(myNode4);
myNode8 = object.addFuseOperation();
myNode8.leftArg.set(myNode8_4);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = False

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(-18.0999,-1.2629,-4.9999);
myNode9.point2.set(-0.719100000000001,-0.9601,-3.9471000000000003);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.isVisible = False

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(-18.1,-18.1,-18.1);
myNode10.point2.set(-2.2231000000000023,2.5158999999999985,2.5158999999999985);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(-2.207172725506897,-0.37869328791329343,-0.9142406661431877);
myNode10.innerRotation.angle.set(2.418854282953412);
myNode10.isVisible = False

/* définition du node n°11*/
const myNode11 = object.addCutOperation();
myNode11.leftArg.set(myNode9);
myNode11.rightArg.set(myNode10);
myNode11.isVisible = False

/* définition du node n°12*/
const myNode12 = object.addBox();
myNode12.point1.set(-2.2229,-18.0999,2.51608);
myNode12.point2.set(18.0999,2.5158999999999985,18.09988);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(-2.207172725506897,-0.37869328791329343,-0.9142406661431877);
myNode12.innerRotation.angle.set(2.418854282953412);
myNode12.isVisible = False

/* définition du node n°13*/
const myNode13 = object.addBox();
myNode13.point1.set(-0.7189,0.9601,-18.0999);
myNode13.point2.set(0.6448999999999999,1.2629,-2.475100000000001);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);
myNode13.isVisible = False

/* définition du node n°14*/
const myNode14 = object.addBox();
myNode14.point1.set(-2.2229,2.51607,-18.0999);
myNode14.point2.set(-1.7181000000000002,18.09987,2.5158999999999985);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(-2.207172725506897,-0.37869328791329343,-0.9142406661431877);
myNode14.innerRotation.angle.set(2.418854282953412);
myNode14.isVisible = False

/* définition du node n°15*/
const myNode15 = object.addBox();
myNode15.point1.set(1.4531,-0.9599,-4.9999);
myNode15.point2.set(1.9579,-0.6391,-3.9471000000000003);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);
myNode15.isVisible = False

/* définition du node n°16*/
const myNode16 = object.addBox();
myNode16.point1.set(-2.22289,-18.0999,-18.0999);
myNode16.point2.set(-1.7180900000000001,2.5158999999999985,2.5158999999999985);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(-2.207172725506897,-0.37869328791329343,-0.9142406661431877);
myNode16.innerRotation.angle.set(2.418854282953412);
myNode16.isVisible = False

/* définition du node n°17*/
const myNode17_1 = object.addFuseOperation();
myNode17_1.leftArg.set(myNode11);
myNode17_1.rightArg.set(myNode11);
const myNode17_2 = object.addFuseOperation();
myNode17_2.leftArg.set(myNode17_1);
myNode17_2.rightArg.set(myNode12);
const myNode17_3 = object.addFuseOperation();
myNode17_3.leftArg.set(myNode17_2);
myNode17_3.rightArg.set(myNode13);
const myNode17_4 = object.addFuseOperation();
myNode17_4.leftArg.set(myNode17_3);
myNode17_4.rightArg.set(myNode14);
const myNode17_5 = object.addFuseOperation();
myNode17_5.leftArg.set(myNode17_4);
myNode17_5.rightArg.set(myNode15);
myNode17 = object.addFuseOperation();
myNode17.leftArg.set(myNode17_5);
myNode17.rightArg.set(myNode16);
myNode17.isVisible = False

/* définition du node n°18*/
const myNode18 = object.addCommonOperation();
myNode18.leftArg.set(myNode8);
myNode18.rightArg.set(myNode17);
myNode18.isVisible = False

/* définition du node n°19*/
const myNode19 = object.addBox();
myNode19.point1.set(-0.7189,-1.2629,-4.9999);
myNode19.point2.set(0.5939,-0.9601,-2.4751000000000003);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(0.0,0.0,0.0);
myNode19.innerRotation.angle.set(0.0);
myNode19.isVisible = False

/* définition du node n°20*/
const myNode20 = object.addBox();
myNode20.point1.set(-18.0999,-18.0999,-0.9599);
myNode20.point2.set(3.3858999999999995,-1.717100000000002,1.2619);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(1.482193287627775,0.613942164784534,-0.6139444199241687);
myNode20.innerRotation.angle.set(1.7177746285078193);
myNode20.isVisible = False

/* définition du node n°21*/
const myNode21 = object.addFuseOperation();
myNode21.leftArg.set(myNode19);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = False

/* définition du node n°22*/
const myNode22 = object.addBox();
myNode22.point1.set(-18.1,-18.1,-0.65695);
myNode22.point2.set(3.3858999999999995,-1.717100000000002,0.6379499999999999);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(1.482193287627775,0.613942164784534,-0.6139444199241687);
myNode22.innerRotation.angle.set(1.7177746285078193);
myNode22.isVisible = False

/* définition du node n°23*/
const myNode23 = object.addCutOperation();
myNode23.leftArg.set(myNode21);
myNode23.rightArg.set(myNode22);
myNode23.isVisible = False

/* définition du node n°24*/
const myNode24 = object.addBox();
myNode24.point1.set(-18.0999,-1.2629,-3.9469);
myNode24.point2.set(0.5938999999999979,1.2619,-2.4751);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);
myNode24.isVisible = False

/* définition du node n°25*/
const myNode25 = object.addBox();
myNode25.point1.set(-18.0999,-18.0999,-1.2629);
myNode25.point2.set(18.0999,-1.717100000000002,0.9589000000000001);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(1.482193287627775,0.613942164784534,-0.6139444199241687);
myNode25.innerRotation.angle.set(1.7177746285078193);
myNode25.isVisible = False

/* définition du node n°26*/
const myNode26 = object.addFuseOperation();
myNode26.leftArg.set(myNode24);
myNode26.rightArg.set(myNode25);
myNode26.isVisible = False

/* définition du node n°27*/
const myNode27 = object.addBox();
myNode27.point1.set(0.64505,-1.26295,-4.99995);
myNode27.point2.set(1.45295,0.9589500000000002,-3.94705);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);
myNode27.isVisible = False

/* définition du node n°28*/
const myNode28 = object.addCylinder();
myNode28.point1.set(3.947,-0.001,-18.0999);
myNode28.point2.set(3.947,-0.001,1.9579999999999984);
myNode28.radius.set(0.639);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode28.innerRotation.angle.set(1.5707926535968346);
myNode28.isVisible = False

/* définition du node n°29*/
const myNode29 = object.addFuseOperation();
myNode29.leftArg.set(myNode27);
myNode29.rightArg.set(myNode28);
myNode29.isVisible = False

/* définition du node n°30*/
const myNode30 = object.addCutOperation();
myNode30.leftArg.set(myNode26);
myNode30.rightArg.set(myNode29);
myNode30.isVisible = False

/* définition du node n°31*/
const myNode31 = object.addFuseOperation();
myNode31.leftArg.set(myNode23);
myNode31.rightArg.set(myNode30);
myNode31.isVisible = False

/* définition du node n°32*/
const myNode32 = object.addBox();
myNode32.point1.set(-18.0999,-18.0999,0.3931);
myNode32.point2.set(3.3858999999999995,-1.717100000000002,0.9599);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(1.482193287627775,0.613942164784534,-0.6139444199241687);
myNode32.innerRotation.angle.set(1.7177746285078193);
myNode32.isVisible = False

/* définition du node n°33*/
const myNode33 = object.addBox();
myNode33.point1.set(-18.0999,-0.9599,-4.9999);
myNode33.point2.set(1.9578999999999986,0.9589000000000001,-3.9471000000000003);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);
myNode33.isVisible = False

/* définition du node n°34*/
const myNode34 = object.addBox();
myNode34.point1.set(-18.0999,-18.0999,-18.0999);
myNode34.point2.set(18.0999,2.5158999999999985,18.0999);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(-2.207172725506897,-0.37869328791329343,-0.9142406661431877);
myNode34.innerRotation.angle.set(2.418854282953412);
myNode34.isVisible = False

/* définition du node n°35*/
const myNode35 = object.addBox();
myNode35.point1.set(-0.51695,-0.39295,-3.94695);
myNode35.point2.set(0.6449499999999999,0.38695,18.09995);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,0.0);
myNode35.innerRotation.angle.set(0.0);
myNode35.isVisible = False

/* définition du node n°36*/
const myNode36 = object.addCutOperation();
myNode36.leftArg.set(myNode34);
myNode36.rightArg.set(myNode35);
myNode36.isVisible = False

/* définition du node n°37*/
const myNode37_1 = object.addFuseOperation();
myNode37_1.leftArg.set(myNode32);
myNode37_1.rightArg.set(myNode32);
const myNode37_2 = object.addFuseOperation();
myNode37_2.leftArg.set(myNode37_1);
myNode37_2.rightArg.set(myNode33);
myNode37 = object.addFuseOperation();
myNode37.leftArg.set(myNode37_2);
myNode37.rightArg.set(myNode36);
myNode37.isVisible = False

/* définition du node n°38*/
const myNode38 = object.addCylinder();
myNode38.point1.set(0.539,-0.001,-4.9999);
myNode38.point2.set(0.539,-0.001,-2.4751000000000003);
myNode38.radius.set(2.495);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(0.0,0.0,0.0);
myNode38.innerRotation.angle.set(0.0);
myNode38.isVisible = False

/* définition du node n°39*/
const myNode39 = object.addBox();
myNode39.point1.set(0.64505,-0.63795,-4.99995);
myNode39.point2.set(18.09995,0.6569499999999999,18.09995);
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
myNode41.point1.set(-0.71895,0.96005,-18.0999);
myNode41.point2.set(18.09995,1.26295,-2.4750000000000014);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,0.0,0.0);
myNode41.innerRotation.angle.set(0.0);
myNode41.isVisible = False

/* définition du node n°42*/
const myNode42 = object.addBox();
myNode42.point1.set(-2.223,-18.1,-18.1);
myNode42.point2.set(18.1,18.1,2.5159999999999982);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(-2.207172725506897,-0.37869328791329343,-0.9142406661431877);
myNode42.innerRotation.angle.set(2.418854282953412);
myNode42.isVisible = False

/* définition du node n°43*/
const myNode43 = object.addCutOperation();
myNode43.leftArg.set(myNode41);
myNode43.rightArg.set(myNode42);
myNode43.isVisible = False

/* définition du node n°44*/
const myNode44 = object.addCutOperation();
myNode44.leftArg.set(myNode40);
myNode44.rightArg.set(myNode43);
myNode44.isVisible = False

/* définition du node n°45*/
const myNode45 = object.addCommonOperation();
myNode45.leftArg.set(myNode31);
myNode45.rightArg.set(myNode37);
myNode45.isVisible = False

/* définition du node n°46*/
const myNode46 = object.addCylinder();
myNode46.point1.set(0.133,0.003,-18.0999);
myNode46.point2.set(0.133,0.003,2.474899999999998);
myNode46.radius.set(0.991);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode46.innerRotation.angle.set(3.141592653586273);
myNode46.isVisible = False

/* définition du node n°47*/
const myNode47 = object.addBox();
myNode47.point1.set(-1.2239,-18.0999,-18.0999);
myNode47.point2.set(-0.46609999999999996,18.0999,18.0999);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(2.35619,0.0,0.0);
myNode47.innerRotation.angle.set(2.35619);
myNode47.isVisible = False

/* définition du node n°48*/
const myNode48 = object.addCommonOperation();
myNode48.leftArg.set(myNode46);
myNode48.rightArg.set(myNode47);
myNode48.isVisible = False

/* définition du node n°49*/
const myNode49 = object.addBox();
myNode49.point1.set(-1.2239,-1.0099,-18.0999);
myNode49.point2.set(-0.46609999999999996,1.0099,18.0999);
myNode49.innerRotation.center.set(0,0,0);
myNode49.innerRotation.axis.set(0.0,0.0,0.0);
myNode49.innerRotation.angle.set(0.0);
myNode49.isVisible = False

/* définition du node n°50*/
const myNode50 = object.addBox();
myNode50.point1.set(-18.0999,-18.0999,-1.00995);
myNode50.point2.set(-1.6600000000000001,18.099999999999998,1.00995);
myNode50.innerRotation.center.set(0,0,0);
myNode50.innerRotation.axis.set(1.5533898752620918,0.2739036602689634,-0.2739046663751339);
myNode50.innerRotation.angle.set(1.6009581774479889);
myNode50.isVisible = False

/* définition du node n°51*/
const myNode51 = object.addCutOperation();
myNode51.leftArg.set(myNode49);
myNode51.rightArg.set(myNode50);
myNode51.isVisible = False

/* définition du node n°52*/
const myNode52 = object.addFuseOperation();
myNode52.leftArg.set(myNode48);
myNode52.rightArg.set(myNode51);
myNode52.isVisible = False

/* définition du node n°53*/
const myNode53 = object.addBox();
myNode53.point1.set(-18.0999,-18.0999,-18.0999);
myNode53.point2.set(18.0999,2.7418999999999976,1.0098999999999982);
myNode53.innerRotation.center.set(0,0,0);
myNode53.innerRotation.axis.set(1.482193287627775,0.613942164784534,-0.6139444199241687);
myNode53.innerRotation.angle.set(1.7177746285078193);
myNode53.isVisible = False

/* définition du node n°54*/
const myNode54 = object.addCommonOperation();
myNode54.leftArg.set(myNode52);
myNode54.rightArg.set(myNode53);
myNode54.isVisible = False

/* définition du node n°55*/
const myNode55 = object.addBox();
myNode55.point1.set(-1.65995,-18.1,-18.0999);
myNode55.point2.set(18.09995,18.099899999999998,1.009999999999998);
myNode55.innerRotation.center.set(0,0,0);
myNode55.innerRotation.axis.set(1.5533898752620918,0.2739036602689634,-0.2739046663751339);
myNode55.innerRotation.angle.set(1.6009581774479889);
myNode55.isVisible = False

/* définition du node n°56*/
const myNode56 = object.addCylinder();
myNode56.point1.set(0.133,0.003,-18.1);
myNode56.point2.set(0.133,0.003,2.474999999999998);
myNode56.radius.set(0.991);
myNode56.innerRotation.center.set(0,0,0);
myNode56.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode56.innerRotation.angle.set(3.141592653586273);
myNode56.isVisible = False

/* définition du node n°57*/
const myNode57 = object.addBox();
myNode57.point1.set(-18.1,-18.1,-18.1);
myNode57.point2.set(-0.4660000000000011,18.1,2.878999999999998);
myNode57.innerRotation.center.set(0,0,0);
myNode57.innerRotation.axis.set(0.0,0.0,0.0);
myNode57.innerRotation.angle.set(0.0);
myNode57.isVisible = False

/* définition du node n°58*/
const myNode58 = object.addFuseOperation();
myNode58.leftArg.set(myNode56);
myNode58.rightArg.set(myNode57);
myNode58.isVisible = False

/* définition du node n°59*/
const myNode59 = object.addCutOperation();
myNode59.leftArg.set(myNode55);
myNode59.rightArg.set(myNode58);
myNode59.isVisible = False

/* définition du node n°60*/
const myNode60 = object.addBox();
myNode60.point1.set(-18.0999,-18.1,-2.91094);
myNode60.point2.set(18.099999999999998,2.910899999999998,18.098959999999998);
myNode60.innerRotation.center.set(0,0,0);
myNode60.innerRotation.axis.set(2.35619,0.0,0.0);
myNode60.innerRotation.angle.set(2.35619);
myNode60.isVisible = False

/* définition du node n°61*/
const myNode61 = object.addBox();
myNode61.point1.set(-0.990951,-18.0999,-18.0999);
myNode61.point2.set(18.099949000000002,18.099999999999998,1.009999999999998);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(1.5533898752620918,0.2739036602689634,-0.2739046663751339);
myNode61.innerRotation.angle.set(1.6009581774479889);
myNode61.isVisible = False

/* définition du node n°62*/
const myNode62 = object.addBox();
myNode62.point1.set(-1.22395,-0.63795,2.80305);
myNode62.point2.set(18.09995,0.6569499999999999,18.09995);
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
const myNode64 = object.addCommonOperation();
myNode64.leftArg.set(myNode60);
myNode64.rightArg.set(myNode63);
myNode64.isVisible = False

/* définition du node n°65*/
const myNode65 = object.addFuseOperation();
myNode65.leftArg.set(myNode59);
myNode65.rightArg.set(myNode64);
myNode65.isVisible = False

/* définition du node n°66*/
const myNode66 = object.addCutOperation();
myNode66.leftArg.set(myNode54);
myNode66.rightArg.set(myNode65);
myNode66.isVisible = False

/* définition du node n°67*/
const myNode67 = object.addBox();
myNode67.point1.set(-18.0999,-18.0999,-18.0999);
myNode67.point2.set(-1.6601,18.0999,-0.6571000000000033);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(1.5533898752620918,0.2739036602689634,-0.2739046663751339);
myNode67.innerRotation.angle.set(1.6009581774479889);
myNode67.isVisible = False

/* définition du node n°68*/
const myNode68 = object.addBox();
myNode68.point1.set(-18.0999,-18.0999,-2.9109);
myNode68.point2.set(-1.2241,18.0999,18.0989);
myNode68.innerRotation.center.set(0,0,0);
myNode68.innerRotation.axis.set(2.35619,0.0,0.0);
myNode68.innerRotation.angle.set(2.35619);
myNode68.isVisible = False

/* définition du node n°69*/
const myNode69 = object.addCommonOperation();
myNode69.leftArg.set(myNode67);
myNode69.rightArg.set(myNode68);
myNode69.isVisible = False

/* définition du node n°70*/
const myNode70 = object.addBox();
myNode70.point1.set(-18.0999,-1.0099,-18.0999);
myNode70.point2.set(-0.46610000000000085,1.0099,2.878899999999998);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(0.0,0.0,0.0);
myNode70.innerRotation.angle.set(0.0);
myNode70.isVisible = False

/* définition du node n°71*/
const myNode71 = object.addCylinder();
myNode71.point1.set(0.133,0.003,-2.80295);
myNode71.point2.set(0.133,0.003,18.09995);
myNode71.radius.set(0.991);
myNode71.innerRotation.center.set(0,0,0);
myNode71.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode71.innerRotation.angle.set(3.141592653586273);
myNode71.isVisible = False

/* définition du node n°72*/
const myNode72 = object.addCutOperation();
myNode72.leftArg.set(myNode70);
myNode72.rightArg.set(myNode71);
myNode72.isVisible = False

/* définition du node n°73*/
const myNode73 = object.addFuseOperation();
myNode73.leftArg.set(myNode69);
myNode73.rightArg.set(myNode72);
myNode73.isVisible = False

/* définition du node n°74*/
const myNode74 = object.addCylinder();
myNode74.point1.set(0.539,-0.001,-3.9469);
myNode74.point2.set(0.539,-0.001,-2.4751);
myNode74.radius.set(2.495);
myNode74.innerRotation.center.set(0,0,0);
myNode74.innerRotation.axis.set(0.0,0.0,0.0);
myNode74.innerRotation.angle.set(0.0);
myNode74.isVisible = False

/* définition du node n°75*/
const myNode75 = object.addCylinder();
myNode75.point1.set(3.947,-0.001,-18.0999);
myNode75.point2.set(3.947,-0.001,18.099999999999998);
myNode75.radius.set(0.639);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode75.innerRotation.angle.set(1.5707926535968346);
myNode75.isVisible = False

/* définition du node n°76*/
const myNode76 = object.addCutOperation();
myNode76.leftArg.set(myNode74);
myNode76.rightArg.set(myNode75);
myNode76.isVisible = False

/* définition du node n°77*/
const myNode77 = object.addBox();
myNode77.point1.set(-1.6599,-18.0999,-1.0099);
myNode77.point2.set(18.099899999999998,18.0999,1.0099);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(1.5533898752620918,0.2739036602689634,-0.2739046663751339);
myNode77.innerRotation.angle.set(1.6009581774479889);
myNode77.isVisible = False

/* définition du node n°78*/
const myNode78 = object.addBox();
myNode78.point1.set(-18.0999,-18.0999,-3.94695);
myNode78.point2.set(-0.4660000000000011,0.657,-2.4750500000000004);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(0.0,0.0,0.0);
myNode78.innerRotation.angle.set(0.0);
myNode78.isVisible = False

/* définition du node n°79*/
const myNode79 = object.addCutOperation();
myNode79.leftArg.set(myNode77);
myNode79.rightArg.set(myNode78);
myNode79.isVisible = False

/* définition du node n°80*/
const myNode80 = object.addFuseOperation();
myNode80.leftArg.set(myNode76);
myNode80.rightArg.set(myNode79);
myNode80.isVisible = False

/* définition du node n°81*/
const myNode81 = object.addCommonOperation();
myNode81.leftArg.set(myNode73);
myNode81.rightArg.set(myNode80);
myNode81.isVisible = False

/* définition du node n°82*/
const myNode82 = object.addCylinder();
myNode82.point1.set(0.133,0.003,3.94705);
myNode82.point2.set(0.133,0.003,18.09995);
myNode82.radius.set(0.991);
myNode82.innerRotation.center.set(0,0,0);
myNode82.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode82.innerRotation.angle.set(3.141592653586273);
myNode82.isVisible = False

/* définition du node n°83*/
const myNode83 = object.addBox();
myNode83.point1.set(-1.22395,-1.00995,-2.47495);
myNode83.point2.set(-0.4660500000000001,1.00995,2.87895);
myNode83.innerRotation.center.set(0,0,0);
myNode83.innerRotation.axis.set(0.0,0.0,0.0);
myNode83.innerRotation.angle.set(0.0);
myNode83.isVisible = False

/* définition du node n°84*/
const myNode84 = object.addBox();
myNode84.point1.set(-18.0999,-18.1,-2.91094);
myNode84.point2.set(-0.4660000000000011,2.910899999999998,18.098959999999998);
myNode84.innerRotation.center.set(0,0,0);
myNode84.innerRotation.axis.set(2.35619,0.0,0.0);
myNode84.innerRotation.angle.set(2.35619);
myNode84.isVisible = False

/* définition du node n°85*/
const myNode85 = object.addCylinder();
myNode85.point1.set(0.539,-0.001,-3.947);
myNode85.point2.set(0.539,-0.001,2.8789999999999996);
myNode85.radius.set(2.495);
myNode85.innerRotation.center.set(0,0,0);
myNode85.innerRotation.axis.set(0.0,0.0,0.0);
myNode85.innerRotation.angle.set(0.0);
myNode85.isVisible = False

/* définition du node n°86*/
const myNode86 = object.addCutOperation();
myNode86.leftArg.set(myNode84);
myNode86.rightArg.set(myNode85);
myNode86.isVisible = False

/* définition du node n°87*/
const myNode87_1 = object.addFuseOperation();
myNode87_1.leftArg.set(myNode82);
myNode87_1.rightArg.set(myNode82);
const myNode87_2 = object.addFuseOperation();
myNode87_2.leftArg.set(myNode87_1);
myNode87_2.rightArg.set(myNode83);
myNode87 = object.addFuseOperation();
myNode87.leftArg.set(myNode87_2);
myNode87.rightArg.set(myNode86);
myNode87.isVisible = False

/* définition du node n°88*/
const myNode88 = object.addCutOperation();
myNode88.leftArg.set(myNode81);
myNode88.rightArg.set(myNode87);
myNode88.isVisible = False

/* définition du node n°89*/
const myNode89_1 = object.addFuseOperation();
myNode89_1.leftArg.set(myNode18);
myNode89_1.rightArg.set(myNode18);
const myNode89_2 = object.addFuseOperation();
myNode89_2.leftArg.set(myNode89_1);
myNode89_2.rightArg.set(myNode45);
const myNode89_3 = object.addFuseOperation();
myNode89_3.leftArg.set(myNode89_2);
myNode89_3.rightArg.set(myNode66);
myNode89 = object.addFuseOperation();
myNode89.leftArg.set(myNode89_3);
myNode89.rightArg.set(myNode88);
myNode89.isVisible = False

/* définition du node n°90*/
const myNode90 = object.addCommonOperation();
myNode90.leftArg.set(myNode0);
myNode90.rightArg.set(myNode89);
myNode90.isVisible = True


/*END Geometry Object Definition*/