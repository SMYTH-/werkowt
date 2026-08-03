import React from 'react';
import { clsx } from 'clsx';

interface ContentSectionProps {
    children: React.ReactNode;
    container?: boolean;
    backgroundColor?: string;
    border?: {
        top?: boolean;
        bottom?: boolean;
    };
    padding?: {
        top?: {
            mobile?: string;
            desktop?: string;
        };
        bottom?: {
            mobile?: string;
            desktop?: string;
        };
    };
}

export function ContentSection({ children, container, backgroundColor, border, padding }: ContentSectionProps) {
    return (
        <div className={clsx(backgroundColor && `bg-${backgroundColor}`, border?.top && 'border-t border-line-200', border?.bottom && 'border-b border-line-200')}>
            <div className={clsx(container && 'container', padding?.top && `pt-${padding.top.mobile} md:pt-${padding.top.desktop}`, padding?.bottom && `pb-${padding.bottom.mobile} md:pb-${padding.bottom.desktop}`)}>
                {children}
            </div>
        </div>
    );
}