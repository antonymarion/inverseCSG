intersection() {
  cube(size = [7.1999, 11.9999, 4.7999], center = true);

  union() {
    difference() {
      translate([-1.244, 4.2535, 1.5])
      cube(size = [1.5099, 0.4849, 0.9999], center = true);
    
      translate([-0.489, 3.995, 9.8])
      cylinder(h = 16.6, r1 = 0.511, r2 = 0.511, center = true, $fn = 12);
    }
  
    difference() {
      union() {
        difference() {
          translate([-1.7445, -2.5, -1])
          cube(size = [2.5109, 4.9999, 1.9999], center = true);
        
          translate([-1.499, -3, -9.05])
          cylinder(h = 18.1, r1 = 0.401, r2 = 0.401, center = true, $fn = 12);
        }
      
        difference() {
          translate([0.233, 3.748, 1.5])
          cube(size = [2.4659, 1.4959, 0.9999], center = true);
        
          translate([0.7615, 3.5055, 9.8])
          cube(size = [0.493, 1.011, 16.6], center = true);
        }
      }
    
      union() {
        translate([0.515, 4.011, 1.75])
        cylinder(h = 0.5, r1 = 0.483, r2 = 0.483, center = true, $fn = 12);
      
        translate([-1.2425, 2.498, 1.75])
        cube(size = [3.515, 3.996, 0.5], center = true);
      
        translate([-1.499, -3, 0])
        cylinder(h = 2, r1 = 0.599, r2 = 0.599, center = true, $fn = 12);
      }
    }
  
    difference() {
      union() {
        translate([0.5005, 2.5, 0])
        cube(size = [4.9989, 4.9999, 3.9999], center = true);
      
        translate([1.2555, -2.5, -1.5])
        cube(size = [3.4889, 4.9999, 0.9999], center = true);
      
        translate([0.515, 4.011, 10.05])
        cylinder(h = 16.0999, r1 = 0.483, r2 = 0.483, center = true, $fn = 12);
      }
    
      union() {
        translate([2.5, 4.499, 8.05])
        cylinder(h = 20.1, r1 = 0.199, r2 = 0.199, center = true, $fn = 12);
      
        translate([2.499, 0.499, -8.05])
        cylinder(h = 20.1, r1 = 0.2, r2 = 0.2, center = true, $fn = 12);
      
        translate([1.5, -3, -9.55])
        cylinder(h = 17.1, r1 = 0.399, r2 = 0.399, center = true, $fn = 12);
      
        translate([-0.0005, 2.498, 9.55])
        cube(size = [3.997, 3.996, 17.1], center = true);
      }
    }
  
    difference() {
      translate([-1.7615, 0.495, 1.5])
      cube(size = [0.4749, 0.9899, 0.9999], center = true);
    
      translate([-1.507, 0.99, 9.55])
      cylinder(h = 17.1, r1 = 0.488, r2 = 0.488, center = true, $fn = 12);
    }
  
    difference() {
      translate([1.7325, 3.7345, 1])
      cube(size = [0.5309, 2.5309, 1.9999], center = true);
    
      translate([1.467, 2.469, 1.5])
      cylinder(h = 1, r1 = 0.543, r2 = 0.543, center = true, $fn = 12);
    }
  
    difference() {
      translate([-2, 4, 0])
      cube(size = [1.9999, 1.9999, 3.9999], center = true);
    
      translate([-2.499, 4.502, 0])
      cylinder(h = 4, r1 = 0.2, r2 = 0.2, center = true, $fn = 12);
    }
  
    difference() {
      translate([-2.4995, 2.0055, 0])
      cube(size = [1.0009, 4.0109, 3.9999], center = true);
    
      translate([-2.499, 0.501, 0])
      cylinder(h = 4, r1 = 0.2, r2 = 0.2, center = true, $fn = 12);
    }
  
    difference() {
      translate([1.2555, -2.5, -1])
      cube(size = [3.4889, 4.9999, 1.9999], center = true);
    
      translate([1.501, -2.999, -8.3])
      cylinder(h = 19.6, r1 = 0.6, r2 = 0.6, center = true, $fn = 12);
    }
  
    difference() {
      union() {
        translate([1.7325, 0.495, 1.5])
        cube(size = [0.5309, 0.9899, 0.9999], center = true);
      
        translate([-1.7615, 3.24, 0])
        cube(size = [0.4749, 1.5419, 3.9999], center = true);
      }
    
      union() {
        translate([1.495, 1.003, 1])
        cylinder(h = 2, r1 = 0.506, r2 = 0.506, center = true, $fn = 12);
      
        translate([-1.525, 2.523, 9.55])
        cylinder(h = 17.1, r1 = 0.466, r2 = 0.466, center = true, $fn = 12);
      }
    }
  }
}
