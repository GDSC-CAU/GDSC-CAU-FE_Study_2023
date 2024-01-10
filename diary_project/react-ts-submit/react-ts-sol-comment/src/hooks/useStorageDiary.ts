import { useMemo } from 'react'
import { DIARY_STORAGE_KEY } from '../constants'
import { Diary } from '../interface/diary'
import { useDiaryUpdate } from '../provider/Diary'
import { localStorage } from '../utils'

const updateStorageDiary = (diary: Diary[]) => localStorage.set(DIARY_STORAGE_KEY, diary)

export const useStorageDiary = () => {
    const setDiary = useDiaryUpdate()

    /*Usememo : 
보통의 react 함수형 컴포넌트 : 랜더링 => 컴포넌트 함수 호출 => 모든 내부 변수 초기화의 순서를 거친다
그런데 usememo를 쓰면 , 렌더링 => 컴포넌트 함수 호출 => memoize된 함수 재사용
.*/
    const diaryActions = useMemo(
        () => ({
            remove: (removeId: string) => {
                setDiary((prev) => {
                    const removedDiary = prev.filter(({ id }) => id !== removeId)
                    updateStorageDiary(removedDiary) // 일기 지우고 다시 localstroage에 저장
                    return removedDiary
                })
            },
            add: (newDiary: Omit<Diary, 'views'>) => {
                const initialView = 1
                setDiary((prev) => {
                    const withViews = { ...newDiary, views: initialView }
                    const updatedDiary = [...prev, withViews]
                    updateStorageDiary(updatedDiary)
                    return updatedDiary
                })
            },
            update: (updateId: string, updateDiary: Diary) => {
                setDiary((prev) => {
                    const targetDiary = prev.find(({ id }) => id === updateId)
                    if (!targetDiary) return prev

                    const updatedDiary = prev.map((diary) => (diary.id === updateId ? updateDiary : diary))
                    updateStorageDiary(updatedDiary)
                    return updatedDiary
                })
            },
        }),
        []
    )

    return diaryActions
}
