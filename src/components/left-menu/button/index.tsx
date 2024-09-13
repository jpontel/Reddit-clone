import React, {Fragment} from "react";
import './../style/style.css';

interface LeftMenuButtonProps {
    icon?: React.ReactNode;
    onClick?: () => void;
    addIcon?: boolean;
    isOpen?: boolean;
    arrow?: boolean;
    text: string;
    category: string;
}

export default function LeftMenuButton({icon, text, addIcon, isOpen, onClick, arrow, category}: LeftMenuButtonProps) {
    return (
        <Fragment>
            {icon && (
                <div>
                    <img/>
                </div>
            )}
            <div className={'flex transition-colors hover:bg-zinc-100 rounded-[5px] p-1'}>
                <button
                    className={'mx-2 p-1 text-start transition-colors hover:bg-zinc-100 rounded-[5px]'}
                    onClick={onClick}
                >
                    {text}
                </button>
                {arrow && (
                    <div className={`arrow items-center justify-center ${isOpen ? 'open' : 'closed'}`}></div>
                )}
            </div>
            <div className={'inline-flex w-full transition-colors hover:bg-zinc-100 rounded-[5px] text-[13px]'}>
                {addIcon && isOpen && (
                    <div className={'add-icon'}/>
                )}
                {isOpen && (
                    <button className={'mx-2 p-1 text-start '}>{category}</button>
                )}
            </div>
        </Fragment>
    )
}