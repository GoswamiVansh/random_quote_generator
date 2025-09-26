const container = document.querySelector(".container")
const div = document.createElement("div")
const button = document.createElement("button")
const bText = document.createTextNode("Quote of a day")
const quoteDiv= document.querySelector(".quote")
button.append(bText)
div.append(button)
container.append(div)

const quotes = ["Talk is cheap. Show me the code. – Linus Torvalds",
    "Programs must be written for people to read, and only incidentally for machines to execute. – Harold Abelson",
    "First, solve the problem. Then, write the code. – John Johnson",
    "Fix the cause, not the symptom. – Steve Maguire",
    "Optimism is an occupational hazard of programming. Feedback is the treatment. – Kent Beck",
    "Before software can be reusable it first has to be usable. – Ralph Johnson",
    "Simplicity is the soul of efficiency. – Austin Freeman",
    "Code is like humor. When you have to explain it, it’s bad. – Cory House",
    "Make it work, make it right, make it fast. – Kent Beck",
    "Experience is the name everyone gives to their mistakes. – Oscar Wilde",
    "Learning to code is learning to create and innovate. – Unknown",
    "The best error message is the one that never shows up. – Thomas Fuchs",
    "Code never lies, comments sometimes do. – Ron Jeffries",
    "In programming, the hard part isn’t solving problems, but deciding what problems to solve. – Paul Graham",
    "The computer was born to solve problems that did not exist before. – Bill Gates",
    "Java is to JavaScript what car is to carpet. – Chris Heilmann",
    "Knowledge is power. Understanding is self-empowerment. – Jim Allchin",
    "Coding is not just code, it’s a challenge to make the machine work. – Unknown",
    "Don’t worry if it doesn’t work right. If everything did, you’d be out of a job. – Mosher’s Law",
    "The function of good software is to make the complex appear simple. – Grady Booch",

    // --- Student Motivation ---
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Education is the most powerful weapon which you can use to change the world. – Nelson Mandela",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
    "Don’t let what you cannot do interfere with what you can do. – John Wooden",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "The secret to getting ahead is getting started. – Mark Twain",
    "Small progress is still progress.",
    "Do something today that your future self will thank you for.",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "The expert in anything was once a beginner.",
    "Winners are not people who never fail, but people who never quit.",
    "Learning never exhausts the mind. – Leonardo da Vinci",
    "The beautiful thing about learning is that no one can take it away from you. – B.B. King",
    "Study while others are sleeping. Work while others are loafing. Prepare while others are playing. Dream while others are wishing. – William A. Ward",
    "There is no substitute for hard work. – Thomas Edison",
    "Your education is a rehearsal for a life that is yours to lead. – Nora Ephron",
    "If you can dream it, you can do it. – Walt Disney",
    "Challenges are what make life interesting. Overcoming them is what makes life meaningful. – Joshua J. Marine",

    // --- Real Life Lessons ---
    "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
    "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "Fall seven times and stand up eight. – Japanese Proverb",
    "Difficulties in life don’t come to destroy you, but to help you realize your hidden potential.",
    "Every accomplishment starts with the decision to try. – John F. Kennedy",
    "Don’t be pushed by your problems. Be led by your dreams.",
    "Strive not to be a success, but rather to be of value. – Albert Einstein",
    "Life is really simple, but we insist on making it complicated. – Confucius",
    "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
    "Dream big and dare to fail. – Norman Vaughan",
    "Sometimes you win, sometimes you learn. – John Maxwell",
    "Don’t count the days, make the days count. – Muhammad Ali",
    "Turn your wounds into wisdom. – Oprah Winfrey",
    "The best way to predict the future is to create it. – Peter Drucker",
    "Tough times never last, but tough people do. – Robert H. Schuller",
    "Believe in yourself and all that you are. – Christian D. Larson",
    "The only person you are destined to become is the person you decide to be. – Ralph Waldo Emerson",
    "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
    "Act as if what you do makes a difference. It does. – William James",

    // --- More Coding Motivation ---
    "Programming is learned by writing programs. – Brian Kernighan",
    "Code is read much more often than it is written. – Guido van Rossum",
    "The best thing about a boolean is even if you are wrong, you are only off by a bit. – Anonymous",
    "You might not think that programmers are artists, but programming is an extremely creative profession. – John Romero",
    "Good code is its own best documentation. – Steve McConnell",
    "Testing leads to failure, and failure leads to understanding. – Burt Rutan",
    "Premature optimization is the root of all evil. – Donald Knuth",
    "Coding is the closest thing we have to superpower. – Drew Houston",
    "Everybody in this country should learn to program a computer, because it teaches you how to think. – Steve Jobs",
    "First learn computer science and all the theory. Next develop a programming style. Then forget all that and just hack. – George Carrette",

    // --- Productivity & Focus ---
    "Focus on being productive instead of busy. – Tim Ferriss",
    "Productivity is never an accident. It is always the result of a commitment to excellence. – Paul J. Meyer",
    "It’s not always that we need to do more but rather that we need to focus on less. – Nathan W. Morris",
    "Ordinary people think merely of spending time, great people think of using it. – Arthur Schopenhauer",
    "Until we can manage time, we can manage nothing else. – Peter Drucker",
    "Don’t confuse activity with productivity. – John Wooden",
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    "Lost time is never found again. – Benjamin Franklin",
    "Small daily improvements lead to stunning results. – Robin Sharma",
    "Focus is the key to success. – Unknown",

    // --- Success & Failure ---
    "Failure is simply the opportunity to begin again, this time more intelligently. – Henry Ford",
    "Don’t be afraid to give up the good to go for the great. – John D. Rockefeller",
    "I never dreamed about success. I worked for it. – Estée Lauder",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "Opportunities don’t happen, you create them. – Chris Grosser",
    "Success seems to be connected with action. Successful people keep moving. – Conrad Hilton",
    "Don’t be embarrassed by your failures, learn from them and start again. – Richard Branson",
    "Success is walking from failure to failure with no loss of enthusiasm. – Winston Churchill",
    "All progress takes place outside the comfort zone. – Michael John Bobak",
    "Great minds discuss ideas; average minds discuss events; small minds discuss people. – Eleanor Roosevelt",

    // --- Life & Growth ---
    "Do one thing every day that scares you. – Eleanor Roosevelt",
    "In the middle of every difficulty lies opportunity. – Albert Einstein",
    "Don’t limit your challenges, challenge your limits.",
    "Growth and comfort do not coexist. – Ginni Rometty",
    "The journey of a thousand miles begins with one step. – Lao Tzu",
    "Change your thoughts and you change your world. – Norman Vincent Peale",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "What we think, we become. – Buddha",
    "The best revenge is massive success. – Frank Sinatra",
    "A smooth sea never made a skilled sailor. – Franklin D. Roosevelt"
];

function getRandomQuote(){
    let random = Math.floor(Math.random() * quotes.length);
    document.body.style.backgroundImage=`url(https://picsum.photos/800/600?random=${random})`
    return quotes[random]
}

function showQuote() {
 const q = getRandomQuote()
 const p = document.createElement("p")
 const pText=document.createTextNode(q)
 p.append(pText)
 quoteDiv.replaceChildren(p)


    

}

button.addEventListener("click", function () {
    showQuote()    
    
   
})
showQuote()


