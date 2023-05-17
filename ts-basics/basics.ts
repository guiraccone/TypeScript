let username: string = "jack";
let hasLoggedIn: boolean = true;

username += "Herrington"

console.log(hasLoggedIn)

let myNumber: number = 10;

let myRegex = /foo/

const ab: number = 1
const ba = 2

const names: string[] = username.split("")
const myValues: Array<Number> = [ab, ba, 4]

interface Person {
    first: string;
    last: string;
}

const myPerson: Person = {
    first: "Jack",
    last: "Herrington",
}

const ids: Record<number, string> = {
    10: "a",
    20: "b"
}

ids[30] = "c"

if(ids[30] === "D"){

}

for(let i = 0; i < 10; i++){
    console.log(i)
}

[1,2,3].forEach(v => console.log(v));
const out = [4,5,6].map((v) => `${v * 10}`)