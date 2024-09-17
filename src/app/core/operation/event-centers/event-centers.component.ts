import { Component } from '@angular/core';

@Component({
  selector: 'app-event-centers',
  templateUrl: './event-centers.component.html',
  styleUrls: ['./event-centers.component.scss'],
})
export class EventCentersComponent {
  eventCenters = [
    {
      name: 'Krychowiak Hall',
      location: 'Lagos Island, Foresight, 7 Pike Street',
      price: '$95',
      info: 'With personalized recommendations, real-time updates, and an intuitive interface, Event Master makes it easy to stay connected and engaged with your favorite.',
      imageUrl: 'https://via.placeholder.com/400x200.png?text=Event+Center+1',
    },
    {
      name: 'Mirran Hall',
      location: 'Lagos Island, Foresight, 7 Pike Street',
      price: '$95',
      info: 'With personalized recommendations, real-time updates, and an intuitive interface, Event Master makes it easreal-time updates, and an intuitive interface, Event Master makes it easyreal-time updates, and an intuitive interface, Event Master makes it easyy to stay connected and engaged with your favorite.',
      imageUrl: 'https://via.placeholder.com/400x200.png?text=Event+Center+1',
    },
    {
      name: 'Shara Hall',
      location: 'Lagos Island, Foresight, 7 Pike Street',
      price: '$95',
      info: 'With personalized recommendations, real-time updates, and an intuitive interface, Event Master makes it easreal-time updates, and an intuitive interface, Event Master makes it easyreal-time updates, and an intuitive interface, Event Master makes it easyy to stay connected and engaged with your favorite.',
      imageUrl: 'https://via.placeholder.com/400x200.png?text=Event+Center+1',
    },
  ];
}
