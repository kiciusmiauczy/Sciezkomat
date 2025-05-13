let currentQuestion = 0;
let answers = [];
let scores = {};

const studyDirections = [
  { name: "Medycyna", icon: "fa-stethoscope" },
  { name: "Informatyka", icon: "fa-laptop-code" },
  { name: "Automatyka i Robotyka", icon: "fa-robot" },
  { name: "Budownictwo", icon: "fa-tools" },
  { name: "Stomatologia", icon: "fa-tooth" },
  { name: "Farmacja", icon: "fa-prescription-bottle" },
  { name: "Weterynaria", icon: "fa-paw" },
  { name: "Zarządzanie", icon: "fa-briefcase" },
  { name: "Prawo", icon: "fa-balance-scale" },
  { name: "Psychologia", icon: "fa-brain" },
  { name: "Sztuka i design", icon: "fa-palette" },
  { name: "Pedagogika", icon: "fa-chalkboard-teacher" },
  { name: "Biologia", icon: "fa-leaf" },
  { name: "Chemia", icon: "fa-flask" },
  { name: "Fizyka", icon: "fa-atom" },
  { name: "Matematyka", icon: "fa-calculator" },
  { name: "Ekonomia", icon: "fa-chart-line" },
  { name: "Finanse", icon: "fa-money-bill-wave" },
  { name: "Marketing", icon: "fa-bullhorn" },
  { name: "Dziennikarstwo", icon: "fa-newspaper" },
  { name: "Historia", icon: "fa-scroll" },
  { name: "Filozofia", icon: "fa-book-open" },
  { name: "Filologia", icon: "fa-language" },
  { name: "Sztuczna Inteligencja", icon: "fa-brain-circuit" },
  { name: "Cyberbezpieczeństwo", icon: "fa-shield-alt" },
  { name: "Zarządzanie i Inżynieria Produkcji", icon: "fa-industry" },
  { name: "Turystyka i Rekreacja", icon: "fa-map-marked-alt" },
  { name: "Logistyka", icon: "fa-truck" },
  { name: "Architektura", icon: "fa-drafting-compass" },
  { name: "Dietetyka", icon: "fa-utensils" },
  { name: "Rolnictwo", icon: "fa-tractor" },
  { name: "Inżynieria Biomedyczna", icon: "fa-prosthesis" },
  { name: "Pielęgniarstwo", icon: "fa-user-nurse" },
  { name: "Grafika Komputerowa", icon: "fa-paint-brush" },
  { name: "Energetyka", icon: "fa-bolt" },
  { name: "Socjologia", icon: "fa-users" },
  { name: "Fizjoterapia", icon: "fa-wheelchair" }
];
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const backBtn = document.getElementById("back-btn");
const backToHomeBtn = document.getElementById("back-to-home");
const questionText = document.getElementById("question-text");
const answerOptions = document.getElementById("answer-options");
const progressText = document.getElementById("progress-text");

startBtn.addEventListener("click", () => {
  document.querySelector(".quiz-start").style.display = "none";
  document.getElementById("quiz-section").style.display = "block";
  showQuestion();
});

nextBtn.addEventListener("click", () => {
  if (!isAnswerSelected(questions[currentQuestion], answers[currentQuestion])) {
    alert("Proszę wybrać odpowiedź przed przejściem dalej!");
    return;
  }
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion("forward");
  } else {
    showResults();
  }
});

backBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion("backward");
  }
});

backToHomeBtn.addEventListener("click", () => {
  document.getElementById("quiz-section").style.display = "none";
  document.querySelector(".quiz-start").style.display = "block";
  currentQuestion = 0;
  answers = [];
});

function isAnswerSelected(q, answer) {
  if (q.type === "multiple") {
    return Array.isArray(answer) && answer.length > 0;
  } else if (q.type === "single") {
    return answer && typeof answer === "object" && answer.text;
  } else if (q.type === "rating") {
    return answer && typeof answer.value === "number";
  }
  return false;
}

function showQuestion(direction = "forward") {
  console.log("Wyświetlanie pytania:", currentQuestion);
  console.log("Liczba pytań:", questions.length);
  const q = questions[currentQuestion];

  const quizCard = document.querySelector(".quiz-card");
  quizCard.classList.remove("fade-in-question", "fade-in-left", "fade-in-right", "fade-out-question", "fade-out-left", "fade-out-right");

  if (direction === "forward") {
    quizCard.classList.add("fade-out-right");
  } else {
    quizCard.classList.add("fade-out-left");
  }

  setTimeout(() => {
    questionText.innerText = q.text;
    answerOptions.innerHTML = "";

    if (q.type === "single" || q.type === "multiple" || q.type === "rating") {
      q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.className = "btn-primary option";
        btn.style.margin = "10px";
        btn.innerText = option.text;
        btn.dataset.text = option.text;
        btn.onclick = () => {
          if (q.type === "multiple") {
            if (!answers[currentQuestion]) answers[currentQuestion] = [];
            if (!answers[currentQuestion].includes(option)) {
              answers[currentQuestion].push(option);
              btn.classList.add("selected");
            } else {
              answers[currentQuestion] = answers[currentQuestion].filter(o => o !== option);
              btn.classList.remove("selected");
            }
          } else if (q.type === "single" || q.type === "rating") {
            const previouslySelected = answerOptions.querySelector('.selected');
            if (previouslySelected) previouslySelected.classList.remove("selected");
            btn.classList.add("selected");
            answers[currentQuestion] = option;
          }
        };
        answerOptions.appendChild(btn);
      });
    }

    if (q.type === "single" || q.type === "rating") {
      if (answers[currentQuestion]) {
        const btn = answerOptions.querySelector(`button[data-text="${answers[currentQuestion].text}"]`);
        if (btn) btn.classList.add("selected");
      }
    } else if (q.type === "multiple") {
      if (answers[currentQuestion] && Array.isArray(answers[currentQuestion])) {
        answers[currentQuestion].forEach(selectedOption => {
          const btn = answerOptions.querySelector(`button[data-text="${selectedOption.text}"]`);
          if (btn) btn.classList.add("selected");
        });
      }
    }

    backBtn.disabled = currentQuestion === 0;
    nextBtn.innerText = currentQuestion < questions.length - 1 ? "Dalej" : "Zakończ";
    progressText.innerText = `Pytanie ${currentQuestion + 1} z ${questions.length}`;

    quizCard.classList.remove("fade-out-left", "fade-out-right");
    if (direction === "forward") {
      quizCard.classList.add("fade-in-left");
    } else {
      quizCard.classList.add("fade-in-right");
    }
  }, 400);
}

function showResults() {
  console.log("Wyświetlanie wyników, odpowiedzi:", answers);

  // Pokaż ekran ładowania
  document.getElementById("quiz-section").style.display = "none";
  document.getElementById("loading-section").style.display = "block";

  setTimeout(() => {
    // Oblicz wyniki dopiero po małym opóźnieniu (symulacja ładowania)
    const maxScore = {};
    const scores = {};

    studyDirections.forEach(sd => {
      maxScore[sd.name] = 0;
      scores[sd.name] = 0;
    });

    questions.forEach((q, index) => {
      const answer = answers[index];

      if (q.type === "multiple") {
        q.options.forEach(opt => {
          opt.category.forEach(cat => {
            if (maxScore[cat] !== undefined) maxScore[cat]++;
          });
        });

        if (Array.isArray(answer)) {
          answer.forEach(opt => {
            opt.category.forEach(cat => {
              if (scores[cat] !== undefined) scores[cat]++;
            });
          });
        }

      } else if (q.type === "single") {
        q.options.forEach(opt => {
          opt.category.forEach(cat => {
            if (maxScore[cat] !== undefined) maxScore[cat]++;
          });
        });

        if (answer && answer.category) {
          answer.category.forEach(cat => {
            if (scores[cat] !== undefined) scores[cat]++;
          });
        }

      } else if (q.type === "rating") {
        q.category.forEach(cat => {
          if (maxScore[cat] !== undefined) maxScore[cat] += 5;
        });

        if (answer && typeof answer.value === "number") {
          q.category.forEach(cat => {
            if (scores[cat] !== undefined) scores[cat] += answer.value;
          });
        }
      }
    });

    const results = studyDirections.map(sd => {
      const max = maxScore[sd.name] || 1;
      const score = scores[sd.name] || 0;
      const percentage = (score / max) * 100;
      return { name: sd.name, percentage };
    });

    results.sort((a, b) => b.percentage - a.percentage);

    // Ukryj ekran ładowania i pokaż wyniki
    // Ukryj ekran ładowania i pokaż wyniki
document.getElementById("loading-section").style.display = "none";
document.getElementById("quiz-section").style.display = "block";

questionText.innerText = "Twoje top 3 kierunki studiów:";
answerOptions.innerHTML = `
  <div style="text-align: center;">
    ${results.slice(0, 3).map((result, index) => `
      <div style="margin-bottom: 15px;">
        <strong>${index + 1}. ${result.name}</strong> – Dopasowanie: ${result.percentage.toFixed(2)}%
        <div style="background: #eee; border-radius: 10px; overflow: hidden; height: 20px; margin-top: 5px;">
          <div style="width: ${result.percentage}%; background-color: #003366; height: 100%; transition: width 0.5s;"></div>
        </div>
      </div>
    `).join("")}
  </div>

  <h3 style="margin-top: 40px;">Pozostałe kierunki:</h3>
  <div>
    ${results.slice(3).map((result, index) => `
      <div style="margin-bottom: 10px;">
        <span><strong>${result.name}</strong> – ${result.percentage.toFixed(2)}%</span>
        <div style="background: #eee; border-radius: 10px; overflow: hidden; height: 15px; margin-top: 5px;">
          <div style="width: ${result.percentage}%; background-color: #1E90FF; height: 100%; transition: width 0.5s;"></div>
        </div>
      </div>
    `).join("")}
  </div>
`;

nextBtn.style.display = "none";
backBtn.style.display = "none";
progressText.style.display = "none";

  }, 2000); // 2 sekundy ładowania
}
