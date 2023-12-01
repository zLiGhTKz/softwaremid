function check(){
    var studentID = document.getElementById("StudentID").value;
    var mypassword = document.getElementById("password").value;
    if( studentID == "D1051284" && mypassword == "12345678" ){
        window.location.href = "select_A.html";//切換至選課首頁網頁
        return false;
    }
    else {
        alert("登入失敗");
        return false;
    }
}

function search_A(){
    window.location.href = "search_Class_A.html";
    return false;
}

function join_A(){
    window.location.href = "Class_Join_A.html";
    return false;
}

function Focus_A(){
    window.location.href = "Focus_Class_A.html";
    return false;
}

function myclass_A(){
    window.location.href = "My_Class_A.html";
    return false;
}

function withdraw_A(){
    window.location.href = "Class_Drop_A.html";
    return false;
}

function logout(){
    window.location.href = "login.html";
    return false;
}


