<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const isOpen = ref(false)

</script>

<template>
  <nav class="bg-white shadow-sm fixed w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <span class="text-2xl font-bold text-primary">CHANGPIN</span>
            <span class="ml-2 text-sm text-gray-500 hidden md:block">江苏昌品医疗</span>
          </div>
        </div>
        <div class="hidden md:flex md:items-center md:space-x-8">
            <router-link to="/" class="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors" active-class="text-primary font-bold">首页</router-link>
            <router-link to="/products" class="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors" active-class="text-primary font-bold">解决方案</router-link>
            <router-link to="/about" class="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors" active-class="text-primary font-bold">走进昌品</router-link>
            <router-link to="/news" class="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors" active-class="text-primary font-bold">资讯中心</router-link>
            <router-link to="/contact" class="text-primary font-bold px-3 py-2 rounded-md text-sm transition-colors" active-class="text-primary font-bold">联系我们</router-link>
          </div>
        <div class="-mr-2 flex items-center md:hidden">
          <button
            @click="isOpen = !isOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
          >
            <span class="sr-only">Open main menu</span>
            <Menu v-if="!isOpen" class="block h-6 w-6" aria-hidden="true" />
            <X v-else class="block h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-show="isOpen" class="md:hidden bg-white border-t">
        <div class="pt-2 pb-3 space-y-1">
          <router-link to="/" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50" active-class="text-primary bg-blue-50" @click="isOpen = false">首页</router-link>
          <router-link to="/products" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50" active-class="text-primary bg-blue-50" @click="isOpen = false">解决方案</router-link>
          <router-link to="/about" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50" active-class="text-primary bg-blue-50" @click="isOpen = false">走进昌品</router-link>
          <router-link to="/news" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50" active-class="text-primary bg-blue-50" @click="isOpen = false">资讯中心</router-link>
          <router-link to="/contact" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50" active-class="text-primary bg-blue-50" @click="isOpen = false">联系我们</router-link>
        </div>
      </div>
  </nav>
</template>
