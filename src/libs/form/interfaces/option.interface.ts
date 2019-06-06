import * as React from 'react';

export interface OptionInterface {
    title: React.ReactNode;
    value: any;

    [key: string]: any;
}
