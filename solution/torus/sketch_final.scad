intersection() {
translate([-6.000000, -1.200000, -6.000000])
cube(size = [12.000000, 2.400000, 12.000000], center = false);
union() {
// Begin.
union() {
translate([0.04938, -0.03127, 0.05714])
rotate([0, 0.206265, 89.9381])
rotate([0, 90, 0])
rotate_extrude($fn = 12)
translate([4.02929, 0, 0])
circle(r = 0.98679, $fn = 12);

translate([0.04938, -0.03127, 0.05714])
rotate([0, 0.206265, 89.9381])
rotate([0, 90, 0])
rotate_extrude($fn = 12)
translate([4.02929, 0, 0])
circle(r = 0.98679, $fn = 12);
}
// End.
}
}
