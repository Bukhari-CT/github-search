import { FC } from "react";
import { Typography, Card, Avatar } from "antd";
import { GithubOutlined, LinkOutlined } from "@ant-design/icons";

const { Text } = Typography;
const { Meta } = Card;
interface Props {
  repo?: any;
}
const CustomRepoCard: FC<Props> = (Props) => {
  const { repo } = Props;
  return (
    <Card
      hoverable={true}
      style={{ width: "100%" }}
      actions={[
        <a href={repo.owner.url}>
          <GithubOutlined key="url" />
        </a>,
        <a href={repo.owner.repos_url}>
          <LinkOutlined key="ellipsis" />
        </a>,
      ]}
    >
      <Meta
        avatar={<Avatar src={repo.owner.avatar_url} />}
        title={repo.owner?.login}
        description={
          <>
            <Text strong>Repo Name</Text> <Text>{repo.name}</Text>
            <br />
            <Text strong>Repo From</Text> <Text>{repo.owner.type}</Text>
            <br />
            {repo.description && (
              <>
                <Text strong>Repo Description</Text> <Text>{repo.description}</Text>
              </>
            )}
          </>
        }
      />
    </Card>
  );
};

export default CustomRepoCard;
