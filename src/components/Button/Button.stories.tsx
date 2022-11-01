import { Meta, StoryObj } from '@storybook/react'
import { PaperPlaneTilt, TrashSimple } from 'phosphor-react';
import { Button, ButtonIconProps, ButtonProps } from ".";

export default {
    title: "Component/Button",
    component: Button.Root,
    args: {
        children: [
            <Button.Icon><PaperPlaneTilt /></Button.Icon>,
            "Login"
        ],
        size: 'lg',
        color: 'bg-black'
    },
    argTypes: {
        color: {
            options: ['bg-black', 'bg-yellow', 'bg-red'],
            control: {
                type: 'inline-radio'
            }
        },
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<ButtonProps>
export const Default: StoryObj = {}
export const ButtonIcon: StoryObj<ButtonProps> = {
    args: {
        children: [
            <Button.Icon><TrashSimple /></Button.Icon>
        ]
    }
}