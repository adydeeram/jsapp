// const getUl = document.querySelector('ul')

// const childernCheck = getUl.children

// childernCheck[3].textContent = 'Hello Boy'
// childernCheck[3].id = 'more'
// // console.log(childernCheck[3].);
// // console.log(getUl.firstChild);
// console.log(getUl.childElementCount);




// const li = document.createElement('li');

// li.className = 'listItem';
// li.id = 'liID';
// li.setAttribute('title','ListItems');
// li.appendChild(document.createTextNode('Hi i am Adnan'))

// document.querySelector('#ul-list').appendChild(li)


// const newLi = document.createElement('li');
// newLi.setAttribute('title','New title');
// newLi.appendChild(document.createTextNode('Adnan Here'));
// newLi.className = 'relative block border bg-gray-600 rounded-xl p-4 border-grey';
// document.querySelector('#ul-list').appendChild(newLi);


// console.log(newLi);

// const anyArray = [
//     {
//         name : 'adnan',
//         location : 'Hunza',
//         age : 20
//      },
//     {
//         name : 'adnan2',
//         location : 'Hunza',
//         age : 20
//      },
//     {
//         name : 'adnan3',
//         location : 'Giglit',
//         age : 20
//      },
// ]

// const checkFilter = anyArray.map(function(e){
//         return e.name
// })
// console.log(checkFilter);






// replacing an existing element 



// const newElement =  document.createElement('p');
// newElement.setAttribute('href','/');

// newElement.appendChild(document.createTextNode('Adnan Here'));

// console.log(newElement);

// // getting elemenet to be replaced 

// const gettingOldElement = document.getElementById('newTag');

// // getting parent element 
// const gettingParentElement = document.querySelector('.collection-item');

// // Changning Element 

// gettingParentElement.replaceChild(newElement,gettingOldElement);


// Removing Elements 







// const gettingElement = document.querySelectorAll('li')

// gettingElement[2].remove();

// const remveAll = document.querySelector('.card-action')
// remveAll.remove()




// classes in Element 

// const e = document.querySelector('#task-title')
// const classes = e.classList
// classes.add('text-orange-600')
// classes.add('py-10')
// classes.add('bg-gray-600')


 
// console.log(classes);


// ganing input value 



const inputData = document.querySelector('#inputFeild');

const displayFeild = document.querySelector('#textArea')


// input to uper case 
const capitalizeBtn = document.querySelector('#button1');

capitalizeBtn.addEventListener('click',function(){
    displayFeild.style.textTransform = 'uppercase'   
    displayFeild.appendChild(document.createTextNode(inputData.value))
})

// to lower case 

const loweCaseBtn = document.querySelector('#lowerCaseBtn');



loweCaseBtn.addEventListener('click',function(){
    displayFeild.style.textTransform = 'lowercase'   
    displayFeild.appendChild(document.createTextNode(inputData.value))
})


// word count 

const wordCountBtn = document.querySelector('#wordCountBbtn')

wordCountBtn.addEventListener('click',function(){
        const mainValue = inputData.value;
        const breakDown = mainValue.split(" ")
        // displayFeild.appendChild(document.createTextNode(breakDown.length))
        displayFeild.innerText = `${breakDown.length}`


})




// clear btn 


const clearBtn = document.querySelector('#clearbtn');

clearBtn.addEventListener('click',function(){
    
    displayFeild.innerHTML = ' '

})
