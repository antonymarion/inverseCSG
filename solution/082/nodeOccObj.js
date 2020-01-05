/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-4.5559,-2.0329,-2.0559);
myNode0.point2.set(9.1108,3.9218,0.4448);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(2.7781,3.8721,-2.0559);
myNode1.point2.set(1.0668,1.1278,0.6668);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(0.925,4.529,-2.0329);
myNode2.point2.set(0,0,7.0328);
myNode2.radius.set(0.246);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode2.innerRotation.angle.set(2.094392392986396);

/* définition du node n°3*/
const myNode3 = object.addBox();
myNode3.point1.set(-3.8439,1.0001,-1.6099);
myNode3.point2.set(7.6878,0.8888,0.8878);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(0.0,0.0,0.0);
myNode3.innerRotation.angle.set(0.0);

/* définition du node n°4*/
const myNode4 = object.addBox();
myNode4.point1.set(-4.5559,1.8891,-2.0559);
myNode4.point2.set(22.6558,3.1108,1.3328);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(-3.444,3.445,-1.38895);
myNode5.point2.set(0,0,19.4889);
myNode5.radius.set(0.665);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);

/* définition du node n°6*/
const myNode6 = object.addCutOperation();
myNode6.leftArg.set(myNode4);
myNode6.rightArg.set(myNode5);

/* définition du node n°7*/
const myNode7 = object.addCylinder();
myNode7.point1.set(3.445,3.444,-18.0999);
myNode7.point2.set(0,0,36.1999);
myNode7.radius.set(0.666);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);

/* définition du node n°8*/
const myNode8 = object.addCylinder();
myNode8.point1.set(-3.445,3.444,-18.0999);
myNode8.point2.set(0,0,16.7109);
myNode8.radius.set(0.387);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(0.0,0.0,0.0);
myNode8.innerRotation.angle.set(0.0);

/* définition du node n°9*/
const myNode9 = object.addFuseOperation();
myNode9.leftArg.set(myNode7);
myNode9.rightArg.set(myNode8);

/* définition du node n°10*/
const myNode10 = object.addCutOperation();
myNode10.leftArg.set(myNode6);
myNode10.rightArg.set(myNode9);

/* définition du node n°11*/
const myNode11 = object.addCylinder();
myNode11.point1.set(0.923,-4.53,-2.0329);
myNode11.point2.set(0,0,3.9218);
myNode11.radius.set(0.247);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode11.innerRotation.angle.set(2.094392392986396);

/* définition du node n°12*/
const myNode12_1 = object.addFuseOperation();
myNode12_1.leftArg.set(myNode1);
myNode12_1.rightArg.set(myNode1);
const myNode12_2 = object.addFuseOperation();
myNode12_2.leftArg.set(myNode12_1);
myNode12_2.rightArg.set(myNode2);
const myNode12_3 = object.addFuseOperation();
myNode12_3.leftArg.set(myNode12_2);
myNode12_3.rightArg.set(myNode3);
const myNode12_4 = object.addFuseOperation();
myNode12_4.leftArg.set(myNode12_3);
myNode12_4.rightArg.set(myNode10);
myNode12 = object.addFuseOperation();
myNode12.leftArg.set(myNode12_4);
myNode12.rightArg.set(myNode11);

/* définition du node n°13*/
const myNode13 = object.addBox();
myNode13.point1.set(-4.5559,-2.0329,-1.6099);
myNode13.point2.set(9.1108,5.9048,0.8878);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);

/* définition du node n°14*/
const myNode14 = object.addBox();
myNode14.point1.set(-18.0999,1.8891,-2.0559);
myNode14.point2.set(20.8778,1.9828,0.4448);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);

/* définition du node n°15*/
const myNode15 = object.addBox();
myNode15.point1.set(-3.4299,3.8721,-2.0559);
myNode15.point2.set(6.8758,1.1278,1.3328);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,0.0,0.0);
myNode15.innerRotation.angle.set(0.0);

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(-3.43,3.872,-2.0559);
myNode16.point2.set(0,0,20.1558);
myNode16.radius.set(1.129);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);

/* définition du node n°17*/
const myNode17 = object.addCylinder();
myNode17.point1.set(3.446,3.888,-2.0559);
myNode17.point2.set(0,0,20.1558);
myNode17.radius.set(1.108);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);

/* définition du node n°18*/
const myNode18_1 = object.addFuseOperation();
myNode18_1.leftArg.set(myNode13);
myNode18_1.rightArg.set(myNode13);
const myNode18_2 = object.addFuseOperation();
myNode18_2.leftArg.set(myNode18_1);
myNode18_2.rightArg.set(myNode14);
const myNode18_3 = object.addFuseOperation();
myNode18_3.leftArg.set(myNode18_2);
myNode18_3.rightArg.set(myNode15);
const myNode18_4 = object.addFuseOperation();
myNode18_4.leftArg.set(myNode18_3);
myNode18_4.rightArg.set(myNode16);
myNode18 = object.addFuseOperation();
myNode18.leftArg.set(myNode18_4);
myNode18.rightArg.set(myNode17);

/* définition du node n°19*/
const myNode19 = object.addCommonOperation();
myNode19.leftArg.set(myNode12);
myNode19.rightArg.set(myNode18);

/* définition du node n°20*/
const myNode20 = object.addBox();
myNode20.point1.set(-2.7779,1.8891,-2.0559);
myNode20.point2.set(7.3328,1.9828,0.6668);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);

/* définition du node n°21*/
const myNode21 = object.addCylinder();
myNode21.point1.set(3.444,3.445,-2.05595);
myNode21.point2.set(0,0,20.1559);
myNode21.radius.set(0.389);
myNode21.innerRotation.center.set(0,0,0);
myNode21.innerRotation.axis.set(0.0,0.0,0.0);
myNode21.innerRotation.angle.set(0.0);

/* définition du node n°22*/
const myNode22 = object.addCutOperation();
myNode22.leftArg.set(myNode20);
myNode22.rightArg.set(myNode21);

/* définition du node n°23*/
const myNode23 = object.addCylinder();
myNode23.point1.set(-2.046,3.95585e-21,-4.1889);
myNode23.point2.set(0,0,1.3328);
myNode23.radius.set(1.789);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode23.innerRotation.angle.set(2.094392392986396);

/* définition du node n°24*/
const myNode24 = object.addBox();
myNode24.point1.set(-2.7779,-4.1889,-0.7219);
myNode24.point2.set(5.5558,1.3328,1.6668);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);

/* définition du node n°25*/
const myNode25 = object.addFuseOperation();
myNode25.leftArg.set(myNode23);
myNode25.rightArg.set(myNode24);

/* définition du node n°26*/
const myNode26 = object.addCylinder();
myNode26.point1.set(2.075,-3.445,0.94405);
myNode26.point2.set(0,0,17.1559);
myNode26.radius.set(0.442);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);

/* définition du node n°27*/
const myNode27 = object.addCylinder();
myNode27.point1.set(-2.072,-3.443,-0.72195);
myNode27.point2.set(0,0,18.8219);
myNode27.radius.set(0.443);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);

/* définition du node n°28*/
const myNode28 = object.addFuseOperation();
myNode28.leftArg.set(myNode26);
myNode28.rightArg.set(myNode27);

/* définition du node n°29*/
const myNode29 = object.addCutOperation();
myNode29.leftArg.set(myNode25);
myNode29.rightArg.set(myNode28);

/* définition du node n°30*/
const myNode30 = object.addCylinder();
myNode30.point1.set(-2.042,0.003,-4.18895);
myNode30.point2.set(0,0,1.3329);
myNode30.radius.set(1.338);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode30.innerRotation.angle.set(2.094392392986396);

/* définition du node n°31*/
const myNode31 = object.addCylinder();
myNode31.point1.set(-2.072,-3.442,-0.94395);
myNode31.point2.set(0,0,2.3329);
myNode31.radius.set(0.376);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode31.innerRotation.angle.set(3.141592653586273);

/* définition du node n°32*/
const myNode32 = object.addBox();
myNode32.point1.set(-2.77795,-18.0999,2.05605);
myNode32.point2.set(7.3329,16.0669,16.0449);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(0.0,0.0,0.0);
myNode32.innerRotation.angle.set(0.0);

/* définition du node n°33*/
const myNode33 = object.addCylinder();
myNode33.point1.set(-2.702,-3.803,-18.1);
myNode33.point2.set(0,0,36.1999);
myNode33.radius.set(0.685);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(-0.24106997465000793,2.2935798886533565,0.10733370184429875);
myNode33.innerRotation.angle.set(2.3087104543152437);

/* définition du node n°34*/
const myNode34_1 = object.addFuseOperation();
myNode34_1.leftArg.set(myNode30);
myNode34_1.rightArg.set(myNode30);
const myNode34_2 = object.addFuseOperation();
myNode34_2.leftArg.set(myNode34_1);
myNode34_2.rightArg.set(myNode31);
const myNode34_3 = object.addFuseOperation();
myNode34_3.leftArg.set(myNode34_2);
myNode34_3.rightArg.set(myNode32);
myNode34 = object.addFuseOperation();
myNode34.leftArg.set(myNode34_3);
myNode34.rightArg.set(myNode33);

/* définition du node n°35*/
const myNode35 = object.addCutOperation();
myNode35.leftArg.set(myNode29);
myNode35.rightArg.set(myNode34);

/* définition du node n°36*/
const myNode36 = object.addBox();
myNode36.point1.set(-2.7779,-4.8559,-0.7219);
myNode36.point2.set(5.5558,1.9998,2.7778);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(0.0,0.0,0.0);
myNode36.innerRotation.angle.set(0.0);

/* définition du node n°37*/
const myNode37 = object.addCylinder();
myNode37.point1.set(2.075,-3.445,-2.05595);
myNode37.point2.set(0,0,20.1559);
myNode37.radius.set(0.442);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(0.0,0.0,0.0);
myNode37.innerRotation.angle.set(0.0);

/* définition du node n°38*/
const myNode38 = object.addCutOperation();
myNode38.leftArg.set(myNode36);
myNode38.rightArg.set(myNode37);

/* définition du node n°39*/
const myNode39 = object.addCylinder();
myNode39.point1.set(0.498,1.769,-18.0999);
myNode39.point2.set(0,0,36.1998);
myNode39.radius.set(0.706);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(0.6312237032526069,0.6888596675526804,-1.3850945866822204);
myNode39.innerRotation.angle.set(1.6707656984703496);

/* définition du node n°40*/
const myNode40 = object.addCylinder();
myNode40.point1.set(-4.478,0.0449959,-18.0999);
myNode40.point2.set(0,0,36.1999);
myNode40.radius.set(0.649);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(1.1818899113977008,2.047107745131362,-0.5262090847453613);
myNode40.innerRotation.angle.set(2.4216543691677033);

/* définition du node n°41*/
const myNode41 = object.addCutOperation();
myNode41.leftArg.set(myNode39);
myNode41.rightArg.set(myNode40);

/* définition du node n°42*/
const myNode42 = object.addCommonOperation();
myNode42.leftArg.set(myNode38);
myNode42.rightArg.set(myNode41);

/* définition du node n°43*/
const myNode43 = object.addBox();
myNode43.point1.set(-4.0619,1.0001,-2.0559);
myNode43.point2.set(0.2178,0.8888,0.6668);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(0.0,0.0,0.0);
myNode43.innerRotation.angle.set(0.0);

/* définition du node n°44*/
const myNode44 = object.addCylinder();
myNode44.point1.set(1.397,4.062,-18.0999);
myNode44.point2.set(0,0,19.9889);
myNode44.radius.set(0.213);
myNode44.innerRotation.center.set(0,0,0);
myNode44.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode44.innerRotation.angle.set(2.094392392986396);

/* définition du node n°45*/
const myNode45 = object.addCutOperation();
myNode45.leftArg.set(myNode43);
myNode45.rightArg.set(myNode44);

/* définition du node n°46*/
const myNode46 = object.addBox();
myNode46.point1.set(3.8441,1.0001,-1.6099);
myNode46.point2.set(0.2488,2.8718,0.2208);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(0.0,0.0,0.0);
myNode46.innerRotation.angle.set(0.0);

/* définition du node n°47*/
const myNode47 = object.addBox();
myNode47.point1.set(-2.7779,-2.8549,-2.0559);
myNode47.point2.set(5.5558,0.8218,2.9998);
myNode47.innerRotation.center.set(0,0,0);
myNode47.innerRotation.axis.set(0.0,0.0,0.0);
myNode47.innerRotation.angle.set(0.0);

/* définition du node n°48*/
const myNode48 = object.addCylinder();
myNode48.point1.set(-2.046,4.38538e-21,-18.0999);
myNode48.point2.set(0,0,19.0999);
myNode48.radius.set(1.789);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode48.innerRotation.angle.set(2.094392392986396);

/* définition du node n°49*/
const myNode49 = object.addCutOperation();
myNode49.leftArg.set(myNode47);
myNode49.rightArg.set(myNode48);

/* définition du node n°50*/
const myNode50 = object.addBox();
myNode50.point1.set(-4.5559,-2.0329,-1.6099);
myNode50.point2.set(9.1108,3.0328,0.8878);
myNode50.innerRotation.center.set(0,0,0);
myNode50.innerRotation.axis.set(0.0,0.0,0.0);
myNode50.innerRotation.angle.set(0.0);

/* définition du node n°51*/
const myNode51_1 = object.addFuseOperation();
myNode51_1.leftArg.set(myNode46);
myNode51_1.rightArg.set(myNode46);
const myNode51_2 = object.addFuseOperation();
myNode51_2.leftArg.set(myNode51_1);
myNode51_2.rightArg.set(myNode49);
myNode51 = object.addFuseOperation();
myNode51.leftArg.set(myNode51_2);
myNode51.rightArg.set(myNode50);

/* définition du node n°52*/
const myNode52 = object.addCylinder();
myNode52.point1.set(1.369,-4.093,1.00005);
myNode52.point2.set(0,0,0.8889);
myNode52.radius.set(0.254);
myNode52.innerRotation.center.set(0,0,0);
myNode52.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode52.innerRotation.angle.set(2.094392392986396);

/* définition du node n°53*/
const myNode53 = object.addCutOperation();
myNode53.leftArg.set(myNode51);
myNode53.rightArg.set(myNode52);

/* définition du node n°54*/
const myNode54 = object.addBox();
myNode54.point1.set(-2.7779,-4.9999,-2.0559);
myNode54.point2.set(7.3328,2.9668,2.9998);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(0.0,0.0,0.0);
myNode54.innerRotation.angle.set(0.0);

/* définition du node n°55*/
const myNode55 = object.addCylinder();
myNode55.point1.set(3.444,-3.445,-1.38895);
myNode55.point2.set(0,0,0.6669);
myNode55.radius.set(0.664);
myNode55.innerRotation.center.set(0,0,0);
myNode55.innerRotation.axis.set(0.0,0.0,0.0);
myNode55.innerRotation.angle.set(0.0);

/* définition du node n°56*/
const myNode56 = object.addCutOperation();
myNode56.leftArg.set(myNode54);
myNode56.rightArg.set(myNode55);

/* définition du node n°57*/
const myNode57 = object.addBox();
myNode57.point1.set(-2.77795,-4.99995,-0.72195);
myNode57.point2.set(7.3329,2.9669,2.7779);
myNode57.innerRotation.center.set(0,0,0);
myNode57.innerRotation.axis.set(0.0,0.0,0.0);
myNode57.innerRotation.angle.set(0.0);

/* définition du node n°58*/
const myNode58 = object.addCylinder();
myNode58.point1.set(3.445,-3.445,-2.05595);
myNode58.point2.set(0,0,0.6669);
myNode58.radius.set(0.388);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(0.0,0.0,0.0);
myNode58.innerRotation.angle.set(0.0);

/* définition du node n°59*/
const myNode59 = object.addFuseOperation();
myNode59.leftArg.set(myNode57);
myNode59.rightArg.set(myNode58);

/* définition du node n°60*/
const myNode60 = object.addCutOperation();
myNode60.leftArg.set(myNode56);
myNode60.rightArg.set(myNode59);

/* définition du node n°61*/
const myNode61 = object.addBox();
myNode61.point1.set(-2.7779,-4.8559,-2.0559);
myNode61.point2.set(5.5558,2.8218,20.1558);
myNode61.innerRotation.center.set(0,0,0);
myNode61.innerRotation.axis.set(0.0,0.0,0.0);
myNode61.innerRotation.angle.set(0.0);

/* définition du node n°62*/
const myNode62 = object.addBox();
myNode62.point1.set(-4.5559,-4.9999,-18.0999);
myNode62.point2.set(22.6558,0.8108,17.3778);
myNode62.innerRotation.center.set(0,0,0);
myNode62.innerRotation.axis.set(0.0,0.0,0.0);
myNode62.innerRotation.angle.set(0.0);

/* définition du node n°63*/
const myNode63 = object.addBox();
myNode63.point1.set(-4.5559,-4.1889,-2.0559);
myNode63.point2.set(1.7778,2.1558,1.3328);
myNode63.innerRotation.center.set(0,0,0);
myNode63.innerRotation.axis.set(0.0,0.0,0.0);
myNode63.innerRotation.angle.set(0.0);

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
const myNode65 = object.addCylinder();
myNode65.point1.set(-2.046,5.56361e-32,-18.0999);
myNode65.point2.set(0,0,36.1999);
myNode65.radius.set(1.789);
myNode65.innerRotation.center.set(0,0,0);
myNode65.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode65.innerRotation.angle.set(2.094392392986396);

/* définition du node n°66*/
const myNode66 = object.addCylinder();
myNode66.point1.set(2.075,-3.445,-0.72195);
myNode66.point2.set(0,0,18.8219);
myNode66.radius.set(0.442);
myNode66.innerRotation.center.set(0,0,0);
myNode66.innerRotation.axis.set(0.0,0.0,0.0);
myNode66.innerRotation.angle.set(0.0);

/* définition du node n°67*/
const myNode67 = object.addCylinder();
myNode67.point1.set(-1.002,-3.81,-18.1);
myNode67.point2.set(0,0,36.1999);
myNode67.radius.set(0.686);
myNode67.innerRotation.center.set(0,0,0);
myNode67.innerRotation.axis.set(-0.08954948905302097,0.8520044685420913,0.19649850658015844);
myNode67.innerRotation.angle.set(0.8789439052030461);

/* définition du node n°68*/
const myNode68 = object.addCylinder();
myNode68.point1.set(0.498,1.769,-18.0999);
myNode68.point2.set(0,0,36.1999);
myNode68.radius.set(0.706);
myNode68.innerRotation.center.set(0,0,0);
myNode68.innerRotation.axis.set(0.6312237032526069,0.6888596675526804,-1.3850945866822204);
myNode68.innerRotation.angle.set(1.6707656984703496);

/* définition du node n°69*/
const myNode69 = object.addCommonOperation();
myNode69.leftArg.set(myNode67);
myNode69.rightArg.set(myNode68);

/* définition du node n°70*/
const myNode70_1 = object.addFuseOperation();
myNode70_1.leftArg.set(myNode65);
myNode70_1.rightArg.set(myNode65);
const myNode70_2 = object.addFuseOperation();
myNode70_2.leftArg.set(myNode70_1);
myNode70_2.rightArg.set(myNode66);
myNode70 = object.addFuseOperation();
myNode70.leftArg.set(myNode70_2);
myNode70.rightArg.set(myNode69);

/* définition du node n°71*/
const myNode71 = object.addCutOperation();
myNode71.leftArg.set(myNode64);
myNode71.rightArg.set(myNode70);

/* définition du node n°72*/
const myNode72 = object.addBox();
myNode72.point1.set(-4.5559,-4.9999,-2.0559);
myNode72.point2.set(7.3328,2.9668,4.1108);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(0.0,0.0,0.0);
myNode72.innerRotation.angle.set(0.0);

/* définition du node n°73*/
const myNode73 = object.addCylinder();
myNode73.point1.set(-3.444,-3.443,-1.38895);
myNode73.point2.set(0,0,0.6669);
myNode73.radius.set(0.663);
myNode73.innerRotation.center.set(0,0,0);
myNode73.innerRotation.axis.set(0.0,0.0,0.0);
myNode73.innerRotation.angle.set(0.0);

/* définition du node n°74*/
const myNode74 = object.addCutOperation();
myNode74.leftArg.set(myNode72);
myNode74.rightArg.set(myNode73);

/* définition du node n°75*/
const myNode75 = object.addCylinder();
myNode75.point1.set(-2.072,-3.445,-18.0999);
myNode75.point2.set(0,0,36.1999);
myNode75.radius.set(0.376);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(0.0,0.0,0.0);
myNode75.innerRotation.angle.set(0.0);

/* définition du node n°76*/
const myNode76 = object.addCylinder();
myNode76.point1.set(-3.446,-3.444,-18.0999);
myNode76.point2.set(0,0,36.1999);
myNode76.radius.set(0.388);
myNode76.innerRotation.center.set(0,0,0);
myNode76.innerRotation.axis.set(0.0,0.0,0.0);
myNode76.innerRotation.angle.set(0.0);

/* définition du node n°77*/
const myNode77 = object.addFuseOperation();
myNode77.leftArg.set(myNode75);
myNode77.rightArg.set(myNode76);

/* définition du node n°78*/
const myNode78 = object.addCutOperation();
myNode78.leftArg.set(myNode74);
myNode78.rightArg.set(myNode77);

/* définition du node n°79*/
const myNode79 = object.addCylinder();
myNode79.point1.set(0.599,0.811,-18.0999);
myNode79.point2.set(0,0,36.1999);
myNode79.radius.set(0.704);
myNode79.innerRotation.center.set(0,0,0);
myNode79.innerRotation.axis.set(-1.3671625151710542,1.916695925690334,0.6375166719295208);
myNode79.innerRotation.angle.set(2.4391154383166986);

/* définition du node n°80*/
const myNode80 = object.addCylinder();
myNode80.point1.set(-2.701,-3.772,-18.1);
myNode80.point2.set(0,0,36.1999);
myNode80.radius.set(0.623);
myNode80.innerRotation.center.set(0,0,0);
myNode80.innerRotation.axis.set(1.0030512563647358,2.1029311504841517,-0.45711438050778924);
myNode80.innerRotation.angle.set(2.3743177553643684);

/* définition du node n°81*/
const myNode81 = object.addCommonOperation();
myNode81.leftArg.set(myNode79);
myNode81.rightArg.set(myNode80);

/* définition du node n°82*/
const myNode82 = object.addCylinder();
myNode82.point1.set(-2.072,-3.443,0.94405);
myNode82.point2.set(0,0,17.1559);
myNode82.radius.set(0.443);
myNode82.innerRotation.center.set(0,0,0);
myNode82.innerRotation.axis.set(0.0,0.0,0.0);
myNode82.innerRotation.angle.set(0.0);

/* définition du node n°83*/
const myNode83 = object.addFuseOperation();
myNode83.leftArg.set(myNode81);
myNode83.rightArg.set(myNode82);

/* définition du node n°84*/
const myNode84 = object.addCutOperation();
myNode84.leftArg.set(myNode78);
myNode84.rightArg.set(myNode83);

/* définition du node n°85*/
const myNode85 = object.addCommonOperation();
myNode85.leftArg.set(myNode71);
myNode85.rightArg.set(myNode84);

/* définition du node n°86*/
const myNode86_1 = object.addFuseOperation();
myNode86_1.leftArg.set(myNode0);
myNode86_1.rightArg.set(myNode0);
const myNode86_2 = object.addFuseOperation();
myNode86_2.leftArg.set(myNode86_1);
myNode86_2.rightArg.set(myNode19);
const myNode86_3 = object.addFuseOperation();
myNode86_3.leftArg.set(myNode86_2);
myNode86_3.rightArg.set(myNode22);
const myNode86_4 = object.addFuseOperation();
myNode86_4.leftArg.set(myNode86_3);
myNode86_4.rightArg.set(myNode35);
const myNode86_5 = object.addFuseOperation();
myNode86_5.leftArg.set(myNode86_4);
myNode86_5.rightArg.set(myNode42);
const myNode86_6 = object.addFuseOperation();
myNode86_6.leftArg.set(myNode86_5);
myNode86_6.rightArg.set(myNode45);
const myNode86_7 = object.addFuseOperation();
myNode86_7.leftArg.set(myNode86_6);
myNode86_7.rightArg.set(myNode53);
const myNode86_8 = object.addFuseOperation();
myNode86_8.leftArg.set(myNode86_7);
myNode86_8.rightArg.set(myNode60);
myNode86 = object.addFuseOperation();
myNode86.leftArg.set(myNode86_8);
myNode86.rightArg.set(myNode85);

/* définition du node n°87*/
const myNode87 = object.addBox();
myNode87.point1.set(-5.4669,-5.9999,-2.4669);
myNode87.point2.set(10.9328,11.9998,4.9328);
myNode87.innerRotation.center.set(0,0,0);
myNode87.innerRotation.axis.set(0.0,0.0,0.0);
myNode87.innerRotation.angle.set(0.0);

/* définition du node n°88*/
const myNode88 = object.addCommonOperation();
myNode88.leftArg.set(myNode86);
myNode88.rightArg.set(myNode87);
/*END Geometry Object Definition*/