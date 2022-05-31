let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") );

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value); // VSC auto complete may not come up
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads) );
    render(myLeads);
});

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads = [];
    inputEl.value = "";
    render(myLeads);
});

tabBtn.addEventListener("click", function(){
    // Access chrome object then access the tabs, querying the active tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads) );
        render(myLeads);
    })

});

function render(leads){
    let listItems = "";
    for (let i = 0; i < leads.length; i++){
        //listItems += "<li><a target='_blank' href='" + myLeads[i] + "' >" + myLeads[i] + "</a></li>";
        listItems += 
        `
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
        `
    };

    ulEl.innerHTML = listItems;
}








// for (let i = 0; i < myLeads.length; i++){
//     const li = document.createElement("li");
//     li.textContent = myLeads[i];
//     ulEl.append(li);
// }

