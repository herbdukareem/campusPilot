import { tv } from "tailwind-variants";

export const NavStyles = tv({
    slots: {
        base: 'bg-red-400 text-green-600 flex flex-justify-between',
        brand: '',
        contact: 'text-xs text-primary',
        avatar: '',
        content: 'bg-red-400 text-green-600 flex flex-justify-between',
        contentItem: '',
    },
});