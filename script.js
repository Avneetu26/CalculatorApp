let input = document.getElementById("input");
let button = document.querySelectorAll("button");

button.forEach(ele => {
    ele.addEventListener('click', (e) => {
        
        if(e.target.textContent === "C") {
            input.innerText = "";
        } else if(e.target.textContent === "<") {
            input.innerHTML = input.innerText.slice(0, -1);
        } else if(e.target.textContent === "=") {
            input.innerHTML = eval(input.innerHTML); // converts to numerical numbers
        } else {
            input.innerText += e.target.textContent;
        }
        input.scrollLeft = input.scrollWidth;
    })
    
})