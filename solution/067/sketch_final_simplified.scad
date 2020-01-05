intersection() {
  cube(size = [11.9998, 11.9998, 11.9998], center = true);

  union() {
    intersection() {
      translate([-6.75, 0, 0])
      cube(size = [23.4998, 9.9998, 9.9998], center = true);
    
      union() {
        sphere(r = 55.4998, $fn = 111);
      
        translate([0.045, 0.133, 0.177])
        sphere(r = 6.6318, $fn = 13);
      }
    
      difference() {
        union() {
          translate([0.045, 0.133, 0.177])
          sphere(r = 6.6318, $fn = 13);
        
          translate([-0.006, 6.75, 0.024])
          rotate([180, 90, -90])
          cylinder(h = 23.4998, r1 = 3.317, r2 = 3.317, center = true, $fn = 12);
        }
      
        union() {
          translate([0, -0.027, 0.02])
          rotate([180, 90, 180])
          cylinder(h = 9.9999, r1 = 3.306, r2 = 3.306, center = true, $fn = 12);
        
          translate([-0.006, -6.75, 0.024])
          rotate([180, 90, -90])
          cylinder(h = 23.4999, r1 = 3.317, r2 = 3.317, center = true, $fn = 12);
        }
      }
    
      difference() {
        translate([0.045, 0.133, 0.177])
        sphere(r = 6.6318, $fn = 13);
      
        intersection() {
          sphere(r = 55.4999, $fn = 111);
        
          translate([-0.008, -0.035, -6.75])
          cylinder(h = 23.4999, r1 = 3.316, r2 = 3.316, center = true, $fn = 12);
        }
      }
    
      translate([6.75, 0, 0])
      cube(size = [23.4998, 9.9998, 36.9998], center = true);
    }
  
    intersection() {
      union() {
        translate([-0.008, -0.035, 11.75])
        cylinder(h = 13.4998, r1 = 3.316, r2 = 3.316, center = true, $fn = 12);
      
        translate([0, -11.75, 11.75])
        cube(size = [36.9998, 13.4998, 13.4998], center = true);
      }
    
      translate([0, 6.75, -6.75])
      cube(size = [36.9998, 23.4998, 23.4998], center = true);
    }
  }
}
