<template>
  <NavHead />
  <main>
    <section>
      <div class="container">
        <div class="card">
          <div class="card-header">
            <h2>Users</h2>
            <div class="add-user-section" v-if="this.isAdmin">
              <button
                type="button"
                class="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#AddUser"
              >
                Add User
              </button>
              <!-- Add User Modal -->
              <div
                class="modal fade"
                id="AddUser"
                tabindex="-1"
                aria-labelledby="AddUserLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">User Info</h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <form action="" @submit.prevent="addToUser()">
                        <div class="form-group mb-4">
                          <input
                            type="text"
                            placeholder=""
                            v-model="this.user.username"
                            required
                          />
                          <label>Username</label>
                          <span class="focus-border"></span>
                        </div>

                        <div class="form-group mt-4">
                          <input
                            type="text"
                            placeholder=""
                            v-model="this.user.title"
                            required
                          />
                          <label>Title</label>
                          <span class="focus-border"></span>
                        </div>

                        <div class="form-group mt-4">
                          <input
                            type="password"
                            placeholder=""
                            v-model="this.user.password"
                            required
                          />
                          <label>Password</label>
                          <span class="focus-border"></span>
                        </div>

                        <div class="form-group mt-4">
                          <select
                            class="form-select"
                            aria-label="Default select example"
                            v-model="this.user.role"
                            required
                          >
                            <option value="Admin">Admin</option>
                            <option value="User">User</option>
                          </select>
                          <label>Role</label>
                          <span class="focus-border"></span>
                        </div>

                        <div class="form-group mt-4 text-center">
                          <button class="btn btn-primary w-100" type="submit">
                            Add User
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Add User Modal -->
            </div>
          </div>
          <div class="table-responsive">
            <table
              class="table table-striped table-borderless align-middle mb-0"
            >
              <thead>
                <tr>
                  <th class="text-center">#</th>
                  <th>Name</th>
                  <th class="text-center">Role</th>
                  <th class="text-center" v-if="this.isAdmin">Actions</th>
                  <th class="text-center" v-if="this.isAdmin">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user, index) in this.userList" :key="index">
                  <td class="text-center">{{ index + 1 }}</td>
                  <td>
                    <div class="user">
                      <div class="user-left">
                        <div class="user-heading">{{ user.username }}</div>
                        <div class="user-subheading">{{ user.title }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="text-center">{{ user.role }}</td>

                  <td class="text-center" v-if="this.isAdmin">
                    <button
                      type="button"
                      class="btn btn-primary btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#EditUser"
                      @click="getEditUser(user.id)"
                    >
                      Edit
                    </button>
                    <!-- Edit User Modal -->
                    <div
                      class="modal fade"
                      id="EditUser"
                      tabindex="-1"
                      aria-labelledby="EditUserLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title">User Info</h5>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body text-start">
                            <form
                              action=""
                              @submit.prevent="EditFromUsers(this.user.id)"
                            >
                              <div class="form-group mb-4">
                                <input
                                  type="text"
                                  placeholder=""
                                  v-model="this.user.username"
                                  required
                                />
                                <label>Username</label>
                                <span class="focus-border"></span>
                              </div>

                              <div class="form-group mt-4">
                                <input
                                  type="text"
                                  placeholder=""
                                  v-model="this.user.title"
                                  required
                                />
                                <label>Title</label>
                                <span class="focus-border"></span>
                              </div>

                              <div class="form-group mt-4">
                                <input
                                  type="password"
                                  placeholder=""
                                  v-model="this.user.password"
                                  required
                                />
                                <label>Password</label>
                                <span class="focus-border"></span>
                              </div>

                              <div class="form-group mt-4">
                                <select
                                  class="form-select"
                                  aria-label="Default select example"
                                  v-model="this.user.role"
                                  required
                                >
                                  <option value="Admin">Admin</option>
                                  <option value="User">User</option>
                                </select>
                                <label>Role</label>
                                <span class="focus-border"></span>
                              </div>

                              <div class="form-group mt-4 text-center">
                                <button
                                  class="btn btn-primary w-100"
                                  type="submit"
                                >
                                  Edit User
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Edit User Modal -->
                  </td>
                  <td class="text-center" v-if="this.isAdmin">
                    <button
                      type="button"
                      @click="deleteFromUsers(user.id)"
                      class="btn-sm delete-button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        width="15px"
                      >
                        <path
                          d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Swal from "sweetalert2";
import NavHead from "@/components/NavHead";

export default {
  data() {
    let isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
    return {
      isAdmin: isAdmin,
      userList: [],
      user: {
        id: Math.random().toString(36).slice(2),
        username: null,
        title: null,
        password: null,
        role: null,
      },
    };
  },
  components: {
    NavHead,
  },
  methods: {
    ...mapActions("userModule", [
      "getUsers",
      "addUser",
      "deleteUser",
      "editUser",
    ]),

    addToUser() {
      this.addUser(this.user);
      this.user = {
        id: null,
        username: null,
        password: null,
        role: null,
        title: null,
      };

      Swal.fire({
        icon: "success",
        title: "Your user has been added",
        showConfirmButton: false,
        timer: 2000,
      });
      document.querySelector("#AddUser .btn-close").click();
    },

    getEditUser(id) {
      let user = this.userList.find((user) => user.id == id);
      this.user = {
        id: user.id,
        username: user.username,
        password: user.password,
        role: user.role,
        title: user.title,
      };
    },

    EditFromUsers(id) {
      let userDetails = this.userList.find((user) => user.id == id);
      userDetails.username = this.user.username;
      userDetails.password = this.user.password;
      userDetails.role = this.user.role;
      userDetails.title = this.user.title;
      this.editUser(this.user);
      document.querySelector("#EditUser .btn-close").click();
      Swal.fire({
        icon: "success",
        title: "Your Edit apply",
        showConfirmButton: false,
        timer: 1500,
      });
    },

    deleteFromUsers(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteUser(id);
          Swal.fire({
            title: "Deleted!",
            text: "User has been deleted.",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          });
        }
      });
    },
  },

  async created() {
    this.userList = await this.getUsers();
  },
  computed: {
    ...mapGetters("userModule", ["users"]),
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.form-group {
  position: relative;
  input,
  select {
    position: relative;
    color: #333;
    width: 100%;
    letter-spacing: 1px;
    box-shadow: none;
    outline: none;
    z-index: 99;
    background-color: transparent;
    border: 0;
    padding: 4px 0;
    border-bottom: 1px solid #ccc;

    &:valid {
      background-color: #fff;
    }

    &:focus {
      ~ .focus-border {
        width: 100%;
        transition: 0.4s;
      }
      ~ label {
        top: -16px;
        font-size: var(--small);
        color: var(--blue);
        transition: 0.3s;
      }
    }
    & ~ .focus-border {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--blue);
      transition: 0.4s;
    }
    & ~ label {
      position: absolute;
      left: 0;
      width: 100%;
      top: 9px;
      color: #aaa;
      transition: 0.3s;
      z-index: 1;
      letter-spacing: 0.5px;
    }
  }
}

main {
  background-color: var(--dblue);
  min-height: 100vh;
}

.modal-body {
  padding: 1.6rem 2rem 2rem;
}

.card {
  box-shadow: 0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.3),
    0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.3),
    0 0.25rem 0.53125rem rgba(4, 9, 20, 0.5),
    0 0.125rem 0.1875rem rgba(4, 9, 20, 0.3);
  min-width: 50%;
  max-width: 600px;
  border-width: 0;
  margin: auto;
  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      font-size: var(--h3);
      margin-bottom: 0;
    }
  }
  .table-responsive {
    max-height: 400px;
  }
  .user {
    display: flex;
    flex: 1;
    position: relative;
    align-items: center;
    .user-heading {
      opacity: 0.8;
      font-size: var(--normal);
      font-weight: var(--bold);
    }
    .user-subheading {
      font-size: var(--smaller);
      opacity: 0.7;
    }
  }
  .delete-button {
    all: unset;
    cursor: pointer;
    svg {
      fill: rgb(221, 51, 51);
    }
  }
}
</style>