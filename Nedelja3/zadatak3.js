function deljiviSaPet(niz) {
    for (let element of niz) {
        if (element % 5 == 0){
            console.log (element);
        }
    } 
}
deljiviSaPet([6, 17, 58, 25, 155, 690, 42, 80])