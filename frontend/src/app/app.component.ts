import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { animations, beamzPositions, ccControls, colors, washezPositions } from '../../../data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
    readonly animations = animations;
    readonly ccControls = ccControls;
    readonly colors = colors;
    readonly washezPositions = washezPositions;
    readonly beamzPositions = beamzPositions;

    readonly noteOn = 0x90;
    readonly noteOff = 0x80;
    readonly ccOn = 0xb0;

    midiDevicesControl = new FormControl<WebMidi.MIDIOutput[]>([]);

    midiNoteStatusMap: Record<number, Record<number, boolean>> = { 1: {}, 2: {} };
    midiOutputDevices: WebMidi.MIDIOutput[] = [];
    title = 'frontend';

    ngOnInit(): void {
        window.navigator.requestMIDIAccess().then((access) => {
            this.midiOutputDevices = Array.from(access.outputs.values());

            access.onstatechange = (e) => {
                // Print information about the (dis)connected MIDI controller
                console.log(e.port.name, e.port.manufacturer, e.port.state);
            };
        });
    }

    toggleMidi(channel: number, noteNumber: number) {
        (this.midiDevicesControl.value ?? []).forEach((midiOutputDevice) => {
            midiOutputDevice.send([
                (this.midiNoteStatusMap[channel][noteNumber] ? this.noteOff : this.noteOn) + channel - 1,
                noteNumber,
                0x7f,
            ]);
        });

        this.midiNoteStatusMap[channel][noteNumber] = Boolean(!this.midiNoteStatusMap[channel][noteNumber]);
    }

    changeCCValue(channel: number, cc: number, event: Event) {
        if (event.target && event.target instanceof HTMLInputElement) {
            const value = Math.round((parseInt(event.target.value, 10) / 100) * 127);
            (this.midiDevicesControl.value ?? []).forEach((midiOutputDevice) => {
                midiOutputDevice.send([this.ccOn + channel - 1, cc, value]);
            });
        }
    }

    startShow() {
        (this.midiDevicesControl.value ?? []).forEach((midiOutputDevice) => {
            midiOutputDevice.send([0x90, 94, 0x7f]);
            midiOutputDevice.send([0x90, 94, 0x01], 100);
        });
        alert('show started!');
    }
}
