const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./models');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`✅ Server berjalan di http://localhost:${PORT}`);
    });
}).catch(err => console.log("❌ Gagal konek DB:", err));


app.post('/buku', async (req, res) => {
    try {
        const buku = await db.buku.create(req.body);
        res.status(201).send(buku);
    } catch (err) {
        res.status(500).send({ message: "Gagal menambahkan data", error: err });
    }
});

// ✅ READ ALL (GET)
app.get('/buku', async (req, res) => {
    try {
        const buku = await db.buku.findAll();
        res.send(buku);
    } catch (err) {
        res.status(500).send({ message: "Gagal mengambil data", error: err });
    }
});
