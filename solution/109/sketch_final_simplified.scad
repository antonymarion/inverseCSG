intersection() {
  translate([0, 0.0005, 0])
  cube(size = [11.9998, 8.2008, 1.2838], center = true);

  union() {
    intersection() {
      translate([6.55, -2.3255, -0.4365])
      cube(size = [23.0998, 2.1828, 0.1968], center = true);
    
      union() {
        translate([-6.36213, 7.3188, -8.7825])
        rotate([-180, 0, 41])
        cube(size = [36.1998, 16.8048, 18.6348], center = true);
      
        intersection() {
          translate([-6.07303, -6.51253, -0.281133])
          rotate([-1, 0, -43])
          cube(size = [36.1998, 18.4028, 0.1968], center = true);
        
          translate([8.3515, -1.506, -0.4365])
          cube(size = [19.4968, 0.5458, 0.1968], center = true);
        }
      
        translate([0.0347711, -0.0399996, -9.219])
        rotate([-180, 0, 41])
        cube(size = [36.1998, 0.3698, 17.7618], center = true);
      }
    }
  
    intersection() {
      union() {
        difference() {
          translate([6.37694, -7.33583, 0.339433])
          rotate([178, 0, 41])
          cube(size = [36.1998, 16.7478, 36.1998], center = true);
        
          translate([-6.55, -9.94, -8.7825])
          cube(size = [23.0999, 16.3199, 18.6349], center = true);
        }
      
        intersection() {
          translate([-6.17757, -6.62463, -9.0623])
          rotate([-1, 0, -43])
          cube(size = [36.1998, 18.4028, 17.7618], center = true);
        
          translate([5.85252, 6.73255, 0.623797])
          rotate([4, 0, -41])
          cube(size = [36.1998, 18.3128, 36.1998], center = true);
        }
      }
    
      difference() {
        union() {
          translate([1.47873, -1.76229, -0.4365])
          rotate([-180, 0, 40])
          cube(size = [36.1998, 4.3688, 0.1968], center = true);
        
          translate([-6.703, 0.022, 0])
          cube(size = [22.7938, 2.9038, 1.0698], center = true);
        }
      
        union() {
          translate([11.55, 0, 0])
          cube(size = [13.0999, 6.8339, 1.0699], center = true);
        
          translate([-6.801, 0.2945, 0])
          cube(size = [22.5979, 3.0569, 1.0699], center = true);
        }
      }
    }
  
    intersection() {
      union() {
        translate([-0.888632, 1.02225, -0.4365])
        rotate([-180, 0, 41])
        cube(size = [36.1998, 0.1188, 0.1968], center = true);
      
        translate([8.3515, 0, -0.4365])
        cube(size = [19.4968, 36.1998, 0.1968], center = true);
      
        difference() {
          translate([-7.25868, -8.65056, -0.4365])
          rotate([0, 0, -40])
          cube(size = [36.1998, 13.6148, 0.1968], center = true);
        
          translate([-4.531, -2.948, -0.4365])
          cylinder(h = 0.1969, r1 = 0.196, r2 = 0.196, center = true, $fn = 12);
        }
      }
    
      union() {
        translate([6.37694, -7.33583, 0.339433])
        rotate([178, 0, 41])
        cube(size = [36.1998, 16.7478, 36.1998], center = true);
      
        translate([-0.506806, 0.583013, 1.11022e-16])
        rotate([-180, 0, 41])
        cube(size = [36.1998, 1.2828, 1.0698], center = true);
      }
    
      difference() {
        translate([6.55, 7.3415, -8.7825])
        cube(size = [23.0998, 21.5168, 18.6348], center = true);
      
        translate([5.4654, 6.28723, 0.582536])
        rotate([4, 0, -41])
        cube(size = [36.1999, 19.4979, 36.1999], center = true);
      }
    }
  
    intersection() {
      translate([2.369, -1.271, -0.4365])
      cylinder(h = 0.1968, r1 = 0.808, r2 = 0.808, center = true, $fn = 12);
    
      translate([2.38988, -2.84815, 8.7825])
      rotate([-180, 0, 40])
      cube(size = [36.1998, 1.5338, 18.6348], center = true);
    }
  
    intersection() {
      union() {
        translate([-2.926, 2.347, -0.4365])
        cube(size = [4.1478, 2.1398, 0.1968], center = true);
      
        intersection() {
          translate([6.6975, 2.347, -0.4365])
          cube(size = [22.8048, 2.1398, 0.1968], center = true);
        
          translate([0.531907, 0.633902, -9.219])
          rotate([0, 0, -40])
          cube(size = [36.1998, 1.1788, 17.7618], center = true);
        }
      
        translate([-3.051, -7.3415, -0.4365])
        cube(size = [3.3078, 21.5168, 0.1968], center = true);
      }
    
      difference() {
        union() {
          translate([-4.8525, 2.391, 8.7825])
          cube(size = [0.2948, 2.0518, 18.6348], center = true);
        
          translate([-1.52567, 1.75508, 3.33067e-16])
          rotate([-180, 0, 41])
          cube(size = [36.1998, 1.9608, 1.0698], center = true);
        }
      
        intersection() {
          translate([-6.49526, 7.47194, 0.518859])
          rotate([-177, 1.20742e-06, 41])
          cube(size = [36.1999, 16.3719, 36.1999], center = true);
        
          translate([4.96465, -5.71118, 0.264259])
          rotate([178, 0, 41])
          cube(size = [36.1999, 21.0559, 36.1999], center = true);
        }
      }
    }
  
    difference() {
      difference() {
        intersection() {
          translate([1.02557, -1.22222, -2.22045e-16])
          rotate([-180, 0, 40])
          cube(size = [36.1998, 5.7808, 1.0698], center = true);
        
          translate([-6.55, 2.347, 8.7825])
          cube(size = [23.0998, 2.1398, 18.6348], center = true);
        }
      
        intersection() {
          translate([-6.55, 2.62, -0.4365])
          cube(size = [23.0999, 1.5939, 0.1969], center = true);
        
          translate([1.182, 2.828, 0])
          cylinder(h = 1.0699, r1 = 1.151, r2 = 1.151, center = true, $fn = 12);
        }
      }
    
      union() {
        difference() {
          translate([2.50398, 2.98413, -8.7825])
          rotate([0, 0, -40])
          cube(size = [36.1999, 1.1789, 18.6349], center = true);
        
          translate([-6.801, -0.797, 0])
          cube(size = [22.598, 5.24, 1.07], center = true);
        }
      
        translate([4.531, 2.949, 0])
        cylinder(h = 36.1999, r1 = 0.196, r2 = 0.196, center = true, $fn = 12);
      
        translate([-6.55, 2.4455, 8.881])
        cube(size = [23.0999, 1.9429, 18.4379], center = true);
      }
    }
  
    difference() {
      translate([-2.778, 8.335, 0])
      cube(size = [3.8538, 19.5298, 1.0698], center = true);
    
      union() {
        translate([-2.8765, 7.3415, 0.0985])
        cube(size = [3.6569, 21.5169, 0.8729], center = true);
      
        translate([-5.98063, 6.87993, 1.11022e-15])
        rotate([-180, 0, 41])
        cube(size = [36.1999, 17.9679, 1.0699], center = true);
      }
    }
  
    difference() {
      difference() {
        translate([6.6975, -2.598, -0.4365])
        cube(size = [22.8048, 1.6378, 0.1968], center = true);
      
        translate([6.26892, 6.72259, -0.597013])
        rotate([-1, 0, -43])
        cube(size = [36.1999, 17.7959, 0.1969], center = true);
      }
    
      union() {
        translate([-6.49903, -7.47627, -0.866677])
        rotate([5, 0, -41])
        cube(size = [36.1999, 16.3119, 36.1999], center = true);
      
        translate([2.366, -3.98, -9.219])
        cylinder(h = 17.7619, r1 = 2.792, r2 = 2.792, center = true, $fn = 12);
      }
    }
  
    intersection() {
      union() {
        translate([6.55, 1.6485, -0.4365])
        cube(size = [23.0998, 0.3488, 0.1968], center = true);
      
        intersection() {
          translate([6.6975, -8.313, 0])
          cube(size = [22.8048, 19.5738, 1.0698], center = true);
        
          translate([4.46612, -5.13769, 8.7825])
          rotate([-180, 0, 41])
          cube(size = [36.1998, 22.5848, 18.6348], center = true);
        }
      
        difference() {
          translate([6.6975, 2.62, -8.7825])
          cube(size = [22.8048, 1.5938, 18.6348], center = true);
        
          difference() {
            translate([1.182, 2.828, 0])
            cylinder(h = 36.1999, r1 = 1.151, r2 = 1.151, center = true, $fn = 12);
          
            translate([-6.40117, 7.3637, -9.219])
            rotate([-180, 0, 41])
            cube(size = [36.2, 16.686, 17.762], center = true);
          }
        }
      }
    
      union() {
        difference() {
          translate([8.526, 1.55, 8.7825])
          cube(size = [19.1478, 0.5458, 18.6348], center = true);
        
          translate([6.27296, 7.47583, 8.7825])
          rotate([0, 0, -40])
          cube(size = [36.1999, 16.6819, 18.6349], center = true);
        }
      
        difference() {
          union() {
            translate([1.51826, 1.8094, -0.4365])
            rotate([0, 0, -40])
            cube(size = [36.1998, 1.8878, 0.1968], center = true);
          
            translate([-7.40855, 8.52256, -0.4365])
            rotate([-180, 0, 41])
            cube(size = [36.1998, 13.6148, 0.1968], center = true);
          }
        
          union() {
            translate([-4.532, 2.946, 8.7825])
            cylinder(h = 18.6349, r1 = 0.196, r2 = 0.196, center = true, $fn = 12);
          
            translate([8.3515, -8.1385, -0.4365])
            cube(size = [19.4969, 19.9229, 0.1969], center = true);
          }
        }
      
        difference() {
          translate([-2.55568, 2.93997, -0.4365])
          rotate([-180, 0, 41])
          cube(size = [36.1998, 1.1788, 0.1968], center = true);
        
          translate([-0.527168, -0.606438, -0.0561888])
          rotate([4, 0, -41])
          cube(size = [36.1999, 1.1849, 36.1999], center = true);
        }
      }
    }
  
    intersection() {
      union() {
        translate([8.526, -1.3315, 0])
        cube(size = [19.1478, 0.1968, 36.1998], center = true);
      
        translate([-2.778, 8.433, -0.4365])
        cube(size = [3.8538, 19.3338, 0.1968], center = true);
      
        translate([4.7547, 5.66643, -0.4365])
        rotate([0, 0, -40])
        cube(size = [36.1998, 21.4058, 0.1968], center = true);
      
        translate([5.89403, -6.78031, -0.4365])
        rotate([-180, 0, 41])
        cube(size = [36.1998, 18.2318, 0.1968], center = true);
      }
    
      union() {
        difference() {
          translate([-2.8765, 7.3415, -0.4365])
          cube(size = [3.6568, 21.5168, 0.1968], center = true);
        
          translate([5.07394, 5.63518, -0.2648])
          rotate([-2, 0, -42])
          cube(size = [36.1999, 21.0249, 36.1999], center = true);
        }
      
        translate([-6.06667, -6.5057, 0.253785])
        rotate([-1, 0, -43])
        cube(size = [36.1998, 18.4028, 0.8728], center = true);
      }
    }
  
    difference() {
      intersection() {
        translate([-6.55, -2.4235, -0.4365])
        cube(size = [23.0998, 1.9868, 0.1968], center = true);
      
        translate([6.76566, -8.063, -0.4365])
        rotate([-180, 0, 40])
        cube(size = [36.1998, 15.1488, 0.1968], center = true);
      }
    
      difference() {
        translate([2.366, -3.98, -9.219])
        cylinder(h = 17.7619, r1 = 2.792, r2 = 2.792, center = true, $fn = 12);
      
        translate([-6.07303, -6.51253, -0.281133])
        rotate([-1, 0, -43])
        cube(size = [36.2, 18.403, 0.197], center = true);
      }
    }
  
    difference() {
      difference() {
        translate([-6.55, -0.9715, 0])
        cube(size = [23.0998, 4.8908, 1.0698], center = true);
      
        translate([4.532, -2.948, 0])
        cylinder(h = 36.1999, r1 = 0.196, r2 = 0.196, center = true, $fn = 12);
      }
    
      union() {
        translate([-4.37578, 5.21485, -0.4365])
        rotate([-180, 0, 40])
        cube(size = [36.1999, 22.5849, 0.1969], center = true);
      
        translate([-4.37578, -5.21485, 0.0985])
        rotate([0, 0, -40])
        cube(size = [36.1999, 22.5849, 0.8729], center = true);
      }
    }
  
    intersection() {
      union() {
        intersection() {
          translate([5.33046, 6.13199, 0.710842])
          rotate([5, 0, -41])
          cube(size = [36.1998, 19.8878, 36.1998], center = true);
        
          translate([-2.8765, -7.3415, -0.4365])
          cube(size = [3.6568, 21.5168, 0.1968], center = true);
        }
      
        intersection() {
          translate([5.4654, 6.28723, 0.582536])
          rotate([4, 0, -41])
          cube(size = [36.1998, 19.4978, 36.1998], center = true);
        
          translate([-0.9495, -8.313, 0])
          cube(size = [0.1968, 19.5738, 1.0698], center = true);
        }
      }
    
      union() {
        translate([8.3515, -8.1385, -8.7825])
        cube(size = [19.4968, 19.9228, 18.6348], center = true);
      
        intersection() {
          translate([5.85252, 6.73255, 0.623797])
          rotate([4, 0, -41])
          cube(size = [36.1998, 18.3128, 36.1998], center = true);
        
          translate([-5.74074, -6.84154, -9.219])
          rotate([0, 0, -40])
          cube(size = [36.1998, 18.3378, 17.7618], center = true);
        }
      
        translate([-6.38034, -7.33974, -0.680056])
        rotate([4, 0, -41])
        cube(size = [36.1998, 16.7018, 36.1998], center = true);
      }
    }
  
    difference() {
      intersection() {
        translate([-6.55, -7.3415, -0.4365])
        cube(size = [23.0998, 21.5168, 0.1968], center = true);
      
        translate([2.38988, 2.84815, 0])
        rotate([0, 0, -40])
        cube(size = [36.1998, 1.5338, 1.0698], center = true);
      }
    
      intersection() {
        translate([-6.801, 1.0915, 0])
        cube(size = [22.5979, 4.6509, 1.0699], center = true);
      
        translate([5.85451, -6.97713, -9.219])
        rotate([-180, 0, 40])
        cube(size = [36.1999, 17.9839, 17.7619], center = true);
      }
    }
  }
}
