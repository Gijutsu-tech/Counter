let inc = document.getElementById("inc");
let dec = document.getElementById("dec");
let count = document.getElementById("count");
let save = document.getElementById("save");
let loadSave = document.getElementById("loadSave");

let i = 0;
let start = false;

save.addEventListener("click", function () {
    saveName = prompt("Enter the title for the save")
    localStorage.setItem(saveName, i)
})

loadSave.addEventListener("click", function () {
    getSave = prompt("Enter the title of the save to Load")
    let saveValue = localStorage.getItem(getSave)
    count.innerHTML = saveValue
    i = saveValue
    start = true

    if (saveValue == null) {
        alert(`'${getSave}' does not exist`)
        count.innerHTML = "Click '+' to get started"
    }
})

inc.addEventListener("click", function () {
    start = true;
    i++;
    count.innerHTML = i;
});

dec.addEventListener("click", function () {
    if (start == true) {
        i--;
        count.innerHTML = i;
        if (i < 0) {
            i = 0;
            count.innerHTML = 0;
        };
    };
});
