const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");
const description = document.querySelector("#description");

const descriptions = {
    colors: "iPhone 16 de 6,1 pol. em cinco cores",
    blue: "iPhone 16 Plus de 6,7 pol. e iPhone 16 de 6,1 pol. em ultramarino",
    green: "iPhone 16 Plus de 6,7 pol. e iPhone 16 de 6,1 pol. em verde-acinzentado",
    pink: "iPhone 16 Plus de 6,7 pol. e iPhone 16 de 6,1 pol. em rosa",
    white: "iPhone 16 Plus de 6,7 pol. e iPhone 16 de 6,1 pol. em branco",
    gray: "iPhone 16 Plus de 6,7 pol. e iPhone 16 de 6,1 pol. em preto"
};

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        
        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected");
        });

        const button = e.target.closest("li"); 
        const id = button.getAttribute("id");

        button.querySelector(".color").classList.add("selected");

        image.classList.add("changing");
        image.setAttribute("src", `./img/iphone_${id}.png`);

        description.textContent = descriptions[id];

        setTimeout(() => {
            image.classList.toggle("changing");
        }, 200);
    });
});
