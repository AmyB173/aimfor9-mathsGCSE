I was trying to create a function to see if we were at the end of the test. I wanted to count the number of modules and check if I was on the last module. I wanted to count the length of the array containing the modules but kept getting an error that length() wasn't a property of what I was trying to access. I used the following code:

```
modules.find(module => module.name === "module" + currentModuleCode).length
```
However, given the fact I had objects within arrays within objects etc I didn't realise that what I needed to count was in fact just the modules array. 

```
modules.length
```
The above counted the amount of modules so I could check if I was at the end. A silly but time consuming error. However, I used the debugging tool in chrome and developed my knowledge of this a little further. 