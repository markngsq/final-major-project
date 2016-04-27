## Description

Final Major Project for my BA Hons Graphic Communication @ Norwich University of the Arts.


## Dependencies ##

Requires NodeJS. Can be installed with Homebrew

    brew install node


## Get Started ##

Run the following to install all dependencies:

    npm install


## Start Development Server ##

This command builds all src files and starts a web server on localhost:3000.
It then watches for changes to files and runs build tasks using browser-sync

    `npm bin`/gulp serve


## Build ##

To build assets, run the following command.

    NODE_ENV=production `npm bin`/gulp build


## More Info

You can run `gulp` to get a list of all the gulp tasks.
