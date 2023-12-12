import Component from '@glimmer/component';
import { ref } from 'ember-ref-bucket';
import { action } from '@ember/object';

export default class MyInput extends Component {
  @ref('inputElement') inputElement;

  @action focusInput() {
    this.inputElement.focus();
  }
}
