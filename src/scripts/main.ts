//Variables declarations
const forms: HTMLUListElement = document.querySelector('.forms') as HTMLUListElement;
const newCardButton: HTMLButtonElement = document.querySelector('.new-card') as HTMLButtonElement;
let idNumber = 0;

//functions calls
createCard();

//EventListeners
newCardButton.addEventListener('click', (e)=>{
    e.preventDefault();
    idNumber++;
    createCard();
})

//Functions declarations
function createCard(){
    forms.innerHTML += `
        <li class="forms__item">
            <form action="#" class="forms__form">
                <label for="input-${idNumber}" class="form__label form__input-label">input</label>
                <input type="text" id="input-${idNumber}" class="form__input">
                <label for="output-${idNumber}" class="form__label form__output-label">output</label>
                <input type="text" id="output-${idNumber}" class="form__output">
                <label for="sizes-${idNumber}" class="form__label form__sizes-label">sizes</label>
                <input type="text" id="sizes-${idNumber}" class="form__sizes">
            </form>
        <li/>
    `
}