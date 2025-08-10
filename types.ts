export type Place = "1ST" | "2ND" | "3RD" | null | string;
export type PlaceKey = "1ST" | "2ND" | "3RD";

export type message = {
  id: string;
  user: {
    username: string;
    place?: Place;
    isMod?: boolean;
    isStreamer?: boolean;
  };
  source: "TW" | "YT" | "SYSTEM";
  message: string;
  timestamp: number;
  extra?: any
};

export type addMessageType = {
  user: {
    username: string;
    isMod: boolean;
    isStreamer: boolean;
  };
  source: "TW" | "YT" | "SYSTEM";
  message: string | null;
  extra?: any
};

export interface ServerToClientEvents {
  streamMessage: (msg: message) => void;
  streamMessages: (msg: message[]) => void;
}

export interface ClientToServerEvents {
  message: (msg: string) => void;
  sync: () => void;
  addMessage: (msg: addMessageType) => void;
  deleteMessage: (id: string) => void;
}

export interface EmojiYT {
  emoji_id: string;
  shortcuts: string[];
  search_terms: string[];
  image: Thumbnail[];
  is_custom: boolean;
}

export interface EmojiRun {
  text: string;
  emoji: EmojiYT;
}

export interface TextRun  {
  text: string;
  text_color?: number;
  bold: boolean;
  bracket: boolean;
  dark_mode_text_color?: number;
  deemphasize: boolean;
  italics: boolean;
  strikethrough: boolean;
  error_underline: boolean;
  underline: boolean;
  font_face?: 'FONT_FACE_UNKNOWN' | 'FONT_FACE_YT_SANS_MEDIUM' | 'FONT_FACE_ROBOTO_MEDIUM' | 'FONT_FACE_YOUTUBE_SANS_LIGHT' | 'FONT_FACE_YOUTUBE_SANS_REGULAR' | 'FONT_FACE_YOUTUBE_SANS_MEDIUM' | 'FONT_FACE_YOUTUBE_SANS_SEMIBOLD' | 'FONT_FACE_YOUTUBE_SANS_BOLD' | 'FONT_FACE_YOUTUBE_SANS_EXTRABOLD' | 'FONT_FACE_YOUTUBE_SANS_BLACK' | 'FONT_FACE_YT_SANS_BOLD' | 'FONT_FACE_ROBOTO_REGULAR';
  attachment: any;
}


export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}


export interface CheermoteTier {
    min_bits: number;
    id: string;
    color: string;
    images: {
        static: {
            dark: Record<string, string>;
            light: Record<string, string>;
        };
        animated: {
            dark: Record<string, string>;
            light: Record<string, string>;
        };
    };
}

export interface Cheermote {
    prefix: string;
    tiers: CheermoteTier[];
}