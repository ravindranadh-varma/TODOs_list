add = document.getElementById("add");
function getAndUpdate(){
    tex = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem("itemsJson") == null) {
        itemsJsonArray = [];
        itemsJsonArray.push([tex, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    } else {
        itemsJsonArraystr = localStorage.getItem("itemsJson");
        itemsJsonArray = JSON.parse(itemsJsonArraystr);
        itemsJsonArray.push([tex, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    }
    update();
}
function update(){
    if (localStorage.getItem("itemsJson") == null) {
        itemsJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    } else {
        itemsJsonArraystr = localStorage.getItem("itemsJson");
        itemsJsonArray = JSON.parse(itemsJsonArraystr);
    }
    let tablebody = document.getElementById("tablebody");
    str = "";
    itemsJsonArray.forEach((element, index) => {
      str+=`
      <tr>
            <th scope="row">${index+1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="btn btn-sm btn-dark" id="delete" onClick="deleted(${index})">Delete</button></td>
          </tr>
      `
  
    });
    tablebody.innerHTML = str;
}
add.addEventListener("click", getAndUpdate);
update();
function deleted(itemIndex){
    itemsJsonArraystr = localStorage.getItem("itemsJson");
    itemsJsonArray = JSON.parse(itemsJsonArraystr);
    itemsJsonArray.splice(itemIndex,1);
    localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    update();
}
function clearAll(){
    if(confirm("Do you really want to clear?")){
    localStorage.clear();
    update();
}
}
contactus=document.getElementById("contactUs");
contactus.addEventListener("click",function(){
    alert("Mail to example123@gmail.com")
})
search=document.getElementById("search");
search.addEventListener("click",function(){
    alert("comming soon..");
})
 
