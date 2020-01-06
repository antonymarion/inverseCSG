// Begin.
union() {
intersection() {
union() {
rotate([0, 1.33167, -84.4706])
translate([0, 1.0478, -0.861823])
rotate([0, 90, 0])
cylinder(h = 38, r1 = 0.83157, r2 = 0.83157, center = true, $fn = 12);

intersection() {
union() {
rotate([0, 1.60165, -89.2491])
translate([0, -1.35832, -0.92254])
rotate([0, 90, 0])
cylinder(h = 38, r1 = 0.84876, r2 = 0.84876, center = true, $fn = 12);

rotate([-160.564, 0, 6.19356])
translate([0, 0, -9.7143])
cube(size = [38, 38, 18.5714], center = true);
}

difference() {
rotate([-0, -0.068182, -0.155845])
translate([-8.60211, 0, 0])
cube(size = [20.7958, 38, 38], center = true);

rotate([169.451, 0, 17.7444])
translate([0, 11.0662, 0])
cube(size = [38, 15.8676, 38], center = true);
}
}
}

difference() {
translate([0.04541, 0.80336, 0.34418])
sphere(r = 4.9462, $fn = 12);

union() {
rotate([0, 26.4329, -78.8553])
translate([0, 0.351596, -3.53207])
rotate([0, 90, 0])
cylinder(h = 38, r1 = 1.74269, r2 = 1.74269, center = true, $fn = 12);

difference() {
rotate([-153.567, 0, 11.1447])
translate([0, -8.36688, 0])
cube(size = [38, 21.2662, 38], center = true);

translate([0.15454, -0.85904, -0.27445])
sphere(r = 2.16377, $fn = 12);
}
}
}
}

union() {
union() {
difference() {
translate([0.15454, -0.85904, -0.27445])
sphere(r = 2.16377, $fn = 12);

difference() {
rotate([-0, -0.068182, -0.155845])
translate([10.1115, 0, 0])
cube(size = [17.777, 38, 38], center = true);

rotate([-160.564, 0, 6.19356])
translate([0, 0, -9.7143])
cube(size = [38, 38, 18.5714], center = true);
}
}

union() {
union() {
translate([-1.33994, -3.95809, -0.94065])
sphere(r = 0.91553, $fn = 12);

translate([1.38362, -3.87033, -0.95589])
sphere(r = 0.92033, $fn = 12);
}

difference() {
translate([-1.33994, -3.95809, -0.94065])
sphere(r = 0.91553, $fn = 12);

rotate([0, 1.33167, -84.4706])
translate([0, 1.0478, -0.861823])
rotate([0, 90, 0])
cylinder(h = 38, r1 = 0.83157, r2 = 0.83157, center = true, $fn = 12);
}
}
}

intersection() {
difference() {
difference() {
rotate([0, 1.60165, -89.2491])
translate([0, -1.35832, -0.92254])
rotate([0, 90, 0])
cylinder(h = 38, r1 = 0.84876, r2 = 0.84876, center = true, $fn = 12);

translate([-2.10784, 2.61544, -2.50246])
rotate([0, 7.34194, -89.2836])
rotate([0, 90, 0])
rotate_extrude($fn = 12)
translate([3.84969, 0, 0])
circle(r = 3.45, $fn = 12);
}

rotate([0, -70.564, -83.8064])
translate([-9.2857, -0.126678, -0.790822])
rotate([0, 90, 0])
cylinder(h = 19.4286, r1 = 2.01835, r2 = 2.01835, center = true, $fn = 12);
}

difference() {
rotate([-153.567, 0, 11.1447])
translate([0, -8.36688, 0])
cube(size = [38, 21.2662, 38], center = true);

rotate([0, 26.4329, -78.8553])
translate([-8.36688, 0.351596, -3.53207])
rotate([0, 90, 0])
cylinder(h = 21.2662, r1 = 1.74269, r2 = 1.74269, center = true, $fn = 12);
}
}
}
}
// End.