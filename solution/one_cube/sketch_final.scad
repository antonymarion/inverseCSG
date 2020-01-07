intersection() {
translate([-6.000000, -6.000000, -6.000000])
cube(size = [12.000000, 12.000000, 12.000000], center = false);
union() {
// Begin.
union() {
rotate([0, -0, 0])
translate([0, 0, 0])
cube(size = [10, 10, 10], center = true);

rotate([0, -0, 0])
translate([0, 0, 0])
cube(size = [10, 10, 10], center = true);
}
// End.
}
}
