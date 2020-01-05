intersection() {
  translate([0, 0, 0.0005])
  cube(size = [8.3738, 11.9998, 2.6448], center = true);

  union() {
    intersection() {
      translate([0, -0.002, -1.035])
      rotate([0, 90, 0])
      cylinder(h = 36.1998, r1 = 1.416, r2 = 1.416, center = true, $fn = 12);
    
      difference() {
        intersection() {
          translate([7.99732, 0, -1.55452])
          rotate([90, 11, 0])
          cube(size = [19.9058, 36.1998, 36.1998], center = true);
        
          translate([-1.37, 0, -1.054])
          rotate([180, 90, -90])
          cylinder(h = 36.1998, r1 = 1.428, r2 = 1.428, center = true, $fn = 12);
        }
      
        union() {
          translate([-9.77014, 0, 1.89912])
          rotate([90, 11, 0])
          cube(size = [16.2939, 36.1999, 36.1999], center = true);
        
          translate([-0.418, -0.005, -9.364])
          cylinder(h = 17.4719, r1 = 1.409, r2 = 1.409, center = true, $fn = 12);
        }
      }
    
      translate([0, 0, -0.96])
      cube(size = [36.1998, 36.1998, 0.2838], center = true);
    
      translate([0, 1.82366, -9.3819])
      rotate([11, 0, 0])
      cube(size = [36.1998, 36.1998, 17.0848], center = true);
    }
  
    difference() {
      difference() {
        difference() {
          union() {
            translate([-8.4905, -1.55834, -8.01695])
            rotate([-11, 0, 0])
            cube(size = [19.2188, 36.1998, 19.8658], center = true);
          
            translate([-8.4905, 4.479, 0])
            cube(size = [19.2188, 0.4738, 2.2038], center = true);
          }
        
          union() {
            translate([-1.372, 4.653, 0])
            cylinder(h = 36.1999, r1 = 1.404, r2 = 1.404, center = true, $fn = 12);
          
            translate([-8.4905, -0.002, -1.035])
            rotate([0, 90, 0])
            cylinder(h = 19.2189, r1 = 1.416, r2 = 1.416, center = true, $fn = 12);
          }
        }
      
        union() {
          translate([0, 4.621, -9.601])
          cube(size = [36.1999, 0.7579, 16.9979], center = true);
        
          intersection() {
            translate([-8.4905, -6.692, 8.736])
            cube(size = [19.2189, 22.8159, 18.7279], center = true);
          
            translate([0, -1.55834, -8.01695])
            rotate([-11, 0, 0])
            cube(size = [36.1999, 36.1999, 19.8659], center = true);
          }
        
          translate([-9.77014, 0, 1.89912])
          rotate([90, 11, 0])
          cube(size = [16.2939, 36.1999, 36.1999], center = true);
        }
      }
    
      union() {
        translate([-1.37, 0, -1.054])
        rotate([180, 90, -90])
        cylinder(h = 36.1999, r1 = 1.428, r2 = 1.428, center = true, $fn = 12);
      
        intersection() {
          translate([-8.4905, -1.62999, 8.38555])
          rotate([11, 0, 0])
          cube(size = [19.2189, 36.1999, 19.1149], center = true);
        
          translate([0, -6.929, -0.865])
          cube(size = [36.1999, 22.3419, 0.4739], center = true);
        }
      
        translate([-8.4905, 11.55, -8.499])
        cube(size = [19.2189, 13.0999, 19.2019], center = true);
      
        translate([-8.4905, -6.692, -9.601])
        cube(size = [19.2189, 22.8159, 16.9979], center = true);
      }
    }
  
    difference() {
      intersection() {
        union() {
          difference() {
            translate([-10.0563, 0, 1.95474])
            rotate([90, 11, 0])
            cube(size = [15.7108, 36.1998, 36.1998], center = true);
          
            translate([-1.37, 0, -1.054])
            rotate([180, 90, -90])
            cylinder(h = 36.1999, r1 = 1.428, r2 = 1.428, center = true, $fn = 12);
          }
        
          intersection() {
            translate([-1.37, -6.692, -1.054])
            rotate([180, 90, -90])
            cylinder(h = 22.8158, r1 = 1.428, r2 = 1.428, center = true, $fn = 12);
          
            translate([6.48346, 6.48346, -0.865])
            rotate([-180, 0, 45])
            cube(size = [17.8618, 36.1998, 0.4738], center = true);
          }
        }
      
        union() {
          translate([7.3055, -6.692, 0])
          cube(size = [21.5888, 22.8158, 2.2038], center = true);
        
          intersection() {
            translate([0, 0.124407, 0.640021])
            rotate([-11, 0, 0])
            cube(size = [36.1998, 36.1998, 2.2258], center = true);
          
            translate([7.3055, 4.621, 0])
            cube(size = [21.5888, 0.7578, 2.2038], center = true);
          }
        }
      }
    
      union() {
        translate([-1.372, 4.653, -9.364])
        cylinder(h = 17.4719, r1 = 1.404, r2 = 1.404, center = true, $fn = 12);
      
        translate([7.3055, -1.7708, -9.10999])
        rotate([-11, 0, 0])
        cube(size = [21.5889, 36.1999, 17.6389], center = true);
      
        difference() {
          translate([0, 4.479, 0.237])
          cube(size = [36.1999, 0.4739, 1.7299], center = true);
        
          translate([0, 1.89531, 9.7505])
          rotate([-11, 0, 0])
          cube(size = [36.2, 36.2, 16.334], center = true);
        }
      
        translate([0, -6.929, 0.237])
        cube(size = [36.1999, 22.3419, 1.7299], center = true);
      
        translate([6.48346, 6.48346, -9.601])
        rotate([-180, 0, 45])
        cube(size = [17.8619, 36.1999, 16.9979], center = true);
      
        difference() {
          translate([0, 7.49052e-17, -0.865])
          rotate([-180, 0, 45])
          cube(size = [36.1999, 36.1999, 0.4739], center = true);
        
          translate([7.3055, 1.82366, -9.3819])
          rotate([11, 0, 0])
          cube(size = [21.589, 36.2, 17.085], center = true);
        }
      }
    }
  
    difference() {
      difference() {
        translate([6.28229, -6.28229, -0.96])
        rotate([180, 0, 45])
        cube(size = [36.1998, 18.4308, 0.2838], center = true);
      
        translate([-2.437, -2.369, 0])
        cylinder(h = 36.1999, r1 = 0.142, r2 = 0.142, center = true, $fn = 12);
      }
    
      union() {
        translate([7.99732, 6.929, -1.55452])
        rotate([90, 11, 0])
        cube(size = [19.9059, 36.1999, 22.3419], center = true);
      
        translate([0, -10.0244, 1.94854])
        rotate([-11, 0, 0])
        cube(size = [36.1999, 15.7759, 36.1999], center = true);
      }
    }
  
    intersection() {
      difference() {
        translate([0, 0, -0.865])
        cube(size = [36.1998, 36.1998, 0.4738], center = true);
      
        translate([2.794, 4.446, 0])
        cylinder(h = 2.2039, r1 = 1.69, r2 = 1.69, center = true, $fn = 12);
      }
    
      translate([9.6095, 1.82366, -9.3819])
      rotate([11, 0, 0])
      cube(size = [16.9808, 36.1998, 17.0848], center = true);
    
      difference() {
        translate([-8.06014, -6.929, 1.56673])
        rotate([90, 11, 0])
        cube(size = [19.7778, 36.1998, 22.3418], center = true);
      
        translate([1.714, 1.779, 0])
        cylinder(h = 36.1999, r1 = 0.284, r2 = 0.284, center = true, $fn = 12);
      }
    }
  
    intersection() {
      difference() {
        translate([7.3055, -4.479, 0])
        cube(size = [21.5888, 0.4738, 2.2038], center = true);
      
        translate([-1.369, -4.666, -9.364])
        cylinder(h = 17.4719, r1 = 1.409, r2 = 1.409, center = true, $fn = 12);
      }
    
      union() {
        translate([7.3055, -11.171, -0.865])
        cube(size = [21.5888, 13.8578, 0.4738], center = true);
      
        translate([7.3055, -1.89597, 9.75394])
        rotate([11, 0, 0])
        cube(size = [21.5888, 36.1998, 16.3268], center = true);
      }
    
      union() {
        translate([-10.0563, -4.621, 1.95474])
        rotate([90, 11, 0])
        cube(size = [15.7108, 36.1998, 0.7578], center = true);
      
        translate([-1.369, -4.666, -8.499])
        cylinder(h = 19.2018, r1 = 1.409, r2 = 1.409, center = true, $fn = 12);
      }
    
      translate([0, 6.692, -1.77636e-15])
      rotate([90, 11, 0])
      cube(size = [36.1998, 36.1998, 22.8158], center = true);
    
      rotate([11, 0, 0])
      cube(size = [36.1998, 36.1998, 36.1998], center = true);
    }
  
    difference() {
      translate([-1.842, 1.777, -0.96])
      cylinder(h = 0.2838, r1 = 0.282, r2 = 0.282, center = true, $fn = 12);
    
      translate([-1.842, 1.778, 8.499])
      cylinder(h = 19.2019, r1 = 0.142, r2 = 0.142, center = true, $fn = 12);
    }
  
    difference() {
      intersection() {
        union() {
          translate([1.714, 1.779, -0.96])
          cylinder(h = 0.2838, r1 = 0.284, r2 = 0.284, center = true, $fn = 12);
        
          translate([-7.7795, -1.7708, -9.10999])
          rotate([-11, 0, 0])
          cube(size = [20.6408, 36.1998, 17.6388], center = true);
        
          difference() {
            translate([3.95399, 0, 8.31379])
            rotate([90, 11, 0])
            cube(size = [1.2318, 18.3688, 36.1998], center = true);
          
            translate([-7.7795, -7.74308, -1.5051])
            rotate([11, 0, 0])
            cube(size = [20.6409, 20.4239, 36.1999], center = true);
          }
        }
      
        union() {
          translate([12.7658, 0.201172, -0.723])
          rotate([180, 0, 45])
          cube(size = [17.8618, 18.4308, 0.1898], center = true);
        
          difference() {
            translate([1.714, 1.779, -0.96])
            cylinder(h = 0.2838, r1 = 0.284, r2 = 0.284, center = true, $fn = 12);
          
            translate([1.712, 1.778, 8.499])
            cylinder(h = 19.2019, r1 = 0.141, r2 = 0.141, center = true, $fn = 12);
          }
        }
      }
    
      union() {
        translate([2.305, 2.371, -0.723])
        cylinder(h = 0.1899, r1 = 0.282, r2 = 0.282, center = true, $fn = 12);
      
        translate([2.794, 4.446, 0])
        cylinder(h = 36.1999, r1 = 1.69, r2 = 1.69, center = true, $fn = 12);
      
        translate([2.305, 2.371, -0.96])
        cylinder(h = 0.2839, r1 = 0.282, r2 = 0.282, center = true, $fn = 12);
      
        translate([1.714, 1.779, 8.6405])
        cylinder(h = 18.9169, r1 = 0.284, r2 = 0.284, center = true, $fn = 12);
      
        translate([0, -9.37306, 6.88045])
        rotate([11, 0, 0])
        cube(size = [36.1999, 20.4239, 19.1149], center = true);
      
        translate([2.794, 4.446, -9.459])
        cylinder(h = 17.2819, r1 = 1.69, r2 = 1.69, center = true, $fn = 12);
      
        translate([-0.0328805, -12.5975, -0.723])
        rotate([180, 0, 45])
        cube(size = [18.3379, 18.4309, 0.1899], center = true);
      
        translate([10.3205, -1.7708, -9.10999])
        rotate([-11, 0, 0])
        cube(size = [15.5589, 36.1999, 17.6389], center = true);
      }
    }
  
    difference() {
      union() {
        translate([2.778, 7.6625, 8.736])
        rotate([-180, 0, 0])
        cube(size = [0.4738, 20.8748, 18.7278], center = true);
      
        intersection() {
          translate([-7.30808, 7.6625, -0.639375])
          rotate([-90, -5, 0])
          cube(size = [21.5278, 36.1998, 20.8748], center = true);
        
          translate([6.48346, 6.48346, -0.865])
          rotate([-180, 0, 45])
          cube(size = [17.8618, 36.1998, 0.4738], center = true);
        }
      
        difference() {
          intersection() {
            translate([6.28229, 6.28229, -0.865])
            rotate([-180, 0, 45])
            cube(size = [18.4308, 36.1998, 0.4738], center = true);
          
            translate([-1.58953, 0, -8.17745])
            rotate([90, 11, 0])
            cube(size = [36.1998, 19.5388, 36.1998], center = true);
          }
        
          union() {
            translate([-7.3055, -10.4375, -1.33227e-15])
            rotate([-180, 0, 0])
            cube(size = [21.5889, 15.3249, 2.2039], center = true);
          
            translate([-7.7795, 7.74406, -1.50529])
            rotate([-11, 0, 0])
            cube(size = [20.6409, 20.4239, 36.1999], center = true);
          }
        }
      }
    
      union() {
        intersection() {
          translate([2.778, 0, 0.237])
          rotate([-180, 0, 0])
          cube(size = [0.4739, 36.1999, 1.7299], center = true);
        
          translate([-1.58953, 7.6625, -8.17745])
          rotate([90, 11, 0])
          cube(size = [36.1999, 19.5389, 20.8749], center = true);
        }
      
        translate([2.305, -2.372, -9.364])
        cylinder(h = 17.4719, r1 = 0.281, r2 = 0.281, center = true, $fn = 12);
      
        translate([-7.3055, 8.02824, 1.56053])
        rotate([11, 0, 0])
        cube(size = [21.5889, 19.8429, 36.1999], center = true);
      
        translate([-6.51634, -6.51634, 0])
        rotate([-180, 0, 45])
        cube(size = [17.7689, 36.1999, 36.1999], center = true);
      
        translate([-7.3055, -3.55271e-15, 9.601])
        rotate([-180, 0, 0])
        cube(size = [21.5889, 36.1999, 16.9979], center = true);
      
        translate([10.7945, 0, 0])
        rotate([-180, 0, 0])
        cube(size = [14.6109, 36.1999, 36.1999], center = true);
      }
    }
  
    intersection() {
      union() {
        difference() {
          translate([-6.51634, -6.51634, 0.1425])
          rotate([180, 0, 45])
          cube(size = [17.7688, 36.1998, 1.9188], center = true);
        
          translate([-1.37, -11.171, -1.054])
          rotate([180, 90, -90])
          cylinder(h = 13.8579, r1 = 1.428, r2 = 1.428, center = true, $fn = 12);
        }
      
        difference() {
          translate([0, 6.692, -0.96])
          cube(size = [36.1998, 22.8158, 0.2838], center = true);
        
          union() {
            translate([2.304, -2.37, 0])
            cylinder(h = 36.1999, r1 = 0.141, r2 = 0.141, center = true, $fn = 12);
          
            translate([1.711, -1.779, 0])
            cylinder(h = 2.2039, r1 = 0.14, r2 = 0.14, center = true, $fn = 12);
          }
        }
      }
    
      difference() {
        intersection() {
          difference() {
            translate([0.168291, -12.7986, -0.865])
            rotate([180, 0, 45])
            cube(size = [18.3378, 17.8618, 0.4738], center = true);
          
            translate([2.794, -4.451, -0.865])
            cylinder(h = 0.4739, r1 = 1.694, r2 = 1.694, center = true, $fn = 12);
          }
        
          translate([7.99732, 6.55, -1.55452])
          rotate([90, 11, 0])
          cube(size = [19.9058, 36.1998, 23.0998], center = true);
        }
      
        union() {
          translate([-0.418, -0.005, 8.499])
          cylinder(h = 19.2019, r1 = 1.409, r2 = 1.409, center = true, $fn = 12);
        
          translate([-1.369, -4.666, -0.865])
          cylinder(h = 0.4739, r1 = 1.409, r2 = 1.409, center = true, $fn = 12);
        
          translate([9.6095, -11.408, -0.723])
          cube(size = [16.9809, 13.3839, 0.1899], center = true);
        }
      }
    }
  
    intersection() {
      union() {
        difference() {
          translate([-7.45546, -6.929, 1.44919])
          rotate([90, 11, 0])
          cube(size = [21.0098, 36.1998, 22.3418], center = true);
        
          translate([12.7658, 0.201172, 8.6415])
          rotate([180, 0, 45])
          cube(size = [17.8619, 18.4309, 18.9169], center = true);
        }
      
        difference() {
          translate([-9.20794, -6.929, -7.56656])
          rotate([90, 11, 0])
          cube(size = [21.0098, 17.8308, 22.3418], center = true);
        
          translate([-7.7795, -5.91942, -10.887])
          rotate([11, 0, 0])
          cube(size = [20.6409, 20.4239, 17.0849], center = true);
        }
      }
    
      difference() {
        union() {
          translate([2.25283, -6.929, -0.437907])
          rotate([90, 11, 0])
          cube(size = [1.2318, 36.1998, 22.3418], center = true);
        
          translate([-7.7795, -7.74308, -1.5051])
          rotate([11, 0, 0])
          cube(size = [20.6408, 20.4238, 36.1998], center = true);
        }
      
        union() {
          translate([2.794, 4.446, 8.499])
          cylinder(h = 19.2019, r1 = 1.69, r2 = 1.69, center = true, $fn = 12);
        
          translate([-0.418, -0.005, -9.364])
          cylinder(h = 17.4719, r1 = 1.409, r2 = 1.409, center = true, $fn = 12);
        }
      }
    
      difference() {
        union() {
          translate([1.712, 1.778, 8.736])
          cylinder(h = 18.7278, r1 = 0.141, r2 = 0.141, center = true, $fn = 12);
        
          difference() {
            translate([6.48346, 6.48346, -0.865])
            rotate([180, 0, 45])
            cube(size = [17.8618, 36.1998, 0.4738], center = true);
          
            translate([3.011, -0.006, 0])
            cylinder(h = 36.1999, r1 = 1.402, r2 = 1.402, center = true, $fn = 12);
          }
        }
      
        intersection() {
          union() {
            translate([2.305, 2.371, -9.364])
            cylinder(h = 17.4719, r1 = 0.282, r2 = 0.282, center = true, $fn = 12);
          
            translate([1.714, 1.779, 0])
            cylinder(h = 36.1999, r1 = 0.284, r2 = 0.284, center = true, $fn = 12);
          }
        
          translate([-1.75249, 0, -9.01575])
          rotate([90, 11, 0])
          cube(size = [36.1999, 17.8309, 36.1999], center = true);
        }
      }
    }
  
    difference() {
      difference() {
        difference() {
          union() {
            translate([6.28229, 6.28229, -0.865])
            rotate([-180, 0, 45])
            cube(size = [18.4308, 36.1998, 0.4738], center = true);
          
            translate([3.015, 7.6625, 8.88178e-16])
            rotate([-180, 0, 0])
            cube(size = [0.9478, 20.8748, 2.2038], center = true);
          }
        
          difference() {
            translate([0, 7.6625, -1.77636e-15])
            rotate([90, 11, 0])
            cube(size = [36.1999, 36.1999, 20.8749], center = true);
          
            translate([3.252, -9.73921, -1.89311])
            rotate([11, 0, 0])
            cube(size = [0.474, 16.357, 36.2], center = true);
          }
        }
      
        translate([2.794, -4.451, 0])
        cylinder(h = 36.1999, r1 = 1.694, r2 = 1.694, center = true, $fn = 12);
      }
    
      difference() {
        union() {
          translate([10.723, 7.6625, 0.938144])
          rotate([-90, -5, 0])
          cube(size = [14.6719, 36.1999, 20.8749], center = true);
        
          translate([12.1761, 7.6625, 7.58556])
          rotate([90, 11, 0])
          cube(size = [15.1899, 16.6609, 20.8749], center = true);
        
          translate([6.48346, 6.48346, -9.364])
          rotate([-180, 0, 45])
          cube(size = [17.8619, 36.1999, 17.4719], center = true);
        }
      
        translate([3.142, 0, 0.873])
        rotate([180, 90, -90])
        cylinder(h = 36.2, r1 = 0.218, r2 = 0.218, center = true, $fn = 12);
      }
    }
  
    intersection() {
      difference() {
        difference() {
          translate([-7.3055, -7.6645, -9.364])
          rotate([-180, 0, 0])
          cube(size = [21.5888, 20.8708, 17.4718], center = true);
        
          translate([-0.418, -0.005, 0])
          cylinder(h = 36.1999, r1 = 1.409, r2 = 1.409, center = true, $fn = 12);
        }
      
        intersection() {
          translate([0, 1.23399e-17, 0.1425])
          rotate([180, 0, 45])
          cube(size = [36.1999, 36.1999, 1.9189], center = true);
        
          translate([1.714, -1.779, -0.723])
          cylinder(h = 0.1899, r1 = 0.285, r2 = 0.285, center = true, $fn = 12);
        }
      }
    
      union() {
        difference() {
          translate([-7.5425, 8.02824, 1.56053])
          rotate([11, 0, 0])
          cube(size = [21.1148, 19.8428, 36.1998], center = true);
        
          translate([-6.31517, 6.31517, -0.865])
          rotate([180, 0, 45])
          cube(size = [36.1999, 18.3379, 0.4739], center = true);
        }
      
        translate([-5.59135, -7.6645, 11.0392])
        rotate([90, 11, 0])
        cube(size = [21.0098, 16.6608, 20.8708], center = true);
      
        difference() {
          difference() {
            translate([-6.31517, 6.31517, -9.364])
            rotate([180, 0, 45])
            cube(size = [36.1998, 18.3378, 17.4718], center = true);
          
            translate([-9.04499, -7.6645, -6.72825])
            rotate([90, 11, 0])
            cube(size = [21.0099, 19.5389, 20.8709], center = true);
          }
        
          difference() {
            translate([3.252, 8.02824, 1.56053])
            rotate([11, 0, 0])
            cube(size = [0.4739, 19.8429, 36.1999], center = true);
          
            translate([3.142, 0, 0.873])
            rotate([180, 90, -90])
            cylinder(h = 36.2, r1 = 0.218, r2 = 0.218, center = true, $fn = 12);
          }
        }
      
        translate([2.305, 2.371, -9.459])
        cylinder(h = 17.2818, r1 = 0.282, r2 = 0.282, center = true, $fn = 12);
      }
    
      difference() {
        difference() {
          translate([-7.5425, 0, 0])
          rotate([-180, 0, 0])
          cube(size = [21.1148, 36.1998, 2.2038], center = true);
        
          translate([3.011, -0.006, 0])
          cylinder(h = 2.2039, r1 = 1.402, r2 = 1.402, center = true, $fn = 12);
        }
      
        translate([2.304, 2.37, -9.364])
        cylinder(h = 17.4719, r1 = 0.141, r2 = 0.141, center = true, $fn = 12);
      }
    }
  
    difference() {
      intersection() {
        difference() {
          translate([3.015, -7.6645, -8.88178e-16])
          rotate([-180, 0, 0])
          cube(size = [0.9478, 20.8708, 2.2038], center = true);
        
          translate([12.1761, 0, 7.58556])
          rotate([90, 11, 0])
          cube(size = [15.1899, 16.6609, 36.1999], center = true);
        }
      
        difference() {
          translate([-7.30808, 0, -0.639375])
          rotate([-90, -5, 0])
          cube(size = [21.5278, 36.1998, 36.1998], center = true);
        
          translate([3.015, -0.002, -1.035])
          rotate([0, 90, 0])
          cylinder(h = 0.9479, r1 = 1.416, r2 = 1.416, center = true, $fn = 12);
        }
      }
    
      intersection() {
        union() {
          translate([2.778, -7.6645, 8.6415])
          rotate([-180, 0, 0])
          cube(size = [0.4739, 20.8709, 18.9169], center = true);
        
          translate([-7.3055, -9.73921, -1.89311])
          rotate([11, 0, 0])
          cube(size = [21.5889, 16.3569, 36.1999], center = true);
        }
      
        union() {
          translate([-1.58953, -7.6645, -8.17745])
          rotate([90, 11, 0])
          cube(size = [36.1999, 19.5389, 20.8709], center = true);
        
          translate([10.3205, -9.73921, -1.89311])
          rotate([11, 0, 0])
          cube(size = [15.5589, 16.3569, 36.1999], center = true);
        }
      }
    }
  
    intersection() {
      difference() {
        translate([-0.0623333, 4.858, 0.0121164])
        rotate([90, 11, 0])
        cube(size = [3.4848, 36.1998, 0.2838], center = true);
      
        difference() {
          translate([-8.4905, 4.621, -9.601])
          cube(size = [19.2189, 0.7579, 16.9979], center = true);
        
          translate([9.6095, -1.62999, 8.38555])
          rotate([11, 0, 0])
          cube(size = [16.981, 36.2, 19.115], center = true);
        }
      }
    
      difference() {
        union() {
          translate([-8.4905, -1.55834, -8.01695])
          rotate([-11, 0, 0])
          cube(size = [19.2188, 36.1998, 19.8658], center = true);
        
          translate([-8.4905, 4.784, 0.888])
          rotate([180, 90, 180])
          cylinder(h = 19.2188, r1 = 0.207, r2 = 0.207, center = true, $fn = 12);
        }
      
        translate([-1.37, -6.55, -1.054])
        rotate([180, 90, -90])
        cylinder(h = 23.0999, r1 = 1.428, r2 = 1.428, center = true, $fn = 12);
      }
    }
  
    intersection() {
      difference() {
        difference() {
          translate([-0.033234, -0.033234, -0.865])
          rotate([-180, 0, 45])
          cube(size = [0.5678, 36.1998, 0.4738], center = true);
        
          translate([-2.436, 2.373, 8.6405])
          cylinder(h = 18.9169, r1 = 0.281, r2 = 0.281, center = true, $fn = 12);
        }
      
        union() {
          translate([0, -0.002, -1.035])
          rotate([0, 90, 0])
          cylinder(h = 36.1999, r1 = 1.416, r2 = 1.416, center = true, $fn = 12);
        
          translate([-1.842, 1.777, 0])
          cylinder(h = 36.1999, r1 = 0.282, r2 = 0.282, center = true, $fn = 12);
        }
      }
    
      union() {
        translate([6.48346, 6.48346, -9.459])
        rotate([-180, 0, 45])
        cube(size = [17.8618, 36.1998, 17.2818], center = true);
      
        translate([0, 10.0244, 1.94854])
        rotate([11, 0, 0])
        cube(size = [36.1998, 15.7758, 36.1998], center = true);
      
        translate([-10.0563, 0, 1.95474])
        rotate([90, 11, 0])
        cube(size = [15.7108, 36.1998, 36.1998], center = true);
      
        translate([-2.436, 2.373, 0])
        cylinder(h = 36.1998, r1 = 0.281, r2 = 0.281, center = true, $fn = 12);
      
        intersection() {
          translate([-1.37, 0, -1.054])
          rotate([180, 90, -90])
          cylinder(h = 36.1998, r1 = 1.428, r2 = 1.428, center = true, $fn = 12);
        
          translate([0, 8.19108e-16, -9.459])
          rotate([-180, 0, 45])
          cube(size = [36.1998, 36.1998, 17.2818], center = true);
        }
      
        translate([6.48346, 6.48346, -0.865])
        rotate([-180, 0, 45])
        cube(size = [17.8618, 36.1998, 0.4738], center = true);
      }
    
      union() {
        difference() {
          translate([0, -1.7708, -9.10999])
          rotate([-11, 0, 0])
          cube(size = [36.1998, 36.1998, 17.6388], center = true);
        
          translate([-2.434, 2.37, -9.459])
          cylinder(h = 17.2819, r1 = 0.142, r2 = 0.142, center = true, $fn = 12);
        }
      
        difference() {
          translate([-1.37, 0, -1.054])
          rotate([180, 90, -90])
          cylinder(h = 36.1998, r1 = 1.428, r2 = 1.428, center = true, $fn = 12);
        
          translate([-2.434, 2.37, 8.499])
          cylinder(h = 19.2019, r1 = 0.142, r2 = 0.142, center = true, $fn = 12);
        }
      }
    }
  
    difference() {
      intersection() {
        union() {
          translate([-1.842, 1.778, -9.601])
          cylinder(h = 16.9978, r1 = 0.142, r2 = 0.142, center = true, $fn = 12);
        
          intersection() {
            translate([-1.37, 0, -1.054])
            rotate([180, 90, -90])
            cylinder(h = 36.1998, r1 = 1.428, r2 = 1.428, center = true, $fn = 12);
          
            translate([0, 0, -0.723])
            cube(size = [36.1998, 36.1998, 0.1898], center = true);
          }
        }
      
        union() {
          translate([-1.37, 0, -1.054])
          rotate([180, 90, -90])
          cylinder(h = 36.1998, r1 = 1.428, r2 = 1.428, center = true, $fn = 12);
        
          translate([0, 0, 8.736])
          cube(size = [36.1998, 36.1998, 18.7278], center = true);
        }
      
        difference() {
          translate([7.99732, 0, -1.55452])
          rotate([90, 11, 0])
          cube(size = [19.9058, 36.1998, 36.1998], center = true);
        
          translate([-0.418, -0.005, 0])
          cylinder(h = 36.1999, r1 = 1.409, r2 = 1.409, center = true, $fn = 12);
        }
      }
    
      intersection() {
        difference() {
          translate([-1.37, 0, -1.054])
          rotate([180, 90, -90])
          cylinder(h = 36.1999, r1 = 1.428, r2 = 1.428, center = true, $fn = 12);
        
          union() {
            translate([0, -0.002, -1.035])
            rotate([0, 90, 0])
            cylinder(h = 36.2, r1 = 1.416, r2 = 1.416, center = true, $fn = 12);
          
            translate([0, 0, 8.736])
            cube(size = [36.2, 36.2, 18.728], center = true);
          }
        }
      
        union() {
          translate([-1.842, 1.777, -9.364])
          cylinder(h = 17.4719, r1 = 0.282, r2 = 0.282, center = true, $fn = 12);
        
          translate([0, 11.5634, -7.48869])
          rotate([11, 0, 0])
          cube(size = [36.1999, 16.3559, 17.0849], center = true);
        
          difference() {
            translate([0, -1.7708, -9.10999])
            rotate([-11, 0, 0])
            cube(size = [36.1999, 36.1999, 17.6389], center = true);
          
            translate([0, -6.20409, -10.9423])
            rotate([11, 0, 0])
            cube(size = [36.2, 19.844, 17.085], center = true);
          }
        }
      }
    }
  
    difference() {
      difference() {
        translate([-1.37, 0, -1.054])
        rotate([180, 90, -90])
        cylinder(h = 36.1998, r1 = 1.428, r2 = 1.428, center = true, $fn = 12);
      
        union() {
          translate([0, -0.002, -1.035])
          rotate([0, 90, 0])
          cylinder(h = 36.1999, r1 = 1.416, r2 = 1.416, center = true, $fn = 12);
        
          translate([6.48346, 6.48346, -9.601])
          rotate([-180, 0, 45])
          cube(size = [17.8619, 36.1999, 16.9979], center = true);
        }
      }
    
      union() {
        translate([-6.31517, -6.31517, 0])
        rotate([-180, 0, 45])
        cube(size = [18.3379, 36.1999, 36.1999], center = true);
      
        translate([0, 1.68284, 8.65746])
        rotate([-11, 0, 0])
        cube(size = [36.1999, 36.1999, 18.5609], center = true);
      }
    }
  
    intersection() {
      difference() {
        translate([0, 7.74406, -1.50529])
        rotate([-11, 0, 0])
        cube(size = [36.1998, 20.4238, 36.1998], center = true);
      
        translate([-2.437, -2.375, -0.865])
        cylinder(h = 0.4739, r1 = 0.279, r2 = 0.279, center = true, $fn = 12);
      }
    
      translate([-6.54922, -6.48346, -0.723])
      rotate([180, 0, 45])
      cube(size = [17.7688, 0.5688, 0.1898], center = true);
    
      translate([-10.0563, 0, 1.95474])
      rotate([90, 11, 0])
      cube(size = [15.7108, 36.1998, 36.1998], center = true);
    }
  
    intersection() {
      difference() {
        union() {
          translate([-1.369, -4.666, 0])
          cylinder(h = 36.1998, r1 = 1.409, r2 = 1.409, center = true, $fn = 12);
        
          difference() {
            sphere(r = 54.2998, $fn = 108);
          
            translate([7.71117, -11.408, -1.4989])
            rotate([90, 11, 0])
            cube(size = [20.4889, 36.1999, 13.3839], center = true);
          }
        }
      
        translate([-1.37, -4.858, -1.054])
        rotate([180, 90, -90])
        cylinder(h = 0.2839, r1 = 1.428, r2 = 1.428, center = true, $fn = 12);
      }
    
      union() {
        intersection() {
          translate([0, 1.55767, -8.01351])
          rotate([11, 0, 0])
          cube(size = [36.1998, 36.1998, 19.8728], center = true);
        
          translate([7.3055, -4.858, 0])
          cube(size = [21.5888, 0.2838, 2.2038], center = true);
        }
      
        difference() {
          translate([0, -4.772, 0.876])
          rotate([180, 90, 180])
          cylinder(h = 36.1998, r1 = 0.225, r2 = 0.225, center = true, $fn = 12);
        
          translate([7.71117, -11.55, -1.4989])
          rotate([90, 11, 0])
          cube(size = [20.4889, 36.1999, 13.0999], center = true);
        }
      }
    
      translate([7.3055, -4.858, -8.499])
      cube(size = [21.5888, 0.2838, 19.2018], center = true);
    }
  
    intersection() {
      difference() {
        difference() {
          translate([-0.0623333, 6.692, 0.0121164])
          rotate([90, 11, 0])
          cube(size = [3.4848, 36.1998, 22.8158], center = true);
        
          translate([6.28229, 6.28229, 0.237])
          rotate([180, 0, 45])
          cube(size = [18.4309, 36.1999, 1.7299], center = true);
        }
      
        union() {
          translate([2.794, -4.451, 0.1415])
          cylinder(h = 1.9189, r1 = 1.694, r2 = 1.694, center = true, $fn = 12);
        
          translate([1.714, -1.779, 8.6405])
          cylinder(h = 18.9169, r1 = 0.285, r2 = 0.285, center = true, $fn = 12);
        }
      }
    
      difference() {
        difference() {
          translate([-6.31517, -6.31517, 0.1425])
          rotate([180, 0, 45])
          cube(size = [18.3378, 36.1998, 1.9188], center = true);
        
          translate([-8.4905, 1.55767, -8.01351])
          rotate([11, 0, 0])
          cube(size = [19.2189, 36.1999, 19.8729], center = true);
        }
      
        translate([0, 6.929, 0.237])
        cube(size = [36.1999, 22.3419, 1.7299], center = true);
      }
    }
  
    difference() {
      union() {
        difference() {
          translate([-0.0623333, -4.858, 0.0121164])
          rotate([90, 11, 0])
          cube(size = [3.4848, 36.1998, 0.2838], center = true);
        
          translate([-8.4905, -4.858, -9.601])
          cube(size = [19.2189, 0.2839, 16.9979], center = true);
        }
      
        intersection() {
          translate([-1.369, -4.666, -9.601])
          cylinder(h = 16.9978, r1 = 1.409, r2 = 1.409, center = true, $fn = 12);
        
          translate([0, -4.858, -9.601])
          cube(size = [36.1998, 0.2838, 16.9978], center = true);
        }
      }
    
      union() {
        translate([-1.37, -4.858, -1.054])
        rotate([180, 90, -90])
        cylinder(h = 0.2839, r1 = 1.428, r2 = 1.428, center = true, $fn = 12);
      
        translate([9.6095, 0, 0])
        rotate([11, 0, 0])
        cube(size = [16.9809, 36.1999, 36.1999], center = true);
      
        difference() {
          translate([-8.4905, -1.89597, 9.75394])
          rotate([11, 0, 0])
          cube(size = [19.2189, 36.1999, 16.3269], center = true);
        
          translate([0, -4.772, 0.876])
          rotate([180, 90, 180])
          cylinder(h = 36.2, r1 = 0.225, r2 = 0.225, center = true, $fn = 12);
        }
      }
    }
  
    difference() {
      difference() {
        union() {
          translate([7.3055, 4.784, 0.888])
          rotate([180, 90, 180])
          cylinder(h = 21.5888, r1 = 0.207, r2 = 0.207, center = true, $fn = 12);
        
          translate([7.71117, 4.479, -1.4989])
          rotate([90, 11, 0])
          cube(size = [20.4888, 36.1998, 0.4738], center = true);
        
          difference() {
            translate([7.3055, 0.124407, 0.640021])
            rotate([-11, 0, 0])
            cube(size = [21.5888, 36.1998, 2.2258], center = true);
          
            translate([-1.37, 4.621, -1.054])
            rotate([180, 90, -90])
            cylinder(h = 0.7579, r1 = 1.428, r2 = 1.428, center = true, $fn = 12);
          }
        }
      
        union() {
          difference() {
            translate([7.3055, -1.55834, -8.01695])
            rotate([-11, 0, 0])
            cube(size = [21.5889, 36.1999, 19.8659], center = true);
          
            translate([7.71117, 4.858, -1.4989])
            rotate([90, 11, 0])
            cube(size = [20.489, 36.2, 0.284], center = true);
          }
        
          difference() {
            translate([7.71117, 4.621, -1.4989])
            rotate([90, 11, 0])
            cube(size = [20.4889, 36.1999, 0.7579], center = true);
          
            translate([-1.372, 4.653, 0.237])
            cylinder(h = 1.73, r1 = 1.404, r2 = 1.404, center = true, $fn = 12);
          }
        }
      }
    
      difference() {
        translate([7.3055, 1.82366, -9.3819])
        rotate([11, 0, 0])
        cube(size = [21.5889, 36.1999, 17.0849], center = true);
      
        translate([7.3055, 4.784, 0.888])
        rotate([180, 90, 180])
        cylinder(h = 21.589, r1 = 0.207, r2 = 0.207, center = true, $fn = 12);
      }
    }
  
    difference() {
      intersection() {
        translate([3.252, -7.6645, 0.237])
        rotate([-180, 0, 0])
        cube(size = [0.4738, 20.8708, 1.7298], center = true);
      
        translate([-7.3055, 8.02824, 1.56053])
        rotate([11, 0, 0])
        cube(size = [21.5888, 19.8428, 36.1998], center = true);
      
        translate([3.142, 0, 0.873])
        rotate([180, 90, -90])
        cylinder(h = 36.1998, r1 = 0.218, r2 = 0.218, center = true, $fn = 12);
      }
    
      translate([-7.5425, -7.6645, -0.865])
      rotate([-180, 0, 0])
      cube(size = [21.1149, 20.8709, 0.4739], center = true);
    }
  
    difference() {
      intersection() {
        union() {
          difference() {
            translate([6.28229, -6.28229, -0.96])
            rotate([180, 0, 45])
            cube(size = [36.1998, 18.4308, 0.2838], center = true);
          
            translate([0, -11.171, -9.459])
            cube(size = [36.1999, 13.8579, 17.2819], center = true);
          }
        
          translate([-13.0327, -9.7131e-16, -0.96])
          rotate([180, 0, 45])
          cube(size = [17.7688, 17.7688, 0.2838], center = true);
        
          translate([7.3055, 6.929, -0.723])
          cube(size = [21.5888, 22.3418, 0.1898], center = true);
        }
      
        union() {
          difference() {
            translate([7.99732, 0, -1.55452])
            rotate([90, 11, 0])
            cube(size = [19.9058, 36.1998, 36.1998], center = true);
          
            translate([0, -9.7397, 1.89321])
            rotate([-11, 0, 0])
            cube(size = [36.1999, 16.3559, 36.1999], center = true);
          }
        
          difference() {
            translate([7.3055, -10.0244, 1.94854])
            rotate([-11, 0, 0])
            cube(size = [21.5888, 15.7758, 36.1998], center = true);
          
            translate([-2.437, -2.375, 8.6405])
            cylinder(h = 18.9169, r1 = 0.279, r2 = 0.279, center = true, $fn = 12);
          }
        }
      }
    
      union() {
        translate([-1.846, -1.779, -0.723])
        cylinder(h = 0.1899, r1 = 0.286, r2 = 0.286, center = true, $fn = 12);
      
        translate([-1.369, -4.666, 0])
        cylinder(h = 36.1999, r1 = 1.409, r2 = 1.409, center = true, $fn = 12);
      
        translate([-1.842, -1.778, -9.459])
        cylinder(h = 17.2819, r1 = 0.141, r2 = 0.141, center = true, $fn = 12);
      
        translate([-0.418, -0.005, 8.499])
        cylinder(h = 19.2019, r1 = 1.409, r2 = 1.409, center = true, $fn = 12);
      
        difference() {
          translate([7.99732, 0, -1.55452])
          rotate([90, 11, 0])
          cube(size = [19.9059, 36.1999, 36.1999], center = true);
        
          translate([-12.8315, -0.201172, -3.55271e-15])
          rotate([180, 0, 45])
          cube(size = [17.769, 18.338, 36.2], center = true);
        }
      }
    }
  
    intersection() {
      difference() {
        translate([7.3055, 6.929, -0.865])
        cube(size = [21.5888, 22.3418, 0.4738], center = true);
      
        translate([-2.437, -2.375, -9.364])
        cylinder(h = 17.4719, r1 = 0.279, r2 = 0.279, center = true, $fn = 12);
      }
    
      union() {
        translate([-9.77014, 6.929, 1.89912])
        rotate([90, 11, 0])
        cube(size = [16.2938, 36.1998, 22.3418], center = true);
      
        translate([-0.234052, -12.7986, -0.865])
        rotate([180, 0, 45])
        cube(size = [17.7688, 18.4308, 0.4738], center = true);
      }
    
      difference() {
        union() {
          translate([7.3055, -1.99565, 0.387915])
          rotate([-11, 0, 0])
          cube(size = [21.5888, 0.5798, 36.1998], center = true);
        
          translate([-13.0327, -1.52202e-16, 8.499])
          rotate([180, 0, 45])
          cube(size = [17.7688, 17.7688, 19.2018], center = true);
        }
      
        union() {
          translate([-6.54922, -6.48346, 8.6415])
          rotate([180, 0, 45])
          cube(size = [17.7689, 0.5689, 18.9169], center = true);
        
          translate([-3.88, -0.004, 8.499])
          cylinder(h = 19.2019, r1 = 1.435, r2 = 1.435, center = true, $fn = 12);
        }
      }
    }
  }
}
