<script setup>
import { useDepartmentsStore } from '@/stores/departments';

const { departments } = useDepartmentsStore();
</script>

<template>
    <section>
        <div class="container">
            <h2>Unidades</h2>
            <div class="department_aside">
                <div class="texts">
                    <p>
                        Fazendo parte de um sistema nacional, composto por 27 federações estaduais e guiado pela
                        Confederação Nacional da Indústria (CNI), o Serviço Nacional de Aprendizagem Industrial de
                        Alagoas
                        (SENAI/AL) é uma instituição de destaque, reconhecida por sua atuação de excelência na formação
                        e
                        capacitação profissional.
                    </p>
                    <p>
                        Nossa missão é contribuir para o crescimento econômico de Alagoas, promovendo a qualificação da
                        mão
                        de obra, a disseminação de conhecimento tecnológico e o fortalecimento do setor industrial.
                        Estamos
                        comprometidos em impulsionar a indústria local e, assim, contribuir para o desenvolvimento do
                        estado.
                    </p>
                </div>
                <div>
                    <ul class="department_list">
                        <li class="department" v-for="department in departments" :key="department.id">
                            <img src="@/assets/poco.png" alt="">
                            <div>
                                <h3>{{ department.name }}</h3>
                                <p>{{ department.description }}</p>
                                <button>Ver mais</button>
                            </div>
                        </li>

                    </ul>
                </div>
                <aside class="hidden">
                    <div>
                        <h2>CONHEÇA</h2>
                        <ul>
                            <li><a href="">Sobre o Senai</a></li>
                            <li><a href="">Diretoria e Equipe Executiva</a></li>
                            <li><a href="">Vagas abertas</a></li>
                            <li><a href="">Todas as Unidades</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Transparência</h2>
                        <ul>
                            <li><a href="">Transparência SENAI</a></li>
                            <li><a href="">Prestação de Contas TCU</a></li>
                            <li><a href="">Política de Privacidade</a></li>
                            <li><a href="">Segurança da Informação</a></li>
                        </ul>
                    </div>
                </aside>
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

    h2 {
        font-weight: bold;
        font-size: 2rem;
    }

    .texts {
        font-size: 1rem;
        font-weight: 100;
        text-align: left;
    }

    .department_list {
        list-style-type: none;
        padding-left: 0;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        .department {
            padding: 1rem;
            list-style-type: none;
            background-color: #F8F8F8;
            display: flex;
            gap: 2rem;

            border-radius: .8rem;

            img {
                width: 35%;
            }

            button {
                border: none;
                padding: .3rem 1.5rem;
                background-color: #2A549F;
                color: #ffffff;
                border-radius: .5rem;
                font-weight: 100;
            }

        }
    }

    .hidden {
        display: none;
    }

    @media (min-width: 750px) {

        .department_aside {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;

            height: 800px;

            aside {
                display: flex;
                flex-direction: column;
                gap: 1rem;

                div{
                    background-color: #EDEDED;
                    padding: .5rem 1rem;
                   
                    border-radius: 12px;

                    h2{
                        font-size: 1.2rem;
                    }

                    ul{
                        list-style-type: none;
                        padding-left: 0;
                        display: flex;
                        flex-direction: column;
                        gap: 1rem;

                        li{
                            a{
                                text-decoration: none;
                                color: #001834;
                                font-size: .8rem;
                                font-weight: 600;
                            }

                            a:hover{
                                color: #2A549F;
                            }
                        }
                    }
                }
            }


        }

        .container {
            width: 85%;
            margin: 0 auto;
            height: 100%;
        }

        .texts {
            width: 75%;
        }

        .department_list {
            width: 85%;
            .department {
                width: 100%;
                padding: 1rem;
                background-color: #F8F8F8;

                gap: 2rem;

                img {
                    max-width: 120px;
                    height: 140px;
                }

                button {
                    border: none;
                    padding: .3rem 1.5rem;
                    background-color: #2A549F;
                    color: #ffffff;
                    border-radius: .5rem;
                    font-weight: 100;
                }
            }
        }



    }

}
</style>