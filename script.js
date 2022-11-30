const HTML = document.querySelector('#Agung-Container');

const h1Agung01 = document.createElement('h1');
h1Agung01.textContent = 'Data Mahasiswa';
h1Agung01.className = 'h1-Agung01';
HTML.appendChild(h1Agung01)


const h3Agung01 = document.createElement('h3');
h3Agung01.textContent = 'POLITEKNIK AMAMAPARE TIMIKA';
h3Agung01.className = 'h3-Agung01';
HTML.appendChild(h3Agung01)


const h2Agung01 = document.createElement('h2');
h2Agung01.textContent = 'Materi JavaScript';
h2Agung01.className = 'h2-Agung01';
HTML.appendChild(h2Agung01)


const Agungheading3 = document.createElement('h3');
Agungheading3.textContent = 'Register ';
Agungheading3.className = 'h3-Agung02';
HTML.appendChild(Agungheading3)


const FormAgung01 = document.createElement('form');
FormAgung01.name = 'Form';
HTML.appendChild(FormAgung01)


const tableAgung01 = document.createElement('table');
tableAgung01.className = 'Agung-Tabel';
FormAgung01.appendChild(tableAgung01)


const trAgung01 = document.createElement('tr');
tableAgung01.appendChild(trAgung01)


const Tr1AgungTd1 = document.createElement('td');
trAgung01.appendChild(Tr1AgungTd1)


const labelAgung01 = document.createElement('label');
labelAgung01.textContent = 'NIM';
labelAgung01.className = 'label-Agung01';
Tr1AgungTd1.appendChild(labelAgung01)


const Tr1AgungTd2 = document.createElement('td');
trAgung01.appendChild(Tr1AgungTd2)


const inputAgung01 = document.createElement('input');
inputAgung01.className = 'input-Agung01';
inputAgung01.name = 'NimInput';
inputAgung01.type = 'number';
inputAgung01.placeholder = 'NIM';
Tr1AgungTd2.appendChild(inputAgung01)


const trAgung02 = document.createElement('tr');
tableAgung01.appendChild(trAgung02)


const Tr2AgungTd1 = document.createElement('td');
trAgung02.appendChild(Tr2AgungTd1)


const labelAgung02 = document.createElement('label');
labelAgung02.textContent = 'NAMA MAHASISWA';
labelAgung02.className = 'label-Agung01';
Tr2AgungTd1.appendChild(labelAgung02)


const Tr2AgungTd2 = document.createElement('td');
trAgung02.appendChild(Tr2AgungTd2)


const inputAgung02 = document.createElement('input');
inputAgung02.className = 'input-Agung01';
inputAgung02.name = 'NamaInput';
inputAgung02.type = 'text';
inputAgung02.placeholder = 'NAMA LENGKAP';
Tr2AgungTd2.appendChild(inputAgung02)


const trAgung03 = document.createElement('tr');
tableAgung01.appendChild(trAgung03)


const Tr3AgungTd1 = document.createElement('td');
trAgung03.appendChild(Tr3AgungTd1)


const labelAgung03 = document.createElement('label');
labelAgung03.textContent = 'JENIS KELAMAIN';
labelAgung03.className = 'label-Agung01';
Tr3AgungTd1.appendChild(labelAgung03)


const Tr3AgungTd2 = document.createElement('td');
trAgung03.appendChild(Tr3AgungTd2)


const inputAgung03 = document.createElement('select');
inputAgung03.className = 'input-Agung01';
inputAgung03.name = 'JemiskelaminInput';
Tr3AgungTd2.appendChild(inputAgung03)


const Tr3Td2optiont01 = document.createElement('option');
Tr3Td2optiont01.textContent = '';
inputAgung03.appendChild(Tr3Td2optiont01)


const Tr3Td2optiont02 = document.createElement('option');
Tr3Td2optiont02.textContent = 'Laki-Laki';
inputAgung03.appendChild(Tr3Td2optiont02)


const Tr3Td2optiont03 = document.createElement('option');
Tr3Td2optiont03.textContent = 'Perempuan';
inputAgung03.appendChild(Tr3Td2optiont03)


const trAgung04 = document.createElement('tr');
tableAgung01.appendChild(trAgung04)


const Tr4AgungTd1 = document.createElement('td');
trAgung04.appendChild(Tr4AgungTd1)


const labelAgung04 = document.createElement('label');
labelAgung04.textContent = 'AGAMA';
labelAgung04.className = 'label-Agung01';
Tr4AgungTd1.appendChild(labelAgung04)


const Tr4AgungTd2 = document.createElement('td');
trAgung04.appendChild(Tr4AgungTd2)

const inputAgung04 = document.createElement('select');
inputAgung04.className = 'input-Agung01';
inputAgung04.name = 'AgamaInput';
Tr4AgungTd2.appendChild(inputAgung04)


const Tr4Td2optiont01 = document.createElement('option');
Tr4Td2optiont01.textContent = '';
inputAgung04.appendChild(Tr4Td2optiont01)


const Tr4Td2optiont02 = document.createElement('option');
Tr4Td2optiont02.textContent = 'Islam';
inputAgung04.appendChild(Tr4Td2optiont02)


const Tr4Td2optiont03 = document.createElement('option');
Tr4Td2optiont03.textContent = 'Kristen Protestan ';
inputAgung04.appendChild(Tr4Td2optiont03)


const Tr4Td2optiont04 = document.createElement('option');
Tr4Td2optiont04.textContent = 'Kristen Katolik';
inputAgung04.appendChild(Tr4Td2optiont04)


const Tr4Td2optiont05 = document.createElement('option');
Tr4Td2optiont05.textContent = 'Hindu ';
inputAgung04.appendChild(Tr4Td2optiont05)


const Tr4Td2optiont06 = document.createElement('option');
Tr4Td2optiont06.textContent = 'Buddha ';
inputAgung04.appendChild(Tr4Td2optiont06)


const Tr4Td2optiont07 = document.createElement('option');
Tr4Td2optiont07.textContent = 'Konghucu ';
inputAgung04.appendChild(Tr4Td2optiont07)


const trAgung05 = document.createElement('tr');
tableAgung01.appendChild(trAgung05)


const Tr5AgungTd1 = document.createElement('td');
trAgung05.appendChild(Tr5AgungTd1)


const labelAgung05 = document.createElement('label');
labelAgung05.textContent = 'STATUS';
labelAgung05.className = 'label-Agung01';
Tr5AgungTd1.appendChild(labelAgung05)


const Tr5AgungTd2 = document.createElement('td');
trAgung05.appendChild(Tr5AgungTd2)


const Tr5AgungTd2p = document.createElement('p');
Tr5AgungTd2p.textContent = 'Kawin '
Tr5AgungTd2.appendChild(Tr5AgungTd2p)


const inputAgung05 = document.createElement('input');
inputAgung05.textContent = 'Kawin';
inputAgung05.name = 'KawinInput';
inputAgung05.type = 'radio';
Tr5AgungTd2p.appendChild(inputAgung05)


const trAgung06 = document.createElement('tr');
tableAgung01.appendChild(trAgung06)


const Tr6AgungTd1 = document.createElement('td');
trAgung06.appendChild(Tr6AgungTd1)


const labelAgung06 = document.createElement('label');
labelAgung06.textContent = 'JURUSAN';
labelAgung06.className = 'label-Agung01';
Tr6AgungTd1.appendChild(labelAgung06)


const Tr6AgungTd2 = document.createElement('td');
trAgung06.appendChild(Tr6AgungTd2)


const inputAgung06 = document.createElement('select');
inputAgung06.className = 'input-Agung01';
inputAgung06.name = 'JurusanInput';
Tr6AgungTd2.appendChild(inputAgung06)


const Tr6Td2optiont01 = document.createElement('option');
Tr6Td2optiont01.textContent = '';
inputAgung06.appendChild(Tr6Td2optiont01)


const Tr6Td2optiont02 = document.createElement('option');
Tr6Td2optiont02.textContent = 'Teknologi Rekayasa Informatika';
inputAgung06.appendChild(Tr6Td2optiont02)


const Tr6Td2optiont03 = document.createElement('option');
Tr6Td2optiont03.textContent = 'Teknik Mesin';
inputAgung06.appendChild(Tr6Td2optiont03)


const Tr6Td2optiont04 = document.createElement('option');
Tr6Td2optiont04.textContent = ' Teknik Sipil';
inputAgung06.appendChild(Tr6Td2optiont04)


const Tr6Td2optiont05 = document.createElement('option');
Tr6Td2optiont05.textContent = 'Teknik Listrik';
inputAgung06.appendChild(Tr6Td2optiont05)


const Tr6Td2optiont06 = document.createElement('option');
Tr6Td2optiont06.textContent = 'Teknik Tambang';
inputAgung06.appendChild(Tr6Td2optiont06)


const trAgung07 = document.createElement('tr');
tableAgung01.appendChild(trAgung07)


const Tr7AgungTd1 = document.createElement('td');
trAgung07.appendChild(Tr7AgungTd1)


const labelAgung07 = document.createElement('label');
labelAgung07.textContent = 'KOMENTAR';
labelAgung07.className = 'label-Agung01';
Tr7AgungTd1.appendChild(labelAgung07)


const Tr7AgungTd2 = document.createElement('td');
trAgung07.appendChild(Tr7AgungTd2)


const inputAgung07 = document.createElement('textarea');
inputAgung07.rows = '3';
inputAgung07.cols = '30';
inputAgung07.name = 'KomentarInput';
inputAgung07.className = 'label-Agung0';
Tr7AgungTd2.appendChild(inputAgung07)


const tombolAgung01 = document.createElement('input');
tombolAgung01.type = 'button';
tombolAgung01.value = 'KIRIM';
tombolAgung01.className = 'tombol-Agung01';
HTML.appendChild(tombolAgung01)

const reset = document.createElement('input');
reset.type = 'button';
reset.value = 'Clear';
reset.className = 'tombol-Agung01';
HTML.appendChild(reset)


const table = document.createElement('table');
table.className = 'tableoutput';
HTML.appendChild(table)

reset.addEventListener('click', function(){
    FormAgung01.reset();
})

tombolAgung01.addEventListener('click', function(){


    var Nim                 = (document.Form.NimInput.value);
    var Nama                = (document.Form.NamaInput.value); 
    var JenisKelamin        = (document.Form.JemiskelaminInput.value); 
    var Agama               = (document.Form.AgamaInput.value); 
    var Jurusan             = (document.Form.JurusanInput.value); 
    var Komentar            = (document.Form.KomentarInput.value); 
    var Status              = "";

    if (document.Form.KawinInput.checked == true){Status = "Kawin";}
    else {Status = " Belum Kawin";}

    const br1 = document.createElement ('br');
    table.appendChild(br1)
    const br2 = document.createElement ('br');
    table.appendChild(br2)
    const br3 = document.createElement ('br');
    table.appendChild(br3)
    const br4 = document.createElement ('br');
    table.appendChild(br4)

    const tr1 = document.createElement ('tr');
    table.appendChild(tr1)

    const tr1td1 = document.createElement ('td');
    tr1td1.textContent = 'NIM';
    tr1.appendChild(tr1td1)

    const tr1td2 = document.createElement ('td');
    tr1td2.textContent = ': '+Nim;
    tr1.appendChild(tr1td2)

    const tr2 = document.createElement ('tr');
    table.appendChild(tr2)

    const tr2td1 = document.createElement ('td');
    tr2td1.textContent = 'NAMA MAHASISWA';
    tr2.appendChild(tr2td1)

    const tr2td2 = document.createElement ('td');
    tr2td2.textContent = ': '+Nama;
    tr2.appendChild(tr2td2)

    const tr3 = document.createElement ('tr');
    table.appendChild(tr3)

    const tr3td1 = document.createElement ('td');
    tr3td1.textContent = 'JENIS KELAMIN';
    tr3.appendChild(tr3td1)

    const tr3td2 = document.createElement ('td');
    tr3td2.textContent = ': '+JenisKelamin;
    tr3.appendChild(tr3td2)

    const tr4 = document.createElement ('tr');
    table.appendChild(tr4)

    const tr4td1 = document.createElement ('td');
    tr4td1.textContent = 'AGAMA';
    tr4.appendChild(tr4td1)

    const tr4td2 = document.createElement ('td');
    tr4td2.textContent = ': '+Agama;
    tr4.appendChild(tr4td2)

    const tr5 = document.createElement ('tr');
    table.appendChild(tr5)

    const tr5td1 = document.createElement ('td');
    tr5td1.textContent = 'STATUS';
    tr5.appendChild(tr5td1)

    const tr5td2 = document.createElement ('td');
    tr5td2.textContent = ': '+Status;
    tr5.appendChild(tr5td2)

    const tr6 = document.createElement ('tr');
    table.appendChild(tr6)

    const tr6td1 = document.createElement ('td');
    tr6td1.textContent = 'JURUSAN DI POLTEKAM';
    tr6.appendChild(tr6td1)

    const tr6td2 = document.createElement ('td');
    tr6td2.textContent = ': '+Jurusan;
    tr6.appendChild(tr6td2)

    const tr7 = document.createElement ('tr');
    table.appendChild(tr7)

    const tr7td1 = document.createElement ('td');
    tr7td1.textContent = 'SARAN';
    tr7.appendChild(tr7td1)

    const tr7td2 = document.createElement ('td');
    tr7td2.textContent = ': ' +Komentar;
    tr7.appendChild(tr7td2)
})