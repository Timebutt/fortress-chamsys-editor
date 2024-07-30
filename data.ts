export const colors: {
    label: string;
    channel: number;
    note: number;
    midiType: 'note-on' | 'note-off' | 'note-on-off' | 'cc';
    functionType: 'none' | 'pb-level' | 'cue-toggle' | 'exec-toggle';
}[] = [
    {
        label: 'COLOR - Blue',
        channel: 1,
        note: 60,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'COLOR - Red',
        channel: 1,
        note: 61,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'COLOR - Orange',
        channel: 1,
        note: 62,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'COLOR - White',
        channel: 1,
        note: 63,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'COLOR - Purple',
        channel: 1,
        note: 64,
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

export const washezPositions: {
    label: string;
    channel: number;
    note: number;
    midiType: 'note-on' | 'note-off' | 'note-on-off' | 'cc';
    functionType: 'none' | 'pb-level' | 'cue-toggle' | 'exec-toggle';
}[] = [
    {
        label: 'POSITION - All Up',
        channel: 1,
        note: 72,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'POSITION - Backwards Tilt',
        channel: 1,
        note: 73,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'POSITION - All Forward',
        channel: 1,
        note: 74,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'POSITION - Default Position',
        channel: 1,
        note: 75,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'POSITION - Center Down',
        channel: 1,
        note: 76,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'POSITION - Center Up',
        channel: 1,
        note: 77,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
];

export const beamzPositions: {
    label: string;
    channel: number;
    note: number;
    midiType: 'note-on' | 'note-off' | 'note-on-off' | 'cc';
    functionType: 'none' | 'pb-level' | 'cue-toggle' | 'exec-toggle';
}[] = [
    {
        label: 'Off-Center Left',
        channel: 2,
        note: 1,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'Off-Center Right',
        channel: 2,
        note: 2,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'Fan-Out',
        channel: 2,
        note: 3,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'Cross',
        channel: 2,
        note: 4,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'All Up',
        channel: 2,
        note: 5,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'Fan-Out Sideways',
        channel: 2,
        note: 6,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'Off-Center Left Back',
        channel: 2,
        note: 7,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'Off-Center Right Back',
        channel: 2,
        note: 8,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'All Forward',
        channel: 2,
        note: 9,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'All Left',
        channel: 2,
        note: 10,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'All Right',
        channel: 2,
        note: 11,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'Center Down',
        channel: 2,
        note: 12,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'Center Over',
        channel: 2,
        note: 13,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
];

export const animations: {
    label: string;
    channel: number;
    note: number;
    midiType: 'note-on' | 'note-off' | 'note-on-off' | 'cc';
    functionType: 'none' | 'pb-level' | 'cue-toggle' | 'exec-toggle';
}[] = [
    {
        label: 'ANIMATION - Figure of 8 Light',
        channel: 1,
        note: 97,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'ANIMATION - Figure of 8 Medium',
        channel: 1,
        note: 98,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'ANIMATION - Figure of 8 Hard',
        channel: 1,
        note: 99,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'ANIMATION - Figure of 8 Hard & Fast',
        channel: 1,
        note: 100,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'ANIMATION - Rise Lights',
        channel: 1,
        note: 101,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'ANIMATION - Wash Intensity Modulation',
        channel: 1,
        note: 102,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'ANIMATION - Move Up & Down',
        channel: 1,
        note: 103,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'ANIMATION - Washes Backbeat White Flash Sequence',
        channel: 1,
        note: 104,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'ANIMATION - Lissajous Movement',
        channel: 1,
        note: 106,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'ANIMATION - Fall Fast',
        note: 107,
        channel: 1,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
];

export const ccControls: {
    label: string;
    cc: number;
    channel: number;
    midiType: 'note-on' | 'note-off' | 'note-on-off' | 'cc';
    functionType: 'none' | 'pb-level' | 'cue-toggle' | 'exec-toggle';
}[] = [
    {
        label: 'PLAYBACK - Logo Intensity',
        cc: 1,
        channel: 1,
        midiType: 'cc',
        functionType: 'pb-level',
    },
    {
        label: 'PLAYBACK - Sunstripz Intensity',
        cc: 81,
        channel: 1,
        midiType: 'cc',
        functionType: 'pb-level',
    },
    {
        label: 'PLAYBACK - Washez Intensity',
        cc: 3,
        channel: 1,
        midiType: 'cc',
        functionType: 'pb-level',
    },
    {
        label: 'PLAYBACK - Strobez Intensity',
        cc: 4,
        channel: 1,
        midiType: 'cc',
        functionType: 'pb-level',
    },
    {
        label: 'PLAYBACK - Strobez Speed',
        cc: 5,
        channel: 1,
        midiType: 'cc',
        functionType: 'pb-level',
    },
    {
        label: 'PLAYBACK - Frontz',
        cc: 6,
        channel: 1,
        midiType: 'cc',
        functionType: 'pb-level',
    },
    {
        label: 'PLAYBACK - Blinderz',
        cc: 7,
        channel: 1,
        midiType: 'cc',
        functionType: 'pb-level',
    },
    {
        label: 'PLAYBACK - Beamz Intensity',
        channel: 2,
        cc: 1,
        midiType: 'cc',
        functionType: 'pb-level',
    },
    {
        label: 'PLAYBACK - Beam 1 Intensity',
        channel: 2,
        cc: 3,
        midiType: 'cc',
        functionType: 'pb-level',
    },
    {
        label: 'PLAYBACK - Beam 2 Intensity',
        channel: 2,
        cc: 4,
        midiType: 'cc',
        functionType: 'pb-level',
    },
    {
        label: 'PLAYBACK - Beam 3 Intensity',
        channel: 2,
        cc: 5,
        midiType: 'cc',
        functionType: 'pb-level',
    },
    {
        label: 'PLAYBACK - Beam 4 Intensity',
        channel: 2,
        cc: 6,
        midiType: 'cc',
        functionType: 'pb-level',
    },
    {
        label: 'PLAYBACK - Beam 5 Intensity',
        channel: 2,
        cc: 7,
        midiType: 'cc',
        functionType: 'pb-level',
    },
    {
        label: 'PLAYBACK - Beam 6 Intensity',
        channel: 2,
        cc: 8,
        midiType: 'cc',
        functionType: 'pb-level',
    },
    {
        label: 'PLAYBACK - Beam 7 Intensity',
        channel: 2,
        cc: 9,
        midiType: 'cc',
        functionType: 'pb-level',
    },
    {
        label: 'PLAYBACK - Beam 8 Intensity',
        channel: 2,
        cc: 10,
        midiType: 'cc',
        functionType: 'pb-level',
    },
    {
        label: 'PLAYBACK - Mini Deckerz',
        cc: 1,
        channel: 3,
        midiType: 'cc',
        functionType: 'pb-level',
    },
];
