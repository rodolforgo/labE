import React from "react";
import "./App.less";
import Router from "./routes/Router";
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';

const App = () => {
  return (
    <ConfigProvider locale={ptBR}>
      <Router />
    </ConfigProvider>
  )
}

export default App;