intersection() {
  translate([-5e-06, 1e-05, 1.5e-05])
  cube(size = [11.9999, 8.96419, 9.18457], center = true);

  union() {
    union() {
      difference() {
        translate([0.806225, -0.332184, -1.67729])
        rotate([-178, 4.00022, 25])
        cube(size = [6.11766, 6.11761, 3.6705], center = true);
      
        translate([1.4069, -16.0324, 2.22933])
        rotate([-147.032, 3.34625, 40.017])
        cube(size = [19.308, 17.7151, 20.8221], center = true);
      }
    
      difference() {
        translate([-2.11245, 0.502873, 0.596159])
        rotate([90.6156, 34.4411, 5.25889])
        cube(size = [2.44695, 6.11766, 3.67057], center = true);
      
        translate([3.44853, 10.4444, -11.5032])
        rotate([-178, 4.00022, 25])
        cube(size = [21.353, 22.7572, 15.5561], center = true);
      }
    }
  }
}
