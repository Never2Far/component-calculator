class User {

    
static findOrCreate(params, buttonID) {
console.log(buttonID)
let endpoint;
if (buttonID == 'signup-button') {
   endpoint = 'signup'
}
else if (buttonID == 'login-button') {
    endpoint = 'login'
}

return fetch(`${BASE_URL}/${endpoint}`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(params)
})
    .then(response => response.json())
    .then(user => {
        console.log(user)
        this.setCookie('user_id', user.user_id, 30)
        const loginForm = document.getElementById('login-form')
        loginForm.parentElement.style.display = "none";
        const btn = document.getElementById('save-button')
        btn.parentElement.style.display = 'flex';
        const signoutBtn = document.getElementById('signout-button');
        signoutBtn.style.display = 'inline-block';

        User.fetchSaved();
        




        // document.cookie = `user_id=${user.user_id};`
})

}
static  currentUser() {
    let userID = User.getCookie("user_id");
    if (userID != "") {
      return parseInt(userID);
    } else {
      return false;
    }
  
  }




    static setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }



    static getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }
  

      static signOut() {
        const savedCompsContainer = document.querySelector('#saved-comps-container');

        document.cookie = "user_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        const clearAllBtn = document.getElementById('clear-all-container')
        clearAllBtn.style.display = 'none'
        
        while (savedCompsContainer.childElementCount > 1) {
          savedCompsContainer.removeChild(savedCompsContainer.lastChild);
      }
      }

      static fetchSaved() {

        const params = {user_id: this.currentUser()}


        return fetch(`${BASE_URL}/users/${this.currentUser()}/components`)
          .then(response => response.json())
          .then(userComps => {

              console.log(userComps);

              for (const comp of userComps.data) {
                const newCompObj = new Component();
            
                newCompObj.name = comp.attributes.name;
                newCompObj.bandCount = comp.attributes.band_count;
                newCompObj.colorCode = comp.attributes.color_code.split(',');
                newCompObj.compID = parseInt(comp.id);

                Component.drawSmallComp(newCompObj)
              }


          })


        }
      

}