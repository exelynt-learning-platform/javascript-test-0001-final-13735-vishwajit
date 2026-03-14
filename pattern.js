let rows = 5;
for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= rows - i; j++) {
        line += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        if (j === 1 || j === 2 * i - 1) {
            line += "*";
        } else {
            line += " ";
        }
    }
  console.log(line);
}
for (let i = rows - 1; i >= 1; i--) {
    let line = "";
    for (let j = 1; j <= rows - i; j++) {
        line += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        if (j === 1 || j === 2 * i - 1) {
            line += "*";
        } else {
            line += " ";
        }
    }
  console.log(line);
}
