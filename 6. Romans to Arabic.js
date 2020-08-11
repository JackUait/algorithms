// This function converts roman numbers to arabic(normal) numbers

const romans = 'MCMXCIV'; //1994

function toArabic(romans) {
  const romans = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    
    let result = 0;
    
    sArray = Array.from(s);
    
    sArray.forEach(number => {
        result += romans[number];
    })

  sArray.forEach((number, id) => {
    switch(number) {
      case 'V':
      case 'X':
        if (sArray[id - 1] === 'I') {
          result -= 2;
        }
        break;
      case 'L':
      case 'C':
        if (sArray[id - 1] === 'X') {
          result -= 20;
        }
        break;
        case 'D':
      case 'M':
        if (sArray[id - 1] === 'C') {
          result -= 200;
        }
    }
  })
}



console.log(toArabic(romans));
