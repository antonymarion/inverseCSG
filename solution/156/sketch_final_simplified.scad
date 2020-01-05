intersection() {
  cube(size = [11.9998, 6.4018, 6.5578], center = true);

  union() {
    difference() {
      difference() {
        difference() {
          difference() {
            translate([-9.2825, 0.0005, -0.0005])
            cube(size = [17.6348, 5.3348, 5.4648], center = true);
          
            translate([-2.949, 7.7165, 0.682])
            rotate([180, 90, -90])
            cylinder(h = 20.7669, r1 = 1.639, r2 = 1.639, center = true, $fn = 12);
          }
        
          union() {
            translate([-2.872, 0.0005, -3.236])
            rotate([180, 90, -90])
            cylinder(h = 5.3349, r1 = 1.877, r2 = 1.877, center = true, $fn = 12);
          
            translate([-9.579, 0, -0.0005])
            cube(size = [17.0419, 2.0559, 5.4649], center = true);
          }
        }
      
        translate([-10.486, -1.837, 0.665])
        rotate([-180, 90, -180])
        cylinder(h = 15.2279, r1 = 0.213, r2 = 0.213, center = true, $fn = 12);
      }
    
      union() {
        difference() {
          translate([-10.486, 0, -0.0005])
          cube(size = [15.2279, 36.1999, 5.4649], center = true);
        
          translate([-2.962, 0, 0.685])
          rotate([180, 90, -90])
          cylinder(h = 36.2, r1 = 2.037, r2 = 2.037, center = true, $fn = 12);
        }
      
        translate([-10.486, 1.868, 0.677])
        rotate([180, 90, -180])
        cylinder(h = 15.2279, r1 = 0.214, r2 = 0.214, center = true, $fn = 12);
      }
    }
  
    difference() {
      translate([1.4015, 0.0005, -2.4075])
      cube(size = [4.9188, 5.3348, 0.6508], center = true);
    
      union() {
        translate([2.293, 0.001, 0])
        rotate([180, 0, 180])
        cylinder(h = 36.1999, r1 = 1.559, r2 = 1.559, center = true, $fn = 12);
      
        translate([0.309785, -1.98905, 0.0303846])
        rotate([-180, 1, 129])
        cylinder(h = 36.1999, r1 = 0.225, r2 = 0.225, center = true, $fn = 12);
      }
    }
  
    intersection() {
      union() {
        difference() {
          translate([4.4315, 0.82, -2.4075])
          cube(size = [1.1408, 3.6958, 0.6508], center = true);
        
          translate([4.348, 2.024, 7.6835])
          rotate([180, 0, 180])
          cylinder(h = 20.8329, r1 = 0.225, r2 = 0.225, center = true, $fn = 12);
        }
      
        translate([3.91195, -1.75766, 0.0507439])
        rotate([-180, 2, -134])
        cylinder(h = 36.1998, r1 = 1.153, r2 = 1.153, center = true, $fn = 12);
      }
    
      union() {
        translate([3.8601, 1.65235, 0.0497318])
        rotate([180, 2, 133])
        cylinder(h = 36.1998, r1 = 1.253, r2 = 1.253, center = true, $fn = 12);
      
        difference() {
          translate([4.4315, -0.8195, -2.4075])
          cube(size = [1.1408, 3.6948, 0.6508], center = true);
        
          translate([4.358, -2.021, 0])
          cylinder(h = 36.1999, r1 = 0.226, r2 = 0.226, center = true, $fn = 12);
        }
      }
    }
  }
}
