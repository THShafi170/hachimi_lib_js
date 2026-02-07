/* tslint:disable */
/* eslint-disable */

export class IsolateTagsSection {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    chunk: string;
    is_tag: boolean;
}

export function isolateTags(s: string): IsolateTagsSection[];

export function wrapText(string: string, base_line_width: number, line_width_multiplier: number): string[];

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_get_isolatetagssection_chunk: (a: number) => [number, number];
    readonly __wbg_get_isolatetagssection_is_tag: (a: number) => number;
    readonly __wbg_isolatetagssection_free: (a: number, b: number) => void;
    readonly __wbg_set_isolatetagssection_chunk: (a: number, b: number, c: number) => void;
    readonly __wbg_set_isolatetagssection_is_tag: (a: number, b: number) => void;
    readonly isolateTags: (a: number, b: number) => [number, number];
    readonly wrapText: (a: number, b: number, c: number, d: number) => [number, number];
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __externref_drop_slice: (a: number, b: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
