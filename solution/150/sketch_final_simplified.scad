intersection() {
  cube(size = [10.1358, 11.9998, 5.6678], center = true);

  union() {
    difference() {
      translate([-2.359, 3.16, -2.184])
      cylinder(h = 0.3558, r1 = 0.393, r2 = 0.393, center = true, $fn = 12);
    
      translate([-7.014, 0, -2.184])
      cube(size = [22.1719, 36.1999, 0.1279], center = true);
    }
  
    intersection() {
      difference() {
        difference() {
          sphere(r = 54.2998, $fn = 108);
        
          translate([-6.9385, 3.183, 0.039])
          rotate([180, 90, 180])
          cylinder(h = 22.3229, r1 = 0.262, r2 = 0.262, center = true, $fn = 12);
        }
      
        union() {
          translate([0, 0.037, -9.7915])
          cube(size = [36.1999, 6.2919, 16.6169], center = true);
        
          translate([-6.9385, -0.834, -0.726])
          rotate([0, 90, 0])
          cylinder(h = 22.3229, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
        }
      }
    
      difference() {
        difference() {
          translate([4.148, 0.037, -8.75])
          cube(size = [0.1518, 6.2918, 18.6998], center = true);
        
          translate([0, -1.971, -0.728])
          rotate([180, 90, 180])
          cylinder(h = 36.1999, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
        }
      
        union() {
          translate([4.148, 1.438, -0.727])
          rotate([180, 90, 180])
          cylinder(h = 0.1519, r1 = 0.262, r2 = 0.262, center = true, $fn = 12);
        
          translate([-6.9385, -1.363, 0.035])
          rotate([180, 90, 180])
          cylinder(h = 22.3229, r1 = 0.266, r2 = 0.266, center = true, $fn = 12);
        }
      }
    
      difference() {
        difference() {
          difference() {
            sphere(r = 54.2998, $fn = 108);
          
            translate([0, -0.227, 0.033])
            rotate([180, 90, 180])
            cylinder(h = 36.1999, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
          }
        
          union() {
            translate([0, 2.578, -0.725])
            rotate([180, 90, 180])
            cylinder(h = 36.1999, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
          
            translate([0, -3.109, -0.727])
            rotate([0, 90, 0])
            cylinder(h = 36.1999, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
          }
        }
      
        union() {
          translate([0, 0.302, -0.724])
          rotate([180, 90, 180])
          cylinder(h = 36.1999, r1 = 0.265, r2 = 0.265, center = true, $fn = 12);
        
          translate([11.086, -2.501, 0.032])
          rotate([180, 90, 180])
          cylinder(h = 14.0279, r1 = 0.262, r2 = 0.262, center = true, $fn = 12);
        
          translate([0, 2.044, 0.033])
          rotate([180, 90, 180])
          cylinder(h = 36.1999, r1 = 0.264, r2 = 0.264, center = true, $fn = 12);
        
          translate([0, 0.91, 0.028])
          rotate([180, 90, 180])
          cylinder(h = 36.1999, r1 = 0.264, r2 = 0.264, center = true, $fn = 12);
        }
      }
    }
  
    translate([0, 0.9455, -1.407])
    cube(size = [8.1438, 8.1088, 0.1518], center = true);
  
    translate([-2.36, 3.161, -1.9225])
    cylinder(h = 0.8788, r1 = 0.246, r2 = 0.246, center = true, $fn = 12);
  
    difference() {
      difference() {
        difference() {
          translate([4.148, 4.0915, -0.157])
          cube(size = [0.1518, 1.8168, 2.6518], center = true);
        
          translate([0, 3.139, 0.885])
          rotate([180, 90, 180])
          cylinder(h = 36.1999, r1 = 0.282, r2 = 0.282, center = true, $fn = 12);
        }
      
        translate([0, 4.317, 0.03])
        rotate([180, 90, 180])
        cylinder(h = 36.1999, r1 = 0.262, r2 = 0.262, center = true, $fn = 12);
      }
    
      union() {
        translate([11.086, 3.714, -0.725])
        rotate([180, 90, 180])
        cylinder(h = 14.0279, r1 = 0.262, r2 = 0.262, center = true, $fn = 12);
      
        translate([0, 3.183, 0.039])
        rotate([180, 90, 180])
        cylinder(h = 36.1999, r1 = 0.262, r2 = 0.262, center = true, $fn = 12);
      
        translate([-7.014, 0, 7.9255])
        cube(size = [22.1719, 36.1999, 20.3469], center = true);
      }
    }
  
    translate([4.148, -3.525, 0.3165])
    cube(size = [0.1518, 0.8318, 0.5668], center = true);
  
    intersection() {
      difference() {
        difference() {
          translate([-4.147, 0, -0.6655])
          cube(size = [0.1518, 36.1998, 1.3308], center = true);
        
          translate([-8.529, 1.438, -0.727])
          rotate([180, 90, 180])
          cylinder(h = 19.1419, r1 = 0.262, r2 = 0.262, center = true, $fn = 12);
        }
      
        union() {
          translate([-11.086, -1.971, -0.728])
          rotate([180, 90, 180])
          cylinder(h = 14.0279, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
        
          translate([0, -4.242, -0.724])
          rotate([180, 90, -180])
          cylinder(h = 36.1999, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
        }
      }
    
      difference() {
        difference() {
          difference() {
            translate([-4.147, -0.9085, -1.181])
            cube(size = [0.1518, 8.1828, 2.3618], center = true);
          
            translate([-11.086, 0.302, -0.724])
            rotate([180, 90, 180])
            cylinder(h = 14.0279, r1 = 0.265, r2 = 0.265, center = true, $fn = 12);
          }
        
          union() {
            translate([-11.086, 0.91, 0.028])
            rotate([180, 90, 180])
            cylinder(h = 14.0279, r1 = 0.264, r2 = 0.264, center = true, $fn = 12);
          
            translate([-3.3705, -0.834, -0.726])
            rotate([0, 90, 0])
            cylinder(h = 1.7049, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
          }
        }
      
        union() {
          translate([-11.086, 3.183, 0.039])
          rotate([180, 90, 180])
          cylinder(h = 14.0279, r1 = 0.262, r2 = 0.262, center = true, $fn = 12);
        
          translate([6.9385, -2.501, 0.032])
          rotate([180, 90, 180])
          cylinder(h = 22.3229, r1 = 0.262, r2 = 0.262, center = true, $fn = 12);
        
          translate([-11.086, -3.109, -0.727])
          rotate([0, 90, 0])
          cylinder(h = 14.0279, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
        
          translate([-11.086, 2.578, -0.725])
          rotate([180, 90, 180])
          cylinder(h = 14.0279, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
        }
      }
    
      difference() {
        difference() {
          translate([-4.147, -0.9085, -0.725])
          cube(size = [0.1518, 8.1828, 1.5158], center = true);
        
          translate([0, -1.363, 0.035])
          rotate([180, 90, 180])
          cylinder(h = 36.1999, r1 = 0.266, r2 = 0.266, center = true, $fn = 12);
        }
      
        union() {
          translate([6.9385, -0.227, 0.033])
          rotate([180, 90, 180])
          cylinder(h = 22.3229, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
        
          translate([6.9385, 2.044, 0.033])
          rotate([180, 90, 180])
          cylinder(h = 22.3229, r1 = 0.264, r2 = 0.264, center = true, $fn = 12);
        }
      }
    }
  
    translate([2.557, 0.9455, 2.286])
    cube(size = [3.0298, 8.1088, 0.1518], center = true);
  
    translate([-0.7385, 4.0915, 2.286])
    cube(size = [3.5608, 1.8168, 0.1518], center = true);
  
    difference() {
      translate([4.148, -3.525, -0.7415])
      cube(size = [0.1518, 0.8318, 1.4828], center = true);
    
      translate([0, -3.109, -0.727])
      rotate([0, 90, 0])
      cylinder(h = 36.1999, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
    }
  
    difference() {
      union() {
        translate([4.148, -4.4705, -0.4415])
        cube(size = [0.1518, 1.0588, 2.0828], center = true);
      
        translate([2.305, -2.643, -2.184])
        cylinder(h = 0.3558, r1 = 0.394, r2 = 0.394, center = true, $fn = 12);
      }
    
      union() {
        translate([2.305, -2.643, -2.184])
        cylinder(h = 0.1279, r1 = 0.394, r2 = 0.394, center = true, $fn = 12);
      
        translate([9.571, -4.242, -0.724])
        rotate([180, 90, -180])
        cylinder(h = 17.0579, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
      }
    }
  
    difference() {
      difference() {
        difference() {
          difference() {
            translate([-4.147, 0.037, -9.0335])
            cube(size = [0.1518, 6.2918, 18.1328], center = true);
          
            translate([-3.3705, -0.834, -0.726])
            rotate([0, 90, 0])
            cylinder(h = 1.7049, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
          }
        
          union() {
            translate([0, -3.109, -0.727])
            rotate([0, 90, 0])
            cylinder(h = 36.1999, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
          
            translate([6.9385, -2.501, 0.032])
            rotate([180, 90, 180])
            cylinder(h = 22.3229, r1 = 0.262, r2 = 0.262, center = true, $fn = 12);
          }
        }
      
        union() {
          translate([-10.3095, 2.578, -0.725])
          rotate([180, 90, 180])
          cylinder(h = 15.5809, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
        
          translate([-4.147, 7.4955, -9.7915])
          cube(size = [0.1519, 21.2089, 16.6169], center = true);
        
          translate([6.9385, -1.363, 0.035])
          rotate([180, 90, 180])
          cylinder(h = 22.3229, r1 = 0.266, r2 = 0.266, center = true, $fn = 12);
        
          translate([6.9385, -0.227, 0.033])
          rotate([180, 90, 180])
          cylinder(h = 22.3229, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
        }
      }
    
      union() {
        translate([-3.3705, 0.91, 0.028])
        rotate([180, 90, 180])
        cylinder(h = 1.7049, r1 = 0.264, r2 = 0.264, center = true, $fn = 12);
      
        intersection() {
          sphere(r = 54.2999, $fn = 108);
        
          translate([0, 2.044, 0.033])
          rotate([180, 90, 180])
          cylinder(h = 36.1999, r1 = 0.264, r2 = 0.264, center = true, $fn = 12);
        }
      
        translate([6.9385, 0.302, -0.724])
        rotate([180, 90, 180])
        cylinder(h = 22.3229, r1 = 0.265, r2 = 0.265, center = true, $fn = 12);
      
        translate([6.9385, 3.183, 0.039])
        rotate([180, 90, 180])
        cylinder(h = 22.3229, r1 = 0.262, r2 = 0.262, center = true, $fn = 12);
      
        translate([-11.086, 1.438, -0.727])
        rotate([180, 90, 180])
        cylinder(h = 14.0279, r1 = 0.262, r2 = 0.262, center = true, $fn = 12);
      
        translate([-4.147, -1.971, -0.728])
        rotate([180, 90, 180])
        cylinder(h = 0.1519, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
      }
    }
  
    translate([2.306, -2.642, -1.8655])
    cylinder(h = 0.7648, r1 = 0.247, r2 = 0.247, center = true, $fn = 12);
  
    difference() {
      union() {
        translate([2.633, -4.0545, -1.407])
        cube(size = [3.1818, 1.8908, 0.1518], center = true);
      
        translate([4.148, -4.0545, 1.69])
        cube(size = [0.1518, 1.8908, 1.0418], center = true);
      }
    
      translate([2.633, -3.941, 1.737])
      rotate([180, 90, 180])
      cylinder(h = 3.1819, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
    }
  
    difference() {
      difference() {
        translate([4.148, 0.9455, 1.7655])
        cube(size = [0.1518, 8.1088, 1.1928], center = true);
      
        union() {
          translate([9.571, -0.526, 1.74])
          rotate([180, 90, 180])
          cylinder(h = 17.0579, r1 = 0.265, r2 = 0.265, center = true, $fn = 12);
        
          translate([9.571, 1.743, 1.736])
          rotate([180, 90, 180])
          cylinder(h = 17.0579, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
        
          translate([0, -1.668, 1.736])
          rotate([180, 90, 180])
          cylinder(h = 36.1999, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
        }
      }
    
      union() {
        translate([11.086, -2.804, 1.736])
        rotate([180, 90, 180])
        cylinder(h = 14.0279, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
      
        translate([0, 0.606, 1.735])
        rotate([180, 90, 180])
        cylinder(h = 36.1999, r1 = 0.262, r2 = 0.262, center = true, $fn = 12);
      
        translate([0, 4.013, 1.735])
        rotate([180, 90, 180])
        cylinder(h = 36.1999, r1 = 0.261, r2 = 0.261, center = true, $fn = 12);
      
        translate([0, 2.879, 1.736])
        rotate([180, 90, 180])
        cylinder(h = 36.1999, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
      }
    }
  
    difference() {
      difference() {
        difference() {
          translate([-4.147, -0.9085, 1.7655])
          cube(size = [0.1518, 8.1828, 1.1928], center = true);
        
          union() {
            translate([-0.0755, 2.879, 1.736])
            rotate([180, 90, 180])
            cylinder(h = 8.2949, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
          
            translate([0, 1.743, 1.736])
            rotate([180, 90, 180])
            cylinder(h = 36.1999, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
          }
        }
      
        union() {
          translate([6.9385, -2.804, 1.736])
          rotate([180, 90, 180])
          cylinder(h = 22.3229, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
        
          translate([-11.086, -0.526, 1.74])
          rotate([180, 90, 180])
          cylinder(h = 14.0279, r1 = 0.265, r2 = 0.265, center = true, $fn = 12);
        
          translate([0, -1.668, 1.736])
          rotate([180, 90, 180])
          cylinder(h = 36.1999, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
        
          translate([0, 0.606, 1.735])
          rotate([180, 90, 180])
          cylinder(h = 36.1999, r1 = 0.262, r2 = 0.262, center = true, $fn = 12);
        }
      }
    
      translate([0, -3.941, 1.737])
      rotate([180, 90, 180])
      cylinder(h = 36.1999, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
    }
  
    intersection() {
      union() {
        translate([2.308, 3.161, -2.062])
        cylinder(h = 0.1138, r1 = 0.397, r2 = 0.397, center = true, $fn = 12);
      
        translate([2.308, 3.161, -2.305])
        cylinder(h = 0.1138, r1 = 0.397, r2 = 0.397, center = true, $fn = 12);
      
        translate([2.307, 3.157, 7.9255])
        cylinder(h = 20.3468, r1 = 0.247, r2 = 0.247, center = true, $fn = 12);
      }
    
      translate([0, 7.4955, -1.9225])
      cube(size = [36.1998, 21.2088, 0.8788], center = true);
    }
  
    translate([4.148, -4.0545, 2.286])
    cube(size = [0.1518, 1.8908, 0.1518], center = true);
  
    translate([-2.358, -2.644, -1.8655])
    cylinder(h = 0.7648, r1 = 0.246, r2 = 0.246, center = true, $fn = 12);
  
    translate([-1.5905, -0.9085, -1.407])
    cube(size = [5.2648, 8.1828, 0.1518], center = true);
  
    difference() {
      union() {
        difference() {
          translate([-10.3095, 4.0915, 0.4395])
          cube(size = [15.5808, 1.8168, 3.8448], center = true);
        
          union() {
            translate([-10.3095, 3.714, -0.725])
            rotate([180, 90, 180])
            cylinder(h = 15.5809, r1 = 0.262, r2 = 0.262, center = true, $fn = 12);
          
            translate([-4.147, 4.013, 1.735])
            rotate([180, 90, 180])
            cylinder(h = 0.1519, r1 = 0.261, r2 = 0.261, center = true, $fn = 12);
          }
        }
      
        intersection() {
          difference() {
            translate([-3.3705, 10.6415, 9.0665])
            cube(size = [1.7048, 14.9168, 18.0668], center = true);
          
            translate([6.9385, 4.013, 1.735])
            rotate([180, 90, 180])
            cylinder(h = 22.3229, r1 = 0.261, r2 = 0.261, center = true, $fn = 12);
          }
        
          translate([-11.162, -0.227, 0.033])
          rotate([180, 90, 180])
          cylinder(h = 13.8758, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
        }
      }
    
      union() {
        translate([-4.147, -0.227, 0.033])
        rotate([180, 90, 180])
        cylinder(h = 0.1519, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
      
        translate([-11.162, 0.9455, 0])
        cube(size = [13.8759, 8.1089, 36.1999], center = true);
      
        translate([-3.2955, 10.6415, -7.945])
        cube(size = [1.5529, 14.9169, 20.3099], center = true);
      
        translate([6.9385, 3.183, 0.039])
        rotate([180, 90, 180])
        cylinder(h = 22.3229, r1 = 0.262, r2 = 0.262, center = true, $fn = 12);
      
        translate([-10.3095, 3.139, 0.885])
        rotate([180, 90, 180])
        cylinder(h = 15.5809, r1 = 0.282, r2 = 0.282, center = true, $fn = 12);
      
        translate([6.9385, 4.317, 0.03])
        rotate([180, 90, 180])
        cylinder(h = 22.3229, r1 = 0.262, r2 = 0.262, center = true, $fn = 12);
      }
    }
  
    difference() {
      union() {
        translate([-2.362, -2.646, -2.184])
        cylinder(h = 0.3558, r1 = 0.393, r2 = 0.393, center = true, $fn = 12);
      
        translate([-0.7385, -4.924, -1.79])
        cube(size = [3.5608, 0.1518, 0.9158], center = true);
      }
    
      union() {
        translate([0.662, -0.9085, -1.858])
        rotate([180, 90, -90])
        cylinder(h = 8.1829, r1 = 0.116, r2 = 0.116, center = true, $fn = 12);
      
        translate([-1.515, 6.626, -2.184])
        cube(size = [5.1139, 22.9479, 0.1279], center = true);
      }
    }
  
    difference() {
      difference() {
        difference() {
          translate([-4.147, -0.9085, 0.3165])
          cube(size = [0.1518, 8.1828, 0.5668], center = true);
        
          translate([-11.086, -0.227, 0.033])
          rotate([180, 90, 180])
          cylinder(h = 14.0279, r1 = 0.263, r2 = 0.263, center = true, $fn = 12);
        }
      
        union() {
          translate([-10.3095, 2.044, 0.033])
          rotate([180, 90, 180])
          cylinder(h = 15.5809, r1 = 0.264, r2 = 0.264, center = true, $fn = 12);
        
          translate([-8.529, 3.183, 0.039])
          rotate([180, 90, 180])
          cylinder(h = 19.1419, r1 = 0.262, r2 = 0.262, center = true, $fn = 12);
        }
      }
    
      union() {
        translate([-11.086, 0.91, 0.028])
        rotate([180, 90, 180])
        cylinder(h = 14.0279, r1 = 0.264, r2 = 0.264, center = true, $fn = 12);
      
        translate([6.9385, -2.501, 0.032])
        rotate([180, 90, 180])
        cylinder(h = 22.3229, r1 = 0.262, r2 = 0.262, center = true, $fn = 12);
      
        translate([0, -1.363, 0.035])
        rotate([180, 90, 180])
        cylinder(h = 36.1999, r1 = 0.266, r2 = 0.266, center = true, $fn = 12);
      }
    }
  
    translate([-0.0755, -0.9085, 2.286])
    cube(size = [8.2948, 8.1828, 0.1518], center = true);
  }
}
