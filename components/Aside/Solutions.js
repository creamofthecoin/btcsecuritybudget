import { Link, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import _ from "lodash";
import React from "react";
import ModalHeading from "../../utils/ModalHeading";

const clientSideValidation = {
  heading: "Prime (Client-side validation)",
  links: [
    {
      href: "https://www.youtube.com/live/V3vvybsc1A4?feature=shared&t=23665",
      name: "Video explanation",
    },
    { href: "https://github.com/LNP-BP/layer1", name: "Paper" },
  ],
};

const validityRollups = {
  heading: "Validity rollups",
  links: [
    { href: "https://bitcoinrollups.org/", name: "Validity rollups website" },
    {
      href: "https://tuta-space.notion.site/Validity-rollups-on-Bitcoin-dfdf93725f1849a899b3092bbcff0808",
      name: "Shorter explanation",
    },
  ],
};

const drivechain = {
  heading: "Drivechain",
  links: [
    { href: "https://www.drivechain.info/", name: "Drivechain website" },
    {
      href: "https://drivechain.xyz",
      name: "Drivechain website #2",
    },
    {
      href: "https://onthebrink-podcast.com/drivechains/",
      name: "Podcast discussion",
    },
    {
      href: "https://bitcoinmagazine.com/technical/drivechain-makes-bitcoin-the-only-crypto",
      name: "Bitcoin Magazine article",
    },
    {
      href: "https://www.youtube.com/playlist?list=PLw8-6ARlyVciMH79ZyLOpImsMug3LgNc4",
      name: "YouTube playlist",
    },
  ],
};

const spacechains = {
  heading: "Spacechains",
  links: [
    {
      href: "https://www.youtube.com/watch?v=N2ow4Q34Jeg",
      name: "Video explanation",
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
      name: "Tail emission",
    },
    {
      href: "",
      name: "Burning fees + Inflation *",
    },
  ],
};

const demurrage = {
  heading: "Demurrage",
  links: [
    {
      href: "https://en.wikipedia.org/wiki/Demurrage_(currency)",
      name: "Wikipedia article",
    },
  ],
};

const solutionsList = _.shuffle([
  clientSideValidation,
  validityRollups,
  drivechain,
  spacechains,
  dynamicBlockSize,
  inflation,
  demurrage,
]);

function ShuffledSolutions() {
  return solutionsList.map((x) => (
    <React.Fragment key={x.heading}>
      <ModalHeading>{x.heading}</ModalHeading>
      <UnorderedList spacing={2} pl="1.75rem" pt=".5rem">
        {x.links.map((y) => (
          <ListItem key={y.href}>
            {y.href ? (
              <Link href={y.href} isExternal>
                {y.name}
              </Link>
            ) : (
              <Text userSelect="none">{y.name}</Text>
            )}
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
      <Text fontSize="xs" pt="2rem !important">
        * Needs a link.
      </Text>
    </>
  );
}
