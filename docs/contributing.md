# Contributing

Thank you for taking a look at how to contribute and submit your theme.

## Guidelines

- Clean and readable code is appreciated but not required to be added to the repo.
- Latte/Frappe/Macchiato/Mocha Screenshot (Catwalk @ Toolbox Repo) and versions **required**

## Instructions
1. Include instructions on how to use firefox css and the `chrome` folder. What you should include has been listed below.

> ### General instructions- enabling userChrome
> 1. Enable userChrome customisation in `about:config`
>     Navigate to `about:config` in the address bar and accept the risks.
> 
> 2. Search for `toolkit.legacyUserProfileCustomizations.stylesheets` and toggle it to `true` (by double clicking on it).
> 3. Locate and open your profile folder
> Either of the following two methods work:
> 
>     Using the Firefox troubleshooting page
>         Click on the ☰ icon ➝ `Help` ➝ `More Troubleshooting Information` or navigate to `about:support` in your address bar
>         Under Application Basics, click on the `about:profiles`. Open the folder.
> 
> 4. Create the folder and its files
> 
>     Inside your profile folder, create a new folder named `chrome` (all lower case)
> 
>     Inside the chrome folder, create two new files, `userChrome.css` and `userContent.css` (case sensitive)
>         Note: In Windows, you must disable the "Hide extensions for known file types" setting in Explorer. Once that's done, simply create a new text file (Right click ➝ New ➝ Text Document), then make sure to replace the .txt with .css

2. Create a repo with the required files, such as `userChrome.css` and links to whatever extensions are needed.
3. Add suitable instructions for extensions and the like.
4. Create the markdown for `FirefoxCSS.md`. Scroll down.

## Markdown
The theme above will end with `---` and you can start by adding the image. **A square image is highly recommended, the width MUST be fixed at 350px**

```md
<img align="left" width="350px" src="">
```

After that, add a title with the format **Name by Author**, with links included. Like so:

```md
### [Name](https://github.com/...) by [Tnixc](https://github.com/...)
```
Note that both the links should be to the repo, not the author themselves.

Follow that, add a short description of the theme at most 4-5 lines long.
```md
A ... of ... in Firefox. Aims for ... Customizable ...
Inspired by ... by ...
```

**Most importanty, add this line break to the end of your section** Note that the text should not wrap under the image when zoomed out.
```md
<br clear="left">
```
Lastly, add a divider to signify the end of the section
```md
---
```

### After the changes have been made correctly, open an issue under `dev` with the markdown attached.


## Example of markdown

<img align="left" width="350px" src="https://placekitten.com/408/287">

### [PlaceKitten](https://placekitten.com/) by [Mark James](https://mark.james.name/)

A clean implementation of cuteness in Firefox. Inspired by [GNU](https://gnu.org) by [Richard Stallman](https://stallman.org/).


Start page can be found at [this repo](https://github.com/catppuccin/bento).
<br clear="left">

---

```md
<img align="left" width="350px" src="https://placekitten.com/408/287">

### [PlaceKitten](https://placekitten.com/) by [Mark James](https://mark.james.name/)

A clean implementation of cuteness in Firefox. Inspired by [GNU](https://gnu.org) by [Richard Stallman](https://stallman.org/).


Start page can be found at [this repo](https://github.com/catppuccin/bento).
<br clear="left">

---
```

## Example of a repository

- https://github.com/andreasgrafen/cascade

## 💝 Thanks to

- [Isabelinc](https://github.com/Isabelincorp)
- [Tnixc](https://github.com/Tnixc)
&nbsp;

<p align="center"><img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true" /></p>
<p align="center">Copyright &copy; 2021-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
<p align="center"><a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a></p>
