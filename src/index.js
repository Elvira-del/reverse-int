module.exports = function reverse(n) {
    const reversed = Math.abs(n).toString().split("").toReversed().join("");
    return Number(reversed);
};
