intersection() {
  translate([-0.0005, 0, 0.0005])
  cube(size = [3.2908, 11.9998, 1.8228], center = true);

  union() {
    difference() {
      translate([-0.4075, -1.9995, -0.2525])
      cube(size = [0.2528, 0.8328, 1.0128], center = true);
    
      translate([-0.4075, -1.9145, 0])
      cube(size = [0.2529, 0.6649, 0.5059], center = true);
    }
  
    translate([-0.4075, -3.1645, 0])
    cube(size = [0.2528, 0.1688, 0.5058], center = true);
  
    translate([-0.4075, -3.9975, 0.2535])
    cube(size = [0.2528, 0.1688, 1.0128], center = true);
  
    difference() {
      union() {
        intersection() {
          difference() {
            translate([8.783, 8.259, 8.671])
            cube(size = [18.6338, 19.6818, 18.8598], center = true);
          
            translate([1.369, 0.002, 8.671])
            cylinder(h = 18.8599, r1 = 0.886, r2 = 0.886, center = true, $fn = 12);
          }
        
          union() {
            translate([0.678, 0.417, 0.0005])
            cube(size = [1.3858, 3.9978, 1.5188], center = true);
          
            translate([-2.3495, 12.2955, -0.506])
            rotate([0, 0, -30])
            cube(size = [19.8348, 17.2528, 0.5058], center = true);
          }
        }
      
        intersection() {
          difference() {
            translate([-0.186, -0.3325, -8.67])
            cube(size = [0.6958, 3.8288, 18.8598], center = true);
          
            translate([4.251, 7.36295, -9.335])
            rotate([0, 0, -30])
            cube(size = [36.1999, 19.1959, 17.5299], center = true);
          }
        
          difference() {
            translate([-4.31325, 7.47077, -0.0005])
            rotate([-180, 0, 30])
            cube(size = [36.1998, 18.9468, 1.5188], center = true);
          
            translate([-7.1485, 3.98343, 0.0945])
            rotate([0, 0, -30])
            cube(size = [19.8349, 1.9429, 1.3289], center = true);
          }
        }
      }
    
      union() {
        intersection() {
          difference() {
            translate([0, 0, 0.0005])
            rotate([0, 0, -30])
            cube(size = [36.1999, 36.1999, 1.5189], center = true);
          
            translate([-7.08625, 4.09125, 0])
            rotate([0, 0, -30])
            cube(size = [19.835, 36.2, 0.19], center = true);
          }
        
          union() {
            translate([3.80025, 8.95283, -8.67])
            rotate([0, 0, -23])
            cube(size = [36.1999, 16.7479, 18.8599], center = true);
          
            translate([9.131, -8.259, -0.0005])
            cube(size = [17.9379, 19.6819, 1.1389], center = true);
          }
        }
      
        translate([3.80025, 8.95283, 0.079])
        rotate([0, 0, -23])
        cube(size = [36.1999, 16.7479, 0.3479], center = true);
      
        translate([3.80025, -8.95283, -0.0005])
        rotate([-180, 0, 23])
        cube(size = [36.1999, 16.7479, 1.5189], center = true);
      }
    }
  
    translate([-1.262, -4.81, 0.0005])
    cylinder(h = 1.5188, r1 = 0.126, r2 = 0.126, center = true, $fn = 12);
  
    intersection() {
      difference() {
        translate([0.7665, 0.0005, 0.0005])
        cube(size = [1.2088, 3.1648, 1.5188], center = true);
      
        translate([1.378, 0, 8.671])
        cylinder(h = 18.8599, r1 = 0.708, r2 = 0.708, center = true, $fn = 12);
      }
    
      union() {
        translate([-0.06225, 0.10782, 9.4295])
        rotate([-180, 0, 30])
        cube(size = [36.1998, 1.9428, 17.3408], center = true);
      
        translate([1.369, 0.002, -8.67])
        cylinder(h = 18.8598, r1 = 0.886, r2 = 0.886, center = true, $fn = 12);
      }
    }
  
    intersection() {
      translate([-0.4075, -9.841, 0.506])
      cube(size = [0.2528, 16.5178, 0.5058], center = true);
    
      translate([-11.8853, -4.22086, 0.506])
      rotate([0, 0, -30])
      cube(size = [19.8348, 17.0038, 0.5058], center = true);
    }
  
    intersection() {
      difference() {
        translate([-9.1905, 6.55, 0])
        cube(size = [17.8188, 23.0998, 36.1998], center = true);
      
        translate([-0.666, -4.616, -8.67])
        cylinder(h = 18.8599, r1 = 0.132, r2 = 0.132, center = true, $fn = 12);
      }
    
      union() {
        translate([8.58881, -4.95875, -0.412])
        rotate([0, 0, -30])
        cube(size = [16.3648, 36.1998, 0.3158], center = true);
      
        translate([8.58881, -4.95875, 0.506])
        rotate([0, 0, -30])
        cube(size = [16.3648, 36.1998, 0.5058], center = true);
      }
    }
  
    translate([-0.4075, -3.5815, -0.506])
    cube(size = [0.2528, 2.3308, 0.5058], center = true);
  
    intersection() {
      union() {
        translate([-6.71825, 4.72864, 0.0005])
        rotate([0, 0, -30])
        cube(size = [19.8348, 0.2218, 1.5188], center = true);
      
        translate([-2.3495, 12.2955, -9.4295])
        rotate([0, 0, -30])
        cube(size = [19.8348, 17.2528, 17.3408], center = true);
      
        translate([-0.4075, 0.417, 9.1765])
        cube(size = [0.2528, 3.9978, 17.8468], center = true);
      
        translate([4.73675, -8.20429, -0.0005])
        rotate([-180, 0, 30])
        cube(size = [36.1998, 17.2528, 1.5188], center = true);
      }
    
      difference() {
        union() {
          translate([-0.2745, 8.259, 0.0005])
          cube(size = [0.5188, 19.6818, 1.5188], center = true);
        
          translate([-0.4075, 0.084, -0.506])
          cube(size = [0.2528, 4.6618, 0.5058], center = true);
        }
      
        union() {
          translate([-0.06225, 0.10782, -0.0005])
          rotate([-180, 0, 30])
          cube(size = [36.1999, 1.9429, 1.5189], center = true);
        
          translate([3.80025, -8.95283, -8.671])
          rotate([-180, 0, 23])
          cube(size = [36.1999, 16.7479, 18.8599], center = true);
        }
      }
    }
  
    translate([-0.8255, -4.8735, 0.0005])
    cube(size = [1.0908, 0.2528, 1.5188], center = true);
  
    difference() {
      intersection() {
        difference() {
          difference() {
            translate([8.783, 3.6235, 0])
            cube(size = [18.6338, 2.7528, 36.1998], center = true);
          
            translate([8.783, 3.998, 0])
            cube(size = [18.6339, 1.4979, 0.5059], center = true);
          }
        
          union() {
            translate([12.0291, 5.62102, 8.9235])
            rotate([0, 0, -30])
            cube(size = [20.9859, 14.4349, 18.3529], center = true);
          
            translate([8.783, 2.7485, -8.9235])
            cube(size = [18.6339, 0.6649, 18.3529], center = true);
          }
        }
      
        translate([-0.8255, 10.1735, 0.0005])
        cube(size = [1.0908, 15.8528, 1.5188], center = true);
      }
    
      intersection() {
        union() {
          difference() {
            translate([-0.4075, 3.5815, 0])
            cube(size = [0.2529, 0.6649, 36.1999], center = true);
          
            translate([2.97911, -10.054, 0])
            rotate([0, 0, -30])
            cube(size = [20.986, 21.765, 36.2], center = true);
          }
        
          translate([-0.8255, 4.4145, 0.506])
          cube(size = [1.0909, 0.6649, 0.5059], center = true);
        }
      
        union() {
          difference() {
            sphere(r = 54.2999, $fn = 108);
          
            translate([-12.696, -1.00404, 0.2535])
            rotate([0, 0, -30])
            cube(size = [15.214, 21.765, 1.013], center = true);
          }
        
          translate([-1.261, 4.81, -8.67])
          cylinder(h = 18.8599, r1 = 0.126, r2 = 0.126, center = true, $fn = 12);
        }
      }
    }
  
    intersection() {
      difference() {
        intersection() {
          translate([-0.8255, -6.55, 0.0005])
          cube(size = [1.0908, 23.0998, 1.5188], center = true);
        
          union() {
            translate([0, 0, -0.506])
            rotate([0, 0, -30])
            cube(size = [36.1998, 36.1998, 0.5058], center = true);
          
            translate([-0.8255, 4.4575, 0.2535])
            cube(size = [1.0908, 1.0868, 1.0128], center = true);
          }
        }
      
        union() {
          translate([-3.27198, -7.70831, -0.506])
          rotate([0, 0, -23])
          cube(size = [36.1999, 19.4519, 0.5059], center = true);
        
          translate([-0.663, 4.617, -8.67])
          cylinder(h = 18.8599, r1 = 0.13, r2 = 0.13, center = true, $fn = 12);
        }
      }
    
      union() {
        translate([12.0291, 5.62102, 9.1765])
        rotate([0, 0, -30])
        cube(size = [20.9858, 14.4348, 17.8468], center = true);
      
        translate([-0.4075, -7.009, -0.2525])
        cube(size = [0.2528, 22.1818, 1.0128], center = true);
      
        translate([12.0291, 5.62102, -0.506])
        rotate([0, 0, -30])
        cube(size = [20.9858, 14.4348, 0.5058], center = true);
      
        translate([8.783, 4.541, 9.1765])
        cube(size = [18.6338, 0.9178, 17.8468], center = true);
      
        translate([-1.261, 4.81, -8.67])
        cylinder(h = 18.8598, r1 = 0.126, r2 = 0.126, center = true, $fn = 12);
      
        translate([8.783, 10.1735, -9.1765])
        cube(size = [18.6338, 15.8528, 17.8468], center = true);
      
        translate([8.3645, 4.8735, 0])
        cube(size = [19.4708, 0.2528, 36.1998], center = true);
      }
    }
  }
}
