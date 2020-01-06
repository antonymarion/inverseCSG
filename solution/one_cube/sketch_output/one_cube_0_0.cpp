#include <cstdio>
#include <assert.h>
#include <iostream>
using namespace std;
#include "vops.h"
#include "one_cube_0_0.h"
namespace ANONYMOUS{

template<typename T_0, typename T_1, typename T_2>
CuboidHint* CuboidHint::create(float  theta_x_, float  theta_y_, float  theta_z_, int  xlen_, int  ylen_, int  zlen_, T_0* xlist_, int xlist_len, T_1* ylist_, int ylist_len, T_2* zlist_, int zlist_len){
  int tlen_xlist = xlen_; 
  int tlen_ylist = ylen_; 
  int tlen_zlist = zlen_; 
  void* temp= malloc( sizeof(CuboidHint)   + sizeof(float )*tlen_xlist + sizeof(float )*tlen_ylist + sizeof(float )*tlen_zlist); 
  CuboidHint* rv = new (temp)CuboidHint();
  rv->theta_x =  theta_x_;
  rv->theta_y =  theta_y_;
  rv->theta_z =  theta_z_;
  rv->xlen =  xlen_;
  rv->ylen =  ylen_;
  rv->zlen =  zlen_;
  rv->xlist= (float* ) (((char*)&(rv->zlist))   + sizeof(float )*tlen_zlist); 
  CopyArr(rv->xlist, xlist_, tlen_xlist, xlist_len ); 
  rv->ylist= (float* ) (((char*)&(rv->zlist))   + sizeof(float )*tlen_zlist + sizeof(float )*tlen_xlist); 
  CopyArr(rv->ylist, ylist_, tlen_ylist, ylist_len ); 
  CopyArr(rv->zlist, zlist_, tlen_zlist, zlist_len ); 
  return rv;
}
template<typename T_0>
CylinderHint* CylinderHint::create(float  theta_x_, float  theta_y_, float  theta_z_, float  radius_, float  y_, float  z_, int  xlen_, T_0* xlist_, int xlist_len){
  int tlen_xlist = xlen_; 
  void* temp= malloc( sizeof(CylinderHint)   + sizeof(float )*tlen_xlist); 
  CylinderHint* rv = new (temp)CylinderHint();
  rv->theta_x =  theta_x_;
  rv->theta_y =  theta_y_;
  rv->theta_z =  theta_z_;
  rv->radius =  radius_;
  rv->y =  y_;
  rv->z =  z_;
  rv->xlen =  xlen_;
  CopyArr(rv->xlist, xlist_, tlen_xlist, xlist_len ); 
  return rv;
}
Vector* Vector::create(float  x_, float  y_, float  z_){
  void* temp= malloc( sizeof(Vector)  ); 
  Vector* rv = new (temp)Vector();
  rv->x =  x_;
  rv->y =  y_;
  rv->z =  z_;
  return rv;
}
void main__Wrapper(int id) {
  float _tt0[27] = {0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f};
  float*  zs__ANONYMOUS_s130= new float [27]; CopyArr<float >(zs__ANONYMOUS_s130,_tt0, 27, 27);
  glblInit_zs__ANONYMOUS_s142(zs__ANONYMOUS_s130);
  float _tt1[27] = {0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f};
  float*  ys__ANONYMOUS_s129= new float [27]; CopyArr<float >(ys__ANONYMOUS_s129,_tt1, 27, 27);
  glblInit_ys__ANONYMOUS_s140(ys__ANONYMOUS_s129);
  float _tt2[27] = {0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f};
  float*  xs__ANONYMOUS_s128= new float [27]; CopyArr<float >(xs__ANONYMOUS_s128,_tt2, 27, 27);
  glblInit_xs__ANONYMOUS_s138(xs__ANONYMOUS_s128);
  bool _tt3[27] = {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0};
  bool*  labels__ANONYMOUS_s127= new bool [27]; CopyArr<bool >(labels__ANONYMOUS_s127,_tt3, 27, 27);
  glblInit_labels__ANONYMOUS_s136(labels__ANONYMOUS_s127);
  void * _tt4[1] = {NULL};
  CylinderHint**  cylinderHints__ANONYMOUS_s113= new CylinderHint* [1]; CopyArr<CylinderHint* >(cylinderHints__ANONYMOUS_s113,_tt4, 1, 1);
  glblInit_cylinderHints__ANONYMOUS_s134(cylinderHints__ANONYMOUS_s113);
  void * _tt5[1] = {NULL};
  CuboidHint**  cuboidHints__ANONYMOUS_s121= new CuboidHint* [1]; CopyArr<CuboidHint* >(cuboidHints__ANONYMOUS_s121,_tt5, 1, 1);
  glblInit_cuboidHints__ANONYMOUS_s132(cuboidHints__ANONYMOUS_s121);
  _main(id, cuboidHints__ANONYMOUS_s121, cylinderHints__ANONYMOUS_s113, labels__ANONYMOUS_s127, xs__ANONYMOUS_s128, ys__ANONYMOUS_s129, zs__ANONYMOUS_s130);
  delete[] zs__ANONYMOUS_s130;
  delete[] ys__ANONYMOUS_s129;
  delete[] xs__ANONYMOUS_s128;
  delete[] labels__ANONYMOUS_s127;
  delete[] cylinderHints__ANONYMOUS_s113;
  delete[] cuboidHints__ANONYMOUS_s121;
}
void main__WrapperNospec(int id) {}
void glblInit_cuboidHints__ANONYMOUS_s132(CuboidHint** cuboidHints__ANONYMOUS_s131/* len = 1 */) {
  float _tt7[4] = {-(5.0f), 5.0f, -(19.0f), 19.0f};
  float _tt8[4] = {-(5.0f), 5.0f, -(19.0f), 19.0f};
  float _tt9[4] = {-(5.0f), 5.0f, -(19.0f), 19.0f};
  CuboidHint* _tt6[1] = {CuboidHint::create(0.0f, -(0.0f), 0.0f, 4, 4, 4, _tt7, 4, _tt8, 4, _tt9, 4)};
  CopyArr<CuboidHint* >(cuboidHints__ANONYMOUS_s131,_tt6, 1, 1);
}
void glblInit_cylinderHints__ANONYMOUS_s134(CylinderHint** cylinderHints__ANONYMOUS_s133/* len = 1 */) {
  void * _tt10[1] = {NULL};
  CopyArr<CylinderHint* >(cylinderHints__ANONYMOUS_s133,_tt10, 1, 1);
}
void glblInit_labels__ANONYMOUS_s136(bool* labels__ANONYMOUS_s135/* len = 27 */) {
  bool _tt11[27] = {1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0};
  CopyArr<bool >(labels__ANONYMOUS_s135,_tt11, 27, 27);
}
void glblInit_xs__ANONYMOUS_s138(float* xs__ANONYMOUS_s137/* len = 27 */) {
  float _tt12[27] = {0.1986853243776998f, -(5.987853551084415f), -(5.98310671683033f), -(5.999080937439148f), -(2.3925688101098013f), -(2.1429462484749715f), -(3.9345745290883696f), 5.874854726670786f, 5.980196837409278f, 5.912631794177281f, -(5.992254132196425f), -(5.7724741273486435f), -(6.099905690429688f), -(5.990915500014515f), -(5.990090297958856f), -(5.849340738537414f), -(2.367524203044157f), 0.42661560273023214f, -(1.2085100385400052f), -(3.133746120519684f), -(0.48937064769669936f), 5.988194602417732f, 5.943798089388178f, 5.999949428755766f, 5.981329775671459f, 5.978208118616792f, 5.835136740085549f};
  CopyArr<float >(xs__ANONYMOUS_s137,_tt12, 27, 27);
}
void glblInit_ys__ANONYMOUS_s140(float* ys__ANONYMOUS_s139/* len = 27 */) {
  float _tt13[27] = {0.1521215332449044f, -(5.97867488360902f), 1.4410536366617626f, 5.969472467913675f, -(5.985133420799455f), -(2.1431396376076806f), 5.988895490506874f, -(5.980413403231843f), 3.6387499080428216f, 5.882239357969835f, -(5.965047830607846f), -(5.813304575775219f), 2.657362915415952f, 5.988154677853169f, -(3.683393633145198f), 5.93305871315581f, -(5.999887614482962f), -(5.995353231511709f), 6.099940983103561f, -(1.39125079909362f), 5.984457696743522f, -(5.971105560265065f), -(5.986983964390683f), -(0.08667124955835158f), 5.992473261548427f, -(3.773195178421721f), 5.92194541122855f};
  CopyArr<float >(ys__ANONYMOUS_s139,_tt13, 27, 27);
}
void glblInit_zs__ANONYMOUS_s142(float* zs__ANONYMOUS_s141/* len = 27 */) {
  float _tt14[27] = {-(0.13930152875338775f), -(5.911120342848657f), -(5.99113020372164f), -(5.961741041321757f), -(5.979889437967985f), -(6.0999617089517235f), -(5.9771940619416615f), -(5.885287598874214f), -(5.976258073056237f), -(5.882713114962303f), 1.1426207908115098f, 5.941064921794955f, 2.6568866044547814f, 0.2807031233102539f, 5.9875697275396265f, 5.852002588705412f, -(3.6652351869395f), 5.978753039716263f, -(1.2088081036735367f), 5.999976499872272f, 5.986431781535359f, -(3.534634153746478f), 5.888986887004686f, 0.43894649334317754f, 3.4736928011826085f, 5.989045083266238f, 5.818363832354936f};
  CopyArr<float >(zs__ANONYMOUS_s141,_tt14, 27, 27);
}
void _main(int id, CuboidHint** cuboidHints__ANONYMOUS_s120/* len = 1 */, CylinderHint** cylinderHints__ANONYMOUS_s114/* len = 1 */, bool* labels__ANONYMOUS_s123/* len = 27 */, float* xs__ANONYMOUS_s124/* len = 27 */, float* ys__ANONYMOUS_s125/* len = 27 */, float* zs__ANONYMOUS_s126/* len = 27 */) {
  check(id, cuboidHints__ANONYMOUS_s120, cylinderHints__ANONYMOUS_s114, labels__ANONYMOUS_s123, xs__ANONYMOUS_s124, ys__ANONYMOUS_s125, zs__ANONYMOUS_s126);
}
void check(int i, CuboidHint** cuboidHints__ANONYMOUS_s117/* len = 1 */, CylinderHint** cylinderHints__ANONYMOUS_s118/* len = 1 */, bool* labels__ANONYMOUS_s107/* len = 27 */, float* xs__ANONYMOUS_s108/* len = 27 */, float* ys__ANONYMOUS_s109/* len = 27 */, float* zs__ANONYMOUS_s110/* len = 27 */) {
  Vector*  v=Vector::create((xs__ANONYMOUS_s108[i]), (ys__ANONYMOUS_s109[i]), (zs__ANONYMOUS_s110[i]));
  if ((labels__ANONYMOUS_s107[i])) {
    bool  _out_s2=0;
    contains(v, 2, _out_s2, cuboidHints__ANONYMOUS_s117, cylinderHints__ANONYMOUS_s118);
  } else {
    bool  _out_s4=0;
    contains(v, 2, _out_s4, cuboidHints__ANONYMOUS_s117, cylinderHints__ANONYMOUS_s118);
  }
}
void contains(Vector* p, int num_primitives_0, bool& _out, CuboidHint** cuboidHints__ANONYMOUS_s119/* len = 1 */, CylinderHint** cylinderHints__ANONYMOUS_s116/* len = 1 */) {
  char _tt15[11] = {'/', '/', ' ', 'B', 'e', 'g', 'i', 'n', '.', '\n', '\0'};
  print(11, _tt15);
  char _tt16[11] = {'u', 'n', 'i', 'o', 'n', '(', ')', ' ', '{', '\n', '\0'};
  print(11, _tt16);
  CuboidHint*  c=NULL;
  c = (cuboidHints__ANONYMOUS_s119[0]);
  Vector*  p_rotated_s22=NULL;
  inverse_rotate(p, c->theta_x, c->theta_y, c->theta_z, p_rotated_s22);
  int  n=c->xlen;
  float*  offsets= new float [n]; CopyArr<float >(offsets,c->xlist, n, c->xlen);
  int  n_0=c->ylen;
  float*  offsets_0= new float [n_0]; CopyArr<float >(offsets_0,c->ylist, n_0, c->ylen);
  int  n_1=c->zlen;
  float*  offsets_1= new float [n_1]; CopyArr<float >(offsets_1,c->zlist, n_1, c->zlen);
  int  n_2=c->xlen;
  float*  offsets_2= new float [n_2]; CopyArr<float >(offsets_2,c->xlist, n_2, c->xlen);
  int  n_3=c->ylen;
  float*  offsets_3= new float [n_3]; CopyArr<float >(offsets_3,c->ylist, n_3, c->ylen);
  int  n_4=c->zlen;
  float*  offsets_4= new float [n_4]; CopyArr<float >(offsets_4,c->zlist, n_4, c->zlen);
  float  roll_s36=0.0f;
  radian_to_degree(c->theta_x, roll_s36);
  float  pitch_s38=0.0f;
  radian_to_degree(c->theta_y, pitch_s38);
  float  yaw_s40=0.0f;
  radian_to_degree(c->theta_z, yaw_s40);
  char _tt17[9] = {'r', 'o', 't', 'a', 't', 'e', '(', '[', '\0'};
  print(9, _tt17);
  printfloat(roll_s36);
  char _tt18[3] = {',', ' ', '\0'};
  print(3, _tt18);
  printfloat(pitch_s38);
  char _tt19[3] = {',', ' ', '\0'};
  print(3, _tt19);
  printfloat(yaw_s40);
  char _tt20[4] = {']', ')', '\n', '\0'};
  print(4, _tt20);
  char _tt21[12] = {'t', 'r', 'a', 'n', 's', 'l', 'a', 't', 'e', '(', '[', '\0'};
  print(12, _tt21);
  printfloat(((offsets_2[1]) + (offsets[0])) * 0.5f);
  char _tt22[3] = {',', ' ', '\0'};
  print(3, _tt22);
  printfloat(((offsets_3[1]) + (offsets_0[0])) * 0.5f);
  char _tt23[3] = {',', ' ', '\0'};
  print(3, _tt23);
  printfloat(((offsets_4[1]) + (offsets_1[0])) * 0.5f);
  char _tt24[4] = {']', ')', '\n', '\0'};
  print(4, _tt24);
  char _tt25[14] = {'c', 'u', 'b', 'e', '(', 's', 'i', 'z', 'e', ' ', '=', ' ', '[', '\0'};
  print(14, _tt25);
  printfloat((offsets_2[1]) - (offsets[0]));
  char _tt26[3] = {',', ' ', '\0'};
  print(3, _tt26);
  printfloat((offsets_3[1]) - (offsets_0[0]));
  char _tt27[3] = {',', ' ', '\0'};
  print(3, _tt27);
  printfloat((offsets_4[1]) - (offsets_1[0]));
  char _tt28[20] = {']', ',', ' ', 'c', 'e', 'n', 't', 'e', 'r', ' ', '=', ' ', 't', 'r', 'u', 'e', ')', ';', '\n', '\0'};
  print(20, _tt28);
  bool  x_in_range=((p_rotated_s22->x) >= ((offsets[0]))) && ((p_rotated_s22->x) <= ((offsets_2[1])));
  bool  y_in_range=((p_rotated_s22->y) >= ((offsets_0[0]))) && ((p_rotated_s22->y) <= ((offsets_3[1])));
  bool  z_in_range=((p_rotated_s22->z) >= ((offsets_1[0]))) && ((p_rotated_s22->z) <= ((offsets_4[1])));
  char _tt29[2] = {'\n', '\0'};
  print(2, _tt29);
  CuboidHint*  c_0=(cuboidHints__ANONYMOUS_s119[0]);
  Vector*  p_rotated_s22_0=NULL;
  inverse_rotate(p, c_0->theta_x, c_0->theta_y, c_0->theta_z, p_rotated_s22_0);
  int  n_5=c_0->xlen;
  float*  offsets_5= new float [n_5]; CopyArr<float >(offsets_5,c_0->xlist, n_5, c_0->xlen);
  int  n_6=c_0->ylen;
  float*  offsets_6= new float [n_6]; CopyArr<float >(offsets_6,c_0->ylist, n_6, c_0->ylen);
  int  n_7=c_0->zlen;
  float*  offsets_7= new float [n_7]; CopyArr<float >(offsets_7,c_0->zlist, n_7, c_0->zlen);
  int  n_8=c_0->xlen;
  float*  offsets_8= new float [n_8]; CopyArr<float >(offsets_8,c_0->xlist, n_8, c_0->xlen);
  int  n_9=c_0->ylen;
  float*  offsets_9= new float [n_9]; CopyArr<float >(offsets_9,c_0->ylist, n_9, c_0->ylen);
  int  n_10=c_0->zlen;
  float*  offsets_10= new float [n_10]; CopyArr<float >(offsets_10,c_0->zlist, n_10, c_0->zlen);
  float  roll_s36_0=0.0f;
  radian_to_degree(c_0->theta_x, roll_s36_0);
  float  pitch_s38_0=0.0f;
  radian_to_degree(c_0->theta_y, pitch_s38_0);
  float  yaw_s40_0=0.0f;
  radian_to_degree(c_0->theta_z, yaw_s40_0);
  char _tt30[9] = {'r', 'o', 't', 'a', 't', 'e', '(', '[', '\0'};
  print(9, _tt30);
  printfloat(roll_s36_0);
  char _tt31[3] = {',', ' ', '\0'};
  print(3, _tt31);
  printfloat(pitch_s38_0);
  char _tt32[3] = {',', ' ', '\0'};
  print(3, _tt32);
  printfloat(yaw_s40_0);
  char _tt33[4] = {']', ')', '\n', '\0'};
  print(4, _tt33);
  char _tt34[12] = {'t', 'r', 'a', 'n', 's', 'l', 'a', 't', 'e', '(', '[', '\0'};
  print(12, _tt34);
  printfloat(((offsets_8[1]) + (offsets_5[0])) * 0.5f);
  char _tt35[3] = {',', ' ', '\0'};
  print(3, _tt35);
  printfloat(((offsets_9[1]) + (offsets_6[0])) * 0.5f);
  char _tt36[3] = {',', ' ', '\0'};
  print(3, _tt36);
  printfloat(((offsets_10[1]) + (offsets_7[0])) * 0.5f);
  char _tt37[4] = {']', ')', '\n', '\0'};
  print(4, _tt37);
  char _tt38[14] = {'c', 'u', 'b', 'e', '(', 's', 'i', 'z', 'e', ' ', '=', ' ', '[', '\0'};
  print(14, _tt38);
  printfloat((offsets_8[1]) - (offsets_5[0]));
  char _tt39[3] = {',', ' ', '\0'};
  print(3, _tt39);
  printfloat((offsets_9[1]) - (offsets_6[0]));
  char _tt40[3] = {',', ' ', '\0'};
  print(3, _tt40);
  printfloat((offsets_10[1]) - (offsets_7[0]));
  char _tt41[20] = {']', ',', ' ', 'c', 'e', 'n', 't', 'e', 'r', ' ', '=', ' ', 't', 'r', 'u', 'e', ')', ';', '\n', '\0'};
  print(20, _tt41);
  bool  x_in_range_0=((p_rotated_s22_0->x) >= ((offsets_5[0]))) && ((p_rotated_s22_0->x) <= ((offsets_8[1])));
  bool  y_in_range_0=((p_rotated_s22_0->y) >= ((offsets_6[0]))) && ((p_rotated_s22_0->y) <= ((offsets_9[1])));
  bool  z_in_range_0=((p_rotated_s22_0->z) >= ((offsets_7[0]))) && ((p_rotated_s22_0->z) <= ((offsets_10[1])));
  char _tt42[3] = {'}', '\n', '\0'};
  print(3, _tt42);
  _out = ((x_in_range && y_in_range) && z_in_range) || ((x_in_range_0 && y_in_range_0) && z_in_range_0);
  char _tt43[9] = {'/', '/', ' ', 'E', 'n', 'd', '.', '\n', '\0'};
  print(9, _tt43);
  delete[] offsets;
  delete[] offsets_0;
  delete[] offsets_1;
  delete[] offsets_2;
  delete[] offsets_3;
  delete[] offsets_4;
  delete[] offsets_5;
  delete[] offsets_6;
  delete[] offsets_7;
  delete[] offsets_8;
  delete[] offsets_9;
  delete[] offsets_10;
  return;
}
void print(int n, char* message/* len = n */) { std::cout << message; }
void inverse_rotate(Vector* p, float theta_x, float theta_y, float theta_z, Vector*& _out) {
  float  x0=p->x;
  float  y0=p->y;
  float  z0=p->z;
  float  x1_s44=0.0f;
  math::cos(-(theta_z), x1_s44);
  float  x1_s46=0.0f;
  math::sin(-(theta_z), x1_s46);
  float  x1=0.0f;
  x1 = (x1_s44 * x0) - (x1_s46 * y0);
  float  y1_s48=0.0f;
  math::sin(-(theta_z), y1_s48);
  float  y1_s50=0.0f;
  math::cos(-(theta_z), y1_s50);
  float  y1=0.0f;
  y1 = (y1_s48 * x0) + (y1_s50 * y0);
  float  x2_s52=0.0f;
  math::cos(-(theta_y), x2_s52);
  float  x2_s54=0.0f;
  math::sin(-(theta_y), x2_s54);
  float  x2=0.0f;
  x2 = (x2_s52 * x1) + (x2_s54 * z0);
  float  z2_s56=0.0f;
  math::sin(-(theta_y), z2_s56);
  float  z2_s58=0.0f;
  math::cos(-(theta_y), z2_s58);
  float  z2=0.0f;
  z2 = (-(z2_s56) * x1) + (z2_s58 * z0);
  float  y3_s60=0.0f;
  math::cos(-(theta_x), y3_s60);
  float  y3_s62=0.0f;
  math::sin(-(theta_x), y3_s62);
  float  y3=0.0f;
  y3 = (y3_s60 * y1) - (y3_s62 * z2);
  float  z3_s64=0.0f;
  math::sin(-(theta_x), z3_s64);
  float  z3_s66=0.0f;
  math::cos(-(theta_x), z3_s66);
  float  z3=0.0f;
  z3 = (z3_s64 * y1) + (z3_s66 * z2);
  _out = Vector::create(x2, y3, z3);
  return;
}
void radian_to_degree(float radian, float& _out) {
  _out = (radian / 3.141592653589793f) * 180.0f;
  return;
}
void printfloat(float n) { std::cout << n; }

}
namespace math{

void cos(float v, float& _out) {_out = cosf(v);}
void sin(float v, float& _out) {_out = sinf(v);}
void tan(float v, float& _out) {_out = tanf(v);}
void sqrt(float v, float& _out) {_out = sqrtf(v);}
void log(float v, float& _out) {_out = logf(v);}
void arctan(float v, float& _out) {_out = atanf(v);}
void _cast_int_float(int v, float& _out) {_out = (float)v;}
void exp(float v, float& _out) {_out = expf(v);}

}
