intersection() {
  cube(size = [11.9999, 11.9999, 11.9999], center = true);

  union() {
    translate([4.2855, 0, 4.2855])
    cube(size = [1.4289, 4.2859, 1.4289], center = true);
  
    translate([0.714, 1.4285, 4.2855])
    cube(size = [5.7139, 1.4289, 1.4289], center = true);
  
    difference() {
      union() {
        translate([-4.2855, 1.4285, -0.7145])
        cube(size = [1.4289, 7.1429, 2.8569], center = true);
      
        translate([-1.4285, 0.7145, 1.4285])
        cube(size = [7.1429, 8.5709, 1.4289], center = true);
      }
    
      translate([-8.693, 0.0005, 0.7145])
      cube(size = [18.814, 7.143, 2.857], center = true);
    }
  
    translate([4.2855, -1.4285, 1.429])
    cube(size = [1.4289, 1.4289, 4.2859], center = true);
  
    translate([0, -1.4285, -1.4285])
    cube(size = [9.9999, 1.4289, 1.4289], center = true);
  
    difference() {
      union() {
        translate([0, -4.2855, -1.4285])
        cube(size = [4.2859, 1.4289, 7.1429], center = true);
      
        translate([-1.4285, -1.4285, 0])
        cube(size = [1.4289, 7.1429, 9.9999], center = true);
      }
    
      translate([-0.7145, -2.143, 0.7145])
      cube(size = [2.857, 5.714, 8.571], center = true);
    }
  }
}
