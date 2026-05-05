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

type MultiSelectProps = {
    data: string[];
    value: string[];
    onChange: (values: string[]) => void;
};

export function MultiSelect({
    data,
    value,
    onChange,
}: MultiSelectProps) {
    const anchor = useComboboxAnchor();

    const [items, setItems] = React.useState<string[]>(data);

    const [inputValue, setInputValue] = React.useState('');

    React.useEffect(() => {
        setItems(data);
    }, [data]);

    const addItem = (val: string) => {
        const trimmed = val.trim();
        const sluged = trimmed.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();

        if (!trimmed) return;

        if (!items.includes(sluged)) {
            setItems((prev) => [...prev, sluged]);
        }

        if (!value.includes(sluged)) {
            onChange([...value, sluged]);
        }

        setInputValue('');
    };

    return (
        <Combobox
            multiple
            autoHighlight
            items={items}
            value={value}
            onValueChange={onChange}
            inputValue={inputValue}
            onInputValueChange={setInputValue}
        >
            <ComboboxChips ref={anchor} className="w-full">
                <ComboboxValue>
                    {(values) => (
                        <>
                            {values.map((value: string) => (
                                <ComboboxChip key={value}>
                                    {value}
                                </ComboboxChip>
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
