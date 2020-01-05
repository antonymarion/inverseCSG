intersection() {
  cube(size = [10.2397, 11.9997, 1.1197], center = true);

  union() {
    difference() {
      difference() {
        union() {
          translate([3.9245, -2.3755, 0.1995])
          cube(size = [0.6827, 3.8707, 0.5327], center = true);
        
          translate([4.532, -0.502, -0.0005])
          cylinder(h = 0.9327, r1 = 2.858, r2 = 2.858, center = true, $fn = 12);
        
          translate([3.583, -4.317, -0.0005])
          cylinder(h = 0.9327, r1 = 0.689, r2 = 0.689, center = true, $fn = 12);
        }
      
        translate([3.471, -3.134, 9.0165])
        cylinder(h = 18.1668, r1 = 0.264, r2 = 0.264, center = true, $fn = 12);
      }
    
      difference() {
        union() {
          translate([3.468, -4.174, 8.8165])
          cylinder(h = 18.5668, r1 = 0.334, r2 = 0.334, center = true, $fn = 12);
        
          translate([4.532, -0.502, 0.1995])
          cylinder(h = 0.5328, r1 = 2.858, r2 = 2.858, center = true, $fn = 12);
        
          translate([10.9165, 6.894, -0.267])
          cube(size = [14.3668, 22.4098, 0.3998], center = true);
        }
      
        translate([3.9995, 8.83, 8.8835])
        cube(size = [0.5329, 18.5399, 18.4329], center = true);
      }
    }
  
    intersection() {
      difference() {
        difference() {
          translate([2.707, 3.4265, 0])
          cube(size = [3.1197, 3.1467, 36.1997], center = true);
        
          translate([3.467, 4.175, 0])
          cylinder(h = 36.1998, r1 = 0.334, r2 = 0.334, center = true, $fn = 12);
        }
      
        translate([-0.011, 0.705, -9.0835])
        cylinder(h = 18.0328, r1 = 3.874, r2 = 3.874, center = true, $fn = 12);
      }
    
      union() {
        translate([3.9995, 3.0845, -0.0005])
        cube(size = [0.5327, 2.4627, 0.9327], center = true);
      
        translate([0.126, 10.6865, -0.267])
        cube(size = [7.2137, 14.8267, 0.3997], center = true);
      
        translate([9.6235, 3.9245, 0.1995])
        cube(size = [16.9527, 0.7827, 0.5327], center = true);
      }
    }
  
    difference() {
      translate([2.6405, 2.563, -0.267])
      cube(size = [2.9867, 1.4197, 0.3997], center = true);
    
      translate([-0.011, 0.705, -0.267])
      cylinder(h = 0.3998, r1 = 3.874, r2 = 3.874, center = true, $fn = 12);
    }
  
    difference() {
      intersection() {
        translate([-4.354, 6.388, 8.8165])
        cylinder(h = 18.5667, r1 = 6.195, r2 = 6.195, center = true, $fn = 12);
      
        difference() {
          union() {
            translate([-3.59, 4.316, -0.0005])
            cylinder(h = 0.9327, r1 = 0.683, r2 = 0.683, center = true, $fn = 12);
          
            translate([6.9165, 3.0845, -0.267])
            cube(size = [22.3667, 2.4627, 0.3997], center = true);
          }
        
          translate([-0.011, 0.705, -9.0835])
          cylinder(h = 18.0328, r1 = 3.874, r2 = 3.874, center = true, $fn = 12);
        }
      }
    
      translate([-3.467, 4.174, 0])
      cylinder(h = 36.1998, r1 = 0.334, r2 = 0.334, center = true, $fn = 12);
    }
  
    difference() {
      union() {
        translate([9.6235, 4.1365, -0.0005])
        cube(size = [16.9527, 1.7267, 0.9327], center = true);
      
        intersection() {
          translate([4.2335, -8.1235, -0.267])
          cube(size = [0.0667, 19.9527, 0.3997], center = true);
        
          translate([4.532, -0.502, -9.0835])
          cylinder(h = 18.0327, r1 = 2.858, r2 = 2.858, center = true, $fn = 12);
        }
      
        translate([2.799, 0.734, -0.1335])
        cylinder(h = 0.6667, r1 = 0.346, r2 = 0.346, center = true, $fn = 12);
      
        intersection() {
          translate([2.4405, -7.2835, 8.8165])
          cube(size = [2.5867, 21.6327, 18.5667], center = true);
        
          union() {
            translate([-0.001, 0.702, -0.267])
            cylinder(h = 0.3997, r1 = 3.463, r2 = 3.463, center = true, $fn = 12);
          
            translate([2.802, 0.736, -8.8165])
            cylinder(h = 18.5667, r1 = 0.253, r2 = 0.253, center = true, $fn = 12);
          }
        }
      }
    
      union() {
        difference() {
          translate([2.3655, 3.7945, -8.8165])
          cube(size = [2.4368, 1.0428, 18.5668], center = true);
        
          translate([-4.354, 6.388, -0.1335])
          cylinder(h = 0.6669, r1 = 6.195, r2 = 6.195, center = true, $fn = 12);
        }
      
        translate([3.467, 4.175, 8.8165])
        cylinder(h = 18.5668, r1 = 0.334, r2 = 0.334, center = true, $fn = 12);
      
        translate([3.472, 3.273, 8.8165])
        cylinder(h = 18.5668, r1 = 0.258, r2 = 0.258, center = true, $fn = 12);
      
        difference() {
          translate([10.9165, 4.1365, 0])
          cube(size = [14.3668, 1.7268, 36.1998], center = true);
        
          translate([3.606, 4.341, 0])
          cylinder(h = 36.1999, r1 = 0.657, r2 = 0.657, center = true, $fn = 12);
        }
      }
    }
  
    intersection() {
      union() {
        translate([-3.575, -4.311, 0])
        cylinder(h = 36.1997, r1 = 0.699, r2 = 0.699, center = true, $fn = 12);
      
        difference() {
          translate([-3.874, 6.894, -0.267])
          cube(size = [0.7857, 22.4097, 0.3997], center = true);
        
          translate([-0.011, 0.705, -9.0835])
          cylinder(h = 18.0328, r1 = 3.874, r2 = 3.874, center = true, $fn = 12);
        }
      
        translate([0.051, -1.7925, -0.0005])
        cube(size = [7.0637, 2.7047, 0.9327], center = true);
      
        translate([-4.0005, 6.894, 0.1995])
        cube(size = [0.5327, 22.4097, 0.5327], center = true);
      
        translate([-2.801, 0.733, 9.15])
        cylinder(h = 17.8997, r1 = 0.253, r2 = 0.253, center = true, $fn = 12);
      
        translate([-0.0745, -4.2, -0.0005])
        cube(size = [7.3167, 1.5997, 0.9327], center = true);
      }
    
      difference() {
        difference() {
          union() {
            translate([-6.61, -2.031, -0.0005])
            cylinder(h = 0.9327, r1 = 6.199, r2 = 6.199, center = true, $fn = 12);
          
            translate([-0.342, -10.6225, -0.0005])
            cube(size = [7.8497, 14.9547, 0.9327], center = true);
          }
        
          union() {
            translate([-4.1665, 8.83, -0.4005])
            cube(size = [0.0668, 18.5398, 0.1328], center = true);
          
            translate([-3.467, -4.174, -8.8165])
            cylinder(h = 18.5668, r1 = 0.332, r2 = 0.332, center = true, $fn = 12);
          }
        }
      
        union() {
          translate([3.583, -4.317, 8.8165])
          cylinder(h = 18.5668, r1 = 0.689, r2 = 0.689, center = true, $fn = 12);
        
          translate([0.051, -1.92, 0.0665])
          cube(size = [7.0638, 2.9598, 0.2668], center = true);
        
          difference() {
            translate([0.051, -1.7925, 0.3335])
            cube(size = [7.0638, 2.7048, 0.2668], center = true);
          
            translate([-2.8, -2.602, 9.0165])
            cylinder(h = 18.1669, r1 = 0.252, r2 = 0.252, center = true, $fn = 12);
          }
        }
      }
    }
  
    difference() {
      union() {
        translate([-0.001, 0.702, -0.267])
        cylinder(h = 0.3997, r1 = 3.463, r2 = 3.463, center = true, $fn = 12);
      
        translate([-2.8, -2.6, -0.1335])
        cylinder(h = 0.6667, r1 = 0.346, r2 = 0.346, center = true, $fn = 12);
      
        translate([-3.6065, -3.2725, 0.1995])
        cube(size = [0.2527, 0.2547, 0.5327], center = true);
      
        translate([-2.6395, 7.35, -0.267])
        cube(size = [2.9867, 21.4997, 0.3997], center = true);
      
        translate([-4.354, 6.388, 8.8835])
        cylinder(h = 18.4327, r1 = 6.195, r2 = 6.195, center = true, $fn = 12);
      
        translate([1.218, -3.2725, -0.267])
        cube(size = [4.7297, 0.2547, 0.3997], center = true);
      }
    
      difference() {
        union() {
          translate([8.4765, 7.4775, -8.95])
          cube(size = [19.2468, 21.2448, 18.2998], center = true);
        
          translate([-3.481, -3.145, 9.0165])
          cylinder(h = 18.1668, r1 = 0.249, r2 = 0.249, center = true, $fn = 12);
        
          translate([-4.354, 6.388, 8.8165])
          cylinder(h = 18.5668, r1 = 6.195, r2 = 6.195, center = true, $fn = 12);
        }
      
        intersection() {
          union() {
            translate([-0.001, 0.702, -9.0835])
            cylinder(h = 18.0329, r1 = 3.463, r2 = 3.463, center = true, $fn = 12);
          
            translate([-2.8, 0.731, 9.0165])
            cylinder(h = 18.1669, r1 = 0.346, r2 = 0.346, center = true, $fn = 12);
          }
        
          union() {
            translate([-9.6235, 7.4775, -8.95])
            cube(size = [16.9529, 21.2449, 18.2999], center = true);
          
            translate([7.1835, -1.92, -8.95])
            cube(size = [21.8329, 2.9599, 18.2999], center = true);
          }
        }
      }
    }
  
    intersection() {
      translate([-0.001, 0.702, -0.267])
      cylinder(h = 0.3997, r1 = 3.463, r2 = 3.463, center = true, $fn = 12);
    
      translate([0.051, 3.4265, -0.267])
      cube(size = [7.0637, 3.1467, 0.3997], center = true);
    }
  
    difference() {
      union() {
        difference() {
          translate([-6.9165, -2.3755, -0.267])
          cube(size = [22.3667, 3.8707, 0.3997], center = true);
        
          translate([-0.011, 0.705, 8.8165])
          cylinder(h = 18.5668, r1 = 3.874, r2 = 3.874, center = true, $fn = 12);
        }
      
        translate([2.799, -2.6, 0.3335])
        cylinder(h = 0.2667, r1 = 0.253, r2 = 0.253, center = true, $fn = 12);
      
        translate([3.9995, -2.3755, 0.067])
        cube(size = [0.5327, 3.8707, 0.7997], center = true);
      
        translate([2.801, -2.601, 0.0665])
        cylinder(h = 0.2667, r1 = 0.346, r2 = 0.346, center = true, $fn = 12);
      }
    
      union() {
        translate([3.468, -4.174, 8.8165])
        cylinder(h = 18.5668, r1 = 0.334, r2 = 0.334, center = true, $fn = 12);
      
        translate([-6.61, -2.031, -0.267])
        cylinder(h = 0.3998, r1 = 6.199, r2 = 6.199, center = true, $fn = 12);
      }
    }
  
    difference() {
      union() {
        translate([4.532, -0.502, -0.267])
        cylinder(h = 0.3997, r1 = 2.858, r2 = 2.858, center = true, $fn = 12);
      
        translate([-1.1675, 4.2665, -0.0005])
        cube(size = [4.6267, 1.4667, 0.9327], center = true);
      }
    
      union() {
        translate([11.1165, 0, -0.0005])
        cube(size = [13.9668, 36.1998, 0.9328], center = true);
      
        translate([-3.59, 4.316, 0])
        cylinder(h = 36.1998, r1 = 0.683, r2 = 0.683, center = true, $fn = 12);
      }
    }
  
    difference() {
      difference() {
        union() {
          translate([-3.874, 3.7945, 0.1995])
          cube(size = [0.7857, 1.0427, 0.5327], center = true);
        
          intersection() {
            translate([-4.354, 6.388, 8.8165])
            cylinder(h = 18.5667, r1 = 6.195, r2 = 6.195, center = true, $fn = 12);
          
            translate([7.3095, 3.0845, -9.0835])
            cube(size = [21.5807, 2.4627, 18.0327], center = true);
          }
        }
      
        intersection() {
          translate([6.9165, -6.892, -8.8165])
          cube(size = [22.3668, 22.4158, 18.5668], center = true);
        
          union() {
            translate([-3.451, 3.251, 0.1995])
            cylinder(h = 0.5328, r1 = 0.288, r2 = 0.288, center = true, $fn = 12);
          
            translate([-6.61, -2.031, -0.267])
            cylinder(h = 0.3998, r1 = 6.199, r2 = 6.199, center = true, $fn = 12);
          }
        }
      }
    
      translate([-3.467, 4.174, 8.8165])
      cylinder(h = 18.5668, r1 = 0.334, r2 = 0.334, center = true, $fn = 12);
    }
  }
}
