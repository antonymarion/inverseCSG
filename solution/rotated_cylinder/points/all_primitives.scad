union() {
import("/home/pc-zak/Downloads/inverseCSG/a213-du/inverse_csg/example/rotated_cylinder/csg_high_res.off");
// plane 0.26726 0.53452 0.80178 3.90486
translate([-1.04361, -2.08723, -3.13084])
rotate([-33.6901, 15.5014, -4.7196])
cube(size = [15.0, 15.0, 0.01], center = true);
// plane 0.26726 0.53452 0.80178 -3.90487
translate([1.04362, 2.08723, 3.13085])
rotate([-33.6901, 15.5014, -4.7196])
cube(size = [15.0, 15.0, 0.01], center = true);
}
