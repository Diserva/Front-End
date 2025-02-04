import { WritableAtom } from 'jotai';

export type AnyWritableAtom = WritableAtom<unknown, never[], unknown>;
export type HydrationList = [AnyWritableAtom, unknown][];
export type AssignableHydrationList = [AnyWritableAtom, never][];
