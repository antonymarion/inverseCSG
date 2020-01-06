translate([-1.79127, -3.21017, -1.19486])
union() {
  difference() {
    union() {
      sphere(r = 1.79219, $fn = 60);
    
      translate([0, 1.49358, 0])
      sphere(r = 1.64284, $fn = 60);
    }
  
    translate([1.49358, 0, 1.49358])
    sphere(r = 1.0455, $fn = 60);
  }

  translate([2.09101, 4.92881, 1.19486])
  sphere(r = 3.28577, $fn = 60);
}
