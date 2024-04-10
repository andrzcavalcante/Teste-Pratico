<script setup>
import { useMobile } from "@/hooks/useMobile";
import { ref } from "vue";

const showMenu = ref(false);

function toggleMenu() {
    showMenu.value = !showMenu.value
}

const isMobile = useMobile()

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

                <nav :class="isMobile ? 'hidden' : 'nav_desktop'">
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
                        Transparência
                    </a>
                </nav>
            </div>
        </div>

    </header>
</template>

<style scoped lang="scss" src="./style.scss" />