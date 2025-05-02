
//dohvacanje elemenata is DOM strukture

let addTodoTaskInput = document.querySelector('#add-todo-task-input')
let addTodoButton = document.querySelector('#add-todo-button')
let selectCategoryMain = document.querySelector('#select-category-main > select')


let todo = document.querySelector('.todo')
let bar = document.querySelector('.details')
let clear = document.querySelector('.delete')

let addSmallStep = document.querySelector('#add-small-step')
let checkboxContainer = document.querySelector('.checkbox-container')
let smallStepInput = document.querySelector('#small-step-input')


// main add todo functionality

addTodoButton.addEventListener('click', () => {
    if (addTodoTaskInput.value.trim().length > 0) {
      document.querySelector('.todo-wrapper').innerHTML += `
              <div class="box todo">
                ${addTodoTaskInput.value.trim()}
                <button class="delete hidden is-pulled-right" aria-label="close"></button>
             </div>`

      addTodoTaskInput.value = ''
    }
})

// event click i dodavanje small stepa

addSmallStep.addEventListener('click', () => {
    if (smallStepInput.value.trim().length > 0) {
        checkboxContainer.innerHTML = (`
                  <label class="checkbox">
                      <input type="checkbox" />
                        ${smallStepInput.value}
                  </label>` + checkboxContainer.innerHTML)
        smallStepInput.value = ''
    }
})

//---------------------------------------

todo.addEventListener('click', (ele) => {
    if (ele.target.matches('.delete')) {
        document.querySelector('.todo-wrapper').remove()
    }
    bar.classList.toggle('hidden')
})

//add / remove clear button on todo's

todo.addEventListener('mouseenter', () => {
    clear.classList.toggle('hidden')
    // kad miš uđe
  });
  
  todo.addEventListener('mouseleave', () => {
    clear.classList.toggle('hidden')
    // kad miš izađe
  });


  //delete todo
