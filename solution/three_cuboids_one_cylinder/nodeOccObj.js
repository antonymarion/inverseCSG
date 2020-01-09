/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.99995,-4.48209,-4.59227);
myNode0.point2.set(5.99995,4.4821,4.592300000000001);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(0.0,4.999999999810711e-06,1.5000000000320313e-05);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-3.25745,-3.73821,-2.5224);
myNode1.point2.set(-0.8104999999999998,2.37945,1.14817);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(1.5009492335630792,0.5367291662874052,-0.40268837158402887);
myNode1.innerRotation.angle.set(94.20033809656081);
myNode1.innerTranslation.vector.set(-2.033975,-0.6793800000000001,-0.6871150000000001);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-2.35298,-19,3.44399);
myNode2.point2.set(19.000020000000003,3.757200000000001,19.00009);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(-3.046853344796487,-0.6735225296972726,0.1181773917561655);
myNode2.innerRotation.angle.set(178.91439779000046);
myNode2.innerTranslation.vector.set(8.32352,-7.6213999999999995,11.22204);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addCutOperation();
myNode3.leftArg.set(myNode1);
myNode3.rightArg.set(myNode2);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addBox();
myNode4.point1.set(-2.35296,-2.36045,-0.226618);
myNode4.point2.set(3.7647,3.75716,3.443882);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(-3.046853344796487,-0.6735225296972726,0.1181773917561655);
myNode4.innerRotation.angle.set(178.91439779000046);
myNode4.innerTranslation.vector.set(0.70587,0.6983549999999998,1.608632);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addBox();
myNode5.point1.set(-19,1.28492,-19);
myNode5.point2.set(0.30799999999999983,19.00002,1.822099999999999);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(-2.451101545859156,-0.8686191924415849,0.334655309901207);
myNode5.innerRotation.angle.set(150.22416111736118);
myNode5.innerTranslation.vector.set(-9.346,10.14247,-8.58895);
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
const myNode8 = object.addCommonOperation();
myNode8.leftArg.set(myNode0);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = true;


/*END Geometry Object Definition*/