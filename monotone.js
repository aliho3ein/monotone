//--------------------- Monotones Numbers ------------------------//

document.querySelector(".but-alert").onclick = Get_number;

let num;
let Array = [];

function Get_number() {
  num = prompt();
  check_monotone();
}

function check_monotone() {
  let ck_m = 0;
  let Array1 = num.split(" ");

  //   var Array = Array1.filter(function (x) {
  //     let z = 0;
  //     while (z < Array1.length) {
  //       if (Array1[z] != Array1[z + 1]) {
  //         z++;
  //         return x;
  //       } else {
  //         z++;
  //       }
  //     }
  //   });

  for (let x = 0; x < Array1.length; x++) {
    if (Array1[x] != Array1[x + 1]) {
      Array.push(Array1[x]);
    }
  }

  console.log(Array1);
  console.log(Array);

  let b = Array[0];

  if (Array[1] > b) {
    ck_m = 1;
  } else if (b > Array[1]) {
    ck_m = 2;
  }

  var i = 0;
  while (i < Array.length - 1) {
    if (Array[i] < Array[i + 1] && ck_m == 1) {
      i++;
    } else if (Array[i] > Array[i + 1] && ck_m == 2) {
      i++;
    } else {
      ck_m = 0;
      break;
    }
  }

  if (Array.length == 1) {
    ck_m = 3;
  }

  debugger;

  switch (ck_m) {
    case 1:
      console.log("Its increase Monotone");
      break;
    case 2:
      console.log("Its decrease Monotone");
      break;
    case 3:
      console.log("Nice Try ;)");
      break;
    case 0:
      console.log("Its not Monotone");
      break;
  }

  Array = [];
}
