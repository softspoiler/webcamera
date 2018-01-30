import { Component } from '@angular/core';
import { WebCamComponent } from 'ack-angular-webcam';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  preview;
  public webcam: WebCamComponent;
  public webcamOptions: any = {
    audio: false,
    video: false,
    width: 300,
    height: 300,
    cameraType:'back'
  }
  
  onCamSuccess(e) {
    console.log('Success', e);
  }
  onCamError(e) {
    console.log('Error', e);
  }

  generateBase64() {
    this.webcam.getBase64()
      .then((base) => {
        this.preview = base
      })
  }
}
