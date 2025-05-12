import request from "../../tools/request";

export function setPeople(payload) {
  return { type: "PEOPLE", payload };
}

export function setPeopleLoading(payload) {
  return { type: "P_Loading", payload };
}

export function setPerson(payload) {
  return { type: "PERSON", payload };
}

export function setAddPerson(payload) {
  return { type: "ADD_PERSON", payload };
}

export function removePerson(payload) {
  return { type: "REMOVE_PERSON", payload };
}

export function setPersonLoading(payload) {
  return { type: "PERSON_Loading", payload };
}

export function getPeople() {
  return (dispatch, getState) => {
    if (getState().people.length === 0) {
      dispatch(setPeopleLoading(true));
      request
        .get("/users/")
        .then(({ data }) => {
          dispatch(setPeople(data));
        })
        .finally(() => dispatch(setPeopleLoading(false)));
    }
  };
}

export function getPerson(id) {
  return (dispatch) => {
    dispatch(setPersonLoading(true));
    request(`/users/${id}`)
      .then(({ data }) => dispatch(setPerson(data)))
      .finally(() => dispatch(setPersonLoading(false)));
  };
}

export function updatePerson(id, values) {
  return async (dispatch) => {
    dispatch(setPersonLoading(true));
    try {
      await request.put(`/users/${id}`, { data: values });
      dispatch(setPerson(values));
    } catch (err) {
      message.error("خطا در بروزرسانی");
      throw err;
    } finally {
      dispatch(setPersonLoading(false));
    }
  };
}

export function addPerson(values) {
  return async (dispatch) => {
    dispatch(setPersonLoading(true));
    try {
      request
        .post("/users", { data: values })
        .then((response) => {
          console.log("user Added");
          dispatch(setAddPerson(values));
        })
        .catch((error) => {
          if (error.status === 404) {
            console.log("conection failed");
          }
        });
    } catch (err) {
      throw err;
    } finally {
      dispatch(setPersonLoading(false));
    }
  };
}
