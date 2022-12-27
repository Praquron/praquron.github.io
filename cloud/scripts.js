let cloud_console = 0;

setInterval(function() {
    cloud_console++;
    document.getElementById("console").innerHTML = cloud_console;
}, 1000/60);
