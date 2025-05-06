export default function reducer(state = [], { type, payload }) {
  switch (type) {
    case "POSTS":
      
      return payload;

    case "PEOPLE":
      return payload;

    default:
      return state;
  }
}

