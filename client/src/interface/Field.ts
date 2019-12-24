import { Field } from 'graphql/components';

export type FieldPick= Pick<Field, '_id' | 'type' | 'order' | 'value'>
export type ReadOnlyFieldPick= ReadonlyArray<Pick<Field, '_id' | 'type' | 'order' | 'value'>>