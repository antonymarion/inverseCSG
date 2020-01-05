/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addCylinder();
myNode0.point1.set(-2.09,-3.18,-0.45495);
myNode0.point2.set(0,0,0.5449);
myNode0.radius.set(0.724);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode0.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-0.45495,3.17605,4.09005);
myNode1.point2.set(0.9089,0.9219,0.9079);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode1.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(3.182,4.092,-18.0999);
myNode2.point2.set(0,0,18.1909);
myNode2.radius.set(0.909);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode2.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°3*/
const myNode3 = object.addSphere();
myNode3.center.set(-0.453,-4.096,-4.09);
myNode3.radius.set(0.9048999944745275);

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(-0.47,-4.07,-4.09795);
myNode4.point2.set(0,0,0.9219);
myNode4.radius.set(0.931);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);

/* définition du node n°5*/
const myNode5 = object.addBox();
myNode5.point1.set(-0.45495,-4.99295,-4.06995);
myNode5.point2.set(18.5549,8.1689,8.1599);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode5.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°6*/
const myNode6 = object.addCylinder();
myNode6.point1.set(-2.09,-3.18,-18.1);
myNode6.point2.set(0,0,18.555);
myNode6.radius.set(0.724);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode6.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°7*/
const myNode7 = object.addCutOperation();
myNode7.leftArg.set(myNode5);
myNode7.rightArg.set(myNode6);

/* définition du node n°8*/
const myNode8_1 = object.addFuseOperation();
myNode8_1.leftArg.set(myNode0);
myNode8_1.rightArg.set(myNode0);
const myNode8_2 = object.addFuseOperation();
myNode8_2.leftArg.set(myNode8_1);
myNode8_2.rightArg.set(myNode1);
const myNode8_3 = object.addFuseOperation();
myNode8_3.leftArg.set(myNode8_2);
myNode8_3.rightArg.set(myNode2);
const myNode8_4 = object.addFuseOperation();
myNode8_4.leftArg.set(myNode8_3);
myNode8_4.rightArg.set(myNode3);
const myNode8_5 = object.addFuseOperation();
myNode8_5.leftArg.set(myNode8_4);
myNode8_5.rightArg.set(myNode4);
myNode8 = object.addFuseOperation();
myNode8.leftArg.set(myNode8_5);
myNode8.rightArg.set(myNode7);

/* définition du node n°9*/
const myNode9 = object.addCylinder();
myNode9.point1.set(0.818,-3.182,-18.0999);
myNode9.point2.set(0,0,18.1909);
myNode9.radius.set(0.724);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode9.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(-0.45495,-18.0999,-18.0999);
myNode10.point2.set(0.9089,36.1999,14.9069);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode10.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°11*/
const myNode11 = object.addBox();
myNode11.point1.set(-0.45495,-4.10895,4.09005);
myNode11.point2.set(0.9089,22.2089,0.9079);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode11.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(3.183,3.543,0.091);
myNode12.point2.set(0,0,18.009);
myNode12.radius.set(0.724);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode12.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°13*/
const myNode13 = object.addCutOperation();
myNode13.leftArg.set(myNode11);
myNode13.rightArg.set(myNode12);

/* définition du node n°14*/
const myNode14_1 = object.addFuseOperation();
myNode14_1.leftArg.set(myNode9);
myNode14_1.rightArg.set(myNode9);
const myNode14_2 = object.addFuseOperation();
myNode14_2.leftArg.set(myNode14_1);
myNode14_2.rightArg.set(myNode10);
myNode14 = object.addFuseOperation();
myNode14.leftArg.set(myNode14_2);
myNode14.rightArg.set(myNode13);

/* définition du node n°15*/
const myNode15 = object.addBox();
myNode15.point1.set(0.091,-4.109,-18.1);
myNode15.point2.set(18.009,7.285,14.03);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode15.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(0.818,-3.182,0.091);
myNode16.point2.set(0,0,18.009);
myNode16.radius.set(0.724);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode16.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°17*/
const myNode17 = object.addCylinder();
myNode17.point1.set(-2.091,-3.18,-18.1);
myNode17.point2.set(0,0,18.191);
myNode17.radius.set(0.372);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode17.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(0.819,-3.181,-0.455);
myNode18.point2.set(0,0,18.555);
myNode18.radius.set(0.371);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode18.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°19*/
const myNode19_1 = object.addFuseOperation();
myNode19_1.leftArg.set(myNode15);
myNode19_1.rightArg.set(myNode15);
const myNode19_2 = object.addFuseOperation();
myNode19_2.leftArg.set(myNode19_1);
myNode19_2.rightArg.set(myNode16);
const myNode19_3 = object.addFuseOperation();
myNode19_3.leftArg.set(myNode19_2);
myNode19_3.rightArg.set(myNode17);
myNode19 = object.addFuseOperation();
myNode19.leftArg.set(myNode19_3);
myNode19.rightArg.set(myNode18);

/* définition du node n°20*/
const myNode20 = object.addCutOperation();
myNode20.leftArg.set(myNode14);
myNode20.rightArg.set(myNode19);

/* définition du node n°21*/
const myNode21 = object.addCommonOperation();
myNode21.leftArg.set(myNode8);
myNode21.rightArg.set(myNode20);

/* définition du node n°22*/
const myNode22 = object.addBox();
myNode22.point1.set(-0.45495,-4.99295,-18.0999);
myNode22.point2.set(0.9089,23.0929,36.1999);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode22.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°23*/
const myNode23 = object.addCylinder();
myNode23.point1.set(3.182,0.634,0.091);
myNode23.point2.set(0,0,0.364);
myNode23.radius.set(0.723);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode23.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°24*/
const myNode24 = object.addCutOperation();
myNode24.leftArg.set(myNode22);
myNode24.rightArg.set(myNode23);

/* définition du node n°25*/
const myNode25 = object.addCylinder();
myNode25.point1.set(3.183,3.548,-18.1);
myNode25.point2.set(0,0,36.2);
myNode25.radius.set(0.371);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode25.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°26*/
const myNode26 = object.addCylinder();
myNode26.point1.set(3.181,0.636,-18.1);
myNode26.point2.set(0,0,18.555);
myNode26.radius.set(0.371);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode26.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°27*/
const myNode27 = object.addFuseOperation();
myNode27.leftArg.set(myNode25);
myNode27.rightArg.set(myNode26);

/* définition du node n°28*/
const myNode28 = object.addCutOperation();
myNode28.leftArg.set(myNode24);
myNode28.rightArg.set(myNode27);

/* définition du node n°29*/
const myNode29 = object.addCylinder();
myNode29.point1.set(0.818,-3.182,-18.1);
myNode29.point2.set(0,0,36.2);
myNode29.radius.set(0.724);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode29.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°30*/
const myNode30 = object.addCylinder();
myNode30.point1.set(-2.09,-3.18,0.091);
myNode30.point2.set(0,0,0.364);
myNode30.radius.set(0.724);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode30.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°31*/
const myNode31 = object.addCylinder();
myNode31.point1.set(-2.091,-3.18,-0.455);
myNode31.point2.set(0,0,18.555);
myNode31.radius.set(0.372);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode31.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°32*/
const myNode32_1 = object.addFuseOperation();
myNode32_1.leftArg.set(myNode29);
myNode32_1.rightArg.set(myNode29);
const myNode32_2 = object.addFuseOperation();
myNode32_2.leftArg.set(myNode32_1);
myNode32_2.rightArg.set(myNode30);
const myNode32_3 = object.addFuseOperation();
myNode32_3.leftArg.set(myNode32_2);
myNode32_3.rightArg.set(myNode31);
myNode32 = object.addFuseOperation();
myNode32.leftArg.set(myNode32_3);
myNode32.rightArg.set(myNode12);

/* définition du node n°33*/
const myNode33 = object.addCutOperation();
myNode33.leftArg.set(myNode28);
myNode33.rightArg.set(myNode32);

/* définition du node n°34*/
const myNode34 = object.addBox();
myNode34.point1.set(-18.0999,3.17605,-4.06995);
myNode34.point2.set(36.1999,0.9219,0.8779);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode34.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°35*/
const myNode35 = object.addCylinder();
myNode35.point1.set(-0.47,-4.07,-4.09795);
myNode35.point2.set(0,0,22.1979);
myNode35.radius.set(0.931);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,0.0);
myNode35.innerRotation.angle.set(0.0);

/* définition du node n°36*/
const myNode36 = object.addCylinder();
myNode36.point1.set(-4.083,-3.195,-18.0999);
myNode36.point2.set(0,0,36.1999);
myNode36.radius.set(0.924);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode36.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°37*/
const myNode37 = object.addCylinder();
myNode37.point1.set(4.099,0.451,-4.06995);
myNode37.point2.set(0,0,9.0679);
myNode37.radius.set(0.899);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode37.innerRotation.angle.set(2.094392392986396);

/* définition du node n°38*/
const myNode38 = object.addCylinder();
myNode38.point1.set(3.182,4.092,0.09105);
myNode38.point2.set(0,0,18.0089);
myNode38.radius.set(0.909);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode38.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°39*/
const myNode39 = object.addBox();
myNode39.point1.set(-18.0999,-4.10895,-3.19295);
myNode39.point2.set(36.1999,8.2069,7.2819);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode39.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°40*/
const myNode40 = object.addCylinder();
myNode40.point1.set(-4.101,4.096,-18.1);
myNode40.point2.set(0,0,18.555);
myNode40.radius.set(6.373);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode40.innerRotation.angle.set(1.5707926535897931);

/* définition du node n°41*/
const myNode41 = object.addCutOperation();
myNode41.leftArg.set(myNode39);
myNode41.rightArg.set(myNode40);

/* définition du node n°42*/
const myNode42_1 = object.addFuseOperation();
myNode42_1.leftArg.set(myNode34);
myNode42_1.rightArg.set(myNode34);
const myNode42_2 = object.addFuseOperation();
myNode42_2.leftArg.set(myNode42_1);
myNode42_2.rightArg.set(myNode35);
const myNode42_3 = object.addFuseOperation();
myNode42_3.leftArg.set(myNode42_2);
myNode42_3.rightArg.set(myNode36);
const myNode42_4 = object.addFuseOperation();
myNode42_4.leftArg.set(myNode42_3);
myNode42_4.rightArg.set(myNode37);
const myNode42_5 = object.addFuseOperation();
myNode42_5.leftArg.set(myNode42_4);
myNode42_5.rightArg.set(myNode38);
myNode42 = object.addFuseOperation();
myNode42.leftArg.set(myNode42_5);
myNode42.rightArg.set(myNode41);

/* définition du node n°43*/
const myNode43 = object.addCommonOperation();
myNode43.leftArg.set(myNode33);
myNode43.rightArg.set(myNode42);

/* définition du node n°44*/
const myNode44 = object.addFuseOperation();
myNode44.leftArg.set(myNode21);
myNode44.rightArg.set(myNode43);

/* définition du node n°45*/
const myNode45 = object.addBox();
myNode45.point1.set(-0.54495,-5.99995,-5.99995);
myNode45.point2.set(1.0909,11.9999,11.9999);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(0.0,0.0,0.0);
myNode45.innerRotation.angle.set(0.0);

/* définition du node n°46*/
const myNode46 = object.addCommonOperation();
myNode46.leftArg.set(myNode44);
myNode46.rightArg.set(myNode45);
/*END Geometry Object Definition*/