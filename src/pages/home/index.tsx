import CardHome from "../../components/card-home";
import {useEffect, useState} from "react";
import moment from "moment";

interface HomeProps {
    name: string;
    time: string;
    description: string;
    tags: string[];
    likes: number;
    comments: number;
    marks: number;
}

export default function Home() {
    const [data, setData] = useState<HomeProps[]>([]);

    function formatTime(time:string){
        const timeMoment = moment(time, 'YYYYMMDD HH:mm:ss')
        return timeMoment.fromNow();
    }

    useEffect(() => {
            setData([
                {
                    name: 'José Rodrigo Pontel',
                    time: formatTime('20240415 12:00:00'),
                    description: 'EU Amo ver animes!! olha que coisa legal!! Vejam Madoka Magica, quem concorda dá like :)!!',
                    tags: ['Anime', 'Madoka Magica', 'Otaku', 'Weeb'],
                    likes: 23,
                    comments: 12,
                    marks: 2
                },
                {
                    name: 'Andrei Amorim',
                    time: formatTime('20240415 18:30:00'),
                    description: 'EU Amo ver séries!! American Horror Story é a minha favotira!!',
                    tags: ['Horror', 'Series', 'Netflix', 'Twitter'],
                    likes: 590,
                    comments: 120,
                    marks: 45
                },
            ])
        },
        []
    );

    return (
        <div className={'w-full h-full inline-flex items-center justify-center mt-12'}>
            <div className={'items-center justify-center'}>
                {data.map((item, index) => {
                    return (
                        <CardHome key={index}
                                  name={item.name}
                                  time={item.time.toString()}
                                  description={item.description}
                                  tags={item.tags}
                                  likes={item.likes}
                                  comments={item.comments}
                                  marks={item.marks}
                        />
                    );
                })}
            </div>
        </div>
    )
}