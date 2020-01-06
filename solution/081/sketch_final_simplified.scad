intersection() {
  translate([-0.0005, -0.0005, 0])
  cube(size = [4.2308, 7.1288, 11.9998], center = true);

  union() {
    difference() {
      difference() {
        translate([-1.072, 0.764, -0.5495])
        rotate([-180, 0, 0])
        cube(size = [1.3818, 4.4098, 0.4268], center = true);
      
        translate([-9.661, -8.611, 0.0015])
        rotate([-180, 0, 0])
        cube(size = [16.8779, 18.9779, 3.2009], center = true);
      }
    
      translate([-1.415, -0.001, 8.196])
      cylinder(h = 19.8079, r1 = 0.892, r2 = 0.892, center = true, $fn = 12);
    }
  
    difference() {
      translate([0.6635, -2.63, -0.9675])
      rotate([-180, 0, 0])
      cube(size = [2.0888, 0.4498, 1.2628], center = true);
    
      translate([0.547408, -2.40973, -0.494206])
      rotate([180, 12, -97])
      cylinder(h = 36.1999, r1 = 0.157, r2 = 0.157, center = true, $fn = 12);
    }
  
    difference() {
      translate([1.628, 0.589, 4.255])
      rotate([180, 90, 180])
      cylinder(h = 0.2698, r1 = 0.254, r2 = 0.254, center = true, $fn = 12);
    
      translate([1.628, 0.588, 4.254])
      rotate([180, 90, 180])
      cylinder(h = 0.2699, r1 = 0.189, r2 = 0.189, center = true, $fn = 12);
    }
  
    difference() {
      translate([1.493, 2.024, 0.6325])
      rotate([-180, 0, 0])
      cube(size = [0.5398, 1.8898, 1.9388], center = true);
    
      translate([-8.1685, 1.783, 0.528])
      rotate([180, 90, 180])
      cylinder(h = 19.8629, r1 = 0.25, r2 = 0.25, center = true, $fn = 12);
    }
  
    intersection() {
      difference() {
        difference() {
          translate([0, 0, -9.218])
          rotate([-180, 0, 0])
          cube(size = [36.1998, 36.1998, 17.7638], center = true);
        
          translate([9.6615, 1.618, -3.486])
          rotate([180, 90, 180])
          cylinder(h = 16.8769, r1 = 0.135, r2 = 0.135, center = true, $fn = 12);
        }
      
        union() {
          translate([0.451821, 1.10854, -0.0615471])
          rotate([-0, 3, 79])
          cylinder(h = 36.1999, r1 = 0.133, r2 = 0.133, center = true, $fn = 12);
        
          translate([-9.3915, 1.35, -1.021])
          rotate([180, 90, 180])
          cylinder(h = 17.4169, r1 = 0.189, r2 = 0.189, center = true, $fn = 12);
        }
      }
    
      union() {
        translate([1.493, 1.923, -1.699])
        rotate([-180, 0, 0])
        cube(size = [0.5398, 2.0918, 6.6018], center = true);
      
        translate([0, 1.9705, 8.196])
        rotate([-180, 0, 0])
        cube(size = [2.4438, 1.7828, 19.8078], center = true);
      
        translate([0, 2.9155, -1.0545])
        rotate([-180, 0, 0])
        cube(size = [3.5258, 0.1068, 1.0888], center = true);
      }
    }
  
    translate([0.4205, 2.863, -0.439])
    rotate([-180, 90, 180])
    cylinder(h = 1.6028, r1 = 0.104, r2 = 0.104, center = true, $fn = 12);
  
    difference() {
      difference() {
        difference() {
          difference() {
            translate([1.493, 7.565, -3.354])
            rotate([-180, 0, 0])
            cube(size = [0.5398, 21.0698, 3.2918], center = true);
          
            translate([0, 1.618, -3.486])
            rotate([180, 90, 180])
            cylinder(h = 36.1999, r1 = 0.135, r2 = 0.135, center = true, $fn = 12);
          }
        
          union() {
            translate([-8.1955, -0.067, -4.669])
            rotate([180, 90, 180])
            cylinder(h = 19.8089, r1 = 0.251, r2 = 0.251, center = true, $fn = 12);
          
            translate([0, -1.627, -3.486])
            rotate([180, 90, 180])
            cylinder(h = 36.1999, r1 = 0.135, r2 = 0.135, center = true, $fn = 12);
          }
        }
      
        translate([9.9045, -0.066, -4.668])
        rotate([180, 90, 180])
        cylinder(h = 16.3909, r1 = 0.162, r2 = 0.162, center = true, $fn = 12);
      }
    
      translate([0, 10.481, 3.55271e-15])
      rotate([-180, 0, 0])
      cube(size = [36.1999, 15.2379, 36.1999], center = true);
    }
  
    translate([-0.27, 2.862, -1.599])
    rotate([0, 90, 0])
    cylinder(h = 2.9858, r1 = 0.107, r2 = 0.107, center = true, $fn = 12);
  
    difference() {
      difference() {
        difference() {
          translate([-1.223, -1.6555, -1.068])
          rotate([-180, 0, 0])
          cube(size = [1.0798, 2.4008, 0.6098], center = true);
        
          translate([-1.588, -0.768, -0.9745])
          rotate([-180, 0, 0])
          cube(size = [0.3499, 0.6259, 0.0909], center = true);
        }
      
        union() {
          translate([8.439, -1.353, -1.022])
          rotate([180, 90, 180])
          cylinder(h = 19.3219, r1 = 0.189, r2 = 0.189, center = true, $fn = 12);
        
          translate([-1.4925, -1.352, -1.021])
          rotate([180, 90, 180])
          cylinder(h = 0.5409, r1 = 0.253, r2 = 0.253, center = true, $fn = 12);
        
          translate([-1.42, -0.002, -1.181])
          cylinder(h = 0.8359, r1 = 0.68, r2 = 0.68, center = true, $fn = 12);
        }
      }
    
      translate([-1.413, -2.323, -1.068])
      cylinder(h = 0.6099, r1 = 0.594, r2 = 0.594, center = true, $fn = 12);
    }
  
    translate([1.493, 0.049, 3.178])
    rotate([-90, 0, 0])
    cube(size = [0.5398, 2.1538, 0.5398], center = true);
  
    difference() {
      translate([0, 0.711, -1.2355])
      rotate([-180, 0, 0])
      cube(size = [3.5258, 4.3018, 0.9448], center = true);
    
      union() {
        difference() {
          translate([-1.223, -0.9475, 0.1145])
          rotate([-180, 0, 0])
          cube(size = [1.0799, 0.9849, 2.9749], center = true);
        
          translate([-1.415, -0.001, -1.181])
          cylinder(h = 0.836, r1 = 0.892, r2 = 0.892, center = true, $fn = 12);
        }
      
        translate([-9.3915, 1.349, -1.019])
        rotate([180, 90, 180])
        cylinder(h = 17.4169, r1 = 0.253, r2 = 0.253, center = true, $fn = 12);
      
        difference() {
          translate([-1.4925, -9.2775, 6.55])
          rotate([-180, 0, 0])
          cube(size = [0.5409, 17.6449, 23.0999], center = true);
        
          translate([-9.661, 8.33, -9.8495])
          rotate([-180, 0, 0])
          cube(size = [16.878, 19.54, 16.501], center = true);
        }
      
        translate([0.4205, -8.5105, -2.755])
        rotate([-180, 0, 0])
        cube(size = [1.6029, 19.1789, 4.4899], center = true);
      
        translate([-1.42, -0.002, -9.4315])
        cylinder(h = 17.3369, r1 = 0.68, r2 = 0.68, center = true, $fn = 12);
      
        translate([-1.415, -0.001, -1.5405])
        cylinder(h = 0.3349, r1 = 0.892, r2 = 0.892, center = true, $fn = 12);
      }
    }
  
    intersection() {
      difference() {
        union() {
          difference() {
            translate([1.493, 9.489, 0])
            rotate([-90, 0, 0])
            cube(size = [0.5398, 36.1998, 17.2218], center = true);
          
            translate([0, 1.783, 0.528])
            rotate([180, 90, 180])
            cylinder(h = 36.1999, r1 = 0.25, r2 = 0.25, center = true, $fn = 12);
          }
        
          difference() {
            translate([1.493, -0.5025, 0.7955])
            rotate([-90, 0, 0])
            cube(size = [0.5398, 2.6108, 3.8048], center = true);
          
            translate([9.6615, -2.427, 0.53])
            rotate([180, 90, 180])
            cylinder(h = 16.8769, r1 = 0.252, r2 = 0.252, center = true, $fn = 12);
          }
        }
      
        translate([-8.1685, 1.608, 1.921])
        rotate([180, 90, -180])
        cylinder(h = 19.8629, r1 = 0.209, r2 = 0.209, center = true, $fn = 12);
      }
    
      union() {
        difference() {
          translate([1.466, -0.338, 0.706])
          rotate([-90, 0, 0])
          cube(size = [0.4858, 2.4318, 0.2338], center = true);
        
          translate([1.493, -0.439, 1.922])
          rotate([180, 90, 180])
          cylinder(h = 0.5399, r1 = 0.217, r2 = 0.217, center = true, $fn = 12);
        }
      
        translate([-8.1685, 0.2825, 0.5985])
        rotate([-90, 0, 0])
        cube(size = [19.8628, 2.2168, 5.3748], center = true);
      
        translate([-8.1685, 1.248, 1.8145])
        rotate([-90, 0, 0])
        cube(size = [19.8628, 0.2148, 0.7398], center = true);
      
        difference() {
          translate([1.493, 0.5895, 2.981])
          rotate([-90, 0, 0])
          cube(size = [0.5398, 2.5478, 1.6208], center = true);
        
          translate([1.493, 0.589, 2.101])
          rotate([180, 90, 180])
          cylinder(h = 0.5399, r1 = 0.273, r2 = 0.273, center = true, $fn = 12);
        }
      }
    }
  
    intersection() {
      translate([1.736, -1.627, -3.486])
      rotate([180, 90, 180])
      cylinder(h = 0.0538, r1 = 0.135, r2 = 0.135, center = true, $fn = 12);
    
      translate([-8.4385, -1.627, -3.486])
      rotate([180, 90, 180])
      cylinder(h = 19.3228, r1 = 0.135, r2 = 0.135, center = true, $fn = 12);
    }
  
    difference() {
      translate([1.493, 0.589, 4.188])
      rotate([180, 90, 180])
      cylinder(h = 0.5398, r1 = 0.811, r2 = 0.811, center = true, $fn = 12);
    
      union() {
        translate([1.493, 0.588, 3.444])
        rotate([180, 90, 180])
        cylinder(h = 0.5399, r1 = 0.271, r2 = 0.271, center = true, $fn = 12);
      
        translate([-8.1685, 0.589, 4.255])
        rotate([180, 90, 180])
        cylinder(h = 19.8629, r1 = 0.254, r2 = 0.254, center = true, $fn = 12);
      }
    }
  
    translate([1.493, -2.913, -0.053])
    rotate([-180, 0, 0])
    cube(size = [0.5398, 0.1138, 3.3098], center = true);
  
    difference() {
      translate([1.736, 1.783, 0.528])
      rotate([180, 90, 180])
      cylinder(h = 0.0538, r1 = 0.25, r2 = 0.25, center = true, $fn = 12);
    
      translate([1.493, 1.781, 0.531])
      rotate([180, 90, 180])
      cylinder(h = 0.5399, r1 = 0.161, r2 = 0.161, center = true, $fn = 12);
    }
  
    translate([1.493, -2.856, 1.591])
    rotate([0, 90, 0])
    cylinder(h = 0.5398, r1 = 0.116, r2 = 0.116, center = true, $fn = 12);
  
    difference() {
      translate([0.6905, -1.9685, -0.053])
      rotate([-180, 0, 0])
      cube(size = [2.1428, 1.7748, 3.3098], center = true);
    
      union() {
        translate([1.736, -2.429, 0.53])
        rotate([180, 90, 180])
        cylinder(h = 0.0539, r1 = 0.16, r2 = 0.16, center = true, $fn = 12);
      
        translate([0.6635, -1.9685, 0.0015])
        rotate([-180, 0, 0])
        cube(size = [2.0889, 1.7749, 3.2009], center = true);
      }
    }
  
    difference() {
      union() {
        translate([0.054, -2.868, -1.602])
        rotate([0, 90, 0])
        cylinder(h = 2.3378, r1 = 0.103, r2 = 0.103, center = true, $fn = 12);
      
        translate([0.054, -2.913, -0.9675])
        rotate([-180, 0, 0])
        cube(size = [2.3378, 0.1138, 1.2628], center = true);
      
        translate([0.054, -1.9685, -1.022])
        rotate([-180, 0, 0])
        cube(size = [2.3378, 1.7748, 1.3718], center = true);
      
        translate([-1.223, -1.6555, -1.022])
        rotate([-180, 0, 0])
        cube(size = [1.0798, 2.4008, 1.3718], center = true);
      }
    
      union() {
        translate([-1.413, -2.323, 8.196])
        cylinder(h = 19.8079, r1 = 0.594, r2 = 0.594, center = true, $fn = 12);
      
        translate([0.548, -2.205, -0.335])
        rotate([180, 90, -90])
        cylinder(h = 1.5299, r1 = 0.134, r2 = 0.134, center = true, $fn = 12);
      
        translate([-1.223, -1.9685, -1.068])
        rotate([-180, 0, 0])
        cube(size = [1.0799, 1.7749, 0.6099], center = true);
      
        translate([-1.415, -0.001, 8.196])
        cylinder(h = 19.8079, r1 = 0.892, r2 = 0.892, center = true, $fn = 12);
      }
    }
  
    difference() {
      translate([0.4205, -2.0255, -0.9675])
      rotate([-180, 0, 0])
      cube(size = [1.6028, 1.8888, 1.2628], center = true);
    
      translate([0.548, -8.611, -0.335])
      rotate([180, 90, -90])
      cylinder(h = 18.9779, r1 = 0.134, r2 = 0.134, center = true, $fn = 12);
    }
  
    difference() {
      union() {
        translate([1.493, -0.9885, 0.054])
        rotate([-180, 0, 0])
        cube(size = [0.5398, 3.7328, 3.3058], center = true);
      
        translate([0.6905, -2.859, -0.449])
        rotate([-180, 90, 180])
        cylinder(h = 2.1428, r1 = 0.113, r2 = 0.113, center = true, $fn = 12);
      }
    
      translate([9.6615, -2.427, 0.53])
      rotate([180, 90, 180])
      cylinder(h = 16.8769, r1 = 0.252, r2 = 0.252, center = true, $fn = 12);
    }
  }
}
