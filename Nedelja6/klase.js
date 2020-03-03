class Covek {
    constructor(ime, prezime, godiste) {
        this.ime = ime;
        this.prezime = prezime;
        this.godiste = godiste;
    }
}

class Student extends Covek {
    constructor(ime, prezime, godiste, godStudija, prosek) {
        super(ime, prezime, godiste);
        this.godStudija = godStudija;
        this.prosek = prosek;
    }
}

class StudentOsStudija extends Student {
    constructor(ime, prezime, godiste, godStudija, prosek, smerOsStudija) {
        super(ime, prezime, godiste, godStudija, prosek);
        this.smerOsStudija = smerOsStudija;
    }
}

class StudentMasStudija extends Student {
    constructor(ime, prezime, godiste, godStudija, prosek, smerMasStudija) {
        super(ime, prezime, godiste, godStudija, prosek);
        this.smerMasStudija = smerMasStudija;
    }
}

class Zaposleni extends Covek {
    constructor(ime, prezime, godisete, godZaposlenja, plata) {
        super(ime, prezime, godisete);
        this.godZaposlenja = godZaposlenja;
        this.plata = plata;
    }
}

class Nastavnik extends Zaposleni {
    constructor(ime, prezime, godisete, godZaposlenja, plata,
        omiljeniPredmet, listaPredmeta) {
        super(ime, prezime, godisete, godZaposlenja, plata);
        this.omiljeniPredmet = omiljeniPredmet;
        this.listaPredmeta = listaPredmeta;
    }
}

class Profesor extends Nastavnik {
    constructor(ime, prezime, godisete, godZaposlenja, plata,
        omiljeniPredmet, listaPredmeta, titula) {
        super(ime, prezime, godisete, godZaposlenja, plata,
            omiljeniPredmet, listaPredmeta);
        this.titula = titula;
    }
}

class Asistent extends Nastavnik {
    constructor(ime, prezime, godisete, godZaposlenja, plata,
        omiljeniPredmet, listaPredmeta, smer) {
        super(ime, prezime, godisete, godZaposlenja, plata,
            omiljeniPredmet, listaPredmeta);
        this.smer = smer;
    }
}

class Sluzbenik extends Zaposleni {
    constructor(ime, prezime, godisete, godZaposlenja, plata, odsek) {
        super(ime, prezime, godisete, godZaposlenja, plata);
        this.odsek=odsek;
    }
}