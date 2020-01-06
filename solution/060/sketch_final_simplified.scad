intersection() {
  cube(size = [11.9998, 2.4318, 6.6578], center = true);

  union() {
    intersection() {
      union() {
        intersection() {
          difference() {
            translate([-1.52527, -0.9465, -7.85181])
            rotate([-90, -15, 0])
            cube(size = [1.3468, 21.8208, 0.1348], center = true);
          
            translate([-2.5, -8.86365, 0.154716])
            rotate([179, 0, 0])
            cube(size = [0.6759, 18.4699, 36.1999], center = true);
          }
        
          union() {
            translate([7.969, 8.544, -9.956])
            cube(size = [20.2618, 19.1138, 16.2878], center = true);
          
            translate([-10.131, -8.543, -0.0005])
            cube(size = [15.9378, 19.1138, 5.5468], center = true);
          }
        }
      
        difference() {
          difference() {
            translate([-10.469, -0.298, -2.293])
            cube(size = [15.2618, 1.4318, 0.9618], center = true);
          
            translate([-3.08971, 0.013, -2.01328])
            rotate([0, 75, 0])
            cylinder(h = 1.3469, r1 = 0.175, r2 = 0.175, center = true, $fn = 12);
          }
        
          difference() {
            translate([0, -0.298, -0.0005])
            cube(size = [36.1999, 1.4319, 5.5469], center = true);
          
            translate([-1.52527, -0.2295, -7.85181])
            rotate([-90, -15, 0])
            cube(size = [1.347, 21.821, 1.297], center = true);
          }
        }
      }
    
      translate([0, 0, -0.0005])
      cube(size = [36.1998, 36.1998, 5.5468], center = true);
    }
  
    difference() {
      intersection() {
        difference() {
          translate([7.37339, 0, 1.9757])
          rotate([-91, -15, 0])
          cube(size = [20.9328, 36.1998, 36.1998], center = true);
        
          translate([0.002, -0.0005, -3.909])
          rotate([180, 90, -90])
          cylinder(h = 2.0269, r1 = 1.894, r2 = 1.894, center = true, $fn = 12);
        }
      
        union() {
          translate([-8.58411, -0.9455, -5.14301])
          rotate([90, 15, 0])
          cube(size = [22.2788, 21.8208, 0.1348], center = true);
        
          translate([-7.631, 0.068, -2.09])
          cube(size = [20.9378, 1.8918, 1.3678], center = true);
        
          difference() {
            translate([1.52334, -0.2295, -7.8513])
            rotate([90, 15, 0])
            cube(size = [1.3508, 21.8208, 1.2968], center = true);
          
            translate([10.3712, 2.169, -1.724])
            rotate([180, 75, 180])
            cylinder(h = 15.2719, r1 = 2.561, r2 = 2.561, center = true, $fn = 12);
          }
        }
      
        difference() {
          translate([0, 0, -0.0005])
          cube(size = [36.1998, 36.1998, 5.5468], center = true);
        
          translate([9.81136, 0.014, -3.8133])
          rotate([180, 75, 180])
          cylinder(h = 15.2719, r1 = 0.175, r2 = 0.175, center = true, $fn = 12);
        }
      }
    
      intersection() {
        union() {
          translate([0.822786, 0.015, 3.07068])
          rotate([180, 75, 180])
          cylinder(h = 36.1999, r1 = 0.175, r2 = 0.175, center = true, $fn = 12);
        
          translate([-1.609, 8.611, -2.298])
          rotate([180, 90, -90])
          cylinder(h = 18.9779, r1 = 0.162, r2 = 0.162, center = true, $fn = 12);
        
          translate([-7.17204, -8.86365, 2.08192])
          rotate([89, 15, 0])
          cube(size = [21.2669, 36.1999, 18.4699], center = true);
        
          translate([1.608, 8.611, -2.298])
          rotate([180, 90, -90])
          cylinder(h = 18.9779, r1 = 0.161, r2 = 0.161, center = true, $fn = 12);
        }
      
        union() {
          translate([0, 0.068, 0.683])
          cube(size = [36.1999, 1.8919, 4.1799], center = true);
        
          translate([-2.129, 0, -1.165])
          rotate([180, 90, -90])
          cylinder(h = 36.1999, r1 = 0.716, r2 = 0.716, center = true, $fn = 12);
        
          translate([-7.969, -0.0005, -2.293])
          cube(size = [20.2619, 2.0269, 0.9619], center = true);
        
          translate([2.095, -8.543, -1.205])
          rotate([180, 90, -90])
          cylinder(h = 19.1139, r1 = 0.513, r2 = 0.513, center = true, $fn = 12);
        }
      }
    }
  
    intersection() {
      difference() {
        translate([0, -0.298, 0.4805])
        cube(size = [36.1998, 1.4318, 4.5848], center = true);
      
        translate([-10.3733, 2.169, -1.72562])
        rotate([0, 75, 0])
        cylinder(h = 15.2669, r1 = 2.561, r2 = 2.561, center = true, $fn = 12);
      }
    
      union() {
        translate([-3.54785, -0.298, -0.950642])
        rotate([-90, -15, 0])
        cube(size = [1.0118, 36.1998, 1.4318], center = true);
      
        translate([7.41511, 9.23359, 1.82001])
        rotate([-91, -15, 0])
        cube(size = [20.9328, 36.1998, 17.7298], center = true);
      }
    
      union() {
        difference() {
          translate([-2.129, 8.611, -1.165])
          rotate([180, 90, -90])
          cylinder(h = 18.9778, r1 = 0.716, r2 = 0.716, center = true, $fn = 12);
        
          translate([-2.094, -8.8405, -1.203])
          rotate([180, 90, -90])
          cylinder(h = 18.5189, r1 = 0.202, r2 = 0.202, center = true, $fn = 12);
        }
      
        difference() {
          translate([-1.68707, -0.298, -7.89517])
          rotate([-90, -15, 0])
          cube(size = [1.0118, 21.8208, 1.4318], center = true);
        
          translate([-0.823045, 0.012, 3.07164])
          rotate([0, 75, 0])
          cylinder(h = 36.1999, r1 = 0.176, r2 = 0.176, center = true, $fn = 12);
        }
      }
    }
  
    difference() {
      union() {
        translate([-2.5, -0.0005, -2.09])
        cube(size = [0.6758, 2.0268, 1.3678], center = true);
      
        translate([-2.129, -0.9465, -1.165])
        rotate([180, 90, -90])
        cylinder(h = 0.1348, r1 = 0.716, r2 = 0.716, center = true, $fn = 12);
      
        difference() {
          translate([-2.129, 0.068, -1.165])
          rotate([180, 90, -90])
          cylinder(h = 1.8918, r1 = 0.716, r2 = 0.716, center = true, $fn = 12);
        
          translate([7.969, -0.2295, -2.293])
          cube(size = [20.2619, 1.2969, 0.9619], center = true);
        }
      }
    
      union() {
        translate([-9.81351, 0.013, -3.81491])
        rotate([0, 75, 0])
        cylinder(h = 15.2669, r1 = 0.175, r2 = 0.175, center = true, $fn = 12);
      
        translate([7.969, -0.9465, -2.293])
        cube(size = [20.2619, 0.1349, 0.9619], center = true);
      
        translate([-2.095, -0.298, -1.204])
        rotate([180, 90, -90])
        cylinder(h = 1.4319, r1 = 0.513, r2 = 0.513, center = true, $fn = 12);
      
        translate([-2.094, 0.7165, -1.203])
        rotate([180, 90, -90])
        cylinder(h = 0.5949, r1 = 0.202, r2 = 0.202, center = true, $fn = 12);
      }
    }
  
    difference() {
      union() {
        translate([2.127, -0.298, -1.167])
        rotate([180, 90, -90])
        cylinder(h = 1.4318, r1 = 0.718, r2 = 0.718, center = true, $fn = 12);
      
        translate([1.68707, -0.9455, -7.89517])
        rotate([90, 15, 0])
        cube(size = [1.0118, 21.8208, 0.1348], center = true);
      }
    
      union() {
        translate([0, 8.544, -9.7535])
        cube(size = [36.1999, 19.1139, 16.6929], center = true);
      
        translate([2.095, -0.298, -1.205])
        rotate([180, 90, -90])
        cylinder(h = 1.4319, r1 = 0.513, r2 = 0.513, center = true, $fn = 12);
      }
    }
  
    difference() {
      intersection() {
        translate([2.127, -0.2295, -1.167])
        rotate([180, 90, -90])
        cylinder(h = 1.2968, r1 = 0.718, r2 = 0.718, center = true, $fn = 12);
      
        translate([0, 9.23359, -0.161173])
        rotate([179, 0, 0])
        cube(size = [36.1998, 17.7298, 36.1998], center = true);
      
        translate([-7.631, 9.23359, -0.161173])
        rotate([179, 0, 0])
        cube(size = [20.9378, 17.7298, 36.1998], center = true);
      }
    
      difference() {
        intersection() {
          translate([2.095, -8.543, -1.205])
          rotate([180, 90, -90])
          cylinder(h = 19.1139, r1 = 0.513, r2 = 0.513, center = true, $fn = 12);
        
          translate([2.094, 8.611, -1.204])
          rotate([180, 90, -90])
          cylinder(h = 18.9779, r1 = 0.202, r2 = 0.202, center = true, $fn = 12);
        }
      
        translate([2.5, 0.068, -10.437])
        cube(size = [0.676, 1.892, 15.326], center = true);
      }
    }
  
    difference() {
      union() {
        translate([2.127, 0.7165, -1.167])
        rotate([180, 90, -90])
        cylinder(h = 0.5948, r1 = 0.718, r2 = 0.718, center = true, $fn = 12);
      
        translate([2.5, 0.7165, -2.09])
        cube(size = [0.6758, 0.5948, 1.3678], center = true);
      }
    
      union() {
        translate([2.5, -0.2295, -1.6095])
        cube(size = [0.6759, 1.2969, 0.4049], center = true);
      
        translate([2.094, 0.7165, -1.204])
        rotate([180, 90, -90])
        cylinder(h = 0.5949, r1 = 0.202, r2 = 0.202, center = true, $fn = 12);
      }
    }
  }
}
