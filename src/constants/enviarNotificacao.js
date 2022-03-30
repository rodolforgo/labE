import { message } from "antd";

export const enviarNotificacao = (type, msg) => {
  if (type === "sucess") {
       message.success(msg);
  } else if (type === "error") {
        message.error(msg);
  } else if (type === "warning") {
    message.warning(msg);
  }
}
