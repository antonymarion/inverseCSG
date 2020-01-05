intersection() {
  translate([0.0005, 0, 0])
  cube(size = [11.3007, 11.9997, 9.8457], center = true);

  union() {
    difference() {
      union() {
        translate([2.1035, -1.1535, -0.2275])
        cube(size = [5.2107, 7.6927, 0.8487], center = true);
      
        intersection() {
          translate([-9.786, 1.585, -0.2275])
          cube(size = [16.8277, 2.2157, 0.8487], center = true);
        
          translate([7.12, 0, 0])
          rotate([90, 0, 0])
          cube(size = [22.1597, 36.3997, 36.3997], center = true);
        }
      
        translate([8.993, 0, -2.7])
        rotate([-180, 0, 0])
        cube(size = [18.4137, 36.3997, 2.8037], center = true);
      
        intersection() {
          translate([-9.207, 5.0715, -8.7841])
          rotate([-150, 0, 0])
          cube(size = [17.9857, 36.3997, 16.1137], center = true);
        
          translate([-4.179, -0.834, -2.377])
          cube(size = [0.5737, 8.3317, 3.4497], center = true);
        }
      
        translate([-1.247, -1.426, -11.151])
        cylinder(h = 14.0977, r1 = 0.751, r2 = 0.751, center = true, $fn = 12);
      }
    
      union() {
        translate([3.647, 3.811, 7.329])
        rotate([180, 0, 180])
        cylinder(h = 21.7418, r1 = 0.746, r2 = 0.746, center = true, $fn = 12);
      
        translate([6.867, 3.0125, -1.898])
        cube(size = [22.6658, 0.6388, 2.4918], center = true);
      
        translate([3.633, 3.804, -3.822])
        cylinder(h = 0.5598, r1 = 0.476, r2 = 0.476, center = true, $fn = 12);
      
        difference() {
          union() {
            translate([8.135, -8.588, 0])
            rotate([90, 0, 0])
            cube(size = [20.1298, 36.3998, 19.2218], center = true);
          
            translate([7.1535, 5.0715, -8.7841])
            rotate([30, 0, 0])
            cube(size = [22.0928, 36.3998, 16.1138], center = true);
          }
        
          difference() {
            translate([0.4075, 3.7845, -10.672])
            cube(size = [8.6009, 2.4309, 15.0559], center = true);
          
            translate([-1.44748, 4.38281, 0])
            rotate([0, 0, 72])
            cylinder(h = 36.4, r1 = 1.505, r2 = 1.505, center = true, $fn = 12);
          }
        }
      
        translate([8.993, 0, -1.4735])
        rotate([-180, 0, 0])
        cube(size = [18.4138, 36.3998, 3.3408], center = true);
      }
    }
  
    difference() {
      union() {
        intersection() {
          difference() {
            translate([-2.9185, 9.3385, 1.8955])
            cube(size = [3.0947, 17.7227, 1.5327], center = true);
          
            translate([-2.714, 0, 0.873])
            rotate([180, 90, -90])
            cylinder(h = 36.3998, r1 = 0.447, r2 = 0.447, center = true, $fn = 12);
          }
        
          union() {
            translate([-9.786, 1.585, 2.4315])
            cube(size = [16.8277, 2.2157, 1.2367], center = true);
          
            translate([-10.065, 1.858, 0])
            rotate([90, 0, 0])
            cube(size = [16.2697, 36.3997, 1.6697], center = true);
          }
        }
      
        intersection() {
          sphere(r = 54.5997, $fn = 109);
        
          translate([-2.714, -8.8615, 0.873])
          rotate([180, 90, -90])
          cylinder(h = 18.6767, r1 = 0.447, r2 = 0.447, center = true, $fn = 12);
        }
      
        intersection() {
          translate([8.135, 1.858, 0])
          rotate([90, 0, 0])
          cube(size = [20.1297, 36.3997, 1.6697], center = true);
        
          translate([-9.207, 0, 2.0885])
          rotate([180, 0, 0])
          cube(size = [17.9857, 36.3997, 1.9207], center = true);
        }
      }
    
      intersection() {
        union() {
          translate([8.135, -8.588, 0])
          rotate([90, 0, 0])
          cube(size = [20.1298, 36.3998, 19.2218], center = true);
        
          translate([0, -8.8615, 0])
          rotate([90, 0, 0])
          cube(size = [36.3998, 36.3998, 18.6768], center = true);
        
          translate([-0.9375, 0, 1.6235])
          cube(size = [0.8688, 36.3998, 2.8528], center = true);
        
          translate([-11.08, 0, 0])
          rotate([90, 0, 0])
          cube(size = [14.2398, 36.3998, 36.3998], center = true);
        }
      
        sphere(r = 54.5998, $fn = 109);
      }
    }
  
    intersection() {
      union() {
        intersection() {
          difference() {
            translate([-9.207, 0, 3.3815])
            rotate([180, 0, 0])
            cube(size = [17.9857, 36.3997, 1.4407], center = true);
          
            translate([-2.724, 0, 3.33])
            rotate([0, 90, 90])
            cylinder(h = 36.3998, r1 = 0.427, r2 = 0.427, center = true, $fn = 12);
          }
        
          union() {
            translate([-2.9185, 1.585, -8.1935])
            cube(size = [3.0947, 2.2157, 20.0127], center = true);
          
            rotate([90, 0, 0])
            cube(size = [36.3997, 36.3997, 36.3997], center = true);
          }
        }
      
        intersection() {
          translate([-11.08, 0, 0])
          rotate([90, 0, 0])
          cube(size = [14.2397, 36.3997, 36.3997], center = true);
        
          translate([-9.207, 0, 2.0885])
          rotate([180, 0, 0])
          cube(size = [17.9857, 36.3997, 1.9207], center = true);
        }
      
        difference() {
          translate([-9.207, 0, 0.663])
          rotate([180, 0, 0])
          cube(size = [17.9857, 36.3997, 0.9317], center = true);
        
          translate([-0.9375, 0, 0.402])
          cube(size = [0.8688, 36.3998, 0.4098], center = true);
        }
      }
    
      difference() {
        union() {
          difference() {
            translate([-10.065, 1.858, 0])
            rotate([90, 0, 0])
            cube(size = [16.2697, 36.3997, 1.6697], center = true);
          
            translate([-11.333, -7.7535, 9.6645])
            cube(size = [13.7338, 20.8928, 17.0708], center = true);
          }
        
          translate([8.135, 1.858, 0])
          rotate([90, 0, 0])
          cube(size = [20.1297, 36.3997, 1.6697], center = true);
        }
      
        union() {
          translate([-2.714, -7.7535, 0.873])
          rotate([180, 90, -90])
          cylinder(h = 20.8928, r1 = 0.447, r2 = 0.447, center = true, $fn = 12);
        
          translate([-11.333, 1.585, 0.663])
          cube(size = [13.7338, 2.2158, 0.9318], center = true);
        
          difference() {
            translate([-9.351, 9.6115, 1.828])
            cube(size = [17.6978, 17.1768, 2.4418], center = true);
          
            translate([-10.065, 0, 0])
            rotate([90, 0, 0])
            cube(size = [16.2699, 36.3999, 36.3999], center = true);
          }
        }
      }
    }
  
    intersection() {
      difference() {
        difference() {
          intersection() {
            translate([-9.207, 0, -1.9525])
            rotate([-180, 0, 0])
            cube(size = [17.9857, 36.3997, 4.2987], center = true);
          
            translate([-6.7455, -6.6, 7.049])
            cube(size = [22.9087, 23.1997, 22.3017], center = true);
          }
        
          union() {
            translate([0.1215, 0.75, -1.4735])
            cube(size = [9.1748, 0.5458, 3.3408], center = true);
          
            translate([-2.606, 4.166, -2.7])
            cube(size = [4.2058, 1.6678, 2.8038], center = true);
          }
        }
      
        union() {
          translate([-4.179, 5.0715, -8.7841])
          rotate([30, 0, 0])
          cube(size = [0.5738, 36.3998, 16.1138], center = true);
        
          translate([-1.257, -1.428, -10.871])
          cylinder(h = 14.6578, r1 = 0.47, r2 = 0.47, center = true, $fn = 12);
        
          translate([-1.30669, 4.27593, 0])
          rotate([0, 0, -64])
          cylinder(h = 36.3998, r1 = 1.377, r2 = 1.377, center = true, $fn = 12);
        
          translate([-1.247, -1.426, -3.343])
          cylinder(h = 0.3978, r1 = 0.751, r2 = 0.751, center = true, $fn = 12);
        }
      }
    
      union() {
        translate([-4.179, 1.858, 8.774])
        cube(size = [0.5737, 1.6697, 18.8517], center = true);
      
        translate([6.7455, 6.6, -3.623])
        cube(size = [22.9087, 23.1997, 0.9577], center = true);
      
        difference() {
          difference() {
            translate([0.1215, 1.585, -1.898])
            cube(size = [9.1747, 2.2157, 2.4917], center = true);
          
            translate([-0.9375, 2.7385, -0.975])
            cube(size = [0.8688, 4.5228, 0.6458], center = true);
          }
        
          translate([-2.713, 0, -1.587])
          rotate([180, 90, -90])
          cylinder(h = 36.3998, r1 = 0.427, r2 = 0.427, center = true, $fn = 12);
        }
      }
    }
  }
}
