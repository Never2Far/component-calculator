class Component {

    constructor(name = 'resistor', digit1 = 2, digit2 = 2, digit3 = null, 
                multiplier = 1000, tolerance = null, toleranceLetter = null, 
                tempCoef = null, tempCoefLetter = null)     {

                    this.name = name;
                    this.digit1 = digit1;
                    this.digit2 = digit2;
                    this.digit3 = digit3; 
                    this.multiplier = multiplier;
                    this.tolerance = tolerance;
                    // this.toleranceLetter = toleranceLetter; 
                    this.tempCoef = tempCoef;
                    // this.tempCoefLetter = tempCoefLetter;
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



display() {


}





}