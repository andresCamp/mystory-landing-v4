import React from 'react';

interface BlackButtonProps {
    children: React.ReactNode;
    type?: "submit" | "reset" | "button" | undefined;
}

const BlackButton: React.FC<BlackButtonProps> = ({ type, children }) => {
    return (
        <button type={type} className='flex text-2xl justify-center items-center gap-2.5 px-12 py-4 bg-black text-white  rounded-full shadow-xl transition-all duration-500  hover:bg-primary-300 hover:scale-105'>
            {children}
        </button>
    );
};

export default BlackButton;