import commentIcon from './../../assets/icons/comment.svg';
import likeIcon from './../../assets/icons/like.svg';
import markedIcon from './../../assets/icons/marked.svg';

interface CardHomeProps {
    name: string;
    time: string;
    description: string;
    tags: string[];
    likes: number;
    comments: number;
    marks: number;
}

export default function CardHome({name, time, description, tags, likes, comments, marks}: CardHomeProps) {
    return (
        <div className={'w-[40rem] mt-6 min-h-min bg-white shadow-lg border-2 rounded-lg'}
             style={{backdropFilter: 'blur(40.774227142333984px)'}}>
            <div className={'items-center justify-center inline-flex ml-4 mt-4'}>
                <div>
                    <div className={'w-10 h-10 bg-amber-200 rounded-full '}/>
                </div>
                <div className={'flex-col'}>
                    <div className={'ml-4 items-center justify-center font-bold'}>
                        {name}
                    </div>
                    <div className={'ml-4 items-center justify-center font-regular text-slate-400 text-[10px]'}>
                        {time}
                    </div>
                </div>
            </div>
            <div className={'mt-2 mx-4'}>
                <div className={'min-h-min'}>
                    {description}
                </div>
                <div className={'mt-2 text-slate-400 text-[12px]'}>
                    {tags.map((tag, index) => {
                        return (
                            <span key={index} className={'mr-2'}>
                                #{tag}
                            </span>
                        );
                    })}
                </div>
            </div>
            <div className={'w-full inline-flex mt-4 mb-4 justify-between'}>
                <div className={'inline-flex ml-4 gap-3'}>
                    <div className={'inline-flex'}>
                        <button>
                            <img src={likeIcon} className={'w-4 mr-1 hover:bg-red-500'} alt={'Like Icon'}/>
                        </button>
                        <div className={'font-medium'}>{likes}</div>
                    </div>
                    <div className={'inline-flex'}>
                        <img src={commentIcon} className={'w-4 mr-1'} alt={'Comment Icon'}/>
                        <div className={'font-medium'}>{comments}</div>
                    </div>
                    <div className={'inline-flex'}>
                        <img src={markedIcon} className={'w-3 mr-1'} alt={'Marked Icon'}/>
                        <div className={'font-medium'}>{marks}</div>
                    </div>
                </div>
                <div className={'justify-end items-end inline-flex gap-2 mr-4'}>
                    <div className={'w-6 h-6 bg-amber-200 rounded-full'}/>
                    <div className={'w-6 h-6 bg-amber-200 rounded-full'}/>
                </div>
            </div>
        </div>
    )
}