import { clone } from 'lodash';
import { Subject } from 'rxjs';
import { Form } from './form';
import { OptionInterface } from './interfaces/option.interface';
import { randomId } from './random-id';
import { ValidatorResponseInterface } from './validator/validator-response.interface';

export class Field {
    public id = randomId();
    public value$ = new Subject();
    public validate$ = new Subject();
    public dirty$ = new Subject();
    public options$ = new Subject();
    public placeholder: string;
    public label: string;
    public name: string;
    public hint: string;
    public value: string;
    public validators: any[];
    public options: OptionInterface[];
    public errors: ValidatorResponseInterface[] = [];
    public dirty: boolean = false;
    public multi: boolean = false;
    public parentForm: Form;

    constructor(obj: Field | any = {}) {
        this.placeholder = obj.placeholder || '';
        this.name = obj.name || '';
        this.label = obj.label || '';
        this.hint = obj.hint || '';
        this.validators = obj.validators || [];
        this.options = obj.options || [];
        this.multi = obj.multi || false;

        if (obj.value !== undefined) {
            this.setValue(obj.value);
        }

        if (obj.options !== undefined) {
            this.setOptions(obj.options);
        }
    }

    public setParentForm(parent: Form) {
        this.parentForm = parent;
    }

    public async validate() {
        const response = await Promise.all(this.validators.map(async (validator: any) => {
            return validator(this);
        }));

        this.errors = response.filter((r: ValidatorResponseInterface) => !r.valid);

        this.validate$.next();
        return Promise.resolve(response);
    }

    public async setOptions(options: OptionInterface[]) {
        this.options = options;
        this.options$.next();
    }

    public async setValue(value: any) {
        this.value = value;
        await this.validate();
        this.value$.next(value);
    }

    public async setDirty(value: boolean) {
        this.dirty = value;
        this.dirty$.next(value);
    }

    public getValue(): any {
        return clone(this.value);
    }
}
