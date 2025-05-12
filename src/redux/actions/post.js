import request from "../../tools/request";

export function setPosts(payload) {
  return { type: "POSTS", payload };
}

export function setPost(payload) {
  return { type: "POST", payload };
}

export function addPost(payload) {
  return { type: "ADD_POST", payload };
}

export function removePost(payload) {
  return { type: "REMOVE_POST", payload };
}

export function setPostLoading(payload) {
  return { type: "POST_Loading", payload };
}

export function getPosts() {
  return (dispatch, getState) => {
    /**
     * این شرط باعث میشه وقتی لیست پست ها خالی هست
     * دوباره درخواست برای گرفتن پست ها ارسال بشه
     */
    if (getState().posts.length === 0) {
      dispatch(setPostLoading(true));
      request("/posts/")
        .then(({ data }) => dispatch(setPosts(data)))
        .finally(() => dispatch(setPostLoading(false)));
    }
  };
}

export function getPost(id) {
  return (dispatch) => {
    dispatch(setPostLoading(true));
    request(`/posts/${id}`)
      .then(({ data }) => dispatch(setPost(data)))
      .finally(() => dispatch(setPostLoading(false)));
  };
}
