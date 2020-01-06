union() {
import("/home/pc-zak/Downloads/inverseCSG/a213-du/inverse_csg/example/rotated_cuboid/csg_low_res.off");
// plane 0.90767 0.24321 -0.34202 -1.45155
translate([1.31753, 0.353031, -0.496459])
rotate([-144.583, 65.1857, -126.924])
cube(size = [15.0, 15.0, 0.01], center = true);
// plane 0.90767 0.24321 -0.34202 1.45153
translate([-1.31751, -0.353027, 0.496452])
rotate([-144.583, 65.1857, -126.924])
cube(size = [15.0, 15.0, 0.01], center = true);
// plane -0.19752 0.96662 0.16318 2.90309
translate([0.573418, -2.80618, -0.473726])
rotate([-80.418, -11.392, 9.63909])
cube(size = [15.0, 15.0, 0.01], center = true);
// plane -0.19752 0.96662 0.16318 -2.90308
translate([-0.573416, 2.80618, 0.473725])
rotate([-80.418, -11.392, 9.63909])
cube(size = [15.0, 15.0, 0.01], center = true);
// plane 0.37029 -0.08055 0.92542 4.3546
translate([-1.61246, 0.350763, -4.02983])
rotate([4.97458, 21.7334, 0.955535])
cube(size = [15.0, 15.0, 0.01], center = true);
// plane 0.37029 -0.08055 0.92542 -4.35461
translate([1.61247, -0.350764, 4.02984])
rotate([4.97458, 21.7334, 0.955535])
cube(size = [15.0, 15.0, 0.01], center = true);
}
