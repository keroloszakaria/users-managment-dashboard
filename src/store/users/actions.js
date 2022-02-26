import instance from "../../plugin/axios.js";

export default {
  async checkUser({ commit }, filter) {
    const res = await instance.get("users/");
    commit("CHECK_USER", res.data);
    let users = res.data.filter(function (item) {
      for (var key in filter) {
        if (item[key] === undefined || item[key] != filter[key]) return false;
      }
      return true;
    });
    return users;
  },

  async getUsers({ commit }) {
    const res = await instance.get("users/");
    commit("CHECK_USER", res.data);
    return res.data;
  },

  async addUser({ commit }, data) {
    await instance.post("users/", data);
    commit("ADD_USER", data);
  },

  async editUser({ commit }, data) {
    await instance.patch(`users/${data.id}`, data).catch((error) => {
      console.log(error);
    });
    commit("CHECK_USER");
  },

  async deleteUser({ commit }, id) {
    await instance.delete(`users/${id}`).catch((error) => {
      console.log(error);
    });
    commit("DELETE_USER");
  },
};
