import { DataTypes, Model } from "sequelize";
import url from "url";
import util from "util";

const db = await connectToDB('postgresql:///saguaro');

class User extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
    }
}
User.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        hashedPass: {
            type: DataTypes.STRING(500),
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
        },
    },
    {
        modelName: "user",
        sequelize: db
    }
)

class Product extends Model {
    [util.inspect.custom]() {
        return this.JSON();
    }
}
Product.init(
    {
        productId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imgUrl: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        quantity: {
            type: DataTypes.INTEGER,
        },
        isSoldOut: {
            type: DataTypes.BOOLEAN,
        },
        price: {
            type: DataTypes.INTEGER,
        },
    },
    {
        modelName: "product",
        sequelize: db
    }
)

class Order extends Model {
    [util.inspect.custom]() {
        return this.JSON();
    }
}

Order.init(
    {
        orderId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        paymentMethod: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        modelName: "order",
        sequelize: db
    }
)

Order.belongsTo(User, { foreignKey: 'userId' });
Order.belongsTo(Product, { foreignKey: 'productId' });

if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
    console.log("Syncing to database...")
    await db.sync()
    console.log("Finished syncing database!")
}

export { User, Product, Order }
