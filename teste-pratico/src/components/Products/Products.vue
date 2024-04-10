<script setup>

</script>

<template>
    <section class="">
        <div class="container">
            <ul class="productList">
                <li class="card">
                    <img src="@/assets/image-area.png" alt="">
                    <div>
                        <h3>FABRICAÇÃO DE PANETONES E CHOCOTONES</h3>
                        <p class="description">
                            O Curso de Iniciação Profissional em Fabricação de Panetones e Chocotones do SENAI Alagoas
                            busca preparar os alunos para a fabricação...
                        </p>
                        <span>
                            <p class="validated">Início: <span>18/10/2021</span></p>
                            <p class="validated">Investimento: <span>6x de R$66,50</span></p>
                            <button>CONFIRA</button>
                        </span>
                    </div>
                </li>
                <li class="card">
                    <img src="@/assets/image-area.png" alt="">
                    <div>
                        <h3>FABRICAÇÃO DE PANETONES E CHOCOTONES</h3>
                        <p class="description">
                            O Curso de Iniciação Profissional em Fabricação de Panetones e Chocotones do SENAI Alagoas
                            busca preparar os alunos para a fabricação...
                        </p>
                        <span>
                            <p class="validated">Início: <span>18/10/2021</span></p>
                            <p class="validated">Investimento: <span>6x de R$66,50</span></p>
                            <button>CONFIRA</button>
                        </span>
                    </div>
                </li>
            </ul>
        </div>

    </section>
</template>

<style scoped lang="scss">
section {
    margin-top: 2.5rem;

    .container {
        width: 90%;
        margin: 0 auto;
    }

    .productList {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        list-style-type: none;
        padding-left: 0;

        .card {
            background-color: #F8F8F8;
            width: 100%;

            border-radius: 1rem;

            h3 {
                font-size: 1.1rem;
                font-weight: bold;
                width: 100%;
                text-align: center;
            }

            div {
                padding: 1rem;
                display: flex;
                flex-direction: column;

                .description {
                    font-size: 1.1rem;
                    width: 90%;
                    text-align: start;
                    color: #001834;
                }

                .validated {
                    color: #00244D;
                    font-size: 1.2rem;

                    span {
                        font-weight: bold;
                    }
                }

                button {
                    width: 100%;

                    padding: .5rem 0;
                    border: none;
                    border-radius: .7rem;

                    color: #F8F8F8;
                    background-color: #00489A;

                    font-weight: bold;
                }
            }

            img {
                width: 100%;
            }
        }
    }

    @media (min-width: 750px) {
        .container {
            width: 85%;
            margin: 0 auto;
            height: 100%;
        }

        .productList {
         
            flex-direction: row;

            min-width: 70%;
           
            .card {
                background-color: #F8F8F8;
                max-width: 30%;
            
                border-radius: 1rem;

                h3 {
                    font-size: 1.1rem;
                    font-weight: bold;
                    width: 100%;
                    text-align: center;
                }

                div {
                    padding: 1rem;
                    display: flex;
                    flex-direction: column;

                    .description {
                        font-size: 1.1rem;
                        width: 90%;
                        text-align: start;
                        color: #001834;
                    }

                    .validated {
                        color: #00244D;
                        font-size: 1.2rem;

                        span {
                            font-weight: bold;
                        }
                    }

                    button {
                        width: 100%;

                        padding: .5rem 0;
                        border: none;
                        border-radius: .7rem;

                        color: #F8F8F8;
                        background-color: #00489A;

                        font-weight: bold;
                    }
                }

                img {
                    width: 100%;
                }
            }
        }
    }
}
</style>