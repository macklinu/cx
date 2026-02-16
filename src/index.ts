import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A combination of "clsx" and "tailwind-merge" libraries.
 *
 * @see https://github.com/lukeed/clsx
 * @see https://github.com/dcastil/tailwind-merge
 */
export const cx = (...inputs: ClassValue[]) => twMerge(clsx(...inputs));
