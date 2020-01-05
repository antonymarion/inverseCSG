intersection() {
  union() {
    translate([0.002, 1.102, -1.4155])
    cylinder(h = 7.1689, r1 = 0.222, r2 = 0.222, center = true, $fn = 12);
  
    intersection() {
      union() {
        translate([-0.002, 0.002, -7.8315])
        rotate([180, 0, 180])
        cylinder(h = 20.7369, r1 = 1.469, r2 = 1.469, center = true, $fn = 12);
      
        translate([-0.007, 0.001, -4.947])
        sphere(r = 3.6349, $fn = 12);
      
        intersection() {
          translate([0, 0, 8.438])
          cylinder(h = 19.5239, r1 = 0.22, r2 = 0.22, center = true, $fn = 12);
        
          sphere(r = 54.5999, $fn = 109);
        }
      
        translate([-0.002, 0.001, 2.348])
        sphere(r = 1.1789, $fn = 12);
      }
    
      union() {
        intersection() {
          translate([0.002, -1.104, -1.4155])
          cylinder(h = 7.1689, r1 = 0.22, r2 = 0.22, center = true, $fn = 12);
        
          sphere(r = 54.5999, $fn = 109);
        }
      
        translate([-1.103, -0.001, -1.4155])
        cylinder(h = 7.1689, r1 = 0.218, r2 = 0.218, center = true, $fn = 12);
      
        difference() {
          union() {
            translate([-0.002, 0.002, 10.1845])
            rotate([180, 0, 180])
            cylinder(h = 16.0309, r1 = 1.469, r2 = 1.469, center = true, $fn = 12);
          
            translate([0, 0, -3.162])
            cube(size = [36.3999, 36.3999, 3.6759], center = true);
          }
        
          translate([-0.002, 0.002, -11.6])
          rotate([180, 0, 180])
          cylinder(h = 13.2, r1 = 1.469, r2 = 1.469, center = true, $fn = 12);
        }
      }
    }
  
    translate([1.104, 0, -1.2315])
    cylinder(h = 7.5369, r1 = 0.222, r2 = 0.222, center = true, $fn = 12);
  }

  translate([-0.0005, -0.0005, 0])
  cube(size = [8.8109, 8.8109, 11.9999], center = true);
}
