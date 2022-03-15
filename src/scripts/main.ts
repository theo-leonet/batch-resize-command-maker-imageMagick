//Variables declarations
const forms: HTMLUListElement = document.querySelector('.forms') as HTMLUListElement;
const newCardButton: HTMLButtonElement = document.querySelector('.new-card') as HTMLButtonElement;
const createCommandButton : HTMLButtonElement = document.querySelector('.create-command') as HTMLButtonElement;
let idNumber: number = 1;
let sizesArray: string[][] = [] as string[][];
let finalString: string;

//functions calls
createCard();
let formArray = Array.from(document.querySelectorAll('.forms__form'));

//EventListeners
newCardButton.addEventListener('click', (e)=>{
    e.preventDefault();
    idNumber++;
    createCard();
})

createCommandButton.addEventListener('click', (e)=>{
    e.preventDefault();
    finalString = '';
    let formArray = Array.from(document.querySelectorAll('.forms__form'));
    for (const t of formArray) {
            let input: HTMLInputElement = t.querySelector('.input') as HTMLInputElement;
            let output: HTMLInputElement = t.querySelector('.output') as HTMLInputElement;
            let sizes: HTMLInputElement = t.querySelector('.sizes') as HTMLInputElement;
            let sizesArray: string[] = sizes.value.split(',') as string[];
        if (formArray.indexOf(t) < formArray.length-1) {
            for (const size of sizesArray) {
                finalString += `mogrify ${input.value} ${size} ${output.value} && `
            }
        }
        else {
            for (const size of sizesArray) {
                if (sizesArray.indexOf(size) < sizesArray.length-1){
                    finalString += `mogrify ${input.value} ${size} ${output.value} && `
                }
                else{
                    finalString += `mogrify ${input.value} ${size} ${output.value}`
                }
            }
        }
    }
    console.log(finalString)
})

//Functions declarations
function createCard(): void{
    forms.insertAdjacentHTML('afterbegin', `
        <li class="forms__form">
            <div class="input__container">
                <label for="input-${idNumber}" class="form__label input__label">Input directory :</label>
                <input type="text" class="form__input input" id="input-${idNumber}" placeholder="Ex: USERS/yourname/prohects/myImages">
            </div>
            <div class="input__container">
                <label for="output-${idNumber}" class="form__label output__label">Output directory :</label>
                <input type="text" class="form__input output" id="output-${idNumber}" placeholder="Ex: USERS/yourname/prohects/myImages">
            </div>
            <div class="input__container">
                <label for="sizes-${idNumber}" class="form__label sizes__label">Sizes :</label>
                <input type="text" class="form__input sizes" id="sizes-${idNumber}" placeholder="Ex: 1920x1080, 1444x326, ...">
            </div>   
        </li>
    `)
}