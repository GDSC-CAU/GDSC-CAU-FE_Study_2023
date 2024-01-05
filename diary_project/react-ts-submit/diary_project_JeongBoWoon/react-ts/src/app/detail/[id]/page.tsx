import { Link, useParams } from 'react-router-dom'

type DiaryDetailPageParams = {
    id: string
}

const Diarydetails :React.FC =()=> {
    const today = new Date()
    const week=['일','월','화','수','목','금','토']
    const formattedDate = `${today.getFullYear()}년 ${today.getMonth()+1}월 ${today.getDate()}일 ${week[today.getDay()]}요일`

    return <div>
        <h1 style={{marginBottom:'15px'}} className="font-semibold text-3xl text-zinc-950">여기는 제목 입니다앙</h1>
        <div>
            <button style={{width:'250px', height:'25px', marginRight:'8px'}}  className='text-zinc-400 bg-zinc-100 rounded-[10px]'>{formattedDate}</button>
            <button style={{width:'250px', height:'25px'}} className='text-zinc-400 bg-zinc-100 rounded-[10px]'>sunny</button>
            <button style={{width:'250px', height:'25px', marginLeft:'8px'}} className='text-zinc-400 bg-zinc-100 rounded-[10px]'>soso</button>
        </div>
        <h1 style={{width:'750px', height:'500px', marginTop:'30px'}} >일기내용 입니다앙 일기가 길지요옹 엔터는 안먹네용ㅇㅋㅋㅋ</h1>
        <Link to={'/'}><button style={{padding:'5px 115px', marginRight:'15px'}} className='font-semibold text-green-500 bg-green-200 rounded-[7px]'>새로운 일기 작성하기</button></Link>
        <button style={{padding:'5px 115px'}} className='font-semibold text-red-400 bg-red-200 rounded-[7px]'>현재 일기 삭제하기</button>
    </div>
}



export default function DiaryDetailPage() {
    const { id } = useParams<DiaryDetailPageParams>()
    return <div><Diarydetails/>
        </div>
}
