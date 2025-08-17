import React, { useState, useCallback, type Key } from "react";
import { useController, type Control } from "react-hook-form";
import { IoImagesOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";

type IProps = {
  name: string;
  control: Control<any>;
  isMultiple: boolean;
}
export const MultipleImagesInput = ({ name, isMultiple, control }: IProps) => {

  const { field } = useController({
    name,
    control,
  });

  const value = isMultiple ? Array.isArray(field.value) ? field.value : [] : field.value;
  const setImages = (value: File | string | (File | string)[] | null) => {
    field.onChange(value);
  }

  const images = isMultiple
    ? value as (File | string)[]
    : value
      ? [value as File | string]
      : [];

  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = useCallback((e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files).filter(file =>
      file.type.startsWith("image/")
    );

    if (isMultiple) {
      setImages([...(images as (File | string)[]), ...droppedFiles]);
    } else {
      setImages(droppedFiles[0] || null);
    }
  }, []);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = () => setIsDragging(true);
  const handleDragLeave = () => setIsDragging(false);

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : null;
    if (files) {
      if (isMultiple) {
        setImages([...(Array.isArray(images) ? images : []), ...files]);
      } else {
        setImages(files[0] || null);
      }
    }
  };

  const removeItem = (indexToRemove: number) => {
    if (isMultiple) {
      setImages(images.filter((_, index) => index !== indexToRemove) as (File | string)[]);
    } else {
      setImages(null);
    }
  }

  return (
    <label
      htmlFor="fileInput"
      className={`rounded-xl my-2 border-3 cursor-pointer overflow-y-auto border-dashed ${isDragging ? "border-purple-500 bg-purple-50" : "border-gray-400 bg-gray-100"
        } grid grid-cols-3 md:grid-cols-5 gap-4 p-3 w-full min-h-40`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      {images.length > 0 &&
        (Array.isArray(images) ? images : [images]).map((image: File | string, index: Key | null | undefined) => {
          if (!image) return null
          return (
            <div key={index} className="relative w-20 h-30 rounded">
              <img
                src={image instanceof File ? URL.createObjectURL(image) : image}
                className="rounded-lg object-cover w-full h-full"
                alt={`preview-${index}`}
              />
              <button
                type="button"
                className="absolute cursor-pointer rounded-lg -top-1 -right-1 p-1 bg-red-500 text-white text-xs"
                onClick={() => removeItem(index as number)}
              >
                <MdClose />
              </button>
            </div>
          )
        })}

      {images?.length === 0 && (
          <div className="w-full col-span-full text-2xl h-full flex flex-col gap-3 items-center justify-center text-gray-400">
            <div>Drop images here or click to upload</div>
            <IoImagesOutline />
            <div className="text-xs text-red-600 text-center">Maximum file size per image: 200kb <br />Allowed formats: .webp, .jpg, .jpeg, .png <br /></div>
          </div>

      )}
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        multiple={isMultiple}
        onChange={handleChanges}
        className="hidden"
      />

    </label>
  );
};
