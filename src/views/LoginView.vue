<template>
  <main>
    <section style="padding-top: 0">
      <div class="container">
        <div class="row justify-content-center align-items-center login">
          <div class="login__card">
            <div class="login__card--head">
              <h1>login</h1>
              <h2 class="slog">Sign in to your account</h2>
            </div>
            <form action="" @submit.prevent="login()">
              <div class="input-group mb-3">
                <span class="input-group-text" id="username-addon1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15px"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  class="form-control"
                  required
                  placeholder="Username"
                  v-model="this.filter.username"
                  aria-label="Username"
                  aria-describedby="username-addon1"
                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="password-addon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15px"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"
                    />
                  </svg>
                </span>
                <input
                  type="password"
                  class="form-control"
                  required
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="password-addon"
                  v-model="this.filter.password"
                />
              </div>
              <button class="btn btn-primary btn-user btn-block" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Swal from "sweetalert2";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      usersList: [],
      filter: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    ...mapActions("userModule", ["checkUser"]),

    async login() {
      this.usersList = await this.checkUser(this.filter);
      if (this.usersList) {
        if (this.usersList.role == "Admin") {
          this.$store.commit("setAuth", true);
          this.$router.replace({ name: "admin" });
        } else {
          Swal.fire({
            icon: "error",
            title: "Sorry, This permission for admin only",
            showConfirmButton: false,
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Sorry, you aren't exist",
          showConfirmButton: false,
        });
      }
    },
  },
  async created() {},
  computed: {
    ...mapGetters("userModule", ["users"]),
  },
};
</script>

<style lang="scss" scoped>
main {
  background-image: radial-gradient(var(--blue), var(--dblue));
}
.login {
  width: 100%;
  min-height: 100vh;
  margin: 0;

  &__card {
    background-color: var(--white);
    padding: 40px 20px;
    text-align: center;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    max-width: 400px;
    h1 {
      font-size: 32px;
      font-weight: 700;
      color: var(--dblue);
    }
    .slog {
      font-size: 13px;
      color: var(--dgrey);
      padding-bottom: 1rem;
      margin: 0;
    }

    form {
      .input-group {
        &-text {
          svg {
            fill: var(--dblue);
          }
        }
        .form-control {
          border-radius: 0 0.25rem 0.25rem 0;
          &:focus {
            box-shadow: none;
          }
        }
      }
      button {
        display: block;
        width: 100%;
        background-color: #6746b1;
        border-radius: 5px;
        padding: 9px;
        font-size: 16px;
        color: #ffffff;
        transition: 0.4s;
        &:hover {
          color: #6746b1;
          border-color: #6746b1;
          background-color: #fff;
        }
      }
    }
  }
}
</style>