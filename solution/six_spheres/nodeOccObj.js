/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addSphere();
myNode0.center.set(0,0.943909,0);
myNode0.radius.set(1.0382003660180437);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addSphere();
myNode1.center.set(0,0,0);
myNode1.radius.set(1.1325899522775222);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addFuseOperation();
myNode2.leftArg.set(myNode0);
myNode2.rightArg.set(myNode1);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addSphere();
myNode3.center.set(0.943909,0,0.943909);
myNode3.radius.set(0.6607359533126679);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addCutOperation();
myNode4.leftArg.set(myNode2);
myNode4.rightArg.set(myNode3);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addSphere();
myNode5.center.set(1.32147,3.1149,0.755127);
myNode5.radius.set(2.0764994582229006);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addSphere();
myNode6.center.set(-3.1149,-1.98221,-0.094391);
myNode6.radius.set(0.7550271518296544);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addSphere();
myNode7.center.set(1.41586,-2.92612,3.77564);
myNode7.radius.set(1.8877208480069292);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8_1 = myNode4.clone();
myNode8_1.isVisible = false;
const myNode8_2 = object.addFuseOperation();
myNode8_2.leftArg.set(myNode8_1);
myNode8_2.rightArg.set(myNode5);
myNode8_2.isVisible = false;
const myNode8_3 = object.addFuseOperation();
myNode8_3.leftArg.set(myNode8_2);
myNode8_3.rightArg.set(myNode6);
myNode8_3.isVisible = false;
myNode8 = object.addFuseOperation();
myNode8.leftArg.set(myNode8_3);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = false;
myNode8.isVisible = true;


/*END Geometry Object Definition*/