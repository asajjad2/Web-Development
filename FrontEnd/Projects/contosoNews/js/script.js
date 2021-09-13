function logStuff(){

    let h1 = document.getElementsByTagName('h1')[0];
    h1.innerHTML = "Last Modified: " + document.lastModified + "<br>";
    h1.innerHTML += "URL: " + window.location + "<br>"; //document.URL
    h1.innerHTML += "Title: " + document.title + "<br>"; 

}