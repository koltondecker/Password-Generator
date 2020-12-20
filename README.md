# Password-Generator

View project here: https://koltondecker.github.io/Password-Generator/

This project uses a simple user interface webpage that generates a password to the text box when the 'Generate Password' button is clicked. A series of prompts pop up to ask user for input on what criteria should be included in the generated password. 

If the user doesn't a number within the range of 8 - 128 characters or doesn't input a number at all, an alert will pop up that notifies the user that the input doesn't work and then the application ends. 
![Input that isn't a number](assets/images/Not-A-Number.png)
![Error-Message](assets/images/Error-Message.png)

When a user inputs an acceptable number within the range, a series of 4 prompts will follow that ask the user if they would like to include different criteria in the password to be generated. 
![Input that is a number within the acceptable range](assets/images/Number-Within-Range.png)
![Prompt to ask user if the password should contain lowercase letters](assets/images/lowercase-prompt.png)
![Prompt to ask user if the password should contain uppercase letters](assets/images/uppercase-prompt.png)
![Prompt to ask user if the password should contain numbers](assets/images/numbers-prompt.png)
![Prompt to ask user if the password should contain special characters](assets/images/special-chars-prompt.png)

Here is a randomly generated password based on all criteria being chosen. 
![Randomly generated password with all criteria included](assets/images/generated-password.png)

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
- [x] THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
- [x] THEN I select which criteria to include in the password
WHEN prompted for the length of the password
- [x] THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
- [x] THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
- [x] THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
- [x] THEN a password is generated that matches the selected criteria
WHEN the password is generated
- [x] THEN the password is either displayed in an alert or written to the page
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![password generator demo](./Assets/03-javascript-homework-demo.png)

## Grading Requirements

This homework is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

- [x] * Satisfies all of the above acceptance criteria plus the following:

- [x]   * The homework should not produce any errors in the console when you inspect it using Chrome DevTools.

### Deployment: 32%

- [x] * Application deployed at live URL.

- [x] * Application loads with no errors.

- [x] * Application GitHub URL submitted.

- [x] * GitHub repository that contains application code.

### Application Quality: 15%

- [x] * Application user experience is intuitive and easy to navigate.

- [x] * Application user interface style is clean and polished.

- [x] * Application resembles the mock-up functionality provided in the homework instructions.

### Repository Quality: 13%

- [x] * Repository has a unique name.

- [x] * Repository follows best practices for file structure and naming conventions.

- [x] * Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

- [x] * Repository contains multiple descriptive commit messages.

- [x] * Repository contains quality README file with description, screenshot, and link to deployed application.


## Review

You are required to submit the following for review:

- [x] * The URL of the deployed application.

- [x] * The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
