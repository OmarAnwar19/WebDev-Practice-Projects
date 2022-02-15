//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const score_count = document.querySelector(".score .score_count");

// if startQuiz button clicked
start_btn.onclick = () => {
  info_box.classList.add("activeInfo"); //show info box
};

// if exitQuiz button clicked
exit_btn.onclick = () => {
  window.open(
    "https://docs.google.com/document/d/1iW_iBeHLEks2a2pp0kLQUFF4mzTSE5KvFxfUhz_quaY/edit?usp=sharing",
    "_blank"
  );
  info_box.classList.remove("activeInfo"); //hide info box
};

// if continueQuiz button clicked
continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); //hide info box
  quiz_box.classList.add("activeQuiz"); //show quiz box
  showQuetions(0); //calling showQestions function
  queCounter(1); //passing 1 parameter to queCounter
  startTimer(60); //calling startTimer function
  startTimerLine(0); //calling startTimerLine function
};

let timeValue = 60;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
let score = 0;

let info_array = [5, 10, 15];

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = () => {
  quiz_box.classList.add("activeQuiz"); //show quiz box
  result_box.classList.remove("activeResult"); //hide result box
  timeValue = 60;
  que_count = 0;
  que_numb = 1;
  userScore = 0;
  widthValue = 0;
  score = 0;
  score_count.textContent = score;
  showQuetions(que_count); //calling showQestions function
  queCounter(que_numb); //passing que_numb value to queCounter
  clearInterval(counter); //clear counter
  clearInterval(counterLine); //clear counterLine
  startTimer(timeValue); //calling startTimer function
  startTimerLine(widthValue); //calling startTimerLine function
  timeText.textContent = "Time Left"; //change the text of timeText to Time Left
  next_btn.classList.remove("show"); //hide the next button
  info_btn.classList.remove("show"); //hide the next button
};

// if quitQuiz button clicked
quit_quiz.onclick = () => {
  //window.open("https://stopaapihate.org/", "_blank");
  //window.open("https://www.stopasianhate.info/", "_blank");
  window.open("https://anti-asianviolenceresources.carrd.co/", "_blank");
  //window.open("https://www.marieclaire.com/politics/a35866266/how-to-support-asian-american-community-organizations/", "_blank");
  //window.open("https://www.aacap.org/AACAP/Families_and_Youth/Resource_Libraries/AAPI_Resources.aspx", "_blank");
};

const next_btn = document.querySelector("footer .next_btn");
const info_btn = document.querySelector("footer .info_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = () => {
  if (que_count < questions.length - 1) {
    //if question count is less than total question length
    que_count++; //increment the que_count value
    que_numb++; //increment the que_numb value
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
    info_btn.classList.remove("show"); //hide the next button
  } else {
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    showResult(); //calling showResult function
  }
};

info_btn.onclick = () => {
  let info_links = [
    "https://www.oprahdaily.com/life/a36353830/aapi-meaning-asian-american-pacific-islander/",
    "https://greatergood.berkeley.edu/article/item/why_are_asian_americans_being_attacked_and_what_can_you_do_about_it",
    "https://www.bbc.com/news/world-us-canada-56218684",
    "https://www.npr.org/sections/health-shots/2021/10/13/1045746655/1-in-4-asian-americans-recently-feared-their-household-being-targeted-poll-finds",
    "",
    "https://time.com/5938482/asian-american-attacks/",
    "https://www.hrw.org/news/2020/05/12/covid-19-fueling-anti-asian-racism-and-xenophobia-worldwide",
    "https://www.usatoday.com/story/news/factcheck/2020/03/21/fact-check-did-coronavirus-originate-chinese-laboratory/2881150001/",
    "https://www.health.harvard.edu/blog/anti-asian-racism-breaking-through-stereotypes-and-silence-2021041522414",
    "",
    "https://www.nbcnews.com/news/asian-america/critics-fear-nypd-asian-hate-crime-task-force-could-have-n1239012",
    "https://www.justice.gov/crs/highlights/AAPI-hate-crimes",
    "https://www.nytimes.com/2021/03/18/nyregion/asian-hate-crimes.html",
    "https://www.weforum.org/agenda/2021/06/anti-asian-racism-what-we-can-do-to-combat-it/",
    "",
  ];
  window.open(info_links[que_numb - 1], "_blank");
};

// getting questions and options from array
function showQuetions(index) {
  //if button text is video, open the button text link
  const que_text = document.querySelector(".que_text");

  //creating a new span and div tag for question and option and passing the value using array index
  let que_tag =
    "<span>" +
    questions[index].numb +
    ". " +
    questions[index].question +
    "</span>";
  let option_tag =
    '<div class="option"><span>' +
    questions[index].options[0] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[1] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[2] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[3] +
    "</span></div>";
  que_text.innerHTML = que_tag; //adding new span tag inside que_tag
  option_list.innerHTML = option_tag; //adding new div tag inside option_tag

  const option = option_list.querySelectorAll(".option");

  // set onclick attribute to all available options
  for (i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer) {
  clearInterval(counter); //clear counter
  clearInterval(counterLine); //clear counterLine
  let userAns = answer.textContent; //getting user selected option
  let correcAns = questions[que_count].answer; //getting correct answer from array
  const allOptions = option_list.children.length; //getting all option items

  if (!info_array.includes(que_numb)) {
    if (userAns == correcAns) {
      //if user selected option is equal to array's correct answer
      userScore += 1; //upgrading score value with 1
      score += 10;
      score_count.textContent = score;
      answer.classList.add("correct"); //adding green color to correct selected option
      answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
      console.log("Correct Answer");
      console.log("Your correct answers = " + userScore);
    } else {
      answer.classList.add("incorrect"); //adding red color to correct selected option
      answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
      console.log("Wrong Answer");

      for (i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correcAns) {
          //if there is an option which is matched to an array answer
          option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
          option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
          console.log("Auto selected correct answer.");
        }
      }
    }
    for (i = 0; i < allOptions; i++) {
      option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
  }

  if (info_array.includes(que_numb)) {
    window.open(
      "https://www.youtube.com/results?search_query=" + answer.textContent,
      "_blank"
    );
  } else {
    info_btn.classList.add("show");
  }
  next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult() {
  info_box.classList.remove("activeInfo"); //hide info box
  quiz_box.classList.remove("activeQuiz"); //hide quiz box
  result_box.classList.add("activeResult"); //show result box
  const scoreText = result_box.querySelector(".score_text");
  scoreText.setAttribute("style", "white-space: pre;");

  if (userScore >= 0) {
    // if user scored more than 1
    scoreText.textContent =
      "\r\n You correctly answered: " +
      userScore +
      " out of " +
      (questions.length - 3) +
      " questions.\r\n You scored: " +
      score +
      " points." +
      "\r\n\r\n Now that you have learned a bit about the topic of AAPI \r\n hate, maybe you would like to know how you can help?\r\n Click the 'Links' button below, to open a variety of links \r\n of organizations you can donate to, and ways you can \r\n support the AAPI community.";
  }
}

function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time; //changing the value of timeCount with time value
    time--; //decrement the time value
    if (time < 9) {
      //if timer is less than 9
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero; //add a 0 before time value
    }
    if (time < 0) {
      //if timer is less than 0
      clearInterval(counter); //clear counter
      timeText.textContent = "Time!"; //change the time text to time off
      const allOptions = option_list.children.length; //getting all option items
      let correcAns = questions[que_count].answer; //getting correct answer from array
      for (i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correcAns) {
          //if there is an option which is matched to an array answer
          option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
          option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
          console.log("Time!: Auto selected correct answer.");
        }
      }
      for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
      }
      next_btn.classList.add("show"); //show the next button if user selected any option
    }
  }
}

function startTimerLine(time) {
  counterLine = setInterval(timer, 29);
  function timer() {
    time += 1; //upgrading time value with 1
    time_line.style.width = time + "px"; //increasing width of time_line with px by time value
    if (time > 549) {
      //if time value is greater than 549
      clearInterval(counterLine); //clear counterLine
    }
  }
}

function queCounter(index) {
  //creating a new span tag and passing the question number and total question
  let totalQueCounTag =
    "<span><p></p>Slide <p>" +
    index +
    "</p>of<p>" +
    questions.length +
    "</p></span>";
  bottom_ques_counter.innerHTML = totalQueCounTag; //adding new span tag inside bottom_ques_counter
}
