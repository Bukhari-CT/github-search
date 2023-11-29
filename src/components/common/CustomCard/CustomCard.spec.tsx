import { test, expect } from "@playwright/experimental-ct-react";
import CustomCard from "./CustomCard";

test("it renders", async ({ mount }) => {
  const component = await mount(
    <CustomCard
      type="users"
      result={{
        owner: {
          avatar_url: "",
          login: "",
          type: "",
        },
        avatar_url: "",
        login: "",
        description: "",
        name: "",
        type: "",
      }}
    />
  );
  await expect(component).toContainText("users");
});
