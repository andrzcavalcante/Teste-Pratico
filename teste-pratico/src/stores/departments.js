import { defineStore } from "pinia";
import { ref } from "vue";

export const useDepartmentsStore = defineStore("department", () => {
  const departments = ref([
    {
      id: 1,
      name: "Senai Arapiraca",
      description:
        "As equipes do SESI orientam as empresas na implementação e no uso correto da ferramenta.",
      image: './assets/poco.png',
    },
    {
      id: 2,
      name: "Senai Senai Benedito Bentes",
      description:
        "As equipes do SESI orientam as empresas na implementação e no uso correto da ferramenta.",
        image: "./assets/poco.png",
    },
    {
      id: 3,
      name: "Senai Poço",
      description:
        "As equipes do SESI orientam as empresas na implementação e no uso correto da ferramenta.",
        image: "./assets/poco.png",
    },
  ]);

  return {departments};
});
