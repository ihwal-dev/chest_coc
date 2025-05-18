<template>
        <div class="header">
            <div class="imgLogo">
                <img src="https://store.supercell.com/_next/static/media/badge.0cb70e6d.png">
            </div>
            <div class="menuIcon">
                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 26.0002H5L7.14285 12.0715L20 6.04834V26.0002Z" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 6.04834L25 10.1126L27 26.0002H20" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.5239 9.79013L16.5239 8.00974C16.5239 6.20552 15.2184 4.60759 13.3811 5.08582C10.9769 5.71158 10.2382 8.1223 10.2382 11.4349L10.2382 12.4651" stroke="#000" stroke-width="1.5" stroke-linecap="round"></path></svg>
                <svg id="menu" xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="none"><path d="M4 12.2202H28" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 20.3672H28" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
        </div>
</template>

<script setup>

</script>

<style scoped>
#__nuxt .header
{
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 70px;
    background: url('https://store.supercell.com/images/clashofclans/topbar-bg.png');
    background-repeat: repeat-x;
    background-size: contain;
    background-position: 100% 0;
    filter: drop-shadow(0 10px 4px rgba(0, 0, 0, .3));
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px 10px 10px;
    z-index: 9;
}

.header .imgLogo
{
    width: 50px;
    height: 50px;
}

.imgLogo img
{
    max-width: 100%;
}

.header .menuIcon
{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 15px;
}

.menuIcon #menu
{
    position: relative;
    top: -4px;
}
</style>