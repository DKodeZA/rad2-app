import { trigger, style, animate, transition } from '@angular/animations';

export const inOutAnimation = trigger('inOutAnimation', [
    transition(
      ':enter', [
        style({ opacity: 0, height: 0 }),
        animate('0.2s ease-in-out', style({ opacity: 1, height: '!' }))
      ]
    ),
    transition(
      ':leave', [
        style({ opacity: 1, height: '!' }),
        animate('0.2s ease-in-out', style({ opacity: 0, height: 0 }))
      ]
    )
  ]
);
