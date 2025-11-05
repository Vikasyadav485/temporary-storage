let promptDefault = "vikas@Vikass-blackbook ";
let pwd = "Users/vikas";
let memory = [];

function changeDir(dir) {
  if (dir === "..") {
    pwd = pwd.slice(0, pwd.lastIndexOf("/"));
  } else if (dir !== ".") {
    pwd += `/${dir}`;
  }
}

function findDir(dirName, parentDir){
  for(let index = 0; index < parentDir.length; index++){
    if(dirName === parentDir[index][0]){
      return parentDir[index][1];
    }
  }
}

function chooseDir(dirsString, parentDir){
  const childDirs = dirsString.slice(dirsString.indexOf('/'));
  const dirName = childDirs.slice(0, childDirs.indexOf('/'));
  const dir = findDir(dirName, parentDir);
}

function makeDir(dirName){
  const makeFolder = [dirName, []];
  const parentDir = chooseDir(pwd, memory);
  chooseDir.push(makeFolder);
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
      return makeDir(tokens [1]);
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
