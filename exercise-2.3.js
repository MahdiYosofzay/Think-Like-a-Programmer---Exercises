let shape = '';

for (let row = 1; row <= 4; row++) {
  for (let space = 1; space < row; space++) {
    shape += ' ';
  }

  for (let col = 1; col <= row; col++) {
    shape += '#';
  }

  for (let space = 7 - row; space >= row; space--) {
    shape += '  '; // insert 2 spaces
  }

  for (let col = 1; col <= row; col++) {
    shape += '#';
  }

  shape += '\n';
}

for (let row = 4; row >= 1; row--) {
  for (let space = 1; space < row; space++) {
    shape += ' ';
  }

  for (let col = 1; col <= row; col++) {
    shape += '#';
  }

  for (let space = 7 - row; space >= row; space--) {
    shape += '  '; // insert 2 spaces
  }

  for (let col = 1; col <= row; col++) {
    shape += '#';
  }

  shape += '\n';
}

console.log(shape);
