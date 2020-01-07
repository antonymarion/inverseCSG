// Begin.
union() {
intersection() {
union() {
union() {
intersection() {
rotate([0, -70.564, -83.8064])
translate([0, -0.126678, -0.790822])
rotate([0, 90, 0])
cylinder(h = 38, r1 = 2.01835, r2 = 2.01835, center = true, $fn = 12);

translate([0.04541, 0.80336, 0.34418])
sphere(r = 4.9462, $fn = 12);
}

intersection() {
translate([0.04541, 0.80336, 0.34418])
sphere(r = 4.9462, $fn = 12);

translate([0.51496, 4.42519, -3.43138])
rotate([0, 29.5662, -20.3935])
rotate([0, 90, 0])
rotate_extrude($fn = 12)
translate([0.81987, 0, 0])
circle(r = 0.3517, $fn = 12);
}
}

intersection() {
union() {
translate([-0.32868, 1.79825, -3.02131])
sphere(r = 2.32598, $fn = 12);

rotate([0, -10.5486, -72.2556])
translate([-9.8378, 0.396296, -1.86718])
rotate([0, 90, 0])
cylinder(h = 18.3244, r1 = 0.31062, r2 = 0.31062, center = true, $fn = 12);
}

union() {
rotate([-178.398, 0, 0.750918])
translate([0, -11.2783, 0])
cube(size = [38, 15.4435, 38], center = true);

rotate([0, 26.4329, -78.8553])
translate([8.55542, 0.351596, -3.53207])
rotate([0, 90, 0])
cylinder(h = 20.8892, r1 = 1.74269, r2 = 1.74269, center = true, $fn = 12);
}
}
}

difference() {
union() {
rotate([5.17169, -0, -10.4524])
translate([0, 9.91302, 0])
cube(size = [38, 18.174, 38], center = true);

difference() {
rotate([-153.567, 0, 11.1447])
translate([0, 9.35408, 0])
cube(size = [38, 19.2918, 38], center = true);

rotate([0, 1.60165, -89.2491])
translate([0, -1.35832, -0.92254])
rotate([0, 90, 0])
cylinder(h = 38, r1 = 0.84876, r2 = 0.84876, center = true, $fn = 12);
}
}

union() {
difference() {
rotate([-0, -0.068182, -0.155845])
translate([9.57827, 0, 0])
cube(size = [18.8435, 38, 38], center = true);

rotate([169.451, 0, 17.7444])
translate([0, -9.8378, 0])
cube(size = [38, 18.3244, 38], center = true);
}

difference() {
rotate([-178.398, 0, 0.750918])
translate([0, 0, 0])
cube(size = [38, 38, 38], center = true);

translate([-2.10784, 2.61544, -2.50246])
rotate([0, 7.34194, -89.2836])
rotate([0, 90, 0])
rotate_extrude($fn = 12)
translate([3.84969, 0, 0])
circle(r = 3.45, $fn = 12);
}
}
}
}

intersection() {
union() {
union() {
difference() {
rotate([-153.567, 0, 11.1447])
translate([0, -10.4446, 0])
cube(size = [38, 17.1108, 38], center = true);

translate([-2.10784, 2.61544, -2.50246])
rotate([0, 7.34194, -89.2836])
rotate([0, 90, 0])
rotate_extrude($fn = 12)
translate([3.84969, 0, 0])
circle(r = 3.45, $fn = 12);
}

intersection() {
rotate([0, 26.4329, -78.8553])
translate([0, 0.351596, -3.53207])
rotate([0, 90, 0])
cylinder(h = 38, r1 = 1.74269, r2 = 1.74269, center = true, $fn = 12);

rotate([5.17169, -0, -10.4524])
translate([0, 9.91302, 0])
cube(size = [38, 18.174, 38], center = true);
}
}

intersection() {
union() {
rotate([0, 26.4329, -78.8553])
translate([-9.04817, 0.351596, -3.53207])
rotate([0, 90, 0])
cylinder(h = 19.9037, r1 = 1.74269, r2 = 1.74269, center = true, $fn = 12);

rotate([-0, -0.068182, -0.155845])
translate([9.57827, 0, 0])
cube(size = [18.8435, 38, 38], center = true);
}

intersection() {
rotate([-153.567, 0, 11.1447])
translate([0, -9.04817, 0])
cube(size = [38, 19.9037, 38], center = true);

translate([0.04541, 0.80336, 0.34418])
sphere(r = 4.9462, $fn = 12);
}
}
}

union() {
intersection() {
difference() {
rotate([-178.668, 0, 5.52939])
translate([0, 7.79984, 0])
cube(size = [38, 22.4003, 38], center = true);

rotate([0, 1.60165, -89.2491])
translate([0, -1.35832, -0.92254])
rotate([0, 90, 0])
cylinder(h = 38, r1 = 0.84876, r2 = 0.84876, center = true, $fn = 12);
}

union() {
rotate([0, 26.4329, -78.8553])
translate([9.35408, 0.351596, -3.53207])
rotate([0, 90, 0])
cylinder(h = 19.2918, r1 = 1.74269, r2 = 1.74269, center = true, $fn = 12);

translate([-0.32868, 1.79825, -3.02131])
sphere(r = 2.32598, $fn = 12);
}
}

union() {
intersection() {
translate([1.80842, 3.6447, -2.24635])
sphere(r = 0.85536, $fn = 12);

rotate([0, -0.068182, -0.155845])
translate([9.57827, 3.29622, -2.44634])
rotate([0, 90, 0])
cylinder(h = 18.8435, r1 = 0.47041, r2 = 0.47041, center = true, $fn = 12);
}

rotate([0, -0.068182, -0.155845])
translate([-9.42173, 3.29622, -2.44634])
rotate([0, 90, 0])
cylinder(h = 19.1565, r1 = 0.47041, r2 = 0.47041, center = true, $fn = 12);
}
}
}
}
// End.