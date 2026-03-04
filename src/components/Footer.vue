<script setup lang="ts">
import { Phone, Mail, MapPin } from "lucide-vue-next";
</script>

<template>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="col-span-1 md:col-span-2">
          <h2 class="text-2xl font-bold mb-4">江苏昌品医疗科技股份有限公司</h2>
          <p class="text-gray-400 mb-6 max-w-md">
            环保护理系统引领者，致力于为医疗机构提供现代化、智能化、环保的整体解决方案。
          </p>
          <div class="flex flex-col space-y-4">
            <div class="flex items-start">
              <div class="w-1/2">
                <h4 class="text-sm font-semibold text-gray-500 uppercase mb-2">
                  CONTACT INFORMATION
                </h4>
                <router-link
                  to="/contact"
                  class="text-secondary text-lg font-medium hover:underline flex items-center"
                >
                  联系我们 <span class="ml-1">↓</span>
                </router-link>
                <div class="h-px bg-gray-700 mt-1 w-24"></div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">快速链接</h3>
          <ul class="space-y-2 text-gray-400">
            <li>
              <router-link to="/products" class="hover:text-white"
                >解决方案</router-link
              >
            </li>
            <li>
              <router-link to="/products" class="hover:text-white"
                >产品中心</router-link
              >
            </li>
            <li>
              <router-link to="/about" class="hover:text-white"
                >走进昌品</router-link
              >
            </li>
            <li>
              <router-link to="/news" class="hover:text-white"
                >昌品资讯</router-link
              >
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">联系方式</h3>
          <ul class="space-y-3 text-gray-400">
            <li class="flex items-start">
              <MapPin class="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
              <span>江苏省宿迁市沭阳县经济开发区玉环路</span>
            </li>
            <li class="flex items-center">
              <Phone class="w-5 h-5 mr-2 flex-shrink-0" />
              <span>400-700-5670</span>
            </li>
            <li class="flex items-center">
              <Mail class="w-5 h-5 mr-2 flex-shrink-0" />
              <span>gm@depingroup.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm"
      >
        <p>
          &copy; {{ new Date().getFullYear() }} 江苏昌品医疗科技股份有限公司
          版权所有
        </p>
      </div>
    </div>
  </footer>
</template>
