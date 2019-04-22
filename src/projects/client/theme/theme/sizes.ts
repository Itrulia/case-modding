import { Props } from "../util/helpers";

export const borderRadius = `3px`;

export const smallVerticalPadding = ({ theme }: Props) =>
    `${theme.gridSpan * 1}rem`;

export const smallHorizontalPadding = ({ theme }: Props) =>
    `${theme.gridSpan * 1.5}rem`;

export const smallPadding = ({ theme }: Props) =>
    `${smallVerticalPadding({ theme })} ${smallHorizontalPadding({ theme })}`;

export const verticalPadding = ({ theme }: Props) =>
    `${theme.gridSpan * 1.5}rem`;

export const horizontalPadding = ({ theme }: Props) =>
    `${theme.gridSpan * 2}rem`;

export const padding = ({ theme }: Props) =>
    `${verticalPadding({ theme })} ${horizontalPadding({ theme })}`;

export const mediumVerticalPadding = ({ theme }: Props) =>
    `${theme.gridSpan * 2}rem`;

export const mediumHorizontalPadding = ({ theme }: Props) =>
    `${theme.gridSpan * 3}rem`;

export const mediumPadding = ({ theme }: Props) =>
    `${mediumVerticalPadding({ theme })} ${mediumHorizontalPadding({ theme })}`;

export const verticalButtonPadding = ({ theme }: Props) =>
    `${theme.gridSpan * 1.5}rem`;

export const horizontalButtonPadding = ({ theme }: Props) =>
    `${theme.gridSpan * 3}rem`;

export const buttonPadding = ({ theme }: Props) =>
    `${verticalButtonPadding({ theme })} ${horizontalButtonPadding({ theme })}`;

export const pagePadding = ({ theme }: Props) => `${theme.gridSpan * 3}rem`;

// Margin

export const verticalMargin = ({ theme }: Props) => `${theme.gridSpan * 4}rem`;

export const horizontalMargin = ({ theme }: Props) =>
    `${theme.gridSpan * 2}rem`;

export const Margin = ({ theme }: Props) =>
    `${verticalMargin({ theme })} ${horizontalMargin({ theme })}`;
