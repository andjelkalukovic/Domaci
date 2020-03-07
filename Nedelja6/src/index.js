import { LaunchList, InfoHed, LaunchListDates } from "./components/launch_list";

const app = document.querySelector('#app');
//const divSelekt=document.querySelector('#godine');
//const lista=document.querySelector('#ispis');

// const header=Header()
const header = InfoHed();
const launch_list = LaunchList();
const filters = document.createElement('section');
const selektor = document.querySelector('#selektor');

for (let i = 1999; i < 2030; i++) {
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selektor.appendChild(option);
}

selektor.addEventListener('change', () => {
    let kojalista = selektor.value;
    if (kojalista == 'SVE') {
        if (app.contains(document.querySelector('.launch-dates'))) {
            app.removeChild(document.querySelector('.launch-dates'));

        }
        app.appendChild(launch_list);
    } else {
        let launch_dates = LaunchListDates(kojalista);
        console.log(launch_list);
        if (app.contains(document.querySelector('.launch-list'))) {
            app.removeChild(launch_list);
        }
        if (app.contains(document.querySelector('.launch-dates'))) {
            app.removeChild(document.querySelector('.launch-dates'));
        }
        app.appendChild(launch_dates);
    }
})

const footer = document.querySelector('#footer');
footer.innerText = 'Developed by ITBootCamp';

app.appendChild(header);
app.appendChild(launch_list);
app.appendChild(filters);