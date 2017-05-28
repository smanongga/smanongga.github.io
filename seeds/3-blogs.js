
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('blogs').del()
    .then(function () {
      // Inserts seed entries
      return knex('blogs').insert([
        {id: 1,
          tags: 2,
          type: 'blog',
          author: 1,
          title: 'Reflection',
          slug: 'reflection',
          body: '<h2>Q: What are your impressions?</h2> <p>I am not new to the idea of a programming bootcamp. Most of them follow the same structure (Prep, Bootcamp and Career Support) I have friends who have done it and I always wanted to take it but taking 18 weeks from work was not an option and there is none that was close to where I was residing at that time - Beijing, China.</p> <h3>We are all in this together</h3> <p>I like the quote that Shereef mentioned - <em>If you want to go fast, go alone. If you want to go far, go together.</em></p> <p>I feel like that is me sometime. Whenever I get excited, I will dive into it the rabbit hole and do not want anyone to bother. However, I tend to loose the passion quickly because I will ll get stuck at certain point and do not have anyone I can ask for help or I did it because you want to get the badges - who does not like badges???. Also, there is only you can get from interaction through message board. One big reason to do this bootcamp is to have that experience in working with a group of people who share common goal.</p> <h3>It is okay to break things</h3><p>Something that I really need to keep in mind. Even if you break something, hopefully you already learned to follow development best practices and not have to start from scratch.</p> <h2>Q: How do you see yourself engaging with this type of culture?</h2><p>With great enthusiasm and open mind. Though people say that I’m an introvert so this is a good practice for me to be more open.</p><h2>Q: Are you excited to participate in this kind of learning environment? Does it make you nervous?</h2> <p>Definitely excited!! So far people I talked to on Slack have been pretty welcoming! :)</p>',
          summary: 'Watched a really interesting talk done by a guy named Shereef, who started Dev Bootcamp in U.S. This post is about my reflection on his talk.',
          image: '/images/blog/barcelona-public-beach.jpg',
          status: 'Published',
          published_date: '2017-02-21 08:00:00'},
        {id: 2,
          tags: 2,
          type: 'blog',
          author: 1,
          title: 'Time and Habits',
          slug: 'time-and-habis',
          body: '<h2>Time management</h2><p>Out of 3 time management techniques I read, I really like Pomodoro Technique and Timebox.</p><h3>Pomodoro Technique</h3><p>I would use Pomodoro Technique for everyday task where you set a certain amount of time to finish a task and not let any kind of distraction get in your way. For me, this means closing email program and unset browser notifications.</p><p>However, the idea of something going off at certain time would definitely scare me while I’m in the midst of concentrating.</p><h3>Timebox</h3><p> I can see this be used when I have bigger project or long term goals to tackle and combine with Pomodoro to tackle the smaller goals. < /p><h2>Habits</h2><p>Sometimes I find it that I need to go on to the next task straight away so that I would feel accomplished but apparently its not the best way to do it for the long run. Having break time is a habit that I need to pick up.</p><p>Things I will try to do for a break session:</p><ul><li>meditation</li><li>walk around a block</li><li>reflection - writing short sentences</li></ul>',
          summary: 'Getting to know different technique of time management and how to improve yourself by adding good habits in your daily life.',
          image: '/images/blog/time-habits-management.jpg',
          status: 'Published',
          published_date: '2017-02-21 08:00:00'},
        {id: 3,
          tags: 1,
          type: 'blog',
          author: 1,
          title: 'Technical Blog - HTML, CSS and DOM Part 1',
          slug: 'technical-blog-html-css-and-dom-part-1',
          body: '<h2>Can you think of an analogy to describe HTML, CSS and the DOM? How would you describe it to your non-technical friend?</h2><p>In human anatomy sense, HTML is used to define the structure of person\'s body. While CSS is used to determine how the body will look like - the color of the eyes, length of hair, etc.</p><p>DOM is a way for someone to see the structure of the human body in a tree like diagram.</p><h2>What is meant by boxifying design?</h2><p>Its to outline each element of the website in a box. This makes it easier for a developer to get the idea how to structure the website layout.</p><h2>What is the box model?</h2><p>Its a term used when people are talking about the layout and design of a HTML webpage. A box represent an HTML element and there are 4 box layers surrounding the element - margin, padding, border and content. When they are assigned, we create space between elements.</p><p><strong>Margin</strong><br />It is the outer most layer of the box model and when values are set, it will create a whitespace outside of the border layer.</p><p><strong>Border</strong><br />This layer specifies how the border of the box representing an element should look like.</p><p><strong>Padding</strong><br />The closest layer to the content and sets space around it.</p><p><strong>Content</strong><br />Layer that contain the content</p>',
          summary: 'Getting to know how HTML, CSS and DOM applies to a website.',
          image: '/images/blog/website-site-structure-box-modeling.jpg',
          status: 'Published',
          published_date: '2017-02-28 08:00:00'},
        {id: 4,
          tags: 1,
          type: 'blog',
          author: 1,
          title: 'Technical Blog - HTML, CSS and DOM Part 2',
          slug: 'technical-blog-html-css-and-dom-part-2',
          body: "<h2>What is grid based design?</h2> <p>It is a design technique that use a series of horizontal and vertical lines in order to arrange content. It started out with print design but also has been adapted for website design.</p> <p>The aim is to make it easier for designer to keep the design the same across pages.</p> <h2>Whats all the hype about responsive webpages?</h2><p>It allows for website to be viewed properly on devices with different size and screen resolution.</p><h2>What is semantic structure?</h2><p>It is a way to help create meaning to content on webpage by different user agents.</p><p>In accessibility, it helps screen reader to navigate the webpage by using the proper heading structure to jump across content.</p><p>For developer, it helps them clearly see the outline the HTML document without making sense of the DIV ID or Class name.</p> <h2>Any other points you found interesting and want to reflect on?</h2> <p>I have come back to my blog as I get to learn more theories and best practices and try to apply what I learn to it. For instance, I will need to update my website because Bootstrap doesn't include HTML5 semantic markup.</p>",
          summary: 'More theories: semantic structure, responsive design and grid based design.',
          image: '/images/blog/website-builder-responsive.jpg',
          status: 'Published',
          published_date: '2017-03-01 08:00:00'},
        {id: 5,
          tags: 2,
          type: 'blog',
          author: 1,
          title: 'Search Inside Yourself - Emotional Intelligence',
          slug: 'search-inside-yourself-emotional-intelligence',
          body: '<h2>What learnings did you take from the chapter?</h2><p>Emotional intelligence was popularized by Daniel Golem. It teaches us on how to manage emotions and behavior that will lead to a positive outcome personally and professionally.</p><h2>How did you find the two minutes of mindfulness?</h2><p>Not quite sure if meditation is for me but I like to use it as a way to train my focus / clear my thoughts before I do things that require concentration - E.g: studying.</p>',
          summary: 'Concept of emotional intelligence.',
          image: '/images/blog/emotional-intelligence.jpg',
          status: 'Published',
          published_date: '2017-03-01 08:00:00'},
        {id: 6,
          tags: 1,
          type: 'blog',
          author: 1,
          title: 'Technical Blog - Mobile Design and Frameworks',
          'slug': 'technical-blog-mobile-design-frameworks',
          body: "<h2>What a responsive site is, and why responsiveness is important.</h2> <p>A site is considered responsive when it can adapt itself to the different type of devices (desktop, laptop, desktop, tablet, smartphone, etc) while managing usability and readability for the user. In practice, we will use the following approach:</p> <h3>Fluid grids and Flexible Images</h3> <p>When we deal with layout or image, we have to remember that we will not use fix measurement like px (pixel) but will use % (percentage) or em (Ems) for width or height instead.</p> <h3>Media Queries</h3> <p>Another approach is to use media queries to target the device’s width and apply the appropriate style. It can also load a different style sheet based on type of media. For instance, when a user want to print the website, we give them a printer-friendly version rather than the default style sheet.</p> <h2>What mobile first design is, and why it is important.</h2> <p>It is different approach to design a website. Usually we would design website by focusing on desktop and then trickle down to the smaller devices.  Mobile first design is the other way around. </p><h2>What frameworks are, and their pros and cons.</h2><p>Framework is meant to help you code faster and save time by allowing you to re-use code onto your project - you don’t have to start from scratch. Usually frameworks, the good ones are a collaboration by many developers or backed by a company so you can be sure they are tested and will work - no need too worry much about browser compatibility.</p> <p> However, since you are using someone else’s code, you will have to follow their standard. This can be small and easy to learn or it change your entire work process. </p><h2>What a wireframe is and why we use it.</h2> <p>Wireframe is a blueprint of your website. People use this to visually see the basic structure of the website without focusing on the design details like color scheme, logo, icons, etc.</p> <h3>Desktop Version</h3>",
          summary: "This week we've taken a look at the concept of Responsive Design and Mobile First Design, what pro and cons for using Frameworks and creating wireframe of our blog. Wow.",
          image: '/images/blog/responsive-vs-mobile-first-webdesign.jpg',
          status: 'Published',
          published_date: '2017-03-10 08:00:00'},
        {id: 7,
          tags: 2,
          type: 'blog',
          author: 1,
          title: 'Meditation Process',
          slug: 'meditation-process',
          body: '<h2>How did the \'process over product\' concept affect the way you tackled the site redesign and rebuild?</h2><p>I actually didn’t read "Process over product" material before I tackled this task.  Its hard for me not to be perfect because I feel like this assignment should be easy. </p><h2>What did you think about meditation before reading chapter 2?</h2><p>That it somehow related to Buddhism since my mother-in-law is a believer and follow the religion. What she said about the benefits of meditation has brought her were pretty much the same as the book. I never seen her doing meditation since she does this early in the morning but she said she also does it at work in front of the computer. </p><p>I think she really is the epitome of someone who has taken meditation to task because she is the calmest/zen-est person I know. </p><h2>What new things have you learnt about meditation?</h2><p><strong>\"there is no such thing as a bad meditation\" </strong> … that\'s a good one.</p><p><strong>\"It implies that happiness is not something that you pursue; it is something you allow. Happiness is just being.\</strong></p> <h2>Did any of the suggested meditation techniques stand out to you?</h2><p>I like the four steps to manage distraction (1. Acknowledge, 2. Experience without judging or reacting. 3. If you need to react, continue maintaining mindfulness. 4. Let it go.) </p><p>I can see this apply to managing anger or critiques. Sometimes we are quick to react and get all worked up on things that maybe aren\'t worth the stress.</p><h2>Any other musings?</h2><p>None!</p>',
          summary: 'Reflection on Chapter 2 from Search Within Yourself book.',
          image: '/images/blog/meditation-stones-stacked-together.jpg',
          status: 'Published',
          published_date: '2017-03-12 08:00:00'},
        {id: 8,
          tags: 1,
          type: 'blog',
          author: 1,
          title: 'Javascript Basics',
          slug: 'javascript-basics',
          body: "<h2>How does JavaScript compare to HTML and CSS?</h2><p>Javascript is the third part that makes up a website (at the moment). HTML is a markup language which gives website's content some structure. CSS is the style sheet language which improves the website’s presentation. Javascript provides interactivity for the end user. What I found Javascript different from the other two is that it can store values, create objects, setup re-usable code (function) and handle logic … I’m sure I’m just scratching the surface here.</p><p>A very important part that I have to be aware when using Javascript is that it is case sensitive. E.g: myArray is not equal to MyArray.</p><h2>Explain control flow and loops using an example process from everyday life, for example 'waking up' or 'brushing your teeth'.</h2><p><strong>Control Flow  - Checking to see if condition meets the criteria and if criteria met, will direct your result.</strong><br />Before you can get a loan from a bank, you will need to convince the bank that you are a trustworthy person who is able to pay the loan back.  At the bank, different departments will check your application and check off if individual criteria is met. E.g: Are you old enough to get a loan? If not, do you have a co-signature as a guarantor... the list goes on.</p><p><strong>Loops - Doing same thing until it meets goal.</strong><br />A swimmer who is doing freestyle for 1000 meter in a 50 meter pool. The swimmer will do the same movement where after three strokes he will come up for breath. At every 50 meter, he will flip and swim the other direction until he reaches 1000 meter.</p><h2>Explain the difference between accessing data from arrays and objects.</h2><h3>Accessing data from arrays</h3><p>To access array’s data, you will need to use a number position surrounded by a  square bracket around it. This method is called <strong>Square Bracket Notation</strong>. The first data will start at number 0. </p><pre><code>var mySuperHero = ['Spiderman' , 'Thor' , 'Captain America'];</code></pre><p>In order to call Captain America, we will use mySuperHero[<strong>2</strong>] since he is in position 2.</p><h3>Accessing data from Object</h3><p>There are two ways to do this. First one is the above method - Square Bracket Notation. However, rather than specifying a number, you will use the data label.</p><pre><code>var person = {\"First Name\": \"Sam\", \"Last Name\": \"Manongga\"};/* To call the value Sam */person[\"FirstName\"]; // Sam</code></pre><p>Second method is where you use the name of the data label you want to access. The method is known as <strong>Dot Notation</strong>.</p><pre><code>var person = {firstName: \u201CSam\u201D, lastName: \u201CManongga\u201D}; /* To call the value Sam */ person.firstName </pre></code><h2>Explain what functions are and why they are useful.</h2><p>Functions in Javascript allow you to group a set of code together and to re-use the grouped code in different parts of your program. This will make your code  more manageable and structured. Example: In case there is an error, you can do faster debugging by pinpointing the faulty function instead of reading line by line.</p>",
          summary: 'Reflection on week 4. Our cohort finally took a first dip into Javascript.',
          image: '/images/blog/i-heart-js.jpg',
          status: 'Published',
          published_date: '2017-03-14 08:00:00'},
        {id: 9,
          tags: 2,
          type: 'blog',
          author: 1,
          title: 'Mindfulness Conversation',
          slug: 'mindfulness-conversation',
          body: "<h2>What did you learn from your 'mindfulness conversation'? How did the other person find it?</h2><p>I never knew this be part of mindfulness. I have been practicing this for a bit as part improving communication with my partner. This exercise helps me improve how to convey my ideas/message to someone who isn’t technical. Also vice versa. I have been able to know more about what my partner job entails and things like planning policies at Auckland City Council - yikes. I thought I was good at listening to people because I find that I’m more of a listener than a talker. Once, I noticed that my mind was wondering away when we did the mindfulness conversation. Before that, I was working on a coding practice and I wasn’t aware that I was too hyped up so my mind wandered away thinking of ways to finish my program. As expected, I didn't do so well when I had to do looping.</p><h2>Which of the three suggested techniques will you use to sustain your practice?</h2><p>Setting a realistic goal so that you don’t set yourself to failure. We commit to have mindfulness conversation at least once during the weekend. Also that one breath a day is good start for me.</p><h2>Any other musings?</h2><p>I wonder if the walking meditation is the same as if you are running (jogging pace) on a treadmill and you find sort of calmness - you are in your zone and everything happening around you disappears. You stop being aware of the gym music but aware of what you are doing - putting one foot in front of the other, keeping up with your breathing and maintain good form. </p><p>I made a Google search “Running on treadmill mindfulness” and it looks like I’m not the only one :)</p><p><a href=\"https://www.google.co.nz/?gfe_rd=cr&ei=XlTIWKSeEfDDXqvMoegE#q=running+on+treadmill+mindfulness&*\r\n\" target=\"_blank\">https://www.google.co.nz/?gfe_rd=cr&ei=XlTIWKSeEfDDXqvMoegE#q=running+on+treadmill+mindfulness&*</a></p>",
          summary: "This week's Search Inside Yourself chapter introduces us to mindfulness conversation concept.",
          image: '/images/blog/mindfulness-conversation.jpg',
          status: 'Published',
          published_date: '2017-03-15 08:00:00'},
        {id: 10,
          tags: 1,
          type: 'blog',
          author: 1,
          title: 'Problem Solving Techniques',
          slug: 'problem-solving-techniques',
          body: "<h2>Tell your non-tech friend a story about a time you got blocked on a simple problem and solved it</h2><p>In my  previous job working at a school in Beijing, China, I had to create a program that calculates the <a href=\"https://en.wikipedia.org/wiki/Air_quality_index\" target=\"_blank\">Air Quality Index</a> of the area. At that time, Beijing had a serious problem with air pollution and the school administrator wanted to be able to let the teacher know if it was safe to send the students out during break time. They had a machine that spewed out raw data every 15 minutes and those need to be <a href=\"https://en.wikipedia.org/wiki/Air_quality_index#Computing_the_AQI\" target=\"_blank\">calculated</a> and stored in database.</p><p>When I first got the assignment I was a bit nervous because I don’t know where to begin because there were just too many variables and conditions before you can plot them to AQI formula. Doing pseudo coding helped me to map out the structure and be able to spot which code should be grouped together.</p><p>When working on the calculation part, I decided to go try out the formula as if I already had the raw data mapped out.  It worked pretty well during soft launch. However, one day it gave an incorrect answer where it should be “Heavily Polluted”, it gave out “Lightly Polluted”.</p><p>Ok. The thing is that there was no error messages in the console.logging. Previous data were correct. I thought it had to be the condition statement… nope. I tried googling but didn’t see anyone with the same problem or did something similar to what I was doing.</p><p>Since I was the only web developer in the department, I didn’t have anyone to ask for guidance. So, I ended up skyping my brother who is a software engineer and ubergeek. I walked him through my program and then all sudden I got it… Should been easy to solve but I didn’t see it…. I was too focus on thinking that it was a big problem but actually I had the mathematical order of operation wrong. LoLz. </p><p>I also went back to my program after taking a break for a couple of days and I managed to refactor my code... I now value the idea of writing beautiful code :)</p><h2>Problem solving techniques</h2><ul><li><strong>Pseudocode</strong><br /> \u2028This technique is the first I would use when I do programming. I think this is similar to when wire framing a website.</li><li><strong>Trying something\u2028</strong><br />I would use this after as it is to test out the pseudocode.</li><li><strong>Rubber ducky method\u2028</strong><br/>I haven\u2019t tried this one out.</li><li><strong>Reading error messages</strong><br />\u2028Method that I have started using. If I don\u2019t know the message then I would search what the error message means but most of the time, its pretty straight forward.</li><li><strong>Console.logging\u2028</strong><br />I think this one is useful too and I\u2019ve done it while working with DOM manipulation task to see if it output the correct CSS class</li><li><strong>Googling\u2028</strong><br />Definitely a to go method to problem solving. This will be the last resort before I go ask a person.</li><li><strong>Asking your peers for help</strong><br />\u2028I haven\u2019t tried this one out but I think I would definitely be doing it.</li><li><strong>Asking coaches for help</strong><br />\u2028Same.</li><li><strong>Improving your process with reflection</strong><br />\u2028I have done it every week as part of the assignment not sure if I would do it unless this become a habit.</li></ul><h2>Explain to your non-tech friend</h2><ul><li><strong>.map()</strong></br />\u2028It takes array and function as arguments. Then applies the function to every content in the array. When successful, it will returns the new array content.</li><li><strong>.filter()\u2028</strong></br />\u2028A method to remove unwanted content in array based on a condition</li><li><strong>.reduce()</strong></br />\u2028\u2028A function to combine each content of an array from left to right</li></ul>",
          summary: 'Knowing problem solving techniques is a step of becoming a competent developer.',
          image: '/images/blog/collaborative-problem-solving.jpg',
          status: 'Published',
          published_date: '2017-03-29 08:00:00'},
        {id: 11,
          tags: 2,
          type: 'blog',
          author: 1,
          title: 'Mindfulness and Self Awareness',
          slug: 'mindfulness-self-awareness',
          body: "<h2>What is the relationship between mindfulness and self awareness?</h2><p>The book says that it is the same thing and that they are both trainable. </p><p>Mindfulness means paying attention in a particular way - on purpose, in the present moment and non-judgmentally - Daniel Goleman</p><p>Self-awareness is a neutral mode that maintains self-reflectiveness even in the midst of turbulent emotions. - Jon Kabat-Zinn</p><p>With understanding of mindfulness, a person is able to look at their own strengths, weaknesses and emotions without judgement. After that, they can get a more accurate picture of themselve without being clouded by distractions or feelings.</p><h2>Try at least one of the self awareness practices from the chapter (Body Scan, Journaling). What was your experience of it? How did you feel?</h2><p>I did Body Scan twice this week. The first time was on Monday. I wasn’t sure what I was doing or what I was going to expect from it. I gave up after minute 5 and just went back to my normal meditation. I thought meditation was already enough for me and I couldn’t be bothered with this. Beside, I also had a lot of assignments that I need to finish. </p><p>The second time was on Wednesday. I told myself I should give another try so just that I could write something about it. It happened again… first 5 minutes nothing. Told myself not going to think about it and just feel… then all the sudden, I could feel slight throbbing near the temple and forehead  - not in a negative way. I guess what I was feeling blood circulate through my head. Its like when you put your finger on your wrist you can feel the vein pumping… interesting but whatever. </p><p>The other sensation I felt was on my lower back. I felt slight discomfort. I think this happened because I haven’t gone to gym more than a week now. </p><p>I think I would like to incorporate Body Scan with the meditation so I can be aware what's going on with me physically. I also notice that since I tried meditation I'm more aware on how I sit infront of the computer. I keep fixing my sitting posture.</p><h2>What did you take away from the 'My Emotions are Not Me' section?</h2><p>I think its accurate. We are not our emotion. Emotions can be different from time to time - it comes and goes. Its not permanent so using I am ___ is not right. </p>",
          summary: 'With understanding of mindfulness, a person is able to look at their own strengths, weaknesses and emotions without judgement. After that, they can get a more accurate picture of themselves without being clouded by distractions or feelings.',
          image: '/images/blog/regain-your-self-confidence.jpg',
          status: 'Published',
          published_date: '2017-03-29 08:00:00'},
        {id: 12,
          tags: 1,
          type: 'blog',
          author: 1,
          title: 'Javascript Language',
          slug: 'javascript-language',
          body: "<h2>Explain to a non-tech friend what Scope is</h2> <p>In a  non-programming context, a scope is similar to how laws/regulations work in a country. The central government defines a rule that you have to be 21 years old to vote. This rule applies to every level of local government -  states > city > town > borough > neighborhood. This is what we call a Global Scope. When a lower level government defines a rule, it is called Local Scope because local government can’t dictate nationally and same rule can have different meaning to other states. Example: State of New York, when it comes to getting your learner permit, you have to be 16 years old. However, the state of California, the legal age is 15 1/2. </p><h2>How does it work in JavaScript</h2><p>In Javascript term, we are talking about the visibility and accessibility of your variables/ functions/ objects inside the program. Knowing their scope helps to prevent bugs and unexpected behavior.</p><h3>Global Scope</h3> <p>Anything that isn’t declared inside a function will automatically have global scope. It exists as long as the program runs and is accessible within function.</p> <b>Variable</b>\r\n<pre><code>\r\n var name = \u201CSam\u201D;\r\n\r\n function helloName() {\r\n return name;\r\n}\r\n\r\n helloName();//Sam\r\n </code></pre>\r\n <b>Function</b>\r\n <pre><code>\r\n function helloName() {\r\n console.log('Sam');\r\n }\r\n\r\n function executeHelloName() {\r\n helloName();\r\n}\r\n\r\n executeHelloName(); // Sam\r\n </code></pre>\r\n <h3>Local Scope</h3>\r\n<p>Anything that lives inside a function will only exist as long the function is called and will be deleted after the function is finished. It can also have the same name and each retains its own value. Modifying one doesn\u2019t modify the others.</p>\r\n <pre><code>\r\n var name = 'Global Scope';\r\n\r\n function helloLocalScope() {\r\n var name = 'Local Scope';\r\n console.log(name);\r\n }\r\n\r\n function helloJavaScript() {\r\n var name = 'Javascript';\r\n console.log(name);\r\n }\r\n\r\n //We will call out the same variable called name\r\n helloLocalScope(); // Local Scope\r\n helloJavaScript(); // Javascript\r\n console.log(name); // Global Scope\r\n  </code></pre>\r\n <p>Scope of inner function contains the scope of the parent function even if the parent function is finished.</p>",
          summary: 'Like in many programming languages, Javascript uses alot of symbols like (), {}, etc. Explain to your non-tech friends what they are and their functions.',
          image: '/images/blog/a-parentheses.jpg',
          status: 'Published',
          published_date: '2017-03-29 08:00:00'},
        {id: 13,
          tags: 2,
          type: 'blog',
          author: 1,
          title: 'Emotional Control and Response',
          slug: 'emotional-control-response',
          body: "<h2>When programming, what are some of your triggers? What causes a disproportionate emotional response?</h2><p>This week I have to catch up on Week 5 and 6 assignments so I was already stressing myself out. One particular assignment triggered my frustration because it didn’t say that we had to do it even though if we didn’t do it, the program won’t work correctly. At the end, I decided to go with it so that the program work as it should.</p><p> I also get frustrated when explanation isn't clear enough... or that they are being so vague you don't know what they are expecting from you.  I noticed it when I was working on freecodecamp assigments, some topics weren't as clearly explained compare to codacademy.com and I was like...why couldn't they explain like that?</p><h2>How did you find the Siberian North Railroad exercise (Stop, Breathe, Notice, Reflect, Respond)?</h2><p>It makes sense. Before SBNRR, I was so drained emotionally because I refused to give up on the problem but was about to scream at the monitor out of frustration. I think using this technique will help clear out my thoughts from any negativity that I have about the problem. Breathing also helps calming my nerve before giving the problem another try. I have been doing that part of the meditation and it make sense that it applies here as well as it clear have positive affect on your body and mind. While the notice part will help me understand why I feel this way. Maybe understand that it is time to find another way to solve the problem or by asking help from someone - Acknowledge your shortcoming without judgement then you will respond appropriately.</p>",
          summary: 'Recognizing what triggers your frustration and how to best deal with it will help you along way.',
          image: '/images/blog/frustrations-solutions.jpg',
          status: 'Published',
          published_date: '2017-03-29 08:00:00'},
        {id: 14,
          tags: 2,
          type: 'blog',
          author: 1,
          title: 'Empathy',
          slug: 'empathy',
          body: "<h2>Have you tried using any of the insight and techniques for growing trust and sincerity? How did it go?</h2><p>Once I was told by a co-worker that I was hard to get to know. She was tasked to be the liaison for her department if they needed change to the online application system or if something wasn’t working right. Whenever she wanted to bring up, most of the time she would say  'Sorry if this is a stupid question as this might be trivial to you… ' or 'Hope this request won’t give you more work…' She said she did that out of fear I would think negatively…  well.. I did think that some of their ideas were insane.</p><p> We clearly started off not on the same boat and without trust. So one day, I decided that rather than having meeting at my desk, we went to the coffee shop since lunch time followed after that. When we finished early, we would continue talking about our work. It didn’t take long for me to know what it involved for Admission department to get a student enrolled. I also empathize whenever she feels frustrated about work. All that information, gave me the motivation on how can I make the system that I build better. It made sense that we share the same goal - if we don’t get students enrolled, both of us will be out of work. On her side, she got to know why some change require couple of days even though it might be small from the user side or why this isn’t such a good idea.</p><h2>Try empathic listening - how did it go?</h2><p>I did the exercise with my partner. It was okay since we are already used to with the previous listen and loop technique. This time I'm required to gauge her feeling by saying 'What I hear you feel….' It was slight different for me because whenever I sense she was down, I had the urge to go put on the kettle because I know she would like to have a tea because it makes things better. I know better not to get up and disrupt the session.</p><h2>How did you find the loving kindness meditation?</h2><p>Never tried this but I think it should be easy to wish happiness to friends and family - those who you love. Currently I don’t have anyone I hate or annoy me… Ok. I’ll try on javascript problem next time :)</p><h2>Complete the political awareness exercise here in writing.</h2><p>There was one situation when I was called out at my previous job for being incompetent in an email thread. My department launched a new portal at the beginning of the school year and one department head came at me saying that I’ve changed the content completely and that he wasn’t consulted. I mentioned to him I only transferred what was from the old portal unless there was already agreement made before. </p><p><b>My view</b><br />He was making accusatory without any basis or evidence. From the logs, I have not made any changes to the page for ages. </p><p><b>His views</b><br />Sam was the only one who could have done it since she developed the portal and is the administrator. Who else could change it? </p><p>At the end, tracked an email from couple of years ago from an old IT Administrator who decided to update the page without committing a log message about his change and then not communicating to the head of the department after that - so both of us were not in the loop.</p><p>Though I have to say that yes both were not at fault but his language in the email was not appropriate and my frustration was that the Administrator who was copied in it didn’t intervene.</p><h2>Any other musings?</h2>None.",
          summary: 'How to develope empathy through understanding and connecting with others.',
          image: '/images/blog/cat-mouse-empathy.jpg',
          status: 'Published',
          published_date: '2017-04-10 08:00:00'},
        {id: 15,
          tags: 1,
          type: 'blog',
          author: 1,
          title: 'Javascript Scope',
          slug: 'javascript-scope',
          body: "<h2>Explain to a non tech friend what Scope is </h2> <p>In a non-programming context, a scope is similar to how laws or regulations work in a country. The central government defines a rule that you have to be 21 years old to vote. This rule applies to every level of local government - states > city > town > borough > neighborhood. This is what we call a Global Scope. When a lower level government defines a rule, it is called Local Scope because local government can not dictate nationally and same rule can have different meaning to other states. Example: State of New York, when it comes to getting your learner permit, you have to be 16 years old. However, the state of California, the legal age is 15 1/2. </p><h2>How does it work in JavaScript</h2><p>In Javascript term, we are talking about the visibility and accessibility of your variables/ functions/ objects inside the program. Knowing their scope helps to prevent bugs and unexpected behavior.</p><h3>Global Scope</h3><p>Anything that is not declared inside a function will automatically have global scope. It exists as long as the program runs and is accessible within function. <b>Variable</b>\r\n <pre><code>\r\n var name = 'Sam';\r\n\r\n function helloName() {\r\n return name;\r\n }\r\n\r\n helloName(); // Sam\r\n </code></pre>\r\n <b>Function</b>\r\n <pre><code>\r\n function helloName() {\r\n console.log('Sam');\r\n }\r\n\r\n function executeHelloName() {\r\n helloName();\r\n  }\r\n\r\n executeHelloName(); // Sam\r\n </code></pre>\r\n <h3>Local Scope</h3>\r\n <p>Anything that lives inside a function will only exist as long the function is called and will be deleted after the function is finished. It can also have the same name and each retains its own value. Modifying one does not modify the others.</p>\r\n<pre><code>\r\n var name = 'Global Scope';\r\n\r\n  function helloLocalScope() {\r\n var name = 'Local Scope';\r\n console.log(name);\r\n }\r\n\r\n function helloJavaScript() {\r\n var name = 'Javascript';\r\n console.log(name);\r\n  }\r\n\r\n//We will call out the same variable called name\r\n helloLocalScope(); // Local Scope\r\n helloJavaScript(); // Javascript\r\n console.log(name); // Global Scope\r\n </code></pre>\r\n <p>Scope of inner function contains the scope of the parent function even if the parent function is finished.</p>",
          summary: 'Understanding Javascript Scope will help you develop cleaner code and stopping the program from doing unexpected behavior.',
          image: '/images/blog/js-scope.jpg',
          status: 'Published',
          published_date: '2017-04-10 08:00:00'},
        {id: 16,
          tags: 2,
          type: 'blog',
          author: 1,
          title: 'Motivation and Purpose',
          slug: 'motivation-purpose',
          body: "<h2>Have you tried using any of the insight and techniques for growing trust and sincerity? How did it go?</h2><p>I’m hoping after bootcamp, I’ll be able to find a job in web development again because I love my old job and had fun working with people who are passionate about what they do and consider their job a hobby. I feel those people who are chill, less stress and eager to learn. When one of us had an AHAH moment, we took pleasure in sharing with one another. Once, I explained to the photographer why systems prefer CSV file type as import and that it would be advantageous to know Excel - Coincidentally, he was testing out software that will help him batch rename his photos and what do you know, it uses CSV file type to match name to the files. Yeah so it was constantly about learning, sharing and having fun… getting paid was the by product. :)</p><h2>From the 'discovering values and higher purpose' exercise, what are your core values? What do you stand for?</h2><p><b>Core Values</b></p><ul><li>Peace</li><li>Life long learner</li><li>Honesty</li><li>Selflessness</li></ul><p><b>Stand for</b></p><ul><li>Fairness</li><li>Sharing</li><li>Compassion</li><li>Open mindedness</li></ul><h2>How did you find the resilience ideas and meditation exercise?</h2><p>The resilience ideas are spot on. Sometimes we are so often focus on the negative experience and failures that we don’t see the accomplishments to get to where we are now. I like knowing what I didn’t do well because it will make it easier for me to know what to learn or focus next.</p><h2>Any other musings?</h2>None.",
          summary: 'Motivation: A reason or reasons for acting or behaving in a particular way. Purpose: a person\'s sense of resolve or determination.',
          image: '/images/blog/what-motivates-us.jpg',
          status: 'Published',
          published_date: '2017-04-11 08:00:00'}
      ])
    })
}
