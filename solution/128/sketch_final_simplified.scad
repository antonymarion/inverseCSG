intersection() {
  cube(size = [10.2398, 11.9998, 1.2798], center = true);

  union() {
    intersection() {
      difference() {
        difference() {
          translate([-0.0725, -0.8135, 0.0005])
          cube(size = [7.3208, 5.1728, 1.0668], center = true);
        
          translate([-1.6, 0.706, 0.0005])
          cylinder(h = 1.0669, r1 = 0.266, r2 = 0.266, center = true, $fn = 12);
        }
      
        union() {
          translate([2.133, 2.039, 0])
          cylinder(h = 36.1999, r1 = 0.266, r2 = 0.266, center = true, $fn = 12);
        
          translate([0.2665, 0.0405, 0.0005])
          cube(size = [3.7329, 1.8669, 1.0669], center = true);
        }
      }
    
      union() {
        translate([2.801, 0.733, 0])
        cylinder(h = 36.1998, r1 = 0.4, r2 = 0.4, center = true, $fn = 12);
      
        translate([-1.336, 1.1065, 9.1835])
        cube(size = [4.7938, 1.3328, 17.8328], center = true);
      
        translate([2.3245, 1.1065, 0.4005])
        cube(size = [2.5268, 1.3328, 0.2668], center = true);
      
        translate([2.8605, 10.6775, 0.0005])
        cube(size = [1.4548, 14.8448, 1.0668], center = true);
      }
    }
  
    translate([2.799, -2.598, -0.133])
    cylinder(h = 0.7998, r1 = 0.4, r2 = 0.4, center = true, $fn = 12);
  
    difference() {
      translate([-0.3395, 2.0535, -0.0005])
      rotate([-180, 0, 0])
      cube(size = [7.8548, 5.8928, 1.0668], center = true);
    
      union() {
        translate([-3.454, 3.255, -0.133])
        cylinder(h = 0.7999, r1 = 0.283, r2 = 0.283, center = true, $fn = 12);
      
        difference() {
          translate([-10.115, 4.267, 8.7835])
          rotate([-180, 0, 0])
          cube(size = [15.9699, 1.4659, 18.6329], center = true);
        
          translate([-3.608, 4.344, 0])
          cylinder(h = 36.2, r1 = 0.654, r2 = 0.654, center = true, $fn = 12);
        }
      
        translate([-3.468, 4.173, 0])
        cylinder(h = 36.1999, r1 = 0.426, r2 = 0.426, center = true, $fn = 12);
      
        difference() {
          translate([0, 1.1805, -0.0005])
          rotate([-180, 0, 0])
          cube(size = [36.1999, 4.1489, 1.0669], center = true);
        
          translate([-2.801, 0.733, 8.7835])
          cylinder(h = 18.633, r1 = 0.4, r2 = 0.4, center = true, $fn = 12);
        }
      
        translate([-0.0065, 10.6775, -8.9165])
        rotate([-180, 0, 0])
        cube(size = [7.1889, 14.8449, 18.3669], center = true);
      
        translate([10.3035, 10.8165, -8.7835])
        rotate([-180, 0, 0])
        cube(size = [15.5929, 14.5669, 18.6329], center = true);
      }
    }
  
    translate([-2.798, -2.601, 0.0005])
    cylinder(h = 1.0668, r1 = 0.399, r2 = 0.399, center = true, $fn = 12);
  
    difference() {
      translate([3.661, -3.2665, 0.0005])
      cube(size = [0.1458, 0.2668, 1.0668], center = true);
    
      translate([3.469, -3.132, 0])
      cylinder(h = 36.1999, r1 = 0.266, r2 = 0.266, center = true, $fn = 12);
    }
  
    intersection() {
      difference() {
        difference() {
          union() {
            translate([-7.256, -1.6135, -8.7835])
            cube(size = [21.6878, 6.7728, 18.6328], center = true);
          
            translate([3.1995, -0.8725, -8.7835])
            cube(size = [2.1328, 8.2548, 18.6328], center = true);
          }
        
          translate([1.595, 0.706, 0])
          cylinder(h = 36.1999, r1 = 0.27, r2 = 0.27, center = true, $fn = 12);
        }
      
        union() {
          translate([2.133, 2.039, 9.1835])
          cylinder(h = 17.8329, r1 = 0.266, r2 = 0.266, center = true, $fn = 12);
        
          translate([-1.066, -0.628, 8.7835])
          cylinder(h = 18.6329, r1 = 0.267, r2 = 0.267, center = true, $fn = 12);
        
          translate([-3.467, -4.174, 0])
          cylinder(h = 36.1999, r1 = 0.427, r2 = 0.427, center = true, $fn = 12);
        
          translate([3.59, -4.325, -8.7835])
          cylinder(h = 18.6329, r1 = 0.68, r2 = 0.68, center = true, $fn = 12);
        }
      }
    
      difference() {
        union() {
          translate([-4.0005, -2.609, 0.0005])
          cube(size = [0.5328, 3.4318, 1.0668], center = true);
        
          translate([-0.0725, -2.28, 0.0005])
          cube(size = [7.3208, 5.4398, 1.0668], center = true);
        
          translate([-3.601, -4.338, 8.7835])
          cylinder(h = 18.6328, r1 = 0.662, r2 = 0.662, center = true, $fn = 12);
        
          translate([2.931, -0.5345, 0.0005])
          cube(size = [2.6718, 7.5808, 1.0668], center = true);
        }
      
        union() {
          translate([-0.0025, -0.6265, -8.7835])
          cube(size = [2.1269, 0.5329, 18.6329], center = true);
        
          translate([1.061, -0.628, 0])
          cylinder(h = 36.1999, r1 = 0.271, r2 = 0.271, center = true, $fn = 12);
        
          translate([0.0005, -0.0725, -0.133])
          cube(size = [7.4669, 6.6549, 0.7999], center = true);
        }
      }
    }
  
    difference() {
      union() {
        translate([-0.547, 2.0535, -0.133])
        rotate([-180, 0, 0])
        cube(size = [6.1078, 5.8928, 0.7998], center = true);
      
        translate([-2.801, 0.733, 0.4005])
        cylinder(h = 0.2668, r1 = 0.4, r2 = 0.4, center = true, $fn = 12);
      
        difference() {
          translate([-0.0005, 1.7255, -0.0005])
          rotate([-180, 0, 0])
          cube(size = [8.5328, 5.2368, 1.0668], center = true);
        
          translate([-2.13, 2.042, 0])
          cylinder(h = 36.1999, r1 = 0.269, r2 = 0.269, center = true, $fn = 12);
        }
      
        translate([3.0475, 2.0535, -0.0005])
        rotate([-180, 0, 0])
        cube(size = [1.0808, 5.8928, 1.0668], center = true);
      
        translate([-2.865, 4.672, 0.3995])
        rotate([-180, 0, 0])
        cube(size = [1.4718, 0.6558, 0.2668], center = true);
      
        translate([3.588, 4.321, 0.0005])
        cylinder(h = 1.0668, r1 = 0.682, r2 = 0.682, center = true, $fn = 12);
      }
    
      union() {
        translate([-0.0005, 4.267, -9.1835])
        rotate([-180, 0, 0])
        cube(size = [5.0129, 1.4659, 17.8329], center = true);
      
        translate([-0.0725, 1.3195, -8.9165])
        rotate([-180, 0, 0])
        cube(size = [7.3209, 4.4269, 18.3669], center = true);
      
        translate([7.9855, -7.8965, 0])
        rotate([-180, 0, 0])
        cube(size = [20.2289, 20.4069, 36.1999], center = true);
      
        difference() {
          translate([3.468, 3.267, -8.9165])
          cylinder(h = 18.3669, r1 = 0.264, r2 = 0.264, center = true, $fn = 12);
        
          translate([3.588, 4.321, 8.9165])
          cylinder(h = 18.367, r1 = 0.682, r2 = 0.682, center = true, $fn = 12);
        }
      
        translate([3.467, 4.175, 0])
        cylinder(h = 36.1999, r1 = 0.426, r2 = 0.426, center = true, $fn = 12);
      
        translate([-3.468, 4.173, 8.7835])
        cylinder(h = 18.6329, r1 = 0.426, r2 = 0.426, center = true, $fn = 12);
      
        translate([0.8795, 2.7805, -0.133])
        rotate([-180, 0, 0])
        cube(size = [6.7729, 0.9489, 0.7999], center = true);
      }
    }
  
    difference() {
      union() {
        translate([-3.934, -3.2665, -0.133])
        cube(size = [0.6658, 0.2668, 0.7998], center = true);
      
        translate([3.59, -4.325, 0.0005])
        cylinder(h = 1.0668, r1 = 0.68, r2 = 0.68, center = true, $fn = 12);
      }
    
      union() {
        translate([3.467, -4.174, 0])
        cylinder(h = 36.1999, r1 = 0.426, r2 = 0.426, center = true, $fn = 12);
      
        translate([-3.471, -3.133, 8.7835])
        cylinder(h = 18.6329, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
      }
    }
  }
}
