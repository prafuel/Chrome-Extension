

const section2 = document.querySelector(".section1");

// console.log(section2);

// feature 1
// Make list to row
function feature1() {
    const f1 = document.createElement("div");
    f1.innerHTML = `<kbd class="ml-1">Display : List </kbd><span class="mr-3"><input type="checkbox"></span>`;
    f1.classList.add("feature1","flex","flex-row","items-center","justify-between","h-10","border","border-white","bg-gray-800","rounded-lg","p-4","mt-2","ml-3","mr-3","mb-2");

    section2.appendChild(f1);
}

function resetSettings() {
    const reset = document.createElement("div");
}

feature1();
