window.onload = function(){

  avengers();
}

function avengers(){
    var xml_http = new XMLHttpRequest();
    xml_http.open("GET","http://localhost:8080/superheroes.php",true);
    xml_http.send(null)
    response = xml_http.responseText
    console.log(response)
    document.getElementById("srchbutton").onclick = function(){
        alert(xml_http.responseText)
    }} 