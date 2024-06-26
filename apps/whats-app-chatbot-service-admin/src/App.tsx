import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ChatbotList } from "./chatbot/ChatbotList";
import { ChatbotCreate } from "./chatbot/ChatbotCreate";
import { ChatbotEdit } from "./chatbot/ChatbotEdit";
import { ChatbotShow } from "./chatbot/ChatbotShow";
import { ResponseList } from "./response/ResponseList";
import { ResponseCreate } from "./response/ResponseCreate";
import { ResponseEdit } from "./response/ResponseEdit";
import { ResponseShow } from "./response/ResponseShow";
import { BusinessAccountList } from "./businessAccount/BusinessAccountList";
import { BusinessAccountCreate } from "./businessAccount/BusinessAccountCreate";
import { BusinessAccountEdit } from "./businessAccount/BusinessAccountEdit";
import { BusinessAccountShow } from "./businessAccount/BusinessAccountShow";
import { WebhookList } from "./webhook/WebhookList";
import { WebhookCreate } from "./webhook/WebhookCreate";
import { WebhookEdit } from "./webhook/WebhookEdit";
import { WebhookShow } from "./webhook/WebhookShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"WhatsAppChatbotService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Chatbot"
          list={ChatbotList}
          edit={ChatbotEdit}
          create={ChatbotCreate}
          show={ChatbotShow}
        />
        <Resource
          name="Response"
          list={ResponseList}
          edit={ResponseEdit}
          create={ResponseCreate}
          show={ResponseShow}
        />
        <Resource
          name="BusinessAccount"
          list={BusinessAccountList}
          edit={BusinessAccountEdit}
          create={BusinessAccountCreate}
          show={BusinessAccountShow}
        />
        <Resource
          name="Webhook"
          list={WebhookList}
          edit={WebhookEdit}
          create={WebhookCreate}
          show={WebhookShow}
        />
      </Admin>
    </div>
  );
};

export default App;
