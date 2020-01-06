intersection() {
  translate([-0.0005, 0, -0.0005])
  cube(size = [10.9328, 11.9998, 4.9328], center = true);

  union() {
    difference() {
      difference() {
        union() {
          translate([1.21353e-15, -3.5225, 2.046])
          rotate([180, 90, -90])
          cylinder(h = 1.3328, r1 = 1.789, r2 = 1.789, center = true, $fn = 12);
        
          translate([0, -3.5225, 0.1115])
          cube(size = [5.5558, 1.3328, 1.6668], center = true);
        }
      
        union() {
          translate([-2.072, -3.443, 8.689])
          cylinder(h = 18.8219, r1 = 0.443, r2 = 0.443, center = true, $fn = 12);
        
          translate([2.075, -3.445, 9.522])
          cylinder(h = 17.1559, r1 = 0.442, r2 = 0.442, center = true, $fn = 12);
        }
      }
    
      union() {
        translate([2.072, -3.442, -0.2225])
        rotate([180, 0, 180])
        cylinder(h = 2.3329, r1 = 0.376, r2 = 0.376, center = true, $fn = 12);
      
        translate([-0.003, -3.5225, 2.042])
        rotate([180, 90, -90])
        cylinder(h = 1.3329, r1 = 1.338, r2 = 1.338, center = true, $fn = 12);
      
        translate([0.8885, -10.0665, 10.0785])
        cube(size = [7.3329, 16.0669, 16.0449], center = true);
      
        translate([2.55917, -3.34399, 2.00798])
        rotate([180, 48, -168])
        cylinder(h = 36.1999, r1 = 0.685, r2 = 0.685, center = true, $fn = 12);
      }
    }
  
    difference() {
      translate([-3.953, 1.4445, -1.7225])
      cube(size = [0.2178, 0.8888, 0.6668], center = true);
    
      translate([-4.062, -8.1055, -1.397])
      rotate([180, 90, -90])
      cylinder(h = 19.9889, r1 = 0.213, r2 = 0.213, center = true, $fn = 12);
    }
  
    difference() {
      difference() {
        translate([0.8885, -3.5165, -0.556])
        cube(size = [7.3328, 2.9668, 2.9998], center = true);
      
        translate([3.444, -3.445, -1.0555])
        cylinder(h = 0.6669, r1 = 0.664, r2 = 0.664, center = true, $fn = 12);
      }
    
      union() {
        translate([3.445, -3.445, -1.7225])
        cylinder(h = 0.6669, r1 = 0.388, r2 = 0.388, center = true, $fn = 12);
      
        translate([0.8885, -3.5165, 0.667])
        cube(size = [7.3329, 2.9669, 2.7779], center = true);
      }
    }
  
    translate([-0.0005, -0.072, -1.8335])
    cube(size = [9.1108, 3.9218, 0.4448], center = true);
  
    intersection() {
      difference() {
        union() {
          translate([0, -3.445, 8.022])
          cube(size = [5.5558, 2.8218, 20.1558], center = true);
        
          translate([6.772, -4.5945, -9.411])
          cube(size = [22.6558, 0.8108, 17.3778], center = true);
        
          translate([-3.667, -3.111, -1.3895])
          cube(size = [1.7778, 2.1558, 1.3328], center = true);
        }
      
        union() {
          translate([0, 0, 2.046])
          rotate([180, 90, -90])
          cylinder(h = 36.1999, r1 = 1.789, r2 = 1.789, center = true, $fn = 12);
        
          intersection() {
            translate([1.79074, -0.171296, -0.375845])
            rotate([8.53774e-07, 49, -85])
            cylinder(h = 36.1999, r1 = 0.706, r2 = 0.706, center = true, $fn = 12);
          
            translate([0.149138, -3.86342, 0.756219])
            rotate([-0, 49, 12])
            cylinder(h = 36.1999, r1 = 0.686, r2 = 0.686, center = true, $fn = 12);
          }
        
          translate([2.075, -3.445, 8.689])
          cylinder(h = 18.8219, r1 = 0.442, r2 = 0.442, center = true, $fn = 12);
        }
      }
    
      difference() {
        difference() {
          difference() {
            translate([-0.8895, -3.5165, -0.0005])
            cube(size = [7.3328, 2.9668, 4.1108], center = true);
          
            translate([-3.444, -3.443, -1.0555])
            cylinder(h = 0.6669, r1 = 0.663, r2 = 0.663, center = true, $fn = 12);
          }
        
          union() {
            translate([-2.072, -3.445, 0])
            cylinder(h = 36.1999, r1 = 0.376, r2 = 0.376, center = true, $fn = 12);
          
            translate([-3.446, -3.444, 0])
            cylinder(h = 36.1999, r1 = 0.388, r2 = 0.388, center = true, $fn = 12);
          }
        }
      
        union() {
          intersection() {
            translate([-1.81623, -3.75091, 2.03847])
            rotate([180, 49, 129])
            cylinder(h = 36.1999, r1 = 0.623, r2 = 0.623, center = true, $fn = 12);
          
            translate([-0.892169, -0.100017, -0.458861])
            rotate([-180, 50, -109])
            cylinder(h = 36.1999, r1 = 0.704, r2 = 0.704, center = true, $fn = 12);
          }
        
          translate([-2.072, -3.443, 9.522])
          cylinder(h = 17.1559, r1 = 0.443, r2 = 0.443, center = true, $fn = 12);
        }
      }
    }
  
    difference() {
      union() {
        translate([3.9685, 2.436, -1.4995])
        cube(size = [0.2488, 2.8718, 0.2208], center = true);
      
        translate([-0.0005, -0.5165, -1.166])
        cube(size = [9.1108, 3.0328, 0.8878], center = true);
      
        difference() {
          translate([0, -2.444, -0.556])
          cube(size = [5.5558, 0.8218, 2.9998], center = true);
        
          translate([2.94555e-15, -8.55, 2.046])
          rotate([180, 90, -90])
          cylinder(h = 19.0999, r1 = 1.789, r2 = 1.789, center = true, $fn = 12);
        }
      }
    
      translate([4.093, 1.4445, -1.369])
      rotate([180, 90, -90])
      cylinder(h = 0.8889, r1 = 0.254, r2 = 0.254, center = true, $fn = 12);
    }
  
    intersection() {
      union() {
        difference() {
          difference() {
            translate([6.772, 3.4445, -1.3895])
            cube(size = [22.6558, 3.1108, 1.3328], center = true);
          
            translate([-3.444, 3.445, 8.3555])
            cylinder(h = 19.4889, r1 = 0.665, r2 = 0.665, center = true, $fn = 12);
          }
        
          union() {
            translate([-3.445, 3.444, -9.7445])
            cylinder(h = 16.7109, r1 = 0.387, r2 = 0.387, center = true, $fn = 12);
          
            translate([3.445, 3.444, 0])
            cylinder(h = 36.1999, r1 = 0.666, r2 = 0.666, center = true, $fn = 12);
          }
        }
      
        translate([-4.529, 1.4835, -0.925])
        rotate([180, 90, -90])
        cylinder(h = 7.0328, r1 = 0.246, r2 = 0.246, center = true, $fn = 12);
      
        translate([4.53, -0.072, -0.923])
        rotate([180, 90, -90])
        cylinder(h = 3.9218, r1 = 0.247, r2 = 0.247, center = true, $fn = 12);
      
        translate([3.3115, 4.436, -1.7225])
        cube(size = [1.0668, 1.1278, 0.6668], center = true);
      
        translate([0, 1.4445, -1.166])
        cube(size = [7.6878, 0.8888, 0.8878], center = true);
      }
    
      union() {
        translate([0.008, 4.436, -1.3895])
        cube(size = [6.8758, 1.1278, 1.3328], center = true);
      
        translate([-7.661, 2.8805, -1.8335])
        cube(size = [20.8778, 1.9828, 0.4448], center = true);
      
        translate([3.446, 3.888, 8.022])
        cylinder(h = 20.1558, r1 = 1.108, r2 = 1.108, center = true, $fn = 12);
      
        translate([-3.43, 3.872, 8.022])
        cylinder(h = 20.1558, r1 = 1.129, r2 = 1.129, center = true, $fn = 12);
      
        translate([-0.0005, 0.9195, -1.166])
        cube(size = [9.1108, 5.9048, 0.8878], center = true);
      }
    }
  
    difference() {
      translate([0.8885, 2.8805, -1.7225])
      cube(size = [7.3328, 1.9828, 0.6668], center = true);
    
      translate([3.444, 3.445, 8.022])
      cylinder(h = 20.1559, r1 = 0.389, r2 = 0.389, center = true, $fn = 12);
    }
  
    intersection() {
      difference() {
        translate([1.79074, -0.171296, -0.375845])
        rotate([8.53774e-07, 49, -85])
        cylinder(h = 36.1998, r1 = 0.706, r2 = 0.706, center = true, $fn = 12);
      
        translate([1.53715, -2.57243, 3.3278])
        rotate([180, 48, 120])
        cylinder(h = 36.1999, r1 = 0.649, r2 = 0.649, center = true, $fn = 12);
      }
    
      difference() {
        translate([0, -3.856, 0.667])
        cube(size = [5.5558, 1.9998, 2.7778], center = true);
      
        translate([2.075, -3.445, 8.022])
        cylinder(h = 20.1559, r1 = 0.442, r2 = 0.442, center = true, $fn = 12);
      }
    }
  }
}
