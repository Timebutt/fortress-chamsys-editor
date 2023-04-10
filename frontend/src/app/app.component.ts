import { Component, OnInit } from '@angular/core';
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

    midiNoteStatusMap: Record<number, boolean> = {};
    currentMidiDevice: WebMidi.MIDIOutput | undefined;
    midiOutputDevices: WebMidi.MIDIOutput[] = [];
    title = 'frontend';

    ngOnInit(): void {
        window.navigator.requestMIDIAccess().then((access) => {
            this.midiOutputDevices = Array.from(access.outputs.values());

            if (this.midiOutputDevices.length > 0) {
                this.currentMidiDevice = this.midiOutputDevices[0];
            }

            console.log(this.currentMidiDevice);

            access.onstatechange = (e) => {
                // Print information about the (dis)connected MIDI controller
                console.log(e.port.name, e.port.manufacturer, e.port.state);
            };
        });
    }

    toggleMidi(noteNumber: number) {
        if (!this.currentMidiDevice) {
            return;
        }

        console.log();

        this.currentMidiDevice.send([this.midiNoteStatusMap[noteNumber] ? 0x80 : 0x90, noteNumber, 0x7f]);
        this.midiNoteStatusMap[noteNumber] = Boolean(!this.midiNoteStatusMap[noteNumber]);
    }

    changeCCValue(channel: number, event: Event) {
        if (event.target && event.target instanceof HTMLInputElement) {
            if (!this.currentMidiDevice) {
                return;
            }

            const value = parseInt(event.target.value, 10);
            this.currentMidiDevice.send([0xb0, channel, value]);
        }
    }

    changeMidiDevice(event: Event): void {
        if (event.target && event.target instanceof HTMLSelectElement && typeof event.target.value) {
            const id = event.target.value;
            this.currentMidiDevice = this.midiOutputDevices.find((device) => device.id === id);
        }
    }
}
