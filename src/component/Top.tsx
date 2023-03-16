import React from "react";
import { Header } from "semantic-ui-react";

export default function Top() {
  return (
    <div>
      <Header as="h2" icon textAlign="center">
        <Header.Content>ManMo</Header.Content>
        <Header.Subheader>만나서 모하지?</Header.Subheader>
      </Header>
    </div>
  );
}
