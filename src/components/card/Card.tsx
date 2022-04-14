import React, { FC } from 'react';

interface CardProps {
  title: string;
  date: Date;
  description: string;
}

const Card: FC<CardProps> = ({ title, date, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{date.toDateString()}</p>
      <p>{description}</p>
    </div>
  );
};

export default Card;
