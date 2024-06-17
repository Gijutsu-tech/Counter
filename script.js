let inc = document.getElementById("inc");
let dec = document.getElementById("dec");
let count = document.getElementById("count");
let save = document.getElementById("save");
let loadSave = document.getElementById("loadSave");

let i = 0;
let start = false;

save.addEventListener("click", function () {
    if (i == 0 || i == null || i == "") {
        setTimeout(() => {
            alert('Please start counting first!')
        }, 1);
    }
    else {
        saveName = prompt("Enter the title for the save")
        localStorage.setItem(saveName, i)
        setTimeout(() => {
            alert(`'${saveName}' saved to localstorage!`)
        }, 1);
    }
})

loadSave.addEventListener("click", function () {
    getSave = prompt("Enter the title of the save to Load")
    let saveValue = localStorage.getItem(getSave)
    count.innerHTML = saveValue
    i = saveValue
    start = true

    if (saveValue == null) {
        if (getSave == null) {
            count.innerHTML = "Click '+' to get started"
            alert("Open console and go to 'Application' tab to see all the savenames!")
        }
        else {
            count.innerHTML = "Click '+' to get started"
            alert(`'${getSave}' does not exist`)
        }
    }
    else {
        setTimeout(() => {
            alert(`'${getSave}' loaded from localstorage!`)
        }, 10);
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
