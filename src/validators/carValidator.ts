import * as Joi from "joi";

export const carValidator =Joi.object({
    brand: Joi.string().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$')).messages({'string.pattern.base':'Your brand value did not match pattern'}),
    year: Joi.number().max(2024).min(1990).messages({
        'number.min': 'min year is 1990',
        'number.max': 'max year is 2025',
    }),
    price: Joi.number().max(1000000).min(0).messages({
        'number.min': 'min price is 0',
        'number.max': 'max price is 1 000 000',
    }),
})