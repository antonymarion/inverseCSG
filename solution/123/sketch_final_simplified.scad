intersection() {
  cube(size = [10.6517, 10.6517, 11.9997], center = true);

  union() {
    intersection() {
      union() {
        difference() {
          sphere(r = 54.2997, $fn = 108);
        
          translate([-1.10286, 8.98205, 6.55])
          rotate([-180, 0, 7])
          cube(size = [36.1998, 18.1008, 23.0998], center = true);
        }
      
        intersection() {
          translate([-3.57577, 7.66827, 6.55])
          rotate([-180, 0, 25])
          cube(size = [36.1997, 19.2777, 23.0997], center = true);
        
          translate([0.737512, -8.4298, 0])
          rotate([-180, 0, 5])
          cube(size = [36.1997, 19.2777, 36.1997], center = true);
        }
      }
    
      union() {
        intersection() {
          translate([3.39019, -8.39101, 0])
          rotate([-180, 0, 22])
          cube(size = [36.1997, 18.0997, 36.1997], center = true);
        
          translate([0, -0.001, -3.081])
          cylinder(h = 3.8377, r1 = 4.504, r2 = 4.504, center = true, $fn = 12);
        }
      
        translate([1.10298, -8.98304, -3.081])
        rotate([-180, 0, 7])
        cube(size = [36.1997, 18.0987, 3.8377], center = true);
      }
    
      union() {
        difference() {
          translate([0, -0.001, -11.55])
          cylinder(h = 13.0997, r1 = 4.504, r2 = 4.504, center = true, $fn = 12);
        
          sphere(r = 54.2998, $fn = 108);
        }
      
        intersection() {
          translate([-0.014, 0.024, -3.081])
          cylinder(h = 3.8377, r1 = 3.562, r2 = 3.562, center = true, $fn = 12);
        
          translate([0, -0.001, 0])
          cylinder(h = 36.1997, r1 = 4.504, r2 = 4.504, center = true, $fn = 12);
        }
      
        difference() {
          translate([0, -0.001, -9.631])
          cylinder(h = 16.9377, r1 = 4.504, r2 = 4.504, center = true, $fn = 12);
        
          translate([1.10298, -8.98304, 0])
          rotate([-180, 0, 7])
          cube(size = [36.1998, 18.0988, 36.1998], center = true);
        }
      }
    }
  
    intersection() {
      difference() {
        difference() {
          translate([0, -0.001, -3.081])
          cylinder(h = 3.8377, r1 = 4.504, r2 = 4.504, center = true, $fn = 12);
        
          translate([5.775, 1.548, -9.631])
          cylinder(h = 16.9378, r1 = 4.744, r2 = 4.744, center = true, $fn = 12);
        }
      
        difference() {
          translate([-7.70248, 10.2209, -3.081])
          rotate([0, 0, -8])
          cube(size = [18.0998, 18.1008, 3.8378], center = true);
        
          translate([-5.15795, 11.7442, -3.081])
          rotate([0, 0, -25])
          cube(size = [16.9239, 19.2719, 3.8379], center = true);
        }
      }
    
      difference() {
        union() {
          difference() {
            translate([-9.487, -0.001, -3.081])
            cylinder(h = 3.8377, r1 = 8.765, r2 = 8.765, center = true, $fn = 17);
          
            translate([-8.309, -4.804, -3.081])
            cylinder(h = 3.8378, r1 = 8.869, r2 = 8.869, center = true, $fn = 17);
          }
        
          translate([-3.39019, -8.39101, -9.631])
          rotate([0, 0, -22])
          cube(size = [36.1997, 18.0997, 16.9377], center = true);
        
          translate([11.2462, 4.09479, -9.631])
          rotate([0, 0, -25])
          cube(size = [19.2757, 19.2717, 16.9377], center = true);
        }
      
        union() {
          intersection() {
            translate([7.1315, 5.57174, 6.55])
            rotate([-180, 0, 38])
            cube(size = [18.0998, 36.1998, 23.0998], center = true);
          
            translate([-9.487, -0.001, 6.55])
            cylinder(h = 23.0998, r1 = 8.765, r2 = 8.765, center = true, $fn = 17);
          }
        
          intersection() {
            translate([5.5287, 7.89581, 6.55])
            rotate([0, 0, -35])
            cube(size = [36.1998, 16.9218, 23.0998], center = true);
          
            translate([-9.60182, -0.840051, -3.081])
            rotate([-180, 0, 5])
            cube(size = [16.9228, 36.1998, 3.8378], center = true);
          }
        }
      }
    
      union() {
        intersection() {
          translate([-8.4293, 0.737468, -9.631])
          rotate([0, 0, -5])
          cube(size = [19.2767, 36.1997, 16.9377], center = true);
        
          translate([6.93044, 4.85274, -3.081])
          rotate([-180, 0, 35])
          cube(size = [19.2787, 36.1997, 3.8377], center = true);
        }
      
        intersection() {
          translate([-7.70248, 10.2209, 0])
          rotate([0, 0, -8])
          cube(size = [18.0997, 18.1007, 36.1997], center = true);
        
          translate([-9.16673, -7.69134, 6.55])
          rotate([0, 0, -5])
          cube(size = [19.2767, 19.2777, 23.0997], center = true);
        }
      }
    }
  
    translate([-0.027, -0.019, -3.081])
    cylinder(h = 3.8377, r1 = 3.518, r2 = 3.518, center = true, $fn = 12);
  
    intersection() {
      translate([7.1315, -5.57174, -3.081])
      rotate([0, 0, -38])
      cube(size = [18.0997, 36.1997, 3.8377], center = true);
    
      difference() {
        translate([0, -0.001, -3.081])
        cylinder(h = 3.8377, r1 = 4.504, r2 = 4.504, center = true, $fn = 12);
      
        union() {
          translate([7.89622, -5.52899, 0])
          rotate([0, 0, -35])
          cube(size = [16.9208, 36.1998, 36.1998], center = true);
        
          translate([-5.5287, 7.89581, 3.55271e-15])
          rotate([-180, 0, 35])
          cube(size = [36.1998, 16.9218, 36.1998], center = true);
        
          translate([5.44673, -7.22805, -3.081])
          rotate([-180, 0, 37])
          cube(size = [36.1998, 18.0988, 3.8378], center = true);
        }
      }
    }
  
    intersection() {
      difference() {
        difference() {
          translate([-11.2461, -4.0921, -3.081])
          rotate([0, 0, -25])
          cube(size = [19.2737, 19.2767, 3.8377], center = true);
        
          translate([-9.60182, 0.840051, 0])
          rotate([0, 0, -5])
          cube(size = [16.9228, 36.1998, 36.1998], center = true);
        }
      
        union() {
          translate([-9.487, -0.001, -9.631])
          cylinder(h = 16.9378, r1 = 8.765, r2 = 8.765, center = true, $fn = 17);
        
          translate([8.96193, -1.25952, 6.55])
          rotate([0, 0, -8])
          cube(size = [18.0998, 36.1998, 23.0998], center = true);
        }
      }
    
      translate([0, -0.001, 6.55])
      cylinder(h = 23.0997, r1 = 4.504, r2 = 4.504, center = true, $fn = 12);
    }
  
    intersection() {
      translate([3.39019, 8.39101, 0])
      rotate([0, 0, -22])
      cube(size = [36.1997, 18.0997, 36.1997], center = true);
    
      difference() {
        difference() {
          translate([0, -0.001, -3.081])
          cylinder(h = 3.8377, r1 = 4.504, r2 = 4.504, center = true, $fn = 12);
        
          translate([4.07341, 8.73545, 0])
          rotate([0, 0, -25])
          cube(size = [36.1998, 16.9228, 36.1998], center = true);
        }
      
        difference() {
          translate([4.85303, 6.93085, -3.081])
          rotate([0, 0, -35])
          cube(size = [36.1998, 19.2778, 3.8378], center = true);
        
          translate([9.60182, 0.840051, -9.631])
          rotate([-180, 0, 5])
          cube(size = [16.9229, 36.1999, 16.9379], center = true);
        }
      }
    
      translate([0.737512, 8.4298, 6.55])
      rotate([0, 0, -5])
      cube(size = [36.1997, 19.2777, 23.0997], center = true);
    }
  
    difference() {
      translate([0.001, 0, 1.919])
      cylinder(h = 6.1617, r1 = 3.015, r2 = 3.015, center = true, $fn = 12);
    
      translate([0, 0, 9.53])
      cube(size = [2.0698, 36.1998, 17.1398], center = true);
    }
  
    difference() {
      translate([0, -0.001, -3.081])
      cylinder(h = 3.8377, r1 = 4.504, r2 = 4.504, center = true, $fn = 12);
    
      difference() {
        union() {
          translate([-0.737425, 8.4288, 6.55])
          rotate([-180, 0, 5])
          cube(size = [36.1998, 19.2778, 23.0998], center = true);
        
          intersection() {
            translate([0, -0.001, 0])
            cylinder(h = 36.1998, r1 = 4.504, r2 = 4.504, center = true, $fn = 12);
          
            translate([5.5287, -7.89581, 0])
            rotate([-180, 0, 35])
            cube(size = [36.1998, 16.9218, 36.1998], center = true);
          }
        
          translate([7.1315, -5.57174, 6.55])
          rotate([0, 0, -38])
          cube(size = [18.0998, 36.1998, 23.0998], center = true);
        
          translate([-7.89622, 5.52899, 0])
          rotate([0, 0, -35])
          cube(size = [16.9208, 36.1998, 36.1998], center = true);
        }
      
        intersection() {
          translate([-3.39019, 8.39101, -3.081])
          rotate([-180, 0, 22])
          cube(size = [36.1999, 18.0999, 3.8379], center = true);
        
          translate([1.10298, -8.98304, 0])
          rotate([-180, 0, 7])
          cube(size = [36.1999, 18.0989, 36.1999], center = true);
        
          translate([1.10298, -8.98304, 6.55])
          rotate([-180, 0, 7])
          cube(size = [36.1999, 18.0989, 23.0999], center = true);
        
          translate([0, -0.001, -9.631])
          cylinder(h = 16.9379, r1 = 4.504, r2 = 4.504, center = true, $fn = 12);
        
          translate([3.5762, -7.66918, 0])
          rotate([-180, 0, 25])
          cube(size = [36.1999, 19.2779, 36.1999], center = true);
        }
      }
    }
  
    difference() {
      intersection() {
        difference() {
          translate([0, -0.001, -3.081])
          cylinder(h = 3.8377, r1 = 4.504, r2 = 4.504, center = true, $fn = 12);
        
          translate([-1.25959, -8.96242, 0])
          rotate([0, 0, -8])
          cube(size = [36.1998, 18.0988, 36.1998], center = true);
        }
      
        translate([-7.66918, -3.5762, -3.081])
        rotate([-180, 0, 25])
        cube(size = [19.2757, 36.1997, 3.8377], center = true);
      
        difference() {
          translate([8.4293, 0.737468, 0])
          rotate([-180, 0, 5])
          cube(size = [19.2767, 36.1997, 36.1997], center = true);
        
          translate([-9.487, -0.001, 6.55])
          cylinder(h = 23.0998, r1 = 8.765, r2 = 8.765, center = true, $fn = 17);
        }
      }
    
      translate([8.96193, 1.25952, 6.55])
      rotate([-180, 0, 8])
      cube(size = [18.0998, 36.1998, 23.0998], center = true);
    }
  
    translate([0.022, 0.069, -3.081])
    cylinder(h = 3.8377, r1 = 3.478, r2 = 3.478, center = true, $fn = 12);
  
    difference() {
      intersection() {
        union() {
          translate([-0.014, 0.024, -9.631])
          cylinder(h = 16.9377, r1 = 3.562, r2 = 3.562, center = true, $fn = 12);
        
          translate([-8.4293, -0.737468, 6.55])
          rotate([-180, 0, 5])
          cube(size = [19.2767, 36.1997, 23.0997], center = true);
        
          difference() {
            translate([4.85303, 6.93085, 0])
            rotate([0, 0, -35])
            cube(size = [36.1997, 19.2777, 36.1997], center = true);
          
            translate([5.775, 1.548, -9.631])
            cylinder(h = 16.9378, r1 = 4.744, r2 = 4.744, center = true, $fn = 12);
          }
        }
      
        union() {
          translate([9.60182, 0.840051, -3.081])
          rotate([-180, 0, 5])
          cube(size = [16.9227, 36.1997, 3.8377], center = true);
        
          translate([-8.39148, -3.39038, -3.081])
          rotate([-180, 0, 22])
          cube(size = [18.0987, 36.1997, 3.8377], center = true);
        }
      
        difference() {
          translate([0, -0.001, 0])
          cylinder(h = 36.1997, r1 = 4.504, r2 = 4.504, center = true, $fn = 12);
        
          translate([-9.487, -0.001, 0])
          cylinder(h = 36.1998, r1 = 8.765, r2 = 8.765, center = true, $fn = 17);
        }
      }
    
      union() {
        translate([3.39019, 8.39101, 0])
        rotate([0, 0, -22])
        cube(size = [36.1998, 18.0998, 36.1998], center = true);
      
        difference() {
          translate([7.89622, 5.52899, -9.631])
          rotate([-180, 0, 35])
          cube(size = [16.9208, 36.1998, 16.9378], center = true);
        
          translate([-0.014, 0.024, -3.081])
          cylinder(h = 3.8379, r1 = 3.562, r2 = 3.562, center = true, $fn = 12);
        }
      
        translate([-8.73046, -4.07108, 0])
        rotate([-180, 0, 25])
        cube(size = [16.9338, 36.1998, 36.1998], center = true);
      
        translate([-8.309, -4.804, -9.631])
        cylinder(h = 16.9378, r1 = 8.869, r2 = 8.869, center = true, $fn = 17);
      }
    }
  }
}
