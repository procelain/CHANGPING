<script setup lang="ts">
import { ref } from "vue";
import { CheckCircle } from "lucide-vue-next";

const activeTab = ref(0);
const systems = [
  {
    name: "1.0 环保护理系统",
    description:
      "以“以人为本”的设计理念，结合医院感控标准与护理临床路径，打造绿色环保、安全舒适、符合人体工学的现代化疗愈空间。",
    features: [
      "智能护士工作站系列：人体工学设计，优化工作动线",
      "治疗配液/处置室系列：合理分区，防止交叉感染",
      "污洗/清洁间系列：感控标准设计，杜绝二次污染",
      "智能化耗材/物品管理：精准管控，降本增效",
      "手术室行为管理：规范流程，保障手术安全",
    ],
    subItems: [
      "智能护士工作站",
      "治疗配液室",
      "换药处置室",
      "营养配餐间",
      "医疗器械存放室",
      "污洗清洁间",
      "物品存放管理",
      "手术室行为管理",
      "智能化耗材管理",
      "实验检验室产品",
      "公共等候区产品",
    ],
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Modern%20hospital%20nurse%20station%20clean%20ergonomic%20design%20warm%20lighting&image_size=landscape_16_9",
  },
  {
    name: "2.0 智慧医疗护理系统",
    description:
      "以“物联网+”为核心，遵循“以病人为中心，以医护人员为核心”原则，实现护理信息互联互通与智慧决策。",
    features: [
      "智慧病房交互：电子白板、床旁交互、病区呼叫",
      "护理闭环管理：全流程可追溯，保障护理安全",
      "护理管理平台：CQI持续改进，敏感指标监测",
      "智能物联应用：输液监控、体征采集、人员定位",
      "移动护理系统：PDA手持终端，信息多跑路",
    ],
    subItems: [
      "移动护理信息系统",
      "护理管理系统",
      "电子白板系统",
      "病区呼叫系统",
      "护理闭环管理系统",
      "CQI管控系统",
      "QCC管理系统",
      "患者随访管理系统",
      "智能物联系统",
    ],
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Smart%20hospital%20ward%20iot%20dashboard%20digital%20screen%20futuristic&image_size=landscape_16_9",
  },
];
</script>

<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Header -->
    <section class="bg-blue-900 text-white py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl font-bold mb-6">核心解决方案</h1>
        <p class="text-xl text-blue-100 max-w-3xl mx-auto">
          从环保护理到智慧医疗，全方位赋能现代医院建设。
        </p>
      </div>
    </section>

    <!-- Product Showcase -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Tabs -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button
            v-for="(system, index) in systems"
            :key="index"
            @click="activeTab = index"
            class="px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 border-2"
            :class="
              activeTab === index
                ? 'bg-primary text-white border-primary shadow-lg scale-105'
                : 'bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary'
            "
          >
            {{ system.name }}
          </button>
        </div>

        <!-- Content -->
        <div
          class="bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500"
        >
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="relative h-80 lg:h-auto overflow-hidden group">
              <img
                :src="systems[activeTab].image"
                :alt="systems[activeTab].name"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:hidden"
              ></div>
            </div>
            <div class="p-8 md:p-12 flex flex-col justify-center">
              <div class="mb-2">
                <span
                  class="inline-block px-3 py-1 bg-blue-100 text-primary text-sm font-semibold rounded-full mb-4"
                  >Core Solution</span
                >
              </div>
              <h2 class="text-3xl font-bold text-gray-900 mb-6">
                {{ systems[activeTab].name }}
              </h2>
              <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                {{ systems[activeTab].description }}
              </p>

              <div class="mb-8">
                <h4 class="font-bold text-gray-900 mb-4 flex items-center">
                  <span class="w-1 h-6 bg-primary mr-3 rounded-full"></span>
                  核心功能与优势
                </h4>
                <ul class="space-y-3">
                  <li
                    v-for="feature in systems[activeTab].features"
                    :key="feature"
                    class="flex items-start text-gray-700"
                  >
                    <CheckCircle
                      class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0"
                    />
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 class="font-bold text-gray-900 mb-4 flex items-center">
                  <span class="w-1 h-6 bg-purple-500 mr-3 rounded-full"></span>
                  涵盖产品系列
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="item in systems[activeTab].subItems"
                    :key="item"
                    class="px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-sm hover:bg-gray-200 transition-colors cursor-default"
                  >
                    {{ item }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Scenarios -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-16">典型应用场景</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            class="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
          >
            <img
              src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Hospital%20operating%20room%20sterile%20environment&image_size=square"
              class="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
              alt="OR"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6"
            >
              <h3 class="text-xl font-bold text-white mb-2">手术室中心</h3>
              <p
                class="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                针对高感染风险区域的污物快速处置与织物即时更换方案。
              </p>
            </div>
          </div>
          <div
            class="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
          >
            <img
              src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Hospital%20ward%20corridor%20nurses%20station&image_size=square"
              class="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
              alt="Ward"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6"
            >
              <h3 class="text-xl font-bold text-white mb-2">住院病区</h3>
              <p
                class="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                便捷的分类收集站点，优化护士工作流程，改善病区环境。
              </p>
            </div>
          </div>
          <div
            class="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
          >
            <img
              src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Hospital%20laundry%20room%20sterilization%20area&image_size=square"
              class="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
              alt="Laundry"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6"
            >
              <h3 class="text-xl font-bold text-white mb-2">洗涤消毒中心</h3>
              <p
                class="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                集中化、规模化的清洗消毒流水线，确保织物卫生安全。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
