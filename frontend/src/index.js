const BASE_URL = "http://localhost:3000"
const COLORS_URL = `${BASE_URL}/colors`
const COMPONENTS_URL = `${BASE_URL}/components`
const COLORS=[];
const page = document.getElementById('page-container');
window.displayedComponent = [];


document.addEventListener('DOMContentLoaded', () => {
    
    const compDiv = document.querySelector('#component');

    Color.fetchColors();

    setTimeout(function(){ 
        window.colorObjs = [BLACK, BROWN, RED, ORANGE, YELLOW, GREEN, BLUE, VIOLET, GREY, WHITE, GOLD, SILVER] = COLORS;
    }, 500);

    setTimeout(() => {
        const btn = document.getElementById('save-button')
        const clearAllBtn = document.getElementById('clear-all-container')
        const loginForm = document.getElementById('login-form')
        const signoutBtn = document.getElementById('signout-button');
  
        if (User.currentUser()) {
            btn.parentElement.style.display = 'flex';
            loginForm.parentElement.style.display = 'none';
            signoutBtn.style.display = 'inline-block';
            User.fetchSaved();
        }
        else {
            btn.parentElement.style.display = 'none';
            loginForm.parentElement.style.display = 'flex';
            signoutBtn.style.display = 'none';
        }
            
        signoutBtn.addEventListener('click', () => {
            User.signOut();
            btn.parentElement.style.display = 'none';
            loginForm.parentElement.style.display = 'flex';
            signoutBtn.style.display = 'none';
        })
            
            
        btn.addEventListener('click', () => {
            Component.saveComponent(displayedComponent[0], User.currentUser());
            clearAllBtn.style.display = 'flex';
        })

        clearAllBtn.addEventListener('click', () => {
            Component.deleteAll();
            clearAllBtn.style.display = 'none';
        })

        loginForm.addEventListener('submit', (e) => {
            e.preventDefault()
            params = {
                username: loginForm.username.value,
                password: loginForm.password.value
                }
            User.findOrCreate(params, e.submitter.id);
        })

    }, 3000);
});

