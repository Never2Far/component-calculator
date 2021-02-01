class Component {

    constructor(name = 'resistor', digit1 = 2, digit2 = 2, digit3 = null, 
                multiplier = 1000, tolerance = null, 
                tempCoef = null)     {

                    this.name = name;
                    this.digit1 = digit1;
                    this.digit2 = digit2;
                    this.digit3 = digit3; 
                    this.multiplier = multiplier;
                    this.tolerance = tolerance;
                    this.tempCoef = tempCoef;
                }

get bandCount() {
    // let props = this.keys.filter(prop => prop != null);
    let pcount = 0;
    for (const key in this) {
            const element = this[key];
            element != null ? pcount++ : false
    }
    pcount--; //subtract one for name property
    if (pcount >= 6) {
        return 6;
    }
    else {
        return pcount;
    }
}

set bandCount(count = 4) {
    switch (count) {
        case 5:
            this.tempCoef = null;
        break;
    case 4:
this.tempCoef = null;
this.tolerance = null;
break;
    case 3:
        this.tempCoef = null;
        this.tolerance = null;
        this.digit3 = null;
    break;
    default:
        break;
}
return this.bandCount;
}

get value() {
    let x;
    switch (this.bandCount) {
        case 3:
        case 4:
            x = parseInt(`${this.digit1}` + `${this.digit2}`) * this.multiplier;
            break;
        case 5:
        case 6:
            x = parseInt(`${this.digit1}` + `${this.digit2}` + `${this.digit3}`) * this.multiplier;
            break;
        default:
            break;
    }
    return x;
}

set value(newValue) {
    let digits = `${newValue}`.split('');
    this.digit1 = parseInt(digits.shift());
    this.digit2 = parseInt(digits.shift());
    switch (this.bandCount) {
        case 3:
        case 4:
            this.multiplier = parseInt(`1` + `${digits.join('')}`);
            break;
        case 5:
        case 6:
            this.digit3 = parseInt(digits.shift());
            this.multiplier = parseInt(`1` + `${digits.join('')}`);
            break;
        default:
            break;
    }
return this.value
}

get seriesOperation() {
    let operation;
    switch (this.name) {
        case 'resistor':
        case 'inductor':
        operation = 'normal'
            break;
        case 'capacitor':
            operation = 'inverse'
        default:
            break;
    }
    return operation
}

get parallelOperation() {
    if (this.seriesOperation == 'normal') {
        return 'inverse'
        
    }
    else {
        return 'normal'
    }
}


unit() {
    let unit;
    switch (this.name) {
        case 'resistor':
            unit = 'Ohms'
            break;
            case 'inductor':
                unit = 'Henries'
                break;
                case 'capacitor':
                    unit = 'Farads'
                    break;
        default:
            unit = null
            break;
    }
    return unit;
}



displayValue() {
if (this.tolerance == null) {
return `${this.value} ${this.unit()}`
}
else {
    return `${this.value} ${this.unit()} +/- ${this.tolerance}%`
}
}

get colorCode() {
    const code = [];
    code.push(Color.colorFromDigit(this.digit1))
    code.push(Color.colorFromDigit(this.digit2))

    switch (this.bandCount) {
        case 6:
            code.push(Color.colorFromTempCoeff(this.tempCoef));
        case 5:
        case 6:
            code.push(Color.colorFromDigit(this.digit3));
        case 4:
        case 5:
        case 6:
            code.push(Color.colorFromTolerance(this.tolerance));
        case 3:
        case 4:
        case 5:
        case 6:
            code.push(Color.colorFromMultiplier(this.multiplier));
            break;
    }
    return code;
}

set colorCode(code) {
    // let blankComp = new Component(this.name, this.digit1, this.digit2)
    // Object.keys(this).forEach(k => this[k] = null);
    
this.digit3 = null;
this.tolerance = null;
this.tempCoef = null;

    this.digit1 = Color.propValueFromColorName(code[0], 'digit')
    this.digit2 = Color.propValueFromColorName(code[1], 'digit')

    switch (code.length) {
        case 4:
            this.tolerance = Color.propValueFromColorName(code[3], 'tolerance')
        case 3:
            this.multiplier = Color.propValueFromColorName(code[2], 'multiplier')
            break;
            case 6:
                this.tempCoef = Color.propValueFromColorName(code[5], 'tempCoef')
            case 5:
            this.digit3 = Color.propValueFromColorName(code[2], 'digit')
            this.multiplier = Color.propValueFromColorName(code[3], 'multiplier')
            this.tolerance = Color.propValueFromColorName(code[4], 'tolerance')
            break;
    }
    return this.colorCode
}



}