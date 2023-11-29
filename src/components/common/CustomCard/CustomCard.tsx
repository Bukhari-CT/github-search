import { FC } from "react";
import { Typography, Card, Avatar } from "antd";
// import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
import { REPOSITORIES } from "../../../utlis/constants";

const { Text } = Typography;
const { Meta } = Card;
interface Props {
  result?: any;
  type?: string;
}
const CustomCard: FC<Props> = ({ result, type }) => {
  debugger;
  return (
    <Card
      hoverable={true}
      style={{ width: "100%" }}
      // actions={[<GithubOutlined key="url" />, <LinkOutlined key="ellipsis" />]}
    >
      <Meta
        avatar={
          <Avatar
            src={
              type === REPOSITORIES
                ? result.owner.avatar_url
                : result.avatar_url
            }
          />
        }
        title={type === REPOSITORIES ? result.owner?.login : result?.login}
        description={
          type === REPOSITORIES ? (
            <>
              <Text strong>Repo Name</Text> <Text>{result.name}</Text>
              <br />
              <Text strong>Repo From</Text> <Text>{result.owner.type}</Text>
              <br />
              {result.description && (
                <>
                  <Text strong>Repo Description</Text>
                  <Text>{result.description}</Text>
                </>
              )}
            </>
          ) : (
            <>This is a {result.type}</>
          )
        }
      />
    </Card>
  );
};

export default CustomCard;
