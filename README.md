# Aim for 9 - Maths GCSE

The purpose of this website is to analyse the skill level of students aiming for a Grade 9 in their GCSE Maths and then provide them with specific places they can go to improve their level based on how they scored and how they answered the quiz and questionnaire. 

This is to complement my business "Maths Tutoring with Amy" and could potentially be linked to the website at a later date. 

[Deployed site here]() 

![Am I Responsive Screenshot](./images/am-I-responsive.png)

## Table of contents

1. [UX Design](#ux-design-1)
   - 
   - [Strategy - User Stories](#strategy---user-stories) 
   - [Strategy - Business Goals](#strategy---business-goals) 
   - [Strategy - Importance vs Viability](#strategy---importance-vs-viability)
   - [Scope - How will the website meet the user stories and business goals](#scope---how-will-the-website-meet-the-user-stories-and-business-goals)
   - [Scope - Content](#scope---content)
   - [Structure](#structure)
   - [Skeleton - Wireframes](#skeleton---wireframes)
   - [Surface - Design Choices](#surface---design-choices)

2. [Logic Planning](#logic-planning-1)
   -

3. [Features](#features-1)
   -
   - [General Overview](#general-overview)
   - [Header](#header)
   - [Introductory Text](#introductory-text)
   - [Modules Button](#modules-button)
   - [Starting Section Input](#starting-section-input)
   - [Question Section](#question-section)
   - [Answer Section](#answer-section)
   - [Restart Assessment Button](#restart-assessment-button)
   - [Logo Button](#logo-button-in-header)
   - [End Assessment Button](#end-assessment-button)

3. [Tools and Technologies Used](#tools-and-technologies-used-1)
   -

4. [Testing](#testing-and-validation)
   -

5. [Deployment and Local Development](#deployment-and-local-development-1)
   -
6. [Credits](#credits-1)
   -
   * [Images](#images)


   * [Code](#code)


   * [Content](#content)

7. [Acknowledgments](#acknowledgments-1)
   -
## UX Design

### Strategy - User stories

Users will be students who are preparing and revising for their GCSE Maths, are already working at least at a Grade 7 and are aiming for a Grade 9. 

- (A) as a user, I want an assessment of what I do and do not know
- (B) as a user, I want to be directed to specific resources that I can > use to revise based on where I'm currently at
- (C) as a user, I want to be able to return to the website to see if > I've improved after doing the recommended work
- (D) as a user, I want to be able to skip topics that I already know so I don't waste time completing those questions
- (E) as a user, I want to be able to return to my results at a later date

### Strategy - Business Goals
- as the business owner, I want my students to be more efficient in their revision so they are only revising those topics they currently can't access
- as the business owner, I want to increase visibility of my tutoring services by providing a valuable resource to parents

### Strategy - Importance vs Viability 

| Opportunity/Problem | Importance | Viability
| ----------- | ----------- | ----------- 
| 1. To provide an assessment for all topics required to achieve a grade 9 | 5 | 2 |
| 2. To provide a list all of the topics required to achieve a grade 9 | 5 | 5
| 3. To create personalised revision cards based on what they need to work on | 3 | 2 |
| 4. To provide links to videos on the topics they need to work on | 5 | 5
| 5. To provide practice questions and solutions for the topics they need to work on | 5 | 5
| 6. To have all the videos created by Maths Tutoring with Amy to encourage more visibility of the business | 3 | 3
| 7. To have all the worksheets created by Maths Tutoring with Amy to encourage more visibility of the business | 3 | 1
| Totals | 29 | 23

As these totals are quite different, this has highlighted that not all of these should be implemented. 

#### Adaptations
Opportunity 1's viability is low because the course is large, and to create an assessment covering every aspect of the course would be extremely time consuming and not feasible given the deadline. I will adapt this to be *algebra only*. The reasoning behind this is that algebra is the cornerstone of other topics and would potentially be the most useful to the student. I will remove Opportunity 3, 6, 7 because of time constraints however these can be implemented in the future. 


| Opportunity/Problem | Importance | Viability
| ----------- | ----------- | ----------- 
| 1. To provide an assessment for ALGEBRA topics required to achieve a grade 9 | 5 | 5 |
| 2. To provide a list all of the topics required to achieve a grade 9 | 5 | 5
| 4. To provide links to videos on the topics they need to work on | 5 | 5
| 5. To provide practice questions and solutions for the topics they need to work on | 5 | 5
| Totals | 20 | 20

By adapting one and removing three of the opportunities the totals equal and it has created a more manageable set of goals.

### Scope - how will the website meet the user stories and business goals? 

> #### Business Goal A - I want my students to be more efficient in their revision so they are only revising those topics they currently can't access
The whole premise of the website is to do this for students.

> #### Business Goal B - I want to increase visibility of my tutoring services by providing a valuable resource to parents
Business logo on the page and link to business website appearing at several stages without being overly interfering (business has a no hard-sell policy)


> #### User Story A - I want an assessment of what I do and do not know
- A test or assessment with questions that the student completes, with an option to see if they got it correct at each question. Don't bombard them with hard questions if they got early easy questions wrong (option to skip questions whether by user choice or by assessment). These will be only algebra-based initially. 

> #### User Story B - I want to be directed to specific resources that I can use to revise based on where I'm currently at
- The end of the assessment will produce a Red Amber Green list of all the topics required to get a grade 9 (Algebra) based on the answers provided. 
- The end of the assessment will provide a coherent set of instructions of how to improve. These will be in the form of videos, followed by questions and answers. 

> #### User Story C - I want to be able to return to the website to see if I've improved after doing the recommended work
- a message indicating they can return to the website after the work has completed for a check
- an option at the start to indicate if this is an "initial assessment" or a "return assessment" so that they aren't asked the same questions.

> #### User Story D - I want to be able to skip topics that I already know so I don't waste time completing those questions. 
- have an option to skip the question and indicate if it's because it's too easy or too hard (too hard => need to revise, too easy => don't need to revise)

> #### User Story E - I want to be able to return to my results at a later date

- the user will be given an option to have the results emailed to the recipient

### Scope - content

This is going to be a very content heavy project as the assessment will involve many questions and full, generally written, solutions in addition to instructional and tutorial videos.

**Ideal situation:** all questions, solutions, videos and revision materials will be produced by the business 

**Minimum viable product:** given the time constraints, and the fact that the business is in it's infant stage, most of the content will not be produced by the business but will instead be taken from websites that offer questions and solutions that can be freely used. These will be referenced to the user at every stage to increase traffic to these websites (these websites are mostly not for profit and do lots of good work so promoting and supporting them is important). 

### Structure

There will only be one page on this site in the first instance. 

On entering the website, you are presented with some instructions explaining the purpose of the page, then the following questions:

- What is your name? 
- What is your email address (optional - only to be used to send your results)? 
- First time or returning for a checkup?
- What grade are you currently working at? 

Then the user will be presented with a "start assessment" button. 

When the assessment starts each question will have the following: 
- title with topic name
- question 
- previous button (will take you to the previous question)
- Skip: question is too easy 
- Skip: question is too hard 
- Show answer

When "show answer" is clicked, the user is presented with: 

- Did you get it right? Yes or no.

For consistency, predictability and learnability each question will have the same layout and the buttons will stay in the same place. 

User will get feedback on each button clicked because a visible outcome occures (move to previous questions, answer is revealed, next question is revealed). 

At the end of the assessment, the user will be presented with two outcomes (their name and grade info will added for personalisation):
- an analysis of how they did (table with red/amber/green)
- then revision suggestions based on this 

Email me the results button will appear at the bottom if they would like results sent to them. 

### Skeleton - wireframes

#### Starting Section
![Starting section wirefram](assets/images/readme/starting-section.png)
#### Questions
![Questions wireframe](assets/images/readme/question-page%20.png)
#### Answer Reveal
![Answer Reveal Wireframe](assets/images/readme/answer-reveal-page.png)
#### Results
![Results wireframe](assets/images/readme/results-page.png)

### Surface - Design Choices 

#### Colour Scheme
The colour scheme is in line with that of my business.
![Colour Palette with muted blue green and purple](assets/images/readme/colour-palette.png)


#### Typography 

Alegreya Sans for the headings:
![Alegreya sans font](assets/images/readme/alegraya-sans.png)

Quicksand for the content: 
![Quicksand font](assets/images/readme/quicksand.png)

#### Imagery

There will be minimal imagery in this project. The logo from "Maths Tutoring with Amy" will be used and portrayed on each page: 

![Maths Tutoring with Amy logo](assets/images/readme/logo.png)
![Maths Tutoring with Amy logo and title](assets/images/readme/logo-with-name.png)

## Logic Planning
This is a high-level plan of how I envisage the logic working. 

The content for Grade 9 algebra will be split into "modules" that have "subtopics" of increasing difficulty.

Logic will be as follows: 

Student will start with Module 1, subtopic 1. 
- if the student gets the **answer correct** or they select **"Skip: too easy!** they move onto Module 1, subtopic 2. This subtopic is marked as **"mastered"** and they move onto the **next subtopic**. 
- if the student gets the **answer incorrect** or they select **"Skip: too hard!"** and this is the **first incorrect/hard skip** answer in this module, they still move onto the next question. This subtopic is marked **needs revision** and they move onto the **next subtopic**
- if the student gets the **answer incorrect** or they select **"Skip: too hard!"** and this is the **second incorrect/hard skip** answer in this module, they **skip the remaining subtopics**. This subtopic and all further subtopics in the module are marked **needs revision** and they move onto the **next module**

The logic will continue like this until all subtopics are noted as mastered or need revision.

### Modular and easily updated   
The aim is to ensure that people can easily add extra questions into modules and extra modules into the whole assessment. At the moment, this is designed to be a minimal test on specific algebra topics but could be expanded in the future for extra topics and grade levels. 

I will try to avoid any "hard coding" so that the programme doesn't rely on a specific number of modules or questions in each module.

## Features

### General Overview 

This website has been built as an assessment for Grade 9 students. It is designed as a single-page website that changes based on user interaction. The forward and back buttons cannot be used. 

Every section is responsive for screen sizes down to 320px width.

### Header

The includes the name of the webpage and then the overarching business logo from "Maths Tutoring with Amy". The logo can be clicked to redirect you back to the starting section.

On a small screen:

![Image of header including title "Get a Grade 9 - GCSE Maths" and "Maths Tutoring with Amy" logo](./assets/images/readme/features/header-sm.png)

On a large screen: 
![Image of header including title "Get a Grade 9 - GCSE Maths" and "Maths Tutoring with Amy" logo](./assets/images/readme/features/header-lg.png)

### Introductory Text
This section includes text to explain how the assessment works to guide the users. 

On a small screen: 

![Image of the introductory text](./assets/images/readme/features/intro-text-sm.png)

On a larger screen: 

![Image of the introductory text](./assets/images/readme/features/intro-text-lg.png)

### Modules Button
This is a collapsible button that will show all the modules currently in the test and the number of questions in each: 

On a small screen: 

![Image of the collapsible button opened](./assets/images/readme/features/module-list-sm.[png])

On a larger screen: 

![Image of the collapsible button opened](./assets/images/readme/features/modules-list-lg.png)

### Starting Section Input

This section allows the user to put in their name (not mandatory), their grade (not used but is there to indicate this test is only for Grade 7+), and then a start assessment button.

On a small screen:

![Image of the starting section input fields](./assets/images/readme/features/start-input-sm.png)

On a larger screen: 

![Image of the starting section input fields](./assets/images/readme/features/start-input-lg.png)

The chosen grade is darker than they others and the start assessment button gets a border when hovered over : 

![Image of the start assessment button](./assets/images/readme/features/start-input-button-highlight-lg.png)

### Question section

On a small screen: 

![Image of the question section with title and question below and buttons](./assets/images/readme/features/first-q-sm.png)

On a large screen: 

![Image of the question section with title and question below and buttons](./assets/images/readme/features/first-q-lg.png)

After the first question, a previous question button appears:

![Image of the question section with title and question below and buttons](./assets/images/readme/features/second-q-sm.png)

### Answer section

When the use clicks "show answer" button on the question section the answer appears with the workings shown below.

On a small screen: 

![Image of the answer section with answer and fully worked solution below](./assets/images/readme/features/answer-sm.png)

On a large screen:

![Image of the answer section with answer and fully worked solution below](./assets/images/readme/features/answer-lg.png)

### Restart Assessment Button
When the restart assessment button is clicked a modal appears warning them that their results will be erased - option to continue or restart given.

![Image of the warning modal warning of answers being erased](./assets/images/readme/features/restart-modal-lg.png)

### Logo Button in Header 

When the logo is click in the header a warning is given that this will restart the assessment: 

![Image of the warning modal warning of answers being erased](./assets/images/readme/features/logo-btn-warning.png)

### End Assessment Button 

When the end assessment button is clicked warning is given about all future answers being marked as incorrect: 

![Image of the warning modal warning of all future answers being marked incorrect](./assets/images/readme/features/end-assessment-btn-modal.png)

### Results Section 

The results section is personalised with the name of the person (if they inputted it).

When the assessment is ended js confetti appears over the screen with mathematical emojis: 

![Image of the results page covered by maths emojis](./assets/images/readme/features/confetti.png)

Once that has cleared it look like this on a small screen.

![Image of the results page with collapsed buttons](./assets/images/readme/features/results-sm.png)

On a larger screen: 

![Image of the results page with collapsed buttons](./assets/images/readme/features/results-lg.png)

### Show my my results button

The results of the test are presented in a table that is shown when the show me my results button is clicked. 

On a small screen: 

![Image of the results table under "Show me my results" button](./assets/images/readme/features/show-me-results-sm.png)

On a larger screen: 

![Image of the results table under "Show me my results" button](./assets/images/readme/features/show-me-results-lg.png)

### What can I do to improve button

This button shows a list of websites that can be used to revise these topics as well as directing them to use my website and direct business in that direction: 

On a small screen: 

![Image of the how to improve button not collapsed](./assets/images/readme/features/show-me-results-sm.png)

On a larger screen: 

![Image of the how to improve button not collapsed](./assets/images/readme/features/show-me-results-lg.png)

### Email

At the bottom of the results section is the option to have these results emailed to you. 

On a small screen: 

![Email input section](./assets/images/readme/features/email-results.png)

When the email is entered a spinner appears to show the waiting time before confirming the email has been sent successfully: 

VIDEO PLACEHOLDER

When an invalid email is entered a warning modal appears to notify the user: 

VIDEO PLACEHOLDER

When the email is unsuccessful the user is also warned and then the spinner disappears after button is clicked:

VIDEO PLACEHOLDER

### Example email

This is what the email that is delivered looks like:

![Example email part 1](./assets/images/readme/features/results-email-1.png)
![Example email part 2](./assets/images/readme/features/results-email-2.png)


### Changes from initial planning
### Future implementations




## Tools and Technologies Used
 - Custom HTML and CSS were used throughout.
 <!-- - [Bootstrap v5.1.3](https://getbootstrap.com/docs/5.1/getting-started/introduction/) was used in this project at various points for layout, form styling, creating cards and the navbar. I made some adaptations to the bootstrap styling at various points too. 
 - CSS Flexbox was also used for layout purposes (outside of Bootstrap) - the reason I used Flexbox without Bootstrap was that it felt lighter and more customisable in places in addition to giving me good practice of using both flexbox and bootstrap for layout. 
 - Git for version control
 - Github for saving and storing files
 - VS Code for locally coding my project (to replace the use of online IDE such as Gitpod or Codeanywhere) -->
 - [Google Fonts](https://fonts.google.com/) for the font used in the website
 - Google developer tools to test the website for responsiveness and to fix bugs.
 <!-- - [Picture to people](https://www.picturetopeople.org/text_generator/others/transparent/transparent-text-generator.html "Picture to People website") was used to generate the title with a transparent background that overlays the hero image.  -->
 - [Image Resizer](https://imageresizer.com "Image Resizer Website") was used to compress and resize images. 
 <!-- - [Convertio](https://convertio.co/) for turning jpg to webp -->
 - [Canva](https://canva.com "Canva Website") was used to generate the colour palette. 
 - Google Maps API to embed a map using an iframe.
 <!-- - [Font Awesome](https://fontawesome.com/) was used for all icons used on my page. -->
 - [Am I Responsive?](https://www.google.com/search?q=am+i+responsive&rlz=1C1ONGR_en-GBGB985GB985&oq=am+i+respon&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBggCEEUYQDIGCAMQRRhBMgYIBBBFGDwyBggFEEUYPNIBCDE4NTRqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8) to show how the website looks on different size screens and devices.
 <!-- - WAVE chrome extension for accessibility testing
 - WCAG Contrast checker chrome extension for colour contrast checking
- [W3C Validator](https://validator.w3.org/) for validating HTML and CSS -->


## Testing and Validation



## Deployment and local development

### Deployment

GitHub Pages was used to deploy the live website. The instructions to achieve this are below:

1. Log in to GitHub
1. Find the repository for this project (AmyB173/aimfor9-mathsGCSE)
3. Click on the Settings button at the top of the screen.
4. Click on the Pages button on the left navigation bar.
5. Go to the Build and Deployment section. 
6. Make sure the Source is "deploy from a branch"
7. Go to the Branch section, choose main and /root.
8. Click Save. Your live Github Pages site is now deployed at the URL shown.

### Local Development

#### How to Fork:
To fork the double-seven-guitars repository:

1. Log in to GitHub
2. Go to the repository for this project (AmyB173/aimfor9-mathsGCSE)
3. Click the Fork button on the top right

#### How to Clone

##### In VS Code: 
1. Open VS Code
2. Select "Clone Git repository"
3. Type in https://github.com/AmyB173/aimfor9-mathsGCSE.git 
4. Choose a local destination for the folder
5. Click open

##### In Gitpod 
1. Sign in to Gitpod
2. Select new workspace 
3. Type in https://github.com/AmyB173/aimfor9-mathsGCSE.git 

## Credits

### Images


### Code 



#### General

- To install Bootstrap via npm so that I could do some customisation, I watched this tutorial video: https://www.youtube.com/watch?v=WPAiTlQr7no 
- I used the following websites to learn about MathML, MathJax CDN and MathType for creating accessible and well-presented equations:  
   -  https://www.w3.org/Math/whatIsMathML.html 
   - https://stackoverflow.com/questions/12431339/how-to-write-equations-in-html
   - https://accessibility.oit.ncsu.edu/putting-math-on-the-web-using-mathml-and-html5/
   - [MathJax Documentation](https://docs.mathjax.org/en/latest/basic/mathematics.html)


#### Specific Code 


### Content


## Acknowledgments

