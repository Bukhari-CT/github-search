import React, { FC } from "react";
import SharedLayout from "../components/layouts/SharedLayout";

interface Props {
  element?: FC | any;
}

const GuestRoute: FC<Props> = (props: any) => {
  const { element: Component } = props;
  return (
    <SharedLayout>
      <Component {...props} />
    </SharedLayout>
  );
};
export default GuestRoute;
