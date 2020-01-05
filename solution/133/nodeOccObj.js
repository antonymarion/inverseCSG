/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addCylinder();
myNode0.point1.set(0.539,-0.001,-3.9469);
myNode0.point2.set(0,0,1.4718);
myNode0.radius.set(2.495);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(3.947,-0.001,-18.0999);
myNode1.point2.set(0,0,36.1999);
myNode1.radius.set(0.639);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode1.innerRotation.angle.set(1.5707926535968346);

/* définition du node n°2*/
const myNode2 = object.addCutOperation();
myNode2.leftArg.set(myNode0);
myNode2.rightArg.set(myNode1);

/* définition du node n°3*/
const myNode3 = object.addBox();
myNode3.point1.set(-1.6599,-18.0999,-1.0099);
myNode3.point2.set(19.7598,36.1998,2.0198);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(1.5533898752620918,0.2739036602689634,-0.2739046663751339);
myNode3.innerRotation.angle.set(1.6009581774479889);

/* définition du node n°4*/
const myNode4 = object.addBox();
myNode4.point1.set(-18.0999,-18.0999,-3.94695);
myNode4.point2.set(17.6339,18.7569,1.4719);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);

/* définition du node n°5*/
const myNode5 = object.addCutOperation();
myNode5.leftArg.set(myNode3);
myNode5.rightArg.set(myNode4);

/* définition du node n°6*/
const myNode6 = object.addFuseOperation();
myNode6.leftArg.set(myNode2);
myNode6.rightArg.set(myNode5);

/* définition du node n°7*/
const myNode7 = object.addBox();
myNode7.point1.set(-18.0999,-1.0099,-18.0999);
myNode7.point2.set(17.6338,2.0198,20.9788);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);

/* définition du node n°8*/
const myNode8 = object.addCylinder();
myNode8.point1.set(0.133,0.003,-2.80295);
myNode8.point2.set(0,0,20.9029);
myNode8.radius.set(0.991);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode8.innerRotation.angle.set(3.141592653586273);

/* définition du node n°9*/
const myNode9 = object.addCutOperation();
myNode9.leftArg.set(myNode7);
myNode9.rightArg.set(myNode8);

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(-18.0999,-18.0999,-18.0999);
myNode10.point2.set(16.4398,36.1998,17.4428);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(1.5533898752620918,0.2739036602689634,-0.2739046663751339);
myNode10.innerRotation.angle.set(1.6009581774479889);

/* définition du node n°11*/
const myNode11 = object.addBox();
myNode11.point1.set(-18.0999,-18.0999,-2.9109);
myNode11.point2.set(16.8758,36.1998,21.0098);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(2.35619,0.0,0.0);
myNode11.innerRotation.angle.set(2.35619);

/* définition du node n°12*/
const myNode12 = object.addCommonOperation();
myNode12.leftArg.set(myNode10);
myNode12.rightArg.set(myNode11);

/* définition du node n°13*/
const myNode13 = object.addFuseOperation();
myNode13.leftArg.set(myNode9);
myNode13.rightArg.set(myNode12);

/* définition du node n°14*/
const myNode14 = object.addCommonOperation();
myNode14.leftArg.set(myNode6);
myNode14.rightArg.set(myNode13);

/* définition du node n°15*/
const myNode15 = object.addBox();
myNode15.point1.set(-1.22395,-1.00995,-2.47495);
myNode15.point2.set(0.7579,2.0199,5.3539);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(0.133,0.003,3.94705);
myNode16.point2.set(0,0,14.1529);
myNode16.radius.set(0.991);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode16.innerRotation.angle.set(3.141592653586273);

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(-18.0999,-18.1,-2.91094);
myNode17.point2.set(17.6339,21.0109,21.0099);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(2.35619,0.0,0.0);
myNode17.innerRotation.angle.set(2.35619);

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(0.539,-0.001,-3.947);
myNode18.point2.set(0,0,6.826);
myNode18.radius.set(2.495);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);

/* définition du node n°19*/
const myNode19 = object.addCutOperation();
myNode19.leftArg.set(myNode17);
myNode19.rightArg.set(myNode18);

/* définition du node n°20*/
const myNode20_1 = object.addFuseOperation();
myNode20_1.leftArg.set(myNode15);
myNode20_1.rightArg.set(myNode15);
const myNode20_2 = object.addFuseOperation();
myNode20_2.leftArg.set(myNode20_1);
myNode20_2.rightArg.set(myNode16);
myNode20 = object.addFuseOperation();
myNode20.leftArg.set(myNode20_2);
myNode20.rightArg.set(myNode19);

/* définition du node n°21*/
const myNode21 = object.addCutOperation();
myNode21.leftArg.set(myNode14);
myNode21.rightArg.set(myNode20);

/* définition du node n°22*/
const myNode22 = object.addBox();
myNode22.point1.set(-0.7189,-18.0999,-4.9999);
myNode22.point2.set(1.3638,16.8368,1.0528);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(0.0,0.0,0.0);
myNode22.innerRotation.angle.set(0.0);

/* définition du node n°23*/
const myNode23 = object.addBox();
myNode23.point1.set(-18.0999,-18.0999,-0.9599);
myNode23.point2.set(36.1998,15.8768,1.9188);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(1.482193287627775,0.613942164784534,-0.6139444199241687);
myNode23.innerRotation.angle.set(1.7177746285078193);

/* définition du node n°24*/
const myNode24 = object.addBox();
myNode24.point1.set(-18.0999,-18.0999,-18.0999);
myNode24.point2.set(15.8768,36.1998,20.6158);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(-2.207172725506897,-0.37869328791329343,-0.9142406661431877);
myNode24.innerRotation.angle.set(2.418854282953412);

/* définition du node n°25*/
const myNode25 = object.addBox();
myNode25.point1.set(3.3861,-2.2229,-0.3869);
myNode25.point2.set(14.7138,0.5048,1.3468);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(1.482193287627775,0.613942164784534,-0.6139444199241687);
myNode25.innerRotation.angle.set(1.7177746285078193);

/* définition du node n°26*/
const myNode26 = object.addBox();
myNode26.point1.set(0.64505,-0.63795,-18.0999);
myNode26.point2.set(17.4549,1.0259,15.6249);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);

/* définition du node n°27*/
const myNode27 = object.addCutOperation();
myNode27.leftArg.set(myNode25);
myNode27.rightArg.set(myNode26);

/* définition du node n°28*/
const myNode28 = object.addBox();
myNode28.point1.set(3.3861,-2.2229,-0.9599);
myNode28.point2.set(14.7138,0.5048,0.3028);
myNode28.innerRotation.center.set(0,0,0);
myNode28.innerRotation.axis.set(1.482193287627775,0.613942164784534,-0.6139444199241687);
myNode28.innerRotation.angle.set(1.7177746285078193);

/* définition du node n°29*/
const myNode29_1 = object.addFuseOperation();
myNode29_1.leftArg.set(myNode22);
myNode29_1.rightArg.set(myNode22);
const myNode29_2 = object.addFuseOperation();
myNode29_2.leftArg.set(myNode29_1);
myNode29_2.rightArg.set(myNode23);
const myNode29_3 = object.addFuseOperation();
myNode29_3.leftArg.set(myNode29_2);
myNode29_3.rightArg.set(myNode24);
const myNode29_4 = object.addFuseOperation();
myNode29_4.leftArg.set(myNode29_3);
myNode29_4.rightArg.set(myNode27);
myNode29 = object.addFuseOperation();
myNode29.leftArg.set(myNode29_4);
myNode29.rightArg.set(myNode28);

/* définition du node n°30*/
const myNode30 = object.addBox();
myNode30.point1.set(1.4531,-0.9599,-4.9999);
myNode30.point2.set(0.5048,0.3208,1.0528);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);

/* définition du node n°31*/
const myNode31 = object.addBox();
myNode31.point1.set(-2.22289,-18.0999,-18.0999);
myNode31.point2.set(0.5048,20.6158,20.6158);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(-2.207172725506897,-0.37869328791329343,-0.9142406661431877);
myNode31.innerRotation.angle.set(2.418854282953412);

/* définition du node n°32*/
const myNode32 = object.addBox();
myNode32.point1.set(-0.7189,0.9601,-18.0999);
myNode32.point2.set(1.3638,0.3028,15.6248);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);

/* définition du node n°33*/
const myNode33 = object.addBox();
myNode33.point1.set(-2.2229,-18.0999,2.51608);
myNode33.point2.set(20.3228,20.6158,15.5838);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(-2.207172725506897,-0.37869328791329343,-0.9142406661431877);
myNode33.innerRotation.angle.set(2.418854282953412);

/* définition du node n°34*/
const myNode34 = object.addBox();
myNode34.point1.set(-18.0999,-1.2629,-4.9999);
myNode34.point2.set(17.3808,0.3028,1.0528);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(0.0,0.0,0.0);
myNode34.innerRotation.angle.set(0.0);

/* définition du node n°35*/
const myNode35 = object.addBox();
myNode35.point1.set(-18.1,-18.1,-18.1);
myNode35.point2.set(15.8769,20.6159,20.6159);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(-2.207172725506897,-0.37869328791329343,-0.9142406661431877);
myNode35.innerRotation.angle.set(2.418854282953412);

/* définition du node n°36*/
const myNode36 = object.addCutOperation();
myNode36.leftArg.set(myNode34);
myNode36.rightArg.set(myNode35);

/* définition du node n°37*/
const myNode37 = object.addBox();
myNode37.point1.set(-2.2229,2.51607,-18.0999);
myNode37.point2.set(0.5048,15.5838,20.6158);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(-2.207172725506897,-0.37869328791329343,-0.9142406661431877);
myNode37.innerRotation.angle.set(2.418854282953412);

/* définition du node n°38*/
const myNode38_1 = object.addFuseOperation();
myNode38_1.leftArg.set(myNode30);
myNode38_1.rightArg.set(myNode30);
const myNode38_2 = object.addFuseOperation();
myNode38_2.leftArg.set(myNode38_1);
myNode38_2.rightArg.set(myNode31);
const myNode38_3 = object.addFuseOperation();
myNode38_3.leftArg.set(myNode38_2);
myNode38_3.rightArg.set(myNode32);
const myNode38_4 = object.addFuseOperation();
myNode38_4.leftArg.set(myNode38_3);
myNode38_4.rightArg.set(myNode33);
const myNode38_5 = object.addFuseOperation();
myNode38_5.leftArg.set(myNode38_4);
myNode38_5.rightArg.set(myNode36);
myNode38 = object.addFuseOperation();
myNode38.leftArg.set(myNode38_5);
myNode38.rightArg.set(myNode37);

/* définition du node n°39*/
const myNode39 = object.addCommonOperation();
myNode39.leftArg.set(myNode29);
myNode39.rightArg.set(myNode38);

/* définition du node n°40*/
const myNode40 = object.addBox();
myNode40.point1.set(-18.0999,-18.0999,-18.0999);
myNode40.point2.set(36.1998,20.8418,19.1098);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(1.482193287627775,0.613942164784534,-0.6139444199241687);
myNode40.innerRotation.angle.set(1.7177746285078193);

/* définition du node n°41*/
const myNode41 = object.addBox();
myNode41.point1.set(-1.2239,-18.0999,-18.0999);
myNode41.point2.set(0.7578,36.1998,36.1998);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(2.35619,0.0,0.0);
myNode41.innerRotation.angle.set(2.35619);

/* définition du node n°42*/
const myNode42 = object.addCylinder();
myNode42.point1.set(0.133,0.003,-18.0999);
myNode42.point2.set(0,0,20.5748);
myNode42.radius.set(0.991);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode42.innerRotation.angle.set(3.141592653586273);

/* définition du node n°43*/
const myNode43 = object.addCommonOperation();
myNode43.leftArg.set(myNode41);
myNode43.rightArg.set(myNode42);

/* définition du node n°44*/
const myNode44 = object.addBox();
myNode44.point1.set(-1.2239,-1.0099,-18.0999);
myNode44.point2.set(0.7578,2.0198,36.1998);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(0.0,0.0,0.0);
myNode44.innerRotation.angle.set(0.0);

/* définition du node n°45*/
const myNode45 = object.addBox();
myNode45.point1.set(-18.0999,-18.0999,-1.00995);
myNode45.point2.set(16.4399,36.1999,2.0199);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(1.5533898752620918,0.2739036602689634,-0.2739046663751339);
myNode45.innerRotation.angle.set(1.6009581774479889);

/* définition du node n°46*/
const myNode46 = object.addCutOperation();
myNode46.leftArg.set(myNode44);
myNode46.rightArg.set(myNode45);

/* définition du node n°47*/
const myNode47 = object.addFuseOperation();
myNode47.leftArg.set(myNode43);
myNode47.rightArg.set(myNode46);

/* définition du node n°48*/
const myNode48 = object.addCommonOperation();
myNode48.leftArg.set(myNode40);
myNode48.rightArg.set(myNode47);

/* définition du node n°49*/
const myNode49 = object.addBox();
myNode49.point1.set(-1.65995,-18.1,-18.0999);
myNode49.point2.set(19.7599,36.1999,19.1099);
myNode49.innerRotation.center.set(0,0,0);
myNode49.innerRotation.axis.set(1.5533898752620918,0.2739036602689634,-0.2739046663751339);
myNode49.innerRotation.angle.set(1.6009581774479889);

/* définition du node n°50*/
const myNode50 = object.addCylinder();
myNode50.point1.set(0.133,0.003,-18.1);
myNode50.point2.set(0,0,20.575);
myNode50.radius.set(0.991);
myNode50.innerRotation.center.set(0,0,0);
myNode50.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode50.innerRotation.angle.set(3.141592653586273);

/* définition du node n°51*/
const myNode51 = object.addBox();
myNode51.point1.set(-18.1,-18.1,-18.1);
myNode51.point2.set(17.634,36.2,20.979);
myNode51.innerRotation.center.set(0,0,0);
myNode51.innerRotation.axis.set(0.0,0.0,0.0);
myNode51.innerRotation.angle.set(0.0);

/* définition du node n°52*/
const myNode52 = object.addFuseOperation();
myNode52.leftArg.set(myNode50);
myNode52.rightArg.set(myNode51);

/* définition du node n°53*/
const myNode53 = object.addCutOperation();
myNode53.leftArg.set(myNode49);
myNode53.rightArg.set(myNode52);

/* définition du node n°54*/
const myNode54 = object.addBox();
myNode54.point1.set(-1.22395,-0.63795,2.80305);
myNode54.point2.set(19.3239,1.2949,15.2969);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(0.0,0.0,0.0);
myNode54.innerRotation.angle.set(0.0);

/* définition du node n°55*/
const myNode55 = object.addBox();
myNode55.point1.set(-0.990951,-18.0999,-18.0999);
myNode55.point2.set(19.0909,36.1999,19.1099);
myNode55.innerRotation.center.set(0,0,0);
myNode55.innerRotation.axis.set(1.5533898752620918,0.2739036602689634,-0.2739046663751339);
myNode55.innerRotation.angle.set(1.6009581774479889);

/* définition du node n°56*/
const myNode56 = object.addFuseOperation();
myNode56.leftArg.set(myNode54);
myNode56.rightArg.set(myNode55);

/* définition du node n°57*/
const myNode57 = object.addBox();
myNode57.point1.set(-18.0999,-18.1,-2.91094);
myNode57.point2.set(36.1999,21.0109,21.0099);
myNode57.innerRotation.center.set(0,0,0);
myNode57.innerRotation.axis.set(2.35619,0.0,0.0);
myNode57.innerRotation.angle.set(2.35619);

/* définition du node n°58*/
const myNode58 = object.addCommonOperation();
myNode58.leftArg.set(myNode56);
myNode58.rightArg.set(myNode57);

/* définition du node n°59*/
const myNode59 = object.addFuseOperation();
myNode59.leftArg.set(myNode53);
myNode59.rightArg.set(myNode58);

/* définition du node n°60*/
const myNode60 = object.addCutOperation();
myNode60.leftArg.set(myNode48);
myNode60.rightArg.set(myNode59);

/* définition du node n°61*/
const myNode61 = object.addBox();
myNode61.point1.set(-18.0999,-18.0999,-0.9599);
myNode61.point2.set(21.4858,16.3828,2.2218);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(1.482193287627775,0.613942164784534,-0.6139444199241687);
myNode61.innerRotation.angle.set(1.7177746285078193);

/* définition du node n°62*/
const myNode62 = object.addBox();
myNode62.point1.set(-0.7189,-1.2629,-4.9999);
myNode62.point2.set(1.3128,0.3028,2.5248);
myNode62.innerRotation.center.set(0,0,0);
myNode62.innerRotation.axis.set(0.0,0.0,0.0);
myNode62.innerRotation.angle.set(0.0);

/* définition du node n°63*/
const myNode63 = object.addFuseOperation();
myNode63.leftArg.set(myNode61);
myNode63.rightArg.set(myNode62);

/* définition du node n°64*/
const myNode64 = object.addBox();
myNode64.point1.set(-18.1,-18.1,-0.65695);
myNode64.point2.set(21.4859,16.3829,1.2949);
myNode64.innerRotation.center.set(0,0,0);
myNode64.innerRotation.axis.set(1.482193287627775,0.613942164784534,-0.6139444199241687);
myNode64.innerRotation.angle.set(1.7177746285078193);

/* définition du node n°65*/
const myNode65 = object.addCutOperation();
myNode65.leftArg.set(myNode63);
myNode65.rightArg.set(myNode64);

/* définition du node n°66*/
const myNode66 = object.addBox();
myNode66.point1.set(-18.0999,-1.2629,-3.9469);
myNode66.point2.set(18.6938,2.5248,1.4718);
myNode66.innerRotation.center.set(0,0,0);
myNode66.innerRotation.axis.set(0.0,0.0,0.0);
myNode66.innerRotation.angle.set(0.0);

/* définition du node n°67*/
const myNode67 = object.addBox();
myNode67.point1.set(-18.0999,-18.0999,-1.2629);
myNode67.point2.set(36.1998,16.3828,2.2218);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(1.482193287627775,0.613942164784534,-0.6139444199241687);
myNode67.innerRotation.angle.set(1.7177746285078193);

/* définition du node n°68*/
const myNode68 = object.addFuseOperation();
myNode68.leftArg.set(myNode66);
myNode68.rightArg.set(myNode67);

/* définition du node n°69*/
const myNode69 = object.addBox();
myNode69.point1.set(0.64505,-1.26295,-4.99995);
myNode69.point2.set(0.8079,2.2219,1.0529);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(0.0,0.0,0.0);
myNode69.innerRotation.angle.set(0.0);

/* définition du node n°70*/
const myNode70 = object.addCylinder();
myNode70.point1.set(3.947,-0.001,-18.0999);
myNode70.point2.set(0,0,20.0579);
myNode70.radius.set(0.639);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(-4.1682470084564275e-06,1.570792653585774,4.1682470084564275e-06);
myNode70.innerRotation.angle.set(1.5707926535968346);

/* définition du node n°71*/
const myNode71 = object.addFuseOperation();
myNode71.leftArg.set(myNode69);
myNode71.rightArg.set(myNode70);

/* définition du node n°72*/
const myNode72 = object.addCutOperation();
myNode72.leftArg.set(myNode68);
myNode72.rightArg.set(myNode71);

/* définition du node n°73*/
const myNode73 = object.addFuseOperation();
myNode73.leftArg.set(myNode65);
myNode73.rightArg.set(myNode72);

/* définition du node n°74*/
const myNode74 = object.addBox();
myNode74.point1.set(-18.0999,-18.0999,-18.0999);
myNode74.point2.set(36.1998,20.6158,36.1998);
myNode74.innerRotation.center.set(0,0,0);
myNode74.innerRotation.axis.set(-2.207172725506897,-0.37869328791329343,-0.9142406661431877);
myNode74.innerRotation.angle.set(2.418854282953412);

/* définition du node n°75*/
const myNode75 = object.addBox();
myNode75.point1.set(-0.51695,-0.39295,-3.94695);
myNode75.point2.set(1.1619,0.7799,22.0469);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(0.0,0.0,0.0);
myNode75.innerRotation.angle.set(0.0);

/* définition du node n°76*/
const myNode76 = object.addCutOperation();
myNode76.leftArg.set(myNode74);
myNode76.rightArg.set(myNode75);

/* définition du node n°77*/
const myNode77 = object.addBox();
myNode77.point1.set(-18.0999,-0.9599,-4.9999);
myNode77.point2.set(20.0578,1.9188,1.0528);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(0.0,0.0,0.0);
myNode77.innerRotation.angle.set(0.0);

/* définition du node n°78*/
const myNode78 = object.addBox();
myNode78.point1.set(-18.0999,-18.0999,0.3931);
myNode78.point2.set(21.4858,16.3828,0.5668);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(1.482193287627775,0.613942164784534,-0.6139444199241687);
myNode78.innerRotation.angle.set(1.7177746285078193);

/* définition du node n°79*/
const myNode79_1 = object.addFuseOperation();
myNode79_1.leftArg.set(myNode76);
myNode79_1.rightArg.set(myNode76);
const myNode79_2 = object.addFuseOperation();
myNode79_2.leftArg.set(myNode79_1);
myNode79_2.rightArg.set(myNode77);
myNode79 = object.addFuseOperation();
myNode79.leftArg.set(myNode79_2);
myNode79.rightArg.set(myNode78);

/* définition du node n°80*/
const myNode80 = object.addCylinder();
myNode80.point1.set(0.539,-0.001,-4.9999);
myNode80.point2.set(0,0,2.5248);
myNode80.radius.set(2.495);
myNode80.innerRotation.center.set(0,0,0);
myNode80.innerRotation.axis.set(0.0,0.0,0.0);
myNode80.innerRotation.angle.set(0.0);

/* définition du node n°81*/
const myNode81 = object.addBox();
myNode81.point1.set(0.64505,-0.63795,-4.99995);
myNode81.point2.set(17.4549,1.2949,23.0999);
myNode81.innerRotation.center.set(0,0,0);
myNode81.innerRotation.axis.set(0.0,0.0,0.0);
myNode81.innerRotation.angle.set(0.0);

/* définition du node n°82*/
const myNode82 = object.addCutOperation();
myNode82.leftArg.set(myNode80);
myNode82.rightArg.set(myNode81);

/* définition du node n°83*/
const myNode83 = object.addBox();
myNode83.point1.set(-0.71895,0.96005,-18.0999);
myNode83.point2.set(18.8189,0.3029,15.6249);
myNode83.innerRotation.center.set(0,0,0);
myNode83.innerRotation.axis.set(0.0,0.0,0.0);
myNode83.innerRotation.angle.set(0.0);

/* définition du node n°84*/
const myNode84 = object.addBox();
myNode84.point1.set(-2.223,-18.1,-18.1);
myNode84.point2.set(20.323,36.2,20.616);
myNode84.innerRotation.center.set(0,0,0);
myNode84.innerRotation.axis.set(-2.207172725506897,-0.37869328791329343,-0.9142406661431877);
myNode84.innerRotation.angle.set(2.418854282953412);

/* définition du node n°85*/
const myNode85 = object.addCutOperation();
myNode85.leftArg.set(myNode83);
myNode85.rightArg.set(myNode84);

/* définition du node n°86*/
const myNode86 = object.addCutOperation();
myNode86.leftArg.set(myNode82);
myNode86.rightArg.set(myNode85);

/* définition du node n°87*/
const myNode87 = object.addCommonOperation();
myNode87.leftArg.set(myNode73);
myNode87.rightArg.set(myNode79);

/* définition du node n°88*/
const myNode88_1 = object.addFuseOperation();
myNode88_1.leftArg.set(myNode21);
myNode88_1.rightArg.set(myNode21);
const myNode88_2 = object.addFuseOperation();
myNode88_2.leftArg.set(myNode88_1);
myNode88_2.rightArg.set(myNode39);
const myNode88_3 = object.addFuseOperation();
myNode88_3.leftArg.set(myNode88_2);
myNode88_3.rightArg.set(myNode60);
myNode88 = object.addFuseOperation();
myNode88.leftArg.set(myNode88_3);
myNode88.rightArg.set(myNode87);

/* définition du node n°89*/
const myNode89 = object.addBox();
myNode89.point1.set(-2.3499,-1.5149,-5.9999);
myNode89.point2.set(4.6988,3.0298,11.9998);
myNode89.innerRotation.center.set(0,0,0);
myNode89.innerRotation.axis.set(0.0,0.0,0.0);
myNode89.innerRotation.angle.set(0.0);

/* définition du node n°90*/
const myNode90 = object.addCommonOperation();
myNode90.leftArg.set(myNode88);
myNode90.rightArg.set(myNode89);
/*END Geometry Object Definition*/