document.addEventListener("DOMContentLoaded", function () { // ini merupakan event DOM untuk mengakses dan mastikan cek seluruh HTML dimuat dalam kode fungsi ini
    // dengna tujuan untuk dimaniulasi atau di edit sesuai interaksi yang dibutuhkan, seperti menghtiung nilai dari inputan HTML (uts, uas dan tugas)

    const gradeForm = document.getElementById('gradeForm'); //variabel gradeForm yang digunakan untuk mengakses elemen div dari HTML yang dilabeli id='gradeForm' 
    const resultDiv = document.getElementById('result'); // sama seperti varaibel gradeFrom, untuk mengakses elemen div dari html yang telah dilabel id='result', 
    // goalsnya, variabel gradeForm akan mengakses elemen id gradeForm
    // sedangkan resultDiv nanti akan digunakan untuk menampilkan nilai sesuai operasi pada scrip js berikut.

    const TUGAS_WEIGHT = 0.3; // variabel const menyyimpan nilai desimal persentase tugas
    const UTS_WEIGHT = 0.3; // varibel const yang menyimpan nilai desimal persentase uts
    const UAS_WEIGHT = 0.4; // variabel const yang menyimpan nilai desimal persentase uas
    const BATAS_SCORE = 70; // variabel const menyimpan nilai batas akhir untuk penentuan grade lulus

    gradeForm.addEventListener('submit', function (event) {  // fugnsi ini sedikit berbeda degnan sebelumnya
        // fungsi ini hanya ketika elemen form htlm di submit
        // dalam artian fungsi ini akan dijalankan ketika id submit dalam hal ini elemen button pada html ditekan
        // dengan ketentuan semua elemen input html sudah di isi dengan baik
        event.preventDefault();

        const tugas = parseFloat(document.getElementById('tugas').value); // baris ini untuk mengambil inilai dengan id tugas, di simpan dalam variabel javascript tugas
        const uts = parseFloat(document.getElementById('uts').value); // baris ini juga sama untuk mengambil niilai dengan id uts
        const uas = parseFloat(document.getElementById('uas').value); // baris ini juga sama untuk mengambil nilai, dengan id uas

        // baris kondisi if ini digunakan untuk mengecek apakah elemen input html diisi dengan baik atau tidak
        // dnegan memperhatikan kondisi, input elemen harus tidak dalam keadaan kosong dan harus bertipe numerik atau integer
        if (isNaN(tugas) || isNaN(uts) || isNaN(uas) || 
            tugas < 0 || tugas > 100 || 
            uts < 0 || uts > 100 || 
            uas < 0 || uas > 100) {
            resultDiv.innerHTML = '<p class="gagal">Silakan masukkan nilai yang valid (0-100).</p>'; // kondisi print pada halaman web jika kondisi if ini terpenuhi
            return;
        }

        // baris ini untuk menghitung nilai akhir dengan memperhitungan nilai input setiap variabel dari elemen html di kalikan dengan nilai desimal presentase nya
        let finalScore = (tugas * TUGAS_WEIGHT) + (uts * UTS_WEIGHT) + (uas * UAS_WEIGHT);
        let grade = '';

        // baris kondisi if ini digunakan untuk menentukan grade sesuai nilai akhir yang diperoleh
        if (finalScore >= 90) {
            grade = 'A';
        } else if (finalScore >= 80) {
            grade = 'B';
        } else if (finalScore >= 70) {
            grade = 'C';
        } else if (finalScore >= 60) {
            grade = 'D';
        } else {
            grade = 'E';
        }

        // baris kode ini untuk menyimpan status lulus atau gagal berdasarkan kondisi, apakah nilai akhir lebih besar sama dengan batas skor yang ditentukan
        const status = finalScore >= BATAS_SCORE ? 'Lulus' : 'Gagal';
        // baris kode ini untuk menyimpan status lulus juga, tapi digunakan untuk variabel asign nama class
        // bertujuan dipemanggilan css untuk membuat style tulisan status lulu atau gagal dalam style color merah atau hijau
        const resultClass = finalScore >= BATAS_SCORE ? 'lulus' : 'gagal';

        // bagian kode inilah yang akan menampilkan hasil perhtiugan dalam elemen varaibel resultDive dengan format tabel html
        // penulisan format tabel digunakan untuk mengatur tata letak dan kerapian dari penulisan didlam tampilan web
        resultDiv.innerHTML = `
            <h2>Result Nilai Mahasiswa </h2>
            <table>
                <tr>
                    <td>Nilai Tugas</td>
                    <td>:</td>
                    <td>${tugas}</td>
                </tr>
                <tr>
                    <td>Nilai UTS</td>
                    <td>:</td>
                    <td>${uts}</td>
                </tr>
                <tr>
                    <td>Nilai UAS</td>
                    <td>:</td>
                    <td>${uas}</td>
                </tr>
                </tr>
                    <td>Nilai Akhir</td>
                    <td>:</td>
                    <td>${finalScore}</td>
                </tr>
                <tr>
                    <td>Nilai Huruf</td>
                    <td>:</td>
                    <td>${grade}</td>
                </tr>
                <tr>
                    <td>Status</td>
                    <td>:</td>
                    <td class="${resultClass}">${status}</td>
                </tr>
            </table>
        `;
    });
});