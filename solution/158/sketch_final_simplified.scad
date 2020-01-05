intersection() {
  cube(size = [11.9999, 11.9999, 6.5999], center = true);

  union() {
    difference() {
      translate([0.009, 0.019, 1])
      cylinder(h = 1.4999, r1 = 2.994, r2 = 2.994, center = true, $fn = 12);
    
      translate([0.014, 0.036, 1.75])
      cylinder(h = 1, r1 = 1.003, r2 = 1.003, center = true, $fn = 12);
    }
  
    difference() {
      union() {
        translate([0.009, 0.019, 2.5])
        cylinder(h = 0.4999, r1 = 2.994, r2 = 2.994, center = true, $fn = 12);
      
        translate([-0.009, 0.002, 2.25])
        cylinder(h = 0.9999, r1 = 2.5, r2 = 2.5, center = true, $fn = 12);
      }
    
      translate([0.038, 0, 10.375])
      cylinder(h = 17.25, r1 = 1.502, r2 = 1.502, center = true, $fn = 12);
    }
  
    difference() {
      difference() {
        difference() {
          difference() {
            translate([0, 0, -1.25])
            cube(size = [9.9999, 9.9999, 2.9999], center = true);
          
            translate([2.253, -3.906, 8.125])
            cylinder(h = 21.75, r1 = 0.5, r2 = 0.5, center = true, $fn = 12);
          }
        
          union() {
            translate([4.603, -4.614, 8.125])
            cylinder(h = 21.75, r1 = 1.517, r2 = 1.517, center = true, $fn = 12);
          
            translate([-4.608, 4.627, -1.25])
            cylinder(h = 3, r1 = 1.518, r2 = 1.518, center = true, $fn = 12);
          }
        }
      
        translate([-3.893, -2.245, 8.125])
        cylinder(h = 21.75, r1 = 0.503, r2 = 0.503, center = true, $fn = 12);
      }
    
      union() {
        translate([-4.62, -4.603, -9.375])
        cylinder(h = 19.25, r1 = 1.518, r2 = 1.518, center = true, $fn = 12);
      
        translate([4.59, 4.608, 8.125])
        cylinder(h = 21.75, r1 = 1.502, r2 = 1.502, center = true, $fn = 12);
      
        translate([-2.25, 3.899, -9.375])
        cylinder(h = 19.25, r1 = 0.498, r2 = 0.498, center = true, $fn = 12);
      
        translate([3.898, 2.249, -9.375])
        cylinder(h = 19.25, r1 = 0.504, r2 = 0.504, center = true, $fn = 12);
      }
    }
  }
}
