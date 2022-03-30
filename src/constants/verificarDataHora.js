export const verificarData = (data) => {
    const dataPost = new Date(data);
      const dataBR = `${dataPost.getDate()}/${dataPost.getMonth() +1}/${dataPost.getFullYear()}`
      return dataBR;
  }

  export const verificarHora = (hora) => {
    const horaPost = new Date(hora);
    const horaBR = `${horaPost.getHours()}h${horaPost.getMinutes()}`
      return horaBR;
  }


  