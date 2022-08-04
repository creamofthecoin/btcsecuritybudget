import { Text } from "@chakra-ui/react";
import _ from "lodash";
import ModalHeading from "../../utils/ModalHeading";

const drivechain = { heading: "Drivechain", text: "..." };
const spacechain = { heading: "Spacechain", text: "..." };
const dynamicBlockSize = { heading: "Dynamic Block Size", text: "..." };
const solutionList = [drivechain, spacechain, dynamicBlockSize];

export default function Solutions() {
  return _.shuffle(solutionList).map((x) => (
    <div key={x.heading}>
      <ModalHeading>{x.heading}</ModalHeading> <Text>{x.text}</Text>
    </div>
  ));
}
