const BASE_URL = "http://localhost:3000"
const COLORS_URL = `${BASE_URL}/colors`
const COLORS=[];

document.addEventListener('DOMContentLoaded', () => {
    const page = document.getElementById('page-container');

    Color.fetchColors();

    setTimeout(function(){ 
        const [BLACK, BROWN, RED, ORANGE, YELLOW, GREEN, BLUE, VIOLET, GREY, WHITE, GOLD, SILVER] = COLORS;
        console.log(BLACK);
    }, 500);

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

    }, 1000)



});

