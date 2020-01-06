intersection() {
  translate([5e-06, -5e-06, 0])
  cube(size = [5.67603, 7.4701, 11.9999], center = true);

  union() {
    union() {
      translate([-1.55451e-05, 0.743113, 1.62462])
      rotate([100, 20.0001, 15])
      cube(size = [1.9597, 5.87917, 3.91953], center = true);
    
      translate([0.36893, -1.15281, -2.06032])
      cube(size = [1.95968, 3.91947, 5.87925], center = true);
    }
  }
}
