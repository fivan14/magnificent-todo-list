
//dohvacanje elemenata is DOM strukture

let todo = document.querySelector('.todo')
let bar = document.querySelector('.details')

let clear = document.querySelector('.delete')

todo.addEventListener('click', () => {
    bar.classList.toggle('hidden')
})

//add / remove clear button on todo's

todo.addEventListener('mouseenter', () => {
    details.classList.toggle('hidden')
    // kad miš uđe
  });
  
  todo.addEventListener('mouseleave', () => {
    details.classList.toggle('hidden')
    // kad miš izađe
  });