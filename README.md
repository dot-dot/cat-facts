# cat-facts
React app to display a cat fact using http://catfacts-api.appspot.com/

*Getting started*
- Install node/npm if you haven't done so (https://nodejs.org/en/)
- On the root directory, type "npm install" on command prompt/terminal to restore the dependencies. These are listed under package.json
- "npm run start" to start the web server
- "npm run webpack-watch" to build and monitor changes
- Open browser at http://localhost:3000

.... You might also need:
If you are getting an error related to node-gyp when building your bundle.js:
- Check that you have vs2013 c++ redistributable installed (you can install vs community for free version)
- Run the following from command prompt, while on the folder of the node installation (eg. c:\program files\nodejs\) "npm config set msvs_version 2013 --global"
- If you are still getting error, you might also need to install python (https://www.python.org/) and add the path into your environment path

Based on:
https://blog.risingstack.com/the-react-way-getting-started-tutorial/

https://scotch.io/tutorials/learning-react-getting-started-and-concepts

https://medium.com/modus-create-front-end-development/optimizing-webpack-production-build-for-react-es6-apps-a637e5692aea
