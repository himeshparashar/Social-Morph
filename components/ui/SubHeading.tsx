interface HeadingProp {
    label: string;
}

export default function SubHeading({ label }: HeadingProp) {
    return <div className="text-slate-500 text-md pt-1 px-4 pb-4">{label}</div>;
}