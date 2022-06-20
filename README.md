# 10-team-profile-generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Testing](#Testing)
- [Links](#Links)
- [Questions](#Questions)
- [License](#License)

##

## Description

This application will generate a team profile HTML webpage using node.js based on the user's input in the command line. User input will be captured using the inquirer module and the file will be generated using the file system (fs) module. The generated HTML webpage will display a dashboard of team profiles including a manager, engineers(s) and intern(s). Each employee will share common information such as name, id and email while other employee types will contain unique data. In addition to the HTML file, an existing CSS file will stylize all elements and provide a responsive application.

## Installation

1. To install application, clone the main project via the HTTP or SSH link on github.

```
git clone
```

2. Once cloned, open up the project folder in your text editor and run the following command in terminal to install all dependencies.

```
npm install
```

## Usage

1. While in the main project folder (use 'cd' command if needed) enter the following command to execute the chain of prompts:

```
node index
```

2. Answer all the prompts and once completed, your HTML file will be created.

## Testing

This application contains test driven development using the node package "Jest".
Use the following command to test that all core functions are working correctly:

```
npm run test
```

## Links

An example of an HTML generated by this application
[View here](https://github.com/mohamedisaaq0/10-team-profile-generator/blob/main/dist/Employees.html)

Link to preview video of execution:
[View here](https://drive.google.com/file/d/1qOMtymT83PUZCcP144seGMHqp8Uj1OgI/view?usp=sharing)

## Built With

- Node.js
- File system module (fs)
- Inquirer module
- JavaScript
- CSS

## Questions

[My portfolio](https://mohamedisaaq0.github.io/mohamed-portfolio)

To view my other applications:
[Github](https://github.com/mohamedisaaq0)

If you have questions about this application or general inquiry, please reach out to me via email: mohamedisaaq0@gmail.com

## License

This project is covered under the MIT License.
