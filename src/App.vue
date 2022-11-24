<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div id="main-wrapper">
    <header>
      <h1 id="title">John Boyer</h1>

      <nav class="code-font">
        <RouterLink to="/">Home</RouterLink>
        <a href="https://github.com/johntboyer">GitHub</a>
      </nav>
    </header>

    <div id="poly-sep" />

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
#main-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50rem;
  transition: width var(--theme-transition-time);
}

header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

nav {
  display: flex;
  column-gap: 1em;
  font-size: large;
}

a {
  border-bottom: 1px solid;
}

#title {
  font-size: 5rem;
  font-weight: 600;
  line-height: 1.5em;
  text-align: center;
  transition: font-size var(--theme-transition-time),
    color var(--theme-transition-time);
}

main {
  margin-top: 2rem;
  width: 100%;
}

#poly-sep {
  width: 100%;
  height: 1em;
  background-color: #0000003d;
  transform: rotate(1.5deg);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--theme-transition-time);
}

@media (prefers-color-scheme: dark) {
  #poly-sep {
    background-color: var(--theme-c-pastel-1);
  }
}

@media screen and (max-width: 800px) {
  #main-wrapper {
    width: 35rem;
  }
}

@media screen and (max-width: 550px) {
  #main-wrapper {
    width: 20rem;
  }
  #title {
    font-size: 3rem;
  }
}
</style>
