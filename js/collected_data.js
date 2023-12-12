function save() {
    
    var steamID = document.getElementById("steamID").value;
    var district = document.getElementById("district").value;
    var platform = document.getElementById("platform").value;
    var level = document.getElementById("level").value;
    var adv = document.getElementById("adv").value;
    var total = "Steam ID: " + steamID + '<br>' 
        + "District: " + district + '<br>'
        + "Gaming Platform(s): " + platform + '<br>'
        + "Level: " + level + '<br>'
        + "Any Advice: " + adv + '<br>'
        + "Time: " + Date();
    localStorage.setItem(steamID, total);
    alert("Submit successfully!");
}

function clearing(){
    window.alert("Clear all the data.");
    localStorage.clear();
}



let arr = String();

function display() {
    for (var i = 0; i < localStorage.length; i++) {
        var getKey = localStorage.key(i);
        var getVal = localStorage.getItem(getKey);
        arr += getVal + '<br>' + '<br>';
    }
    var find_result = document.getElementById("find_result");
    find_result.innerHTML = arr;
    arr = String();


}

