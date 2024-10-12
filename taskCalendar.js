let day = prompt("Please enter a day of the week (e.g., 'Monday', 'Tuesday'):");

switch (day) {
    case "Monday":
        console.log("Your task for Monday is: Check your orders in your shop.");
        break;
    case "Tuesday":
        console.log("Your task for Tuesday is: Pack all the orders of clients.");
        break;
    case "Wednesday":
        console.log("Your task for Wednesday is: Ship your orders.");
        break;
    case "Thursday":
        console.log("Your task for Thursday is: Check you stocks  in your shop.");
        break;
    case "Friday":
        console.log("Your task for Friday is: Restock the empty stock");
        break;
    case "Saturday":
        console.log("Your task for Saturday is: Check your Total sales in a week.");
        break;
    case "Sunday":
        console.log("Your task for Sunday is: Day off.");
        break;
    default:
        console.log("Oops! That doesn't seem to be a valid day of the week. Please try again.");
}