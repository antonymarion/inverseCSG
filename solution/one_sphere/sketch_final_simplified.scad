intersection() {
  cube(size = [11.9999, 11.9999, 11.9999], center = true);

  union() {
    union() {
      translate([0.01544, 0.0499, -0.00119])
      sphere(r = 5.04482, $fn = 12);
    
      translate([0.01544, 0.0499, -0.00119])
      sphere(r = 5.04482, $fn = 12);
    }
  }
}
