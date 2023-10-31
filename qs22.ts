let mountain: string[] = [
    "Mount Everest",
    "K2",
    "Kanchenjunga",
    "Lhotse",
    "Makalu",
    "Cho Oyu",
    "Dhaulagiri",
    "Manaslu",
    "Nanga Parbat",
    "Annapurna I",
    "Gasherbrum I",
    "hello"
  ];
  
  // Intentionally produce an index error by accessing an element that does not exist.
  console.log(mountain[11]); // This will produce an index error.
  
  // Correct the error by checking if the index exists before accessing it.
  if (mountain.length > 11) {
    console.log(mountain[11]);
  } else {
    console.log("The index 11 does not exist in the mountains array.");
  }
  