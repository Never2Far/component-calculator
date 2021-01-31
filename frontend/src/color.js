class Color {
    constructor(name, digit, multiplier, tolerance = null, temp_coeff = null) {
    this.name = name;
    this.digit = digit;
    this.multiplier = multiplier;
    this.tolerance = tolerance;
    this.temp_coeff = temp_coeff;
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


        
             // function getColor(name = 'red') {
}