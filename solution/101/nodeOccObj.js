/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addSphere();
myNode0.center.set(-0.453,-4.096,-4.09);
myNode0.radius.set(0.9048999944745275);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-0.45495,-4.99295,-4.06995);
myNode1.point2.set(18.09995,3.1759500000000003,4.08995);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode1.innerRotation.angle.set(90.0002104591497);
myNode1.innerTranslation.vector.set(0,0,0);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(-2.09,-3.18,-18.1);
myNode2.point2.set(-2.09,-3.18,0.4549999999999983);
myNode2.radius.set(0.724);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode2.innerRotation.angle.set(89.99978954085029);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addCutOperation();
myNode3.leftArg.set(myNode1);
myNode3.rightArg.set(myNode2);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(3.182,4.092,-18.0999);
myNode4.point2.set(3.182,4.092,0.09099999999999753);
myNode4.radius.set(0.909);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode4.innerRotation.angle.set(89.99978954085029);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(-0.47,-4.07,-4.09795);
myNode5.point2.set(-0.47,-4.07,-3.17605);
myNode5.radius.set(0.931);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addBox();
myNode6.point1.set(-0.45495,3.17605,4.09005);
myNode6.point2.set(0.45395,4.09795,4.9979499999999994);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode6.innerRotation.angle.set(90.0002104591497);
myNode6.innerTranslation.vector.set(0,0,0);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addCylinder();
myNode7.point1.set(-2.09,-3.18,-0.45495);
myNode7.point2.set(-2.09,-3.18,0.08995000000000003);
myNode7.radius.set(0.724);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode7.innerRotation.angle.set(89.99978954085029);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8_1 = myNode0.clone();
myNode8_1.isVisible = false;
const myNode8_2 = object.addFuseOperation();
myNode8_2.leftArg.set(myNode8_1);
myNode8_2.rightArg.set(myNode3);
myNode8_2.isVisible = false;
const myNode8_3 = object.addFuseOperation();
myNode8_3.leftArg.set(myNode8_2);
myNode8_3.rightArg.set(myNode4);
myNode8_3.isVisible = false;
const myNode8_4 = object.addFuseOperation();
myNode8_4.leftArg.set(myNode8_3);
myNode8_4.rightArg.set(myNode5);
myNode8_4.isVisible = false;
const myNode8_5 = object.addFuseOperation();
myNode8_5.leftArg.set(myNode8_4);
myNode8_5.rightArg.set(myNode6);
myNode8_5.isVisible = false;
myNode8 = object.addFuseOperation();
myNode8.leftArg.set(myNode8_5);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = false;
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(-0.45495,-18.0999,-18.0999);
myNode9.point2.set(0.45395,18.099999999999998,-3.1930000000000014);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode9.innerRotation.angle.set(90.0002104591497);
myNode9.innerTranslation.vector.set(0,0,0);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10 = object.addCylinder();
myNode10.point1.set(0.818,-3.182,-18.0999);
myNode10.point2.set(0.818,-3.182,0.09099999999999753);
myNode10.radius.set(0.724);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode10.innerRotation.angle.set(89.99978954085029);
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addBox();
myNode11.point1.set(-0.45495,-4.10895,4.09005);
myNode11.point2.set(0.45395,18.09995,4.9979499999999994);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode11.innerRotation.angle.set(90.0002104591497);
myNode11.innerTranslation.vector.set(0,0,0);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(3.183,3.543,0.091);
myNode12.point2.set(3.183,3.543,18.1);
myNode12.radius.set(0.724);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode12.innerRotation.angle.set(89.99978954085029);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addCutOperation();
myNode13.leftArg.set(myNode11);
myNode13.rightArg.set(myNode12);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14_1 = myNode9.clone();
myNode14_1.isVisible = false;
const myNode14_2 = object.addFuseOperation();
myNode14_2.leftArg.set(myNode14_1);
myNode14_2.rightArg.set(myNode10);
myNode14_2.isVisible = false;
myNode14 = object.addFuseOperation();
myNode14.leftArg.set(myNode14_2);
myNode14.rightArg.set(myNode13);
myNode14.isVisible = false;
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addCylinder();
myNode15.point1.set(0.818,-3.182,0.091);
myNode15.point2.set(0.818,-3.182,18.1);
myNode15.radius.set(0.724);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode15.innerRotation.angle.set(89.99978954085029);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(-2.091,-3.18,-18.1);
myNode16.point2.set(-2.091,-3.18,0.09099999999999753);
myNode16.radius.set(0.372);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode16.innerRotation.angle.set(89.99978954085029);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addCylinder();
myNode17.point1.set(0.819,-3.181,-0.455);
myNode17.point2.set(0.819,-3.181,18.1);
myNode17.radius.set(0.371);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode17.innerRotation.angle.set(89.99978954085029);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addBox();
myNode18.point1.set(0.091,-4.109,-18.1);
myNode18.point2.set(18.1,3.176,-4.070000000000002);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode18.innerRotation.angle.set(90.0002104591497);
myNode18.innerTranslation.vector.set(0,0,0);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19_1 = myNode15.clone();
myNode19_1.isVisible = false;
const myNode19_2 = object.addFuseOperation();
myNode19_2.leftArg.set(myNode19_1);
myNode19_2.rightArg.set(myNode16);
myNode19_2.isVisible = false;
const myNode19_3 = object.addFuseOperation();
myNode19_3.leftArg.set(myNode19_2);
myNode19_3.rightArg.set(myNode17);
myNode19_3.isVisible = false;
myNode19 = object.addFuseOperation();
myNode19.leftArg.set(myNode19_3);
myNode19.rightArg.set(myNode18);
myNode19.isVisible = false;
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addCutOperation();
myNode20.leftArg.set(myNode14);
myNode20.rightArg.set(myNode19);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21 = object.addCommonOperation();
myNode21.leftArg.set(myNode8);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addBox();
myNode22.point1.set(-0.45495,-4.99295,-18.0999);
myNode22.point2.set(0.45395,18.09995,18.099999999999998);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode22.innerRotation.angle.set(90.0002104591497);
myNode22.innerTranslation.vector.set(0,0,0);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addCylinder();
myNode23.point1.set(3.182,0.634,0.091);
myNode23.point2.set(3.182,0.634,0.45499999999999996);
myNode23.radius.set(0.723);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode23.innerRotation.angle.set(89.99978954085029);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addCutOperation();
myNode24.leftArg.set(myNode22);
myNode24.rightArg.set(myNode23);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addCylinder();
myNode25.point1.set(3.183,3.548,-18.1);
myNode25.point2.set(3.183,3.548,18.1);
myNode25.radius.set(0.371);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode25.innerRotation.angle.set(89.99978954085029);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addCylinder();
myNode26.point1.set(3.181,0.636,-18.1);
myNode26.point2.set(3.181,0.636,0.4549999999999983);
myNode26.radius.set(0.371);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode26.innerRotation.angle.set(89.99978954085029);
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
const myNode29 = object.addCylinder();
myNode29.point1.set(0.818,-3.182,-18.1);
myNode29.point2.set(0.818,-3.182,18.1);
myNode29.radius.set(0.724);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode29.innerRotation.angle.set(89.99978954085029);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addCylinder();
myNode30.point1.set(-2.09,-3.18,0.091);
myNode30.point2.set(-2.09,-3.18,0.45499999999999996);
myNode30.radius.set(0.724);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode30.innerRotation.angle.set(89.99978954085029);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addCylinder();
myNode31.point1.set(-2.091,-3.18,-0.455);
myNode31.point2.set(-2.091,-3.18,18.1);
myNode31.radius.set(0.372);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode31.innerRotation.angle.set(89.99978954085029);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32_1 = myNode12.clone();
myNode32_1.isVisible = false;
const myNode32_2 = object.addFuseOperation();
myNode32_2.leftArg.set(myNode32_1);
myNode32_2.rightArg.set(myNode29);
myNode32_2.isVisible = false;
const myNode32_3 = object.addFuseOperation();
myNode32_3.leftArg.set(myNode32_2);
myNode32_3.rightArg.set(myNode30);
myNode32_3.isVisible = false;
myNode32 = object.addFuseOperation();
myNode32.leftArg.set(myNode32_3);
myNode32.rightArg.set(myNode31);
myNode32.isVisible = false;
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addCutOperation();
myNode33.leftArg.set(myNode28);
myNode33.rightArg.set(myNode32);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addCylinder();
myNode34.point1.set(-4.083,-3.195,-18.0999);
myNode34.point2.set(-4.083,-3.195,18.099999999999998);
myNode34.radius.set(0.924);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode34.innerRotation.angle.set(89.99978954085029);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addBox();
myNode35.point1.set(-18.0999,3.17605,-4.06995);
myNode35.point2.set(18.099999999999998,4.09795,-3.1920500000000005);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode35.innerRotation.angle.set(90.0002104591497);
myNode35.innerTranslation.vector.set(0,0,0);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addBox();
myNode36.point1.set(-18.0999,-4.10895,-3.19295);
myNode36.point2.set(18.099999999999998,4.097949999999999,4.0889500000000005);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(-1.5707999999999998,0.0,0.0);
myNode36.innerRotation.angle.set(90.0002104591497);
myNode36.innerTranslation.vector.set(0,0,0);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addCylinder();
myNode37.point1.set(-4.101,4.096,-18.1);
myNode37.point2.set(-4.101,4.096,0.4549999999999983);
myNode37.radius.set(6.373);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode37.innerRotation.angle.set(89.99978954085029);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addCutOperation();
myNode38.leftArg.set(myNode36);
myNode38.rightArg.set(myNode37);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39 = object.addCylinder();
myNode39.point1.set(4.099,0.451,-4.06995);
myNode39.point2.set(4.099,0.451,4.9979499999999994);
myNode39.radius.set(0.899);
myNode39.innerRotation.center.set(0,0,0);
myNode39.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode39.innerRotation.angle.set(119.9998447624254);
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addCylinder();
myNode40.point1.set(3.182,4.092,0.09105);
myNode40.point2.set(3.182,4.092,18.09995);
myNode40.radius.set(0.909);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode40.innerRotation.angle.set(89.99978954085029);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41 = object.addCylinder();
myNode41.point1.set(-0.47,-4.07,-4.09795);
myNode41.point2.set(-0.47,-4.07,18.09995);
myNode41.radius.set(0.931);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,0.0,0.0);
myNode41.innerRotation.angle.set(0.0);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42_1 = myNode34.clone();
myNode42_1.isVisible = false;
const myNode42_2 = object.addFuseOperation();
myNode42_2.leftArg.set(myNode42_1);
myNode42_2.rightArg.set(myNode35);
myNode42_2.isVisible = false;
const myNode42_3 = object.addFuseOperation();
myNode42_3.leftArg.set(myNode42_2);
myNode42_3.rightArg.set(myNode38);
myNode42_3.isVisible = false;
const myNode42_4 = object.addFuseOperation();
myNode42_4.leftArg.set(myNode42_3);
myNode42_4.rightArg.set(myNode39);
myNode42_4.isVisible = false;
const myNode42_5 = object.addFuseOperation();
myNode42_5.leftArg.set(myNode42_4);
myNode42_5.rightArg.set(myNode40);
myNode42_5.isVisible = false;
myNode42 = object.addFuseOperation();
myNode42.leftArg.set(myNode42_5);
myNode42.rightArg.set(myNode41);
myNode42.isVisible = false;
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addCommonOperation();
myNode43.leftArg.set(myNode33);
myNode43.rightArg.set(myNode42);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44 = object.addFuseOperation();
myNode44.leftArg.set(myNode21);
myNode44.rightArg.set(myNode43);
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45 = object.addBox();
myNode45.point1.set(-0.54495,-5.99995,-5.99995);
myNode45.point2.set(0.5459499999999999,5.99995,5.99995);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(0.0,0.0,0.0);
myNode45.innerRotation.angle.set(0.0);
myNode45.innerTranslation.vector.set(0,0,0);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addCommonOperation();
myNode46.leftArg.set(myNode44);
myNode46.rightArg.set(myNode45);
myNode46.isVisible = true;


/*END Geometry Object Definition*/