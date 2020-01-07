/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addSphere();
myNode0.center.set(-3.9305,-2.50123,-0.119106);
myNode0.radius.set(0.9527481304101311);
myNode0.isVisible = False

/* définition du node n°1*/
const myNode1 = object.addSphere();
myNode1.center.set(0,1.19106,0);
myNode1.radius.set(1.3100687004886422);
myNode1.isVisible = False

/* définition du node n°2*/
const myNode2 = object.addSphere();
myNode2.center.set(0,0,0);
myNode2.radius.set(1.4291710884285338);
myNode2.isVisible = False

/* définition du node n°3*/
const myNode3 = object.addFuseOperation();
myNode3.leftArg.set(myNode1);
myNode3.rightArg.set(myNode2);
myNode3.isVisible = False

/* définition du node n°4*/
const myNode4 = object.addSphere();
myNode4.center.set(1.19106,0,1.19106);
myNode4.radius.set(0.8337421663799907);
myNode4.isVisible = False

/* définition du node n°5*/
const myNode5 = object.addCutOperation();
myNode5.leftArg.set(myNode3);
myNode5.rightArg.set(myNode4);
myNode5.isVisible = False

/* définition du node n°6*/
const myNode6 = object.addSphere();
myNode6.center.set(1.66749,3.9305,0.952848);
myNode6.radius.set(2.6202309058554363);
myNode6.isVisible = False

/* définition du node n°7*/
const myNode7_1 = object.addFuseOperation();
myNode7_1.leftArg.set(myNode0);
myNode7_1.rightArg.set(myNode0);
const myNode7_2 = object.addFuseOperation();
myNode7_2.leftArg.set(myNode7_1);
myNode7_2.rightArg.set(myNode5);
myNode7 = object.addFuseOperation();
myNode7.leftArg.set(myNode7_2);
myNode7.rightArg.set(myNode6);
myNode7.isVisible = True


/*END Geometry Object Definition*/