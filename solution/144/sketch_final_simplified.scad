intersection() {
  cube(size = [11.9997, 11.9997, 7.1997], center = true);

  union() {
    translate([0, 0, -1.5])
    cube(size = [9.9997, 9.9997, 2.9997], center = true);
  
    difference() {
      difference() {
        union() {
          translate([0.002, -0.012, -0.5])
          cylinder(h = 4.9997, r1 = 3.984, r2 = 3.984, center = true, $fn = 12);
        
          translate([0.008, 0.003, 9.8])
          cylinder(h = 16.5997, r1 = 2.979, r2 = 2.979, center = true, $fn = 12);
        }
      
        difference() {
          union() {
            translate([-1.77636e-15, 1.77636e-15, 9.8])
            rotate([180, 0, 45])
            cube(size = [0.9998, 36.1998, 16.5998], center = true);
          
            translate([0, 0, 1.75])
            cube(size = [0.9998, 9.9998, 0.4998], center = true);
          }
        
          translate([0.008, 0.003, 9.8])
          cylinder(h = 16.5999, r1 = 2.979, r2 = 2.979, center = true, $fn = 12);
        }
      }
    
      union() {
        difference() {
          translate([6.55, 0, 1.75])
          cube(size = [23.0998, 0.9998, 0.4998], center = true);
        
          translate([0.004, 0.001, 1.75])
          cylinder(h = 0.4999, r1 = 1.986, r2 = 1.986, center = true, $fn = 12);
        }
      
        difference() {
          union() {
            translate([0, 0, 2.25])
            rotate([180, 0, 45])
            cube(size = [36.1998, 0.9998, 1.4998], center = true);
          
            translate([0.008, 0.003, 1.5])
            cylinder(h = 2.9998, r1 = 2.979, r2 = 2.979, center = true, $fn = 12);
          }
        
          difference() {
            translate([0.004, 0.001, -7.55])
            cylinder(h = 21.0999, r1 = 1.986, r2 = 1.986, center = true, $fn = 12);
          
            translate([-0.002, -0.003, 9.05])
            cylinder(h = 18.1, r1 = 1.001, r2 = 1.001, center = true, $fn = 12);
          }
        }
      
        translate([0.008, 0.003, 10.55])
        cylinder(h = 15.0998, r1 = 2.979, r2 = 2.979, center = true, $fn = 12);
      }
    }
  }
}
