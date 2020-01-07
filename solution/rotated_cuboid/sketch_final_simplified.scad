intersection() {
  translate([1e-05, -5e-06, 0])
  cube(size = [8.40808, 8.42389, 11.9999], center = true);

  union() {
    union() {
      translate([1.1932e-05, -2.80759e-06, 3.91507e-07])
      rotate([100, 20.0001, 15])
      cube(size = [2.90299, 8.70901, 5.80616], center = true);
    
      translate([1.1932e-05, -2.80759e-06, 3.91507e-07])
      rotate([100, 20.0001, 15])
      cube(size = [2.90299, 8.70901, 5.80616], center = true);
    }
  }
}
