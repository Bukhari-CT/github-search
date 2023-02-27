import { FC } from "react";
import { Col, Row, Typography } from "antd";

interface Props {
  children?: any;
}

const AppHeader: FC<Props> = () => {
  return (
    <Row justify={"center"}>
      <Col span={6}>
        <Typography.Title level={2}>Github Search With Vite</Typography.Title>
      </Col>
    </Row>
  );
};

export default AppHeader;
