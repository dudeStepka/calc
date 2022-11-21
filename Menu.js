let clickNumber = 0;

function showMenu() {
    clickNumber++;
    if (clickNumber % 2 != 0)
        document.querySelector("nav").style.display = "block";
    else if (clickNumber % 2 == 0) document.querySelector("nav").style.display = 'none';

    console.log(clickNumber);
}

document.body.children[0].children[0].onclick = function() {
    location.href = "index.html";
};