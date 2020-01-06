#include <cstdio>
#include <assert.h>
#include <iostream>
using namespace std;
#include "vops.h"
#include "torus_0_0.h"
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
  float*  zs__ANONYMOUS_s129= new float [2]; CopyArr<float >(zs__ANONYMOUS_s129,_tt0, 2, 2);
  glblInit_zs__ANONYMOUS_s146(zs__ANONYMOUS_s129);
  float _tt1[2] = {0.0f, 0.0f};
  float*  ys__ANONYMOUS_s128= new float [2]; CopyArr<float >(ys__ANONYMOUS_s128,_tt1, 2, 2);
  glblInit_ys__ANONYMOUS_s144(ys__ANONYMOUS_s128);
  float _tt2[2] = {0.0f, 0.0f};
  float*  xs__ANONYMOUS_s127= new float [2]; CopyArr<float >(xs__ANONYMOUS_s127,_tt2, 2, 2);
  glblInit_xs__ANONYMOUS_s142(xs__ANONYMOUS_s127);
  bool _tt3[2] = {0, 0};
  bool*  labels__ANONYMOUS_s126= new bool [2]; CopyArr<bool >(labels__ANONYMOUS_s126,_tt3, 2, 2);
  glblInit_labels__ANONYMOUS_s140(labels__ANONYMOUS_s126);
  void * _tt4[1] = {NULL};
  CylinderHint**  cylinderHints__ANONYMOUS_s117= new CylinderHint* [1]; CopyArr<CylinderHint* >(cylinderHints__ANONYMOUS_s117,_tt4, 1, 1);
  glblInit_cylinderHints__ANONYMOUS_s138(cylinderHints__ANONYMOUS_s117);
  void * _tt5[1] = {NULL};
  CuboidHint**  cuboidHints__ANONYMOUS_s122= new CuboidHint* [1]; CopyArr<CuboidHint* >(cuboidHints__ANONYMOUS_s122,_tt5, 1, 1);
  glblInit_cuboidHints__ANONYMOUS_s136(cuboidHints__ANONYMOUS_s122);
  _main(id, cuboidHints__ANONYMOUS_s122, cylinderHints__ANONYMOUS_s117, labels__ANONYMOUS_s126, xs__ANONYMOUS_s127, ys__ANONYMOUS_s128, zs__ANONYMOUS_s129);
  delete[] zs__ANONYMOUS_s129;
  delete[] ys__ANONYMOUS_s128;
  delete[] xs__ANONYMOUS_s127;
  delete[] labels__ANONYMOUS_s126;
  delete[] cylinderHints__ANONYMOUS_s117;
  delete[] cuboidHints__ANONYMOUS_s122;
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
  float _tt9[2] = {3.9930532839626696f, 0.05373809721960554f};
  CopyArr<float >(xs__ANONYMOUS_s141,_tt9, 2, 2);
}
void glblInit_ys__ANONYMOUS_s144(float* ys__ANONYMOUS_s143/* len = 2 */) {
  float _tt10[2] = {-(0.032792203321366564f), -(0.7382915121215822f)};
  CopyArr<float >(ys__ANONYMOUS_s143,_tt10, 2, 2);
}
void glblInit_zs__ANONYMOUS_s146(float* zs__ANONYMOUS_s145/* len = 2 */) {
  float _tt11[2] = {0.8810200133933214f, 0.0598972128051789f};
  CopyArr<float >(zs__ANONYMOUS_s145,_tt11, 2, 2);
}
void _main(int id, CuboidHint** cuboidHints__ANONYMOUS_s125/* len = 1 */, CylinderHint** cylinderHints__ANONYMOUS_s120/* len = 1 */, bool* labels__ANONYMOUS_s130/* len = 2 */, float* xs__ANONYMOUS_s131/* len = 2 */, float* ys__ANONYMOUS_s132/* len = 2 */, float* zs__ANONYMOUS_s133/* len = 2 */) {
  check(id, cuboidHints__ANONYMOUS_s125, cylinderHints__ANONYMOUS_s120, labels__ANONYMOUS_s130, xs__ANONYMOUS_s131, ys__ANONYMOUS_s132, zs__ANONYMOUS_s133);
}
void check(int i, CuboidHint** cuboidHints__ANONYMOUS_s123/* len = 1 */, CylinderHint** cylinderHints__ANONYMOUS_s118/* len = 1 */, bool* labels__ANONYMOUS_s112/* len = 2 */, float* xs__ANONYMOUS_s113/* len = 2 */, float* ys__ANONYMOUS_s114/* len = 2 */, float* zs__ANONYMOUS_s115/* len = 2 */) {
  Vector*  v=Vector::create((xs__ANONYMOUS_s113[i]), (ys__ANONYMOUS_s114[i]), (zs__ANONYMOUS_s115[i]));
  if ((labels__ANONYMOUS_s112[i])) {
    bool  _out_s2=0;
    contains(v, 2, _out_s2, cuboidHints__ANONYMOUS_s123, cylinderHints__ANONYMOUS_s118);
  } else {
    bool  _out_s4=0;
    contains(v, 2, _out_s4, cuboidHints__ANONYMOUS_s123, cylinderHints__ANONYMOUS_s118);
  }
}
void contains(Vector* p, int num_primitives_0, bool& _out, CuboidHint** cuboidHints__ANONYMOUS_s121/* len = 1 */, CylinderHint** cylinderHints__ANONYMOUS_s119/* len = 1 */) {
  char _tt12[11] = {'/', '/', ' ', 'B', 'e', 'g', 'i', 'n', '.', '\n', '\0'};
  print(11, _tt12);
  char _tt13[11] = {'u', 'n', 'i', 'o', 'n', '(', ')', ' ', '{', '\n', '\0'};
  print(11, _tt13);
  bool  _out_s80=0;
  torus0(p, _out_s80);
  char _tt14[2] = {'\n', '\0'};
  print(2, _tt14);
  bool  _out_s80_0=0;
  torus0(p, _out_s80_0);
  char _tt15[3] = {'}', '\n', '\0'};
  print(3, _tt15);
  _out = _out_s80 || _out_s80_0;
  char _tt16[9] = {'/', '/', ' ', 'E', 'n', 'd', '.', '\n', '\0'};
  print(9, _tt16);
  return;
}
void print(int n, char* message/* len = n */) { std::cout << message; }
void torus0(Vector* p, bool& _out) {
  bool  _out_s82=0;
  renderTorus(p, 0.04938f, -(0.03127f), 0.05714f, 0.00108f, 0.999993f, -(0.0036f), 0.0f, 0.0036f, 1.569716f, 4.02929f, 0.98679f, _out_s82);
  _out = _out_s82;
  return;
}
void renderTorus(Vector* p, float cx, float cy, float cz, float nx, float ny, float nz, float roll_0, float pitch_1, float yaw_2, float R, float r, bool& _out) {
  Vector*  c=NULL;
  c = Vector::create(cx, cy, cz);
  Vector*  n=NULL;
  n = Vector::create(nx, ny, nz);
  float  roll_s84=0.0f;
  radian_to_degree(roll_0, roll_s84);
  float  pitch_s86=0.0f;
  radian_to_degree(pitch_1, pitch_s86);
  float  yaw_s88=0.0f;
  radian_to_degree(yaw_2, yaw_s88);
  char _tt17[12] = {'t', 'r', 'a', 'n', 's', 'l', 'a', 't', 'e', '(', '[', '\0'};
  print(12, _tt17);
  printfloat(c->x);
  char _tt18[3] = {',', ' ', '\0'};
  print(3, _tt18);
  printfloat(c->y);
  char _tt19[3] = {',', ' ', '\0'};
  print(3, _tt19);
  printfloat(c->z);
  char _tt20[4] = {']', ')', '\n', '\0'};
  print(4, _tt20);
  char _tt21[9] = {'r', 'o', 't', 'a', 't', 'e', '(', '[', '\0'};
  print(9, _tt21);
  printfloat(roll_s84);
  char _tt22[3] = {',', ' ', '\0'};
  print(3, _tt22);
  printfloat(pitch_s86);
  char _tt23[3] = {',', ' ', '\0'};
  print(3, _tt23);
  printfloat(yaw_s88);
  char _tt24[4] = {']', ')', '\n', '\0'};
  print(4, _tt24);
  char _tt25[20] = {'r', 'o', 't', 'a', 't', 'e', '(', '[', '0', ',', ' ', '9', '0', ',', ' ', '0', ']', ')', '\n', '\0'};
  print(20, _tt25);
  char _tt26[26] = {'r', 'o', 't', 'a', 't', 'e', '_', 'e', 'x', 't', 'r', 'u', 'd', 'e', '(', '$', 'f', 'n', ' ', '=', ' ', '1', '2', ')', '\n', '\0'};
  print(26, _tt26);
  char _tt27[12] = {'t', 'r', 'a', 'n', 's', 'l', 'a', 't', 'e', '(', '[', '\0'};
  print(12, _tt27);
  printfloat(R);
  char _tt28[10] = {',', ' ', '0', ',', ' ', '0', ']', ')', '\n', '\0'};
  print(10, _tt28);
  char _tt29[12] = {'c', 'i', 'r', 'c', 'l', 'e', '(', 'r', ' ', '=', ' ', '\0'};
  print(12, _tt29);
  printfloat(r);
  char _tt30[14] = {',', ' ', '$', 'f', 'n', ' ', '=', ' ', '1', '2', ')', ';', '\n', '\0'};
  print(14, _tt30);
  Vector*  x=NULL;
  x = Vector::create(n->x, n->y, n->z);
  Vector*  p0_s90=NULL;
  minus(p, c, p0_s90);
  Vector*  y0_s92=NULL;
  cross(x, p0_s90, y0_s92);
  float  y_len_s94=0.0f;
  norm(y0_s92, y_len_s94);
  float  yx=y0_s92->x;
  float  yy=y0_s92->y;
  float  yz=y0_s92->z;
  if ((y_len_s94) < (0.001f)) {
    yx = 0.0f;
    yy = 1.0f;
    yz = 0.0f;
  } else {
    yx = yx / y_len_s94;
    yy = yy / y_len_s94;
    yz = yz / y_len_s94;
  }
  Vector*  y=NULL;
  y = Vector::create(yx, yy, yz);
  Vector*  z_s96=NULL;
  cross(y, x, z_s96);
  float  p0x_s98=0.0f;
  dot(p0_s90, x, p0x_s98);
  float  p0z_s100=0.0f;
  dot(p0_s90, z_s96, p0z_s100);
  _out = (((p0x_s98 * p0x_s98) + ((p0z_s100 - R) * (p0z_s100 - R)))) <= ((r * r));
  return;
}
void radian_to_degree(float radian, float& _out) {
  _out = (radian / 3.141592653589793f) * 180.0f;
  return;
}
void printfloat(float n) { std::cout << n; }
void minus(Vector* a, Vector* b, Vector*& _out) {
  float  x=0.0f;
  x = a->x - b->x;
  float  y=0.0f;
  y = a->y - b->y;
  float  z=0.0f;
  z = a->z - b->z;
  _out = Vector::create(x, y, z);
  return;
}
void cross(Vector* a, Vector* b, Vector*& _out) {
  float  x=(a->y * b->z) - (a->z * b->y);
  float  y=(a->z * b->x) - (a->x * b->z);
  float  z=(a->x * b->y) - (a->y * b->x);
  _out = Vector::create(x, y, z);
  return;
}
void norm(Vector* a, float& _out) {
  float  _out_s102=0.0f;
  math::sqrt(((a->x * a->x) + (a->y * a->y)) + (a->z * a->z), _out_s102);
  _out = _out_s102;
  return;
}
void dot(Vector* a, Vector* b, float& _out) {
  _out = ((a->x * b->x) + (a->y * b->y)) + (a->z * b->z);
  return;
}

}
namespace math{

void cos(float v, float& _out) {_out = cosf(v);}
void sin(float v, float& _out) {_out = sinf(v);}
void sqrt(float v, float& _out) {_out = sqrtf(v);}
void tan(float v, float& _out) {_out = tanf(v);}
void log(float v, float& _out) {_out = logf(v);}
void arctan(float v, float& _out) {_out = atanf(v);}
void _cast_int_float(int v, float& _out) {_out = (float)v;}
void exp(float v, float& _out) {_out = expf(v);}

}
