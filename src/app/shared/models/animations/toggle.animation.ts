import { animate, AnimationTriggerMetadata, style, transition, trigger } from "@angular/animations";

export const onOpen: AnimationTriggerMetadata = trigger(
    'onOpen',
    [
      transition(
        ':enter',
        [
          style({ transform:'scale(1.2)', opacity:0}),
          animate('0.2s ease-out',
            style({ transform:'scale(1)', opacity:1}))
        ]
      ),
      transition(
        ':leave',
        [
          style({ transform:'scale(1)', opacity:1}),
          animate('0.2s ease-out',
            style({ transform:'scale(0.8)', opacity:0}))
        ]
      ),
    ]
  )