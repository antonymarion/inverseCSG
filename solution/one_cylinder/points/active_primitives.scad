union() {
import("/home/pc-zak/Downloads/inverseCSG/a213-du/inverse_csg/example/one_cylinder/csg_high_res.off");
// plane 0 1 0 5.00001
translate([-0, -5.00001, -0])
rotate([-90, 0, 0])
cube(size = [15.0, 15.0, 0.01], center = true);
// plane 0 1 0 -5
translate([0, 5, 0])
rotate([-90, 0, 0])
cube(size = [15.0, 15.0, 0.01], center = true);
// cylinder -0.00231 0 -0.00529 0 1 0 3.7537
translate([-0.00231, 0, -0.00529])
rotate([-90, 0, 0])
cylinder(h = 15, r1 = 3.7537, r2 = 3.7537, center = true, $fn = 12);
}
