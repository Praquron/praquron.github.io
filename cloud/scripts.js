document.head.appendChild((($, s)=>{$.src=s;return $})(document.createElement("script"), "https://kihtrak.com/cloud_variable/cloudify.min.js"));

let cloud_console;

if (typeof cloud_console == "number") {
    cloud_console++;
} else {
    cloud_console = 0;
}

document.getElementById("console").innerHTML = cloud_console;
