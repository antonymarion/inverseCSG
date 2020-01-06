intersection() {
  translate([0, 0, 0.0005])
  cube(size = [11.9999, 11.9999, 11.3889], center = true);

  union() {
    difference() {
      difference() {
        translate([0.002, 0.004, 0.0005])
        cylinder(h = 9.4909, r1 = 4.623, r2 = 4.623, center = true, $fn = 12);
      
        translate([0, 10.026, -0.231])
        cube(size = [36.4, 16.348, 9.028], center = true);
      }
    
      union() {
        translate([0.003, 0.879, -0.129])
        rotate([180, 90, -90])
        cylinder(h = 1.944, r1 = 1.854, r2 = 1.854, center = true, $fn = 12);
      
        translate([0.005, 9.5605, -0.084])
        rotate([180, 90, -90])
        cylinder(h = 17.279, r1 = 2.289, r2 = 2.289, center = true, $fn = 12);
      
        translate([0, 9.0535, -2.414])
        cube(size = [4.63, 18.293, 4.662], center = true);
      }
    }
  
    difference() {
      union() {
        translate([0.011, 0.001, 4.5135])
        cylinder(h = 0.4629, r1 = 4.987, r2 = 4.987, center = true, $fn = 12);
      
        translate([0, 0.414, -2.414])
        cube(size = [4.6299, 1.0139, 4.6619], center = true);
      }
    
      translate([0, 0, -0.231])
      cube(size = [3.704, 36.4, 9.028], center = true);
    }
  }
}
