import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export let burgerMenuLine1 = trigger('burgerMenuLine1', [
  state(
    'open',
    style({
      transform: 'rotate(45deg) translate(5px, 6px)',
    })
  ),
  transition('open <=> *', [animate('.25s')]),
]);

export let burgerMenuLine2 = trigger('burgerMenuLine2', [
  state(
    'open',
    style({
      transform: 'translateX(-30px)',
    })
  ),
  transition('open <=> *', [animate('.2s')]),
]);

export let burgerMenuLine3 = trigger('burgerMenuLine3', [
  state(
    'open',
    style({
      transform: 'rotate(-45deg) translate(5px,-5.5px)',
    })
  ),
  transition('open <=> *', [animate('.25s')]),
]);
