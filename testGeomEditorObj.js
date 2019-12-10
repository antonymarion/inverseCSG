/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addCylinder();
const myNode0.point1.set(-4.8,0,-2);
const myNode0.point2.set(4.8,0,0);
const myNode0.radius.set(0.2);
const myNode0.innerRotation.center.set(0,0,0);
const myNode0.innerRotation.axis.set(0.0,0.0,0.0);
const myNode0.innerRotation.angle.set(0.0);

/* définition du node n°1*/
const myNode1 = object.addCylinder();
const myNode1.point1.set(-0.352958,7.5,-1.63891);
const myNode1.point2.set(2.99964,0,0);
const myNode1.radius.set(0.3);
const myNode1.innerRotation.center.set(0,0,0);
const myNode1.innerRotation.axis.set(-0.47875264202415146,0.4787508834707333,1.5172618974915049);
const myNode1.innerRotation.angle.set(1.661472288739308);

/* définition du node n°2*/
const myNode2 = object.addCylinder();
const myNode2.point1.set(-1.8,0,-2);
const myNode2.point2.set(3.3,0,0);
const myNode2.radius.set(0.2);
const myNode2.innerRotation.center.set(0,0,0);
const myNode2.innerRotation.axis.set(0.0,0.0,0.0);
const myNode2.innerRotation.angle.set(0.0);

/* définition du node n°3*/
const myNode3 = object.addSphere();
const myNode3.center.set(0,0,3.6);
const myNode3.radius.set(0.6);

/* définition du node n°4*/
const myNode4 = object.addSphere();
const myNode4.center.set(0.388,0.672,6.898);
const myNode4.radius.set(3.0);

/* définition du node n°5*/
const myNode5 = object.addFuseOperation();
const myNode5.leftArg.set(myNode3);
const myNode5.rightArg.set(myNode4);

/* définition du node n°6*/
const myNode6 = object.addBox();
const myNode6.point1.set(-30,-30,4.86407);
const myNode6.point2.set(60,60,25.1359);
const myNode6.innerRotation.center.set(0,0,0);
const myNode6.innerRotation.axis.set(0.09138666224129718,0.3418088851524913,2.5996850318740568);
const myNode6.innerRotation.angle.set(2.6236514823723844);

/* définition du node n°7*/
const myNode7 = object.addSphere();
const myNode7.center.set(0.388,0.672,6.898);
const myNode7.radius.set(2.8);

/* définition du node n°8*/
const myNode8 = object.addFuseOperation();
const myNode8.leftArg.set(myNode6);
const myNode8.rightArg.set(myNode7);

/* définition du node n°9*/
const myNode9 = object.addCutOperation();
const myNode9.leftArg.set(myNode5);
const myNode9.rightArg.set(myNode8);

/* définition du node n°10*/
const myNode10 = object.addCylinder();
const myNode10.point1.set(3.47765,-1.38778e-17,1.03397);
const myNode10.point2.set(3.38649,0,0);
const myNode10.radius.set(0.2);
const myNode10.innerRotation.center.set(0,0,0);
const myNode10.innerRotation.axis.set(0.6823240242080083,-1.1803304779807473,0.888915434631127);
const myNode10.innerRotation.angle.set(1.6275493114456212);

/* définition du node n°11*/
const myNode11 = object.addCylinder();
const myNode11.point1.set(-30,0,-2.2656e-16);
const myNode11.point2.set(29.3,0,0);
const myNode11.radius.set(1.2);
const myNode11.innerRotation.center.set(0,0,0);
const myNode11.innerRotation.axis.set(0.0,-1.5707999999999998,0.0);
const myNode11.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°12*/
const myNode12 = object.addCylinder();
const myNode12.point1.set(0.7,0,-2.2656e-16);
const myNode12.point2.set(29.3,0,0);
const myNode12.radius.set(1.2);
const myNode12.innerRotation.center.set(0,0,0);
const myNode12.innerRotation.axis.set(0.0,-1.5707999999999998,0.0);
const myNode12.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°13*/
const myNode13 = object.addFuseOperation();
const myNode13.leftArg.set(myNode11);
const myNode13.rightArg.set(myNode12);

/* définition du node n°14*/
const myNode14 = object.addBox();
const myNode14.point1.set(-3.64359,-30,-30);
const myNode14.point2.set(5.61309,30.3479,60);
const myNode14.innerRotation.center.set(0,0,0);
const myNode14.innerRotation.axis.set(-0.13729032737562527,-1.5664319079313211,0.13729032737562527);
const myNode14.innerRotation.angle.set(1.5784188893215803);

/* définition du node n°15*/
const myNode15 = object.addCommonOperation();
const myNode15.leftArg.set(myNode13);
const myNode15.rightArg.set(myNode14);

/* définition du node n°16*/
const myNode16 = object.addBox();
const myNode16.point1.set(1.63181,-2.81767,-3.3);
const myNode16.point2.set(0.899893,4.59945,1.6);
const myNode16.innerRotation.center.set(0,0,0);
const myNode16.innerRotation.axis.set(-0.20563165936909894,-1.5609962269446847,0.20563165936909905);
const myNode16.innerRotation.angle.set(1.58785326123207);

/* définition du node n°17*/
const myNode17 = object.addCylinder();
const myNode17.point1.set(0,0,2);
const myNode17.point2.set(1.5,0,0);
const myNode17.radius.set(0.2);
const myNode17.innerRotation.center.set(0,0,0);
const myNode17.innerRotation.axis.set(0.0,0.0,0.0);
const myNode17.innerRotation.angle.set(0.0);

/* définition du node n°18*/
const myNode18 = object.addBox();
const myNode18.point1.set(-1.33784,-0.0529937,1.8);
const myNode18.point2.set(0.299965,2.39972,2.4);
const myNode18.innerRotation.center.set(0,0,0);
const myNode18.innerRotation.axis.set(-0.4787550210979034,-1.5172553245063753,0.47875502109790347);
const myNode18.innerRotation.angle.set(1.6614681640632945);

/* définition du node n°19*/
const myNode19 = object.addCylinder();
const myNode19.point1.set(-1.15271,-7.5,-1.9704);
const myNode19.point2.set(2.99925,0,0);
const myNode19.radius.set(0.3);
const myNode19.innerRotation.center.set(0,0,0);
const myNode19.innerRotation.axis.set(-0.13729248651203702,0.13729198220950112,1.5664360946695366);
const myNode19.innerRotation.angle.set(1.578423376003796);

/* définition du node n°20*/
const myNode20 = object.addCylinder();
const myNode20.point1.set(-0.967901,-3.5,1.28549);
const myNode20.point2.set(4.99949,0,0);
const myNode20.radius.set(0.3);
const myNode20.innerRotation.center.set(0,0,0);
const myNode20.innerRotation.axis.set(-0.681239062268965,-0.6812365599427607,-1.4612874082338034);
const myNode20.innerRotation.angle.set(1.7502944895149535);

/* définition du node n°21*/
const myNode21 = object.addCylinder();
const myNode21.point1.set(-1.7,0,2);
const myNode21.point2.set(1.7,0,0);
const myNode21.radius.set(0.2);
const myNode21.innerRotation.center.set(0,0,0);
const myNode21.innerRotation.axis.set(0.0,0.0,0.0);
const myNode21.innerRotation.angle.set(0.0);

/* définition du node n°22*/
const myNode22 = object.addBox();
const myNode22.point1.set(-1.93777,-0.352958,1.5);
const myNode22.point2.set(0.599929,2.99964,6);
const myNode22.innerRotation.center.set(0,0,0);
const myNode22.innerRotation.axis.set(-0.4787550210979034,-1.5172553245063753,0.47875502109790347);
const myNode22.innerRotation.angle.set(1.6614681640632945);

/* définition du node n°23*/
const myNode23 = object.addBox();
const myNode23.point1.set(-0.967901,0.985899,1.5);
const myNode23.point2.set(4.99949,0.599939,2);
const myNode23.innerRotation.center.set(0,0,0);
const myNode23.innerRotation.axis.set(0.5464257511870196,-1.5008421538234318,-0.5464257511870196);
const myNode23.innerRotation.angle.set(1.6881022995701285);

/* définition du node n°24*/
const myNode24 = object.addCylinder();
const myNode24.point1.set(-3.01764,-3.5,1.93225);
const myNode24.point2.set(4.99941,0,0);
const myNode24.radius.set(0.3);
const myNode24.innerRotation.center.set(0,0,0);
const myNode24.innerRotation.axis.set(-0.20563320717510927,0.2056324518435505,1.5610007343919186);
const myNode24.innerRotation.angle.set(1.5878579955135852);

/* définition du node n°25*/
const myNode25 = object.addBox();
const myNode25.point1.set(-1.33784,-0.0529937,4.8);
const myNode25.point2.set(0.299965,2.39972,2.4);
const myNode25.innerRotation.center.set(0,0,0);
const myNode25.innerRotation.axis.set(-0.4787550210979034,-1.5172553245063753,0.47875502109790347);
const myNode25.innerRotation.angle.set(1.6614681640632945);

/* définition du node n°26*/
const myNode26 = object.addBox();
const myNode26.point1.set(-2,-30,-7.2);
const myNode26.point2.set(32,60,2.4);
const myNode26.innerRotation.center.set(0,0,0);
const myNode26.innerRotation.axis.set(0.0,-1.5707999999999998,0.0);
const myNode26.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°27*/
const myNode27 = object.addBox();
const myNode27.point1.set(-2.26943,-0.852786,-7.2);
const myNode27.point2.set(0.899775,2.3994,7.2);
const myNode27.innerRotation.center.set(0,0,0);
const myNode27.innerRotation.axis.set(-0.1372924341599667,-1.5664330589710023,0.1372924341599666);
const myNode27.innerRotation.angle.set(1.5784203981171776);

/* définition du node n°28*/
const myNode28 = object.addCommonOperation();
const myNode28.leftArg.set(myNode26);
const myNode28.rightArg.set(myNode27);

/* définition du node n°29*/
const myNode29 = object.addSphere();
const myNode29.center.set(0,0,0);
const myNode29.radius.set(1.0);

/* définition du node n°30*/
const myNode30 = object.addBox();
const myNode30.point1.set(1.63181,-3.01764,-3.5);
const myNode30.point2.set(0.599929,4.99941,2);
const myNode30.innerRotation.center.set(0,0,0);
const myNode30.innerRotation.axis.set(-0.20563165936909894,-1.5609962269446847,0.20563165936909905);
const myNode30.innerRotation.angle.set(1.58785326123207);

/* définition du node n°31*/
const myNode31 = object.addCylinder();
const myNode31.point1.set(-3.7,0,-2.2656e-16);
const myNode31.point2.set(3,0,0);
const myNode31.radius.set(1.2);
const myNode31.innerRotation.center.set(0,0,0);
const myNode31.innerRotation.axis.set(0.0,-1.5707999999999998,0.0);
const myNode31.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°32*/
const myNode32 = object.addCylinder();
const myNode32.point1.set(1.5,0,-2);
const myNode32.point2.set(28.5,0,0);
const myNode32.radius.set(0.2);
const myNode32.innerRotation.center.set(0,0,0);
const myNode32.innerRotation.axis.set(0.0,0.0,0.0);
const myNode32.innerRotation.angle.set(0.0);

/* définition du node n°33*/
const myNode33 = object.addFuseOperation();
const myNode33.leftArg.set(myNode29);
const myNode33.rightArg.set(myNode32);

/* définition du node n°34*/
const myNode34 = object.addCutOperation();
const myNode34.leftArg.set(myNode29);
const myNode34.rightArg.set(myNode33);

/* définition du node n°35*/
const myNode35 = object.addCylinder();
const myNode35.point1.set(0.7,0,-2.2656e-16);
const myNode35.point2.set(2.9,0,0);
const myNode35.radius.set(1.2);
const myNode35.innerRotation.center.set(0,0,0);
const myNode35.innerRotation.axis.set(0.0,-1.5707999999999998,0.0);
const myNode35.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°36*/
const myNode36 = object.addCylinder();
const myNode36.point1.set(0.7,0,-2.2656e-16);
const myNode36.point2.set(3,0,0);
const myNode36.radius.set(1.2);
const myNode36.innerRotation.center.set(0,0,0);
const myNode36.innerRotation.axis.set(0.0,-1.5707999999999998,0.0);
const myNode36.innerRotation.angle.set(1.5707999999999998);

/* définition du node n°37*/
const myNode37 = object.addBox();
const myNode37.point1.set(-1.66958,-0.852786,-4.2);
const myNode37.point2.set(0.299925,2.3994,2.4);
const myNode37.innerRotation.center.set(0,0,0);
const myNode37.innerRotation.axis.set(-0.1372924341599667,-1.5664330589710023,0.1372924341599666);
const myNode37.innerRotation.angle.set(1.5784203981171776);

/* définition du node n°38*/
const myNode38 = object.addBox();
const myNode38.point1.set(-2.26943,-1.1518,-7.5);
const myNode38.point2.set(0.59985,2.99833,6);
const myNode38.innerRotation.center.set(0,0,0);
const myNode38.innerRotation.axis.set(-0.1372924341599667,-1.5664330589710023,0.1372924341599666);
const myNode38.innerRotation.angle.set(1.5784203981171776);

/* définition du node n°39*/
const myNode39 = object.addBox();
const myNode39.point1.set(-0.767921,1.58584,1.7);
const myNode39.point2.set(4.59953,0.299969,1.6);
const myNode39.innerRotation.center.set(0,0,0);
const myNode39.innerRotation.axis.set(0.5464257511870196,-1.5008421538234318,-0.5464257511870196);
const myNode39.innerRotation.angle.set(1.6881022995701285);

/* définition du node n°40*/
const myNode40_1 = object.addFuseOperation();
myNode40_1.leftArg.set(myNode0);
myNode40_1.rightArg.set(myNode0);
const myNode40_2 = object.addFuseOperation();
myNode40_2.leftArg.set(myNode40_1);
myNode40_2.rightArg.set(myNode1);
const myNode40_3 = object.addFuseOperation();
myNode40_3.leftArg.set(myNode40_2);
myNode40_3.rightArg.set(myNode2);
const myNode40_4 = object.addFuseOperation();
myNode40_4.leftArg.set(myNode40_3);
myNode40_4.rightArg.set(myNode9);
const myNode40_5 = object.addFuseOperation();
myNode40_5.leftArg.set(myNode40_4);
myNode40_5.rightArg.set(myNode10);
const myNode40_6 = object.addFuseOperation();
myNode40_6.leftArg.set(myNode40_5);
myNode40_6.rightArg.set(myNode15);
const myNode40_7 = object.addFuseOperation();
myNode40_7.leftArg.set(myNode40_6);
myNode40_7.rightArg.set(myNode16);
const myNode40_8 = object.addFuseOperation();
myNode40_8.leftArg.set(myNode40_7);
myNode40_8.rightArg.set(myNode17);
const myNode40_9 = object.addFuseOperation();
myNode40_9.leftArg.set(myNode40_8);
myNode40_9.rightArg.set(myNode18);
const myNode40_10 = object.addFuseOperation();
myNode40_10.leftArg.set(myNode40_9);
myNode40_10.rightArg.set(myNode19);
const myNode40_11 = object.addFuseOperation();
myNode40_11.leftArg.set(myNode40_10);
myNode40_11.rightArg.set(myNode20);
const myNode40_12 = object.addFuseOperation();
myNode40_12.leftArg.set(myNode40_11);
myNode40_12.rightArg.set(myNode21);
const myNode40_13 = object.addFuseOperation();
myNode40_13.leftArg.set(myNode40_12);
myNode40_13.rightArg.set(myNode22);
const myNode40_14 = object.addFuseOperation();
myNode40_14.leftArg.set(myNode40_13);
myNode40_14.rightArg.set(myNode23);
const myNode40_15 = object.addFuseOperation();
myNode40_15.leftArg.set(myNode40_14);
myNode40_15.rightArg.set(myNode24);
const myNode40_16 = object.addFuseOperation();
myNode40_16.leftArg.set(myNode40_15);
myNode40_16.rightArg.set(myNode25);
const myNode40_17 = object.addFuseOperation();
myNode40_17.leftArg.set(myNode40_16);
myNode40_17.rightArg.set(myNode28);
const myNode40_18 = object.addFuseOperation();
myNode40_18.leftArg.set(myNode40_17);
myNode40_18.rightArg.set(myNode29);
const myNode40_19 = object.addFuseOperation();
myNode40_19.leftArg.set(myNode40_18);
myNode40_19.rightArg.set(myNode30);
const myNode40_20 = object.addFuseOperation();
myNode40_20.leftArg.set(myNode40_19);
myNode40_20.rightArg.set(myNode31);
const myNode40_21 = object.addFuseOperation();
myNode40_21.leftArg.set(myNode40_20);
myNode40_21.rightArg.set(myNode34);
const myNode40_22 = object.addFuseOperation();
myNode40_22.leftArg.set(myNode40_21);
myNode40_22.rightArg.set(myNode35);
const myNode40_23 = object.addFuseOperation();
myNode40_23.leftArg.set(myNode40_22);
myNode40_23.rightArg.set(myNode36);
const myNode40_24 = object.addFuseOperation();
myNode40_24.leftArg.set(myNode40_23);
myNode40_24.rightArg.set(myNode37);
const myNode40_25 = object.addFuseOperation();
myNode40_25.leftArg.set(myNode40_24);
myNode40_25.rightArg.set(myNode38);
const myNode40 = object.addFuseOperation();
myNode40.leftArg.set(myNode40_25);
myNode40.rightArg.set(myNode39);
/*END Geometry Object Definition*/