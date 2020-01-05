intersection() {
  translate([-0.0005, 0, 0])
  cube(size = [9.0708, 11.9978, 3.1438], center = true);

  union() {
    difference() {
      intersection() {
        union() {
          difference() {
            translate([-1.868, -3.23547, -9.4005])
            rotate([0, 0, -30])
            cube(size = [36.1978, 0.7358, 17.3968], center = true);
          
            translate([-10.146, 6.55, 0])
            cube(size = [15.9069, 23.0989, 36.1989], center = true);
          }
        
          difference() {
            translate([7.1605, 6.55, 0])
            cube(size = [21.8788, 23.0978, 36.1978], center = true);
          
            translate([-1.067, -4.236, -9.5225])
            cylinder(h = 17.2539, r1 = 0.276, r2 = 0.276, center = true, $fn = 12);
          }
        }
      
        union() {
          difference() {
            translate([-3.938, 6.82082, -1.006])
            rotate([-180, 0, 30])
            cube(size = [36.1978, 20.4458, 0.6078], center = true);
          
            translate([3.69975, 6.40815, 0])
            rotate([0, 0, -30])
            cube(size = [36.1989, 21.3999, 36.1989], center = true);
          }
        
          translate([-5.55125, -9.61505, -1.006])
          rotate([0, 0, -30])
          cube(size = [36.1978, 13.9928, 0.6078], center = true);
        }
      }
    
      union() {
        translate([5.112, -8.85424, -0.823])
        rotate([-180, 0, 30])
        cube(size = [36.1989, 15.7509, 0.2429], center = true);
      
        translate([-1.066, -3.994, -1.128])
        cylinder(h = 0.3649, r1 = 0.275, r2 = 0.275, center = true, $fn = 12);
      
        intersection() {
          translate([-2.866, 0, -9.4005])
          cube(size = [1.3469, 36.1989, 17.3979], center = true);
        
          union() {
            translate([-4.139, 7.16896, -1.006])
            rotate([-180, 0, 30])
            cube(size = [36.1989, 19.6429, 0.6089], center = true);
          
            translate([-2.575, -4.46003, 8.3945])
            rotate([0, 0, -30])
            cube(size = [36.1989, 0.7369, 19.4099], center = true);
          }
        
          translate([0.7885, -1.36572, -9.4005])
          rotate([-180, 0, 30])
          cube(size = [36.1989, 1.5409, 17.3979], center = true);
        }
      
        translate([-3.2455, 6.55, -9.7055])
        cube(size = [0.5879, 23.0989, 16.7879], center = true);
      }
    }
  
    intersection() {
      translate([-1.067, -1.335, 0])
      cylinder(h = 36.1978, r1 = 0.275, r2 = 0.275, center = true, $fn = 12);
    
      translate([0, 0, -9.4005])
      rotate([0, 0, -30])
      cube(size = [36.1978, 36.1978, 17.3968], center = true);
    
      union() {
        sphere(r = 54.2978, $fn = 108);
      
        translate([-1.067, -1.334, 0])
        cylinder(h = 36.1978, r1 = 0.412, r2 = 0.412, center = true, $fn = 12);
      }
    
      translate([-1.069, -1.094, 8.6995])
      cylinder(h = 18.7988, r1 = 0.276, r2 = 0.276, center = true, $fn = 12);
    }
  
    intersection() {
      difference() {
        translate([-7.547, 3.262, 8.623])
        cube(size = [21.1038, 0.6078, 18.9518], center = true);
      
        translate([-7.5003, 4.15748, 8.623])
        rotate([0, 0, -29])
        cube(size = [19.0479, 36.1989, 18.9529], center = true);
      }
    
      translate([3.007, 4.378, -1.128])
      cylinder(h = 0.3638, r1 = 0.274, r2 = 0.274, center = true, $fn = 12);
    
      translate([3.007, 1.463, 8.6995])
      cylinder(h = 18.7988, r1 = 0.274, r2 = 0.274, center = true, $fn = 12);
    
      sphere(r = 54.2978, $fn = 108);
    }
  
    difference() {
      intersection() {
        union() {
          translate([4.3235, 7.48852, -1.006])
          rotate([0, 0, -30])
          cube(size = [36.1978, 18.9038, 0.6078], center = true);
        
          translate([5.55125, -9.61505, -9.5225])
          rotate([-180, 0, 30])
          cube(size = [36.1978, 13.9928, 17.1528], center = true);
        
          difference() {
            translate([2.986, 6.55, -0.823])
            cube(size = [1.5858, 23.0978, 0.2418], center = true);
          
            translate([3.171, -4.117, 0])
            cylinder(h = 36.1989, r1 = 0.183, r2 = 0.183, center = true, $fn = 12);
          }
        }
      
        translate([2.986, 6.55, 8.3945])
        cube(size = [1.5858, 23.0978, 19.4088], center = true);
      
        translate([5.16575, -8.94734, -1.006])
        rotate([-180, 0, 30])
        cube(size = [36.1978, 15.5348, 0.6078], center = true);
      }
    
      intersection() {
        translate([2.866, 0, -1.006])
        cube(size = [1.3469, 36.1989, 0.6089], center = true);
      
        union() {
          translate([2.2215, -3.84775, 0])
          rotate([-180, 0, 30])
          cube(size = [36.1989, 2.1509, 36.1989], center = true);
        
          translate([0.1195, 0.20698, 0])
          rotate([0, 0, -30])
          cube(size = [36.1989, 0.7369, 36.1989], center = true);
        }
      
        union() {
          translate([3.17, -1.554, 0])
          cylinder(h = 36.1989, r1 = 0.182, r2 = 0.182, center = true, $fn = 12);
        
          translate([2.561, -2.836, 0])
          cylinder(h = 36.1989, r1 = 0.183, r2 = 0.183, center = true, $fn = 12);
        
          difference() {
            translate([3.938, 6.82082, -9.5225])
            rotate([0, 0, -30])
            cube(size = [36.1989, 20.4469, 17.1539], center = true);
          
            translate([2.0205, -3.49961, -1.128])
            rotate([-180, 0, 30])
            cube(size = [36.2, 1.48, 0.366], center = true);
          }
        }
      }
    }
  
    intersection() {
      union() {
        difference() {
          translate([-5.35025, -9.2669, 8.3945])
          rotate([0, 0, -30])
          cube(size = [36.1978, 14.7968, 19.4088], center = true);
        
          translate([4.911, -8.5061, -9.4005])
          rotate([-180, 0, 30])
          cube(size = [36.1989, 16.5549, 17.3979], center = true);
        }
      
        difference() {
          difference() {
            translate([4.911, -8.5061, 8.3945])
            rotate([-180, 0, 30])
            cube(size = [36.1978, 16.5538, 19.4088], center = true);
          
            translate([-3.171, -4.116, 0])
            cylinder(h = 36.1989, r1 = 0.183, r2 = 0.183, center = true, $fn = 12);
          }
        
          union() {
            translate([-2.876, 6.55, -1.128])
            cube(size = [0.1469, 23.0989, 0.3649], center = true);
          
            translate([7.954, 0, 8.5775])
            cube(size = [20.2909, 36.1989, 19.1439], center = true);
          }
        }
      }
    
      union() {
        difference() {
          difference() {
            translate([7.575, 6.55, -1.006])
            cube(size = [21.0478, 23.0978, 0.6078], center = true);
          
            translate([7.954, 6.55, -1.128])
            cube(size = [20.2909, 23.0989, 0.3649], center = true);
          }
        
          union() {
            translate([-2.561, -2.835, 8.3945])
            cylinder(h = 19.4099, r1 = 0.182, r2 = 0.182, center = true, $fn = 12);
          
            translate([-1.868, -3.23547, -9.5225])
            rotate([0, 0, -30])
            cube(size = [36.1989, 0.7369, 17.1539], center = true);
          }
        }
      
        difference() {
          translate([-3.365, 6.55, -1.006])
          cube(size = [0.8278, 23.0978, 0.6078], center = true);
        
          difference() {
            translate([-3.365, 6.55, -1.128])
            cube(size = [0.8289, 23.0989, 0.3649], center = true);
          
            translate([0.604, -1.04616, -1.128])
            rotate([-180, 0, 30])
            cube(size = [36.2, 0.804, 0.366], center = true);
          }
        }
      }
    }
  
    difference() {
      union() {
        translate([-13.6914, 3.73522, -0.884])
        rotate([-180, 0, 30])
        cube(size = [16.2188, 16.0368, 0.3638], center = true);
      
        translate([7.806, -9.212, -0.823])
        cube(size = [20.5858, 17.7738, 0.2418], center = true);
      
        translate([-9.13366, -4.15904, -1.006])
        rotate([-180, 0, 30])
        cube(size = [16.2188, 0.7118, 0.6078], center = true);
      
        translate([-3.006, 1.463, -1.128])
        cylinder(h = 0.3638, r1 = 0.411, r2 = 0.411, center = true, $fn = 12);
      }
    
      union() {
        translate([4.373, -7.57426, -0.823])
        rotate([-180, 0, 30])
        cube(size = [36.1989, 18.7069, 0.2429], center = true);
      
        translate([-3.006, 1.463, 8.5775])
        cylinder(h = 19.0439, r1 = 0.411, r2 = 0.411, center = true, $fn = 12);
      
        translate([-3.007, 1.464, 0])
        cylinder(h = 36.1989, r1 = 0.274, r2 = 0.274, center = true, $fn = 12);
      
        translate([-10.9405, 0, -1.006])
        cube(size = [14.3179, 36.1989, 0.6089], center = true);
      }
    }
  
    intersection() {
      translate([-7.42771, 4.11725, 0])
      rotate([0, 0, -29])
      cube(size = [19.2128, 36.1978, 36.1978], center = true);
    
      difference() {
        difference() {
          intersection() {
            translate([5.112, -8.85424, -0.823])
            rotate([-180, 0, 30])
            cube(size = [36.1978, 15.7498, 0.2418], center = true);
          
            sphere(r = 54.2978, $fn = 108);
          }
        
          union() {
            translate([-1.066, -4.237, 8.5775])
            cylinder(h = 19.0439, r1 = 0.411, r2 = 0.411, center = true, $fn = 12);
          
            translate([0, -11.55, 8.3945])
            cube(size = [36.1989, 13.0989, 19.4099], center = true);
          }
        }
      
        translate([-1.069, -3.994, -9.4005])
        cylinder(h = 17.3979, r1 = 0.412, r2 = 0.412, center = true, $fn = 12);
      }
    }
  
    difference() {
      difference() {
        difference() {
          difference() {
            translate([7.1605, -6.55, -1.006])
            cube(size = [21.8788, 23.0978, 0.6078], center = true);
          
            translate([-3.007, 1.464, -9.477])
            cylinder(h = 17.2449, r1 = 0.274, r2 = 0.274, center = true, $fn = 12);
          }
        
          union() {
            translate([7.1605, -7.5715, -0.823])
            cube(size = [21.8799, 21.0559, 0.3429], center = true);
          
            translate([-3.365, 3.262, -0.9305])
            cube(size = [0.8289, 0.6089, 0.4559], center = true);
          }
        }
      
        union() {
          translate([-3.006, 4.38, -1.0825])
          cylinder(h = 0.4559, r1 = 0.274, r2 = 0.274, center = true, $fn = 12);
        
          translate([0.823, 4.38, -0.823])
          cylinder(h = 0.2429, r1 = 0.413, r2 = 0.413, center = true, $fn = 12);
        
          translate([-0.824, 4.378, -9.5225])
          cylinder(h = 17.1539, r1 = 0.274, r2 = 0.274, center = true, $fn = 12);
        }
      }
    
      union() {
        translate([-4.5575, -7.89382, -1.128])
        rotate([0, 0, -30])
        cube(size = [36.1989, 17.9689, 0.3649], center = true);
      
        translate([-3.007, 4.378, -0.823])
        cylinder(h = 0.2429, r1 = 0.412, r2 = 0.412, center = true, $fn = 12);
      
        translate([0.825, 1.466, -9.5225])
        cylinder(h = 17.1539, r1 = 0.411, r2 = 0.411, center = true, $fn = 12);
      
        translate([-0.823, 4.377, -0.823])
        cylinder(h = 0.2529, r1 = 0.413, r2 = 0.413, center = true, $fn = 12);
      
        translate([0.823, 4.378, -1.006])
        cylinder(h = 0.6089, r1 = 0.274, r2 = 0.274, center = true, $fn = 12);
      
        translate([3.006, 4.378, 0])
        cylinder(h = 36.1989, r1 = 0.411, r2 = 0.411, center = true, $fn = 12);
      
        translate([-0.823, 1.463, -1.128])
        cylinder(h = 0.3649, r1 = 0.273, r2 = 0.273, center = true, $fn = 12);
      
        translate([8.33032, -4.61757, -9.4005])
        rotate([0, 0, -29])
        cube(size = [17.1499, 36.1989, 17.3979], center = true);
      }
    }
  
    difference() {
      intersection() {
        union() {
          difference() {
            translate([0.67325, -1.1661, 8.3945])
            rotate([-180, 0, 30])
            cube(size = [36.1978, 2.4308, 19.4088], center = true);
          
            translate([-1.067, -1.334, -0.823])
            cylinder(h = 0.2429, r1 = 0.412, r2 = 0.412, center = true, $fn = 12);
          }
        
          intersection() {
            translate([-1.067, -1.335, 0])
            cylinder(h = 36.1978, r1 = 0.275, r2 = 0.275, center = true, $fn = 12);
          
            translate([1.068, -1.094, -1.128])
            cylinder(h = 0.3638, r1 = 0.276, r2 = 0.276, center = true, $fn = 12);
          }
        }
      
        union() {
          translate([1.067, -1.334, -0.823])
          cylinder(h = 0.2418, r1 = 0.413, r2 = 0.413, center = true, $fn = 12);
        
          difference() {
            translate([-0.85775, -1.48567, -1.006])
            rotate([0, 0, -30])
            cube(size = [36.1978, 3.1688, 0.6078], center = true);
          
            translate([1.067, -1.092, -0.823])
            cylinder(h = 0.2429, r1 = 0.413, r2 = 0.413, center = true, $fn = 12);
          }
        }
      }
    
      union() {
        translate([1.067, -1.334, -9.4005])
        cylinder(h = 17.3979, r1 = 0.273, r2 = 0.273, center = true, $fn = 12);
      
        translate([-1.069, -1.094, -9.4005])
        cylinder(h = 17.3979, r1 = 0.276, r2 = 0.276, center = true, $fn = 12);
      
        translate([1.067, -1.334, 8.5775])
        cylinder(h = 19.0439, r1 = 0.413, r2 = 0.413, center = true, $fn = 12);
      
        translate([-1.067, -1.335, 0])
        cylinder(h = 36.1989, r1 = 0.275, r2 = 0.275, center = true, $fn = 12);
      
        translate([-4.4925, 7.78124, 8.6995])
        rotate([-180, 0, 30])
        cube(size = [36.1989, 18.2289, 18.7999], center = true);
      
        intersection() {
          translate([-1.063, -1.089, 8.5775])
          cylinder(h = 19.0439, r1 = 0.406, r2 = 0.406, center = true, $fn = 12);
        
          sphere(r = 54.2989, $fn = 108);
        }
      
        translate([1.068, -1.094, -9.4005])
        cylinder(h = 17.3979, r1 = 0.276, r2 = 0.276, center = true, $fn = 12);
      }
    }
  
    difference() {
      difference() {
        union() {
          difference() {
            translate([7.806, -9.37, -1.128])
            cube(size = [20.5858, 17.4578, 0.3638], center = true);
          
            translate([4.75998, -7.92194, 8.3945])
            rotate([-180, 0, 31])
            cube(size = [36.1989, 17.7149, 19.4099], center = true);
          }
        
          translate([7.806, -0.454, 0.305])
          cube(size = [20.5858, 0.3698, 2.0098], center = true);
        
          translate([7.806, 8.73, -1.006])
          cube(size = [20.5858, 18.7378, 0.6078], center = true);
        }
      
        union() {
          translate([0.011, 8.73, 1.309])
          rotate([180, 90, -90])
          cylinder(h = 18.7389, r1 = 0.974, r2 = 0.974, center = true, $fn = 12);
        
          translate([2.92717, 12.065, -9.4005])
          rotate([-180, 0, 30])
          cube(size = [19.0639, 18.2289, 17.3979], center = true);
        
          translate([-1.069, -1.094, 0])
          cylinder(h = 36.1989, r1 = 0.276, r2 = 0.276, center = true, $fn = 12);
        
          translate([7.806, -0.025, -9.4005])
          cube(size = [20.5869, 1.2289, 17.3979], center = true);
        }
      }
    
      intersection() {
        difference() {
          difference() {
            translate([7.806, 8.73, 0])
            cube(size = [20.5869, 18.7389, 36.1989], center = true);
          
            translate([0.011, 0.722, 1.309])
            rotate([180, 90, -90])
            cylinder(h = 0.264, r1 = 0.974, r2 = 0.974, center = true, $fn = 12);
          }
        
          union() {
            translate([3.32644, -8.60457, -8.791])
            rotate([-180, 0, 30])
            cube(size = [0.915, 17.97, 18.618], center = true);
          
            translate([-4.56221, 7.59279, 9.309])
            rotate([-180, 0, 31])
            cube(size = [36.2, 18.484, 17.582], center = true);
          }
        }
      
        difference() {
          union() {
            translate([7.806, 9.477, -9.5225])
            cube(size = [20.5869, 17.2449, 17.1539], center = true);
          
            translate([7.0239, 4.05525, 8.3945])
            rotate([-180, 0, 30])
            cube(size = [19.9779, 36.1989, 19.4099], center = true);
          }
        
          translate([-8.70052, 5.02325, 8.3945])
          rotate([0, 0, -30])
          cube(size = [16.107, 36.2, 19.411], center = true);
        }
      }
    }
  
    intersection() {
      union() {
        difference() {
          translate([-1.103, -1.91045, -0.823])
          rotate([0, 0, -30])
          cube(size = [36.1978, 2.1878, 0.2418], center = true);
        
          translate([-3.171, -1.555, 0])
          cylinder(h = 36.1989, r1 = 0.182, r2 = 0.182, center = true, $fn = 12);
        }
      
        translate([-3.6595, 0, -1.128])
        cube(size = [0.2388, 36.1978, 0.3638], center = true);
      
        translate([-3.2905, 8.73, -9.5835])
        cube(size = [0.9768, 18.7378, 17.0308], center = true);
      }
    
      difference() {
        union() {
          translate([-1.103, -1.91045, -1.128])
          rotate([0, 0, -30])
          cube(size = [36.1978, 2.1878, 0.3638], center = true);
        
          translate([-2.986, 0, -0.823])
          cube(size = [1.5858, 36.1978, 0.2418], center = true);
        }
      
        union() {
          translate([7.28, 8.888, 8.5775])
          cube(size = [21.6389, 18.4229, 19.0439], center = true);
        
          translate([-3.171, 0.122, -1.128])
          cylinder(h = 0.3649, r1 = 0.183, r2 = 0.183, center = true, $fn = 12);
        }
      }
    }
  
    intersection() {
      union() {
        difference() {
          translate([0.7135, -1.23582, -0.3965])
          rotate([-180, 0, 30])
          cube(size = [36.1978, 0.7358, 1.8268], center = true);
        
          translate([1.067, -1.092, -8.791])
          cylinder(h = 18.6169, r1 = 0.413, r2 = 0.413, center = true, $fn = 12);
        }
      
        intersection() {
          translate([8.73045, -4.83937, -1.006])
          rotate([0, 0, -29])
          cube(size = [16.2338, 36.1978, 0.6078], center = true);
        
          translate([-3.88425, 6.72772, -9.4005])
          rotate([-180, 0, 30])
          cube(size = [36.1978, 20.6608, 17.3968], center = true);
        }
      }
    
      union() {
        translate([-7.794, -0.454, -0.091])
        cube(size = [20.6098, 0.3698, 1.2178], center = true);
      
        translate([-4.2605, 7.3794, -9.4005])
        rotate([-180, 0, 30])
        cube(size = [36.1978, 19.1558, 17.3968], center = true);
      
        translate([-7.794, -0.454, -1.006])
        cube(size = [20.6098, 0.3698, 0.6078], center = true);
      
        translate([1.08975, -1.8875, -0.3965])
        rotate([-180, 0, 30])
        cube(size = [36.1978, 0.7648, 1.8268], center = true);
      
        difference() {
          union() {
            translate([-3.88425, 6.72772, -0.884])
            rotate([-180, 0, 30])
            cube(size = [36.1978, 20.6608, 0.3638], center = true);
          
            translate([-6.8942, -4.14245, -1.006])
            rotate([-180, 0, 31])
            cube(size = [20.1118, 36.1978, 0.6078], center = true);
          }
        
          union() {
            translate([-7.42771, 4.11725, -9.4005])
            rotate([0, 0, -29])
            cube(size = [19.2139, 36.1989, 17.3979], center = true);
          
            translate([-7.28, 0.107, -0.3965])
            cube(size = [21.6389, 1.4929, 1.8279], center = true);
          }
        }
      }
    
      difference() {
        difference() {
          translate([-7.1595, -8.623, -0.3965])
          cube(size = [21.8788, 18.9518, 1.8268], center = true);
        
          translate([1.067, -1.334, 0])
          cylinder(h = 36.1989, r1 = 0.413, r2 = 0.413, center = true, $fn = 12);
        }
      
        translate([8.62053, 5.17974, -0.092])
        rotate([-180, 0, 31])
        cube(size = [16.0849, 36.1989, 1.2189], center = true);
      }
    }
  
    intersection() {
      union() {
        difference() {
          translate([4.75998, -7.92194, 9.309])
          rotate([-180, 0, 31])
          cube(size = [36.1978, 17.7138, 17.5798], center = true);
        
          translate([1.708, 0.183, 0])
          cylinder(h = 36.1989, r1 = 0.259, r2 = 0.259, center = true, $fn = 12);
        }
      
        difference() {
          intersection() {
            translate([4.5575, -7.89382, 8.6995])
            rotate([-180, 0, 30])
            cube(size = [36.1978, 17.9678, 18.7988], center = true);
          
            translate([-7.794, -8.623, 8.5165])
            cube(size = [20.6098, 18.9518, 19.1648], center = true);
          }
        
          difference() {
            translate([-7.794, 0.161, 8.5775])
            cube(size = [20.6109, 0.8569, 19.0439], center = true);
          
            translate([-7.5003, 4.15748, -0.091])
            rotate([0, 0, -29])
            cube(size = [19.049, 36.2, 1.22], center = true);
          }
        }
      
        difference() {
          translate([-2.52637, -12.3, -0.3965])
          rotate([-180, 0, 31])
          cube(size = [19.1968, 17.7138, 1.8268], center = true);
        
          translate([1.067, -1.334, 8.3945])
          cylinder(h = 19.4099, r1 = 0.273, r2 = 0.273, center = true, $fn = 12);
        }
      }
    
      union() {
        difference() {
          translate([-7.794, 0.293, 0.9145])
          cube(size = [20.6098, 1.1198, 0.7908], center = true);
        
          translate([0.012, 0.161, 1.309])
          rotate([180, 90, -90])
          cylinder(h = 0.8569, r1 = 0.73, r2 = 0.73, center = true, $fn = 12);
        }
      
        translate([4.86875, 8.43292, -0.2135])
        rotate([0, 0, -30])
        cube(size = [36.1978, 16.7228, 1.4608], center = true);
      
        difference() {
          union() {
            translate([-7.794, -0.025, 0])
            cube(size = [20.6098, 1.2278, 2.6198], center = true);
          
            translate([1.067, -1.092, -1.128])
            cylinder(h = 0.3638, r1 = 0.413, r2 = 0.413, center = true, $fn = 12);
          }
        
          union() {
            translate([0.011, -0.025, 1.309])
            rotate([180, 90, -90])
            cylinder(h = 1.2289, r1 = 0.974, r2 = 0.974, center = true, $fn = 12);
          
            translate([1.068, -1.094, 8.3945])
            cylinder(h = 19.4099, r1 = 0.276, r2 = 0.276, center = true, $fn = 12);
          }
        }
      }
    }
  
    intersection() {
      union() {
        difference() {
          translate([-7.1595, 8.916, -8.791])
          cube(size = [21.8788, 18.3658, 18.6158], center = true);
        
          translate([3.17, 0.183, -9.4005])
          cylinder(h = 17.3979, r1 = 0.183, r2 = 0.183, center = true, $fn = 12);
        }
      
        translate([-7.794, -8.623, -9.5835])
        cube(size = [20.6098, 18.9518, 17.0308], center = true);
      
        translate([3.146, -9.184, -9.4005])
        cube(size = [1.2658, 17.8298, 17.3968], center = true);
      }
    
      union() {
        difference() {
          translate([8.62053, 5.17974, -8.791])
          rotate([-180, 0, 31])
          cube(size = [16.0838, 36.1978, 18.6158], center = true);
        
          union() {
            translate([3.006, 1.463, 0])
            cylinder(h = 36.1989, r1 = 0.411, r2 = 0.411, center = true, $fn = 12);
          
            translate([-7.42771, 4.11725, -1.006])
            rotate([0, 0, -29])
            cube(size = [19.2139, 36.1989, 0.6089], center = true);
          }
        }
      
        translate([8.73045, -4.83937, -8.791])
        rotate([0, 0, -29])
        cube(size = [16.2338, 36.1978, 18.6158], center = true);
      }
    
      union() {
        difference() {
          translate([0.7135, -1.23582, -1.006])
          rotate([-180, 0, 30])
          cube(size = [36.1978, 0.7358, 0.6078], center = true);
        
          translate([4.86875, 8.43292, -0.884])
          rotate([0, 0, -30])
          cube(size = [36.1989, 16.7239, 0.3649], center = true);
        }
      
        translate([-7.794, 0.107, -0.091])
        cube(size = [20.6098, 1.4918, 1.2178], center = true);
      
        translate([-7.649, 8.73, -1.006])
        cube(size = [20.8998, 18.7378, 0.6078], center = true);
      }
    }
  
    intersection() {
      difference() {
        translate([-7.1595, 10.5285, -1.006])
        cube(size = [21.8788, 15.1408, 0.6078], center = true);
      
        union() {
          translate([-7.1595, 3.262, 8.47])
          cube(size = [21.8799, 0.6089, 19.2569], center = true);
        
          translate([-7.5003, 4.15748, 8.3945])
          rotate([0, 0, -29])
          cube(size = [19.0479, 36.1989, 19.4099], center = true);
        }
      }
    
      union() {
        sphere(r = 54.2978, $fn = 108);
      
        translate([0, 0, 8.5775])
        rotate([0, 0, -30])
        cube(size = [36.1978, 36.1978, 19.0428], center = true);
      }
    }
  
    intersection() {
      union() {
        difference() {
          translate([-7.794, 9.345, -1.006])
          cube(size = [20.6098, 17.5078, 0.6078], center = true);
        
          translate([-7.5003, 4.15748, -9.4005])
          rotate([0, 0, -29])
          cube(size = [19.0479, 36.1989, 17.3979], center = true);
        }
      
        difference() {
          translate([0.825, 1.466, -9.5225])
          cylinder(h = 17.1528, r1 = 0.411, r2 = 0.411, center = true, $fn = 12);
        
          translate([0.823, 1.463, -9.5225])
          cylinder(h = 17.1539, r1 = 0.275, r2 = 0.275, center = true, $fn = 12);
        }
      }
    
      difference() {
        intersection() {
          translate([0, 9.345, -1.006])
          cube(size = [36.1978, 17.5078, 0.6078], center = true);
        
          translate([-4.56221, 7.59279, -9.4005])
          rotate([-180, 0, 31])
          cube(size = [36.1978, 18.4818, 17.3968], center = true);
        }
      
        difference() {
          translate([8.35043, -4.62872, -1.189])
          rotate([0, 0, -29])
          cube(size = [17.1039, 36.1989, 0.2429], center = true);
        
          translate([4.86875, 8.43292, -1.189])
          rotate([0, 0, -30])
          cube(size = [36.2, 16.725, 0.244], center = true);
        }
      }
    }
  
    intersection() {
      difference() {
        difference() {
          translate([5.05325, 8.75249, -1.006])
          rotate([0, 0, -30])
          cube(size = [36.1978, 15.9848, 0.6078], center = true);
        
          translate([3.006, 1.463, -0.823])
          cylinder(h = 0.2429, r1 = 0.411, r2 = 0.411, center = true, $fn = 12);
        }
      
        union() {
          translate([3.189, 3.262, -0.823])
          cube(size = [0.3649, 0.6089, 0.2429], center = true);
        
          translate([3.5765, 3.262, -1.0825])
          cube(size = [0.4079, 0.6089, 0.4559], center = true);
        }
      }
    
      difference() {
        translate([0, 0, 8.3945])
        rotate([0, 0, -29])
        cube(size = [36.1978, 36.1978, 19.4088], center = true);
      
        union() {
          translate([3.189, 3.262, -1.0065])
          cube(size = [0.3649, 0.6089, 0.3039], center = true);
        
          translate([3.007, 1.463, -1.0825])
          cylinder(h = 0.4559, r1 = 0.274, r2 = 0.274, center = true, $fn = 12);
        }
      }
    
      difference() {
        union() {
          translate([3.006, 4.378, -9.5225])
          cylinder(h = 17.1528, r1 = 0.411, r2 = 0.411, center = true, $fn = 12);
        
          translate([-7.1595, -7.2665, 8.3945])
          cube(size = [21.8788, 21.6648, 19.4088], center = true);
        }
      
        union() {
          translate([3.007, 4.378, -1.006])
          cylinder(h = 0.6089, r1 = 0.274, r2 = 0.274, center = true, $fn = 12);
        
          translate([10.9395, -7.2665, -0.823])
          cube(size = [14.3179, 21.6659, 0.2429], center = true);
        }
      }
    }
  
    difference() {
      intersection() {
        union() {
          translate([7.37031, -4.25525, -9.7055])
          rotate([0, 0, -30])
          cube(size = [19.1768, 36.1978, 16.7868], center = true);
        
          translate([7.806, -0.149, -8.791])
          cube(size = [20.5858, 0.9798, 18.6158], center = true);
        
          difference() {
            translate([7.806, 0.293, -8.3945])
            cube(size = [20.5858, 1.1198, 19.4088], center = true);
          
            translate([0.011, 9.22, 1.309])
            rotate([180, 90, -90])
            cylinder(h = 17.7669, r1 = 0.974, r2 = 0.974, center = true, $fn = 12);
          }
        }
      
        difference() {
          difference() {
            translate([-4.56221, 7.59279, 1.11022e-15])
            rotate([-180, 0, 31])
            cube(size = [36.1978, 18.4818, 2.6198], center = true);
          
            translate([-1.708, 0.122, 0.305])
            cylinder(h = 2.0109, r1 = 0.258, r2 = 0.258, center = true, $fn = 12);
          }
        
          translate([0.012, -8.8795, 1.309])
          rotate([180, 90, -90])
          cylinder(h = 18.4399, r1 = 0.73, r2 = 0.73, center = true, $fn = 12);
        }
      }
    
      union() {
        intersection() {
          translate([7.0239, 4.05525, 8.3945])
          rotate([-180, 0, 30])
          cube(size = [19.9779, 36.1989, 19.4099], center = true);
        
          translate([-1.33065, 0.76825, 8.3945])
          rotate([0, 0, -30])
          cube(size = [0.9139, 36.1989, 19.4099], center = true);
        
          difference() {
            translate([0, -8.755, -8.791])
            cube(size = [36.1989, 18.6889, 18.6169], center = true);
          
            translate([7.41967, 4.28375, -8.791])
            rotate([-180, 0, 30])
            cube(size = [19.065, 36.2, 18.618], center = true);
          }
        }
      
        difference() {
          translate([7.806, 0.107, -8.791])
          cube(size = [20.5869, 1.4929, 18.6169], center = true);
        
          union() {
            translate([-4.4925, 7.78124, 8.3945])
            rotate([-180, 0, 30])
            cube(size = [36.2, 18.23, 19.411], center = true);
          
            translate([0, 0.037, -0.091])
            cube(size = [36.2, 0.61, 1.22], center = true);
          }
        }
      }
    }
  
    intersection() {
      translate([-7.794, 0.722, 0.305])
      cube(size = [20.6098, 0.2618, 2.0098], center = true);
    
      difference() {
        translate([8.22838, 4.94411, -0.092])
        rotate([-180, 0, 31])
        cube(size = [16.9988, 36.1978, 1.2178], center = true);
      
        translate([8.40291, -4.65781, -0.091])
        rotate([0, 0, -29])
        cube(size = [16.9839, 36.1989, 1.2189], center = true);
      }
    }
  
    difference() {
      intersection() {
        union() {
          difference() {
            translate([4.4925, 7.78124, 8.5775])
            rotate([0, 0, -30])
            cube(size = [36.1978, 18.2278, 19.0428], center = true);
          
            translate([0.825, 1.466, 0])
            cylinder(h = 36.1989, r1 = 0.411, r2 = 0.411, center = true, $fn = 12);
          }
        
          translate([4.4925, 7.78124, 8.6995])
          rotate([0, 0, -30])
          cube(size = [36.1978, 18.2278, 18.7988], center = true);
        }
      
        translate([7.1605, -7.2665, -0.9305])
        cube(size = [21.8788, 21.6648, 0.4548], center = true);
      }
    
      union() {
        translate([7.1605, 3.262, -1.0065])
        cube(size = [21.8799, 0.6089, 0.3039], center = true);
      
        translate([-0.823, 1.464, -0.823])
        cylinder(h = 0.2429, r1 = 0.411, r2 = 0.411, center = true, $fn = 12);
      
        translate([8.33032, -4.61757, 8.3945])
        rotate([0, 0, -29])
        cube(size = [17.1499, 36.1989, 19.4099], center = true);
      
        translate([-3.006, 1.463, 8.5775])
        cylinder(h = 19.0439, r1 = 0.411, r2 = 0.411, center = true, $fn = 12);
      
        translate([-3.1425, 10.5285, -0.778])
        cube(size = [0.3839, 15.1419, 0.1509], center = true);
      }
    }
  
    difference() {
      intersection() {
        translate([3.32975, 5.7673, -9.5225])
        rotate([0, 0, -30])
        cube(size = [36.1978, 22.8788, 17.1528], center = true);
      
        union() {
          translate([-1.069, -3.994, -1.128])
          cylinder(h = 0.3638, r1 = 0.412, r2 = 0.412, center = true, $fn = 12);
        
          intersection() {
            translate([5.112, -8.85424, 0])
            rotate([-180, 0, 30])
            cube(size = [36.1978, 15.7498, 36.1978], center = true);
          
            translate([-7.42771, 4.11725, 8.3945])
            rotate([0, 0, -29])
            cube(size = [19.2128, 36.1978, 19.4088], center = true);
          }
        
          translate([-1.066, -4.237, 8.3945])
          cylinder(h = 19.4088, r1 = 0.411, r2 = 0.411, center = true, $fn = 12);
        }
      }
    
      union() {
        translate([-1.067, -4.236, -1.006])
        cylinder(h = 0.6089, r1 = 0.276, r2 = 0.276, center = true, $fn = 12);
      
        translate([-1.066, -3.994, 8.3945])
        cylinder(h = 19.4099, r1 = 0.275, r2 = 0.275, center = true, $fn = 12);
      
        translate([-1.066, -4.237, 8.6995])
        cylinder(h = 18.7999, r1 = 0.411, r2 = 0.411, center = true, $fn = 12);
      }
    }
  
    difference() {
      union() {
        intersection() {
          difference() {
            translate([-7.649, 6.55, -9.4005])
            cube(size = [20.8998, 23.0978, 17.3968], center = true);
          
            translate([1.068, -3.994, 0])
            cylinder(h = 36.1989, r1 = 0.274, r2 = 0.274, center = true, $fn = 12);
          }
        
          union() {
            translate([-4.911, -8.5061, 8.3945])
            rotate([0, 0, -30])
            cube(size = [36.1978, 16.5538, 19.4088], center = true);
          
            translate([1.4825, -2.56777, -1.006])
            rotate([-180, 0, 30])
            cube(size = [36.1978, 0.8018, 0.6078], center = true);
          }
        }
      
        intersection() {
          difference() {
            translate([-0.604, -1.04616, -1.006])
            rotate([0, 0, -30])
            cube(size = [36.1978, 0.8018, 0.6078], center = true);
          
            translate([2.561, 6.55, 8.3945])
            cube(size = [0.7369, 23.0989, 19.4099], center = true);
          }
        
          union() {
            translate([1.8515, -3.20689, -1.006])
            rotate([-180, 0, 30])
            cube(size = [36.1978, 0.8018, 0.6078], center = true);
          
            translate([-7.1595, 0, -1.128])
            cube(size = [21.8788, 36.1978, 0.3638], center = true);
          }
        }
      }
    
      union() {
        translate([1.065, -3.994, 8.5775])
        cylinder(h = 19.0439, r1 = 0.412, r2 = 0.412, center = true, $fn = 12);
      
        translate([1.068, -4.238, -0.823])
        cylinder(h = 0.2429, r1 = 0.412, r2 = 0.412, center = true, $fn = 12);
      
        translate([-1.069, -3.994, 8.5775])
        cylinder(h = 19.0439, r1 = 0.412, r2 = 0.412, center = true, $fn = 12);
      
        translate([-1.066, -4.237, 0])
        cylinder(h = 36.1989, r1 = 0.411, r2 = 0.411, center = true, $fn = 12);
      
        translate([-7.42771, 4.11725, -1.006])
        rotate([0, 0, -29])
        cube(size = [19.2139, 36.1989, 0.6089], center = true);
      
        translate([1.064, -4.237, -9.4005])
        cylinder(h = 17.3979, r1 = 0.273, r2 = 0.273, center = true, $fn = 12);
      
        translate([1.067, -1.334, -9.5225])
        cylinder(h = 17.1539, r1 = 0.273, r2 = 0.273, center = true, $fn = 12);
      }
    }
  
    intersection() {
      difference() {
        union() {
          difference() {
            translate([7.806, 8.73, -0.091])
            cube(size = [20.5858, 18.7378, 1.2178], center = true);
          
            translate([0.011, 8.73, 1.309])
            rotate([180, 90, -90])
            cylinder(h = 18.7389, r1 = 0.974, r2 = 0.974, center = true, $fn = 12);
          }
        
          difference() {
            translate([7.1605, 0, -1.006])
            cube(size = [21.8788, 36.1978, 0.6078], center = true);
          
            translate([5.05325, 8.75249, -9.4005])
            rotate([0, 0, -30])
            cube(size = [36.1989, 15.9859, 17.3979], center = true);
          }
        }
      
        union() {
          translate([7.954, 8.888, -8.791])
          cube(size = [20.2909, 18.4229, 18.6169], center = true);
        
          translate([4.75998, -7.92194, 8.3945])
          rotate([-180, 0, 31])
          cube(size = [36.1989, 17.7149, 19.4099], center = true);
        
          translate([-3.006, 1.463, 0])
          cylinder(h = 36.1989, r1 = 0.411, r2 = 0.411, center = true, $fn = 12);
        }
      }
    
      union() {
        translate([-3.6595, -9.212, -0.2135])
        cube(size = [0.2388, 17.7738, 1.4608], center = true);
      
        difference() {
          translate([7.649, 0, -1.006])
          cube(size = [20.8998, 36.1978, 0.6078], center = true);
        
          translate([-1.063, -1.089, 8.3945])
          cylinder(h = 19.4099, r1 = 0.406, r2 = 0.406, center = true, $fn = 12);
        }
      
        translate([-1.103, -1.91045, -9.4005])
        rotate([0, 0, -30])
        cube(size = [36.1978, 0.7118, 17.3968], center = true);
      
        difference() {
          translate([-8.65116, -4.99475, -0.3965])
          rotate([-180, 0, 30])
          cube(size = [16.2188, 36.1978, 1.8268], center = true);
        
          translate([-1.103, -1.91045, -9.4005])
          rotate([0, 0, -30])
          cube(size = [36.1989, 2.1889, 17.3979], center = true);
        }
      
        translate([11.2184, -3.20984, -0.092])
        rotate([-180, 0, 30])
        cube(size = [19.9768, 19.4198, 1.2178], center = true);
      }
    }
  }
}
