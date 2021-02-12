// traversing the dom
const questions = document.querySelectorAll(".question-btn");

questions.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const question = e.currentTarget.parentElement.parentElement;

        question.classList.toggle("show-text");
    });
});



const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (bt) {
bt.addEventListener("click", function (e) {
 const current = e.currentTarget; 

current.classList.toggle("arrow-up");
    });
});


