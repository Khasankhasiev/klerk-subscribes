<template>
    <header class="xs:pt-12 mt-6">
        <div
            class="container mx-auto flex flex-col items-center max-w-screen-lg"
        >
            <div class="mb-6">
                <img
                    class="cursor-pointer"
                    width="75px"
                    src="../assets/logo_klerk.svg"
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
</template>

<style scoped>
li + li::before {
    content: '→';
    margin: 0 5px;
}
</style>
