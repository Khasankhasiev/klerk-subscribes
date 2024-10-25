<template>
    <div>
        <h1 class="xs:text-5xl font-medium text-3xl text-center">
            Подписки «Клерка»
        </h1>
        <ul class="flex gap-6 justify-center pt-6">
            <li
                class="pb-4 cursor-pointer text-blue-500 border-b-2 border-blue-500 hover:text-blue-500 hover:border-blue-500"
            >
                <a href="#">Рассылки</a>
            </li>
            <li
                class="text-gray-600 pb-4 cursor-pointer hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500"
            >
                <a href="#">Соцсети</a>
            </li>
            <li
                class="text-gray-600 pb-4 cursor-pointer hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500"
            >
                <a href="#">Мессенджеры</a>
            </li>
        </ul>
        <section class="bg-gray-100 rounded-lg py-12 px-6 mt-8">
            <div class="text-center mb-6">
                <h2 class="text-2xl font-medium">
                    Выберите рассылки, которые подходят именно вам
                </h2>
            </div>
            <FormMail></FormMail>
            <div
                class="mt-8 flex justify-center flex-wrap gap-6 text-sm xs:text-base"
            >
                <Card
                    class="shadow-xl"
                    supstring="Перед рассветом"
                    title="Утренний бухгалтер"
                    substring="Самые важные новости и события за день. Кратко, по делу, структурировано."
                    count="59 342"
                    url="./screpka1.png"
                >
                    <li>
                        <span class="text-green-500">✔</span> Новости для
                        бухгалтеров, ИП и директоров
                    </li>
                    <li>
                        <span class="text-green-500">✔</span> Подборка статей за
                        день
                    </li>
                </Card>
                <Card
                    supstring="После заката"
                    title="Ночной бухгалтер"
                    substring="Самая краткая газета о налогах и бухучете в мире — современная рассылка для чтения."
                    count="37 480"
                    url="./screpka2.png"
                >
                    <li>
                        <span class="text-green-500">✔</span> Анализ, оценка и
                        только самое главное
                    </li>
                    <li>
                        <span class="text-green-500">✔</span> Лучшие комменты
                        юзеров в обзоре
                    </li>
                </Card>
                <Card
                    supstring="Раз в две недели"
                    title="Ножницы скидок"
                    substring="Подборка самых выгодных и полезных спецпредложений от надежных компаний."
                    count="92 118"
                    url="./scissors.png"
                >
                    <li>
                        <span class="text-green-500">✔</span> Акции и скидки от
                        лидеров рынка
                    </li>
                    <li>
                        <span class="text-green-500">✔</span> Те, кто подписался
                        – экономят много денег
                    </li>
                </Card>
                <Card
                    supstring="По мере появления анонсов"
                    title="Чемодан вебинаров"
                    substring="Подборка с анонсами бесплатных вебинаров на самые топовые темы при участии экспертов."
                    count="92 082"
                    url="./roller.png"
                >
                    <li>
                        <span class="text-green-500">✔</span> Никогда не пришлем
                        платные вебинары
                    </li>
                    <li>
                        <span class="text-green-500">✔</span> Подборка топовых
                        тем для вебинаров
                    </li>
                </Card>
            </div>
        </section>
    </div>
</template>

<script setup>
import FormMail from './FormMail.vue';
import Card from './Card.vue';
</script>
