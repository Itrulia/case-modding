import styledTheme from "styled-theming";
import { themeFunction } from "./helpers";

export interface MoodValues<T> {
    playful: T;
}

export type ThemeMood = keyof MoodValues<any>;

export interface HasMood {
    mood: ThemeMood;
}

export const createMood = (
    key: keyof HasMood,
    obj: MoodValues<string | themeFunction>
) => styledTheme(key, obj);
