<script setup lang="ts">
defineProps<{ project: any }>();
</script>
<template>

  <div
    class="
      w-full
      shadow-lg
      hover:shadow-2xl
      transition
      duration-300
      delay-500
      ease-in-out
      rounded-md
      px-4
      h-full
      mt-14
      fade-in
    "
  >  
    <div class="card px-4 py-8 flex flex-wrap h-full">
      <div class="h-[200px] overflow-hidden">
        <tez-link class="no-underline" :to="project.slug" :title="project.name">
          <img
            v-tez-src="project.image.url"
            :width="project.image.width"
            :height="project.image.height"
            :alt="project.image.alternativeText"
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
          <tez-link
            class="no-underline"
            :to="project.slug"
            :title="project.name"
          >
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
              {{ project.name }}
            </h5>
          </tez-link>

          <div
            class="text-gray-700 text-base my-4"
            v-html="[project.description.slice(0, 220).concat('...')]"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
