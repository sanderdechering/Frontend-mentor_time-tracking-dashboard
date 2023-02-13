<template>
  <main class="min-h-screen w-full bg-My-very-dark-blue">
    <div class="m-auto flex flex-col px-10 pt-10 lg:w-[1100px] lg:flex-row">
      <!--   Profile   -->
      <section class="m-2 rounded-b-2xl bg-My-dark-blue lg:w-1/4">
        <div
          class="relative flex rounded-2xl bg-My-blue py-6 lg:h-4/6 lg:flex-col"
        >
          <img
            class="ml-8 mr-4 h-14 w-14 rounded-full border-2 border-white lg:ml-6"
            src="/images/image-jeremy.png"
          />
          <div class="my-auto px-6 lg:mx-auto">
            <h2 class="text-sm text-white/40">Report for</h2>
            <h1 class="text-xl font-light text-white lg:text-4xl">
              Jeremy Robson
            </h1>
          </div>
        </div>
        <div class="mt-[-20px] lg:mt-[0px]">
          <ul
            class="flex justify-around pt-10 pb-5 text-My-violet/70 lg:flex-col lg:pt-5 lg:pl-8"
          >
            <li>Daily</li>
            <li class="text-white lg:py-4">Weekly</li>
            <li>Monthly</li>
          </ul>
        </div>
      </section>

      <!--   Time tracking Cards   -->
      <div
        class="grid h-fit grid-cols-1 lg:w-5/6 lg:grid-cols-3"
        v-if="json.ready === true"
      >
        <Card v-for="item in json.object" :data="item" />
      </div>
    </div>
    <div class="attribution mx-auto max-w-[1100px] p-12 text-center text-white">
      Challenge by
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        class="text-My-blue"
        >Frontend Mentor</a
      >. Coded by
      <a href="https://sanderdechering.nl" class="text-My-blue"
        >Sander Dechering</a
      >.
    </div>
  </main>
</template>

<script setup lang="ts">
import Card from "./components/Card.vue";
import { onBeforeMount, onMounted, reactive } from "vue";

let json = reactive({
  object: JSON,
  ready: false,
});
let myJson = JSON;
onMounted(() => {
  fetch("/data.json")
    .then((response) => response.json())
    .then((data) => {
      json.object = data;
      json.ready = true;
    });
});
</script>

<style scoped></style>
