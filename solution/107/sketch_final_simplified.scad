intersection() {
  cube(size = [11.9997, 6.6837, 4.4557], center = true);

  union() {
    intersection() {
      difference() {
        union() {
          translate([0.004, -1.1995, -0.8095])
          cube(size = [5.0437, 1.0807, 2.0947], center = true);
        
          translate([-1.465, 2.263, -0.8095])
          cylinder(h = 2.0947, r1 = 0.519, r2 = 0.519, center = true, $fn = 12);
        
          difference() {
            translate([2.954, -2.124, -8.1215])
            cylinder(h = 19.9567, r1 = 7.954, r2 = 7.954, center = true, $fn = 15);
          
            translate([0.9095, 0.663, 0])
            cube(size = [6.8548, 4.2438, 3.7138], center = true);
          }
        }
      
        union() {
          difference() {
            translate([0, -1.9895, 8.977])
            cube(size = [8.6738, 1.0608, 18.2458], center = true);
          
            translate([-0.0005, -1.5895, 8.3205])
            cube(size = [0.6629, 1.8609, 19.5589], center = true);
          }
        
          difference() {
            translate([11.2185, 0.5225, -8.1215])
            cube(size = [13.7628, 4.5248, 19.9568], center = true);
          
            translate([4.454, -1.74, 0])
            cylinder(h = 3.7139, r1 = 0.548, r2 = 0.548, center = true, $fn = 12);
          }
        }
      }
    
      union() {
        translate([4.432, -2.225, 0])
        cylinder(h = 3.7137, r1 = 0.575, r2 = 0.575, center = true, $fn = 12);
      
        difference() {
          union() {
            translate([-0.264, 0.1325, -0.8095])
            cube(size = [4.5077, 5.3047, 2.0947], center = true);
          
            translate([-6.8815, -1.9895, 0])
            cube(size = [22.4367, 1.0607, 3.7137], center = true);
          }
        
          union() {
            translate([-2.517, -0.662, -0.8095])
            cylinder(h = 2.0948, r1 = 0.529, r2 = 0.529, center = true, $fn = 12);
          
            translate([-11.2185, -2.322, -8.1215])
            cube(size = [13.7628, 0.3958, 19.9568], center = true);
          }
        }
      
        translate([-4.469, -2.25, 0])
        cylinder(h = 3.7137, r1 = 0.533, r2 = 0.533, center = true, $fn = 12);
      
        difference() {
          translate([3.495, -1.1995, 0])
          cube(size = [3.0097, 1.0807, 3.7137], center = true);
        
          translate([2.527, -0.659, 8.1215])
          cylinder(h = 19.9568, r1 = 0.536, r2 = 0.536, center = true, $fn = 12);
        }
      }
    }
  
    difference() {
      union() {
        difference() {
          translate([0, -1.9895, 0])
          cube(size = [8.6737, 1.5907, 3.7137], center = true);
        
          translate([2.335, 0, 1.871])
          rotate([180, 90, -90])
          cylinder(h = 36.1998, r1 = 1.223, r2 = 1.223, center = true, $fn = 12);
        }
      
        translate([2.334, -1.932, -0.8095])
        cube(size = [5.3317, 0.3837, 2.0947], center = true);
      
        difference() {
          translate([0.2645, 0.3305, -0.8095])
          cube(size = [3.4527, 4.9087, 2.0947], center = true);
        
          translate([0.004, 0.8, 8.3205])
          cylinder(h = 19.5588, r1 = 1.279, r2 = 1.279, center = true, $fn = 12);
        }
      
        translate([-4.453, -1.733, 0])
        cylinder(h = 3.7137, r1 = 0.547, r2 = 0.547, center = true, $fn = 12);
      
        translate([0.3315, -1.7915, 0.8555])
        cube(size = [9.3367, 0.6647, 2.0027], center = true);
      
        translate([-1.7255, 0.2465, -0.8095])
        cube(size = [0.5267, 3.9727, 2.0947], center = true);
      }
    
      union() {
        difference() {
          translate([-6.8815, -0.1435, 0])
          cube(size = [22.4368, 4.7528, 3.7138], center = true);
        
          difference() {
            translate([-6.8815, 0.387, 0])
            cube(size = [22.4369, 3.6919, 3.7139], center = true);
          
            translate([-0.002, 0.797, 8.1215])
            cylinder(h = 19.957, r1 = 0.871, r2 = 0.871, center = true, $fn = 12);
          }
        }
      
        difference() {
          union() {
            translate([9.7715, 10.1665, 0])
            cube(size = [16.6568, 15.8668, 36.1998], center = true);
          
            translate([-2.33, -4.44089e-16, 1.848])
            rotate([180, 90, -90])
            cylinder(h = 5.5698, r1 = 1.204, r2 = 1.204, center = true, $fn = 12);
          }
        
          translate([1.441, 2.233, -8.9305])
          cylinder(h = 18.3389, r1 = 0.556, r2 = 0.556, center = true, $fn = 12);
        }
      }
    }
  }
}
