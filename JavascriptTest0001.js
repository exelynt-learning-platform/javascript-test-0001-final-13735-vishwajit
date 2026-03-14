function getPatternSpaces(count) {
    let str = "";
    for (let i = 0; i < count; i++) {
        str += " ";
    }
    return str;
}

function getPatternRow(row, n) {
    let line = getPatternSpaces(n - row);

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
        getPatternRow(row, n);
    }
}

printDiamondPattern(5);
