<template>
  <div class="mb-5">
    <h1 class="title-main text-center">links e Redirects</h1>
    <h3 class="mb-2 text-center">Clique em algum link para ser redirecionado</h3>
  </div>
  <div class="container">
    <div class="col-12">
      <div class="row">
        <div class="col-6 col-md-4" v-for="(link, index) in listLinks" :key="link.id">
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
    <nav aria-label="Page navigation example float-right">
      <ul class="pagination justify-content-end">
        <li class="page-item">
          <a class="page-link" @click="paginationPrevious" tabindex="-1">Previous</a>
        </li>
        <div v-for="i in pages" :key="i">
          <li class="page-item active" v-if="pageActual == i">
            <a class="page-link" @click="pagination(i)">{{ i }}</a>
          </li>
          <li class="page-item" v-else>
            <a class="page-link" @click="pagination(i)">{{ i }}</a>
          </li>
        </div>
        <li class="page-item">
          <a class="page-link" @click="paginationNext">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import api from "../services/api";
export default {
  data() {
    return {
      links: [],
      limitItems: 10,
      pageActual: 1,
      pages: 0,
    };
  },
  mounted: async function () {
    await this.list();
    this.pages = Math.ceil(this.links.length / this.limitItems);
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
    pagination(i) {
      this.pageActual = i;
    },
    paginationPrevious() {
      if (this.pageActual > 1) this.pageActual -= 1;
    },
    paginationNext() {
      if (this.pageActual < this.pages) this.pageActual += 1;
    },
    async redirectLink(url) {
      try {
        let { data } = await api.get("/" + url);
        window.location.href = "http://www." + data;
      } catch (error) {
        this.$swal({ icon: "error", html: error.response.data.message });
        console.error(error);
      }
    },
  },
  computed: {
    listLinks: function () {
      let result = [];
      let totalPage = Math.ceil(this.links.length / this.limitItems);
      let count = this.pageActual * this.limitItems - this.limitItems;
      let delimiter = count + this.limitItems;
      if (this.pageActual <= totalPage) {
        for (let i = count; i < delimiter; i++) {
          if (this.links[i] != null) {
            result.push(this.links[i]);
          }
          count++;
        }
      }
      return result;
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
.card-body {
  cursor: pointer;
}
h3 {
  color: rgba(245, 245, 220, 0.877);
}
@import "~bootstrap/dist/css/bootstrap.css";
</style>
