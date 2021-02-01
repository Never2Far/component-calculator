const BASE_URL = "http://localhost:3000"
const COLORS_URL = `${BASE_URL}/colors`
const COLORS=[];

document.addEventListener('DOMContentLoaded', () => {
    const page = document.getElementById('page-container');

    Color.fetchColors();

    setTimeout(function(){ 
        const colorObjs = [BLACK, BROWN, RED, ORANGE, YELLOW, GREEN, BLUE, VIOLET, GREY, WHITE, GOLD, SILVER] = COLORS;
        console.log(colorObjs[2]);
    }, 2000);

    setTimeout(() => {

        const resistor = new Component(
                                    name = 'resistor', 
                                    digit1 = 2, 
                                    digit2 = 2, 
                                    digit3 = null, 
                                    multiplier = 1000
                                    )
            console.log(resistor)
            console.log(resistor.bandCount)
            console.log(resistor.value)
            console.log(resistor.unit())
            console.log(resistor.displayValue())
            setTimeout(() => {
                console.log(Color.colorFromDigit(2))
                console.log(resistor.colorCode)
                console.log(Color.propValueFromColorName('red', 'multiplier'))
                console.log(resistor.colorCode = ['orange', 'yellow', 'brown', 'green'])
                console.log(resistor.displayValue())
            }, 2000)
            
    }, 4000)



});

