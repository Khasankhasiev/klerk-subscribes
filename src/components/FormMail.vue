<template>
    <div class="flex flex-col">
        <div class="form-container flex items-center">
            <div class="email-input flex w-full">
                <input
                    type="email"
                    placeholder="Электронная почта"
                    class="w-full py-2 px-3 border border-gray-300 rounded-l-2xl focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    class="py-2 px-4 bg-blue-600 text-white border border-blue-600 rounded-r-2xl transition duration-300 hover:bg-blue-500 hidden xs:inline"
                >
                    Подписаться
                </button>
                <button
                    type="submit"
                    class="py-2 px-4 bg-blue-600 text-white border border-blue-600 rounded-r-2xl transition duration-300 hover:bg-blue-500 inline xs:hidden"
                >
                    <svg
                        width="8.644897"
                        height="14.000000"
                        viewBox="0 0 8.6449 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                        <defs />
                        <path
                            id="Vector"
                            d="M0 12.35L5.34 7L0 1.64L1.64 0L8.64 7L1.64 14L0 12.35Z"
                            fill="#FFFFFF"
                            fill-opacity="1.000000"
                            fill-rule="nonzero"
                        />
                    </svg>
                </button>
            </div>
        </div>
        <Switch>Подписаться на все рассылки</Switch>
    </div>
</template>

<script setup>
import Switch from './UI/Switch.vue';
</script>
