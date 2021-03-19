let cardItemContainer = document.querySelector('.card-container');
let cardItem = cardItemContainer.children;

const shuffleCardItem = () => {
    for (let i = cardItem.length; i >= 0; i--) {
        cardItemContainer.appendChild(cardItemContainer.children[Math.random() * i | 0]);
    } 
}

const sortCardItem = () => {
    let cardItemData = [];
    
    for(let i = 0; i < cardItem.length; i++) {
        cardItemData.push(cardItem[i]);
    }

    cardItemData.sort((a, b) => {
        return a.innerHTML == b.innerHTML ? 0 : (a.innerHTML > b.innerHTML ? 1 : -1);
    });
    
    for (let i = 0; i < cardItemData.length; ++i) {
        cardItemContainer.appendChild( cardItemData[i]);
    }
}
