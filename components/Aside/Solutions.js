import { Link, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import _ from "lodash";
import React from "react";
import ModalHeading from "../../utils/ModalHeading";

const drivechain = {
  heading: "Drivechain",
  links: [
    { href: "https://www.drivechain.info/", name: "Drivechain Website" },
    {
      href: "https://twitter.com/Truthcoin/status/1471487934352216065",
      name: "Twitter Thread",
    },
    {
      href: "https://onthebrink-podcast.com/drivechains/",
      name: "Podcast discussion",
    },
  ],
};
const spacechains = {
  heading: "Spacechains",
  links: [
    {
      href: "https://www.youtube.com/watch?v=N2ow4Q34Jeg",
      name: "Video Explanation",
    },
  ],
};

const dynamicBlockSize = {
  heading: "Dynamic Block Size",
  links: [
    {
      href: "https://github.com/bitcoin/bips/blob/master/bip-0104.mediawiki",
      name: "BIP 104",
    },
    {
      href: "https://github.com/bitcoin/bips/blob/master/bip-0105.mediawiki",
      name: "BIP 105",
    },
    {
      href: "https://github.com/bitcoin/bips/blob/master/bip-0106.mediawiki",
      name: "BIP 106",
    },
    {
      href: "https://github.com/bitcoin/bips/blob/master/bip-0107.mediawiki",
      name: "BIP 107",
    },
  ],
};

const inflation = {
  heading: "Inflation",
  links: [
    {
      href: "https://petertodd.org/2022/surprisingly-tail-emission-is-not-inflationary",
      name: "Tail Emission",
    },
    {
      href: "#",
      name: "Burning Fees + Inflation",
    },
  ],
};

const solutionsList = _.shuffle([
  drivechain,
  spacechains,
  dynamicBlockSize,
  inflation,
]);

function ShuffledSolutions() {
  return solutionsList.map((x) => (
    <React.Fragment key={x.heading}>
      <ModalHeading>{x.heading}</ModalHeading>
      <UnorderedList spacing={2} pl="1.75rem" pt=".5rem">
        {x.links.map((y) => (
          <ListItem key={y.href}>
            <Link href={y.href} isExternal>
              {y.name}
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </React.Fragment>
  ));
}

function OpeningText() {
  return (
    <>
      <ModalHeading>Potential Solutions</ModalHeading>
      <Text>
        Listed below are some potential solutions. The order is randomized on
        page load. If you have any suggestions, please{" "}
        <Link
          href="https://github.com/creamofthecoin/btcsecuritybudget/issues"
          isExternal
          color="cyan.400"
        >
          open an issue on GitHub.
        </Link>
      </Text>
    </>
  );
}

export default function Solutions() {
  return (
    <>
      <OpeningText />
      <ShuffledSolutions />
    </>
  );
}
