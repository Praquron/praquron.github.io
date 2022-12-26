var cloud_console;

if (cloud_console == undefined) {
    cloud_console++;
} else {
    cloud_console = 0;
}

document.getElementById("console").innerHTML = cloud_console;
