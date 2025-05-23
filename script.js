"use strict";
const sections = document.querySelectorAll('.content-section');
function showSection(id) {
    sections.forEach(sec => sec.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
    if (id === 'learning')
        loadLearning();
    else if (id === 'examples')
        loadExamples();
    else if (id === 'practice') {
        document.getElementById('quizContainer').innerHTML = '';
        document.getElementById('tenseSelector').value = '';
    }
}
function loadLearning() {
    const content = `
    <h3>زمان حال ساده:</h3>
    <p>برای بیان عادت‌ها و حقایق استفاده می‌شود.</p>
    <p><strong>فرمول:</strong> فاعل + فعل اصلی (s سوم شخص مفرد)</p>
    <hr>
    <h3>زمان گذشته ساده:</h3>
    <p>برای کارهای تمام شده در گذشته استفاده می‌شود.</p>
    <p><strong>فرمول:</strong> فاعل + شکل گذشته فعل (ed یا شکل دوم فعل)</p>
    <hr>
    <h3>زمان آینده ساده:</h3>
    <p>برای بیان برنامه یا پیش‌بینی در آینده استفاده می‌شود.</p>
    <p><strong>فرمول:</strong> فاعل + will + فعل پایه</p>
    <hr>
    <h3>زمان حال استمراری:</h3>
    <p>برای کاری که همین الان در حال انجام است استفاده می‌شود.</p>
    <p><strong>فرمول:</strong> فاعل + am/is/are + فعل با ing</p>
    <hr>
    <h3>زمان گذشته استمراری:</h3>
    <p>برای کاری که در گذشته در حال انجام بوده است استفاده می‌شود.</p>
    <p><strong>فرمول:</strong> فاعل + was/were + فعل با ing</p>
  `;
    document.getElementById('learningContent').innerHTML = content;
}
function loadExamples() {
    const examples = `
    <ul>
      <li>I go to school every day. (حال ساده)</li>
      <li>He went to the park yesterday. (گذشته ساده)</li>
      <li>She will visit Tehran next week. (آینده ساده)</li>
      <li>They are playing football. (حال استمراری)</li>
      <li>We were studying at 8 PM. (گذشته استمراری)</li>
    </ul>
  `;
    document.getElementById('exampleContent').innerHTML = examples;
}
function loadQuiz() {
    const tense = document.getElementById('tenseSelector').value;
    const container = document.getElementById('quizContainer');
    container.innerHTML = '';
    if (!quizzes[tense])
        return;
    quizzes[tense].forEach((q, i) => {
        const div = document.createElement('div');
        div.innerHTML = `
      <p>${q.question}</p>
      <input type="text" id="q${i}" onblur="checkAnswer(${i}, '${q.answer}')">
    `;
        container.appendChild(div);
    });
}
function checkAnswer(index, correctAnswer) {
    const input = document.getElementById(`q${index}`);
    if (!input)
        return;
    if (input.value.trim().toLowerCase() === correctAnswer.toLowerCase()) {
        input.classList.add('correct');
        input.classList.remove('incorrect');
    }
    else {
        input.classList.add('incorrect');
        input.classList.remove('correct');
    }
}
const quizzes = {
    presentSimple: [
        { question: 'He ___ to school every day.', answer: 'goes' },
        { question: 'I ___ tea every morning.', answer: 'drink' },
        { question: 'She ___ not like fish.', answer: 'does' },
        { question: 'They ___ football on Fridays.', answer: 'play' },
        { question: 'Ali ___ TV in the evening.', answer: 'watches' },
        { question: 'You ___ my best friend.', answer: 'are' },
        { question: 'We ___ English every day.', answer: 'study' },
        { question: 'It ___ in winter.', answer: 'snows' },
        { question: 'My father ___ to work by car.', answer: 'goes' },
        { question: 'They ___ at home now.', answer: 'are' }
    ],
    pastSimple: [
        { question: 'I ___ a book yesterday.', answer: 'read' },
        { question: 'She ___ to the market.', answer: 'went' },
        { question: 'They ___ happy last week.', answer: 'were' },
        { question: 'We ___ a movie.', answer: 'watched' },
        { question: 'He ___ breakfast at 8.', answer: 'had' },
        { question: 'You ___ late last night.', answer: 'were' },
        { question: 'It ___ cold last winter.', answer: 'was' },
        { question: 'My mother ___ cooking.', answer: 'was' },
        { question: 'They ___ football yesterday.', answer: 'played' },
        { question: 'We ___ tired after the trip.', answer: 'were' }
    ],
    futureSimple: [
        { question: 'I ___ visit my grandma tomorrow.', answer: 'will' },
        { question: 'She ___ buy a new phone.', answer: 'will' },
        { question: 'They ___ go to school next week.', answer: 'will' },
        { question: 'We ___ help you.', answer: 'will' },
        { question: 'He ___ be here soon.', answer: 'will' },
        { question: 'You ___ see the movie later.', answer: 'will' },
        { question: 'It ___ rain tomorrow.', answer: 'will' },
        { question: 'My sister ___ pass the exam.', answer: 'will' },
        { question: 'They ___ arrive at 5 PM.', answer: 'will' },
        { question: 'I ___ call you later.', answer: 'will' }
    ],
    presentContinuous: [
        { question: 'I ___ watching TV now.', answer: 'am' },
        { question: 'She ___ studying English.', answer: 'is' },
        { question: 'They ___ playing football.', answer: 'are' },
        { question: 'We ___ eating dinner.', answer: 'are' },
        { question: 'He ___ reading a book.', answer: 'is' },
        { question: 'You ___ working hard.', answer: 'are' },
        { question: 'It ___ raining outside.', answer: 'is' },
        { question: 'My friends ___ coming.', answer: 'are' },
        { question: 'She ___ sleeping now.', answer: 'is' },
        { question: 'I ___ listening to music.', answer: 'am' }
    ],
    pastContinuous: [
        { question: 'I ___ studying when he came.', answer: 'was' },
        { question: 'She ___ cooking at 6.', answer: 'was' },
        { question: 'They ___ playing games.', answer: 'were' },
        { question: 'We ___ working yesterday.', answer: 'were' },
        { question: 'He ___ sleeping then.', answer: 'was' },
        { question: 'You ___ watching TV.', answer: 'were' },
        { question: 'It ___ raining.', answer: 'was' },
        { question: 'My father ___ reading a book.', answer: 'was' },
        { question: 'They ___ traveling.', answer: 'were' },
        { question: 'She ___ waiting for the bus.', answer: 'was' }
    ]
};