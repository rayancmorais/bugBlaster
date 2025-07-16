export default function ticketReducer(state, action) {
  switch (action.type) {
    case "ADD_TICKET":
      return { ...state, tickets: [...state.tickets, action.payload] };
    case "UPDATE-TICKET":
      return {
        ...state,
        tickets: state.tickets.map((ticket) =>
          ticket.id === action.payload.id ? action.payload : ticket
        ),
      };
    case "DELETE-TICKET":
      return {
        ...state,
        tickets: state.ticket.filter(
          (ticket) => ticket.id !== action.payloa.id
        ),
      };

    default:
      return state;
  }
}
