import React from "react";

interface InputBoxProps {
    label: string;
    placeholder: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>
    type?: string
}

export default function InputBox({ label, placeholder, onChange, type = "text" }: InputBoxProps) {
    return (
        <div>
            <div className="text-sm font-medium text-left py-2">{label}</div>
            <input
                onChange={onChange}
                placeholder={placeholder}
                className="w-full px-2 py-1 border rounded border-slate-200"
                type={type}
            />
        </div>
    );
}