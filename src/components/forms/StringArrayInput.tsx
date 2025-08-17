import { useState } from "react";
import { useController, type Control } from "react-hook-form";

type IProps = {
  name: string;
  control: Control<any>;
};

export const StringArrayInput = ({ name, control }: IProps) => {
  const [inputValue, setInputValue] = useState('');
  const { field } = useController({
    name,
    control
  });

  const value = field.value as string[] || [];

  const list = value;
  const setList = (value: string[]) => field.onChange(value);

  const addItem = () => {
    setList([...list, inputValue]);
    setInputValue('');
  };

  const removeItem = (indexToRemove: number) => {
    setList(list.filter((_, index: number) => index !== indexToRemove));
  };

  return (
    <div className="flex flex-col gap-y-1 w-full">
      {list?.length > 0 ? (
        <div className="flex flex-col p-3 rounded-lg bg-gray-50 gap-y-1 min-h-16">
          {list.map((item: string, index: number) => (
            <div
              key={index}
              className="flex flex-row gap-x-4 px-3 py-1 rounded-full w-fit bg-pink-100"
            >
              <div>{item}</div>
              <button
                type="button"
                className="text-red-600 text-sm w-fit"
                onClick={() => removeItem(index)}
              >
                x
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-y-2 p-4 rounded-lg bg-gray-50 items-center justify-center min-h-16">
          <div className="text-gray-400">No {name} added</div>
        </div>
      )}

      <div className="flex flex-row gap-x-2 p-2 w-full">
        <input
          type="text"
          className="p-2 rounded-lg border border-gray-400 w-[90%]"
          placeholder={`Type ${name} here`}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addItem()}
        />

        <button
          type="button"
          className="text-white text-xs p-2 rounded-lg w-[10%] bg-pink-600"
          onClick={addItem}
        >
          + Add
        </button>
      </div>
    </div>
  );
};
