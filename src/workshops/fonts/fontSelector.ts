import { StyleCompiler } from "./../../styleCompiler";
import * as ko from "knockout";
import template from "./fontSelector.html";
import { Component, Param, Event, OnMounted } from "@paperbits/common/ko/decorators";
import { StyleService } from "../../styleService";
import { FontContract } from "../../contracts/fontContract";


@Component({
    selector: "font-selector",
    template: template,
    injectable: "fontSelector"
})
export class FontSelector {
    @Param()
    public readonly selectedFont: KnockoutObservable<FontContract>;

    @Event()
    public readonly onSelect: (font: FontContract) => void;

    public fonts: KnockoutObservableArray<FontContract>;

    public compiledFontStyles: KnockoutObservable<string>;

    constructor(
        private readonly styleService: StyleService,
        private readonly styleCompiler: StyleCompiler
    ) {
        this.loadAvailableFonts = this.loadAvailableFonts.bind(this);
        this.selectFont = this.selectFont.bind(this);

        this.compiledFontStyles = ko.observable();
        this.fonts = ko.observableArray();
        this.selectedFont = ko.observable();
    }

    @OnMounted()
    public async loadAvailableFonts(): Promise<void> {
        const styles = await this.styleCompiler.getFontsStyles();
        this.compiledFontStyles(styles);

        const fonts = await this.styleService.getVariations<FontContract>("fonts");
        this.fonts(fonts);
    }

    public selectFont(font: FontContract): void {
        if (this.selectedFont) {
            this.selectedFont(font);
        }

        if (this.onSelect) {
            this.onSelect(font);
        }
    }

    public clearFonts(): void {
        if (this.selectedFont) {
            this.selectedFont(null);
        }

        if (this.onSelect) {
            this.onSelect(null);
        }
    }
}