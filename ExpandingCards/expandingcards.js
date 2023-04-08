const panels = document.querySelectorAll('.panel');
panels.forEach(panel => {
    panel.addEventListener('mouseover', () => {
        removeActieClasses();
        panel.classList.add('active');
    });

})

function removeActieClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}