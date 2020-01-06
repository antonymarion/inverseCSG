intersection() {
  translate([0, 0.0005, 0])
  cube(size = [11.9998, 2.8108, 5.6838], center = true);

  union() {
    difference() {
      difference() {
        translate([8.00479, 0, 3.23131])
        rotate([-90, -30, 0])
        cube(size = [19.1038, 3.3678, 2.3418], center = true);
      
        translate([6.55, -0.75, 0])
        cube(size = [23.0999, 0.8419, 36.1999], center = true);
      }
    
      union() {
        translate([-0.091, -0.25, 7.866])
        cylinder(h = 20.4679, r1 = 0.395, r2 = 0.395, center = true, $fn = 12);
      
        translate([7.40279, 0.421, -4.274])
        rotate([90, 30, 0])
        cube(size = [19.1039, 36.1999, 1.4999], center = true);
      }
    }
  
    difference() {
      difference() {
        translate([-2.138, 0, 0.0005])
        cube(size = [5.7238, 2.3418, 4.7368], center = true);
      
        translate([-0.091, -0.25, 0.0005])
        cylinder(h = 4.7369, r1 = 0.395, r2 = 0.395, center = true, $fn = 12);
      }
    
      intersection() {
        translate([-8.27227, 0, 4.776])
        rotate([90, 30, 0])
        cube(size = [17.0959, 36.1999, 2.3419], center = true);
      
        translate([-8.688, 0, 0])
        cube(size = [18.8239, 2.3419, 2.5259], center = true);
      }
    }
  
    difference() {
      union() {
        difference() {
          translate([0, 0, 0.0005])
          cube(size = [9.9998, 2.3418, 4.7368], center = true);
        
          translate([8.00479, -8.4645, 3.23131])
          rotate([-90, -30, 0])
          cube(size = [19.1039, 3.3679, 19.2709], center = true);
        }
      
        intersection() {
          translate([12.6498, -0.855, 4.81407])
          rotate([90, 30, 0])
          cube(size = [19.1038, 15.2118, 0.6318], center = true);
        
          translate([2.862, -0.855, 0.553])
          cube(size = [4.2758, 0.6318, 3.6318], center = true);
        }
      
        translate([2.862, 0.3165, -1.8155])
        cube(size = [4.2758, 1.7108, 1.1048], center = true);
      }
    
      union() {
        translate([-4.263, -8.846, 1.052])
        rotate([180, 90, -90])
        cylinder(h = 18.5079, r1 = 0.157, r2 = 0.157, center = true, $fn = 12);
      
        intersection() {
          translate([-2.138, 0, -8.4185])
          cube(size = [5.7239, 2.3419, 19.3629], center = true);
        
          translate([-2.619, -8.4645, 1.8795e-15])
          rotate([180, 90, -90])
          cylinder(h = 19.2709, r1 = 0.658, r2 = 0.658, center = true, $fn = 12);
        }
      
        translate([-4.263, -8.846, -1.052])
        rotate([180, 90, -90])
        cylinder(h = 18.5079, r1 = 0.157, r2 = 0.157, center = true, $fn = 12);
      
        intersection() {
          union() {
            translate([2.862, -0.855, 0.0005])
            cube(size = [4.2759, 0.6319, 4.7369], center = true);
          
            translate([6.30856, 8.4645, -3.64225])
            rotate([90, 30, 0])
            cube(size = [21.6309, 36.1999, 19.2709], center = true);
          }
        
          union() {
            translate([-0.091, -0.25, 0])
            cylinder(h = 36.1999, r1 = 0.395, r2 = 0.395, center = true, $fn = 12);
          
            translate([-5.76715, -0.75, 5.45299])
            rotate([-90, -30, 0])
            cube(size = [2.5259, 20.9879, 0.8419], center = true);
          }
        }
      }
    }
  
    intersection() {
      union() {
        translate([2.862, 0, -0.552])
        cube(size = [4.2758, 2.3418, 3.6318], center = true);
      
        translate([-12.9173, -0.3815, 3.26938])
        rotate([-90, -30, 0])
        cube(size = [17.0958, 17.6198, 1.5788], center = true);
      }
    
      union() {
        translate([4.546, -9.32, 8.4185])
        cube(size = [0.9078, 17.5598, 19.3628], center = true);
      
        translate([2.75779, -6.66134e-16, -12.3194])
        rotate([90, 30, 0])
        cube(size = [19.1038, 17.6198, 2.3418], center = true);
      }
    }
  
    intersection() {
      difference() {
        translate([10.7136, 8.4645, 3.98743])
        rotate([90, 30, 0])
        cube(size = [21.6308, 18.5798, 19.2708], center = true);
      
        translate([2.406, 8.88178e-16, -0.001])
        rotate([180, 90, -90])
        cylinder(h = 2.3419, r1 = 1.247, r2 = 1.247, center = true, $fn = 12);
      }
    
      union() {
        translate([2.862, 0.3165, 0.0005])
        cube(size = [4.2758, 1.7108, 4.7368], center = true);
      
        translate([2.75779, -9.6355, 12.3194])
        rotate([-90, -30, 0])
        cube(size = [19.1038, 17.6198, 16.9288], center = true);
      }
    }
  }
}
