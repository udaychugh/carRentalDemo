function newAcc(){
    var name = document.getElementById("fullname").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    
    localStorage.setItem("name", name);
    localStorage.setItem("pass", password);
    localStorage.setItem("email", email);
    localStorage.setItem("number", number);
    swal('New Account Created Successfully');
}