<template>
    <div id="app" class="min-h-screen flex flex-col">
        <header class="xs:pt-12 mt-6">
            <div
                class="container mx-auto flex flex-col items-center max-w-screen-lg"
            >
                <div class="mb-6">
                    <img
                        width="75px"
                        src="./assets/logo_klerk.svg"
                        alt="Логотип"
                    />
                </div>
                <ul class="flex text-xs text-gray-500">
                    <li>
                        <a href="" class="border-b-2 hover:text-gray-700"
                            >Хлебные крошки</a
                        >
                    </li>
                    <li>
                        <a href="" class="border-b-2 hover:text-gray-700"
                            >Хлебные крошки</a
                        >
                    </li>
                    <li>
                        <a href="" class="border-b-2 hover:text-gray-700"
                            >Хлебные крошки</a
                        >
                    </li>
                </ul>
            </div>
        </header>

        <main class="flex-grow pt-6">
            <div class="container mx-auto max-w-screen-lg">
                <Subscriptions />
            </div>
        </main>

        <footer class="xs:py-12 py-8">
            <div class="container mx-auto flex justify-center">
                <img src="./assets/footer-img.svg" alt="Footer Image" />
            </div>
        </footer>
    </div>
</template>

<script setup>
import Subscriptions from './components/Subscriptions.vue';
</script>

<style scoped>
li + li::before {
    content: '→';
    margin: 0 5px;
}
</style>
