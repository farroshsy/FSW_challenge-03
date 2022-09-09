function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  // Penggunaan Fungsi For Each
    cars.forEach(state => state.available ? result.push(state) : '');
  
  //Penggunaan Looping Manual
    // for (let state = 0; state < cars.length; state++) {
    //   if (cars[state].available === true) {
    //     result.push(cars[state]);
    //   }
    // }

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
