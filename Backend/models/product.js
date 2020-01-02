import mongoose from 'mongoose';
import { stringify } from 'querystring';
const Shema = mongoose.Schema;

const productShema = new Shema({
    name: {type: String, required: [true, 'Nombre Obligatorio']},
    price: Number,
    image: String,
    description: String,
    createData: {type: Date, default: Date.now}
});

/* const Product = mongoose.model('Product', productShema);
export default productShema; */

module.exports = mongoose.model('Product', productShema);