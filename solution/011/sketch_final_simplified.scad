intersection() {
  translate([0, 0.0005, 0])
  cube(size = [1.0079, 1.0089, 11.9999], center = true);

  union() {
    difference() {
      translate([-0.002, 0.001, 4.744])
      cylinder(h = 0.5119, r1 = 0.42, r2 = 0.42, center = true, $fn = 12);
    
      translate([-0.001, 0, 0])
      cylinder(h = 36.2, r1 = 0.261, r2 = 0.261, center = true, $fn = 12);
    }
  
    translate([-0.001, 0, -0.122])
    cylinder(h = 9.7559, r1 = 0.261, r2 = 0.261, center = true, $fn = 12);
  }
}
