let shape = '';

for (let i = 4; i > 0; i--) {
  for (let space = 1; space <= i - 1; space++) {
    shape += ' ';
  }
  for (let j = 1; j <= 8 - 2 * (i - 1); j++) {
    shape += '#';
  }
  shape += '\n';
}

for (let i = 1; i <= 4; i++) {
  for (let space = 1; space <= i - 1; space++) {
    shape += ' ';
  }
  for (let j = 1; j <= 8 - 2 * (i - 1); j++) {
    shape += '#';
  }
  shape += '\n';
}

console.log(shape);
