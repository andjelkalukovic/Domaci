import { getPastLaunches, getInfo } from '../services/spacex_service'
import { Launch } from './launch';

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

const LaunchListDates = (datum) => {
    const div = document.createElement('div');
    div.className = 'launch-dates';

    getPastLaunches().then(response => {
        // let data=response.data;
        let { data } = response;
        console.log(datum);
        // const launch=Launch()
        let year = true;
        data.forEach(element => {
            if (datum == element.launch_year) {
                div.appendChild(Launch(element));
                year = true;
                console.log('year')
            } else if (element.launch_year.value == null) {
                year = false;
            }

        });
        console.log(year);
        if (year == false) {
            let noyear = document.createElement('div');
            noyear.className = "no-year";

            noyear.innerHTML = `<p>Sorry, NO LAUCH THIS YEAR!</p>`
            div.appendChild(noyear);
        } else if (year == true) {
            console.log('true')
            if (document.querySelector('.no-year')) {
                console.log('no-year');
            }
        }

    }, error => { console.log(error) });

    return div;
}

const InfoHed = () => {
    const div = document.createElement('div');
    div.className = 'headerInfo'
    getInfo().then(response => {
        console.log(response);
        let { data } = response;

        let p = document.createElement('p')
        p.innerHTML = `${data.name}`

        let p2 = document.createElement('p')
        p2.innerHTML = `${data.summary}`

        div.appendChild(p);
        div.appendChild(p2);
    })
    return div;
}
export { LaunchList, InfoHed, LaunchListDates };