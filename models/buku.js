module.exports = (sequelize, DataTypes) => {
    const buku = sequelize.define("buku", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,  
        },
        Judul: {
            type: DataTypes.STRING,
        },
        Pengarang: {
            type: DataTypes.STRING,
        },
        Tahun_terbit: {
            type: DataTypes.STRING,
        },
        Bidang: {
            type: DataTypes.STRING,
        },
    });
    return buku;
}