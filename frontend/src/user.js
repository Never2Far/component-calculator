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
  



}