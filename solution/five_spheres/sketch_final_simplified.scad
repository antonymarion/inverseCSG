translate([0.298909, -1.54723, -0.952848])
union() {
  difference() {
    union() {
      sphere(r = 1.42917, $fn = 60);
    
      translate([0, 1.19106, 0])
      sphere(r = 1.31007, $fn = 60);
    }
  
    translate([1.19106, 0, 1.19106])
    sphere(r = 0.833742, $fn = 60);
  }

  translate([1.66749, 3.9305, 0.952848])
  sphere(r = 2.62023, $fn = 60);

  translate([-3.9305, -2.50123, -0.119106])
  sphere(r = 0.952748, $fn = 60);
}
