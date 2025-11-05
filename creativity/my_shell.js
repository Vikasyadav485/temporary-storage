let promptDefault = "vikas@Vikass-blackbook ";
let pwd = "Users/vikas";
let memory = [["Users", ["vikas", []]]];

function changeDir(dir) {
  if (dir === "..") {
    pwd = pwd.slice(0, pwd.lastIndexOf("/"));
  } else if (dir !== ".") {
    pwd += `/${dir}`;
  }
}

function findDir(dirName, parentDir) {
  for (let index = 0; index < parentDir.length; index++) {
    if (dirName === parentDir[index][0]) {
      return parentDir[index][1];
    }
  }
}

function chooseDir(path, parentDir) {
  console.log(path);
  const dirName = path[0];
  const dir = findDir(dirName, parentDir);

  if (path.length > 1) {
    path.shift();
    return chooseDir(path, dir);
  }
  return dir;
}

function makeDir(dirName) {
  const makeFolder = [dirName, []];
  const path = pwd.split("/");
  const parentDir = chooseDir(path, memory);
  parentDir.push(makeFolder);
}

function commandChoose(tokens) {
  switch (tokens[0]) {
    case "cd":
      return changeDir(tokens[1]);
    case "pwd": {
      console.log(pwd);
      return;
    }
    case "mkdir":
      return makeDir(tokens[1]);
  }
}

function currentDirName() {
  return pwd.slice(pwd.lastIndexOf('/') + 1);
}

function shell() {
  while (true) {
    const command = prompt(`${promptDefault} ${currentDirName()} %`);
    const tokens = command.split(' ');

    (commandChoose(tokens));
  }
}

shell();


console.log(memory);
