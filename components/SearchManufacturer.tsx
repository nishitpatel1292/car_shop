"use client";
import { manufacturers } from '@/constants';
import React, { Fragment, useState } from 'react'
import { SearchManufacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react"
import Image from 'next/image';

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
    const [query, setQuery] = useState('');

    const filteredManufacturers =
        query === ""
            ? manufacturers
            : manufacturers.filter((item) =>
                item
                    .toLowerCase()
                    .replace(/\s+/g, "")
                    .includes(query.toLowerCase().replace(/\s+/g, ""))
            ); //to remove the spaces and match the query with manufacturer


    return (

        <div className='flex-1 max-sm:w-full flex justify-start items-center'>
            <Combobox>

                <div className='relative w-full'>
                    <Combobox.Button className='absolute top-[14px]'>
                        <Image
                            src='/mercedes-car-logo.svg'
                            alt='car logo'
                            width={20}
                            height={20}
                            className='ml-4'
                        />
                    </Combobox.Button>
                    <Combobox.Input
                        className='w-full h-[48px] pl-12 p-4 rounded-l-full border border-1  max-sm:rounded-full bg-white outline-none cursor-pointer text-sm'
                        displayValue={(item: string) => item}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder='Mercedes...'
                    />

                    <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery("")}
                    >
                        <Combobox.Options
                            className='absolute mt-1 max-h-60 w-full overflow-auto bg-white cursor-default select-none py-2 pl-10 pr-4'
                        >
                            {
                                filteredManufacturers.length === 0 && query !== "" ? (
                                    <Combobox.Option
                                        value={query}
                                        className='cursor-default select-none py-2 pl-10 pr-4 bg-white '
                                    >
                                        Create "{query}"
                                    </Combobox.Option>
                                ) : (
                                    filteredManufacturers.map((item) => (
                                        <Combobox.Option
                                            key={item}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-blue-100 text-black" : "text-gray-900"
                                                }`}
                                            value={item}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                        {item}
                                                    </span>

                                                    {/* Show an active blue background color if the option is selected */}
                                                    {selected ? (
                                                        <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-pri bg-primary-purple"}`}
                                                        ></span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Combobox.Option>
                                    ))
                                )
                            }

                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>

    )
}

export default SearchManufacturer