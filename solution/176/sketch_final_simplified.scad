intersection() {
  cube(size = [11.9998, 10.3782, 5.83763], center = true);

  union() {
    union() {
      difference() {
        difference() {
          difference() {
            difference() {
              translate([-0.675675, 0, 0])
              cube(size = [8.64845, 8.64844, 4.86466], center = true);
            
              translate([0.405405, 0.20101, 2.65962])
              rotate([0, 90, 0])
              cylinder(h = 1.24315, r1 = 3.79973, r2 = 3.79973, center = true, $fn = 12);
            }
          
            union() {
              translate([-3.37838, 0.108975, 0])
              cube(size = [1.24314, 0.18397, 4.86476], center = true);
            
              translate([-3.37838, 0.20101, 2.65962])
              rotate([0, 90, 0])
              cylinder(h = 1.24314, r1 = 3.79973, r2 = 3.79973, center = true, $fn = 12);
            }
          }
        
          intersection() {
            translate([-0.675675, -2.15369, 7.88379])
            cube(size = [8.64855, 4.34116, 20.6323], center = true);
          
            translate([-7.27568, 0.01694, 2.67473])
            rotate([0, 90, 0])
            cylinder(h = 21.8485, r1 = 3.72531, r2 = 3.72531, center = true, $fn = 12);
          }
        }
      
        translate([-7.27568, 0.05763, 2.42156])
        rotate([0, 90, 0])
        cylinder(h = 21.8485, r1 = 3.43817, r2 = 3.43817, center = true, $fn = 12);
      }
    
      difference() {
        difference() {
          cube(size = [9.9998, 8.64844, 4.86466], center = true);
        
          union() {
            union() {
              translate([0.405405, 0.01694, 2.67473])
              rotate([0, 90, 0])
              cylinder(h = 1.24315, r1 = 3.72531, r2 = 3.72531, center = true, $fn = 12);
            
              translate([-3.37838, 6.93784, 0])
              cube(size = [1.24314, 22.5242, 4.86476], center = true);
            }
          
            translate([-6.6, -0.02106, 2.46531])
            rotate([0, 90, 0])
            cylinder(h = 23.1999, r1 = 1.3925, r2 = 1.3925, center = true, $fn = 12);
          }
        }
      
        translate([-7.27568, 0.20101, 2.65962])
        rotate([0, 90, 0])
        cylinder(h = 21.8485, r1 = 3.79973, r2 = 3.79973, center = true, $fn = 12);
      }
    }
  }
}
