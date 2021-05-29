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
const card = document.querySelector('.card');
const cost = document.querySelectorAll('.cost');
const costAmount = document.getElementById('cost-amount');
const totalCost = document.querySelector('.total-costs');

let expenseID = 0;
let bodyCard;
let costArray = [];

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

        bodyCard.innerHTML = `
            <div class="body-title">
                <i class="fas fa-hand-holding-usd"></i>
                <p class="cost-name">${title.value}</p>
                <p id="cost-amount">${amount.value} zł</p>
            </div>
            <button onClick=deleteCost(${expenseID})><i class="fas fa-times"></i></button>`;

        // card.appendChild(bodyCard);
        expenseID++;
        changeCategory();
        additionCost();
        cleanForm();
    } 
}

const changeCategory = () => {
    switch(category.value) {
        case '1':
            newCard = document.querySelector('.documentation');
            newCard.appendChild(bodyCard);
            break;
        case '2':
            newCard = document.querySelector('.basic-state');
            newCard.appendChild(bodyCard);
            break;
        case '3':
            newCard = document.querySelector('.inside-finish');
            newCard.appendChild(bodyCard);
            break;
        case '4':
            newCard = document.querySelector('.outside-finish');
            newCard.appendChild(bodyCard);
            break;
    }
}

const additionCost = () => {
    let sum = 0;
    costArray.push(amount.value);
    for(i=0; i < costArray.length; i++) {
        sum += parseInt(costArray[i]);
    }
    cost.textContent = sum;
}

const deleteAll = () => {
    bodyCard.style.display = 'none';
}

const deleteCost = id => {
    costToDelete = document.getElementById(id);
    card.removeChild(costToDelete);
}

addCostBtn.addEventListener('click', function() {
    costArea.style.display = 'block';
})

saveBtn.addEventListener('click', changeForm);
cancelBtn.addEventListener('click', cancelForm);
deleteAllBtn.addEventListener('click', deleteAll);