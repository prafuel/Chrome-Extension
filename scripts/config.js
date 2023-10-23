

const section = document.querySelector(".section");
// console.log(section2);

// feature 1
// Make list to row
function feature1() {
    const f1 = document.createElement("div");
    f1.innerHTML = `<kbd class="ml-1">Display : List </kbd><span class="mr-3"><input type="checkbox"></span>`;
    f1.classList.add("feature1", "flex", "flex-row", "items-center", "justify-between", "h-10", "border", "border-white", "bg-gray-800", "rounded-lg", "p-4", "mt-2", "ml-3", "mr-3", "mb-2");

    console.log(localStorage);

    if(localStorage.getItem('listMode') === "false") {
        f1.children[1].firstChild.checked = false;
    }
    else{
        f1.children[1].firstChild.checked = true;
    }

    f1.children[1].firstChild.addEventListener('click',() => {
        // console.log(localStorage.getItem('listItem'));
        if(f1.children[1].firstChild.checked) {
            localStorage.setItem("listMode",true);
        }
        else{
            localStorage.setItem("listMode",false);
        }
        // console.log(localStorage);
        console.log(f1.children[1].firstChild.checked);
        console.log(localStorage);
    })

    section.appendChild(f1);
}

/* <button
        class="p-2 hover:bg-gray-800 rounded-lg flex flex-row items-center justify-center gap-2 text-sm">
        <i class="fa-solid fa-circle-xmark"></i>
        Clear
    </button>

*/

function clearLocal() {
    const clear = document.createElement("div");
    clear.innerHTML = `<kbd class="ml-1" >LocalStorage</kbd><button class="pl-3 pr-3 pt-1 pb-1 rounded-lg bg-gray-600">Clear</button>`;
    clear.classList.add("clear", "flex", "flex-row", "items-center", "justify-between", "h-10", "border", "border-white", "bg-gray-800", "rounded-lg", "p-5", "ml-3", "mr-3", "mb-2");
    section.appendChild(clear);

    // clear localStorage
    clear.addEventListener('click', () => {

        if (confirm("Warning!! Want to Clear List?")) {
            localStorage.clear();
            loadItems();
        }
    });
}




feature1();
clearLocal();
