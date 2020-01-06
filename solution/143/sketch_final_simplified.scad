intersection() {
  translate([0, 0, 0.0005])
  cube(size = [11.9967, 4.0847, 7.8137], center = true);

  union() {
    difference() {
      intersection() {
        union() {
          translate([9.3435, 0.451, 2.919])
          rotate([-90, 0, 0])
          cube(size = [17.5097, 0.6727, 1.6947], center = true);
        
          translate([2.2335, -9.249, 2.7165])
          rotate([-90, 0, 0])
          cube(size = [3.2897, 0.5537, 17.6987], center = true);
        
          difference() {
            translate([3.2635, -0.02, 2.7875])
            rotate([-90, 0, 0])
            cube(size = [0.2597, 0.4117, 2.6387], center = true);
          
            translate([3.2635, -1.393, 2.68])
            rotate([0, 90, 0])
            cylinder(h = 0.2608, r1 = 0.328, r2 = 0.328, center = true, $fn = 12);
          }
        }
      
        union() {
          translate([-7.3525, -6.15069, -4.63488])
          rotate([37, 0, 0])
          cube(size = [21.4917, 20.7937, 36.1967], center = true);
        
          translate([3.558, 0.315, 2.8475])
          cylinder(h = 0.8157, r1 = 0.736, r2 = 0.736, center = true, $fn = 12);
        }
      
        translate([0, 8.3795, 10.3405])
        rotate([-90, 0, 0])
        cube(size = [36.1967, 15.5157, 19.4377], center = true);
      }
    
      union() {
        translate([1.185, 0.322, -7.4215])
        rotate([180, 0, 180])
        cylinder(h = 21.3548, r1 = 0.097, r2 = 0.097, center = true, $fn = 12);
      
        translate([3.441, 0.322, 10.3405])
        cylinder(h = 15.5168, r1 = 0.188, r2 = 0.188, center = true, $fn = 12);
      
        translate([0.698, 0.323, 10.269])
        cylinder(h = 15.6598, r1 = 0.188, r2 = 0.188, center = true, $fn = 12);
      
        translate([3.132, -9.7205, 2.196])
        rotate([180, 90, -90])
        cylinder(h = 16.7568, r1 = 0.377, r2 = 0.377, center = true, $fn = 12);
      
        intersection() {
          translate([-7.3525, -1.24048, -11.1509])
          rotate([37, 0, 0])
          cube(size = [21.4928, 20.7948, 19.8798], center = true);
        
          translate([-7.484, -0.02, 3.126])
          rotate([-90, 0, 0])
          cube(size = [21.2298, 0.2598, 2.6398], center = true);
        }
      
        translate([2.071, 0.324, -7.4215])
        cylinder(h = 21.3548, r1 = 0.189, r2 = 0.189, center = true, $fn = 12);
      
        translate([2.955, 0.323, 0])
        cylinder(h = 36.1978, r1 = 0.098, r2 = 0.098, center = true, $fn = 12);
      }
    }
  
    intersection() {
      difference() {
        union() {
          translate([-1.783, -0.157, -10.4685])
          cube(size = [4.1907, 3.0887, 15.2597], center = true);
        
          translate([-3.926, -1.286, -3.047])
          cylinder(h = 0.4167, r1 = 0.418, r2 = 0.418, center = true, $fn = 12);
        
          translate([-4.038, 0.024, -10.2245])
          cube(size = [0.6107, 2.7267, 15.7477], center = true);
        }
      
        union() {
          difference() {
            translate([-4.146, -0.157, -2.9835])
            cube(size = [0.3958, 3.0898, 0.5448], center = true);
          
            translate([-3.93, -0.157, -2.84])
            rotate([180, 90, -90])
            cylinder(h = 3.0909, r1 = 0.416, r2 = 0.416, center = true, $fn = 12);
          }
        
          translate([-3.6255, 0.719, 7.6315])
          cube(size = [0.2088, 1.3378, 20.9348], center = true);
        }
      }
    
      difference() {
        union() {
          translate([-8.893, -0.3665, -2.9835])
          cube(size = [18.4107, 2.6697, 0.5437], center = true);
        
          translate([0, 1.121, -2.937])
          rotate([0, 90, 0])
          cylinder(h = 36.1967, r1 = 0.318, r2 = 0.318, center = true, $fn = 12);
        
          translate([-10.99, -0.157, -1.771])
          cube(size = [14.2167, 3.0887, 2.1287], center = true);
        }
      
        union() {
          difference() {
            translate([-2.0155, -1.522, -1.981])
            cube(size = [4.6568, 0.3598, 2.5498], center = true);
          
            translate([6.8775, -1.278, -2.831])
            rotate([180, 90, 180])
            cylinder(h = 22.4439, r1 = 0.429, r2 = 0.429, center = true, $fn = 12);
          }
        
          translate([-3.731, 8.3795, -2.682])
          rotate([180, 90, -90])
          cylinder(h = 19.4388, r1 = 0.158, r2 = 0.158, center = true, $fn = 12);
        }
      }
    }
  
    difference() {
      difference() {
        translate([0.587, 0.323, 2.919])
        cylinder(h = 0.6727, r1 = 0.738, r2 = 0.738, center = true, $fn = 12);
      
        translate([0.698, 0.323, 0])
        cylinder(h = 36.1978, r1 = 0.188, r2 = 0.188, center = true, $fn = 12);
      }
    
      union() {
        translate([1.822, 8.30461, 6.25797])
        rotate([37, 0, 0])
        cube(size = [2.6198, 15.4008, 36.1978], center = true);
      
        translate([1.185, 0.322, 2.9515])
        rotate([180, 0, 180])
        cylinder(h = 0.6088, r1 = 0.097, r2 = 0.097, center = true, $fn = 12);
      }
    }
  
    intersection() {
      difference() {
        difference() {
          union() {
            translate([1.202, -1.522, -2.803])
            cube(size = [3.8587, 0.3587, 0.9047], center = true);
          
            translate([8.8795, 0.024, -3.047])
            cube(size = [18.4377, 2.7267, 0.4167], center = true);
          }
        
          translate([-0.729, -1.522, -2.447])
          rotate([180, 90, -90])
          cylinder(h = 0.3598, r1 = 0.386, r2 = 0.386, center = true, $fn = 12);
        }
      
        translate([0.717, -9.7205, -2.431])
        rotate([180, 90, -90])
        cylinder(h = 16.7568, r1 = 0.406, r2 = 0.406, center = true, $fn = 12);
      }
    
      union() {
        translate([0.587, 0.323, -3.047])
        cylinder(h = 0.4167, r1 = 0.738, r2 = 0.738, center = true, $fn = 12);
      
        translate([-0.207, -9.7205, -2.593])
        cube(size = [1.0407, 16.7557, 0.4847], center = true);
      
        translate([0.4505, -1.278, -2.831])
        rotate([180, 90, 180])
        cylinder(h = 0.2697, r1 = 0.429, r2 = 0.429, center = true, $fn = 12);
      
        translate([1.822, 0.87, -2.889])
        rotate([180, 90, 180])
        cylinder(h = 2.6187, r1 = 0.43, r2 = 0.43, center = true, $fn = 12);
      
        translate([0.4505, -0.646, -3.047])
        cube(size = [0.2697, 1.3867, 0.4167], center = true);
      
        translate([0.4125, 1.121, -2.937])
        rotate([0, 90, 0])
        cylinder(h = 0.1937, r1 = 0.318, r2 = 0.318, center = true, $fn = 12);
      }
    }
  
    translate([-0.0135, -1.522, -1.427])
    cube(size = [0.6517, 0.3587, 1.8407], center = true);
  
    difference() {
      union() {
        difference() {
          translate([-3.4375, 0.719, 2.7165])
          rotate([-90, 0, 0])
          cube(size = [0.8817, 0.5537, 1.3367], center = true);
        
          translate([-2.618, 0.024, -7.7595])
          rotate([-90, 0, 0])
          cube(size = [2.5218, 20.6788, 2.7278], center = true);
        }
      
        intersection() {
          translate([-4.038, -9.7205, -7.5525])
          rotate([-90, 0, 0])
          cube(size = [0.6107, 21.0917, 16.7557], center = true);
        
          translate([-3.926, -1.286, -7.5525])
          cylinder(h = 21.0917, r1 = 0.418, r2 = 0.418, center = true, $fn = 12);
        }
      
        translate([-2.1755, -0.827, 2.6135])
        rotate([-90, 0, 0])
        cube(size = [1.6357, 0.0617, 1.7487], center = true);
      
        difference() {
          translate([-3.935, 0.024, 2.583])
          rotate([180, 90, -90])
          cylinder(h = 2.7267, r1 = 0.415, r2 = 0.415, center = true, $fn = 12);
        
          translate([-3.7, -0.157, 2.4275])
          rotate([-90, 0, 0])
          cube(size = [0.3578, 0.4348, 3.0898], center = true);
        }
      
        translate([-2.438, 0.719, 2.8205])
        rotate([-90, 0, 0])
        cube(size = [2.1607, 0.3457, 1.3367], center = true);
      }
    
      union() {
        difference() {
          translate([-2.851, 1.1795, 10.373])
          rotate([-90, 0, 0])
          cube(size = [2.9858, 15.4518, 0.4168], center = true);
        
          translate([-2.851, 1.111, 2.664])
          rotate([180, 90, 180])
          cylinder(h = 2.9869, r1 = 0.332, r2 = 0.332, center = true, $fn = 12);
        }
      
        difference() {
          translate([-3.6705, -1.522, 2.8205])
          rotate([-90, 0, 0])
          cube(size = [1.3468, 0.3468, 0.3598], center = true);
        
          intersection() {
            translate([-4.1125, -1.393, 2.68])
            rotate([0, 90, 0])
            cylinder(h = 0.4639, r1 = 0.328, r2 = 0.328, center = true, $fn = 12);
          
            translate([-3.935, -1.522, 2.583])
            rotate([180, 90, -90])
            cylinder(h = 0.3609, r1 = 0.415, r2 = 0.415, center = true, $fn = 12);
          }
        }
      
        translate([-2.21011, -0.00662302, 0.0258994])
        rotate([0, 1, 48])
        cylinder(h = 36.1978, r1 = 0.826, r2 = 0.826, center = true, $fn = 12);
      
        translate([-10.9155, 6.4954, -6.72619])
        rotate([44, 0, 0])
        cube(size = [14.3668, 36.1978, 17.4968], center = true);
      }
    }
  
    intersection() {
      translate([1.202, 8.1985, 2.8205])
      rotate([-90, 0, 0])
      cube(size = [3.8587, 0.3457, 19.7997], center = true);
    
      union() {
        translate([8.8795, -1.393, 2.68])
        rotate([0, 90, 0])
        cylinder(h = 18.4377, r1 = 0.328, r2 = 0.328, center = true, $fn = 12);
      
        translate([-0.5345, 8.3795, 0.9705])
        rotate([-90, 0, 0])
        cube(size = [0.3857, 3.3477, 19.4377], center = true);
      }
    }
  
    intersection() {
      union() {
        translate([1.8595, -0.3665, -3.047])
        cube(size = [2.5417, 2.6697, 0.4167], center = true);
      
        difference() {
          translate([3.937, 8.3795, -2.846])
          rotate([180, 90, -90])
          cylinder(h = 19.4377, r1 = 0.405, r2 = 0.405, center = true, $fn = 12);
        
          translate([3.741, 8.1985, -2.71])
          rotate([0, 90, 90])
          cylinder(h = 19.8008, r1 = 0.136, r2 = 0.136, center = true, $fn = 12);
        }
      
        translate([3.5055, -0.1855, -3.047])
        cube(size = [0.7437, 2.3077, 0.4167], center = true);
      
        translate([3.924, -1.282, -0.136])
        cylinder(h = 5.1447, r1 = 0.422, r2 = 0.422, center = true, $fn = 12);
      }
    
      difference() {
        union() {
          translate([1.8595, -1.278, -2.831])
          rotate([180, 90, 180])
          cylinder(h = 2.5417, r1 = 0.429, r2 = 0.429, center = true, $fn = 12);
        
          translate([2.7935, 0.024, -10.405])
          cube(size = [4.4097, 2.7267, 15.3867], center = true);
        
          translate([2.7935, -1.522, 7.6315])
          cube(size = [4.4097, 0.3587, 20.9337], center = true);
        }
      
        difference() {
          union() {
            translate([10.616, 1.1795, 0])
            cube(size = [14.9658, 0.4168, 36.1978], center = true);
          
            translate([3.6275, -0.3665, -0.1995])
            cube(size = [0.2268, 2.6708, 5.2728], center = true);
          }
        
          difference() {
            translate([0, 1.121, -2.937])
            rotate([0, 90, 0])
            cylinder(h = 36.1989, r1 = 0.318, r2 = 0.318, center = true, $fn = 12);
          
            translate([3.6275, 8.3795, -2.7735])
            cube(size = [0.229, 19.441, 0.127], center = true);
          }
        }
      }
    }
  
    difference() {
      union() {
        translate([-3.93, -0.1855, -2.84])
        rotate([180, 90, -90])
        cylinder(h = 2.3077, r1 = 0.416, r2 = 0.416, center = true, $fn = 12);
      
        translate([-3.4715, -0.827, -1.771])
        cube(size = [0.9477, 1.7487, 2.1287], center = true);
      
        translate([-4.146, 0.024, -1.771])
        cube(size = [0.3947, 2.7267, 2.1287], center = true);
      
        translate([-3.926, -1.286, -1.771])
        cylinder(h = 2.1287, r1 = 0.418, r2 = 0.418, center = true, $fn = 12);
      }
    
      union() {
        translate([-3.05773, -0.0248745, -2.51055])
        rotate([180, 87, -92])
        cylinder(h = 36.1978, r1 = 0.419, r2 = 0.419, center = true, $fn = 12);
      
        translate([0, 0.049, -1.543])
        rotate([-180, 90, -180])
        cylinder(h = 36.1978, r1 = 0.827, r2 = 0.827, center = true, $fn = 12);
      
        translate([-3.2575, -9.0255, 7.8755])
        cube(size = [0.5228, 18.1468, 20.4468], center = true);
      
        translate([-1.783, 8.3795, -9.4025])
        cube(size = [4.1918, 19.4388, 17.3928], center = true);
      }
    }
  
    intersection() {
      translate([0, -8.3555, 8.6975])
      cube(size = [36.1967, 19.4857, 18.8017], center = true);
    
      union() {
        intersection() {
          union() {
            translate([6.55, -0.137, -0.129])
            rotate([180, 90, 180])
            cylinder(h = 23.0967, r1 = 0.589, r2 = 0.589, center = true, $fn = 12);
          
            translate([-4.706, 9.0745, -0.111])
            cube(size = [0.1927, 18.0477, 0.7827], center = true);
          }
        
          difference() {
            translate([-4.6725, -6.07791, 6.29386])
            rotate([44, 0, 0])
            cube(size = [0.6517, 36.1967, 18.6977], center = true);
          
            translate([0, -0.136, -0.135])
            rotate([180, 90, 180])
            cylinder(h = 36.1978, r1 = 0.172, r2 = 0.172, center = true, $fn = 12);
          }
        }
      
        translate([-4.1125, 6.4954, -6.72619])
        rotate([44, 0, 0])
        cube(size = [0.4617, 36.1967, 17.4957], center = true);
      }
    }
  
    intersection() {
      union() {
        difference() {
          translate([-0.109, 0, 0])
          rotate([37, 0, 0])
          cube(size = [1.2367, 36.1967, 36.1967], center = true);
        
          translate([-0.732, 8.1985, 2.186])
          rotate([180, 90, -90])
          cylinder(h = 19.8008, r1 = 0.392, r2 = 0.392, center = true, $fn = 12);
        }
      
        translate([-1.0425, -9.7205, 2.7875])
        rotate([-90, 0, 0])
        cube(size = [0.6237, 0.4117, 16.7557], center = true);
      }
    
      difference() {
        intersection() {
          translate([-0.4225, -1.393, 2.68])
          rotate([0, 90, 0])
          cylinder(h = 1.8637, r1 = 0.328, r2 = 0.328, center = true, $fn = 12);
        
          sphere(r = 54.2967, $fn = 108);
        }
      
        union() {
          translate([-0.109, 0.024, 1.145])
          rotate([-90, 0, 0])
          cube(size = [1.2378, 3.6978, 2.7278], center = true);
        
          translate([0.713, -9.7205, 2.179])
          rotate([180, 90, -90])
          cylinder(h = 16.7568, r1 = 0.401, r2 = 0.401, center = true, $fn = 12);
        }
      }
    }
  
    intersection() {
      difference() {
        difference() {
          translate([0.069, 0.024, 2.7875])
          rotate([-90, 0, 0])
          cube(size = [6.1247, 0.4117, 2.7267], center = true);
        
          translate([-1.03387, -0.702298, -0.00928468])
          rotate([-0, 1, -81])
          cylinder(h = 36.1978, r1 = 0.358, r2 = 0.358, center = true, $fn = 12);
        }
      
        union() {
          translate([-0.109, -9.7205, 2.8205])
          rotate([-90, 0, 0])
          cube(size = [1.2378, 0.3468, 16.7568], center = true);
        
          translate([-2.21011, -0.00662302, 0.0258994])
          rotate([0, 1, 48])
          cylinder(h = 36.1978, r1 = 0.826, r2 = 0.826, center = true, $fn = 12);
        }
      }
    
      union() {
        difference() {
          translate([-8.7945, -6.15069, -4.63488])
          rotate([37, 0, 0])
          cube(size = [18.6077, 20.7937, 36.1967], center = true);
        
          translate([-2.1755, 8.1985, 0.9705])
          rotate([-90, 0, 0])
          cube(size = [1.6368, 3.3488, 19.8008], center = true);
        }
      
        translate([-0.4225, 1.111, 2.664])
        rotate([180, 90, 180])
        cylinder(h = 1.8637, r1 = 0.332, r2 = 0.332, center = true, $fn = 12);
      }
    }
  
    difference() {
      union() {
        difference() {
          difference() {
            translate([-4.8035, 0, 0])
            rotate([44, 0, 0])
            cube(size = [0.3897, 36.1967, 36.1967], center = true);
          
            translate([-4.7715, 1.31, -0.124])
            rotate([180, 90, 180])
            cylinder(h = 0.3248, r1 = 0.066, r2 = 0.066, center = true, $fn = 12);
          }
        
          union() {
            translate([-4.706, 9.7445, 8.798])
            cube(size = [0.1938, 16.7088, 18.6018], center = true);
          
            translate([-4.902, 6.4954, -6.72619])
            rotate([44, 0, 0])
            cube(size = [0.1938, 36.1978, 17.4968], center = true);
          }
        }
      
        difference() {
          translate([-4.706, 1.306, -0.112])
          rotate([180, 90, 180])
          cylinder(h = 0.1927, r1 = 0.398, r2 = 0.398, center = true, $fn = 12);
        
          translate([0, 1.31, -0.124])
          rotate([180, 90, 180])
          cylinder(h = 36.1978, r1 = 0.066, r2 = 0.066, center = true, $fn = 12);
        }
      
        translate([-4.476, -6.07791, 6.29386])
        rotate([44, 0, 0])
        cube(size = [0.2587, 36.1967, 18.6977], center = true);
      
        translate([-4.8035, -8.3555, -9.4025])
        cube(size = [0.3897, 19.4857, 17.3917], center = true);
      }
    
      difference() {
        union() {
          difference() {
            translate([-11.2225, 9.535, 0])
            cube(size = [13.7528, 17.1278, 36.1978], center = true);
          
            translate([-4.706, 9.535, -0.111])
            cube(size = [0.1849, 17.1289, 0.7749], center = true);
          }
        
          translate([-4.6725, -8.565, 0])
          cube(size = [0.6528, 19.0778, 36.1978], center = true);
        }
      
        translate([-4.64, 0.5095, -0.111])
        cube(size = [0.5889, 0.9199, 0.7849], center = true);
      }
    }
  
    intersection() {
      difference() {
        difference() {
          sphere(r = 54.2967, $fn = 108);
        
          translate([0, -0.136, -0.135])
          rotate([180, 90, 180])
          cylinder(h = 36.1978, r1 = 0.172, r2 = 0.172, center = true, $fn = 12);
        }
      
        union() {
          translate([1.921, -0.157, 0.769])
          rotate([180, 90, -90])
          cylinder(h = 3.0898, r1 = 1.733, r2 = 1.733, center = true, $fn = 12);
        
          translate([3.5055, 0.024, -0.1995])
          cube(size = [0.7448, 2.7278, 5.2728], center = true);
        }
      }
    
      union() {
        translate([4.44, 0.024, -0.1995])
        cube(size = [1.1167, 2.7267, 5.2717], center = true);
      
        intersection() {
          translate([3.924, -1.282, -0.4095])
          cylinder(h = 5.6917, r1 = 0.422, r2 = 0.422, center = true, $fn = 12);
        
          translate([3.937, -0.3665, -2.846])
          rotate([180, 90, -90])
          cylinder(h = 2.6697, r1 = 0.405, r2 = 0.405, center = true, $fn = 12);
        }
      
        translate([2.164, -0.157, -0.4095])
        cube(size = [3.1507, 3.0887, 5.6917], center = true);
      }
    
      union() {
        translate([10.616, -0.137, -0.129])
        rotate([180, 90, 180])
        cylinder(h = 14.9647, r1 = 0.589, r2 = 0.589, center = true, $fn = 12);
      
        difference() {
          translate([3.7385, -1.278, -2.831])
          rotate([180, 90, 180])
          cylinder(h = 1.2097, r1 = 0.429, r2 = 0.429, center = true, $fn = 12);
        
          translate([3.118, -8.565, -2.44])
          rotate([180, 90, -90])
          cylinder(h = 19.0678, r1 = 0.395, r2 = 0.395, center = true, $fn = 12);
        }
      
        translate([3.6375, 1.121, -2.937])
        rotate([0, 90, 0])
        cylinder(h = 0.4817, r1 = 0.318, r2 = 0.318, center = true, $fn = 12);
      
        translate([3.322, 0.87, -2.889])
        rotate([180, 90, 180])
        cylinder(h = 0.3767, r1 = 0.43, r2 = 0.43, center = true, $fn = 12);
      
        difference() {
          translate([3.929, -0.157, 7.695])
          cube(size = [0.8287, 3.0887, 20.8067], center = true);
        
          translate([0, -0.481, 1.031])
          rotate([180, 90, -180])
          cylinder(h = 36.1978, r1 = 0.444, r2 = 0.444, center = true, $fn = 12);
        }
      }
    }
  
    difference() {
      difference() {
        union() {
          translate([1.822, 0.024, 2.8205])
          rotate([-90, 0, 0])
          cube(size = [2.6187, 0.3457, 2.7267], center = true);
        
          translate([-0.0135, -1.522, 0.9705])
          rotate([-90, 0, 0])
          cube(size = [0.6517, 3.3477, 0.3587], center = true);
        }
      
        union() {
          translate([3.558, 0.315, 0])
          cylinder(h = 36.1978, r1 = 0.736, r2 = 0.736, center = true, $fn = 12);
        
          translate([0.587, 0.323, 1.145])
          cylinder(h = 3.6978, r1 = 0.738, r2 = 0.738, center = true, $fn = 12);
        }
      }
    
      union() {
        translate([9.3055, 8.30461, 6.25797])
        rotate([37, 0, 0])
        cube(size = [17.5868, 15.4008, 36.1978], center = true);
      
        translate([2.071, 0.324, 0])
        cylinder(h = 36.1978, r1 = 0.189, r2 = 0.189, center = true, $fn = 12);
      
        translate([1.921, -0.157, 0.769])
        rotate([180, 90, -90])
        cylinder(h = 3.0898, r1 = 1.733, r2 = 1.733, center = true, $fn = 12);
      }
    }
  
    intersection() {
      union() {
        translate([3.87, -0.02, -7.7595])
        rotate([-90, 0, 0])
        cube(size = [0.9467, 20.6777, 2.6387], center = true);
      
        translate([3.87, -0.02, 2.7875])
        rotate([-90, 0, 0])
        cube(size = [0.9467, 0.4117, 2.6387], center = true);
      
        translate([-6.8775, -1.393, 2.68])
        rotate([0, 90, 0])
        cylinder(h = 22.4417, r1 = 0.328, r2 = 0.328, center = true, $fn = 12);
      
        translate([10.7475, 1.111, 2.664])
        rotate([180, 90, 180])
        cylinder(h = 14.7017, r1 = 0.332, r2 = 0.332, center = true, $fn = 12);
      }
    
      union() {
        difference() {
          translate([3.5055, -9.7205, -7.7595])
          rotate([-90, 0, 0])
          cube(size = [0.7437, 20.6777, 16.7557], center = true);
        
          translate([3.132, -9.7205, 2.196])
          rotate([180, 90, -90])
          cylinder(h = 16.7568, r1 = 0.377, r2 = 0.377, center = true, $fn = 12);
        }
      
        intersection() {
          translate([3.5055, 1.111, 2.664])
          rotate([180, 90, 180])
          cylinder(h = 0.7437, r1 = 0.332, r2 = 0.332, center = true, $fn = 12);
        
          translate([2.466, 8.851, 2.919])
          rotate([-90, 0, 0])
          cube(size = [3.7547, 0.6727, 18.4947], center = true);
        }
      
        translate([2.2335, -9.249, 2.7875])
        rotate([-90, 0, 0])
        cube(size = [3.2897, 0.4117, 17.6987], center = true);
      
        translate([4.1125, 8.3795, 2.5095])
        rotate([-90, 0, 0])
        cube(size = [0.4617, 0.1397, 19.4377], center = true);
      
        difference() {
          translate([3.967, 0, 2.622])
          rotate([180, 90, -90])
          cylinder(h = 36.1967, r1 = 0.368, r2 = 0.368, center = true, $fn = 12);
        
          translate([3.677, 8.3795, 2.392])
          rotate([-0, 90, -90])
          cylinder(h = 19.4388, r1 = 0.221, r2 = 0.221, center = true, $fn = 12);
        }
      }
    
      union() {
        difference() {
          sphere(r = 54.2967, $fn = 108);
        
          translate([4.1125, -9.7205, 2.7875])
          rotate([-90, 0, 0])
          cube(size = [0.4628, 0.4128, 16.7568], center = true);
        }
      
        translate([3.924, -1.282, 0])
        cylinder(h = 36.1967, r1 = 0.422, r2 = 0.422, center = true, $fn = 12);
      }
    }
  
    difference() {
      union() {
        translate([-3.4375, -0.646, 2.7165])
        rotate([-90, 0, 0])
        cube(size = [0.8817, 0.5537, 1.3867], center = true);
      
        translate([-2.1755, -1.393, 2.68])
        rotate([0, 90, 0])
        cylinder(h = 1.6357, r1 = 0.328, r2 = 0.328, center = true, $fn = 12);
      
        difference() {
          translate([-4.1125, 0.024, -7.727])
          rotate([-90, 0, 0])
          cube(size = [0.4617, 20.7427, 2.7267], center = true);
        
          translate([-10.81, 0.049, -1.543])
          rotate([-180, 90, -180])
          cylinder(h = 14.5778, r1 = 0.827, r2 = 0.827, center = true, $fn = 12);
        }
      
        translate([-3.8055, 0.719, 2.542])
        rotate([-90, 0, 0])
        cube(size = [0.1457, 0.2047, 1.3367], center = true);
      
        translate([-3.4375, -1.522, -7.831])
        rotate([-90, 0, 0])
        cube(size = [0.8817, 20.5347, 0.3587], center = true);
      
        translate([-3.4375, -1.393, 2.68])
        rotate([0, 90, 0])
        cylinder(h = 0.8817, r1 = 0.328, r2 = 0.328, center = true, $fn = 12);
      }
    
      union() {
        translate([-3.2575, -1.522, -7.9455])
        rotate([-90, 0, 0])
        cube(size = [0.5328, 20.3068, 0.3598], center = true);
      
        translate([-3.9325, 6.4954, -6.72619])
        rotate([44, 0, 0])
        cube(size = [0.8228, 36.1978, 17.4968], center = true);
      
        translate([-3.363, -0.646, 2.5095])
        rotate([-90, 0, 0])
        cube(size = [0.7338, 0.1408, 1.3878], center = true);
      
        translate([-3.144, -0.0385524, 2.20866])
        rotate([180, 89, 90])
        cylinder(h = 36.1978, r1 = 0.378, r2 = 0.378, center = true, $fn = 12);
      
        translate([-3.24196, -0.769116, 0.0571566])
        rotate([1.70755e-06, 1, 24])
        cylinder(h = 36.1978, r1 = 0.206, r2 = 0.206, center = true, $fn = 12);
      
        translate([0, -0.136, -0.135])
        rotate([180, 90, 180])
        cylinder(h = 36.1978, r1 = 0.172, r2 = 0.172, center = true, $fn = 12);
      
        translate([-3.727, 0.024, 2.438])
        rotate([0, 90, 90])
        cylinder(h = 2.7278, r1 = 0.148, r2 = 0.148, center = true, $fn = 12);
      
        translate([-2.1755, 8.1985, 2.395])
        rotate([-90, 0, 0])
        cube(size = [1.6368, 0.3698, 19.8008], center = true);
      }
    }
  }
}
