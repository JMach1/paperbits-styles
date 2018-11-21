import * as ko from "knockout";
import { StyleCompiler } from "../../styleCompiler";
import { IEventManager } from "@paperbits/common/events";


// @BindingHandlers("stylesheet")
export class StylesheetBindingHandler {
    constructor(
        private readonly styleCompiler: StyleCompiler,
        private readonly eventManager: IEventManager
    ) {
        ko.bindingHandlers["styleSheet"] = {
            update: (element: HTMLStyleElement, valueAccessor) => {
                const applyStyles = async () => {
                    const newStyles = await this.styleCompiler.compile();
                    const styleElement = <HTMLStyleElement>element;
                    styleElement.innerHTML = newStyles;
                };

                applyStyles();

                this.eventManager.addEventListener("onStyleChange", applyStyles);
            }
        };
    }
}

