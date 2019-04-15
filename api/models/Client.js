const mongoose = require('mongoose');
mongoose.set('debug', true);
const beautifyUnique = require('mongoose-beautiful-unique-validation');

const ClientSchema = new mongoose.Schema({
    firstName:  {
        type:String,
        required: true,
    },
    lastName: {
        type:String,
        required: true,
    },
    email: {
        type:String,
        required: true
    },
    cpfCnpj: {
        type:String,
        required: true,
        unique: 'Two clients cannot share the same cpf/cnpj ({VALUE})'
    },
    address: String,
    phone: {
        type:String,
        required: true,
    },
    blackList: {
        type: Boolean,
        default: false,
    },
    created_at : { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
   
},{strict: false});

ClientSchema.plugin(beautifyUnique);
module.exports = mongoose.model('Client', ClientSchema);