import { Sequelize } from "sequelize";

async function connectToDB(dbURI) {
    console.log(`Connecting to DB: ${dbURI}`);

    const sequelize = new Sequelize(dbURI, {
        logging: console.log,
        define: {
            timestamps: true,
            underscored: true,
        },
    })

    try {
        await sequelize.authenticate();
        console.log("Connected to DB successfully!!")
    } catch (error) {
        console.error("Something went wrong trying to connect to DB:", error)
    }
    return sequelize;
}

export default connectToDB;