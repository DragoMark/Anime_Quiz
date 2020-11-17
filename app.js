const correctAnswers = ['A','A','B','A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector(".result");

form.addEventListener('submit', e => {
    e.preventDefault();
    
    
    let score = 0;
    let userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];

    userAnswers.forEach((answer,index) => {
        if(answer == correctAnswers[index])
        {
            score += 25;
        }
    });

    scrollTo(0,0);
    result.classList.remove('d-none');
    let counter = 0;

    const score_counter = setInterval(() => {
        result.querySelector('span').textContent = `${counter}%`;
        if(counter === score)
        {  
            clearInterval(score_counter);
        }
        counter += 1;
        
    },10);

    // score_counter();
    
    
});

