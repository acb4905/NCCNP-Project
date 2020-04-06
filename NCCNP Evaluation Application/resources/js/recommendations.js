function save() {
   var name = document.getElementById("name").value;

    if (name == null) {
        var snackbar = document.getElementById("snackbar");

        // Add the "show" class to DIV
        snackbar.className = "show";
      
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
    }
    else {
        var recommendations = document.getElementsByClassName("type");
        var responses = document.getElementsByClassName("recommendations");
        for (var i = 0; i < recommendations.length; i++) {
            var recommendation = recommendations[i].value;
            var tag = document.createElement("p");
            var text = document.createTextNode(recommendation);
            var strong = document.createElement("strong");
            var nameText = document.createTextNode((name + ": "));
            strong.appendChild(nameText);
            if (recommendation !== "") {
                tag.appendChild(strong);
            }
            tag.appendChild(text);
            responses[i].appendChild(tag);
          }
        // write new recommendations to the saveData file
    }
}
