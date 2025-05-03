
//dohvacanje elemenata is DOM strukture

let addTodoTaskInput = document.querySelector('#add-todo-task-input')
let addTodoButton = document.querySelector('#add-todo-button')
let selectCategoryMain = document.querySelector('#select-category-main > select')


let todoWrapper = document.querySelector('.todo-wrapper')
let todo = document.querySelector('.todo')
let detailsContainer = document.querySelector('.details')
let clear = document.querySelector('.delete')

let addSmallStep = document.querySelector('#add-small-step')
let checkboxContainer = document.querySelector('.checkbox-container')
let smallStepInput = document.querySelector('#small-step-input')


// main add todo functionality

addTodoButton.addEventListener('click', () => {
    if (addTodoTaskInput.value.trim().length > 0) {
      document.querySelector('.todo-wrapper').innerHTML += `
              <div class="todo-item">
                <div class="box todo">
                  ${addTodoTaskInput.value.trim()}
                  <button class="delete hidden is-pulled-right" aria-label="close"></button>
                </div>
  
  <!-- container / progress bar sa detaljima i koracima za HIDE/SHOW -->
                <div class="container details fade-slide hidden">
                  
                <div class="container mb-4 is-flex is-justify-content-space-between">
                    
                  <input id="small-step-input" class="input is-small" type="text" placeholder="Add small step"/>
                  <button id="add-small-step" class="button is-small is-danger">Add Step</button>  
                  
                </div>  
                <div class="checkbox-container container is-flex is-flex-direction-column">
                    <label class="checkbox">
                      <input type="checkbox" checked />
                      Instalirati Bulmu i upoznati klase
                    </label>
                    <label class="checkbox">
                      <input type="checkbox" />
                      Prouciti flexbox
                    </label>
                </div>
                <progress class="progress is-danger bar mt-2 mb-4" value="50" max="100"></progress>
              </div>`

      addTodoTaskInput.value = ''
    }
})

// event click i dodavanje small stepa

// addSmallStep.addEventListener('click', () => {
//     if (smallStepInput.value.trim().length > 0) {
//         checkboxContainer.innerHTML = (`
//                   <label class="checkbox">
//                       <input type="checkbox" />
//                         ${smallStepInput.value}
//                   </label>` + checkboxContainer.innerHTML)
//         smallStepInput.value = ''
//     }
// })

//---------------------------------------

// add event to show details on click

todoWrapper.addEventListener('click', (e) => {
    const todoItem = e.target.closest('.todo-item')
    if (!todoItem) return 

    if (e.target.closest('.todo')) {
      const details = todoItem.querySelector('.details')
      details.classList.toggle('hidden')
    }

    if (e.target.closest('#add-small-step')) {
      console.log('Small button clicked!')
      const checkboxContainer = todoItem.querySelector('.checkbox-container')
      const input = todoItem.querySelector('#small-step-input')

      if (input.value) {
        checkboxContainer.innerHTML += `
                    <label class="checkbox">
                      <input type="checkbox" />
                      ${input.value.trim()}
                    </label> `

        checkboxContainer.innerHTML = ''
      }
      
    }
    
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
