import React from 'react'

export default function authValidateErrors(error: string) {
  if (error === "auth/id-token-expired") {
    return "O token de código do Firebase provisionado expirou."
  }  else if (error === "auth/invalid-email") {
    return "O email é inválido."
  } else if (error === "auth/invalid-password") {
    return "A senha é inválida."
  } else if (error === "auth/invalid-login-credentials") {
    return "Email ou senha estão errados."
  } else if (error === "auth/too-many-requests") {
    return "Limite de tentativas de login excedido, tente novamente mais tarde."
  } else if (error === "auth/wrong-password") {
    return "Sua senha está incorreta."
  } else if (error === "auth/user-not-found") {
    return "Este usuário não foi cadastrado."
  } else if (error === "auth/user-disabled") {
    return "Este usuário foi desabilitado."
  } else if (error === "auth/internal-error") {
    return "O limite de tentativas foi excedido, tente novamente mais tarde.-"
  } else {
    return "Não foi possivel fazer o login, se o erro persistir contate o suporte"
  }
}
