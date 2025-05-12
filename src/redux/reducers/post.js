export function posts(state = [], { type, payload }) {
  switch (type) {
    case "POSTS":
      return payload;
    case "REMOVE_POST":
      return state.filter((p) => p.id !== payload);
    default:
      return state;
  }
}

export function post(state = {}, { type, payload }) {
  switch (type) {
    case "POST":
      return payload;
    default:
      return state;
  }
}


export function postLoading(state = false, { type, payload }) {
  switch (type) {
    case "POST_Loading":
      return payload;
    default:
      return state;
  }
}
