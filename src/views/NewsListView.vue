<script setup lang="ts">
import { Calendar } from 'lucide-vue-next'

const newsList = [
  {
    id: 1,
    title: '昌品医疗荣获“2025年度医疗环保创新企业”称号',
    date: '2025-12-15',
    summary: '在近日举办的全国医疗器械产业大会上，江苏昌品医疗凭借其创新的环保护理系统解决方案，荣获行业年度大奖。',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Award%20ceremony%20business%20conference%20stage%20trophy&image_size=landscape_16_9'
  },
  {
    id: 2,
    title: '昌品医疗发布全新一代智能洗涤系统',
    date: '2025-10-08',
    summary: '该系统采用最新的物联网技术，实现了对洗涤过程的全程监控与数据追溯，大幅提升了医院织物管理的效率与安全性。',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Modern%20industrial%20washing%20machines%20clean%20laundry%20facility&image_size=landscape_16_9'
  },
  {
    id: 3,
    title: '助力绿色医院建设：昌品医疗与多家三甲医院签署战略合作协议',
    date: '2025-08-22',
    summary: '昌品医疗将为签约医院提供全套医疗废物处理与织物洗涤解决方案，共同打造零污染、低能耗的绿色医疗示范标杆。',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Business%20people%20shaking%20hands%20signing%20contract%20meeting%20room&image_size=landscape_16_9'
  }
]
</script>

<template>
  <div class="bg-gray-50 min-h-screen pt-20 pb-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">昌品资讯</h1>
        <p class="text-gray-600">了解昌品医疗的最新资讯与行业动态</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="news in newsList" :key="news.id" class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
          <div class="h-48 overflow-hidden">
            <img :src="news.image" :alt="news.title" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div class="p-6 flex-grow flex flex-col">
            <div class="flex items-center text-sm text-gray-500 mb-3">
              <Calendar class="w-4 h-4 mr-2" />
              {{ news.date }}
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-primary transition-colors">
              <router-link :to="`/news/${news.id}`">{{ news.title }}</router-link>
            </h3>
            <p class="text-gray-600 mb-4 line-clamp-3 flex-grow">
              {{ news.summary }}
            </p>
            <router-link :to="`/news/${news.id}`" class="text-primary font-medium hover:underline mt-auto inline-block">
              阅读全文 &rarr;
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
