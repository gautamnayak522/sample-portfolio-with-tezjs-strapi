<script setup lang="ts">
import { ref } from "vue";
defineProps<{ data: any }>();
</script>
<template>
  <div>
    <TezLazy
      class="tezLazy mx-20"
      :sourcePath="data.dynamicSourcePath"
      v-slot="source"
    >
      <!-- about-page -->

      <div class="container md:text-center pb-5 mb-5 fade-in">
        <h3 class="mt-2">My Skills</h3>
        <hr
          class="
            md:hidden
            w-11
            h-0.5
            mt-0.5
            mb-4
            ml-0
            border-none
            bg-indigo-600
          "
        />
        <p class="mt-2">
          It won’t be a bigger problem to find one video game lover in your
          neighbor. Since the introduction of Virtual Game.
        </p>

        <div>
          <tez-iterator
            class="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            :items="source.items"
            v-slot="skill"
          >
            <div>
              <h5 class="mt-2">{{ skill.skill }}</h5>
              <div class="h-5 relative w-full rounded-full overflow-hidden">
                <div class="w-full h-full bg-gray-200 absolute"></div>
                <div
                  class="h-full bg-indigo-400 absolute"
                  v-bind:style="{ width: skill.percentage + '%' }"
                >
                  <span class="text-white mx-5">{{ skill.percentage }}%</span>
                </div>
              </div>
            </div>
          </tez-iterator>
        </div>
      </div>
    </TezLazy>
  </div>
</template>
<style scoped>
.fade-in {
  animation: fadeIn ease 3s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>