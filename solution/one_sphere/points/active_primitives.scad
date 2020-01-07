union() {
import("/home/pc-zak/Downloads/inverseCSG/a213-du/inverse_csg/example/one_sphere/csg_high_res.off");
// sphere 0.00012 -0.00714 0.00428 5.00155
translate([0.00012, -0.00714, 0.00428])
sphere(r = 5.00155, center = true, $fn = 12);
// sphere 0.01544 0.0499 -0.00119 5.04492
translate([0.01544, 0.0499, -0.00119])
sphere(r = 5.04492, center = true, $fn = 12);
}
