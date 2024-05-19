const exponentialToDecimal = (num) => {
    const str = num.toString();
    const match = str.match(/^(-?\d+)\.(\d+)e([+-]\d+)$/);
    if (!match) return num;

    const sign = match[1] === '-' ? -1 : 1;
    const integerPart = match[1];
    const decimalPart = match[2];
    const exponent = Number(match[3]);

    let result = integerPart;
    if (exponent < 0) {
        const zeros = '0'.repeat(Math.abs(exponent) - 1);
        result = `0.${zeros}${decimalPart}${integerPart}`;
    } else {
        result = `${integerPart}${decimalPart.padEnd(exponent + decimalPart.length, '0')}`;
    }

    return sign === -1 ? `-${result}` : result;
}

export default exponentialToDecimal;