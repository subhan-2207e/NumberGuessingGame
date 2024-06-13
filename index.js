import inquirer from "inquirer";
console.log("Wellcome to subhan Cli Number Guessing Game");
const ramdanNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "NumberGuessingGame",
        type: "number",
        message: "Enter Guess Number(Number limit 1 to 5):",
    },
]);
if (answer.NumberGuessingGame === ramdanNumber) {
    console.log("Congratulation ! you guess a correct number");
}
else {
    console.log("Sorry , you guess a wrong number");
}
