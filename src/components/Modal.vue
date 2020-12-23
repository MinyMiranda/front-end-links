<template>
  <div>
    <div v-if="showModal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Novo Link</h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    @click="sendClose"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                <slot></slot>
                </div>
                <div class="modal-footer">
                  <button
                    v-if="create"
                    type="button"
                    class="btn btn-primary"
                    @click="sendCreate"
                  >
                    Salvar
                  </button>
                  <button
                    v-else
                    type="button"
                    class="btn btn-primary"
                    @click="sendEdit"
                  >
                    Editar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
// import $ from "jquery";
export default {
  name: "Modal",
  props: {
    showModal: Boolean,
    create: Boolean,
  },
  methods: {
    sendClose() {
      this.$emit("event-close-modal");
    },
    sendCreate() {
      this.$emit("event-create");
    },
    sendEdit() {
      this.$emit("event-edit");
    },
  },
};
</script>
