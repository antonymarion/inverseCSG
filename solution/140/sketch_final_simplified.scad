intersection() {
  union() {
    difference() {
      translate([1.5425, 0.453, -0.1555])
      cube(size = [0.1368, 0.8658, 0.1428], center = true);
    
      translate([9.701, 0.692, 0.003])
      cube(size = [16.7979, 0.2079, 0.2859], center = true);
    }
  
    translate([0.024, 1.072, -0.0405])
    cube(size = [3.1758, 0.1478, 0.3728], center = true);
  
    translate([0.024, 0.793, -0.1835])
    cube(size = [3.1758, 0.4098, 0.0868], center = true);
  
    translate([0.0005, 0.304, -0.1555])
    cube(size = [2.6048, 0.5678, 0.1428], center = true);
  
    translate([-1.519, 0.304, -0.1555])
    cube(size = [0.0898, 0.5678, 0.1428], center = true);
  
    difference() {
      translate([1.389, 0.49, -0.0405])
      rotate([180, 0, 180])
      cylinder(h = 0.3728, r1 = 0.172, r2 = 0.172, center = true, $fn = 12);
    
      translate([1.388, 0.49, -0.0405])
      rotate([180, 0, 180])
      cylinder(h = 0.3729, r1 = 0.083, r2 = 0.083, center = true, $fn = 12);
    }
  
    translate([1.388, -4.656, -0.0405])
    cube(size = [0.1718, 0.6878, 0.3728], center = true);
  
    difference() {
      translate([0.024, 4.7485, -0.0405])
      cube(size = [3.1758, 0.5028, 0.3728], center = true);
    
      translate([0, 4.821, 8.98])
      cube(size = [36.1999, 0.3579, 18.2399], center = true);
    }
  
    difference() {
      union() {
        translate([-1.388, -4.129, 0.0305])
        cylinder(h = 0.2288, r1 = 0.173, r2 = 0.173, center = true, $fn = 12);
      
        difference() {
          translate([0.024, -4.1715, -0.1555])
          cube(size = [3.1758, 0.2808, 0.1428], center = true);
        
          translate([1.389, -4.214, 8.9365])
          rotate([180, 0, 180])
          cylinder(h = 18.3269, r1 = 0.083, r2 = 0.083, center = true, $fn = 12);
        }
      }
    
      translate([-1.389, -4.128, 0])
      cylinder(h = 36.1999, r1 = 0.083, r2 = 0.083, center = true, $fn = 12);
    }
  
    translate([-0.2445, 0.841, -0.0405])
    cube(size = [2.6388, 0.0898, 0.3728], center = true);
  
    difference() {
      union() {
        translate([-1.389, -0.2005, -0.0405])
        cube(size = [0.1718, 2.1748, 0.3728], center = true);
      
        translate([-1.389, 0.117, -0.0405])
        cylinder(h = 0.3728, r1 = 0.172, r2 = 0.172, center = true, $fn = 12);
      }
    
      translate([-1.387, 0.118, -0.0405])
      cylinder(h = 0.3729, r1 = 0.083, r2 = 0.083, center = true, $fn = 12);
    }
  
    difference() {
      difference() {
        union() {
          translate([0.024, 0.967, 0.071])
          rotate([180, 90, 180])
          cylinder(h = 3.1758, r1 = 0.194, r2 = 0.194, center = true, $fn = 12);
        
          translate([1.075, -1.116, -0.0405])
          rotate([180, 0, 180])
          cylinder(h = 0.3728, r1 = 0.173, r2 = 0.173, center = true, $fn = 12);
        
          translate([1.388, 0.344, -0.0405])
          cube(size = [0.1718, 9.3118, 0.3728], center = true);
        
          translate([1.2745, -0.2005, -0.1555])
          cube(size = [0.3988, 2.1748, 0.1428], center = true);
        }
      
        intersection() {
          translate([8.268, -8.551, 8.9365])
          cube(size = [19.6639, 19.0979, 18.3269], center = true);
        
          union() {
            translate([-1.519, 0.027, -8.977])
            cube(size = [0.0899, 1.9419, 18.2459], center = true);
          
            translate([1.389, -4.214, -0.0405])
            rotate([180, 0, 180])
            cylinder(h = 0.3729, r1 = 0.172, r2 = 0.172, center = true, $fn = 12);
          }
        }
      }
    
      union() {
        difference() {
          translate([-0.0445, 1.016, 8.9365])
          cube(size = [3.0389, 0.2599, 18.3269], center = true);
        
          translate([-8.313, 1.03, 0.08])
          rotate([180, 90, 180])
          cylinder(h = 19.574, r1 = 0.147, r2 = 0.147, center = true, $fn = 12);
        }
      
        intersection() {
          union() {
            translate([0.024, 0.942, 8.9365])
            cube(size = [3.1759, 0.1119, 18.3269], center = true);
          
            translate([1.1885, -8.652, -0.0405])
            cube(size = [0.2269, 18.8959, 0.3729], center = true);
          }
        
          translate([0.024, 0.101, 8.9365])
          cube(size = [3.1759, 2.0899, 18.3269], center = true);
        }
      
        translate([1.074, -1.116, 8.9365])
        rotate([180, 0, 180])
        cylinder(h = 18.3269, r1 = 0.083, r2 = 0.083, center = true, $fn = 12);
      
        translate([1.389, 0.49, -0.0405])
        rotate([180, 0, 180])
        cylinder(h = 0.3729, r1 = 0.172, r2 = 0.172, center = true, $fn = 12);
      }
    }
  
    difference() {
      union() {
        translate([1.389, -4.214, 0.003])
        rotate([180, 0, 180])
        cylinder(h = 0.2858, r1 = 0.172, r2 = 0.172, center = true, $fn = 12);
      
        translate([0.024, -4.656, -0.1835])
        cube(size = [3.1758, 0.6878, 0.0868], center = true);
      
        difference() {
          translate([-1.389, -3.144, -0.0405])
          cube(size = [0.1718, 3.7118, 0.3728], center = true);
        
          translate([-0.0005, -4.1715, -0.0405])
          cube(size = [2.9489, 0.2809, 0.3729], center = true);
        }
      }
    
      translate([1.389, -4.214, 0.003])
      rotate([180, 0, 180])
      cylinder(h = 0.2859, r1 = 0.083, r2 = 0.083, center = true, $fn = 12);
    }
  
    translate([-1.389, 2.999, -0.0405])
    cube(size = [0.1718, 4.0018, 0.3728], center = true);
  }

  translate([-0.0005, 0, 0])
  cube(size = [3.8828, 11.9998, 0.5458], center = true);
}
