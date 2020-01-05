intersection() {
  translate([-0.0005, 0, 0])
  cube(size = [11.2537, 11.9967, 8.1107], center = true);

  union() {
    difference() {
      translate([-3.119, -2.857, 1.572])
      cube(size = [2.9487, 0.4727, 1.5207], center = true);
    
      translate([-4.238, -10.4095, 1.381])
      rotate([180, 90, -90])
      cylinder(h = 15.5788, r1 = 0.142, r2 = 0.142, center = true, $fn = 12);
    }
  
    intersection() {
      union() {
        translate([1.1905, 0, -2.2855])
        cube(size = [0.3297, 36.3967, 1.4257], center = true);
      
        translate([-1.67543, -8.695, 10.7921])
        rotate([90, 30, 0])
        cube(size = [22.7027, 19.3797, 19.0067], center = true);
      
        difference() {
          translate([9.612, -0.9045, -2.1195])
          cube(size = [17.1727, 3.4257, 1.5677], center = true);
        
          translate([1.79075, -2.381, -3.10167])
          rotate([-90, -30, 0])
          cube(size = [36.3978, 1.6048, 0.4738], center = true);
        }
      }
    
      union() {
        translate([1.1905, -2.857, -9.7665])
        cube(size = [0.3297, 0.4727, 16.8637], center = true);
      
        difference() {
          union() {
            translate([2.4045, -3.553, -0.835])
            rotate([180, 90, 180])
            cylinder(h = 2.0917, r1 = 0.502, r2 = 0.502, center = true, $fn = 12);
          
            translate([-6.755, -2.381, -2.1665])
            cube(size = [22.8867, 0.4727, 1.6637], center = true);
          }
        
          translate([10.1835, 7.7905, -10.195])
          cube(size = [16.0308, 20.8168, 16.0078], center = true);
        }
      }
    }
  
    difference() {
      union() {
        translate([2.4765, -1.1425, 0.6195])
        cube(size = [4.4257, 3.9017, 3.9017], center = true);
      
        translate([1.5955, -2.619, 1.024])
        cube(size = [1.1397, 0.9487, 4.7107], center = true);
      
        intersection() {
          translate([-7.374, -3.324, 1.4285])
          cube(size = [21.6487, 0.4547, 0.5677], center = true);
        
          translate([-0.16, -2.848, 0.277128])
          rotate([-90, -30, 0])
          cube(size = [36.3967, 2.3827, 1.4067], center = true);
        }
      
        intersection() {
          difference() {
            translate([1.47925, -1.6185, 2.56214])
            rotate([90, 30, 0])
            cube(size = [36.3967, 3.5077, 4.8537], center = true);
          
            translate([-8.969, 8.0285, 1.8575])
            cube(size = [18.4598, 20.3408, 1.4268], center = true);
          }
        
          union() {
            translate([-6.755, -2.857, 1.262])
            cube(size = [22.8867, 0.4727, 4.0447], center = true);
          
            translate([-7.374, -3.567, 1.237])
            rotate([180, 90, 180])
            cylinder(h = 21.6487, r1 = 0.477, r2 = 0.477, center = true, $fn = 12);
          }
        }
      }
    
      intersection() {
        translate([0, 7.3235, 10.076])
        cube(size = [36.3978, 21.7508, 16.2458], center = true);
      
        union() {
          translate([-8.969, -2.857, 2.976])
          cube(size = [18.4598, 0.4738, 0.8078], center = true);
        
          intersection() {
            translate([-4.79863, -2.619, 7.28653])
            rotate([90, 30, 0])
            cube(size = [20.7998, 1.6038, 0.9498], center = true);
          
            translate([1.595, -2.619, 2.976])
            cube(size = [0.4738, 0.9498, 0.8078], center = true);
          }
        
          translate([13.8583, -0.9045, 3.20125])
          rotate([90, 30, 0])
          cube(size = [15.5958, 16.9948, 3.4268], center = true);
        }
      }
    }
  
    difference() {
      union() {
        translate([0.1665, 3.0975, 0.9765])
        cube(size = [3.3297, 0.9537, 4.6157], center = true);
      
        translate([0.1665, 2.429, 0.9045])
        cube(size = [3.3297, 3.2347, 3.3297], center = true);
      
        translate([-1.119, 4.286, 0.19])
        rotate([180, 90, -90])
        cylinder(h = 0.2347, r1 = 1.907, r2 = 1.907, center = true, $fn = 12);
      }
    
      union() {
        translate([0, 3.3355, 2.4995])
        cube(size = [36.3978, 0.4788, 1.5788], center = true);
      
        translate([1.595, 10.4095, 2.929])
        rotate([180, 90, -90])
        cylinder(h = 15.5788, r1 = 0.142, r2 = 0.142, center = true, $fn = 12);
      
        difference() {
          translate([0.1665, 3.8715, 9.6715])
          cube(size = [3.3308, 0.5988, 17.0548], center = true);
        
          translate([0.1665, 3.576, 1.242])
          rotate([180, 90, 180])
          cylinder(h = 3.3319, r1 = 0.468, r2 = 0.468, center = true, $fn = 12);
        }
      }
    }
  
    intersection() {
      union() {
        difference() {
          translate([1.762, 3.0955, 7.6])
          cube(size = [0.8067, 1.9017, 21.1967], center = true);
        
          translate([1.595, 8.5285, -2.547])
          rotate([180, 90, -90])
          cylinder(h = 19.3408, r1 = 0.142, r2 = 0.142, center = true, $fn = 12);
        }
      
        translate([2.81, 3.3335, 7.6475])
        cube(size = [1.2727, 1.4257, 21.1017], center = true);
      
        intersection() {
          union() {
            translate([4.213, -7.312, -1.715])
            rotate([180, 90, -90])
            cylinder(h = 21.7727, r1 = 0.474, r2 = 0.474, center = true, $fn = 12);
          
            translate([-10.1789, 0, -3.93642])
            rotate([90, 30, 0])
            cube(size = [22.7027, 19.3997, 36.3967], center = true);
          }
        
          union() {
            translate([1.595, 0.238, 8.005])
            cube(size = [6.1867, 4.7587, 20.3867], center = true);
          
            translate([0.4045, 0, 7.5285])
            cube(size = [4.5677, 2.2827, 21.3397], center = true);
          }
        }
      
        translate([1.1905, 2.619, -1.881])
        cube(size = [0.3297, 0.9487, 2.2347], center = true);
      }
    
      union() {
        difference() {
          translate([-4.24925, 2.3595, -7.35992])
          rotate([90, 30, 0])
          cube(size = [36.3967, 19.3997, 2.4297], center = true);
        
          translate([2.4045, 2.3595, -2.238])
          cube(size = [2.0928, 2.4308, 1.8078], center = true);
        }
      
        difference() {
          translate([1.3145, 8.0285, -2.27678])
          rotate([-90, -30, 0])
          cube(size = [36.3967, 3.5087, 20.3397], center = true);
        
          difference() {
            translate([0.976, 1.452, -1.881])
            cube(size = [4.9498, 5.1978, 2.2358], center = true);
          
            translate([-7.374, 3.575, -0.858])
            rotate([180, 90, 180])
            cylinder(h = 21.6509, r1 = 0.471, r2 = 0.471, center = true, $fn = 12);
          }
        }
      
        translate([2.6425, 0.976, -2.595])
        cube(size = [1.6157, 4.2347, 0.8067], center = true);
      }
    }
  
    intersection() {
      translate([-8.16388, -1.6185, 1.45774])
      rotate([90, 30, 0])
      cube(size = [20.7987, 3.2697, 4.8537], center = true);
    
      union() {
        difference() {
          translate([-3.5475, -2.857, 7.6475])
          cube(size = [2.0917, 0.4727, 21.1017], center = true);
        
          translate([-4.238, 0, -1])
          rotate([180, 90, -90])
          cylinder(h = 36.3978, r1 = 0.142, r2 = 0.142, center = true, $fn = 12);
        }
      
        translate([-3.595, -2.619, -0.5955])
        cube(size = [2.1867, 0.9487, 0.3297], center = true);
      
        translate([7.7785, -3.572, 8.719])
        cube(size = [20.8397, 0.9487, 18.9587], center = true);
      
        translate([7.7785, -3.553, -0.835])
        rotate([180, 90, 180])
        cylinder(h = 20.8397, r1 = 0.502, r2 = 0.502, center = true, $fn = 12);
      
        translate([-2.643, -2.619, -1.7145])
        cube(size = [0.2827, 0.9487, 2.5677], center = true);
      
        translate([-3.413, -1.1425, -1.72])
        rotate([180, 90, -90])
        cylinder(h = 3.9017, r1 = 0.464, r2 = 0.464, center = true, $fn = 12);
      
        translate([-1.8095, -2.619, -2.595])
        cube(size = [0.3297, 0.9487, 0.8067], center = true);
      }
    }
  
    difference() {
      union() {
        translate([-3.5475, -1.1425, 2.095])
        cube(size = [2.0917, 3.9017, 0.9487], center = true);
      
        translate([-3.5475, -2.857, 2.4525])
        cube(size = [2.0917, 0.4727, 1.6637], center = true);
      }
    
      union() {
        translate([-5.41709, -0.9045, 12.9523])
        rotate([90, 30, 0])
        cube(size = [14.0628, 19.3808, 3.4268], center = true);
      
        translate([0.941814, -2.857, 13.8147])
        rotate([-90, -30, 0])
        cube(size = [20.9518, 13.4118, 0.4738], center = true);
      }
    }
  
    intersection() {
      union() {
        translate([7.1595, -1.929, 8.005])
        cube(size = [22.0777, 5.4727, 20.3867], center = true);
      
        intersection() {
          union() {
            translate([0, -2.619, -0.9995])
            cube(size = [36.3967, 0.9487, 1.1397], center = true);
          
            translate([-2.143, -3.405, 7.6475])
            cube(size = [0.9967, 2.5207, 21.1017], center = true);
          }
        
          translate([3.436, -1.928, 5.95133])
          rotate([90, 30, 0])
          cube(size = [36.3967, 22.6527, 5.4727], center = true);
        }
      }
    
      union() {
        difference() {
          translate([-8.16388, 7.076, 1.45774])
          rotate([90, 30, 0])
          cube(size = [20.7987, 3.2697, 22.2447], center = true);
        
          translate([6.8025, -3.572, 7.6475])
          cube(size = [22.7928, 0.9498, 21.1028], center = true);
        }
      
        translate([7.7785, -1.3715, -0.8805])
        cube(size = [20.8397, 4.3597, 0.9017], center = true);
      
        translate([-1.12, -4.536, 0.189])
        rotate([180, 90, -90])
        cylinder(h = 0.2587, r1 = 0.711, r2 = 0.711, center = true, $fn = 12);
      }
    
      union() {
        translate([1.84171, -1.929, 11.0671])
        rotate([-90, -30, 0])
        cube(size = [22.1417, 19.0697, 5.4727], center = true);
      
        translate([3.62991, -1.1425, 6.62919])
        rotate([90, 30, 0])
        cube(size = [5.5427, 21.2847, 3.9017], center = true);
      
        translate([-3.166, -1.1425, -1.4045])
        cube(size = [3.0447, 3.9017, 0.3297], center = true);
      }
    }
  
    translate([0.1665, 3.575, -0.858])
    rotate([180, 90, 180])
    cylinder(h = 3.3297, r1 = 0.471, r2 = 0.471, center = true, $fn = 12);
  
    difference() {
      union() {
        translate([-7.374, -1.6195, 0.1905])
        cube(size = [21.6487, 4.8537, 1.9017], center = true);
      
        translate([-1.119, -1.1425, 0.19])
        rotate([180, 90, -90])
        cylinder(h = 3.9017, r1 = 1.907, r2 = 1.907, center = true, $fn = 12);
      
        translate([1.857, -3.0955, 2.2145])
        cube(size = [3.1867, 1.9017, 2.1397], center = true);
      
        translate([-1.119, -4.286, 0.19])
        rotate([180, 90, -90])
        cylinder(h = 0.2347, r1 = 1.907, r2 = 1.907, center = true, $fn = 12);
      
        translate([4.213, -1.3715, 2.094])
        rotate([180, 90, -90])
        cylinder(h = 4.3597, r1 = 0.475, r2 = 0.475, center = true, $fn = 12);
      
        translate([-8.1835, -3.553, -0.835])
        rotate([180, 90, 180])
        cylinder(h = 20.0297, r1 = 0.502, r2 = 0.502, center = true, $fn = 12);
      
        difference() {
          translate([-8.588, -3.324, 0.191])
          cube(size = [19.2207, 0.4547, 3.0447], center = true);
        
          translate([-8.588, -3.567, 1.237])
          rotate([180, 90, 180])
          cylinder(h = 19.2218, r1 = 0.477, r2 = 0.477, center = true, $fn = 12);
        }
      }
    
      union() {
        difference() {
          translate([-4.33175, -1.679, 7.50281])
          rotate([-90, -30, 0])
          cube(size = [36.3978, 19.0708, 4.9738], center = true);
        
          translate([0.88275, 7.076, 1.52897])
          rotate([90, 30, 0])
          cube(size = [36.3989, 5.8959, 22.2469], center = true);
        }
      
        difference() {
          union() {
            translate([-4.92825, -1.679, 8.53598])
            rotate([-90, -30, 0])
            cube(size = [36.3978, 16.6848, 4.9738], center = true);
          
            translate([3.2615, -2.381, 2.928])
            cube(size = [2.8548, 0.4738, 0.7118], center = true);
          }
        
          difference() {
            translate([-8.0165, -3.086, 2.2145])
            cube(size = [20.3659, 0.9329, 2.1419], center = true);
          
            translate([1.595, 0, 2.929])
            rotate([180, 90, -90])
            cylinder(h = 36.4, r1 = 0.142, r2 = 0.142, center = true, $fn = 12);
          }
        }
      
        difference() {
          translate([-6.755, -3.6315, 2.2145])
          cube(size = [22.8878, 1.0788, 2.1408], center = true);
        
          translate([-1.119, -3.572, 0.19])
          rotate([180, 90, -90])
          cylinder(h = 0.9509, r1 = 1.907, r2 = 1.907, center = true, $fn = 12);
        }
      }
    }
  
    intersection() {
      translate([-3.1905, 9.505, 2.2615])
      cube(size = [1.3777, 17.3867, 0.6157], center = true);
    
      translate([6.09032, 1.4765, -3.51625])
      rotate([90, 30, 0])
      cube(size = [22.3317, 36.3967, 1.3297], center = true);
    }
  
    intersection() {
      union() {
        translate([6.09532, -3.5715, -3.50759])
        rotate([90, 30, 0])
        cube(size = [22.3317, 2.3827, 2.8537], center = true);
      
        translate([-3.414, -0.9045, 2.106])
        rotate([180, 90, -90])
        cylinder(h = 3.4257, r1 = 0.461, r2 = 0.461, center = true, $fn = 12);
      }
    
      union() {
        translate([7.7785, -3.567, 1.237])
        rotate([180, 90, 180])
        cylinder(h = 20.8397, r1 = 0.477, r2 = 0.477, center = true, $fn = 12);
      
        translate([-3.5475, 7.5525, -7.8145])
        cube(size = [2.0917, 21.2917, 20.7677], center = true);
      }
    }
  
    translate([-1.8095, -2.619, 2.0955])
    cube(size = [0.3297, 0.9487, 2.5677], center = true);
  
    intersection() {
      union() {
        intersection() {
          difference() {
            translate([-0.16, 2.8595, 0.277128])
            rotate([-90, -30, 0])
            cube(size = [36.3967, 2.3827, 1.4297], center = true);
          
            translate([2.6425, 3.0955, 9.957])
            cube(size = [1.6168, 1.9028, 16.4838], center = true);
          }
        
          union() {
            translate([4.213, 2.619, 2.094])
            rotate([180, 90, -90])
            cylinder(h = 0.9487, r1 = 0.475, r2 = 0.475, center = true, $fn = 12);
          
            translate([2.6425, 2.8595, -7.457])
            cube(size = [1.6157, 1.4297, 21.4827], center = true);
          }
        }
      
        difference() {
          union() {
            translate([3.429, 1.953, 2.2145])
            cube(size = [2.5207, 2.2827, 2.1397], center = true);
          
            translate([1.5955, 2.619, 2.262])
            cube(size = [1.1397, 0.9487, 2.2347], center = true);
          }
        
          translate([3.429, 2.381, 2.6185])
          cube(size = [2.5218, 0.4738, 1.3308], center = true);
        }
      }
    
      union() {
        difference() {
          translate([2.2385, 2.8595, -7.4095])
          cube(size = [2.4257, 1.4297, 21.5777], center = true);
        
          translate([1.595, 2.8595, 9.6715])
          cube(size = [0.4738, 1.4308, 17.0548], center = true);
        }
      
        translate([3.2615, 2.193, 1.548])
        cube(size = [2.8537, 2.7627, 0.8067], center = true);
      
        translate([3.0235, 2.857, 1.8575])
        cube(size = [3.3297, 0.4727, 1.4257], center = true);
      
        intersection() {
          translate([-0.16, 1.953, 0.277128])
          rotate([-90, -30, 0])
          cube(size = [36.3967, 2.3827, 2.2827], center = true);
        
          translate([-3.3715, 2.619, -5.83961])
          rotate([90, 30, 0])
          cube(size = [36.3967, 22.9107, 0.9487], center = true);
        }
      
        translate([4.213, -7.5525, 2.094])
        rotate([180, 90, -90])
        cylinder(h = 21.2917, r1 = 0.475, r2 = 0.475, center = true, $fn = 12);
      
        translate([-3.773, 2.381, -6.53503])
        rotate([90, 30, 0])
        cube(size = [36.3967, 21.3047, 0.4727], center = true);
      }
    }
  
    intersection() {
      difference() {
        difference() {
          translate([3.778, 1.4765, 6.54369])
          rotate([90, 30, 0])
          cube(size = [36.3967, 21.2847, 1.3297], center = true);
        
          translate([7.85, 9.505, -8.124])
          cube(size = [20.6978, 17.3878, 20.1498], center = true);
        }
      
        translate([-9.67134, -8.0285, 5.58375])
        rotate([90, 30, 0])
        cube(size = [14.0628, 36.3978, 20.3408], center = true);
      }
    
      translate([7.1595, 0, -8.124])
      cube(size = [22.0777, 36.3967, 20.1487], center = true);
    }
  
    translate([-2.143, -2.848, 1.2625])
    cube(size = [0.9967, 1.4067, 0.9017], center = true);
  
    intersection() {
      union() {
        translate([-1.12, 4.536, 0.189])
        rotate([180, 90, -90])
        cylinder(h = 0.2587, r1 = 0.711, r2 = 0.711, center = true, $fn = 12);
      
        translate([-2.143, 2.619, 1.3095])
        cube(size = [1.2827, 0.9487, 4.1397], center = true);
      
        difference() {
          translate([-3.0475, -7.7905, 1.4285])
          cube(size = [3.0917, 20.8157, 0.5677], center = true);
        
          translate([-3.619, 1.786, 1.8575])
          cube(size = [1.9498, 0.7118, 1.4268], center = true);
        }
      }
    
      difference() {
        union() {
          translate([-3.1905, 2.619, 9.957])
          cube(size = [1.3777, 0.9487, 16.4827], center = true);
        
          translate([1.84107, 3.048, -10.8762])
          rotate([90, 30, 0])
          cube(size = [22.3317, 19.3997, 3.2347], center = true);
        }
      
        translate([-2.6905, 2.5025, 1.833])
        cube(size = [2.3788, 2.1448, 0.2358], center = true);
      }
    }
  
    translate([-2.643, -2.619, 2.976])
    cube(size = [0.2827, 0.9487, 0.8067], center = true);
  
    translate([-3.595, -2.619, 0.9765])
    cube(size = [2.1867, 0.9487, 0.3297], center = true);
  
    difference() {
      union() {
        translate([-9.85, 3.0955, 0.1905])
        cube(size = [16.6967, 1.9017, 1.9017], center = true);
      
        translate([-3.2855, 3.0975, 1.548])
        cube(size = [2.6157, 0.9537, 0.8067], center = true);
      
        translate([-1.119, 3.2145, 0.19])
        rotate([180, 90, -90])
        cylinder(h = 3.5677, r1 = 0.19, r2 = 0.19, center = true, $fn = 12);
      
        translate([1.84107, 3.0975, -10.8762])
        rotate([90, 30, 0])
        cube(size = [22.3317, 19.3997, 0.9537], center = true);
      
        translate([-2.143, 3.576, 1.242])
        rotate([180, 90, 180])
        cylinder(h = 1.2827, r1 = 0.468, r2 = 0.468, center = true, $fn = 12);
      
        translate([10.3843, 2.619, -2.54016])
        rotate([-90, -30, 0])
        cube(size = [20.9507, 21.6147, 0.9487], center = true);
      
        translate([-3.262, 2.7385, 0.595])
        cube(size = [1.2347, 2.6157, 2.7107], center = true);
      }
    
      union() {
        difference() {
          translate([0, 2.5025, 0])
          cube(size = [36.3978, 2.1448, 36.3978], center = true);
        
          union() {
            translate([-2.6905, 2.7385, 0.476])
            cube(size = [2.3799, 2.6179, 2.4749], center = true);
          
            translate([-3.333, 2.2625, 2.048])
            cube(size = [2.7129, 1.6659, 2.4749], center = true);
          }
        }
      
        translate([-4.238, -6.8975, 1.381])
        rotate([180, 90, -90])
        cylinder(h = 22.6028, r1 = 0.142, r2 = 0.142, center = true, $fn = 12);
      
        translate([-10.4215, 3.571, -7.8145])
        cube(size = [15.5548, 0.9508, 20.7688], center = true);
      }
    }
  
    translate([-3.3335, 2.857, -1.714])
    cube(size = [1.0917, 0.4727, 0.9487], center = true);
  
    translate([-2.3095, 3.575, -0.858])
    rotate([180, 90, 180])
    cylinder(h = 0.6637, r1 = 0.471, r2 = 0.471, center = true, $fn = 12);
  
    difference() {
      union() {
        difference() {
          translate([0.7855, 2.2625, -2.1665])
          cube(size = [5.3297, 1.6637, 1.6637], center = true);
        
          union() {
            translate([2.429, 2.619, -2.595])
            cube(size = [0.5218, 0.9498, 0.8078], center = true);
          
            translate([9.612, 0.3565, -2.786])
            cube(size = [17.1738, 3.5688, 1.1878], center = true);
          }
        }
      
        intersection() {
          union() {
            translate([3.5005, 2.3595, 7.6475])
            cube(size = [2.3777, 2.4297, 21.1017], center = true);
          
            translate([1.595, -0.0005, 7.4095])
            cube(size = [6.1867, 2.8537, 21.5777], center = true);
          }
        
          union() {
            translate([1.3145, 0.476, -2.27678])
            rotate([-90, -30, 0])
            cube(size = [36.3967, 3.5087, 5.2347], center = true);
          
            translate([-10.1789, -7.7905, -3.93642])
            rotate([90, 30, 0])
            cube(size = [22.7027, 19.3997, 20.8157], center = true);
          }
        }
      }
    
      union() {
        translate([2.6425, 2.857, -2.786])
        cube(size = [1.6168, 0.4738, 1.1878], center = true);
      
        translate([1.595, 10.4095, -2.547])
        rotate([180, 90, -90])
        cylinder(h = 15.5788, r1 = 0.142, r2 = 0.142, center = true, $fn = 12);
      
        translate([-8.1835, 2.5025, -3.024])
        cube(size = [20.0308, 2.1448, 0.2358], center = true);
      
        translate([4.071, 0.238, -2.2855])
        cube(size = [1.2358, 4.7598, 1.4268], center = true);
      
        intersection() {
          translate([5.2445, -7.5525, -9.08374])
          rotate([-90, -30, 0])
          cube(size = [36.3978, 15.4198, 21.2928], center = true);
        
          translate([-4.84575, 2.381, -8.39309])
          rotate([90, 30, 0])
          cube(size = [36.3978, 17.0148, 0.4738], center = true);
        }
      
        translate([-8.4215, 2.024, -2.667])
        cube(size = [19.5548, 1.1878, 0.9498], center = true);
      
        translate([3.5005, 0.238, -2.786])
        cube(size = [2.3788, 4.7598, 1.1878], center = true);
      }
    }
  
    intersection() {
      translate([-4.92825, 1.4765, 8.53598])
      rotate([-90, -30, 0])
      cube(size = [36.3967, 16.6837, 1.3297], center = true);
    
      translate([7.85, 0, -7.8145])
      cube(size = [20.6967, 36.3967, 20.7677], center = true);
    }
  
    translate([-3.414, 1.4765, 2.106])
    rotate([180, 90, -90])
    cylinder(h = 1.3297, r1 = 0.461, r2 = 0.461, center = true, $fn = 12);
  
    translate([-1.119, 1.715, 0.19])
    rotate([180, 90, -90])
    cylinder(h = 1.8067, r1 = 1.907, r2 = 1.907, center = true, $fn = 12);
  
    difference() {
      union() {
        translate([2.4045, 3.576, 1.242])
        rotate([180, 90, 180])
        cylinder(h = 2.0917, r1 = 0.468, r2 = 0.468, center = true, $fn = 12);
      
        translate([10.0165, 1.953, -7.8145])
        cube(size = [16.3637, 2.2827, 20.7677], center = true);
      
        difference() {
          translate([2.6425, 3.812, -8.5285])
          cube(size = [1.6157, 0.4687, 19.3397], center = true);
        
          translate([4.76825, 3.0955, -8.25885])
          rotate([-90, -30, 0])
          cube(size = [36.3978, 17.3248, 1.9028], center = true);
        }
      }
    
      translate([9.00753, 9.505, -5.2005])
      rotate([90, 30, 0])
      cube(size = [15.5958, 36.3978, 17.3878], center = true);
    }
  
    difference() {
      union() {
        translate([-3.095, 2.2625, 2.095])
        cube(size = [3.1867, 1.6637, 0.9487], center = true);
      
        translate([-1.8095, 2.619, 2.6665])
        cube(size = [0.3297, 0.9487, 1.4257], center = true);
      }
    
      difference() {
        translate([-13.9206, 2.2615, -1.77617])
        rotate([90, 30, 0])
        cube(size = [14.0628, 19.4008, 1.6648], center = true);
      
        translate([-4.285, 2.8595, 0.595])
        cube(size = [0.8089, 1.4319, 2.7129], center = true);
      }
    }
  
    difference() {
      union() {
        difference() {
          translate([7.7785, -10.076, -7.8145])
          cube(size = [20.8397, 16.2447, 20.7677], center = true);
        
          translate([7.7785, -10.6475, 1.8575])
          cube(size = [20.8408, 15.1028, 1.4268], center = true);
        }
      
        difference() {
          translate([6.755, -2.619, 2.4525])
          cube(size = [22.8867, 0.9487, 1.6637], center = true);
        
          translate([7.16807, -2.2855, -1.64953])
          rotate([90, 30, 0])
          cube(size = [22.3328, 1.9028, 0.6648], center = true);
        }
      
        translate([10.3843, -2.381, -2.54016])
        rotate([-90, -30, 0])
        cube(size = [20.9507, 21.6147, 0.4727], center = true);
      
        translate([7.1595, -1.1425, -7.9335])
        cube(size = [22.0777, 3.8817, 20.5297], center = true);
      }
    
      union() {
        translate([-3.595, -2.7525, 2.6185])
        cube(size = [2.1878, 1.5988, 1.4308], center = true);
      
        translate([8.2785, -1.6195, -8.695])
        cube(size = [19.8408, 4.8548, 19.0078], center = true);
      
        translate([-2.214, -3.3335, 2.929])
        rotate([180, 90, -90])
        cylinder(h = 1.4268, r1 = 0.144, r2 = 0.144, center = true, $fn = 12);
      
        translate([8.112, -2.381, 10.3855])
        cube(size = [20.1738, 0.4738, 15.6268], center = true);
      
        difference() {
          union() {
            translate([7.1595, -8.695, -8.2905])
            cube(size = [22.0788, 19.0078, 19.8168], center = true);
          
            translate([5.327, -2.095, 9.22663])
            rotate([90, 30, 0])
            cube(size = [36.3978, 15.0898, 5.8078], center = true);
          }
        
          union() {
            translate([6.09532, -1.6185, -3.50759])
            rotate([90, 30, 0])
            cube(size = [22.3339, 2.3849, 4.8559], center = true);
          
            translate([-1.119, -4.0475, 0.19])
            rotate([180, 90, -90])
            cylinder(h = 1.9039, r1 = 0.19, r2 = 0.19, center = true, $fn = 12);
          }
        }
      }
    }
  
    difference() {
      translate([7.1595, 1.4765, -8.124])
      cube(size = [22.0777, 1.3297, 20.1487], center = true);
    
      translate([6.09032, 0, -3.51625])
      rotate([90, 30, 0])
      cube(size = [22.3328, 36.3978, 36.3978], center = true);
    }
  
    intersection() {
      union() {
        difference() {
          translate([1.79075, 0, -3.10167])
          rotate([-90, -30, 0])
          cube(size = [36.3967, 1.6037, 36.3967], center = true);
        
          translate([-7.374, 0, 0])
          cube(size = [21.6498, 36.3978, 36.3978], center = true);
        }
      
        intersection() {
          translate([2.2385, -10.4095, 8.4335])
          cube(size = [2.4257, 15.5777, 19.5297], center = true);
        
          translate([2.8575, -10.1715, 7.6])
          cube(size = [3.6637, 16.0537, 21.1967], center = true);
        }
      
        difference() {
          union() {
            translate([1.9995, -2.619, 7.6])
            cube(size = [0.3297, 0.9487, 21.1967], center = true);
          
            translate([-7.374, -2.857, -2.1195])
            cube(size = [21.6487, 0.4727, 1.5677], center = true);
          }
        
          union() {
            translate([-2.214, -10.4095, -2.548])
            rotate([180, 90, -90])
            cylinder(h = 15.5788, r1 = 0.142, r2 = 0.142, center = true, $fn = 12);
          
            translate([-4.33175, -1.1425, 7.50281])
            rotate([-90, -30, 0])
            cube(size = [36.3978, 19.0708, 3.9028], center = true);
          }
        }
      }
    
      union() {
        difference() {
          translate([-6.755, -2.857, -2.2385])
          cube(size = [22.8867, 0.4727, 1.3297], center = true);
        
          translate([1.595, -10.1715, -2.547])
          rotate([180, 90, -90])
          cylinder(h = 16.0548, r1 = 0.142, r2 = 0.142, center = true, $fn = 12);
        }
      
        translate([2.6425, 7.5525, -2.9525])
        cube(size = [1.6157, 21.2917, 0.0917], center = true);
      
        translate([-6.755, -1.1425, -1.452])
        cube(size = [22.8867, 3.9017, 0.2347], center = true);
      
        translate([4.213, -2.381, -1.715])
        rotate([180, 90, -90])
        cylinder(h = 0.4727, r1 = 0.474, r2 = 0.474, center = true, $fn = 12);
      
        translate([1.9995, 7.7905, -10.195])
        cube(size = [0.3297, 20.8157, 16.0067], center = true);
      
        translate([0.91275, -3.086, -1.58093])
        rotate([-90, -30, 0])
        cube(size = [36.3967, 1.9017, 0.9307], center = true);
      }
    }
  
    intersection() {
      union() {
        translate([5.53872, -7.7905, -5.66365])
        rotate([90, 30, 0])
        cube(size = [21.1417, 1.9017, 20.8157], center = true);
      
        translate([-4.285, 2.619, -1.4045])
        cube(size = [0.8067, 0.9487, 0.3297], center = true);
      }
    
      translate([-4.33175, 2.619, 7.50281])
      rotate([-90, -30, 0])
      cube(size = [36.3967, 19.0697, 0.9487], center = true);
    }
  
    translate([-4.285, 2.619, -0.5955])
    cube(size = [0.8067, 0.9487, 0.3297], center = true);
  
    difference() {
      union() {
        translate([-3.0475, 2.857, 2.4525])
        cube(size = [3.0917, 0.4727, 1.6637], center = true);
      
        translate([-3.414, 2.2625, 2.106])
        rotate([180, 90, -90])
        cylinder(h = 1.6637, r1 = 0.461, r2 = 0.461, center = true, $fn = 12);
      }
    
      union() {
        translate([-2.214, 0, 2.929])
        rotate([180, 90, -90])
        cylinder(h = 36.3978, r1 = 0.144, r2 = 0.144, center = true, $fn = 12);
      
        translate([0.941814, 3.512, 13.8147])
        rotate([-90, -30, 0])
        cube(size = [20.9518, 13.4118, 1.7838], center = true);
      }
    }
  
    intersection() {
      union() {
        translate([-3.619, 2.619, 7.6475])
        cube(size = [1.9487, 0.9487, 21.1017], center = true);
      
        translate([7.7785, 3.0975, 8.4335])
        cube(size = [20.8397, 0.9537, 19.5297], center = true);
      
        difference() {
          translate([-2.762, -7.5525, -1.667])
          cube(size = [2.2347, 21.2917, 2.4727], center = true);
        
          translate([-2.214, -7.312, -2.548])
          rotate([180, 90, -90])
          cylinder(h = 21.7738, r1 = 0.142, r2 = 0.142, center = true, $fn = 12);
        }
      }
    
      difference() {
        union() {
          translate([-1.40975, 10.4095, -2.44176])
          rotate([90, 30, 0])
          cube(size = [36.3967, 3.2697, 15.5777], center = true);
        
          translate([-3.1905, 2.193, -1.309])
          cube(size = [1.3777, 2.7627, 1.7587], center = true);
        }
      
        union() {
          translate([-4.238, -7.5525, -1])
          rotate([180, 90, -90])
          cylinder(h = 21.2928, r1 = 0.142, r2 = 0.142, center = true, $fn = 12);
        
          translate([-3.3335, -7.5525, -1.8805])
          cube(size = [1.0928, 21.2928, 0.6168], center = true);
        }
      }
    }
  
    difference() {
      union() {
        translate([7.7785, 3.0975, -1.7145])
        cube(size = [20.8397, 0.9537, 2.5677], center = true);
      
        intersection() {
          union() {
            translate([-4.238, 2.619, -1.667])
            cube(size = [0.7107, 0.9487, 2.4727], center = true);
          
            translate([7.1595, 9.505, -9.481])
            cube(size = [22.0777, 17.3867, 17.4347], center = true);
          }
        
          union() {
            translate([6.17346, 9.505, 3.56425])
            rotate([-90, -30, 0])
            cube(size = [22.1417, 36.3967, 17.3867], center = true);
          
            translate([-3.413, 0, -1.72])
            rotate([180, 90, -90])
            cylinder(h = 36.3967, r1 = 0.464, r2 = 0.464, center = true, $fn = 12);
          }
        }
      }
    
      union() {
        difference() {
          difference() {
            translate([7.1595, 9.505, -9.481])
            cube(size = [22.0788, 17.3878, 17.4358], center = true);
          
            translate([7.7785, 3.575, -0.858])
            rotate([180, 90, 180])
            cylinder(h = 20.8419, r1 = 0.471, r2 = 0.471, center = true, $fn = 12);
          }
        
          union() {
            translate([7.1595, 1.953, -1.714])
            cube(size = [22.0799, 2.2849, 0.9509], center = true);
          
            translate([-2.2145, 2.619, -1.7145])
            cube(size = [1.1419, 0.9509, 2.5699], center = true);
          }
        }
      
        intersection() {
          difference() {
            translate([10.9417, 9.505, -4.6946])
            rotate([-90, -30, 0])
            cube(size = [22.1428, 17.3248, 17.3878], center = true);
          
            translate([5.53872, 2.619, -5.66365])
            rotate([90, 30, 0])
            cube(size = [21.1439, 1.9039, 0.9509], center = true);
          }
        
          union() {
            translate([10.8607, 0, 3.55433])
            rotate([90, 30, 0])
            cube(size = [21.1428, 19.3808, 36.3978], center = true);
          
            translate([-2.238, 2.619, -9.7665])
            cube(size = [0.5218, 0.9498, 16.8648], center = true);
          }
        }
      }
    }
  }
}
