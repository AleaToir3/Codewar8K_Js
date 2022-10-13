// Exo 11 :
// Northcoders want to have a party, and have enlisted the use of your savvy coding skills to help them!
// Uh oh - you're ready to send out your invitations when you spot some typos...
// Some of the names from your database don't have capital letters, so you need to make sure you capitalise the first letter of all of the guests names.
// Your greetGuest function will take a string of a first name and should return a string of a greeting with the capitalised name, as shown in the example below.
// Examples:

greetGuest("Douglas");
// returns 'Hello Douglas!'
greetGuest("maddie");
// returns 'Hello Maddie!'
greetGuest("poonam");
// returns 'Hello Poonam!'

function greetGuest(name) {
    return `Hello ${name.charAt(0).toUpperCase() + name.slice(1)}!` 
  }

// Exo 12 :
// The Northcoders party invitations have been sent and responses are coming in! In the interest of inclusivity, Northcoders has opted to make this a pay-what-you-want event.

// The finance team need to keep track of how much people are willing to pay for a ticket. You have been asked to write a function which will tell the team if an email contains information about a ticket price or not.

// The findTicketPrices function will take a string, and should return a value of true if the string contains a number, and false if it does not.

// Examples:

// findTicketPrices("Hello, I think I can pay 11 pounds, is that alright?");
// // returns true
// findTicketPrices("I would be willing to pay 30 for a ticket");
// // returns true
// findTicketPrices("Thanks for making this event pay what you can afford!");
// // returns false
function findTicketPrices(emailString) {
    return /\d/.test(emailString) 
      }

// Exo 13 :
// We need to keep track of the party guests, but the data we currently have combines the guests first and last names into a single name. You have been asked to separate the names to make the data easier to work with.

// The makeGuestList function takes an object with a name property whose value will be a string consisting of a first name and a last name, separated by a space. The function should return an object.

// The function should remove the name property, replace it with firstName and lastName properties, as shown in the examples below.

// Examples:

// makeGuestList({ name: "Hannah Fry", age: 46 });
// // should return { firstName: "Hannah", lastName: "Fry", age: 46 }
// makeGuestList({ name: "Paul Erdős", age: 46 });
// // should return { firstName: "Paul", lastName: "Erdős", age: 46 }
// Note: all other properties should remain unchanged.

function makeGuestList(person) {
  
    let nameGuess = person.name.split(" ")
      person.firstName = nameGuess[0]
      person.lastName = nameGuess[1]
      delete person.name
      return person
    }

// Exo 14 :
// You have been asked to update the guest list with the amounts that each guest is willing to pay for a ticket. Unfortunately, all of the ticket prices found in email messages have been sent to you as strings!

// The function trackAttendees takes an attendee object and a string representing how much they are willing to pay.

// It should return a modified attendee object, with an added property key of paidForTicket and value of the amount the attendee is willing to pay.

// Examples:

// trackAttendees({ firstName: "Veronica", lastName: "Green", age: 46 }, '25');
// // should return { firstName: "Veronica", lastName: "Green", age: 46, paidForTicket: 25 }
// trackAttendees({ firstName: "Anna", lastName: "Lytical", age: 27 }, '0');
// // should return { firstName: "Anna", lastName: "Lytical", age: 27, paidForTicket: 0 }
// trackAttendees({ firstName: "Ella", lastName: "Vaday", age: 30 }, '13');
// // should return { firstName: "Ella", lastName: "Vaday", age: 30, paidForTicket: 13 }
// Note: all other properties should remain unchanged.
function trackAttendees(person, ticketCost) {
    person.paidForTicket = parseInt(ticketCost);
    return person;    }

// Exo 15 :

// Can We Have the Party?
// It's time to see if we can host our party!

// Before the party is confirmed, the shareholders need two criteria to be met:

// At least 5 people must be in attendance
// At least £100 must be generated via pay-what-you-want ticket sales
// The isPartyViable function will be called with an array of guest objects. Each of those objects has a paidForTicket property with a number representing how much they are willing to pay for their ticket.

// It should return a boolean value of false if not enough people are attending or attendees don't spend enough money on tickets, and true if enough people are attending and they spend enough money on tickets.

// Examples:

// const guests = [
//   { name: "diya", paidForTicket: 15 },
//   { name: "amul", paidForTicket: 2 },
//   { name: "saleh", paidForTicket: 2 },
//   { name: "philippa", paidForTicket: 30 },
// ]
// isPartyViable(guests);
// // should return false
// const guests = [
//   { name: "diya", paidForTicket: 15 },
//   { name: "amul", paidForTicket: 2 },
//   { name: "saleh", paidForTicket: 2 },
//   { name: "philippa", paidForTicket: 30 },
//   { name: "kev", paidForTicket: 6 },
//   { name: "sarah", paidForTicket: 11 },
// ]
// isPartyViable(guests);
// // should return false
function isPartyViable(guests) {
   if (Object.keys(guests).length >= 5) {
    const sum = guests.reduce((sum, element) => sum + element.paidForTicket, 0);
    return sum >= 100;
  }
  return false   

;}

// // Exo 16 :
// Hooray! The party has been given the go-ahead! Now it's time to write a function which will help us to order some supplies for the party.

// Northevents Events Supplies™️ sell a range of goods which can help us to throw an amazing party!

// The orderSupplies function takes two arguments: a supplies object with keys of party supplies and values of the cost of that supply, and the number of guests attending.

// It should return a number showing the total cost of ordering one of each item per guest!

// orderSupplies({ cake: 2, iceCream: 7 }, 2);
// // should return 18
// orderSupplies({ plates: 2, cups: 1, forks: 1, partyHats: 4 }, 20);
// // should return 160
function orderSupplies(supplies, guests) {
    return Object.values(supplies).reduce((a,b)=> a+=b*guests,0);
    }

// Exo 17 :
// Hooray! The party can go ahead, the guest list is finalised, and it's almost time to make the seating plan. But first, you need to figure out how many tables we need!

// The number of guests may not divide evenly by the number of seats, so we will have to add some extra chairs to a few of the tables for them.

// The function calculateTables takes two arguments, the number of guests and the number of seats around a table.

// It should return an object with two properties: a key of tables with the value of the number tables, and a key of remainingGuests with a value of the number of guests without a seat who will need to be added to one of the other tables.

// Examples Below.

// calculateTables(4, 2);
// // should return { tables: 2 , remainingGuests: 0 }
// calculateTables(14, 6);
// // should return { tables: 2 , remainingGuests: 2 }
// calculateTables(26, 5);
// // should return { tables: 5 , remainingGuests: 1 }
function calculateTables(guests, seats) {
  let rest = Math.round(guests % seats);
  let table = Math.round(guests / seats);
  if (isNaN(rest) || isNaN(table)) {
    table = 0;
    rest = 0;
  }

  let tab = {
    "tables": table,
    "remainingGuests": rest,
  };
  console.log(tab);
  return tab;
}

// // Exo 18 :
// Northdrivers Taxi Company™️ have asked for your help writing a function which will calculate the cost of getting to the party! Journeys are priced as follows:

// Journeys up to 3 minutes long have a flat base rate cost of £5
// Every minute after the first 3 will cost an extra 70p
// The length of the journey is always rounded up to a whole number of minutes
// The calculateTaxiFare function should take a number representing the length of a taxi journey in seconds, and return a number representing the cost of that journey in pence.

calculateTaxiFare(150);
// should return 500
calculateTaxiFare(360);
// should return 710
calculateTaxiFare(491);
// should return 920
function calculateTaxiFare(seconds) {
    
    let time = Math.ceil(seconds / 60) 
    if (time <= 3) {
        return 500
    } else  {
    time = ((((time - 3) * 0.7 )+ 5 )* 100)
    console.log(Math.round(time));
    return Math.round(time)
    }
}

// Exo 19 :
// The Northcoders party is nearly over & it's time to select the winners of the prize draw raffle!

// You have been asked to write a function which will select the winners based on two factors: how much they paid, and their seat number. If both of these numbers are odd, the attendee wins a prize!

// The pickWinners function will be passed an array of numbers representing ticket costs as its only argument. The index position represents the seat number.

// Your task is to return an array of objects. Each object should contain two keys. The first key is seat with a value of the odd index. The second key is ticketCost with a value of the ticket price at that index in the input array.

// Examples below.

// pickWinners([6, 7, 12, 49])
// // should return [{seat: 1, ticketCost: 7}, {seat: 3, ticketCost: 49}]
// pickWinners([1, 3, 5, 7, 9, 11])
// // should return [{seat: 1, ticketCost: 3}, {seat: 3, ticketCost: 7}, {seat: 5, ticketCost: 11} ]
// pickWinners([1, 6, 13, 8, 29, 50])
// // should return []

function pickWinners(numbers) {
    const res = [];
    numbers.forEach(function (number,index) {           
            if(index % 2 !== 0 && number % 2 !== 0) res.push({seat: index, ticketCost: number})
    }) 
    return res;
}

// // Exo 20 :
// Phew! All your hard work paid off and the event was a success! Now that you have had some time to relax, it's time to consider the guests feedback.

// You decide to break the feedback into three groups: positive (7-10), negative (0-3) or neutral (4-6).

// The function gatherFeedback takes an array of arrays, each of these arrays contains both a string of the name of the attendee and a number showing how they rated the party out of 10.

// It should return an object with three properties: a key of positive with a value of the number of positive reviews; a key of negative with a value of the number of negative reviews; and, a key of neutral with a value of the number of neutral reviews.

// Examples:

// gatherFeedback([['maddie', 10], ['jatinder', 3], ['rose', 6]]);
// // returns {positive: 1, negative: 1, neutral:1}
function gatherFeedback(feedbackArray) {
  
    let acc = { positive: 0, negative: 0, neutral: 0 };
    feedbackArray.forEach((element) => {
      console.log(element[1]);
      if (element[1] >= 0 && element[1] <= 3) {
        acc.negative += 1;
      } else if (element[1] >= 4 && element[1] <= 6) {
        acc.neutral += 1;
      } else if (element[1] >= 7 && element[1] <= 10) {
        acc.positive += 1;
      }
    });
    console.log(acc);
    return acc;
  }