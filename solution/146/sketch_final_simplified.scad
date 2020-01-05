intersection() {
  union() {
    difference() {
      translate([0.9705, -2.2315, -0.2315])
      cube(size = [0.8028, 0.4088, 0.4088], center = true);
    
      translate([0.573, -2.509, -9.0635])
      cylinder(h = 18.0729, r1 = 0.25, r2 = 0.25, center = true, $fn = 12);
    }
  
    difference() {
      union() {
        translate([3.0505, 1.981, 0.0005])
        cube(size = [3.3548, 0.5458, 0.8728], center = true);
      
        translate([4.727, -1.982, 0.0005])
        cylinder(h = 0.8728, r1 = 0.272, r2 = 0.272, center = true, $fn = 12);
      }
    
      union() {
        translate([4.727, -1.982, 8.832])
        cylinder(h = 18.5359, r1 = 0.136, r2 = 0.136, center = true, $fn = 12);
      
        translate([-7.014, -0.685, 0.1135])
        cube(size = [22.1719, 5.4239, 0.6449], center = true);
      
        translate([4.727, 1.982, 0])
        cylinder(h = 36.1999, r1 = 0.136, r2 = 0.136, center = true, $fn = 12);
      }
    }
  
    difference() {
      translate([-0.0005, 2.2315, 0.0005])
      cube(size = [0.5448, 0.4088, 0.8728], center = true);
    
      translate([0, 2.527, 8.9455])
      cylinder(h = 18.3089, r1 = 0.136, r2 = 0.136, center = true, $fn = 12);
    }
  
    difference() {
      union() {
        translate([-0.0005, -2.345, 0.0005])
        cube(size = [0.5448, 0.1818, 0.8728], center = true);
      
        translate([-0.316, -0.4775, -0.3225])
        cube(size = [8.2778, 3.5548, 0.2268], center = true);
      
        translate([0, -2.526, 0.0005])
        cylinder(h = 0.8728, r1 = 0.271, r2 = 0.271, center = true, $fn = 12);
      
        translate([-1.093, -3.389, -0.2315])
        cylinder(h = 0.4088, r1 = 0.265, r2 = 0.265, center = true, $fn = 12);
      
        difference() {
          translate([-0.0005, -2.917, -0.2315])
          cube(size = [2.7448, 0.9598, 0.4088], center = true);
        
          translate([0, -2.917, 0])
          cube(size = [1.6539, 0.9599, 36.1999], center = true);
        }
      
        translate([-4.354, -0.4775, 0.0005])
        cube(size = [0.7438, 3.5548, 0.8728], center = true);
      
        translate([1.23, -3.526, -0.2315])
        cube(size = [0.2858, 0.2578, 0.4088], center = true);
      }
    
      union() {
        translate([-4.0265, -0.3635, 8.9455])
        cube(size = [0.0889, 3.3269, 18.3089], center = true);
      
        translate([-1.191, -3.045, 0])
        cylinder(h = 36.1999, r1 = 0.073, r2 = 0.073, center = true, $fn = 12);
      
        translate([-4.5905, -0.2045, 0.0005])
        cube(size = [0.2709, 3.0089, 0.8729], center = true);
      
        translate([-4.726, -1.982, -8.832])
        cylinder(h = 18.5359, r1 = 0.273, r2 = 0.273, center = true, $fn = 12);
      
        translate([0, -2.527, 8.832])
        cylinder(h = 18.5359, r1 = 0.136, r2 = 0.136, center = true, $fn = 12);
      
        translate([0.2505, 0, -0.2315])
        cube(size = [7.1469, 2.5999, 0.4089], center = true);
      
        translate([1.191, -3.045, 0])
        cylinder(h = 36.1999, r1 = 0.072, r2 = 0.072, center = true, $fn = 12);
      }
    }
  
    difference() {
      union() {
        translate([4.4, -1.9825, 0.0005])
        cube(size = [0.6558, 0.5448, 0.8728], center = true);
      
        translate([2.7225, -2.2315, 0.0005])
        cube(size = [2.6988, 0.4088, 0.8728], center = true);
      }
    
      union() {
        translate([4.727, -1.982, -8.832])
        cylinder(h = 18.5359, r1 = 0.272, r2 = 0.272, center = true, $fn = 12);
      
        translate([-6.6865, -2.345, 0.205])
        cube(size = [22.8269, 0.1819, 0.4639], center = true);
      }
    }
  
    difference() {
      difference() {
        union() {
          translate([0.8275, 2.7105, -0.2315])
          cube(size = [0.5168, 1.3668, 0.4088], center = true);
        
          translate([-2.2565, 3.5145, -0.2315])
          cube(size = [2.8588, 0.2608, 0.4088], center = true);
        }
      
        translate([0.569, 2.513, -8.832])
        cylinder(h = 18.5359, r1 = 0.255, r2 = 0.255, center = true, $fn = 12);
      }
    
      difference() {
        union() {
          translate([-2.454, 2.955, 0.0005])
          cube(size = [2.1639, 1.3999, 0.8729], center = true);
        
          translate([-0.1335, 3.045, 0.0005])
          cube(size = [1.9189, 1.2179, 0.8729], center = true);
        }
      
        translate([-1.092, 3.391, 8.832])
        cylinder(h = 18.536, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
      }
    }
  
    difference() {
      translate([-1.1005, 2.7105, -0.2315])
      cube(size = [0.5448, 1.3668, 0.4088], center = true);
    
      translate([-1.191, 3.045, -8.832])
      cylinder(h = 18.5359, r1 = 0.072, r2 = 0.072, center = true, $fn = 12);
    }
  
    difference() {
      translate([-4.2635, 1.868, -0.204])
      cube(size = [0.3828, 1.1358, 0.4638], center = true);
    
      translate([-4.341, 2.514, 0])
      cylinder(h = 36.1999, r1 = 0.257, r2 = 0.257, center = true, $fn = 12);
    }
  
    translate([-1.233, -3.526, -0.2315])
    cube(size = [0.2798, 0.2578, 0.4088], center = true);
  
    difference() {
      union() {
        translate([-3.818, -3.393, -0.2315])
        cylinder(h = 0.4088, r1 = 0.261, r2 = 0.261, center = true, $fn = 12);
      
        translate([-4.726, -1.982, 0.0005])
        cylinder(h = 0.8728, r1 = 0.273, r2 = 0.273, center = true, $fn = 12);
      
        translate([-2.319, -2.7125, -0.2315])
        cube(size = [3.5038, 1.3688, 0.4088], center = true);
      }
    
      union() {
        translate([-2.0515, -2.917, 8.832])
        cube(size = [2.9689, 0.9599, 18.5359], center = true);
      
        translate([-3.719, -3.046, 8.832])
        cylinder(h = 18.5359, r1 = 0.073, r2 = 0.073, center = true, $fn = 12);
      
        translate([-0.564, -2.519, 8.832])
        cylinder(h = 18.5359, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
      
        translate([-4.726, -1.981, 8.832])
        cylinder(h = 18.5359, r1 = 0.135, r2 = 0.135, center = true, $fn = 12);
      }
    }
  
    difference() {
      union() {
        translate([4.727, 1.98, 0.0005])
        cylinder(h = 0.8728, r1 = 0.271, r2 = 0.271, center = true, $fn = 12);
      
        translate([2.914, 2.2315, -0.2315])
        cube(size = [3.0818, 0.4088, 0.4088], center = true);
      }
    
      union() {
        translate([4.345, 2.52, 0])
        cylinder(h = 36.1999, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
      
        translate([4.727, 1.982, 0])
        cylinder(h = 36.1999, r1 = 0.136, r2 = 0.136, center = true, $fn = 12);
      }
    }
  
    translate([-0.8725, -2.1415, 0.1135])
    cube(size = [4.4908, 0.2268, 0.6448], center = true);
  
    translate([1.088, -3.394, -0.2315])
    cylinder(h = 0.4088, r1 = 0.259, r2 = 0.259, center = true, $fn = 12);
  
    difference() {
      translate([-3.8035, 2.7105, -0.2315])
      cube(size = [0.5348, 1.3668, 0.4088], center = true);
    
      translate([-3.718, 3.046, -9.0635])
      cylinder(h = 18.0729, r1 = 0.072, r2 = 0.072, center = true, $fn = 12);
    }
  
    difference() {
      translate([-4.2635, -0.568, -0.2315])
      cube(size = [0.3828, 3.7358, 0.4088], center = true);
    
      translate([-4.341, -2.514, 0])
      cylinder(h = 36.1999, r1 = 0.257, r2 = 0.257, center = true, $fn = 12);
    }
  
    difference() {
      union() {
        translate([4.2635, -0.3635, 0.0005])
        cube(size = [0.3828, 4.1448, 0.8728], center = true);
      
        translate([3.824, -3.397, -0.2315])
        cylinder(h = 0.4088, r1 = 0.255, r2 = 0.255, center = true, $fn = 12);
      
        translate([3.8035, 2.7105, -0.2315])
        cube(size = [0.5348, 1.3668, 0.4088], center = true);
      
        translate([3.948, -2.7125, -0.2315])
        cube(size = [0.2478, 1.3688, 0.4088], center = true);
      }
    
      union() {
        translate([10.818, -2.0725, 9.0365])
        cube(size = [14.5639, 0.7269, 18.1269], center = true);
      
        translate([4.342, -2.514, -8.832])
        cylinder(h = 18.5359, r1 = 0.257, r2 = 0.257, center = true, $fn = 12);
      
        translate([3.719, 3.046, 0])
        cylinder(h = 36.1999, r1 = 0.072, r2 = 0.072, center = true, $fn = 12);
      }
    }
  
    translate([-0.5665, 1.6635, -0.3225])
    cube(size = [7.7768, 0.7268, 0.2268], center = true);
  
    translate([0.2495, 2.1405, 0.0005])
    cube(size = [6.1448, 0.2268, 0.8728], center = true);
  
    translate([-3.611, -3.526, -0.2315])
    cube(size = [0.1498, 0.2578, 0.4088], center = true);
  
    difference() {
      translate([1.23, 2.8405, -0.2315])
      cube(size = [0.2858, 1.6268, 0.4088], center = true);
    
      translate([1.191, 3.046, 8.832])
      cylinder(h = 18.5359, r1 = 0.072, r2 = 0.072, center = true, $fn = 12);
    }
  
    difference() {
      translate([0.001, 2.525, 0.0005])
      cylinder(h = 0.8728, r1 = 0.275, r2 = 0.275, center = true, $fn = 12);
    
      translate([0, 2.527, 0])
      cylinder(h = 36.1999, r1 = 0.136, r2 = 0.136, center = true, $fn = 12);
    }
  
    translate([3.6975, -0.204, -0.3225])
    cube(size = [0.7488, 4.4638, 0.2268], center = true);
  
    intersection() {
      union() {
        translate([-4.399, -7.923, 0.0005])
        cube(size = [0.6538, 20.3538, 0.8728], center = true);
      
        translate([-2.1265, 2.2315, -0.204])
        cube(size = [3.1188, 0.4088, 0.4638], center = true);
      
        translate([-3.819, 3.39, -0.2315])
        cylinder(h = 0.4088, r1 = 0.262, r2 = 0.262, center = true, $fn = 12);
      
        translate([-4.727, 1.981, 8.832])
        cylinder(h = 18.5358, r1 = 0.272, r2 = 0.272, center = true, $fn = 12);
      }
    
      difference() {
        difference() {
          translate([-8.3635, 9.7, -8.832])
          cube(size = [19.4728, 16.7998, 18.5358], center = true);
        
          translate([-11.277, 1.504, 8.832])
          cube(size = [13.6459, 0.4079, 18.5359], center = true);
        }
      
        union() {
          translate([-4.727, 1.982, 0])
          cylinder(h = 36.1999, r1 = 0.136, r2 = 0.136, center = true, $fn = 12);
        
          translate([-0.568, 2.513, 0])
          cylinder(h = 36.1999, r1 = 0.256, r2 = 0.256, center = true, $fn = 12);
        }
      }
    }
  
    translate([-4.071, 2.1405, 0.205])
    cube(size = [0.7678, 0.2268, 0.4638], center = true);
  
    difference() {
      translate([3.68, -0.0005, -0.2315])
      cube(size = [0.2878, 7.3088, 0.4088], center = true);
    
      union() {
        translate([3.718, -3.046, 8.832])
        cylinder(h = 18.5359, r1 = 0.072, r2 = 0.072, center = true, $fn = 12);
      
        translate([3.68, 0.6835, 0])
        cube(size = [0.2879, 5.4209, 36.1999], center = true);
      }
    }
  
    translate([3.819, 3.392, -0.2315])
    cylinder(h = 0.4088, r1 = 0.261, r2 = 0.261, center = true, $fn = 12);
  
    translate([1.087, 3.394, -0.2315])
    cylinder(h = 0.4088, r1 = 0.258, r2 = 0.258, center = true, $fn = 12);
  }

  translate([0, 0.0005, -0.0005])
  cube(size = [11.9998, 8.7708, 1.0468], center = true);
}
