intersection() {
  translate([0.0005, 0, -0.0005])
  cube(size = [11.6068, 11.9998, 4.1308], center = true);

  union() {
    intersection() {
      difference() {
        difference() {
          translate([6.632, -3.32297, -7.82843])
          rotate([-23, 0, 0])
          cube(size = [22.9358, 36.1998, 19.1908], center = true);
        
          translate([1.311, 2.544, -0.492])
          cylinder(h = 2.4579, r1 = 0.29, r2 = 0.29, center = true, $fn = 12);
        }
      
        union() {
          translate([-3.623, -3.36, -0.492])
          cylinder(h = 2.4579, r1 = 0.425, r2 = 0.425, center = true, $fn = 12);
        
          translate([-1.312, 2.545, 8.1895])
          cylinder(h = 19.8209, r1 = 0.289, r2 = 0.289, center = true, $fn = 12);
        }
      }
    
      union() {
        difference() {
          translate([-0.41, 2.049, -1.311])
          cube(size = [4.9178, 5.9018, 0.8198], center = true);
        
          translate([-0.002, 2.547, 0])
          cylinder(h = 36.1999, r1 = 0.905, r2 = 0.905, center = true, $fn = 12);
        }
      
        translate([0, -2.3435, -1.311])
        cube(size = [9.6718, 2.8828, 0.8198], center = true);
      }
    
      difference() {
        union() {
          translate([0, -1.278, -1.311])
          cube(size = [6.8898, 5.0138, 0.8198], center = true);
        
          translate([-9.1935, 1.0315, 0.0005])
          cube(size = [17.8128, 7.9368, 3.4428], center = true);
        
          difference() {
            translate([9.1935, 1.0315, -1.311])
            cube(size = [17.8128, 7.9368, 0.8198], center = true);
          
            translate([1.311, 2.868, -9.501])
            cylinder(h = 17.1979, r1 = 0.287, r2 = 0.287, center = true, $fn = 12);
          }
        }
      
        union() {
          translate([3.624, -3.36, -1.311])
          cylinder(h = 0.8199, r1 = 0.426, r2 = 0.426, center = true, $fn = 12);
        
          translate([0.003, 2.867, -8.6815])
          cylinder(h = 18.8369, r1 = 0.898, r2 = 0.898, center = true, $fn = 12);
        
          translate([0.001, 1.23, -8.1895])
          cylinder(h = 19.8209, r1 = 0.284, r2 = 0.284, center = true, $fn = 12);
        
          translate([-1.312, 2.866, -9.501])
          cylinder(h = 17.1979, r1 = 0.288, r2 = 0.288, center = true, $fn = 12);
        }
      }
    }
  
    difference() {
      union() {
        difference() {
          difference() {
            translate([0, 1.6395, 0.0005])
            cube(size = [5.7378, 6.7208, 3.4428], center = true);
          
            translate([0, 3.115, 8.599])
            cube(size = [4.0979, 3.7699, 19.0019], center = true);
          }
        
          union() {
            translate([0, 3.74926, 8.8327])
            rotate([-23, 0, 0])
            cube(size = [5.7379, 36.1999, 17.0089], center = true);
          
            translate([0.001, 4.18, -8.6815])
            cylinder(h = 18.8369, r1 = 0.286, r2 = 0.286, center = true, $fn = 12);
          }
        }
      
        translate([0, -1.311, -0.492])
        cube(size = [9.6718, 0.8198, 2.4578], center = true);
      
        translate([0.6955, -1.311, 0.0005])
        cube(size = [8.2808, 0.8198, 3.4428], center = true);
      
        translate([0, -4.3925, -1.311])
        cube(size = [9.6718, 1.2148, 0.8198], center = true);
      
        translate([-4.5645, -1.311, 0.4095])
        cube(size = [0.5428, 0.8198, 2.6228], center = true);
      }
    
      union() {
        translate([3.869, -1.311, 9.4185])
        cube(size = [0.8479, 0.8199, 17.3629], center = true);
      
        intersection() {
          sphere(r = 54.2999, $fn = 108);
        
          translate([3.869, 3.74926, 8.8327])
          rotate([-23, 0, 0])
          cube(size = [0.8479, 36.1999, 17.0089], center = true);
        }
      
        translate([0, 1.6385, 8.1895])
        cube(size = [4.0979, 5.0809, 19.8209], center = true);
      
        translate([3.869, -8.435, 0.736])
        rotate([180, 90, -90])
        cylinder(h = 19.3299, r1 = 0.424, r2 = 0.424, center = true, $fn = 12);
      
        translate([-3.87, -1.311, 0.737])
        rotate([180, 90, -90])
        cylinder(h = 0.8199, r1 = 0.422, r2 = 0.422, center = true, $fn = 12);
      }
    }
  }
}
