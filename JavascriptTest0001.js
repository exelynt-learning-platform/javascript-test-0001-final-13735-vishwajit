function printPatternSpaces(count) {
    let str = "";
    for (let i = 0; i < count; i++) {
        str += " ";
    }
    return str;
}

function printPatternRow(row, n) {
    let line = printPatternSpaces(n - row);

    for (let j = 1; j <= 2 * row - 1; j++) {
        if (j === 1 || j === 2 * row - 1) {
            line += "*";
        } else {
            line += " ";
        }
    }

    console.log(line);
}
function printDiamondPattern(n) {
    for (let i = 1; i <= 2 * n - 1; i++) {
        let row = (i <= n) ? i : 2 * n - i;
        printPatternRow(row, n);
    }
}

printDiamondPattern(5);
