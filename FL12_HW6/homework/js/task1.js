let a = prompt ('Please, enter A value:');
let b = prompt ('Please, enter B value:');
let c = prompt ('Please, enter C value:');



if (isNaN(a) || isNaN(b) || isNaN(c) || a === '0') {
    console.log("Invalid input data");
}

    let d = b*b - 4*a*c;

    
    if (d < 0) {
        console.log('no solution');
    }
    else if (d === 0) {
        let x = -b / 2 * a;
        console.log(`x = ${Math.round(x)}`);
      }
      else if (d > 0) {
        let x1 = (- b + Math.sqrt(d)) / (two*a)
        let x2 = (- b - Math.sqrt(d)) / (two*a)
        console.log(`x1 = ${Math.round(x1)} and x2 = ${Math.round(x2)}`)
      }
          

     

