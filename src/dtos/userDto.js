import joi from 'joi';

// Define the schema for creating a user
const userSchema = joi.object({
    email: joi.string().email().required(),
    name: joi.string().required(),
    age: joi.number().required(),
    city: joi.string().required(),
    zipCode: joi.number().required(),
    isDeleted: joi.boolean().default(false),
});

// Define the schema for updating a user
const putUserSchema = joi.object({
    email: joi.string().email().required(),
    name: joi.string().required(),
    age: joi.number().required(),
    city: joi.string().required(),
    zipCode: joi.number().required(),
    isDeleted: joi.boolean().default(false),
});


// define the schema for patching a user
const patchUserSchema = joi.object({
    email: joi.string().email(),
    name: joi.string(),
    age: joi.number(),
    city: joi.string(),
    zipCode: joi.number(),
    isDeleted: joi.boolean(),
}).min(1);


export { userSchema, putUserSchema, patchUserSchema};