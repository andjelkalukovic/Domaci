import {LaunchList, InfoHed} from "./components/launch_list";
import optionRakete from "./components/select";

const app=document.querySelector('#app');

// const header=Header()
const header=InfoHed();
const launch_list=LaunchList();

const filters=document.createElement('section');
const select2=optionRakete();

/*const selectGodine=document.querySelector('#selektorid');
let ispis=document.createElement('div');
        ispis.id = 'ispis';
        //app.appendChild(ispis);
selectGodine.addEventListener('change', () => {
    const godina=document.querySelectorAll('#godina');
    
    godina.forEach(year => {
       year.parentElement.parentElement.style.display = 'none';
        if (selectGodine.value == 1) {
        } else if (selectGodine.value == year.innerHTML) {
           ;
        } else if  (selectGodine.value == 2011) {
            ispis.innerHTML = `Ove godine nije bilo lansiranja rakete.`;
        }
    })
})   */

const footer=document.createElement('footer');
footer.innerText='Developed by ITBootCamp';


app.appendChild(header);
app.appendChild(launch_list);
app.appendChild(footer);
app.appendChild(filters);
app.appendChild(select2);