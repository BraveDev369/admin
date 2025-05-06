import { combineReducers } from "redux";
import { people, peopleLoading, person } from "./people";
import { post, posts } from "./post";

export default combineReducers({
  people,
  peopleLoading,
  person,
  posts,
  post,
});

// const DEFAULT_STATE = { person: [], posts: [] };

// export default function reducer(state = DEFAULT_STATE, { type, payload }) {
//   switch (type) {
//     case "PEOPLE":
//       return { ...state, person: payload };
//     case "POSTS":
//       return { ...state, posts: payload };
//     default:
//       return state;
//   }
// }
