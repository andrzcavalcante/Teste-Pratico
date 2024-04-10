<script setup>
import { useDepartmentsStore } from '@/stores/departments';

const { departments } = useDepartmentsStore();
</script>

<template>
    <section>
        <div class="container">
            <h2>Unidades</h2>
            <div>
                <p>
                    Fazendo parte de um sistema nacional, composto por 27 federações estaduais e guiado pela
                    Confederação Nacional da Indústria (CNI), o Serviço Nacional de Aprendizagem Industrial de Alagoas
                    (SENAI/AL) é uma instituição de destaque, reconhecida por sua atuação de excelência na formação e
                    capacitação profissional.
                </p>
                <p>
                    Nossa missão é contribuir para o crescimento econômico de Alagoas, promovendo a qualificação da mão
                    de obra, a disseminação de conhecimento tecnológico e o fortalecimento do setor industrial. Estamos
                    comprometidos em impulsionar a indústria local e, assim, contribuir para o desenvolvimento do
                    estado.
                </p>
            </div>
            <div>
                <ul>
                    <li v-for="department in departments" :key="department.id">
                        <img src="@/assets/poco.png" alt="">
                        <div>
                            <h3>{{ department.name }}</h3>
                            <p>{{ department.description }}</p>
                            <button>Ver mais</button>
                        </div>
                    </li>

                </ul>
            </div>
        </div>

    </section>
</template>

<style scoped lang="scss">
section {

    .container {
        width: 90%;
        margin: 0 auto;
    }

    ul{
        list-style-type: none;
        padding-left: 0;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    li{
        padding: 1rem;
        list-style-type: none;
        background-color: #F8F8F8;
        display: flex;
        gap: 2rem;

        border-radius: .8rem;

        img{
            width: 100px;
        }

        button{
            border: none;
            padding: .3rem 1.5rem;
            background-color: #2A549F;
            color: #ffffff;
            border-radius: .5rem;
            font-weight: 100;
        }
    }


}
</style>