module.exports = function check(str, bC) {
    // console.log(str);
    if (
        typeof str !== "string" ||
        str.trim().length === 0 ||
        str.trim().length % 2 !== 0
    ) {
        return false;
    }
    let arr = [];
    for (let char of str) {
        for (let i = 0; i < bC.length; i++) {
            const eq = bC[i][0] === bC[i][1];

            if (
                char === bC[i][0] &&
                (!eq || arr.length === 0 || arr[arr.length - 1] != bC[i][0])
            ) {
                // console.log("ADD", char);
                arr.push(char);
                // console.log(arr);
            } else if (char === bC[i][1]) {
                if (arr.length === 0 || arr[arr.length - 1] !== bC[i][0]) {
                    return false;
                } else {
                    // console.log("REMOVE", char);
                    arr.pop();
                    // console.log(arr);
                }
            }
        }
    }
    if (arr.length !== 0) {
        // console.log(arr);
        return false;
    }

    return true;
};
