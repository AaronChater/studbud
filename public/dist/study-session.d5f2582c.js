var myNodelist=document.getElementsByTagName("LI");for(i=0;i<myNodelist.length;i++){var span=document.createElement("SPAN"),txt=document.createTextNode("×");span.className="close",span.appendChild(txt),myNodelist[i].appendChild(span)}var i,close=document.getElementsByClassName("close");for(i=0;i<close.length;i++)close[i].onclick=function(){this.parentElement.style.display="none"};var list=document.querySelector("ul");function newElement(){var e=document.createElement("li"),t=document.getElementById("myInput").value,n=document.createTextNode(t);e.appendChild(n),""===t?alert("You must write something!"):document.getElementById("myUL").appendChild(e),document.getElementById("myInput").value="";var l=document.createElement("SPAN"),a=document.createTextNode("×");for(l.className="close",l.appendChild(a),e.appendChild(l),i=0;i<close.length;i++)close[i].onclick=function(){this.parentElement.style.display="none"}}list.addEventListener("click",(function(e){"LI"===e.target.tagName&&e.target.classList.toggle("checked")}),!1);
//# sourceMappingURL=study-session.d5f2582c.js.map
