# Team Profile Generator [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
This project involves taking the provided starter code and converting it into a functional Node.js command-line application. The application will collect information about employees on a software engineering team and generate an HTML webpage that displays a summary for each person.

To achieve this, I will create prompts to gather information from the user about each development team member, and apply my newly acquired skills to create methods and classes for each team member to generate objects with the data required. Once the user has finished building their team and exits the application, an HTML file will be automatically generated.

In addition, the project includes provided tests, which require me to ensure that every part of my code passes each test.

---

## Installation
To use this application, you will need to have Node.js installed on your computer. If you don't have Node.js installed, you can download it [here](https://nodejs.org/en/download/).
Once you have Node.js installed, you can clone this repository to your local machine.

After cloning the repository, navigate to the project directory and install the necessary dependencies by running the following command:

```javascript
npm install jest inquirer@^8.0.0 
```

This will install [Jest](https://www.npmjs.com/package/jest), a testing framework that provides a simple way to write and run tests, and [Inquirer](https://www.npmjs.com/package/inquirer), a command line interface for collecting user input. 

Please note that Inquirer requires a specific version for this application.

---

## Usage
To use this application, run the following command:

```javascript
node starter/index.js
```

After running the command above, you will be prompted with a series of questions about the members of your software engineering team. Once you answer these questions, the generated HTML file will be located in an `output` folder and named `team.html`.

Here is an image that shows what the application should look like:

![HTML webpage titled “My Team” features five boxes listing employee names, titles, and other key info.](./Assets/14-object-oriented-programming-challenge-demo.png)

The styling in the image is just an example, so I took the liberty of creating my own.

---

## Credits
This project was made possible with the guidance and support of my instructors and teaching assistants. I also used various resources to create this project, including:

* [Inquirer documentation](https://www.npmjs.com/package/inquirer#documentation) for building interactive command-line interfaces.
* [Mdn JavaScript Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) for information on classes and objects in JavaScript.
* [Bootstrap](https://getbootstrap.com/) for styling the HTML page.

---

## License
Please refer to the LICENSE in the repo.