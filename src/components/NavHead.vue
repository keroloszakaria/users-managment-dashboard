<template>
  <header :class="{ sticky: sticky }">
    <nav class="navbar-expand-lg">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
            <a class="navbar-brand" href="/">Logo</a>
          </div>

          <div class="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/">About</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/">Services</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/">News</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/">Contact</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-7 col-sm-6 col-6 order-2 order-sm-3">
            <div class="text-end" v-if="isAuth == false || isAuth == null">
              <router-link class="login-btn" to="/login">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
                  />
                </svg>
                Login</router-link
              >
              <a class="main-btn ml-30" href="/">Get Started</a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
                  />
                </svg>
              </button>
            </div>
            <div class="text-end" v-if="isAuth == true">
              <a href="/" class="login-btn" @click="logout()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M96 480h64C177.7 480 192 465.7 192 448S177.7 416 160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64C177.7 96 192 81.67 192 64S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256C0 437 42.98 480 96 480zM504.8 238.5l-144.1-136c-6.975-6.578-17.2-8.375-26-4.594c-8.803 3.797-14.51 12.47-14.51 22.05l-.0918 72l-128-.001c-17.69 0-32.02 14.33-32.02 32v64c0 17.67 14.34 32 32.02 32l128 .001l.0918 71.1c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C514.4 264.4 514.4 247.6 504.8 238.5z"
                  />
                </svg>
                Logout</a
              >
              <router-link class="main-btn ml-30" to="/admin"
                >My Account</router-link
              >

              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    let isAuth = JSON.parse(localStorage.getItem("isAuth"));
    return {
      isAuth: isAuth,
      sticky: false,
    };
  },
  methods: {
    logout() {
      this.isAuth = false;
      localStorage.setItem("isAuth", this.isAuth);
      // localStorage.setItem("isAdmin", false);
    },
  },
  created() {},
  mounted() {
    document.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
header {
  padding-top: 30px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: 999;
  background-color: transparent;
  &.sticky {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 1010;
    background: #fff;
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.06);
    padding-top: 20px;
    padding-bottom: 20px;
    animation: sticky 1.2s;
    background: #290645;

    @keyframes sticky {
      0% {
        top: -200px;
      }
      100% {
        top: 0;
      }
    }
  }
  .navbar-brand {
    color: #fff;
    font-weight: 700;
    font-size: 1.8rem;
  }
  .collapse {
    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      > li {
        display: inline-block;
        margin-right: 30px;
        position: relative;
        > a {
          font-size: 15px;
          font-weight: 500;
          color: #fff;
          font-weight: 500;
        }
      }
    }
  }
  .login-btn {
    font-size: 15px;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    margin-right: 30px;

    svg {
      fill: #fff;
      padding-right: 6px;
      width: 20px;
    }
  }
  .navbar-toggler {
    outline: none;
    box-shadow: none;
    svg {
      width: 20px;
      fill: #fff;
    }
  }
}

@media (max-width: 991px) {
  .main-btn {
    display: none;
  }
  header {
    .login-btn {
      margin-right: 0;
    }
    .navbar-collapse {
      $width: 200px;
      position: fixed;
      left: -$width;
      top: 0;
      width: $width;
      height: 100%;
      padding: 40px 20px;
      background-color: #fff;
      transition: 0.3s linear;

      ul {
        > li {
          display: block;
          margin-right: 0;
          > a {
            font-size: 14px;
            font-weight: 500;
            text-transform: capitalize;
            display: block;
            padding-bottom: 10px;
            margin-bottom: 10px;
            border-bottom: 1px solid #ededed;
            color: #222;
            transition: all 0.3s ease-out 0s;
          }
        }
      }
      &.collapsing {
        height: 100% !important;
      }
      &.show {
        height: 100%;

        left: 0;
      }
    }
  }
}
</style>