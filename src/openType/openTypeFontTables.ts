/**
 * OpenType font table definitions.
 */
export interface OpenTypeFontTables {
    /**
     * The Glyph Substitution (GSUB) table provides data for substition of glyphs for appropriate rendering of scripts,
     * such as cursively-connecting forms in Arabic script, or for advanced typographic effects, such as ligatures.
     */
    gsub: any;

    /**
     * This table defines the mapping of character codes to the glyph index values used in the font.
     * It may contain more than one subtable, in order to support more than one character encoding scheme.
     */
    cmap: any;
}
