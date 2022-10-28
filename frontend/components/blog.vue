<script setup lang="ts">
import { ref } from "vue";
defineProps<{ data: any }>();
</script>
<template>
  <div class="mt-16 min-h-screen">
    <div
      class="
        relative
        lg:h-[50vh]
        h-[30vh]
        w-full
        bg-cover bg-center bg-no-repeat
        uppercase
      "
      v-bind:style="[
        data.image.url
          ? { backgroundImage: 'url(' + data.image.url + ')' }
          : '',
      ]"
    >
      <div class="absolute inset-0 z-0 bg-gray-900 opacity-75"></div>

      <div class="h-full container mx-auto flex items-center justify-center">
        <div class="flex flex-col items-center z-10">
          <h1
            class="
              mx-6
              mt-1
              font-bold
              text-center text-white text-5xl
              md:text-6xl
              sm:text-center sm:mx-0
            "
          >
            {{ data.title }}
          </h1>
        </div>
        <div></div>
      </div>
    </div>
    <div
      class="
        mx-auto
        prose
        md:prose-lg
        lg:prose-xl
        prose-h1:text-3xl
        prose-h2:text-2xl prose-h2:my-0
        prose-h1:text-teal-500 prose-h1:text-left
        prose-h2:text-left
        prose-p:text-lg prose-p:text-justify
        prose-slate
        prose-a:text-indigo-600 prose-a:font-normal
        hover:prose-a:no-underline
        prose-em:text-teal-400
        prose-blockquote:text-green-400
        prose-ul:text-left
        px-4
        lg:px-0
      "
    >
      <div class="not-prose"></div>
      <div class="my-12" v-html="data.description"></div>
    </div>
  </div>
</template>