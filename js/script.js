const addCostBtn = document.querySelector('.add-cost');
const deleteAllBtn = document.querySelector('.delete-all');
const deleteBtn = document.getElementsByClassName('fa-times');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');

const costArea = document.querySelector('.cost-area');
const category = document.querySelector('#category');
const title = document.querySelector('#title');
const amount = document.querySelector('#amount');
const error = document.querySelector('.error');
const card = document.querySelectorAll('.card');
const cost = document.querySelectorAll('.cost');
const costAmount = document.getElementById('cost-amount');
const totalCost = document.querySelector('.total-costs');
const headerCard = document.querySelector('.header-card');
const cardDocumentation = document.querySelector('.documentation');
const cardBasicState = document.querySelector('.basic-state');
const cardInsideFinish = document.querySelector('.inside-finish');
const cardOutsideFinish = document.querySelector('.outside-finish');
let costDocumentation = document.querySelector('.cost-documentation');
const costBasicState = document.querySelector('.cost-basic-state');
const costInsideFinish = document.querySelector('.cost-inside-finish');
let costOutsideFinish = document.querySelector('.cost-outside-finish');

let expenseID = 0;
let bodyCard;
let costArray = [];
let newCard;
let newCost;
let totalCostArray = [];


const changeForm = () => {
    if(category.value == 0 || title.value == '' || amount.value == ''){
        error.style.visibility = 'visible';
    } else {
        error.style.visibility = 'hidden';
        saveCost();
    }
}

const cleanForm = () => {
    costArea.style.display = 'none';
    error.style.visibility = 'hidden';
    category.value = 0;
    title.value = '';
    amount.value = '';
}

const cancelForm = () => {
    cleanForm();
}

const saveCost = () => {
    if(category.value !== 0 && title.value !== '' && amount.value !== ''){
        bodyCard = document.createElement('div');
        bodyCard.classList.add('body-card');
        bodyCard.setAttribute('id', expenseID);
        additionAllCost();
        // additionCost();
        // additionDocumentionCost();

        bodyCard.innerHTML = `
            <div class="body-title">
                <i class="fas fa-hand-holding-usd"></i>
                <p class="cost-name">${title.value}</p>
                <p id="cost-amount">${amount.value} zł</p>
            </div>
            <button onClick=deleteCost(${expenseID})><i class="fas fa-times"></i></button>`;
        expenseID++;
        changeCategory();
        // additionAllCost();
        cleanForm();
    } 
}

const changeCategory = () => {
    switch(category.value) {
        case '1':
            cardDocumentation.appendChild(bodyCard);
            break;
        case '2':
            cardBasicState.appendChild(bodyCard);
            break;
        case '3':
            cardInsideFinish.appendChild(bodyCard);
            break;
        case '4':
            cardOutsideFinish.appendChild(bodyCard);
            break;
    }
}

const additionCost = () => {
    // let sum = 0;
    
    // costArray.push(amount.value);
    // for(i=0; i < costArray.length; i++) {
    //     sum += parseInt(costArray[i]);
    // }

    // newCost.textContent = sum;



    costArray.push(amount.value);
    for(i=0; i < costArray.length; i++) {
        sum += parseInt(costArray[i]);
    }

    // let newCost;
    costDocumentation.textContent = sum;
    if(category.value == 2) {
        costBasicState.textContent = sum;
    } else if (category.value == 3) {
        costInsideFinish.textConten = sum;
    } else {
        costOutsideFinish.textContent = sum;
    }
}

const additionDocumentionCost = () => {
     let documentationArray = [];
     let basicStaticArray = [];
     let sumCost = 0;

     if(category.value == 1) {
         documentationArray.push(amount.value);
     } 

    for(i=0; i < documentationArray.length; i++) {
        sumCost += parseInt(documentationArray[i]);
    } 
    costDocumentation.textContent = sumCost;

    console.log(sumCost);
    console.log(documentationArray);
}

const additionAllCost = () => {
    let allSum = 0;
    totalCostArray.push(amount.value);
    for(i=0; i < totalCostArray.length; i++) {
            allSum = allSum + parseInt(totalCostArray[i]);
    }
    totalCost.textContent = parseInt(allSum);
}

const deleteAll = () => {
    bodyCard.style.display = 'none';
}

const deleteCost = id => {
    costToDelete = document.getElementById(id);
    card.removeChild(costToDelete);
    console.log(card);
}

addCostBtn.addEventListener('click', function() {
    costArea.style.display = 'block';
})

saveBtn.addEventListener('click', changeForm);
cancelBtn.addEventListener('click', cancelForm);
deleteAllBtn.addEventListener('click', deleteAll);