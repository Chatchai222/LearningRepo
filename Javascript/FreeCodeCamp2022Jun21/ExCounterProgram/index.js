// Get element h2 by id "count-el" and change it to 5
//document.getElementById("count-el").innerText = 5;



/*
console.log(count);
let count = 3;

Will cause syntax error ReferenceError
*/

let count = 0;

function increment(){
    count++;
    document.getElementById("count-el").textContent = count;
}

function save(){
    saveEl = document.getElementById("save-el");
    saveEl.textContent += count + " - "
    reset()
}

function reset(){
    count = 0;
    document.getElementById("count-el").textContent = count;
}



/*
Working with the "DOM"
Document object model
AKA How you use JavaScript to modify a website
Document -> HTML document
Object -> Document is of datatype object
Model -> Representation of model 
  Real thing: <h2 id="count-el">0</h2>
  Model: let countEl = document.getElementById("count-el")
*/


