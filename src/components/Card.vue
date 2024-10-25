<template>
    <div
        class="card bg-white rounded-[16px] flex shadow p-6 w-full max-w-[476px]"
    >
        <div class="card-main w-[348px] xs:pr-6">
            <div class="supstring text-gray-500 text-sm">{{ supstring }}</div>
            <h3 class="title text-xl font-medium mb-2">{{ title }}</h3>
            <div class="substring text-gray-600 text-sm mb-4">
                {{ substring }}
            </div>
            <ul class="card-list space-y-2 mb-4">
                <slot></slot>
            </ul>
            <Switch>Уже получают {{ count }} человек</Switch>
        </div>
        <div class="card-img">
            <img
                class="w-20 border-dashed border-2 border-gray p-1"
                :src="url"
                alt=""
            />
        </div>
    </div>
</template>

<script setup>
import Switch from './UI/Switch.vue';

const props = defineProps({
    supstring: String,
    title: String,
    substring: String,
    url: String,
    count: Number,
});
</script>
