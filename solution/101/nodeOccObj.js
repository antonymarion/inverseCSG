/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-0.54495,-5.99995,-5.99995);
myNode0.point2.set(0.5459499999999999,5.99995,5.99995);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.isVisible = False

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(0.818,-3.182,-18.0999);
myNode1.point2.set(0.818,-3.182,0.09099999999999753);
myNode1.radius.set(0.724);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode1.innerRotation.angle.set(1.5707926535897931);
myNode1.isVisible = False

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-0.45495,-4.10895,4.09005);
myNode2.point2.set(0.45395,18.09995,4.9979499999999994);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode2.innerRotation.angle.set(1.5707999999999998);
myNode2.isVisible = False

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(3.183,3.543,0.091);
myNode3.point2.set(3.183,3.543,18.1);
myNode3.radius.set(0.724);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode3.innerRotation.angle.set(1.5707926535897931);
myNode3.isVisible = False

/* définition du node n°4*/
const myNode4 = object.addCutOperation();
myNode4.leftArg.set(myNode2);
myNode4.rightArg.set(myNode3);
myNode4.isVisible = False

/* définition du node n°5*/
const myNode5 = object.addBox();
myNode5.point1.set(-0.45495,-18.0999,-18.0999);
myNode5.point2.set(0.45395,18.099999999999998,-3.1930000000000014);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode5.innerRotation.angle.set(1.5707999999999998);
myNode5.isVisible = False

/* définition du node n°6*/
const myNode6_1 = object.addFuseOperation();
myNode6_1.leftArg.set(myNode1);
myNode6_1.rightArg.set(myNode1);
const myNode6_2 = object.addFuseOperation();
myNode6_2.leftArg.set(myNode6_1);
myNode6_2.rightArg.set(myNode4);
myNode6 = object.addFuseOperation();
myNode6.leftArg.set(myNode6_2);
myNode6.rightArg.set(myNode5);
myNode6.isVisible = False

/* définition du node n°7*/
const myNode7 = object.addCylinder();
myNode7.point1.set(0.819,-3.181,-0.455);
myNode7.point2.set(0.819,-3.181,18.1);
myNode7.radius.set(0.371);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode7.innerRotation.angle.set(1.5707926535897931);
myNode7.isVisible = False

/* définition du node n°8*/
const myNode8 = object.addCylinder();
myNode8.point1.set(-2.091,-3.18,-18.1);
myNode8.point2.set(-2.091,-3.18,0.09099999999999753);
myNode8.radius.set(0.372);
myNode8.innerRotation.center.set(0,0,0);
myNode8.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode8.innerRotation.angle.set(1.5707926535897931);
myNode8.isVisible = False

/* définition du node n°9*/
const myNode9 = object.addCylinder();
myNode9.point1.set(0.818,-3.182,0.091);
myNode9.point2.set(0.818,-3.182,18.1);
myNode9.radius.set(0.724);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode9.innerRotation.angle.set(1.5707926535897931);
myNode9.isVisible = False

/* définition du node n°10*/
const myNode10 = object.addBox();
myNode10.point1.set(0.091,-4.109,-18.1);
myNode10.point2.set(18.1,3.176,-4.070000000000002);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode10.innerRotation.angle.set(1.5707999999999998);
myNode10.isVisible = False

/* définition du node n°11*/
const myNode11_1 = object.addFuseOperation();
myNode11_1.leftArg.set(myNode7);
myNode11_1.rightArg.set(myNode7);
const myNode11_2 = object.addFuseOperation();
myNode11_2.leftArg.set(myNode11_1);
myNode11_2.rightArg.set(myNode8);
const myNode11_3 = object.addFuseOperation();
myNode11_3.leftArg.set(myNode11_2);
myNode11_3.rightArg.set(myNode9);
myNode11 = object.addFuseOperation();
myNode11.leftArg.set(myNode11_3);
myNode11.rightArg.set(myNode10);
myNode11.isVisible = False

/* définition du node n°12*/
const myNode12 = object.addCutOperation();
myNode12.leftArg.set(myNode6);
myNode12.rightArg.set(myNode11);
myNode12.isVisible = False

/* définition du node n°13*/
const myNode13 = object.addBox();
myNode13.point1.set(-0.45495,3.17605,4.09005);
myNode13.point2.set(0.45395,4.09795,4.9979499999999994);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode13.innerRotation.angle.set(1.5707999999999998);
myNode13.isVisible = False

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(-2.09,-3.18,-0.45495);
myNode14.point2.set(-2.09,-3.18,0.08995000000000003);
myNode14.radius.set(0.724);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode14.innerRotation.angle.set(1.5707926535897931);
myNode14.isVisible = False

/* définition du node n°15*/
const myNode15 = object.addSphere();
myNode15.center.set(-0.453,-4.096,-4.09);
myNode15.radius.set(0.9048999944745275);
myNode15.isVisible = False

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(-0.47,-4.07,-4.09795);
myNode16.point2.set(-0.47,-4.07,-3.17605);
myNode16.radius.set(0.931);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);
myNode16.isVisible = False

/* définition du node n°17*/
const myNode17 = object.addCylinder();
myNode17.point1.set(3.182,4.092,-18.0999);
myNode17.point2.set(3.182,4.092,0.09099999999999753);
myNode17.radius.set(0.909);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode17.innerRotation.angle.set(1.5707926535897931);
myNode17.isVisible = False

/* définition du node n°18*/
const myNode18 = object.addBox();
myNode18.point1.set(-0.45495,-4.99295,-4.06995);
myNode18.point2.set(18.09995,3.1759500000000003,4.08995);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode18.innerRotation.angle.set(1.5707999999999998);
myNode18.isVisible = False

/* définition du node n°19*/
const myNode19 = object.addCylinder();
myNode19.point1.set(-2.09,-3.18,-18.1);
myNode19.point2.set(-2.09,-3.18,0.4549999999999983);
myNode19.radius.set(0.724);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode19.innerRotation.angle.set(1.5707926535897931);
myNode19.isVisible = False

/* définition du node n°20*/
const myNode20 = object.addCutOperation();
myNode20.leftArg.set(myNode18);
myNode20.rightArg.set(myNode19);
myNode20.isVisible = False

/* définition du node n°21*/
const myNode21_1 = object.addFuseOperation();
myNode21_1.leftArg.set(myNode13);
myNode21_1.rightArg.set(myNode13);
const myNode21_2 = object.addFuseOperation();
myNode21_2.leftArg.set(myNode21_1);
myNode21_2.rightArg.set(myNode14);
const myNode21_3 = object.addFuseOperation();
myNode21_3.leftArg.set(myNode21_2);
myNode21_3.rightArg.set(myNode15);
const myNode21_4 = object.addFuseOperation();
myNode21_4.leftArg.set(myNode21_3);
myNode21_4.rightArg.set(myNode16);
const myNode21_5 = object.addFuseOperation();
myNode21_5.leftArg.set(myNode21_4);
myNode21_5.rightArg.set(myNode17);
myNode21 = object.addFuseOperation();
myNode21.leftArg.set(myNode21_5);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = False

/* définition du node n°22*/
const myNode22 = object.addCommonOperation();
myNode22.leftArg.set(myNode12);
myNode22.rightArg.set(myNode21);
myNode22.isVisible = False

/* définition du node n°23*/
const myNode23 = object.addCylinder();
myNode23.point1.set(-4.083,-3.195,-18.0999);
myNode23.point2.set(-4.083,-3.195,18.099999999999998);
myNode23.radius.set(0.924);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode23.innerRotation.angle.set(1.5707926535897931);
myNode23.isVisible = False

/* définition du node n°24*/
const myNode24 = object.addCylinder();
myNode24.point1.set(3.182,4.092,0.09105);
myNode24.point2.set(3.182,4.092,18.09995);
myNode24.radius.set(0.909);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode24.innerRotation.angle.set(1.5707926535897931);
myNode24.isVisible = False

/* définition du node n°25*/
const myNode25 = object.addBox();
myNode25.point1.set(-18.0999,3.17605,-4.06995);
myNode25.point2.set(18.099999999999998,4.09795,-3.1920500000000005);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode25.innerRotation.angle.set(1.5707999999999998);
myNode25.isVisible = False

/* définition du node n°26*/
const myNode26 = object.addBox();
myNode26.point1.set(-18.0999,-4.10895,-3.19295);
myNode26.point2.set(18.099999999999998,4.097949999999999,4.0889500000000005);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode26.innerRotation.angle.set(1.5707999999999998);
myNode26.isVisible = False

/* définition du node n°27*/
const myNode27 = object.addCylinder();
myNode27.point1.set(-4.101,4.096,-18.1);
myNode27.point2.set(-4.101,4.096,0.4549999999999983);
myNode27.radius.set(6.373);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode27.innerRotation.angle.set(1.5707926535897931);
myNode27.isVisible = False

/* définition du node n°28*/
const myNode28 = object.addCutOperation();
myNode28.leftArg.set(myNode26);
myNode28.rightArg.set(myNode27);
myNode28.isVisible = False

/* définition du node n°29*/
const myNode29 = object.addCylinder();
myNode29.point1.set(-0.47,-4.07,-4.09795);
myNode29.point2.set(-0.47,-4.07,18.09995);
myNode29.radius.set(0.931);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);
myNode29.isVisible = False

/* définition du node n°30*/
const myNode30 = object.addCylinder();
myNode30.point1.set(4.099,0.451,-4.06995);
myNode30.point2.set(4.099,0.451,4.9979499999999994);
myNode30.radius.set(0.899);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode30.innerRotation.angle.set(2.094392392986396);
myNode30.isVisible = False

/* définition du node n°31*/
const myNode31_1 = object.addFuseOperation();
myNode31_1.leftArg.set(myNode23);
myNode31_1.rightArg.set(myNode23);
const myNode31_2 = object.addFuseOperation();
myNode31_2.leftArg.set(myNode31_1);
myNode31_2.rightArg.set(myNode24);
const myNode31_3 = object.addFuseOperation();
myNode31_3.leftArg.set(myNode31_2);
myNode31_3.rightArg.set(myNode25);
const myNode31_4 = object.addFuseOperation();
myNode31_4.leftArg.set(myNode31_3);
myNode31_4.rightArg.set(myNode28);
const myNode31_5 = object.addFuseOperation();
myNode31_5.leftArg.set(myNode31_4);
myNode31_5.rightArg.set(myNode29);
myNode31 = object.addFuseOperation();
myNode31.leftArg.set(myNode31_5);
myNode31.rightArg.set(myNode30);
myNode31.isVisible = False

/* définition du node n°32*/
const myNode32 = object.addBox();
myNode32.point1.set(-0.45495,-4.99295,-18.0999);
myNode32.point2.set(0.45395,18.09995,18.099999999999998);
myNode32.innerRotation.center.set(0,0,0);
myNode32.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode32.innerRotation.angle.set(1.5707999999999998);
myNode32.isVisible = False

/* définition du node n°33*/
const myNode33 = object.addCylinder();
myNode33.point1.set(3.182,0.634,0.091);
myNode33.point2.set(3.182,0.634,0.45499999999999996);
myNode33.radius.set(0.723);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode33.innerRotation.angle.set(1.5707926535897931);
myNode33.isVisible = False

/* définition du node n°34*/
const myNode34 = object.addCutOperation();
myNode34.leftArg.set(myNode32);
myNode34.rightArg.set(myNode33);
myNode34.isVisible = False

/* définition du node n°35*/
const myNode35 = object.addCylinder();
myNode35.point1.set(3.183,3.548,-18.1);
myNode35.point2.set(3.183,3.548,18.1);
myNode35.radius.set(0.371);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode35.innerRotation.angle.set(1.5707926535897931);
myNode35.isVisible = False

/* définition du node n°36*/
const myNode36 = object.addCylinder();
myNode36.point1.set(3.181,0.636,-18.1);
myNode36.point2.set(3.181,0.636,0.4549999999999983);
myNode36.radius.set(0.371);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode36.innerRotation.angle.set(1.5707926535897931);
myNode36.isVisible = False

/* définition du node n°37*/
const myNode37 = object.addFuseOperation();
myNode37.leftArg.set(myNode35);
myNode37.rightArg.set(myNode36);
myNode37.isVisible = False

/* définition du node n°38*/
const myNode38 = object.addCutOperation();
myNode38.leftArg.set(myNode34);
myNode38.rightArg.set(myNode37);
myNode38.isVisible = False

/* définition du node n°39*/
const myNode39 = object.addCylinder();
myNode39.point1.set(0.818,-3.182,-18.1);
myNode39.point2.set(0.818,-3.182,18.1);
myNode39.radius.set(0.724);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode39.innerRotation.angle.set(1.5707926535897931);
myNode39.isVisible = False

/* définition du node n°40*/
const myNode40 = object.addCylinder();
myNode40.point1.set(-2.091,-3.18,-0.455);
myNode40.point2.set(-2.091,-3.18,18.1);
myNode40.radius.set(0.372);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode40.innerRotation.angle.set(1.5707926535897931);
myNode40.isVisible = False

/* définition du node n°41*/
const myNode41 = object.addCylinder();
myNode41.point1.set(-2.09,-3.18,0.091);
myNode41.point2.set(-2.09,-3.18,0.45499999999999996);
myNode41.radius.set(0.724);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode41.innerRotation.angle.set(1.5707926535897931);
myNode41.isVisible = False

/* définition du node n°42*/
const myNode42_1 = object.addFuseOperation();
myNode42_1.leftArg.set(myNode39);
myNode42_1.rightArg.set(myNode39);
const myNode42_2 = object.addFuseOperation();
myNode42_2.leftArg.set(myNode42_1);
myNode42_2.rightArg.set(myNode3);
const myNode42_3 = object.addFuseOperation();
myNode42_3.leftArg.set(myNode42_2);
myNode42_3.rightArg.set(myNode40);
myNode42 = object.addFuseOperation();
myNode42.leftArg.set(myNode42_3);
myNode42.rightArg.set(myNode41);
myNode42.isVisible = False

/* définition du node n°43*/
const myNode43 = object.addCutOperation();
myNode43.leftArg.set(myNode38);
myNode43.rightArg.set(myNode42);
myNode43.isVisible = False

/* définition du node n°44*/
const myNode44 = object.addCommonOperation();
myNode44.leftArg.set(myNode31);
myNode44.rightArg.set(myNode43);
myNode44.isVisible = False

/* définition du node n°45*/
const myNode45 = object.addFuseOperation();
myNode45.leftArg.set(myNode22);
myNode45.rightArg.set(myNode44);
myNode45.isVisible = False

/* définition du node n°46*/
const myNode46 = object.addCommonOperation();
myNode46.leftArg.set(myNode0);
myNode46.rightArg.set(myNode45);
myNode46.isVisible = True


/*END Geometry Object Definition*/