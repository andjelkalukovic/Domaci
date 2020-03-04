import { getPastLaunches, getInfo } from '../services/spacex_service'
import {Launch, Info} from './launch';

//Add filters
const LaunchList = () => {
    const div = document.createElement('div');
    div.className = 'launch-list';

    getPastLaunches().then(response => {
        // let data=response.data;
        let { data } = response;

        // const launch=Launch()
        data.forEach(element => {
            div.appendChild(Launch(element));
        });

    }, error => { console.log(error) });

    return div;
}

const InfoHed=()=>{
    const div=document.createElement('div');
    div.className='headerInfo'
    getInfo().then(response=>{
        let {data } = response;

        let p=document.createElement('p')
        p.innerHTML=`${data.name}`
        Info(name)

        let p2=document.createElement('p')
        p2.innerHTML=`${data.summary}`
        Info(name)

        div.appendChild(p);
        div.appendChild(p2);
    })
    return div;
}
export {LaunchList, InfoHed};