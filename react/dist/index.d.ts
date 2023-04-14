import { Mode as Mode$1, JSONEditorPropsOptional } from 'gm-vanilla-jsoneditor';
export { JSONValue } from 'gm-vanilla-jsoneditor';
import { FC } from 'react';
import { Overwrite } from 'utility-types';

type Mode = keyof typeof Mode$1;

type Props = Overwrite<JSONEditorPropsOptional, {
    mode?: Mode;
}>;
declare const JsonEditor: FC<Props>;

export { JsonEditor, Mode };
