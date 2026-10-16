const express = require('express');
const app = express();
const pageRoutes = require('./routes/page.routes'); // 1. Import Router
app.use(express.urlencoded({ extended: true }))
app.use('/', pageRoutes);

app.set('view engine', 'ejs');
app.use(express.static('public'));

// 2. Pasang router ke pipeline Express (Pastikan app.get('/') lama sudah dihapus)


app.use((req, res) => { res.status(404).send('404 Not Found'); });
app.listen(3000, () => console.log('Server MVC Aktif!'));
// const express = require('express'); 
// const app = express(); 
// const PORT = 3000;
// app.set('view engine', 'ejs'); 
// // Express otomatis akan mencari berkas UI di dalam folder /views
// // Definisi Endpoint / Rute Dasar (HTTP GET)
// app.get('/', (req, res) => {
//     // Menyimulasikan data yang diambil dari database Model
//     const dataKonteks = {
//         userName: 'Mahasiswa TI',
//         fiturList: ['Arsitektur MVC', 'Template EJS', 'Modular Router']
//     };
//     // Render views/pages/home.ejs dengan melewatkan objek dataKonteks
//     res.render('pages/home', dataKonteks); 
// });
// app.use((req, res) => {
//     res.status(404).send('<h1>Error 404</h1><p>Halaman tidak ditemukan.</p>'); 
// });
// // Mengaktifkan server untuk mendengarkan lalu lintas pada port 3000 
// app.listen(PORT, () => {
//     console.log(`[SERVER] Aktif di http://localhost:${PORT}`); 
// });
// // Middleware: Mengizinkan akses publik ke berkas statis dalam folder 'public' 
// app.use(express.static('public'));