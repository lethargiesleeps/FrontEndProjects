const projects = [
    {name: 'Expanding Cards',  url: './ExpandingCards/expandingcards.html'},
    {name: 'Blurry Load', url: './BlurryLoad/blurryload.html'},
    {name: 'Form Wave Animation', url: './FormWaveAnimation/formwaveanimation.html'},
    {name: 'Hidden Search', url: './HiddenSearch/hiddensearch.html'},
    {name: 'Progress Steps', url: './ProgressSteps/progresssteps.html'},
    {name: 'Rotating Navigation', url: './RotatingNav/rotatingnav.html'},
    {name: 'Scroll Animation', url: './ScrollAnimation/scrollanim.html'},
    {name: 'Sound Board', url: './SoundBoard/soundboard.html'},
    {name: 'Split Landing', url: './SplitLanding/splitlanding.html'}
];
let index = 1;
const table = document.getElementById('table');
projects.sort((a,b) => {
    if(a.name < b.name)
        return -1;
    else
        return 1;
});

projects.forEach(project => {
    let tableRow = document.createElement('tr');
    let projectNumber = document.createElement('td');
    let projectName = document.createElement('td');
    let projectUrl = document.createElement('td');
    let projectLink = document.createElement('a');
    projectLink.href = project.url;
    projectLink.innerText = 'View';
    const classes = ['btn', 'btn-outline-secondary', 'btn-sm'].forEach(bsClass => {
        projectLink.classList.add(bsClass);
    })
    projectUrl.appendChild(projectLink);
    projectNumber.innerText = index;
    projectName.innerText = project.name;
    tableRow.appendChild(projectNumber);
    tableRow.appendChild(projectName);
    tableRow.appendChild(projectUrl);
    table.appendChild(tableRow);
    index++;
    

})