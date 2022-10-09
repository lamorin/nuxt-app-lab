import { describe, expect, it, test } from 'vitest'
import { mount } from "@vue/test-utils";
import Text from "../components/Text.vue"

describe("notification.vue", () => {
    test("renders the correct style for error", () => {
        const text = "This is an error text message";
        const propsClass = "error";
        const wrapper = mount(Text, {
            props: { text, propsClass },
        });
        expect(wrapper.classes()).toContain('error')

    });

    test("testing text", () => {
        const text = "This is an error text message";
        const propsClass = "error";
        const wrapper = mount(Text, {
            props: { text, propsClass },
        });
        //expect(wrapper.find('div').html()).toContain("This is an error text message")

        const div = wrapper.find('div')
        const html = div.html()
        const index = html.indexOf('This');

        expect(index).greaterThan(0)
    });
});