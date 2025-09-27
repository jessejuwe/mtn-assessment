import React from "react";
import Image, { StaticImageData } from "next/image";
import { Card } from "@chakra-ui/react";

type Props = {
  image: StaticImageData;
  label: string;
  description: string;
};

export default function FeatureCard({ image, label, description }: Props) {
  return (
    <Card.Root className="flex w-[270px] flex-col" rounded="xl" variant="outline">
      <Card.Header>
        <Image src={image} alt="label" />
      </Card.Header>
      <Card.Body className="flex flex-1 flex-col">
        <Card.Title className="flex min-h-[56px] items-start" fontSize="2xl" fontWeight="bold" mb="4">
          {label}
        </Card.Title>
        <Card.Description className="flex-1" fontSize="md" fontWeight="medium">
          {description}
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
}
