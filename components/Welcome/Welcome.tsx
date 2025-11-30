import { Text, Title } from "@mantine/core"
import * as classes from "./Welcome.css"


export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Bienvenue sur{" "}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: "pink", to: "yellow" }}
        >
          Coucourse !
        </Text>
      </Title>

    </>
  );
}
