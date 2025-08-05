import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => (
  <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md mx-auto">
    {children}
  </div>
);

export default Card;
