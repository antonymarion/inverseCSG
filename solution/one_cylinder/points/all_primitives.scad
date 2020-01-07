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
// cylinder 0.00678 0 0.03181 0 1 0 3.69681
translate([0.00678, 0, 0.03181])
rotate([-90, 0, 0])
cylinder(h = 15, r1 = 3.69681, r2 = 3.69681, center = true, $fn = 12);
// cylinder -0.09473 0 0.10426 0 1 0 3.60583
translate([-0.09473, 0, 0.10426])
rotate([-90, 0, 0])
cylinder(h = 15, r1 = 3.60583, r2 = 3.60583, center = true, $fn = 12);
// cylinder 0.75942 0 0.84942 0 1 0 4.88291
translate([0.75942, 0, 0.84942])
rotate([-90, 0, 0])
cylinder(h = 15, r1 = 4.88291, r2 = 4.88291, center = true, $fn = 12);
// cylinder -0.00177 0 0.00599 0 1 0 3.75222
translate([-0.00177, 0, 0.00599])
rotate([-90, 0, 0])
cylinder(h = 15, r1 = 3.75222, r2 = 3.75222, center = true, $fn = 12);
// cylinder -0.04267 0 0.03418 0 1 0 3.8145
translate([-0.04267, 0, 0.03418])
rotate([-90, 0, 0])
cylinder(h = 15, r1 = 3.8145, r2 = 3.8145, center = true, $fn = 12);
// cylinder 0.03674 0 -0.07878 0 1 0 3.83795
translate([0.03674, 0, -0.07878])
rotate([-90, 0, 0])
cylinder(h = 15, r1 = 3.83795, r2 = 3.83795, center = true, $fn = 12);
// cylinder 0.04756 0 0.09207 0 1 0 3.8491
translate([0.04756, 0, 0.09207])
rotate([-90, 0, 0])
cylinder(h = 15, r1 = 3.8491, r2 = 3.8491, center = true, $fn = 12);
// plane 0.99863 0 0.05233 3.74486
translate([-3.73973, -0, -0.195969])
rotate([0, 87.0003, 0])
cube(size = [15.0, 15.0, 0.01], center = true);
// cylinder -0.01999 0 -0.04765 0 1 0 3.67453
translate([-0.01999, 0, -0.04765])
rotate([-90, 0, 0])
cylinder(h = 15, r1 = 3.67453, r2 = 3.67453, center = true, $fn = 12);
// cylinder 0.13246 0 0.0393 0 1 0 3.60675
translate([0.13246, 0, 0.0393])
rotate([-90, 0, 0])
cylinder(h = 15, r1 = 3.60675, r2 = 3.60675, center = true, $fn = 12);
// cylinder 0.01892 0 0.1162 0 1 0 3.62981
translate([0.01892, 0, 0.1162])
rotate([-90, 0, 0])
cylinder(h = 15, r1 = 3.62981, r2 = 3.62981, center = true, $fn = 12);
// cylinder -0.13075 0 -0.00847 0 1 0 3.61705
translate([-0.13075, 0, -0.00847])
rotate([-90, 0, 0])
cylinder(h = 15, r1 = 3.61705, r2 = 3.61705, center = true, $fn = 12);
// cylinder -0.1032 0 0.16766 0 1 0 3.94169
translate([-0.1032, 0, 0.16766])
rotate([-90, 0, 0])
cylinder(h = 15, r1 = 3.94169, r2 = 3.94169, center = true, $fn = 12);
}
