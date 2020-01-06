#include <cstdio>
#include <assert.h>
#include <iostream>
using namespace std;
#include "vops.h"
#include "one_sphere_0_0.h"
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
  float _tt0[2] = {0.0f, 0.0f};
  float*  zs__ANONYMOUS_s123= new float [2]; CopyArr<float >(zs__ANONYMOUS_s123,_tt0, 2, 2);
  glblInit_zs__ANONYMOUS_s146(zs__ANONYMOUS_s123);
  float _tt1[2] = {0.0f, 0.0f};
  float*  ys__ANONYMOUS_s122= new float [2]; CopyArr<float >(ys__ANONYMOUS_s122,_tt1, 2, 2);
  glblInit_ys__ANONYMOUS_s144(ys__ANONYMOUS_s122);
  float _tt2[2] = {0.0f, 0.0f};
  float*  xs__ANONYMOUS_s121= new float [2]; CopyArr<float >(xs__ANONYMOUS_s121,_tt2, 2, 2);
  glblInit_xs__ANONYMOUS_s142(xs__ANONYMOUS_s121);
  bool _tt3[2] = {0, 0};
  bool*  labels__ANONYMOUS_s120= new bool [2]; CopyArr<bool >(labels__ANONYMOUS_s120,_tt3, 2, 2);
  glblInit_labels__ANONYMOUS_s140(labels__ANONYMOUS_s120);
  void * _tt4[1] = {NULL};
  CylinderHint**  cylinderHints__ANONYMOUS_s117= new CylinderHint* [1]; CopyArr<CylinderHint* >(cylinderHints__ANONYMOUS_s117,_tt4, 1, 1);
  glblInit_cylinderHints__ANONYMOUS_s138(cylinderHints__ANONYMOUS_s117);
  void * _tt5[1] = {NULL};
  CuboidHint**  cuboidHints__ANONYMOUS_s132= new CuboidHint* [1]; CopyArr<CuboidHint* >(cuboidHints__ANONYMOUS_s132,_tt5, 1, 1);
  glblInit_cuboidHints__ANONYMOUS_s136(cuboidHints__ANONYMOUS_s132);
  _main(id, cuboidHints__ANONYMOUS_s132, cylinderHints__ANONYMOUS_s117, labels__ANONYMOUS_s120, xs__ANONYMOUS_s121, ys__ANONYMOUS_s122, zs__ANONYMOUS_s123);
  delete[] zs__ANONYMOUS_s123;
  delete[] ys__ANONYMOUS_s122;
  delete[] xs__ANONYMOUS_s121;
  delete[] labels__ANONYMOUS_s120;
  delete[] cylinderHints__ANONYMOUS_s117;
  delete[] cuboidHints__ANONYMOUS_s132;
}
void main__WrapperNospec(int id) {}
void glblInit_cuboidHints__ANONYMOUS_s136(CuboidHint** cuboidHints__ANONYMOUS_s135/* len = 1 */) {
  void * _tt6[1] = {NULL};
  CopyArr<CuboidHint* >(cuboidHints__ANONYMOUS_s135,_tt6, 1, 1);
}
void glblInit_cylinderHints__ANONYMOUS_s138(CylinderHint** cylinderHints__ANONYMOUS_s137/* len = 1 */) {
  void * _tt7[1] = {NULL};
  CopyArr<CylinderHint* >(cylinderHints__ANONYMOUS_s137,_tt7, 1, 1);
}
void glblInit_labels__ANONYMOUS_s140(bool* labels__ANONYMOUS_s139/* len = 2 */) {
  bool _tt8[2] = {1, 0};
  CopyArr<bool >(labels__ANONYMOUS_s139,_tt8, 2, 2);
}
void glblInit_xs__ANONYMOUS_s142(float* xs__ANONYMOUS_s141/* len = 2 */) {
  float _tt9[2] = {-(0.2643872309775963f), 4.768671495732233f};
  CopyArr<float >(xs__ANONYMOUS_s141,_tt9, 2, 2);
}
void glblInit_ys__ANONYMOUS_s144(float* ys__ANONYMOUS_s143/* len = 2 */) {
  float _tt10[2] = {0.3382435605573675f, 4.998239381237999f};
  CopyArr<float >(ys__ANONYMOUS_s143,_tt10, 2, 2);
}
void glblInit_zs__ANONYMOUS_s146(float* zs__ANONYMOUS_s145/* len = 2 */) {
  float _tt11[2] = {0.13059524126844302f, 4.994926447977743f};
  CopyArr<float >(zs__ANONYMOUS_s145,_tt11, 2, 2);
}
void _main(int id, CuboidHint** cuboidHints__ANONYMOUS_s131/* len = 1 */, CylinderHint** cylinderHints__ANONYMOUS_s118/* len = 1 */, bool* labels__ANONYMOUS_s124/* len = 2 */, float* xs__ANONYMOUS_s125/* len = 2 */, float* ys__ANONYMOUS_s126/* len = 2 */, float* zs__ANONYMOUS_s127/* len = 2 */) {
  check(id, cuboidHints__ANONYMOUS_s131, cylinderHints__ANONYMOUS_s118, labels__ANONYMOUS_s124, xs__ANONYMOUS_s125, ys__ANONYMOUS_s126, zs__ANONYMOUS_s127);
}
void check(int i, CuboidHint** cuboidHints__ANONYMOUS_s130/* len = 1 */, CylinderHint** cylinderHints__ANONYMOUS_s119/* len = 1 */, bool* labels__ANONYMOUS_s111/* len = 2 */, float* xs__ANONYMOUS_s112/* len = 2 */, float* ys__ANONYMOUS_s113/* len = 2 */, float* zs__ANONYMOUS_s114/* len = 2 */) {
  Vector*  v=Vector::create((xs__ANONYMOUS_s112[i]), (ys__ANONYMOUS_s113[i]), (zs__ANONYMOUS_s114[i]));
  if ((labels__ANONYMOUS_s111[i])) {
    bool  _out_s2=0;
    contains(v, 2, _out_s2, cuboidHints__ANONYMOUS_s130, cylinderHints__ANONYMOUS_s119);
  } else {
    bool  _out_s4=0;
    contains(v, 2, _out_s4, cuboidHints__ANONYMOUS_s130, cylinderHints__ANONYMOUS_s119);
  }
}
void contains(Vector* p, int num_primitives_0, bool& _out, CuboidHint** cuboidHints__ANONYMOUS_s134/* len = 1 */, CylinderHint** cylinderHints__ANONYMOUS_s133/* len = 1 */) {
  char _tt12[11] = {'/', '/', ' ', 'B', 'e', 'g', 'i', 'n', '.', '\n', '\0'};
  print(11, _tt12);
  char _tt13[11] = {'u', 'n', 'i', 'o', 'n', '(', ')', ' ', '{', '\n', '\0'};
  print(11, _tt13);
  bool  _out_s80=0;
  sphere0(p, _out_s80);
  char _tt14[2] = {'\n', '\0'};
  print(2, _tt14);
  bool  _out_s80_0=0;
  sphere0(p, _out_s80_0);
  char _tt15[3] = {'}', '\n', '\0'};
  print(3, _tt15);
  _out = _out_s80 || _out_s80_0;
  char _tt16[9] = {'/', '/', ' ', 'E', 'n', 'd', '.', '\n', '\0'};
  print(9, _tt16);
  return;
}
void print(int n, char* message/* len = n */) { std::cout << message; }
void sphere0(Vector* p, bool& _out) {
  bool  _out_s88=0;
  renderSphere(p, 0.01544f, 0.0499f, -(0.00119f), 5.04492f, _out_s88);
  _out = _out_s88;
  return;
}
void renderSphere(Vector* p, float x, float y, float z, float r, bool& _out) {
  char _tt17[12] = {'t', 'r', 'a', 'n', 's', 'l', 'a', 't', 'e', '(', '[', '\0'};
  print(12, _tt17);
  printfloat(x);
  char _tt18[3] = {',', ' ', '\0'};
  print(3, _tt18);
  printfloat(y);
  char _tt19[3] = {',', ' ', '\0'};
  print(3, _tt19);
  printfloat(z);
  char _tt20[4] = {']', ')', '\n', '\0'};
  print(4, _tt20);
  char _tt21[12] = {'s', 'p', 'h', 'e', 'r', 'e', '(', 'r', ' ', '=', ' ', '\0'};
  print(12, _tt21);
  float  _out_s86=0.0f;
  math::abs(r, _out_s86);
  printfloat(_out_s86);
  char _tt22[14] = {',', ' ', '$', 'f', 'n', ' ', '=', ' ', '1', '2', ')', ';', '\n', '\0'};
  print(14, _tt22);
  _out = ((((((p->x - x) * (p->x - x)) + ((p->y - y) * (p->y - y))) + ((p->z - z) * (p->z - z))) - (r * r))) <= (0.0f);
  return;
}
void printfloat(float n) { std::cout << n; }

}
namespace math{

void abs(float v, float& _out) {_out = fabs(v);}
void cos(float v, float& _out) {_out = cosf(v);}
void sin(float v, float& _out) {_out = sinf(v);}
void tan(float v, float& _out) {_out = tanf(v);}
void sqrt(float v, float& _out) {_out = sqrtf(v);}
void log(float v, float& _out) {_out = logf(v);}
void arctan(float v, float& _out) {_out = atanf(v);}
void _cast_int_float(int v, float& _out) {_out = (float)v;}
void exp(float v, float& _out) {_out = expf(v);}

}
