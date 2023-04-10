export const colors: {
    label: string;
    channel: number;
    midiType: 'note-on' | 'note-off' | 'note-on-off' | 'cc';
    functionType: 'none' | 'pb-level' | 'cue-toggle' | 'exec-toggle';
}[] = [
    {
        label: 'COLOR - Blue',
        channel: 60,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'COLOR - Red',
        channel: 61,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'COLOR - Orange',
        channel: 62,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'COLOR - White',
        channel: 63,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'COLOR - Purple',
        channel: 64,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    // Not used during the current show!
    // {
    //     label: 'COLOR - Nothing',
    //     channel: 65,
    //     midiType: 'note-on-off',
    //     functionType: 'cue-toggle',
    // },
    // {
    //     label: 'COLOR - Green',
    //     channel: 66,
    //     midiType: 'note-on-off',
    //     functionType: 'cue-toggle',
    // },
];

export const positions: {
    label: string;
    channel: number;
    midiType: 'note-on' | 'note-off' | 'note-on-off' | 'cc';
    functionType: 'none' | 'pb-level' | 'cue-toggle' | 'exec-toggle';
}[] = [
    {
        label: 'POSITION - All Up',
        channel: 72,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'POSITION - Backwards Tilt',
        channel: 73,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'POSITION - All Forward',
        channel: 74,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'POSITION - Default Position',
        channel: 75,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'POSITION - Center Down',
        channel: 76,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'POSITION - Center Up',
        channel: 77,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
];

export const animations: {
    label: string;
    channel: number;
    midiType: 'note-on' | 'note-off' | 'note-on-off' | 'cc';
    functionType: 'none' | 'pb-level' | 'cue-toggle' | 'exec-toggle';
}[] = [
    {
        label: 'ANIMATION - Figure of 8 Light',
        channel: 97,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'ANIMATION - Figure of 8 Medium',
        channel: 98,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'ANIMATION - Figure of 8 Hard',
        channel: 99,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'ANIMATION - Figure of 8 Hard & Fast',
        channel: 100,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'ANIMATION - Rise Lights',
        channel: 101,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'ANIMATION - Wash Intensity Modulation',
        channel: 102,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'ANIMATION - Move Up & Down',
        channel: 103,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'ANIMATION - Washes Backbeat White Flash Sequence',
        channel: 104,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'ANIMATION - Lissajous Movement',
        channel: 106,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'ANIMATION - Fall Fast',
        channel: 107,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
];

export const ccControls: {
    label: string;
    channel: number;
    midiType: 'note-on' | 'note-off' | 'note-on-off' | 'cc';
    functionType: 'none' | 'pb-level' | 'cue-toggle' | 'exec-toggle';
}[] = [
    {
        label: 'PLAYBACK - Logo Intensity',
        channel: 1,
        midiType: 'cc',
        functionType: 'pb-level',
    },
    {
        label: 'PLAYBACK - Sunstrips Intensity',
        channel: 3,
        midiType: 'cc',
        functionType: 'pb-level',
    },
    {
        label: 'PLAYBACK - Washes Intensity',
        channel: 4,
        midiType: 'cc',
        functionType: 'pb-level',
    },
    {
        label: 'PLAYBACK - Strobes Intensity',
        channel: 5,
        midiType: 'cc',
        functionType: 'pb-level',
    },
    {
        label: 'PLAYBACK - Strobes Speed',
        channel: 6,
        midiType: 'cc',
        functionType: 'pb-level',
    },
];
