#include <cstdio>
#include <assert.h>
#include <iostream>
using namespace std;
#include "vops.h"
#include "two_cuboids_0_0.h"
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
  float _tt0[128] = {0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f};
  float*  zs__ANONYMOUS_s130= new float [128]; CopyArr<float >(zs__ANONYMOUS_s130,_tt0, 128, 128);
  glblInit_zs__ANONYMOUS_s142(zs__ANONYMOUS_s130);
  float _tt1[128] = {0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f};
  float*  ys__ANONYMOUS_s129= new float [128]; CopyArr<float >(ys__ANONYMOUS_s129,_tt1, 128, 128);
  glblInit_ys__ANONYMOUS_s140(ys__ANONYMOUS_s129);
  float _tt2[128] = {0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f};
  float*  xs__ANONYMOUS_s128= new float [128]; CopyArr<float >(xs__ANONYMOUS_s128,_tt2, 128, 128);
  glblInit_xs__ANONYMOUS_s138(xs__ANONYMOUS_s128);
  bool _tt3[128] = {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0};
  bool*  labels__ANONYMOUS_s127= new bool [128]; CopyArr<bool >(labels__ANONYMOUS_s127,_tt3, 128, 128);
  glblInit_labels__ANONYMOUS_s136(labels__ANONYMOUS_s127);
  void * _tt4[1] = {NULL};
  CylinderHint**  cylinderHints__ANONYMOUS_s113= new CylinderHint* [1]; CopyArr<CylinderHint* >(cylinderHints__ANONYMOUS_s113,_tt4, 1, 1);
  glblInit_cylinderHints__ANONYMOUS_s134(cylinderHints__ANONYMOUS_s113);
  void * _tt5[2] = {NULL, NULL};
  CuboidHint**  cuboidHints__ANONYMOUS_s121= new CuboidHint* [2]; CopyArr<CuboidHint* >(cuboidHints__ANONYMOUS_s121,_tt5, 2, 2);
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
void glblInit_cuboidHints__ANONYMOUS_s132(CuboidHint** cuboidHints__ANONYMOUS_s131/* len = 2 */) {
  float _tt7[4] = {-(1.354834326399362f), 0.6049619318280214f, -(19.0f), 19.0f};
  float _tt8[4] = {4.383215153856256f, -(1.4960561379360648f), -(19.0f), 19.0f};
  float _tt9[4] = {-(2.943225758132506f), 0.9764035034885166f, -(19.0f), 19.0f};
  float _tt10[4] = {1.34882f, -(0.61096f), -(19.0f), 19.0f};
  float _tt11[4] = {-(3.11259f), 0.80698f, -(19.0f), 19.0f};
  float _tt12[4] = {-(5.0f), 0.87935f, -(19.0f), 19.0f};
  CuboidHint* _tt6[2] = {CuboidHint::create(1.745334f, 0.349067f, 0.2618f, 4, 4, 4, _tt7, 4, _tt8, 4, _tt9, 4), CuboidHint::create(0.0f, -(0.0f), 0.0f, 4, 4, 4, _tt10, 4, _tt11, 4, _tt12, 4)};
  CopyArr<CuboidHint* >(cuboidHints__ANONYMOUS_s131,_tt6, 2, 2);
}
void glblInit_cylinderHints__ANONYMOUS_s134(CylinderHint** cylinderHints__ANONYMOUS_s133/* len = 1 */) {
  void * _tt13[1] = {NULL};
  CopyArr<CylinderHint* >(cylinderHints__ANONYMOUS_s133,_tt13, 1, 1);
}
void glblInit_labels__ANONYMOUS_s136(bool* labels__ANONYMOUS_s135/* len = 128 */) {
  bool _tt14[128] = {1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0};
  CopyArr<bool >(labels__ANONYMOUS_s135,_tt14, 128, 128);
}
void glblInit_xs__ANONYMOUS_s138(float* xs__ANONYMOUS_s137/* len = 128 */) {
  float _tt15[128] = {-(1.1514018732414217f), -(0.8947769396686841f), -(1.2890187165870706f), -(1.072399029155969f), -(0.12953908557102978f), 0.25896529706560334f, -(0.3189683010124503f), 0.08101046232967202f, 0.40461735630105145f, -(0.10587143247487846f), 0.35852090987720686f, 0.3928276332708243f, 0.9012398982864026f, 0.45713567821589096f, 0.7539417726934293f, 1.7553866595845282f, 1.5801096702025506f, -(2.799338773110718f), -(2.742561092647316f), -(1.643842676880709f), -(2.0641411235974374f), -(1.6054757941969935f), -(2.8078779106166003f), -(2.7155548899360102f), -(1.9948010415266078f), -(1.354006730880689f), -(1.329106740551432f), -(2.745547743445968f), -(2.2208106078072305f), -(2.26901642794682f), -(1.3401671844099512f), -(2.822269369340134f), -(2.554757011688807f), -(2.071696850842067f), -(1.1628284710859735f), -(2.807109653156626f), -(2.791886921314143f), -(2.2930860263989365f), -(1.1683622361165158f), -(0.38121766378343747f), 0.08760648384660508f, 0.2611277968124002f, -(0.006191167663267577f), 0.3453547866329274f, -(0.13620404179251944f), 0.19701384402154665f, -(0.35402405808837545f), -(0.13055339485317424f), -(0.4654543911230518f), -(0.30044879349904485f), -(1.8742282144287434f), -(1.356511050578035f), -(0.8347197074377163f), -(2.068401539542454f), -(1.5278233574698417f), -(1.0029612299213564f), -(2.702851598667392f), -(1.4526365296339965f), -(2.782469932464662f), -(1.8997351102506128f), -(2.711546552671293f), -(2.245671719983691f), -(1.3961821846167661f), -(1.1991339086579365f), -(0.949373455273547f), -(0.8320201024537432f), -(1.1612805576403833f), -(0.9322616540797678f), -(1.4473118460823f), -(1.1335388702089264f), -(1.9780501851371401f), -(1.1157082790796702f), -(0.061045343738325486f), 0.5451658421675757f, 0.7602937805448585f, 1.1898212139894953f, 0.5939730694439292f, 1.0467868740453046f, 0.8273498537062908f, -(0.463827826657774f), 0.6841955505977997f, -(0.3182843789748882f), 0.262709746123459f, 0.577899223447754f, 0.31748992386320257f, 0.7271529438460979f, 1.093146226331861f, 0.3723358676549585f, 0.06540247400567692f, 1.18527569445437f, 0.3870233148131068f, 0.37164508399578045f, 0.5406402172422671f, 0.9752724442173786f, 0.03366041578717127f, 0.7087980055653851f, 0.8565093996902078f, 1.5090192400083475f, 1.5292979588740065f, 1.9578108711374695f, 2.570684947947173f, 1.895363449902229f, 2.29056465366176f, 2.219501421947274f, 1.9200968405551828f, 1.7112064094830988f, 2.3944001943130946f, 2.318299567273278f, 2.7147001316634274f, 2.805157518810374f, 2.6672485097143337f, 2.5988303876003087f, 2.4699124880899745f, 2.75681795955281f, 2.812640669572905f, 1.7097641890947184f, 1.7943257902582717f, 2.132983781497071f, 2.7598280159104767f, 2.837723298705069f, 2.793701959296265f, 2.426399630500441f, 2.667405705013575f, 2.7514960127662373f, 2.83263338134444f, 1.910761489168416f, 2.052949823046858f, 2.72208737515885f};
  CopyArr<float >(xs__ANONYMOUS_s137,_tt15, 128, 128);
}
void glblInit_ys__ANONYMOUS_s140(float* ys__ANONYMOUS_s139/* len = 128 */) {
  float _tt16[128] = {0.052920937478696875f, 0.41111241814897903f, 2.020444077576906f, 1.9361034854882626f, -(2.5954010206681914f), -(2.042647903138409f), -(0.30138870770089243f), -(0.19479486178234712f), -(0.25955649707460354f), 1.327379010972961f, 1.700307642757183f, -(1.2099601228408616f), -(1.1221661543015227f), 0.1697911828348213f, 0.14368171234603122f, -(0.7033725824672676f), 1.2279599974547477f, -(3.660838413311114f), -(3.731983230480791f), -(3.7327266302362587f), -(3.7348436372497f), -(3.719809140104176f), -(2.964939575344636f), -(2.2051669483740888f), -(2.2815561455079116f), -(2.3598607687709947f), -(2.671540019773148f), -(0.39403912886923764f), -(0.49803384846353005f), -(0.5482334291245946f), -(1.1651989519479615f), 1.511028741471045f, 1.5770079335629794f, 1.5716556121521958f, 1.280902706512399f, 3.088043042891257f, 2.963286456734374f, 3.0846412785652872f, 2.531199512747646f, -(4.148826074807232f), -(3.7325790921174993f), -(3.7340421558033743f), -(2.441556351322362f), -(2.4829821856573675f), -(1.148667262479788f), -(1.0793048227849535f), 1.2400950527229238f, 1.3031032222643546f, 2.338347555539969f, 2.5776414207033573f, -(3.734795935251995f), -(3.730557828483893f), -(3.3039318050382f), -(2.0051295308463595f), -(1.9067505841354688f), -(1.4441869331552002f), 0.12609754033079557f, -(0.005328095007147149f), 1.6909383273064151f, 1.7963809129246482f, 3.6627995260528943f, 3.7253373342181524f, 3.6985022039538173f, 3.4755044269719124f, -(0.7900717212593243f), -(0.5129457350437336f), 0.3438061682609447f, 0.49001180652069226f, 2.730354897038448f, 2.7126015262357503f, 3.7230060681660717f, 3.724123067789301f, -(3.6569987004495825f), -(3.912571991453088f), -(3.6854871602923307f), -(3.614471711232259f), -(2.042327241036547f), -(1.9551151532116553f), 0.26685313114390946f, 1.3587898911897869f, 1.6037880691604112f, 3.2991288533223093f, 3.3744422027845147f, 3.6317847109240096f, -(3.7095010101476307f), -(3.706489244940214f), -(3.5515918456788773f), -(1.1170743668628438f), 0.37811629691821347f, 0.6444055841542593f, 2.477364510880329f, 2.0571029453826544f, 2.4525967963357296f, 2.115415609087001f, 3.7286540457865347f, 3.708719708445206f, 3.709739700032849f, -(3.721279390676417f), -(3.4637552075472033f), -(3.7103434622233475f), -(3.7338222028267705f), -(2.5715157132896707f), -(2.264909807676747f), -(0.7381868214267944f), 1.3586981877685071f, 2.774995175511968f, -(3.7255541772487675f), -(3.727941515919875f), -(3.732281461780896f), -(3.6413928633959896f), -(1.3834844559792046f), -(1.4856195795018812f), -(2.0127312545983402f), -(1.6582715943869113f), -(1.577937129006183f), 0.5099456545200111f, 0.36230067039763586f, 0.09819936363690507f, -(0.03900972908745645f), 0.004345226297343685f, 1.9934678045138303f, 2.830080674902101f, 2.4164544204068177f, 2.0467828407988f, 1.9545274679894922f, 3.708134759926364f, 3.6732511277557727f, 3.685654026779064f};
  CopyArr<float >(ys__ANONYMOUS_s139,_tt16, 128, 128);
}
void glblInit_zs__ANONYMOUS_s142(float* zs__ANONYMOUS_s141/* len = 128 */) {
  float _tt17[128] = {-(0.5538999229484098f), 1.255461652710763f, -(0.08946898998693509f), 1.2888043160942233f, -(2.4050486845381926f), 0.0029314107163563984f, -(1.9900080720247442f), 0.23032769881366852f, 1.9430179034482535f, 0.3250105728433891f, 2.9738876911088776f, -(4.1389865947532085f), -(1.5350957780763128f), -(2.5595263043866283f), -(1.303602470143591f), 3.4979437435098513f, 3.963042118624123f, -(5.335903234998909f), -(3.6575921990495934f), -(0.5716766572389698f), 3.8791690843497704f, 5.847367360104229f, -(5.129740882032659f), -(1.7036998647970654f), 0.043387692675216305f, 1.6545730673962145f, 5.621205043789895f, -(1.458560471697436f), 0.0885614753319004f, 3.6870089958827057f, 5.946738485333032f, -(1.042156019224956f), 0.22219132064069422f, 1.7104818113465152f, 5.997891832605161f, -(0.5992678038343822f), 0.32492393166496136f, 3.728027720863577f, 5.97450185047309f, 0.6900162361607453f, 3.65977539540993f, 5.379362592081557f, 3.8745961700565483f, 5.082463512294133f, 4.202675468258101f, 5.962487955715249f, 4.646950566857705f, 5.893913731048316f, 4.981070536848133f, 5.982526476683133f, -(5.908903936442849f), -(4.1266884739647685f), -(1.17159505922904f), -(5.971597496624407f), -(4.052572114613727f), -(0.9145896117447714f), -(5.814213335017975f), -(2.702939417439927f), -(5.927020291900851f), -(2.685990110506051f), -(5.336570670482037f), -(1.7407672553952203f), 0.10401201669200699f, 1.5518488794988756f, -(5.813984618338972f), -(4.868966825948645f), -(5.928632107457178f), -(4.641139967404837f), -(5.917610878062668f), -(4.472093348188978f), -(5.367953200437107f), -(3.2984172710498028f), -(2.8750642739010157f), -(0.011509837697136871f), 1.4569960320025896f, 4.0991370015579f, 1.8012806113338695f, 4.454177593597383f, 4.956543710638744f, -(1.60711365280439f), 5.234161284283534f, 0.5831812638010044f, 3.9534546395164463f, 5.699790755926246f, -(5.736656453123622f), -(4.304188726143573f), -(1.9777422007032444f), -(6.078507640286585f), -(5.467795427112678f), 1.090285595260084f, -(5.989076566562463f), -(3.9454523684400518f), -(0.7493066894404669f), 1.2488332943047205f, -(1.9230932497169095f), 0.27460867218596574f, 1.5367350033946898f, 5.907889328666931f, 0.6980943715986571f, 2.4093431802165095f, 4.437160296236509f, 3.1370294054194265f, 5.162775442746752f, 5.86923563520523f, 5.865267119444151f, 5.8096723170271485f, -(5.74905793065627f), -(3.9053351097329063f), -(0.8462470355415307f), 1.4947242470251108f, -(5.99666672603072f), -(3.9296570816787497f), -(0.3889588123786824f), 1.902819825899441f, 3.8973812880650325f, -(5.330608025268778f), -(2.841368295172201f), 0.14096441947688945f, 2.718964751136104f, 4.182584755861598f, -(5.979489588588239f), -(3.5450660212907343f), -(0.21469572078680899f), 2.6245199905033925f, 4.934613584199834f, 0.5665737332097334f, 3.245036941901951f, 5.347739849689089f};
  CopyArr<float >(zs__ANONYMOUS_s141,_tt17, 128, 128);
}
void _main(int id, CuboidHint** cuboidHints__ANONYMOUS_s120/* len = 2 */, CylinderHint** cylinderHints__ANONYMOUS_s114/* len = 1 */, bool* labels__ANONYMOUS_s123/* len = 128 */, float* xs__ANONYMOUS_s124/* len = 128 */, float* ys__ANONYMOUS_s125/* len = 128 */, float* zs__ANONYMOUS_s126/* len = 128 */) {
  check(id, cuboidHints__ANONYMOUS_s120, cylinderHints__ANONYMOUS_s114, labels__ANONYMOUS_s123, xs__ANONYMOUS_s124, ys__ANONYMOUS_s125, zs__ANONYMOUS_s126);
}
void check(int i, CuboidHint** cuboidHints__ANONYMOUS_s117/* len = 2 */, CylinderHint** cylinderHints__ANONYMOUS_s118/* len = 1 */, bool* labels__ANONYMOUS_s107/* len = 128 */, float* xs__ANONYMOUS_s108/* len = 128 */, float* ys__ANONYMOUS_s109/* len = 128 */, float* zs__ANONYMOUS_s110/* len = 128 */) {
  Vector*  v=Vector::create((xs__ANONYMOUS_s108[i]), (ys__ANONYMOUS_s109[i]), (zs__ANONYMOUS_s110[i]));
  if ((labels__ANONYMOUS_s107[i])) {
    bool  _out_s2=0;
    contains(v, 2, _out_s2, cuboidHints__ANONYMOUS_s117, cylinderHints__ANONYMOUS_s118);
  } else {
    bool  _out_s4=0;
    contains(v, 2, _out_s4, cuboidHints__ANONYMOUS_s117, cylinderHints__ANONYMOUS_s118);
  }
}
void contains(Vector* p, int num_primitives_0, bool& _out, CuboidHint** cuboidHints__ANONYMOUS_s119/* len = 2 */, CylinderHint** cylinderHints__ANONYMOUS_s116/* len = 1 */) {
  char _tt18[11] = {'/', '/', ' ', 'B', 'e', 'g', 'i', 'n', '.', '\n', '\0'};
  print(11, _tt18);
  char _tt19[11] = {'u', 'n', 'i', 'o', 'n', '(', ')', ' ', '{', '\n', '\0'};
  print(11, _tt19);
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
  char _tt20[9] = {'r', 'o', 't', 'a', 't', 'e', '(', '[', '\0'};
  print(9, _tt20);
  printfloat(roll_s36);
  char _tt21[3] = {',', ' ', '\0'};
  print(3, _tt21);
  printfloat(pitch_s38);
  char _tt22[3] = {',', ' ', '\0'};
  print(3, _tt22);
  printfloat(yaw_s40);
  char _tt23[4] = {']', ')', '\n', '\0'};
  print(4, _tt23);
  char _tt24[12] = {'t', 'r', 'a', 'n', 's', 'l', 'a', 't', 'e', '(', '[', '\0'};
  print(12, _tt24);
  printfloat(((offsets_2[1]) + (offsets[0])) * 0.5f);
  char _tt25[3] = {',', ' ', '\0'};
  print(3, _tt25);
  printfloat(((offsets_3[0]) + (offsets_0[1])) * 0.5f);
  char _tt26[3] = {',', ' ', '\0'};
  print(3, _tt26);
  printfloat(((offsets_4[1]) + (offsets_1[0])) * 0.5f);
  char _tt27[4] = {']', ')', '\n', '\0'};
  print(4, _tt27);
  char _tt28[14] = {'c', 'u', 'b', 'e', '(', 's', 'i', 'z', 'e', ' ', '=', ' ', '[', '\0'};
  print(14, _tt28);
  printfloat((offsets_2[1]) - (offsets[0]));
  char _tt29[3] = {',', ' ', '\0'};
  print(3, _tt29);
  printfloat((offsets_3[0]) - (offsets_0[1]));
  char _tt30[3] = {',', ' ', '\0'};
  print(3, _tt30);
  printfloat((offsets_4[1]) - (offsets_1[0]));
  char _tt31[20] = {']', ',', ' ', 'c', 'e', 'n', 't', 'e', 'r', ' ', '=', ' ', 't', 'r', 'u', 'e', ')', ';', '\n', '\0'};
  print(20, _tt31);
  bool  x_in_range=((p_rotated_s22->x) >= ((offsets[0]))) && ((p_rotated_s22->x) <= ((offsets_2[1])));
  bool  y_in_range=((p_rotated_s22->y) >= ((offsets_0[1]))) && ((p_rotated_s22->y) <= ((offsets_3[0])));
  bool  z_in_range=((p_rotated_s22->z) >= ((offsets_1[0]))) && ((p_rotated_s22->z) <= ((offsets_4[1])));
  char _tt32[2] = {'\n', '\0'};
  print(2, _tt32);
  CuboidHint*  c_0=(cuboidHints__ANONYMOUS_s119[1]);
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
  char _tt33[9] = {'r', 'o', 't', 'a', 't', 'e', '(', '[', '\0'};
  print(9, _tt33);
  printfloat(roll_s36_0);
  char _tt34[3] = {',', ' ', '\0'};
  print(3, _tt34);
  printfloat(pitch_s38_0);
  char _tt35[3] = {',', ' ', '\0'};
  print(3, _tt35);
  printfloat(yaw_s40_0);
  char _tt36[4] = {']', ')', '\n', '\0'};
  print(4, _tt36);
  char _tt37[12] = {'t', 'r', 'a', 'n', 's', 'l', 'a', 't', 'e', '(', '[', '\0'};
  print(12, _tt37);
  printfloat(((offsets_8[0]) + (offsets_5[1])) * 0.5f);
  char _tt38[3] = {',', ' ', '\0'};
  print(3, _tt38);
  printfloat(((offsets_9[1]) + (offsets_6[0])) * 0.5f);
  char _tt39[3] = {',', ' ', '\0'};
  print(3, _tt39);
  printfloat(((offsets_10[1]) + (offsets_7[0])) * 0.5f);
  char _tt40[4] = {']', ')', '\n', '\0'};
  print(4, _tt40);
  char _tt41[14] = {'c', 'u', 'b', 'e', '(', 's', 'i', 'z', 'e', ' ', '=', ' ', '[', '\0'};
  print(14, _tt41);
  printfloat((offsets_8[0]) - (offsets_5[1]));
  char _tt42[3] = {',', ' ', '\0'};
  print(3, _tt42);
  printfloat((offsets_9[1]) - (offsets_6[0]));
  char _tt43[3] = {',', ' ', '\0'};
  print(3, _tt43);
  printfloat((offsets_10[1]) - (offsets_7[0]));
  char _tt44[20] = {']', ',', ' ', 'c', 'e', 'n', 't', 'e', 'r', ' ', '=', ' ', 't', 'r', 'u', 'e', ')', ';', '\n', '\0'};
  print(20, _tt44);
  bool  x_in_range_0=((p_rotated_s22_0->x) >= ((offsets_5[1]))) && ((p_rotated_s22_0->x) <= ((offsets_8[0])));
  bool  y_in_range_0=((p_rotated_s22_0->y) >= ((offsets_6[0]))) && ((p_rotated_s22_0->y) <= ((offsets_9[1])));
  bool  z_in_range_0=((p_rotated_s22_0->z) >= ((offsets_7[0]))) && ((p_rotated_s22_0->z) <= ((offsets_10[1])));
  char _tt45[3] = {'}', '\n', '\0'};
  print(3, _tt45);
  _out = ((x_in_range && y_in_range) && z_in_range) || ((x_in_range_0 && y_in_range_0) && z_in_range_0);
  char _tt46[9] = {'/', '/', ' ', 'E', 'n', 'd', '.', '\n', '\0'};
  print(9, _tt46);
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
