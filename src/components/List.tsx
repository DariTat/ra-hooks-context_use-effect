import { useState, useEffect } from 'react';
import { IList } from '../models';
import { Details } from './Details';



export const List = () => {
    const [list, setList] = useState<IList[]>([]);
    const [info, setInfo] = useState<IList>();
    
    useEffect(() => {
        const fetchList = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json');
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const list = await response.json();
                setList(list);
            } catch (e) {
                console.error(e);
            }
        }
        fetchList();
    }, []);
    
    const onDetails = (info:IList) => setInfo(info); 
    return (
        <>
        <ul className='list'>
            {
                list.map((item) => (
                    <li key={item.id} onClick={() => onDetails(item)}>{item.name}</li>
                ))
            }
        </ul>
        {info && <Details info={info}/>}
        </>
    )
}