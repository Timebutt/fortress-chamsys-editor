interface MidiCommand {
    label: string;
    channel: number;
    note: number;
    midiType: 'note-on' | 'note-off' | 'note-on-off' | 'cc';
    functionType: 'none' | 'pb-level' | 'cue-toggle' | 'exec-toggle';
}

export const colors = [
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
] satisfies MidiCommand[];

export const washezPositions = [
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
] satisfies MidiCommand[];

export const beamzPositions = [
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
] satisfies MidiCommand[];

export const washezStrobes = [
    {
        label: 'No Strobe',
        channel: 1,
        note: 84,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: '50%',
        channel: 1,
        note: 85,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: '75%',
        channel: 1,
        note: 86,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: '85%',
        channel: 1,
        note: 87,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: '85%',
        channel: 1,
        note: 88,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: '100%',
        channel: 1,
        note: 89,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
] satisfies MidiCommand[];

export const washezAnimations = [
    {
        label: 'Figure of 8 Light',
        channel: 1,
        note: 97,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'Figure of 8 Medium',
        channel: 1,
        note: 98,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'Figure of 8 Hard',
        channel: 1,
        note: 99,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'Figure of 8 Hard & Fast',
        channel: 1,
        note: 100,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'Rise Lights',
        channel: 1,
        note: 101,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'Wash Intensity Modulation',
        channel: 1,
        note: 102,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'Move Up & Down',
        channel: 1,
        note: 103,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'Washes Backbeat White Flash Sequence',
        channel: 1,
        note: 104,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'Lissajous Movement',
        channel: 1,
        note: 106,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'Fall Fast',
        note: 107,
        channel: 1,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
] satisfies MidiCommand[];

export const beamzAnimations = [
    {
        label: 'Lissajous Slow',
        channel: 2,
        note: 60,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'Lissajous Medium',
        channel: 2,
        note: 61,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'Rise',
        channel: 2,
        note: 62,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'Back and Forth',
        channel: 2,
        note: 63,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'Wide and Slow',
        channel: 2,
        note: 64,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'Wide and Fast',
        channel: 2,
        note: 65,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'Circle',
        channel: 2,
        note: 66,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
] satisfies MidiCommand[];

export const beamzStrobes = [
    {
        label: 'No Strobe',
        channel: 2,
        note: 108,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'Fast Strobe',
        channel: 2,
        note: 109,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'Medium Strobe',
        channel: 2,
        note: 110,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
] satisfies MidiCommand[];

export const beamzChases = [
    {
        label: 'Backbeat All',
        channel: 2,
        note: 36,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'Random Singles 1/4',
        channel: 2,
        note: 37,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'Random Singles 1/8',
        channel: 2,
        note: 38,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'Random Singles 1/16',
        channel: 2,
        note: 39,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'All 1/8',
        channel: 2,
        note: 40,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'Doublez with Fade-Out',
        channel: 2,
        note: 43,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: 'Crazy Chase',
        channel: 2,
        note: 47,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
] satisfies MidiCommand[];

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

export const bpms = [
    {
        label: '94bpm',
        channel: 1,
        note: 1,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: '120bpm',
        channel: 1,
        note: 2,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: '98bpm',
        channel: 1,
        note: 3,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: '135bpm',
        channel: 1,
        note: 4,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: '108bpm',
        channel: 1,
        note: 5,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: '124bpm',
        channel: 1,
        note: 6,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: '130bpm',
        channel: 1,
        note: 7,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: '113bpm',
        channel: 1,
        note: 8,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: '123bpm',
        channel: 1,
        note: 9,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: '134bpm',
        channel: 1,
        note: 10,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: '109bpm',
        channel: 1,
        note: 11,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: '118bpm',
        channel: 1,
        note: 12,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: '131bpm',
        channel: 1,
        note: 13,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
    {
        label: '144bpm',
        channel: 1,
        note: 14,
        midiType: 'note-on-off',
        functionType: 'cue-toggle',
    },
] satisfies MidiCommand[];
