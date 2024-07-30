// 
const createCard = () => {
    const card = document.createElement("div");
    card.className = "card";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const img = document.createElement("img");
    img.src = "./img/pexels-photo-2893685.webp";

    const cardFooter = document.createElement("div");
    cardFooter.className = "card-footer";

    const cardTitle = document.createElement("h1");
    cardTitle.textContent = "Hello world";

    const cardText = document.createElement("p");
    cardText.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga dicta sapiente architecto ad, impedit doloremque, molestiae laborum officia eos hic eligendi corrupti.";

    card.appendChild(cardBody);
    card.appendChild(cardFooter);
    cardBody.appendChild(img);
    cardFooter.appendChild(cardTitle);
    cardFooter.appendChild(cardText);

    return card;
}

const container = document.querySelector(".container");
for (let i = 0; i < 20; i++) {
    container.appendChild(createCard());
}
