<template>
        <div class="footer">
            <div class="contact">
                <span class="text">Follow us on</span>
                <div class="sci">
                    <img src="https://store.supercell.com/_next/static/media/icon-social-youtube-white.fde9d8af.svg">
                    <img src="https://store.supercell.com/_next/static/media/icon-social-facebook-white.bf013e40.svg">
                    <img src="https://store.supercell.com/_next/static/media/icon-social-instagram-white.6672578f.svg">
                    <img src="https://store.supercell.com/_next/static/media/icon-social-twitter-white.f4745db2.svg">
                    <img src="https://store.supercell.com/_next/static/media/icon-social-linkedin-white.c916ba21.svg">
                    <img src="https://store.supercell.com/_next/static/media/icon-social-glassdoor-white.5589fd18.svg">
                </div>
            </div>
            <div class="download">
                <span class="text">Download our games from</span>
                <div class="store">
                    <img src="https://store.supercell.com/_next/static/media/app-store_badge_en.181ec940.svg">
                    <img src="https://store.supercell.com/_next/static/media/google-play-badge_en.e2ec89df.png">
                </div>
            </div>
            <div class="site-menu">
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Parent's Guide</a>
                <a href="#">Safe and Fair Play Policy</a>
                <a href="#">Manage Cookies</a>
            </div>

            <div class="address">
                <div class="left">
                    <p>Supercell Oy</p>
                    <p>Jätkäsaarenlaituri 1</p>
                    <p>00180 Helsinki</p>
                    <p>Finland</p>
                    <p>Business ID 2336509-6</p>
                </div>
                <div class="right">
                    <img src="https://store.supercell.com/_next/static/media/supercell-logo-white.ad1dad43.svg">
                </div>
            </div>
        </div>
</template>

<script setup>

</script>

<style scoped>
#__nuxt .footer
{
    padding: 20px 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    background: #000;
    z-index: 1;
}

.footer span
{
    font-family: 'supercell-text' !important;
    font-size: 14px;
}

.footer .contact
{
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    padding: 15px 0;
}

.contact .sci
{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
}

.sci img
{
    max-width: 35px;
}

.footer .download
{
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    border-top: 1px solid #333;
    padding: 15px 0;
}

.download .store
{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
}

.store img
{
    max-width: 100px;
}

.footer .site-menu
{
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    border-top: 1px solid #333;
    padding: 15px 0;
}
.site-menu a
{
    font-family: 'supercell-text' !important;
    font-size: 14px;
    text-decoration: none;
    color: #fff;
}

.footer .address
{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 15px 0;
    gap: 5px;
}

.address .left
{
    flex: 1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
}

.left p
{
    font-family: 'supercell-text' !important;
    font-size: 14px;
    text-decoration: none;
    color: #666;
}

.address .right
{
    display: flex;
    align-items: flex-end;
    justify-content: center;
    align-self: stretch;
}

.right img
{
    max-width: 60px;
}
</style>