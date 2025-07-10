import * as Yup from "yup";

const estadosValidos = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];

const nomesInvalidos = ["admin", "root"];

export let pacienteSchema = Yup.object().shape({
  nome: Yup.string()
    .required("Nome obrigatorio")
    .notOneOf(nomesInvalidos, "Nome inválido"),
  email: Yup.string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Insira um e-mail válido"
    )
    .required("E-mail obrigatório"),
  senha: Yup.string()
    .required("Senha obrigatória")
    .min(6, "Senha deve ter no mínimo 6 caracteres"),
  endereco: Yup.object().shape({
    estado: Yup.string()
      .required("Estado obrigatorio")
      .oneOf(estadosValidos, "Insira um estado brasileiro!"),
  }),
});
