intersection() {
  cube(size = [11.9999, 11.9999, 11.9999], center = true);

  union() {
    union() {
      cube(size = [9.9999, 9.9999, 9.9999], center = true);
    
      cube(size = [9.9999, 9.9999, 9.9999], center = true);
    }
  }
}
