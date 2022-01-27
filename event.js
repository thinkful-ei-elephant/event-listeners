window.addEventListener('DOMContentLoaded',main);

const keys = [];

function main(){
    console.log('Page finished loading');

    document.querySelector('.btn').addEventListener('click',(event)=>{
        console.log(event);
        console.log('Button was clicked')
    })

    document.querySelector('body').addEventListener('keydown',(event)=>{
       if(event.key === 'p'){
           console.log('You hit P!')
       }
       if(event.target.id!=='password'){
            keys.push(event.key);
        console.log(event.target.id);
        document.querySelector('.letter-output').innerHTML= keys.join('|');
       }
    })

    document.querySelector('.box').addEventListener('mouseover',(event)=>{
        console.log('you have hovered over the forbidden box!');
    })

    document.querySelector('.addItem').addEventListener('click',(event)=>{
        let item = document.querySelector('#todo').value;
        console.log(item);
    })

    let buttons = document.querySelectorAll('.multi');
    buttons.forEach((btn)=>{
        btn.addEventListener('click',(evt)=>{
            console.log(' you clicked on one of the buttons!');
        })
    })
}