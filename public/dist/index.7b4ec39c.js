var myNodelist=document.getElementsByTagName("LI");for(i=0;i<myNodelist.length;i++){var span=document.createElement("SPAN"),txt=document.createTextNode("×");span.className="close",span.appendChild(txt),myNodelist[i].appendChild(span)}var i,close=document.getElementsByClassName("close");for(i=0;i<close.length;i++)close[i].onclick=function(){this.parentElement.style.display="none"};var list=document.querySelector("ul");function newElement(){var e=document.createElement("li"),t=document.getElementById("myInput").value,n=document.createTextNode(t);e.appendChild(n),""===t?alert("You must write something!"):document.getElementById("myUL").appendChild(e),document.getElementById("myInput").value="";var a=document.createElement("SPAN"),o=document.createTextNode("×");for(a.className="close",a.appendChild(o),e.appendChild(a),i=0;i<close.length;i++)close[i].onclick=function(){this.parentElement.style.display="none"}}list.addEventListener("click",(function(e){"LI"===e.target.tagName&&e.target.classList.toggle("checked")}),!1);const form=document.getElementById("taskform"),button=document.querySelector("#taskform > button"),tasklist=document.getElementById("tasklist"),taskInput=document.getElementById("taskInput");button.addEventListener("click",(function(e){e.preventDefault();let t=taskInput.value,n=dueDateInput.value,i=completionTimeInput.value,a=estimatedTimeInput.value,o=priorityInput.options[priorityInput.selectedIndex].value;(new Date).toLocaleDateString("en-US");addTask(t,n,i,a,o),console.log(taskList)}));var taskList=[];function addTask(e,t,n,i,a,o){let l={taskDescription:e,createdDate:t,completionTime:n,estimatedTime:i,priorityRating:a,completionStatus:o};taskList.push(l),renderTask(l)}function renderTask(e){let t=document.createElement("li");t.innerHTML="<p>"+e.taskDescription+"</p><p>DueDate:   "+e.createdDate+"</p><p>Completion time:   "+e.completionTime+"</p><p>Estimated time:   "+e.estimatedTime+"</p><p>Priority:   "+e.priorityRating+"</p>",tasklist.appendChild(t);let n=document.createElement("button"),i=document.createTextNode("Completed");n.appendChild(i),t.appendChild(n),n.addEventListener("click",(function(e){t.remove()})),form.reset()}
//# sourceMappingURL=index.7b4ec39c.js.map
