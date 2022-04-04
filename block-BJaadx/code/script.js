// 1. Change the title of the page to `Hello AltCampus!`

document.title = `Hello AltCampus`;

// 2. Select the element using the children property:

//    - Select the `h1` element and change the value to `Learning DOM`

//    - Select the first `li` element inside the `ul` with class `topics` and change the innerText to `all about document`
//    - Select the input element with name `email`

document.body.children[0].innerHTML = "Learning Dom",
document.body.children[5].children[0].innerHTML = `all about document`,
document.body.children[6].children[0];


// 3. Log the number (using console.log) of children of all the `li` element inside the ul with class `topics`
console.log(document.querySelector(`li`));

// 4. Select the first input using the `type` selector and store them in variable named `emailInput`
let input = document.querySelector('input[name = email]');

// 5. Select the ul element using class selector and store in `topics`
let allTopicsId = document.querySelector('.topics');


// 6. Select the first label element and store in `label`
let lable = document.body.children[6].children[1];
// other one
let label = document.querySelector('label')


// 7. Select the input of type `checkbox` with the `id` selector and store in `inputCheckbox`
let inputCheckbox = document.querySelector('#remember');
console.log(inputCheckbox);

// 8. Select the input of type password using Attribute selectors. (eg: input[type="text"]) and store in `password`
let changing = document.querySelector('input[name = password]');

// 9. Select the input using the placeholder attribute selector with value `password` and store in `attrPassword`
let placeholder = document.querySelector('input[placeholder = password]');
console.log(placeholder);

// 10. Select all the `li` element and store in `allTopics`
let AllTopics = document.querySelectorAll('li');
console.log(selectAllTopic);


// 11. Select all the input element of any type and store in `allInput`
let allInput = document.querySelectorAll('input');
console.log(allInput);

// 12. Use forEach to console the `innerText` property of all the li element in `allTopics` variable.
AllTopic.forEach((cv)=>{
    console.log(cv.innerText);
});


// 13. Select all the elements with class `list` and store in variable `listOfSelectedTopics`
let listOfSelectedTopics = document.querySelectorAll('.list');
// let listOfSelectedTopics = document.querySelector(".topics").children;



// 14. Select the first li element inside the `ul` element using `>` (direct child) and store in `firstLi`
let firstLi = document.querySelector('ul>li');
console.log(firstLi);

// 15. Select all the img element and log the number of element saying `The total number of img element is ---`
console.log(`The total number of img element is ${document.querySelectorAll('img').length}`)
// let img = document.querySelectorAll("img");
// console.log(img.length);

// 16. Select all the `p` element and store in `allPElement`
let allPElement = document.querySelectorAll('p');

// 17. Select all the buttons and log the count of buttons.
let allButtons = document.querySelectorAll('input').length;
console.log(allButtons);

// 18. Select all the `label` element and log the count.
let allLabel = document.querySelectorAll('label').length;
console.log(allLabel);

// 19. Select all the elements with `id` of `test`
let allPElementWithId = document.querySelectorAll('#test');
console.log(allPElementWithId);

// 20. Select the first element with id `test` using `getElementById`
let getElementById = document.getElementById('#test');
console.log(getElementById);

// 21. Select the parent element of the element stored in `topics` variable (#5) and log the element.
console.log(allTopicsId.lastElementChild);

// 22. Select the next element sibling of the element stored in `topics` variable (#5) and log the element.
console.log(allTopicsId.nextElementSibling)

// 23. Select the previous element sibling of the element stored in `topics` variable (#5) and change the `innerText` property to `Learning About Walking the DOM`.
topics.previousElementSibling.innerHTML = 'Learning About Walking the DOM'
console.log(topics.previousElementSibling)


// 24. Select the first element child of the element stored in `topics` variable (#5) and change the `innerText` property of the element to `This is the first child element`.
topics.firstElementChild.innerText = `This is the first child element`;

// topics.firstElementChild.innerHTML = 'This is the first child element'
// console.log(topics.firstElementChild)
// 25. Select the last element child of the element stored in `topics` variable (#5) and log the `typeof` the element.
console.log(typeof topics.lastElementChild);

// 26. Select the element with type `fieldset` and store in a variable named `fieldsetElm`.

let fieldsetElm = document.querySelector("fieldset");

// 27. Select the parent element of the element stored in `fieldsetElm` variable (#5) and log the `typeof` the element.
console.log(typeof fieldsetElm.parentElement);