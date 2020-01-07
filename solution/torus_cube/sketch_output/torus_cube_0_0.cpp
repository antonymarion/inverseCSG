#include <cstdio>
#include <assert.h>
#include <iostream>
using namespace std;
#include "vops.h"
#include "torus_cube_0_0.h"
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
  float _tt0[31] = {0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f};
  float*  zs__ANONYMOUS_s129= new float [31]; CopyArr<float >(zs__ANONYMOUS_s129,_tt0, 31, 31);
  glblInit_zs__ANONYMOUS_s146(zs__ANONYMOUS_s129);
  float _tt1[31] = {0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f};
  float*  ys__ANONYMOUS_s128= new float [31]; CopyArr<float >(ys__ANONYMOUS_s128,_tt1, 31, 31);
  glblInit_ys__ANONYMOUS_s144(ys__ANONYMOUS_s128);
  float _tt2[31] = {0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f};
  float*  xs__ANONYMOUS_s127= new float [31]; CopyArr<float >(xs__ANONYMOUS_s127,_tt2, 31, 31);
  glblInit_xs__ANONYMOUS_s142(xs__ANONYMOUS_s127);
  bool _tt3[31] = {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0};
  bool*  labels__ANONYMOUS_s126= new bool [31]; CopyArr<bool >(labels__ANONYMOUS_s126,_tt3, 31, 31);
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
  float _tt7[4] = {-(5.0f), 2.27523f, -(19.0f), 19.0f};
  float _tt8[4] = {-(2.72821f), 2.72821f, -(19.0f), 19.0f};
  float _tt9[4] = {4.09141f, -(0.45561f), -(19.0f), 19.0f};
  CuboidHint* _tt6[1] = {CuboidHint::create(0.0f, -(0.0f), 0.0f, 4, 4, 4, _tt7, 4, _tt8, 4, _tt9, 4)};
  CopyArr<CuboidHint* >(cuboidHints__ANONYMOUS_s135,_tt6, 1, 1);
}
void glblInit_cylinderHints__ANONYMOUS_s138(CylinderHint** cylinderHints__ANONYMOUS_s137/* len = 1 */) {
  void * _tt10[1] = {NULL};
  CopyArr<CylinderHint* >(cylinderHints__ANONYMOUS_s137,_tt10, 1, 1);
}
void glblInit_labels__ANONYMOUS_s140(bool* labels__ANONYMOUS_s139/* len = 31 */) {
  bool _tt11[31] = {1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0};
  CopyArr<bool >(labels__ANONYMOUS_s139,_tt11, 31, 31);
}
void glblInit_xs__ANONYMOUS_s142(float* xs__ANONYMOUS_s141/* len = 31 */) {
  float _tt12[31] = {0.5939897311408092f, 3.8624966518643657f, -(3.18284639072737f), -(0.8408077794705675f), 3.5637429223145123f, -(5.625417985426189f), 0.5260912615342875f, 3.184468780373437f, -(5.999909596107858f), -(2.9637795258144752f), 4.9704389180850415f, -(5.717851940597338f), -(4.120719752952643f), 5.676777415069724f, -(5.618775276066344f), -(4.13389111558321f), 3.7424875972681613f, -(5.999160817563143f), 4.934552293240349f, -(5.786719055691138f), 1.4097095515073466f, 4.656290073814126f, -(5.786143392699837f), -(2.968180262885079f), 4.055698268765314f, -(5.983662105940125f), 1.4106201394404754f, 3.9648538127603756f, -(5.547836021024529f), 0.09126864444434395f, 4.185246488401987f};
  CopyArr<float >(xs__ANONYMOUS_s141,_tt12, 31, 31);
}
void glblInit_ys__ANONYMOUS_s144(float* ys__ANONYMOUS_s143/* len = 31 */) {
  float _tt13[31] = {0.036296785017021604f, 0.024095464556138424f, -(0.8183140594345908f), -(0.07242496560531894f), -(0.035811378354832335f), -(3.2727874807150377f), -(3.273702550099964f), -(3.273780864652084f), -(0.6765955154165171f), -(0.2438038986558066f), -(0.7589619153464081f), 3.2732615321330822f, 3.27382931624339f, 3.273395033243702f, -(3.27375633151583f), -(3.5924929723396724f), -(3.273737419571545f), -(0.19496116020224474f), -(1.251316516601437f), 3.2728809891776236f, 3.5926531189095803f, 3.2735636169483455f, -(3.2692450860375497f), -(3.2735628721376107f), -(3.273746685020056f), 1.664020559044343f, -(0.18563845301263437f), -(1.8639894145462967f), 3.26464093067228f, 3.273812034100146f, 3.2737842816187324f};
  CopyArr<float >(ys__ANONYMOUS_s143,_tt13, 31, 31);
}
void glblInit_zs__ANONYMOUS_s146(float* zs__ANONYMOUS_s145/* len = 31 */) {
  float _tt14[31] = {-(3.0728269037457343f), -(1.4132572943936583f), 2.261057069783102f, 1.0222177925373537f, 1.0020454592907744f, -(4.301259955001939f), -(2.2311633834521944f), -(2.1480266095099134f), -(3.9633263433706687f), -(4.013886862852832f), -(4.090535847164591f), -(1.4364472649053979f), -(3.8941779247093136f), -(3.1659458126085562f), 0.5730792890598111f, 2.7854063913620175f, 1.753224845677545f, 1.2781707820920831f, 2.596680485535129f, 2.192612914638741f, 1.5585326656166232f, 0.43419910082804464f, 4.777476310163002f, 4.749810782434068f, 4.689293844942733f, 4.9063510479968295f, 4.956100941192531f, 4.909396532709556f, 4.832357790742362f, 4.8564561723622885f, 4.723071876508529f};
  CopyArr<float >(zs__ANONYMOUS_s145,_tt14, 31, 31);
}
void _main(int id, CuboidHint** cuboidHints__ANONYMOUS_s125/* len = 1 */, CylinderHint** cylinderHints__ANONYMOUS_s120/* len = 1 */, bool* labels__ANONYMOUS_s130/* len = 31 */, float* xs__ANONYMOUS_s131/* len = 31 */, float* ys__ANONYMOUS_s132/* len = 31 */, float* zs__ANONYMOUS_s133/* len = 31 */) {
  check(id, cuboidHints__ANONYMOUS_s125, cylinderHints__ANONYMOUS_s120, labels__ANONYMOUS_s130, xs__ANONYMOUS_s131, ys__ANONYMOUS_s132, zs__ANONYMOUS_s133);
}
void check(int i, CuboidHint** cuboidHints__ANONYMOUS_s123/* len = 1 */, CylinderHint** cylinderHints__ANONYMOUS_s118/* len = 1 */, bool* labels__ANONYMOUS_s112/* len = 31 */, float* xs__ANONYMOUS_s113/* len = 31 */, float* ys__ANONYMOUS_s114/* len = 31 */, float* zs__ANONYMOUS_s115/* len = 31 */) {
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
  char _tt15[11] = {'/', '/', ' ', 'B', 'e', 'g', 'i', 'n', '.', '\n', '\0'};
  print(11, _tt15);
  char _tt16[11] = {'u', 'n', 'i', 'o', 'n', '(', ')', ' ', '{', '\n', '\0'};
  print(11, _tt16);
  bool  _out_s80=0;
  torus0(p, _out_s80);
  char _tt17[2] = {'\n', '\0'};
  print(2, _tt17);
  CuboidHint*  c=NULL;
  c = (cuboidHints__ANONYMOUS_s121[0]);
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
  char _tt18[9] = {'r', 'o', 't', 'a', 't', 'e', '(', '[', '\0'};
  print(9, _tt18);
  printfloat(roll_s36);
  char _tt19[3] = {',', ' ', '\0'};
  print(3, _tt19);
  printfloat(pitch_s38);
  char _tt20[3] = {',', ' ', '\0'};
  print(3, _tt20);
  printfloat(yaw_s40);
  char _tt21[4] = {']', ')', '\n', '\0'};
  print(4, _tt21);
  char _tt22[12] = {'t', 'r', 'a', 'n', 's', 'l', 'a', 't', 'e', '(', '[', '\0'};
  print(12, _tt22);
  printfloat(((offsets_2[1]) + (offsets[0])) * 0.5f);
  char _tt23[3] = {',', ' ', '\0'};
  print(3, _tt23);
  printfloat(((offsets_3[1]) + (offsets_0[0])) * 0.5f);
  char _tt24[3] = {',', ' ', '\0'};
  print(3, _tt24);
  printfloat(((offsets_4[0]) + (offsets_1[1])) * 0.5f);
  char _tt25[4] = {']', ')', '\n', '\0'};
  print(4, _tt25);
  char _tt26[14] = {'c', 'u', 'b', 'e', '(', 's', 'i', 'z', 'e', ' ', '=', ' ', '[', '\0'};
  print(14, _tt26);
  printfloat((offsets_2[1]) - (offsets[0]));
  char _tt27[3] = {',', ' ', '\0'};
  print(3, _tt27);
  printfloat((offsets_3[1]) - (offsets_0[0]));
  char _tt28[3] = {',', ' ', '\0'};
  print(3, _tt28);
  printfloat((offsets_4[0]) - (offsets_1[1]));
  char _tt29[20] = {']', ',', ' ', 'c', 'e', 'n', 't', 'e', 'r', ' ', '=', ' ', 't', 'r', 'u', 'e', ')', ';', '\n', '\0'};
  print(20, _tt29);
  bool  x_in_range=((p_rotated_s22->x) >= ((offsets[0]))) && ((p_rotated_s22->x) <= ((offsets_2[1])));
  bool  y_in_range=((p_rotated_s22->y) >= ((offsets_0[0]))) && ((p_rotated_s22->y) <= ((offsets_3[1])));
  bool  z_in_range=((p_rotated_s22->z) >= ((offsets_1[1]))) && ((p_rotated_s22->z) <= ((offsets_4[0])));
  char _tt30[3] = {'}', '\n', '\0'};
  print(3, _tt30);
  _out = _out_s80 || ((x_in_range && y_in_range) && z_in_range);
  char _tt31[9] = {'/', '/', ' ', 'E', 'n', 'd', '.', '\n', '\0'};
  print(9, _tt31);
  delete[] offsets;
  delete[] offsets_0;
  delete[] offsets_1;
  delete[] offsets_2;
  delete[] offsets_3;
  delete[] offsets_4;
  return;
}
void print(int n, char* message/* len = n */) { std::cout << message; }
void torus0(Vector* p, bool& _out) {
  bool  _out_s82=0;
  renderTorus(p, 1.35496f, -(0.01036f), -(0.50652f), 0.00465f, -(0.999801f), -(0.01939f), 0.0f, 0.019391f, -(1.566145f), 2.67364f, 0.87877f, _out_s82);
  _out = _out_s82;
  return;
}
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
  char _tt32[12] = {'t', 'r', 'a', 'n', 's', 'l', 'a', 't', 'e', '(', '[', '\0'};
  print(12, _tt32);
  printfloat(c->x);
  char _tt33[3] = {',', ' ', '\0'};
  print(3, _tt33);
  printfloat(c->y);
  char _tt34[3] = {',', ' ', '\0'};
  print(3, _tt34);
  printfloat(c->z);
  char _tt35[4] = {']', ')', '\n', '\0'};
  print(4, _tt35);
  char _tt36[9] = {'r', 'o', 't', 'a', 't', 'e', '(', '[', '\0'};
  print(9, _tt36);
  printfloat(roll_s84);
  char _tt37[3] = {',', ' ', '\0'};
  print(3, _tt37);
  printfloat(pitch_s86);
  char _tt38[3] = {',', ' ', '\0'};
  print(3, _tt38);
  printfloat(yaw_s88);
  char _tt39[4] = {']', ')', '\n', '\0'};
  print(4, _tt39);
  char _tt40[20] = {'r', 'o', 't', 'a', 't', 'e', '(', '[', '0', ',', ' ', '9', '0', ',', ' ', '0', ']', ')', '\n', '\0'};
  print(20, _tt40);
  char _tt41[26] = {'r', 'o', 't', 'a', 't', 'e', '_', 'e', 'x', 't', 'r', 'u', 'd', 'e', '(', '$', 'f', 'n', ' ', '=', ' ', '1', '2', ')', '\n', '\0'};
  print(26, _tt41);
  char _tt42[12] = {'t', 'r', 'a', 'n', 's', 'l', 'a', 't', 'e', '(', '[', '\0'};
  print(12, _tt42);
  printfloat(R);
  char _tt43[10] = {',', ' ', '0', ',', ' ', '0', ']', ')', '\n', '\0'};
  print(10, _tt43);
  char _tt44[12] = {'c', 'i', 'r', 'c', 'l', 'e', '(', 'r', ' ', '=', ' ', '\0'};
  print(12, _tt44);
  printfloat(r);
  char _tt45[14] = {',', ' ', '$', 'f', 'n', ' ', '=', ' ', '1', '2', ')', ';', '\n', '\0'};
  print(14, _tt45);
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
