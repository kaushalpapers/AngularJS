import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-manual-change-detection',
  templateUrl: './manual-change-detection.component.html',
  styleUrls: ['./manual-change-detection.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManualChangeDetectionComponent implements OnInit, AfterViewInit {
  somevalue: string;

  constructor(private cd: ChangeDetectorRef, private _ngZone: NgZone) { }

  ngOnInit() {

    this.somevalue = 'someval';
  }

  ngAfterViewInit() {
    $('#btn').click(() => {
      // $('#txtSomeVal').val('OtherVal');
      // $('#txtSomeVal').trigger('change');
      // const customEvent = document.createEvent('Event');
      // customEvent.initEvent('change', true, true);
      // $('#txtSomeVal')[0].dispatchEvent(customEvent);

      this.somevalue = 'OtherVal';
      this.cd.detectChanges();

      // this._ngZone.runOutsideAngular(() => {
      //   // reenter the Angular zone and display done
      //   this._ngZone.run(() => {
      //     this.somevalue = 'sdf';
      //     // $('#txtSomeVal').val('OtherVal');
      //     // setTimeout(() => {
      //     //   $('#txtSomeVal').trigger('change');
      //     //   this.cd.markForCheck();
      //     //   this.cd.detectChanges();
      //     //   console.log('Change applied..');
      //     // }, 1000);
      //     console.log('Outside Done!');
      //   });
      // });
    });
  }
}
