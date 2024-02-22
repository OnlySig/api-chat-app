import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONBO_DB_URI)
        console.log('Connectado com o MongoDB')
    } catch (error) {
        console.log("Erro em conectar com o MongoDB ", error.message)
    }
}

export default connectMongoDB