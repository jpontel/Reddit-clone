import {Fragment, useState} from "react";
import './style/style.css';
import LeftMenuButton from "@/components/left-menu/button";

export default function LeftMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleClick = () => {
        if (isOpen) {
            setIsOpen(false)
            return
        } else if (!isOpen)
            setIsOpen(true)
    };

    return (
        <Fragment>
            <div
                className={'w-[10vw] text-center h-full flex flex-col bg-white shadow-lg border-r-2 border-t-2 overscroll-y-contain absolute'}>
                <div className={'w-full flex flex-col my-3 '}>
                    <button className={'mx-2 p-1 text-start transition-colors hover:bg-zinc-100 rounded-[5px]'}>
                        Home
                    </button>
                    <button className={'mx-2 p-1 text-start transition-colors hover:bg-zinc-100 rounded-[5px]'}>
                        Popular
                    </button>
                    <button className={'mx-2 p-1 text-start transition-colors hover:bg-zinc-100 rounded-[5px]'}>
                        Explore
                    </button>
                    <button className={' mx-2 p-1 text-start transition-colors hover:bg-zinc-100 rounded-[5px]'}>
                        All
                    </button>
                </div>
                <div className="custom-border mb-2"/>
                <div className={'w-full'}>
                    <div className={'mx-2 p-1 text-start flex flex-col'}>
                        <LeftMenuButton text={'Custom Feed'} onClick={handleClick} arrow isOpen={isOpen}
                                        category={'Create a custom feed'} addIcon/>
                    </div>
                </div>
                <div className="custom-border mb-2"/>
            </div>
        </Fragment>
    )
}