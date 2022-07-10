import { Grid, GridItem } from "@chakra-ui/react";

export default function Section(props) {
  const {
    outerBg = null,
    innerBg = null,
    position = null,
    opacity = null,
    h = "auto",
    w = "90vw",
    flexDir = null,
    justifyContent = "center",
    alignItems = "stretch",
    outerPy = null,
    outerMy = null,
    innerPy = null,
    innerPx = null,
    innerPt = null,
    innerPb = null,
    innerMy = null,
    innerMt = null,
    innerMb = null,
    outerBoxShadow = "none",
    innerBoxShadow = "none",
    outerBorder = "none",
    innerBorder = "none",
    outerBorderTop = "none",
    outerBorderBottom = "none",
    outerBorderLeft = "none",
    outerBorderRight = "none",
    innerBorderTop = "none",
    innerBorderBottom = "none",
    innerBorderLeft = "none",
    innerBorderRight = "none",
    outerMt = null,
    outerMb = null,
    gap = null,
    display = "flex",
    gridTemplateColumns = "auto",
    gridTemplateRows = "auto",
    outerBorderRadius = "none",
    innerBorderRadius = "none",
    innerBorderBottomLeftRadius = null,
    innerBorderBottomRightRadius = null,
    overflow,
    minH,
  } = props;
  return (
    <Grid
      w="100%"
      h={h}
      minH={minH}
      placeContent="center"
      backgroundColor={outerBg}
      position={position}
      opacity={opacity}
      py={outerPy}
      my={outerMy}
      mt={outerMt}
      mb={outerMb}
      boxShadow={outerBoxShadow}
      border={outerBorder}
      borderTop={outerBorderTop}
      borderBottom={outerBorderBottom}
      borderLeft={outerBorderLeft}
      borderRight={outerBorderRight}
      borderRadius={outerBorderRadius}
    >
      <GridItem
        w={w}
        display={display}
        backgroundColor={innerBg}
        overflow={overflow}
        h="inherit"
        py={innerPy}
        px={innerPx}
        pt={innerPt}
        pb={innerPb}
        my={innerMy}
        mt={innerMt}
        mb={innerMb}
        boxShadow={innerBoxShadow}
        borderRadius={innerBorderRadius}
        borderBottomLeftRadius={innerBorderBottomLeftRadius}
        borderBottomRightRadius={innerBorderBottomRightRadius}
        border={innerBorder}
        borderTop={innerBorderTop}
        borderLeft={innerBorderLeft}
        borderRight={innerBorderRight}
        alignItems={alignItems}
        flexDir={flexDir}
        justifyContent={justifyContent}
        gap={gap}
        gridTemplateColumns={gridTemplateColumns}
        gridTemplateRows={gridTemplateRows}
      >
        {props.children}
      </GridItem>
    </Grid>
  );
}
