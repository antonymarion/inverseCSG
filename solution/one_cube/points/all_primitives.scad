union() {
import("/home/pc-zak/Downloads/inverseCSG/a213-du/inverse_csg/example/one_cube/csg_low_res.off");
// plane 0 0 1 5
translate([-0, -0, -5])
rotate([0, 0, 0])
cube(size = [15.0, 15.0, 0.01], center = true);
// plane 1 0 0 5
translate([-5, -0, -0])
rotate([0, 90, 0])
cube(size = [15.0, 15.0, 0.01], center = true);
// plane 1 0 0 -5
translate([5, 0, 0])
rotate([0, 90, 0])
cube(size = [15.0, 15.0, 0.01], center = true);
// plane 0 1 0 5
translate([-0, -5, -0])
rotate([-90, 0, 0])
cube(size = [15.0, 15.0, 0.01], center = true);
// plane 0 0 1 -5
translate([0, 0, 5])
rotate([0, 0, 0])
cube(size = [15.0, 15.0, 0.01], center = true);
// plane 0 1 0 -5
translate([0, 5, 0])
rotate([-90, 0, 0])
cube(size = [15.0, 15.0, 0.01], center = true);
}
