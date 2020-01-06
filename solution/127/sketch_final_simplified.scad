intersection() {
  translate([0, 0, 0.0005])
  cube(size = [11.9998, 11.7858, 7.1788], center = true);

  union() {
    difference() {
      translate([-4.525, -4.44, -1.964])
      cylinder(h = 2.0538, r1 = 0.481, r2 = 0.481, center = true, $fn = 12);
    
      union() {
        translate([-3.47893, -9.68479, 0.357])
        rotate([0, 0, -24])
        cube(size = [5.6119, 15.6749, 5.2679], center = true);
      
        translate([-4.545, -4.166, -7.5545])
        rotate([180, 0, 180])
        cylinder(h = 21.0909, r1 = 0.461, r2 = 0.461, center = true, $fn = 12);
      }
    }
  
    intersection() {
      translate([9.4414, 1.46937, 0])
      rotate([0, 0, -24])
      cube(size = [20.1448, 1.4928, 5.9818], center = true);
    
      translate([4.5715, 10.0855, 0])
      cube(size = [0.8568, 16.0288, 5.9818], center = true);
    }
  
    intersection() {
      union() {
        translate([0.695208, -0.309527, -2.634])
        rotate([0, 0, -24])
        cube(size = [5.6118, 36.1998, 0.7138], center = true);
      
        intersection() {
          translate([1.165, -6.961, 7.5545])
          cylinder(h = 21.0908, r1 = 5.279, r2 = 5.279, center = true, $fn = 12);
        
          translate([4.3755, 7.2195, 0])
          cube(size = [1.2488, 21.7608, 5.9818], center = true);
        }
      
        translate([2.67852, -1.19255, -1.6075])
        rotate([0, 0, -24])
        cube(size = [1.2678, 36.1998, 1.3388], center = true);
      }
    
      difference() {
        intersection() {
          translate([1.675, -4.937, -7.5545])
          cylinder(h = 21.0908, r1 = 3.637, r2 = 3.637, center = true, $fn = 12);
        
          translate([0, 7.2195, 7.5545])
          cube(size = [9.9998, 21.7608, 21.0908], center = true);
        }
      
        union() {
          translate([-2.146, -0.806, -10.1885])
          cylinder(h = 15.8229, r1 = 2.862, r2 = 2.862, center = true, $fn = 12);
        
          translate([3.097, -1.28, -7.5545])
          rotate([180, 0, 180])
          cylinder(h = 21.0909, r1 = 0.723, r2 = 0.723, center = true, $fn = 12);
        }
      }
    }
  
    difference() {
      intersection() {
        union() {
          translate([8.42679, -0.809468, -2.634])
          rotate([0, 0, -24])
          cube(size = [20.1448, 3.4978, 0.7138], center = true);
        
          translate([-1.92309, -6.62179, 0])
          rotate([0, 0, -24])
          cube(size = [2.7248, 22.5368, 5.9818], center = true);
        
          translate([-1.348, 1.979, -10.1885])
          cylinder(h = 15.8228, r1 = 0.094, r2 = 0.094, center = true, $fn = 12);
        }
      
        union() {
          difference() {
            translate([-5.82099, 6.3512, 7.5545])
            rotate([0, 0, -24])
            cube(size = [20.3978, 4.9908, 21.0908], center = true);
          
            translate([0.268, 1.622, 7.9115])
            cylinder(h = 20.3769, r1 = 0.448, r2 = 0.448, center = true, $fn = 12);
          }
        
          difference() {
            translate([4.71478, -11.137, -1.964])
            rotate([0, 0, -24])
            cube(size = [18.5258, 19.6868, 2.0538], center = true);
          
            translate([1.165, -6.961, 0])
            cylinder(h = 36.1999, r1 = 5.279, r2 = 5.279, center = true, $fn = 12);
          }
        }
      }
    
      union() {
        translate([-2.146, -0.806, -2.634])
        cylinder(h = 0.7139, r1 = 2.862, r2 = 2.862, center = true, $fn = 12);
      
        translate([3.117, -0.384, -1.964])
        cylinder(h = 2.0539, r1 = 0.739, r2 = 0.739, center = true, $fn = 12);
      
        difference() {
          translate([8.42679, -0.809468, 0])
          rotate([0, 0, -24])
          cube(size = [20.1449, 3.4979, 5.9819], center = true);
        
          translate([-7.1745, -8.0145, -1.964])
          cube(size = [21.851, 20.171, 2.054], center = true);
        }
      
        translate([0.178, 1.518, 7.5545])
        cylinder(h = 21.0909, r1 = 0.222, r2 = 0.222, center = true, $fn = 12);
      
        translate([-7.8635, 3.4915, -2.634])
        cube(size = [20.4729, 2.8409, 0.7139], center = true);
      
        translate([-7.8635, -8.239, 0.357])
        cube(size = [20.4729, 19.7219, 5.2679], center = true);
      }
    }
  
    translate([4.544, 4.449, 1.0275])
    cylinder(h = 3.9288, r1 = 0.462, r2 = 0.462, center = true, $fn = 12);
  
    difference() {
      union() {
        intersection() {
          union() {
            translate([-2.6625, 5.98007, 8.88178e-16])
            rotate([-180, 0, 24])
            cube(size = [36.1998, 23.1078, 5.9818], center = true);
          
            translate([11.1215, 0, 0])
            cube(size = [13.9568, 36.1998, 5.9818], center = true);
          }
        
          translate([0, 6.7375, -7.5545])
          cube(size = [9.9998, 22.7248, 21.0908], center = true);
        }
      
        intersection() {
          union() {
            translate([4.56, -4.473, -4.44089e-16])
            rotate([180, 0, 180])
            cylinder(h = 5.9818, r1 = 0.437, r2 = 0.437, center = true, $fn = 12);
          
            translate([-2.36669, -10.18, 0])
            rotate([0, 0, -24])
            cube(size = [8.0468, 15.6748, 5.9818], center = true);
          }
        
          union() {
            translate([-6.55, -4.286, 0])
            cube(size = [23.0998, 1.2498, 5.9818], center = true);
          
            translate([-9.70063, -6.91471, -10.5455])
            rotate([0, 0, -24])
            cube(size = [24.1008, 15.6748, 15.1088], center = true);
          }
        }
      }
    
      union() {
        translate([0.177, -4.072, 0])
        rotate([180, 0, 180])
        cylinder(h = 36.1999, r1 = 0.223, r2 = 0.223, center = true, $fn = 12);
      
        translate([-8.692, 7.2195, -7.5545])
        cube(size = [18.8159, 21.7609, 21.0909], center = true);
      
        translate([0.695208, -0.309527, 1.0275])
        rotate([0, 0, -24])
        cube(size = [5.6119, 36.1999, 3.9289], center = true);
      
        translate([-0.993, 6.091, -7.5545])
        cylinder(h = 21.0909, r1 = 4.363, r2 = 4.363, center = true, $fn = 12);
      
        translate([3.6865, 7.2195, 0])
        cube(size = [2.6269, 21.7609, 5.9819], center = true);
      
        translate([-7.1745, 6.5945, 1.0275])
        cube(size = [21.8509, 23.0109, 3.9289], center = true);
      
        translate([-2.142, 6.7375, -1.6075])
        cube(size = [5.7159, 22.7249, 1.3389], center = true);
      
        translate([-4.461, -4.074, -2.634])
        cylinder(h = 0.7139, r1 = 0.222, r2 = 0.222, center = true, $fn = 12);
      }
    }
  
    intersection() {
      difference() {
        difference() {
          translate([1.364, 3.837, -7.5545])
          cylinder(h = 21.0908, r1 = 3.842, r2 = 3.842, center = true, $fn = 12);
        
          translate([3.30453, -7.4221, 8.581])
          rotate([-180, 0, 24])
          cube(size = [36.1999, 19.9509, 19.0379], center = true);
        }
      
        union() {
          translate([-0.993, 6.091, -9.5185])
          cylinder(h = 17.1629, r1 = 4.363, r2 = 4.363, center = true, $fn = 12);
        
          translate([14.123, 6.64569, -1.964])
          rotate([0, 0, -24])
          cube(size = [15.8019, 12.5689, 2.0539], center = true);
        }
      }
    
      union() {
        translate([3.947, -6.594, 0])
        cube(size = [0.3918, 23.0118, 5.9818], center = true);
      
        difference() {
          translate([3.6865, -6.594, -1.964])
          cube(size = [2.6268, 23.0118, 2.0538], center = true);
        
          translate([10.4038, 1.64074, -9.5185])
          rotate([0, 0, -24])
          cube(size = [18.5259, 0.3989, 17.1629], center = true);
        }
      }
    }
  
    difference() {
      difference() {
        union() {
          translate([-2.33098, 14.1899, 1.0275])
          rotate([0, 0, -24])
          cube(size = [20.3978, 12.1698, 3.9288], center = true);
        
          translate([-9.99654, -3.02726, 1.0275])
          rotate([0, 0, -24])
          cube(size = [20.3978, 22.5368, 3.9288], center = true);
        }
      
        translate([0, 11.506, 0])
        cube(size = [36.1999, 13.1879, 36.1999], center = true);
      }
    
      translate([-7.1745, 0, 8.582])
      cube(size = [21.8509, 36.1999, 19.0379], center = true);
    }
  
    translate([3.528, 4.472, -1.965])
    rotate([180, 0, 180])
    cylinder(h = 2.0538, r1 = 0.436, r2 = 0.436, center = true, $fn = 12);
  
    intersection() {
      translate([3.79076, -1.68775, -1.964])
      rotate([0, 0, -24])
      cube(size = [3.7028, 36.1998, 2.0538], center = true);
    
      translate([-6.9785, 6.5945, -9.5185])
      cube(size = [22.2428, 23.0108, 17.1628], center = true);
    
      difference() {
        translate([1.165, -6.961, -1.964])
        cylinder(h = 2.0538, r1 = 5.279, r2 = 5.279, center = true, $fn = 12);
      
        translate([0.264, -4.171, 7.9115])
        cylinder(h = 20.3769, r1 = 0.453, r2 = 0.453, center = true, $fn = 12);
      }
    }
  
    intersection() {
      translate([10.5421, -1.39716, 1.0275])
      rotate([0, 0, -24])
      cube(size = [15.8018, 2.8488, 3.9288], center = true);
    
      union() {
        translate([4.3755, -6.594, 8.582])
        cube(size = [1.2488, 23.0118, 19.0378], center = true);
      
        translate([-4.61869, -7.33615, -2.634])
        rotate([0, 0, -24])
        cube(size = [1.6188, 19.0388, 0.7138], center = true);
      }
    
      translate([1.364, 3.837, 7.5545])
      cylinder(h = 21.0908, r1 = 3.842, r2 = 3.842, center = true, $fn = 12);
    }
  
    translate([4.544, 4.449, 0])
    cylinder(h = 5.9818, r1 = 0.462, r2 = 0.462, center = true, $fn = 12);
  }
}
