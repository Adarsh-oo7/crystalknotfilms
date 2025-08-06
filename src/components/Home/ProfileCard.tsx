"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function ProfileCard() {
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-white/8 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white border-white w-[16rem] sm:w-[20rem] md:w-[20rem] lg:w-[25rem] h-auto rounded-xl p-4 border">
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
                    <img
                        src="/images/Without background.png"
                        height="100"
                        width="100"
                        className="w-full h-auto object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
            </CardBody>
        </CardContainer>
    );
}
