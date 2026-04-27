import * as React from 'react';

import {
    Combobox,
    ComboboxChip,
    ComboboxChips,
    ComboboxChipsInput,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxItem,
    ComboboxList,
    ComboboxValue,
    useComboboxAnchor,
} from '@/components/ui/combobox';

interface AllData {
    id: number;
    slug?: string;
    name: string;
}

export function MultiSelect({
    data,
    allData,
}: {
    data: string[];
    allData?: AllData[];
}) {
    const anchor = useComboboxAnchor();

    const [items, setItems] = React.useState<string[]>(data);
    const [value, setValue] = React.useState<string[]>([]);
    const [inputValue, setInputValue] = React.useState('');

    React.useEffect(() => {
        setValue(data);
    }, [data]);

    React.useEffect(() => {
        setItems(data);
    }, [data]);

    const addItem = (val: string) => {
        const trimmed = val.trim();
        if (!trimmed) return;

        // eslint-disable-next-line prefer-const
        let finalValue = trimmed;

        // add to items if not exists
        if (!items.includes(trimmed)) {
            setItems((prev) => [...prev, trimmed]);
        }

        // ✅ select it as well
        if (!value.includes(finalValue)) {
            setValue((prev) => [...prev, finalValue]);
        }

        setInputValue('');
    };

    return (
        <Combobox
            multiple
            autoHighlight
            items={items}
            value={value}
            onValueChange={setValue}
            inputValue={inputValue}
            onInputValueChange={setInputValue}
        >
            <ComboboxChips ref={anchor} className="w-full">
                <ComboboxValue>
                    {(values) => (
                        <>
                            {values.map((value: string) => (
                                <ComboboxChip key={value}>{value}</ComboboxChip>
                            ))}
                            <ComboboxChipsInput
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault();
                                        addItem(inputValue);
                                    }
                                }}
                            />
                        </>
                    )}
                </ComboboxValue>
            </ComboboxChips>

            <ComboboxContent anchor={anchor}>
                <ComboboxEmpty>
                    <button
                        type="button"
                        className="cursor-pointer text-sm text-primary hover:underline"
                        onClick={() => addItem(inputValue)}
                    >
                        Add "{inputValue}"
                    </button>
                </ComboboxEmpty>

                <ComboboxList>
                    {(item) => (
                        <ComboboxItem key={item} value={item}>
                            {item}
                        </ComboboxItem>
                    )}
                </ComboboxList>
            </ComboboxContent>
        </Combobox>
    );
}
