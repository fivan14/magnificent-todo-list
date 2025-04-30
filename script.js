let todo = document.querySelector('.todo')
let bar = document.querySelector('.details')

todo.addEventListener('click', () => {
    bar.classList.toggle('hidden')
})