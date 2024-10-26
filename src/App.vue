<template>
    <div id="app" class="min-h-screen flex flex-col">
        <Header />
        <main class="flex-grow pt-6">
            <div class="container mx-auto max-w-screen-lg">
                <Subscriptions />
            </div>
        </main>
        <Footer />
    </div>
</template>

<script setup>
import Subscriptions from './components/Subscriptions.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>
