import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from ".";


export default {
    title: "Component/Text",
    component: Text,
    args: {
        children: "Lorem ipsum",
        size: 'md'
    },
    artTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<TextProps>

export const Default: StoryObj = {}
export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Novo Titulo</h1>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    },
}