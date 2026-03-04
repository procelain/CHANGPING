<script setup lang="ts">
</script>

<template>
  <div class="bg-white">
    <!-- Header -->
    <section class="bg-gray-100 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">关于江苏昌品医疗</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          致力于成为全球领先的医疗环保护理系统供应商
        </p>
      </div>
    </section>

    <!-- Company Intro Video -->
    <section class="py-16">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="aspect-video bg-black rounded-2xl overflow-hidden shadow-xl relative group">
          <!-- Video Placeholder -->
           <img 
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Corporate%20office%20building%20modern%20architecture%20glass%20facade%20blue%20sky&image_size=landscape_16_9" 
            alt="Company Video Cover" 
            class="w-full h-full object-cover opacity-80"
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <button class="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center pl-2 hover:scale-110 transition-transform shadow-lg">
              <div class="w-0 h-0 border-t-[12px] border-t-transparent border-l-[24px] border-l-primary border-b-[12px] border-b-transparent"></div>
            </button>
          </div>
          <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
            <h3 class="text-xl font-bold">企业宣传片</h3>
            <p class="text-sm text-gray-300">了解我们的使命与愿景</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Profile -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6 text-gray-900">公司简介</h2>
            <div class="space-y-4 text-gray-600 leading-relaxed">
              <p>
                江苏昌品医疗科技股份有限公司是一家专注于医疗环保护理系统研发、生产与销售的高新技术企业。
                我们以“绿色医疗，关爱生命”为使命，通过持续的技术创新，为医院提供全方位的环保解决方案。
              </p>
              <p>
                公司依托强大的研发团队和先进的生产制造能力，
                产品涵盖医疗废物处理系统、医用织物洗涤系统、污水处理系统等多个领域。
                我们的产品已广泛应用于国内外数百家大型综合医院，赢得了客户的高度认可。
              </p>
              <p>
                未来，昌品医疗将继续深耕医疗环保领域，推动行业标准化、智能化发展，
                为构建绿色、安全、和谐的医疗环境贡献力量。
              </p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <img src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Medical%20research%20lab%20scientists%20working%20microscope&image_size=portrait_4_3" class="rounded-lg shadow-md w-full h-full object-cover" alt="Research" />
            <img src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Modern%20factory%20interior%20clean%20production%20line&image_size=portrait_4_3" class="rounded-lg shadow-md w-full h-full object-cover mt-8" alt="Production" />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Qualifications/Certificates -->
    <section id="qualifications" class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-12 text-gray-900">资质荣誉</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
           <!-- Certificate Placeholders -->
           <div v-for="i in 4" :key="i" class="border p-4 rounded-lg hover:shadow-lg transition-shadow bg-white">
             <div class="aspect-[3/4] bg-gray-100 mb-4 flex items-center justify-center text-gray-400">
               证书扫描件
             </div>
             <p class="text-sm font-medium text-gray-700">ISO 9001 认证证书</p>
           </div>
        </div>
      </div>
    </section>
  </div>
</template>
