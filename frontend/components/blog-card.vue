<script setup lang="ts">
defineProps<{ blog: any }>();
</script>
<template>
  <div
    class="
      w-full
      shadow-lg
      hover:shadow-2xl
      transition-all
      delay-100
      ease-in
      rounded-md
      px-4
      h-full
      mt-14
      fade-in
    "
  >
    <div class="card px-4 py-8 flex flex-wrap h-full">
      <div class="h-[200px] overflow-hidden">
        <tez-link class="no-underline" :to="blog.slug" :title="blog.title">
          <img
            v-tez-src="blog.image.url"
            :width="blog.image.width"
            :height="blog.image.height"
            :alt="blog.image.alternativeText"
          />
        </tez-link>
      </div>
      <div
        class="
          bg-white
          rounded-b
          lg:rounded-b-none lg:rounded-r
          flex flex-col
          justify-between
          leading-normal
        "
      >
        <div>
          <tez-link class="no-underline" :to="blog.slug" :title="blog.title">
            <h5
              class="
                mb-2
                text-2xl
                font-semibold
                tracking-tight
                text-black
                hover:text-indigo-600
              "
            >
              {{ blog.title }}
            </h5>
          </tez-link>

          <div
            class="text-gray-700 text-base my-4"
            v-html="[blog.description.slice(0, 220).concat('...')]"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
