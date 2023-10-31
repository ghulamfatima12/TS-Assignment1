let car: string[] = ['subaru', 'BMW', 'Honda'];

if (car[0] === 'subaru') {
  console.log('I predict False.');
} else if (car[1] === 'BMW') {
  console.log('I predict True.');
} else if (car[2] === 'Honda') {
  console.log('I predict True.');
} else {
  console.log('I predict False.');
}

let testNameN: string[] = [
  'BLOOD COUNT',
  'ENZYME ANALYSIS',
  'HEMATOCRIT',
  'THYMOL TURBIDITY',
  'blood typing',
  'CBC',
  'allergy test',
  'ammonia test',
  'amylase test',
  'aso test',
  'aso Blood'
];

for (let i = 0; i <= testNameN.length; i++) {
  if (testNameN[i] === 'BLOOD COUNT') {
    console.log('I predict True.');
  } else if (testNameN[i] === 'ENZYME ANALYSIS') {
    console.log('I predict True.');
  } else if (testNameN[i] === 'HEMATOCRIT') {
    console.log('I predict True.');
  } else if (testNameN[i] === 'THYMOL TURBIDITY') {
    console.log('I predict True.');
  } else if (testNameN[i] === 'blood typing') {
    console.log('I predict True.');
  } else if (testNameN[i] === 'CBC') {
    console.log('I predict False.');
  } else if (testNameN[i] === 'allergy test') {
    console.log('I predict False.');
  } else if (testNameN[i] === 'ammonia test') {
    console.log('I predict False.');
  } else if (testNameN[i] === 'aso test') {
    console.log('I predict False.');
  } else if (testNameN[i] === 'aso Blood') {
    console.log('I predict False.');
  } else {
    console.log('I predict False.');
  }
}
