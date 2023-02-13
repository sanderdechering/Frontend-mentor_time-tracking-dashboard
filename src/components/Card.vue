<template>
  <div class="mt-6 flex flex-col lg:m-2">
    <div class="h-20 overflow-hidden rounded-t-2xl" :class="data.bgColor">
      <img
        class="ml-auto mt-[-10px] mr-4 max-h-fit"
        :src="'images/' + data.imageFileName"
        alt="svg image of bag"
      />
    </div>
    <div
      class="mt-[-45px] flex flex-col justify-between rounded-2xl bg-My-dark-blue p-10 hover:bg-My-desaturated-blue lg:p-0 lg:px-6 lg:py-6"
    >
      <div class="flex">
        <h3 class="text-xl text-white lg:text-lg">{{ data.title }}</h3>
        <img class="ml-auto mt-3 h-fit w-auto" src="images/icon-ellipsis.svg" />
      </div>
      <div class="flex lg:mt-6 lg:flex-col">
        <span class="text-3xl font-light text-white lg:text-5xl"
          >{{ data.timeframes.weekly.current }}hrs</span
        >
        <span
          class="ml-auto mt-2 block font-light text-My-violet lg:ml-0 lg:mt-3"
          >Last Week - {{ data.timeframes.weekly.previous }}hrs</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface data {
  title: string;
  bgColor: string;
  imageFileName: string;
  timeframes: {
    daily: {
      current: number;
      previous: number;
    };
    weekly: {
      current: number;
      previous: number;
    };
    monthly: {
      current: number;
      previous: number;
    };
  };
}

const props = defineProps<{
  data: data;
}>();
</script>

<style scoped></style>
