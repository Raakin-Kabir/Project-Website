let nameInput = document.querySelector(".search .search_bar");
let navBar = document.querySelector(".topnav .active");
function changeNavBar() {
    navBar.innerText = nameInput.value;
}

nameInput.addEventListener("input", changeNavBar);