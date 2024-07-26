function appMouseOver(id) {
    document.getElementById(id).style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))"
}
const clockApp = document.getElementById("underwaterclock")
clockApp.onmouseover = appMouseOver("underwaterclock")