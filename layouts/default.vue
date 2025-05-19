<template>

    <Header />
        <slot />
    <Footer />

</template>

<script setup>

</script>

<style>

@font-face {
    font-family: 'supercell';
    src: url('https://akmweb.youngjoygame.com/web/jefanyamemek/image/aba5d9138d13645070c8aef4f28d833e.woff');
}
@font-face {
    font-family: 'supercell-text';
    src: url('https://akmweb.youngjoygame.com/web/jefanyamemek/image/b6afa8861b6a3f4b47bcd8a9e244b9d5.ttf');
}

@font-face {
    font-family: 'SupercellText-Bold';
    src: url('//cdn.supercell.com/fonts/supercell/supercelltext/full/supercelltext_w_bd.eot');
    src: url('//cdn.supercell.com/fonts/supercell/supercelltext/full/supercelltext_w_bd.eot?#iefix') format('embedded-opentype'),
    url('//cdn.supercell.com/fonts/supercell/supercelltext/full/supercelltext_w_bd.woff2') format('woff2'),
    url('//cdn.supercell.com/fonts/supercell/supercelltext/full/supercelltext_w_bd.woff') format('woff'),
    url('//cdn.supercell.com/fonts/supercell/supercelltext/full/supercelltext_w_bd.ttf') format('truetype');
}    
@font-face {
    font-family: 'SupercellText-Medium';
    src: url('//cdn.supercell.com/fonts/supercell/supercelltext/full/supercelltext_w_md.eot');
    src: url('//cdn.supercell.com/fonts/supercell/supercelltext/full/supercelltext_w_md.eot?#iefix') format('embedded-opentype'),
    url('//cdn.supercell.com/fonts/supercell/supercelltext/full/supercelltext_w_md.woff2') format('woff2'),
    url('//cdn.supercell.com/fonts/supercell/supercelltext/full/supercelltext_w_md.woff') format('woff'),
    url('//cdn.supercell.com/fonts/supercell/supercelltext/full/supercelltext_w_md.ttf') format('truetype');
}    
@font-face {
    font-family: 'SupercellText-Regular';
    src: url('//cdn.supercell.com/fonts/supercell/supercelltext/full/supercelltext_w_rg.eot');
    src: url('//cdn.supercell.com/fonts/supercell/supercelltext/full/supercelltext_w_rg.eot?#iefix') format('embedded-opentype'),
    url('//cdn.supercell.com/fonts/supercell/supercelltext/full/supercelltext_w_rg.woff2') format('woff2'),
    url('//cdn.supercell.com/fonts/supercell/supercelltext/full/supercelltext_w_rg.woff') format('woff'),
    url('//cdn.supercell.com/fonts/supercell/supercelltext/full/supercelltext_w_rg.ttf') format('truetype');
}

@font-face {
    font-family: 'google-regular';
    src: url('https://akmweb.youngjoygame.com/web/moonton/image/9429ca5231a6e45590f3bfbbe4728550.woff');
}
@font-face {
    font-family: 'google-medium';
    src: url('https://fonts.gstatic.com/s/googlesans/v62/4UaRrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iq2tQCIlsw.woff2');
}



*
{
    color: #fff;
    letter-spacing: 0px;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body
{
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(https://store.supercell.com/images/clashofclans/coc-pattern.png),linear-gradient(180deg,#D7C4AC,#CCB393);
}
#__nuxt
{
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    background-blend-mode: soft-light;
    background-position: 50%;
    background-repeat: repeat;
    background-size: 180px 180px, 100%;
    padding-top: 80px;
    font-family: 'supercell';
    background-image: url(https://store.supercell.com/images/components/StoreIntroduction/intro-bg-clash-desktop.jpg);
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
}

#__nuxt::before
{
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
}

.shadow
{
    color: #fff !important;
    text-shadow: 0 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 3px 0 #000 !important;
}

.hide
{
    display: none !important;
}

@media(max-width: 360px)
{
    .content .front
    {
        width: 250px !important;
    }
}

@media(min-width: 425px)
{
    #__nuxt, .header, .modal-gacha
    {
        max-width: 450px;
    }
    .popscid, .popgoogle, .id-verification
    {
        max-width: 350px;
    }

}



</style>