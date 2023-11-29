import { test, expect } from "@playwright/experimental-ct-react";

const Testing = () => <div>Hello World</div>;

test("It renders", async ({ mount }) => {
  const component = await mount(<Testing />);
  await expect(component).toContainText("World");
});
