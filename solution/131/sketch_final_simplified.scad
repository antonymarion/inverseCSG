intersection() {
  union() {
    intersection() {
      translate([2.541, -4.518, -6.55])
      cube(size = [2.6438, 0.3998, 23.0998], center = true);
    
      union() {
        difference() {
          difference() {
            translate([2.541, -4.518, 0])
            cube(size = [2.6438, 0.3998, 9.9998], center = true);
          
            translate([-7.319, -3.198, 0.01])
            cube(size = [21.5619, 3.0399, 7.7599], center = true);
          }
        
          union() {
            translate([1.219, 0, 3.908])
            rotate([180, 90, -90])
            cylinder(h = 36.1999, r1 = 0.686, r2 = 0.686, center = true, $fn = 12);
          
            translate([1.219, -2.8445, -3.911])
            rotate([180, 90, -90])
            cylinder(h = 3.7469, r1 = 0.684, r2 = 0.684, center = true, $fn = 12);
          }
        }
      
        difference() {
          translate([2.6855, -4.1665, -0.555])
          cube(size = [1.5548, 1.1028, 8.8898], center = true);
        
          union() {
            translate([2.663, -4.1665, -2.995])
            rotate([180, 90, -90])
            cylinder(h = 1.1029, r1 = 0.399, r2 = 0.399, center = true, $fn = 12);
          
            translate([2.665, 0, 2.804])
            rotate([180, 90, -90])
            cylinder(h = 36.1999, r1 = 0.399, r2 = 0.399, center = true, $fn = 12);
          }
        }
      }
    }
  
    intersection() {
      cube(size = [36.1998, 36.1998, 36.1998], center = true);
    
      difference() {
        difference() {
          translate([0.138, 2.328, -4.641])
          rotate([180, 90, -90])
          cylinder(h = 1.2418, r1 = 2.314, r2 = 2.314, center = true, $fn = 12);
        
          translate([5.191, -1.766, 0])
          rotate([180, 0, 180])
          cylinder(h = 36.1999, r1 = 8.653, r2 = 8.653, center = true, $fn = 17);
        }
      
        translate([-1.1215, 2.328, -4.235])
        cube(size = [4.6809, 1.2419, 0.7299], center = true);
      }
    }
  
    difference() {
      union() {
        translate([-3.052, -2.88, 4.8])
        cylinder(h = 0.3998, r1 = 1.156, r2 = 1.156, center = true, $fn = 12);
      
        translate([-3.052, -2.88, -0.2])
        cylinder(h = 9.5998, r1 = 1.156, r2 = 1.156, center = true, $fn = 12);
      
        translate([-3.662, -1.5055, 4.8])
        cube(size = [0.3998, 6.4248, 0.3998], center = true);
      
        difference() {
          union() {
            translate([3.117, -2.886, -4.8])
            cylinder(h = 0.3998, r1 = 1.096, r2 = 1.096, center = true, $fn = 12);
          
            translate([-2.8845, -2.6445, 0])
            cube(size = [1.9548, 3.3468, 9.9998], center = true);
          }
        
          union() {
            translate([0.138, 7.915, -4.641])
            rotate([180, 90, -90])
            cylinder(h = 20.3699, r1 = 2.314, r2 = 2.314, center = true, $fn = 12);
          
            translate([9.6595, -3.294, -4.8])
            cube(size = [16.8809, 2.0479, 0.3999], center = true);
          }
        }
      }
    
      union() {
        translate([-3.113, -2.883, 6.75])
        cylinder(h = 22.6999, r1 = 0.899, r2 = 0.899, center = true, $fn = 12);
      
        translate([-1.1215, -2.8445, 0])
        cube(size = [4.6809, 3.7469, 9.1999], center = true);
      
        translate([-2.6845, -1.3055, 7.115])
        cube(size = [1.5549, 6.0249, 21.9699], center = true);
      
        translate([-8.4405, -0.946, -3.87])
        rotate([180, 90, 180])
        cylinder(h = 19.3189, r1 = 0.742, r2 = 0.742, center = true, $fn = 12);
      
        translate([-2.8845, 0.0145, 0.01])
        cube(size = [1.9549, 3.3849, 7.7599], center = true);
      
        translate([-3.113, -2.886, 0])
        cylinder(h = 36.1999, r1 = 0.5, r2 = 0.5, center = true, $fn = 12);
      
        translate([-10.7815, -0.971, 3.895])
        rotate([180, 90, 180])
        cylinder(h = 14.6369, r1 = 0.708, r2 = 0.708, center = true, $fn = 12);
      }
    }
  
    difference() {
      union() {
        translate([-3.662, 3.1905, 0.565])
        cube(size = [0.3998, 1.5548, 8.8698], center = true);
      
        difference() {
          translate([-3.114, 3.619, 0.565])
          rotate([180, 0, 180])
          cylinder(h = 8.8698, r1 = 1.096, r2 = 1.096, center = true, $fn = 12);
        
          translate([-2.6845, 2.837, 7.115])
          cube(size = [1.5549, 2.2599, 21.9699], center = true);
        }
      }
    
      union() {
        translate([0.0005, 9.9035, 11.55])
        cube(size = [6.9249, 16.3929, 13.0999], center = true);
      
        translate([-3.114, 3.62, -6.55])
        cylinder(h = 23.0999, r1 = 0.899, r2 = 0.899, center = true, $fn = 12);
      
        translate([3.113, 3.618, -6.55])
        cylinder(h = 23.0999, r1 = 1.1, r2 = 1.1, center = true, $fn = 12);
      }
    }
  
    difference() {
      difference() {
        union() {
          translate([2.8855, -1.3055, -0.2])
          cube(size = [1.9548, 6.0248, 9.5998], center = true);
        
          translate([3.117, -2.886, 0.2])
          cylinder(h = 9.5998, r1 = 1.096, r2 = 1.096, center = true, $fn = 12);
        
          difference() {
            translate([2.541, -1.3055, 0.2])
            cube(size = [2.6438, 6.0248, 9.5998], center = true);
          
            translate([1.219, -1.3055, -3.911])
            rotate([180, 90, -90])
            cylinder(h = 6.0249, r1 = 0.684, r2 = 0.684, center = true, $fn = 12);
          }
        }
      
        union() {
          translate([3.111, -2.884, 0])
          rotate([180, 0, 180])
          cylinder(h = 36.1999, r1 = 0.9, r2 = 0.9, center = true, $fn = 12);
        
          translate([2.541, 0.368, 0])
          cube(size = [2.6439, 2.6779, 9.1999], center = true);
        
          translate([10.7805, -0.946, -3.87])
          rotate([180, 90, 180])
          cylinder(h = 14.6369, r1 = 0.742, r2 = 0.742, center = true, $fn = 12);
        
          translate([0.138, -0.953, -4.641])
          rotate([180, 90, -90])
          cylinder(h = 5.3219, r1 = 2.314, r2 = 2.314, center = true, $fn = 12);
        }
      }
    
      intersection() {
        union() {
          difference() {
            translate([-7.119, -1.3055, 0.565])
            cube(size = [21.9619, 6.0249, 8.8699], center = true);
          
            translate([2.541, -2.6455, 0.365])
            cube(size = [2.644, 1.937, 8.47], center = true);
          }
        
          translate([2.341, -3.614, -3.895])
          rotate([-180, 90, 180])
          cylinder(h = 2.2439, r1 = 0.706, r2 = 0.706, center = true, $fn = 12);
        
          translate([2.341, 7.243, 0])
          cube(size = [2.2439, 21.7139, 9.1999], center = true);
        }
      
        union() {
          translate([0, 7.243, -7.105])
          cube(size = [36.1999, 21.7139, 21.9899], center = true);
        
          translate([-7.319, 6.6905, -6.55])
          cube(size = [21.5619, 22.8169, 23.0999], center = true);
        
          translate([0, -0.971, 3.895])
          rotate([180, 90, 180])
          cylinder(h = 36.1999, r1 = 0.708, r2 = 0.708, center = true, $fn = 12);
        }
      }
    }
  
    intersection() {
      difference() {
        difference() {
          translate([-2.5365, -9.5355, -0.2])
          cube(size = [2.6508, 17.1288, 9.5998], center = true);
        
          translate([7.319, -3.614, -3.895])
          rotate([-180, 90, 180])
          cylinder(h = 21.5619, r1 = 0.706, r2 = 0.706, center = true, $fn = 12);
        }
      
        union() {
          translate([-1.212, -10.857, -3.911])
          rotate([180, 90, -90])
          cylinder(h = 14.4859, r1 = 0.688, r2 = 0.688, center = true, $fn = 12);
        
          translate([-3.113, -2.883, -4.235])
          cylinder(h = 0.7299, r1 = 0.899, r2 = 0.899, center = true, $fn = 12);
        }
      }
    
      union() {
        difference() {
          translate([-2.5365, -4.518, 4.445])
          cube(size = [2.6508, 0.3998, 1.1098], center = true);
        
          translate([-1.21, 0, 3.906])
          rotate([180, 90, -90])
          cylinder(h = 36.1999, r1 = 0.695, r2 = 0.695, center = true, $fn = 12);
        }
      
        difference() {
          translate([7.119, -4.1665, -0.555])
          cube(size = [21.9618, 1.1028, 8.8898], center = true);
        
          translate([-2.5365, -3.198, 0.01])
          cube(size = [2.6509, 3.0399, 7.7599], center = true);
        }
      }
    }
  
    intersection() {
      difference() {
        translate([-1.1215, 11.034, 4.245])
        cube(size = [4.6808, 14.1318, 0.7098], center = true);
      
        union() {
          translate([-1.21, -6.866, 3.906])
          rotate([180, 90, -90])
          cylinder(h = 22.4679, r1 = 0.695, r2 = 0.695, center = true, $fn = 12);
        
          translate([5.191, -1.766, 4.245])
          rotate([180, 0, 180])
          cylinder(h = 0.7099, r1 = 8.653, r2 = 8.653, center = true, $fn = 17);
        }
      }
    
      union() {
        translate([-0.3445, 4.168, 0.365])
        cube(size = [3.1268, 0.3998, 8.4698], center = true);
      
        translate([-3.114, 3.619, 4.8])
        rotate([180, 0, 180])
        cylinder(h = 0.3998, r1 = 1.096, r2 = 1.096, center = true, $fn = 12);
      
        translate([0.2005, 3.1905, 4.245])
        cube(size = [7.3248, 1.5548, 0.7098], center = true);
      }
    }
  
    difference() {
      difference() {
        difference() {
          union() {
            translate([0.0005, 1.698, -4.435])
            cube(size = [7.7248, 5.3378, 1.1298], center = true);
          
            translate([-3.114, 3.619, -4.435])
            rotate([180, 0, 180])
            cylinder(h = 1.1298, r1 = 1.096, r2 = 1.096, center = true, $fn = 12);
          }
        
          translate([3.112, 3.615, -11.35])
          rotate([180, 0, 180])
          cylinder(h = 13.4999, r1 = 0.5, r2 = 0.5, center = true, $fn = 12);
        }
      
        union() {
          translate([3.116, 3.62, 6.75])
          cylinder(h = 22.6999, r1 = 0.898, r2 = 0.898, center = true, $fn = 12);
        
          translate([-1.212, 8.564, -3.911])
          rotate([180, 90, -90])
          cylinder(h = 19.0699, r1 = 0.688, r2 = 0.688, center = true, $fn = 12);
        
          translate([0, 1.706, -3.897])
          rotate([180, 90, 180])
          cylinder(h = 36.1999, r1 = 0.707, r2 = 0.707, center = true, $fn = 12);
        }
      }
    
      union() {
        translate([-3.094, 3.614, -11.35])
        cylinder(h = 13.4999, r1 = 0.499, r2 = 0.499, center = true, $fn = 12);
      
        translate([-0.1995, 0.368, 6.75])
        cube(size = [7.3249, 2.6779, 22.6999], center = true);
      
        translate([0.138, -7.5755, -4.641])
        rotate([180, 90, -90])
        cylinder(h = 21.0489, r1 = 2.314, r2 = 2.314, center = true, $fn = 12);
      
        difference() {
          union() {
            translate([-3.114, 3.62, 6.75])
            cylinder(h = 22.6999, r1 = 0.899, r2 = 0.899, center = true, $fn = 12);
          
            translate([5.191, -1.766, 6.75])
            rotate([180, 0, 180])
            cylinder(h = 22.6999, r1 = 8.653, r2 = 8.653, center = true, $fn = 17);
          }
        
          translate([10.7805, 9.9035, 6.75])
          cube(size = [14.637, 16.393, 22.7], center = true);
        }
      
        translate([-1.1215, 2.837, -4.235])
        cube(size = [4.6809, 2.2599, 0.7299], center = true);
      }
    }
  
    difference() {
      difference() {
        translate([-1.3215, -4.518, 0])
        cube(size = [5.0808, 0.3998, 9.9998], center = true);
      
        translate([-2.664, 0, 2.804])
        rotate([180, 90, -90])
        cylinder(h = 36.1999, r1 = 0.398, r2 = 0.398, center = true, $fn = 12);
      }
    
      union() {
        translate([-0.3445, -4.518, 0])
        cube(size = [3.1269, 0.3999, 9.1999], center = true);
      
        translate([-2.665, -4.1665, -2.995])
        rotate([180, 90, -90])
        cylinder(h = 1.1029, r1 = 0.399, r2 = 0.399, center = true, $fn = 12);
      }
    }
  
    intersection() {
      difference() {
        translate([7.319, -3.494, -4.8])
        cube(size = [21.5618, 2.4478, 0.3998], center = true);
      
        translate([3.112, -2.883, 6.55])
        cylinder(h = 23.0999, r1 = 0.5, r2 = 0.5, center = true, $fn = 12);
      }
    
      union() {
        translate([3.117, -2.886, -4.8])
        cylinder(h = 0.3998, r1 = 1.096, r2 = 1.096, center = true, $fn = 12);
      
        translate([0.138, -3.494, -4.641])
        rotate([180, 90, -90])
        cylinder(h = 2.4478, r1 = 2.314, r2 = 2.314, center = true, $fn = 12);
      }
    }
  
    difference() {
      difference() {
        difference() {
          union() {
            translate([0.0005, 3.037, 0.565])
            cube(size = [7.7248, 2.6598, 8.8698], center = true);
          
            translate([3.113, 3.618, 0.565])
            cylinder(h = 8.8698, r1 = 1.1, r2 = 1.1, center = true, $fn = 12);
          }
        
          union() {
            translate([-3.662, 3.037, 0.01])
            cube(size = [0.3999, 2.6599, 7.7599], center = true);
          
            translate([-0.3445, 3.037, 0.365])
            cube(size = [3.1269, 2.6599, 8.4699], center = true);
          }
        }
      
        union() {
          translate([7.119, 1.707, 3.89])
          rotate([180, 90, 180])
          cylinder(h = 21.9619, r1 = 0.711, r2 = 0.711, center = true, $fn = 12);
        
          translate([3.116, 3.62, 0])
          cylinder(h = 36.1999, r1 = 0.898, r2 = 0.898, center = true, $fn = 12);
        
          translate([0.0005, 2.837, 7.115])
          cube(size = [6.9249, 2.2599, 21.9699], center = true);
        
          translate([-3.114, 3.619, 0.565])
          rotate([180, 0, 180])
          cylinder(h = 8.8699, r1 = 1.096, r2 = 1.096, center = true, $fn = 12);
        }
      }
    
      union() {
        translate([1.219, 11.034, 3.908])
        rotate([180, 90, -90])
        cylinder(h = 14.1319, r1 = 0.686, r2 = 0.686, center = true, $fn = 12);
      
        difference() {
          union() {
            translate([1.5635, 3.3905, -7.105])
            cube(size = [0.6889, 1.9549, 21.9899], center = true);
          
            translate([3.662, 9.9035, 0.365])
            cube(size = [0.3999, 16.3929, 8.4699], center = true);
          }
        
          union() {
            translate([10.7805, 10.2565, 0.01])
            cube(size = [14.637, 15.687, 7.76], center = true);
          
            translate([5.191, -1.766, 4.245])
            rotate([180, 0, 180])
            cylinder(h = 0.71, r1 = 8.653, r2 = 8.653, center = true, $fn = 17);
          }
        }
      }
    }
  
    intersection() {
      union() {
        difference() {
          translate([3.113, 3.618, -4.435])
          cylinder(h = 1.1298, r1 = 1.1, r2 = 1.1, center = true, $fn = 12);
        
          translate([2.541, 3.037, -10.985])
          cube(size = [2.6439, 2.6599, 14.2299], center = true);
        }
      
        translate([-1.1215, -6.866, 6.75])
        cube(size = [4.6808, 22.4678, 22.6998], center = true);
      
        translate([2.541, 4.168, -4.235])
        cube(size = [2.6438, 0.3998, 0.7298], center = true);
      }
    
      difference() {
        union() {
          translate([9.6595, 9.9035, 0])
          cube(size = [16.8808, 16.3928, 36.1998], center = true);
        
          translate([-1.1215, 11.234, -10.985])
          cube(size = [4.6808, 13.7318, 14.2298], center = true);
        }
      
        union() {
          translate([3.116, 3.62, 6.75])
          cylinder(h = 22.6999, r1 = 0.898, r2 = 0.898, center = true, $fn = 12);
        
          translate([1.219, 3.037, -3.911])
          rotate([180, 90, -90])
          cylinder(h = 2.6599, r1 = 0.684, r2 = 0.684, center = true, $fn = 12);
        }
      }
    }
  }

  cube(size = [10.1098, 11.3218, 11.9998], center = true);
}
