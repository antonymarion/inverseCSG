intersection() {
  cube(size = [7.1999, 7.1999, 11.9999], center = true);

  union() {
    intersection() {
      translate([0, 7.625, 0])
      cube(size = [5.9999, 21.2499, 9.9999], center = true);
    
      translate([2.484, 2.472, -11.625])
      cylinder(h = 13.2499, r1 = 0.75, r2 = 0.75, center = true, $fn = 12);
    }
  
    intersection() {
      difference() {
        cube(size = [5.9999, 5.9999, 9.9999], center = true);
      
        union() {
          translate([-1.251, 2.451, 6.625])
          cylinder(h = 23.25, r1 = 0.293, r2 = 0.293, center = true, $fn = 12);
        
          translate([0.01, -0.01, 0])
          cylinder(h = 36.5, r1 = 2.251, r2 = 2.251, center = true, $fn = 12);
        }
      }
    
      difference() {
        difference() {
          difference() {
            sphere(r = 54.7499, $fn = 109);
          
            translate([-2.453, -1.251, -6.625])
            cylinder(h = 23.25, r1 = 0.299, r2 = 0.299, center = true, $fn = 12);
          }
        
          union() {
            translate([2.473, -2.475, 0])
            cylinder(h = 36.5, r1 = 0.751, r2 = 0.751, center = true, $fn = 12);
          
            translate([2.484, 2.472, -6.625])
            cylinder(h = 23.25, r1 = 0.75, r2 = 0.75, center = true, $fn = 12);
          }
        }
      
        union() {
          translate([1.246, -2.448, -6.625])
          cylinder(h = 23.25, r1 = 0.302, r2 = 0.302, center = true, $fn = 12);
        
          translate([2.452, 1.25, -6.625])
          cylinder(h = 23.25, r1 = 0.303, r2 = 0.303, center = true, $fn = 12);
        
          translate([-2.463, 2.471, 0])
          cylinder(h = 10, r1 = 0.747, r2 = 0.747, center = true, $fn = 12);
        
          translate([-2.475, -2.466, 6.625])
          cylinder(h = 23.25, r1 = 0.745, r2 = 0.745, center = true, $fn = 12);
        }
      }
    }
  }
}
