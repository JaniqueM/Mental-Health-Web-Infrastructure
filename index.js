// Affirmations + Bible verses
const affirmations = [
    { text: "I am worthy of love and respect, exactly as I am.", verse: "Genesis 1:27" },
    { text: "My feelings are valid, and it's okay to express them.", verse: "1 Peter 5:7" },
    { text: "I am doing the best I can, and that is enough.", verse: "2 Corinthians 12:9" },
    { text: "I am resilient and strong.", verse: "Philippians 4:13" },
    { text: "I deserve peace and rest.", verse: "Matthew 11:28" },
    { text: "My mental health matters.", verse: "Psalm 147:3" }
];

// Elements
const affirmationText = document.getElementById("affirmationText");
const newAffirmationBtn = document.getElementById("newAffirmationBtn");
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const emptyState = document.getElementById("emptyState");
const totalTasks = document.getElementById("totalTasks");
const activeTasks = document.getElementById("activeTasks");
const completedTasks = document.getElementById("completedTasks");
const filterButtons = document.querySelectorAll(".filter-btn");
const moodButtons = document.querySelectorAll(".mood-btn");

let goals = JSON.parse(localStorage.getItem("soulift_goals")) || [];
let currentFilter = "all";

//-- Affirmations --
function showAffirmation() {
    const random = affirmations[Math.floor(Math.random() * affirmations.length)];
    affirmationText.innerHTML = `"${random.text}"<br><br>📖 ${random.verse}`;
}

newAffirmationBtn.addEventListener("click", showAffirmation);

//-- Mood Tracker --
moodButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        moodButtons.forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        localStorage.setItem("soulift_mood", btn.dataset.mood);
    });
});

// -- Goals --
function renderGoals() {
    taskList.innerHTML = "";
    const filtered = goals.filter(goal => {
        if (currentFilter === "active") return !goal.completed;
        if (currentFilter === "completed") return goal.completed;
        return true;
    });

    if (filtered.length === 0) {
        emptyState.classList.remove("hidden");
        taskList.classList.add("hidden");
    } else {
        emptyState.classList.add("hidden");
        taskList.classList.remove("hidden");

        filtered.forEach(goal => {
            const div = document.createElement("div");
            div.className = `task-item ${goal.completed ? "completed" : ""}`;
            div.innerHTML = `
        <input type="checkbox" class="task-checkbox" ${goal.completed ? "checked" : ""}>
        <span class="task-text">${goal.text}</span>
        <button class="task-delete">Remove</button>
      `;

            div.querySelector(".task-checkbox").addEventListener("change", () => {
                goal.completed = !goal.completed;
                saveGoals();
            });

            div.querySelector(".task-delete").addEventListener("click", () => {
                goals = goals.filter(g => g !== goal);
                saveGoals();
            });

            taskList.appendChild(div);
        });
    }

    updateStats();
}

function saveGoals() {
    localStorage.setItem("soulift_goals", JSON.stringify(goals));
    renderGoals();
}

taskForm.addEventListener("submit", e => {
    e.preventDefault();
    if (!taskInput.value.trim()) return;

    goals.unshift({ text: taskInput.value, completed: false });
    taskInput.value = "";
    saveGoals();
});

// -- Filters --
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        renderGoals();
    });
});

//-- Stats --
function updateStats() {
    totalTasks.textContent = goals.length;
    activeTasks.textContent = goals.filter(g => !g.completed).length;
    completedTasks.textContent = goals.filter(g => g.completed).length;
}

//-- Init --
showAffirmation();
renderGoals();
