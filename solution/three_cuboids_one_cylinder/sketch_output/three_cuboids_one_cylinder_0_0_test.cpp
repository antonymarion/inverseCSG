#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <iostream>
#include "vops.h"
#include "three_cuboids_one_cylinder_0_0.h"

using namespace std;

void main__Wrapper_ANONYMOUSTest(Parameters& _p_) {
  for(int _test_=0;_test_< _p_.niters ;_test_++) {
    int  id;
    id=abs(rand()) % 512;
    if(_p_.verbosity > 2){
      cout<<"id="<<id<<endl;
    }
    try{
      ANONYMOUS::main__WrapperNospec(id);
      ANONYMOUS::main__Wrapper(id);
    }catch(AssumptionFailedException& afe){  }
  }
}

int main(int argc, char** argv) {
  Parameters p(argc, argv);
  srand(time(0));
  main__Wrapper_ANONYMOUSTest(p);
  printf("Automated testing passed for three_cuboids_one_cylinder_0_0\n");
  return 0;
}
