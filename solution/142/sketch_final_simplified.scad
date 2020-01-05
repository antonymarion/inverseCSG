intersection() {
  translate([0, 0, 0.0005])
  cube(size = [11.9997, 5.6477, 7.0587], center = true);

  union() {
    difference() {
      intersection() {
        union() {
          translate([7.803, 1.5, -2])
          cube(size = [20.5937, 1.7057, 1.8817], center = true);
        
          translate([-4.061, -8.1085, -2.007])
          rotate([180, 90, -90])
          cylinder(h = 19.9827, r1 = 0.937, r2 = 0.937, center = true, $fn = 12);
        }
      
        union() {
          translate([-11.262, 1.5, -2.3825])
          cube(size = [13.6757, 1.7057, 1.1167], center = true);
        
          translate([-2.8715, 9.9915, -2])
          cube(size = [3.1047, 16.2167, 1.8817], center = true);
        }
      }
    
      union() {
        translate([-3.941, -7.874, -1.883])
        rotate([180, 90, -90])
        cylinder(h = 20.4518, r1 = 0.588, r2 = 0.588, center = true, $fn = 12);
      
        translate([-1.319, -7.874, -1.885])
        rotate([180, 90, -90])
        cylinder(h = 20.4518, r1 = 0.587, r2 = 0.587, center = true, $fn = 12);
      
        translate([-1.6125, 1.5, -1.4415])
        cube(size = [0.5868, 1.7058, 0.7648], center = true);
      
        translate([6.838, 2.088, -1.73])
        rotate([180, 90, 180])
        cylinder(h = 22.5238, r1 = 0.076, r2 = 0.076, center = true, $fn = 12);
      }
    }
  
    difference() {
      union() {
        difference() {
          translate([4.7645, -9.98898, 1.22649])
          rotate([-7, 0, 0])
          cube(size = [0.4707, 16.0717, 36.1997], center = true);
        
          translate([11.55, 8.28081, -1.01676])
          rotate([-7, 0, 0])
          cube(size = [13.0998, 19.5138, 36.1998], center = true);
        }
      
        intersection() {
          translate([4.7645, 7.8735, 1.785])
          cube(size = [0.4707, 20.4527, 0.8637], center = true);
        
          translate([11.3145, -7.81035, -4.32935])
          rotate([29, 0, 0])
          cube(size = [13.5707, 18.3397, 36.1997], center = true);
        }
      
        translate([11.0215, -1.058, 2.235])
        rotate([180, 90, 180])
        cylinder(h = 14.1567, r1 = 0.706, r2 = 0.706, center = true, $fn = 12);
      
        difference() {
          translate([-6.55, -7.874, 0.1965])
          cube(size = [23.0997, 20.4517, 4.0407], center = true);
        
          translate([1.547, 8.28081, -1.01676])
          rotate([-7, 0, 0])
          cube(size = [6.9058, 19.5138, 36.1998], center = true);
        }
      }
    
      difference() {
        sphere(r = 54.2998, $fn = 108);
      
        intersection() {
          difference() {
            translate([4.7645, 7.9761, -0.979342])
            rotate([-7, 0, 0])
            cube(size = [0.4709, 20.1279, 36.1999], center = true);
          
            translate([11.0215, -1.063, 2.217])
            rotate([180, 90, 180])
            cylinder(h = 14.157, r1 = 0.183, r2 = 0.183, center = true, $fn = 12);
          }
        
          union() {
            translate([1.0185, 7.9761, -0.979342])
            rotate([-7, 0, 0])
            cube(size = [5.8489, 20.1279, 36.1999], center = true);
          
            translate([4.7645, 0, 0])
            rotate([-7, 0, 0])
            cube(size = [0.4709, 36.1999, 36.1999], center = true);
          }
        }
      }
    }
  
    intersection() {
      difference() {
        union() {
          translate([-11.0565, 8.01983, 4.44546])
          rotate([29, 0, 0])
          cube(size = [14.0867, 17.8607, 36.1997], center = true);
        
          translate([-4.2185, -8.1085, -10.2855])
          cube(size = [0.4107, 19.9827, 15.6287], center = true);
        }
      
        union() {
          translate([-3.941, 0, -1.883])
          rotate([180, 90, -90])
          cylinder(h = 36.1998, r1 = 0.588, r2 = 0.588, center = true, $fn = 12);
        
          translate([-4.013, 1.587, 0])
          cylinder(h = 36.1998, r1 = 0.412, r2 = 0.412, center = true, $fn = 12);
        }
      }
    
      union() {
        translate([-4.061, -7.874, -2.007])
        rotate([180, 90, -90])
        cylinder(h = 20.4517, r1 = 0.937, r2 = 0.937, center = true, $fn = 12);
      
        translate([-4.013, 1.587, 7.8145])
        cylinder(h = 20.5707, r1 = 0.412, r2 = 0.412, center = true, $fn = 12);
      
        difference() {
          translate([-10.85, 7.83753, 4.525])
          rotate([-150, 0, 0])
          cube(size = [14.4997, 18.0997, 36.1997], center = true);
        
          translate([-4.2185, 0, -2.7055])
          cube(size = [0.4108, 36.1998, 0.4708], center = true);
        }
      }
    
      translate([-11.0565, 0.349874, 0.202])
      rotate([-150, 0, 0])
      cube(size = [14.0867, 0.8077, 36.1997], center = true);
    
      translate([-4.061, 1.5, -2.007])
      rotate([180, 90, -90])
      cylinder(h = 1.7057, r1 = 0.937, r2 = 0.937, center = true, $fn = 12);
    
      difference() {
        translate([-10.85, 0.349874, 0.202])
        rotate([-150, 0, 0])
        cube(size = [14.4997, 0.8077, 36.1997], center = true);
      
        translate([-11.0565, -7.874, -1.4415])
        cube(size = [14.0868, 20.4518, 0.7648], center = true);
      }
    }
  
    intersection() {
      translate([-2.9595, 1.5, -2.7055])
      cube(size = [2.1067, 1.7057, 0.4707], center = true);
    
      union() {
        translate([7.25, 0, 0])
        rotate([29, 0, 0])
        cube(size = [21.6997, 36.1997, 36.1997], center = true);
      
        translate([-4.012, 7.83753, 4.525])
        rotate([-150, 0, 0])
        cube(size = [0.8237, 18.0997, 36.1997], center = true);
      }
    
      difference() {
        translate([-2.666, 1.5, -2])
        cube(size = [2.6937, 1.7057, 1.8817], center = true);
      
        translate([-4.013, 1.587, -2.7055])
        cylinder(h = 0.4708, r1 = 0.412, r2 = 0.412, center = true, $fn = 12);
      }
    }
  
    difference() {
      intersection() {
        union() {
          translate([-4.7645, -1.058, 2.235])
          rotate([180, 90, 180])
          cylinder(h = 0.4707, r1 = 0.706, r2 = 0.706, center = true, $fn = 12);
        
          translate([-4.7645, -7.81035, -4.32935])
          rotate([29, 0, 0])
          cube(size = [0.4707, 18.3397, 36.1997], center = true);
        
          intersection() {
            translate([0, -7.48766, -4.323])
            rotate([-150, 0, 0])
            cube(size = [36.1997, 18.9077, 36.1997], center = true);
          
            translate([6.55, 0, 1.785])
            rotate([90, 0, 0])
            cube(size = [23.0997, 0.8637, 36.1997], center = true);
          }
        }
      
        difference() {
          difference() {
            translate([-11.3145, 8.28081, -1.01676])
            rotate([-7, 0, 0])
            cube(size = [13.5707, 19.5137, 36.1997], center = true);
          
            translate([-11.3145, 0, -8.3735])
            rotate([90, 0, 0])
            cube(size = [13.5708, 19.4528, 36.1998], center = true);
          }
        
          translate([0, -1.063, 2.217])
          rotate([180, 90, 180])
          cylinder(h = 36.1998, r1 = 0.183, r2 = 0.183, center = true, $fn = 12);
        }
      }
    
      intersection() {
        translate([-11.55, 7.9761, -0.979342])
        rotate([-7, 0, 0])
        cube(size = [13.0998, 20.1278, 36.1998], center = true);
      
        translate([6.7855, -7.48766, -4.323])
        rotate([-150, 0, 0])
        cube(size = [22.6288, 18.9078, 36.1998], center = true);
      }
    }
  
    intersection() {
      difference() {
        translate([-11.0565, -0.853, -2.3825])
        cube(size = [14.0867, 2.9997, 1.1167], center = true);
      
        translate([-3.941, 0, -1.883])
        rotate([180, 90, -90])
        cylinder(h = 36.1998, r1 = 0.588, r2 = 0.588, center = true, $fn = 12);
      }
    
      translate([-4.061, 7.8735, -2.007])
      rotate([180, 90, -90])
      cylinder(h = 20.4527, r1 = 0.937, r2 = 0.937, center = true, $fn = 12);
    
      difference() {
        translate([-11.0565, 7.9761, -0.979342])
        rotate([-7, 0, 0])
        cube(size = [14.0867, 20.1277, 36.1997], center = true);
      
        translate([-4.008, 0.647, 7.5795])
        cylinder(h = 21.0408, r1 = 0.409, r2 = 0.409, center = true, $fn = 12);
      }
    }
  
    difference() {
      translate([-2.666, -0.853, -2.7055])
      cube(size = [2.6937, 2.9997, 0.4707], center = true);
    
      translate([-4.008, 0.647, -10.2855])
      cylinder(h = 15.6288, r1 = 0.409, r2 = 0.409, center = true, $fn = 12);
    }
  
    intersection() {
      union() {
        difference() {
          translate([0, -7.48766, -4.323])
          rotate([-150, 0, 0])
          cube(size = [36.1997, 18.9077, 36.1997], center = true);
        
          translate([0, -9.68427, 1.18908])
          rotate([-7, 0, 0])
          cube(size = [36.1998, 16.6858, 36.1998], center = true);
        }
      
        difference() {
          translate([0, -9.68427, 1.18908])
          rotate([-7, 0, 0])
          cube(size = [36.1997, 16.6857, 36.1997], center = true);
        
          translate([0, -1.063, 2.217])
          rotate([180, 90, 180])
          cylinder(h = 36.1998, r1 = 0.183, r2 = 0.183, center = true, $fn = 12);
        }
      }
    
      union() {
        translate([-4.7645, -1.058, 2.235])
        rotate([180, 90, 180])
        cylinder(h = 0.4707, r1 = 0.706, r2 = 0.706, center = true, $fn = 12);
      
        translate([6.55, 0, 0.1965])
        rotate([90, 0, 0])
        cube(size = [23.0997, 4.0407, 36.1997], center = true);
      }
    
      union() {
        translate([-11.55, 8.28081, -1.01676])
        rotate([-7, 0, 0])
        cube(size = [13.0997, 19.5137, 36.1997], center = true);
      
        intersection() {
          translate([-11.3145, 8.01983, 4.44546])
          rotate([29, 0, 0])
          cube(size = [13.5707, 17.8607, 36.1997], center = true);
        
          translate([0, 0, -0.2355])
          rotate([90, 0, 0])
          cube(size = [36.1997, 3.1767, 36.1997], center = true);
        }
      
        translate([-11.3145, -1.70817, 0.209737])
        rotate([-7, 0, 0])
        cube(size = [13.5707, 0.6137, 36.1997], center = true);
      }
    }
  
    intersection() {
      union() {
        difference() {
          translate([1.547, 0, -2.3825])
          cube(size = [6.9057, 4.7057, 1.1167], center = true);
        
          translate([0, 0, -2.7055])
          cylinder(h = 0.4708, r1 = 0.471, r2 = 0.471, center = true, $fn = 12);
        }
      
        translate([4.7645, 8.01983, 4.44546])
        rotate([29, 0, 0])
        cube(size = [0.4707, 17.8607, 36.1997], center = true);
      }
    
      union() {
        translate([4.7645, -7.874, 0.1965])
        cube(size = [0.4707, 20.4517, 4.0407], center = true);
      
        translate([4.059, 8.88178e-16, -2.004])
        rotate([180, 90, -90])
        cylinder(h = 4.7057, r1 = 0.941, r2 = 0.941, center = true, $fn = 12);
      
        translate([4.7645, -9.98898, 1.22649])
        rotate([-7, 0, 0])
        cube(size = [0.4707, 16.0717, 36.1997], center = true);
      
        translate([1.0185, 7.9761, -0.979342])
        rotate([-7, 0, 0])
        cube(size = [5.8487, 20.1277, 36.1997], center = true);
      }
    
      difference() {
        difference() {
          translate([8.097, -7.48766, -4.323])
          rotate([-150, 0, 0])
          cube(size = [20.0057, 18.9077, 36.1997], center = true);
        
          translate([0, -1.063, 2.217])
          rotate([180, 90, 180])
          cylinder(h = 36.1998, r1 = 0.183, r2 = 0.183, center = true, $fn = 12);
        }
      
        translate([0, 0.983, -2.3825])
        cylinder(h = 1.1168, r1 = 0.189, r2 = 0.189, center = true, $fn = 12);
      }
    
      union() {
        difference() {
          translate([-7.0785, 0, -10.2855])
          cube(size = [22.0427, 36.1997, 15.6287], center = true);
        
          translate([0, -0.983, 7.5795])
          cylinder(h = 21.0408, r1 = 0.188, r2 = 0.188, center = true, $fn = 12);
        }
      
        difference() {
          translate([11.0215, 7.9761, -0.979342])
          rotate([-7, 0, 0])
          cube(size = [14.1567, 20.1277, 36.1997], center = true);
        
          translate([3.943, 7.8735, -1.884])
          rotate([180, 90, -90])
          cylinder(h = 20.4528, r1 = 0.586, r2 = 0.586, center = true, $fn = 12);
        }
      }
    }
  
    intersection() {
      difference() {
        difference() {
          translate([-1.906, -1.1755, -1.765])
          cube(size = [1.1757, 0.4707, 1.4117], center = true);
        
          translate([-1.319, -1.6465, -1.885])
          rotate([180, 90, -90])
          cylinder(h = 1.4128, r1 = 0.587, r2 = 0.587, center = true, $fn = 12);
        }
      
        union() {
          translate([-1.6125, -1.1755, 8.138])
          cube(size = [0.5868, 0.4708, 19.9238], center = true);
        
          translate([7.803, -1.147, -1.733])
          rotate([180, 90, 180])
          cylinder(h = 20.5938, r1 = 0.076, r2 = 0.076, center = true, $fn = 12);
        }
      }
    
      sphere(r = 54.2997, $fn = 108);
    }
  }
}
