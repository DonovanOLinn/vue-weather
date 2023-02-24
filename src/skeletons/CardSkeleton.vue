<template>
    <div class="flex flex-col flex-1 gap-2">
        <Animation class="max-w-[50%]" />
        <Animation class="max-w-[40%]" />
    </div>

    <div class="flex flex-col items-end flex-1 gap-2">
        <Animation class="max-w-[50px] w-full" />
        <Animation class="max-w-[75px] w-full" />
    </div>
</template>

<script setup>
import Animation from './Animation.vue'
</script>
