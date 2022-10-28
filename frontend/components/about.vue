<script setup lang="ts">
import { ref } from "vue";
defineProps<{ data: any }>();
</script>

<script  lang="ts">
export default{
   mounted() {
      if(document.getElementById('toggle') !== null && document.getElementById('toggle') !== undefined){
        document.getElementById('toggle').classList.remove('show');
      }
  }
}
</script>

<template>
<div>
  <TezLazy class="tezLazy mx-12" :sourcePath="data.dynamicSourcePath" v-slot="source">
    <!-- about-page -->
   
    <tez-iterator class="" :items="source.items" v-slot="about">
      
      <div class="container about-page fade-in">
        <div class="lg:grid lg:grid-cols-12 lg:gap-x-8">
          <div class="lg:col-span-6">
            <div class="mb-8 text-center lg:mb-0 container sm:w-96 w-3/4">
              <img
                v-tez-src="about.image.url"
                :width="about.image.width"
                :height="about.image.height"
                :alt="about.image.alternativeText"
              />
            </div>
          </div>
          <div class="lg:col-span-6">
            <h3 class="mb-2">About Me</h3>
            <hr class="w-11 h-0.5 mt-0.5 mb-4 ml-0 border-none bg-indigo-600" />
            <p>{{ about.objective }}</p>
            <ul class="list my-6 space-y-2">
              <li class="flex">
                <p>
                  <span class="text-indigo-700">Name : </span>{{ about.name }}
                </p>
              </li>
              <li class="flex">
                <p>
                  <span class="text-indigo-700">Date of Birth : </span
                  >{{ about.dOB }}
                </p>
              </li>
              <li class="flex">
                <p>
                  <span class="text-indigo-700">Address : </span
                  >{{ about.address }}
                </p>
              </li>
              <li class="flex">
                <p>
                  <span class="text-indigo-700">Email : </span>{{ about.email }}
                </p>
              </li>
              <li class="flex">
                <p>
                  <span class="text-indigo-700">Phone : </span>+91
                  {{ about.phone }}
                </p>
              </li>
            </ul>
            <tez-link to="/contact" class="btn-solid-lg">Contact</tez-link>
          </div>
        </div>
      </div>
      <!-- end of about-page -->
    </tez-iterator>
  </TezLazy>



  </div>

</template>

<style  >


.fade-in {
  animation: fadeIn ease 2s;
}
@keyframes fadeIn{
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}
</style>