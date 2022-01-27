setTimeout(()=>{
    let textDiv = document.querySelector('.text');

   /* textDiv.innerHTML = `Goodbye world!`
    textDiv.style.fontSize = '50px';
    textDiv.style.color='blue';
    textDiv.style.backgroundColor="red";*/
    textDiv.classList.add('text-mod');



    let list = document.querySelector('.list');

    const toDoList = ['Eat','Teach a piano lesson', 'laundry',' write code', 'sleep','DND', 'feed the dishwasher'];
    for(let item of toDoList){
        let li = document.createElement('li');
        li.innerText=item;
        list.appendChild(li);
    }

    
    /*console.log('li',li);
    li.innerText="Walk the Dog";
    console.log('text', li);
    list.appendChild(li);
    let li2 = document.createElement('li');
    console.log('li',li2);
    li2.innerText="Walk the Cat";
    console.log('text', li2);
    list.appendChild(li2);*/
},3000)


setTimeout(()=>{
    let list = document.querySelector('.list');
    let lastLi = document.querySelector('ul.list li:last-child')
    console.log(lastLi);
    list.removeChild(lastLi);
},
6000)