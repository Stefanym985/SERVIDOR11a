import mongoose from "mongoose";

const uri = "mongodb+srv://StefanyM:THOMAS12345@cluster0.x4da9fc.mongodb.net/bdatos?retryWrites=true&w=majority&appName=Cluster0"

export const conectoDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Conexión a la base de datos exitosa");
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }
}