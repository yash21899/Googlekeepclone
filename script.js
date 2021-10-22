const addnote = document.getElementById('add');
const container = document.querySelector('.container');

const updatedata = () =>{
    const textareaData = document.querySelectorAll('textarea');
    const keepdata = [];
    // console.log(textareaData);
    textareaData.forEach((ele) => {
        return keepdata.push(ele.value);
    });
    // console.log(yashkeep);
    localStorage.setItem('keepdata', JSON.stringify(keepdata));
}
const addnewnote = (text = '')=>{
    const htmldata = `
    <div class="note">
                <div class="operation">
                    <button type="button" class="btn edit"><i class="fas fa-edit" style="color: green;"></i></button>
                    <button type="button" class="btn Delete"><i class="fas fa-trash-alt"  style="color: red;"></i></button>
                </div>
                <div class="main ${text ? "" : "hidden"}"></div>
                <textarea class="${text ? "hidden" : ""}"></textarea>
            </div>
    `;
    container.insertAdjacentHTML('afterbegin', htmldata);
    document.body.appendChild(container);

    let note = container.querySelector('.note');
    let edit = container.querySelector('.edit');
    let Delete = container.querySelector('.Delete');
    let main = container.querySelector('.main');
    let textarea = container.querySelector('textarea');

    // delete the note
    Delete.onclick = () =>{
        note.remove();
        updatedata();
    }

    // edit the note / toggle
    edit.addEventListener('click',()=>{
        main.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    });

    textarea.value = text;
    main.innerHTML = text;

    textarea.addEventListener('change',(ele)=>{
        let v = ele.target.value;
        main.innerHTML = v;
        updatedata();
    });

}

const keepdata = JSON.parse(localStorage.getItem('keepdata'));
if(keepdata){
    keepdata.forEach((ele) => addnewnote(ele) );
}


addnote.addEventListener('click', () =>addnewnote() );