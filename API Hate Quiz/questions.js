// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "What does AAPI stand for?",
    answer: "Asian Americans and Pacific Islanders",
    options: [
      "Asian American Pride Institution",
      "Asians Against Inequity and Inequality",
      "Asian Americans and Pacific Islanders",
      "Americans and Pacific Islanders"
    ]
  },
  {
    numb: 2,
    question: "What is AAPI hate?",
    answer: "Racially motivated violence directed at AAPI individiuals throughout the United States, and all over the world.",
    options: [
      "Racially motivated violence directed at AAPI individiuals throughout the United States, and all over the world.",
      "Non-hate attacks against AAPI individuals in the United States and the world.",
      "A made up term by Asian Americans in order to make themselves seem oppresed.",
      "AAPI hate is a general term that can be used when reffering to racist attacks on any race."
    ]
  },
  {
    numb: 3,
    question: "What can AAPI hate be classified as?",
    answer: "Racist hate crimes.",
    options: [
      "Racist hate crimes.",
      "Terrorist attacks.",
      "Discriminatory attacks un-related to race.",
      "Avoidable self-inflicted attacks."
    ]
  },
  {
    numb: 4,
    question: "Why is it important to combat AAPI hate?",
    answer: "All of the above.",
    options: [
      "To protect people and their physical and mental health.",
      "To create a safe and welcoming environment for all.",
      "To inspire and cultivate an accepting and inclusive society.",
      "All of the above."
    ]
  },
  {
    numb: "🎉",
    question: "Good Job! You're knowledge of the issue has increased! Here's are some videos to learn more:",
    answer: "answer",
    options: [
      "What does AAPI stand for?",
      "What is AAPI hate?",
      "What can AAPI hate be classified as?",
      "Why is it important to combat AAPI hate?",
    ]
  },
  {
    numb: 6,
    question: "Why is AAPI hate on the rise?",
    answer: "As a result of hateful stereotypes and incorrect notions of AAPI people being responsible for the start of the COVID-19 pandemic.",
    options: [
      "AAPI hate has always existed, it has just never been talked about. There has not been a significant rise in occurences.",
      "As a result of hateful stereotypes and incorrect notions of AAPI people being responsible for the start of the COVID-19 pandemic.",
      "AAPI hate is on the rise as a result of a general rise in crime and hate acts; it has nothing to do with AAPI people in specifc.",
      "AAPI hate is not actually on the rise, this is just a piece of false news perpertuated by social justice warriors."
    ]
  },
  {
    numb: 7,
    question: "How has the begining of the COVID-19 pandemic affected AAPI hate?",
    answer: "'For Asian Americans [and Pacific Islanders], the spike in attacks and the rising fear came with the global pandemic and the racist rhetoric from the Trump administration, including the use of derogatory terms like 'Kung Flu.''",
    options: [
      "Yes, COVID-19 has lead to an increase of AAPI hate crimes, however, this is justifiable because the pandemic has been tough for everyone.",
      "The general population has been more on edge, and aggresive as a result of the COVID-19 pandemic, and as such, everyone has been more hateful.",
      "COVID-19 has not impacted AAPI hate, and there has not been any change in the frequency of hate crimes and attacks.",
      "'For Asian Americans [and Pacific Islanders], the spike in attacks and the rising fear came with the global pandemic and the racist rhetoric from the Trump administration, including the use of derogatory terms like 'Kung Flu.''"
    ]
  },
  {
    numb: 8,
    question: "Are AAPI people really at fault for these baseless labels?",
    answer: "Of course not. The COVID-19 virus might have started in China, however, this does not mean that all AAPI people are at fault for this deadly disease.",
    options: [
      "This is up for debate. They are at some fault for the pandemic, however, it is not entirely their fault.",
      "Yes, since COVID-19 started in China, logically, this means that AAPI people are responsible for the virus.",
      "Of course not. The COVID-19 virus might have started in China, however, this does not mean that all AAPI people are at fault for this deadly disease.",
      "No, of course not; however, there is no real reason."
    ]
  },
  {
    numb: 9,
    question: "How do racist stereotypes perepetuate AAPI hate?",
    answer: "'The roots of anti-Asian sentiment in the U.S. can be traced as far back as the concept of “yellow peril” and the Chinese Exclusion Act that treated Asian immigrants as threats to national security in the 1880s.'",
    options: [
      "'The roots of anti-Asian sentiment in the U.S. can be traced as far back as the concept of “yellow peril” and the Chinese Exclusion Act that treated Asian immigrants as threats to national security in the 1880s.'",
      "'There is a stereotype and an assumption that Asian Americans have class privilege, that they have high socioeconomic status and education, and that any discrimination doesn’t really happen or feel legitimate.' According to this stereotype, they can't be affected by racism.",
      "This is primarily not an issue where stereotypes are in play.",
      "AAPI individuals are generally regarded as having a higher economic and social standing in the USA, so they can not be negatively impacted by racist sterotypes."
    ]
  },
  {
    numb: "🤩🎆",
    question: "Good Job! You're becoming a pro! Why dont you view some videos below to increase your knowledge even more?:",
    answer: "answer",
    options: [
      "Why is AAPI hate on the rise?",
      "How has the begining of the COVID-19 pandemic affected AAPI hate?",
      "Are AAPI people really at fault for these baseless labels?",
      "How do racist stereotypes perepetuate AAPI hate?"
    ]
  },
  {
    numb: 11,
    question: "How has the government, and law enforcement responded to these issues?",
    answer: "All of the above.",
    options: [
      "Unfortuantley, the majority of instances of AAPI hate, are not reported to the police, and as such, often, nothing is done. However, even when reported, AAPI hate is often ignored, and shrugged off by law enforcement.",
      "Many incidents have either not led to arrests or have not been charged as hate crimes, making it difficult to capture with reliable data the extent to which AAPI are being targeted.",
      "Both the government, and law enforcement have been largely unresponsive towards AAPI hate, and have neglected to make a serious effort in order to combat it.",
      "All of the above."
    ]
  },
  {
    numb: 12,
    question: "How has the public responded to these issues?",
    answer: "Fortunatley, as these hate instances have mostly started surging during a time when people are at a hightened awareness of social issues, the public response has been very supportive, and in line with the AAPI community.",
    options: [
      "The public response has largely been negative, and there has been a lack of action, or interst by the public.",
      "The public response has been largely to turn a blind eye, and pretend like nothing is happening.",
      "Fortunatley, as these hate instances have mostly started surging during a time when people are at a hightened awareness of social issues, the public response has been very supportive, and in line with the AAPI community.",
      "The public respone has neither been largely positive or negative, instead, the response has been to ignore the issue untill it goes away."
    ]
  },
  {
    numb: 13,
    question: "How has the AAPI community responded to these issues?",
    answer: "The AAPI community has responsed in justifiable outrage, and there has been a slew of public attention from AAPI celeberties. Furthermore, there have been a plethorough of protests, and outrage, in condemenation of these racist hateful injustices.",
    options: [
      "The AAPI community has generally been negative, and has shunned those who speak out. The greater response has been to accept the injustice as a reality of life.",
      "As we all know from popular stereotypes, AAPI people tend to be more timid and docile, and as such, they have not responded in any way, isntead, choosing to remain silent on the topic, to avoid confrontation.",
      "The AAPI community has responsed in justifiable outrage, and there has been a slew of public attention from AAPI celeberties. Furthermore, there have been a plethorough of protests, and outrage, in condemenation of these racist hateful injustices.",
      "Although the AAPI community has joined together in solidarity, this is not warranted, as this is all a big publicity scheme."
    ]
  },
  {
    numb: 14,
    question: "What can you do?",
    answer: "All of the above, and more.",
    options: [
      "Acknowledge anti-AAPI racism and hate.",
      "Take action, through participating in protests and demonstrations, spreading awareness, and other things.",
      "Bring attention to the issue to those in higher positons of power. This can be achieved by writing to local government officials, or by signing petitions, and getting the attenion of those who can impact the issue on a larger scale than individuals.",
      "All of the above, and more."
    ]
  },
  {
    numb: "🥳",
    question: "Good Job! You're almost an expert on the issue, here are some videos to cement your knowledge:",
    answer: "answer",
    options: [
      "How has the government, and law enforcement responded to AAPI hate?",
      "How has the public responded to AAPI hate?",
      "How has the AAPI community responded to AAPI hate",
      "What can I do about AAPI hate?"
    ]
  }
];