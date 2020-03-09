<template>
  <div class="container">
    <div class="item-nested">
      <logo class="item-nested-logo" />
      <!-- Adding example for responsive style usage -->
      <h1 class="title md:border md:border-green">
        test-postcss
      </h1>
      <h2 class="subtitle">
        My grand Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<!--Using lang is optional, may be useful for some IDEs -->
<style lang="postcss">
  // Adding local postcss-variable
  $grey: #35495e;

 //Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto !important;
  // Example of nested-props usage
  transition: {
    property: transform;
    duration: 0.35s;
    timing-function: ease;
  };
}
 // Example of using nested postCSS plugin
 .item {
   &-nested {
     @apply p-3;
     // Example of using global postcss-variables
     border: 1px solid $color.green;
   }
 }

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  // Example of using local postcss-variables
  color: $grey;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: $grey;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
