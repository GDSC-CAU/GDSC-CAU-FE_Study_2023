import { createContext, useContext, useState } from 'react'
import { Diary } from '../interface/diary'
import { localStorage } from '../utils/localstorage'
import { DIARY_STORAGE_KEY } from '../constants'
// 데이터를 전역으로 관리할 때 : https://www.daleseo.com/react-context/


//createContext : context에 디폴트로 저장할 값을 넘김
const DiaryValueContext = createContext<Diary[] | undefined>(undefined)
//state props를 부모에서 자식으로 보낼때 any 대신 사용
type DiaryUpdate = React.Dispatch<React.SetStateAction<Diary[]>>
const DiaryUpdateContext = createContext<DiaryUpdate | undefined>(undefined)

//children type
/*Provider로 감싸주면, 그 하위에 있는 모든 컴포넌트들은 context에 저장되어 있는 전역 데이터에 접근 가능 
main.tsx에서 확인 가능
*/
const DiaryProvider = ({ children }: React.PropsWithChildren) => {
    //localstorage에 저장했던 일기 가져옴
    const [diaries, updateDiaries] = useState<Diary[]>(() => localStorage.get<Diary[]>(DIARY_STORAGE_KEY) ?? [])
    return (
        //이 코드를 씀으로써 이제 context(DiaryValueContext/DiaryUpdateContext)에 값 저장됌  
        <DiaryValueContext.Provider value={diaries}>
            <DiaryUpdateContext.Provider value={updateDiaries}>{children}</DiaryUpdateContext.Provider>
        </DiaryValueContext.Provider>
    )
}

const useDiaryValue = (): Diary[] => {
    //useContext : 좀 더 깔끔하게 Context에 저장되어 있는 전역 데이터에 접근 -> 일기 목록 접근
    const diary = useContext(DiaryValueContext)
    if (diary === undefined) {
        throw new Error('useDiaryValue must be used within a <DiaryProvider>')
    }
    return diary
}

const useDiaryUpdate = (): DiaryUpdate => {
    const updateDiary = useContext(DiaryUpdateContext)
    if (updateDiary === undefined) {
        throw new Error('useDiaryUpdate must be used within a <DiaryProvider>')
    }
    return updateDiary
}

const useDiary = (): [Diary[], DiaryUpdate] => {
    return [useDiaryValue(), useDiaryUpdate()]
}

export { DiaryProvider, useDiaryUpdate, useDiaryValue, useDiary }
