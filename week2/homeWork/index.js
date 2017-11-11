const fs = require("fs");
if (process.argv[2] === "list") {
    fs.appendFile("./toDo.txt", "UTF-8", (err, data) => {
        if (err) console.log("error")
        if (err.code === "list") {
            console.log("list");
        } else {
            console.log("error")
        }
        console.log(data);
    });
}
if (process.argv[2] === "help") {
    fs.appendFile("./help.txt", "UTF-8", (err, data) => {
        if (err) console.log("error");
        else {
            console.log(data);
        }
    });
}
if (process.argv[2] === "add") {
    fs.appendFile("./add.txt", "UTF-8", (err, data) => {
        let toDo = data + process.argv[3] + " " + "\n";
        fs.writeFile("./add.txt", toDo, (err, data) => {
            if (err) console.log("error");
            fs.readFile("./add.txt", "UTF-8", (err, data) => {
                console.log(data);
            });
        });
    });
}
if (process.argv[2] === "remove") {
    let remove = (process.argv[3]) - 1;
    fs.readFile("./toDo.txt", "UTF-8", (err, data) => {
        if (err) console.log("error");
        let dat = contents.split("\n");
        dat.splice(remove, 1);
        let unwrit = dat.join("\n");
        console.log(unwrit);
        fs.writeFile("./toDo.txt", unwrit);
    });
} else if (process.argv[2] === "reset") {
    let resetFactory = "";
    fs.writeFileSync("./toDo.txt", resetFactory);
    fs.readFile("./toDo.txt", "UTF-8", (err, data) => {
        if (err) console.log("error");
        console.log(data);
    });
}