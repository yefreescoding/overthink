// function calculateTimeAgo(submissionTime) {
//   const currentTime = Date.now();
//   const timeDifference = currentTime - submissionTime;

//   // Convert milliseconds to seconds, minutes, hours, or days
//   if (timeDifference < 60000) {
//     return `${Math.floor(timeDifference / 1000)}s`;
//   } else if (timeDifference < 3600000) {
//     return `${Math.floor(timeDifference / 60000)}m`;
//   } else if (timeDifference < 86400000) {
//     return `${Math.floor(timeDifference / 3600000)}h`;
//   } else {
//     return `${Math.floor(timeDifference / 86400000)}d`;
//   }
// }

function calculateTimeAgo(timestamp) {
  const date = new Date(timestamp);

  // Define months array for converting month index to month name
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get month name from months array
  const month = months[date.getMonth()];

  // Get day
  let day = date.getDate();
  // Add suffix to day (1st, 2nd, 3rd, etc.)
  const suffixes = ["st", "nd", "rd"];
  const suffix = suffixes[(day - 1) % 10] || "th";
  day += suffix;

  // Get hour and minute
  const hour = date.getHours();
  const minute = ("0" + date.getMinutes()).slice(-2); // Ensure two digits for minutes

  return `${month} ${day} at ${hour}:${minute}`;
}

// Example usage
const timestamp = Date.now();
const formattedDate = calculateTimeAgo(timestamp);
console.log(formattedDate);

export default calculateTimeAgo;
