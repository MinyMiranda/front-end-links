<template>
  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th class="text-center">Número</th>
        <th class="text-center">Url</th>
        <th class="text-center">Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(link, index) in links" :key="link.id">
        <td class="text-center">{{ index }}</td>
        <td class="text-center">{{ link.url }}</td>
        <td class="text-center">
          <button
            v-if="linkFather"
            class="btn btn-outline-success"
            @click="goLink(link.id)"
          >
            <svg
              id="i-external"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="18"
              height="18"
              fill="none"
              stroke="currentcolor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path d="M14 9 L3 9 3 29 23 29 23 18 M18 4 L28 4 28 14 M28 4 L14 18" />
            </svg>
          </button>
          <button class="btn btn-outline-primary m-1" @click="sendEditeToIndex(index)">
            <svg
              id="i-edit"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="18"
              height="18"
              fill="none"
              stroke="currentcolor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path d="M30 7 L25 2 5 22 3 29 10 27 Z M21 6 L26 11 Z M5 22 L10 27 Z" />
            </svg>
          </button>

          <button class="btn btn-outline-danger m-1" @click="sendDeleteToIndex(link.id)">
            <svg
              id="i-trash"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="18"
              height="18"
              fill="none"
              stroke="currentcolor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path
                d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6"
              />
            </svg>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Table",
  props: {
    links: Array,
    linkFather: Boolean,
  },
  methods: {
    sendDeleteToIndex(index) {
      this.$emit("event-table-delete", index);
    },
    sendEditeToIndex(index) {
      this.$emit("event-table-edite", index);
    },
    goLink(id) {
      this.$router.push("/redirects?" + id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
