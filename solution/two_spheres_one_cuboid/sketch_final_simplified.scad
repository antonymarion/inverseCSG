translate([0, -1.66819, 0])
difference() {
  union() {
    sphere(r = 3.33628, $fn = 60);
  
    translate([0, 3.33638, 0])
    sphere(r = 3.33628, $fn = 60);
  }

  translate([1.50137, -1.33455, 1.33455])
  cube(size = [3.00274, 4.00366, 2.66911], center = true);
}
