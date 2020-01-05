intersection() {
  cube(size = [6.9997, 11.9997, 3.7497], center = true);

  union() {
    difference() {
      difference() {
        translate([0.001, 0.0005, 0.0005])
        cube(size = [1.6237, 8.3307, 3.1247], center = true);
      
        translate([-0.001, 0, -8.2685])
        cylinder(h = 19.6628, r1 = 2.084, r2 = 2.084, center = true, $fn = 12);
      }
    
      union() {
        translate([-0.002, 4.161, 8.2695])
        cylinder(h = 19.6628, r1 = 0.836, r2 = 0.836, center = true, $fn = 12);
      
        translate([0.001, -4.163, 8.2695])
        cylinder(h = 19.6628, r1 = 0.836, r2 = 0.836, center = true, $fn = 12);
      }
    }
  
    difference() {
      translate([-0.002, 4.161, 0.0005])
      cylinder(h = 3.1247, r1 = 0.836, r2 = 0.836, center = true, $fn = 12);
    
      translate([0, 4.166, 0.0005])
      cylinder(h = 3.1248, r1 = 0.521, r2 = 0.521, center = true, $fn = 12);
    }
  
    difference() {
      union() {
        difference() {
          translate([0.004, -0.002, -0.0005])
          rotate([180, 0, 180])
          cylinder(h = 3.1247, r1 = 2.914, r2 = 2.914, center = true, $fn = 12);
        
          translate([0, 0.001, 8.2695])
          cylinder(h = 19.6628, r1 = 1.25, r2 = 1.25, center = true, $fn = 12);
        }
      
        difference() {
          translate([0.001, -4.163, 0.0005])
          cylinder(h = 3.1247, r1 = 0.836, r2 = 0.836, center = true, $fn = 12);
        
          translate([0.001, -4.165, -8.2685])
          cylinder(h = 19.6628, r1 = 0.519, r2 = 0.519, center = true, $fn = 12);
        }
      }
    
      difference() {
        translate([-0.001, 0, 8.582])
        cylinder(h = 19.0378, r1 = 2.084, r2 = 2.084, center = true, $fn = 12);
      
        difference() {
          translate([0, 0.0005, 0.6245])
          cube(size = [36.1999, 8.3309, 1.8749], center = true);
        
          translate([0.004, -0.002, 0.6245])
          rotate([180, 0, 180])
          cylinder(h = 0.625, r1 = 2.914, r2 = 2.914, center = true, $fn = 12);
        }
      }
    }
  }
}
