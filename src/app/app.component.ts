import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  rightPanelActive: boolean = false;
  formE: FormGroup;

  @ViewChild('container', { static: false }) container: ElementRef | undefined;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formE = this.formBuilder.group(this.populaFormEntrar());
  }

  handleEntrarClick() {
    if (this.container)
      this.container.nativeElement.classList.toggle('right-panel-active');
  }

  handleCadastrarClick() {
    if (this.container)
      this.container.nativeElement.classList.toggle('right-panel-active');
  }

  handleEntrarSubmit(event: Event) {
    alert('Entrou');
  }

  handleCadastrarSubmit(event: Event) {
    alert('Cadastrou');
  }

  private populaFormEntrar() {
    return {
      email: null,
      senha: null,
    };
  }

  private populaFormCadastrar() {
    return {
      user: null,
      email: null,
      senha: null,
      confirmSenha: null,
    };
  }
}
