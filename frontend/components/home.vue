<script setup lang="ts">
import { ref } from "vue";
defineProps<{ data: any }>();
</script>

<template>
  <TezLazy
    class="tezLazy"
    :sourcePath="data.dynamicSourcePath"
    v-slot="source"
  >
    <!-- Home -->
    <header
      class="home py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32 min-h-screen"
    >
      <tez-iterator class="" :items="source.items" v-slot="home">
        <div class="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div class="mb-16 lg:mt-32 xl:mt-40 xl:mr-12">
            <h6>Hello</h6>
            <h1 class="h1-large mb-5  name">I'm {{home.name}}</h1>
            <h5>{{ home.designation }}</h5>
            <p class="p-large mt-2 mb-8">
              {{ home.objective }}
            </p>
            <a class="btn-solid-lg mt-5" href="#">Download CV</a>
          </div>
          <div class="container w-96 xl:w-3/4 xl:text-right">
            <img 
              v-tez-src="home.image.url"
              :width="home.image.width"
              :height="home.image.height"
              :alt="home.image.alternativeText"
            />
          </div>
        </div>

      </tez-iterator>
    </header>
    <!-- end of home -->
   
  </TezLazy>
</template>



<style lang="css">
div.tezIterator > div {
  width: 100%;
  padding: 0px 14px;
  margin-bottom: 20px;
}
@media (min-width: 1024px) {
  div.tezIterator > div {
    width: 50%;
    padding: 0px 14px;
    margin-bottom: 30px;
  }
}
@media (min-width: 1280px) {
  div.tezIterator > div {
    width: 33.33%;
    padding: 0px 14px;
    margin-bottom: 40px;
  }
}

header {
  animation-duration: 1s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-bottom: 100%;
    width:200%;
  }

  to {
    margin-top: 0%;
    width: 100%;
  }
}


</style>