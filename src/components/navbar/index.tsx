import redditLogo from '../../assets/reddit-logo.svg';

export default function Navbar() {
    return (
        <nav className={'w-full h-full inline-flex justify-between shadow-lg mt-4'}>
            <div className={'ml-12 justify-items-start mb-2'}>
                <img src={redditLogo} className={'w-10'} alt={'Reddit Logo'}/>
            </div>
            <div className={'justify-center items-center'}>
                <div className={'inline-flex'}>
                    <input className={'bg-slate-200 rounded-lg w-[20rem]'}/>
                    <button className={'w-8 h-8 ml-4 bg-slate-100 rounded-full'}/>
                </div>
            </div>
            <div className={'justify-items-end mr-12'}>
                <div className={'inline-flex gap-4'}>
                    <button className={'w-8 h-8 bg-blue-300 rounded-full border-2'}/>
                    <button className={'w-8 h-8 bg-blue-300 rounded-full border-2'}/>
                </div>
            </div>
        </nav>
    )
}