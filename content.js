
const section2 = document.querySelector(".section2");

const inputSection = document.querySelector(".inputSection input");

// initally code will run to get all the prev list items
window.onload = () => {
    loadItems();
}

//  to get items array from local storage
function getItemsFromLocalStorage() {
    const storedItems = localStorage.getItem("items");
    return storedItems != null ? JSON.parse(storedItems) : [];
}

// Save the items array to local storage
function saveItemsToLocalStorage(items) {
    localStorage.setItem("items", JSON.stringify(items));
}


const checkSolid = (arr) => {
    for(let i of arr) {
        if(i === "fa-solid") {
            return true;
        }
    }
    return false;
}

function changeIcon() {
    // console.log(this.querySelector("i")); 

    const starI = this.querySelector("i");

    // console.log(starI.classList);
    // console.log(checkSolid(starI.classList));

    if(checkSolid(starI.classList)) {
        starI.classList.remove("fa-solid");
        starI.classList.add("fa-regular");
    }
    else{
        starI.classList.remove("fa-regular");
        starI.classList.add("fa-solid");
    }
}

function deletionConfirm() {
    const check = confirm("Want to Delete it?");
    if(check){
        return true;
    }
    else{
        return false;
    }
}

function loadItems() {
    section2.innerHTML = "";
    const items = getItemsFromLocalStorage();

    items.forEach(i => {
        const star = document.createElement("span");
        star.innerHTML = '<i class="fa-regular fa-star"></i>';
        star.classList.add("cursor-pointer");
        star.addEventListener('click',changeIcon);
    
        const edit = document.createElement('span');
        edit.innerHTML = '<i class="fa-solid fa-pencil"></i>';
        edit.classList.add("cursor-pointer");
    
        const trash = document.createElement('span');
        trash.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        trash.classList.add("cursor-pointer");

        trash.addEventListener('click',() => {
            // console.log(i.key);
            if(deletionConfirm()) {
                remove(i.key);
            }
        })

        const rightSideOptions = document.createElement("div");
        rightSideOptions.classList.add("flex","gap-3")

        rightSideOptions.appendChild(edit);
        rightSideOptions.appendChild(star);
        rightSideOptions.appendChild(trash);
    
        const item = document.createElement('div');
    
        item.innerHTML = `<div class="flex items-start gap-2"><input class="mt-1" type="checkbox"><span class="text-justify">${i.text}</span></div>`;
        
        item.appendChild(rightSideOptions);
        
        item.classList.add("m-2","p-3","rounded-xl","border-2");
        item.classList.add("flex","justify-between","gap-2");
        section2.appendChild(item);
    });
}

function remove(key) {
    const items = getItemsFromLocalStorage();
    const idx = items.findIndex(item => item.key === key);

    if(idx !== -1) {
        items.splice(idx,1);
    }

    saveItemsToLocalStorage(items);
    loadItems();
}

function add() {
    // alert("adding new listItem");
    // const li = prompt("Enter here your todo work !!!");
    const li = inputSection.value;

    if(li.trim().length === 0) {
        return;
    }

    const key = Date.now().toString();
    const listItem = {
        text : li,
        key : key
    }

    const items = getItemsFromLocalStorage();

    items.push(listItem);

    saveItemsToLocalStorage(items);
    loadItems();

    inputSection.value = "";
}

const addButton = document.querySelector(".add");
addButton.addEventListener("click",add);

// const customize = document.querySelector(".customize");
// customize.addEventListener("click",() => {
//     alert("Customize");
// });

inputSection.addEventListener('keydown',function (e){
    if(e.key === "Enter") {
        document.querySelector(".add").click();
    }
});
