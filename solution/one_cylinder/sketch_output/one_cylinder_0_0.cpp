#include <cstdio>
#include <assert.h>
#include <iostream>
using namespace std;
#include "vops.h"
#include "one_cylinder_0_0.h"
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
  float _tt0[6] = {0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f};
  float*  zs__ANONYMOUS_s130= new float [6]; CopyArr<float >(zs__ANONYMOUS_s130,_tt0, 6, 6);
  glblInit_zs__ANONYMOUS_s142(zs__ANONYMOUS_s130);
  float _tt1[6] = {0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f};
  float*  ys__ANONYMOUS_s129= new float [6]; CopyArr<float >(ys__ANONYMOUS_s129,_tt1, 6, 6);
  glblInit_ys__ANONYMOUS_s140(ys__ANONYMOUS_s129);
  float _tt2[6] = {0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f};
  float*  xs__ANONYMOUS_s128= new float [6]; CopyArr<float >(xs__ANONYMOUS_s128,_tt2, 6, 6);
  glblInit_xs__ANONYMOUS_s138(xs__ANONYMOUS_s128);
  bool _tt3[6] = {0, 0, 0, 0, 0, 0};
  bool*  labels__ANONYMOUS_s127= new bool [6]; CopyArr<bool >(labels__ANONYMOUS_s127,_tt3, 6, 6);
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
  float _tt7[2] = {-(19.000033f), 19.000033f};
  float _tt8[4] = {-(5.00001f), 5.0f, -(19.000033f), 19.000033f};
  float _tt9[2] = {-(19.000033f), 19.000033f};
  CuboidHint* _tt6[1] = {CuboidHint::create(0.0f, -(0.0f), -(0.0f), 2, 4, 2, _tt7, 2, _tt8, 4, _tt9, 2)};
  CopyArr<CuboidHint* >(cuboidHints__ANONYMOUS_s131,_tt6, 1, 1);
}
void glblInit_cylinderHints__ANONYMOUS_s134(CylinderHint** cylinderHints__ANONYMOUS_s133/* len = 1 */) {
  float _tt11[4] = {-(5.00001f), 5.0f, -(19.000033f), 19.000033f};
  CylinderHint* _tt10[1] = {CylinderHint::create(0.0f, -(0.0f), 1.570796f, 3.7537f, 0.00231f, -(0.00529f), 4, _tt11, 4)};
  CopyArr<CylinderHint* >(cylinderHints__ANONYMOUS_s133,_tt10, 1, 1);
}
void glblInit_labels__ANONYMOUS_s136(bool* labels__ANONYMOUS_s135/* len = 6 */) {
  bool _tt12[6] = {1, 0, 0, 0, 0, 0};
  CopyArr<bool >(labels__ANONYMOUS_s135,_tt12, 6, 6);
}
void glblInit_xs__ANONYMOUS_s138(float* xs__ANONYMOUS_s137/* len = 6 */) {
  float _tt13[6] = {-(0.11477690835705823f), -(4.422950123348166f), -(1.145593193529233f), -(3.6814114800334963f), -(3.609537149102804f), 1.5143482200316845f};
  CopyArr<float >(xs__ANONYMOUS_s137,_tt13, 6, 6);
}
void glblInit_ys__ANONYMOUS_s140(float* ys__ANONYMOUS_s139/* len = 6 */) {
  float _tt14[6] = {-(0.9026237026219366f), -(5.998535766105636f), -(6.099511176345861f), 2.0669331906178146f, 5.998837745487148f, 6.099496645591919f};
  CopyArr<float >(ys__ANONYMOUS_s139,_tt14, 6, 6);
}
void glblInit_zs__ANONYMOUS_s142(float* zs__ANONYMOUS_s141/* len = 6 */) {
  float _tt15[6] = {-(0.1270705619254478f), -(3.6529014378429387f), -(2.109105269952671f), -(3.73831901815176f), 3.630498299494445f, -(1.1190678208146931f)};
  CopyArr<float >(zs__ANONYMOUS_s141,_tt15, 6, 6);
}
void _main(int id, CuboidHint** cuboidHints__ANONYMOUS_s120/* len = 1 */, CylinderHint** cylinderHints__ANONYMOUS_s114/* len = 1 */, bool* labels__ANONYMOUS_s123/* len = 6 */, float* xs__ANONYMOUS_s124/* len = 6 */, float* ys__ANONYMOUS_s125/* len = 6 */, float* zs__ANONYMOUS_s126/* len = 6 */) {
  check(id, cuboidHints__ANONYMOUS_s120, cylinderHints__ANONYMOUS_s114, labels__ANONYMOUS_s123, xs__ANONYMOUS_s124, ys__ANONYMOUS_s125, zs__ANONYMOUS_s126);
}
void check(int i, CuboidHint** cuboidHints__ANONYMOUS_s117/* len = 1 */, CylinderHint** cylinderHints__ANONYMOUS_s118/* len = 1 */, bool* labels__ANONYMOUS_s107/* len = 6 */, float* xs__ANONYMOUS_s108/* len = 6 */, float* ys__ANONYMOUS_s109/* len = 6 */, float* zs__ANONYMOUS_s110/* len = 6 */) {
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
  char _tt16[11] = {'/', '/', ' ', 'B', 'e', 'g', 'i', 'n', '.', '\n', '\0'};
  print(11, _tt16);
  char _tt17[11] = {'u', 'n', 'i', 'o', 'n', '(', ')', ' ', '{', '\n', '\0'};
  print(11, _tt17);
  CylinderHint*  c=NULL;
  c = (cylinderHints__ANONYMOUS_s116[0]);
  Vector*  p_rotated_s68=NULL;
  inverse_rotate(p, c->theta_x, c->theta_y, c->theta_z, p_rotated_s68);
  int  n=c->xlen;
  float*  offsets= new float [n]; CopyArr<float >(offsets,c->xlist, n, c->xlen);
  int  n_0=c->xlen;
  float*  offsets_0= new float [n_0]; CopyArr<float >(offsets_0,c->xlist, n_0, c->xlen);
  float  roll_s74=0.0f;
  radian_to_degree(c->theta_x, roll_s74);
  float  pitch_s76=0.0f;
  radian_to_degree(c->theta_y, pitch_s76);
  float  yaw_s78=0.0f;
  radian_to_degree(c->theta_z, yaw_s78);
  char _tt18[9] = {'r', 'o', 't', 'a', 't', 'e', '(', '[', '\0'};
  print(9, _tt18);
  printfloat(roll_s74);
  char _tt19[3] = {',', ' ', '\0'};
  print(3, _tt19);
  printfloat(pitch_s76);
  char _tt20[3] = {',', ' ', '\0'};
  print(3, _tt20);
  printfloat(yaw_s78);
  char _tt21[4] = {']', ')', '\n', '\0'};
  print(4, _tt21);
  char _tt22[12] = {'t', 'r', 'a', 'n', 's', 'l', 'a', 't', 'e', '(', '[', '\0'};
  print(12, _tt22);
  printfloat(((offsets[0]) + (offsets_0[1])) * 0.5f);
  char _tt23[3] = {',', ' ', '\0'};
  print(3, _tt23);
  printfloat(c->y);
  char _tt24[3] = {',', ' ', '\0'};
  print(3, _tt24);
  printfloat(c->z);
  char _tt25[4] = {']', ')', '\n', '\0'};
  print(4, _tt25);
  char _tt26[20] = {'r', 'o', 't', 'a', 't', 'e', '(', '[', '0', ',', ' ', '9', '0', ',', ' ', '0', ']', ')', '\n', '\0'};
  print(20, _tt26);
  char _tt27[14] = {'c', 'y', 'l', 'i', 'n', 'd', 'e', 'r', '(', 'h', ' ', '=', ' ', '\0'};
  print(14, _tt27);
  printfloat((offsets_0[1]) - (offsets[0]));
  char _tt28[8] = {',', ' ', 'r', '1', ' ', '=', ' ', '\0'};
  print(8, _tt28);
  printfloat(c->radius);
  char _tt29[8] = {',', ' ', 'r', '2', ' ', '=', ' ', '\0'};
  print(8, _tt29);
  printfloat(c->radius);
  char _tt30[29] = {',', ' ', 'c', 'e', 'n', 't', 'e', 'r', ' ', '=', ' ', 't', 'r', 'u', 'e', ',', ' ', '$', 'f', 'n', ' ', '=', ' ', '1', '2', ')', ';', '\n', '\0'};
  print(29, _tt30);
  bool  withinRadius=(((((p_rotated_s68->y - c->y) * (p_rotated_s68->y - c->y)) + ((p_rotated_s68->z - c->z) * (p_rotated_s68->z - c->z))) - (c->radius * c->radius))) <= (0.0f);
  bool  withinHeight=((p_rotated_s68->x) >= ((offsets[0]))) && ((p_rotated_s68->x) <= ((offsets_0[1])));
  char _tt31[2] = {'\n', '\0'};
  print(2, _tt31);
  CylinderHint*  c_0=(cylinderHints__ANONYMOUS_s116[0]);
  Vector*  p_rotated_s68_0=NULL;
  inverse_rotate(p, c_0->theta_x, c_0->theta_y, c_0->theta_z, p_rotated_s68_0);
  int  n_1=c_0->xlen;
  float*  offsets_1= new float [n_1]; CopyArr<float >(offsets_1,c_0->xlist, n_1, c_0->xlen);
  int  n_2=c_0->xlen;
  float*  offsets_2= new float [n_2]; CopyArr<float >(offsets_2,c_0->xlist, n_2, c_0->xlen);
  float  roll_s74_0=0.0f;
  radian_to_degree(c_0->theta_x, roll_s74_0);
  float  pitch_s76_0=0.0f;
  radian_to_degree(c_0->theta_y, pitch_s76_0);
  float  yaw_s78_0=0.0f;
  radian_to_degree(c_0->theta_z, yaw_s78_0);
  char _tt32[9] = {'r', 'o', 't', 'a', 't', 'e', '(', '[', '\0'};
  print(9, _tt32);
  printfloat(roll_s74_0);
  char _tt33[3] = {',', ' ', '\0'};
  print(3, _tt33);
  printfloat(pitch_s76_0);
  char _tt34[3] = {',', ' ', '\0'};
  print(3, _tt34);
  printfloat(yaw_s78_0);
  char _tt35[4] = {']', ')', '\n', '\0'};
  print(4, _tt35);
  char _tt36[12] = {'t', 'r', 'a', 'n', 's', 'l', 'a', 't', 'e', '(', '[', '\0'};
  print(12, _tt36);
  printfloat(((offsets_1[0]) + (offsets_2[1])) * 0.5f);
  char _tt37[3] = {',', ' ', '\0'};
  print(3, _tt37);
  printfloat(c_0->y);
  char _tt38[3] = {',', ' ', '\0'};
  print(3, _tt38);
  printfloat(c_0->z);
  char _tt39[4] = {']', ')', '\n', '\0'};
  print(4, _tt39);
  char _tt40[20] = {'r', 'o', 't', 'a', 't', 'e', '(', '[', '0', ',', ' ', '9', '0', ',', ' ', '0', ']', ')', '\n', '\0'};
  print(20, _tt40);
  char _tt41[14] = {'c', 'y', 'l', 'i', 'n', 'd', 'e', 'r', '(', 'h', ' ', '=', ' ', '\0'};
  print(14, _tt41);
  printfloat((offsets_2[1]) - (offsets_1[0]));
  char _tt42[8] = {',', ' ', 'r', '1', ' ', '=', ' ', '\0'};
  print(8, _tt42);
  printfloat(c_0->radius);
  char _tt43[8] = {',', ' ', 'r', '2', ' ', '=', ' ', '\0'};
  print(8, _tt43);
  printfloat(c_0->radius);
  char _tt44[29] = {',', ' ', 'c', 'e', 'n', 't', 'e', 'r', ' ', '=', ' ', 't', 'r', 'u', 'e', ',', ' ', '$', 'f', 'n', ' ', '=', ' ', '1', '2', ')', ';', '\n', '\0'};
  print(29, _tt44);
  bool  withinRadius_0=(((((p_rotated_s68_0->y - c_0->y) * (p_rotated_s68_0->y - c_0->y)) + ((p_rotated_s68_0->z - c_0->z) * (p_rotated_s68_0->z - c_0->z))) - (c_0->radius * c_0->radius))) <= (0.0f);
  bool  withinHeight_0=((p_rotated_s68_0->x) >= ((offsets_1[0]))) && ((p_rotated_s68_0->x) <= ((offsets_2[1])));
  char _tt45[3] = {'}', '\n', '\0'};
  print(3, _tt45);
  _out = (withinRadius && withinHeight) || (withinRadius_0 && withinHeight_0);
  char _tt46[9] = {'/', '/', ' ', 'E', 'n', 'd', '.', '\n', '\0'};
  print(9, _tt46);
  delete[] offsets;
  delete[] offsets_0;
  delete[] offsets_1;
  delete[] offsets_2;
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
