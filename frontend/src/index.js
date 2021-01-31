const BASE_URL = "http://localhost:3000"
const COLORS_URL = `${BASE_URL}/colors`
const COLORS=[];

document.addEventListener('DOMContentLoaded', () => {
    

const page = document.getElementById('page-container');

Color.fetchColors();
    let colorsArr = COLORS.slice();
console.log(COLORS);

console.log(COLORS);

setTimeout(function(){ console.log(COLORS[0]); }, 500);

console.log(COLORS);


// const [BLACK, BROWN, RED, ORANGE, YELLOW, GREEN, BLUE, VIOLET, GREY, WHITE, GOLD, SILVER] = COLORS;





})

