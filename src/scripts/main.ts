//Variables declarations
const formsContainer: HTMLUListElement = document.querySelector('.forms') as HTMLUListElement;
const newCardButton: HTMLButtonElement = document.querySelector('.new-card') as HTMLButtonElement;
const createCommandButton: HTMLButtonElement = document.querySelector('.create-command') as HTMLButtonElement;
let idNumber: number = 1;

//functions calls
createCard();

//EventListeners
newCardButton.addEventListener('click', (e)=>{
    e.preventDefault();
    idNumber++;
    createCard();
})

createCommandButton.addEventListener('click', (e)=>{
    e.preventDefault();
    let outputCommand: string = '';
    let forms = Array.from(document.querySelectorAll('.forms__form'));
    for (const form of forms) {
        let inputInput: HTMLInputElement = form.querySelector('.input') as HTMLInputElement;
        let outputInput: HTMLInputElement = form.querySelector('.output') as HTMLInputElement;
        let sizesInput: HTMLInputElement = form.querySelector('.sizes') as HTMLInputElement;
        let extensionInput: HTMLInputElement = form.querySelector('.extension') as HTMLInputElement;
        let sizes: string[] = sizesInput.value.split(',') as string[];
        if (forms.indexOf(form) < forms.length-1) for (const size of sizes) outputCommand += `convert '${inputInput.value}' -set filename:fn '%[basename]-${size}' -resize ${size}^ -quality 100 '${outputInput.value}/%[filename:fn].${extensionInput.value}' && `
        else for (const size of sizes) sizes.indexOf(size) < sizes.length-1 ? outputCommand += `convert '${inputInput.value}' -set filename:fn '%[basename]-${size}' -resize ${size}^ -quality 100 '${outputInput.value}/%[filename:fn].${extensionInput.value}' && ` : outputCommand += `convert '${inputInput.value}' -set filename:fn '%[basename]-${size}' -resize ${size}^ -quality 100 '${outputInput.value}/%[filename:fn].${extensionInput.value}'`;
    }
    navigator.clipboard.writeText(outputCommand)
        .then(()=> alert('Text copied to clipboard'))
        .catch((err: ErrorCallback)=> alert(`Error in copying text: ${err}`));
})

//Functions declarations
function createCard(): void{
    formsContainer.insertAdjacentHTML('afterbegin', `
        <li class="forms__form">
            <div class="input__container">
                <label for="input-${idNumber}" class="form__label input__label">Input directory :</label>
                <input type="text" class="form__input input" id="input-${idNumber}" placeholder="Ex: Users/yourname/projects/myImagesInput/*.jpg">
            </div>
            <div class="input__container">
                <label for="output-${idNumber}" class="form__label output__label">Output directory :</label>
                <input type="text" class="form__input output" id="output-${idNumber}" placeholder="Ex: Users/yourname/projects/myImagesOutput">
            </div>
            <div class="input__container">
                <label for="extension-${idNumber}" class="form__label extension__label">Output file extension :</label>
                <input type="text" class="form__input extension" id="extension-${idNumber}" placeholder="Ex: jpg, png, ...">
            </div>
            <div class="input__container">
                <label for="sizes-${idNumber}" class="form__label sizes__label">Sizes :</label>
                <input type="text" class="form__input sizes" id="sizes-${idNumber}" placeholder="Ex: 1920x1080, 1440x810, ...">
            </div>   
        </li>
    `)
}