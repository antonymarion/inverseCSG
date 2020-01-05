intersection() {
  cube(size = [11.8418, 11.9997, 3.1576], center = true);

  union() {
    union() {
      difference() {
        difference() {
          union() {
            union() {
              translate([1.24614, 0.32995, -0.657895])
              cylinder(h = 1.31549, r1 = 0.32288, r2 = 0.32288, center = true, $fn = 12);
            
              translate([-1.24306, 0.33299, -9.1])
              cylinder(h = 18.1997, r1 = 0.32378, r2 = 0.32378, center = true, $fn = 12);
            }
          
            difference() {
              translate([0, 0, -0.657895])
              cube(size = [9.86812, 9.9997, 1.31549], center = true);
            
              translate([-0.00116301, -8.27945, -0.190634])
              rotate([-178.681, 0, 0])
              cube(size = [2.10273, 19.8365, 36.3998], center = true);
            }
          }
        
          difference() {
            union() {
              translate([-1.45142, 0.534586, 0.0123088])
              rotate([-178.681, 0, 0])
              cube(size = [5.00325, 6.99658, 36.3998], center = true);
            
              translate([0.49053, 11.1137, 0.255891])
              rotate([-178.681, 0, 0])
              cube(size = [8.88716, 14.1667, 36.3998], center = true);
            }
          
            difference() {
              translate([0.03711, 7.31053, -0.657895])
              cube(size = [7.98042, 21.7788, 1.31569], center = true);
            
              translate([-0.0275, 1.63709, -0.657895])
              cylinder(h = 1.31579, r1 = 1.05773, r2 = 1.05773, center = true, $fn = 12);
            }
          }
        }
      
        difference() {
          union() {
            translate([-6.6329, -3.96053, 0])
            cube(size = [23.134, 0.76296, 2.63138], center = true);
          
            difference() {
              translate([-11.0766, 11.3141, -8.44792])
              rotate([-178.681, 0, 0])
              cube(size = [14.2467, 14.1667, 18.9876], center = true);
            
              translate([-3.95315, 4.03059, 8.77776e-16])
              cylinder(h = 36.3999, r1 = 0.99991, r2 = 0.99991, center = true, $fn = 12);
            }
          }
        
          translate([8.57369, 0, 0.355265])
          cube(size = [19.2525, 36.3999, 1.92095], center = true);
        }
      }
    
      union() {
        intersection() {
          difference() {
            difference() {
              translate([0, 6.6, 0.355265])
              cube(size = [9.86812, 23.1997, 1.92075], center = true);
            
              translate([-6.6329, 7.61615, 0.175362])
              rotate([-178.681, 0, 0])
              cube(size = [23.134, 21.1635, 36.3998], center = true);
            }
          
            union() {
              translate([-1.45142, -10.3786, -8.94739])
              rotate([-178.681, 0, 0])
              cube(size = [5.00325, 15.2361, 18.9876], center = true);
            
              translate([6.6329, -2.98097, 0.71933])
              rotate([0, 90, 0])
              cylinder(h = 23.134, r1 = 0.73077, r2 = 0.73077, center = true, $fn = 12);
            }
          }
        
          union() {
            union() {
              translate([-11.5671, -2.98097, 0.71933])
              rotate([0, 90, 0])
              cylinder(h = 13.2655, r1 = 0.73077, r2 = 0.73077, center = true, $fn = 12);
            
              translate([11.1137, -10.7251, -8.95537])
              rotate([-178.681, 0, 0])
              cube(size = [14.1723, 14.5429, 18.9875], center = true);
            }
          
            union() {
              translate([-2.99342, -10.9255, -0.251559])
              rotate([-178.681, 0, 0])
              cube(size = [3.88128, 14.5429, 36.3997], center = true);
            
              translate([0, -10.3786, -8.94739])
              rotate([-178.681, 0, 0])
              cube(size = [9.86812, 15.236, 18.9875], center = true);
            }
          }
        }
      
        union() {
          difference() {
            intersection() {
              translate([0.03711, 6.6, 0.355265])
              cube(size = [7.98022, 23.1997, 1.92075], center = true);
            
              translate([-2.50289, -10.3786, -8.94739])
              rotate([-178.681, 0, 0])
              cube(size = [2.90022, 15.236, 18.9875], center = true);
            }
          
            union() {
              translate([1.48737, -11.2711, 9.1])
              cube(size = [5.0798, 13.8577, 18.1998], center = true);
            
              translate([0.03711, -2.98097, 0.71933])
              rotate([0, 90, 0])
              cylinder(h = 7.98032, r1 = 0.73077, r2 = 0.73077, center = true, $fn = 12);
            }
          }
        
          union() {
            intersection() {
              translate([9.62515, -11.144, 9.23981])
              rotate([-178.681, 0, 0])
              cube(size = [17.1494, 14.5429, 17.4119], center = true);
            
              translate([-6.6329, -4.28947, 0.657895])
              cube(size = [23.1339, 1.42075, 1.31549], center = true);
            }
          
            translate([4.02737, 4.08172, -0.657895])
            cylinder(h = 1.31549, r1 = 0.9173, r2 = 0.9173, center = true, $fn = 12);
          }
        }
      }
    }
  }
}
