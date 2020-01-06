/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addSphere();
myNode0.center.set(-3.1149,-1.98221,-0.094391);
myNode0.radius.set(0.7550271518296544);
myNode0.isVisible = False

/* définition du node n°1*/
const myNode1 = object.addSphere();
myNode1.center.set(1.32147,3.1149,0.755127);
myNode1.radius.set(2.0764994582229006);
myNode1.isVisible = False

/* définition du node n°2*/
const myNode2 = object.addSphere();
myNode2.center.set(0,0.943909,0);
myNode2.radius.set(1.0382003660180437);
myNode2.isVisible = False

/* définition du node n°3*/
const myNode3 = object.addSphere();
myNode3.center.set(0,0,0);
myNode3.radius.set(1.1325899522775222);
myNode3.isVisible = False

/* définition du node n°4*/
const myNode4 = object.addFuseOperation();
myNode4.leftArg.set(myNode2);
myNode4.rightArg.set(myNode3);
myNode4.isVisible = False

/* définition du node n°5*/
const myNode5 = object.addSphere();
myNode5.center.set(0.943909,0,0.943909);
myNode5.radius.set(0.6607359533126679);
myNode5.isVisible = False

/* définition du node n°6*/
const myNode6 = object.addCutOperation();
myNode6.leftArg.set(myNode4);
myNode6.rightArg.set(myNode5);
myNode6.isVisible = False

/* définition du node n°7*/
const myNode7 = object.addSphere();
myNode7.center.set(1.41586,-2.92612,3.77564);
myNode7.radius.set(1.8877208480069292);
myNode7.isVisible = False

/* définition du node n°8*/
const myNode8_1 = object.addFuseOperation();
myNode8_1.leftArg.set(myNode0);
myNode8_1.rightArg.set(myNode0);
const myNode8_2 = object.addFuseOperation();
myNode8_2.leftArg.set(myNode8_1);
myNode8_2.rightArg.set(myNode1);
const myNode8_3 = object.addFuseOperation();
myNode8_3.leftArg.set(myNode8_2);
myNode8_3.rightArg.set(myNode6);
myNode8 = object.addFuseOperation();
myNode8.leftArg.set(myNode8_3);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = False

/* définition du node n°9*/
const myNode9 = object.addSphere();
myNode9.center.set(1.41586,-1.88782,3.77564);
myNode9.radius.set(1.60464949443796);
myNode9.isVisible = False

/* définition du node n°10*/
const myNode10 = object.addCutOperation();
myNode10.leftArg.set(myNode8);
myNode10.rightArg.set(myNode9);
myNode10.isVisible = False

/* définition du node n°11*/
const myNode11 = object.addSphere();
myNode11.center.set(-0.471955,2.0766,1.32147);
myNode11.radius.set(1.5102516346622505);
myNode11.isVisible = False

/* définition du node n°12*/
const myNode12 = object.addCutOperation();
myNode12.leftArg.set(myNode10);
myNode12.rightArg.set(myNode11);
myNode12.isVisible = True


/*END Geometry Object Definition*/