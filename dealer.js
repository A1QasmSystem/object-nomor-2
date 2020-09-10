var jualMobil = {
    merek: false,
    iklan: function (){
        document.write(
            `Bu, saya ${this.nama}, jual mobil ${this.merek}, tahun ${this.tahun}, bekas`
        );
    }
};

var saya = Object.create(jualMobil);

saya.nama = "Tompel"
saya.merek = "Avanza"
saya.tahun = "2017"
console.log(saya.iklan());