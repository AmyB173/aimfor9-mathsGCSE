
# Bugs, testing and validation

1. [Bugs and Fixes](#bugs-and-fixes)
2. [Testing Plan](#testing-plan) 
3. [Manual Testing](#manual-testing)
4. [Automated Testing](#automated-testing-validation-and-lighthouse-testing)

## Bugs and fixes

### Spinner not disappearing after failed email send

When entering an email at the end, the user is notified if the email failed to send. I encountered the issue of the spinner continuing to show long after this message disappeared. I fixed this by finding the place where the spinner needed to be removed: 

![code showing spinner fix](./assets/images/readme/testing/remove-spinner-fix.png)

### Selecting elements using the ID in jquery

I often has the issue of trying to access the innerHTML of an element with a particular id, but couldn't get it to work. I assumed because id are by nature unique one particular element, that I wouldn't need to give an index, however, I realised that using jQuery to inspect the DOM an array is always returned so I needed to specify the index of 0 even if I was using an id to target it: 

![Code showing how I accessed the innerHTML of an element using the id](./assets/images/readme/testing/jquery-id.png)

### Counting lengths
I was trying to create a function to see if we were at the end of the test. I wanted to count the number of modules and check if I was on the last module. I wanted to count the length of the array containing the modules but kept getting an error that length() wasn't a property of what I was trying to access. I used the following code:

```
modules.find(module => module.name === "module" + currentModuleCode).length
```
However, given the fact I had objects within arrays within objects etc I didn't realise that what I needed to count was in fact just the modules array. 

```
modules.length
```
The above counted the amount of modules so I could check if I was at the end. A silly but time consuming error. However, I used the debugging tool in chrome and developed my knowledge of this a little further. 

### Attempting to install bootstrap and jquery via npm  
I wanted to try and install bootstrap and jquery locally via npm so I could customise Bootstrap via altering the sass variables. Given this worked for bootstrap I tried doing this jquery which worked locally. 

As this is my first time using node modules and installing via npm, I didn't realise that git ignores node_modules and that github pages is designed for static pages and does not generally host the external libraries and frameworks. 

To this end I reverted to using the CDN links for most of this. 

This was a good learning opportunity even if it was costly in terms of time. 



### Equations not displaying properly

Fairly early on, I was testing whether the questions and answers were displaying correctly and the first answer I attempted to put it was appearing without anything following the first number: 

![Equation not displaying properly](./assets/images/readme/testing/equation-not-displaying.png)

I spent a long time using dev tools and tried to change the element from a heading to a paragraph, I tried altering the display properties in case it was being hidden. Eventually, I realised it was how I was using Math Type to generate the MathML code (a rogue enter sign or space was the issue I think) as when I retyped it in Math type and generate new code, it worked.

### Accessibility 

I was initially going to use images to present my equations but I realised this would not be very accessible for people using screen readers and so after some research I decided to use MathML to code equations. See [this](https://www.chhs.colostate.edu/accessibility/best-practices-how-tos/mathml/#:~:text=MathML%20is%20a%20way%20of,text%2Dto%2Dspeech%20software.) page for accessibility of MathML.

### Bootstrap class errors

These were found during validation - see validation section for full details of fix.

## Testing Plan



## Manual Testing

#### Content Testing

<details>

<summary>Initial Tests (partial fail)</summary>

| Content test                                           | Pass/Fail                  |
| ------------------------------------------------------ | -------------------------- |
| All questions match all answers                        | Pass                       |
| All answers match solution                             | Fail (final question)      |
| All question titles correspond to the question content | Fail (Module 3, Question 4) |
</details>
<details>
<summary>After making changes (all pass)</summary>

| Content test                                           | Pass/Fail                  |
| ------------------------------------------------------ | -------------------------- |
| All questions match all answers                        | Pass                       |
| All answers match solution                             | Pass     |
| All question titles correspond to the question content | Pass |

</details>

#### Feature Testing

## Automated Testing (Validation and Lighthouse Testing)

### HTML Validation

#### Index.html

The initial validation threw a few errors that were small things that were easily fixed, such as extra hyphens, duplicated ids, incorrect aria controls. 

<details>
<summary>Initial HTML validation</summary>

![Page 1 HTML validation](./assets/images/readme/testing/first-html-val-1.jpg)
![Page 2 HTML validation](./assets/images/readme/testing/first-html-val-2.jpg)
![Page 3 HTML validation](./assets/images/readme/testing/first-html-val-3.jpg)
![Page 4 HTML validation](./assets/images/readme/testing/first-html-val-4.jpg)
![Page 5 HTML validation](./assets/images/readme/testing/first-html-val-5.jpg)
</details>

<details>
<summary>Final HTML Validation with no errors</summary>
 I decided to leave the "type" on the emailJS script tag as this was taken directly from their website and this was just a warning. 

![Final index.html validation](./assets/images/readme/testing/final-index-html-val.png)
</details>

#### 404.html

![Final 404 page html validation](./assets/images/readme/testing/final-val-404.png)

### CSS validation 

The first validation produced 16 errors all of which came from empty properties in the bootstrap classes. There must have been an issue in compiling the scss files which caused these empty properties:

![First CSS Validation in jigsaw validator](./assets/images/readme/testing/first-css-val.png)

There were empty classes in the compiled main.css file which I deleted (see bs-dropdown-box-shadow): 

![Bootstrap empty class in main.css](./assets/images/readme/testing/bootstrap-val-errors.png)

I also deleted the correlating classes in the original scss file in the node modules folder on my local machine. In the following I would delete drop-box-shadow:

![Bootstrap local scss source file](./assets/images/readme/testing/bootstrap-val-error-scss-file.png)

After doing this the css validated without error: 

![Final CSS validation - all passes](./assets/images/readme/testing/final-css-val.png)

I am aware this has not solved the root cause of the issue but the properties were minor ones that were not affecting my code and so I was happy at this stage to just move them. 

### JS Validation 

I use JSHint to check my javaScript for errors. It mostly picked up on missing semi-colons. I also reformatted how I used ternary operators too. All now have no major issues and the undefined variables are only because the pages are being tested in isolation.

<details>
<summary>index.js</summary>

![JSHint for index.js showing no errors](./assets/images/readme/testing/index-js-hint.png)

</details>

<details>
<summary>email.js</summary>

![JSHint for email.js showing no errors](./assets/images/readme/testing/email-js-hint.png)

</details>

<details>
<summary>questions.js</summary>

![JSHint for questions.js showing no errors](./assets/images/readme/testing/questions-js-hint.png)

</details>

### Lighthouse Testing