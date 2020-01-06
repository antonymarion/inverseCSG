intersection() {
  cube(size = [11.7918, 11.9998, 8.0458], center = true);

  union() {
    intersection() {
      translate([-0.086, -0.007, 7.374])
      cylinder(h = 21.4518, r1 = 4.998, r2 = 4.998, center = true, $fn = 12);
    
      union() {
        translate([-2.076, -3.445, -10.726])
        cylinder(h = 14.7478, r1 = 0.453, r2 = 0.453, center = true, $fn = 12);
      
        translate([-7.5595, 1.5345, -10.158])
        cube(size = [21.0808, 0.3408, 15.8838], center = true);
      }
    }
  
    difference() {
      intersection() {
        translate([0, -9.7035, -9.9605])
        cube(size = [36.1998, 16.7928, 16.2788], center = true);
      
        union() {
          translate([3.893, 0.005, -2.784])
          cylinder(h = 1.1358, r1 = 0.456, r2 = 0.456, center = true, $fn = 12);
        
          translate([-1.733, -2.853, 7.374])
          cylinder(h = 21.4518, r1 = 0.34, r2 = 0.34, center = true, $fn = 12);
        }
      }
    
      translate([-1.735, -2.854, -2.5865])
      cylinder(h = 1.5309, r1 = 0.113, r2 = 0.113, center = true, $fn = 12);
    }
  
    difference() {
      translate([-2.076, -3.445, -2.784])
      cylinder(h = 1.1358, r1 = 0.453, r2 = 0.453, center = true, $fn = 12);
    
      translate([-2.075, -3.445, 0])
      cylinder(h = 36.1999, r1 = 0.113, r2 = 0.113, center = true, $fn = 12);
    }
  
    difference() {
      difference() {
        translate([-7.5595, 9.9025, -2.0185])
        cube(size = [21.0808, 16.3948, 0.3948], center = true);
      
        translate([3.209, 0, 7.374])
        cylinder(h = 21.4519, r1 = 0.113, r2 = 0.113, center = true, $fn = 12);
      }
    
      union() {
        translate([-0.086, -0.007, -2.045])
        cylinder(h = 0.3419, r1 = 4.998, r2 = 4.998, center = true, $fn = 12);
      
        translate([-7.5595, 8.3965, 7.374])
        cube(size = [21.0809, 19.4069, 21.4519], center = true);
      }
    }
  
    difference() {
      union() {
        difference() {
          difference() {
            translate([-0.085, -0.007, 7.374])
            rotate([180, 0, 180])
            cylinder(h = 21.4518, r1 = 4.198, r2 = 4.198, center = true, $fn = 12);
          
            translate([-1.803, 0, 1.634])
            rotate([180, 90, -90])
            cylinder(h = 36.1999, r1 = 0.581, r2 = 0.581, center = true, $fn = 12);
          }
        
          union() {
            translate([0, -8.368, 0])
            cube(size = [36.1999, 19.4639, 36.1999], center = true);
          
            translate([9.177, 9.732, -0.859])
            cube(size = [17.8459, 16.7359, 4.9859], center = true);
          }
        }
      
        translate([0.652, 1.5345, -0.859])
        cube(size = [0.7958, 0.3408, 4.9858], center = true);
      
        translate([1.334, 1.446, 2.786])
        sphere(r = 0.2808, $fn = 12);
      
        translate([1.329, 0.0487795, 2.79457])
        rotate([-180, 89, -90])
        cylinder(h = 36.1998, r1 = 0.227, r2 = 0.227, center = true, $fn = 12);
      
        translate([-1.511, 9.5615, 2.791])
        rotate([180, 90, -90])
        cylinder(h = 17.0768, r1 = 0.228, r2 = 0.228, center = true, $fn = 12);
      }
    
      union() {
        difference() {
          translate([0, 0, 8.113])
          cube(size = [36.1999, 36.1999, 19.9739], center = true);
        
          translate([-0.0865, 1.364, 0.0005])
          cube(size = [3.637, 0.682, 6.705], center = true);
        }
      
        translate([1.628, 1.5345, 1.639])
        rotate([180, 90, -90])
        cylinder(h = 0.3409, r1 = 0.576, r2 = 0.576, center = true, $fn = 12);
      
        translate([-0.104984, 0.0018325, -0.517])
        rotate([-25.5651, 90, 63.4349])
        cylinder(h = 36.1999, r1 = 0.453, r2 = 0.453, center = true, $fn = 12);
      
        translate([-1.564, -8.1975, -0.12])
        cube(size = [0.6819, 19.8049, 3.5079], center = true);
      
        translate([-9.264, 9.732, -2.613])
        cube(size = [17.6719, 16.7359, 1.4779], center = true);
      
        translate([-0.091, -8.1975, 2.218])
        rotate([180, 90, -90])
        cylinder(h = 19.8049, r1 = 0.678, r2 = 0.678, center = true, $fn = 12);
      
        translate([-0.087, 1.5345, 0.74])
        rotate([180, 90, -90])
        cylinder(h = 0.3409, r1 = 0.567, r2 = 0.567, center = true, $fn = 12);
      }
    }
  
    difference() {
      intersection() {
        translate([10.54, 0, -2.5865])
        cube(size = [15.1178, 36.1998, 1.5308], center = true);
      
        translate([3.211, 0, 0])
        cylinder(h = 36.1998, r1 = 0.339, r2 = 0.339, center = true, $fn = 12);
      }
    
      union() {
        translate([3.209, 0, 7.374])
        cylinder(h = 21.4519, r1 = 0.113, r2 = 0.113, center = true, $fn = 12);
      
        translate([3.893, 0.005, -2.784])
        cylinder(h = 1.1359, r1 = 0.456, r2 = 0.456, center = true, $fn = 12);
      }
    }
  
    intersection() {
      difference() {
        difference() {
          translate([-0.086, -0.007, -7.374])
          cylinder(h = 21.4518, r1 = 4.998, r2 = 4.998, center = true, $fn = 12);
        
          union() {
            translate([-1.736, 2.854, 0])
            cylinder(h = 36.1999, r1 = 0.113, r2 = 0.113, center = true, $fn = 12);
          
            translate([-0.104984, 0.0018325, -0.517])
            rotate([-25.5651, 90, 63.4349])
            cylinder(h = 36.1999, r1 = 0.453, r2 = 0.453, center = true, $fn = 12);
          }
        }
      
        union() {
          difference() {
            translate([8.0975, 9.7035, 2.4935])
            cube(size = [20.0049, 16.7929, 1.7189], center = true);
          
            translate([-1.507, 2.063, 2.785])
            sphere(r = 0.769, $fn = 12);
          }
        
          translate([-9.264, 9.732, 0.766])
          cube(size = [17.6719, 16.7359, 5.1739], center = true);
        
          translate([0.2545, 3.303, -0.276])
          rotate([180, 90, 180])
          cylinder(h = 2.9549, r1 = 1.598, r2 = 1.598, center = true, $fn = 12);
        }
      }
    
      union() {
        difference() {
          translate([0, 9.7035, -2.5865])
          cube(size = [36.1998, 16.7928, 1.5308], center = true);
        
          translate([-0.085, -0.007, 0])
          rotate([180, 0, 180])
          cylinder(h = 36.1999, r1 = 4.198, r2 = 4.198, center = true, $fn = 12);
        }
      
        difference() {
          union() {
            translate([-0.0865, 9.7035, 2.4935])
            cube(size = [3.6368, 16.7928, 1.7188], center = true);
          
            translate([-2.075, 3.446, -2.784])
            cylinder(h = 1.1358, r1 = 0.453, r2 = 0.453, center = true, $fn = 12);
          }
        
          translate([-2.074, 3.444, 0])
          cylinder(h = 36.1999, r1 = 0.113, r2 = 0.113, center = true, $fn = 12);
        }
      
        translate([-1.733, 2.851, -1.934])
        cylinder(h = 2.8358, r1 = 0.339, r2 = 0.339, center = true, $fn = 12);
      
        translate([-0.087, 2.334, -1.3665])
        cube(size = [0.6818, 1.9398, 1.6988], center = true);
      }
    }
  
    difference() {
      union() {
        difference() {
          translate([0, 0, 7.374])
          cube(size = [36.1998, 36.1998, 21.4518], center = true);
        
          translate([-0.085, -0.007, -9.9605])
          rotate([180, 0, 180])
          cylinder(h = 16.2789, r1 = 4.198, r2 = 4.198, center = true, $fn = 12);
        }
      
        difference() {
          translate([3.893, 0.005, -2.784])
          cylinder(h = 1.1358, r1 = 0.456, r2 = 0.456, center = true, $fn = 12);
        
          translate([3.891, -0.001, 0])
          cylinder(h = 36.1999, r1 = 0.113, r2 = 0.113, center = true, $fn = 12);
        }
      }
    
      union() {
        translate([-7.5595, 8.3965, -2.5865])
        cube(size = [21.0809, 19.4069, 1.5309], center = true);
      
        difference() {
          translate([0, 0, 7.374])
          cube(size = [36.1999, 36.1999, 21.4519], center = true);
        
          translate([-0.086, -0.007, -9.9605])
          cylinder(h = 16.279, r1 = 4.998, r2 = 4.998, center = true, $fn = 12);
        }
      }
    }
  
    intersection() {
      translate([-0.085, -0.007, -9.9605])
      rotate([180, 0, 180])
      cylinder(h = 16.2788, r1 = 4.198, r2 = 4.198, center = true, $fn = 12);
    
      translate([0, 1.5345, -2.613])
      cube(size = [36.1998, 0.3408, 1.4778], center = true);
    }
  }
}
