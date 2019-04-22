import { createMode } from "../util/mode";

export const pageBackground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.primaryHue}, 28%, 17%)`
});

export const panelForeground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.primaryHue}, 5%, 93%)`
});

export const panelBackground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.primaryHue}, 28%, 22%)`
});

/**
 * Primary
 */
export const primaryForeground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.primaryHue}, 5%, 93%)`
});

export const primaryIconForeground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.primaryHue}, 2%, 69%)`
});

export const primaryBackground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.primaryHue}, 42%, 50%)`
});

export const primaryAccentBackground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.primaryHue}, 45%, 70%)`
});

export const primaryDimmedBackground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.primaryHue}, 32%, 12%)`
});

export const primarySaturatedBackground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.primaryHue}, 32%, 12%)`
});

export const primarySaturatedForeground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.primaryHue}, 15%, 63%)`
});

export const primarySaturatedIconForeground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.primaryHue}, 5%, 93%)`
});

/**
 * Secondary
 */
export const secondaryForeground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.secondaryHue}, 5%, 93%)`
});

export const secondaryIconForeground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.secondaryHue}, 5%, 93%)`
});

export const secondaryBackground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.secondaryHue}, 90%, 45%)`
});

export const secondaryAccentBackground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.secondaryHue}, 90%, 60%)`
});

/**
 * States
 */
export const dangerForeground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.dangerHue}, 5%, 93%)`
});

export const dangerBackground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.dangerHue}, 78%, 56%)`
});

export const warningForeground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.warningHue}, 5%, 93%)`
});

export const warningBackground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.warningHue}, 95%, 40%)`
});

export const successForeground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.successHue}, 5%, 93%)`
});

export const successBackground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.successHue}, 66%, 38%)`
});

export const disabledForeground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.primaryHue}, 5%, 93%)`
});

export const disabledBackground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.primaryHue}, 32%, 22%)`
});
