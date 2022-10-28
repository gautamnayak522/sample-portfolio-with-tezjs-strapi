<script setup lang="ts">
import { ref } from "vue";
defineProps<{ data: any }>();
</script>
<script lang="ts">
  export default {
  methods: {
    change() {
      let inputs = document.getElementById('toggle');
      inputs.checked = false;
   }
  }
}
</script>

<template>
  <TezLazy
    class="fixed top-0 bg-white w-full shadow-md z-50"
    :sourcePath="data.dynamicSourcePath"
    v-slot="source"
  >
     <header class="container mx-auto bg-white py-2">
      <nav>
        <div class="flex flex-wrap justify-between items-center mx-8">
          <tez-link
            to="/"
            title="Discover India"
            class="flex items-center font-bold text-2xl"
            >Portfolio</tez-link
          >
          <input
            id="toggle"
            data-collapse-toggle="navbar-default"
            type="checkbox"
            class="
              group
              inline-flex
              items-center
              p-2
              ml-3
              text-sm text-gray-500
              md:hidden
              hover:bg-gray-100
              focus:outline-none focus:ring-2 focus:ring-gray-200
              toggle-menu
              invisible
            "
            aria-controls="navbar-default"
            aria-expanded="false"
          />
          <label for="toggle" class="inline-flex md:hidden">
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </label>

          <div class="hidden w-full md:block md:w-auto " id="navbar-default">
            <ul
              class="
                flex flex-col
                p-4
                mt-4
                md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium
                border-0
                md:bg-white
              "
            >
              <li>
                <tez-link
                  v-bind:key="Page.slug"
                  :to="Page.slug"
                  v-for="Page in source.items"
                  class="
                    block
                    md:inline-block
                    my-3
                    text-base
                    font-bold
                    leading-5
                    text-gray-500
                    transition-colors
                    duration-900
                    transform
                    hover:text-indigo-600
                    md:mx-4 md:my-0
                    no-underline
                  "
                  @click='change()'
                >
                  {{ Page.heading }} </tez-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>      	
  </TezLazy>  
</template>

<style lang="css">
.toggle-menu:checked ~ div {
  display: block !important;
}
</style>