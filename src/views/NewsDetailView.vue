<script setup lang="ts">
import { useRoute } from 'vue-router'
import { Calendar, ArrowLeft } from 'lucide-vue-next'

const route = useRoute()
const id = route.params.id

// Mock data fetch
const news = {
  id,
  title: '昌品医疗荣获“2025年度医疗环保创新企业”称号',
  date: '2025-12-15',
  content: `
    <p>在近日举办的全国医疗器械产业大会上，江苏昌品医疗凭借其创新的环保护理系统解决方案，荣获行业年度大奖。</p>
    <p>本次大会汇聚了国内外众多知名医疗企业与专家学者，旨在探讨医疗健康产业的未来发展趋势。昌品医疗展示的全新一代智能医用织物洗涤系统，以其高效、节能、环保的特点，获得了与会专家的高度评价。</p>
    <p>昌品医疗董事长在获奖感言中表示：“这份荣誉是对我们过去一年努力的肯定，也是对未来发展的鞭策。我们将继续加大研发投入，以科技创新推动医疗环保事业的发展，为建设绿色医院贡献更多力量。”</p>
    <p>未来，昌品医疗将继续秉持“绿色医疗，关爱生命”的理念，不断推出更多优质产品与服务，造福广大患者与医护人员。</p>
  `,
  image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Award%20ceremony%20business%20conference%20stage%20trophy&image_size=landscape_16_9'
}
</script>

<template>
  <div class="bg-white min-h-screen pt-24 pb-20">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <router-link to="/news" class="inline-flex items-center text-gray-500 hover:text-primary mb-8 transition-colors">
        <ArrowLeft class="w-4 h-4 mr-2" /> 返回新闻列表
      </router-link>
      
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
        {{ news.title }}
      </h1>
      
      <div class="flex items-center text-gray-500 mb-8 border-b pb-8">
        <Calendar class="w-5 h-5 mr-2" />
        <span>{{ news.date }}</span>
        <span class="mx-4">|</span>
        <span>公司动态</span>
      </div>
      
      <div class="mb-10 rounded-xl overflow-hidden shadow-lg">
        <img :src="news.image" :alt="news.title" class="w-full h-auto" />
      </div>
      
      <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6" v-html="news.content"></div>
      
      <div class="mt-12 pt-8 border-t">
        <h3 class="text-xl font-bold mb-4">相关阅读</h3>
        <div class="bg-gray-50 p-6 rounded-lg">
          <ul class="space-y-3">
             <li><router-link to="/news/3" class="text-primary hover:underline">助力绿色医院建设：昌品医疗与多家三甲医院签署战略合作协议</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
