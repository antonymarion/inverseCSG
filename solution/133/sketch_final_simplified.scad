intersection() {
  translate([-0.0005, 0, 0])
  cube(size = [4.6988, 3.0298, 11.9998], center = true);

  union() {
    intersection() {
      union() {
        difference() {
          translate([-3.896, 5.50978, 3.896])
          rotate([-135, -45, 0])
          cube(size = [36.1998, 20.6158, 36.1998], center = true);
        
          translate([0.064, -0.003, 7.0765])
          cube(size = [1.1619, 0.7799, 22.0469], center = true);
        }
      
        translate([-12.2086, -0.6765, -1.80418])
        rotate([90, 45, 0])
        cube(size = [21.4858, 16.3828, 0.5668], center = true);
      
        translate([-8.071, -0.0005, -4.4735])
        cube(size = [20.0578, 1.9188, 1.0528], center = true);
      }
    
      difference() {
        difference() {
          translate([0.539, -0.001, -3.7375])
          cylinder(h = 2.5248, r1 = 2.495, r2 = 2.495, center = true, $fn = 12);
        
          translate([9.3725, 0.0095, 6.55])
          cube(size = [17.4549, 1.2949, 23.0999], center = true);
        }
      
        difference() {
          translate([8.6905, 1.1115, -10.2875])
          cube(size = [18.8189, 0.3029, 15.6249], center = true);
        
          translate([1.71737, -5.50978, 9.50937])
          rotate([-135, -45, 0])
          cube(size = [20.323, 36.2, 20.616], center = true);
        }
      }
    
      union() {
        difference() {
          union() {
            translate([-0.0625, -1.1115, -3.7375])
            cube(size = [1.3128, 0.3028, 2.5248], center = true);
          
            translate([-12.2086, -0.151, -1.80418])
            rotate([90, 45, 0])
            cube(size = [21.4858, 16.3828, 2.2218], center = true);
          }
        
          translate([-12.2086, 0.0095, -1.80418])
          rotate([90, 45, 0])
          cube(size = [21.4859, 16.3829, 1.2949], center = true);
        }
      
        difference() {
          union() {
            translate([-7.00637, 0.152, -7.00637])
            rotate([90, 45, 0])
            cube(size = [36.1998, 16.3828, 2.2218], center = true);
          
            translate([-8.753, -0.0005, -3.211])
            cube(size = [18.6938, 2.5248, 1.4718], center = true);
          }
        
          union() {
            translate([1.049, -0.152, -4.4735])
            cube(size = [0.8079, 2.2219, 1.0529], center = true);
          
            translate([-8.071, -0.001, -3.947])
            rotate([180, 90, -180])
            cylinder(h = 20.0579, r1 = 0.639, r2 = 0.639, center = true, $fn = 12);
          }
        }
      }
    }
  
    difference() {
      intersection() {
        union() {
          difference() {
            translate([-0.845, 0, 0])
            cube(size = [0.7578, 2.0198, 36.1998], center = true);
          
            translate([-9.28416, 0, 3.37916])
            rotate([90, 20, 0])
            cube(size = [16.4399, 36.1999, 2.0199], center = true);
          }
        
          intersection() {
            translate([-0.133, 0.003, 7.8125])
            rotate([180, 0, 180])
            cylinder(h = 20.5748, r1 = 0.991, r2 = 0.991, center = true, $fn = 12);
          
            translate([-0.845, 0, 0])
            rotate([135, 0, 0])
            cube(size = [0.7578, 36.1998, 36.1998], center = true);
          }
        }
      
        translate([-5.42987, 8.545, -5.42987])
        rotate([90, 45, 0])
        cube(size = [36.1998, 20.8418, 19.1098], center = true);
      }
    
      union() {
        difference() {
          translate([7.72427, 8.545, -2.81141])
          rotate([90, 20, 0])
          cube(size = [19.7599, 36.1999, 19.1099], center = true);
        
          union() {
            translate([-0.133, 0.003, 7.8125])
            rotate([180, 0, 180])
            cylinder(h = 20.575, r1 = 0.991, r2 = 0.991, center = true, $fn = 12);
          
            translate([-9.283, 0, -7.6105])
            cube(size = [17.634, 36.2, 20.979], center = true);
          }
        }
      
        intersection() {
          union() {
            translate([8.0386, 8.545, -2.92581])
            rotate([90, 20, 0])
            cube(size = [19.0909, 36.1999, 19.1099], center = true);
          
            translate([8.438, 0.0095, 10.4515])
            cube(size = [19.3239, 1.2949, 15.2969], center = true);
          }
        
          translate([0, 0.000353553, -10.7399])
          rotate([135, 0, 0])
          cube(size = [36.1999, 21.0109, 21.0099], center = true);
        }
      }
    }
  
    difference() {
      intersection() {
        union() {
          difference() {
            translate([-9.283, 0, -7.6105])
            cube(size = [17.6338, 2.0198, 20.9788], center = true);
          
            translate([-0.133, 0.003, -7.6485])
            rotate([180, 0, 180])
            cylinder(h = 20.9029, r1 = 0.991, r2 = 0.991, center = true, $fn = 12);
          }
        
          intersection() {
            translate([-9.28416, 9.3785, 3.37916])
            rotate([90, 20, 0])
            cube(size = [16.4398, 36.1998, 17.4428], center = true);
          
            translate([-9.662, -5.36977, -5.36977])
            rotate([135, 0, 0])
            cube(size = [16.8758, 36.1998, 21.0098], center = true);
          }
        }
      
        union() {
          difference() {
            translate([7.72427, 0, -2.81141])
            rotate([90, 20, 0])
            cube(size = [19.7598, 36.1998, 2.0198], center = true);
          
            translate([-9.283, -8.7215, -3.211])
            cube(size = [17.6339, 18.7569, 1.4719], center = true);
          }
        
          difference() {
            translate([0.539, -0.001, -3.211])
            cylinder(h = 1.4718, r1 = 2.495, r2 = 2.495, center = true, $fn = 12);
          
            translate([0, -0.001, -3.947])
            rotate([180, 90, -180])
            cylinder(h = 36.1999, r1 = 0.639, r2 = 0.639, center = true, $fn = 12);
          }
        }
      }
    
      union() {
        difference() {
          translate([-9.283, 0.000353553, -10.7399])
          rotate([135, 0, 0])
          cube(size = [17.6339, 21.0109, 21.0099], center = true);
        
          translate([0.539, -0.001, -0.534])
          cylinder(h = 6.826, r1 = 2.495, r2 = 2.495, center = true, $fn = 12);
        }
      
        translate([-0.133, 0.003, -11.0235])
        rotate([180, 0, 180])
        cylinder(h = 14.1529, r1 = 0.991, r2 = 0.991, center = true, $fn = 12);
      
        translate([-0.845, 0, 0.202])
        cube(size = [0.7579, 2.0199, 5.3539], center = true);
      }
    }
  
    intersection() {
      union() {
        translate([-11.0813, -5.50978, -3.28927])
        rotate([-135, -45, 0])
        cube(size = [15.8768, 36.1998, 20.6158], center = true);
      
        translate([-7.18527, 0.0005, -7.18527])
        rotate([90, 45, 0])
        cube(size = [36.1998, 15.8768, 1.9188], center = true);
      
        translate([6.20309, 0.8085, -8.9898])
        rotate([90, 45, 0])
        cube(size = [14.7138, 0.5048, 0.3028], center = true);
      
        translate([-0.037, -9.6815, -4.4735])
        cube(size = [1.3638, 16.8368, 1.0528], center = true);
      
        difference() {
          translate([6.20309, -0.2865, -8.9898])
          rotate([90, 45, 0])
          cube(size = [14.7138, 0.5048, 1.3468], center = true);
        
          translate([9.3725, -0.125, -10.2875])
          cube(size = [17.4549, 1.0259, 15.6249], center = true);
        }
      }
    
      union() {
        difference() {
          translate([-9.4095, -1.1115, -4.4735])
          cube(size = [17.3808, 0.3028, 1.0528], center = true);
        
          translate([-14.9773, -8.88178e-16, 0.606734])
          rotate([-135, -45, 0])
          cube(size = [15.8769, 20.6159, 20.6159], center = true);
        }
      
        translate([-0.037, 1.1115, -10.2875])
        cube(size = [1.3638, 0.3028, 15.6248], center = true);
      
        translate([-9.18535, -8.88178e-16, 6.39865])
        rotate([-135, -45, 0])
        cube(size = [0.5048, 20.6158, 20.6158], center = true);
      
        translate([-0.135354, -12.7986, -2.65135])
        rotate([-135, -45, 0])
        cube(size = [0.5048, 15.5838, 20.6158], center = true);
      
        translate([1.7055, -0.7995, -4.4735])
        cube(size = [0.5048, 0.3208, 1.0528], center = true);
      
        translate([6.87137, 12.7986, 4.35537])
        rotate([-135, -45, 0])
        cube(size = [20.3228, 20.6158, 15.5838], center = true);
      }
    }
  }
}
