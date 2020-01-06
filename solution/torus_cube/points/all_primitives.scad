union() {
import("/home/pc-zak/Downloads/inverseCSG/a213-du/inverse_csg/example/torus_cube/csg_high_res.off");
// torus 1.36547 -0.05681 -0.34528 -0.00316 0.99984 0.01765 2.8305 0.89916
translate([1.36547, -0.05681, -0.34528])
rotate([-88.9887, -0.181055, 0.177887])
rotate_extrude($fn = 12)
translate([2.8305, 0, 0])
circle(r = 0.89916, $fn = 12);
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
// torus 1.38044 -0.29033 -0.50675 -0.10974 0.99386 0.01414 2.70773 0.91909
translate([1.38044, -0.29033, -0.50675])
rotate([-89.1849, -6.30033, 6.2115])
rotate_extrude($fn = 12)
translate([2.70773, 0, 0])
circle(r = 0.91909, $fn = 12);
// torus 1.51395 0.17127 -0.31768 -0.04669 0.99837 -0.03274 2.88862 0.89538
translate([1.51395, 0.17127, -0.31768])
rotate([-91.8783, -2.67612, 2.76528])
rotate_extrude($fn = 12)
translate([2.88862, 0, 0])
circle(r = 0.89538, $fn = 12);
// torus 1.37988 0.08321 -0.45923 0.02616 0.99962 0.00811 2.71033 0.9093
translate([1.37988, 0.08321, -0.45923])
rotate([-89.5352, 1.49904, -1.48692])
rotate_extrude($fn = 12)
translate([2.71033, 0, 0])
circle(r = 0.9093, $fn = 12);
// torus 1.44959 0.0131 -0.56305 -0.00565 0.99998 0.00276 2.62683 0.89008
translate([1.44959, 0.0131, -0.56305])
rotate([-89.8419, -0.323723, 0.322831])
rotate_extrude($fn = 12)
translate([2.62683, 0, 0])
circle(r = 0.89008, $fn = 12);
// torus 1.05389 0.05221 -0.67336 -0.01271 0.99991 -0.00529 2.34228 0.8865
translate([1.05389, 0.05221, -0.67336])
rotate([-90.3031, -0.728245, 0.732108])
rotate_extrude($fn = 12)
translate([2.34228, 0, 0])
circle(r = 0.8865, $fn = 12);
// torus 1.35496 -0.01036 -0.50652 -0.00465 0.9998 0.01939 2.67364 0.87877
translate([1.35496, -0.01036, -0.50652])
rotate([-88.889, -0.266427, 0.26131])
rotate_extrude($fn = 12)
translate([2.67364, 0, 0])
circle(r = 0.87877, $fn = 12);
// torus 1.26782 -0.12701 -0.51295 -0.0511 0.99834 0.02668 2.80876 0.92807
translate([1.26782, -0.12701, -0.51295])
rotate([-88.4692, -2.92908, 2.85188])
rotate_extrude($fn = 12)
translate([2.80876, 0, 0])
circle(r = 0.92807, $fn = 12);
// torus 1.87206 0.45944 -0.29058 -0.13245 0.99087 -0.02531 3.27717 0.92097
translate([1.87206, 0.45944, -0.29058])
rotate([-91.4632, -7.61116, 7.80746])
rotate_extrude($fn = 12)
translate([3.27717, 0, 0])
circle(r = 0.92097, $fn = 12);
}
