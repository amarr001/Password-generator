# Password-generator

The password-generator project consisted of creating an application using HTML, CSS and Javascript to generate a random and secure password.

The user interface is responsive and adapts to different screen sizes. This is achieved by the use of media queries and adjusting margin, padding and using box-sizing property in the CSS file. 
The interactive part of the project was done by creating a javascript file and linking it to index.html. Referencing files in the html file is good practice because it makes each file's code cleaner and easier to read and follow. 

In the javascript file I first assigned certain values to variables, then a function linked with the button id was created. In this function, everytime someone clicks the button they are presented with a confirmation box first letting them know how the application operates and then a series of confirm and prompt boxes. 
After the user's selection, they are presented with a secure password generated through another function called generatePassword();

Before generating the password, a for loop was created inside the function arrayFromLowToHigh(); and the arguments inside this function were later assigned to the value of the variables connecting the confirm/prompt boxes with the key codes (char codes).

Another array is then created var = passwordCharacters in order to select random key codes
The password is then generated and displayed in the text area using DOM innerText property.


