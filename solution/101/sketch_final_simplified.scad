intersection() {
  translate([0.0005, 0, 0])
  cube(size = [1.0909, 11.9999, 11.9999], center = true);

  union() {
    intersection() {
      difference() {
        union() {
          translate([-9.0045, -3.182, -0.818])
          rotate([180, 90, 180])
          cylinder(h = 18.1909, r1 = 0.724, r2 = 0.724, center = true, $fn = 12);
        
          translate([-0.0005, -10.6465, 0])
          rotate([-90, 0, 0])
          cube(size = [0.9089, 36.1999, 14.9069], center = true);
        
          difference() {
            translate([-0.0005, 4.544, -6.9955])
            rotate([-90, 0, 0])
            cube(size = [0.9089, 22.2089, 0.9079], center = true);
          
            translate([9.0955, 3.543, -3.183])
            rotate([180, 90, 180])
            cylinder(h = 18.009, r1 = 0.724, r2 = 0.724, center = true, $fn = 12);
          }
        }
      
        union() {
          translate([9.0955, -3.182, -0.818])
          rotate([180, 90, 180])
          cylinder(h = 18.009, r1 = 0.724, r2 = 0.724, center = true, $fn = 12);
        
          translate([-9.0045, -3.18, 2.091])
          rotate([180, 90, 180])
          cylinder(h = 18.191, r1 = 0.372, r2 = 0.372, center = true, $fn = 12);
        
          translate([9.0955, -11.085, 0.4665])
          rotate([-90, 0, 0])
          cube(size = [18.009, 7.285, 14.03], center = true);
        
          translate([8.8225, -3.181, -0.819])
          rotate([180, 90, 180])
          cylinder(h = 18.555, r1 = 0.371, r2 = 0.371, center = true, $fn = 12);
        }
      }
    
      union() {
        difference() {
          translate([8.8225, 0.01, 0.9085])
          rotate([-90, 0, 0])
          cube(size = [18.5549, 8.1689, 8.1599], center = true);
        
          translate([-8.8225, -3.18, 2.09])
          rotate([180, 90, 180])
          cylinder(h = 18.555, r1 = 0.724, r2 = 0.724, center = true, $fn = 12);
        }
      
        translate([-0.1825, -3.18, 2.09])
        rotate([180, 90, 180])
        cylinder(h = 0.5449, r1 = 0.724, r2 = 0.724, center = true, $fn = 12);
      
        translate([-0.47, -4.07, -3.637])
        cylinder(h = 0.9219, r1 = 0.931, r2 = 0.931, center = true, $fn = 12);
      
        translate([-0.0005, 4.544, -3.637])
        rotate([-90, 0, 0])
        cube(size = [0.9089, 0.9219, 0.9079], center = true);
      
        translate([-0.453, -4.096, -4.09])
        sphere(r = 0.9049, $fn = 12);
      
        translate([-9.0045, 4.092, -3.182])
        rotate([180, 90, 180])
        cylinder(h = 18.1909, r1 = 0.909, r2 = 0.909, center = true, $fn = 12);
      }
    }
  
    intersection() {
      union() {
        translate([9.0955, 4.092, -3.182])
        rotate([180, 90, 180])
        cylinder(h = 18.0089, r1 = 0.909, r2 = 0.909, center = true, $fn = 12);
      
        translate([-0.47, -4.07, 7.001])
        cylinder(h = 22.1979, r1 = 0.931, r2 = 0.931, center = true, $fn = 12);
      
        translate([0, -3.195, 4.083])
        rotate([180, 90, 180])
        cylinder(h = 36.1999, r1 = 0.924, r2 = 0.924, center = true, $fn = 12);
      
        difference() {
          translate([0, 0.448, 0.0055])
          rotate([-90, 0, 0])
          cube(size = [36.1999, 8.2069, 7.2819], center = true);
        
          translate([-8.8225, 4.096, 4.101])
          rotate([180, 90, 180])
          cylinder(h = 18.555, r1 = 6.373, r2 = 6.373, center = true, $fn = 12);
        }
      
        translate([0, -3.631, -3.637])
        rotate([-90, 0, 0])
        cube(size = [36.1999, 0.9219, 0.8779], center = true);
      
        translate([-0.451, 0.464, -4.099])
        rotate([180, 90, -90])
        cylinder(h = 9.0679, r1 = 0.899, r2 = 0.899, center = true, $fn = 12);
      }
    
      difference() {
        difference() {
          difference() {
            translate([-0.0005, 0, -6.5535])
            rotate([-90, 0, 0])
            cube(size = [0.9089, 23.0929, 36.1999], center = true);
          
            translate([0.273, 0.634, -3.182])
            rotate([180, 90, 180])
            cylinder(h = 0.364, r1 = 0.723, r2 = 0.723, center = true, $fn = 12);
          }
        
          union() {
            translate([0, 3.548, -3.183])
            rotate([180, 90, 180])
            cylinder(h = 36.2, r1 = 0.371, r2 = 0.371, center = true, $fn = 12);
          
            translate([-8.8225, 0.636, -3.181])
            rotate([180, 90, 180])
            cylinder(h = 18.555, r1 = 0.371, r2 = 0.371, center = true, $fn = 12);
          }
        }
      
        union() {
          translate([8.8225, -3.18, 2.091])
          rotate([180, 90, 180])
          cylinder(h = 18.555, r1 = 0.372, r2 = 0.372, center = true, $fn = 12);
        
          translate([0, -3.182, -0.818])
          rotate([180, 90, 180])
          cylinder(h = 36.2, r1 = 0.724, r2 = 0.724, center = true, $fn = 12);
        
          translate([9.0955, 3.543, -3.183])
          rotate([180, 90, 180])
          cylinder(h = 18.009, r1 = 0.724, r2 = 0.724, center = true, $fn = 12);
        
          translate([0.273, -3.18, 2.09])
          rotate([180, 90, 180])
          cylinder(h = 0.364, r1 = 0.724, r2 = 0.724, center = true, $fn = 12);
        }
      }
    }
  }
}
