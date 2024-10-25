<template>
    <label class="flex items-center text-sm gap-2 mt-4">
        <input type="checkbox" class="hidden toggle-switch" />
        <span
            class="relative w-10 h-5 bg-gray-300 rounded-full cursor-pointer transition-colors duration-300 ease-in-out"
        >
            <span
                class="absolute left-1 top-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out"
            ></span>
        </span>
        <slot></slot>
    </label>
</template>

<style scoped>
.toggle-switch:checked + span {
    background-color: #4285f4;
}

.toggle-switch:checked + span span {
    transform: translateX(15px);
}
</style>
