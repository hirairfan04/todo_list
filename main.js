import inquirer from "inquirer";
let todolist = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "list",
            message: "Add something in your todo list",
            type: "input",
        },
        {
            name: "add",
            message: "Do you want to add more?",
            type: "confirm",
            default: "true",
        },
    ]);
    condition = addTask.add;
    todolist.push(addTask.list);
    console.log(todolist);
}
