import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers";
import { thunk } from "redux-thunk";

import logger from "redux-logger";
/**
 * این متد میاد و تمام اکشن هایی که انجام شده رو
 * توی کنسول نشون میده
 * {action, prevState, newState} => console.log this object
 */

// function middleware({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       console.log(action);
//       if (typeof action === "function") {
//         action(dispatch);
//       } else {
//         next(action);
//       }
//       /**
//        * اگر این نکست نباشه دیگه هیچ فلویی اتفاق نمی‌افته و هیچ اکشنی دیکه
//        * به ردیوسر نمیره و عملا هیچ عملیاتی انجام نمیشه
//        */
//     };
//   };
// }
/**
 * این نسخه خلاصه شده و مرتب شده‌ی کد میدلویر بالاست
 */
// const middleware =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     typeof action === "function" ? action(dispatch, getState) : next(action);
//   };

// در نهایت برای async-actionها از redux-thunk استفاده میکنیم

// if i have many middleware i can send as parameter to applyMiddleware(m1,m2,m3,...)
// const store = createStore(reducer, applyMiddleware(thunk, logger));
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
