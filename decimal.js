function Decimal(num) {
    this.num = +num;
    if (isNaN(this.num)) {
        this.num = 0;
    }
}

Decimal.prototype.format = function (org) {
    let str = org.toString();
    let [, xsw] = str.split('.');
    return { str, xsw, org };
};

Decimal.prototype.trans = function (num1, num2) {
    const fnlet = this.format(num1);
    const fnright = this.format(num2);

    if (!fnlet.xsw && !fnright.xsw) return { ns1: num1.toString(), ns2: num2.toString(), bs: 0 };

    const xs1 = fnlet.xsw || '';
    const xs2 = fnright.xsw || '';

    const xsLen = Math.max(xs1.length, xs2.length);

    const bs = Math.pow(10, xsLen);

    let ns1 = fnlet.str.replace('.', '');
    for (var i = 0; i < xsLen - xs1.length; i++) {
        ns1 += '0';
    }
    let ns2 = fnright.str.replace('.', '');
    for (var i = 0; i < xsLen - xs2.length; i++) {
        ns2 += '0';
    }
    return { ns1, ns2, bs };
};

/**加法 */
Decimal.prototype.add = function (addnum) {
    const t = this.trans(this.num, addnum);
    this.num = (parseInt(t.ns1) + parseInt(t.ns2)) / (t.bs || 1);
    return this;
};

/**减法 */
Decimal.prototype.subtract = function (snum) {
    const t = this.trans(this.num, snum);
    this.num = (parseInt(t.ns1) - parseInt(t.ns2)) / (t.bs || 1);
    return this;
};

/**乘法 */
Decimal.prototype.multiply = function (munum) {
    const t = this.trans(this.num, munum);
    this.num = (parseInt(t.ns1) * parseInt(t.ns2)) / ((t.bs * t.bs) || 1);
    return this;
};

/**除法 */
Decimal.prototype.divide = function (dnum) {
    const t = this.trans(this.num, dnum);
    this.num = parseInt(t.ns1) / parseInt(t.ns2);
    return this;
};

Decimal.prototype.valueOf = function () {
    return this.num;
};
Decimal.prototype.toString = function () {
    return this.num.toString();
};