import type { ReactElement } from "react";
import { PiSpinner } from "react-icons/pi";

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    loading: boolean;
    icon?: ReactElement;
}
export const Button = ({ label, loading, icon, ...rest }: IButtonProps) => {
    return (
        <button
            {...rest}
            className={`p-3 rounded-lg bg-[#194062] text-white flex hover:cursor-pointer flex-row items-center gap-2`}
            disabled={loading}
        >
            {
                !loading ? (
                    <>
                        {icon}
                        <div className="text-sm">
                            {label}
                        </div>
                    </>
                ) : (
                    <div className="duration-300 animate-spin">
                        <PiSpinner size={25} />
                    </div>
                )
            }
        </button >
    )
}
