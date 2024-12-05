import { LuUser } from "react-icons/lu";
import { Heading } from "@/ui/heading";
import { Text } from "@/ui/text";
import { GridItem } from "./grid-item";
import { CardIndex } from "./card-index";

export function HiCard() {
  return (
    <GridItem className="relative">
      <CardIndex value={1} />
      <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center">
        <LuUser size={24} />
        <Heading>Hi, I&apos;m Mersiha 👋</Heading>
      </div>
      <Text>
        a data scientist 🥼 with a passion for turning raw data into impactful
        insights 📈 with AI and machine learning 🤖.
      </Text>
      <Text>I like running 🏃‍♂️, hiking ⛰️ and practising yoga 🧘‍♀️.</Text>
    </GridItem>
  );
}
