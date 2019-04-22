import { createMood } from "../util/mood";

export const h1FontSize = createMood("mood", {
    playful: ({ theme }) => `${theme.gridSpan * 8}em`
});

export const h1LineHeight = createMood("mood", {
    playful: ({ theme }) => `1.1`
});

export const h2FontSize = createMood("mood", {
    playful: ({ theme }) => `${theme.gridSpan * 5}em`
});

export const h2LineHeight = createMood("mood", {
    playful: ({ theme }) => `1.1`
});

export const h3FontSize = createMood("mood", {
    playful: ({ theme }) => `${theme.gridSpan * 4}em`
});

export const h3LineHeight = createMood("mood", {
    playful: ({ theme }) => `1.1`
});

export const h4FontSize = createMood("mood", {
    playful: ({ theme }) => `${theme.gridSpan * 4}em`
});

export const h4LineHeight = createMood("mood", {
    playful: ({ theme }) => `1.1`
});

export const h5FontSize = createMood("mood", {
    playful: ({ theme }) => `${theme.gridSpan * 3.5}em`
});

export const h5LineHeight = createMood("mood", {
    playful: ({ theme }) => `1.1`
});

export const h6FontSize = createMood("mood", {
    playful: ({ theme }) => `${theme.gridSpan * 3}em`
});

export const h6LineHeight = createMood("mood", {
    playful: ({ theme }) => `1.4`
});

export const bodyFontSize = createMood("mood", {
    playful: ({ theme }) => `1em`
});

export const bodyLineHeight = createMood("mood", {
    playful: ({ theme }) => `1.4`
});
