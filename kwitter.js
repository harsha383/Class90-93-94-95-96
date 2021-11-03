function addUser() {
    user_name = document.getElementById("user_name").value;      
    if(user_name == "") {
        window.alert("Please Enter User Name");
    }
    else {
        localStorage.setItem("user_name", user_name);
        window.location = "kwitter_room.html";
    }
}