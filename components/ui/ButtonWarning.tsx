import Link from "next/link";

interface ButtonWarningProps {
    label: string;
    buttonText: string;
    to: string
}
export default function ButtonWarning({ label, buttonText, to }: ButtonWarningProps) {
    return (
        <div className="py-2 text-sm flex justify-center mt-2">
            <div>{label}</div>
            <Link className="pointer underline pl-1 cursor-pointer" href={to}>
                {buttonText}
            </Link>
        </div>
    );
}