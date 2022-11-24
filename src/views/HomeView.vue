<template>
  <div id="content-wrapper" class="code-font">
    <h2>
      (
      <span class="highlight-1">Software Developer</span>
      &&
      <span class="highlight-2">System Administrator</span>
      )
    </h2>
  </div>
</template>

<style scoped>
#content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: small;
}

span {
  transition: color var(--theme-transition-time);
}

@media (prefers-color-scheme: dark) {
  .highlight-1 {
    color: var(--theme-c-pastel-2);
  }

  .highlight-2 {
    color: var(--theme-c-pastel-3);
  }
}
</style>
