import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  angularImg =
    'https://images.unsplash.com/photo-1539572465937-66ee6fa0eb7d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=768ddb9bbb7115ef914d2631120b52ac&auto=format&fit=crop&w=750&q=80';
  angularImg2 =
    'https://images.unsplash.com/photo-1539592071786-616fb62b6c27?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dc3b255ff2d14144624bd390865c8fc0&auto=format&fit=crop&w=750&q=80';
  angularImg3 =
    'https://images.unsplash.com/photo-1539603094258-e61b393cbd52?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=72d48ccd425134d86f1c5f82e0103e38&auto=format&fit=crop&w=750&q=80';
  angularImg4 =
    'https://images.unsplash.com/photo-1539547018184-e5b1ce85fb07?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b26fe90e4ab59d2d39bbe7a3d33a10dc&auto=format&fit=crop&w=751&q=80';
  angularImg5 =
    'https://images.unsplash.com/photo-1539550298564-8a06769aa728?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5a3cdac18faf595762d48ac529233dd3&auto=format&fit=crop&w=500&q=60';
  angularImg6 =
    'https://images.unsplash.com/photo-1539585173613-89e3967da7d5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=18ea6cc3988589adb75af4d8fe57d959&auto=format&fit=crop&w=735&q=80';
  angularImg7 =
    'https://images.unsplash.com/photo-1539585296982-aa5764274899?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c9df8c21376af8ea672914d8b6248824&auto=format&fit=crop&w=750&q=80';
  angularImg8 =
    'https://images.unsplash.com/photo-1539504110894-00db17f9aaff?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c488930885cd1cfa700db81097d693ce&auto=format&fit=crop&w=750&q=80';
  angularImg9 =
    'https://images.unsplash.com/photo-1539572142914-79f3e24036a5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4afc869b6a4ae943cc5b3c1c7e67ca&auto=format&fit=crop&w=750&q=80';

  btnStatus = false;

  showUp = () => {
    alert('alerted');
  };
  // CLASS BINDING
  someproperty = true;
  someproperty2 = true;

  addclasses = {
    extraClass: true,
    anotherClass: false
  };

  setClasses = () => {
    let classes = {
      extraClass: this.someproperty,
      anotherClass: this.someproperty2
    };
    return classes;
  };

  addstyles = {
    border: '4px dotted magenta'
  };
  setStyles = () => {
    let styles = {
      border: '4px dotted magenta'
    };
    return styles;
  };
  //
  somevalue = 'sometext';
}
