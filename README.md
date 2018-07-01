Coding challenge?

==================================

The coding challenge is optional if you already have some code that you're proud of and can share with us.

Existing code
-------------

If you have existing code, please follow the following guidelines:

* Include a link to the hosted repository (e.g. Github, Bitbucket...). We cannot review archives or single files.
* The repo should include a README that follows the [principles described below](#readme) In particular, please make sure to include high-level explanation about what the code is doing.
* Ideally, the code you're providing:
  * Has been written by you alone. If not, please tell us which part you wrote and are most proud of in the README.
  * Is leveraging react native or mobile technologies.
  * Can be deployed with ios simulator.

Readme
------

Regardless of whether it's your own code or our coding challenge, write your README as if it was for a production service. Include the following items:

* Description of the problem and solution.
* Whether the solution focuses on blockchain, crypto wallet, or UI/UX.
* Reasoning behind your technical choices, including architectural. 
* Trade-offs you might have made, anything you left out, or what you might do differently if you were to spend additional time on the project.
* Link to other code you're particularly proud of.
* Link to your resume or public profile.

How we review
-------------

Your application will be reviewed by at least three of our engineers. We do take into consideration your experience level.

**We value quality over feature-completeness**. It is fine to leave things aside provided you call them out in your project's README. The goal of this code sample is to help us identify what you consider production-ready code. You should consider this code ready for final review with your colleague, i.e. this would be the last step before deploying to production.

The aspects of your code we will assess include:

* **Architecture**: how clean is the separation between the components, screens, utils?
* **Clarity**: does the README clearly and concisely explains the problem and solution? Are technical tradeoffs explained?
* **Correctness**: does the application do what was asked? If there is anything missing, does the README explain why it is missing?
* **Code quality**: is the code simple, easy to understand, and maintainable?  Are there any code smells or other red flags? Does object-oriented code follows principles such as the single responsibility principle? Is the coding style consistent with the language's guidelines? Is it consistent throughout the codebase?
* **Security**: are there any obvious vulnerability?
* **UX**: is the mobile interface understandable and pleasing to use?
* **Technical choices**: do choices of libraries, databases, architecture etc. seem appropriate for the chosen application?

Bonus point (those items are optional):

* **git-friendly**: does the code include the right comments for commit? 
* **Production-readiness**: does the code include monitoring? logging? proper error handling?


Logic Flow
-------------

![](https://raw.githubusercontent.com/Unity-Labs-Development/React-Native-app-demo/master/assets/rnapp.png)

The logic flow describe the logic of this mobile app, some of the functions are missed or incompleted , please choose a few of them to finish in 4 - 5 hours. Fork first, please send PR when finished.


## Local development

Make sure you have `react-native-cli` installed.

```bash
# Install dependencies
$ npm install

# Run project on connected iPhone or iOS simulator
$ react-native run-ios

# Run project on connected Android device or running Android simulator
$ react-native run-android
```