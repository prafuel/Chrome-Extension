
const section2 = document.querySelector(".section2");

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

function temp() {
    const arr = ["complete java series","commit changes in git","wash cloths","bookmark link","college at 10am","ml practical","gym"];
    // const arr = [];
    for (let i = 0; i < arr.length; i++) {

        const star = document.createElement("span");
        star.innerHTML = '<i class="fa-regular fa-star"></i>';
        star.addEventListener('click',changeIcon);

        const edit = document.createElement('span');
        edit.innerHTML = '<i class="fa-solid fa-pencil"></i>';
        edit.classList.add("cursor-pointer");

        const rightSideOptions = document.createElement("div");
        rightSideOptions.classList.add("flex","gap-3")
        rightSideOptions.appendChild(edit);
        rightSideOptions.appendChild(star);

        const item = document.createElement('div');

        item.innerHTML = `<div class="flex items-center justify-center gap-2"><input type="checkbox"><span>${arr[i]}</span></div>`;
        
        item.appendChild(rightSideOptions);
        
        item.classList.add("m-3","p-3","rounded-xl","border-2");
        item.classList.add("flex","justify-between","gap-6");
        section2.appendChild(item);

        // console.log(item);
    }

}

function add() {
    // alert("adding new listItem");
    const li = prompt("Enter here your todo work !!!");

    if(li.trim().length === 0) {
        return;
    }

    const star = document.createElement("span");
    star.innerHTML = '<i class="fa-regular fa-star"></i>';
    star.addEventListener('click',changeIcon);

    const edit = document.createElement('span');
    edit.innerHTML = '<i class="fa-solid fa-pencil"></i>';
    edit.classList.add("cursor-pointer");

    const rightSideOptions = document.createElement("div");
    rightSideOptions.classList.add("flex","gap-3")
    rightSideOptions.appendChild(edit);
    rightSideOptions.appendChild(star);

    const item = document.createElement('div');

    item.innerHTML = `<div class="flex items-center justify-center gap-2"><input type="checkbox"><span>${li}</span></div>`;
    
    item.appendChild(rightSideOptions);
    
    item.classList.add("m-3","p-3","rounded-xl","border-2");
    item.classList.add("flex","justify-between","gap-6");
    section2.appendChild(item);
}

const addButton = document.querySelector(".add");
addButton.addEventListener("click",add);

const config = document.querySelector(".config");
config.addEventListener("click",() => {
    alert("Config");
});

temp();