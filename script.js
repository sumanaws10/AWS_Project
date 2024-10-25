// Tab Functionality
function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Default open tab
document.getElementsByClassName("tablinks")[0].click();

// Quiz Functionality
function checkAnswer(button, answer) {
    button.classList.add(answer === 'correct' ? 'correct' : 'incorrect');
    setTimeout(() => button.classList.remove(answer), 1000);
}
