#ifndef ONE_SPHERE_0_0_H
#define ONE_SPHERE_0_0_H

#include <cstring>

#include "vops.h"

namespace ANONYMOUS{
class CuboidHint; 
class CylinderHint; 
class Vector; 
}
namespace math{
}
namespace ANONYMOUS{
class CuboidHint; 
class CylinderHint; 
class Vector; 
class CuboidHint{
  public:
  float  theta_x;
  float  theta_y;
  float  theta_z;
  int  xlen;
  int  ylen;
  int  zlen;
  float*  xlist;
  float*  ylist;
  float  zlist[];
  CuboidHint(){}
template<typename T_0, typename T_1, typename T_2>
  static CuboidHint* create(  float  theta_x_,   float  theta_y_,   float  theta_z_,   int  xlen_,   int  ylen_,   int  zlen_,   T_0* xlist_, int xlist_len,   T_1* ylist_, int ylist_len,   T_2* zlist_, int zlist_len);
  ~CuboidHint(){
  }
  void operator delete(void* p){ free(p); }
};
class CylinderHint{
  public:
  float  theta_x;
  float  theta_y;
  float  theta_z;
  float  radius;
  float  y;
  float  z;
  int  xlen;
  float  xlist[];
  CylinderHint(){}
template<typename T_0>
  static CylinderHint* create(  float  theta_x_,   float  theta_y_,   float  theta_z_,   float  radius_,   float  y_,   float  z_,   int  xlen_,   T_0* xlist_, int xlist_len);
  ~CylinderHint(){
  }
  void operator delete(void* p){ free(p); }
};
class Vector{
  public:
  float  x;
  float  y;
  float  z;
  Vector(){}
  static Vector* create(  float  x_,   float  y_,   float  z_);
  ~Vector(){
  }
  void operator delete(void* p){ free(p); }
};
extern void main__Wrapper(int id);
extern void main__WrapperNospec(int id);
extern void glblInit_cuboidHints__ANONYMOUS_s136(CuboidHint** cuboidHints__ANONYMOUS_s135/* len = 1 */);
extern void glblInit_cylinderHints__ANONYMOUS_s138(CylinderHint** cylinderHints__ANONYMOUS_s137/* len = 1 */);
extern void glblInit_labels__ANONYMOUS_s140(bool* labels__ANONYMOUS_s139/* len = 2 */);
extern void glblInit_xs__ANONYMOUS_s142(float* xs__ANONYMOUS_s141/* len = 2 */);
extern void glblInit_ys__ANONYMOUS_s144(float* ys__ANONYMOUS_s143/* len = 2 */);
extern void glblInit_zs__ANONYMOUS_s146(float* zs__ANONYMOUS_s145/* len = 2 */);
extern void _main(int id, CuboidHint** cuboidHints__ANONYMOUS_s131/* len = 1 */, CylinderHint** cylinderHints__ANONYMOUS_s118/* len = 1 */, bool* labels__ANONYMOUS_s124/* len = 2 */, float* xs__ANONYMOUS_s125/* len = 2 */, float* ys__ANONYMOUS_s126/* len = 2 */, float* zs__ANONYMOUS_s127/* len = 2 */);
extern void check(int i, CuboidHint** cuboidHints__ANONYMOUS_s130/* len = 1 */, CylinderHint** cylinderHints__ANONYMOUS_s119/* len = 1 */, bool* labels__ANONYMOUS_s111/* len = 2 */, float* xs__ANONYMOUS_s112/* len = 2 */, float* ys__ANONYMOUS_s113/* len = 2 */, float* zs__ANONYMOUS_s114/* len = 2 */);
extern void contains(Vector* p, int num_primitives_0, bool& _out, CuboidHint** cuboidHints__ANONYMOUS_s134/* len = 1 */, CylinderHint** cylinderHints__ANONYMOUS_s133/* len = 1 */);
extern void print(int n, char* message/* len = n */);
extern void sphere0(Vector* p, bool& _out);
extern void renderSphere(Vector* p, float x, float y, float z, float r, bool& _out);
extern void printfloat(float n);
}
namespace math{
extern void abs(float v, float& _out);
extern void cos(float v, float& _out);
extern void sin(float v, float& _out);
extern void tan(float v, float& _out);
extern void sqrt(float v, float& _out);
extern void log(float v, float& _out);
extern void arctan(float v, float& _out);
extern void _cast_int_float(int v, float& _out);
extern void exp(float v, float& _out);
}

#endif
