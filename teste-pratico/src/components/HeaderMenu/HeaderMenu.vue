<script setup>
import { ref } from "vue"

const showMenu = ref(false)

function toggleMenu() {
    showMenu.value = !showMenu.value
}

</script>

<template>
    <header class="">
        <div class="container">
            <div class="containerMenu">
                <div class="menu">
                    <img src="@/assets/logoSenai.png" alt="">

                    <span v-if="!showMenu" class="material-icons icon-size hidden_desktop"
                        @click="toggleMenu">menu</span>
                    <span v-if="showMenu" class="material-icons icon-size hidden_desktop"
                        @click="toggleMenu">close</span>
                </div>

                <nav v-if="showMenu">
                    <a href="#">
                        Institucional
                    </a>
                    <a href="#">
                        Para Empresas
                    </a>
                    <a href="#">
                        Fale Conosco
                    </a>
                    <a href="#">
                        Trasparência
                    </a>
                </nav>

                <nav>
                    <a href="#">
                        Institucional
                    </a>
                    <a href="#">
                        Para Empresas
                    </a>
                    <a href="#">
                        Fale Conosco
                    </a>
                    <a href="#">
                        Trasparência
                    </a>
                </nav>
            </div>
        </div>

    </header>
</template>

<style scoped lang="scss">
header {
    display: flex;
    align-items: center;

    background-color: #F2F2F2;
    width: 100vw;
    min-height: 80px;


    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    .containerMenu {
        width: 100%;
        display: flex;
        flex-direction: column;

        justify-content: space-between;
        padding: .5rem 0;

        .hidden {
            display: none;
        }

        nav {
            display: flex;
            flex-direction: column;
            gap: 1.3rem;
            padding: 1rem 0;

            a {
                text-decoration: none;
                color: #0D2536;
                font-size: 1rem;
                font-weight: 550;
            }
        }
    }

    .menu {
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

    .icon-size {
        font-size: 36px;
    }

    .hidden {
        display: none;
    }

    @media (min-width: 750px) {
        .hidden_desktop {
            display: none;
        }

        .container {
            width: 85%;
            margin: 0 auto;
        }

        .containerMenu {

            flex-direction: row;

            justify-content: space-between;
            padding: .5rem 0;

            nav {
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;

                min-width: 40%;

                a {
                    text-decoration: none;
                    color: #0D2536;
                    font-size: 1rem;
                    font-weight: 550;
                }
            }
        }
    }

}
</style>