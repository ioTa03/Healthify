"use client"
import React from 'react'
import { Control } from "react-hook-form";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

interface CustomProps {
    control: Control<any>;
    // name: string;
    // label?: string;
    // placeholder?: string;
    // iconSrc?: string;
    // iconAlt?: string;
    // disabled?: boolean;
    // dateFormat?: string;
    // showTimeSelect?: boolean;
    // children?: React.ReactNode;
    // renderSkeleton?: (field: any) => React.ReactNode;
    // fieldType: FormFieldType;
  }
  
const CustomFormField = ({control}:CustomProps) => {
  return (
    <FormField
    control={control}
    name="username"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Username</FormLabel>
        <FormControl>
          <Input placeholder="shadcn" {...field} />
        </FormControl>
        <FormDescription>
          This is your public display name.
        </FormDescription>
        <FormMessage />
      </FormItem>
    )}
  />
  )
}

export default CustomFormField
