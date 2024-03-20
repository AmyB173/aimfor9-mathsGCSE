## Bugs and fixes

### JS
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

## Accessibility 

I was initially going to use images to present my equations but I realised this would not be very accessible for people using screen readers and so after some research I decided to use MathML to code equations. See [this](https://www.chhs.colostate.edu/accessibility/best-practices-how-tos/mathml/#:~:text=MathML%20is%20a%20way%20of,text%2Dto%2Dspeech%20software.) page for accessibility of MathML