window.onload = function(){
   
    document.getElementById("button").onclick = function(){
      show_result(document.getElementById("text_Field").value)
    }
  }
  
  function show_result(str) {  
  
    if (window.XMLHttpRequest) {
      xml_http=new XMLHttpRequest   ();
    } else { 
      xml_http=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xml_http.onreadystatechange=function() { 
      if (this.readyState==4 && this.status==200) {
        document.getElementById("Results").innerHTML=this.responseText;
  
      }
    }
    xml_http.open("GET","http://localhost:8080/superheroes.php?q="+str,true);
    xml_http.send();
  }