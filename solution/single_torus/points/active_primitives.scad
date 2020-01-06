union() {
import("/home/pc-zak/Downloads/inverseCSG/a213-du/inverse_csg/example/single_torus/csg_high_res.off");
// torus -0.0278 -0.05229 -0.08639 0.01221 0.9999 -0.00653 3.52071 1.50166
translate([-0.0278, -0.05229, -0.08639])
rotate([-90.3742, 0.699602, -0.704185])
rotate_extrude($fn = 12)
translate([3.52071, 0, 0])
circle(r = 1.50166, $fn = 12);
}
