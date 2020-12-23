<template>
  <nav class="navbar navbar-dark bg-dark mb-5 sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand mb-0 h1" href="/">Links e Redirects</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/links">Administrar Links</a>
        </li>
      </ul>
    </div>
  </nav>
  <div style="min-height:500px">
  <router-view/>
  </div>
  <footer class="bg-dark text-white text-center text-lg-start">
    <div class="container">
      <div class="row">
        <div class="p-3 col-lg-6">
          <p class="copyright text-center text-white font-12">
            Copyright © 2020 Ysmine Miranda dos Santos
          </p>
        </div>
        <div class="text-center col-lg-6 p-3">
          <a
            href="https://www.facebook.com/profile.php?id=100008565492028"
            target="_blank"
            class="m-2 text-light"
          >
            <ion-icon class="icons-links" name="logo-facebook"></ion-icon>
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank" class="m-2 text-light">
            <ion-icon class="icons-links" name="logo-linkedin"></ion-icon>
          </a>
          <a
            href="https://www.instagram.com/ysminemiranda/"
            target="_blank"
            class="m-2 text-light"
          >
            <ion-icon class="icons-links" name="logo-instagram"></ion-icon>
          </a>
          <a
            href="https://github.com/MinyMiranda/"
            target="_blank"
            class="m-2 text-light"
          >
            <ion-icon class="icons-links" name="logo-github"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #8d6cca;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body {
  background: linear-gradient(rgb(172, 104, 166), white);
}

@import "~bootstrap/dist/css/bootstrap.css";
</style>
