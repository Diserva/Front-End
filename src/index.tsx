
import { ConfigProvider, theme } from "antd";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { RecoilRoot } from "recoil";

import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import { AlertProvider } from "./components/Alert/context";

const { defaultAlgorithm } = theme;
import './utils/i18n';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <RecoilRoot>
        <ConfigProvider
          theme={{
            algorithm: defaultAlgorithm,
          }}
        >
          <AlertProvider>
            <DefaultLayout>
              <App />
            </DefaultLayout>
          </AlertProvider>
        </ConfigProvider>
      </RecoilRoot>
    </BrowserRouter>
  </Provider>
);
