export default {
  CHECK_USER(state, value) {
    state.users = value;
  },
  ADD_USER(state, value) {
    state.users.push(value);
    console.log(value);
  },
  DELETE_USER(state, id) {
    var index = state.users.findIndex((x) => x.id === id);
    state.users.splice(index, 1);
  },
};
