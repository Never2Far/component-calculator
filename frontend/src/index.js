const BASE_URL = "http://localhost:3000"
const COLORS_URL = `${BASE_URL}/colors`





console.log("testing...")

document.addEventListener('DOMContentLoaded', () => {

const page = document.getElementById('page-container');



getColors();

    function getColors() {
return fetch(COLORS_URL)
.then(response => response.json())
        .then(colors => {
            console.log(colors)
        })
    }
})
