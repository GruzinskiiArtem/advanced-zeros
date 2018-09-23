module.exports = function getZerosCount(number, base) {
    var bases = [];
    var i = 2;
    var j = 1;
    var result = [];

    while (i <= base) {
        if (base % i === 0) {
            bases.push(i);
            base = base / i;
        }
        else {
            i++
        }
    }

    bases.reverse();
    bases.forEach(function (value, index) {
        var sum = 0;
        var n = number;
        while (n >= 1) {
            var temp = parseInt(n / value);
            n = temp;
            sum = sum + temp;

        }
        if (value === bases[index + 1])
        {
            j++;
        }
        result.push(Math.floor(sum / j));
    });
    return Math.min.apply(null, result);
}