// NOTE: The variable "shirts" is defined in the shirts.js file as the full list of shirt offerings
//       You can access this variable here, and should use this variable here to build your webpages

const myProducts = document.querySelector(".products");


let initProducts = () => {
    for(let i = 0; i < shirts.length; i++){
        let card = document.createElement('div');
        card.classList.add('card-shirt');
        myProducts.appendChild(card);
    
        let img = document.createElement('img');
        card.appendChild(img);
        img.src = shirts[i].colors.white.front;
    
        let text = document.createElement('p');
        text.classList.add('name');
        text.textContent = shirts[i].name;
        card.appendChild(text);
    
        let NumOfColors = document.createElement('p');
        NumOfColors.classList.add('description');
        if(Object.keys(shirts[i].colors).length > 1){
            NumOfColors.textContent = "Футболка представлена в " + Object.keys(shirts[i].colors).length + " цветах";
        }else {
            NumOfColors.textContent = `Футболка представлена в ${Object.keys(shirts[i].colors).length} цвете`;
        }
        card.appendChild(NumOfColors);
    
        let textButton = ['Quick view', 'See page'];
        let buttonQuick = document.createElement('button');
        buttonQuick.textContent = textButton[0];
        card.appendChild(buttonQuick);
        let buttonSee = document.createElement('button');
        buttonSee.classList.add('btn-see');
        buttonSee.textContent = textButton[1];
        card.appendChild(buttonSee);

        if(buttonQuick) {
            buttonQuick.setAttribute('onclick', 'quickView('+i+')');
        }
        if(buttonSee) {
            buttonSee.setAttribute('onclick', 'GoDetails('+i+')');
        }

    }
     
};

const GoDetails = (i) => {
    localStorage.setItem('item', i);
    document.location.href = 'details.html';
}

const quickView = (i) => {
    let quickShow = document.createElement('div');
            quickShow.classList.add('quickShow');
            myProducts.appendChild(quickShow);
            quickShow.style.display = 'flex';
    
            let quickImg = document.createElement('div');
            quickImg.classList.add('quickImg');
            quickShow.appendChild(quickImg);
    
            let imgfront = document.createElement('img');
            quickImg.appendChild(imgfront);
            imgfront.src = shirts[i].colors.white.front;
    
            let imgback = document.createElement('img');
            quickImg.appendChild(imgback);
            imgback.src = shirts[i].colors.white.back;
            
            let quickInfo = document.createElement('div');
            quickInfo.classList.add('quickInfo');
            quickShow.appendChild(quickInfo);
    
            let text_name = document.createElement('p');
            text_name.classList.add('text_name');
            text_name.textContent = shirts[i].name;
            quickInfo.appendChild(text_name);
    
            let price = document.createElement("p");
            price.classList.add('price');
            price.textContent = shirts[i].price;
            quickInfo.appendChild(price);
    
            let btnClose = document.createElement('button');
            btnClose.textContent = "Close";
            btnClose.classList.add('btn-close');
            quickInfo.appendChild(btnClose);

            btnClose.addEventListener("click", () => {
                quickShow.style.display = 'none'
            })
}




let initDetails = () => {  
        const details = document.querySelector('.details');
        let nameShirt = document.createElement('h1');
        let item = localStorage.getItem('item');
        nameShirt.textContent = shirts[item].name;
        details.appendChild(nameShirt);
        let detailsCard = document.createElement('div');
        detailsCard.classList.add('details-card');
        details.appendChild(detailsCard);
        let imageCard = document.createElement('div');
        imageCard.classList.add('img-card');
        detailsCard.appendChild(imageCard);
        details.appendChild(detailsCard);

        let shirtImg = document.createElement('img');
        shirtImg.src = shirts[item].colors.white.front;
        imageCard.appendChild(shirtImg);
   
        let detailsInfo = document.createElement('div');
        detailsInfo.classList.add('details-ifo');
        detailsCard.appendChild(detailsInfo);
        
        let price = document.createElement('h2');
        price.textContent = shirts[item].price;
        detailsInfo.appendChild(price);

        let description = document.createElement('p');
        description.textContent = shirts[item].description;
        detailsInfo.appendChild(description);
 
        let sideBtns = document.createElement('div');
        sideBtns.classList.add('side-btns');
        detailsInfo.append(sideBtns);

        let colorsBtns = document.createElement('div');
        colorsBtns.classList.add('color-btns');
        detailsInfo.append(colorsBtns);

        let color = document.createElement('p');
        color.textContent = 'Color: ';
        colorsBtns.appendChild(color);


        let side = document.createElement('p');
        side.textContent = 'Side: ';
        sideBtns.append(side); 

        let colorsArray = Object.keys(shirts[item].colors);
        for (let n = 0; n < colorsArray.length; n++){
            let button = document.createElement('button');
            button.innerText = colorsArray[n];
            button.style.backgroundColor = colorsArray[n];
            button.setAttribute('onclick', 'changeColor('+ item +',\''+colorsArray[n]+'\')');
            colorsBtns.appendChild(button);
        }

        localStorage.setItem('color','white');
        localStorage.setItem('side','front');

        let textBtns = ['Front', 'Back']
        let buttonFront = document.createElement('button');
        buttonFront.textContent = textBtns[0];
        sideBtns.appendChild(buttonFront);
        let buttonBack = document.createElement('button');
        buttonBack.classList.add('btn-back');
        buttonBack.textContent = textBtns[1];
        sideBtns.appendChild(buttonBack);

        if(buttonFront) {
            buttonFront.setAttribute('onclick', 'changeFront('+item+')');
        }
        if(buttonBack) {
            buttonBack.setAttribute('onclick', 'changeBack('+item+')');
        }


};

const changeBack = (item) => {
    localStorage.setItem('side','back');
    let color = localStorage.getItem('color');
    let shirtImg = document.getElementsByTagName('img')[1];
    shirtImg.src = shirts[item].colors[color].back;

};

const changeFront = (item) => {
    localStorage.setItem('side','front');
    let color = localStorage.getItem('color');
    let shirtImg = document.getElementsByTagName('img')[1];
    shirtImg.src = shirts[item].colors[color].front;
};

function changeColor(item, color){
    localStorage.setItem('color',color);
    let side = localStorage.getItem('side');
    let img = document.getElementsByTagName('img')[1];
    if(side == 'front'){
        img.src = shirts[item].colors[color].front;
    }else
         img.src = shirts[item].colors[color].back;
};




