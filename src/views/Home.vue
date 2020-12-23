<template>
  <div class="mb-5">
    <h1 class="title-main text-center">links e Redirects</h1>
    <h3 class="mb-2 text-center">Clique em algum link para ser redirecionado</h3>
  </div>
  <div class="container">
    <div class="col-12">
      <div class="row">
        <div class="col-6 col-md-4" v-for="(link, index) in links" :key="link.id">
          <div class="card border-dark mb-3" style="max-width: 18rem">
            <div class="card-header">{{ index }}</div>
            <div class="card-body text-dark">
              <h5 class="card-title" @click="redirectLink(link.url)">
                {{ link.url }}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../services/api";
// import $ from "jquery";
export default {
  data() {
    return {
      links: [],
    };
  },
  mounted: async function () {
    await this.list();
  },
  methods: {
    async list() {
      try {
        let { data } = await api.get("/api");
        this.links = data;
      } catch (error) {
        console.error(error);
      }
    },
    async redirectLink(url) {
      try {
        let { data } = await api.get("/" + url);
        window.location.href = "http://www."+data;
      } catch (error) {
           this.$swal({ icon: "error", html: error.response.data.message });
        console.error(error);
      }
    },
  },
};
</script>

<style>
.title-main {
  margin-bottom: 40px;
  color: #ecf2fd;
  position: relative;
  z-index: 2;
  letter-spacing: -0.05em;
}
.icons-links {
  width: 1.5rem;
  height: 2rem;
}
.font-12 {
  font-size: 14px !important;
}
.card-body{
  cursor: pointer;
}
h3 {
  color: rgba(245, 245, 220, 0.877);
}
@import "~bootstrap/dist/css/bootstrap.css";
</style>
