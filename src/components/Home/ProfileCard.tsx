"use client";

import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function ProfileCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-white/8 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white border-white w-[16rem] sm:w-[20rem] md:w-[20rem] lg:w-[22rem] h-auto rounded-xl p-4 border">
        <CardItem
          translateZ="50"
          className="w-full text-center text-2xl font-bold text-neutral-100 dark:text-white"
          style={{ fontFamily: "Cinzel, Regular" }}
        >
          SAIF
        </CardItem>

        <CardItem
          translateZ="50"
          className="w-full text-center text-sm font-bold text-neutral-100 dark:text-white"
          style={{ fontFamily: "Cinzel, Regular" }}
        >
          Video Editor
        </CardItem>

        <CardItem
          translateZ="100"
          rotateX={10}
          rotateY={0}
          rotateZ={0}
          className="w-full mt-3"
        >
          <div className="relative w-full h-auto aspect-[4/5] rounded-xl overflow-hidden group-hover/card:shadow-xl">
            <Image
              src="/images/Without background.png"
              alt="thumbnail"
              fill
              className="object-contain"
              priority
            />
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
