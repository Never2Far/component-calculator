class Color {
    constructor(name, digit, multiplier, tolerance = null, tempCoef = null) {
    this.name = name;
    this.digit = digit;
    this.multiplier = multiplier;
    this.tolerance = tolerance;
    this.tempCoef = tempCoef;
    }

    

    static fetchColors() {
        // const colorArr = [];
        fetch(COLORS_URL)
        .then(response => response.json())
        .then(colors => {
            for (const color of colors.data) {
                const newColor = new Color(
                 color.attributes.name,
                 color.attributes.digit,
                 color.attributes.multiplier,
                 color.attributes.tolerance,
                 color.attributes.temp_coefficient
                )
                // console.log(newColor);
                COLORS.push(newColor);
                // colorArr.push(newColor);
            }
        })
//         console.log(colorArr)
// return colorArr;
        }   

static colorFromDigit(digit) {
    let res;
    for (const key in COLORS) {
            const element = COLORS[key];
            if (element.digit == digit) {
                res = element.name;
            }
    }
     return res
}

static colorFromMultiplier(multiplier) {

    let res;
    for (const key in COLORS) {
            const element = COLORS[key];
            if (element.multiplier == multiplier) {
                res = element.name;
            }
    }
     return res
}

static colorFromTolerance(tolerance) {
    let res;
    for (const key in COLORS) {
            const element = COLORS[key];
            if (element.tolerance == tolerance) {
                res = element.name;
            }
    }
     return res
}

static colorFromTempCoeff(tempCoef) {
    let res;
    for (const key in COLORS) {
            const element = COLORS[key];
            if (element.tempCoef == tempCoef) {
                res = element.name;
            }
    }
     return res
}
             // function getColor(name = 'red') {


    static propValueFromColorName(colorName, propertyName) {
        return eval(colorName.toUpperCase()+"."+propertyName)
    }



}