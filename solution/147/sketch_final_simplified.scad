intersection() {
  translate([0, -0.0005, -0.0005])
  cube(size = [11.9998, 8.6108, 1.4288], center = true);

  union() {
    difference() {
      translate([-4.728, -1.983, 0.0005])
      cylinder(h = 1.1908, r1 = 0.27, r2 = 0.27, center = true, $fn = 12);
    
      translate([-4.727, -1.981, 0])
      cylinder(h = 36.1999, r1 = 0.136, r2 = 0.136, center = true, $fn = 12);
    }
  
    translate([-3.046, -3.046, -0.3175])
    cylinder(h = 0.5548, r1 = 0.136, r2 = 0.136, center = true, $fn = 12);
  
    difference() {
      union() {
        translate([3.045, -3.045, -0.191])
        cylinder(h = 0.0818, r1 = 0.253, r2 = 0.253, center = true, $fn = 12);
      
        translate([2.9115, -2.767, -0.095])
        cube(size = [0.8228, 0.5098, 0.1078], center = true);
      
        translate([3.043, -3.043, -0.413])
        cylinder(h = 0.3638, r1 = 0.543, r2 = 0.543, center = true, $fn = 12);
      
        intersection() {
          union() {
            translate([3.046, -2.2695, -0.413])
            cube(size = [1.6118, 0.4848, 0.3638], center = true);
          
            translate([3.045, -3.046, 0.2235])
            cylinder(h = 0.7448, r1 = 0.136, r2 = 0.136, center = true, $fn = 12);
          }
        
          union() {
            translate([9.1865, -10.1775, -0.3175])
            cube(size = [17.8268, 15.8448, 0.5548], center = true);
          
            translate([10.7115, 8.0365, -0.413])
            cube(size = [14.7768, 20.1268, 0.3638], center = true);
          }
        }
      
        translate([3.5875, -0.2045, -0.4815])
        cube(size = [0.5288, 3.0088, 0.2268], center = true);
      }
    
      union() {
        difference() {
          translate([4.727, -1.982, 8.7525])
          cylinder(h = 18.6949, r1 = 0.136, r2 = 0.136, center = true, $fn = 12);
        
          translate([2.2275, -2.383, -0.372])
          cube(size = [5.001, 0.258, 0.446], center = true);
        }
      
        translate([2.24, -2.515, -0.413])
        cylinder(h = 0.3639, r1 = 0.258, r2 = 0.258, center = true, $fn = 12);
      
        difference() {
          translate([1.798, -2.767, 8.9755])
          cube(size = [3.0499, 0.5099, 18.2489], center = true);
        
          translate([3.045, -3.046, 8.866])
          cylinder(h = 18.468, r1 = 0.136, r2 = 0.136, center = true, $fn = 12);
        }
      
        translate([2.37, -10.306, -0.3])
        cube(size = [0.2599, 15.5879, 0.1359], center = true);
      
        translate([3.851, -2.517, -0.413])
        cylinder(h = 0.3639, r1 = 0.259, r2 = 0.259, center = true, $fn = 12);
      }
    }
  
    translate([3.045, 3.046, -0.095])
    cylinder(h = 0.1078, r1 = 0.136, r2 = 0.136, center = true, $fn = 12);
  
    translate([3.045, 3.045, -0.372])
    cylinder(h = 0.4458, r1 = 0.253, r2 = 0.253, center = true, $fn = 12);
  
    difference() {
      translate([4.3895, 1.7775, 0.0005])
      cube(size = [0.6788, 0.9548, 1.1908], center = true);
    
      union() {
        translate([4.592, -8.0365, 8.7525])
        cube(size = [0.2739, 20.1269, 18.6949], center = true);
      
        translate([-7.2535, 1.5045, -0.413])
        cube(size = [21.6929, 0.4089, 0.3639], center = true);
      
        translate([4.727, 1.984, 0])
        cylinder(h = 36.1999, r1 = 0.137, r2 = 0.137, center = true, $fn = 12);
      
        translate([4.0235, 1.7775, 9.207])
        cube(size = [0.8609, 0.9549, 17.7859], center = true);
      }
    }
  
    intersection() {
      union() {
        translate([8.9135, 2.7785, 8.7525])
        cube(size = [18.3728, 0.5368, 18.6948], center = true);
      
        translate([-3.045, 3.045, -0.1365])
        cylinder(h = 0.1908, r1 = 0.136, r2 = 0.136, center = true, $fn = 12);
      
        translate([-3.4775, 10.305, -0.372])
        cube(size = [1.9548, 15.5898, 0.4458], center = true);
      }
    
      union() {
        translate([-3.044, 3.047, -0.413])
        cylinder(h = 0.3638, r1 = 0.541, r2 = 0.541, center = true, $fn = 12);
      
        intersection() {
          difference() {
            translate([0, 2.526, 0.0005])
            cylinder(h = 1.1908, r1 = 0.273, r2 = 0.273, center = true, $fn = 12);
          
            translate([0, 2.527, 8.7525])
            cylinder(h = 18.6949, r1 = 0.135, r2 = 0.135, center = true, $fn = 12);
          }
        
          sphere(r = 54.2998, $fn = 108);
        }
      
        translate([-2.915, 2.537, -0.413])
        cube(size = [1.3538, 1.0198, 0.3638], center = true);
      
        translate([-3.045, 3.045, -0.1365])
        cylinder(h = 0.1908, r1 = 0.254, r2 = 0.254, center = true, $fn = 12);
      }
    }
  
    translate([3.044, 3.044, -0.4815])
    cylinder(h = 0.2268, r1 = 0.545, r2 = 0.545, center = true, $fn = 12);
  
    intersection() {
      union() {
        difference() {
          difference() {
            translate([3.145, 2.537, -0.1405])
            cube(size = [1.8098, 1.0198, 0.9088], center = true);
          
            translate([2.247, 2.508, 8.7525])
            cylinder(h = 18.6949, r1 = 0.248, r2 = 0.248, center = true, $fn = 12);
          }
        
          union() {
            translate([3.145, 2.651, 0.0405])
            cube(size = [1.8099, 0.7919, 0.5449], center = true);
          
            translate([3.859, 2.522, -9.0705])
            cylinder(h = 18.0589, r1 = 0.268, r2 = 0.268, center = true, $fn = 12);
          }
        }
      
        difference() {
          union() {
            translate([4.592, 1.868, 0.0005])
            cube(size = [0.2738, 0.3178, 1.1908], center = true);
          
            translate([4.729, 1.981, 0])
            cylinder(h = 36.1998, r1 = 0.27, r2 = 0.27, center = true, $fn = 12);
          }
        
          translate([4.727, 1.984, -8.7525])
          cylinder(h = 18.6949, r1 = 0.137, r2 = 0.137, center = true, $fn = 12);
        }
      }
    
      translate([0, 2.1095, 0.0005])
      cube(size = [36.1998, 0.8008, 1.1908], center = true);
    }
  
    translate([3.0465, 2.537, -0.413])
    cube(size = [1.0928, 1.0198, 0.3638], center = true);
  
    difference() {
      union() {
        translate([-2.364, -2.1405, -0.1405])
        cube(size = [4.1818, 0.2268, 0.9088], center = true);
      
        translate([-2.364, -1.6635, -0.4815])
        cube(size = [4.1818, 0.7268, 0.2268], center = true);
      }
    
      translate([-3.254, -2.1405, 0.11])
      cube(size = [0.8639, 0.2269, 0.4079], center = true);
    }
  
    difference() {
      union() {
        translate([2.2275, -1.906, 0.0005])
        cube(size = [5.0008, 1.2118, 1.1908], center = true);
      
        translate([3.4775, -0.861, -0.1405])
        cube(size = [1.9548, 4.3218, 0.9088], center = true);
      
        translate([4.727, -1.981, 0.0005])
        cylinder(h = 1.1908, r1 = 0.272, r2 = 0.272, center = true, $fn = 12);
      
        translate([-0.002, -2.524, 0.0005])
        cylinder(h = 1.1908, r1 = 0.276, r2 = 0.276, center = true, $fn = 12);
      }
    
      union() {
        translate([11.278, -1.5045, 0])
        cube(size = [13.6459, 0.4089, 36.1999], center = true);
      
        difference() {
          translate([9.1865, -10.1775, 0.0005])
          cube(size = [17.8269, 15.8449, 1.1909], center = true);
        
          translate([3.0465, -2.3655, -0.413])
          cube(size = [1.093, 1.313, 0.364], center = true);
        }
      
        translate([-7.025, -0.3635, 8.866])
        cube(size = [22.1499, 3.3269, 18.4679], center = true);
      
        translate([0, -2.528, 8.7525])
        cylinder(h = 18.6949, r1 = 0.136, r2 = 0.136, center = true, $fn = 12);
      
        translate([2.0905, -0.477, 0.455])
        cube(size = [4.7269, 3.5539, 0.2819], center = true);
      
        translate([4.727, -1.982, 8.7525])
        cylinder(h = 18.6949, r1 = 0.136, r2 = 0.136, center = true, $fn = 12);
      
        translate([3.0465, 0, -8.893])
        cube(size = [1.0929, 2.5999, 18.4139], center = true);
      }
    }
  
    translate([-4.2525, -1.6635, -0.027])
    cube(size = [0.4048, 0.7268, 0.6818], center = true);
  
    intersection() {
      difference() {
        difference() {
          difference() {
            translate([-7.93, 0.4005, 0.0005])
            cube(size = [20.3398, 4.2188, 1.1908], center = true);
          
            translate([-3.847, 2.51, 0])
            cylinder(h = 36.1999, r1 = 0.252, r2 = 0.252, center = true, $fn = 12);
          }
        
          union() {
            translate([-4.728, 1.982, 0])
            cylinder(h = 36.1999, r1 = 0.136, r2 = 0.136, center = true, $fn = 12);
          
            translate([0, 2.527, -8.7525])
            cylinder(h = 18.6949, r1 = 0.135, r2 = 0.135, center = true, $fn = 12);
          }
        }
      
        union() {
          translate([-1.932, 2.3825, -0.1635])
          cube(size = [3.3199, 0.2549, 0.1369], center = true);
        
          translate([-3.55, 2.268, 0.11])
          cube(size = [0.8639, 0.4819, 0.4079], center = true);
        
          translate([-0.905, 0.159, 8.866])
          cube(size = [6.2899, 3.7359, 18.4679], center = true);
        }
      }
    
      union() {
        difference() {
          translate([-3.1105, 1.905, -0.413])
          cube(size = [1.7428, 1.2098, 0.3638], center = true);
        
          translate([-2.239, 2.517, 0])
          cylinder(h = 36.1999, r1 = 0.26, r2 = 0.26, center = true, $fn = 12);
        }
      
        translate([6.8225, 1.7775, -8.893])
        cube(size = [22.5548, 0.9548, 18.4138], center = true);
      
        translate([-3.889, 0.159, -8.893])
        cube(size = [1.1318, 3.7358, 18.4138], center = true);
      
        translate([-4.5905, 1.9815, 8.7525])
        cube(size = [0.2728, 0.5448, 18.6948], center = true);
      
        translate([-4.727, 1.983, 0.0005])
        cylinder(h = 1.1908, r1 = 0.271, r2 = 0.271, center = true, $fn = 12);
      
        translate([-0.0005, 2.3825, 0.0005])
        cube(size = [0.5448, 0.2548, 1.1908], center = true);
      }
    }
  
    intersection() {
      union() {
        translate([3.3475, 1.6635, -0.4815])
        cube(size = [2.2148, 0.7268, 0.2268], center = true);
      
        translate([3.044, 3.044, -0.3])
        cylinder(h = 0.1358, r1 = 0.545, r2 = 0.545, center = true, $fn = 12);
      }
    
      difference() {
        sphere(r = 54.2998, $fn = 108);
      
        translate([3.859, 2.522, -9.3475])
        cylinder(h = 17.5049, r1 = 0.268, r2 = 0.268, center = true, $fn = 12);
      }
    }
  
    difference() {
      translate([-2.915, -2.1105, -0.4815])
      cube(size = [1.3538, 0.8028, 0.2268], center = true);
    
      translate([-2.236, -2.519, -9.234])
      cylinder(h = 17.7319, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
    }
  
    intersection() {
      union() {
        difference() {
          translate([-11.277, -1.9815, 0])
          cube(size = [13.6458, 0.5448, 36.1998], center = true);
        
          translate([-4.727, -1.981, 0])
          cylinder(h = 36.1999, r1 = 0.136, r2 = 0.136, center = true, $fn = 12);
        }
      
        translate([-3.045, -3.046, -0.372])
        cylinder(h = 0.4458, r1 = 0.254, r2 = 0.254, center = true, $fn = 12);
      
        intersection() {
          difference() {
            translate([-3.613, -9.7, -0.413])
            cube(size = [2.2278, 16.7998, 0.3638], center = true);
          
            translate([-3.849, -2.512, 8.7525])
            cylinder(h = 18.6949, r1 = 0.255, r2 = 0.255, center = true, $fn = 12);
          }
        
          union() {
            translate([-3.2745, -2.383, -0.1405])
            cube(size = [1.5508, 0.2578, 0.9088], center = true);
          
            translate([-3.0455, -2.767, -0.413])
            cube(size = [1.0928, 0.5098, 0.3638], center = true);
          }
        }
      }
    
      translate([-3.483, 0, 0.0005])
      cube(size = [2.4878, 36.1998, 1.1908], center = true);
    }
  
    translate([-3.045, -3.047, -0.413])
    cylinder(h = 0.3638, r1 = 0.541, r2 = 0.541, center = true, $fn = 12);
  }
}
