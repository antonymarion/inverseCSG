/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addSphere();
myNode0.center.set(0,1.19106,0);
myNode0.radius.set(1.3100687004886422);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addSphere();
myNode1.center.set(0,0,0);
myNode1.radius.set(1.4291710884285338);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addFuseOperation();
myNode2.leftArg.set(myNode0);
myNode2.rightArg.set(myNode1);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addSphere();
myNode3.center.set(1.19106,0,1.19106);
myNode3.radius.set(0.8337421663799907);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addCutOperation();
myNode4.leftArg.set(myNode2);
myNode4.rightArg.set(myNode3);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addSphere();
myNode5.center.set(1.66749,3.9305,0.952848);
myNode5.radius.set(2.6202309058554363);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addSphere();
myNode6.center.set(-3.9305,-2.50123,-0.119106);
myNode6.radius.set(0.9527481304101311);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7_1 = myNode4.clone();
myNode7_1.isVisible = false;
const myNode7_2 = object.addFuseOperation();
myNode7_2.leftArg.set(myNode7_1);
myNode7_2.rightArg.set(myNode5);
myNode7_2.isVisible = false;
myNode7 = object.addFuseOperation();
myNode7.leftArg.set(myNode7_2);
myNode7.rightArg.set(myNode6);
myNode7.isVisible = false;
myNode7.isVisible = true;


/*END Geometry Object Definition*/