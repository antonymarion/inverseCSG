intersection() {
  translate([0, 0, -0.0005])
  cube(size = [11.9978, 9.0618, 1.8488], center = true);

  union() {
    translate([3.192, 0.718, 0.37])
    cube(size = [0.4238, 2.0718, 0.7998], center = true);
  
    translate([-0.0795, 3.245, 0.1595])
    cube(size = [3.2428, 0.4238, 1.2208], center = true);
  
    difference() {
      translate([4.679, 3.46, 0.0005])
      cylinder(h = 1.5408, r1 = 0.319, r2 = 0.319, center = true, $fn = 12);
    
      translate([4.681, 3.456, 0])
      rotate([180, 0, 180])
      cylinder(h = 36.1989, r1 = 0.148, r2 = 0.148, center = true, $fn = 12);
    }
  
    difference() {
      union() {
        translate([0.346, -1.2215, 0.37])
        cube(size = [2.3918, 1.8008, 0.7998], center = true);
      
        translate([4.468, 1.5695, 0.0005])
        cube(size = [0.4238, 3.7748, 1.5408], center = true);
      
        translate([1.915, -0.57, 0.37])
        cube(size = [0.4238, 3.1038, 0.7998], center = true);
      
        translate([0.346, 1.3565, 0.0005])
        cube(size = [2.3918, 3.3488, 1.5408], center = true);
      
        translate([3.112, 1.9885, -0.4005])
        cube(size = [3.1358, 2.9348, 0.7388], center = true);
      }
    
      union() {
        translate([1.8345, 1.915, -0.4005])
        cube(size = [5.6899, 0.6369, 0.7399], center = true);
      
        translate([3.83, 1.5695, -9.276])
        cube(size = [0.5309, 3.7759, 17.6469], center = true);
      
        translate([2.553, 2.008, 0.0005])
        cube(size = [3.4029, 2.0469, 1.5419], center = true);
      
        translate([1.1965, -1.223, 0.356])
        rotate([180, 90, -180])
        cylinder(h = 4.4139, r1 = 0.158, r2 = 0.158, center = true, $fn = 12);
      
        translate([4.681, 3.456, 0])
        rotate([180, 0, 180])
        cylinder(h = 36.1989, r1 = 0.148, r2 = 0.148, center = true, $fn = 12);
      
        translate([0, 2.607, 8.6645])
        cylinder(h = 18.8699, r1 = 0.148, r2 = 0.148, center = true, $fn = 12);
      
        translate([0.558, -8.1725, 8.6645])
        cube(size = [1.9769, 19.8539, 18.8699], center = true);
      }
    }
  
    difference() {
      union() {
        translate([-3.1915, -0.638, -0.4005])
        cube(size = [2.9768, 4.4658, 0.7388], center = true);
      
        difference() {
          translate([-3.1915, -0.8505, 0.37])
          cube(size = [2.9768, 5.2108, 0.7998], center = true);
        
          translate([6.7095, -1.223, 0.356])
          rotate([180, 90, -180])
          cylinder(h = 22.7799, r1 = 0.158, r2 = 0.158, center = true, $fn = 12);
        }
      }
    
      union() {
        translate([-2.5535, -0.5855, -8.6645])
        cube(size = [0.8499, 4.6799, 18.8699], center = true);
      
        translate([-3.8295, -0.5855, 8.6645])
        cube(size = [0.8499, 4.6799, 18.8699], center = true);
      
        translate([-9.821, -0.638, -9.0655])
        cube(size = [16.5569, 0.6369, 18.0679], center = true);
      
        translate([-4.681, -3.457, 9.0345])
        cylinder(h = 18.1299, r1 = 0.148, r2 = 0.148, center = true, $fn = 12);
      }
    }
  
    difference() {
      difference() {
        union() {
          translate([1.2765, -1.9145, -0.4005])
          cube(size = [4.2528, 1.9128, 0.7388], center = true);
        
          translate([1.2765, -1.623, 0.37])
          cube(size = [4.2528, 2.6038, 0.7998], center = true);
        }
      
        translate([0.002, -2.5, -0.0005])
        rotate([180, 0, 180])
        cylinder(h = 1.5419, r1 = 0.149, r2 = 0.149, center = true, $fn = 12);
      }
    
      union() {
        translate([-0.0005, 7.988, 0.0005])
        cube(size = [0.8499, 20.2209, 1.5419], center = true);
      
        translate([2.5535, 7.3215, 0])
        cube(size = [0.8499, 21.5559, 36.1989], center = true);
      
        translate([-6.9225, -1.223, 0.356])
        rotate([180, 90, -180])
        cylinder(h = 22.3539, r1 = 0.158, r2 = 0.158, center = true, $fn = 12);
      
        translate([1.2765, 7.5865, 8.6645])
        cube(size = [0.8499, 21.0239, 18.8699], center = true);
      }
    }
  
    translate([0.639, 1.1375, 0.37])
    cube(size = [0.4238, 1.2328, 0.7998], center = true);
  
    translate([1.915, 1.37, 0.37])
    cube(size = [0.4238, 0.7698, 0.7998], center = true);
  
    difference() {
      union() {
        translate([1.2765, 2.606, 0.37])
        cube(size = [5.9548, 1.6998, 0.7998], center = true);
      
        translate([2.846, 0.7515, 0.1595])
        cube(size = [3.6678, 0.4608, 1.2208], center = true);
      
        translate([-0.0005, 3.245, 0.0005])
        cube(size = [2.0188, 0.4238, 1.5408], center = true);
      
        translate([2.553, 0.6385, -0.4005])
        cube(size = [1.6998, 1.9128, 0.7388], center = true);
      }
    
      union() {
        translate([2.553, 2.606, 0.356])
        rotate([180, 90, -90])
        cylinder(h = 1.7009, r1 = 0.153, r2 = 0.153, center = true, $fn = 12);
      
        intersection() {
          translate([2.5535, 0.6385, 0.0005])
          cube(size = [0.8499, 1.9139, 1.5419], center = true);
        
          translate([1.1965, 0.9575, -0.4005])
          cube(size = [4.4139, 2.5519, 0.7399], center = true);
        }
      
        translate([-6.9225, 2.6065, 0.0005])
        cube(size = [22.3539, 0.8499, 1.5419], center = true);
      }
    }
  
    translate([-0.0005, 0.7515, 0.0005])
    cube(size = [2.0188, 0.4608, 1.5408], center = true);
  
    difference() {
      union() {
        difference() {
          translate([-4.679, -3.458, 0.0005])
          cylinder(h = 1.5408, r1 = 0.319, r2 = 0.319, center = true, $fn = 12);
        
          translate([-4.681, -3.457, 0])
          cylinder(h = 36.1989, r1 = 0.148, r2 = 0.148, center = true, $fn = 12);
        }
      
        translate([-3.1915, 1.968, 0.37])
        cube(size = [2.9768, 0.4238, 0.7998], center = true);
      
        translate([-2.5535, 0.7515, 0.0005])
        cube(size = [2.0188, 0.4608, 1.5408], center = true);
      
        translate([-4.3885, -0.944, 0.0005])
        cube(size = [0.5828, 3.8538, 1.5408], center = true);
      
        translate([-4.468, -0.346, 0.37])
        cube(size = [0.4238, 5.1578, 0.7998], center = true);
      
        translate([-2.261, -1.2365, 0.1595])
        cube(size = [3.6678, 4.4388, 1.2208], center = true);
      
        translate([-4.468, 2.633, 0.0005])
        cube(size = [0.4238, 0.7958, 1.5408], center = true);
      }
    
      union() {
        translate([6.7095, -1.203, 8.6645])
        cube(size = [22.7799, 3.4449, 18.8699], center = true);
      
        translate([0, -1.468, -0.4005])
        cube(size = [36.1989, 3.9769, 0.7399], center = true);
      
        translate([-2.554, 1.8885, 0.356])
        rotate([180, 90, -90])
        cylinder(h = 0.5839, r1 = 0.158, r2 = 0.158, center = true, $fn = 12);
      }
    }
  
    difference() {
      union() {
        translate([-4.682, 3.457, 0.0005])
        cylinder(h = 1.5408, r1 = 0.318, r2 = 0.318, center = true, $fn = 12);
      
        translate([-3.112, 3.245, 0.0005])
        cube(size = [3.1358, 0.4238, 1.5408], center = true);
      }
    
      union() {
        translate([-3.83, 0.0005, -9.276])
        cube(size = [0.5309, 6.9139, 17.6469], center = true);
      
        translate([-2.554, 9.542, 0.356])
        rotate([180, 90, -90])
        cylinder(h = 17.1149, r1 = 0.158, r2 = 0.158, center = true, $fn = 12);
      
        translate([-4.682, 3.457, 8.6645])
        rotate([180, 0, 180])
        cylinder(h = 18.8699, r1 = 0.148, r2 = 0.148, center = true, $fn = 12);
      }
    }
  
    difference() {
      difference() {
        union() {
          translate([1.915, -1.888, 0.0005])
          cube(size = [5.5298, 3.1358, 1.5408], center = true);
        
          translate([4.681, -3.458, -0.0005])
          rotate([180, 0, 180])
          cylinder(h = 1.5408, r1 = 0.319, r2 = 0.319, center = true, $fn = 12);
        }
      
        union() {
          translate([1.9145, -1.623, 0.0005])
          cube(size = [4.6799, 2.6149, 1.5419], center = true);
        
          translate([0, -1.223, 0.356])
          rotate([180, 90, -180])
          cylinder(h = 36.1989, r1 = 0.158, r2 = 0.158, center = true, $fn = 12);
        }
      }
    
      union() {
        translate([4.681, -3.459, 0.0005])
        cylinder(h = 1.5419, r1 = 0.149, r2 = 0.149, center = true, $fn = 12);
      
        translate([1.915, -3.1645, -0.4005])
        cube(size = [5.5309, 0.5839, 0.7399], center = true);
      
        translate([1.915, -0.638, -0.4005])
        cube(size = [5.5309, 0.6369, 0.7399], center = true);
      }
    }
  
    translate([0.639, 0.6385, 0.0005])
    cube(size = [0.4238, 1.9128, 1.5408], center = true);
  }
}
