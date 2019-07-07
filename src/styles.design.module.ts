/**
 * @license
 * Copyright Paperbits. All Rights Reserved.
 *
 * Use of this source code is governed by a Commercial license that can be found in the LICENSE file and at https://paperbits.io/license/mit.
 */

import { IInjectorModule, IInjector } from "@paperbits/common/injection";
import { StyleModule } from "./styles.module";
import { StyleEditor } from "./workshops/styleEditor";
import { StyleGuide } from "./styleGuide/styleGuide";
import { BoxEditor } from "./workshops/boxes/boxEditor";
import { BorderEditor } from "./workshops/border";
import { ColorSelector, ColorEditor } from "./workshops/colors";
import { GradientSelector,  GradientEditor } from "./workshops/gradients";
import { FontSelector } from "./workshops/fonts";
import { GoogleFonts } from "./workshops/googleFonts";
import { AnimationSelector } from "./workshops/animations";
import { AnimationEditor } from "./workshops/animations/animationEditor";
import { ShadowSelector, ShadowEditorGroup, ShadowEditor } from "./workshops/shadows";
import { Typography } from "./workshops/typography";
import { Background } from "./workshops/background";
import { StylesheetBindingHandler } from "./ko/bindingHandlers/bindingHandlers.styleSheet";
import { BackgroundStylePlugin } from "./plugins/background/backgroundStylePlugin";
import { StylePlugin } from "./plugins";
import "./ko/bindingHandlers/bindingHandlers.stylable";
import "./ko/bindingHandlers/bindingHandlers.colorPicker";
import "./ko/bindingHandlers/bindingHandlers.jss";
import "./ko/bindingHandlers/bindingHandlers.shadowPreview";
import "./ko/bindingHandlers/bindingHandlers.gradientPreview";
import { StylesWorkshopSection } from "./workshops/stylesSection";
import { StylePreviewBindingHandler } from "./ko/bindingHandlers/bindingHandlers.stylePreview";
import { Transform } from "./workshops/transform/transform";

export class StylesDesignModule implements IInjectorModule {
    public register(injector: IInjector): void {
        injector.bindModule(new StyleModule());
        injector.bind("fontSelector", FontSelector);
        injector.bind("googleFonts", GoogleFonts);
        injector.bind("typography", Typography);
        injector.bind("background", Background);
        injector.bind("transform", Transform);
        injector.bind("boxEditor", BoxEditor);
        injector.bind("borderEditor", BorderEditor);
        injector.bind("colorSelector", ColorSelector);
        injector.bind("colorEditor", ColorEditor);
        injector.bind("gradientSelector", GradientSelector);
        injector.bind("gradientEditor", GradientEditor);
        injector.bind("shadowSelector", ShadowSelector);
        injector.bind("shadowEditor", ShadowEditor);
        injector.bind("shadowEditorGroup", ShadowEditorGroup);
        injector.bind("animationSelector", AnimationSelector);
        injector.bind("animationEditor", AnimationEditor);
        injector.bind("styleEditor", StyleEditor);
        injector.bind("styleGuide", StyleGuide);
        injector.bind("stylePlugin", StylePlugin);
        injector.bind("backgroundStylePlugin", BackgroundStylePlugin);
        injector.bindToCollection("autostart", StylesheetBindingHandler);
        injector.bindToCollection("autostart", StylePreviewBindingHandler);
        injector.bindToCollection("workshopSections", StylesWorkshopSection);
    }
}