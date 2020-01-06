translate([0.236883, -0.18865, -2.17112])
union() {
  union() {
    difference() {
      union() {
        sphere(r = 1.13259, $fn = 60);
      
        translate([0, 0.943909, 0])
        sphere(r = 1.0382, $fn = 60);
      }
    
      translate([0.943909, 0, 0.943909])
      sphere(r = 0.660736, $fn = 60);
    }
  
    translate([1.32147, 3.1149, 0.755127])
    sphere(r = 2.0765, $fn = 60);
  
    translate([-3.1149, -1.98221, -0.094391])
    sphere(r = 0.755027, $fn = 60);
  }

  translate([1.41586, -2.92612, 3.77564])
  sphere(r = 1.88772, $fn = 60);
}
