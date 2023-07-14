import { IDetails, IList } from "../models";
import { useEffect, useState } from "react";

type IListProp = {
    info: IList
}
export const Details = ({info}:IListProp) => {
  const [item, setItem] = useState<IDetails>(
    {
        id: 0,
        name: '',
        avatar: '',
        details: {
        city: '',
        company: '',
        position: ''
    }
    }
  );
  useEffect(() => {
    const fetchDetails = async () => {
        try {
            const response = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const details = await response.json();
            setItem(details);
        } catch (e) {
            console.error(e);
        }
    }
    fetchDetails()
    return setItem({
        id: 0,
        name: '',
        avatar: '',
        details: {
        city: '',
        company: '',
        position: ''
    }
    })
}, [info.id])
    return(
        <>
          <ul className="details">
            <li><img src={item.avatar} alt={item.name}/></li>
            <li><h3>{item.name}</h3></li>
            <li>Company: {item.details.company}</li>
            <li>Position: {item.details.position}</li>
          </ul>
        </>
    )

    
};