import { faker } from "@faker-js/faker";
const expenseCategories = [
  "Food",
  "Housing",
  "Transportation",
  "Entertainment",
  "Utilities",
];
const revenueCategories = [
  "Card replenishment",
  "Amount credited to account",
  "Interest Received",
];
const date = new Date();
export const generateRandomTransactions = (count, refDate) => {
  const transactions = [];
  for (let i = 0; i < count; i++) {
    const isExpense = faker.datatype.boolean(); // Randomly decide if it's an expense or revenue
    const amount = parseInt(faker.finance.amount()); // Random amount
    const createdAt =
      refDate == 1
        ? faker.date.between(new Date(), new Date())
        : faker.date.recent(refDate); // Random past date,
    const transactionName = isExpense
      ? faker.commerce.productName()
      : faker.commerce.department(); // Random transaction name or department name
    const transactionType = isExpense ? "expense" : "revenue";
    const category = isExpense
      ? faker.helpers.arrayElement(expenseCategories)
      : faker.helpers.arrayElement(revenueCategories);
    transactions.push({
      id: i,
      title: transactionName,
      start: createdAt,
      end: createdAt,
      allDay: true,
      type: transactionType,
      amount: amount,
      category: category,
    });
  }
  return transactions;
};

export function filterEvents(events, filter) {
  let filteredEvents = [];

  const today = new Date();
  const startOfWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - today.getDay()
  );
  const endOfWeek = new Date(
    today.setDate(today.getDate() - today.getDay() + 6)
  );

  const thisMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
  const thisMonthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const lastMonthStart = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  const lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0);

  switch (filter) {
    case "today":
      filteredEvents = events.filter(
        (event) => new Date(event.start).toDateString() === today.toDateString()
      );
      break;
    case "thisweek":
      filteredEvents = events.filter(
        (event) =>
          new Date(event.start) >= startOfWeek &&
          new Date(event.start) < endOfWeek
      );
      break;
    case "lastmonth":
      filteredEvents = events.filter(
        (event) =>
          new Date(event.start) >= lastMonthStart &&
          new Date(event.start) < lastMonthEnd
      );
      break;
    case "thismonth":
      filteredEvents = events.filter(
        (event) =>
          new Date(event.start) >= thisMonthStart &&
          new Date(event.start) < thisMonthEnd
      );
      break;
    default:
      filteredEvents = events;
      break;
  }

  return filteredEvents;
}
