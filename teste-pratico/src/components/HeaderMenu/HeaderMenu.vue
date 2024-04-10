<script setup>

</script>

<template>
    <header class="">
        <div class="container">
            <div>
                <img src="./assets/logoSenai.svg" alt="">
                <nav>
                    <h3>Menu</h3>
                </nav>
            </div>
        </div>

    </header>
</template>

<style scoped lang="scss">
header {
    display: flex;

    background-color: #F2F2F2;
    width: 100vw;
    height: 80px;


    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .5rem 0 .5rem 0;
    }

    .container {
        width: 90%;
        margin: 0 auto;
    }

    nav {}
}
</style>