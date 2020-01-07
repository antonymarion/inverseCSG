union() {
import("/home/pc-zak/Downloads/inverseCSG/a213-du/inverse_csg/example/two_cuboids/csg_low_res.off");
// plane 1 0 0 -1.34882
translate([1.34882, 0, 0])
rotate([0, 90, 0])
cube(size = [15.0, 15.0, 0.01], center = true);
// plane 0.90767 0.24321 -0.34202 1.35483
translate([-1.22974, -0.329508, 0.463379])
rotate([-144.583, 65.1857, -126.924])
cube(size = [15.0, 15.0, 0.01], center = true);
// plane 1 0 0 0.61096
translate([-0.61096, -0, -0])
rotate([0, 90, 0])
cube(size = [15.0, 15.0, 0.01], center = true);
// plane 0.90767 0.24321 -0.34202 -0.60496
translate([0.549104, 0.147132, -0.206908])
rotate([-144.583, 65.1857, -126.924])
cube(size = [15.0, 15.0, 0.01], center = true);
// plane 0 1 0 3.11259
translate([-0, -3.11259, -0])
rotate([-90, 0, 0])
cube(size = [15.0, 15.0, 0.01], center = true);
// plane -0.19752 0.96662 0.16318 -2.94318
translate([-0.581337, 2.84494, 0.480268])
rotate([-80.418, -11.392, 9.63909])
cube(size = [15.0, 15.0, 0.01], center = true);
// plane 0 1 0 -0.80698
translate([0, 0.80698, 0])
rotate([-90, 0, 0])
cube(size = [15.0, 15.0, 0.01], center = true);
// plane -0.19752 0.96662 0.16317 0.9764
translate([0.192859, -0.943808, -0.159319])
rotate([-80.4185, -11.392, 9.63921])
cube(size = [15.0, 15.0, 0.01], center = true);
// plane 0 0 1 5
translate([-0, -0, -5])
rotate([0, 0, 0])
cube(size = [15.0, 15.0, 0.01], center = true);
// plane 0.37029 -0.08056 0.92542 -4.38328
translate([1.62308, -0.353117, 4.05637])
rotate([4.97519, 21.7334, 0.955652])
cube(size = [15.0, 15.0, 0.01], center = true);
// plane 0.37029 -0.08055 0.92542 1.49606
translate([-0.553976, 0.120508, -1.38448])
rotate([4.97458, 21.7334, 0.955535])
cube(size = [15.0, 15.0, 0.01], center = true);
// plane 0 0 1 -0.87935
translate([0, 0, 0.87935])
rotate([0, 0, 0])
cube(size = [15.0, 15.0, 0.01], center = true);
}
