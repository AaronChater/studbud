var myNodelist=document.getElementsByTagName("LI");for(i=0;i<myNodelist.length;i++){var span=document.createElement("SPAN"),txt=document.createTextNode("×");span.className="close",span.appendChild(txt),myNodelist[i].appendChild(span)}var i,close=document.getElementsByClassName("close");for(i=0;i<close.length;i++)close[i].onclick=function(){this.parentElement.style.display="none"};var list=document.querySelector("ul");function newElement(){var e=document.createElement("li"),t=document.getElementById("myInput").value,n=document.createTextNode(t);e.appendChild(n),""===t?alert("You must write something!"):document.getElementById("myUL").appendChild(e),document.getElementById("myInput").value="";var a=document.createElement("SPAN"),l=document.createTextNode("×");for(a.className="close",a.appendChild(l),e.appendChild(a),i=0;i<close.length;i++)close[i].onclick=function(){this.parentElement.style.display="none"}}list.addEventListener("click",(function(e){"LI"===e.target.tagName&&e.target.classList.toggle("checked")}),!1);const form=document.getElementById("taskform"),button=document.querySelector("#taskform > button"),tasklist=document.getElementById("tasklist"),taskInput=document.getElementById("taskInput");button.addEventListener("click",(function(e){e.preventDefault(),addTask(form.elements.task.value,(new Date).toLocaleDateString("en-US"),"26/03/2021","Low",["1","30"],!1),console.log(taskList)}));var taskList=[];function addTask(e,t,n,a,l,o){let s={taskDescription:e,createdDate:t,dueDate:n,priorityRating:a,estimatedTime:l,completionStatus:o};taskList.push(s),renderTask(s)}function renderTask(e){let t=document.createElement("li");t.innerHTML="<p>"+e.taskDescription+"</p>",tasklist.appendChild(t);let n=document.createElement("button"),a=document.createTextNode("Delete");n.appendChild(a),t.appendChild(n),n.addEventListener("click",(function(e){t.remove()})),form.reset()}
//# sourceMappingURL=index.8344dba8.js.map
