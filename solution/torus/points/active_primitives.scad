union() {
import("/home/pc-zak/Downloads/inverseCSG/a213-du/inverse_csg/example/torus/csg_high_res.off");
// torus 0.04938 -0.03127 0.05714 0.00108 0.99999 -0.0036 4.02929 0.98679
translate([0.04938, -0.03127, 0.05714])
rotate([-90.2063, 0.0618796, -0.0621028])
rotate_extrude($fn = 12)
translate([4.02929, 0, 0])
circle(r = 0.98679, $fn = 12);
}
