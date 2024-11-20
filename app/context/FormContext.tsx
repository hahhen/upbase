import React from "react";

export const FormContext = React.createContext({
    form: {
        nome: "",
        descricao: "",
        cep: "",
        endereco: "",
        numero: "",
        complemento: "",
        cidade: "",
        uf: "",
        tipoImovel: "",
        comodidades: {
            internet: false,
            arCondicionado: false,
            tvCabo: false,
            tv: false,
        },
        permissoes: {
            casais: false,
            animais: false,
            criancas: false,
            fumantes: false,
        },
        foto: "",
        video: "",
        valorDiaria: "",
        termoPadrao: true,
        termoPersonalizado: false,
        arquivoTermoPersonalizado: "",
    },
    setForm: (form: any) => {},
    handleChange: (key: string, value: any) => {},
});

export default function FormProvider({ children }: { children: React.ReactNode }) {
  const [form, setForm] = React.useState({
    nome: "",
    descricao: "",
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    cidade: "",
    uf: "",
    tipoImovel: "",
    comodidades: {
        internet: false,
        arCondicionado: false,
        tvCabo: false,
        tv: false,
    },
    permissoes: {
        casais: false,
        animais: false,
        criancas: false,
        fumantes: false,
    },
    foto: "",
    video: "",
    valorDiaria: "",
    termoPadrao: true,
    termoPersonalizado: false,
    arquivoTermoPersonalizado: "",
  });

  const handleChange = (key: string, value: any) => {
    setForm({ ...form, [key]: value });
  };

  return (
    <FormContext.Provider value={{ form, setForm, handleChange }}>
      {children}
    </FormContext.Provider>
  );
}