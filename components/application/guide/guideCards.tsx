"use client"; 

import { useState } from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { IoMdCheckboxOutline } from "react-icons/io";

const GuideCards = () => {
    const [selectedCard, setSelectedCard] = useState<number | null>(null); 

    // Handle card selection
    const handleCardClick = (cardIndex: number) => {
        setSelectedCard(prevIndex => (prevIndex === cardIndex ? null : cardIndex)); 
    };

    const cards = [
        {   
            id: 1,
            icon:  <IoMdCheckboxOutline size={50} className="text-primary" />,
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit beatae.',
            header: 'Check for Course'
        },
        {
            id: 2,
            icon:  <FaBuildingCircleCheck size={50} className="text-primary" />,
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit beatae.',
            header: 'Check your admission requirements'
        }
    ];

    return (
        <section className="my-4">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                {cards.map((card, index) => (
                    <div 
                        key={card.id}
                        onClick={() => handleCardClick(card.id)} 
                        className={`w-full focus:outline-none  ${selectedCard === card.id ? "ring-4 ring-primary" : ""}`}
                    >
                        <Card 
                            isPressable
                            className={`p-4 transition-all duration-300 shadow-lg border ${selectedCard === card.id ? "border-primary bg-primary/10" : "border-gray-200"}`}
                        >
                            <CardBody className="flex flex-row gap-4 items-center">
                                {card.icon}
                                <div>
                                    <CardHeader className="font-semibold">{card.header}</CardHeader>
                                    <p className="text-sm text-gray-600">
                                        {card.content}
                                    </p>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default GuideCards;
