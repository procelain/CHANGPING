<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import {
  ArrowRight,
  Activity,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Play,
  Warehouse,
  Settings,
  Trees,
} from "lucide-vue-next";
import {
  useTransition,
  TransitionPresets,
  useIntersectionObserver,
} from "@vueuse/core";

const currentSlide = ref(0);
const slides = [
  {
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Modern%20hospital%20nurse%20station%20ergonomic%20design%20clean%20environment&image_size=landscape_16_9",
    title: "1.0 环保护理系统",
    subtitle: "以人为本 绿色疗愈",
    desc: "结合医院感控标准与护理临床路径，打造安全舒适、符合人体工学的现代化疗愈空间。",
  },
  {
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Smart%20hospital%20ward%20digital%20screen%20iot%20technology%20nurse%20working&image_size=landscape_16_9",
    title: "2.0 智慧医疗护理系统",
    subtitle: "物联网+ 智慧互联",
    desc: "遵循“以病人为中心，以医护人员为核心”，实现护理信息互联互通与智慧决策。",
  },
  {
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Automated%20medical%20textile%20laundry%20system%20conveyor%20belt&image_size=landscape_16_9",
    title: "医用织物洗涤解决方案",
    subtitle: "高效洁净 杜绝感染",
    desc: "提供从收纳、运输到洗涤、消毒的一站式解决方案，保障医患健康，提升医院感控水平。",
  },
];

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
};

// Draggable Infinite Scroll Logic
const useDraggableScroll = () => {
  const containerRef = ref<HTMLElement | null>(null);
  const x = ref(0);
  const isDragging = ref(false);
  const startX = ref(0);
  const initialScrollX = ref(0);

  // Auto scroll
  let animationFrameId: number;
  const speed = 0.5; // pixels per frame

  const animate = () => {
    if (!isDragging.value) {
      x.value -= speed;
    }

    // Infinite loop logic
    // We assume layout is flex row.
    // We need to reset x when we've scrolled past half the content (since we duplicate content)
    if (containerRef.value) {
      // Estimate width of one set of items.
      // We have 2 sets. Flex gap is 24px (1.5rem).
      // scrollWidth = 2 * setWidth - gap (because no gap after last item)
      // So setWidth = (scrollWidth + gap) / 2
      const gap = 24;
      const totalWidth = containerRef.value.scrollWidth;
      const loopWidth = (totalWidth + gap) / 2;

      // Only reset if we have enough content to scroll
      if (totalWidth > containerRef.value.clientWidth) {
        if (Math.abs(x.value) >= loopWidth) {
          x.value += loopWidth;
        }
        if (x.value > 0) {
          x.value -= loopWidth;
        }
      }
    }

    animationFrameId = requestAnimationFrame(animate);
  };

  onMounted(() => {
    animationFrameId = requestAnimationFrame(animate);
  });

  onUnmounted(() => {
    cancelAnimationFrame(animationFrameId);
  });

  const onMouseDown = (e: MouseEvent) => {
    isDragging.value = true;
    startX.value = e.clientX;
    initialScrollX.value = x.value;
    document.body.style.cursor = "grabbing";
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging.value) return;
    e.preventDefault();
    const delta = e.clientX - startX.value;
    x.value = initialScrollX.value + delta;
  };

  const onMouseUp = () => {
    isDragging.value = false;
    document.body.style.cursor = "default";
  };

  const onMouseLeave = () => {
    isDragging.value = false;
    document.body.style.cursor = "default";
  };

  const shift = (amount: number) => {
    x.value += amount;
  };

  return {
    containerRef,
    x,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onMouseLeave,
    shift,
  };
};

// Data for scrolling sections (Duplicated for infinite loop)
const rawEquipmentItems = [
  {
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Industrial%20CNC%20machine%20precision%20manufacturing&image_size=landscape_4_3",
    title: "精密数控加工中心",
  },
  {
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Automated%20injection%20molding%20machine%20medical%20plastic&image_size=landscape_4_3",
    title: "自动化注塑机",
  },
  {
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Laser%20cutting%20machine%20metal%20fabrication&image_size=landscape_4_3",
    title: "激光切割设备",
  },
  {
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Robotic%20arm%20welding%20industrial%20automation&image_size=landscape_4_3",
    title: "机器人焊接工作站",
  },
];
// Duplicate for loop
const equipmentItems = [...rawEquipmentItems, ...rawEquipmentItems];

const rawWorkAreaItems = [
  {
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Clean%20room%20manufacturing%20facility%20medical%20workers%20protective%20gear&image_size=landscape_4_3",
    title: "十万级净化车间",
  },
  {
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Modern%20warehouse%20logistics%20shelves%20forklift&image_size=landscape_4_3",
    title: "智能仓储中心",
  },
  {
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Medical%20device%20assembly%20line%20workers%20precision&image_size=landscape_4_3",
    title: "精益组装线",
  },
  {
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Quality%20control%20laboratory%20medical%20testing&image_size=landscape_4_3",
    title: "质量检测实验室",
  },
];
const workAreaItems = [...rawWorkAreaItems, ...rawWorkAreaItems];

const rawFactoryEnvironmentItems = [
  {
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Modern%20factory%20exterior%20building%20glass%20facade%20blue%20sky&image_size=landscape_4_3",
    title: "现代化厂房外观",
  },
  {
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Factory%20campus%20garden%20green%20trees%20clean%20road&image_size=landscape_4_3",
    title: "花园式厂区环境",
  },
  {
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Aerial%20view%20of%20modern%20industrial%20park%20solar%20panels&image_size=landscape_4_3",
    title: "绿色能源园区",
  },
  {
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Factory%20entrance%20security%20gate%20professional&image_size=landscape_4_3",
    title: "标准化门禁管理",
  },
];
const factoryEnvironmentItems = [
  ...rawFactoryEnvironmentItems,
  ...rawFactoryEnvironmentItems,
];

const equipmentScroll = useDraggableScroll();
const workAreaScroll = useDraggableScroll();
const factoryScroll = useDraggableScroll();

// Assign refs to the scroll objects
const equipmentContainer = equipmentScroll.containerRef;
const workAreaContainer = workAreaScroll.containerRef;
const factoryContainer = factoryScroll.containerRef;

onMounted(() => {
  setInterval(nextSlide, 5000);
});

// Manufacturing Title Animation
const manufacturingTitleRef = ref(null);
const isManufacturingTitleVisible = ref(false);

useIntersectionObserver(
  manufacturingTitleRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      isManufacturingTitleVisible.value = true;
    }
  },
  { threshold: 0.2 },
);

// Statistics Animation
const statsRef = ref(null);
const duration = 2000; // Animation duration in ms

const expSource = ref(0);
const hospitalSource = ref(0);
const patentSource = ref(0);
const responseSource = ref(0);

const expOutput = useTransition(expSource, {
  duration,
  transition: TransitionPresets.easeOutExpo,
});

const hospitalOutput = useTransition(hospitalSource, {
  duration,
  transition: TransitionPresets.easeOutExpo,
});

const patentOutput = useTransition(patentSource, {
  duration,
  transition: TransitionPresets.easeOutExpo,
});

const responseOutput = useTransition(responseSource, {
  duration,
  transition: TransitionPresets.easeOutExpo,
});

// Use Intersection Observer to trigger animation when visible
useIntersectionObserver(
  statsRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      // Start animation
      expSource.value = 10;
      hospitalSource.value = 500;
      patentSource.value = 50;
      responseSource.value = 24;
    }
  },
  { threshold: 0.5 },
);

const clients = [
  "苏州市第五人民医院",
  "苏州市立医院",
  "复旦大学附属中山医院",
  "南阳市中心医院",
  "四川大学华西医院",
  "丹阳市人民医院",
  "达州市中心医院",
  "宁波妇女儿童医院",
  "浙江省人民医院",
  "江苏省中西医结合医院",
  "重庆市第四人民医院",
  "江西省肿瘤医院",
  "常州市吴江区人民医院",
  "常州市金坛区人民医院",
  "常州市第三人民医院",
  "福建省龙岩市第一人民医院",
  "南通市肿瘤医院",
  "成都市公共卫生临床医疗中心",
  "重庆市妇幼保健院",
  "中一东北国际医院",
  "浙医四院",
  "贵州医科大学附属口腔医院",
  "解放军第八五医院",
  "湘潭第三医院",
  "徐州市中心医院",
  "长沙市第三医院",
  "浙江省立同德医院",
  "浙江医院",
  "济南市中心医院",
  "西安市妇幼保健院",
];
</script>

<template>
  <div class="home">
    <!-- Hero Slider Section -->
    <section class="relative h-[700px] overflow-hidden group">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        :class="{
          'opacity-100 z-10': currentSlide === index,
          'opacity-0 z-0': currentSlide !== index,
        }"
      >
        <div
          class="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/40 z-10"
        ></div>
        <img
          :src="slide.image"
          :alt="slide.title"
          class="absolute inset-0 w-full h-full object-cover transform transition-transform duration-[10s] ease-linear scale-100"
          :class="{ 'scale-110': currentSlide === index }"
        />

        <div class="absolute inset-0 flex items-center z-20">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div
              class="max-w-3xl transform transition-all duration-1000 delay-300"
              :class="{
                'translate-y-0 opacity-100': currentSlide === index,
                'translate-y-10 opacity-0': currentSlide !== index,
              }"
            >
              <h1
                class="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white"
              >
                {{ slide.title }}<br />
                <span class="text-blue-300">{{ slide.subtitle }}</span>
              </h1>
              <p class="text-xl md:text-2xl text-gray-100 mb-8">
                {{ slide.desc }}
              </p>
              <div class="flex space-x-4">
                <router-link
                  to="/products"
                  class="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all hover:scale-105 flex items-center shadow-lg shadow-blue-900/20"
                >
                  探索产品 <ArrowRight class="ml-2 w-5 h-5" />
                </router-link>
                <router-link
                  to="/about"
                  class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all hover:scale-105 backdrop-blur-sm"
                >
                  走进昌品
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Slider Controls -->
      <button
        @click="prevSlide"
        class="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
      >
        <ChevronLeft class="w-8 h-8" />
      </button>
      <button
        @click="nextSlide"
        class="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
      >
        <ChevronRight class="w-8 h-8" />
      </button>

      <!-- Slide Indicators -->
      <div
        class="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3"
      >
        <button
          v-for="(_, index) in slides"
          :key="index"
          @click="currentSlide = index"
          class="w-12 h-1 rounded-full transition-all duration-300"
          :class="
            currentSlide === index
              ? 'bg-white'
              : 'bg-white/30 hover:bg-white/50'
          "
        ></button>
      </div>
    </section>

    <!-- Statistics Section -->
    <section
      ref="statsRef"
      class="py-12 bg-white relative -mt-20 z-30 mx-4 sm:mx-6 lg:mx-8 rounded-xl shadow-xl max-w-7xl lg:mx-auto border border-gray-100"
    >
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div class="text-center group cursor-default">
          <div
            class="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300"
          >
            {{ Math.round(expOutput) }}+
          </div>
          <div class="text-gray-600 font-medium">年行业经验</div>
        </div>
        <div class="text-center group cursor-default">
          <div
            class="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300"
          >
            {{ Math.round(hospitalOutput) }}+
          </div>
          <div class="text-gray-600 font-medium">合作医院</div>
        </div>
        <div class="text-center group cursor-default">
          <div
            class="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300"
          >
            {{ Math.round(patentOutput) }}+
          </div>
          <div class="text-gray-600 font-medium">专利技术</div>
        </div>
        <div class="text-center group cursor-default">
          <div
            class="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300"
          >
            {{ Math.round(responseOutput) }}h
          </div>
          <div class="text-gray-600 font-medium">售后响应</div>
        </div>
      </div>
    </section>

    <!-- Core Features with Hover Effects -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span
            class="text-primary font-semibold tracking-wider uppercase mb-2 block"
            >Our Core Business</span
          >
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            核心业务与优势
          </h2>
          <div class="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p class="text-gray-600 max-w-2xl mx-auto text-lg">
            结合创新设计与精密制造，提供全方位的医疗护理解决方案。
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group cursor-pointer"
          >
            <div
              class="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300"
            >
              <Activity
                class="w-8 h-8 text-blue-600 group-hover:text-white transition-colors"
              />
            </div>
            <h3
              class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors"
            >
              1.0 环保护理系统
            </h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              专为现代医院设计的环保收集与处理系统，涵盖智能护士站、治疗室、污洗间等全场景，减少交叉感染风险，提升护理效率。
            </p>
            <router-link
              to="/products"
              class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              了解更多
              <ArrowRight
                class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
              />
            </router-link>
          </div>

          <div
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group cursor-pointer"
          >
            <div
              class="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300"
            >
              <ShieldCheck
                class="w-8 h-8 text-green-600 group-hover:text-white transition-colors"
              />
            </div>
            <h3
              class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors"
            >
              2.0 智慧医疗护理系统
            </h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              以“物联网+”理念为指引，集成移动护理、电子白板、护理闭环管理等系统，构建国际化标准的智慧护理服务管理体系。
            </p>
            <router-link
              to="/products"
              class="inline-flex items-center text-green-600 font-semibold hover:text-green-700"
            >
              了解更多
              <ArrowRight
                class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
              />
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Manufacturing Capabilities Section (New) -->
    <section
      id="manufacturing-capabilities"
      class="py-24 bg-white overflow-hidden"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref="manufacturingTitleRef"
          class="text-center mb-20 transition-all duration-1000 transform"
          :class="
            isManufacturingTitleVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          "
        >
          <span
            class="text-green-600 font-semibold tracking-wider uppercase mb-2 block"
            >Professional Manufacturing</span
          >
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            专业制造能力展示
          </h2>
          <div class="w-20 h-1 bg-green-600 mx-auto rounded-full mb-6"></div>
          <p class="text-gray-600 max-w-2xl mx-auto text-lg">
            依托先进的生产设备与科学的工区管理，打造行业领先的制造标杆。
          </p>
        </div>

        <!-- Workshop Equipment -->
        <div class="mb-24">
          <div class="flex items-center justify-between mb-8 px-2">
            <div class="flex items-center space-x-4">
              <div class="p-3 bg-green-50 rounded-xl border border-green-100">
                <Settings class="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">车间专业设备</h3>
                <p class="text-gray-500 text-sm mt-1">
                  International Advanced Equipment
                </p>
              </div>
            </div>
            <div class="hidden md:flex space-x-2">
              <button
                @click="equipmentScroll.shift(300)"
                class="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ChevronLeft class="w-5 h-5" />
              </button>
              <button
                @click="equipmentScroll.shift(-300)"
                class="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ChevronRight class="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            ref="equipmentContainer"
            class="flex gap-6 overflow-hidden cursor-grab active:cursor-grabbing select-none py-4 -mx-4 px-4"
            @mousedown="equipmentScroll.onMouseDown"
            @mousemove="equipmentScroll.onMouseMove"
            @mouseup="equipmentScroll.onMouseUp"
            @mouseleave="equipmentScroll.onMouseLeave"
          >
            <div
              class="flex gap-6 transition-transform duration-0 ease-linear"
              :style="{ transform: `translateX(${equipmentScroll.x.value}px)` }"
            >
              <div
                v-for="(item, index) in equipmentItems"
                :key="index"
                class="relative group/item flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110 pointer-events-none"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover/item:opacity-80 transition-opacity duration-300"
                ></div>
                <div
                  class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover/item:translate-y-0 transition-transform duration-300"
                >
                  <div
                    class="w-10 h-1 bg-green-500 mb-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
                  ></div>
                  <h4 class="text-white text-xl font-bold mb-1">
                    {{ item.title }}
                  </h4>
                  <p
                    class="text-green-300 text-sm font-medium opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/item:translate-y-0"
                  >
                    High Precision
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p class="text-gray-600 leading-relaxed mt-8 max-w-4xl">
            我们引进了国际一流的自动化生产设备，包括高精度数控加工中心、全自动注塑机以及激光切割设备。这些尖端设备不仅大幅提升了生产效率，更确保了每一个零部件的精密与一致性，满足医疗级产品的严苛要求。
          </p>
        </div>

        <!-- Work Area -->
        <div>
          <div class="flex items-center justify-between mb-8 px-2">
            <div class="flex items-center space-x-4">
              <div class="p-3 bg-blue-50 rounded-xl border border-blue-100">
                <Warehouse class="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">现代化生产工区</h3>
                <p class="text-gray-500 text-sm mt-1">
                  Modern Production Environment
                </p>
              </div>
            </div>
            <div class="hidden md:flex space-x-2">
              <button
                @click="workAreaScroll.shift(300)"
                class="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ChevronLeft class="w-5 h-5" />
              </button>
              <button
                @click="workAreaScroll.shift(-300)"
                class="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ChevronRight class="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            ref="workAreaContainer"
            class="flex gap-6 overflow-hidden cursor-grab active:cursor-grabbing select-none py-4 -mx-4 px-4"
            @mousedown="workAreaScroll.onMouseDown"
            @mousemove="workAreaScroll.onMouseMove"
            @mouseup="workAreaScroll.onMouseUp"
            @mouseleave="workAreaScroll.onMouseLeave"
          >
            <div
              class="flex gap-6 transition-transform duration-0 ease-linear"
              :style="{ transform: `translateX(${workAreaScroll.x.value}px)` }"
            >
              <div
                v-for="(item, index) in workAreaItems"
                :key="index"
                class="relative group/item flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110 pointer-events-none"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover/item:opacity-80 transition-opacity duration-300"
                ></div>
                <div
                  class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover/item:translate-y-0 transition-transform duration-300"
                >
                  <div
                    class="w-10 h-1 bg-blue-500 mb-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
                  ></div>
                  <h4 class="text-white text-xl font-bold mb-1">
                    {{ item.title }}
                  </h4>
                  <p
                    class="text-blue-300 text-sm font-medium opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/item:translate-y-0"
                  >
                    GMP Standard
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p class="text-gray-600 leading-relaxed mt-8 max-w-4xl">
            生产工区严格按照GMP标准建设，拥有十万级净化车间，确保产品在无尘、无菌的环境下生产。同时，我们建立了科学的仓储物流体系，实现了从原材料入库到成品出货的全流程精细化管理。
          </p>
        </div>

        <!-- Factory Environment -->
        <div class="mt-24">
          <div class="flex items-center justify-between mb-8 px-2">
            <div class="flex items-center space-x-4">
              <div class="p-3 bg-purple-50 rounded-xl border border-purple-100">
                <Trees class="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">花园式厂区环境</h3>
                <p class="text-gray-500 text-sm mt-1">
                  Eco-friendly Garden Factory
                </p>
              </div>
            </div>
            <div class="hidden md:flex space-x-2">
              <button
                @click="factoryScroll.shift(300)"
                class="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ChevronLeft class="w-5 h-5" />
              </button>
              <button
                @click="factoryScroll.shift(-300)"
                class="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ChevronRight class="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            ref="factoryContainer"
            class="flex gap-6 overflow-hidden cursor-grab active:cursor-grabbing select-none py-4 -mx-4 px-4"
            @mousedown="factoryScroll.onMouseDown"
            @mousemove="factoryScroll.onMouseMove"
            @mouseup="factoryScroll.onMouseUp"
            @mouseleave="factoryScroll.onMouseLeave"
          >
            <div
              class="flex gap-6 transition-transform duration-0 ease-linear"
              :style="{ transform: `translateX(${factoryScroll.x.value}px)` }"
            >
              <div
                v-for="(item, index) in factoryEnvironmentItems"
                :key="index"
                class="relative group/item flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110 pointer-events-none"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover/item:opacity-80 transition-opacity duration-300"
                ></div>
                <div
                  class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover/item:translate-y-0 transition-transform duration-300"
                >
                  <div
                    class="w-10 h-1 bg-purple-500 mb-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
                  ></div>
                  <h4 class="text-white text-xl font-bold mb-1">
                    {{ item.title }}
                  </h4>
                  <p
                    class="text-purple-300 text-sm font-medium opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/item:translate-y-0"
                  >
                    Eco Environment
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p class="text-gray-600 leading-relaxed mt-8 max-w-4xl">
            公司不仅注重生产效率，更致力于打造绿色生态园区。厂区内绿树成荫，道路宽敞整洁，现代化的办公大楼与花园式的自然景观相得益彰，为员工提供了一个舒适、健康的工作生活环境。
          </p>
        </div>
      </div>
    </section>

    <!-- Parallax Video Section -->
    <section class="py-24 bg-gray-50 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          <div class="w-full lg:w-1/2 relative group">
            <div
              class="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-[2rem] transform rotate-2 group-hover:rotate-1 transition-transform duration-500"
            ></div>
            <div
              class="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-900 transform group-hover:-translate-y-2 transition-transform duration-500"
            >
              <img
                src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=High%20tech%20factory%20production%20line%20automated%20machinery%20clean%20room&image_size=landscape_16_9"
                alt="Factory Video Thumbnail"
                class="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 flex items-center justify-center">
                <button
                  class="w-20 h-20 bg-white rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform duration-300 animate-pulse"
                >
                  <Play class="w-8 h-8 text-primary ml-1" fill="currentColor" />
                </button>
              </div>
            </div>
            <!-- Decorative dots -->
            <div class="absolute -bottom-8 -left-8 w-24 h-24 text-blue-200">
              <svg fill="currentColor" viewBox="0 0 100 100">
                <pattern
                  id="dots"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2" cy="2" r="2"></circle>
                </pattern>
                <rect width="100" height="100" fill="url(#dots)"></rect>
              </svg>
            </div>
          </div>

          <div class="w-full lg:w-1/2">
            <span
              class="text-primary font-bold tracking-wider uppercase mb-2 block"
              >About Changpin Medical</span
            >
            <h2 class="text-4xl font-bold mb-6 text-gray-900">
              走进江苏昌品医疗
            </h2>
            <p class="text-gray-600 mb-8 text-lg leading-relaxed">
              作为环保护理系统的先行者，昌品医疗始终坚持技术创新与品质至上。从研发设计到产品交付，每一个环节都经过严苛的质量把控，只为给客户提供最优质的产品与服务。
            </p>

            <div class="space-y-6">
              <div class="flex items-start">
                <div
                  class="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mt-1"
                >
                  <Activity class="w-6 h-6 text-primary" />
                </div>
                <div class="ml-4">
                  <h4 class="text-xl font-bold mb-2">专业研发团队</h4>
                  <p class="text-gray-600">
                    汇聚行业顶尖人才，持续推动技术创新与产品升级。
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div
                  class="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mt-1"
                >
                  <ShieldCheck class="w-6 h-6 text-primary" />
                </div>
                <div class="ml-4">
                  <h4 class="text-xl font-bold mb-2">全流程质量追溯</h4>
                  <p class="text-gray-600">
                    建立完善的质量管理体系，实现产品全生命周期可追溯。
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div
                  class="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mt-1"
                >
                  <Activity class="w-6 h-6 text-primary" />
                </div>
                <div class="ml-4">
                  <h4 class="text-xl font-bold mb-2">完善的售后服务</h4>
                  <p class="text-gray-600">
                    提供7*24小时专业技术支持，确保客户无后顾之忧。
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-10">
              <router-link
                to="/about"
                class="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors inline-flex items-center"
              >
                深入了解企业文化 <ArrowRight class="ml-2 w-5 h-5" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Clients Section -->
    <section class="py-24 bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span
            class="text-blue-400 font-semibold tracking-wider uppercase mb-2 block"
            >Our Clients</span
          >
          <h2 class="text-3xl md:text-4xl font-bold mb-4">合作客户</h2>
          <div class="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg">
            深受全国500+家大型医疗机构的信赖与选择
          </p>
        </div>

        <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          <div
            v-for="(client, index) in clients"
            :key="index"
            class="group bg-white/5 hover:bg-white/10 rounded-lg p-4 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 border border-white/10 hover:border-blue-500/30"
          >
            <p
              class="text-sm md:text-base text-gray-300 text-center font-medium group-hover:text-white transition-colors duration-300"
            >
              {{ client }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-primary relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-blue-600 mix-blend-multiply"></div>
        <img
          src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Abstract%20blue%20medical%20technology%20background%20lines%20dots&image_size=landscape_16_9"
          alt="Background"
          class="w-full h-full object-cover opacity-30"
        />
      </div>
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          准备好升级您的医疗护理环境了吗？
        </h2>
        <p class="text-blue-100 text-xl max-w-2xl mx-auto mb-10">
          联系我们的专业团队，获取定制化的环保护理系统解决方案。
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <router-link
            to="/products"
            class="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg"
          >
            查看解决方案
          </router-link>
          <router-link
            to="/contact"
            class="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors"
          >
            联系我们
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
