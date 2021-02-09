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
            const loginForm = document.getElementById('login-form')
            
            
            btn.addEventListener('click', () => {
                Component.saveComponent(displayedComponent[0]);
            })

            loginForm.addEventListener('submit', (e) => {
                    e.preventDefault()
                    params = {
                        username: loginForm.username.value,
                        password: loginForm.password.value
                    }
                   User.findOrCreate(params, e.submitter.id);
            })
            }, 3000)
});

