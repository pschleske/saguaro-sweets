import { User, Product, Order } from './model.js';
import connectToDB from './db.js';

const db = await connectToDB('postgresql:///saguaro')

const productData = [
    {
        productName: 'Atom Clusters',
        imgUrl: 'https://www.fdssaz.com/uploads/1/2/4/7/124706229/s920435953827472879_p38_i1_w3024.jpeg?width=640',
        description: 'These are gummy nerds that have been freeze-dried to perfection! So packed with flavor, light and crunchy! And soooo fun to eat, you’ll love them!',
        quantity: 20,
        isSoldOut: false,
        price: 10,
    },
    {
        productName: 'Choco Crunch',
        imgUrl: 'https://www.fdssaz.com/uploads/1/2/4/7/124706229/s920435953827472879_p40_i1_w1170.jpeg?width=640',
        description: "If you like chocolate, caramel and peanuts, you will LOVE Choco Crunch! It is crunchy and oh so goooood! They melt in your mouth! You have to try them! *INGREDIENTS: MILK CHOCOLATE(SUGAR, COCOA BUTTER, CHOCOLATE, SKIM MILK, LACTOSE, MILKFAT, SOY LECITHIN), PEANUTS, CORN SYRUP, SUGAR, PALM OIL, SKIM MILK, LACTOSE, SALT, EGG WHITES, ARTIFICIAL FLAVOR. CONTAINS PEANUTS, MILK, EGG AND SOY.MAY CONTAIN TREE NUTS.",
        quantity: 20,
        isSoldOut: false,
        price: 10,
    },
    {
        productName: 'Rainbow Bites',
        imgUrl: 'https://www.fdssaz.com/uploads/1/2/4/7/124706229/s920435953827472879_p2_i3_w3024.jpeg?width=640',
        description: "These fruity candies are freeze dried and expand into a crunchy candy full of flavor!! The candies puff out and become crunchy during the freeze-drying process!! *INGREDIENTS: Sugar, Corn Syrup, Hydrogenated Palm Kernel Oil; Less Than 2% Of: Citric Acid, Tapioca Dextrin, Modified Corn Starch, Natural And Artificial Flavors, Colors(Red 40 Lake, Yellow 5 Lake, Blue 2 Lake, Yellow 6 Lake, Titanium Dioxide, Blue 1 Lake, Yellow 6, Red 40, Yellow 5, Blue 1), Sodium Citrate, Carnauba Wax.",
        quantity: 5,
        isSoldOut: false,
        price: 10,
    },
    {
        productName: 'Rainbow Puffs',
        imgUrl: 'https://www.fdssaz.com/uploads/1/2/4/7/124706229/s920435953827472879_p1_i3_w3024.jpeg?width=640',
        description: "These once hard candies puff up in various sizes during the freeze-drying process and become light and crunchy, they dissolve in your mouth! The flavor is enhanced!",
        quantity: 0,
        isSoldOut: true,
        price: 10,
    },
    {
        productName: 'Sour Worms',
        imgUrl: 'https://www.fdssaz.com/uploads/1/2/4/7/124706229/s920435953827472879_p25_i3_w3024.jpeg?width=640',
        description: "Sour Gummy Worms are a fun gummy treat, but once freeze dried will be a crunchy delight! You are going to want to try these freeze Dried Sour Gummy Worms candies. They are crunchy, colorful, and flavorful, bites.",
        quantity: 0,
        isSoldOut: true,
        price: 10,
    },
    {
        productName: 'Saturns',
        imgUrl: 'https://www.fdssaz.com/uploads/1/2/4/7/124706229/s920435953827472879_p39_i1_w4032.jpeg?width=640',
        description: "These are our creation! They are a peach ring with a jolly rancher in the middle! You et two for one treat! Peachy keen with a sweet jolly rancher to complete the flavor!",
        quantity: 0,
        isSoldOut: true,
        price: 10,
    }
]

const userData = [
    {
        firstName: 'Luca',
        lastName: 'Pukas',
        email: 'luca@test.com',
    },
    {
        firstName: 'Carmela',
        lastName: 'Meow',
        email: 'carmela@test.com',
    }
]

await db.sync({ force: true }).then(async () => {
    await Product.bulkCreate(productData)
    await User.bulkCreate(userData)
    console.log('db reset and seeded')
})

await db.close()