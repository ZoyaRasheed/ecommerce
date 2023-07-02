<template>
  <div>
    <nav>
      <h1>E-<span>Commerce</span></h1>
      <input
        type="text"
        class="search-bar"
        placeholder="Search products ..."
        v-model="input"
        v-on:input="search"
      />
      <ul>
        <li>
          <div class="profile-container">
            <!-- <img
              class="profile-img"
              src="../../assets/product.png"
              alt=""
              v-on:click="toggleMenu"
            /> -->
            <input
              type="file"
              class="profile-img"
              accept="image/*"
              ref="profileImageInput"
              v-on:change="uploadProfileImage"
            />
            <div class="dropdown-menu" v-if="isMenuOpen">
              <ul>
                <li>Profile</li>
                <li>Settings</li>
                <li v-if="token" v-on:click="logout">Logout</li>
                <li v-else>
                  <router-link to="/login" class="link-login"
                    >Login</router-link
                  >
                </li>
              </ul>
            </div>
            <p>{{ userName }}</p>
          </div>
        </li>
      </ul>
    </nav>
    <div class="dropdown" v-if="searchList.length > 0">
      <div class="dropdown-content">
        <ul>
          <li
            v-for="(product, index) in searchList"
            :key="product._id"
            v-on:click="selectProduct(product)"
          >
            <span>{{ index + 1 }}</span>
            <span>{{ product.name }}</span>
            <img :src="product.photos[0].sucure_url" alt="" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
import { getTokenFromCookie } from "../../utils/getBrowserCookies";
// import { getNameFromCookies }  from '../../utils/getNameFromCookies';
export default {
  name: "NavBar",
  props: ["product"],
  data() {
    return {
      token: null,
      input: "",
      products: [],
      searchList: [],
      isMenuOpen: false,
      userName: null,
    };
  },
 
  created() {
    this.token = getTokenFromCookie();
    document.addEventListener("click", this.closeMenus);
    // console.log('calling this')
    // this.userName =getNameFromCookies();
    // console.log(this.username)
    //   try {
    //   this.userName = getNameFromCookies();
    // } catch (error) {
    //   console.error('Error retrieving user name:', error);
    // }
  },
  beforeUnmount() {
    document.removeEventListener("click", this.closeMenus);
  },
  methods: {
    uploadProfileImage() {
    console.log('hello')
  const fileInput = this.$refs.profileImageInput;
  const file = fileInput.files[0];
  if (!file) {
    console.log('hello')
    return;
  }
  const formData = new FormData();
  formData.append("profileImage", file);

  axios
    .put("/auth/update-profile-image", formData, {
      withCredentials: true,
    })
    .then((response) => {
      console.log('wowwww')
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
},
    logout(e) {
      e.preventDefault();
      axios
        .get("/auth/logout", {
          email: "",
          password: "",
        })
        .then((response) => {
          this.$toast.success(`${response.data.message}`);
          document.cookie =
            "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

          this.token = null;
          this.$router.push("/login");
        })
        .catch((err) => {
          this.$toast.error(err);
        });
    },
    async search() {
      if (this.input === "") {
        this.searchList = [];
        this.$emit("clear-selection");
        return;
      }
      const current = this.input;
      setTimeout(async () => {
        try {
          if (this.input !== current) {
            return;
          }
          const response = await axios.post("/product/search", {
            name: this.input,
          });
          if (this.input !== current) {
            return;
          }
          this.searchList = response.data.products;
        } catch (error) {
          this.$toast.error(error.response.data.message);
        }
      }, 300);
    },
    selectProduct(product) {
      this.searchList = [];
      const image = new Image();
      image.onload = () => {
        product.image = product.photos[0].sucure_url;
        this.$emit("select-product", product);
      };
      image.src = product.photos[0].sucure_url;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenus(event) {
      const searchBarClickHandle =
        event.target.classList.contains("search-bar");
      const profileDropdownClickHandle =
        event.target.classList.contains("profile-img");
      if (!searchBarClickHandle && !profileDropdownClickHandle) {
        this.isMenuOpen = false;
        this.searchList = [];
      }
    },
  },
};
</script>
  <style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #9e9e9e1f;
  padding: 14px;
  margin-top: -4rem;
}
nav span {
  color: rgb(84, 94, 90);
}
nav h1 {
  font-size: 28px;
  letter-spacing: 1px;
  cursor: pointer;
}
nav ul li {
  list-style-type: none;
  display: inline-block;
  padding: 10px 25px;
}
nav button {
  padding: 8px;
  margin-top: 0.6rem;
  border-radius: 4px;
  background: #41403c;
  border: none;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
}
.profile-container {
  position: relative;
  display: inline-block;
  cursor: pointer;
}
.profile-img {
  width: 35px;
  height: 35px;
  border: 2px solid black;
  border-radius: 50px;
}
.dropdown-menu {
  position: absolute;
  top: 42px;
  right: 0px;
  background-color: white;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
}
.dropdown-menu ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.dropdown-menu ul li {
  padding: 8px 16px;
  cursor: pointer;
}
.dropdown-menu ul li:hover {
  color: gray;
}
.dropdown-menu > ul > li > .link-login {
  text-decoration: none;
  color: inherit;
  font-weight: normal !important;
}
.search-bar {
  background-color: white;
  padding: 12px;
  width: 30%;
  border: none;
  outline: none;
  border-radius: 8px;
}
.dropdown {
  position: relative;
  display: inline-block;
  top: -2rem;
  left: 2.6rem;
  cursor: pointer;
  width: 32%;
}
.dropdown-content {
  position: absolute;
  background-color: rgb(231, 229, 229);
  color: black;
  border-radius: 20px;
  width: 100%;
  height: auto;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.dropdown-content ul {
  list-style-type: none;
  width: 100%;
}
.dropdown-content li {
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px solid white;
  padding: 5px;
  width: 100%;
}
.dropdown-content li:last-child {
  border-bottom: 0;
}
.dropdown-content span {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.dropdown-content img {
  padding-top: 4px;
  width: 40px;
  height: 40px;
  border-radius: 30%;
}
.dropdown:hover .dropdown-content {
  display: block;
}
@media (max-width: 490px) {
  nav h1 {
    font-size: 12px;
    font-weight: bolder;
  }
  .search-bar {
    padding: 10px;
  }
  .dropdown {
    left: -0.8rem;
  }
}
</style>
  
  