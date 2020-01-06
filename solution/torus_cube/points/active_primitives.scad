union() {
import("/home/pc-zak/Downloads/inverseCSG/a213-du/inverse_csg/example/torus_cube/csg_high_res.off");
// plane 0 0 1 -4.09141
translate([0, 0, 4.09141])
rotate([0, 0, 0])
cube(size = [15.0, 15.0, 0.01], center = true);
// plane 0 0 1 0.45561
translate([-0, -0, -0.45561])
rotate([0, 0, 0])
cube(size = [15.0, 15.0, 0.01], center = true);
// plane 0 1 0 2.72821
translate([-0, -2.72821, -0])
rotate([-90, 0, 0])
cube(size = [15.0, 15.0, 0.01], center = true);
// plane 0 1 0 -2.72821
translate([0, 2.72821, 0])
rotate([-90, 0, 0])
cube(size = [15.0, 15.0, 0.01], center = true);
// plane 1 0 0 5
translate([-5, -0, -0])
rotate([0, 90, 0])
cube(size = [15.0, 15.0, 0.01], center = true);
// plane 1 0 0 -2.27523
translate([2.27523, 0, 0])
rotate([0, 90, 0])
cube(size = [15.0, 15.0, 0.01], center = true);
// torus 1.35496 -0.01036 -0.50652 -0.00465 0.9998 0.01939 2.67364 0.87877
translate([1.35496, -0.01036, -0.50652])
rotate([-88.889, -0.266427, 0.26131])
rotate_extrude($fn = 12)
translate([2.67364, 0, 0])
circle(r = 0.87877, $fn = 12);
}
