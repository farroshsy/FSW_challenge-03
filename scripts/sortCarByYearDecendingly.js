function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
   result.forEach((value, i) => {
    for (let j = 0; j < result.length-i-1; j++) {
      if(result[j].year < result[j+1].year){
        let temp = result[j];
        result[j] = result[j + 1];
        result[j+1] = temp;
      }
    }
  })
  
  //   for (var i = 0; i < result.length; i++) {
  //   for (var j = 0; j < result.length - 1; j++) {
  //     if (result[j].year < result[j + 1].year) {
  //       var temp = result[j];
  //       result[j] = result[j + 1];
  //       result[j + 1] = temp;
  //     }
  //   }
  // }
  // Rubah code ini dengan array hasil sorting secara descending

    console.table(result);
  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
