<template>
  <div class="mt-6 flex flex-col lg:m-2">
    <div class="bg- h-20 overflow-hidden rounded-t-2xl" :class="useStyles()">
      <img
        class="ml-auto mt-[-10px] mr-4 max-h-fit"
        :src="'../../images/' + jsonData.imageFileName"
        alt="svg image of bag"
      />
    </div>
    <div
      class="mt-[-45px] flex flex-col justify-between rounded-2xl bg-My-dark-blue p-10 hover:bg-My-desaturated-blue lg:p-0 lg:px-6 lg:py-6"
    >
      <div class="flex">
        <h3 class="text-xl text-white lg:text-lg">{{ jsonData.title }}</h3>
        <img
          class="ml-auto mt-3 h-fit w-auto"
          src="../../images/icon-ellipsis.svg"
          alt="svg icon"
        />
      </div>

      <div class="flex lg:mt-6 lg:flex-col">
        <span class="text-3xl font-light text-white lg:text-5xl"
          >{{ jsonData.timeframes.weekly.current }}hrs</span
        >
        <span
          class="ml-auto mt-2 block font-light text-My-violet lg:ml-0 lg:mt-3"
          >Last Week - {{ jsonData.timeframes.weekly.previous }}hrs</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type BackgroundColor =
  | "work"
  | "play"
  | "study"
  | "exercise"
  | "social"
  | "selfCare";

interface DataObject {
  title: string;
  bgColor: BackgroundColor;
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
  dataObject: string;
}>();

let jsonData: DataObject = JSON.parse(props.dataObject);

function useStyles() {
  const styles = {
    work: "bg-My-light-red-work",
    play: "bg-My-soft-blue-play",
    study: "bg-My-light-red-study",
    exercise: "bg-My-lime-green-exercise",
    social: "bg-My-violet-social",
    selfCare: "bg-My-soft-orange-self-care",
  };
  return styles[jsonData.bgColor];
}
</script>

<style scoped></style>
