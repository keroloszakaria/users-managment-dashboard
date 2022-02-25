import instance from "../../plugin/axios.js";

export default {
  async checkUser({ commit }, filter) {
    const res = await instance.get("users/");
    commit("CHECK_USER", res.data);
    let users = res.data.find(function (item) {
      for (var key in filter) {
        if (item[key] === undefined || item[key] != filter[key]) return false;
      }
      return true;
    });
    return users;
  },
};
