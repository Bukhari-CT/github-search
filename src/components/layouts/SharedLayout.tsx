import React, {FC} from "react";
import {Layout, Row, Typography} from 'antd';
import AppHeader from "../common/AppHeader";

const {Header, Content, Footer} = Layout

interface Props {
  children: any
}

const SharedLayout: FC<Props> = ({children}) => {
  return (
    <Layout style={{display: "flex", background: "white"}}>
      <Header style={{background: "white"}}>
        <AppHeader/>
      </Header>
      <Content style={{padding: '50px 50px'}}>
          {children}
      </Content>
      <Footer style={{background: "white", textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )
}

export default SharedLayout
