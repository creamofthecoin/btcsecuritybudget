import { Grid, Stack } from "@chakra-ui/react";

export default function Container({ center, ...props }) {
  if (center) {
    return <GridContainerCentered {...props} />;
  }
  return <StandardContainer {...props} />;
}

function GridContainerCentered({
  h = "100vh",
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  bgOpacity,
  ...props
}) {
  return (
    <Grid
      w="100%"
      minH={h}
      placeContent={{ base: "flex-start center", md: "center" }}
      _before={{
        content: '""',
        backgroundImage: backgroundImage,
        backgroundSize: backgroundSize,
        backgroundPosition: backgroundPosition,
        position: "absolute",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
        opacity: bgOpacity,
      }}
    >
      {props.children}
    </Grid>
  );
}

function StandardContainer({
  bg,
  h,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  bgOpacity,
  ...props
}) {
  return (
    <Stack
      id="STANDARDCONTAINER"
      w="100%"
      alignItems="center"
      gap={5}
      h={h}
      bg={bg}
      _before={{
        content: '""',
        backgroundImage: backgroundImage,
        backgroundSize: backgroundSize,
        backgroundPosition: backgroundPosition,
        position: "absolute",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
        opacity: bgOpacity,
        zIndex: "-2",
      }}
    >
      {props.children}
    </Stack>
  );
}
