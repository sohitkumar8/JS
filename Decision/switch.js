/*
    Switch Statement

    Jab ek variable ki bahut saari fixed value compare karna ho.

*/

let day = "Wednesday";

switch (day) {
    case "Monday":
        console.log("College jana hai");
        break;
    case "Tuesday":
        console.log("Aaj college nahi jana hai");
        break;
    case "Wednesday":
        console.log("Chicken kha sakte hai");
        break;
    case "Thursday":
        console.log("Library jana hai");
    default:
        console.log("Invailid day");
        break;
}