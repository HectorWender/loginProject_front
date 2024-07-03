import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  rightPanelActive = false;
  @ViewChild('container', { static: false }) container: ElementRef | undefined;

  handleEntrarClick() {
    if (this.container)
      this.container.nativeElement.classList.toggle('right-panel-active');
  }

  handleCadastrarClick() {
    if (this.container)
      this.container.nativeElement.classList.toggle('right-panel-active');
  }

  handleEntrarSubmit(event: Event) {
    alert("Entrou")
  }

  handleCadastrarSubmit(event: Event) {
    alert('Cadastrou');
  }
}
