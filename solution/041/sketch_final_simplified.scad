intersection() {
  translate([0, -0.0005, 0])
  cube(size = [7.1137, 2.8567, 11.9997], center = true);

  union() {
    difference() {
      difference() {
        union() {
          difference() {
            translate([7.675, 0.0005, 3.8095])
            cube(size = [20.8497, 2.3807, 2.3807], center = true);
          
            translate([-1.324, -8.4545, 4.165])
            rotate([180, 90, -90])
            cylinder(h = 19.2908, r1 = 0.95, r2 = 0.95, center = true, $fn = 12);
          }
        
          intersection() {
            translate([11.1504, 2.12151e-15, -6.55])
            rotate([-180, 0, 45])
            cube(size = [20.4307, 20.4307, 23.0997], center = true);
          
            translate([-2.6185, -8.4545, 6.55])
            cube(size = [0.6907, 19.2907, 23.0997], center = true);
          }
        }
      
        intersection() {
          translate([7.568, 0, 0.4475])
          cube(size = [21.0638, 36.1998, 9.1048], center = true);
        
          union() {
            translate([7.05092, -7.05092, 0.2975])
            rotate([-180, 0, 45])
            cube(size = [36.1998, 16.2568, 5.8328], center = true);
          
            translate([0, 0.001, 4.107])
            rotate([180, 90, -180])
            cylinder(h = 36.1998, r1 = 0.306, r2 = 0.306, center = true, $fn = 12);
          }
        }
      }
    
      union() {
        translate([7.568, 0.001, -4.108])
        rotate([180, 90, -180])
        cylinder(h = 21.0638, r1 = 0.307, r2 = 0.307, center = true, $fn = 12);
      
        translate([7.9135, 9.2285, 2.9165])
        cube(size = [20.3728, 17.7428, 0.5948], center = true);
      
        difference() {
          difference() {
            translate([7.9135, 0, 10.657])
            cube(size = [20.3728, 36.1998, 14.8858], center = true);
          
            translate([-12.9712, -1.47573, 0.441])
            rotate([-180, 0, 45])
            cube(size = [15.7689, 19.9429, 7.3099], center = true);
          }
        
          difference() {
            translate([-0.172534, 11.3229, 3.6555])
            rotate([-180, 0, 45])
            cube(size = [20.4309, 19.9429, 0.8809], center = true);
          
            translate([-0.000453763, -0.025996, 4.096])
            rotate([-179.224, 90, 179.776])
            cylinder(h = 36.2, r1 = 0.664, r2 = 0.664, center = true, $fn = 12);
          }
        }
      
        translate([8.389, 8.4555, 3.6545])
        cube(size = [19.4238, 19.2908, 0.8808], center = true);
      }
    }
  
    intersection() {
      difference() {
        difference() {
          union() {
            translate([-3.202, 0.937, -0.4455])
            cylinder(h = 7.3187, r1 = 6.167, r2 = 6.167, center = true, $fn = 12);
          
            translate([-2.6185, 0, -4.5525])
            cube(size = [0.6907, 36.1997, 0.8947], center = true);
          }
        
          union() {
            translate([12.6261, -1.47573, -2.9165])
            rotate([-180, 0, 45])
            cube(size = [20.4308, 16.2568, 0.5948], center = true);
          
            translate([2.19, 9.2285, -1.846])
            rotate([180, 90, -90])
            cylinder(h = 17.7428, r1 = 0.193, r2 = 0.193, center = true, $fn = 12);
          }
        }
      
        union() {
          translate([2.191, 0, 1.846])
          rotate([180, 90, -90])
          cylinder(h = 36.1998, r1 = 0.193, r2 = 0.193, center = true, $fn = 12);
        
          translate([0.345, 0, 0.001])
          rotate([180, 90, -90])
          cylinder(h = 36.1998, r1 = 1.368, r2 = 1.368, center = true, $fn = 12);
        
          translate([-1.315, 8.4555, -4.175])
          rotate([180, 90, -90])
          cylinder(h = 19.2908, r1 = 0.961, r2 = 0.961, center = true, $fn = 12);
        }
      }
    
      union() {
        difference() {
          translate([7.675, 0.0005, -3.8095])
          cube(size = [20.8497, 2.3807, 2.3807], center = true);
        
          translate([11.1504, 1.90996e-15, -4.107])
          rotate([-180, 0, 45])
          cube(size = [20.4308, 20.4308, 1.7858], center = true);
        }
      
        difference() {
          union() {
            translate([7.675, 0.7735, 0.7385])
            cube(size = [20.8497, 0.8327, 6.7147], center = true);
          
            translate([-2.5115, -0.416, 0])
            cube(size = [0.4767, 1.5477, 5.2377], center = true);
          }
        
          union() {
            translate([-1.5, 9.2285, 1.845])
            rotate([180, 90, -90])
            cylinder(h = 17.7428, r1 = 0.178, r2 = 0.178, center = true, $fn = 12);
          
            translate([-1.5, -8.4545, -1.845])
            rotate([180, 90, -90])
            cylinder(h = 19.2908, r1 = 0.178, r2 = 0.178, center = true, $fn = 12);
          }
        }
      
        difference() {
          translate([-1.798, 0.0005, -3.362])
          cube(size = [0.9497, 2.3807, 1.4857], center = true);
        
          translate([0, 0.002, -4.105])
          rotate([0, 90, 0])
          cylinder(h = 36.1998, r1 = 0.664, r2 = 0.664, center = true, $fn = 12);
        }
      }
    }
  }
}
