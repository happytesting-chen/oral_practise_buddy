const topics = [
  {
    id: "kindness",
    title: "Kindness",
    icon: "🤝",
    summary: "Helping others and showing care.",
    stimulus: "People can show kindness in many small ways.",
    actions: ["Help an elderly neighbour", "Share with a classmate", "Comfort someone who is upset", "Offer help without being asked"],
    questions: [
      {
        q: "Which way of showing kindness have you practised before? Tell me about what you did.",
        starters: {
          state: "I have practised showing kindness by...",
          explain: "This was kind because...",
          personal: "Once, I...",
          suggestion: "Children can show more kindness by..."
        },
        cues: {
          state: ["help", "kind", "share", "lend", "support", "neighbour", "friend"],
          explain: ["because", "so that", "important", "feel", "care", "helpful"],
          personal: ["once", "one day", "last", "when i", "i saw", "i helped", "my friend", "my neighbour"],
          suggestion: ["should", "can", "could", "try to", "we can", "children can"]
        },
        model: "I have practised showing kindness by helping an elderly neighbour. This is kind because some elderly people may need a little support. Once, I saw my neighbour waiting for the lift. He had difficulty seeing clearly, so I helped him press the lift button. Children can show more kindness by looking out for people who may need help."
      },
      {
        q: "Why is it important to be kind to others?",
        starters: {
          state: "I think kindness is important because...",
          explain: "When we are kind...",
          personal: "For example, once...",
          suggestion: "We should try to..."
        },
        cues: {
          state: ["important", "kindness", "kind"],
          explain: ["because", "feel", "friend", "happy", "cared", "community"],
          personal: ["once", "for example", "one day", "when i"],
          suggestion: ["should", "can", "could", "try to"]
        },
        model: "I think kindness is important because it makes people feel cared for. When we are kind, it can also help us build better friendships. For example, once I shared my stationery with a classmate who forgot his pencil case. We should try to notice when someone needs help and do small acts of kindness."
      },
      {
        q: "What can your classmates do to make your class a kinder place?",
        starters: {
          state: "My classmates can...",
          explain: "This would help because...",
          personal: "I have seen this when...",
          suggestion: "I suggest that our class..."
        },
        cues: {
          state: ["classmate", "help", "share", "encourage", "include"],
          explain: ["because", "feel", "welcome", "happy", "safe"],
          personal: ["once", "when", "i saw", "my class"],
          suggestion: ["suggest", "should", "can", "could", "we can"]
        },
        model: "My classmates can include others during group work and help anyone who is struggling. This would help because everyone would feel welcome and supported. I have seen this during group activities when classmates explain a difficult task to one another. I suggest that our class also praise helpful behaviour and remember to speak politely."
      }
    ]
  },
  {
    id: "safety",
    title: "Safety",
    icon: "🦺",
    summary: "Making careful choices and preventing accidents.",
    stimulus: "Safe habits protect us and the people around us.",
    actions: ["Use the pedestrian crossing", "Wear a helmet", "Do not run on wet floors", "Follow school safety rules"],
    questions: [
      {
        q: "Which safety rule do you think is especially important for children? Why?",
        starters: {
          state: "I think an important safety rule is...",
          explain: "It is important because...",
          personal: "I remember a time when...",
          suggestion: "Children should..."
        },
        cues: {
          state: ["safety", "rule", "important", "crossing", "helmet", "careful"],
          explain: ["because", "accident", "hurt", "danger", "protect"],
          personal: ["once", "remember", "one day", "when i"],
          suggestion: ["should", "must", "can", "could"]
        },
        model: "I think using the pedestrian crossing is especially important for children. It is important because drivers can see us more clearly at a proper crossing. I remember a time when my family waited for the green man even though there were no cars nearby. Children should be patient and follow road safety rules instead of rushing."
      },
      {
        q: "Tell me about a time when you had to be careful to stay safe.",
        starters: {
          state: "One time I had to be careful was...",
          explain: "I needed to be careful because...",
          personal: "What happened was...",
          suggestion: "Next time, I will..."
        },
        cues: {
          state: ["careful", "safe"],
          explain: ["because", "danger", "accident", "hurt", "slippery"],
          personal: ["one time", "once", "what happened", "when i"],
          suggestion: ["next time", "i will", "should", "can"]
        },
        model: "One time I had to be careful was when I walked near a wet floor in a shopping centre. I needed to be careful because I could have slipped and hurt myself. I slowed down and held the handrail as I walked past the area. Next time, I will continue to watch for warning signs and avoid running."
      },
      {
        q: "What can your school do to help pupils stay safe?",
        starters: {
          state: "My school can...",
          explain: "This would help because...",
          personal: "At school, I have noticed...",
          suggestion: "I suggest..."
        },
        cues: {
          state: ["school", "safety", "teacher", "sign", "rule"],
          explain: ["because", "remind", "accident", "protect"],
          personal: ["noticed", "at school", "once", "when"],
          suggestion: ["suggest", "should", "can", "could"]
        },
        model: "My school can put clear safety signs near stairs, wet areas and busy corridors. This would help because pupils may forget to slow down when they are excited. At school, I have noticed that reminders from teachers help pupils behave more carefully. I suggest having short safety reminders during assembly as well."
      }
    ]
  },
  {
    id: "respect",
    title: "Respect",
    icon: "🙏",
    summary: "Being polite, considerate and thoughtful.",
    stimulus: "Respect can be shown through our words and actions.",
    actions: ["Greet neighbours politely", "Listen when others speak", "Queue patiently", "Take care of shared spaces"],
    questions: [
      {
        q: "How do you show respect to the people around you?",
        starters: {
          state: "I show respect by...",
          explain: "This is respectful because...",
          personal: "For example, I...",
          suggestion: "We should..."
        },
        cues: {
          state: ["respect", "polite", "listen", "greet", "queue"],
          explain: ["because", "feel", "considerate", "important"],
          personal: ["for example", "once", "i always", "when i"],
          suggestion: ["should", "can", "could", "we should"]
        },
        model: "I show respect by greeting adults politely and listening when someone is speaking. This is respectful because it shows that I value the other person. For example, I greet my neighbours when I meet them at the lift. We should use polite words and think about how our actions affect others."
      },
      {
        q: "Why is respect important in school?",
        starters: {
          state: "Respect is important in school because...",
          explain: "When pupils respect one another...",
          personal: "I have experienced this when...",
          suggestion: "Pupils should..."
        },
        cues: {
          state: ["respect", "school", "important"],
          explain: ["because", "learn", "safe", "peaceful", "friend"],
          personal: ["experienced", "once", "when i", "in class"],
          suggestion: ["should", "can", "could", "pupils"]
        },
        model: "Respect is important in school because pupils need to learn and work together. When pupils respect one another, the classroom is calmer and everyone feels comfortable speaking. I have experienced this during group work when my teammates listened to each person's idea. Pupils should take turns, speak politely and avoid interrupting others."
      },
      {
        q: "What can you do if you disagree with a friend?",
        starters: {
          state: "If I disagree with a friend, I can...",
          explain: "This is better because...",
          personal: "Once, my friend and I...",
          suggestion: "I think we should..."
        },
        cues: {
          state: ["disagree", "friend", "listen", "calm", "talk"],
          explain: ["because", "understand", "argue", "respect"],
          personal: ["once", "my friend", "when we"],
          suggestion: ["should", "can", "could", "i think"]
        },
        model: "If I disagree with a friend, I can stay calm and listen to his point of view. This is better because arguing loudly may make the problem worse. Once, my friend and I wanted to choose different games, so we took turns choosing. I think we should explain our ideas politely and try to find a fair solution."
      }
    ]
  },
  {
    id: "energy",
    title: "Energy Conservation",
    icon: "💡",
    summary: "Saving electricity and avoiding waste.",
    stimulus: "Small daily habits can help us conserve energy.",
    actions: ["Switch off lights", "Use fans wisely", "Unplug unused chargers", "Use natural light when possible"],
    questions: [
      {
        q: "What is one way you save electricity at home?",
        starters: {
          state: "At home, I save electricity by...",
          explain: "This helps because...",
          personal: "For example, I...",
          suggestion: "Families can also..."
        },
        cues: {
          state: ["electricity", "switch off", "light", "fan", "charger"],
          explain: ["because", "save", "energy", "waste"],
          personal: ["for example", "at home", "i usually", "every day"],
          suggestion: ["families", "can", "should", "could"]
        },
        model: "At home, I save electricity by switching off lights and fans when I leave a room. This helps because electricity should not be wasted when nobody is using it. For example, I always check my bedroom before I go to school. Families can also unplug chargers and use natural light during the day."
      },
      {
        q: "Why should children learn to conserve energy?",
        starters: {
          state: "Children should learn to conserve energy because...",
          explain: "If we waste energy...",
          personal: "I learnt this when...",
          suggestion: "Schools can..."
        },
        cues: {
          state: ["children", "energy", "conserve", "important"],
          explain: ["because", "waste", "environment", "electricity"],
          personal: ["learnt", "once", "at home", "at school"],
          suggestion: ["schools", "should", "can", "could"]
        },
        model: "Children should learn to conserve energy because our daily habits affect the environment. If we waste energy, more resources are needed to produce electricity. I learnt this when my teacher reminded us to switch off the classroom lights before leaving. Schools can put reminders near switches and teach pupils simple energy-saving habits."
      },
      {
        q: "What can your class do to use less electricity?",
        starters: {
          state: "Our class can...",
          explain: "This would save electricity because...",
          personal: "In my classroom, we...",
          suggestion: "I suggest that..."
        },
        cues: {
          state: ["class", "light", "fan", "air-con", "electricity"],
          explain: ["because", "save", "energy", "waste"],
          personal: ["classroom", "we", "at school", "when"],
          suggestion: ["suggest", "should", "can", "could"]
        },
        model: "Our class can switch off lights and fans when they are not needed. This would save electricity because empty classrooms do not need all the equipment running. In my classroom, we sometimes use daylight when the room is bright enough. I suggest that one pupil be the energy monitor each week."
      }
    ]
  },
  {
    id: "environment",
    title: "Clean Environment",
    icon: "🌱",
    summary: "Keeping shared places clean and pleasant.",
    stimulus: "Everyone has a part to play in keeping the environment clean.",
    actions: ["Throw rubbish in bins", "Pick up litter safely", "Reduce disposable items", "Keep classrooms tidy"],
    questions: [
      {
        q: "What do you do to keep your surroundings clean?",
        starters: {
          state: "I keep my surroundings clean by...",
          explain: "This is important because...",
          personal: "For example, I...",
          suggestion: "Everyone can..."
        },
        cues: {
          state: ["clean", "rubbish", "bin", "tidy", "litter"],
          explain: ["because", "pleasant", "healthy", "pest", "safe"],
          personal: ["for example", "i", "at school", "at home"],
          suggestion: ["everyone", "should", "can", "could"]
        },
        model: "I keep my surroundings clean by throwing rubbish into the correct bin and keeping my desk tidy. This is important because a clean place is healthier and more pleasant. For example, I clear away food wrappers after recess. Everyone can help by cleaning up after themselves instead of expecting someone else to do it."
      },
      {
        q: "Why is it important to keep public places clean?",
        starters: {
          state: "It is important to keep public places clean because...",
          explain: "Dirty places can...",
          personal: "I once saw...",
          suggestion: "People should..."
        },
        cues: {
          state: ["important", "public", "clean"],
          explain: ["because", "dirty", "pest", "smell", "health", "pleasant"],
          personal: ["once", "i saw", "when i"],
          suggestion: ["people", "should", "can", "could"]
        },
        model: "It is important to keep public places clean because many people share them. Dirty places can attract pests and make others uncomfortable. I once saw litter left on a table at a food court and it made the area look unpleasant. People should clear their rubbish and use the bins provided."
      },
      {
        q: "What can pupils do to make the school cleaner?",
        starters: {
          state: "Pupils can...",
          explain: "This would help because...",
          personal: "In my school, I have...",
          suggestion: "I suggest..."
        },
        cues: {
          state: ["pupils", "school", "clean", "litter", "classroom"],
          explain: ["because", "clean", "pleasant", "healthy"],
          personal: ["school", "i have", "once", "during"],
          suggestion: ["suggest", "should", "can", "could"]
        },
        model: "Pupils can throw rubbish away properly and keep their classrooms tidy. This would help because cleaners should not have to pick up rubbish that pupils can easily clear themselves. In my school, I have seen classmates remind one another to clean their tables after eating. I suggest having short class clean-up routines before dismissal."
      }
    ]
  }
];

const homeView = document.querySelector("#homeView");
const practiceView = document.querySelector("#practiceView");
const topicGrid = document.querySelector("#topicGrid");
const topicBadge = document.querySelector("#topicBadge");
const topicTitle = document.querySelector("#topicTitle");
const questionCounter = document.querySelector("#questionCounter");
const stimulusEmoji = document.querySelector("#stimulusEmoji");
const stimulusText = document.querySelector("#stimulusText");
const stimulusActions = document.querySelector("#stimulusActions");
const questionText = document.querySelector("#questionText");
const coachText = document.querySelector("#coachText");
const transcript = document.querySelector("#transcript");
const speakBtn = document.querySelector("#speakBtn");
const stuckBtn = document.querySelector("#stuckBtn");
const checkBtn = document.querySelector("#checkBtn");
const clearBtn = document.querySelector("#clearBtn");
const backBtn = document.querySelector("#backBtn");
const prevQuestionBtn = document.querySelector("#prevQuestionBtn");
const nextQuestionBtn = document.querySelector("#nextQuestionBtn");
const listeningStatus = document.querySelector("#listeningStatus");
const feedbackPanel = document.querySelector("#feedbackPanel");
const progressSummary = document.querySelector("#progressSummary");
const progressSteps = [...document.querySelectorAll(".progress-step")];
const parentModeBtn = document.querySelector("#parentModeBtn");
const parentDialog = document.querySelector("#parentDialog");
const parentContent = document.querySelector("#parentContent");

let activeTopic = null;
let questionIndex = 0;
let hintLevel = 0;
let recognition = null;
let listening = false;

function renderTopics() {
  topicGrid.innerHTML = topics.map(topic => {
    return '<button class="topic-card" data-topic="' + topic.id + '" type="button">' +
      '<div class="topic-icon">' + topic.icon + '</div>' +
      '<h3>' + topic.title + '</h3>' +
      '<p>' + topic.summary + '</p>' +
    '</button>';
  }).join("");
  topicGrid.querySelectorAll(".topic-card").forEach(btn => {
    btn.addEventListener("click", () => openTopic(btn.dataset.topic));
  });
}

function openTopic(id) {
  activeTopic = topics.find(t => t.id === id);
  questionIndex = 0;
  hintLevel = 0;
  homeView.classList.remove("active");
  practiceView.classList.add("active");
  renderQuestion();
}

function renderQuestion() {
  const item = activeTopic.questions[questionIndex];
  topicBadge.textContent = activeTopic.title;
  topicTitle.textContent = "Practice with the SEPS Coach";
  questionCounter.textContent = "Question " + (questionIndex + 1) + " of " + activeTopic.questions.length;
  stimulusEmoji.textContent = activeTopic.icon;
  stimulusText.textContent = activeTopic.stimulus;
  stimulusActions.innerHTML = activeTopic.actions.map(x => '<div class="stimulus-action">' + x + '</div>').join("");
  questionText.textContent = item.q;
  coachText.textContent = "Think for a few seconds, then answer in your own words. You do not need a perfect answer.";
  transcript.value = "";
  feedbackPanel.classList.add("hidden");
  feedbackPanel.innerHTML = "";
  hintLevel = 0;
  updateProgress({});
  prevQuestionBtn.disabled = questionIndex === 0;
  nextQuestionBtn.textContent = questionIndex === activeTopic.questions.length - 1 ? "Finish Topic ✓" : "Next Question →";
}

function normalize(s) {
  return s.toLowerCase().replace(/[’']/g, "'").replace(/[^a-z0-9\s'-]/g, " ");
}

function hasAny(text, list) {
  return list.some(x => text.includes(x.toLowerCase()));
}

function analyseAnswer() {
  const raw = transcript.value.trim();
  const text = normalize(raw);
  const item = activeTopic.questions[questionIndex];
  const wordCount = raw.split(/\s+/).filter(Boolean).length;

  const result = {
    state: wordCount >= 5 && hasAny(text, item.cues.state),
    explain: hasAny(text, item.cues.explain),
    personal: hasAny(text, item.cues.personal),
    suggestion: hasAny(text, item.cues.suggestion)
  };

  if (wordCount >= 18 && !result.state) result.state = true;

  return { result, wordCount };
}

function updateProgress(result) {
  const keys = ["state","explain","personal","suggestion"];
  let count = 0;
  keys.forEach((key, i) => {
    const btn = progressSteps[i];
    btn.classList.remove("done","active");
    if (result[key]) {
      btn.classList.add("done");
      count++;
    }
  });
  const firstMissing = keys.findIndex(k => !result[k]);
  if (firstMissing >= 0 && Object.keys(result).length) progressSteps[firstMissing].classList.add("active");
  progressSummary.textContent = count + " / 4";
}

function guideAnswer() {
  const raw = transcript.value.trim();
  if (!raw) {
    coachText.textContent = "Start with just one sentence. Tell me your main answer first.";
    showHint("state", 0);
    return;
  }

  const analysis = analyseAnswer();
  const result = analysis.result;
  const wordCount = analysis.wordCount;
  updateProgress(result);

  const missing = ["state","explain","personal","suggestion"].filter(k => !result[k]);
  feedbackPanel.classList.remove("hidden");

  if (!missing.length) {
    coachText.textContent = "Well done. You covered all four SEPS parts. Now try saying the whole answer once more smoothly, without looking at the hints.";
    feedbackPanel.innerHTML =
      '<h3>Great job 👏</h3>' +
      '<p class="good">You covered State, Explain, Personal Experience and Suggestion.</p>' +
      '<p>Try one final spoken attempt. Aim for clear sentences and a natural pace rather than memorising the model answer.</p>';
    return;
  }

  const next = missing[0];
  const labels = {
    state: "State",
    explain: "Explain",
    personal: "Personal Experience",
    suggestion: "Suggestion"
  };
  const prompts = {
    state: "Give a direct answer to the question.",
    explain: "Tell me why. What makes your answer important or helpful?",
    personal: "Think of one real event. Who was there? What happened? What did you do?",
    suggestion: "Finish by saying what you, other children, your class or your school could do."
  };

  coachText.textContent = "Good start. Your next SEPS step is " + labels[next] + ". " + prompts[next];
  const completed = ["state","explain","personal","suggestion"].filter(k => result[k]).map(k => labels[k]).join(", ") || "a beginning";
  feedbackPanel.innerHTML =
    '<h3>Keep building your answer</h3>' +
    '<p><span class="good">You already have:</span> ' + completed + '</p>' +
    '<p><span class="next">Next:</span> ' + labels[next] + ' — try adding one or two sentences.</p>' +
    '<p>' + (wordCount < 12 ? "Your answer is still quite short. Add a reason or a small real-life detail." : "You have enough to keep going. Focus on the missing SEPS part rather than making the answer longer for its own sake.") + '</p>';
}

function showHint(step, level) {
  const item = activeTopic.questions[questionIndex];
  const labels = {state:"State", explain:"Explain", personal:"Personal Experience", suggestion:"Suggestion"};
  const generic = {
    state: [
      "Answer the question directly in one sentence.",
      'Try this beginning: “' + item.starters.state + '”',
      "Choose one clear idea from the stimulus and say what you think or do."
    ],
    explain: [
      "Ask yourself: Why is this important? How does it help?",
      'Try this beginning: “' + item.starters.explain + '”',
      "Use a joining word such as because, so, or this helps because."
    ],
    personal: [
      "Think of home, school, recess, CCA, your neighbourhood or a family outing.",
      'Try this beginning: “' + item.starters.personal + '”',
      "Say who was there, what happened and what you did. Two or three simple sentences are enough."
    ],
    suggestion: [
      "Think: What should people do next time?",
      'Try this beginning: “' + item.starters.suggestion + '”',
      "Give one practical action instead of a very general idea."
    ]
  };
  const msg = generic[step][Math.min(level,2)];
  coachText.textContent = labels[step] + " hint: " + msg;
  progressSteps.forEach(x => x.classList.remove("active"));
  progressSteps[["state","explain","personal","suggestion"].indexOf(step)].classList.add("active");
}

function giveStuckHint() {
  const result = analyseAnswer().result;
  const next = ["state","explain","personal","suggestion"].find(k => !result[k]) || "state";
  showHint(next, hintLevel);
  hintLevel = Math.min(hintLevel + 1, 2);
}

function setupSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    speakBtn.textContent = "⌨️ Type Answer";
    speakBtn.addEventListener("click", () => transcript.focus());
    return;
  }

  recognition = new SpeechRecognition();
  recognition.lang = "en-SG";
  recognition.interimResults = true;
  recognition.continuous = true;

  recognition.onstart = () => {
    listening = true;
    listeningStatus.textContent = "Listening…";
    speakBtn.textContent = "⏹ Stop Speaking";
  };

  recognition.onresult = event => {
    let finalText = "";
    let interim = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const t = event.results[i][0].transcript;
      if (event.results[i].isFinal) finalText += t + " ";
      else interim += t;
    }
    if (finalText) transcript.value = (transcript.value + " " + finalText).trim();
    listeningStatus.textContent = interim ? "Listening: " + interim : "Listening…";
  };

  recognition.onerror = () => {
    listeningStatus.textContent = "Microphone stopped. You can type instead.";
    listening = false;
    speakBtn.textContent = "🎤 Start Speaking";
  };

  recognition.onend = () => {
    listening = false;
    listeningStatus.textContent = "";
    speakBtn.textContent = "🎤 Start Speaking";
  };

  speakBtn.addEventListener("click", () => {
    if (listening) recognition.stop();
    else recognition.start();
  });
}

function renderParentMode() {
  if (!activeTopic) {
    parentContent.innerHTML =
      '<div class="parent-block">' +
      '<h3>How the coach works</h3>' +
      '<p>It encourages Xiao Wei to speak first, then checks for the four SEPS components. The automatic check is intentionally simple and supportive; it is a practice guide, not an exam score.</p>' +
      '</div>';
  } else {
    const item = activeTopic.questions[questionIndex];
    parentContent.innerHTML =
      '<div class="parent-block"><h3>Question</h3><p>' + item.q + '</p></div>' +
      '<div class="parent-block"><h3>Useful sentence starters</h3><p>' +
      '<strong>State:</strong> ' + item.starters.state + '<br>' +
      '<strong>Explain:</strong> ' + item.starters.explain + '<br>' +
      '<strong>Personal Experience:</strong> ' + item.starters.personal + '<br>' +
      '<strong>Suggestion:</strong> ' + item.starters.suggestion + '</p></div>' +
      '<div class="parent-block"><h3>Suggested answer</h3><p>' + item.model + '</p></div>' +
      '<div class="parent-block"><h3>What to listen for</h3><p>A direct answer, one clear reason, a believable personal example with concrete details, and one practical suggestion. Natural speaking is more important than using difficult vocabulary.</p></div>';
  }
}

backBtn.addEventListener("click", () => {
  if (recognition && listening) recognition.stop();
  practiceView.classList.remove("active");
  homeView.classList.add("active");
  activeTopic = null;
});

checkBtn.addEventListener("click", guideAnswer);
stuckBtn.addEventListener("click", giveStuckHint);
clearBtn.addEventListener("click", () => {
  transcript.value = "";
  hintLevel = 0;
  feedbackPanel.classList.add("hidden");
  updateProgress({});
  coachText.textContent = "Try again from the beginning. Start with a clear answer to the question.";
});
prevQuestionBtn.addEventListener("click", () => {
  if (questionIndex > 0) {
    questionIndex--;
    renderQuestion();
  }
});
nextQuestionBtn.addEventListener("click", () => {
  if (questionIndex < activeTopic.questions.length - 1) {
    questionIndex++;
    renderQuestion();
  } else {
    coachText.textContent = "Topic complete! Choose another topic and practise again another day.";
    feedbackPanel.classList.remove("hidden");
    feedbackPanel.innerHTML = "<h3>Topic complete ⭐</h3><p>Good practice. Repeating the same topic later without looking at the hints will help you become more fluent.</p>";
  }
});
parentModeBtn.addEventListener("click", () => {
  renderParentMode();
  parentDialog.showModal();
});
progressSteps.forEach((btn, i) => {
  const key = ["state","explain","personal","suggestion"][i];
  btn.addEventListener("click", () => showHint(key, 1));
});

renderTopics();
setupSpeechRecognition();