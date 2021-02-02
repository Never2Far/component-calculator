const BASE_URL = "http://localhost:3000"
const COLORS_URL = `${BASE_URL}/colors`
const COLORS=[];
const page = document.getElementById('page-container');


document.addEventListener('DOMContentLoaded', () => {
    const compDiv = document.querySelector('#component');

    Color.fetchColors();

    setTimeout(function(){ 
        const colorObjs = [BLACK, BROWN, RED, ORANGE, YELLOW, GREEN, BLUE, VIOLET, GREY, WHITE, GOLD, SILVER] = COLORS;
        console.log(colorObjs[2]);
    }, 2000);

    setTimeout(() => {

        const resistor = new Component(
                                    name = 'resistor', 
                                    digit1 = 3, 
                                    digit2 = 4, 
                                    digit3 = null, 
                                    multiplier = 10,
                                    tolerance = 0.5
                                    )
            console.log(resistor)
            console.log(resistor.bandCount)
            console.log(resistor.value)
            console.log(resistor.unit())
            console.log(resistor.displayValue())
            Component.drawBands(resistor);

            // setTimeout(() => {
                
            //     console.log(Color.colorFromDigit(2))
                console.log(resistor.colorCode)
            //     console.log(Color.propValueFromColorName('red', 'multiplier'))
                // console.log(resistor.colorCode = ['orange', 'yellow', 'brown', 'green'])
                // console.log(resistor.displayValue())
                // Component.drawBands(resistor);


            // }, 2000)
            
    }, 4000)



});

