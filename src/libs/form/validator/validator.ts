import { Field } from '../field';
import { Form } from '../form';
import { ValidatorResponseInterface } from './validator-response.interface';

// tslint:disable semicolon

export abstract class Validator {
    public static REQUIRED = (response: string) => {
        return (field: Field): ValidatorResponseInterface => {
            return {
                error: response,
                valid: (field.getValue() || '').toString().trim().length > 0,
            };
        };
    };

    public static ARRAY_MIN_LENGTH = (min: number) => (response: string) => {
        return (field: Field): ValidatorResponseInterface => {
            const value = field.getValue() || [];

            return {
                error: response,
                valid: value.length >= min,
            };
        };
    };

    public static ARRAY_MAX_LENGTH = (min: number) => (response: string) => {
        return (field: Field): ValidatorResponseInterface => {
            const value = field.getValue() || [];

            return {
                error: response,
                valid: value.length <= min,
            };
        };
    };

    public static MUST_TRUE = (response: string) => {
        return (field: Field): ValidatorResponseInterface => {
            return {
                error: response,
                valid: !!(field.getValue() || ''),
            };
        };
    };

    public static MUST_FALSE = (response: string) => {
        return (field: Field): ValidatorResponseInterface => {
            return {
                error: response,
                valid: !(field.getValue() || ''),
            };
        };
    };

    public static EQUALS_TO = (compare: any) => (response: string) => {
        return (field: Field): ValidatorResponseInterface => {
            return {
                error: response,
                valid: field.getValue() === compare,
            };
        };
    };

    public static NOT_EQUALS_TO = (compare: any) => (response: string) => {
        return (field: Field): ValidatorResponseInterface => {
            return {
                error: response,
                valid: field.getValue() !== compare,
            };
        };
    };

    public static EQUALS_TO_FIELD = (fieldName: string) => (response: string) => {
        return (field: Field): ValidatorResponseInterface => {
            return {
                error: response,
                // TODO -> ez így még nem megfelelő WIP
                valid: (field.getValue() || '') === ((field.parentForm || new Form({ [fieldName]: new Field() })).field(fieldName).getValue() || ''),
            };
        };
    };

    public static NOT_EQUALS_TO_FIELD = (fieldName: string) => (response: string) => {
        return (field: Field): ValidatorResponseInterface => {
            return {
                error: response,
                // TODO -> ez így még nem megfelelő WIP
                valid: (field.getValue() || '') !== ((field.parentForm || new Form({ [fieldName]: new Field() })).field(fieldName).getValue() || ''),
            };
        };
    };

    public static EMAIL = (response: string) => {
        return (field: Field): ValidatorResponseInterface => {
            const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

            return {
                error: response,
                valid: regex.test((field.getValue() || '').toString()),
            };
        };
    };
}
