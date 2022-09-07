function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
    cars.forEach(item => item.available ? result.push(item) : '');
  
  //Penggunaan Looping Manual
    // for (let i = 0; i < cars.length; i++) {
    //   if (cars[i].available === true) {
    //     result.push(cars[i]);
    //   }
    // }

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
