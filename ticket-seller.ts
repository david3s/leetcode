console.log(maxProfit([2,8,4,10,6], 20))

function maxProfit(sellerTickets: number[], ticketsWanted: number): number {

  function getNumberTicketsAtPrice(price: number): number {
    return sellerTickets.filter(ticketCount => ticketCount >= price).length;
  }

  let currentHighestTicket = Math.max(...sellerTickets);
  let ticketCount = 0;
  let profit = 0;
  while(ticketCount < ticketsWanted && currentHighestTicket > 0) {
    const ticketsAtPriceX = getNumberTicketsAtPrice(currentHighestTicket);
    if (ticketsWanted - (ticketCount + ticketsAtPriceX) >= 0) {
      ticketCount = ticketCount + ticketsAtPriceX;
      profit = profit + (ticketsAtPriceX * currentHighestTicket);
    } else {
      profit = profit + ((ticketsWanted - ticketCount) * currentHighestTicket);
      ticketCount = ticketsWanted;
    }
    currentHighestTicket = currentHighestTicket - 1;
  }
  return profit;
}
