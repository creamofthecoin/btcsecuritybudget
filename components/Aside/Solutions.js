import { Link, ListItem, UnorderedList } from "@chakra-ui/react";
import _ from "lodash";
import ModalHeading from "../../utils/ModalHeading";

const drivechain = {
  heading: "Drivechain",
  links: [
    { href: "https://www.drivechain.info/", name: "Drivechain Website" },
    {
      href: "https://twitter.com/Truthcoin/status/1471487934352216065",
      name: "Twitter Thread",
    },
  ],
};
const spacechain = {
  heading: "Spacechain",
  links: [
    {
      href: "https://www.youtube.com/watch?v=N2ow4Q34Jeg&feature=youtu.be&ab_channel=RubenSomsen",
      name: "Video Explanation",
    },
  ],
};
// const dynamicBlockSize = { heading: "Dynamic Block Size", links: ["..."] };
const solutionList = [drivechain, spacechain];

export default function Solutions() {
  return _.shuffle(solutionList).map((x) => (
    <div key={x.heading}>
      <ModalHeading>{x.heading}</ModalHeading>
      <UnorderedList>
        {x.links.map((y) => (
          <ListItem key={y.href}>
            <Link href={y.href}>{y.name}</Link>
          </ListItem>
        ))}
      </UnorderedList>
    </div>
  ));
}
