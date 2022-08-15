import JsonUrl from "json-url";
import fs from "fs";

const accents = [
    "rosewater",
    "flamingo",
    "pink",
    "mauve",
    "red",
    "maroon",
    "peach",
    "yellow",
    "green",
    "teal",
    "sky",
    "sapphire",
    "blue",
    "lavender",
];

const jsonCodec = JsonUrl("lzma");

const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        }
        : null;
};

const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
}

(async () => {
    const lib = fs.readFileSync("./colors.json", "utf8");
    const colourLib = JSON.parse(lib);

    for (const flavour of Object.keys(colourLib)) {
        console.log(`\n\nCatppuccin ${capitalize(flavour)}`)
        const lib = {};

        Object.keys(colourLib[flavour]).forEach((colour) => {
            const hex = colourLib[flavour][colour]["hex"];
            const { r, g, b } = hexToRgb(hex);
            lib[colour] = {
                r,
                g,
                b,
            };
        });

        for (const accent of accents) {
            lib.accent = lib[accent]

            const theme = {
                colors: {
                    toolbar: lib["base"],
                    toolbar_text: lib["text"],
                    frame: lib["crust"],
                    tab_background_text: lib["text"],
                    toolbar_field: lib["mantle"],
                    toolbar_field_text: lib["text"],
                    tab_line: lib["accent"],
                    popup: lib["base"],
                    popup_text: lib["text"],
                    button_background_active: lib["overlay0"],
                    frame_inactive: lib["crust"],
                    icons_attention: lib["accent"],
                    icons: lib["accent"],
                    ntp_background: lib["crust"],
                    ntp_text: lib["text"],
                    popup_border: lib["accent"],
                    popup_highlight_text: lib["text"],
                    popup_highlight: lib["overlay0"],
                    sidebar_border: lib["accent"],
                    sidebar_highlight_text: lib["text"],
                    sidebar_highlight: lib["accent"],
                    sidebar_text: lib["text"],
                    sidebar: lib["base"],
                    tab_background_separator: lib["accent"],
                    tab_loading: lib["accent"],
                    tab_selected: lib["base"],
                    tab_text: lib["text"],
                    toolbar_bottom_separator: lib["base"],
                    toolbar_field_border_focus: lib["accent"],
                    toolbar_field_border: lib["base"],
                    toolbar_field_focus: lib["base"],
                    toolbar_field_highlight_text: lib["base"],
                    toolbar_field_highlight: lib["accent"],
                    toolbar_field_separator: lib["accent"],
                    toolbar_vertical_separator: lib["accent"],
                },
                images: {
                    additional_backgrounds: ["./bg-000.svg"],
                    custom_backgrounds: [],
                },
                title: `Catppuccin ${flavour} ${accent}`,
            };

            const url = await jsonCodec.compress(theme);
            const link = `https://color.firefox.com/?theme=${url}`
            console.log(` - [${capitalize(accent)}](${link})`);
        }
    }
})();
