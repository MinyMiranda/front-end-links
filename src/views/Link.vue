<template>
  <div class="container">
    <button class="float-right btn btn-warning mb-2" @click="openModal">
      Gerar novo Link
    </button>
    <table-component
      :links="links"
      :linkFather="true"
      @event-table-delete="showDeleteSwal"
      @event-table-edite="showModalEdit"
    >
    </table-component>
  </div>
  <modal-component
    :showModal="showModal"
    :create="create"
    @event-close-modal="closeModal"
    @event-edit="confirmEdit"
    @event-create="createLink"
  >
    <form id="form-link">
      <div class="mb-3">
        <input id="id" v-model="form.id" type="hidden" name="id" />
        <label for="url" class="form-label">Url</label>
        <input type="text" name="url" v-model="form.url" class="form-control" />
      </div>
    </form>
  </modal-component>
</template>

<script>
import api from "../services/api";
import $ from "jquery";
import TableComponent from "../components/Table";
import ModalComponent from "../components/Modal";
export default {
  data() {
    return {
      showModal: false,
      showModalRedirect: false,
      links: [],
      create: true,
      form: {
        id: "",
        url: "",
      },
    };
  },
  components: {
    TableComponent,
    ModalComponent,
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
    openModal() {
      this.form.url = "";
      this.form.count = "";
      this.create = true;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    showModalEdit(id) {
      this.form.id = this.links[id].id;
      this.form.url = this.links[id].url;
      this.create = false;
      this.showModal = true;
    },
    async createLink() {
      let formData = new FormData($("#form-link")[0]);
      try {
        await api.post("/api/links/store", formData);
        this.$swal({
          icon: "success",
          timer: 3000,
          title: "Link criado com sucesso!",
          showConfirmButton: false,
        });
        this.showModal = false;
        this.list();
      } catch (error) {
        let errors = "";
        $.each(error.response.data.message, function (i, dados) {
          errors = errors + "<br>" + dados[0];
        });
        this.$swal({ icon: "error", html: errors });
        this.showModal = false;
      }
    },
    async confirmEdit() {
      let formData = new FormData($("#form-link")[0]);
      try {
        await api.post("/api/links/update", formData);
        this.$swal({
          icon: "success",
          timer: 3000,
          title: "Link editado com sucesso!",
          showConfirmButton: false,
        });
        this.showModal = false;
        this.list();
      } catch (error) {
        let errors = "";
        $.each(error.response.data.message, function (i, dados) {
          errors = errors + "<br>" + dados[0];
        });
        this.$swal({ icon: "error", html: errors });
        this.showModal = false;
      }
    },
    showDeleteSwal(id) {
      this.$swal({
        title: "Você tem certeza?",
        text: "Você não pode reverter essa ação",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sim",
        cancelButtonText: "Não",
        showCloseButton: true,
        showLoaderOnConfirm: true,
      }).then((result) => {
        if (result.value) {
          this.confirmDelete(id);
        }
      });
    },
    async confirmDelete(id) {
      try {
        await api.delete("/api/links/delete/" + id);
        this.$swal({
          icon: "success",
          timer: 3000,
          title: "Link deletado com sucesso!",
          showConfirmButton: false,
        });
        this.list();
      } catch (error) {
        this.$swal({
          icon: "error",
          html: "Erro ao deletar, entre em contato com o suorte.",
        });
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.icons-links {
  width: 1.5rem;
  height: 2rem;
}
.font-12 {
  font-size: 14px !important;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>
