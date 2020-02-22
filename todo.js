
function abc(params) {
    var x = document.getElementById('main')
    if (params=='left') {
        x.style.left = '25%';
    } else {
        x.style.left = '50%';
    }
}
var taskNames = []
var wholeTasks = []

function hideMessage() {
    document.getElementById("message").style.opacity = 0;
}


function removeAll() {
    var mainList = document.querySelector(".list")
    var allTasks = mainList.children
    
    for (let i = allTasks.length-1; i >= 0; i--) {
        let eachTask = allTasks[i];
        console.log(eachTask);
        eachTask.style.opacity = 0;
        setTimeout(()=>{eachTask.style.display = 'none';},1000)
    }
    taskNames = []
    wholeTasks = []
    localStorage.clear()
    
}


function addTask() {
    var taskName = document.getElementById("task").value

    var b = taskNames.indexOf(taskName) >= 0;

    if(taskName=='' || b){
        if (b==true) {
            document.getElementById("message").textContent = "Task already exist, complete it first!";
        }
        document.getElementById('message').style.opacity = 1;
        setTimeout(hideMessage, 3000)  

    }else{
        taskNames.push(taskName);
        localStorage.setItem(taskName,taskName)
        var Line = document.createElement("div")
        Line.setAttribute("class","line")
        
        var Label = document.createElement("label")
        Label.setAttribute("class","container")

        var Text = document.createElement("p")
        Text.appendChild(document.createTextNode(localStorage.getItem(taskName)))
        Label.appendChild(Text)
        // <input type="checkbox" checked="checked">

        var Input = document.createElement("input")
        Input.setAttribute("type","checkbox")
        Label.appendChild(Input)

        // <span class="checkmark"></span>
        var Span = document.createElement("span")
        Span.setAttribute("class","checkmark")
        Label.appendChild(Span)

        Line.appendChild(Label)

        
        
        document.getElementById("taskList").appendChild(Line)
        Line.scrollIntoView(false)
        setTimeout(()=>{Line.style.opacity = 1},1)
        wholeTasks.push(Line)
        
        document.getElementById("task").value = ''
        document.getElementById("message").textContent = "Sorry! you can't add EMPTY task here";



    }
    console.log(taskNames);
    console.log(wholeTasks);
    
}

function done() {
    let L = document.querySelector(".list")

    for (let i = 0; i < wholeTasks.length; i++) {
        console.log(i);
        
        let element = wholeTasks[i];
        let LABEL = element.children[0]
        let checkBox = LABEL.children[1] 
        if (checkBox.checked == true){
            element.style.opacity = 0;
            setTimeout(()=>{element.style.display = 'none'},1000)
            localStorage.removeItem(LABEL.children[0].textContent)

            // let index1 = wholeTasks.indexOf(element)
            // if (index1 > -1) { wholeTasks.splice(index1,1) }
            // let index2 = taskNames.indexOf(LABEL.children[0].textContent)
            // if (index1 > -1) { taskNames.splice(index2,1) }
            
        }else{
            console.log("yes");
            
        }   
    }
}



// function haha(params) {
//     console.log(params);
    
// }


// haha("maaz")