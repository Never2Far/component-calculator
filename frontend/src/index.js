const BASE_URL = "http://localhost:3000"
const COLORS_URL = `${BASE_URL}/colors`
const COMPONENTS_URL = `${BASE_URL}/components`
const COLORS=[];
const page = document.getElementById('page-container');
const displayedComponent = [];




document.addEventListener('DOMContentLoaded', () => {
    
    




    const compDiv = document.querySelector('#component');

    Color.fetchColors();

    setTimeout(function(){ 
        window.colorObjs = [BLACK, BROWN, RED, ORANGE, YELLOW, GREEN, BLUE, VIOLET, GREY, WHITE, GOLD, SILVER] = COLORS;
        // console.log(colorObjs[2]);
        window.successNotice = document.getElementById('success-notice');
    }, 500);

    setTimeout(() => {
            const btn = document.getElementById('save-button')
            
            
            btn.addEventListener('click', () => {
                Component.saveComponent(displayedComponent[0]);
            })
        // const resistor = new Component(
        //                             name = 'resistor', 
        //                             digit1 = 6, 
        //                             digit2 = 9, 
        //                             digit3 = 3, 
        //                             multiplier = 100000,
        //                             tolerance = .25,
        //                             tempCoef = 250
        //                             )
        //                             Component.saveComponent(resistor);
    //         // console.log(resistor)
    //         // console.log(resistor.bandCount)
    //         // console.log(resistor.value)
    //         // console.log(resistor.unit())
    //         // console.log(resistor.displayValue())
    //         // Component.drawBands(resistor);

    //         // setTimeout(() => {
                
    //         //     console.log(Color.colorFromDigit(2))
    //             // console.log(resistor.colorCode)
    //         //     console.log(Color.propValueFromColorName('red', 'multiplier'))
    //             // console.log(resistor.colorCode = ['orange', 'yellow', 'brown', 'green'])
    //             // console.log(resistor.displayValue())
    //             // Component.drawBands(resistor);


            }, 3000)
            
    // }, 600)



});

