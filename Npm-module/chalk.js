const chalk = require ("chalk");

//console.log(chalk.green("Hello World!!!"));
//console.log(chalk.blue("Hello" + "World" + chalk.red('!')));
//console.log(chalk.red("Hello Samantha" + chalk.green("Good Morning")));

//console.log(chalk.blue.underline.bold("Hello dude"));
console.log(chalk.red.inverse.bold("Hello Bangalore!!!"));

const command = process.argv[2]
if (command === 'add') {
    console.log("adding Note...!");
}