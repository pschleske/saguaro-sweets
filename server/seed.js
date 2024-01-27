import { User, Product, Order } from './model.js';
import connectToDB from './db.js';

const db = await connectToDB('postgresql:///saguaro')

