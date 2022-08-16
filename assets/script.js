const screen = document.querySelector('#screen');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) =>{

    item.onclick = () =>{
        if(item.id == 'clear'){
            screen.innerText = '';
        }else if(item.id == 'backspace'){
            let word = screen.innerText.toString();
            screen.innerText = word.substr(0, word.length -1);
        }else if(screen.innerText !='' && item.id == 'equals'){
            screen.innerText = eval(screen.innerText);
        }else if(screen.innerText == '' && item.id == 'equals'){
            screen.innerText = 'Enter input first!';
            setTimeout(()=> (screen.innerText = ''), 2000);
        }else{
            screen.innerText += item.id;
        }
    }
})