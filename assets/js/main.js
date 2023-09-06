let offBtn= document.getElementById('btn')
window.addEventListener('DOMContentLoaded', () => {
    offBtn.addEventListener('click', () => {
        const sidebar = document.getElementsByClassName('nav_bar')['0'];
        sidebar.classList.toggle('cache');
        offBtn.classList.toggle('close')
    })
})



