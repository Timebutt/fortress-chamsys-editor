import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { animations, ccControls, colors, positions } from '../../../data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
    readonly animations = animations;
    readonly ccControls = ccControls;
    readonly colors = colors;
    readonly positions = positions;

    midiDevicesControl = new FormControl<WebMidi.MIDIOutput[]>([]);

    midiNoteStatusMap: Record<number, boolean> = {};
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

    toggleMidi(noteNumber: number) {
        (this.midiDevicesControl.value ?? []).forEach((midiOutputDevice) => {
            midiOutputDevice.send([this.midiNoteStatusMap[noteNumber] ? 0x80 : 0x90, noteNumber, 0x7f]);
        });

        this.midiNoteStatusMap[noteNumber] = Boolean(!this.midiNoteStatusMap[noteNumber]);
    }

    changeCCValue(channel: number, event: Event) {
        if (event.target && event.target instanceof HTMLInputElement) {
            const value = Math.round((parseInt(event.target.value, 10) / 100) * 127);
            (this.midiDevicesControl.value ?? []).forEach((midiOutputDevice) => {
                midiOutputDevice.send([0xb0, channel, value]);
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
