intersection() {
  translate([0, 0, -0.0005])
  cube(size = [7.5518, 11.9998, 3.9308], center = true);

  union() {
    difference() {
      translate([2.5435, 3.018, -1.121])
      cube(size = [1.0348, 3.9638, 1.0338], center = true);
    
      translate([2.371, -6.7225, -0.948])
      cube(size = [0.6899, 22.7549, 0.6899], center = true);
    }
  
    intersection() {
      union() {
        translate([-8.5545, -8.481, -8.662])
        rotate([90, 0, 0])
        cube(size = [19.0908, 18.8758, 19.2378], center = true);
      
        translate([0.646, 0.6895, 0.261])
        rotate([180, 90, -90])
        cylinder(h = 0.4828, r1 = 1.381, r2 = 1.381, center = true, $fn = 12);
      
        translate([-2.417, 0.332, 0.1725])
        cylinder(h = 1.2068, r1 = 3.581, r2 = 3.581, center = true, $fn = 12);
      
        translate([0.985, 0.793, 0.6])
        rotate([180, 90, -90])
        cylinder(h = 0.6898, r1 = 0.179, r2 = 0.179, center = true, $fn = 12);
      }
    
      difference() {
        translate([0, -8.481, 0])
        rotate([90, 1, 0])
        cube(size = [36.1998, 36.1998, 19.2378], center = true);
      
        translate([9.1145, 0.6895, 0.301])
        rotate([90, 0, 0])
        cube(size = [17.9709, 1.4639, 0.4829], center = true);
      }
    
      union() {
        translate([9.201, 0.6895, 0.732])
        rotate([90, 0, 0])
        cube(size = [17.7978, 0.6018, 0.8968], center = true);
      
        translate([0.647, 0.69, 9.5665])
        cylinder(h = 17.0668, r1 = 0.099, r2 = 0.099, center = true, $fn = 12);
      }
    }
  
    translate([2.2415, 0.69, 0.087])
    rotate([180, 90, 180])
    cylinder(h = 0.6028, r1 = 0.516, r2 = 0.516, center = true, $fn = 12);
  
    translate([2.5435, 0.517, 0.258])
    rotate([180, 90, 180])
    cylinder(h = 1.0348, r1 = 0.103, r2 = 0.103, center = true, $fn = 12);
  
    intersection() {
      translate([7.476, 3.966, -1.294])
      rotate([180, 90, 180])
      cylinder(h = 21.2458, r1 = 0.137, r2 = 0.137, center = true, $fn = 12);
    
      translate([-2.547, 0.957, -9.3515])
      cylinder(h = 17.4968, r1 = 3.711, r2 = 3.711, center = true, $fn = 12);
    }
  
    intersection() {
      translate([2.278, 0.1675, -0.217])
      rotate([180, 90, -90])
      cylinder(h = 0.3348, r1 = 0.438, r2 = 0.438, center = true, $fn = 12);
    
      translate([2.636, 0.691, -0.086])
      cylinder(h = 1.0338, r1 = 0.518, r2 = 0.518, center = true, $fn = 12);
    }
  
    intersection() {
      translate([-2.547, 0.957, -8.5335])
      cylinder(h = 19.1328, r1 = 3.711, r2 = 3.711, center = true, $fn = 12);
    
      union() {
        translate([0.647, 0, -0.0865])
        cylinder(h = 1.3788, r1 = 0.206, r2 = 0.206, center = true, $fn = 12);
      
        intersection() {
          translate([0.647, 0.69, 0.9045])
          cylinder(h = 0.2568, r1 = 0.346, r2 = 0.346, center = true, $fn = 12);
        
          translate([0.165545, -8.481, 9.48406])
          rotate([90, 1, 0])
          cube(size = [36.1998, 17.2288, 19.2378], center = true);
        }
      
        translate([0.647, 0.69, 0.3865])
        cylinder(h = 1.2908, r1 = 0.099, r2 = 0.099, center = true, $fn = 12);
      }
    }
  
    difference() {
      union() {
        translate([2.672, 0.685, 0.431])
        cube(size = [0.9478, 0.7018, 0.6898], center = true);
      
        translate([2.4565, 0.69, 0.087])
        rotate([180, 90, 180])
        cylinder(h = 0.5168, r1 = 0.516, r2 = 0.516, center = true, $fn = 12);
      }
    
      translate([2.8015, 9.05, 0.431])
      cube(size = [0.5169, 18.0999, 0.6899], center = true);
    }
  
    translate([2.8015, 0.518, 0.604])
    rotate([180, 90, 180])
    cylinder(h = 0.5168, r1 = 0.104, r2 = 0.104, center = true, $fn = 12);
  
    translate([2.371, -4.655, -1.121])
    cube(size = [0.6898, 0.6898, 1.0338], center = true);
  
    intersection() {
      translate([-2.9745, 0, -1.121])
      cube(size = [0.3448, 36.1998, 1.0338], center = true);
    
      union() {
        translate([-10.451, -2.5015, 0])
        cube(size = [15.2978, 4.3148, 36.1998], center = true);
      
        translate([-2.417, 0.332, -1.4655])
        cylinder(h = 0.3448, r1 = 3.581, r2 = 3.581, center = true, $fn = 12);
      }
    }
  
    difference() {
      union() {
        difference() {
          translate([-2.457, -2.672, -1.121])
          cube(size = [0.6898, 4.6558, 1.0338], center = true);
        
          translate([-2.457, -3.621, -9.3515])
          cylinder(h = 17.4969, r1 = 0.171, r2 = 0.171, center = true, $fn = 12);
        }
      
        translate([2.5435, -2.5015, -1.121])
        cube(size = [1.0348, 4.3148, 1.0338], center = true);
      }
    
      union() {
        translate([-0.0435, -2.327, -0.948])
        cube(size = [5.5169, 3.9659, 0.6899], center = true);
      
        translate([-2.457, -1.725, 0])
        cylinder(h = 36.1999, r1 = 0.171, r2 = 0.171, center = true, $fn = 12);
      }
    }
  
    translate([-2.801, -4.659, -1.121])
    cylinder(h = 1.0338, r1 = 0.341, r2 = 0.341, center = true, $fn = 12);
  
    translate([-0.0435, -2.932, -1.295])
    rotate([180, 90, 180])
    cylinder(h = 5.5168, r1 = 0.138, r2 = 0.138, center = true, $fn = 12);
  
    intersection() {
      union() {
        difference() {
          translate([-7.477, -0.1725, -0.948])
          cube(size = [21.2458, 0.3448, 0.6898], center = true);
        
          translate([-7.692, -0.353, -0.423])
          rotate([180, 90, 180])
          cylinder(h = 20.8159, r1 = 0.355, r2 = 0.355, center = true, $fn = 12);
        }
      
        intersection() {
          translate([2.278, 9.217, -0.217])
          rotate([180, 90, -90])
          cylinder(h = 17.7658, r1 = 0.438, r2 = 0.438, center = true, $fn = 12);
        
          translate([2.636, 0.691, -9.007])
          cylinder(h = 18.1858, r1 = 0.518, r2 = 0.518, center = true, $fn = 12);
        }
      
        translate([2.5005, 0.862, 0.259])
        rotate([180, 90, 180])
        cylinder(h = 1.1208, r1 = 0.103, r2 = 0.103, center = true, $fn = 12);
      
        translate([-7.5195, 0.1675, -1.121])
        cube(size = [21.1608, 0.3348, 1.0338], center = true);
      
        difference() {
          translate([-7.5195, 0.69, -0.1725])
          cube(size = [21.1608, 1.3798, 2.2408], center = true);
        
          translate([2.7585, 0.857, 8.749])
          cube(size = [0.4309, 1.0459, 18.7039], center = true);
        }
      }
    
      union() {
        translate([2.629, 9.217, 8.749])
        cube(size = [0.1718, 17.7658, 18.7038], center = true);
      
        difference() {
          translate([-8.08, 0.69, 0.088])
          rotate([180, 90, 180])
          cylinder(h = 20.0398, r1 = 0.138, r2 = 0.138, center = true, $fn = 12);
        
          translate([-2.417, 0.332, -0.086])
          cylinder(h = 1.0339, r1 = 3.581, r2 = 3.581, center = true, $fn = 12);
        }
      
        translate([2.3705, 0.334, 0.616])
        rotate([180, 90, 180])
        cylinder(h = 0.3448, r1 = 0.327, r2 = 0.327, center = true, $fn = 12);
      
        translate([2.8885, 0.3455, -1.121])
        cube(size = [0.3448, 1.3808, 1.0338], center = true);
      
        translate([2.9315, 0.685, 0.431])
        cube(size = [0.4308, 0.7018, 0.6898], center = true);
      
        translate([2.3705, 1.036, 0.609])
        rotate([180, 90, 180])
        cylinder(h = 0.3448, r1 = 0.34, r2 = 0.34, center = true, $fn = 12);
      
        translate([2.3705, 0.517, -0.6035])
        cube(size = [0.3448, 1.7238, 2.0688], center = true);
      }
    }
  
    translate([2.716, -4.657, -1.121])
    cylinder(h = 1.0338, r1 = 0.342, r2 = 0.342, center = true, $fn = 12);
  
    difference() {
      translate([-7.951, 0.69, -1.293])
      rotate([180, 90, 180])
      cylinder(h = 20.2978, r1 = 0.138, r2 = 0.138, center = true, $fn = 12);
    
      translate([-2.417, 0.332, -1.121])
      cylinder(h = 1.0339, r1 = 3.581, r2 = 3.581, center = true, $fn = 12);
    }
  
    intersection() {
      translate([-2.547, 0.957, -1.121])
      cylinder(h = 1.0338, r1 = 3.711, r2 = 3.711, center = true, $fn = 12);
    
      union() {
        translate([7.9085, 0.69, -1.293])
        rotate([180, 90, 180])
        cylinder(h = 20.3848, r1 = 0.138, r2 = 0.138, center = true, $fn = 12);
      
        translate([-2.9745, 2.3275, -1.121])
        cube(size = [0.3448, 5.3448, 1.0338], center = true);
      }
    }
  
    translate([2.3705, 0.685, -0.1725])
    cube(size = [0.3448, 0.7018, 2.2408], center = true);
  
    translate([-2.4565, 0.69, -0.431])
    cube(size = [0.3448, 1.3798, 1.7238], center = true);
  
    intersection() {
      translate([-2.547, 0.957, -0.086])
      cylinder(h = 1.0338, r1 = 3.711, r2 = 3.711, center = true, $fn = 12);
    
      translate([8.037, 0.69, 0.088])
      rotate([180, 90, 180])
      cylinder(h = 20.1258, r1 = 0.138, r2 = 0.138, center = true, $fn = 12);
    }
  
    translate([-2.4565, 0.334, 0.616])
    rotate([180, 90, 180])
    cylinder(h = 0.3448, r1 = 0.327, r2 = 0.327, center = true, $fn = 12);
  
    difference() {
      union() {
        difference() {
          translate([-2.63, 2.3275, -1.4655])
          cube(size = [1.0338, 5.3448, 0.3448], center = true);
        
          translate([-2.456, 2.071, -9.6965])
          cylinder(h = 16.8069, r1 = 0.172, r2 = 0.172, center = true, $fn = 12);
        }
      
        translate([-2.4565, 0.3455, -0.948])
        cube(size = [0.3448, 1.3808, 0.6898], center = true);
      
        difference() {
          translate([-2.63, 3.1895, -0.948])
          cube(size = [1.0338, 3.6208, 0.6898], center = true);
        
          translate([-2.547, 0.957, -0.948])
          cylinder(h = 0.6899, r1 = 3.711, r2 = 3.711, center = true, $fn = 12);
        }
      
        translate([-2.4565, 1.036, 0.609])
        rotate([180, 90, 180])
        cylinder(h = 0.3448, r1 = 0.34, r2 = 0.34, center = true, $fn = 12);
      
        translate([-2.3275, 0.69, 0.087])
        rotate([180, 90, 180])
        cylinder(h = 0.6028, r1 = 0.516, r2 = 0.516, center = true, $fn = 12);
      
        translate([-2.4565, 0.685, -0.1725])
        cube(size = [0.3448, 0.7018, 2.2408], center = true);
      }
    
      translate([-2.3705, -0.353, -0.423])
      rotate([180, 90, 180])
      cylinder(h = 0.5169, r1 = 0.355, r2 = 0.355, center = true, $fn = 12);
    }
  
    difference() {
      translate([-7.5195, 3.966, -1.294])
      rotate([180, 90, 180])
      cylinder(h = 21.1608, r1 = 0.137, r2 = 0.137, center = true, $fn = 12);
    
      translate([-2.547, 0.957, -9.3515])
      cylinder(h = 17.4969, r1 = 3.711, r2 = 3.711, center = true, $fn = 12);
    }
  
    translate([2.672, 0.862, 0.603])
    rotate([180, 90, 180])
    cylinder(h = 0.9478, r1 = 0.103, r2 = 0.103, center = true, $fn = 12);
  
    intersection() {
      translate([0.646, -8.5845, 0.261])
      rotate([180, 90, -90])
      cylinder(h = 19.0308, r1 = 1.381, r2 = 1.381, center = true, $fn = 12);
    
      union() {
        translate([9.1145, 0.3445, 0])
        rotate([90, 0, 0])
        cube(size = [17.9708, 1.5518, 0.2068], center = true);
      
        translate([0.646, 0, -8.9205])
        cylinder(h = 18.3588, r1 = 0.086, r2 = 0.086, center = true, $fn = 12);
      }
    
      translate([-2.417, 0.332, -8.7485])
      cylinder(h = 18.7028, r1 = 3.581, r2 = 3.581, center = true, $fn = 12);
    }
  
    intersection() {
      union() {
        translate([0.647, 9.1705, 0.086])
        rotate([90, 0, 0])
        cube(size = [0.6898, 0.6898, 17.8588], center = true);
      
        intersection() {
          translate([-2.547, 0.957, 0])
          cylinder(h = 1.5518, r1 = 3.711, r2 = 3.711, center = true, $fn = 12);
        
          translate([0.646, 1.0345, 0.261])
          rotate([180, 90, -90])
          cylinder(h = 0.2068, r1 = 1.381, r2 = 1.381, center = true, $fn = 12);
        }
      
        translate([0.646, 0.002, -0.086])
        cylinder(h = 0.6898, r1 = 0.346, r2 = 0.346, center = true, $fn = 12);
      }
    
      difference() {
        union() {
          translate([0.307, 1.0345, 0.596])
          rotate([180, 90, -90])
          cylinder(h = 0.2068, r1 = 0.181, r2 = 0.181, center = true, $fn = 12);
        
          translate([9.1145, -8.481, -0.0865])
          rotate([90, 0, 0])
          cube(size = [17.9708, 1.3788, 19.2378], center = true);
        }
      
        intersection() {
          translate([0.646, -8.5845, 0.261])
          rotate([180, 90, -90])
          cylinder(h = 19.0309, r1 = 1.381, r2 = 1.381, center = true, $fn = 12);
        
          translate([0.647, 0.69, -0.345])
          cylinder(h = 0.1719, r1 = 0.346, r2 = 0.346, center = true, $fn = 12);
        }
      }
    }
  
    translate([2.5435, 0.3455, -1.4655])
    cube(size = [1.0348, 1.3808, 0.3448], center = true);
  
    difference() {
      union() {
        translate([0.647, 1.0345, 0.6895])
        rotate([90, 0, 0])
        cube(size = [0.6898, 0.1728, 0.2068], center = true);
      
        translate([0.307, 0.3445, 0.596])
        rotate([180, 90, -90])
        cylinder(h = 0.2068, r1 = 0.181, r2 = 0.181, center = true, $fn = 12);
      }
    
      union() {
        translate([9.5455, 0.3445, 0.086])
        rotate([90, 0, 0])
        cube(size = [17.1089, 1.0339, 0.2069], center = true);
      
        translate([0.647, 1.0345, 0.517])
        rotate([90, 0, 0])
        cube(size = [0.6899, 0.1719, 0.2069], center = true);
      }
    }
  }
}
