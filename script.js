
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
                  <button class="delete delete-main hidden is-pulled-right" aria-label="close"></button>
                </div>
  
  <!-- container / progress bar sa detaljima i koracima za HIDE/SHOW -->
                <div class="container details fade-slide hidden">
                  
                <div class="container mb-4 is-flex is-justify-content-space-between">
                    
                  <input id="small-step-input" class="input is-small" type="text" placeholder="Add small step"/>
                  <button id="add-small-step" class="button is-small is-danger">Add Step</button>  
                  
                </div>  
                <div class="checkbox-container container is-flex is-flex-direction-column">
                    
                </div>
                <progress class="progress is-danger bar mt-2 mb-4" value="0" max="100"></progress>
              </div>`

      addTodoTaskInput.value = ''
    }
})

todoWrapper.addEventListener('mouseover', (e) => {
  label = e.target.closest('label')
  if (!label) return;

  if (e.target.closest('.checkbox')) {
    listDelete = label.querySelector('.delete')
    listDelete.classList.toggle('hidden')
    console.log('entered checkbox element')
  }
})

todoWrapper.addEventListener('mouseout', (e) => {
  label = e.target.closest('label')
  if (!label) return;

  if (e.target.closest('.checkbox')) {
    listDelete = label.querySelector('.delete')
    listDelete.classList.toggle('hidden')
    console.log('entered checkbox element')
  }
})
// add event to show details on click

todoWrapper.addEventListener('click', (e) => {
    const todoItem = e.target.closest('.todo-item')
    if (!todoItem) return 

    if (e.target.matches('.delete-main')) {
      e.target.closest('.todo-item').remove()
    }

    if (e.target.matches('.delete-list')) {
      e.target.closest('label').remove()
    }

    if (e.target.closest('.todo')) {
      const details = todoItem.querySelector('.details')
      details.classList.toggle('hidden')
      
    }

    if (e.target.closest('#add-small-step')) {
      console.log('Small button clicked!')
      const checkboxContainer = todoItem.querySelector('.checkbox-container')
      const input = todoItem.querySelector('#small-step-input')
      const progressBar = todoItem.querySelector('.progress')

      if (input.value) {
        const label = document.createElement('label');
        label.classList = 'checkbox is-flex mb-2'
        label.innerHTML = `<input type='checkbox'/>
                            <div class='container is-flex is-justify-content-space-between'>
                            ${input.value.trim()} <button class="delete delete-list is-small hidden"></button></div>`
        checkboxContainer.insertBefore(label, checkboxContainer.children[0])

        const checkboxes = [...todoItem.querySelectorAll('input[type="checkbox"]')];
        const checkedCount = checkboxes.filter(cb => cb.checked).length;                // Kod za provjeru checkboxa se ponavlja, FUNKCIJA
        let ukupno = checkboxes.length
        progressBar.value = checkedCount * (100 / ukupno)

        input.value = ''
      }
      
    }

    if (e.target.closest('.checkbox')) {
        const progressBar = todoItem.querySelector('.progress')
        const checkboxes = [...todoItem.querySelectorAll('input[type="checkbox"]')];
        const checkedCount = checkboxes.filter(cb => cb.checked).length;
        let ukupno = checkboxes.length
                           // Kod za provjeru checkboxa se ponavlja, FUNKCIJA 
        console.log(ukupno)
        console.log(checkedCount)
        progressBar.value = checkedCount * (100 / ukupno)
    }

    
})

//add / remove clear button on todo's

todoWrapper.addEventListener('mouseover', (e)=> {
  const todo = e.target.closest('.todo')
  if (!todo) return
  const deleteButton = todo.querySelector('.delete')
  console.log('Enter the todo')
  deleteButton.classList.toggle('hidden')
  todo.classList.toggle('todo-highlight')
})


todoWrapper.addEventListener('mouseout', (e)=> {
    const todo = e.target.closest('.todo')
    if (!todo) return
    const deleteButton = todo.querySelector('.delete')
    console.log('exit the todo')
    deleteButton.classList.toggle('hidden')
    todo.classList.toggle('todo-highlight')
  })