intersection() {
  translate([0, 0, 0.0005])
  cube(size = [11.9998, 11.9958, 7.0908], center = true);

  union() {
    difference() {
      union() {
        translate([-2.6705, -2.046, -0.0005])
        cube(size = [0.7948, 0.9098, 5.9088], center = true);
      
        difference() {
          translate([-3.4135, 0.0025, 2.7275])
          cube(size = [0.6908, 5.0068, 0.4548], center = true);
        
          translate([-3.759, 0, 2.373])
          rotate([180, 90, -90])
          cylinder(h = 36.1999, r1 = 0.355, r2 = 0.355, center = true, $fn = 12);
        }
      
        translate([0.003, 0.005, 2.8415])
        rotate([180, 0, 180])
        cylinder(h = 0.2268, r1 = 4.71, r2 = 4.71, center = true, $fn = 12);
      
        difference() {
          translate([-2.528, 0.0025, 2.6135])
          cube(size = [1.0798, 5.0068, 0.2268], center = true);
        
          translate([-1.922, 0.0025, 2.379])
          rotate([180, 90, -90])
          cylinder(h = 5.0069, r1 = 0.352, r2 = 0.352, center = true, $fn = 12);
        }
      
        translate([3.977, -0.001, -0.114])
        cylinder(h = 5.6818, r1 = 0.45, r2 = 0.45, center = true, $fn = 12);
      
        translate([-1.988, -3.445, 2.7275])
        cylinder(h = 0.4548, r1 = 0.452, r2 = 0.452, center = true, $fn = 12);
      }
    
      union() {
        difference() {
          translate([0.003, 0.005, -7.8])
          rotate([180, 0, 180])
          cylinder(h = 20.5999, r1 = 4.71, r2 = 4.71, center = true, $fn = 12);
        
          translate([-10.1865, -1.865, -2.501])
          rotate([180, 90, 180])
          cylinder(h = 15.827, r1 = 0.219, r2 = 0.219, center = true, $fn = 12);
        }
      
        translate([0.003, 0.005, -10.5275])
        rotate([180, 0, 180])
        cylinder(h = 15.1449, r1 = 4.71, r2 = 4.71, center = true, $fn = 12);
      
        translate([-10.044, 2.506, 2.489])
        rotate([180, 90, 180])
        cylinder(h = 16.1119, r1 = 0.236, r2 = 0.236, center = true, $fn = 12);
      
        translate([-1.987, -3.444, -7.6865])
        cylinder(h = 20.8269, r1 = 0.113, r2 = 0.113, center = true, $fn = 12);
      
        translate([-0.0428674, 0.0137028, 0.000785358])
        rotate([0, 1, -19])
        cylinder(h = 36.1999, r1 = 0.795, r2 = 0.795, center = true, $fn = 12);
      
        translate([3.977, 0.001, -7.6865])
        cylinder(h = 20.8269, r1 = 0.113, r2 = 0.113, center = true, $fn = 12);
      
        translate([7.1705, -2.501, 2.501])
        rotate([180, 90, 180])
        cylinder(h = 21.8589, r1 = 0.226, r2 = 0.226, center = true, $fn = 12);
      }
    }
  
    difference() {
      union() {
        translate([-2.841, -0.0005, -0.114])
        cube(size = [1.1358, 4.5448, 5.6818], center = true);
      
        translate([8.056, -2.0175, 2.8405])
        cube(size = [20.0878, 0.5108, 0.2268], center = true);
      
        intersection() {
          difference() {
            sphere(r = 54.2998, $fn = 108);
          
            translate([8.056, -0.341, -10.5275])
            cube(size = [20.0879, 3.8639, 15.1449], center = true);
          }
        
          difference() {
            translate([-0.016, -0.01, 2.273])
            cylinder(h = 1.3638, r1 = 5.012, r2 = 5.012, center = true, $fn = 12);
          
            translate([0.003, 0.005, 9.8455])
            rotate([180, 0, 180])
            cylinder(h = 16.5089, r1 = 4.71, r2 = 4.71, center = true, $fn = 12);
          }
        }
      
        translate([-1.987, 3.445, 10.3])
        cylinder(h = 15.5998, r1 = 0.453, r2 = 0.453, center = true, $fn = 12);
      }
    
      union() {
        translate([-1.989, 3.444, 2.6135])
        cylinder(h = 0.2269, r1 = 0.113, r2 = 0.113, center = true, $fn = 12);
      
        translate([-3.0155, 0, -0.6255])
        cube(size = [1.4869, 3.1819, 4.6589], center = true);
      
        difference() {
          union() {
            translate([-3.243, 2.3895, 2.159])
            cube(size = [1.0319, 0.2329, 1.1359], center = true);
          
            translate([-2.8975, 0.0005, -0.5685])
            cube(size = [0.3409, 3.5229, 4.7729], center = true);
          }
        
          translate([-2.8975, 1.879, -2.5])
          rotate([180, 90, 180])
          cylinder(h = 0.341, r1 = 0.23, r2 = 0.23, center = true, $fn = 12);
        }
      
        difference() {
          sphere(r = 54.2999, $fn = 108);
        
          translate([0.028, 0.016, -7.5725])
          cylinder(h = 21.055, r1 = 5.03, r2 = 5.03, center = true, $fn = 12);
        }
      }
    }
  }
}
