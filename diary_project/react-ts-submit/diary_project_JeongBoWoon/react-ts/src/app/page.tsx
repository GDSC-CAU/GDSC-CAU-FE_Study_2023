//tailwind 사용 : css 프레임워크 -> 태그 안에 css속성넣기 

import React,{ useState} from "react";
import { Link } from "react-router-dom";
//import { useParams } from "react-router-dom";

const TitleComponent:React.FC=() =>{
    const [inputValue, setInputValue] = useState<string>('');   //초기값 설정
        
    const handleContextSubmit = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setInputValue(event.target.value);
    };
    
    return <div className="p-4 pt-10">
            <input
                type="text"
                value={inputValue}
                onChange={handleContextSubmit}
                placeholder="제목을 적어보세요" 
                className="text-2xl w-full p-1 text-black focus:outline-gray-200"
            />
    </div>;
}

function Feelings(){
    return <div style={{paddingLeft: '10px'}}>
            <button style={{padding:'1px 5px', marginRight:'5px'}} className="text-zinc-400 bg-zinc-100 rounded-[7px]">bad</button>
            <button style={{padding:'1px 5px', marginRight:'5px'}} className="text-zinc-400 bg-zinc-100 rounded-[7px]">soso</button>
            <button style={{padding:'1px 5px', marginRight:'5px'}} className="text-zinc-400 bg-zinc-100 rounded-[7px]">good</button>
            <button style={{padding:'1px 5px', marginRight:'5px'}} className="text-zinc-400 bg-zinc-100 rounded-[7px]">great</button>
            <button style={{padding:'1px 5px', marginRight:'5px'}} className="text-zinc-400 bg-zinc-100 rounded-[7px]">awesome</button>
        </div>;
}

function Weather(){
    return <div style={{paddingLeft: '10px',marginTop:'10px'}}>
            <button style={{padding:'1px 5px', marginRight:'5px'}} className="text-zinc-400 bg-zinc-100 rounded-[7px]">cloud</button>
            <button style={{padding:'1px 5px', marginRight:'5px'}} className="text-zinc-400 bg-zinc-100 rounded-[7px]">rain</button>
            <button style={{padding:'1px 5px', marginRight:'5px'}} className="text-zinc-400 bg-zinc-100 rounded-[7px]">snow</button>
            <button style={{padding:'1px 5px', marginRight:'5px'}} className="text-zinc-400 bg-zinc-100 rounded-[7px]">sunny</button>
        </div>;
}

const WriteDiary:React.FC=()=>{
    const [contentState,setContentState] = useState(false);
    const [inputConValue, setInputValue] = useState<string>('');   //초기값 설정
    
    const handleContextSubmit = (event: React.ChangeEvent<HTMLTextAreaElement>)=>{
        const newValue = event.currentTarget.value;
        setInputValue(newValue);
        if(inputConValue.length>10){    //분량 채움
            setContentState(true);
        }else{
            setContentState(false);
        }
    };

    return <div style={{border:'0.5px solid', borderRadius:'10px'}}
    className="text-zinc-100 flex flex-col gap-4 w-full h-2/3 min-h-[20rem]">
        <TitleComponent/>
        <div>
            <Feelings/>
            <Weather/>
        </div>
        
        <div className=" h-min-[30rem] ">
            <textarea 
                value={inputConValue}
                onChange={handleContextSubmit}
                placeholder="오늘 당신의 하루는 어땠나요?" 
                className="resize-none transition h-full mr-2.5 w-full p-2.5 text-black focus:outline-gray-200"
                maxLength={1000}
            ></textarea>
        </div>
        <div className="m-2.5">
            {contentState && 
            <button className="w-full p-2.5 font-semibold text-green-500 bg-green-200 rounded-[7px]">
                일기를 저장해 보아요
                </button>
        }
        {!contentState &&
            <button className="w-full p-2.5 text-zinc-400 bg-zinc-100 rounded-[7px]">
                일기를 더 자세히 적어볼까요?
            </button>
        }
        </div>
    </div>;
}

const StoredDiary:React.FC=()=>{
    return <div style={{ border:'0.5px solid', borderRadius:'10px'}}
            className="w-full text-zinc-100 flex flex-col gap-4 justify-between h-2/3 min-h-[20rem]">
            
            <div style={{padding: '10px'}} className="text-xl text-green-500">기록된 일기</div>
            <div className="w-full bg-zinc-100 overflow-y-auto gap-2 max-h-96"></div>
            <div className="m-2.5">
                <Link to={"/emotions"}>
                    <button className="w-full p-2.5 font-semibold
                    text-green-500 bg-green-200 rounded-[7px]">감정 모아보기
                    </button>
                </Link>
            </div>
        
    </div>;
}

export default function DiaryHomePage() {
    return (
        <div className="flex flex-col items-center justify-center gap-10 h-full md:grid md:grid-rows-1 md:grid-cols-[3fr,2fr] md:w-4/5 lg:w-2/3" >
            <div>
                <WriteDiary/>
            </div>
            <div>
                <StoredDiary/>
            </div>
        </div>
    );
}