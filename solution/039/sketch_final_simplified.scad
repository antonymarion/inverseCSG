intersection() {
  translate([0, -0.0005, -0.0005])
  cube(size = [11.9978, 11.4908, 4.7228], center = true);

  union() {
    intersection() {
      translate([-0.114434, 0.0238884, 1.48277])
      rotate([-0, 89, -89])
      cylinder(h = 36.1978, r1 = 2.733, r2 = 2.733, center = true, $fn = 12);
    
      translate([7.196, -3.6645, -1.2855])
      cube(size = [21.8058, 1.4508, 0.3708], center = true);
    }
  
    difference() {
      difference() {
        translate([3.8915, -0.7205, 8.0655])
        cube(size = [2.2148, 8.1348, 20.0668], center = true);
      
        translate([3.2455, -3.052, 0.2365])
        cube(size = [0.9239, 2.6769, 2.6699], center = true);
      }
    
      difference() {
        difference() {
          difference() {
            translate([1.1085, 6.6555, 8.0655])
            cube(size = [7.7819, 22.8879, 20.0679], center = true);
          
            translate([-7.196, -3.052, -1.0995])
            cube(size = [21.808, 2.678, 1.739], center = true);
          }
        
          union() {
            translate([4.171, -4.554, 0.0495])
            cylinder(h = 3.043, r1 = 0.228, r2 = 0.228, center = true, $fn = 12);
          
            translate([3.452, -4.528, -8.2645])
            cylinder(h = 19.671, r1 = 0.261, r2 = 0.261, center = true, $fn = 12);
          }
        }
      
        union() {
          translate([4.148, -1.694, 0.0495])
          cylinder(h = 3.043, r1 = 0.256, r2 = 0.256, center = true, $fn = 12);
        
          translate([3.9295, -3.1145, 0.6705])
          cube(size = [0.443, 3.349, 1.801], center = true);
        
          translate([11.4135, -0.702, 1.515])
          rotate([180, 90, 180])
          cylinder(h = 13.373, r1 = 0.453, r2 = 0.453, center = true, $fn = 12);
        
          translate([3.8085, -3.1145, -0.851])
          cube(size = [0.687, 3.349, 1.242], center = true);
        }
      }
    }
  
    translate([-3.47, -4.552, -1.534])
    cylinder(h = 0.8678, r1 = 0.233, r2 = 0.233, center = true, $fn = 12);
  
    intersection() {
      union() {
        translate([0.3405, 3.3105, -1.7205])
        cube(size = [6.2448, 0.6688, 0.4948], center = true);
      
        translate([3.8085, -7.376, 8.0655])
        cube(size = [0.6848, 21.4458, 20.0668], center = true);
      }
    
      union() {
        translate([3.5865, 1.9595, -9.5995])
        cube(size = [0.2408, 3.3708, 16.9988], center = true);
      
        translate([0.4625, 3.3105, -9.165])
        cube(size = [6.4888, 0.6688, 17.8678], center = true);
      }
    }
  
    difference() {
      translate([-3.2455, -3.8635, -1.534])
      cube(size = [0.9228, 1.8488, 0.8678], center = true);
    
      translate([-3.572, -11.327, -1.7205])
      cube(size = [0.2709, 13.5449, 0.4959], center = true);
    }
  
    translate([-4.056, -3.746, 0.0495])
    cube(size = [0.6938, 1.6138, 3.0408], center = true);
  
    translate([-3.469, -4.59, 0.0495])
    cube(size = [1.3718, 0.3958, 3.0408], center = true);
  
    difference() {
      union() {
        translate([-4.2805, -1.577, -1.348])
        cube(size = [0.2448, 0.2718, 1.2398], center = true);
      
        translate([-3.458, 3.397, -1.534])
        cylinder(h = 0.8678, r1 = 0.249, r2 = 0.249, center = true, $fn = 12);
      
        translate([-3.1095, 1.103, -1.534])
        cube(size = [0.6508, 5.0838, 0.8678], center = true);
      
        intersection() {
          union() {
            translate([7.196, -1.3325, 8.0655])
            cube(size = [21.8058, 3.2088, 20.0668], center = true);
          
            translate([-11.1285, 0.0185, 8.935])
            cube(size = [13.9408, 5.9108, 18.3278], center = true);
          }
        
          union() {
            translate([-4.8635, -0.702, 1.515])
            rotate([180, 90, 180])
            cylinder(h = 0.2708, r1 = 0.453, r2 = 0.453, center = true, $fn = 12);
          
            translate([-3.602, -0.701, -1.0995])
            rotate([180, 0, 180])
            cylinder(h = 1.7368, r1 = 0.992, r2 = 0.992, center = true, $fn = 12);
          }
        }
      
        translate([-3.7955, 3.497, 0.0495])
        cube(size = [0.7188, 0.2958, 3.0408], center = true);
      }
    
      union() {
        difference() {
          difference() {
            translate([-3.92, -0.7205, -1.348])
            cube(size = [0.9669, 1.9859, 1.2409], center = true);
          
            translate([-3.436, -1.714, -1.7205])
            cylinder(h = 0.497, r1 = 0.285, r2 = 0.285, center = true, $fn = 12);
          }
        
          union() {
            translate([-3.7955, -0.7205, 0.0495])
            cube(size = [0.721, 1.987, 3.043], center = true);
          
            translate([-4.157, -1.687, 8.314])
            cylinder(h = 19.572, r1 = 0.246, r2 = 0.246, center = true, $fn = 12);
          }
        }
      
        translate([-3.606, -0.701, -1.0995])
        rotate([180, 0, 180])
        cylinder(h = 1.7379, r1 = 0.747, r2 = 0.747, center = true, $fn = 12);
      }
    }
  
    intersection() {
      union() {
        translate([3.45, 0.294, -1.7205])
        cylinder(h = 0.4948, r1 = 0.264, r2 = 0.264, center = true, $fn = 12);
      
        translate([4.151, 0.293, 0.0495])
        cylinder(h = 3.0408, r1 = 0.257, r2 = 0.257, center = true, $fn = 12);
      
        difference() {
          translate([0.684, 4.068, 0.0495])
          cube(size = [6.9318, 1.4378, 3.0408], center = true);
        
          translate([0.002, -6.656, 1.56])
          rotate([180, 90, -90])
          cylinder(h = 22.8869, r1 = 1.483, r2 = 1.483, center = true, $fn = 12);
        }
      }
    
      union() {
        translate([-6.848, 1.841, -9.165])
        cube(size = [22.5018, 3.6078, 17.8678], center = true);
      
        intersection() {
          translate([-0.001, 4.068, 1.568])
          rotate([180, 90, -90])
          cylinder(h = 1.4378, r1 = 2.107, r2 = 2.107, center = true, $fn = 12);
        
          translate([0.004, 3.07, 1.571])
          sphere(r = 2.6108, $fn = 12);
        }
      
        translate([-0.004, 1.418, 1.584])
        sphere(r = 3.4288, $fn = 12);
      }
    }
  
    intersection() {
      union() {
        translate([0.684, -8.9135, -1.0995])
        cube(size = [6.9318, 18.3708, 1.7368], center = true);
      
        translate([3.465, 3.397, -9.786])
        cylinder(h = 16.6258, r1 = 0.244, r2 = 0.244, center = true, $fn = 12);
      }
    
      union() {
        translate([10.7825, 0.1545, 0.0495])
        cube(size = [14.6328, 0.2348, 3.0408], center = true);
      
        translate([-7.196, 1.9595, -0.199])
        cube(size = [21.8058, 3.3708, 3.5378], center = true);
      }
    }
  
    difference() {
      union() {
        translate([-3.2455, 0.0185, -1.534])
        cube(size = [0.9228, 5.9108, 0.8678], center = true);
      
        translate([-3.606, -0.701, 0.422])
        rotate([180, 0, 180])
        cylinder(h = 2.2958, r1 = 0.747, r2 = 0.747, center = true, $fn = 12);
      
        translate([-3.469, 3.3105, -0.199])
        cube(size = [1.3718, 0.6688, 3.5378], center = true);
      
        translate([-4.156, 3.396, 0.0495])
        rotate([180, 0, 180])
        cylinder(h = 3.0408, r1 = 0.248, r2 = 0.248, center = true, $fn = 12);
      
        translate([-4.056, 0.205, 0.0495])
        cube(size = [0.6938, 6.2838, 3.0408], center = true);
      
        translate([-4.354, -0.702, 1.125])
        rotate([180, 90, 180])
        cylinder(h = 1.2898, r1 = 0.448, r2 = 0.448, center = true, $fn = 12);
      }
    
      union() {
        difference() {
          translate([-3.2455, -0.5835, -1.348])
          cube(size = [0.9239, 1.7119, 1.2409], center = true);
        
          translate([-3.451, 0.286, -9.5995])
          cylinder(h = 17.001, r1 = 0.257, r2 = 0.257, center = true, $fn = 12);
        }
      
        translate([-3.604, -0.702, 8.6865])
        rotate([180, 0, 180])
        cylinder(h = 18.8259, r1 = 0.428, r2 = 0.428, center = true, $fn = 12);
      
        translate([-10.904, -0.702, -1.348])
        cube(size = [14.3909, 1.4749, 1.2409], center = true);
      
        difference() {
          union() {
            translate([-4.2805, -0.7205, -1.348])
            cube(size = [0.2459, 1.9859, 1.2409], center = true);
          
            translate([-3.92, 8.193, -1.7205])
            cube(size = [0.9669, 19.8129, 0.4959], center = true);
          }
        
          union() {
            translate([-3.2455, 1.692, -1.534])
            cube(size = [0.925, 3.312, 0.87], center = true);
          
            translate([-4.162, 0.273, -1.348])
            cylinder(h = 1.242, r1 = 0.237, r2 = 0.237, center = true, $fn = 12);
          }
        }
      }
    }
  
    difference() {
      union() {
        difference() {
          translate([0.3405, 1.841, 0.0495])
          cube(size = [6.2448, 3.6078, 3.0408], center = true);
        
          translate([0.001, 2.412, 1.561])
          rotate([180, 90, -90])
          cylinder(h = 4.7509, r1 = 1.958, r2 = 1.958, center = true, $fn = 12);
        }
      
        translate([3.8085, 3.3105, 0.0495])
        cube(size = [0.6848, 0.6688, 3.0408], center = true);
      
        translate([4.164, 3.407, 0.0495])
        cylinder(h = 3.0408, r1 = 0.236, r2 = 0.236, center = true, $fn = 12);
      
        translate([4.056, 1.8105, 0.0495])
        cube(size = [0.6938, 3.0728, 3.0408], center = true);
      }
    
      translate([0.3405, 1.5055, 0.0495])
      cube(size = [6.2459, 2.9379, 3.0419], center = true);
    }
  
    difference() {
      union() {
        translate([4.056, -0.603, 0.0495])
        cube(size = [0.6938, 7.8998, 3.0408], center = true);
      
        translate([4.2325, -0.702, 1.125])
        rotate([180, 90, 180])
        cylinder(h = 1.5328, r1 = 0.448, r2 = 0.448, center = true, $fn = 12);
      
        difference() {
          translate([0.3405, -3.8635, -0.199])
          cube(size = [6.2448, 1.8488, 3.5378], center = true);
        
          translate([-7.196, -3.6645, -0.664])
          cube(size = [21.8069, 1.4519, 0.8689], center = true);
        }
      
        translate([0.4625, -0.7205, 0.6705])
        cube(size = [6.4888, 8.1348, 1.7988], center = true);
      
        translate([3.5935, 0.817, -1.534])
        cube(size = [1.6188, 5.0598, 0.8678], center = true);
      
        translate([3.603, -0.704, -1.0995])
        rotate([180, 0, 180])
        cylinder(h = 1.7368, r1 = 0.994, r2 = 0.994, center = true, $fn = 12);
      }
    
      union() {
        difference() {
          translate([10.7825, 0.817, -9.4135])
          cube(size = [14.6339, 5.0609, 17.3719], center = true);
        
          translate([3.451, -1.694, 8.0655])
          cylinder(h = 20.069, r1 = 0.26, r2 = 0.26, center = true, $fn = 12);
        }
      
        translate([3.605, -0.703, -9.4135])
        cylinder(h = 17.3719, r1 = 0.747, r2 = 0.747, center = true, $fn = 12);
      
        difference() {
          translate([-7.196, 6.8545, 8.935])
          cube(size = [21.8069, 22.4899, 18.3289], center = true);
        
          translate([3.605, -0.703, 0.422])
          cylinder(h = 2.298, r1 = 0.747, r2 = 0.747, center = true, $fn = 12);
        }
      
        translate([-0.114434, 0.0238884, 1.48277])
        rotate([-0, 89, -89])
        cylinder(h = 36.1989, r1 = 2.733, r2 = 2.733, center = true, $fn = 12);
      
        translate([3.603, -0.701, -8.2645])
        rotate([180, 0, 180])
        cylinder(h = 19.6699, r1 = 0.428, r2 = 0.428, center = true, $fn = 12);
      
        translate([11.252, -0.5215, -1.0995])
        cube(size = [13.6949, 7.7379, 1.7379], center = true);
      }
    }
  
    translate([-4.139, -4.525, 0.0495])
    rotate([180, 0, 180])
    cylinder(h = 3.0408, r1 = 0.269, r2 = 0.269, center = true, $fn = 12);
  }
}
