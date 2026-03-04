<script setup lang="ts">
import { Phone, Mail, MapPin, Clock } from 'lucide-vue-next'

const contactInfo = [
  {
    icon: Phone,
    title: '电话咨询',
    content: '400-700-5670',
    desc: '周一至周五 9:00 - 18:00'
  },
  {
    icon: Mail,
    title: '发送邮件',
    content: 'gm@depingroup.com',
    desc: '我们会在24小时内回复您的邮件'
  },
  {
    icon: MapPin,
    title: '公司地址',
    content: '江苏省宿迁市沭阳县经济开发区玉环路',
    desc: '欢迎莅临参观指导'
  },
  {
    icon: Clock,
    title: '工作时间',
    content: '09:00 - 18:00',
    desc: '周末及法定节假日休息'
  }
]
</script>

<template>
  <div class="contact-page pt-16">
    <!-- Hero Section -->
    <section class="bg-gray-900 text-white py-20 relative overflow-hidden">
      <div class="absolute inset-0">
        <img 
          src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Corporate%20customer%20service%20team%20blue%20background%20professional&image_size=landscape_16_9" 
          alt="Contact Hero" 
          class="w-full h-full object-cover opacity-20"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/50"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">联系我们</h1>
        <p class="text-xl text-blue-100 max-w-2xl mx-auto">
          无论您有任何问题或需求，我们都随时准备为您提供帮助。
        </p>
      </div>
    </section>

    <!-- Contact Info Cards -->
    <section class="py-16 bg-gray-50 -mt-10 relative z-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(item, index) in contactInfo" 
            :key="index"
            class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
          >
            <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
              <component :is="item.icon" class="w-6 h-6 text-primary" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ item.title }}</h3>
            <p class="text-primary font-medium mb-1 text-lg">{{ item.content }}</p>
            <p class="text-gray-500 text-sm">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Map & Form Section -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row gap-16">
          <!-- Contact Form -->
          <div class="w-full lg:w-1/2">
            <span class="text-primary font-semibold tracking-wider uppercase mb-2 block">Get in Touch</span>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">在线留言</h2>
            <p class="text-gray-600 mb-8">
              请填写以下表格，我们的团队将在收到您的信息后尽快与您联系。
            </p>
            
            <form class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">您的姓名</label>
                  <input type="text" id="name" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="请输入姓名">
                </div>
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">联系电话</label>
                  <input type="tel" id="phone" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="请输入电话号码">
                </div>
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">电子邮箱</label>
                <input type="email" id="email" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="请输入电子邮箱">
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">留言内容</label>
                <textarea id="message" rows="4" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="请详细描述您的需求..."></textarea>
              </div>
              
              <button type="button" class="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20">
                提交留言
              </button>
            </form>
          </div>
          
          <!-- Map Area -->
          <div class="w-full lg:w-1/2 h-[500px] bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative group">
             <!-- Placeholder for Map -->
             <img 
              src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Map%20location%20pin%20city%20street%20view%20clean%20design&image_size=landscape_4_3" 
              alt="Company Location Map" 
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none">
                <div class="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl text-center transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">
                    <MapPin class="w-8 h-8 text-primary mx-auto mb-2" />
                    <h3 class="font-bold text-gray-900">江苏昌品医疗科技股份有限公司</h3>
                    <p class="text-sm text-gray-600 mt-1">江苏省宿迁市沭阳县经济开发区玉环路</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
