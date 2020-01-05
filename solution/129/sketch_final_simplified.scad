intersection() {
  translate([0, 0.0005, 0])
  cube(size = [11.9997, 2.5907, 11.9997], center = true);

  union() {
    intersection() {
      difference() {
        translate([0.011, 0, 2.215])
        rotate([180, 90, -90])
        cylinder(h = 36.1997, r1 = 2.999, r2 = 2.999, center = true, $fn = 12);
      
        translate([0.002, 0, 0.001])
        rotate([180, 90, -90])
        cylinder(h = 36.1998, r1 = 0.682, r2 = 0.682, center = true, $fn = 12);
      }
    
      difference() {
        translate([-0.007, -0.053, -0.007])
        sphere(r = 1.1607, $fn = 12);
      
        translate([0.002, 0, 0.001])
        rotate([180, 90, -90])
        cylinder(h = 36.1998, r1 = 0.682, r2 = 0.682, center = true, $fn = 12);
      }
    }
  
    difference() {
      difference() {
        difference() {
          translate([0.005, 8.51, -1.8896e-15])
          rotate([180, 90, -90])
          cylinder(h = 19.1797, r1 = 5, r2 = 5, center = true, $fn = 12);
        
          translate([-1.909, -8.567, -1.124])
          rotate([180, 90, -90])
          cylinder(h = 19.0658, r1 = 2.973, r2 = 2.973, center = true, $fn = 12);
        }
      
        union() {
          translate([-8.092, -8.567, 8.327])
          cube(size = [20.0158, 19.0658, 19.5458], center = true);
        
          translate([10.008, 8.9655, 9.334])
          cube(size = [16.1838, 18.2708, 17.5318], center = true);
        }
      }
    
      difference() {
        translate([0.005, 8.51, -1.8896e-15])
        rotate([180, 90, -90])
        cylinder(h = 19.1798, r1 = 5, r2 = 5, center = true, $fn = 12);
      
        difference() {
          translate([0.011, -0.0575, -2.213])
          rotate([180, 90, -90])
          cylinder(h = 2.0449, r1 = 3.546, r2 = 3.546, center = true, $fn = 12);
        
          translate([-0.004, -0.0575, -2.215])
          rotate([180, 90, -90])
          cylinder(h = 2.045, r1 = 2.993, r2 = 2.993, center = true, $fn = 12);
        }
      }
    }
  
    translate([-0.582, -0.0575, -1.882])
    rotate([180, 90, -90])
    cylinder(h = 2.0447, r1 = 0.285, r2 = 0.285, center = true, $fn = 12);
  
    intersection() {
      union() {
        difference() {
          translate([10.008, -0.0575, 8.327])
          cube(size = [16.1837, 2.0447, 19.5457], center = true);
        
          translate([1.921, 8.51, -1.1])
          rotate([180, 90, -90])
          cylinder(h = 19.1798, r1 = 2.982, r2 = 2.982, center = true, $fn = 12);
        }
      
        translate([0.582, -0.171, 1.881])
        rotate([180, 90, -90])
        cylinder(h = 1.8177, r1 = 0.284, r2 = 0.284, center = true, $fn = 12);
      
        translate([1.92, -0.0575, 0.436])
        rotate([180, 90, -90])
        cylinder(h = 2.0447, r1 = 0.284, r2 = 0.284, center = true, $fn = 12);
      }
    
      difference() {
        union() {
          translate([1.916, 0, -1.119])
          rotate([180, 90, -90])
          cylinder(h = 36.1997, r1 = 3.568, r2 = 3.568, center = true, $fn = 12);
        
          translate([0.005, -0.511, 1.13465e-16])
          rotate([180, 90, -90])
          cylinder(h = 0.6817, r1 = 5, r2 = 5, center = true, $fn = 12);
        }
      
        difference() {
          translate([10.008, -0.0575, 8.327])
          cube(size = [16.1838, 2.0448, 19.5458], center = true);
        
          translate([0.005, -0.0575, 1.27676e-17])
          rotate([180, 90, -90])
          cylinder(h = 2.0449, r1 = 5, r2 = 5, center = true, $fn = 12);
        }
      }
    }
  
    difference() {
      union() {
        difference() {
          intersection() {
            translate([0.005, 8.51, -1.8896e-15])
            rotate([180, 90, -90])
            cylinder(h = 19.1797, r1 = 5, r2 = 5, center = true, $fn = 12);
          
            translate([-1.921, -0.0575, 1.102])
            rotate([180, 90, -90])
            cylinder(h = 2.0447, r1 = 3.552, r2 = 3.552, center = true, $fn = 12);
          }
        
          union() {
            translate([-1.916, 8.51, 1.12])
            rotate([180, 90, -90])
            cylinder(h = 19.1798, r1 = 3.001, r2 = 3.001, center = true, $fn = 12);
          
            translate([8.759, 8.51, 0])
            cube(size = [18.6818, 19.1798, 36.1998], center = true);
          }
        }
      
        intersection() {
          translate([-1.916, 0, 1.12])
          rotate([180, 90, -90])
          cylinder(h = 36.1997, r1 = 3.001, r2 = 3.001, center = true, $fn = 12);
        
          translate([-10.0105, 0, 0])
          cube(size = [16.1787, 36.1997, 36.1997], center = true);
        
          translate([-0.025, -0.0575, 2.21])
          rotate([180, 90, -90])
          cylinder(h = 2.0447, r1 = 3.535, r2 = 3.535, center = true, $fn = 12);
        }
      }
    
      translate([0.011, 0, 2.215])
      rotate([180, 90, -90])
      cylinder(h = 36.1998, r1 = 2.999, r2 = 2.999, center = true, $fn = 12);
    }
  
    intersection() {
      union() {
        translate([0.005, -0.511, 1.13465e-16])
        rotate([180, 90, -90])
        cylinder(h = 0.6817, r1 = 5, r2 = 5, center = true, $fn = 12);
      
        translate([0.001, -8.567, 0.001])
        rotate([180, 90, -90])
        cylinder(h = 19.0657, r1 = 1.136, r2 = 1.136, center = true, $fn = 12);
      
        difference() {
          translate([-1.927, 0, -1.102])
          rotate([180, 90, -90])
          cylinder(h = 36.1997, r1 = 3.567, r2 = 3.567, center = true, $fn = 12);
        
          translate([-1.909, -8.567, -1.124])
          rotate([180, 90, -90])
          cylinder(h = 19.0658, r1 = 2.973, r2 = 2.973, center = true, $fn = 12);
        }
      }
    
      union() {
        difference() {
          translate([-0.007, -0.053, -0.007])
          sphere(r = 1.1607, $fn = 12);
        
          translate([-8.092, -9.135, -0.439])
          cube(size = [20.0158, 17.9298, 2.0138], center = true);
        }
      
        translate([1.921, -0.511, -1.1])
        rotate([180, 90, -90])
        cylinder(h = 0.6817, r1 = 2.982, r2 = 2.982, center = true, $fn = 12);
      
        translate([1.339, -8.567, -1.446])
        rotate([180, 90, -90])
        cylinder(h = 19.0657, r1 = 0.285, r2 = 0.285, center = true, $fn = 12);
      
        translate([-8.092, -0.0575, -9.773])
        cube(size = [20.0157, 2.0447, 16.6537], center = true);
      
        translate([0.001, -9.476, 0.001])
        rotate([180, 90, -90])
        cylinder(h = 17.2477, r1 = 1.136, r2 = 1.136, center = true, $fn = 12);
      }
    
      difference() {
        union() {
          translate([0.005, -0.9665, 2.14606e-16])
          rotate([180, 90, -90])
          cylinder(h = 0.2267, r1 = 5, r2 = 5, center = true, $fn = 12);
        
          translate([0.005, 8.624, -1.91491e-15])
          rotate([180, 90, -90])
          cylinder(h = 18.9517, r1 = 5, r2 = 5, center = true, $fn = 12);
        }
      
        intersection() {
          translate([-8.092, -8.6805, -0.439])
          cube(size = [20.0158, 18.8388, 2.0138], center = true);
        
          translate([0.002, 0, 0.001])
          rotate([180, 90, -90])
          cylinder(h = 36.1998, r1 = 0.682, r2 = 0.682, center = true, $fn = 12);
        }
      }
    }
  
    intersection() {
      union() {
        translate([-1.92, -8.567, -0.436])
        rotate([180, 90, -90])
        cylinder(h = 19.0657, r1 = 0.285, r2 = 0.285, center = true, $fn = 12);
      
        translate([-0.007, -0.053, -0.007])
        sphere(r = 1.1607, $fn = 12);
      }
    
      union() {
        translate([0.005, 9.533, -2.11675e-15])
        rotate([180, 90, -90])
        cylinder(h = 17.1337, r1 = 5, r2 = 5, center = true, $fn = 12);
      
        translate([-1.92, 8.51, -0.436])
        rotate([180, 90, -90])
        cylinder(h = 19.1797, r1 = 0.285, r2 = 0.285, center = true, $fn = 12);
      }
    }
  
    difference() {
      difference() {
        union() {
          translate([0, -0.511, 0])
          cube(size = [36.1997, 0.6817, 36.1997], center = true);
        
          intersection() {
            translate([-1.921, -9.135, 1.102])
            rotate([180, 90, -90])
            cylinder(h = 17.9297, r1 = 3.552, r2 = 3.552, center = true, $fn = 12);
          
            translate([0, -0.9665, -8.328])
            cube(size = [36.1997, 0.2267, 19.5437], center = true);
          }
        
          translate([1.909, 8.51, 1.119])
          rotate([180, 90, -90])
          cylinder(h = 19.1797, r1 = 3.543, r2 = 3.543, center = true, $fn = 12);
        }
      
        difference() {
          translate([1.925, 0, 1.099])
          rotate([180, 90, -90])
          cylinder(h = 36.1998, r1 = 2.999, r2 = 2.999, center = true, $fn = 12);
        
          union() {
            translate([0.582, 0.398, 1.881])
            rotate([180, 90, -90])
            cylinder(h = 1.1359, r1 = 0.284, r2 = 0.284, center = true, $fn = 12);
          
            translate([0, -0.511, 9.772])
            cube(size = [36.1999, 0.6819, 16.6559], center = true);
          }
        }
      }
    
      union() {
        difference() {
          translate([0, 8.51, 0])
          cube(size = [36.1998, 19.1798, 36.1998], center = true);
        
          translate([0.005, -0.0575, 1.27676e-17])
          rotate([180, 90, -90])
          cylinder(h = 2.0449, r1 = 5, r2 = 5, center = true, $fn = 12);
        }
      
        intersection() {
          translate([-8.759, -0.0575, -8.328])
          cube(size = [18.6818, 2.0448, 19.5438], center = true);
        
          translate([1.909, -8.567, 1.119])
          rotate([180, 90, -90])
          cylinder(h = 19.0658, r1 = 3.543, r2 = 3.543, center = true, $fn = 12);
        }
      
        translate([1.921, 8.51, -1.1])
        rotate([180, 90, -90])
        cylinder(h = 19.1798, r1 = 2.982, r2 = 2.982, center = true, $fn = 12);
      
        difference() {
          translate([-1.916, -9.476, 1.12])
          rotate([180, 90, -90])
          cylinder(h = 17.2478, r1 = 3.001, r2 = 3.001, center = true, $fn = 12);
        
          translate([1.909, -0.9665, 1.119])
          rotate([180, 90, -90])
          cylinder(h = 0.2269, r1 = 3.543, r2 = 3.543, center = true, $fn = 12);
        }
      }
    }
  
    difference() {
      difference() {
        intersection() {
          translate([0.005, 8.51, -1.8896e-15])
          rotate([180, 90, -90])
          cylinder(h = 19.1797, r1 = 5, r2 = 5, center = true, $fn = 12);
        
          translate([-0.025, -0.0575, 2.21])
          rotate([180, 90, -90])
          cylinder(h = 2.0447, r1 = 3.535, r2 = 3.535, center = true, $fn = 12);
        }
      
        difference() {
          translate([0.011, -9.476, 2.215])
          rotate([180, 90, -90])
          cylinder(h = 17.2478, r1 = 2.999, r2 = 2.999, center = true, $fn = 12);
        
          translate([-1.338, -9.476, 1.444])
          rotate([180, 90, -90])
          cylinder(h = 17.2479, r1 = 0.284, r2 = 0.284, center = true, $fn = 12);
        }
      }
    
      union() {
        translate([0.011, 8.51, -2.213])
        rotate([180, 90, -90])
        cylinder(h = 19.1798, r1 = 3.546, r2 = 3.546, center = true, $fn = 12);
      
        translate([0.011, 8.9655, 2.215])
        rotate([180, 90, -90])
        cylinder(h = 18.2708, r1 = 2.999, r2 = 2.999, center = true, $fn = 12);
      
        difference() {
          translate([9.341, -8.567, 0])
          cube(size = [17.5178, 19.0658, 36.1998], center = true);
        
          translate([0.005, -0.511, 1.13465e-16])
          rotate([180, 90, -90])
          cylinder(h = 0.6819, r1 = 5, r2 = 5, center = true, $fn = 12);
        }
      }
    }
  
    difference() {
      union() {
        difference() {
          translate([-0.025, 8.624, 2.21])
          rotate([180, 90, -90])
          cylinder(h = 18.9517, r1 = 3.535, r2 = 3.535, center = true, $fn = 12);
        
          translate([0, 8.624, 9.772])
          cube(size = [36.1998, 18.9518, 16.6558], center = true);
        }
      
        intersection() {
          translate([1.916, -0.0575, -1.119])
          rotate([180, 90, -90])
          cylinder(h = 2.0447, r1 = 3.568, r2 = 3.568, center = true, $fn = 12);
        
          translate([9.341, 8.51, 9.772])
          cube(size = [17.5177, 19.1797, 16.6557], center = true);
        }
      }
    
      union() {
        difference() {
          translate([0, 8.9655, -8.328])
          cube(size = [36.1998, 18.2708, 19.5438], center = true);
        
          translate([-1.338, 0.398, 1.444])
          rotate([180, 90, -90])
          cylinder(h = 1.1359, r1 = 0.284, r2 = 0.284, center = true, $fn = 12);
        }
      
        translate([1.921, 0, -1.1])
        rotate([180, 90, -90])
        cylinder(h = 36.1998, r1 = 2.982, r2 = 2.982, center = true, $fn = 12);
      }
    }
  }
}
