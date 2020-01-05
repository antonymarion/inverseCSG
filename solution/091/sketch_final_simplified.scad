intersection() {
  union() {
    intersection() {
      union() {
        translate([-0.001, 1.573, 8.0265])
        cylinder(h = 20.1467, r1 = 1.81, r2 = 1.81, center = true, $fn = 12);
      
        translate([8.51043, 8.9895, -4.9135])
        rotate([90, 30, 0])
        cube(size = [16.5457, 36.1997, 18.2207], center = true);
      }
    
      union() {
        translate([-4.011, -9.953, -0.001])
        rotate([180, 90, -90])
        cylinder(h = 16.2937, r1 = 0.988, r2 = 0.988, center = true, $fn = 12);
      
        translate([-1.82, 0.342, -10.9765])
        cylinder(h = 14.2467, r1 = 0.458, r2 = 0.458, center = true, $fn = 12);
      }
    }
  
    intersection() {
      union() {
        translate([1.793, 0.368, 7.4245])
        cylinder(h = 21.3507, r1 = 0.495, r2 = 0.495, center = true, $fn = 12);
      
        intersection() {
          difference() {
            translate([8.51043, -9.351, -4.9135])
            rotate([90, 30, 0])
            cube(size = [16.5457, 36.1997, 17.4977], center = true);
          
            translate([8.48356, 0, -7.11855])
            rotate([90, 40, 0])
            cube(size = [14.0508, 36.1998, 3.6118], center = true);
          }
        
          translate([-0.001, 0, 1.858])
          rotate([180, 90, -90])
          cylinder(h = 36.1997, r1 = 5.971, r2 = 5.971, center = true, $fn = 12);
        
          translate([0, -1.204, 7.1235])
          cube(size = [36.1997, 1.2037, 21.9527], center = true);
        }
      
        translate([-7.906, -0.3615, -2.649])
        cube(size = [20.3877, 0.4807, 1.2037], center = true);
      
        translate([-5.01889, 8.9895, 5.98128])
        rotate([-90, -40, 0])
        cube(size = [36.1997, 20.5837, 18.2207], center = true);
      
        translate([1.793, 0.368, -2.649])
        cylinder(h = 1.2037, r1 = 0.495, r2 = 0.495, center = true, $fn = 12);
      }
    
      union() {
        intersection() {
          difference() {
            translate([8.51043, 0, -4.9135])
            rotate([90, 30, 0])
            cube(size = [16.5457, 36.1997, 3.6117], center = true);
          
            translate([-7.906, -0.3615, 7.4245])
            cube(size = [20.3878, 0.4808, 21.3508], center = true);
          }
        
          difference() {
            translate([3.82143, -8.147, -13.0351])
            rotate([90, 30, 0])
            cube(size = [16.5457, 17.4437, 19.9057], center = true);
          
            translate([-0.001, 1.573, 0])
            cylinder(h = 36.1998, r1 = 1.81, r2 = 1.81, center = true, $fn = 12);
          }
        }
      
        difference() {
          union() {
            translate([0, -0.3615, -3.552])
            cube(size = [36.1997, 0.4807, 0.6017], center = true);
          
            translate([8.51043, -0.3615, -4.9135])
            rotate([90, 30, 0])
            cube(size = [16.5457, 36.1997, 0.4807], center = true);
          }
        
          union() {
            translate([-0.001, 1.573, -2.95])
            cylinder(h = 1.8058, r1 = 1.81, r2 = 1.81, center = true, $fn = 12);
          
            translate([1.376, 0.77, 8.0265])
            rotate([180, 0, 180])
            cylinder(h = 20.1468, r1 = 0.9, r2 = 0.9, center = true, $fn = 12);
          }
        }
      }
    }
  
    difference() {
      union() {
        difference() {
          translate([0.357235, -1.204, 0.20625])
          rotate([-90, -30, 0])
          cube(size = [6.2467, 36.1997, 1.2037], center = true);
        
          translate([7.9065, -1.204, 0])
          cube(size = [20.3868, 1.2038, 36.1998], center = true);
        }
      
        difference() {
          union() {
            translate([-0.003, -1.204, -2.335])
            rotate([180, 90, -90])
            cylinder(h = 1.2037, r1 = 3.884, r2 = 3.884, center = true, $fn = 12);
          
            translate([7.9065, 0, 1.3125])
            cube(size = [20.3867, 3.6117, 3.8767], center = true);
          }
        
          union() {
            translate([5.81691, 4.44089e-16, -6.93232])
            rotate([-90, -40, 0])
            cube(size = [36.1998, 18.1008, 3.6118], center = true);
          
            translate([-0.001, 1.573, 1.3125])
            cylinder(h = 3.8768, r1 = 1.81, r2 = 1.81, center = true, $fn = 12);
          }
        }
      
        difference() {
          translate([7.9065, -1.204, 2.9495])
          cube(size = [20.3867, 1.2037, 1.8047], center = true);
        
          translate([-1.617, -0.3615, 2.937])
          rotate([180, 90, -90])
          cylinder(h = 0.4808, r1 = 0.914, r2 = 0.914, center = true, $fn = 12);
        }
      }
    
      union() {
        difference() {
          translate([7.9065, 0.602, 1.3365])
          cube(size = [20.3868, 2.4078, 1.4208], center = true);
        
          translate([-1.82, 0.342, 1.3365])
          cylinder(h = 1.4209, r1 = 0.458, r2 = 0.458, center = true, $fn = 12);
        }
      
        difference() {
          union() {
            translate([0, -9.1105, -7.124])
            cube(size = [36.1998, 17.9788, 21.9518], center = true);
          
            translate([0, 0.8425, 2.649])
            cube(size = [36.1998, 1.9268, 1.2038], center = true);
          }
        
          intersection() {
            translate([-7.83796, 0, 4.52525])
            rotate([90, 30, 0])
            cube(size = [18.0989, 36.1999, 3.6119], center = true);
          
            translate([-0.184463, -8.147, -0.1065])
            rotate([-90, -30, 0])
            cube(size = [7.4979, 36.1999, 19.9059], center = true);
          }
        }
      
        difference() {
          translate([-9.34138, -9.351, 5.39325])
          rotate([90, 30, 0])
          cube(size = [14.6268, 36.1998, 17.4978], center = true);
        
          translate([-1.617, -1.204, 2.937])
          rotate([180, 90, -90])
          cylinder(h = 1.2039, r1 = 0.914, r2 = 0.914, center = true, $fn = 12);
        }
      }
    }
  
    difference() {
      union() {
        translate([1.376, 0.77, 8.6285])
        rotate([180, 0, 180])
        cylinder(h = 18.9427, r1 = 0.9, r2 = 0.9, center = true, $fn = 12);
      
        translate([-2.91071, 0.8425, 13.0595])
        rotate([90, 30, 0])
        cube(size = [18.0987, 16.4907, 1.9267], center = true);
      
        translate([1.793, 0.368, 0])
        cylinder(h = 36.1997, r1 = 0.495, r2 = 0.495, center = true, $fn = 12);
      
        translate([3.71435, 0.8425, -11.6656])
        rotate([90, 30, 0])
        cube(size = [18.1007, 19.7087, 1.9267], center = true);
      
        difference() {
          union() {
            translate([-0.001, 1.573, 9.4715])
            cylinder(h = 17.2567, r1 = 1.81, r2 = 1.81, center = true, $fn = 12);
          
            translate([-4.0145, 0.8425, -6.95332])
            rotate([90, 30, 0])
            cube(size = [36.1997, 20.1417, 1.9267], center = true);
          }
        
          union() {
            translate([-4.58382, 8.147, -5.46695])
            rotate([-90, -40, 0])
            cube(size = [22.1488, 2.4848, 19.9058], center = true);
          
            translate([-11.8525, 8.749, -2.42807])
            rotate([90, 30, 0])
            cube(size = [18.0988, 20.1418, 18.7018], center = true);
          }
        }
      }
    
      union() {
        translate([-4.12275, -0.9635, -7.14081])
        rotate([90, 30, 0])
        cube(size = [36.1998, 19.7088, 1.6848], center = true);
      
        translate([0, 0.8425, -8.6285])
        cube(size = [36.1998, 1.9268, 18.9428], center = true);
      
        translate([-0.001, 1.573, 0])
        cylinder(h = 36.1998, r1 = 1.81, r2 = 1.81, center = true, $fn = 12);
      
        translate([0, 0.8425, 10.0735])
        cube(size = [36.1998, 1.9268, 16.0528], center = true);
      }
    }
  
    intersection() {
      union() {
        difference() {
          translate([5.38185, -9.1105, -4.5159])
          rotate([90, 40, 0])
          cube(size = [22.1487, 36.1997, 17.9787], center = true);
        
          translate([-3.853, 8.147, 0.001])
          rotate([180, 90, -90])
          cylinder(h = 19.9058, r1 = 0.361, r2 = 0.361, center = true, $fn = 12);
        }
      
        intersection() {
          translate([-1.313, 0.721, 1.9385])
          cylinder(h = 2.6247, r1 = 0.978, r2 = 0.978, center = true, $fn = 12);
        
          translate([7.9065, 0.361, 1.3125])
          cube(size = [20.3867, 2.8897, 3.8767], center = true);
        }
      }
    
      difference() {
        difference() {
          translate([0, 0, -7.124])
          cube(size = [36.1997, 36.1997, 21.9517], center = true);
        
          translate([-0.001, 1.573, 1.9385])
          cylinder(h = 2.6248, r1 = 1.81, r2 = 1.81, center = true, $fn = 12);
        }
      
        difference() {
          translate([6.12193, -0.6025, -3.5345])
          rotate([90, 30, 0])
          cube(size = [22.0618, 36.1998, 0.9628], center = true);
        
          translate([-10.1935, -0.6025, 1.9385])
          cube(size = [15.8129, 0.9629, 2.6249], center = true);
        }
      }
    
      union() {
        translate([7.9065, 0.361, 2.2395])
        cube(size = [20.3867, 2.8897, 3.2267], center = true);
      
        intersection() {
          union() {
            translate([-4.011, -1.204, -0.001])
            rotate([180, 90, -90])
            cylinder(h = 1.2037, r1 = 0.988, r2 = 0.988, center = true, $fn = 12);
          
            translate([-10.1935, 0, 2.2395])
            cube(size = [15.8127, 3.6117, 3.2267], center = true);
          }
        
          union() {
            translate([-6.3064, -9.351, -3.641])
            rotate([-90, -30, 0])
            cube(size = [21.6357, 36.1997, 17.4977], center = true);
          
            translate([-7.83796, 0.8425, 4.52525])
            rotate([90, 30, 0])
            cube(size = [18.0987, 36.1997, 1.9267], center = true);
          }
        }
      }
    }
  
    difference() {
      difference() {
        translate([4.082, -1.204, 0.001])
        rotate([180, 90, -90])
        cylinder(h = 1.2037, r1 = 0.919, r2 = 0.919, center = true, $fn = 12);
      
        translate([3.852, 8.147, -1.809e-15])
        rotate([180, 90, -90])
        cylinder(h = 19.9058, r1 = 0.361, r2 = 0.361, center = true, $fn = 12);
      }
    
      difference() {
        translate([-6.12193, 8.508, 3.5345])
        rotate([90, 30, 0])
        cube(size = [22.0618, 36.1998, 19.1838], center = true);
      
        translate([-0.003, 8.508, -2.335])
        rotate([180, 90, -90])
        cylinder(h = 19.1839, r1 = 3.884, r2 = 3.884, center = true, $fn = 12);
      }
    }
  
    difference() {
      union() {
        translate([7.9065, 0, -2.649])
        cube(size = [20.3867, 3.6117, 1.2037], center = true);
      
        translate([-1.313, 0.721, -1.204])
        cylinder(h = 4.0937, r1 = 0.978, r2 = 0.978, center = true, $fn = 12);
      
        intersection() {
          translate([-0.001, -0.9635, 1.858])
          rotate([180, 90, -90])
          cylinder(h = 1.6847, r1 = 5.971, r2 = 5.971, center = true, $fn = 12);
        
          translate([0, -9.351, -2.239])
          cube(size = [36.1997, 17.4977, 3.2277], center = true);
        }
      
        translate([7.9065, 0, 0])
        cube(size = [20.3867, 3.6117, 1.6857], center = true);
      }
    
      union() {
        translate([-0.001, 1.573, 0])
        cylinder(h = 36.1998, r1 = 1.81, r2 = 1.81, center = true, $fn = 12);
      
        translate([0, -0.3615, -1.445])
        cube(size = [36.1998, 0.4808, 1.2038], center = true);
      
        translate([8.51043, 0, -4.9135])
        rotate([90, 30, 0])
        cube(size = [16.5458, 36.1998, 36.1998], center = true);
      
        translate([-8.48356, -0.9635, -7.11855])
        rotate([-90, -40, 0])
        cube(size = [14.0508, 36.1998, 1.6848], center = true);
      }
    }
  
    difference() {
      union() {
        translate([1.62, -1.204, 2.931])
        rotate([180, 90, -90])
        cylinder(h = 1.2037, r1 = 0.916, r2 = 0.916, center = true, $fn = 12);
      
        intersection() {
          difference() {
            translate([-10.4007, -4.44089e-16, 1.46537])
            rotate([-90, -40, 0])
            cube(size = [22.1487, 20.5837, 3.6117], center = true);
          
            translate([-6.92521, 0.602, 6.10618])
            rotate([90, 30, 0])
            cube(size = [18.0988, 0.4328, 2.4078], center = true);
          }
        
          union() {
            translate([-7.906, 8.749, 2.649])
            cube(size = [20.3877, 18.7017, 1.2037], center = true);
          
            translate([0, -9.351, 1.204])
            cube(size = [36.1997, 17.4977, 4.0937], center = true);
          }
        }
      
        translate([-7.906, -0.3615, 0])
        cube(size = [20.3877, 0.4807, 1.6857], center = true);
      
        translate([-7.906, 0.8425, 0])
        cube(size = [20.3877, 1.9267, 1.6857], center = true);
      
        translate([1.376, 0.77, -9.4715])
        rotate([180, 0, 180])
        cylinder(h = 17.2567, r1 = 0.9, r2 = 0.9, center = true, $fn = 12);
      }
    
      intersection() {
        union() {
          translate([-0.001, 1.573, 0])
          cylinder(h = 36.1998, r1 = 1.81, r2 = 1.81, center = true, $fn = 12);
        
          translate([1.23372, 8.9895, -12.4])
          rotate([-90, -40, 0])
          cube(size = [22.1488, 15.6158, 18.2208], center = true);
        
          translate([-11.9607, -4.44089e-16, -2.61556])
          rotate([90, 30, 0])
          cube(size = [18.0988, 19.7088, 3.6118], center = true);
        
          translate([10.194, 8.147, -8.6285])
          cube(size = [15.8118, 19.9058, 18.9428], center = true);
        }
      
        union() {
          difference() {
            translate([-7.906, 0, -7.4245])
            cube(size = [20.3878, 3.6118, 21.3508], center = true);
          
            translate([8.74985, 0, -2.94382])
            rotate([90, 30, 0])
            cube(size = [18.1009, 0.4329, 36.1999], center = true);
          }
        
          translate([1.23372, 6.66134e-16, -12.4])
          rotate([-90, -40, 0])
          cube(size = [22.1488, 15.6158, 3.6118], center = true);
        
          translate([4.082, 8.147, 0.001])
          rotate([180, 90, -90])
          cylinder(h = 19.9058, r1 = 0.919, r2 = 0.919, center = true, $fn = 12);
        }
      }
    }
  
    difference() {
      intersection() {
        translate([0, -9.351, -8.737])
        cube(size = [36.1997, 17.4977, 18.7257], center = true);
      
        translate([-2.30263, 8.147, 11.4007])
        rotate([90, 30, 0])
        cube(size = [20.8107, 18.7557, 19.9057], center = true);
      }
    
      difference() {
        translate([2.88949, -1.204, -1.66825])
        rotate([90, 30, 0])
        cube(size = [1.2508, 36.1998, 1.2038], center = true);
      
        translate([0, -9.351, -9.363])
        cube(size = [36.1999, 17.4979, 17.4739], center = true);
      }
    }
  
    difference() {
      intersection() {
        translate([7.25049, -9.351, 5.88522])
        rotate([90, 30, 0])
        cube(size = [1.2507, 18.7557, 17.4977], center = true);
      
        translate([-5.38185, 8.147, -4.5159])
        rotate([-90, -40, 0])
        cube(size = [22.1487, 36.1997, 19.9057], center = true);
      }
    
      intersection() {
        translate([4.082, 8.147, 0.001])
        rotate([180, 90, -90])
        cylinder(h = 19.9058, r1 = 0.919, r2 = 0.919, center = true, $fn = 12);
      
        translate([-6.12193, 8.147, -3.5345])
        rotate([-90, -30, 0])
        cube(size = [22.0618, 36.1998, 19.9058], center = true);
      }
    }
  
    difference() {
      translate([13.3724, -1.204, 2.35072])
      rotate([90, 30, 0])
      cube(size = [15.3887, 18.7557, 1.2037], center = true);
    
      intersection() {
        union() {
          translate([0, -1.445, -0.0005])
          cube(size = [36.1998, 0.7218, 1.2508], center = true);
        
          translate([0, 8.508, -0.0005])
          cube(size = [36.1998, 19.1838, 1.2508], center = true);
        
          translate([8.48356, 0, -7.11855])
          rotate([90, 40, 0])
          cube(size = [14.0508, 36.1998, 36.1998], center = true);
        
          translate([0, 0, 9.363])
          cube(size = [36.1998, 36.1998, 17.4738], center = true);
        }
      
        union() {
          sphere(r = 54.2998, $fn = 108);
        
          translate([4.082, 8.749, 0.001])
          rotate([180, 90, -90])
          cylinder(h = 18.7018, r1 = 0.919, r2 = 0.919, center = true, $fn = 12);
        }
      }
    }
  
    intersection() {
      difference() {
        translate([0, -0.843, 9.363])
        cube(size = [36.1997, 0.4817, 17.4737], center = true);
      
        translate([-4.689, 8.508, -8.12159])
        rotate([90, 30, 0])
        cube(size = [36.1998, 17.4438, 19.1838], center = true);
      }
    
      translate([4.082, 8.147, 0.001])
      rotate([180, 90, -90])
      cylinder(h = 19.9057, r1 = 0.919, r2 = 0.919, center = true, $fn = 12);
    }
  
    intersection() {
      translate([-9.55313, 0, -5.5155])
      rotate([-90, -30, 0])
      cube(size = [14.1377, 36.1997, 36.1997], center = true);
    
      translate([-10.1935, -1.204, -0.602])
      cube(size = [15.8127, 1.2037, 2.8897], center = true);
    
      translate([-4.011, -1.204, -0.001])
      rotate([180, 90, -90])
      cylinder(h = 1.2037, r1 = 0.988, r2 = 0.988, center = true, $fn = 12);
    
      translate([0, 0, -0.602])
      cube(size = [36.1997, 36.1997, 2.8897], center = true);
    }
  
    intersection() {
      translate([-7.16463, -8.147, 4.1365])
      rotate([90, 30, 0])
      cube(size = [19.6537, 36.1997, 19.9057], center = true);
    
      union() {
        translate([0.672902, 8.9895, -0.3885])
        rotate([90, 30, 0])
        cube(size = [1.5557, 36.1997, 18.2207], center = true);
      
        translate([-1.82, 0.342, -1.445])
        cylinder(h = 1.2037, r1 = 0.458, r2 = 0.458, center = true, $fn = 12);
      }
    
      difference() {
        difference() {
          translate([7.9065, 0.8425, -1.445])
          cube(size = [20.3867, 1.9267, 1.2037], center = true);
        
          translate([-0.001, 1.573, -1.3365])
          cylinder(h = 1.4208, r1 = 1.81, r2 = 1.81, center = true, $fn = 12);
        }
      
        translate([-7.83796, 9.953, 4.52525])
        rotate([90, 30, 0])
        cube(size = [18.0988, 36.1998, 16.2938], center = true);
      }
    }
  
    difference() {
      union() {
        translate([1.376, 0.77, 7.4245])
        rotate([180, 0, 180])
        cylinder(h = 21.3507, r1 = 0.9, r2 = 0.9, center = true, $fn = 12);
      
        translate([-7.906, 0.8425, -2.649])
        cube(size = [20.3877, 1.9267, 1.2037], center = true);
      
        translate([1.793, 0.368, 8.0265])
        cylinder(h = 20.1467, r1 = 0.495, r2 = 0.495, center = true, $fn = 12);
      }
    
      union() {
        translate([-0.001, 1.573, 0])
        cylinder(h = 36.1998, r1 = 1.81, r2 = 1.81, center = true, $fn = 12);
      
        translate([-7.16463, 8.749, 4.1365])
        rotate([90, 30, 0])
        cube(size = [19.6538, 36.1998, 18.7018], center = true);
      
        translate([0, -9.1105, 4.44089e-16])
        rotate([90, 40, 0])
        cube(size = [36.1998, 36.1998, 17.9788], center = true);
      }
    }
  }

  translate([0, 0, 0.0005])
  cube(size = [11.9997, 4.3337, 9.2467], center = true);
}
