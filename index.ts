import { readFileSync } from 'fs';
import { animations, ccControls, colors, positions } from './data';

// Code below is provisioned to at some point automatically add our information to an existing Chamsys Show File
const showFile = readFileSync('./showfile.shw', 'utf8');
const automationResults = showFile.match(/D,[^;]*/gm);

const automationEntries = Array.isArray(automationResults)
    ? automationResults.map((result) => result.replace(/(\r\n|\n|\r)/gm, '').split(','))
    : [];

// Starting index (check if there already is automation!)
let currentIndex = 10;

[...colors, ...positions, ...animations, ...ccControls].forEach((entry) => {
    const output = [
        'D',
        formatIndex(currentIndex),
        '0002',
        formatEnabled(true),
        formatMidiType(entry.midiType),
        formatChannel(entry.channel),
        '00000000',
        '00000000',
        '""',
        formatFunctionType(entry.functionType),
        '00000000',
        '00000000',
        '0.000000',
        '00000004',
        '00000000',
        formatLabel(entry.label),
        ';',
    ];

    console.log(output.join(','));
    currentIndex++;
});

function formatIndex(index: number) {
    return index.toString(16).padStart(4, '0');
}

function formatEnabled(enabled: boolean) {
    return (enabled ? 0 : 1).toString(16).padStart(8, '0');
}

function formatMidiType(type: 'note-on' | 'note-off' | 'note-on-off' | 'cc') {
    switch (type) {
        case 'note-on':
            return (0).toString(16).padStart(4, '0');
        case 'note-off':
            return (1).toString(16).padStart(4, '0');
        case 'note-on-off':
            return (2).toString(16).padStart(4, '0');
        case 'cc':
            return (3).toString(16).padStart(4, '0');
    }
}

function formatChannel(channel: number) {
    return channel.toString(16).padStart(8, '0');
}

function formatFunctionType(type: 'none' | 'pb-level' | 'cue-toggle' | 'exec-toggle') {
    switch (type) {
        case 'pb-level':
            return (2).toString(16).padStart(8, '0');
        case 'cue-toggle':
            return (28).toString(16).padStart(8, '0');
        case 'exec-toggle':
            return (53).toString(16).padStart(8, '0');
        default:
            return (0).toString(16).padStart(8, '0');
    }
}

function formatLabel(label: string) {
    return `"FORTRESS - ${label}"`;
}
