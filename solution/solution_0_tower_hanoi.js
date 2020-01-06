/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.9995,-3.23027,-2.9995);
myNode0.point2.set(11.999,6.46054,5.999);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(2.1214,-2.28573,-4.60862);
myNode1.point2.set(0,0,9.19072);
myNode1.radius.set(0.38863);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode1.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°2*/
const myNode2 = object.addCylinder();
myNode2.point1.set(2.13586,4.62195,-2.30974);
myNode2.point2.set(0,0,4.51818);
myNode2.radius.set(0.35271);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(-1.2092049860560807,1.2092005444063125,1.2092005444063125);
myNode2.innerRotation.angle.set(2.094399343842509);

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(2.11355,-4.56047,-2.30974);
myNode3.point2.set(0,0,4.51818);
myNode3.radius.set(0.41311);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(-1.2092049860560807,1.2092005444063125,1.2092005444063125);
myNode3.innerRotation.angle.set(2.094399343842509);

/* définition du node n°4*/
const myNode4 = object.addCylinder();
myNode4.point1.set(3.11739,0.02191,-2.49912);
myNode4.point2.set(0,0,1.53708);
myNode4.radius.set(1.13031);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(-0.01357,-0.00131,-2.49912);
myNode5.point2.set(0,0,4.99862);
myNode5.radius.set(0.36019);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(0.0,0.0,0.0);
myNode5.innerRotation.angle.set(0.0);

/* définition du node n°6*/
const myNode6 = object.addCylinder();
myNode6.point1.set(2.1214,-2.28573,-18.2495);
myNode6.point2.set(0,0,36.499);
myNode6.radius.set(0.38863);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode6.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°7*/
const myNode7 = object.addCylinder();
myNode7.point1.set(2.21783,2.24954,-18.2495);
myNode7.point2.set(0,0,13.6399);
myNode7.radius.set(0.48867);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode7.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°8*/
const myNode8 = object.addFuseOperation();
myNode8.leftArg.set(myNode6);
myNode8.rightArg.set(myNode7);

/* définition du node n°9*/
const myNode9 = object.addCylinder();
myNode9.point1.set(2.13586,4.62195,-18.2495);
myNode9.point2.set(0,0,15.9388);
myNode9.radius.set(0.35271);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(-1.2092049860560807,1.2092005444063125,1.2092005444063125);
myNode9.innerRotation.angle.set(2.094399343842509);

/* définition du node n°10*/
const myNode10 = object.addCylinder();
myNode10.point1.set(2.11355,-4.56047,-18.2495);
myNode10.point2.set(0,0,15.9388);
myNode10.radius.set(0.41311);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(-1.2092049860560807,1.2092005444063125,1.2092005444063125);
myNode10.innerRotation.angle.set(2.094399343842509);

/* définition du node n°11*/
const myNode11 = object.addFuseOperation();
myNode11.leftArg.set(myNode9);
myNode11.rightArg.set(myNode10);

/* définition du node n°12*/
const myNode12 = object.addCommonOperation();
myNode12.leftArg.set(myNode8);
myNode12.rightArg.set(myNode11);

/* définition du node n°13*/
const myNode13 = object.addCylinder();
myNode13.point1.set(-0.01204,0.0267,-1.73062);
myNode13.point2.set(0,0,1.53781);
myNode13.radius.set(0.74518);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(0.00899,-0.01364,-1.73062);
myNode14.point2.set(0,0,0.76858);
myNode14.radius.set(1.12899);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);

/* définition du node n°15*/
const myNode15 = object.addCylinder();
myNode15.point1.set(1.69772,1.99527,-4.60862);
myNode15.point2.set(0,0,9.19072);
myNode15.radius.set(0.88776);
myNode15.innerRotation.center.set(0,0,0);
myNode15.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode15.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°16*/
const myNode16 = object.addCylinder();
myNode16.point1.set(2.21783,2.24954,-4.60862);
myNode16.point2.set(0,0,9.19072);
myNode16.radius.set(0.48867);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode16.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°17*/
const myNode17 = object.addCommonOperation();
myNode17.leftArg.set(myNode15);
myNode17.rightArg.set(myNode16);

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(2.11355,-4.56047,2.20945);
myNode18.point2.set(0,0,16.0401);
myNode18.radius.set(0.41311);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(-1.2092049860560807,1.2092005444063125,1.2092005444063125);
myNode18.innerRotation.angle.set(2.094399343842509);

/* définition du node n°19*/
const myNode19 = object.addCylinder();
myNode19.point1.set(2.21783,2.24954,4.5831);
myNode19.point2.set(0,0,13.6664);
myNode19.radius.set(0.48867);
myNode19.innerRotation.center.set(0,0,0);
myNode19.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode19.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°20*/
const myNode20 = object.addCylinder();
myNode20.point1.set(-3.07172,0.00159,-2.49912);
myNode20.point2.set(0,0,4.99862);
myNode20.radius.set(0.36346);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(0.0,0.0,0.0);
myNode20.innerRotation.angle.set(0.0);

/* définition du node n°21*/
const myNode21 = object.addFuseOperation();
myNode21.leftArg.set(myNode19);
myNode21.rightArg.set(myNode20);

/* définition du node n°22*/
const myNode22 = object.addCylinder();
myNode22.point1.set(1.69772,1.99527,4.5831);
myNode22.point2.set(0,0,13.6664);
myNode22.radius.set(0.88776);
myNode22.innerRotation.center.set(0,0,0);
myNode22.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode22.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°23*/
const myNode23 = object.addCommonOperation();
myNode23.leftArg.set(myNode18);
myNode23.rightArg.set(myNode21);

/* définition du node n°24*/
const myNode24 = object.addCylinder();
myNode24.point1.set(3.07287,-0.01477,-0.96104);
myNode24.point2.set(0,0,3.46054);
myNode24.radius.set(0.36716);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);

/* définition du node n°25*/
const myNode25 = object.addCylinder();
myNode25.point1.set(1.69772,1.99527,-18.2495);
myNode25.point2.set(0,0,36.499);
myNode25.radius.set(0.88776);
myNode25.innerRotation.center.set(0,0,0);
myNode25.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode25.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°26*/
const myNode26 = object.addCylinder();
myNode26.point1.set(2.13586,4.62195,-2.30972);
myNode26.point2.set(0,0,20.5592);
myNode26.radius.set(0.35271);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(-1.2092049860560807,1.2092005444063125,1.2092005444063125);
myNode26.innerRotation.angle.set(2.094399343842509);

/* définition du node n°27*/
const myNode27 = object.addCylinder();
myNode27.point1.set(2.11355,-4.56047,-18.25);
myNode27.point2.set(0,0,15.9398);
myNode27.radius.set(0.41311);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(-1.2092049860560807,1.2092005444063125,1.2092005444063125);
myNode27.innerRotation.angle.set(2.094399343842509);

/* définition du node n°28*/
const myNode28 = object.addCutOperation();
myNode28.leftArg.set(myNode26);
myNode28.rightArg.set(myNode27);

/* définition du node n°29*/
const myNode29 = object.addCylinder();
myNode29.point1.set(2.21783,2.24954,-18.2495);
myNode29.point2.set(0,0,22.8316);
myNode29.radius.set(0.48867);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,1.5707999999999998,0.0);
myNode29.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°30*/
const myNode30 = object.addCommonOperation();
myNode30.leftArg.set(myNode25);
myNode30.rightArg.set(myNode28);

/* définition du node n°31*/
const myNode31 = object.addBox();
myNode31.point1.set(-4.60862,-2.49912,-2.20844);
myNode31.point2.set(9.19072,0.7675,4.51818);
myNode31.innerRotation.center.set(0,0,0);
myNode31.innerRotation.axis.set(1.5707999999999998,0.0,0.0);
myNode31.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°32*/
const myNode32_1 = object.addFuseOperation();
myNode32_1.leftArg.set(myNode1);
myNode32_1.rightArg.set(myNode1);
const myNode32_2 = object.addFuseOperation();
myNode32_2.leftArg.set(myNode32_1);
myNode32_2.rightArg.set(myNode2);
const myNode32_3 = object.addFuseOperation();
myNode32_3.leftArg.set(myNode32_2);
myNode32_3.rightArg.set(myNode3);
const myNode32_4 = object.addFuseOperation();
myNode32_4.leftArg.set(myNode32_3);
myNode32_4.rightArg.set(myNode4);
const myNode32_5 = object.addFuseOperation();
myNode32_5.leftArg.set(myNode32_4);
myNode32_5.rightArg.set(myNode5);
const myNode32_6 = object.addFuseOperation();
myNode32_6.leftArg.set(myNode32_5);
myNode32_6.rightArg.set(myNode12);
const myNode32_7 = object.addFuseOperation();
myNode32_7.leftArg.set(myNode32_6);
myNode32_7.rightArg.set(myNode13);
const myNode32_8 = object.addFuseOperation();
myNode32_8.leftArg.set(myNode32_7);
myNode32_8.rightArg.set(myNode14);
const myNode32_9 = object.addFuseOperation();
myNode32_9.leftArg.set(myNode32_8);
myNode32_9.rightArg.set(myNode17);
const myNode32_10 = object.addFuseOperation();
myNode32_10.leftArg.set(myNode32_9);
myNode32_10.rightArg.set(myNode23);
const myNode32_11 = object.addFuseOperation();
myNode32_11.leftArg.set(myNode32_10);
myNode32_11.rightArg.set(myNode24);
const myNode32_12 = object.addFuseOperation();
myNode32_12.leftArg.set(myNode32_11);
myNode32_12.rightArg.set(myNode30);
const myNode32_13 = object.addFuseOperation();
myNode32_13.leftArg.set(myNode32_12);
myNode32_13.rightArg.set(myNode31);
myNode32 = object.addFuseOperation();
myNode32.leftArg.set(myNode32_13);
myNode32.rightArg.set(myNode20);

/* définition du node n°33*/
const myNode33 = object.addCommonOperation();
myNode33.leftArg.set(myNode0);
myNode33.rightArg.set(myNode32);
/*END Geometry Object Definition*/
