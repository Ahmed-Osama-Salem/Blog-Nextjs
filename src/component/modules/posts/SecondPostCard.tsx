import { Badge, Stack } from '@chakra-ui/react';
import React from 'react';

interface SecondPostCardProps {
  image: string;
  title: string;
  author: string;
  brif: string;
  date: string;
}
const SecondPostCard = (props: SecondPostCardProps) => {
  const { author, brif, image, title, date } = props;
  return (
    <div className="flex h-full w-full  gap-8  ">
      <div className="h-full  w-1/2">
        <img
          // src="/assets/images/Image.png"
          src={image}
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
      <div className="flex w-1/2 flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold text-[#6941C6]">
            {author} • {date}
          </h2>
          <h2 className="text-2xl font-semibold ">{title}</h2>
          <h2 className="text-sm font-semibold text-[#21D188]">author</h2>
          <p className="text-base font-normal text-[#667085] ">{brif}</p>
        </div>
        <div>
          <Stack direction="row">
            <Badge colorScheme="green" className="rounded-full p-1 px-2">
              Presentation
            </Badge>
            <Badge colorScheme="red" className="rounded-full p-1 px-2">
              Research
            </Badge>
            <Badge colorScheme="purple" className="rounded-full p-1 px-2">
              Design
            </Badge>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default SecondPostCard;
