/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Cerveza } from "./components/app-form/app-form";
import { MatchResults } from "@stencil/router";
export namespace Components {
    interface AppBeercards {
        "changeFormValue": Function;
        "listaBeer": Cerveza[];
    }
    interface AppBeerinfo {
        "open": boolean;
        "transparent": boolean;
    }
    interface AppBeerlist {
        "beerlist": Cerveza[];
    }
    interface AppContactos {
    }
    interface AppFooter {
    }
    interface AppForm {
        "changeFormValue": (controlName: any, value: any) => Promise<void>;
    }
    interface AppHeader {
    }
    interface AppHome {
    }
    interface AppProfile {
        "match": MatchResults;
    }
    interface AppRoot {
    }
    interface AppShortlist {
    }
}
declare global {
    interface HTMLAppBeercardsElement extends Components.AppBeercards, HTMLStencilElement {
    }
    var HTMLAppBeercardsElement: {
        prototype: HTMLAppBeercardsElement;
        new (): HTMLAppBeercardsElement;
    };
    interface HTMLAppBeerinfoElement extends Components.AppBeerinfo, HTMLStencilElement {
    }
    var HTMLAppBeerinfoElement: {
        prototype: HTMLAppBeerinfoElement;
        new (): HTMLAppBeerinfoElement;
    };
    interface HTMLAppBeerlistElement extends Components.AppBeerlist, HTMLStencilElement {
    }
    var HTMLAppBeerlistElement: {
        prototype: HTMLAppBeerlistElement;
        new (): HTMLAppBeerlistElement;
    };
    interface HTMLAppContactosElement extends Components.AppContactos, HTMLStencilElement {
    }
    var HTMLAppContactosElement: {
        prototype: HTMLAppContactosElement;
        new (): HTMLAppContactosElement;
    };
    interface HTMLAppFooterElement extends Components.AppFooter, HTMLStencilElement {
    }
    var HTMLAppFooterElement: {
        prototype: HTMLAppFooterElement;
        new (): HTMLAppFooterElement;
    };
    interface HTMLAppFormElement extends Components.AppForm, HTMLStencilElement {
    }
    var HTMLAppFormElement: {
        prototype: HTMLAppFormElement;
        new (): HTMLAppFormElement;
    };
    interface HTMLAppHeaderElement extends Components.AppHeader, HTMLStencilElement {
    }
    var HTMLAppHeaderElement: {
        prototype: HTMLAppHeaderElement;
        new (): HTMLAppHeaderElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppShortlistElement extends Components.AppShortlist, HTMLStencilElement {
    }
    var HTMLAppShortlistElement: {
        prototype: HTMLAppShortlistElement;
        new (): HTMLAppShortlistElement;
    };
    interface HTMLElementTagNameMap {
        "app-beercards": HTMLAppBeercardsElement;
        "app-beerinfo": HTMLAppBeerinfoElement;
        "app-beerlist": HTMLAppBeerlistElement;
        "app-contactos": HTMLAppContactosElement;
        "app-footer": HTMLAppFooterElement;
        "app-form": HTMLAppFormElement;
        "app-header": HTMLAppHeaderElement;
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "app-shortlist": HTMLAppShortlistElement;
    }
}
declare namespace LocalJSX {
    interface AppBeercards {
        "changeFormValue"?: Function;
        "listaBeer"?: Cerveza[];
        "onChecker"?: (event: CustomEvent<number>) => void;
    }
    interface AppBeerinfo {
        "open"?: boolean;
        "transparent"?: boolean;
    }
    interface AppBeerlist {
        "beerlist"?: Cerveza[];
    }
    interface AppContactos {
    }
    interface AppFooter {
    }
    interface AppForm {
    }
    interface AppHeader {
    }
    interface AppHome {
    }
    interface AppProfile {
        "match"?: MatchResults;
    }
    interface AppRoot {
    }
    interface AppShortlist {
    }
    interface IntrinsicElements {
        "app-beercards": AppBeercards;
        "app-beerinfo": AppBeerinfo;
        "app-beerlist": AppBeerlist;
        "app-contactos": AppContactos;
        "app-footer": AppFooter;
        "app-form": AppForm;
        "app-header": AppHeader;
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "app-shortlist": AppShortlist;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-beercards": LocalJSX.AppBeercards & JSXBase.HTMLAttributes<HTMLAppBeercardsElement>;
            "app-beerinfo": LocalJSX.AppBeerinfo & JSXBase.HTMLAttributes<HTMLAppBeerinfoElement>;
            "app-beerlist": LocalJSX.AppBeerlist & JSXBase.HTMLAttributes<HTMLAppBeerlistElement>;
            "app-contactos": LocalJSX.AppContactos & JSXBase.HTMLAttributes<HTMLAppContactosElement>;
            "app-footer": LocalJSX.AppFooter & JSXBase.HTMLAttributes<HTMLAppFooterElement>;
            "app-form": LocalJSX.AppForm & JSXBase.HTMLAttributes<HTMLAppFormElement>;
            "app-header": LocalJSX.AppHeader & JSXBase.HTMLAttributes<HTMLAppHeaderElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-shortlist": LocalJSX.AppShortlist & JSXBase.HTMLAttributes<HTMLAppShortlistElement>;
        }
    }
}