let username;

document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("mytext").value
    document.getElementById("P1").textContent = username
}

