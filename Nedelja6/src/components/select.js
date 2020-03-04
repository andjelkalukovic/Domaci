let date = new Date;

const selectGodine=document.createElement('select');
selectGodine.setAttribute('id','selektorid');

const option1=document.createElement('option');
option1.value=1;
option1.innerHTML=`Izaberite godinu:`
selectGodine.appendChild(option1);

const optionRakete = () => {
    for (let i = 2006; i <= date.getFullYear(); i++) {
        const option = document.createElement('option');
        option.value=`${i}`
        option.innerHTML = `${i}`
        selectGodine.appendChild(option);
    }
    return selectGodine;
};

export default optionRakete;