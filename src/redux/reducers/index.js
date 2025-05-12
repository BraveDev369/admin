import { combineReducers } from "redux";
import { people, peopleLoading, person, personLoading } from "./people";
import { post, postLoading, posts } from "./post";

export default combineReducers({
  people,
  peopleLoading,
  personLoading,
  person,
  posts,
  post,
  postLoading,
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
