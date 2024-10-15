module.exports = function reverse(n) {
    const reversed = Math.abs(n).toString().split("").reverse().join("");
    return Number(reversed);
};
